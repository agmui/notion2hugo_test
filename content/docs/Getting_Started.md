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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPRW73K%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDSL9YvPCJxPDnhXvdqt4G4CEh4YJizR5T8hKUigf0DeAIhANUwbREcaBAHV6NwVdViNqy0ALcejlIgH%2FpvWyK36s%2FFKv8DCCoQABoMNjM3NDIzMTgzODA1Igy98UOrkdsVNqFogGYq3APMuGGrN1vsfLzlK1BpOYOTZV9waRE124IgEttD8xRXvrCoS3E9%2FUwar87gMpN0RUDuyWK9ocw2PrTuX1V13DbRr5fkjaygNkt751k8ikXlWMMPPxJMBpxyje7Fdy0VEzprmhdzZkifN0vODuEWohmJMNU5ClWYm1r5vZTQ6MwQUEC5QFD%2FT9USXQn7r%2BTeW2O7m85NsoxWqtDk8%2BNWi3wb%2FDHaCJaxF95LK06Y6MDF%2Fn3yoym9bFHsj65bM07mwrvQ2LGN095d52K03ZpCHxUASIT%2BOJJer%2FYnNTbo8g73k0LN09EFnxwPwfvMMgkQi%2BQvZL869wCautlD2kK%2FDbkDbRO4QQwhKafR0GXItJ0S%2FUxeTkkHTD%2FMa%2BNYe7VwYLcBXfG6g1wyU2wFadYAVENQPQuJuK9yceFlawomic0u559XmtsZbvL7DKrNZXM2oKRLeFpZE5bZxGepxVZzkMLnCYsLDXiNvejZl9SavPHZO5FdW7dd1BcEi4GuNucF7NRcx90W35Ct29n3YTF4%2B8bcbyBrCBGoOo9VYIHFXs8xFBX%2F2QJ2Y2OzEFo3rhNhpre%2FasDlIl6INRwXhdlgJREQk2xpDxqB9wmx%2FrLJHy%2FJqjuJsCgzzdU7EqNyETDUkry9BjqkAYEfCqVajg7Y34mFaGWEMuMg34rQ1ANgf3iIpAwS7cyBQ29Agd6jqPqPAw9FDES1nPpqR87oLecalezs7HQ%2FzNjdp%2FloKCSPQN%2B5fv94MTlyW5G%2B37OlqBLyEy66OxGR01en%2BzeVn36os0P484voTNAcIsN%2FH5ZxcRmJPWuvJdGMSNnuFnNkrqQrX0%2BmQf8LBTBbIEUI3qP37kWXG%2BCGhzDQ9INF&X-Amz-Signature=5e2a966a1e7d589cd3e89eef230093a0b9f340cfa6cc86477d00aaef246af11d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPRW73K%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDSL9YvPCJxPDnhXvdqt4G4CEh4YJizR5T8hKUigf0DeAIhANUwbREcaBAHV6NwVdViNqy0ALcejlIgH%2FpvWyK36s%2FFKv8DCCoQABoMNjM3NDIzMTgzODA1Igy98UOrkdsVNqFogGYq3APMuGGrN1vsfLzlK1BpOYOTZV9waRE124IgEttD8xRXvrCoS3E9%2FUwar87gMpN0RUDuyWK9ocw2PrTuX1V13DbRr5fkjaygNkt751k8ikXlWMMPPxJMBpxyje7Fdy0VEzprmhdzZkifN0vODuEWohmJMNU5ClWYm1r5vZTQ6MwQUEC5QFD%2FT9USXQn7r%2BTeW2O7m85NsoxWqtDk8%2BNWi3wb%2FDHaCJaxF95LK06Y6MDF%2Fn3yoym9bFHsj65bM07mwrvQ2LGN095d52K03ZpCHxUASIT%2BOJJer%2FYnNTbo8g73k0LN09EFnxwPwfvMMgkQi%2BQvZL869wCautlD2kK%2FDbkDbRO4QQwhKafR0GXItJ0S%2FUxeTkkHTD%2FMa%2BNYe7VwYLcBXfG6g1wyU2wFadYAVENQPQuJuK9yceFlawomic0u559XmtsZbvL7DKrNZXM2oKRLeFpZE5bZxGepxVZzkMLnCYsLDXiNvejZl9SavPHZO5FdW7dd1BcEi4GuNucF7NRcx90W35Ct29n3YTF4%2B8bcbyBrCBGoOo9VYIHFXs8xFBX%2F2QJ2Y2OzEFo3rhNhpre%2FasDlIl6INRwXhdlgJREQk2xpDxqB9wmx%2FrLJHy%2FJqjuJsCgzzdU7EqNyETDUkry9BjqkAYEfCqVajg7Y34mFaGWEMuMg34rQ1ANgf3iIpAwS7cyBQ29Agd6jqPqPAw9FDES1nPpqR87oLecalezs7HQ%2FzNjdp%2FloKCSPQN%2B5fv94MTlyW5G%2B37OlqBLyEy66OxGR01en%2BzeVn36os0P484voTNAcIsN%2FH5ZxcRmJPWuvJdGMSNnuFnNkrqQrX0%2BmQf8LBTBbIEUI3qP37kWXG%2BCGhzDQ9INF&X-Amz-Signature=63226f7920c118289389068eaa2ff63f6cf04a3ed925c43a176d45428c2f4b29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6K2HNT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFRRaz%2FUsHIapZ4%2BPeTz%2FUULMO7Fi06f8fkX4d7pMo%2FTAiBZIGl1vusxrESRILNVV21Q837j62j75%2Blh8fjS9p9CZSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMxyYULlkPnI9SC49%2FKtwDumJ%2BrUcxYnGdAidhwVKmjhyaW0im5PSteezQljwmSNNQzNFqnXuA1r0UkXDiRSU40zY%2Bemp%2BUqjLJveSPHt%2BilNrEZXK8CrNQZ%2FOyBWzUoII6TfpsGx8qfoAL7ygX7R9%2BHSGaCcODRw6SaBWe9vQC5IVH%2FoELyLnzEc4AV90uXXureqxwpFPvnnj%2BMW5aQdEVYpeelJPE6FjPeQNFCxtvfI7K7g1WVArBtVL9jlk%2FBBQfWB6joeDvuioiHWlyk3SNC37CtxEvVbVDd5%2B8haMP2xGLM%2FZktGRZ1kdBh%2Bv%2Fx1PGfpBNthND30hFtvoeBaKdDRipRLhhJ1yEveoIS1ibcWTOUZPGCTE3nxm9nKJRGRH5EB7Aj8TH%2BnLSkUOgUDh1R2Eh2HTkSV66QQxfZ6J24WIOEBkvyNKtKM2pxROl30AkzkyJG5Wc%2Fsl28tE%2BuYsrGsJ9vI44vAXS2IrqF8Onntzpd3yLf4XaiBVC8L7SD3ssKs8egVEe4OXiNZz6877XCm6DvZcA02h1ptdW%2BIBUOn8tnv%2BPtCRiLtS5Hw8ldTA1iLZxkuk2Rms4iQeNcpfEXdA5IzbosSAP9CP3%2BRapx4KpnrAciJP9Vwft43FyGUs4CCxDNjO542DL1kw4ZK8vQY6pgGrLQl39b%2FflOjIrjBgHlHbfr%2FHPYM9RZQUjmaR9bxbCJfvbWISuqbEIp0lgpbJQeUAlfmM7SfTgRk0rXKEoKv2X18NxJTb1J7RQ0jRxWiPIApyzeoQngn6W5JRP%2F4jIYdhImxgimN6vhUWT6wA5NHcIwH4tEYdAnRKPTDlurejVnAitBPsH8RxgCuzQWiPH15PWCkOUwhGzSJiCxMiBUR9VM0CDTFM&X-Amz-Signature=c11c50c20b16774443026d4df22bed23ca20ec6653d1ceeda902a75ea230b87e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3O4YUE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHCrXtMt22G2wBAyZ7zAyojW7SjSMOvGB5rohD16PNWSAiB8%2FimWFZDPnbqz3JOak905V9lOjCulM76TKlkfcV%2B5Iir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv0P%2BEt8siWZLlZ%2BiKtwDJKhKiHDkpVmwwpFYm9smQxjqleGEobpCW1PwXZl1JlsMCbqVySjZNutbqECi7UuKB46ASHoeEp2m26YMesI4vWt%2BJzdhwiBjlfKPFMhwVHLoclRMqvhppLfniarkfUYAmh9p%2B9z5N9cIU7hi%2FQLwgFlLFrKspIeXAAeOdTzK1UqJyGb22s8beY%2FcXrrQLeLm3c6fpz1VacbQlaT%2BGP9mCqJCm7m25fk494505OhLXzcnV5ZQkz7YhDUEe5Gt5Sr2IUqyjyOiPNJBcukn0wQH4UaAClxR0D5PubtPx0aO9EGHl1h4sszXvkxMmJI9gqigaIlgc2jv%2B2Pt34AGgLFIOnm9ju9EBazehLynbQK0ITweU3jnxXoj0JNNJkvMFMMKJZvYz9ldCKK0GS%2FkAzbp5C7tJyOLuUmmBYFC3ZaM1CX%2FEd6A9DoKkR3eXz2nyQPB2zeangT4x5eMivUpWjkdwONtaMPKNgxIVznxmU5VZYCRWwHdLcwEoLvfvh2eJBve0BnykX7WmX3krt78gtJfOqskwLLa1%2B%2FV7lJNuCYx%2Fqgc1TGMj6PN0dpcR%2F59TOBZjw8bn8wiW6pS8BiXBVK5aE7aDrWMzm65DKpIzgATZ5k%2FS1Pw51Chf1%2BHo7Uw4JK8vQY6pgE88Sj1PO3khUa3RjfamOQOkjUSCd6kfNw6%2BmIHOYIlwa9Vv9GBUzrIPB8z%2F%2FHs5P4Pe0fOjJLY0qgry8OJXNxtuJXxl0qt37%2Fi23Scp5FpPanze0MytXuXBo58Mkma34a7pCjvw0hwcnNr0rArBRIqsSOOnaRlKnFkDVlXSeoi0TCMmJal%2FK5Z6Mg1CO3Lj39xMwQdt%2BoyZJ3FvYzYkEbWNaFn%2BUjJ&X-Amz-Signature=baaa7a110f110781b87369a9860d10954d1f0e1d3c214ff763ce58796067a283&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPRW73K%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDSL9YvPCJxPDnhXvdqt4G4CEh4YJizR5T8hKUigf0DeAIhANUwbREcaBAHV6NwVdViNqy0ALcejlIgH%2FpvWyK36s%2FFKv8DCCoQABoMNjM3NDIzMTgzODA1Igy98UOrkdsVNqFogGYq3APMuGGrN1vsfLzlK1BpOYOTZV9waRE124IgEttD8xRXvrCoS3E9%2FUwar87gMpN0RUDuyWK9ocw2PrTuX1V13DbRr5fkjaygNkt751k8ikXlWMMPPxJMBpxyje7Fdy0VEzprmhdzZkifN0vODuEWohmJMNU5ClWYm1r5vZTQ6MwQUEC5QFD%2FT9USXQn7r%2BTeW2O7m85NsoxWqtDk8%2BNWi3wb%2FDHaCJaxF95LK06Y6MDF%2Fn3yoym9bFHsj65bM07mwrvQ2LGN095d52K03ZpCHxUASIT%2BOJJer%2FYnNTbo8g73k0LN09EFnxwPwfvMMgkQi%2BQvZL869wCautlD2kK%2FDbkDbRO4QQwhKafR0GXItJ0S%2FUxeTkkHTD%2FMa%2BNYe7VwYLcBXfG6g1wyU2wFadYAVENQPQuJuK9yceFlawomic0u559XmtsZbvL7DKrNZXM2oKRLeFpZE5bZxGepxVZzkMLnCYsLDXiNvejZl9SavPHZO5FdW7dd1BcEi4GuNucF7NRcx90W35Ct29n3YTF4%2B8bcbyBrCBGoOo9VYIHFXs8xFBX%2F2QJ2Y2OzEFo3rhNhpre%2FasDlIl6INRwXhdlgJREQk2xpDxqB9wmx%2FrLJHy%2FJqjuJsCgzzdU7EqNyETDUkry9BjqkAYEfCqVajg7Y34mFaGWEMuMg34rQ1ANgf3iIpAwS7cyBQ29Agd6jqPqPAw9FDES1nPpqR87oLecalezs7HQ%2FzNjdp%2FloKCSPQN%2B5fv94MTlyW5G%2B37OlqBLyEy66OxGR01en%2BzeVn36os0P484voTNAcIsN%2FH5ZxcRmJPWuvJdGMSNnuFnNkrqQrX0%2BmQf8LBTBbIEUI3qP37kWXG%2BCGhzDQ9INF&X-Amz-Signature=515d0897bc7c9746e2f51c1b194b5e5c60bf4e45a936d8e989db1fe1572fa3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
