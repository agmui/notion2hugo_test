---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRULSN7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOy%2BFF6mRVl0r3cwXlcoMSFhlOf1Xz2%2F2O7mgoEQIFUAiBeDWYYoGUnt5fgSsZU0sQ7P%2BROu60EVXk0aWDaUiIshyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTC2DJ%2B0vHHEC1IMKtwDi6s1%2Brvlj9YToty2jz%2BLExnaNTXRceo32ReJpXLYNCcJWG1FZ7Xij2YduBdWKCD6oTn1kSzny7rgPiikaihAt7b9nM8a00XV%2FRB6uk%2FYQA4jRuksWZ5bd2Cjc5lhKhwQ%2FpeQXW3IDMR%2Bcu4ohaimC6XCl30CVd8LwAXRFI7C4M97O%2F%2F7pac9DLisU44fGTkcLCz4YMRRacwNf%2Fi9ykeYNu0xlK%2Bq5I2c8vO4P8OEtg84aQq1CkMr5LJdLsel7Htxr9duSih3Va438AR%2B9kPbVGfqQNPgDgZMyKk5Z46skDbpn0kncj6F8SRlumfehj1Jlvwm7ffkhE%2FEcPuOcBxjHiPIe2lPBVey0R62vqEyNd83282h%2BhFeGHMCmZbZBgQKxPluWKOomVbzg3c7n0bcHR1vM%2BaR4TTuN03LBijDMx%2F0645mYnMbpS8I9WTayNGieXHyzGth0RD9ZTlQ%2BP1ZeTp9MNXJwAQ%2BhhGA1KcWNb9Q5RlguGAPmWRQ8kdjJ%2BIIy6r2OsGG1saQgXy7UzhJ2NmCX%2FO5mbmcD%2FlWgqWB70k46Qz%2BVFfMoMvIWFOj6zNcjAcCqQLJEyZueS8XNLQjNN9YBvRr%2BtkrXt0jMmQvxdVWSebStt2vOn%2BMlMUwu4%2F8wAY6pgHcEehTqy%2BGPyq%2FPOg%2F%2FAyjBrX8Kq9iFfWZdEvEzZDmNRHYrM87g2HznNShHClBRoldKFNyFKAhCBRJQGD16gjEa1NiJ2z0Hwq7rC9RGvwT7KmTIw1Yf4o4ZKPAHTB53BNmc%2BEMTOuU%2BaXdRBmxXd1AVWMMZWTWgym5vvekVAioQmHKON8IxZ8LKxndXc%2FluvYcmGLFaWIrSBCUwO%2FXs0pIcEuMa0xz&X-Amz-Signature=059fdc2f426bf18657a64ac7182022ba84e86963e695d3fbdcb918f6fc515a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRULSN7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOy%2BFF6mRVl0r3cwXlcoMSFhlOf1Xz2%2F2O7mgoEQIFUAiBeDWYYoGUnt5fgSsZU0sQ7P%2BROu60EVXk0aWDaUiIshyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTC2DJ%2B0vHHEC1IMKtwDi6s1%2Brvlj9YToty2jz%2BLExnaNTXRceo32ReJpXLYNCcJWG1FZ7Xij2YduBdWKCD6oTn1kSzny7rgPiikaihAt7b9nM8a00XV%2FRB6uk%2FYQA4jRuksWZ5bd2Cjc5lhKhwQ%2FpeQXW3IDMR%2Bcu4ohaimC6XCl30CVd8LwAXRFI7C4M97O%2F%2F7pac9DLisU44fGTkcLCz4YMRRacwNf%2Fi9ykeYNu0xlK%2Bq5I2c8vO4P8OEtg84aQq1CkMr5LJdLsel7Htxr9duSih3Va438AR%2B9kPbVGfqQNPgDgZMyKk5Z46skDbpn0kncj6F8SRlumfehj1Jlvwm7ffkhE%2FEcPuOcBxjHiPIe2lPBVey0R62vqEyNd83282h%2BhFeGHMCmZbZBgQKxPluWKOomVbzg3c7n0bcHR1vM%2BaR4TTuN03LBijDMx%2F0645mYnMbpS8I9WTayNGieXHyzGth0RD9ZTlQ%2BP1ZeTp9MNXJwAQ%2BhhGA1KcWNb9Q5RlguGAPmWRQ8kdjJ%2BIIy6r2OsGG1saQgXy7UzhJ2NmCX%2FO5mbmcD%2FlWgqWB70k46Qz%2BVFfMoMvIWFOj6zNcjAcCqQLJEyZueS8XNLQjNN9YBvRr%2BtkrXt0jMmQvxdVWSebStt2vOn%2BMlMUwu4%2F8wAY6pgHcEehTqy%2BGPyq%2FPOg%2F%2FAyjBrX8Kq9iFfWZdEvEzZDmNRHYrM87g2HznNShHClBRoldKFNyFKAhCBRJQGD16gjEa1NiJ2z0Hwq7rC9RGvwT7KmTIw1Yf4o4ZKPAHTB53BNmc%2BEMTOuU%2BaXdRBmxXd1AVWMMZWTWgym5vvekVAioQmHKON8IxZ8LKxndXc%2FluvYcmGLFaWIrSBCUwO%2FXs0pIcEuMa0xz&X-Amz-Signature=8c90a823fb2b58c40ede8f54b13eeee5a04d9b029c7948152aff3edbe0b34f08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRULSN7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOy%2BFF6mRVl0r3cwXlcoMSFhlOf1Xz2%2F2O7mgoEQIFUAiBeDWYYoGUnt5fgSsZU0sQ7P%2BROu60EVXk0aWDaUiIshyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTC2DJ%2B0vHHEC1IMKtwDi6s1%2Brvlj9YToty2jz%2BLExnaNTXRceo32ReJpXLYNCcJWG1FZ7Xij2YduBdWKCD6oTn1kSzny7rgPiikaihAt7b9nM8a00XV%2FRB6uk%2FYQA4jRuksWZ5bd2Cjc5lhKhwQ%2FpeQXW3IDMR%2Bcu4ohaimC6XCl30CVd8LwAXRFI7C4M97O%2F%2F7pac9DLisU44fGTkcLCz4YMRRacwNf%2Fi9ykeYNu0xlK%2Bq5I2c8vO4P8OEtg84aQq1CkMr5LJdLsel7Htxr9duSih3Va438AR%2B9kPbVGfqQNPgDgZMyKk5Z46skDbpn0kncj6F8SRlumfehj1Jlvwm7ffkhE%2FEcPuOcBxjHiPIe2lPBVey0R62vqEyNd83282h%2BhFeGHMCmZbZBgQKxPluWKOomVbzg3c7n0bcHR1vM%2BaR4TTuN03LBijDMx%2F0645mYnMbpS8I9WTayNGieXHyzGth0RD9ZTlQ%2BP1ZeTp9MNXJwAQ%2BhhGA1KcWNb9Q5RlguGAPmWRQ8kdjJ%2BIIy6r2OsGG1saQgXy7UzhJ2NmCX%2FO5mbmcD%2FlWgqWB70k46Qz%2BVFfMoMvIWFOj6zNcjAcCqQLJEyZueS8XNLQjNN9YBvRr%2BtkrXt0jMmQvxdVWSebStt2vOn%2BMlMUwu4%2F8wAY6pgHcEehTqy%2BGPyq%2FPOg%2F%2FAyjBrX8Kq9iFfWZdEvEzZDmNRHYrM87g2HznNShHClBRoldKFNyFKAhCBRJQGD16gjEa1NiJ2z0Hwq7rC9RGvwT7KmTIw1Yf4o4ZKPAHTB53BNmc%2BEMTOuU%2BaXdRBmxXd1AVWMMZWTWgym5vvekVAioQmHKON8IxZ8LKxndXc%2FluvYcmGLFaWIrSBCUwO%2FXs0pIcEuMa0xz&X-Amz-Signature=de60f472e5c858506c1f1e9a8c4bbe1ee6c86f052e7e91ae4d24176f8f8be857&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFG5BI7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB5DlS8FIQH7K9ytvBX%2BqQueYqY0PwHCif2CkUw6GoWQIgTrMt%2FM%2BS1WLGNTjNbGKLnDZyPp77XRRR7Og0uz9Erk4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcopFNczgEQbaB%2BMyrcAxdFC3vu3X1Y1KtwiHGJpBwDWTSCygsWT%2FGgJScF4vgqnHoZK1GVz6aGjOv75dmi55SX4hEbBSKjEx0zeXMDKse6SItet5YxMtr7aEaJQyKoCRivwGSNv3ZMFVGWe8GpVEkUuLtoIPu3EbcW0YzOTb%2B9Zsdungf1HmFQr6PhTcg%2FgTX74cIMjrBIwlIBeBCwC9obA5wIVWiLC7S24pGkdSXyKuLWe3OebuniRObRKC6a3qLvuucBZzH%2B%2FF7oSztY1kRED0CwMoiMkJVWVY8B%2Bil2UpA9yH5FeoxmV9FiyT8h82k1tcGiM%2FHg1CbXcDYp7Z8YqsxTcL8x5L0C56ASiTk5pTkMvlcI%2FTMOHeV1hVj1uI8zqMyRf5PrR46kx%2F%2BdZvHzoHd9wCDIdj%2F3L1rF9w3ymZE6OvrLQPsfzmpoc8tWV9Q8grNyMKfwGHT0U726g0QwGZMjgqmk4%2FQ2aJmSG1xEezJ4rTtAuH%2BJwyMWHAMjD7JZzOfWpiKGpXaa2%2FY5qU6GRH95BQtVQACNY9uFJ%2BQ7Em6i40VLnAxK6ymHjpReTRmMZJSGveJv3nkxKc97JNL0UbQCb0TRpRVv0YbfFUb%2Flpw9RP9KbRGMXu%2FLKQrUtdhFpxx1%2FEvVoTJ8ML6P%2FMAGOqUBO2zvoIkYuxrR7TyHKHJeeV4OgQfkcxnqCV2rdPtdyutXloGaSMa%2BrU4JT5L9YvYKAMyhBUepiXYXsSNIHbDjJ99hKlay3HdiFepzJSUMTJhsipcf0OXEKv1uYltHd0%2Ft1SJXrfKoAj7D%2Bguc27eaewXVqricY2v%2F1VOmqztMA2PLGAWa4euPhRje%2BGQKeri8MqVhLtW84jJRO%2ByXDtFdYmc1vpZX&X-Amz-Signature=7b449e530fb455989711ee6bd750c3251cf6d5fcbd5baf800e2331a140e77636&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AORWS4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyPcF4sIZrxXX6G4AzmZfc0mUdA89Jm9JZMIyJpTweCwIhAN9p8ab9agfk4rRj%2FEv36%2FRks06hbLwYFtKxcSiWzMRvKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR3Xgzfe3ZXrx63ikq3ANu5Esafp%2FHbzGoKqMc8ljpQwxgQMUt%2BEejwjFlRfToEjib%2BJr%2BkDu15iHTCgdJx%2B1fwzC3gZ6Gb5g9Pnq6xeNrgB2m5xUqN2NHMUEQdOxhj3n%2FU5%2FRDxDDD55iUWo6Nq4qY5BIILlwlflN%2F4KPSKm7%2Bj2y%2B52crg6nf5OHI28WpyF1UkfsQcc6r3fIpPIqJr3Tk8tlWV9TFendqgIV4sx%2FQC63O4Y0S4f5WES4JVHy0CiWhEPnemd1NyZk5xAESpcrxNmL1NieQ9p%2FRYtLAdF8RRs5zA7Bvcj7aGHOYfcJgjnLceHwQQchgkfry77aPKz0wEpOvzOpKp0cQAr7HRp5i6tyTNyWm0NxH6Qi9%2BfYAvneyUP1SQQWt3ofINc%2FMR5ENOVBqIetgQdB2qFjtDHV%2FzYUcLTvsePnJR7TCwQytGJuAGB4YxGZU3jcM0amjwZIOOfjPZqIC7NRKkAj%2FmjvdIWClV8Q%2F1bNDO9hFKFBOplxAqumi9y32jVFSA%2BTyB2DJkQgYhc6Di7oJM0ZpCTUhS6IvecD6OOrxeJ4vCvkMT0NHoLsTuZRUT52YrWcCcS1OrdCx90whmVU6eEz54nvbvKhcAXVuAq3ujdJDzIG5Jj%2B5SXTNh9ItTHoyjCLjP3ABjqkAcsqCkLkwTAsqoDdSsADFkhmayuwkd83B1DF6SkY5ytKPIliQX4mQblmdHas%2BJaMWjGj%2B4wkPV6mbJhBY6x%2B0uWm5aKdgv0Bxq3W%2FOVL0NyB3sXh9yMQJ5aYihyihXzDXquduhsRZrxD5lzI3bNvhdhdNtMQarf5ddTrmzszzPaFDu0qMdCgosgsMaLn%2B0hxl16mRzKHfLHQVbswVH7nft2mjUDi&X-Amz-Signature=8fd74679d62a076b4d4be4a8d7b4b0aa7dd8961b1cd88f8921f2febfd75e7b67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRULSN7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOy%2BFF6mRVl0r3cwXlcoMSFhlOf1Xz2%2F2O7mgoEQIFUAiBeDWYYoGUnt5fgSsZU0sQ7P%2BROu60EVXk0aWDaUiIshyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTC2DJ%2B0vHHEC1IMKtwDi6s1%2Brvlj9YToty2jz%2BLExnaNTXRceo32ReJpXLYNCcJWG1FZ7Xij2YduBdWKCD6oTn1kSzny7rgPiikaihAt7b9nM8a00XV%2FRB6uk%2FYQA4jRuksWZ5bd2Cjc5lhKhwQ%2FpeQXW3IDMR%2Bcu4ohaimC6XCl30CVd8LwAXRFI7C4M97O%2F%2F7pac9DLisU44fGTkcLCz4YMRRacwNf%2Fi9ykeYNu0xlK%2Bq5I2c8vO4P8OEtg84aQq1CkMr5LJdLsel7Htxr9duSih3Va438AR%2B9kPbVGfqQNPgDgZMyKk5Z46skDbpn0kncj6F8SRlumfehj1Jlvwm7ffkhE%2FEcPuOcBxjHiPIe2lPBVey0R62vqEyNd83282h%2BhFeGHMCmZbZBgQKxPluWKOomVbzg3c7n0bcHR1vM%2BaR4TTuN03LBijDMx%2F0645mYnMbpS8I9WTayNGieXHyzGth0RD9ZTlQ%2BP1ZeTp9MNXJwAQ%2BhhGA1KcWNb9Q5RlguGAPmWRQ8kdjJ%2BIIy6r2OsGG1saQgXy7UzhJ2NmCX%2FO5mbmcD%2FlWgqWB70k46Qz%2BVFfMoMvIWFOj6zNcjAcCqQLJEyZueS8XNLQjNN9YBvRr%2BtkrXt0jMmQvxdVWSebStt2vOn%2BMlMUwu4%2F8wAY6pgHcEehTqy%2BGPyq%2FPOg%2F%2FAyjBrX8Kq9iFfWZdEvEzZDmNRHYrM87g2HznNShHClBRoldKFNyFKAhCBRJQGD16gjEa1NiJ2z0Hwq7rC9RGvwT7KmTIw1Yf4o4ZKPAHTB53BNmc%2BEMTOuU%2BaXdRBmxXd1AVWMMZWTWgym5vvekVAioQmHKON8IxZ8LKxndXc%2FluvYcmGLFaWIrSBCUwO%2FXs0pIcEuMa0xz&X-Amz-Signature=bf1ec28939a502b9d2dcf21765473445102fef590e3b0104df6cc013b8a7b8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
