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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCXFDAV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDoQvuNOW2yS0b%2BHrB%2FLKpF5Lh2ktTICKB3yjlXzqsF4QIgbYoE%2Ff1gKUAxl74gvzhICJ6XC90sbUkHvEAANjhobx4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLZD0i51JyE4ur%2Bb3ircA6BbIoflUjgFLXDyHZ1o6hlsjh6Rc28zusaoXm1F%2Fd7d7F4H%2FIcnGgQQz7MoQOXRNvJp9DjhXn4q%2F4qRTZPI3WCAUo7wRBdJgrOthDCQAuiq%2FWF18WKcRXYwWfcQ2aERvis0TIKH94W5EYzI53dS5Ih%2BHigEVcqzgor2%2BgJL0fhqYhTsk6lOPkT0Y5kmPpttxR1omRhPS1XAAjrwaaz7BM%2BogX4QeTXOFlBcddmwX2GgBR%2B1%2B3CRodyn%2BOWQQjZYhtexIB526ZwaTXmsOJu5Tbc%2Bba9dryX5xNH7RlSb2bLQZDAazfwrXT2Ozvffitw23D18%2FBUCfeYEcCpf8YUeGFs0pgxzKiY%2FQsad%2BVCC1D7yb8os1Wx0GRX8RmE7QvokpgZ6f8CDGYrZQk%2F%2BuHK4Zk4ue5U3Ity2pT8ee7Ge3Y82dV%2FH7Gf7N%2FDHjS3eN54DqOZKiplgIOY%2FjZ4hPCuTchM1pY9f1poffRCMQ15k%2BtHSZbANLgLleoiwjQTMoD5xch2vvW3KNGgJ1RiYydQjGHeZ2u2JoJ3s9gYgfv5fvSO2KoytueaoaeqAIq9l0g%2FFkXin%2BEkYJRJdXc1zgmfao6qALeywCDH2mdn2AuD%2BW0IxJbAKG72ty9xRKPirMOm%2B5MMGOqUB%2FLAO7McinUxIYZFHob3k%2BLYWkif1zDwJYCtAR9VH827mrvffxOt7RlKpy27Y8LaPW5CFUHuD7aj3ZkgvfUKXAyDPdSwwe8y5VwwMIftezW2fQxPbta1%2FjTHc6AG%2F%2FPvb4gZgHWyD6FQeiSowNXrF4CzMRKoYpXi3dojklfrN8RxA7kCXrsjyJUQ%2BXjF4UHWsfM46VLovKAa9lfgMvBNINiupRBKD&X-Amz-Signature=306e887d950ff18293f33974152dbb80b1e1648f6e8af2d9c4c3f463c4dbda3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCXFDAV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDoQvuNOW2yS0b%2BHrB%2FLKpF5Lh2ktTICKB3yjlXzqsF4QIgbYoE%2Ff1gKUAxl74gvzhICJ6XC90sbUkHvEAANjhobx4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLZD0i51JyE4ur%2Bb3ircA6BbIoflUjgFLXDyHZ1o6hlsjh6Rc28zusaoXm1F%2Fd7d7F4H%2FIcnGgQQz7MoQOXRNvJp9DjhXn4q%2F4qRTZPI3WCAUo7wRBdJgrOthDCQAuiq%2FWF18WKcRXYwWfcQ2aERvis0TIKH94W5EYzI53dS5Ih%2BHigEVcqzgor2%2BgJL0fhqYhTsk6lOPkT0Y5kmPpttxR1omRhPS1XAAjrwaaz7BM%2BogX4QeTXOFlBcddmwX2GgBR%2B1%2B3CRodyn%2BOWQQjZYhtexIB526ZwaTXmsOJu5Tbc%2Bba9dryX5xNH7RlSb2bLQZDAazfwrXT2Ozvffitw23D18%2FBUCfeYEcCpf8YUeGFs0pgxzKiY%2FQsad%2BVCC1D7yb8os1Wx0GRX8RmE7QvokpgZ6f8CDGYrZQk%2F%2BuHK4Zk4ue5U3Ity2pT8ee7Ge3Y82dV%2FH7Gf7N%2FDHjS3eN54DqOZKiplgIOY%2FjZ4hPCuTchM1pY9f1poffRCMQ15k%2BtHSZbANLgLleoiwjQTMoD5xch2vvW3KNGgJ1RiYydQjGHeZ2u2JoJ3s9gYgfv5fvSO2KoytueaoaeqAIq9l0g%2FFkXin%2BEkYJRJdXc1zgmfao6qALeywCDH2mdn2AuD%2BW0IxJbAKG72ty9xRKPirMOm%2B5MMGOqUB%2FLAO7McinUxIYZFHob3k%2BLYWkif1zDwJYCtAR9VH827mrvffxOt7RlKpy27Y8LaPW5CFUHuD7aj3ZkgvfUKXAyDPdSwwe8y5VwwMIftezW2fQxPbta1%2FjTHc6AG%2F%2FPvb4gZgHWyD6FQeiSowNXrF4CzMRKoYpXi3dojklfrN8RxA7kCXrsjyJUQ%2BXjF4UHWsfM46VLovKAa9lfgMvBNINiupRBKD&X-Amz-Signature=ed0ffc8bd440114f748b7e5a2b55fb70435ebb14143a6fb650c97f88b641c9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCXFDAV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDoQvuNOW2yS0b%2BHrB%2FLKpF5Lh2ktTICKB3yjlXzqsF4QIgbYoE%2Ff1gKUAxl74gvzhICJ6XC90sbUkHvEAANjhobx4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLZD0i51JyE4ur%2Bb3ircA6BbIoflUjgFLXDyHZ1o6hlsjh6Rc28zusaoXm1F%2Fd7d7F4H%2FIcnGgQQz7MoQOXRNvJp9DjhXn4q%2F4qRTZPI3WCAUo7wRBdJgrOthDCQAuiq%2FWF18WKcRXYwWfcQ2aERvis0TIKH94W5EYzI53dS5Ih%2BHigEVcqzgor2%2BgJL0fhqYhTsk6lOPkT0Y5kmPpttxR1omRhPS1XAAjrwaaz7BM%2BogX4QeTXOFlBcddmwX2GgBR%2B1%2B3CRodyn%2BOWQQjZYhtexIB526ZwaTXmsOJu5Tbc%2Bba9dryX5xNH7RlSb2bLQZDAazfwrXT2Ozvffitw23D18%2FBUCfeYEcCpf8YUeGFs0pgxzKiY%2FQsad%2BVCC1D7yb8os1Wx0GRX8RmE7QvokpgZ6f8CDGYrZQk%2F%2BuHK4Zk4ue5U3Ity2pT8ee7Ge3Y82dV%2FH7Gf7N%2FDHjS3eN54DqOZKiplgIOY%2FjZ4hPCuTchM1pY9f1poffRCMQ15k%2BtHSZbANLgLleoiwjQTMoD5xch2vvW3KNGgJ1RiYydQjGHeZ2u2JoJ3s9gYgfv5fvSO2KoytueaoaeqAIq9l0g%2FFkXin%2BEkYJRJdXc1zgmfao6qALeywCDH2mdn2AuD%2BW0IxJbAKG72ty9xRKPirMOm%2B5MMGOqUB%2FLAO7McinUxIYZFHob3k%2BLYWkif1zDwJYCtAR9VH827mrvffxOt7RlKpy27Y8LaPW5CFUHuD7aj3ZkgvfUKXAyDPdSwwe8y5VwwMIftezW2fQxPbta1%2FjTHc6AG%2F%2FPvb4gZgHWyD6FQeiSowNXrF4CzMRKoYpXi3dojklfrN8RxA7kCXrsjyJUQ%2BXjF4UHWsfM46VLovKAa9lfgMvBNINiupRBKD&X-Amz-Signature=ca735a04462fc714bc1aca43cd76a0799321e1ceb02778befea81ef2d8114018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MVNPNI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGFZm7ibUJ5h63KEfuQq48zHDGOB%2FENvKQ%2B6VXugOmxsAiBPAwYYeUD6WcyXOxTc0XLZJLoZP0e5xCF%2B4%2F6KYoh3oyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMpjQe4%2FFb9NIH6aZ5KtwDakeaLdrnXPgUnHn2Ybc75Dmgv8VinioQcb0tZD7006ilFVcry%2BPdr6gEVsQDIXDYOBIzxf%2FydtNLm79fGOfe2puFGYVOpNbrm1hhddMDBjUKfpBvTI%2BaZPvySTdzJicjOLgCB9F1B53VESsdZANNx7x5753%2FGoJNOrRnMDLKdpbTX9%2Fpm7FlpX%2F0DYEUt3rmCsQKSIjsK0OcC0Ol8kz%2Bm8iG2g%2BYKG13ugRuCZxMItuJsdl%2FRqmQhNmeGtCugQaPFjvnc0LmbI5R8tSPwE3Bl2id6TJvc9RSL8HqSNW74Qt3GDP6Vd53uzN9mpEWEp4bhn8gFDxZKzCV15NH688WzseAzShY8Q76K1gsW2oHqE4h3gnophc3BJW7HAZ1whBn%2FUHMa%2BMTQPP%2Fu9WK4E9z6KlpZjuBRfvSN3kqmm3zj1f8LuOc6uOm8lYQ4%2FXtC5RQvb1mkU8nl8W9CKAMGfibFXD8xzRmhyKZMS1Ct%2Fqkj2yFM6wGn2EqaPm%2BadyOeCqhSD70qGld2v%2BHHgGPnJNevJpV33unAU57xkhxgVBX2AYB%2ByYcy7j4vuLbqBHiYhcmVwiQEAbOz5yHbuZ1QTm0jV9FIFOHz411LdD%2BixFF3j4GFQEhhwt10xIY3nkw5L%2FkwwY6pgHM6fRoYXze4KLEZm9IjDUl9zEthPOuTytIC257zGc339Ds%2BlM0emsZBphxXyp2H%2BYaCgGPJPBbI2gnUn0nXwLvtl%2BdZ7pWrgd4f8%2BXF1Qe7LStKO02TG8vsE9MbB%2FcqTBFGrAqcQwOAUN%2FbtkVPMxB46JLnt2S%2FPNN4EFrXHidPWgz%2FDRuoAtJHwwh8N4IbYOdBQ0ZowvMlPyoTgxRP4LoHXxCfng5&X-Amz-Signature=8b4992f0b9d6d71b4d3397d4f49dc67ee97a79c67583b595d72860302ffbbae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQHHLUG%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBhQ2Oktf4r9FD8%2Fl1%2Byv6X1bdT3EaGemN9c6OZAG3b1AiAoi9k%2BFsRn0CQRWsDltV3MXPvZGEqkO0z2WpdvjITt0Cr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMKPsn4G0i7quJlvfjKtwDLHjuH%2FN4BfqKZFnRnCDd2SV7MOgY%2F5Jd6we%2F3JyNeP8Osxq20XwdY856arL4oeF0aNf%2FJxZmMCe0BjwZUg6tcjAddArxlonIGs7WOg9lgUqsa0ukPf1lgWSyLgYM5qSlUgwfakDjEL6x4BXCd9nHeyD8%2FwG5CGkwk7Dh%2BZfCjWi5Xv4PO503voMCehKYwVZW6vqmnNmcZrhJCOscJrkOKrzFfXnnTnlNAZctSDO%2F%2FsVuwScYzs9piAm5u%2Fpgm%2BMFWyBSaZJKoKGLGnXuIFbDMvpN5vqeERDC0JmlDp4JL9mE5XnmpkdUgK14KF46LBkMPDTN1dejp0VQ8DmbOs4D%2BJyLY4wUA7YuoqjP7SoXAh4%2BhchHETC5dD68j08xqkg6PZFfLEK7YJHWLm66YnHiKSpG%2BxuwsLwBRVFFBqjqewRZNCj2%2F%2F8ufO6Zx8M2o%2Flr5JNhGIhriU4LS3UnWy2uldjJ1Py3fdpNnlvIN%2Byt3f8i4iS3SgAil42W%2B76PVuvZD9bSEWIPbE1Ek%2FGT5ZNK9JL5CJPiv4YkJrq6U6e3v7IxijG8VGCy8qrg8RFwdNkc5wa7IWi0tOZmHUQO%2FEZrEHbQedoBkL%2BSKMaM8tJ1%2FOx7QJTagV4qO21szW0w0r%2FkwwY6pgFZkRd4bseaqJM%2B2aLhkBYmJMikX5wpv4hwsgLbnfZREY2YPTVe60KVoRT%2B7GrDLSMsSp9tCO3rdvYuiCcr6jO7fxWtiCcIO0u0pJKhtwr8XmcOgCKSSJe5u7hGG64ydZczjnwQdJZtXZzRUCm8LtcGpeVZckILp435cYwnfvSdNJ1hlMnyaO7YviTiTw0Kg1bhj9pjZk9AFIA1sy2O9UUHMcAm8AOr&X-Amz-Signature=a9e78dd55ae1752f128bc5bacd08226e93cc6fc6b669636053067f0124505541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCXFDAV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDoQvuNOW2yS0b%2BHrB%2FLKpF5Lh2ktTICKB3yjlXzqsF4QIgbYoE%2Ff1gKUAxl74gvzhICJ6XC90sbUkHvEAANjhobx4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLZD0i51JyE4ur%2Bb3ircA6BbIoflUjgFLXDyHZ1o6hlsjh6Rc28zusaoXm1F%2Fd7d7F4H%2FIcnGgQQz7MoQOXRNvJp9DjhXn4q%2F4qRTZPI3WCAUo7wRBdJgrOthDCQAuiq%2FWF18WKcRXYwWfcQ2aERvis0TIKH94W5EYzI53dS5Ih%2BHigEVcqzgor2%2BgJL0fhqYhTsk6lOPkT0Y5kmPpttxR1omRhPS1XAAjrwaaz7BM%2BogX4QeTXOFlBcddmwX2GgBR%2B1%2B3CRodyn%2BOWQQjZYhtexIB526ZwaTXmsOJu5Tbc%2Bba9dryX5xNH7RlSb2bLQZDAazfwrXT2Ozvffitw23D18%2FBUCfeYEcCpf8YUeGFs0pgxzKiY%2FQsad%2BVCC1D7yb8os1Wx0GRX8RmE7QvokpgZ6f8CDGYrZQk%2F%2BuHK4Zk4ue5U3Ity2pT8ee7Ge3Y82dV%2FH7Gf7N%2FDHjS3eN54DqOZKiplgIOY%2FjZ4hPCuTchM1pY9f1poffRCMQ15k%2BtHSZbANLgLleoiwjQTMoD5xch2vvW3KNGgJ1RiYydQjGHeZ2u2JoJ3s9gYgfv5fvSO2KoytueaoaeqAIq9l0g%2FFkXin%2BEkYJRJdXc1zgmfao6qALeywCDH2mdn2AuD%2BW0IxJbAKG72ty9xRKPirMOm%2B5MMGOqUB%2FLAO7McinUxIYZFHob3k%2BLYWkif1zDwJYCtAR9VH827mrvffxOt7RlKpy27Y8LaPW5CFUHuD7aj3ZkgvfUKXAyDPdSwwe8y5VwwMIftezW2fQxPbta1%2FjTHc6AG%2F%2FPvb4gZgHWyD6FQeiSowNXrF4CzMRKoYpXi3dojklfrN8RxA7kCXrsjyJUQ%2BXjF4UHWsfM46VLovKAa9lfgMvBNINiupRBKD&X-Amz-Signature=630e635d623adb4b3388ec7f2d534542f00d562be0cd2fd66a07a6abae4d212b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
