$(document).ready(function () {
  if ($(".phone-order").length > 0) {
    $(".phone-order").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "_",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".select2").length > 0) {
    $(".select2").select2();
  }

  if ($(".basket-list__more").length > 0) {
    $(".basket-list__more").on("click", function () {
      $(this).hide();
      $(".basket-list").addClass("opened");
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
        $(".fixed-top-order").addClass("opened");
      },
    });

    openModal("modal-order");
  }

  if ($(".fixed-top-order__close").length > 0) {
    $(".fixed-top-order__close").on("click", function () {
      $(this).parents(".fixed-top-order").hide();
    });
  }
});

function openModal(modal) {
  MicroModal.show(modal);

  setTimeout(() => {
    $(".modal__overlay").on("click", function (event) {
      if ($(".modal__overlay").has(event.target).length === 0) {
        closeModal(modal);
      }
    });
    $(".modal__close").on("click", function () {
      closeModal(modal);
    });
    $("body").addClass("modal-open");
  }, 150);
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".fixed-top-order").addClass("opened");
  }, 150);
}
