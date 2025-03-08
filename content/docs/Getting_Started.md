---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFG6XN4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGM2i58SbI%2B%2BK7EBNqN24deMXq%2FOE1LqMgne7QH9nLM6AiBeX5aZmL2Y8gYjSbAV1oSgcoJG0NG3a2kJ9vpxqlaL3Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsWo76QhuaULsXYweKtwDolM5lPEqXyaBAC9A6qM%2FU1BY7Vu7Ohj41G2x0Ept5X%2FCvjFCALCTWYAgHzBw0MN2J%2Bqgp7lZkzkI%2BODd%2Bgwhr4ZQJ%2BryAvFs50nJ2tN0VLZvp8u7Q%2F5JwrsUQsPklQGl8MJwCf7TCJVMU159rvwsLvRIt9KG%2BAn%2Ba9o4BCC%2Bn%2FiA4gxDH3nTlX5u3JTQGsfaY8Wh7VNVxtlxouPpVs2F6P1Y6pRVdQ3pl56fu1ydX%2F6jiysCV25nmECbps5AeS89ki8E5V12KupSjo2dXNnroYvlxR11xPH5sj3VzYofHGL65ZzQO19mPPFY1GHx4bMnRypuT%2FvMICAiG1qD29MU2nXj9G%2B3GkbjUpfcYutHEccXqwpw%2BzhLgnFhWIiHb4ToyKvP3BQ5ZD9y9kFxFUTSY5DDcCNSadeIF4OQaorDukTpIdM6zaslEtUU7fQEVynJsFXxCpEhOpPX3f3IkJDPBvQZ4coi7f2gVCMp2oh0z3gwxJjQfv2g113Ll8B2vYWHI1PdD%2F2GghEVvTpS1AuBOWT0K6sC9wQYe0%2FfR03eo0ED09%2Bn4UPhhpSAazFHbBeZjNU205K5mJ2RGal7iIS36SX76D0AJebqT4lLtaHqyBq8yGsgHtemp1O7lqAwwdyuvgY6pgF1NfIuoaGew56PyRwAbijsu9t3GEkkp3jwwtClhrScB6eUa0DT%2FA6B3BO6VvTRXxfFB3ZgAuBJf21FwHIdfxldvbOll07naCZn6UT%2BWimGAMh%2BH1vHPYdCI7kq6JvWeXRulAVKhj4esWbFlaGUoOLvF09%2BZbCFGAkzLrlxRiBE5jSvVKxDIPRw5rLl7kTkHMl6O1JCEEZLqgwOZl%2BMwahelmbmohPe&X-Amz-Signature=15799b350ebd42106fc964a8ba7f79d6e928c83a2621c77b03f2370ea4d8485e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFG6XN4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGM2i58SbI%2B%2BK7EBNqN24deMXq%2FOE1LqMgne7QH9nLM6AiBeX5aZmL2Y8gYjSbAV1oSgcoJG0NG3a2kJ9vpxqlaL3Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsWo76QhuaULsXYweKtwDolM5lPEqXyaBAC9A6qM%2FU1BY7Vu7Ohj41G2x0Ept5X%2FCvjFCALCTWYAgHzBw0MN2J%2Bqgp7lZkzkI%2BODd%2Bgwhr4ZQJ%2BryAvFs50nJ2tN0VLZvp8u7Q%2F5JwrsUQsPklQGl8MJwCf7TCJVMU159rvwsLvRIt9KG%2BAn%2Ba9o4BCC%2Bn%2FiA4gxDH3nTlX5u3JTQGsfaY8Wh7VNVxtlxouPpVs2F6P1Y6pRVdQ3pl56fu1ydX%2F6jiysCV25nmECbps5AeS89ki8E5V12KupSjo2dXNnroYvlxR11xPH5sj3VzYofHGL65ZzQO19mPPFY1GHx4bMnRypuT%2FvMICAiG1qD29MU2nXj9G%2B3GkbjUpfcYutHEccXqwpw%2BzhLgnFhWIiHb4ToyKvP3BQ5ZD9y9kFxFUTSY5DDcCNSadeIF4OQaorDukTpIdM6zaslEtUU7fQEVynJsFXxCpEhOpPX3f3IkJDPBvQZ4coi7f2gVCMp2oh0z3gwxJjQfv2g113Ll8B2vYWHI1PdD%2F2GghEVvTpS1AuBOWT0K6sC9wQYe0%2FfR03eo0ED09%2Bn4UPhhpSAazFHbBeZjNU205K5mJ2RGal7iIS36SX76D0AJebqT4lLtaHqyBq8yGsgHtemp1O7lqAwwdyuvgY6pgF1NfIuoaGew56PyRwAbijsu9t3GEkkp3jwwtClhrScB6eUa0DT%2FA6B3BO6VvTRXxfFB3ZgAuBJf21FwHIdfxldvbOll07naCZn6UT%2BWimGAMh%2BH1vHPYdCI7kq6JvWeXRulAVKhj4esWbFlaGUoOLvF09%2BZbCFGAkzLrlxRiBE5jSvVKxDIPRw5rLl7kTkHMl6O1JCEEZLqgwOZl%2BMwahelmbmohPe&X-Amz-Signature=36c48773f27ebbb1ccd25d27708a19fac46117b07913447fd151b6b98a7b3762&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W7L25A%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGtjEg%2Brcvqo8f1kH%2FEWQh%2BP3DeqcRgASIK767w3sK%2B0AiEAk3wXSu%2F4nT578VvNogPCJ0WdUsapW0ftQVJOpM8w75Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBq5uG3kyVI8WDdtJircA4xRHaloK8E9i9EAgnPTz8R3BcGyBPyPPLdfDwvhd3cw%2FhbkZ%2FzHIyW4%2FmHhIhDz4WC%2FKJ3o7njdkSwKOBe9WF9UZ4iq92LSlHtAAX9hsogTsvxmCzeNifk4%2FCJ5Aw9we9FgkQwnmFaZCvMSg2QNZuE8uad4bVU7VDL7X%2FHs%2FaHBit7PXAf3DJmC1ZGClkHGjkPcTD9%2BsNvoztUExw9zxOWZ%2BHdqbT0uHo58BdUJaziprwZHA0ynPnvTmohM7oMgbO1t%2F%2Bhj5v7YtEkBI7qFdLVvKJKvbeGzYj1Y17mg13masmZDQVqqDMzASv1AG0DoO%2FKcaMcLTDLZ95NLNd4iPXTTpN0%2BVihbHZnaiInuFSjVJafgkQrZnb%2B6tq2JMrgr9Ym7DgOPomNePWI09QV6Puhn1hU3BX9kMS%2BOejjpnxwIvxysrPwNZBO8Do%2BsvBc04DQwXgk4veE%2Fuzl72N%2FXln8GJXjlbgDqNnR6c6e1JSMJ0lViLpawPt%2F4FqfkpGtkp6Nix6vPMJtvVxQdqh9YC1ZpF5gDQlsbbT68U8IANHq467ijE5xq%2FrhaOJ%2BHcV3tn%2FQ4kZTXOEhKNjrLJ1h7tMQv3yT0bvB8rOJMxGorbxH5TezgiMwlnC0HJO3PMN3crr4GOqUB%2BZe7NlpYJuZQGioSfPbRI2lcp92TOdHx8RJ3nIQ93ZYLEikpEsHAQWM%2B7B86rxBD8U0aG6PTHkvouODb85Q626nlkbzsmtrmsfRt8iruBXkLyoSE3kvXzQ9zcEwi6noGl41AEV805TkII1cela2TAeQYYnje67QOkL8qNdXXS0IjgyqozFbgmL4TZRsAep9uqKnHmTxUip0b5094597VDLA5AUAv&X-Amz-Signature=775ab94976845e8d98212b66b900940c691af809d501f8c6c19a47b0233a149a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VRCFZY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQD5Rr53LPKjAgjYBZ8sFyn2cT9HEJqOX5shg5YFH0IP5AIhANxcmpe3QFR4k6DXuXT9gR1PPV4OYJqhbx%2B9UTtPbAgqKv8DCFQQABoMNjM3NDIzMTgzODA1IgzZjf6i%2FSst%2FH2qlEIq3AMYHcBsCn%2FYHDn9k0jQE5H33P2G%2BvhF%2F30zw9UEsXBPXkUFd4qqg9d2nm6tKZZqGUoQzGJ9yz5sVdmrlK8W8J1SbWnMsTFQK2ZyXHVfiOWPV650t5%2BANqPwyDGEZ4STF9PV2Kx1yBzvJEpojuMuwoC%2BFAmuvuvFJS3tzXUudfoKZXttlyE%2FIogsIqO1RmrhZdKylGRHbJT6MQLu8Fxu4wl4eM%2BzGwwmgvWv97J7D8X7FXfneD3i3JSYoTaAXdCicOhYoMtXWwZWD7WaKJYpUl21bulrHM7wjeeW811z8PWC7DaxHHqUrlrtSOh%2B0TYBWRDPB7O0qzjrM%2FII%2FrUjmYT95cEorZKFAho8BH7BgEZvxnk%2BOfLdth3WCJ5OyXarQVrjg6YGFa7tsR7rZ74M3rpc4chX3V8vr63VRpbCYCsJwLQ5GkCbGUsGYJiKQuOS%2Bghysqi0zP7oeDBbs1KRyvxgwzacjRf9miIrPR7aHblLaH6GjO1bjx6YN%2FfD6xkqmG314heIW562%2F6Ujz%2Fmwqj0JQe%2FAc%2BzlY9l3l1ECQnuoifF%2Fe%2BDfISxrJYBRN44D7K6mF%2BT1kzvn427fNUv8vAS6OF1dwND1kKnL0KKaAJFQVHxKEWTsh6deqiP9KjDB3K6%2BBjqkAdEViKU6ia0eW4CpBYt44NEMWBH4ZP%2FHvOGC6ndw%2Fu2t3KOIkscjcT%2BEZJ3tvIjMrqyN1PNcbJDMTLeQs%2B6u2CnTJCmV0IsXgoz4ASBXQBv6AgUAvswJtptxqsVAcrNke42GYHUEYa84J3YHH89vpyWnrCae9k7DI19gjTvHAorxAB11n3cMbATe2LPpKGJyDgRkKzTJNZOLrCeHhFcH93u792VJ&X-Amz-Signature=fa86bb0b19e38149d83f391258e80e3c0de83614d3382a0fb660a7d1e1a65fea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFG6XN4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGM2i58SbI%2B%2BK7EBNqN24deMXq%2FOE1LqMgne7QH9nLM6AiBeX5aZmL2Y8gYjSbAV1oSgcoJG0NG3a2kJ9vpxqlaL3Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMsWo76QhuaULsXYweKtwDolM5lPEqXyaBAC9A6qM%2FU1BY7Vu7Ohj41G2x0Ept5X%2FCvjFCALCTWYAgHzBw0MN2J%2Bqgp7lZkzkI%2BODd%2Bgwhr4ZQJ%2BryAvFs50nJ2tN0VLZvp8u7Q%2F5JwrsUQsPklQGl8MJwCf7TCJVMU159rvwsLvRIt9KG%2BAn%2Ba9o4BCC%2Bn%2FiA4gxDH3nTlX5u3JTQGsfaY8Wh7VNVxtlxouPpVs2F6P1Y6pRVdQ3pl56fu1ydX%2F6jiysCV25nmECbps5AeS89ki8E5V12KupSjo2dXNnroYvlxR11xPH5sj3VzYofHGL65ZzQO19mPPFY1GHx4bMnRypuT%2FvMICAiG1qD29MU2nXj9G%2B3GkbjUpfcYutHEccXqwpw%2BzhLgnFhWIiHb4ToyKvP3BQ5ZD9y9kFxFUTSY5DDcCNSadeIF4OQaorDukTpIdM6zaslEtUU7fQEVynJsFXxCpEhOpPX3f3IkJDPBvQZ4coi7f2gVCMp2oh0z3gwxJjQfv2g113Ll8B2vYWHI1PdD%2F2GghEVvTpS1AuBOWT0K6sC9wQYe0%2FfR03eo0ED09%2Bn4UPhhpSAazFHbBeZjNU205K5mJ2RGal7iIS36SX76D0AJebqT4lLtaHqyBq8yGsgHtemp1O7lqAwwdyuvgY6pgF1NfIuoaGew56PyRwAbijsu9t3GEkkp3jwwtClhrScB6eUa0DT%2FA6B3BO6VvTRXxfFB3ZgAuBJf21FwHIdfxldvbOll07naCZn6UT%2BWimGAMh%2BH1vHPYdCI7kq6JvWeXRulAVKhj4esWbFlaGUoOLvF09%2BZbCFGAkzLrlxRiBE5jSvVKxDIPRw5rLl7kTkHMl6O1JCEEZLqgwOZl%2BMwahelmbmohPe&X-Amz-Signature=43c04136233c46377dcc93df7de4ed671a8f4ed1a94d661c5e43fd4dd8b67a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
