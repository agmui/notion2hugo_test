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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZW2MF6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIC4hT%2BMt6%2F36lRT0p3mbCLKDYh6jMy5lqc2X0j8e83eQAiB%2F9O46OUOKp6sj2PNkfxjNpTSnQe9QYqJViyBir%2BeemSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMM%2FAmCYwctBmIAjEgKtwDdXet9wt%2BrtL%2FmRXQLvaUAQR800XweMY9Lo77vkC1ks4QeGuaIhWeA3EFzy0%2BIvqUeLZf76otSavdNOvoMWQo93ZGv5IXDS8j7H4iymmeJTeeKWIIeamqubhGLl4pspHGFbJ9Sm1CZWAMUIgFkxe43vJwQAGbItpIIf6uWoV9L9hCNRmAEqvG8Czf5fCJcMNtyIWqwsKTkD4GvXqz73vzo5MFHQasTjspnLYOrNZzEQa7i9bIWdvH4sSAZogKk1GmiSzDWOxhr5Txe38l%2FBHObe7PdRRUHN7kYmU7iCsqmpMfjT20iR6rk7WSjXewENrsXsBItwOsse4gN3N4vpFQmU92xICJC5dOREB71VhJ0hB%2FlvH2wcsuwj6gZ67eRMRkcqOcGeoOI32Dqb8mxcAdOjRU90fUTp0sQAPhpKGt%2BGtd2ADv7dVnKZk%2Bp4VJaqomnwgQC68Cxoc6VB1eqzil0o%2FSnU6VJpC7%2FqKBtBx%2F10vN3WAfvSe1WDu56i2N1zQw1BPM%2BDa0cUdn2naSKyP3HP15bD188qt1WQJJakh0isDYJPgdBJDvw5TW7o21YMMGdaBN8d5Uf0UgAyQFDU9ub5IonJesD0pnBQmyejX6nEZdC%2FcNYTm5m9U%2FM3gwurv%2BvQY6pgEcPSyjoN7Tq2QUy8rLTex%2FyTKFFSUAlgsL5nmJe1F2KyafhpB09KL7RuBDD8oDM7oIcqW9Ly%2F3OnNfmX6UcrHZcj4xBVWD0BzRkoIELjCWX2bP%2FLXF0a3Gu9t9OBqT73t%2FdqjjT5z7YSxMHBKttiYyfWOytevPXjSwQTeLEL5xiz5yN5HIA7yvQ2bW3bhiDKDQrM0T0e8pl9mh4jTR8u%2FFGPBJDUYo&X-Amz-Signature=3c432247d82a733f6b5cf5dad54394005805300dbca4c726869c893a3420fa16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZW2MF6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIC4hT%2BMt6%2F36lRT0p3mbCLKDYh6jMy5lqc2X0j8e83eQAiB%2F9O46OUOKp6sj2PNkfxjNpTSnQe9QYqJViyBir%2BeemSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMM%2FAmCYwctBmIAjEgKtwDdXet9wt%2BrtL%2FmRXQLvaUAQR800XweMY9Lo77vkC1ks4QeGuaIhWeA3EFzy0%2BIvqUeLZf76otSavdNOvoMWQo93ZGv5IXDS8j7H4iymmeJTeeKWIIeamqubhGLl4pspHGFbJ9Sm1CZWAMUIgFkxe43vJwQAGbItpIIf6uWoV9L9hCNRmAEqvG8Czf5fCJcMNtyIWqwsKTkD4GvXqz73vzo5MFHQasTjspnLYOrNZzEQa7i9bIWdvH4sSAZogKk1GmiSzDWOxhr5Txe38l%2FBHObe7PdRRUHN7kYmU7iCsqmpMfjT20iR6rk7WSjXewENrsXsBItwOsse4gN3N4vpFQmU92xICJC5dOREB71VhJ0hB%2FlvH2wcsuwj6gZ67eRMRkcqOcGeoOI32Dqb8mxcAdOjRU90fUTp0sQAPhpKGt%2BGtd2ADv7dVnKZk%2Bp4VJaqomnwgQC68Cxoc6VB1eqzil0o%2FSnU6VJpC7%2FqKBtBx%2F10vN3WAfvSe1WDu56i2N1zQw1BPM%2BDa0cUdn2naSKyP3HP15bD188qt1WQJJakh0isDYJPgdBJDvw5TW7o21YMMGdaBN8d5Uf0UgAyQFDU9ub5IonJesD0pnBQmyejX6nEZdC%2FcNYTm5m9U%2FM3gwurv%2BvQY6pgEcPSyjoN7Tq2QUy8rLTex%2FyTKFFSUAlgsL5nmJe1F2KyafhpB09KL7RuBDD8oDM7oIcqW9Ly%2F3OnNfmX6UcrHZcj4xBVWD0BzRkoIELjCWX2bP%2FLXF0a3Gu9t9OBqT73t%2FdqjjT5z7YSxMHBKttiYyfWOytevPXjSwQTeLEL5xiz5yN5HIA7yvQ2bW3bhiDKDQrM0T0e8pl9mh4jTR8u%2FFGPBJDUYo&X-Amz-Signature=3f2783f087719011c72f659b491f9f810c39ef87ea1ce56f031fe8902f72a166&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7R4GCV7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC6Bht%2FPC0f2DneM3bGs6SRNuRj3oiS7ELSGD2vCv%2B3gQIhANy9s17OMaQUATC85g5Ga6azNjHgaVw%2FV%2BV3%2FKVDE7jXKv8DCGgQABoMNjM3NDIzMTgzODA1Igxbe%2BRqrltrUnyC6WEq3ANlJiGsW%2FdakwqLCchxLanRSTIluh9xTwzWiBXe7PN10Av0dPOzY58khfJx5BmvAov5loNOZsG6x18AShA5u9JPAS8lDbr2QcB4szwh9jGDZZGV3osvf0Psgj6o0MozrY4uUZQXZaqBZhEgWa%2Fq9JEoyIF5SdhOEQiOhT9jtR1e0qm4Xv%2FyszDL4KJN8eI0NOWerkyig5S1MQHEsos0HIxTbAROVajNvhtFCH8Zrk%2BXzUMV2UKn5H6kX8ucnqjy0E1DTkk3%2FfBIzyAwYBbP927c23pQDd7ZyMAxvS4D%2FSWuIxyQZGjrF0DpDtY8O5aPPP6kR6pX8VjbMTnlRcWGOxv8KjHBIJSfNYX1T67E1gOefX%2BCYqO%2B1i%2F1b6CEuYkbjpAOco43X8YkmGK2vNOaVsCWRUrR%2FTaPI2yii54yLtVPQfL0DsablhdL5neZP1n0dVpvcC40rlZVGW%2FQYmtbCrl7VrlEgIVzodaPwlLM34TXFNEpK2Z7lRD7LkWwa426MDCpG5ttQVWgNqaIaa3QZr90BJdFBFZPihOoZMzNIKAVZFK70awfsk%2FrncBbeBqejWt8qJfgjfnkKq%2FrsPw5bjHcX1CnVe7fCSGw8Dl2aoJZB38aetk83m40t1ZS3TCNu%2F69BjqkAWJkc7MbL0ljB8P5AJ2%2FnfIm4R%2BRGVxsL6kAIUR4FC%2FcoOIVu8M6scRmFme%2BaUnEwcpjny%2FYUIUf842XiBwLk0r8XmMDGVJtq0BzSGwQ3hXyTE2BVzallEHHqcD%2FViJePaklzJWWsxmp6Y566Yvn5xDAieWFU6sFlHOqi%2B%2BNiITHmWLxNnQetW%2BuCBESYwkoQGljhDoNG4V%2Bh4KphJhGrSa0STWE&X-Amz-Signature=a8d8fff761cc4bb415b136ac3eb8fce2280330fc6bc6232e87027d6c325a7d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3IF7QU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEUX%2FUyg2rnCybMJw1bnaewt8A3XkwYofLUUxwfOgOOVAiEAmYv3x0NwuBcosFrd3ExB%2FP6SMSNLscpffpsfokmH9Ioq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKYz13uspwbxzewfJSrcAwhYD5TZlb4c7D72cOcFmkio0BRrdsygkUTIjcNTr%2FWtF4pCsC835GNvtNodX0IJ39otzghOqWnY8lusxzzBom2lKwxcVCo%2FWWmNBdbacfJtYl%2B0ReElS58ZRhFLjuk4JQFeZ7xs8l8rk6OWXBCtgdEq9MpjhmD6psAb0vZOmfjgYHIU3ZG5slv37oTTPOBv3eJLJGkPqo7S3zPuFeU34woHjj%2B2McFs%2F9u5BeiHUY96S5c0EhBJSJDl2p1dH5eMUYTtFgl%2B0oza1ndz9OBxun0t9wL1geE%2FTEFuyMrp0nkospIsu1y5PBjnr0SE%2BMifysQr8sr74WwO8vbTEIkWHSF4E1atkIvfHti%2BLUcueogARV1iMKDgnOOWV%2FTnsK4HCOqkf8N7qflTMTESCZA2AY80w3jRc7aAPBv1tXlS8JMqvN8aynyQ%2BCjg1HpWZfWY0BL2Fo9wN0G1q1CRUatfYb0mJhpINBt7G5HiC3Tv0I2aYAGYDq6qY%2F7%2F7%2B3mZT50TjbtfBr79Oy8c2jgpHLHVQiOByPa9ZRk%2BEaXaal79WAFqUPFLdQoM%2Bx0CRFK1RHTW9fkZVI3ISqHQORjBPw%2FO1CpGrFf1yY1tkRB%2Bd0R3WPuoa60HVwhDqYStP%2FJMLe7%2Fr0GOqUB8bQVgcajTe59voY84R82bfhV9%2FuT3iLMbZb%2F3V50Qap61upm8K4i0nqOrzX0bVLqR%2BWW0cYhzHAN9QsOxd5PzVATkVzIlJDz%2FhRTkFiJEfsPW8yxEyQ5LKLr5U%2FiNSSs%2FCP0HN31zLSeQ0U7q0aWc1%2BR4mGeCQK%2F%2BchtU1Un0WadseiYfmIqOJkkGg05ODyzoqDCjDthqv%2FWyaqKGq3L85iAbLgw&X-Amz-Signature=c5f969580eaa213c0ed81f0b39ae1801264c69c716997d4517a536251d433ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZW2MF6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIC4hT%2BMt6%2F36lRT0p3mbCLKDYh6jMy5lqc2X0j8e83eQAiB%2F9O46OUOKp6sj2PNkfxjNpTSnQe9QYqJViyBir%2BeemSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMM%2FAmCYwctBmIAjEgKtwDdXet9wt%2BrtL%2FmRXQLvaUAQR800XweMY9Lo77vkC1ks4QeGuaIhWeA3EFzy0%2BIvqUeLZf76otSavdNOvoMWQo93ZGv5IXDS8j7H4iymmeJTeeKWIIeamqubhGLl4pspHGFbJ9Sm1CZWAMUIgFkxe43vJwQAGbItpIIf6uWoV9L9hCNRmAEqvG8Czf5fCJcMNtyIWqwsKTkD4GvXqz73vzo5MFHQasTjspnLYOrNZzEQa7i9bIWdvH4sSAZogKk1GmiSzDWOxhr5Txe38l%2FBHObe7PdRRUHN7kYmU7iCsqmpMfjT20iR6rk7WSjXewENrsXsBItwOsse4gN3N4vpFQmU92xICJC5dOREB71VhJ0hB%2FlvH2wcsuwj6gZ67eRMRkcqOcGeoOI32Dqb8mxcAdOjRU90fUTp0sQAPhpKGt%2BGtd2ADv7dVnKZk%2Bp4VJaqomnwgQC68Cxoc6VB1eqzil0o%2FSnU6VJpC7%2FqKBtBx%2F10vN3WAfvSe1WDu56i2N1zQw1BPM%2BDa0cUdn2naSKyP3HP15bD188qt1WQJJakh0isDYJPgdBJDvw5TW7o21YMMGdaBN8d5Uf0UgAyQFDU9ub5IonJesD0pnBQmyejX6nEZdC%2FcNYTm5m9U%2FM3gwurv%2BvQY6pgEcPSyjoN7Tq2QUy8rLTex%2FyTKFFSUAlgsL5nmJe1F2KyafhpB09KL7RuBDD8oDM7oIcqW9Ly%2F3OnNfmX6UcrHZcj4xBVWD0BzRkoIELjCWX2bP%2FLXF0a3Gu9t9OBqT73t%2FdqjjT5z7YSxMHBKttiYyfWOytevPXjSwQTeLEL5xiz5yN5HIA7yvQ2bW3bhiDKDQrM0T0e8pl9mh4jTR8u%2FFGPBJDUYo&X-Amz-Signature=21cf669a59a2a15bc1e5a44f030eb96284c7b905e4866bfbfe85416c7782bbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
