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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURCRMAO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICvWuvfQgaX5SNzEamQgkKc%2BNka9CGuZdnuIEySIRlntAiEAqglKO5KMVAWfP4SoqfqgvKBFGDjjVrRwu4KG2vsIFqAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHC20BtKcQTza5jxoyrcA3NIp02EjdMIp5GcyQOzzjiMYbWAouq9sWxlqgl8h5QYdxVD%2FraRSdNsM%2FbYCh4%2Fu5%2BP2rREajM%2Fp6byFrtNMqLK9LL81B%2BePdvpmT%2BZRDNhaZPaQt3qyiAG4iVlBx5i0%2BmN7xlxUPn0fYzz4fX9w%2FyBcdp8%2F25iTmlW28CHrN2%2BCmDqExFNG%2FcJpwdDTxF0ZmibYrmwFPstVMhNN9RsmBQC%2FwvyTT5us%2FPdESloMrZR1tCA5HjryJf5e7tcTJFhjgUvHHPGES0HE5EaHdedvuHrY1J8byBcUbEI5mXTtf5h0n9JSN4OrW95scl3QZkVj0G0uO38M1vFWBHeJbfYB3TPwNpuK%2BMu%2B6YlNwpbuIZlW0Ms6ZKxLnQVVruNLtfLBf1fEOB5jcbdnzMRCdqVRzd2oQphxIhNofQvPd0FuwPZMwKl4zaZRMy%2BAKSsJ7KBoIm9M8Co%2FQy2P5nNE6WshFL%2By3KWfRx%2Bchejh4hR3x1AZEM3gYGFL1iGMuEfATvhTs9JDWk0eI2Pc4JhABWG%2FfeikChqwsmHP4rrDrNZnjHVK86MuuqZeWBHXyNJNAXwe%2BcLZX%2FRKIwQSbx0Hd7VnVZZOATMzihbTYfTKvTcQJ%2Blm9dme6hgKHZjmYMDMKabx70GOqUBb%2FXjB6eguejVUSIC7GvJeg%2FTm1MRbQ3%2FO5VE2YR0OOFd%2B8Q1hvMqI4gZWJuve2shKI7EEFstSEgyQGR%2FCbAk7NICkgyO8SGifhtIjn0QFO%2BW%2B9Ptz0mGea2hREaM7xSv0XSQ4pU2xGDjh%2Fr7kwGmFtonmsbMPV281aYPclF4N%2BW3SpYFCbOu1wxrq2mVXZ28r6Z1ockJnNF5DhXlCq1o6owcShCF&X-Amz-Signature=03bb2a90c9813137a7c988a5a4ab253522529c64c8a0bbbd9a36c007c86ef065&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURCRMAO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICvWuvfQgaX5SNzEamQgkKc%2BNka9CGuZdnuIEySIRlntAiEAqglKO5KMVAWfP4SoqfqgvKBFGDjjVrRwu4KG2vsIFqAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHC20BtKcQTza5jxoyrcA3NIp02EjdMIp5GcyQOzzjiMYbWAouq9sWxlqgl8h5QYdxVD%2FraRSdNsM%2FbYCh4%2Fu5%2BP2rREajM%2Fp6byFrtNMqLK9LL81B%2BePdvpmT%2BZRDNhaZPaQt3qyiAG4iVlBx5i0%2BmN7xlxUPn0fYzz4fX9w%2FyBcdp8%2F25iTmlW28CHrN2%2BCmDqExFNG%2FcJpwdDTxF0ZmibYrmwFPstVMhNN9RsmBQC%2FwvyTT5us%2FPdESloMrZR1tCA5HjryJf5e7tcTJFhjgUvHHPGES0HE5EaHdedvuHrY1J8byBcUbEI5mXTtf5h0n9JSN4OrW95scl3QZkVj0G0uO38M1vFWBHeJbfYB3TPwNpuK%2BMu%2B6YlNwpbuIZlW0Ms6ZKxLnQVVruNLtfLBf1fEOB5jcbdnzMRCdqVRzd2oQphxIhNofQvPd0FuwPZMwKl4zaZRMy%2BAKSsJ7KBoIm9M8Co%2FQy2P5nNE6WshFL%2By3KWfRx%2Bchejh4hR3x1AZEM3gYGFL1iGMuEfATvhTs9JDWk0eI2Pc4JhABWG%2FfeikChqwsmHP4rrDrNZnjHVK86MuuqZeWBHXyNJNAXwe%2BcLZX%2FRKIwQSbx0Hd7VnVZZOATMzihbTYfTKvTcQJ%2Blm9dme6hgKHZjmYMDMKabx70GOqUBb%2FXjB6eguejVUSIC7GvJeg%2FTm1MRbQ3%2FO5VE2YR0OOFd%2B8Q1hvMqI4gZWJuve2shKI7EEFstSEgyQGR%2FCbAk7NICkgyO8SGifhtIjn0QFO%2BW%2B9Ptz0mGea2hREaM7xSv0XSQ4pU2xGDjh%2Fr7kwGmFtonmsbMPV281aYPclF4N%2BW3SpYFCbOu1wxrq2mVXZ28r6Z1ockJnNF5DhXlCq1o6owcShCF&X-Amz-Signature=431cf2d3dd58698377fe1739e2d22f7a65eab385b103149811db9c615730d55e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEAEGKYC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIF3nXSKew93aJz86gQnW02ph%2BI8UeQJF49wo4qxdWn%2BHAiBr1mbwQC8GkmD9CzgtDdZc2DLzlyM1wWrBkDNlC8C66Sr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMaReadxqJ2IjdcZC2KtwDHIT8qzdRZR%2FqQym7%2BaUpwQfEH%2BfOSnqmrmPmG6Mq30sATX9NY7%2BWpGipl2Jo011CgQSS%2FipJbJLt8PG3o%2BY7tQB%2F3lwa1Xs3PytRx6jFZ39if%2B16FuKi1SbEaBxqt5WCYTfJYCgABBC%2BlbU%2Fd2p35bxTo0e%2FWv%2FLu9g4XurSFRACaeaXJiswTRSUgx03iIhGYkx8qlvzF9GlM9gYuG0zLI0qa5vRH8dJG09Xr9ZcV2BGDMZERyO2pCPy%2FEN6GxvkKgWq3TnDec5ppZXVn7tM5bJfBD7l%2FwQz%2B3QO%2F%2BJM8Opo9MEosP5r8Ym133BdhgLaWNJndl%2ByIlYw6bdFVqkXXylGVEMtPbqBpZmElVScKJONVwa5AkGdNS0lUpovUzKoPoDMokb4asDUKi6pdeXuRPUVTVRAbf%2BitnhSxM3BEiZ7%2FBxEVgqk1WgVF7RH2JWQHdqFF8U7OCPyndfwkHNzPcWCNJEOIynP0M1Fe59ccu%2Fy2f9iMGYJ%2BHd4iX%2FGiZMRLPHwqUSHDuX8YDhfjjZtSlqx%2F%2FgZeemnRbpNpcMAK2yDr2oA1i8e4mmqR5trprvPeNceVAkig8qGYpwScKw6uklmhisPRtRQsbZ7m4jG%2FR%2BicVPSX4WaggltAXEwn6HHvQY6pgFPuhwvwFGrMvaJ7j1ks5qGRllJZABHuracQz0VPd1k5UerDkyYeCzWWjqFUOihTkyelq7chEzKRs7bmKxUgbsMf1FRkc8Yyr3PomrbqsIx4f89tPUMNHfBE704ld%2BTno56LT3ANMN7afFIhm6pjgnI7Lz9IOdfWU8xUZC5BLY3UnUqI0lluI3XLw7GWbW47yHrJVLIzKkLMabjCDNCGiACd27UbI7y&X-Amz-Signature=30c1a1a4a3a1c6f14601b2dcb16f36bcb9065c8d1028f0996287584c80961d54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFE4XBO2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID7C%2FVTsTZ68wU7A4Qq3kG%2FVOXRl3PQq%2F5jfM2w3MmaeAiBlDOlZagMTXMILtdHTzuoU0V8Gg5YJ0SMBDwwdcBPEoir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMM5tnw2UWM1Y%2FLtyhKtwDf81ONdGXR36LvPwaMj0tKUwLLnE8ah98aDCFs1OabbR2C1XtHeQIAQ3WZ%2FO8oaRd33sGG0lC9nV2ktsvHSIa6viWfHvtknc%2FK9IBV38CflF8xSY3l55SsgvIPj66Df2yOF0dv9ENwTH2PlaLQKkktWsQunIGdtpjVHTt%2FQlZB%2FyUcbyCFeTUq2BJ8tXNgu8rNmI6EJoGR%2BGA%2BQ1k1PQCSX7DBoD5tzcL94rsiYC99OGC2VjlZ%2BedSdJlTGXXQ%2FKQt%2Bidj50QgeWo85bQlkaJL2R8YtxjJVFsX8aI%2FoF4zvT4jDuftTjpLHY%2F93LZsA%2Bq4ukm8M5qTE6e2W3ebvNQ%2B6Y54VulPZTxouHAzzbkdss3vDWJKJG%2Fhy8%2F3fCobCSYfb8R1scauQMPEFmfR%2BA3nemn6r9PVxI5bpuaNeVPJme3SMFpzKHlSXz8%2FE71W8squ5OXlaqEzliDDU1KLn7HF%2Btd9lXpps16rmabx0ll8Fai6CONDuEaQxu05JHi%2BRO%2BQGyDMliKXnkmANwqt2fbIbrHOflQVZDbpM%2BV65cOQrGPS9Xb8N0C2rTGcKkqYvqVK9ZFmrMAtqZc3fDlXBNDQ82siHfRk1ih3fCMt0sBnjHHHFUe9ORJMyxqB9gw0qHHvQY6pgFEuptx%2ByMzq1mgoX6lzOI8VfvW2x6DdlnW48zqiXglJKYieXOuzsgphI414BVwAqWLhreB%2BU8pspzhetezGUK9S5MJKxn2uiwf9h8TdXUlxd5OJu1GDWrsz3z8xlR4uDPq4mrblmkgEwGrh9K3ipkC4vAo7TGr40CC8gaNjVSwJ6gB2PlU7h4TupFrqQFb%2FQPmivje0Xk4VLFZ%2B0wNrdb%2FebvYkmi%2B&X-Amz-Signature=58c37379164664e0aefc0451be092f90152d51cba54b830eb7323460f754dc13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURCRMAO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICvWuvfQgaX5SNzEamQgkKc%2BNka9CGuZdnuIEySIRlntAiEAqglKO5KMVAWfP4SoqfqgvKBFGDjjVrRwu4KG2vsIFqAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHC20BtKcQTza5jxoyrcA3NIp02EjdMIp5GcyQOzzjiMYbWAouq9sWxlqgl8h5QYdxVD%2FraRSdNsM%2FbYCh4%2Fu5%2BP2rREajM%2Fp6byFrtNMqLK9LL81B%2BePdvpmT%2BZRDNhaZPaQt3qyiAG4iVlBx5i0%2BmN7xlxUPn0fYzz4fX9w%2FyBcdp8%2F25iTmlW28CHrN2%2BCmDqExFNG%2FcJpwdDTxF0ZmibYrmwFPstVMhNN9RsmBQC%2FwvyTT5us%2FPdESloMrZR1tCA5HjryJf5e7tcTJFhjgUvHHPGES0HE5EaHdedvuHrY1J8byBcUbEI5mXTtf5h0n9JSN4OrW95scl3QZkVj0G0uO38M1vFWBHeJbfYB3TPwNpuK%2BMu%2B6YlNwpbuIZlW0Ms6ZKxLnQVVruNLtfLBf1fEOB5jcbdnzMRCdqVRzd2oQphxIhNofQvPd0FuwPZMwKl4zaZRMy%2BAKSsJ7KBoIm9M8Co%2FQy2P5nNE6WshFL%2By3KWfRx%2Bchejh4hR3x1AZEM3gYGFL1iGMuEfATvhTs9JDWk0eI2Pc4JhABWG%2FfeikChqwsmHP4rrDrNZnjHVK86MuuqZeWBHXyNJNAXwe%2BcLZX%2FRKIwQSbx0Hd7VnVZZOATMzihbTYfTKvTcQJ%2Blm9dme6hgKHZjmYMDMKabx70GOqUBb%2FXjB6eguejVUSIC7GvJeg%2FTm1MRbQ3%2FO5VE2YR0OOFd%2B8Q1hvMqI4gZWJuve2shKI7EEFstSEgyQGR%2FCbAk7NICkgyO8SGifhtIjn0QFO%2BW%2B9Ptz0mGea2hREaM7xSv0XSQ4pU2xGDjh%2Fr7kwGmFtonmsbMPV281aYPclF4N%2BW3SpYFCbOu1wxrq2mVXZ28r6Z1ockJnNF5DhXlCq1o6owcShCF&X-Amz-Signature=024f0df4fc6ae6a2bcbb82a9db109c0fc43f589132dd0fc6341e3fc8508996a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
