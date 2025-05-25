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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6YNA73%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCZ8F5DwhoozAkW7W1yddqCjj8q053qDHAjlQbAptl4%2FwIgK%2BRKN4Q6JjjNudx3ZLl%2FyBjJkf4XtckKMjwuImgeAOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKs0c5%2BjHxa9c5FttCrcAyLu7GH2%2BJZ912jd987FSX5L4ChrQQoYfERSAzivPqvUBbpVBowLT2KO4DWOkLDLF00FkMww%2FzPqny66ViFHgFKlGyKyeqNUXQG3Kta1SGmcnA7ZPXpNCycdnqY%2BToGSFI083xE3%2BNRTNSpH2hEvkkQm3L%2Bn2w3DOsdtXpXOnSBluz8eSQXcLdrAkh7EdNs03erodt7cp5cmflmdyHqh05iYAZetFJ5RDeV%2BIWe9aq4ASTOAnVPLde3UFQginQWDtlLKFYWH6Gi%2FoHcF%2FYnPicr%2FK%2FQ5p0hQt8BH2q%2F890GXCuvY6g4fYBZYCb59Yw4a8%2BQ7PQyTEfpxgmP63gGMJ6sDi283kSEp54gjbn1SkrjdVbYPpWf4amRJ%2FF0jY90JPhMphs%2BXJmVUn%2FBFyMgrnolMpYVoBwl8zvz4u0oFiEJ9Yr2tWB85rPhiTDaIW5Tanpf1WXP0M%2FdBWyS1pZfp2uKmhu2byOCk9twriyz5B49L7xsAxrZK%2Bb6lV%2F1BjS1mGpw4IM4UHPs90bcrhq9zSOW%2FMZg7jNBXYAxBvY2DQD6yXaJ6a%2BNG3z%2FL2IKtwfWRTP%2FA2GxVgFIlojjeNGBebAagaEbaOwA14M6lQ755BeEE5Sk2sh4c3tJMvrZ9MKWqzsEGOqUBKLYr3JKIBMugo5vGRpQDl79Csch2OArhxv1maMUuTsW5g8vVbE4y44wyBxByhLsaRblFGiN0oa90tPFgIL5QrKr99kmUQ7k8aA1ebH9I3WnjBxW8ftU24zeVzf%2FdVUyBL4k5mXBOqO%2BZILEFy7wjVwSKYkVDnh%2BwElyFqvu4Fcqp0%2BcPmvcgDCJ0K8wk4VWg02VlYBwKGAW3eKT3BvLsH06uJoFS&X-Amz-Signature=12b97a8b667f58c7dac673dfae49ef8b01f4d45eae8157465518fcd774fbbe06&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6YNA73%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCZ8F5DwhoozAkW7W1yddqCjj8q053qDHAjlQbAptl4%2FwIgK%2BRKN4Q6JjjNudx3ZLl%2FyBjJkf4XtckKMjwuImgeAOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKs0c5%2BjHxa9c5FttCrcAyLu7GH2%2BJZ912jd987FSX5L4ChrQQoYfERSAzivPqvUBbpVBowLT2KO4DWOkLDLF00FkMww%2FzPqny66ViFHgFKlGyKyeqNUXQG3Kta1SGmcnA7ZPXpNCycdnqY%2BToGSFI083xE3%2BNRTNSpH2hEvkkQm3L%2Bn2w3DOsdtXpXOnSBluz8eSQXcLdrAkh7EdNs03erodt7cp5cmflmdyHqh05iYAZetFJ5RDeV%2BIWe9aq4ASTOAnVPLde3UFQginQWDtlLKFYWH6Gi%2FoHcF%2FYnPicr%2FK%2FQ5p0hQt8BH2q%2F890GXCuvY6g4fYBZYCb59Yw4a8%2BQ7PQyTEfpxgmP63gGMJ6sDi283kSEp54gjbn1SkrjdVbYPpWf4amRJ%2FF0jY90JPhMphs%2BXJmVUn%2FBFyMgrnolMpYVoBwl8zvz4u0oFiEJ9Yr2tWB85rPhiTDaIW5Tanpf1WXP0M%2FdBWyS1pZfp2uKmhu2byOCk9twriyz5B49L7xsAxrZK%2Bb6lV%2F1BjS1mGpw4IM4UHPs90bcrhq9zSOW%2FMZg7jNBXYAxBvY2DQD6yXaJ6a%2BNG3z%2FL2IKtwfWRTP%2FA2GxVgFIlojjeNGBebAagaEbaOwA14M6lQ755BeEE5Sk2sh4c3tJMvrZ9MKWqzsEGOqUBKLYr3JKIBMugo5vGRpQDl79Csch2OArhxv1maMUuTsW5g8vVbE4y44wyBxByhLsaRblFGiN0oa90tPFgIL5QrKr99kmUQ7k8aA1ebH9I3WnjBxW8ftU24zeVzf%2FdVUyBL4k5mXBOqO%2BZILEFy7wjVwSKYkVDnh%2BwElyFqvu4Fcqp0%2BcPmvcgDCJ0K8wk4VWg02VlYBwKGAW3eKT3BvLsH06uJoFS&X-Amz-Signature=6e2d514f0ab01e5701380ec6add18c800de5f64575adddf59c829ae58c8ee363&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6YNA73%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCZ8F5DwhoozAkW7W1yddqCjj8q053qDHAjlQbAptl4%2FwIgK%2BRKN4Q6JjjNudx3ZLl%2FyBjJkf4XtckKMjwuImgeAOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKs0c5%2BjHxa9c5FttCrcAyLu7GH2%2BJZ912jd987FSX5L4ChrQQoYfERSAzivPqvUBbpVBowLT2KO4DWOkLDLF00FkMww%2FzPqny66ViFHgFKlGyKyeqNUXQG3Kta1SGmcnA7ZPXpNCycdnqY%2BToGSFI083xE3%2BNRTNSpH2hEvkkQm3L%2Bn2w3DOsdtXpXOnSBluz8eSQXcLdrAkh7EdNs03erodt7cp5cmflmdyHqh05iYAZetFJ5RDeV%2BIWe9aq4ASTOAnVPLde3UFQginQWDtlLKFYWH6Gi%2FoHcF%2FYnPicr%2FK%2FQ5p0hQt8BH2q%2F890GXCuvY6g4fYBZYCb59Yw4a8%2BQ7PQyTEfpxgmP63gGMJ6sDi283kSEp54gjbn1SkrjdVbYPpWf4amRJ%2FF0jY90JPhMphs%2BXJmVUn%2FBFyMgrnolMpYVoBwl8zvz4u0oFiEJ9Yr2tWB85rPhiTDaIW5Tanpf1WXP0M%2FdBWyS1pZfp2uKmhu2byOCk9twriyz5B49L7xsAxrZK%2Bb6lV%2F1BjS1mGpw4IM4UHPs90bcrhq9zSOW%2FMZg7jNBXYAxBvY2DQD6yXaJ6a%2BNG3z%2FL2IKtwfWRTP%2FA2GxVgFIlojjeNGBebAagaEbaOwA14M6lQ755BeEE5Sk2sh4c3tJMvrZ9MKWqzsEGOqUBKLYr3JKIBMugo5vGRpQDl79Csch2OArhxv1maMUuTsW5g8vVbE4y44wyBxByhLsaRblFGiN0oa90tPFgIL5QrKr99kmUQ7k8aA1ebH9I3WnjBxW8ftU24zeVzf%2FdVUyBL4k5mXBOqO%2BZILEFy7wjVwSKYkVDnh%2BwElyFqvu4Fcqp0%2BcPmvcgDCJ0K8wk4VWg02VlYBwKGAW3eKT3BvLsH06uJoFS&X-Amz-Signature=a6845b7dc492f611d411906dfe9ed32519f0024e0d71027edef647c3c4fcea4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMAG3IRU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCM%2FdQZK0RNcGbZrcW8scuW5R%2FyLlzJ%2FMOcpSwbkvOr7AIhANEEHvzj7jnbHUthojeJPjb%2F5bYFKZobSguNoS3Obr9GKv8DCDcQABoMNjM3NDIzMTgzODA1Igws7I308vGVlnqI8LUq3AMF1OXoxbUxXc0a%2BWiLjWb4SOd3swvy4Kr0GobjggJjzMlzxNBzBG62fJj2y6GgOZsXC1uV%2FCayRpBR%2FknXCHxWYOh709NxQvzsuk2d5nhdOu3tIuilvkMGZrisQK03ImdRwChJIIY5naa1jmiQlP1edsxmR89o8WTOYciYOhMoL8TQRxBU0YpW83UEpRq%2FVw64IIpWRXUC4xXgMvUQ9m3LAg7LMSGc%2FhbfMpLLFtwyj30ZFOKREXVT04nbEyjdSec9h2wMb5Pj9WcT8v20xopD3jGcbcaUActh50kD3SDrvwbQB2qACE7ORUOTd3ESNqsfSe0HRwlZJIJ2FMjKR1s1Mr6GYIxbd%2F8zTt59vCyCYxLZ2M4IkGyuIqT2TPbeqAgYxIHivdVcfvu%2F%2FsMaYDlrgJqPoFjdgR7CNisLCSFHmfabKeoM7VvDsxNWLoN8tqwQ%2Fb1R9Zv4mQM5a4LQJit2yqBcRVISzfbMhCn%2B1vfWAt2avFGJ6yud2%2FkkwpnO%2BjmGNq66ixhcYYT1H5Atm8xcP2nw4PsTgTez%2BIz%2FI0OQdKoN48K2CuD%2F2LN%2FfRfhdrVsK1vaKKn6R1dvHkx1YRFSXBEVggjEvd%2FZ8I5QxfekNAMGg%2F7M8JnynuPiQDDOqs7BBjqkAdxjdIEJm%2FWUO63avSpDyBPT%2F6fnvAXKyspUvgcJfrw%2BI5%2BqNmhUuUP2Fc0X5Ho0gHo7%2BdyxprqcRJguI%2Feujb5QsJwDo0H%2BJOlSQ5Bw9SpVYIi1s6e3I4aMqD50JDAZNGGFW%2BPKwRhmHOXEqpeYXFLn%2F3Ik4gTGYc6f8XuQVcZGr2UqX4dgmpGzYcwocQXl9jxMhwKAifcb6ZVbZBUJdtTLHEsF&X-Amz-Signature=5bc35addb358a46f1606f9be421d48ca8ec7999d87dd2d9fede42d54da5f144e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANYRLOK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD6ia58yFn7O0w4IoTto%2B%2BqIH3p6%2BxP94uwDUrtl5SBZQIhAPggIohk8GFYHumcsNqeWWDQfrNX%2BAsmHSMBP4i08SGUKv8DCDcQABoMNjM3NDIzMTgzODA1IgxEeBdhQuMIvZQ%2F8hgq3AMwE%2Fm%2FXSBh4pM7nS8b5RLZhmK5yp7UN3mS5ot7yNhqsE6bpDfFhVSI5ZlVTovxmhZCa8eDGrb0yOPiGLd58EKogTHMHrGg0IZvYa5nuxfC%2FzdLNWuMB2dOMpKpkiuvVPJWJeBbdK4v%2Fh2NpTxxNTgXCKYlUpnQPT7eXwnfTmZ7vEq1Nqq0Byv4Iqgoo%2FWxmSVJXyFBv6RPtX2G0W%2BY0DxM7DTizycQbqI9RZkAETgc44qb%2FRFg0fQpecR4Vw%2Fl%2FUDj7tNoJyU1dgos3l9PcR%2FpYcIJ26elOEYvV9qtkskOHibBCPxKzmx6GJilmj3wFCYPhEDtj59Mfxw9peuF03zionC0JTA7BMMgM06pNsJkMI7tz4HSylQ9ABDa6Kz%2FYaAH7vaLExWIUgMdWR1VzE05JNJeSY0qp2JOj1IiMXIfWMoXnZdkbvk7m3mjRevKUUqWcY9IoWT0%2Fb%2Fk5RKb93RSNa%2Fy%2Bgi1R7DFBX%2F0Luzh7ZnFDzrJQuJGOghk%2BVaxBeM2RcZBsTSpBG2rFPu6HH4BHIWiPTei28Bdvl1depfEtYg2n%2BlMlIDuVQ4IvIOQuKwFOLJ4IEaToYHT4YSdeehudTXkmu3KSQqwuam7bZsWF576DXnJYA5O65OVpDDwqs7BBjqkAUcfwKgwwZ%2FQcr%2BIrHqdwZPwkrYn3nSFVbH4toCq7Xvtdxo46xJmj3bOLUlOt65BxnzWH9vrZ9qa7XPx7i22fApRg1Kex3dfpjK9rJ7zoIK84K0CmP0C%2FbqA%2BrDptIMpFNq4X3qks%2F7v5MSlgxg6PjRMoCT%2BJtmmyfY28mmUNoMveREUL1mdwQA3yq4%2BJfmFtn%2FXotjLkYQESowBKflZbi8Sz5ED&X-Amz-Signature=2058157e12a19af61f7b86baf31aef5534b695c12ef47999ee665ceccecfd7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6YNA73%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCZ8F5DwhoozAkW7W1yddqCjj8q053qDHAjlQbAptl4%2FwIgK%2BRKN4Q6JjjNudx3ZLl%2FyBjJkf4XtckKMjwuImgeAOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKs0c5%2BjHxa9c5FttCrcAyLu7GH2%2BJZ912jd987FSX5L4ChrQQoYfERSAzivPqvUBbpVBowLT2KO4DWOkLDLF00FkMww%2FzPqny66ViFHgFKlGyKyeqNUXQG3Kta1SGmcnA7ZPXpNCycdnqY%2BToGSFI083xE3%2BNRTNSpH2hEvkkQm3L%2Bn2w3DOsdtXpXOnSBluz8eSQXcLdrAkh7EdNs03erodt7cp5cmflmdyHqh05iYAZetFJ5RDeV%2BIWe9aq4ASTOAnVPLde3UFQginQWDtlLKFYWH6Gi%2FoHcF%2FYnPicr%2FK%2FQ5p0hQt8BH2q%2F890GXCuvY6g4fYBZYCb59Yw4a8%2BQ7PQyTEfpxgmP63gGMJ6sDi283kSEp54gjbn1SkrjdVbYPpWf4amRJ%2FF0jY90JPhMphs%2BXJmVUn%2FBFyMgrnolMpYVoBwl8zvz4u0oFiEJ9Yr2tWB85rPhiTDaIW5Tanpf1WXP0M%2FdBWyS1pZfp2uKmhu2byOCk9twriyz5B49L7xsAxrZK%2Bb6lV%2F1BjS1mGpw4IM4UHPs90bcrhq9zSOW%2FMZg7jNBXYAxBvY2DQD6yXaJ6a%2BNG3z%2FL2IKtwfWRTP%2FA2GxVgFIlojjeNGBebAagaEbaOwA14M6lQ755BeEE5Sk2sh4c3tJMvrZ9MKWqzsEGOqUBKLYr3JKIBMugo5vGRpQDl79Csch2OArhxv1maMUuTsW5g8vVbE4y44wyBxByhLsaRblFGiN0oa90tPFgIL5QrKr99kmUQ7k8aA1ebH9I3WnjBxW8ftU24zeVzf%2FdVUyBL4k5mXBOqO%2BZILEFy7wjVwSKYkVDnh%2BwElyFqvu4Fcqp0%2BcPmvcgDCJ0K8wk4VWg02VlYBwKGAW3eKT3BvLsH06uJoFS&X-Amz-Signature=bd6383f1544f8b1ccc185ead0d4733ebdb83efbf96e35379debcd5ef8f34daf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
