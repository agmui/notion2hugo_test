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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEQUI3O%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAoRsShpp2X9g1OSSRwKPROJd3A6d%2Fu6HV9GSqTngyXYAiBt3R1RbdZUsanO6U%2BUp6dfv4GJ9vCVNAbn3yZ8RJbx8yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMVjJaF2vkVNfl1QyWKtwD%2FR1gSIe3kmsdcblT5nWjG764OJsLMZtfPtR3K7ZLykDcEq62W%2BRYHHcFlCdQCv1xXURuOXlAjpSyvoREzmnIQm2fisLzXFnPwyO2cG8Ri6cQKgXaiaqr5gBONl8%2F0qLWRIURlR5bOuR2MDs9%2FhYV5GfZ5NmUqL%2Foy08pdJprbfsBNHsizXxSUNiLFrIBAXNUUBuU0nQvbz6Z4QeHNWCiCd7cfFio%2F6A6odfkHA%2B3V8yHHx8omHaP89hK2nuEG20DQ5bx66ucrhNIwC2%2Baw40yC1svd6fhSTT%2FLii%2BqYVsbk9wXQUMFM%2FrF1Sj0Kx0hYo0mK3LaBAzXS4th9%2BMSGjYut%2FZ2ss90I2O%2ByZMn15YRFCOrq%2Bbe6hQSbFLzcjbgD%2Bs%2B%2Fk%2Fa4P4J6FQ6enmPWH28nKg0QPAYBJtq%2Fnl3A4ilF9OxQW7wLd0qSB5hIcgnrynvqXMVIrzrjb7fbErw3NUD66NfcMdYl0Y7soWbgjXFDUPH68e%2F2Frop27p%2FaMyUu5YrGEkJXNOvfbZkYMw3C3XpgOEJ76VF0VYy4%2BcXrqKpNHYYjlxajAlPUEWQtWjgFk8CS9wHXEspr7%2FuhoIpSIEaoMwjAKyNk%2FD0JclH0hOjdutn6rp2mPUjPG8Mw9Y2dwwY6pgF%2FeMAzvDUHaHUqAQLd1PJZL4KYCbXmiSjHuQ2kJPmiyl3fQ0%2BlaAXytA49sb5YTBz%2Bgn5gjx%2BPR6cKvH9V74fJY%2FL5po1rLFd6bpfq%2BIerq8nMfyFjyIWo%2F%2FJd%2BIyujqNowvnIuVe%2FqQ1tq6UOg2A8uCjijflAaUJfulTbd%2BiR8dIovJ3sgsBUwSHE0mAw917prXikDwzzUT7qf7v0Xaldd9YFp4N6&X-Amz-Signature=755d05dc9f7e7d5cfa86730f3830bde4d268f38200bf6a6972e2f1694d2508ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEQUI3O%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAoRsShpp2X9g1OSSRwKPROJd3A6d%2Fu6HV9GSqTngyXYAiBt3R1RbdZUsanO6U%2BUp6dfv4GJ9vCVNAbn3yZ8RJbx8yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMVjJaF2vkVNfl1QyWKtwD%2FR1gSIe3kmsdcblT5nWjG764OJsLMZtfPtR3K7ZLykDcEq62W%2BRYHHcFlCdQCv1xXURuOXlAjpSyvoREzmnIQm2fisLzXFnPwyO2cG8Ri6cQKgXaiaqr5gBONl8%2F0qLWRIURlR5bOuR2MDs9%2FhYV5GfZ5NmUqL%2Foy08pdJprbfsBNHsizXxSUNiLFrIBAXNUUBuU0nQvbz6Z4QeHNWCiCd7cfFio%2F6A6odfkHA%2B3V8yHHx8omHaP89hK2nuEG20DQ5bx66ucrhNIwC2%2Baw40yC1svd6fhSTT%2FLii%2BqYVsbk9wXQUMFM%2FrF1Sj0Kx0hYo0mK3LaBAzXS4th9%2BMSGjYut%2FZ2ss90I2O%2ByZMn15YRFCOrq%2Bbe6hQSbFLzcjbgD%2Bs%2B%2Fk%2Fa4P4J6FQ6enmPWH28nKg0QPAYBJtq%2Fnl3A4ilF9OxQW7wLd0qSB5hIcgnrynvqXMVIrzrjb7fbErw3NUD66NfcMdYl0Y7soWbgjXFDUPH68e%2F2Frop27p%2FaMyUu5YrGEkJXNOvfbZkYMw3C3XpgOEJ76VF0VYy4%2BcXrqKpNHYYjlxajAlPUEWQtWjgFk8CS9wHXEspr7%2FuhoIpSIEaoMwjAKyNk%2FD0JclH0hOjdutn6rp2mPUjPG8Mw9Y2dwwY6pgF%2FeMAzvDUHaHUqAQLd1PJZL4KYCbXmiSjHuQ2kJPmiyl3fQ0%2BlaAXytA49sb5YTBz%2Bgn5gjx%2BPR6cKvH9V74fJY%2FL5po1rLFd6bpfq%2BIerq8nMfyFjyIWo%2F%2FJd%2BIyujqNowvnIuVe%2FqQ1tq6UOg2A8uCjijflAaUJfulTbd%2BiR8dIovJ3sgsBUwSHE0mAw917prXikDwzzUT7qf7v0Xaldd9YFp4N6&X-Amz-Signature=3cd6435cf2bd999fbcc3cffb51d1432163d20c94da0a1e72f77dd81b512d1e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEQUI3O%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAoRsShpp2X9g1OSSRwKPROJd3A6d%2Fu6HV9GSqTngyXYAiBt3R1RbdZUsanO6U%2BUp6dfv4GJ9vCVNAbn3yZ8RJbx8yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMVjJaF2vkVNfl1QyWKtwD%2FR1gSIe3kmsdcblT5nWjG764OJsLMZtfPtR3K7ZLykDcEq62W%2BRYHHcFlCdQCv1xXURuOXlAjpSyvoREzmnIQm2fisLzXFnPwyO2cG8Ri6cQKgXaiaqr5gBONl8%2F0qLWRIURlR5bOuR2MDs9%2FhYV5GfZ5NmUqL%2Foy08pdJprbfsBNHsizXxSUNiLFrIBAXNUUBuU0nQvbz6Z4QeHNWCiCd7cfFio%2F6A6odfkHA%2B3V8yHHx8omHaP89hK2nuEG20DQ5bx66ucrhNIwC2%2Baw40yC1svd6fhSTT%2FLii%2BqYVsbk9wXQUMFM%2FrF1Sj0Kx0hYo0mK3LaBAzXS4th9%2BMSGjYut%2FZ2ss90I2O%2ByZMn15YRFCOrq%2Bbe6hQSbFLzcjbgD%2Bs%2B%2Fk%2Fa4P4J6FQ6enmPWH28nKg0QPAYBJtq%2Fnl3A4ilF9OxQW7wLd0qSB5hIcgnrynvqXMVIrzrjb7fbErw3NUD66NfcMdYl0Y7soWbgjXFDUPH68e%2F2Frop27p%2FaMyUu5YrGEkJXNOvfbZkYMw3C3XpgOEJ76VF0VYy4%2BcXrqKpNHYYjlxajAlPUEWQtWjgFk8CS9wHXEspr7%2FuhoIpSIEaoMwjAKyNk%2FD0JclH0hOjdutn6rp2mPUjPG8Mw9Y2dwwY6pgF%2FeMAzvDUHaHUqAQLd1PJZL4KYCbXmiSjHuQ2kJPmiyl3fQ0%2BlaAXytA49sb5YTBz%2Bgn5gjx%2BPR6cKvH9V74fJY%2FL5po1rLFd6bpfq%2BIerq8nMfyFjyIWo%2F%2FJd%2BIyujqNowvnIuVe%2FqQ1tq6UOg2A8uCjijflAaUJfulTbd%2BiR8dIovJ3sgsBUwSHE0mAw917prXikDwzzUT7qf7v0Xaldd9YFp4N6&X-Amz-Signature=8a624c23af23c87a71837a0edfeb48c36870b3bdb22f89d703d57ae9209ce3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRGGIA3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIF1YNXec1K%2BZwfW9K7CrMnIsAakTmKag6WVzUmA357o5AiAlIhV%2FQZG9mKcEDkC%2B2AhFReqVYcZpbl%2FOOLdgkaRqDSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMt4RQh41nmrVBr2wrKtwDJ%2F3E3U7kCeJIbcGsSzyUXUVtjNgTa5IqMOVmpql9fHxv4IExBbZnoG7a25wXPVTSdJlHhw398fYamSu38xdPCh%2FLGytfUYik2WoVg30IL6Dx2aiC33FsPTtfW6E1uYoTESyCmUz2nlouxZYPcdj4VJ6MieEHX%2FHAJ3luIFygjYMtF4Kj5qz8rdSAf0%2BEYuDioeDD%2FYjofDJjO8rE5G0m0jnSt04MxC%2F6dZF37vLP1v%2BZ5qfOHxb27j4r2Bz5VL4Z92tsjvH2zYN0TUU3q6qVw0YN%2Bzvj4CsijeSL3ANQ%2FNdllirqV6rCG%2F39V4lOG29%2FGdjWPjVWw5dqvfqcRI3xzzY%2BRwM0jtfar5D2x5dNazxIjvR2OQjr3r7w0r%2BGDYR0ZJoLfMlkrCfaV7cF0m9V%2Bop1wjSatIRgQ7xmrsQxHE%2BOtVtLV8ATpwr68roydxiytpKilURTG7BYsPMED0%2Baan54C45LjHy8gkWWuJnHA0CQtMH35u2P8vGAN7w2h%2FuMvXgMqR2CaeaFaExiK6wl4T7%2FtxVTN9RzyPeGNqhnLmVNIg99Fu5ebrv9cW8OPbl73dg16e%2BwSyzxEfrrDEwv3VWzzAwi%2BgogT053MsxQmCOZy48q7AMQMpPgWlcwv46dwwY6pgHqg22yUou2%2BSnVP%2F9sNLqRn835CbV74P6Q75lSbtHdrx5CdarocbXhm9azaNwZ%2By53%2B11It4%2FpayGG9UmcJuCg%2Bqt4RLUgazdyJUGKGn%2Fs9bWgIwc6dZlGxgGzKZQQEWuTSyJPIhJkNJS8FvwEWMSqhSnG2QYvz2%2BzonOOzB9lBCOsXOUkCm3ys4xQMwbBwTgM0wY4zVCJYNWQbA708fr7lz%2FEiHm2&X-Amz-Signature=e11e6df080d7e06df08ba778c21c611f316e74f8e5a5e81e41a75124f2a9678f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFZKCLRF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDozlteGffAawS6GD6jZ7FXTJvA3VJD88jDf3EuOyu3oAIhAIzkkUDQpM2sPLuvma6Fi2oEPE8TOf2v5G7yvGQngj6KKv8DCCQQABoMNjM3NDIzMTgzODA1Igx9rM8fVLqaOYo3ddwq3AOVonB9q5%2B7a4k3rF7dO4PqFCv6CK2HnJr4ww%2Bm%2BtuyszQzZxjXsEyMjx7xUkISiGqVCMziSACTTcgFyXvIrNQBGna7L11h6OVa165k177kerZv3Jjw1F8%2BEa9DRuyZZXuru3IhdxdR7%2BkHeTIGJISHlSTi5SpFGvWTMdv4jAUrfEcS%2FRpj2p46ssdjD%2Fum3iryuyTA0OZS1ZWkhb7Tsh5BwSz0qAZushFMUb%2F3%2FbdAiSHWTsSVoWHvWpxYzFbFnOUvmoK4Dbvo%2BhZrdXxDXBLKA%2FSX0ADdzadd8nLBk5DS3A8uEgm40F7hMsA%2FOgaScge3saNAZaI2ccUwK2vN%2FJCoZ3vt7464cwBSXwvhtAw44OsNwIz6Vk37ZyecTNu%2FdJkOcmLxm%2BE1P4WeP7oyasoJJnmPma9tfHj1RkYl6JJAYOmaDBJpdgbUGOjckwkS5BZN7nSAo31yfy3QkKsa81tBC4TBEvQm2Rr3JMTDThHF8MKapejKk2N444sv47%2FtZZ3hJ2PHXMMomnskRF5iewZDSrE5ct5ZJhfyog0mqHJnmeK352ejbCyjpzlU7DM7Ztj6mREVybddxHyYcqt1qM3QM%2FEgkGtv%2FZtf17xsGdNPHFZQVODd6Nq9zDyVozCUjp3DBjqkAfil4wac2YcdKqCH7oTAn9YkP8XEuQd8MaLHLz4OzUlNrOCbWhsFI6z9XXoMopytT97Ml9hkHuAPC793z8KuSbbDf40%2Bm92p1uFxnqrT7LDBR5Rexmxds5yZmJ8nuzWXDFA0OD1BW37TTVZkqEyI%2FtTG8Cexn%2FeUS1uyqVerAgnybHWzfdZxsxRI1tT%2B0aNqv9BHiXxJa5gqW1XlP3nR6XlMOm%2Bv&X-Amz-Signature=2b7123c042ca34e04935b23362e1778d5174e0a8b48d469b00dd438ceeb8c1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEQUI3O%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAoRsShpp2X9g1OSSRwKPROJd3A6d%2Fu6HV9GSqTngyXYAiBt3R1RbdZUsanO6U%2BUp6dfv4GJ9vCVNAbn3yZ8RJbx8yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMVjJaF2vkVNfl1QyWKtwD%2FR1gSIe3kmsdcblT5nWjG764OJsLMZtfPtR3K7ZLykDcEq62W%2BRYHHcFlCdQCv1xXURuOXlAjpSyvoREzmnIQm2fisLzXFnPwyO2cG8Ri6cQKgXaiaqr5gBONl8%2F0qLWRIURlR5bOuR2MDs9%2FhYV5GfZ5NmUqL%2Foy08pdJprbfsBNHsizXxSUNiLFrIBAXNUUBuU0nQvbz6Z4QeHNWCiCd7cfFio%2F6A6odfkHA%2B3V8yHHx8omHaP89hK2nuEG20DQ5bx66ucrhNIwC2%2Baw40yC1svd6fhSTT%2FLii%2BqYVsbk9wXQUMFM%2FrF1Sj0Kx0hYo0mK3LaBAzXS4th9%2BMSGjYut%2FZ2ss90I2O%2ByZMn15YRFCOrq%2Bbe6hQSbFLzcjbgD%2Bs%2B%2Fk%2Fa4P4J6FQ6enmPWH28nKg0QPAYBJtq%2Fnl3A4ilF9OxQW7wLd0qSB5hIcgnrynvqXMVIrzrjb7fbErw3NUD66NfcMdYl0Y7soWbgjXFDUPH68e%2F2Frop27p%2FaMyUu5YrGEkJXNOvfbZkYMw3C3XpgOEJ76VF0VYy4%2BcXrqKpNHYYjlxajAlPUEWQtWjgFk8CS9wHXEspr7%2FuhoIpSIEaoMwjAKyNk%2FD0JclH0hOjdutn6rp2mPUjPG8Mw9Y2dwwY6pgF%2FeMAzvDUHaHUqAQLd1PJZL4KYCbXmiSjHuQ2kJPmiyl3fQ0%2BlaAXytA49sb5YTBz%2Bgn5gjx%2BPR6cKvH9V74fJY%2FL5po1rLFd6bpfq%2BIerq8nMfyFjyIWo%2F%2FJd%2BIyujqNowvnIuVe%2FqQ1tq6UOg2A8uCjijflAaUJfulTbd%2BiR8dIovJ3sgsBUwSHE0mAw917prXikDwzzUT7qf7v0Xaldd9YFp4N6&X-Amz-Signature=26b8de2491bd610cce71f48764831c19ee1d07b6b673694b51452ec48451935a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
