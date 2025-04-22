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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWBD2DT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYRje8hnEVGGWjxrVHFv%2FVzkkb0aEU5VpVsAyPAiEirQIgW866hrUV4aitq41CTCTrM8B%2BY97Jdx6omt%2Bk5F41BlIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Fmt20H%2BqKIyotXhSrcA9fVxyCokKaieUMqZqNH8vCPiytkKS58Lhxvq8xbki1COVCgoW8AhfvL9AEulbOhGZ7P3s8CYVdxFYX4izCWl1M86fo2eQJJto6WUVebu54qEbo8i%2BmjJoY8up1fcgNe9ixiC%2FjPKfwcKOlyRCjZ7PYSF2DisgLQYCVpgRVWLADX9t6CRB%2BLuZzPfuILXdgr%2Fp4fqxfaS1uidCH9lp54iSxPNUfb96JISM6RLfRApwaDxJ%2BrTZn7tsWCEjnpOrXLhGgvhZ6tSBzb78hNPO405xTE0y0KJvUSw8DMZWTBdW%2FEzDZp4zxR0k9HLqg8nTajZT5uiOVJXeTahSeMe%2FMSc9FDo9Hkw8tShPxI3qKBhgdTE24SLZONseL7ZA5tb2smTbjK9zuHZi4C2W%2FRpdRsCCpy6Jxx3UpawAWPNF%2Fjko1HXe8knlRxPqwTHjdjRhYfyr99S%2BEerMXHyw7MwT3n5nKoDVwUxB%2F3sG%2BT8tNHIFt0OgE%2B5tiq0zr58SKY7uwtEtmtYZeFO3oyA3%2FlowlqteJN08AypPgIslZC8VfBzjWHWamkAyy3qdodhkX79D6RcUGmUxn4yIq%2F56CECp3vxNCc3rJHUnFsy6SsbPeIeD3XEIxbMbdxS6Zv%2BR1DMOKqnsAGOqUB2iKS%2B3g4nfNFDM%2BSXQi%2BOkcsPKp0e4QMzvEVGHaX7yU%2BtEbGilgJoWVOxWekds6F2NjexIzYa4oLv0IDdspjILQAqkAmiXltZ9WpbAnE1bosR9wsZCOrcrrsWGJloS3QJeeKaV412h4ktR%2Bw4VunTAvGjKmWHRT6Cdo%2FO8ia1zOFd23fjKt36Rje68IFIF2Q2c20CKns%2B3uVQumFdDcW%2BGDOF09e&X-Amz-Signature=04cea7a7e3cfa2e25aca89ffcf2b629cd4721303938d3e5973955b4d994e6336&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWBD2DT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYRje8hnEVGGWjxrVHFv%2FVzkkb0aEU5VpVsAyPAiEirQIgW866hrUV4aitq41CTCTrM8B%2BY97Jdx6omt%2Bk5F41BlIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Fmt20H%2BqKIyotXhSrcA9fVxyCokKaieUMqZqNH8vCPiytkKS58Lhxvq8xbki1COVCgoW8AhfvL9AEulbOhGZ7P3s8CYVdxFYX4izCWl1M86fo2eQJJto6WUVebu54qEbo8i%2BmjJoY8up1fcgNe9ixiC%2FjPKfwcKOlyRCjZ7PYSF2DisgLQYCVpgRVWLADX9t6CRB%2BLuZzPfuILXdgr%2Fp4fqxfaS1uidCH9lp54iSxPNUfb96JISM6RLfRApwaDxJ%2BrTZn7tsWCEjnpOrXLhGgvhZ6tSBzb78hNPO405xTE0y0KJvUSw8DMZWTBdW%2FEzDZp4zxR0k9HLqg8nTajZT5uiOVJXeTahSeMe%2FMSc9FDo9Hkw8tShPxI3qKBhgdTE24SLZONseL7ZA5tb2smTbjK9zuHZi4C2W%2FRpdRsCCpy6Jxx3UpawAWPNF%2Fjko1HXe8knlRxPqwTHjdjRhYfyr99S%2BEerMXHyw7MwT3n5nKoDVwUxB%2F3sG%2BT8tNHIFt0OgE%2B5tiq0zr58SKY7uwtEtmtYZeFO3oyA3%2FlowlqteJN08AypPgIslZC8VfBzjWHWamkAyy3qdodhkX79D6RcUGmUxn4yIq%2F56CECp3vxNCc3rJHUnFsy6SsbPeIeD3XEIxbMbdxS6Zv%2BR1DMOKqnsAGOqUB2iKS%2B3g4nfNFDM%2BSXQi%2BOkcsPKp0e4QMzvEVGHaX7yU%2BtEbGilgJoWVOxWekds6F2NjexIzYa4oLv0IDdspjILQAqkAmiXltZ9WpbAnE1bosR9wsZCOrcrrsWGJloS3QJeeKaV412h4ktR%2Bw4VunTAvGjKmWHRT6Cdo%2FO8ia1zOFd23fjKt36Rje68IFIF2Q2c20CKns%2B3uVQumFdDcW%2BGDOF09e&X-Amz-Signature=7630f1d8e3ee8ca2b455a579fa32a4ee25cea1fb5810dbe82fc786b1104defad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YED2HY2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDLpRzf86LmeU%2FJbalaQA1GxD%2BEga95C4PC5JOO5XhzNgIhAK8536EaO84cpf%2BPA1MvXjeH3XvhnmSY6aL8SsaNyv4GKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxxJWo9UP13Rew%2BAQq3APIBhSjGoQmilnu1uuNkAIsQ29zDQqOtIP5CVtiMV9HAQ8xE%2Bd6nroM6vz4rQA93MCjWGL0PSzI0lQHlqD5KtdlbWOcspnsAiB4owgzpRzS%2BDd4s3WxhLjPP1Ja2I%2BKPtyfZsclDwa4C9EACIIdMvC98pZzY0aYpTaAEGvnQ8fLgeyJrYAAomMuGJDqtpXHkzwPMwJKudRQtfHUy5Ni61Xz%2BK%2BcsInoaJ6u%2FmEHDprQIvVcDUrsN4%2FBeFlkRNHWrDrT0lVjhe8gdX6X2Vi6jLshG7zDHtCWxDhsiga45pgZZIn%2BZyy%2BsV4qaTiiGLKKZDd9FFmYqMD9zmHPeAFPm4ibdAwQto2rmOPDopGeugfNJFrdrmN6GxNwSF4Tz5wNL7zebAJxL0GdhRTDOmpxnq8np63SggsnMxUazvkxLK%2FO3zwYNfoTqapHen4EhXxjjJ3mB0rNpijHOzc0CfEdoCB4u07cklqpITFl8UuJTld6KfOemZVLGA5pylBWRtkUXVMSIrb8sETqarMKcT8XpvIqASg7mEKRK%2FEtOob%2BqD%2Fhk4%2Fe928VVlCqJal9CLuMHlBYQCFsRzR9wbV3Jg5USMHiD5d512VAdkdKr6Cu91dW2ePxiDyXhRsrpDAdcDDhqp7ABjqkARTWlk1cCo3ZE0hE90JDQYbxW1KCAfV2PTOw%2BRi4%2B9aY552Z8Zl%2FG5e5Dn3p%2BCMqJBTIabXGSYmHxRA7k5FxBdCWS2JX3qU5lUAXTZIsmKUVJbtoYMw9y7wvmLjdJJyFuFFz7MpniPm%2FsEcDkuN05N3wPHMj81tcVEPwA25ksBpEPKEQankUpRS8eDS%2F5k%2B1UkAfXzQcU3S9z2wNp%2FEY9pPkAElH&X-Amz-Signature=d8a7e379f695b77f7da700fd84be25e472b0e96db93d94be97e8d3b10ebb5b74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKA726D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCID44HlZIEd7wwpvW%2F174BKwsOQzKjNIFZAj%2BLRHyB7tUAiB08xkaLqLvW%2FBrGlHfWYu6l7gSy8f0N%2BwaYLrVMBHg6SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdmguIGb0Yozng5jxKtwDqJrEQcnFFyzOOVZiwvTghRsxNG5Q%2Fi8kbV99nkB54V89c%2Bla9DUhY124t0mpZlI1OAvO2RPlUWOLljMpiY5d35E907ckM2WQfkP4QB4E3chOngmPMiQCZz7cnVVtvISyLihPmsBtNVMi1kBQvdXYyh1D0%2B9ag6oTBt00Nr7%2FZXXwOedq0d%2B%2BAw1OhibhlDmZ6ly3XNThG%2FsoDt9g3jvjwStxS400y2oy7PRumjmVFtK8X3Odg9q2hCzzRhz8JeVG4YWjSbPlN5TeTNo6jiFAq9zDzMLTldBy3X68u0kq1KBzrJmmLyBv5l%2FmLUuRIqVFFK5avAWVmkKNQUWbKi6hQUXh942XDs2hC7PRQH5ZuXMjNwtAgLi1qFbCutYvC3jbMcYxznTMeBfCsadP5Ul9opVHXRvPO7gqMG1S8dOtxspHZlQJN%2Fhckq5IEaz%2BuGDq1qlRqYFsb0iARJR%2B8lL%2FC3NOR%2B%2ByRIvUuEoT4Ns%2FrvEPm5WC3On3N8kdCay7CAJB3xozNePp4wslH5a00h6qxtc9VkvVcuKdkxwE6XUywYwkm8nQmCLhzHLEsTeoBwuPzdAYU1qKpmord4szAHbsuht0Iw9Auw00qxjXWNHb9QZSDhBaFPU4iMPTHqowoKqewAY6pgGvU1rP%2Fk13E%2FE26FB2tYdJucVSt6M2cq56wQ%2FOMgUub%2BHQrvEuG7uIqxGDrO3EIy9UufI4Z0wnDlume3RUeNIJiT%2BYw28vFoZowcrE9rsjMKk3VqvvIP1UjkDPBHCV2hOIS7uDFZufSSQPtAebdipmfnoUtsto%2Bxhi%2FsklFRm7iYKB%2BcvU8L%2Bhh36rZcWhQObmyTzCRYPnq4j3Av0bOs5qLtvmaREu&X-Amz-Signature=5a17988d2cc512908a9fc8a277441276bc9a74c188e22b3815d15e8404a7155c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWBD2DT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYRje8hnEVGGWjxrVHFv%2FVzkkb0aEU5VpVsAyPAiEirQIgW866hrUV4aitq41CTCTrM8B%2BY97Jdx6omt%2Bk5F41BlIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Fmt20H%2BqKIyotXhSrcA9fVxyCokKaieUMqZqNH8vCPiytkKS58Lhxvq8xbki1COVCgoW8AhfvL9AEulbOhGZ7P3s8CYVdxFYX4izCWl1M86fo2eQJJto6WUVebu54qEbo8i%2BmjJoY8up1fcgNe9ixiC%2FjPKfwcKOlyRCjZ7PYSF2DisgLQYCVpgRVWLADX9t6CRB%2BLuZzPfuILXdgr%2Fp4fqxfaS1uidCH9lp54iSxPNUfb96JISM6RLfRApwaDxJ%2BrTZn7tsWCEjnpOrXLhGgvhZ6tSBzb78hNPO405xTE0y0KJvUSw8DMZWTBdW%2FEzDZp4zxR0k9HLqg8nTajZT5uiOVJXeTahSeMe%2FMSc9FDo9Hkw8tShPxI3qKBhgdTE24SLZONseL7ZA5tb2smTbjK9zuHZi4C2W%2FRpdRsCCpy6Jxx3UpawAWPNF%2Fjko1HXe8knlRxPqwTHjdjRhYfyr99S%2BEerMXHyw7MwT3n5nKoDVwUxB%2F3sG%2BT8tNHIFt0OgE%2B5tiq0zr58SKY7uwtEtmtYZeFO3oyA3%2FlowlqteJN08AypPgIslZC8VfBzjWHWamkAyy3qdodhkX79D6RcUGmUxn4yIq%2F56CECp3vxNCc3rJHUnFsy6SsbPeIeD3XEIxbMbdxS6Zv%2BR1DMOKqnsAGOqUB2iKS%2B3g4nfNFDM%2BSXQi%2BOkcsPKp0e4QMzvEVGHaX7yU%2BtEbGilgJoWVOxWekds6F2NjexIzYa4oLv0IDdspjILQAqkAmiXltZ9WpbAnE1bosR9wsZCOrcrrsWGJloS3QJeeKaV412h4ktR%2Bw4VunTAvGjKmWHRT6Cdo%2FO8ia1zOFd23fjKt36Rje68IFIF2Q2c20CKns%2B3uVQumFdDcW%2BGDOF09e&X-Amz-Signature=49f2d00d0377fe7dcc16a39ea8d4d7537666898bfa9cffeae45415410bf8561a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
