# Planting and testing for a cookie
How to plant a cookie and test for it. You can change a html page depending on whether the cookie is there or not. In this example we plant the cookie using a button, and check for the cookie on a separate page.

# What you need

You'll need to use a local web server such as [Mongoose](https://www.cesanta.com/products/binary), and set the configuration to point the document_root to this repo folder on your computer. You might have to restart Mongoose and it should take you to your web server address in your browser, which will be something like http://192.168.1.1:8080 (the number will probably be different, but the :8080 will probably be the same). The Mongoose menu will show it. This is in the top bar on a Mac, or in the system tray at the bottom right on Windows.

# The index page

Have a look at this page in your web server. It has a bit of text which explains cookies. It has link to the other page in this repo — cookie-test.html; and it has a button for planting the cookie. Click the link to go to cookie-test.html, see what it's like before and then go back to see how it's changed after you plant the cookie.

# Viewing the cookie in your browser settings (Chrome only)

When you have planted the cookie, you can see where it's kept in the browser. If you're using google chrome, you can go to (chrome://settings/cookies) and search for the web server address that Mongoose has given you. Other browsers will have different ways to view it. Once you can see the cookie, you can usually delete it there.
