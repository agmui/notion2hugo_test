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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33ZIJWM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCo5G6WsulFGzl8M7A0CKerKBurz%2BWjJ0DY65LPcRviHgIhAOF9wkp0gv6Z8NpXxEwu2l200a6XTbS7if%2FJ3SO%2F9xx1KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU85KgJmO3lEK%2FuRIq3APGe8x7ruMWXpo%2FIxRBYe3%2FIzK3Z7iH3F8zD%2Fa%2BVYGOoeHbFg8CvpOppxp5uGA3rzsWBjASDY2%2BFR02Sn3f4XcuRdUu%2BRYWRMOd3weh%2FFmpuUifKIPvYZCQ6%2Bg3848%2BW%2BTXv5RZWB%2BBZ9Oq%2FM5raGny6CnWo01EwPCNgECJxfTUEt448XIGxw9WSq7qf3mqujTi2KlMBxKfBDdiPRIlob8ZGXQupHZdriTJRqn6tzwkuxbsQhyBTNrQ0XnarStApMWzbVYSYEDcGaMJDlbQaU3zbtaZ4ANyzn1R0n67JK3UwAt8IDL3at70%2BWqu9B189qjddPL8yc%2Fx1SGS864cA2k1t38TAgQ9ep7HlmgB95Ut3fMdFNMNzyV%2BhMmSU%2F2bFvTFMA%2BsLH9S1iMESh8N9KLR6jGdm8co1ZdfaCP7FK1ovqyVFVAW6GEzMAGmlPxUzkxExqhEF7I6a%2BU4nIQiocjx4f5PWR6aN8J9EYIdObxvzEevTfb9sP5owGj0jvH2LvJ8roljBkc3ZxSQl2BJgDq1IcSY5VJ2VDa12kgLc%2BMkAhfHE5%2FsRjimGdy3s%2F8Jd2SzrxdeGj%2BJFE0plvt4giOhbFVXktJaa4FtB%2BZwjC8n9aP3W4w9hPHAmnjJvzDghIDBBjqkAZrqrjebqhWWNTtqt5Dxoo%2FwKqmemDF%2BsswHqwqG4nlKb%2FQ6yVDkabJNw34o3O2JjefiKTsFWCtacH6DETvBRD1Mw0Gutb2O4DiCwlfxelp00qqK8JzMx%2BpxwMDo58h19M8zcSioT3eeQOEtUPSq0S8rkOmmjn%2Fb1%2Bd%2BrVp6dNMP%2Bj5vgNuxduc4%2BgkScCMW7lgGtB9qgVnlOipHZ0iJqzYlg9i0&X-Amz-Signature=0a570a12ea48e4b7f353eecf1d6a944065e94826a1db75edf16ad4f67e3eae6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33ZIJWM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCo5G6WsulFGzl8M7A0CKerKBurz%2BWjJ0DY65LPcRviHgIhAOF9wkp0gv6Z8NpXxEwu2l200a6XTbS7if%2FJ3SO%2F9xx1KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU85KgJmO3lEK%2FuRIq3APGe8x7ruMWXpo%2FIxRBYe3%2FIzK3Z7iH3F8zD%2Fa%2BVYGOoeHbFg8CvpOppxp5uGA3rzsWBjASDY2%2BFR02Sn3f4XcuRdUu%2BRYWRMOd3weh%2FFmpuUifKIPvYZCQ6%2Bg3848%2BW%2BTXv5RZWB%2BBZ9Oq%2FM5raGny6CnWo01EwPCNgECJxfTUEt448XIGxw9WSq7qf3mqujTi2KlMBxKfBDdiPRIlob8ZGXQupHZdriTJRqn6tzwkuxbsQhyBTNrQ0XnarStApMWzbVYSYEDcGaMJDlbQaU3zbtaZ4ANyzn1R0n67JK3UwAt8IDL3at70%2BWqu9B189qjddPL8yc%2Fx1SGS864cA2k1t38TAgQ9ep7HlmgB95Ut3fMdFNMNzyV%2BhMmSU%2F2bFvTFMA%2BsLH9S1iMESh8N9KLR6jGdm8co1ZdfaCP7FK1ovqyVFVAW6GEzMAGmlPxUzkxExqhEF7I6a%2BU4nIQiocjx4f5PWR6aN8J9EYIdObxvzEevTfb9sP5owGj0jvH2LvJ8roljBkc3ZxSQl2BJgDq1IcSY5VJ2VDa12kgLc%2BMkAhfHE5%2FsRjimGdy3s%2F8Jd2SzrxdeGj%2BJFE0plvt4giOhbFVXktJaa4FtB%2BZwjC8n9aP3W4w9hPHAmnjJvzDghIDBBjqkAZrqrjebqhWWNTtqt5Dxoo%2FwKqmemDF%2BsswHqwqG4nlKb%2FQ6yVDkabJNw34o3O2JjefiKTsFWCtacH6DETvBRD1Mw0Gutb2O4DiCwlfxelp00qqK8JzMx%2BpxwMDo58h19M8zcSioT3eeQOEtUPSq0S8rkOmmjn%2Fb1%2Bd%2BrVp6dNMP%2Bj5vgNuxduc4%2BgkScCMW7lgGtB9qgVnlOipHZ0iJqzYlg9i0&X-Amz-Signature=0a0faeea6574bc2d9a553cfefb7dafc02eb88dd279d0be7dacaecf81ec68b433&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33ZIJWM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCo5G6WsulFGzl8M7A0CKerKBurz%2BWjJ0DY65LPcRviHgIhAOF9wkp0gv6Z8NpXxEwu2l200a6XTbS7if%2FJ3SO%2F9xx1KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU85KgJmO3lEK%2FuRIq3APGe8x7ruMWXpo%2FIxRBYe3%2FIzK3Z7iH3F8zD%2Fa%2BVYGOoeHbFg8CvpOppxp5uGA3rzsWBjASDY2%2BFR02Sn3f4XcuRdUu%2BRYWRMOd3weh%2FFmpuUifKIPvYZCQ6%2Bg3848%2BW%2BTXv5RZWB%2BBZ9Oq%2FM5raGny6CnWo01EwPCNgECJxfTUEt448XIGxw9WSq7qf3mqujTi2KlMBxKfBDdiPRIlob8ZGXQupHZdriTJRqn6tzwkuxbsQhyBTNrQ0XnarStApMWzbVYSYEDcGaMJDlbQaU3zbtaZ4ANyzn1R0n67JK3UwAt8IDL3at70%2BWqu9B189qjddPL8yc%2Fx1SGS864cA2k1t38TAgQ9ep7HlmgB95Ut3fMdFNMNzyV%2BhMmSU%2F2bFvTFMA%2BsLH9S1iMESh8N9KLR6jGdm8co1ZdfaCP7FK1ovqyVFVAW6GEzMAGmlPxUzkxExqhEF7I6a%2BU4nIQiocjx4f5PWR6aN8J9EYIdObxvzEevTfb9sP5owGj0jvH2LvJ8roljBkc3ZxSQl2BJgDq1IcSY5VJ2VDa12kgLc%2BMkAhfHE5%2FsRjimGdy3s%2F8Jd2SzrxdeGj%2BJFE0plvt4giOhbFVXktJaa4FtB%2BZwjC8n9aP3W4w9hPHAmnjJvzDghIDBBjqkAZrqrjebqhWWNTtqt5Dxoo%2FwKqmemDF%2BsswHqwqG4nlKb%2FQ6yVDkabJNw34o3O2JjefiKTsFWCtacH6DETvBRD1Mw0Gutb2O4DiCwlfxelp00qqK8JzMx%2BpxwMDo58h19M8zcSioT3eeQOEtUPSq0S8rkOmmjn%2Fb1%2Bd%2BrVp6dNMP%2Bj5vgNuxduc4%2BgkScCMW7lgGtB9qgVnlOipHZ0iJqzYlg9i0&X-Amz-Signature=09a7a109070a8d10400957b9481cc41a10f98388bb0048feb809bf3a23c2e2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7TSZ4AN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEaP6ROQh7gHOvW%2FFgew0oRT6xd%2BoqVIHvqUq%2BH9emrKAiBulggaRFNHTNAmVLAZh6BDxxcl9Tp11f2oe1xMf%2B6sLyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0AJiVVHlfrpb2Z1lKtwDVitF5nyL174NfkBM4SI9Qwax3ljlBAb%2F5Ki2uDrWkVoweRBtWiIPtY4CqIe9xYd1MTyxOsmFGo08H2FE0MlrJm5KGuGyd12wIVydpvO3ob3azh%2FBnwzfMf%2FFpk%2BHQ2jBPfKRHmMOZnsymaC3%2BaUPMzjkrxEY4ueS3gXf6sfyy1xMVLutrRV7pwVOY6IzyGBBKGtpfuVyyGXHw%2BFf6VNa%2FpcgmGoxU8lKRn%2B6pXSTrKUYKhIHXdfYTkC7AOhXuGov6LBon2CUfri427aqrKYYv8S0eUukcH57KH0i5JcwM6avttejbQZGGnUbx%2BI5x8nWVQOHOHfIYjikCjPU6BWMUJg1OsQWceMsYnvBjqqr7lTxvIucoY7quzBTAZQj9Z%2BBtm6x4IB%2FXl2fA%2Bg1znLPNV%2Bsx3PLsjeBbDs1jtPNAVDrl1iH%2FJJIEr%2B%2FuffoO4CRZWhte%2B7CfleyFPtTQ3lEzTwgyAJVb46bcs24jbWIq%2FhpETj%2B3kHLL32nkzqG3jJKEsfz16w31XC94xeljEQIaaLPPAqfVXCy7Spi5tQhIo3%2FMezc%2BjQG24pR64BYGbE5mmbV7ZLjdW%2BFZowZMREMQoy8jFsFESVWjjBB4diUF%2Bw7Hxs7uvQpNnzXR9kwpoSAwQY6pgGbJcq%2Fvcc3I3FNbpIq%2FfULlW5%2F8wVcNKmf4qj0i18IjBrIje%2Bp7cDcm5dB2ht9bvS45%2BqlPImMIxsJwQTM1%2BMQh9w98Gih0uzNo%2FsW6n4uVRScIAtFcTCC8577No6OlHgrBLyBhrHkIvbmYKlGXPpYy%2Ff9iOw2AtG7Ju4sf0KHnXgH1dW%2Fi7NghtUmPL8b7EF2h%2FJh4vjJaXcstcWAn9ncnEfjWWT5&X-Amz-Signature=f31531def46b0ebd1e03dd36fd8220ec9cdebc6c52dec0bc3268b234a5d5b7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44LNUIG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEmg43%2BdnS2CVbD0i8P8W3ph0g6vGg%2FylZqkRjvUzM%2B5AiAtF%2Bja07VemmUqKEzjV8KRsWY3wPapNAUhgYx7jZqvnSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FRPZTLJbopPiN1HKtwD7luWRL18AQgP9AKJAI1BQRO96UepifRa9CNbnnhAJIOV1csNPC%2F3WD%2Fdm6W8dicfO%2FcMgREFeeBJnWr%2FZjvCQzmYwnwBr2XNmlQbNd1rB3dwPBUMwN1ih9ww8HDG0I6DTSnwm1M6gWxYyucuQMLfK%2BGL0vmzGP0aM8XBU%2FF2NU0dOaJLOqEZbNPNF2rb3bCry2zstUCBiM1hohLcbfmm5Hti%2F0xMmLKpUFHcA7KTESGzpCY%2Bmd2zp82Th6iBAj0j%2BCToQw1bgv4zgzF0ycpY%2FnufsKAkjfyn5DaJp3OOmiM5%2BKJbeJLXNRzBoECkw9%2FRWnvRornpzbU7%2BZ8E4MKw7a3ZRMFMP1aZS6uLrMuJjWXfNg4QMdm9PBIfco04E4zJ2zQ69N68zUK5xcuT%2BCQlYvSgzAaiQpwaZu0Khciiz%2ByIi2smzFKwdpjA4PyOry120kL4LcTpwd9GL7DuWPYwCeXWT9OJe2HxZtrKiUB9ug70o6lVgHvgchrDfIL1EMJca7VJ0crSylvR5aeEthBmXYTeNaXghbkoH6THDSyn8%2FI8Z4hu0zTJCvN%2B0NWZAZNwbIM1CxUjEF6Ib0Kdmfkd%2FDW1oa3hidOqHZxrQ3gphrTAXairFwiNFJYkM5Qw54SAwQY6pgHl6LWevu4tiSbto0VWwyuxEIwfVO9rZzRZz9aAGqbGUxnr7avyaVYRTcvT1XpJzUDbdI5hC8SEm4wgTl871D6RNxQ0gQR3cx5OsMbYcELvoH%2FFGDSiRDXCRpy5%2BKU7kYRXhs5S8utreOBzFXOCLv6%2Fg0tjU0PJO0BLSAMT3sJkTPvtW52xO45QRsE7ECyY6RMPGa5dkeMzJN6OWjPiSiRnpYm7XrKB&X-Amz-Signature=d2fc045ac350d324b1eda1aec18ee1fd685533f9cf3240afa15e84d301d1ce49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33ZIJWM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCo5G6WsulFGzl8M7A0CKerKBurz%2BWjJ0DY65LPcRviHgIhAOF9wkp0gv6Z8NpXxEwu2l200a6XTbS7if%2FJ3SO%2F9xx1KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU85KgJmO3lEK%2FuRIq3APGe8x7ruMWXpo%2FIxRBYe3%2FIzK3Z7iH3F8zD%2Fa%2BVYGOoeHbFg8CvpOppxp5uGA3rzsWBjASDY2%2BFR02Sn3f4XcuRdUu%2BRYWRMOd3weh%2FFmpuUifKIPvYZCQ6%2Bg3848%2BW%2BTXv5RZWB%2BBZ9Oq%2FM5raGny6CnWo01EwPCNgECJxfTUEt448XIGxw9WSq7qf3mqujTi2KlMBxKfBDdiPRIlob8ZGXQupHZdriTJRqn6tzwkuxbsQhyBTNrQ0XnarStApMWzbVYSYEDcGaMJDlbQaU3zbtaZ4ANyzn1R0n67JK3UwAt8IDL3at70%2BWqu9B189qjddPL8yc%2Fx1SGS864cA2k1t38TAgQ9ep7HlmgB95Ut3fMdFNMNzyV%2BhMmSU%2F2bFvTFMA%2BsLH9S1iMESh8N9KLR6jGdm8co1ZdfaCP7FK1ovqyVFVAW6GEzMAGmlPxUzkxExqhEF7I6a%2BU4nIQiocjx4f5PWR6aN8J9EYIdObxvzEevTfb9sP5owGj0jvH2LvJ8roljBkc3ZxSQl2BJgDq1IcSY5VJ2VDa12kgLc%2BMkAhfHE5%2FsRjimGdy3s%2F8Jd2SzrxdeGj%2BJFE0plvt4giOhbFVXktJaa4FtB%2BZwjC8n9aP3W4w9hPHAmnjJvzDghIDBBjqkAZrqrjebqhWWNTtqt5Dxoo%2FwKqmemDF%2BsswHqwqG4nlKb%2FQ6yVDkabJNw34o3O2JjefiKTsFWCtacH6DETvBRD1Mw0Gutb2O4DiCwlfxelp00qqK8JzMx%2BpxwMDo58h19M8zcSioT3eeQOEtUPSq0S8rkOmmjn%2Fb1%2Bd%2BrVp6dNMP%2Bj5vgNuxduc4%2BgkScCMW7lgGtB9qgVnlOipHZ0iJqzYlg9i0&X-Amz-Signature=c3452d8db8df294f00c09fd5a73f84efb1bbfaeba2f1ea19173f2cb016b19e33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
