---
sys:
  pageId: "ac09983c-631e-4449-8aea-3a08ad94f09c"
  createdTime: "2024-07-10T00:15:00.000Z"
  lastEditedTime: "2025-08-18T08:18:00.000Z"
  propFilepath: "docs/Guides/How to J-Link.md"
title: "How to J-Link"
date: "2025-08-18T08:18:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 200
toc: false
icon: ""
---

Following this tutorial, you should be able to use a J-Link with one of the dev boards to be able to step debug, watch variables change live, and watch a live graph of certain variables

**If this is your first time setting this up, skip the next few instructions and jump down to “Many of the steps …”**

This section should allow you to be able to watch variables live assuming you already have Ozone installed.

- Start Ozone per usual, and select open recent projects. This should open your last opened project.
- Connect the Type-C, J-Link, and a battery to the Type-C (the J-Link does not supply power to the board).
- Make sure the battery is on. It will throw an error if it is not.
- Make sure you have the J-Link plugged into your laptop.
- Press the green power icon at the top left of Ozone:

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXdP3A4OMfzM_GJzlhvpkm8kCJgLotjg34mSOigQHKF2DEK_YGEYwWl6SDrtpMtQy4L1li7c-ppXwrpChbZEhSwgJLmFYj9yv-oNWbtxWaP2JVqAJ2ecfT5_AOrZrGagvszVrawYkqgc5WuvvcK5YITALtOK?key=ymcCSf3ZNgvislfKY7ymJA)
- It may have a pop up for flashing to the board. Let it run and once it’s done, you should see the program paused on the main method indicated by the green highlight on that line of code.

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXczVFQK0sIbEzO3rZrQVAppSNV-en_5FnxIe0YpeJzzDp6VhOJDFIuPLf8i9YnvU74YDK_e0dhJ0VreVEsEO4tXosieL5Yf2DY-ZXOKHHijINLbEn5-ZT_tn7vWoM2ksxB-V8mgSH2DBr5t12vWVp43IR1D?key=ymcCSf3ZNgvislfKY7ymJA)
- To add a variable to watch, right click the variable and click “Watch”. This will add the variable to the “Watched Data” tab.
- To add a variable to be live graphed, there are a few requirements
	1. Has to be a primitive variable that is 8 bytes or less. (double, float, uint8, uint64, int8, int64, etc).
	2. Has to be a global variable
- To actually add the variable, right click the variable where it’s created and choose graph. Nothing will pop up and we need to add another window.
	1. At the top of your screen, click view, then “Timeline”. This is where the variable will be graphed.

		![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXct2R9i5u2i5QNpE9ORK_MPT2AAiLVJasifyeI44kY74k473L3m5qlVt4tMkFblRoVSl7DLon-4CPLF-sIY1XwBXUBnT2WSiN_k29ibEplHEyi7bT1gAtYWpzdNyOuOdEW1BPazumYs03pBipOvfSgHjgug?key=ymcCSf3ZNgvislfKY7ymJA)
- You should see a window similar to:

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXeK-NIOkrGsZ1Hoen0k-jj6rrgXUDVFtoJSxjLD9oq9XUCanVP-adrRbJvdE53OVp4OBzey3VsQYtulkfhbYpV5HvHOSb8JMExvB77UWnYb9v-xQznOgFxq7z-7U_8tzlIJImkWR_FjDpsrKA2PGaGA730?key=ymcCSf3ZNgvislfKY7ymJA)
- To get your variable, only select data (have only data highlighted in blue), and make sure the variable you want to watch is checked marked.

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXf6m4nnt-CmR44hARinzCBzMpvATcrAXWoTzIG1YfkS5ci5fJUGUMW2weIMzHICg4ba9giAvh8-s04slp_EkT53As1eqnD917PH_jeLfCV6yEzBpdtzP0vbYAT_J7kNdvvaHTIOxLnFAAOEg5MXH6kovFi6?key=ymcCSf3ZNgvislfKY7ymJA)
- Now just resume the program and watch your variable change. You may want to change the time steps per division, or else, I doubt you’ll be able to actually see anything. 2s/div is what I typically use.

**While debugging, before you flash to the board REMOVE ALL BREAKPOINTS. Or you will brick the board.**

Many of the steps to this were taken from the Taproot tutorial found here: [https://gitlab.com/aruw](https://gitlab.com/aruw/controls/taproot/-/wikis/Debugging-With-JLink)

- Install [Ozone - The J-Link Debugger](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

The program you want should look similar to what’s below.

**(Be sure you’re getting Ozone and not a documentation package!)**

![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXcnl3y4K0RKoEwE8Rh1YRQ5XG2KqbK2gdYYSe5rqE0aIV_m_6jisKVhCl24gO-h5DqpUBNY8Vl0GXtVeoveKxa807W9IDFUNLnCal63tVc8e3o48x4fUmC1-1Xmbi9VAwxs1UWjqyGitQSb3Mmsgt52srt0?key=ymcCSf3ZNgvislfKY7ymJA)

Just download the installer for your device and run it. (If you have a school computer it’s probably the 64-bit Installer for Windows)

- Run Ozone

My shortcut looks like:

![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXdUSv2Fo9E1GsREEgeYmWculwPU_pOf4USAtU1yNMWeGw40odmz3Tke8NdfkzyvjG8Gtb-wyktLVMOUL-b3QXw236K_wgQGP8xTb5J_8NojGJip_CuzZhVZELfr06CS5RoHvBJazy-BAXeyPtb2I4IEZWA?key=ymcCSf3ZNgvislfKY7ymJA)

- Select Create New Project

![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXdST3cIhp9wFpw113bsWtJdPygjDIq8xOCYxIlS-UkyzCA55Kzbo-ZvvRnZ_wzaBHYws4NTESbRiq2IYClMTQ7WwLhm4Dmsqus1uAQUnL4qTu9CmkB1vaz-URYC7J9Pdt-cqKwYCYNp9MSgQgdZamU5N_U?key=ymcCSf3ZNgvislfKY7ymJA)

- If you do not have the J-Link plugged in, Ozone will not know which debugger you are using. So choose J-Link.

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXeNU1SLP0zn-LUMM2eY5jRoXm3KtmAvmgn7aYoPd8kzfno-Y5tI-jf2rQtibbRdjSd8OG7a0HiLyjzy-ugOGWgiQ-q3s98F0l3CQoo0-E7a1VmmtRTFu1sjTMqT-LXu1JoFIHJGm5hbGMpCyTJmD4Ys_c1u?key=ymcCSf3ZNgvislfKY7ymJA)
- Now you need to tell it which board you are going to be using the J-Link on. Our dev boards are “STM32F427II”. So choose this device.

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXfenhfCaCvv4APRdbHxQhupWUwm5hBB_3y-ancgXkuRT4NKXvICg2kODaalz7rvSNabrWmS3W2Roo2czlRl-BPKfIPDm1lETjpjjHCd0rjyLDePBEIBSzKMy5di-O0W3manHehFSVYWvW7iNXHALsVTKO8d?key=ymcCSf3ZNgvislfKY7ymJA)
	1. Now you need to specify which interface and how fast you want to talk to the dev board with. Choose “SWD” and any interface speed works. I just left it at the default 4 MHz.

	![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXcA0RjJ6jm178yRUKllYdPl4Y82I86rcc3xS010pWkg_yB1o_a2PVhbc7Q4cq5Wv2xc94UMwE3DxD78V9N4r3MGHRxDp8KIdtqgdUPHQEQaBoMefkuNtAJLPrUWyNcCMd47mMlnGFAoUkCO8lMnBCRzQWIU?key=ymcCSf3ZNgvislfKY7ymJA)
- Now we need to give it a file for Ozone to run off of. Similar to the file VSCode reads, but a little different as it needs to be compiled already. The following steps are taken directly from the previously mentioned tutorial.
	1. 

		![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXfXnrPDBfyby306tK3azas3bfKFofDaG6vDOevN0LCw7_S-1KSZL18EZbPu_vB8rZXNqLRzQGnq-ATnr2_Aum2wQqCuepBtMAxjPbmdweOwOyVCgRibP-MyZXOmswqBLQXCV9j0HfEGmYFnN20u2VIcRAE?key=ymcCSf3ZNgvislfKY7ymJA)
	2. 

		![image](https://lh7-us.googleusercontent.com/docsz/AD_4nXeF0exOwsNLMRtfzus3d2eouwfjCLNbVZc08fmjbklZH-JGeXDvLwDRqtWHNaoywHEYNHrUdrrBcHvYQmxWnL9XaVEuUcBwmeS4gCAgmZrWdyXn2lf99kAfW8-wuK9qYbxEtvRJfU8cdq3guKKeFmduwxAl?key=ymcCSf3ZNgvislfKY7ymJA)

	 xYou should now be set up to be able to live graph stuff! Go back to the beginning of this tutorial to see what to do next.

If you get an error thats similar to “No probe connected via usb”, it is likely you just don’t have the driver for the J-Link. So you may need to go into the device manager, check this. Also go to where the program was installed, and under Segger/USBDriver run the driver installer.
