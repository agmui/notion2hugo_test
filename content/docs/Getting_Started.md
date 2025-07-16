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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWKFCYU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGLLEnBADS%2Fs7JSBIRp3bJDv57jrWvFKw9o5%2BK%2FrXslAiEAtaoY%2BJR1fzfqEGUZLqU0x52a%2FfLjzkZFXwfZlzVgHFkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ2WFhjVBpHCBZDWGSrcA31OHYRM%2Byl1zJcp%2FbOG9aROVF2c2ASwZ21w%2Ft0iJZGSg%2BK8sgI%2BeClgryl5MQkBeXSWQd%2F6QmitvIV59oSiu39uC9Q9ufVsc1SbMTwnqXO2VDC%2B1qDHK216GayhZUO9EZ%2B9QRBloCkhmfSUP0a6x2e4ejaU0VYoTGnpi1mNswTXMP6mYmb8YFLLve24OJi%2BhVkgjCNN7LCiYKPAByIuoJyE3xMwRSnroMwufHO7F4TWiYLEKwy72zanYf673Sp8o%2FIpvjPzbibMonf%2BvtEd9glV4iALalbJLKc2Tf22jUzzPTeKIpW0s%2BN9JT%2BCp9woA6HE%2BxA%2F2ciAgi%2B6ndh8bXQ%2BtajhMC58J1pYalz6erS1Ghc4DOiE1zAmtNxBpojjNo6TnkspXhRtCP7jlEICz2g7U49sGeumRr957Wa0CaZf5RdDdXv8glifxAe%2FH37sjeS5%2FBjJsnmCjPjLeve2xqj1LH%2Bg40bKnMv62s5l7gHt8ntQjsUMnGoih26Jk5IBzWbw63HlwCbroMxPUoUb6u3mrHcsof2KHXsI9zMxQ16CjapdMGzR%2BUsBbaIhh5qqGIEwoEjDvDP3gyMiO0eb5g99WvOq5JW7jnikgua3VaNnL0F%2BDHJs4YZ6MsvrMIW%2B3cMGOqUBj0cA3lki7IHMAiClruF0eiYdFVN57zABFtw4oB5nNneqkRp%2FuDh7xFysJRyHcOwq3qOjxTVef%2F%2Fjh%2FD75KRC1G7Enuk6lNYbXilwcBePEMYyze3z0BeXlK3nLFnjbzrV1QMLYeQHxMW8wVctQv0CS47tJk8Ky%2F5a5YLkGsunyS5m8erfvlV64%2By%2BPk1hChTMYG%2FKtbmhAVsbdjNWuXyeaTLCPVZg&X-Amz-Signature=e1b4b78e1773113b6fc9526ccfb1aabd6392c5b32feccc20382bbd94c5a55786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWKFCYU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGLLEnBADS%2Fs7JSBIRp3bJDv57jrWvFKw9o5%2BK%2FrXslAiEAtaoY%2BJR1fzfqEGUZLqU0x52a%2FfLjzkZFXwfZlzVgHFkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ2WFhjVBpHCBZDWGSrcA31OHYRM%2Byl1zJcp%2FbOG9aROVF2c2ASwZ21w%2Ft0iJZGSg%2BK8sgI%2BeClgryl5MQkBeXSWQd%2F6QmitvIV59oSiu39uC9Q9ufVsc1SbMTwnqXO2VDC%2B1qDHK216GayhZUO9EZ%2B9QRBloCkhmfSUP0a6x2e4ejaU0VYoTGnpi1mNswTXMP6mYmb8YFLLve24OJi%2BhVkgjCNN7LCiYKPAByIuoJyE3xMwRSnroMwufHO7F4TWiYLEKwy72zanYf673Sp8o%2FIpvjPzbibMonf%2BvtEd9glV4iALalbJLKc2Tf22jUzzPTeKIpW0s%2BN9JT%2BCp9woA6HE%2BxA%2F2ciAgi%2B6ndh8bXQ%2BtajhMC58J1pYalz6erS1Ghc4DOiE1zAmtNxBpojjNo6TnkspXhRtCP7jlEICz2g7U49sGeumRr957Wa0CaZf5RdDdXv8glifxAe%2FH37sjeS5%2FBjJsnmCjPjLeve2xqj1LH%2Bg40bKnMv62s5l7gHt8ntQjsUMnGoih26Jk5IBzWbw63HlwCbroMxPUoUb6u3mrHcsof2KHXsI9zMxQ16CjapdMGzR%2BUsBbaIhh5qqGIEwoEjDvDP3gyMiO0eb5g99WvOq5JW7jnikgua3VaNnL0F%2BDHJs4YZ6MsvrMIW%2B3cMGOqUBj0cA3lki7IHMAiClruF0eiYdFVN57zABFtw4oB5nNneqkRp%2FuDh7xFysJRyHcOwq3qOjxTVef%2F%2Fjh%2FD75KRC1G7Enuk6lNYbXilwcBePEMYyze3z0BeXlK3nLFnjbzrV1QMLYeQHxMW8wVctQv0CS47tJk8Ky%2F5a5YLkGsunyS5m8erfvlV64%2By%2BPk1hChTMYG%2FKtbmhAVsbdjNWuXyeaTLCPVZg&X-Amz-Signature=443bddb5288b3620e21268a0021439bea115ba63d586ddad3e7c023dbfa592c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWKFCYU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGLLEnBADS%2Fs7JSBIRp3bJDv57jrWvFKw9o5%2BK%2FrXslAiEAtaoY%2BJR1fzfqEGUZLqU0x52a%2FfLjzkZFXwfZlzVgHFkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ2WFhjVBpHCBZDWGSrcA31OHYRM%2Byl1zJcp%2FbOG9aROVF2c2ASwZ21w%2Ft0iJZGSg%2BK8sgI%2BeClgryl5MQkBeXSWQd%2F6QmitvIV59oSiu39uC9Q9ufVsc1SbMTwnqXO2VDC%2B1qDHK216GayhZUO9EZ%2B9QRBloCkhmfSUP0a6x2e4ejaU0VYoTGnpi1mNswTXMP6mYmb8YFLLve24OJi%2BhVkgjCNN7LCiYKPAByIuoJyE3xMwRSnroMwufHO7F4TWiYLEKwy72zanYf673Sp8o%2FIpvjPzbibMonf%2BvtEd9glV4iALalbJLKc2Tf22jUzzPTeKIpW0s%2BN9JT%2BCp9woA6HE%2BxA%2F2ciAgi%2B6ndh8bXQ%2BtajhMC58J1pYalz6erS1Ghc4DOiE1zAmtNxBpojjNo6TnkspXhRtCP7jlEICz2g7U49sGeumRr957Wa0CaZf5RdDdXv8glifxAe%2FH37sjeS5%2FBjJsnmCjPjLeve2xqj1LH%2Bg40bKnMv62s5l7gHt8ntQjsUMnGoih26Jk5IBzWbw63HlwCbroMxPUoUb6u3mrHcsof2KHXsI9zMxQ16CjapdMGzR%2BUsBbaIhh5qqGIEwoEjDvDP3gyMiO0eb5g99WvOq5JW7jnikgua3VaNnL0F%2BDHJs4YZ6MsvrMIW%2B3cMGOqUBj0cA3lki7IHMAiClruF0eiYdFVN57zABFtw4oB5nNneqkRp%2FuDh7xFysJRyHcOwq3qOjxTVef%2F%2Fjh%2FD75KRC1G7Enuk6lNYbXilwcBePEMYyze3z0BeXlK3nLFnjbzrV1QMLYeQHxMW8wVctQv0CS47tJk8Ky%2F5a5YLkGsunyS5m8erfvlV64%2By%2BPk1hChTMYG%2FKtbmhAVsbdjNWuXyeaTLCPVZg&X-Amz-Signature=7c166c8265a0974b56110bbc7435601310caf52006e5e9a89299b26474e46b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFEYU4S%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDJO5EO4NeYqGq6YCX6a%2BqR4n%2BtoVlMonJYE0A49D053AIhALY9H1PypPTHd8wIhcx7xl6hnbhDp4H2yJqEkUvLgGyWKv8DCFkQABoMNjM3NDIzMTgzODA1IgxfA8I%2FU41rFzWLeuQq3AMpH701H2YRxEm1Ddi30JgaYEChA1k6Al0I%2Beg211EemPlE3Qx2%2B1z3atUfRGw2mPKrsZ3ZffGWaHkJuYUVzW24FBLNkHtki8KBZiWeJxRLraCf2ahE5wbIgVfXmZEYufiGDx%2FhW7stU5pF5TDGV49PsT%2BI5oUCEmP9sPDL4wtvcSi1I3RMgs9VgNT6Xzg57qulw4l815lJ0YNHE%2F6SKwhh2YFPFUUwSoOyG6zqVmMtkKEtKnHbxH7UmYlaVll2IKYUklRcvN3Cc%2Ft1ggyRMIPr5hX2MJyapclJyhTRXvkDJt1JvROr0eRADH78JE0iGq6ms9t9l3EjcUXXEBZddlXQjYEYhur3DVRLqj8T7yoYFOvp6NPZMvk4aL5AOyAmAB5PVpGk0helmX2Wl5HNlzQWz36HT48vDAL7b8OcXbBCx6kmw26xEBinBxbCsLXVpm3wmFIctbJICQm37lvYvyqUDRhu0tMwDu2bEDrc9HM1k9iybhnlaY2wGZIE2%2BQqKDl04aJmktQ9CpKeyYZ7uM%2FZnzHCXav%2F1Di9QvmnTcJczwzXT7HsQo8DukTd0h%2Blu5Q3yxr0VXMwiVQ3CPklqyULEi2vtbMZ8TpBuEQdDYzBKFs3kHcpVmkpqJDaWjCUvt3DBjqkAaZOmSolxag8%2BDGZdPsAK4IEDRjr7uFhqk84VUOlFEuAykNFjWr9QPkQyM6NiDv67FXwlKMvqHmc5Neq7mfDAxjm5kz6rv4kRIsDMHPLRmULCnLLT581szVTidNaafhKs%2BU%2BMWdI27exwRjvPYLje%2BDjxw4G61Xxp233zcffpHmgtH4kNfO6W8BuxCoPrmKjbi1bSKve5kX6nLXiLBKMgisy0tGn&X-Amz-Signature=5ee3cdde0645c24232926a908a3fef790469be423273bdefb2ca9e70db7411c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHTFVGZG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEysqaFkKuQXSA4HY8PNzLeYBq3W%2B1gutC%2BRQbkyy2SMAiAToV5mOvXu9Z%2F6VGBIpdpmbBUmDIOfrrps%2B9mMKK3sjSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMwa7kgQ3UjnySMMezKtwD50sPoS2CdaLkyunRt3j7em3xEZQIKAtRsk%2Bm9LiwtIeikIo4fHC95nCIm7ay1p4QtPn9YlyXQ2lbe78DruO7bs%2B7gMRJ%2Fd9aRr632bO%2B1HQt5iM3VKA7iS5fLFv1qLuwG%2BAdWkHV%2BHfMoGpWRuwCnFG5WEh44X0RIRV479Iu74Yh24stwc5NYlPaDr%2Fwdgf49%2F9jzoiL6dPiMHabAmsgLIsRd%2Fain4wXFK%2FbNBLEXEZKzr5MwYTp6rXJ8S5dqVNyM3kkB4v5ZQX1FHNfN7QtYXFHWTNV1U7MQrwkbmFmzD5D6%2B%2FjaV7L83%2FCL%2F5U62j3rBymaa3WdR9YiQQFcN%2Fzlfjf%2F6LUsK%2FEDO6KQcGK5HDcRB%2BaDU%2FIXc%2F64mzour1%2BNI6%2Bka6%2B2Q4kpq7l0AQmwLfurduW0Dx8aSyuwHRRmZFUTZ7UFjEBS2X5e3unTNNwMoe6qzjrhH9ZPdrVuVnfjPYu%2FOqm8RCCsrnW%2BO8agOKiYwNwayB1405%2FyLkECPgRzAo%2Bh20qeR4H0VeY79N3Dx5w2HIBscQC0WdL1zEBx3Pj%2BtmrJz6772Q7DMn4ObpQI0HQ6KeHcg9Kx34vhFo6HEvsO%2BE9B01KDyNWZsBG0SLEPC5cw7W1QvIvnXAwzb3dwwY6pgHe4cJcOPu%2B%2BaZHKsTeviIvoYXSpHauGAl3N%2B6uPMhd9eW8I%2B%2FWyMwWXv4DyLIKGWLXJgbvwOvwfVU3ONC8gkqYQnKxHaVfBwQ%2FVfMLANR2%2Fz68mslZtW57WH4F8rCWGQAcc7tuC6KAn%2B%2FyeKtsvn1U0PtKygUSHzUjpocGTAJEMSNBKlLrXUE20CgMYYrSYClQxV8JyYelxjsoKpcXPTDOwX1CJcnq&X-Amz-Signature=9296b5893f28bd3f2b71752ae5fb1d91cd03333c7e85f76232ca7df22dfd53da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWKFCYU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHGLLEnBADS%2Fs7JSBIRp3bJDv57jrWvFKw9o5%2BK%2FrXslAiEAtaoY%2BJR1fzfqEGUZLqU0x52a%2FfLjzkZFXwfZlzVgHFkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ2WFhjVBpHCBZDWGSrcA31OHYRM%2Byl1zJcp%2FbOG9aROVF2c2ASwZ21w%2Ft0iJZGSg%2BK8sgI%2BeClgryl5MQkBeXSWQd%2F6QmitvIV59oSiu39uC9Q9ufVsc1SbMTwnqXO2VDC%2B1qDHK216GayhZUO9EZ%2B9QRBloCkhmfSUP0a6x2e4ejaU0VYoTGnpi1mNswTXMP6mYmb8YFLLve24OJi%2BhVkgjCNN7LCiYKPAByIuoJyE3xMwRSnroMwufHO7F4TWiYLEKwy72zanYf673Sp8o%2FIpvjPzbibMonf%2BvtEd9glV4iALalbJLKc2Tf22jUzzPTeKIpW0s%2BN9JT%2BCp9woA6HE%2BxA%2F2ciAgi%2B6ndh8bXQ%2BtajhMC58J1pYalz6erS1Ghc4DOiE1zAmtNxBpojjNo6TnkspXhRtCP7jlEICz2g7U49sGeumRr957Wa0CaZf5RdDdXv8glifxAe%2FH37sjeS5%2FBjJsnmCjPjLeve2xqj1LH%2Bg40bKnMv62s5l7gHt8ntQjsUMnGoih26Jk5IBzWbw63HlwCbroMxPUoUb6u3mrHcsof2KHXsI9zMxQ16CjapdMGzR%2BUsBbaIhh5qqGIEwoEjDvDP3gyMiO0eb5g99WvOq5JW7jnikgua3VaNnL0F%2BDHJs4YZ6MsvrMIW%2B3cMGOqUBj0cA3lki7IHMAiClruF0eiYdFVN57zABFtw4oB5nNneqkRp%2FuDh7xFysJRyHcOwq3qOjxTVef%2F%2Fjh%2FD75KRC1G7Enuk6lNYbXilwcBePEMYyze3z0BeXlK3nLFnjbzrV1QMLYeQHxMW8wVctQv0CS47tJk8Ky%2F5a5YLkGsunyS5m8erfvlV64%2By%2BPk1hChTMYG%2FKtbmhAVsbdjNWuXyeaTLCPVZg&X-Amz-Signature=7c652cbc99f9ce7bdf63e1c9174ffcf1a6fc4db22621b73dbf7f359f029250bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
