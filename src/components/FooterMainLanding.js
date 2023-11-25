import { useMemo } from "react";

const FooterMainLanding = ({
  luminae,
  prop,
  store,
  registerYourEmailNotToMis,
  enterYourEmail,
  iconsend,
  company,
  aboutUs,
  ourStore,
  contactUs,
  careerOpportunities,
  sellingPrograms,
  advertise,
  cooperationOpportunities,
  howToBuy,
  makingPayments,
  deliveryOptions,
  buyerProtection,
  newUserGuide,
  help,
  contactsUs,
  fAQ,
  privacyPolicy,
  image112,
  image113,
  image1141,
  english,
  iconArrow,
  forsterRoadCityOfMonash,
  copyright,
  showCompany,
  showDeliveryOptions,
  showFooterpaymentMethods,
  showImage113Icon,
  image114,
  showLinedevider,
  footerMainLandingWidth,
  footerMainLandingPosition,
  footerMainLandingTop,
  footerMainLandingLeft,
  footerMainLandingHeight,
  luminaeStoreLeft,
  luminaeStoreTextAlign,
  luminaeStoreColor,
  luminaeColor,
  luminaeAlignSelf,
  luminaeDisplay,
  luminaeFlexDirection,
  luminaeFlexWrap,
  luminaeAlignItems,
  luminaeJustifyContent,
  spanColor,
  spanFlex,
  spanPosition,
  spanFontSize,
  spanLineHeight,
  spanFontFamily,
  spanTextAlign,
  spanDisplay,
  storeColor,
  storeBorderRadius,
  storeBackgroundColor,
  storeWidth,
  storeDisplay,
  storeFlexDirection,
  storeAlignItems,
  storeJustifyContent,
  storePadding,
  storeBoxSizing,
  storeGap,
  luminaeSubscriptionAlignSelf,
  luminaeSubscriptionDisplay,
  luminaeSubscriptionFlexDirection,
  luminaeSubscriptionFlexWrap,
  luminaeSubscriptionAlignItems,
  luminaeSubscriptionJustifyContent,
  luminaeSubscriptionPosition,
  luminaeSubscriptionFontSize,
  luminaeSubscriptionLineHeight,
  luminaeSubscriptionFontFamily,
  luminaeSubscriptionColor,
  luminaeSubscriptionTextAlign,
  registerYourEmailFlex,
  registerYourEmailFontSize,
  registerYourEmailLineHeight,
  registerYourEmailFontFamily,
  registerYourEmailColor,
  registerYourEmailTextAlign,
  registerYourEmailDisplay,
  registerYourEmailWidth,
  registerYourEmailHeight,
  registerYourEmailOverflow,
  registerYourEmailFlexShrink,
  textBoxemailBorderRadius,
  textBoxemailBackgroundColor,
  textBoxemailWidth,
  textBoxemailFlexDirection,
  textBoxemailAlignItems,
  textBoxemailPadding,
  textBoxemailBoxSizing,
  textBoxemailGap,
  textBoxemailAlignSelf,
  textBoxemailZIndex,
  textBoxemailMarginTop,
  enterYourEmailPosition,
  enterYourEmailFontSize,
  enterYourEmailLineHeight,
  enterYourEmailFontFamily,
  enterYourEmailColor,
  enterYourEmailTextAlign,
  enterYourEmailDisplay,
  enterYourEmailAlignSelf,
  enterYourEmailBackgroundColor,
  enterYourEmailFlexDirection,
  enterYourEmailFlexWrap,
  enterYourEmailAlignItems,
  enterYourEmailJustifyContent,
  enterYourEmailPadding,
  enterYourEmailBoxSizing,
  iconsendPosition,
  iconsendWidth,
  iconsendHeight,
  iconsendOverflow,
  iconsendFlexShrink,
  iconsendFlex,
  iconsendDisplay,
  iconsendFlexDirection,
  iconsendFlexWrap,
  iconsendAlignItems,
  iconsendJustifyContent,
  iconsendGap,
  footerAlignSelf,
  footerJustifyContent,
  footerZIndex,
  footerMarginTop,
  footerWidth,
  footerGap,
  footerBackgroundColor,
  footerDisplay,
  footerFlexDirection,
  footerFlexWrap,
  footerAlignItems,
  footerJustifyContent1,
  footerPadding,
  footerBoxSizing,
  footerPosition,
  footerFontSize,
  footerLineHeight,
  footerFontFamily,
  footerColor,
  footerTextAlign,
  footerFontWeight,
  frmfooterFlex,
  frmfooterFlexDirection,
  frmfooterFlexWrap,
  frmfooterJustifyContent,
  frmfooterGap,
  frmfooterAlignSelf,
  companyWidth,
  companyFlexDirection,
  companyAlignItems,
  companyJustifyContent,
  companyGap,
  companyPosition,
  companyFontSize,
  companyLineHeight,
  companyFontFamily,
  companyColor,
  companyTextAlign,
  companyAlignSelf,
  companyColor1,
  companyAlignItems1,
  companyWidth1,
  companyFontWeight,
  companydetailsAlignSelf,
  companydetailsFlexDirection,
  companydetailsAlignItems,
  companydetailsJustifyContent,
  companydetailsGap,
  companydetailsPosition,
  companydetailsFontSize,
  companydetailsLineHeight,
  companydetailsFontFamily,
  companydetailsColor,
  companydetailsTextAlign,
  companydetailsWidth,
  aboutUsPosition,
  aboutUsFontSize,
  aboutUsLineHeight,
  aboutUsFontFamily,
  aboutUsColor,
  aboutUsTextAlign,
  aboutUsAlignItems,
  aboutUsWidth,
  aboutUsFlexDirection,
  aboutUsJustifyContent,
  aboutUsGap,
  ourStoreColor,
  ourStoreWidth,
  ourStoreFontWeight,
  contactUsPosition,
  contactUsFontSize,
  contactUsLineHeight,
  contactUsFontFamily,
  contactUsColor,
  contactUsTextAlign,
  contactUsAlignItems,
  contactUsWidth,
  contactUsAlignSelf,
  contactUsFlexDirection,
  contactUsJustifyContent,
  contactUsGap,
  careerOpportunitiesWidth,
  careerOpportunitiesDisplay,
  careerOpportunitiesFlexDirection,
  careerOpportunitiesAlignItems,
  careerOpportunitiesJustifyContent,
  careerOpportunitiesGap,
  careerOpportunitiesAlignSelf,
  careerOpportunitiesPosition,
  careerOpportunitiesFontSize,
  careerOpportunitiesLineHeight,
  careerOpportunitiesFontFamily,
  careerOpportunitiesColor,
  careerOpportunitiesTextAlign,
  careerOpportunitiesDisplay1,
  careerOpportunitiesColor1,
  careerOpportunitiesAlignItems1,
  careerOpportunitiesWidth1,
  careerOpportunitiesAlignSelf1,
  careerOpportunitiesFontWeight,
  careerOpportunitiesdetailDisplay,
  careerOpportunitiesdetailFlexDirection,
  careerOpportunitiesdetailAlignItems,
  careerOpportunitiesdetailJustifyContent,
  careerOpportunitiesdetailGap,
  careerOpportunitiesdetailPosition,
  careerOpportunitiesdetailFontSize,
  careerOpportunitiesdetailLineHeight,
  careerOpportunitiesdetailFontFamily,
  careerOpportunitiesdetailColor,
  careerOpportunitiesdetailTextAlign,
  sellingProgramsAlignSelf,
  sellingProgramsPosition,
  sellingProgramsFontSize,
  sellingProgramsLineHeight,
  sellingProgramsFontFamily,
  sellingProgramsColor,
  sellingProgramsTextAlign,
  sellingProgramsDisplay,
  sellingProgramsWidth,
  sellingProgramsFlexDirection,
  sellingProgramsAlignItems,
  sellingProgramsJustifyContent,
  sellingProgramsGap,
  advertiseColor,
  advertiseFontWeight,
  cooperationOpportunitiesPosition,
  cooperationOpportunitiesFontSize,
  cooperationOpportunitiesLineHeight,
  cooperationOpportunitiesFontFamily,
  cooperationOpportunitiesColor,
  cooperationOpportunitiesTextAlign,
  cooperationOpportunitiesDisplay,
  cooperationOpportunitiesFlexDirection,
  cooperationOpportunitiesAlignItems,
  cooperationOpportunitiesJustifyContent,
  cooperationOpportunitiesGap,
  howToBuyWidth,
  howToBuyFlexDirection,
  howToBuyAlignItems,
  howToBuyJustifyContent,
  howToBuyGap,
  howToBuyPosition,
  howToBuyFontSize,
  howToBuyLineHeight,
  howToBuyFontFamily,
  howToBuyColor,
  howToBuyTextAlign,
  howToBuyAlignSelf,
  howToBuyDisplay,
  howToBuyColor1,
  howToBuyAlignItems1,
  howToBuyWidth1,
  howToBuyFontWeight,
  howToBuydetailsAlignSelf,
  howToBuydetailsFlexDirection,
  howToBuydetailsAlignItems,
  howToBuydetailsJustifyContent,
  howToBuydetailsGap,
  howToBuydetailsPosition,
  howToBuydetailsFontSize,
  howToBuydetailsLineHeight,
  howToBuydetailsFontFamily,
  howToBuydetailsColor,
  howToBuydetailsTextAlign,
  howToBuydetailsWidth,
  deliveryOptionsPosition,
  deliveryOptionsFontSize,
  deliveryOptionsLineHeight,
  deliveryOptionsFontFamily,
  deliveryOptionsColor,
  deliveryOptionsTextAlign,
  deliveryOptionsAlignItems,
  deliveryOptionsWidth,
  deliveryOptionsFlexDirection,
  deliveryOptionsJustifyContent,
  deliveryOptionsGap,
  buyerProtectionColor,
  buyerProtectionWidth,
  buyerProtectionFontWeight,
  newUserGuidePosition,
  newUserGuideFontSize,
  newUserGuideLineHeight,
  newUserGuideFontFamily,
  newUserGuideColor,
  newUserGuideTextAlign,
  newUserGuideAlignItems,
  newUserGuideFlexDirection,
  newUserGuideJustifyContent,
  newUserGuideGap,
  howToBuyWidth2,
  howToBuyFlexDirection1,
  howToBuyAlignItems2,
  howToBuyJustifyContent1,
  howToBuyGap1,
  howToBuyPosition1,
  howToBuyFontSize1,
  howToBuyLineHeight1,
  howToBuyFontFamily1,
  howToBuyColor2,
  howToBuyTextAlign1,
  helpColor,
  helpFontWeight,
  helpdetailsWidth,
  helpdetailsFlexDirection,
  helpdetailsAlignItems,
  helpdetailsJustifyContent,
  helpdetailsGap,
  helpdetailsPosition,
  helpdetailsFontSize,
  helpdetailsLineHeight,
  helpdetailsFontFamily,
  helpdetailsColor,
  helpdetailsTextAlign,
  contactsUsPosition,
  contactsUsFontSize,
  contactsUsLineHeight,
  contactsUsFontFamily,
  contactsUsColor,
  contactsUsTextAlign,
  contactsUsAlignItems,
  contactsUsWidth,
  contactsUsAlignSelf,
  contactsUsBackgroundColor,
  contactsUsFlexDirection,
  contactsUsJustifyContent,
  contactsUsPadding,
  contactsUsBoxSizing,
  contactsUsGap,
  fAQPosition,
  fAQFontSize,
  fAQLineHeight,
  fAQFontFamily,
  fAQColor,
  fAQTextAlign,
  fAQWidth,
  fAQAlignSelf,
  fAQFlexDirection,
  fAQFlexWrap,
  fAQJustifyContent,
  fAQGap,
  privacyPolicyFontSize,
  privacyPolicyLineHeight,
  privacyPolicyFontFamily,
  privacyPolicyColor,
  privacyPolicyTextAlign,
  privacyPolicyDisplay,
  privacyPolicyAlignItems,
  privacyPolicyWidth,
  privacyPolicyFlex,
  privacyPolicyHeight,
  footerButtonAlignSelf,
  footerButtonBackgroundColor,
  footerButtonFlexDirection,
  footerButtonAlignItems,
  footerButtonJustifyContent,
  footerButtonPadding,
  footerButtonBoxSizing,
  footerButtonGap,
  footerButtonPosition,
  footerButtonTop,
  footerButtonLeft,
  footerButtonWidth,
  row1AlignSelf,
  row1FlexWrap,
  row1Gap,
  footerpaymentMethodsFlex,
  footerpaymentMethodsHeight,
  footerpaymentMethodsWidth,
  footerpaymentMethodsPosition,
  footerpaymentMethodsTop,
  footerpaymentMethodsLeft,
  footerpaymentMethodsWidth1,
  footerpaymentMethodsFlexDirection,
  footerpaymentMethodsAlignItems,
  footerpaymentMethodsJustifyContent,
  footerpaymentMethodsHeight1,
  footerpaymentMethodsDisplay,
  footerpaymentMethodsFlexDirection1,
  footerpaymentMethodsAlignItems1,
  footerpaymentMethodsJustifyContent1,
  footerpaymentMethodsGap,
  footerpaymentMethodsPosition1,
  footerpaymentMethodsTop1,
  footerpaymentMethodsLeft1,
  footerpaymentMethodsWidth2,
  footerpaymentMethodsHeight2,
  footerpaymentMethodsObjectFit,
  footerpaymentMethodsOpacity,
  footerpaymentMethodsMixBlendMode,
  logo1Width,
  logo1Height,
  image112Width,
  image112IconWidth,
  image112IconHeight,
  logo2Width,
  logo2Height,
  image113Width,
  image113IconWidth,
  image113IconHeight,
  logo3Position,
  logo3Width,
  logo3Height,
  logo3Display,
  logo3FlexDirection,
  logo3AlignItems,
  logo3JustifyContent,
  image114Position,
  image114Width,
  image114Height,
  image114FlexDirection,
  image114AlignItems,
  image114JustifyContent,
  image114Gap,
  image114IconPosition,
  image114IconTop,
  image114IconLeft,
  image114IconWidth,
  image114IconHeight,
  image114IconObjectFit,
  image114IconOpacity,
  image114IconMixBlendMode,
  image114IconFlex,
  image114IconFontSize,
  image114IconLineHeight,
  image114IconFontFamily,
  image114IconColor,
  image114IconTextAlign,
  image114IconDisplay,
  footerLanguageWidth,
  footerLanguageDisplay,
  footerLanguageFlexDirection,
  footerLanguageAlignItems,
  footerLanguageJustifyContent,
  footerLanguagePosition,
  footerLanguageHeight,
  footerLanguageWidth1,
  footerLanguageDisplay1,
  footerLanguageFlexDirection1,
  footerLanguageAlignItems1,
  footerLanguageJustifyContent1,
  footerLanguageGap,
  footerLanguageAlignSelf,
  footerLanguagePosition1,
  footerLanguageHeight1,
  englishFlex,
  englishPosition,
  englishFontSize,
  englishLineHeight,
  englishFontFamily,
  englishColor,
  englishTextAlign,
  englishDisplay,
  englishHeight,
  englishWidth,
  englishTop,
  englishRight,
  englishBottom,
  englishLeft,
  englishBackgroundColor,
  iconArrowPosition,
  iconArrowWidth,
  iconArrowHeight,
  iconArrowAlignSelf,
  iconArrowDisplay,
  iconArrowFlexDirection,
  iconArrowFlexWrap,
  iconArrowAlignItems,
  iconArrowJustifyContent,
  linedeviderAlignSelf,
  linedeviderPosition,
  linedeviderHeight,
  linedeviderFlex,
  linedeviderFlexDirection,
  linedeviderAlignItems,
  linedeviderJustifyContent,
  dividerPosition,
  dividerHeight,
  dividerWidth,
  dividerTop,
  dividerRight,
  dividerBottom,
  dividerLeft,
  dividerBackgroundColor,
  dividerFontSize,
  dividerLineHeight,
  dividerFontFamily,
  dividerColor,
  dividerTextAlign,
  dividerDisplay,
  row2AlignSelf,
  row2Height,
  row2Display,
  row2FlexDirection,
  row2FlexWrap,
  row2AlignItems,
  row2JustifyContent,
  row2Flex,
  row2Position,
  row2FontSize,
  row2LineHeight,
  row2FontFamily,
  row2Color,
  row2TextAlign,
  footeraddressFlex,
  footeraddressFlexDirection,
  footeraddressAlignItems,
  footeraddressJustifyContent,
  footeraddressWidth,
  footeraddressGap,
  forsterRoadCityFontSize,
  forsterRoadCityLineHeight,
  forsterRoadCityFontFamily,
  forsterRoadCityColor,
  forsterRoadCityTextAlign,
  forsterRoadCityDisplay,
  forsterRoadCityWidth,
  forsterRoadCityHeight,
  copyrightFlex,
  copyrightFontSize,
  copyrightLineHeight,
  copyrightFontFamily,
  copyrightColor,
  copyrightTextAlign,
  copyrightDisplay,
  copyrightWidth,
  copyrightHeight,
  copyrightOverflow,
  copyrightFlexShrink,
  footersocialMediaWidth,
  footersocialMediaDisplay,
  footersocialMediaFlexDirection,
  footersocialMediaAlignItems,
  footersocialMediaJustifyContent,
  footersocialMediaGap,
  footersocialMediaPosition,
  footersocialMediaHeight,
  footersocialMediaOverflow,
  footersocialMediaFlexShrink,
}) => {
  const footerMainLandingStyle = useMemo(() => {
    return {
      width: footerMainLandingWidth,
      position: footerMainLandingPosition,
      top: footerMainLandingTop,
      left: footerMainLandingLeft,
      height: footerMainLandingHeight,
    };
  }, [
    footerMainLandingWidth,
    footerMainLandingPosition,
    footerMainLandingTop,
    footerMainLandingLeft,
    footerMainLandingHeight,
  ]);

  const luminaeStoreStyle = useMemo(() => {
    return {
      left: luminaeStoreLeft,
      textAlign: luminaeStoreTextAlign,
      color: luminaeStoreColor,
    };
  }, [luminaeStoreLeft, luminaeStoreTextAlign, luminaeStoreColor]);

  const luminaeStyle = useMemo(() => {
    return {
      color: luminaeColor,
      alignSelf: luminaeAlignSelf,
      display: luminaeDisplay,
      flexDirection: luminaeFlexDirection,
      flexWrap: luminaeFlexWrap,
      alignItems: luminaeAlignItems,
      justifyContent: luminaeJustifyContent,
    };
  }, [
    luminaeColor,
    luminaeAlignSelf,
    luminaeDisplay,
    luminaeFlexDirection,
    luminaeFlexWrap,
    luminaeAlignItems,
    luminaeJustifyContent,
  ]);

  const spanStyle = useMemo(() => {
    return {
      color: spanColor,
      flex: spanFlex,
      position: spanPosition,
      fontSize: spanFontSize,
      lineHeight: spanLineHeight,
      fontFamily: spanFontFamily,
      textAlign: spanTextAlign,
      display: spanDisplay,
    };
  }, [
    spanColor,
    spanFlex,
    spanPosition,
    spanFontSize,
    spanLineHeight,
    spanFontFamily,
    spanTextAlign,
    spanDisplay,
  ]);

  const storeStyle = useMemo(() => {
    return {
      color: storeColor,
      borderRadius: storeBorderRadius,
      backgroundColor: storeBackgroundColor,
      width: storeWidth,
      display: storeDisplay,
      flexDirection: storeFlexDirection,
      alignItems: storeAlignItems,
      justifyContent: storeJustifyContent,
      padding: storePadding,
      boxSizing: storeBoxSizing,
      gap: storeGap,
    };
  }, [
    storeColor,
    storeBorderRadius,
    storeBackgroundColor,
    storeWidth,
    storeDisplay,
    storeFlexDirection,
    storeAlignItems,
    storeJustifyContent,
    storePadding,
    storeBoxSizing,
    storeGap,
  ]);

  const luminaeSubscriptionStyle = useMemo(() => {
    return {
      alignSelf: luminaeSubscriptionAlignSelf,
      display: luminaeSubscriptionDisplay,
      flexDirection: luminaeSubscriptionFlexDirection,
      flexWrap: luminaeSubscriptionFlexWrap,
      alignItems: luminaeSubscriptionAlignItems,
      justifyContent: luminaeSubscriptionJustifyContent,
      position: luminaeSubscriptionPosition,
      fontSize: luminaeSubscriptionFontSize,
      lineHeight: luminaeSubscriptionLineHeight,
      fontFamily: luminaeSubscriptionFontFamily,
      color: luminaeSubscriptionColor,
      textAlign: luminaeSubscriptionTextAlign,
    };
  }, [
    luminaeSubscriptionAlignSelf,
    luminaeSubscriptionDisplay,
    luminaeSubscriptionFlexDirection,
    luminaeSubscriptionFlexWrap,
    luminaeSubscriptionAlignItems,
    luminaeSubscriptionJustifyContent,
    luminaeSubscriptionPosition,
    luminaeSubscriptionFontSize,
    luminaeSubscriptionLineHeight,
    luminaeSubscriptionFontFamily,
    luminaeSubscriptionColor,
    luminaeSubscriptionTextAlign,
  ]);

  const registerYourEmailStyle = useMemo(() => {
    return {
      flex: registerYourEmailFlex,
      fontSize: registerYourEmailFontSize,
      lineHeight: registerYourEmailLineHeight,
      fontFamily: registerYourEmailFontFamily,
      color: registerYourEmailColor,
      textAlign: registerYourEmailTextAlign,
      display: registerYourEmailDisplay,
      width: registerYourEmailWidth,
      height: registerYourEmailHeight,
      overflow: registerYourEmailOverflow,
      flexShrink: registerYourEmailFlexShrink,
    };
  }, [
    registerYourEmailFlex,
    registerYourEmailFontSize,
    registerYourEmailLineHeight,
    registerYourEmailFontFamily,
    registerYourEmailColor,
    registerYourEmailTextAlign,
    registerYourEmailDisplay,
    registerYourEmailWidth,
    registerYourEmailHeight,
    registerYourEmailOverflow,
    registerYourEmailFlexShrink,
  ]);

  const textBoxemailStyle = useMemo(() => {
    return {
      borderRadius: textBoxemailBorderRadius,
      backgroundColor: textBoxemailBackgroundColor,
      width: textBoxemailWidth,
      flexDirection: textBoxemailFlexDirection,
      alignItems: textBoxemailAlignItems,
      padding: textBoxemailPadding,
      boxSizing: textBoxemailBoxSizing,
      gap: textBoxemailGap,
      alignSelf: textBoxemailAlignSelf,
      zIndex: textBoxemailZIndex,
      marginTop: textBoxemailMarginTop,
    };
  }, [
    textBoxemailBorderRadius,
    textBoxemailBackgroundColor,
    textBoxemailWidth,
    textBoxemailFlexDirection,
    textBoxemailAlignItems,
    textBoxemailPadding,
    textBoxemailBoxSizing,
    textBoxemailGap,
    textBoxemailAlignSelf,
    textBoxemailZIndex,
    textBoxemailMarginTop,
  ]);

  const enterYourEmailStyle = useMemo(() => {
    return {
      position: enterYourEmailPosition,
      fontSize: enterYourEmailFontSize,
      lineHeight: enterYourEmailLineHeight,
      fontFamily: enterYourEmailFontFamily,
      color: enterYourEmailColor,
      textAlign: enterYourEmailTextAlign,
      display: enterYourEmailDisplay,
      alignSelf: enterYourEmailAlignSelf,
      backgroundColor: enterYourEmailBackgroundColor,
      flexDirection: enterYourEmailFlexDirection,
      flexWrap: enterYourEmailFlexWrap,
      alignItems: enterYourEmailAlignItems,
      justifyContent: enterYourEmailJustifyContent,
      padding: enterYourEmailPadding,
      boxSizing: enterYourEmailBoxSizing,
    };
  }, [
    enterYourEmailPosition,
    enterYourEmailFontSize,
    enterYourEmailLineHeight,
    enterYourEmailFontFamily,
    enterYourEmailColor,
    enterYourEmailTextAlign,
    enterYourEmailDisplay,
    enterYourEmailAlignSelf,
    enterYourEmailBackgroundColor,
    enterYourEmailFlexDirection,
    enterYourEmailFlexWrap,
    enterYourEmailAlignItems,
    enterYourEmailJustifyContent,
    enterYourEmailPadding,
    enterYourEmailBoxSizing,
  ]);

  const iconsendStyle = useMemo(() => {
    return {
      position: iconsendPosition,
      width: iconsendWidth,
      height: iconsendHeight,
      overflow: iconsendOverflow,
      flexShrink: iconsendFlexShrink,
      flex: iconsendFlex,
      display: iconsendDisplay,
      flexDirection: iconsendFlexDirection,
      flexWrap: iconsendFlexWrap,
      alignItems: iconsendAlignItems,
      justifyContent: iconsendJustifyContent,
      gap: iconsendGap,
    };
  }, [
    iconsendPosition,
    iconsendWidth,
    iconsendHeight,
    iconsendOverflow,
    iconsendFlexShrink,
    iconsendFlex,
    iconsendDisplay,
    iconsendFlexDirection,
    iconsendFlexWrap,
    iconsendAlignItems,
    iconsendJustifyContent,
    iconsendGap,
  ]);

  const footerStyle = useMemo(() => {
    return {
      alignSelf: footerAlignSelf,
      justifyContent: footerJustifyContent,
      zIndex: footerZIndex,
      marginTop: footerMarginTop,
      width: footerWidth,
      gap: footerGap,
    };
  }, [
    footerAlignSelf,
    footerJustifyContent,
    footerZIndex,
    footerMarginTop,
    footerWidth,
    footerGap,
  ]);

  const footer1Style = useMemo(() => {
    return {
      backgroundColor: footerBackgroundColor,
      display: footerDisplay,
      flexDirection: footerFlexDirection,
      flexWrap: footerFlexWrap,
      alignItems: footerAlignItems,
      justifyContent: footerJustifyContent1,
      padding: footerPadding,
      boxSizing: footerBoxSizing,
      position: footerPosition,
      fontSize: footerFontSize,
      lineHeight: footerLineHeight,
      fontFamily: footerFontFamily,
      color: footerColor,
      textAlign: footerTextAlign,
      fontWeight: footerFontWeight,
    };
  }, [
    footerBackgroundColor,
    footerDisplay,
    footerFlexDirection,
    footerFlexWrap,
    footerAlignItems,
    footerJustifyContent1,
    footerPadding,
    footerBoxSizing,
    footerPosition,
    footerFontSize,
    footerLineHeight,
    footerFontFamily,
    footerColor,
    footerTextAlign,
    footerFontWeight,
  ]);

  const frmfooterStyle = useMemo(() => {
    return {
      flex: frmfooterFlex,
      flexDirection: frmfooterFlexDirection,
      flexWrap: frmfooterFlexWrap,
      justifyContent: frmfooterJustifyContent,
      gap: frmfooterGap,
      alignSelf: frmfooterAlignSelf,
    };
  }, [
    frmfooterFlex,
    frmfooterFlexDirection,
    frmfooterFlexWrap,
    frmfooterJustifyContent,
    frmfooterGap,
    frmfooterAlignSelf,
  ]);

  const companyStyle = useMemo(() => {
    return {
      width: companyWidth,
      flexDirection: companyFlexDirection,
      alignItems: companyAlignItems,
      justifyContent: companyJustifyContent,
      gap: companyGap,
      position: companyPosition,
      fontSize: companyFontSize,
      lineHeight: companyLineHeight,
      fontFamily: companyFontFamily,
      color: companyColor,
      textAlign: companyTextAlign,
    };
  }, [
    companyWidth,
    companyFlexDirection,
    companyAlignItems,
    companyJustifyContent,
    companyGap,
    companyPosition,
    companyFontSize,
    companyLineHeight,
    companyFontFamily,
    companyColor,
    companyTextAlign,
  ]);

  const company1Style = useMemo(() => {
    return {
      alignSelf: companyAlignSelf,
      color: companyColor1,
      alignItems: companyAlignItems1,
      width: companyWidth1,
      fontWeight: companyFontWeight,
    };
  }, [
    companyAlignSelf,
    companyColor1,
    companyAlignItems1,
    companyWidth1,
    companyFontWeight,
  ]);

  const companydetailsStyle = useMemo(() => {
    return {
      alignSelf: companydetailsAlignSelf,
      flexDirection: companydetailsFlexDirection,
      alignItems: companydetailsAlignItems,
      justifyContent: companydetailsJustifyContent,
      gap: companydetailsGap,
      position: companydetailsPosition,
      fontSize: companydetailsFontSize,
      lineHeight: companydetailsLineHeight,
      fontFamily: companydetailsFontFamily,
      color: companydetailsColor,
      textAlign: companydetailsTextAlign,
      width: companydetailsWidth,
    };
  }, [
    companydetailsAlignSelf,
    companydetailsFlexDirection,
    companydetailsAlignItems,
    companydetailsJustifyContent,
    companydetailsGap,
    companydetailsPosition,
    companydetailsFontSize,
    companydetailsLineHeight,
    companydetailsFontFamily,
    companydetailsColor,
    companydetailsTextAlign,
    companydetailsWidth,
  ]);

  const aboutUsStyle = useMemo(() => {
    return {
      position: aboutUsPosition,
      fontSize: aboutUsFontSize,
      lineHeight: aboutUsLineHeight,
      fontFamily: aboutUsFontFamily,
      color: aboutUsColor,
      textAlign: aboutUsTextAlign,
      alignItems: aboutUsAlignItems,
      width: aboutUsWidth,
      flexDirection: aboutUsFlexDirection,
      justifyContent: aboutUsJustifyContent,
      gap: aboutUsGap,
    };
  }, [
    aboutUsPosition,
    aboutUsFontSize,
    aboutUsLineHeight,
    aboutUsFontFamily,
    aboutUsColor,
    aboutUsTextAlign,
    aboutUsAlignItems,
    aboutUsWidth,
    aboutUsFlexDirection,
    aboutUsJustifyContent,
    aboutUsGap,
  ]);

  const ourStoreStyle = useMemo(() => {
    return {
      color: ourStoreColor,
      width: ourStoreWidth,
      fontWeight: ourStoreFontWeight,
    };
  }, [ourStoreColor, ourStoreWidth, ourStoreFontWeight]);

  const contactUsStyle = useMemo(() => {
    return {
      position: contactUsPosition,
      fontSize: contactUsFontSize,
      lineHeight: contactUsLineHeight,
      fontFamily: contactUsFontFamily,
      color: contactUsColor,
      textAlign: contactUsTextAlign,
      alignItems: contactUsAlignItems,
      width: contactUsWidth,
      alignSelf: contactUsAlignSelf,
      flexDirection: contactUsFlexDirection,
      justifyContent: contactUsJustifyContent,
      gap: contactUsGap,
    };
  }, [
    contactUsPosition,
    contactUsFontSize,
    contactUsLineHeight,
    contactUsFontFamily,
    contactUsColor,
    contactUsTextAlign,
    contactUsAlignItems,
    contactUsWidth,
    contactUsAlignSelf,
    contactUsFlexDirection,
    contactUsJustifyContent,
    contactUsGap,
  ]);

  const careerOpportunitiesStyle = useMemo(() => {
    return {
      width: careerOpportunitiesWidth,
      display: careerOpportunitiesDisplay,
      flexDirection: careerOpportunitiesFlexDirection,
      alignItems: careerOpportunitiesAlignItems,
      justifyContent: careerOpportunitiesJustifyContent,
      gap: careerOpportunitiesGap,
      alignSelf: careerOpportunitiesAlignSelf,
      position: careerOpportunitiesPosition,
      fontSize: careerOpportunitiesFontSize,
      lineHeight: careerOpportunitiesLineHeight,
      fontFamily: careerOpportunitiesFontFamily,
      color: careerOpportunitiesColor,
      textAlign: careerOpportunitiesTextAlign,
    };
  }, [
    careerOpportunitiesWidth,
    careerOpportunitiesDisplay,
    careerOpportunitiesFlexDirection,
    careerOpportunitiesAlignItems,
    careerOpportunitiesJustifyContent,
    careerOpportunitiesGap,
    careerOpportunitiesAlignSelf,
    careerOpportunitiesPosition,
    careerOpportunitiesFontSize,
    careerOpportunitiesLineHeight,
    careerOpportunitiesFontFamily,
    careerOpportunitiesColor,
    careerOpportunitiesTextAlign,
  ]);

  const careerOpportunities1Style = useMemo(() => {
    return {
      display: careerOpportunitiesDisplay1,
      color: careerOpportunitiesColor1,
      alignItems: careerOpportunitiesAlignItems1,
      width: careerOpportunitiesWidth1,
      alignSelf: careerOpportunitiesAlignSelf1,
      fontWeight: careerOpportunitiesFontWeight,
    };
  }, [
    careerOpportunitiesDisplay1,
    careerOpportunitiesColor1,
    careerOpportunitiesAlignItems1,
    careerOpportunitiesWidth1,
    careerOpportunitiesAlignSelf1,
    careerOpportunitiesFontWeight,
  ]);

  const careerOpportunitiesdetailsStyle = useMemo(() => {
    return {
      display: careerOpportunitiesdetailDisplay,
      flexDirection: careerOpportunitiesdetailFlexDirection,
      alignItems: careerOpportunitiesdetailAlignItems,
      justifyContent: careerOpportunitiesdetailJustifyContent,
      gap: careerOpportunitiesdetailGap,
      position: careerOpportunitiesdetailPosition,
      fontSize: careerOpportunitiesdetailFontSize,
      lineHeight: careerOpportunitiesdetailLineHeight,
      fontFamily: careerOpportunitiesdetailFontFamily,
      color: careerOpportunitiesdetailColor,
      textAlign: careerOpportunitiesdetailTextAlign,
    };
  }, [
    careerOpportunitiesdetailDisplay,
    careerOpportunitiesdetailFlexDirection,
    careerOpportunitiesdetailAlignItems,
    careerOpportunitiesdetailJustifyContent,
    careerOpportunitiesdetailGap,
    careerOpportunitiesdetailPosition,
    careerOpportunitiesdetailFontSize,
    careerOpportunitiesdetailLineHeight,
    careerOpportunitiesdetailFontFamily,
    careerOpportunitiesdetailColor,
    careerOpportunitiesdetailTextAlign,
  ]);

  const sellingProgramsStyle = useMemo(() => {
    return {
      alignSelf: sellingProgramsAlignSelf,
      position: sellingProgramsPosition,
      fontSize: sellingProgramsFontSize,
      lineHeight: sellingProgramsLineHeight,
      fontFamily: sellingProgramsFontFamily,
      color: sellingProgramsColor,
      textAlign: sellingProgramsTextAlign,
      display: sellingProgramsDisplay,
      width: sellingProgramsWidth,
      flexDirection: sellingProgramsFlexDirection,
      alignItems: sellingProgramsAlignItems,
      justifyContent: sellingProgramsJustifyContent,
      gap: sellingProgramsGap,
    };
  }, [
    sellingProgramsAlignSelf,
    sellingProgramsPosition,
    sellingProgramsFontSize,
    sellingProgramsLineHeight,
    sellingProgramsFontFamily,
    sellingProgramsColor,
    sellingProgramsTextAlign,
    sellingProgramsDisplay,
    sellingProgramsWidth,
    sellingProgramsFlexDirection,
    sellingProgramsAlignItems,
    sellingProgramsJustifyContent,
    sellingProgramsGap,
  ]);

  const advertiseStyle = useMemo(() => {
    return {
      color: advertiseColor,
      fontWeight: advertiseFontWeight,
    };
  }, [advertiseColor, advertiseFontWeight]);

  const cooperationOpportunitiesStyle = useMemo(() => {
    return {
      position: cooperationOpportunitiesPosition,
      fontSize: cooperationOpportunitiesFontSize,
      lineHeight: cooperationOpportunitiesLineHeight,
      fontFamily: cooperationOpportunitiesFontFamily,
      color: cooperationOpportunitiesColor,
      textAlign: cooperationOpportunitiesTextAlign,
      display: cooperationOpportunitiesDisplay,
      flexDirection: cooperationOpportunitiesFlexDirection,
      alignItems: cooperationOpportunitiesAlignItems,
      justifyContent: cooperationOpportunitiesJustifyContent,
      gap: cooperationOpportunitiesGap,
    };
  }, [
    cooperationOpportunitiesPosition,
    cooperationOpportunitiesFontSize,
    cooperationOpportunitiesLineHeight,
    cooperationOpportunitiesFontFamily,
    cooperationOpportunitiesColor,
    cooperationOpportunitiesTextAlign,
    cooperationOpportunitiesDisplay,
    cooperationOpportunitiesFlexDirection,
    cooperationOpportunitiesAlignItems,
    cooperationOpportunitiesJustifyContent,
    cooperationOpportunitiesGap,
  ]);

  const howToBuyStyle = useMemo(() => {
    return {
      width: howToBuyWidth,
      flexDirection: howToBuyFlexDirection,
      alignItems: howToBuyAlignItems,
      justifyContent: howToBuyJustifyContent,
      gap: howToBuyGap,
      position: howToBuyPosition,
      fontSize: howToBuyFontSize,
      lineHeight: howToBuyLineHeight,
      fontFamily: howToBuyFontFamily,
      color: howToBuyColor,
      textAlign: howToBuyTextAlign,
    };
  }, [
    howToBuyWidth,
    howToBuyFlexDirection,
    howToBuyAlignItems,
    howToBuyJustifyContent,
    howToBuyGap,
    howToBuyPosition,
    howToBuyFontSize,
    howToBuyLineHeight,
    howToBuyFontFamily,
    howToBuyColor,
    howToBuyTextAlign,
  ]);

  const howToBuy1Style = useMemo(() => {
    return {
      alignSelf: howToBuyAlignSelf,
      display: howToBuyDisplay,
      color: howToBuyColor1,
      alignItems: howToBuyAlignItems1,
      width: howToBuyWidth1,
      fontWeight: howToBuyFontWeight,
    };
  }, [
    howToBuyAlignSelf,
    howToBuyDisplay,
    howToBuyColor1,
    howToBuyAlignItems1,
    howToBuyWidth1,
    howToBuyFontWeight,
  ]);

  const howToBuydetailsStyle = useMemo(() => {
    return {
      alignSelf: howToBuydetailsAlignSelf,
      flexDirection: howToBuydetailsFlexDirection,
      alignItems: howToBuydetailsAlignItems,
      justifyContent: howToBuydetailsJustifyContent,
      gap: howToBuydetailsGap,
      position: howToBuydetailsPosition,
      fontSize: howToBuydetailsFontSize,
      lineHeight: howToBuydetailsLineHeight,
      fontFamily: howToBuydetailsFontFamily,
      color: howToBuydetailsColor,
      textAlign: howToBuydetailsTextAlign,
      width: howToBuydetailsWidth,
    };
  }, [
    howToBuydetailsAlignSelf,
    howToBuydetailsFlexDirection,
    howToBuydetailsAlignItems,
    howToBuydetailsJustifyContent,
    howToBuydetailsGap,
    howToBuydetailsPosition,
    howToBuydetailsFontSize,
    howToBuydetailsLineHeight,
    howToBuydetailsFontFamily,
    howToBuydetailsColor,
    howToBuydetailsTextAlign,
    howToBuydetailsWidth,
  ]);

  const deliveryOptionsStyle = useMemo(() => {
    return {
      position: deliveryOptionsPosition,
      fontSize: deliveryOptionsFontSize,
      lineHeight: deliveryOptionsLineHeight,
      fontFamily: deliveryOptionsFontFamily,
      color: deliveryOptionsColor,
      textAlign: deliveryOptionsTextAlign,
      alignItems: deliveryOptionsAlignItems,
      width: deliveryOptionsWidth,
      flexDirection: deliveryOptionsFlexDirection,
      justifyContent: deliveryOptionsJustifyContent,
      gap: deliveryOptionsGap,
    };
  }, [
    deliveryOptionsPosition,
    deliveryOptionsFontSize,
    deliveryOptionsLineHeight,
    deliveryOptionsFontFamily,
    deliveryOptionsColor,
    deliveryOptionsTextAlign,
    deliveryOptionsAlignItems,
    deliveryOptionsWidth,
    deliveryOptionsFlexDirection,
    deliveryOptionsJustifyContent,
    deliveryOptionsGap,
  ]);

  const buyerProtectionStyle = useMemo(() => {
    return {
      color: buyerProtectionColor,
      width: buyerProtectionWidth,
      fontWeight: buyerProtectionFontWeight,
    };
  }, [buyerProtectionColor, buyerProtectionWidth, buyerProtectionFontWeight]);

  const newUserGuideStyle = useMemo(() => {
    return {
      position: newUserGuidePosition,
      fontSize: newUserGuideFontSize,
      lineHeight: newUserGuideLineHeight,
      fontFamily: newUserGuideFontFamily,
      color: newUserGuideColor,
      textAlign: newUserGuideTextAlign,
      alignItems: newUserGuideAlignItems,
      flexDirection: newUserGuideFlexDirection,
      justifyContent: newUserGuideJustifyContent,
      gap: newUserGuideGap,
    };
  }, [
    newUserGuidePosition,
    newUserGuideFontSize,
    newUserGuideLineHeight,
    newUserGuideFontFamily,
    newUserGuideColor,
    newUserGuideTextAlign,
    newUserGuideAlignItems,
    newUserGuideFlexDirection,
    newUserGuideJustifyContent,
    newUserGuideGap,
  ]);

  const howToBuy2Style = useMemo(() => {
    return {
      width: howToBuyWidth2,
      flexDirection: howToBuyFlexDirection1,
      alignItems: howToBuyAlignItems2,
      justifyContent: howToBuyJustifyContent1,
      gap: howToBuyGap1,
      position: howToBuyPosition1,
      fontSize: howToBuyFontSize1,
      lineHeight: howToBuyLineHeight1,
      fontFamily: howToBuyFontFamily1,
      color: howToBuyColor2,
      textAlign: howToBuyTextAlign1,
    };
  }, [
    howToBuyWidth2,
    howToBuyFlexDirection1,
    howToBuyAlignItems2,
    howToBuyJustifyContent1,
    howToBuyGap1,
    howToBuyPosition1,
    howToBuyFontSize1,
    howToBuyLineHeight1,
    howToBuyFontFamily1,
    howToBuyColor2,
    howToBuyTextAlign1,
  ]);

  const helpStyle = useMemo(() => {
    return {
      color: helpColor,
      fontWeight: helpFontWeight,
    };
  }, [helpColor, helpFontWeight]);

  const helpdetailsStyle = useMemo(() => {
    return {
      width: helpdetailsWidth,
      flexDirection: helpdetailsFlexDirection,
      alignItems: helpdetailsAlignItems,
      justifyContent: helpdetailsJustifyContent,
      gap: helpdetailsGap,
      position: helpdetailsPosition,
      fontSize: helpdetailsFontSize,
      lineHeight: helpdetailsLineHeight,
      fontFamily: helpdetailsFontFamily,
      color: helpdetailsColor,
      textAlign: helpdetailsTextAlign,
    };
  }, [
    helpdetailsWidth,
    helpdetailsFlexDirection,
    helpdetailsAlignItems,
    helpdetailsJustifyContent,
    helpdetailsGap,
    helpdetailsPosition,
    helpdetailsFontSize,
    helpdetailsLineHeight,
    helpdetailsFontFamily,
    helpdetailsColor,
    helpdetailsTextAlign,
  ]);

  const contactsUsStyle = useMemo(() => {
    return {
      position: contactsUsPosition,
      fontSize: contactsUsFontSize,
      lineHeight: contactsUsLineHeight,
      fontFamily: contactsUsFontFamily,
      color: contactsUsColor,
      textAlign: contactsUsTextAlign,
      alignItems: contactsUsAlignItems,
      width: contactsUsWidth,
      alignSelf: contactsUsAlignSelf,
      backgroundColor: contactsUsBackgroundColor,
      flexDirection: contactsUsFlexDirection,
      justifyContent: contactsUsJustifyContent,
      padding: contactsUsPadding,
      boxSizing: contactsUsBoxSizing,
      gap: contactsUsGap,
    };
  }, [
    contactsUsPosition,
    contactsUsFontSize,
    contactsUsLineHeight,
    contactsUsFontFamily,
    contactsUsColor,
    contactsUsTextAlign,
    contactsUsAlignItems,
    contactsUsWidth,
    contactsUsAlignSelf,
    contactsUsBackgroundColor,
    contactsUsFlexDirection,
    contactsUsJustifyContent,
    contactsUsPadding,
    contactsUsBoxSizing,
    contactsUsGap,
  ]);

  const fAQStyle = useMemo(() => {
    return {
      position: fAQPosition,
      fontSize: fAQFontSize,
      lineHeight: fAQLineHeight,
      fontFamily: fAQFontFamily,
      color: fAQColor,
      textAlign: fAQTextAlign,
      width: fAQWidth,
      alignSelf: fAQAlignSelf,
      flexDirection: fAQFlexDirection,
      flexWrap: fAQFlexWrap,
      justifyContent: fAQJustifyContent,
      gap: fAQGap,
    };
  }, [
    fAQPosition,
    fAQFontSize,
    fAQLineHeight,
    fAQFontFamily,
    fAQColor,
    fAQTextAlign,
    fAQWidth,
    fAQAlignSelf,
    fAQFlexDirection,
    fAQFlexWrap,
    fAQJustifyContent,
    fAQGap,
  ]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      fontSize: privacyPolicyFontSize,
      lineHeight: privacyPolicyLineHeight,
      fontFamily: privacyPolicyFontFamily,
      color: privacyPolicyColor,
      textAlign: privacyPolicyTextAlign,
      display: privacyPolicyDisplay,
      alignItems: privacyPolicyAlignItems,
      width: privacyPolicyWidth,
      flex: privacyPolicyFlex,
      height: privacyPolicyHeight,
    };
  }, [
    privacyPolicyFontSize,
    privacyPolicyLineHeight,
    privacyPolicyFontFamily,
    privacyPolicyColor,
    privacyPolicyTextAlign,
    privacyPolicyDisplay,
    privacyPolicyAlignItems,
    privacyPolicyWidth,
    privacyPolicyFlex,
    privacyPolicyHeight,
  ]);

  const footerButtonStyle = useMemo(() => {
    return {
      alignSelf: footerButtonAlignSelf,
      backgroundColor: footerButtonBackgroundColor,
      flexDirection: footerButtonFlexDirection,
      alignItems: footerButtonAlignItems,
      justifyContent: footerButtonJustifyContent,
      padding: footerButtonPadding,
      boxSizing: footerButtonBoxSizing,
      gap: footerButtonGap,
      position: footerButtonPosition,
      top: footerButtonTop,
      left: footerButtonLeft,
      width: footerButtonWidth,
    };
  }, [
    footerButtonAlignSelf,
    footerButtonBackgroundColor,
    footerButtonFlexDirection,
    footerButtonAlignItems,
    footerButtonJustifyContent,
    footerButtonPadding,
    footerButtonBoxSizing,
    footerButtonGap,
    footerButtonPosition,
    footerButtonTop,
    footerButtonLeft,
    footerButtonWidth,
  ]);

  const row1Style = useMemo(() => {
    return {
      alignSelf: row1AlignSelf,
      flexWrap: row1FlexWrap,
      gap: row1Gap,
    };
  }, [row1AlignSelf, row1FlexWrap, row1Gap]);

  const footerpaymentMethodsStyle = useMemo(() => {
    return {
      flex: footerpaymentMethodsFlex,
      height: footerpaymentMethodsHeight,
      width: footerpaymentMethodsWidth,
    };
  }, [
    footerpaymentMethodsFlex,
    footerpaymentMethodsHeight,
    footerpaymentMethodsWidth,
  ]);

  const footerpaymentMethods1Style = useMemo(() => {
    return {
      position: footerpaymentMethodsPosition,
      top: footerpaymentMethodsTop,
      left: footerpaymentMethodsLeft,
      width: footerpaymentMethodsWidth1,
      flexDirection: footerpaymentMethodsFlexDirection,
      alignItems: footerpaymentMethodsAlignItems,
      justifyContent: footerpaymentMethodsJustifyContent,
      height: footerpaymentMethodsHeight1,
    };
  }, [
    footerpaymentMethodsPosition,
    footerpaymentMethodsTop,
    footerpaymentMethodsLeft,
    footerpaymentMethodsWidth1,
    footerpaymentMethodsFlexDirection,
    footerpaymentMethodsAlignItems,
    footerpaymentMethodsJustifyContent,
    footerpaymentMethodsHeight1,
  ]);

  const footerpaymentMethods2Style = useMemo(() => {
    return {
      display: footerpaymentMethodsDisplay,
      flexDirection: footerpaymentMethodsFlexDirection1,
      alignItems: footerpaymentMethodsAlignItems1,
      justifyContent: footerpaymentMethodsJustifyContent1,
      gap: footerpaymentMethodsGap,
      position: footerpaymentMethodsPosition1,
      top: footerpaymentMethodsTop1,
      left: footerpaymentMethodsLeft1,
      width: footerpaymentMethodsWidth2,
      height: footerpaymentMethodsHeight2,
      objectFit: footerpaymentMethodsObjectFit,
      opacity: footerpaymentMethodsOpacity,
      mixBlendMode: footerpaymentMethodsMixBlendMode,
    };
  }, [
    footerpaymentMethodsDisplay,
    footerpaymentMethodsFlexDirection1,
    footerpaymentMethodsAlignItems1,
    footerpaymentMethodsJustifyContent1,
    footerpaymentMethodsGap,
    footerpaymentMethodsPosition1,
    footerpaymentMethodsTop1,
    footerpaymentMethodsLeft1,
    footerpaymentMethodsWidth2,
    footerpaymentMethodsHeight2,
    footerpaymentMethodsObjectFit,
    footerpaymentMethodsOpacity,
    footerpaymentMethodsMixBlendMode,
  ]);

  const logo1Style = useMemo(() => {
    return {
      width: logo1Width,
      height: logo1Height,
    };
  }, [logo1Width, logo1Height]);

  const image112Style = useMemo(() => {
    return {
      width: image112Width,
    };
  }, [image112Width]);

  const image112IconStyle = useMemo(() => {
    return {
      width: image112IconWidth,
      height: image112IconHeight,
    };
  }, [image112IconWidth, image112IconHeight]);

  const logo2Style = useMemo(() => {
    return {
      width: logo2Width,
      height: logo2Height,
    };
  }, [logo2Width, logo2Height]);

  const image113Style = useMemo(() => {
    return {
      width: image113Width,
    };
  }, [image113Width]);

  const image113IconStyle = useMemo(() => {
    return {
      width: image113IconWidth,
      height: image113IconHeight,
    };
  }, [image113IconWidth, image113IconHeight]);

  const logo3Style = useMemo(() => {
    return {
      position: logo3Position,
      width: logo3Width,
      height: logo3Height,
      display: logo3Display,
      flexDirection: logo3FlexDirection,
      alignItems: logo3AlignItems,
      justifyContent: logo3JustifyContent,
    };
  }, [
    logo3Position,
    logo3Width,
    logo3Height,
    logo3Display,
    logo3FlexDirection,
    logo3AlignItems,
    logo3JustifyContent,
  ]);

  const image114Style = useMemo(() => {
    return {
      position: image114Position,
      width: image114Width,
      height: image114Height,
      flexDirection: image114FlexDirection,
      alignItems: image114AlignItems,
      justifyContent: image114JustifyContent,
      gap: image114Gap,
    };
  }, [
    image114Position,
    image114Width,
    image114Height,
    image114FlexDirection,
    image114AlignItems,
    image114JustifyContent,
    image114Gap,
  ]);

  const image114IconStyle = useMemo(() => {
    return {
      position: image114IconPosition,
      top: image114IconTop,
      left: image114IconLeft,
      width: image114IconWidth,
      height: image114IconHeight,
      objectFit: image114IconObjectFit,
      opacity: image114IconOpacity,
      mixBlendMode: image114IconMixBlendMode,
      flex: image114IconFlex,
      fontSize: image114IconFontSize,
      lineHeight: image114IconLineHeight,
      fontFamily: image114IconFontFamily,
      color: image114IconColor,
      textAlign: image114IconTextAlign,
      display: image114IconDisplay,
    };
  }, [
    image114IconPosition,
    image114IconTop,
    image114IconLeft,
    image114IconWidth,
    image114IconHeight,
    image114IconObjectFit,
    image114IconOpacity,
    image114IconMixBlendMode,
    image114IconFlex,
    image114IconFontSize,
    image114IconLineHeight,
    image114IconFontFamily,
    image114IconColor,
    image114IconTextAlign,
    image114IconDisplay,
  ]);

  const footerLanguageStyle = useMemo(() => {
    return {
      width: footerLanguageWidth,
      display: footerLanguageDisplay,
      flexDirection: footerLanguageFlexDirection,
      alignItems: footerLanguageAlignItems,
      justifyContent: footerLanguageJustifyContent,
      position: footerLanguagePosition,
      height: footerLanguageHeight,
    };
  }, [
    footerLanguageWidth,
    footerLanguageDisplay,
    footerLanguageFlexDirection,
    footerLanguageAlignItems,
    footerLanguageJustifyContent,
    footerLanguagePosition,
    footerLanguageHeight,
  ]);

  const footerLanguage1Style = useMemo(() => {
    return {
      width: footerLanguageWidth1,
      display: footerLanguageDisplay1,
      flexDirection: footerLanguageFlexDirection1,
      alignItems: footerLanguageAlignItems1,
      justifyContent: footerLanguageJustifyContent1,
      gap: footerLanguageGap,
      alignSelf: footerLanguageAlignSelf,
      position: footerLanguagePosition1,
      height: footerLanguageHeight1,
    };
  }, [
    footerLanguageWidth1,
    footerLanguageDisplay1,
    footerLanguageFlexDirection1,
    footerLanguageAlignItems1,
    footerLanguageJustifyContent1,
    footerLanguageGap,
    footerLanguageAlignSelf,
    footerLanguagePosition1,
    footerLanguageHeight1,
  ]);

  const englishStyle = useMemo(() => {
    return {
      flex: englishFlex,
      position: englishPosition,
      fontSize: englishFontSize,
      lineHeight: englishLineHeight,
      fontFamily: englishFontFamily,
      color: englishColor,
      textAlign: englishTextAlign,
      display: englishDisplay,
      height: englishHeight,
      width: englishWidth,
      top: englishTop,
      right: englishRight,
      bottom: englishBottom,
      left: englishLeft,
      backgroundColor: englishBackgroundColor,
    };
  }, [
    englishFlex,
    englishPosition,
    englishFontSize,
    englishLineHeight,
    englishFontFamily,
    englishColor,
    englishTextAlign,
    englishDisplay,
    englishHeight,
    englishWidth,
    englishTop,
    englishRight,
    englishBottom,
    englishLeft,
    englishBackgroundColor,
  ]);

  const iconArrowStyle = useMemo(() => {
    return {
      position: iconArrowPosition,
      width: iconArrowWidth,
      height: iconArrowHeight,
      alignSelf: iconArrowAlignSelf,
      display: iconArrowDisplay,
      flexDirection: iconArrowFlexDirection,
      flexWrap: iconArrowFlexWrap,
      alignItems: iconArrowAlignItems,
      justifyContent: iconArrowJustifyContent,
    };
  }, [
    iconArrowPosition,
    iconArrowWidth,
    iconArrowHeight,
    iconArrowAlignSelf,
    iconArrowDisplay,
    iconArrowFlexDirection,
    iconArrowFlexWrap,
    iconArrowAlignItems,
    iconArrowJustifyContent,
  ]);

  const linedeviderStyle = useMemo(() => {
    return {
      alignSelf: linedeviderAlignSelf,
      position: linedeviderPosition,
      height: linedeviderHeight,
      flex: linedeviderFlex,
      flexDirection: linedeviderFlexDirection,
      alignItems: linedeviderAlignItems,
      justifyContent: linedeviderJustifyContent,
    };
  }, [
    linedeviderAlignSelf,
    linedeviderPosition,
    linedeviderHeight,
    linedeviderFlex,
    linedeviderFlexDirection,
    linedeviderAlignItems,
    linedeviderJustifyContent,
  ]);

  const dividerStyle = useMemo(() => {
    return {
      position: dividerPosition,
      height: dividerHeight,
      width: dividerWidth,
      top: dividerTop,
      right: dividerRight,
      bottom: dividerBottom,
      left: dividerLeft,
      backgroundColor: dividerBackgroundColor,
      fontSize: dividerFontSize,
      lineHeight: dividerLineHeight,
      fontFamily: dividerFontFamily,
      color: dividerColor,
      textAlign: dividerTextAlign,
      display: dividerDisplay,
    };
  }, [
    dividerPosition,
    dividerHeight,
    dividerWidth,
    dividerTop,
    dividerRight,
    dividerBottom,
    dividerLeft,
    dividerBackgroundColor,
    dividerFontSize,
    dividerLineHeight,
    dividerFontFamily,
    dividerColor,
    dividerTextAlign,
    dividerDisplay,
  ]);

  const row2Style = useMemo(() => {
    return {
      alignSelf: row2AlignSelf,
      height: row2Height,
      display: row2Display,
      flexDirection: row2FlexDirection,
      flexWrap: row2FlexWrap,
      alignItems: row2AlignItems,
      justifyContent: row2JustifyContent,
      flex: row2Flex,
      position: row2Position,
      fontSize: row2FontSize,
      lineHeight: row2LineHeight,
      fontFamily: row2FontFamily,
      color: row2Color,
      textAlign: row2TextAlign,
    };
  }, [
    row2AlignSelf,
    row2Height,
    row2Display,
    row2FlexDirection,
    row2FlexWrap,
    row2AlignItems,
    row2JustifyContent,
    row2Flex,
    row2Position,
    row2FontSize,
    row2LineHeight,
    row2FontFamily,
    row2Color,
    row2TextAlign,
  ]);

  const footeraddressStyle = useMemo(() => {
    return {
      flex: footeraddressFlex,
      flexDirection: footeraddressFlexDirection,
      alignItems: footeraddressAlignItems,
      justifyContent: footeraddressJustifyContent,
      width: footeraddressWidth,
      gap: footeraddressGap,
    };
  }, [
    footeraddressFlex,
    footeraddressFlexDirection,
    footeraddressAlignItems,
    footeraddressJustifyContent,
    footeraddressWidth,
    footeraddressGap,
  ]);

  const forsterRoadCityStyle = useMemo(() => {
    return {
      fontSize: forsterRoadCityFontSize,
      lineHeight: forsterRoadCityLineHeight,
      fontFamily: forsterRoadCityFontFamily,
      color: forsterRoadCityColor,
      textAlign: forsterRoadCityTextAlign,
      display: forsterRoadCityDisplay,
      width: forsterRoadCityWidth,
      height: forsterRoadCityHeight,
    };
  }, [
    forsterRoadCityFontSize,
    forsterRoadCityLineHeight,
    forsterRoadCityFontFamily,
    forsterRoadCityColor,
    forsterRoadCityTextAlign,
    forsterRoadCityDisplay,
    forsterRoadCityWidth,
    forsterRoadCityHeight,
  ]);

  const copyrightStyle = useMemo(() => {
    return {
      flex: copyrightFlex,
      fontSize: copyrightFontSize,
      lineHeight: copyrightLineHeight,
      fontFamily: copyrightFontFamily,
      color: copyrightColor,
      textAlign: copyrightTextAlign,
      display: copyrightDisplay,
      width: copyrightWidth,
      height: copyrightHeight,
      overflow: copyrightOverflow,
      flexShrink: copyrightFlexShrink,
    };
  }, [
    copyrightFlex,
    copyrightFontSize,
    copyrightLineHeight,
    copyrightFontFamily,
    copyrightColor,
    copyrightTextAlign,
    copyrightDisplay,
    copyrightWidth,
    copyrightHeight,
    copyrightOverflow,
    copyrightFlexShrink,
  ]);

  const footersocialMediaStyle = useMemo(() => {
    return {
      width: footersocialMediaWidth,
      display: footersocialMediaDisplay,
      flexDirection: footersocialMediaFlexDirection,
      alignItems: footersocialMediaAlignItems,
      justifyContent: footersocialMediaJustifyContent,
      gap: footersocialMediaGap,
      position: footersocialMediaPosition,
      height: footersocialMediaHeight,
      overflow: footersocialMediaOverflow,
      flexShrink: footersocialMediaFlexShrink,
    };
  }, [
    footersocialMediaWidth,
    footersocialMediaDisplay,
    footersocialMediaFlexDirection,
    footersocialMediaAlignItems,
    footersocialMediaJustifyContent,
    footersocialMediaGap,
    footersocialMediaPosition,
    footersocialMediaHeight,
    footersocialMediaOverflow,
    footersocialMediaFlexShrink,
  ]);

  return (
    <div
      className="bg-text-color-dark-text-primary w-[1440px] flex flex-col items-center justify-start text-right text-13xl text-text-color-dark-text-primary font-medium-medium-regular-text"
      style={footerMainLandingStyle}
    >
      <div className="rounded-lg bg-background-color-send-email-frm w-[571px] flex flex-col items-center justify-start py-spacing-8 px-spacing-13 box-border gap-[24px] z-[1]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[23px]">
          <div className="relative w-[207px] h-5">
            <b
              className="absolute top-[0px] left-[3px] leading-[20px]"
              style={luminaeStoreStyle}
            >
              <span style={luminaeStyle}>{luminae}</span>
              <span
                className="text-text-color-light-primary-text"
                style={spanStyle}
              >
                {prop}
              </span>
              <span className="text-background-color-footer" style={storeStyle}>
                {store}
              </span>
            </b>
          </div>
          <div
            className="self-stretch flex flex-row flex-wrap items-center justify-center text-center text-base"
            style={luminaeSubscriptionStyle}
          >
            <div
              className="flex-1 relative leading-[20px]"
              style={registerYourEmailStyle}
            >
              {registerYourEmailNotToMis}
            </div>
          </div>
        </div>
        <div
          className="rounded bg-text-color-dark-text-primary w-[268px] flex flex-row items-center justify-start py-spacing-2 px-spacing-3 box-border gap-[127px] text-sm text-text-color-light-tritary-text"
          style={textBoxemailStyle}
        >
          <div className="relative leading-[20px]" style={enterYourEmailStyle}>
            {enterYourEmail}
          </div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={iconsend}
            style={iconsendStyle}
          />
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start z-[0] mt-[-100px] text-left text-sm text-text-color-light-primary-text"
        style={footerStyle}
      >
        <div
          className="self-stretch bg-background-color-footer flex flex-row flex-wrap items-center justify-center pt-[132px] pb-[60px] pr-[248px] pl-[303px]"
          style={footer1Style}
        >
          <div
            className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[126px]"
            style={frmfooterStyle}
          >
            <div
              className="w-[123px] flex flex-col items-start justify-center gap-[25px]"
              style={companyStyle}
            >
              {showCompany && (
                <b
                  className="self-stretch relative leading-[20px]"
                  style={company1Style}
                >
                  {company}
                </b>
              )}
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[15px] text-text-color-light-secondary-text"
                style={companydetailsStyle}
              >
                <div
                  className="relative leading-[20px] flex items-center w-[179.3px]"
                  style={aboutUsStyle}
                >
                  {aboutUs}
                </div>
                <div
                  className="relative leading-[20px] flex items-center w-[179.3px]"
                  style={ourStoreStyle}
                >
                  {ourStore}
                </div>
                <div
                  className="relative leading-[20px] flex items-center w-[170px]"
                  style={contactUsStyle}
                >
                  {contactUs}
                </div>
              </div>
            </div>
            <div
              className="w-[134px] flex flex-col items-start justify-start gap-[25px]"
              style={careerOpportunitiesStyle}
            >
              <b
                className="relative leading-[20px] flex items-center w-[135px]"
                style={careerOpportunities1Style}
              >
                {careerOpportunities}
              </b>
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[15px] text-text-color-light-secondary-text"
                style={careerOpportunitiesdetailsStyle}
              >
                <div
                  className="self-stretch relative leading-[20px]"
                  style={sellingProgramsStyle}
                >
                  {sellingPrograms}
                </div>
                <div
                  className="self-stretch relative leading-[20px]"
                  style={advertiseStyle}
                >
                  {advertise}
                </div>
                <div
                  className="self-stretch relative leading-[20px]"
                  style={cooperationOpportunitiesStyle}
                >
                  {cooperationOpportunities}
                </div>
              </div>
            </div>
            <div
              className="w-[123px] flex flex-col items-start justify-start gap-[25px]"
              style={howToBuyStyle}
            >
              <b
                className="self-stretch relative leading-[20px]"
                style={howToBuy1Style}
              >
                {howToBuy}
              </b>
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[15px] text-text-color-light-secondary-text"
                style={howToBuydetailsStyle}
              >
                <div className="relative leading-[20px] flex items-center w-[116px]">
                  {makingPayments}
                </div>
                {showDeliveryOptions && (
                  <div
                    className="relative leading-[20px] flex items-center w-[116px]"
                    style={deliveryOptionsStyle}
                  >
                    {deliveryOptions}
                  </div>
                )}
                <div
                  className="relative leading-[20px] flex items-center w-[116px]"
                  style={buyerProtectionStyle}
                >
                  {buyerProtection}
                </div>
                <div
                  className="relative leading-[20px] flex items-center w-[116px]"
                  style={newUserGuideStyle}
                >
                  {newUserGuide}
                </div>
              </div>
            </div>
            <div
              className="w-[123px] flex flex-col items-start justify-start gap-[25px]"
              style={howToBuy2Style}
            >
              <b
                className="relative leading-[20px] flex items-center w-[179.3px]"
                style={helpStyle}
              >
                {help}
              </b>
              <div
                className="w-[116px] flex flex-col items-start justify-start gap-[15px] text-text-color-light-secondary-text"
                style={helpdetailsStyle}
              >
                <div
                  className="relative leading-[20px] flex items-center w-[179.3px]"
                  style={contactsUsStyle}
                >
                  {contactsUs}
                </div>
                <div
                  className="relative leading-[20px] flex items-center w-[179.3px]"
                  style={fAQStyle}
                >
                  {fAQ}
                </div>
                <div
                  className="relative leading-[20px] flex items-center w-[179.3px]"
                  style={privacyPolicyStyle}
                >
                  {privacyPolicy}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch bg-text-color-dark-text-primary flex flex-col items-start justify-center py-spacing-6 px-[100px] gap-[12px] text-right"
          style={footerButtonStyle}
        >
          <div
            className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[46px]"
            style={row1Style}
          >
            <div
              className="flex-1 relative h-[30px]"
              style={footerpaymentMethodsStyle}
            >
              {showFooterpaymentMethods && (
                <div
                  className="absolute top-[0px] left-[0px] w-[221px] flex flex-row items-center justify-start"
                  style={footerpaymentMethods1Style}
                >
                  <div
                    className="flex flex-row items-center justify-start gap-[25px]"
                    style={footerpaymentMethods2Style}
                  >
                    <div
                      className="relative w-[62px] h-[19px]"
                      style={logo1Style}
                    >
                      <div
                        className="relative w-[62px] h-[30px] hidden"
                        style={image112Style}
                      />
                      <img
                        className="absolute top-[0px] left-[0px] w-[62px] h-[19px] object-cover opacity-[0.3] mix-blend-luminosity"
                        alt=""
                        src={image112}
                        style={image112IconStyle}
                      />
                    </div>
                    <div
                      className="relative w-[38px] h-[30px]"
                      style={logo2Style}
                    >
                      <div
                        className="relative w-[38px] h-[30px] hidden"
                        style={image113Style}
                      />
                      {showImage113Icon && (
                        <img
                          className="absolute top-[0px] left-[0px] w-[38px] h-[30px] object-cover opacity-[0.3] mix-blend-luminosity"
                          alt=""
                          src={image113}
                          style={image113IconStyle}
                        />
                      )}
                    </div>
                    <div
                      className="relative w-[71px] h-[19px]"
                      style={logo3Style}
                    >
                      {!image114 && (
                        <div
                          className="relative w-[71px] h-[30px] hidden"
                          style={image114Style}
                        />
                      )}
                      <img
                        className="absolute top-[0px] left-[0px] w-[71px] h-[19px] object-cover opacity-[0.3] mix-blend-luminosity"
                        alt=""
                        src={image1141}
                        style={image114IconStyle}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="w-[123px] flex flex-row items-start justify-start"
              style={footerLanguageStyle}
            >
              <div
                className="w-[123px] flex flex-row items-center justify-start gap-[5px]"
                style={footerLanguage1Style}
              >
                <div
                  className="flex-1 relative leading-[20px]"
                  style={englishStyle}
                >
                  {english}
                </div>
                <img
                  className="relative w-2.5 h-2.5"
                  alt=""
                  src={iconArrow}
                  style={iconArrowStyle}
                />
              </div>
            </div>
          </div>
          {showLinedevider && (
            <div
              className="self-stretch relative h-0.5"
              style={linedeviderStyle}
            >
              <div
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-button-stroke-stroke"
                style={dividerStyle}
              />
            </div>
          )}
          <div
            className="self-stretch h-[69px] flex flex-row flex-wrap items-center justify-between text-left"
            style={row2Style}
          >
            <div
              className="flex-1 flex flex-col items-start justify-start"
              style={footeraddressStyle}
            >
              <div
                className="relative leading-[20px]"
                style={forsterRoadCityStyle}
              >
                {forsterRoadCityOfMonash}
              </div>
            </div>
            <div
              className="flex-1 relative leading-[20px] text-text-color-light-tritary-text"
              style={copyrightStyle}
            >
              {copyright}
            </div>
            <div
              className="w-[120px] flex flex-row items-center justify-end gap-[24px]"
              style={footersocialMediaStyle}
            >
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconsocialoutlineinstagram.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsocialoutlinefacebook.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsocialoutlinetelegram.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMainLanding;
