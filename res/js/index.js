// JavaScript Document
	
// Amazon Clickables functions //

$(document).ready(function() {
    
    // Below: Show/Hide Amazon logo
    
	$('.link').css("width", "100px");
	$('.link').css("display", "none");
	
	// Below: Show/Hide Book Text (THIS IS A FIX FOR HIGH CONTRAST BUGS) //
	
	$('#ba').on("mouseenter", function() {
		$('#text1').css("display", "block");
	})
	
	$('#ba').on('mouseleave', function(){
		$('#text1').css("display", "none");
	})
	
	$('#res').on("mouseenter", function() {
		$('#text2').css("display", "block");
	})
	
	$('#res').on('mouseleave', function(){
		$('#text2').css("display", "none");
	})
	
	$('#res2').on("mouseenter", function() {
		$('#text3').css("display", "block");
	})
	
	$('#res2').on('mouseleave', function(){
		$('#text3').css("display", "none");
	})
	
	$('#res3').on("mouseenter", function() {
		$('#text4').css("display", "block");
	})
	
	$('#res3').on('mouseleave', function(){
		$('#text4').css("display", "none");
	})
	
	$('#lc').on("mouseenter", function() {
		$('#text5').css("display", "block");
	})
	
	$('#lc').on('mouseleave', function(){
		$('#text5').css("display", "none");
	})
	
	$('#wg').on("mouseenter", function() {
		$('#text6').css("display", "block");
	})
	
	$('#wg').on('mouseleave', function(){
		$('#text6').css("display", "none");
	})
		
	$('#fsdw').on("mouseenter", function() {
		$('#text7').css("display", "block");
	})
	
	$('#fsdw').on('mouseleave', function(){
		$('#text7').css("display", "none");
	})
	
	$('#yrpr').on("mouseenter", function() {
		$('#text8').css("display", "block");
	})
	
	$('#yrpr').on('mouseleave', function(){
		$('#text8').css("display", "none");
	})
	
	$('#yfpr').on("mouseenter", function() {
		$('#text9').css("display", "block");
	})
	
	$('#yfpr').on('mouseleave', function(){
		$('#text9').css("display", "none");
	})
	
	/* Below: Show/Hide Book sections */
	
	// Blind Ambitions //
	$('#ba').on("mouseenter", function() {
		$('#blind-ambitions').css("display", "block");
	})
	
	$('#ba').on('mouseleave', function(){
		$('#blind-ambitions').css("display", "none");
	})
	
	// Resolutions 1 //
	$('#res').on("mouseenter", function() {
		$('#resolutions').css("display", "block");
	})
	
	$('#res').on("mouseleave", function() {
		$('#resolutions').css("display", "none");
	})

	// Resolutions 2 //
	$('#res2').on("mouseenter", function() {
		$('#resolutions2').css("display", "block");
	})

	$('#res2').on("mouseleave", function() {
		$('#resolutions2').css("display", "none");
	})
	
	// Resolutions 3 //
	$('#res3').on("mouseenter", function() {
		$('#resolutions3').css("display", "block");
	})

	$('#res3').on("mouseleave", function() {
		$('#resolutions3').css("display", "none");
	})
	
	// Leftovers and Concoctions //
	$('#lc').on("mouseenter", function() {
		$('#leftovers-concoctions').css("display", "block");
	})
	
	$('#lc').on('mouseleave', function(){
		$('#leftovers-concoctions').css("display", "none");
	})
	
	// Word Gardens //
	$('#wg').on("mouseenter", function() {
		$('#word-gardens').css("display", "block");
	})
	
	$('#wg').on('mouseleave', function(){
		$('#word-gardens').css("display", "none");
	})
	
	// From Somewhere Deep Within //
	$('#fsdw').on("mouseenter", function() {
		$('#from-somewhere-deep-within').css("display", "block");
	})
	
	$('#fsdw').on('mouseleave', function(){
		$('#from-somewhere-deep-within').css("display", "none");
	})
	
	// The Year to Remember: A Poetic Retrospect //
	$('#yrpr').on("mouseenter", function() {
		$('#a-year-to-remember').css("display", "block");
	})
	
	$('#yrpr').on('mouseleave', function(){
		$('#a-year-to-remember').css("display", "none");
	})
	
	// A Year to Forget: A Poetic Retrospect //
	$('#yfpr').on("mouseenter", function() {
		$('#a-year-to-forget').css("display", "block");
	})
	
	$('#yfpr').on('mouseleave', function(){
		$('#a-year-to-forget').css("display", "none");
	})
	
})

// Nav-Bar Click Functions //
$(document).ready(function() {
	$('#blog').click(function(){
		window.open('https://rjllacey647.wixsite.com/blindambitions', '_blank');
	})
	
	$('#home').click(function(){
		location.reload();
	})	
	
	$('#about').click(function(){
		window.location = 'About.html';
	})
})

// Functions for going to Amazon.com
$(document).ready(function() {

	$('#ba').click(function() {
		window.open('https://www.amazon.ca/Blind-Ambitions-Life-Faith-Eyes/dp/1460221060/ref=sr_1_31?keywords=blind+ambitions&qid=1558130381&s=gateway&sr=8-31')
	})
	
	$('#res').click(function() {
		window.open('https://www.amazon.ca/dp/B07RBC9FX5/ref=cm_sw_r_fa_dp_U_t3E2CbHSTGP18?fbclid=IwAR1eBZTkl249nJgdMa33_n4DXzQGUg8gxW9N3zxWP6LM6XEOmgn4a-7PgNo');
	})

	$('#res2').click(function() {
		window.open('https://www.amazon.ca/Resolutions-Book-2015-Year-Poetry-ebook/dp/B07SNC3BRT/ref=sr_1_2?keywords=randy+lacey&qid=1560569510&s=gateway&sr=8-2')
	})
	
	$('#res3').click(function() {
		window.open('https://www.amazon.ca/Resolutions-Book-III-Randy-Lacey-ebook/dp/B07WV4D33Z/ref=sr_1_1?qid=1567200338&refinements=p_27%3ARandy+Lacey&s=digital-text&sr=1-1&text=Randy+Lacey')
	})
	
    $('#lc').click(function() {
		window.open('https://www.amazon.ca/Leftovers-Concoctions-Selected-Poems-Resolutions-ebook/dp/B08177VPJ6/ref=sr_1_1?dchild=1&keywords=leftovers%20Y%20New&qid=1605892680&sr=8-1&fbclid=IwAR3Pndp8URF_2mH4QhtyidJ4C62MpnWafWcn7CqqtKOCp965pT-8Tkyoehs');
	})
	
    $('#wg').click(function() {
		window.open('https://www.amazon.ca/gp/product/B0874DM3YW/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0?fbclid=IwAR3HEStfvIDiyPQv2epZtzkpwGLJKV_vJQU54VKdqzImNriM4WVeo3xIUOE');
	})
	
    $('#fsdw').click(function() {
		window.open('https://www.amazon.ca/Somewhere-Within-LaceyA-searching-collection-ebook/dp/B08M6G965V/ref=sr_1_1?dchild=1&keywords=from%20somewhere%20deep%20within&qid=1605904549&sr=8-1&fbclid=IwAR1KX5wXoT0QecHE1u5T_5FOTM9679TlKJEUiSNYlrSKVEkWq9KG8--yDww');
	})
	
    $('#yrpr').click(function() {
		window.open('https://www.amazon.ca/Year-Remember-Poetic-Retrospect/dp/1777443032/ref=sr_1_5?crid=3LS8TNV1G781Z&dchild=1&keywords=randy+lacey&qid=1626716116&sprefix=randy+l%2Caps%2C219&sr=8-5');
	})
	
    $('#yfpr').click(function() {
		window.open('https://www.amazon.ca/Year-Forget-Poetic-Retrospect/dp/1777443067/ref=sr_1_7?crid=3LS8TNV1G781Z&dchild=1&keywords=randy+lacey&qid=1626716193&sprefix=randy+l%2Caps%2C219&sr=8-7');
	})
	
	// Insert new functions below //
	
})