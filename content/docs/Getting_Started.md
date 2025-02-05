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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC57CK7L%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFimJ2S2371M3rcHbZTzAQlmilDKmNLOCYAKwnIAItuEAiBKCBvVSdSLWtSlwLxw4i084DkJ%2FrV0nWWO4tewIsCMSir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM9jBgHJKLZ9QlUH2qKtwDBhjsmo0Llo4hQGzfeO5%2F%2BFKQwp2zh37LllaTw6RVFVTg2JklqfQV1W4c3A1h7G6Oecfn2xn7JcZckkTEnW%2FzZu42fD3ljxMqRL4cFM1b9TpZw2jt%2FggMYp1ZAg0YG57Xiy27Y3il4UpIs0V1%2FEFiAmgiI2S2EQxXmEM1kq%2F0ZP0DX64yROxk8dGgvPiZgk3P0fVtc9noj1TXIiLnxOF5BtuzesyII7nhHegMnVzITrm5%2BYcdRilRmhizKRas5N9fDkTRJ2O3t3g38tu0rIFeuO3xtAL3CfH9eK0izSBwzkHBaWTgQbq4eyBR3MEqzY1pCEfI9aMlT1nQinV2P%2Bc2JMDucXO6CqtFTcl7W464JTrhy%2BXMe%2FQLmsOp9QRAJ13GFvc0rK%2Ft%2FTE74wg%2B9a%2B6%2B6HDkcYRZieXSZN3rMxFExF56YYmriA1sL%2FCk5ovd52lebsae0DfV3UgCrjffg%2F1TXCSbJhjGHLY%2B88hFPwUzTWnn2oOBGVx0EDmlC7AY8GsA19ovvN16djGiPT8TROFxhwaq9f9Bx26c6LSpWXzOc3A9BMv6mjtBZCBry10b3nRyUrYbZ3zWq71Ne6BkdI0C3xpAftPKfApTcbySQOWjCiKVBTExUkAE9a2gigwk9CMvQY6pgHRdYzFU1J8ntanEwW2hnAFpZYluJeeTtIB%2BfNfKLrqXlAelb%2BSW5ChX817Cd%2Bfj4Hpi2DzSTu1%2Fnk6au5D%2FsOZ%2BP6h5ShMup4sooRuiGTZbWas3U%2BLmMLwuCSRq1JD5gWXwGDpN7c%2FmYw9nSK%2B9bi4B9ruok2mjS0CXteBju1Z9L0bPrjHYd12XXlj4Ju0eCg9uvaTUIg6jmOyOkzsx17SWQiHz9Pz&X-Amz-Signature=95e9963506590d7c3abcebd1bdf94f61620527dddac7a50255e0c96d4a8217b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC57CK7L%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFimJ2S2371M3rcHbZTzAQlmilDKmNLOCYAKwnIAItuEAiBKCBvVSdSLWtSlwLxw4i084DkJ%2FrV0nWWO4tewIsCMSir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM9jBgHJKLZ9QlUH2qKtwDBhjsmo0Llo4hQGzfeO5%2F%2BFKQwp2zh37LllaTw6RVFVTg2JklqfQV1W4c3A1h7G6Oecfn2xn7JcZckkTEnW%2FzZu42fD3ljxMqRL4cFM1b9TpZw2jt%2FggMYp1ZAg0YG57Xiy27Y3il4UpIs0V1%2FEFiAmgiI2S2EQxXmEM1kq%2F0ZP0DX64yROxk8dGgvPiZgk3P0fVtc9noj1TXIiLnxOF5BtuzesyII7nhHegMnVzITrm5%2BYcdRilRmhizKRas5N9fDkTRJ2O3t3g38tu0rIFeuO3xtAL3CfH9eK0izSBwzkHBaWTgQbq4eyBR3MEqzY1pCEfI9aMlT1nQinV2P%2Bc2JMDucXO6CqtFTcl7W464JTrhy%2BXMe%2FQLmsOp9QRAJ13GFvc0rK%2Ft%2FTE74wg%2B9a%2B6%2B6HDkcYRZieXSZN3rMxFExF56YYmriA1sL%2FCk5ovd52lebsae0DfV3UgCrjffg%2F1TXCSbJhjGHLY%2B88hFPwUzTWnn2oOBGVx0EDmlC7AY8GsA19ovvN16djGiPT8TROFxhwaq9f9Bx26c6LSpWXzOc3A9BMv6mjtBZCBry10b3nRyUrYbZ3zWq71Ne6BkdI0C3xpAftPKfApTcbySQOWjCiKVBTExUkAE9a2gigwk9CMvQY6pgHRdYzFU1J8ntanEwW2hnAFpZYluJeeTtIB%2BfNfKLrqXlAelb%2BSW5ChX817Cd%2Bfj4Hpi2DzSTu1%2Fnk6au5D%2FsOZ%2BP6h5ShMup4sooRuiGTZbWas3U%2BLmMLwuCSRq1JD5gWXwGDpN7c%2FmYw9nSK%2B9bi4B9ruok2mjS0CXteBju1Z9L0bPrjHYd12XXlj4Ju0eCg9uvaTUIg6jmOyOkzsx17SWQiHz9Pz&X-Amz-Signature=cf84eb97e4660c4619c8eb99c7ab1f495a3324b37717bac38b7aa7c2a3761364&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR5QLKP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIESq9qsz5u%2Box6fM9729TcRBdGYo33sLI1v%2FAwG1m5phAiAsDSh6Ut5oEgOYHI8OnXyPAzS4RJsXQpEQduNPS4OnKSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKktJfgtHU9gEmbyTKtwDtaonVxyWERMwqyUSd%2FiihUxxLgzq4gzuHnH0RUz4K41luZcH4sQOoN72xc8v9CgpHTviJCg9DJdUtQPXK20%2F35sUPJYvXSLMDQCUaWJjPLcW3tqk2DvIhfKsDGxQ5DKTCgq0Y4dpnVVhyM6ikj0dCsyxWTtjunfLkv41LNPJqTL%2BDmeSZity4PKmTvqOHJF4pQ9H2zvHzYVlkDRYTiAZhSIZrWBcZ42nCDcf6ILV5YKz%2F3wj1tcx0WtCW8uBN%2FKoBCPkmaLPuX86h%2Bul1L21IC3Vtq9%2BGTVxHQ5mF5xA1HkJZ6tg%2Fvp0pf%2BlE4g76cpDq1xVo23Ms%2BfObRgG46GKKGNwyz47D7zL3d23ucgOy%2BAnMLHgBthxHZDKB8OJlZZQbMYmsTRZRO2IClemr8YNJrSLseClDMjKFMJDmAlVb61tTeiM0Jy3B0dGOBs8j7xrKyu9EAVmi2ek12G4CfpwtatiVP%2FWt1pozpn8evUbnZYUe%2Frxk%2BkuMf1NqHV6JkUacJPZd3JPwvtguW0%2FoIkAU1GhN78sPsj06WJbD8DloAKhIQSiAR%2FwqVgkPQty5XqBJ3i5CICEay9tjheocnT1JlBhmULpnLDjMUGVe0y7kfeRLBKIBcNg2aLxJVQwidGMvQY6pgEsEEKrcOfY%2B3KcXNogUu6iSBVwNa6x1SAfEPFCb9ie9nEJPzgKwiTwqZfr8Zm533kMEOXdDv25%2BmGPwD9jQneLueXgV6blLkLxlWrDj7hLvL6WcVSwGC0n3EUIGvK0ewWW6yKXFSns2m37eyVcWUUudDJXPBjc5A7HMKMrhtizFsfGhVNujq25MSTw%2FynnCwjqAzT%2F0rF3XUBfdx1HlX5%2Bk749qees&X-Amz-Signature=69aac7b9cf6f7594955323f31c409dda1b2c3c99b59e562e8af4bd7e11cba05f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADSIDQC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDGx%2BzQf4AbhrMHeZFIxQ0e7dfuzvQhxF367d6XYMBTSwIgYpV7IfASX0Zt7PSw9InpTg69vKVCtA3xs0HqlWwU%2Becq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKj2bDu6fikG2Hg3ySrcA%2Fnifu%2BdxftX43X4HMlcxEn7%2FzKfJzgSoLRkK%2FlYbY4eJRskeK22EtYYH7h0CvNqZXOM0Q3hqqbmouCyoGP01cNPcXnIY6AMyeWxjaAVfAyXlkS%2BODllHaH4TtIaKWwbHCijjJDPqPZTvVIGRYc%2BIafbJu7odPlaYo%2FK0kspHBUf67TAHX6nNUoF4UwoUZtM8nFvUlmpk%2Fsey2s68i%2BCMwTv7SbqMinniyUq7wClAtuUhH%2Beo0lmx%2BlGMOqX4sdCDhHZiZlXAxy9bqrI%2BrtWS%2FIDpBQZVLhP0RD%2Fu21JrXS9%2FIC6fIsUml0qhDOin9au539n%2FYBFyu98CLZMZkP%2BBO5gA8YEepaMJSVckRuJ6igFiidW6aVsJxIG1baOl%2Fn2JwHoZB535FXeYLeqUeNQ9u5bdT5PLJYIYuPKWABVhg6YAFyM%2Fxk95pOFIWyhGo2vY9h0ZKWGaQrTidJAYNjlGEPbVB4dGHTpXdq3inY%2FHk0pKCfKHRCAZoXuRqRYj4cS7VRBUJnbz8mWeyfqnebGg3i%2BQ8CRyyVppI3HdewY1XH8z6R29SIiVlQx%2Fb4l92QluvBrDqs5Iljv24J1T0Ha%2Fd%2FENL0QAG6vnpyQlYnZhSHdvYmIOXpV8ncNXe4dMKHQjL0GOqUBRuQbJRXY9Oc1jGv0xdBKSWmsVuns4kVEzga%2BSgfP8d0FYmmnaiP4kRB%2FEFsRti5mNpv0HFej1NJJ%2B6P%2BvYoLhDw8Q2DPnSPsqxq5rFbIHiriXpJOvTr5E0ntw9hFAlezzXznTGQ%2FZE4%2B8EHSUAEjLFUHJxtNTTgDnnSWDsenmVp9607%2FN%2FHNU997Y7NNrFUkNwLteYOJp4AkhCKnOmt0%2B1R%2Bx4A4&X-Amz-Signature=beaf47bb2a653b8c5f8f43de49a1b18dd96f13a85baa8a70d6828f9ff7901395&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC57CK7L%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFimJ2S2371M3rcHbZTzAQlmilDKmNLOCYAKwnIAItuEAiBKCBvVSdSLWtSlwLxw4i084DkJ%2FrV0nWWO4tewIsCMSir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM9jBgHJKLZ9QlUH2qKtwDBhjsmo0Llo4hQGzfeO5%2F%2BFKQwp2zh37LllaTw6RVFVTg2JklqfQV1W4c3A1h7G6Oecfn2xn7JcZckkTEnW%2FzZu42fD3ljxMqRL4cFM1b9TpZw2jt%2FggMYp1ZAg0YG57Xiy27Y3il4UpIs0V1%2FEFiAmgiI2S2EQxXmEM1kq%2F0ZP0DX64yROxk8dGgvPiZgk3P0fVtc9noj1TXIiLnxOF5BtuzesyII7nhHegMnVzITrm5%2BYcdRilRmhizKRas5N9fDkTRJ2O3t3g38tu0rIFeuO3xtAL3CfH9eK0izSBwzkHBaWTgQbq4eyBR3MEqzY1pCEfI9aMlT1nQinV2P%2Bc2JMDucXO6CqtFTcl7W464JTrhy%2BXMe%2FQLmsOp9QRAJ13GFvc0rK%2Ft%2FTE74wg%2B9a%2B6%2B6HDkcYRZieXSZN3rMxFExF56YYmriA1sL%2FCk5ovd52lebsae0DfV3UgCrjffg%2F1TXCSbJhjGHLY%2B88hFPwUzTWnn2oOBGVx0EDmlC7AY8GsA19ovvN16djGiPT8TROFxhwaq9f9Bx26c6LSpWXzOc3A9BMv6mjtBZCBry10b3nRyUrYbZ3zWq71Ne6BkdI0C3xpAftPKfApTcbySQOWjCiKVBTExUkAE9a2gigwk9CMvQY6pgHRdYzFU1J8ntanEwW2hnAFpZYluJeeTtIB%2BfNfKLrqXlAelb%2BSW5ChX817Cd%2Bfj4Hpi2DzSTu1%2Fnk6au5D%2FsOZ%2BP6h5ShMup4sooRuiGTZbWas3U%2BLmMLwuCSRq1JD5gWXwGDpN7c%2FmYw9nSK%2B9bi4B9ruok2mjS0CXteBju1Z9L0bPrjHYd12XXlj4Ju0eCg9uvaTUIg6jmOyOkzsx17SWQiHz9Pz&X-Amz-Signature=d4045dd74063e749224582e174691226d2f7329922736b6833e08eaf24f736af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
