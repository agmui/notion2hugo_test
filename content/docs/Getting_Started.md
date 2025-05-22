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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLXT5UB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDJBwhGLX1LagswmsK7zNlZ3%2Bour6AJjrp%2FXLjCetKPuAiEAyf2NNBbwFq7vKUt%2FAs8DxmbFAEWtxRAa36v4TnREWiUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn6BgD5YXiiGKDpfCrcA2fXsDjNgrMHWX9I%2F8SUj66WHNf5n4J2V8RCTq4M1SHXy8dHpDkzcCXtWQRbEDqKP5wuGrHb9A1eab43mfEvorJMloQI4kEwLe%2BGoYWRnzubI%2BXZHdkAVomm4pEbRsnQlWB0Xa6xYq8ilXgBVmlQprqrV6tM%2BQ5AzBj4GE27Txz2Kd%2F%2FBMqPkb3OT8j5O6vk1YqNPdmew99RpfO%2B5r87P2gyNBcs9r%2B2mq4rz4phJTH3H8VHag3PwZuLpINK3QC6ItshdQORbHeAQfEDPTCXI%2FXjqXkGZyIlZRi4K4cp7vhawO%2FuElcjQxaHfTtoCfH7NyroplKRXHpgPqKMWDuCfhsh0ZsDLylEJ04Snhpa%2FXeU7W3uM9kZBNW59JraeAqbY7xjpCrYSwxA6Vq5L5uD6ObR7mcAjSqZTvtZU0uX8TfcKe3y2YhTl8W4sO9CrPkC5qWRH62Tw0lssRuuGJKKFT4k5e2mdlIVfDVZOm%2FIvozXehTPbpKlb5FW%2FeQhvDOInMQK49b0XOQ8NL2pHAqYnBPJLch3Z%2BZ4IPZt19JQbzONpkX9%2Bc%2Fk6iuSwJAnCf3iDHs5FxKjWWAOMpIEt920oslIPwjQ5NjUm2%2FeP2yALtUnxYfTtDAxlNR7hDS%2BMJC8ucEGOqUBg%2BEaUGKDLS%2FzdGIo%2FBCXM%2B3nMl0sx5s1kUGwI8sKttI5TUwsYYRR4OWmv5e0ZDpY6hEwcrJhG0Ss2ZFVNwdz0FEc2Ixar2ce56hOg6GwegbjAJ4K7weEhZRiJbvN8xcUEcqv7qKfI%2FzZIssl2fE5RvErvd9YW8vtzpWYy%2FCXfXDkX0IGm3dm2ShguqW6UW1CH2gSHCVg6ZbYTKfd72zZHqJyr0UR&X-Amz-Signature=65407ca7ecdc0a7158459b66b56b3068af3efbee32510aba18885d5e1d4d9647&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLXT5UB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDJBwhGLX1LagswmsK7zNlZ3%2Bour6AJjrp%2FXLjCetKPuAiEAyf2NNBbwFq7vKUt%2FAs8DxmbFAEWtxRAa36v4TnREWiUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn6BgD5YXiiGKDpfCrcA2fXsDjNgrMHWX9I%2F8SUj66WHNf5n4J2V8RCTq4M1SHXy8dHpDkzcCXtWQRbEDqKP5wuGrHb9A1eab43mfEvorJMloQI4kEwLe%2BGoYWRnzubI%2BXZHdkAVomm4pEbRsnQlWB0Xa6xYq8ilXgBVmlQprqrV6tM%2BQ5AzBj4GE27Txz2Kd%2F%2FBMqPkb3OT8j5O6vk1YqNPdmew99RpfO%2B5r87P2gyNBcs9r%2B2mq4rz4phJTH3H8VHag3PwZuLpINK3QC6ItshdQORbHeAQfEDPTCXI%2FXjqXkGZyIlZRi4K4cp7vhawO%2FuElcjQxaHfTtoCfH7NyroplKRXHpgPqKMWDuCfhsh0ZsDLylEJ04Snhpa%2FXeU7W3uM9kZBNW59JraeAqbY7xjpCrYSwxA6Vq5L5uD6ObR7mcAjSqZTvtZU0uX8TfcKe3y2YhTl8W4sO9CrPkC5qWRH62Tw0lssRuuGJKKFT4k5e2mdlIVfDVZOm%2FIvozXehTPbpKlb5FW%2FeQhvDOInMQK49b0XOQ8NL2pHAqYnBPJLch3Z%2BZ4IPZt19JQbzONpkX9%2Bc%2Fk6iuSwJAnCf3iDHs5FxKjWWAOMpIEt920oslIPwjQ5NjUm2%2FeP2yALtUnxYfTtDAxlNR7hDS%2BMJC8ucEGOqUBg%2BEaUGKDLS%2FzdGIo%2FBCXM%2B3nMl0sx5s1kUGwI8sKttI5TUwsYYRR4OWmv5e0ZDpY6hEwcrJhG0Ss2ZFVNwdz0FEc2Ixar2ce56hOg6GwegbjAJ4K7weEhZRiJbvN8xcUEcqv7qKfI%2FzZIssl2fE5RvErvd9YW8vtzpWYy%2FCXfXDkX0IGm3dm2ShguqW6UW1CH2gSHCVg6ZbYTKfd72zZHqJyr0UR&X-Amz-Signature=57a5e9824097ece675a6a61a99612a4d212f85a4070430ab3405df85124a11a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLXT5UB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDJBwhGLX1LagswmsK7zNlZ3%2Bour6AJjrp%2FXLjCetKPuAiEAyf2NNBbwFq7vKUt%2FAs8DxmbFAEWtxRAa36v4TnREWiUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn6BgD5YXiiGKDpfCrcA2fXsDjNgrMHWX9I%2F8SUj66WHNf5n4J2V8RCTq4M1SHXy8dHpDkzcCXtWQRbEDqKP5wuGrHb9A1eab43mfEvorJMloQI4kEwLe%2BGoYWRnzubI%2BXZHdkAVomm4pEbRsnQlWB0Xa6xYq8ilXgBVmlQprqrV6tM%2BQ5AzBj4GE27Txz2Kd%2F%2FBMqPkb3OT8j5O6vk1YqNPdmew99RpfO%2B5r87P2gyNBcs9r%2B2mq4rz4phJTH3H8VHag3PwZuLpINK3QC6ItshdQORbHeAQfEDPTCXI%2FXjqXkGZyIlZRi4K4cp7vhawO%2FuElcjQxaHfTtoCfH7NyroplKRXHpgPqKMWDuCfhsh0ZsDLylEJ04Snhpa%2FXeU7W3uM9kZBNW59JraeAqbY7xjpCrYSwxA6Vq5L5uD6ObR7mcAjSqZTvtZU0uX8TfcKe3y2YhTl8W4sO9CrPkC5qWRH62Tw0lssRuuGJKKFT4k5e2mdlIVfDVZOm%2FIvozXehTPbpKlb5FW%2FeQhvDOInMQK49b0XOQ8NL2pHAqYnBPJLch3Z%2BZ4IPZt19JQbzONpkX9%2Bc%2Fk6iuSwJAnCf3iDHs5FxKjWWAOMpIEt920oslIPwjQ5NjUm2%2FeP2yALtUnxYfTtDAxlNR7hDS%2BMJC8ucEGOqUBg%2BEaUGKDLS%2FzdGIo%2FBCXM%2B3nMl0sx5s1kUGwI8sKttI5TUwsYYRR4OWmv5e0ZDpY6hEwcrJhG0Ss2ZFVNwdz0FEc2Ixar2ce56hOg6GwegbjAJ4K7weEhZRiJbvN8xcUEcqv7qKfI%2FzZIssl2fE5RvErvd9YW8vtzpWYy%2FCXfXDkX0IGm3dm2ShguqW6UW1CH2gSHCVg6ZbYTKfd72zZHqJyr0UR&X-Amz-Signature=0234cae86f1cf0fe6cea25c5705b04fea3d9c410f25e62535376ca4f43d7eeba&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMWPG6B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCzn5yTX2dZ8VRLb4QdZDyQCIsVZp8eGTaGYJI945rdAQIgV%2FrPqMavl8yPArePI97eq8ZvXtokjfxm0QDs%2B2cOQ4cqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxuhd%2FtkBYxiVfckircAzw517My9YKw9JJeqcEImO5DvbW4vOXNDXZC829S95kU2%2BMWov%2Bp7U3te4UtXkDVUWLxvrhsB6ilXHN1f2kMhHxiaP7jqwoBn95GpdWhjvJlyU03mzPMUrrtilNtDIZP5q3cic1Nh1NwHVs3djFezZeDpc90C9hYfwec7uH%2FMBoRcq7yPSHdMF6t33sfvU3bjzg%2FfNEPvgaa7LBuwdpUoSOt%2FlNZqnuekzGwOCFZQ1xl4%2Bt%2FzBh0nmYXsoRAbwaewMoo1Fo%2BffpjzmTWAA6CT8rUbAHE7d5REkW06dRF%2FLlXklQOwCBYCFb%2BkSoPuiJj2%2F4z0tuIsdwzI9InM6%2BDYd%2Bn6DuV1UzX7kNPHOvIqiOxKNH2g%2FbPBx1s4QitjmD05%2Bbx06YFzDqXjHdSSDQldmHBg27yaLbanzF28J2lZelsNExeVGyrGBIK41iZbxvzPM2%2Fa35WBCrOpgUJIztHbLL%2BwYXcDQgds2Tz%2BuqVAbRzHL62xOfusxyix%2BEak4pc1F01Zd%2BPh8stJSd7OnCISuAOX7QHZ3lYnHzc16bs7LCVymdAxpR1cWmedkM8bMW0wtbRsX45TuQoKHgpqwfrLoipKlyMD8Qpx3OB%2Fk51JQlcL3v8Cl6A5JNCyR25MNG7ucEGOqUBhDBVj7z6sevAzcBhJV8wqqWntrH9xP2CLJTDmeYkUy5Ee8%2F6UklgMd3R2HL2Kgw2b3qXtG0f6MFSh2goVGu851M%2BSbmNTWCGllQOSAjqm9UftjZExAluMXo6Gm5BS6iDowEmJ0bNmkT%2FGPBjnnnQv%2BPpwVogfQ2HXzt3v01%2BQX7RuOgIsMeDeoAGwRmXcfJNJWVJqnKTEEOLPAM4YslHRdgGOf4b&X-Amz-Signature=a2402bbe9f5dc10d9ec0780a46afb18cba53a69512fa61f60e45eef344684f13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJXCVU2Y%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDK7qcNMKoG0EljxC8lAtfV5oR2rJ0ttvNr2B5Am1Gs8wIhAJhYcL1iur2ThcipCgi0RGCkkPRJMRJ9dQGuJxA9rqgFKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYBbABdNgNMGZtDGoq3AMJyBUVEjK1CJGR5f3VBlJhlhEOU38YPcsUWcZeExVZMxqkv1XVddrjNey0pM2Hj%2FuvtVZHkV%2Bl%2F8ur7tEGgj2e1unVAPcvkEQkRM0lr9CFaz%2Bogs6SXaf4NtUHIyF6yHWkitBRBp5yl8%2Fi94UYtEeRgozbOKC2BQSKnUf0t0uQfqN8gInSzQRj6sAMBPEbTMan9vP60MglzISCaPt%2FkQ5UCPZRlTAE3NRphCmgoD2WGRxl5Y6QSvOSD6yeuaarVBOxbmx403a4kQc78JLbTUQxFCgiEUyRBNpbKuML%2FPktI8uOLsjVDP1FVUxTmYrOmInlI1vfCOW5CqpPBNo%2F%2BFhlznDsPCYH3HZc44qMShBAIt%2BrMO426D9CWc2gMR2Z8Cd4pdxH%2F8DOq7eA2fL8B3%2BDU%2FuOrPwzJrUmw5wAmtqzSVPhpyZCYWC9y8bDWEZDMefcoXDxNTz2FI4fN4xDdMP2vT0hUH98JF2ZvoVLGztm0xmThrGnu8r4lWj6X0i9iyHBpjbXH5%2BH%2BSlPCsYF%2Bq8wzzVi7hHlL3PUGcfz9HDXp5TtomZ0qjRAT7zIrZsWKT7HGR9UV%2FTSfut2SX8%2FHBTlxplh2hGZ0JDmpAtZ7ccGZcxgdl2ZAJ1veH1u7DDDu7nBBjqkAXhFiwNejMhs6M%2F3FB8s77x1x%2FHpA5ak49FRuXZTIy4OpAPjkfuBpninSwWAcnQmjFFfRGoc6SHim8WEqbdaaQTiJ4wVEmzZxowkTOxgsnT9in1t0l0RvYfkyH2f0e1Ype0axuQUSNb91svU0EJKZHwtpgP0zIAQUhhr9AJRFcIYyPJNFA4%2BpfHXegt67MkSyiHNiMffwd5IUj7boM9dOVd2AdMe&X-Amz-Signature=2572714e5c6d6b10d033e89c83ecb3d65d684d27f38880f870b006b27c23e1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLXT5UB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDJBwhGLX1LagswmsK7zNlZ3%2Bour6AJjrp%2FXLjCetKPuAiEAyf2NNBbwFq7vKUt%2FAs8DxmbFAEWtxRAa36v4TnREWiUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn6BgD5YXiiGKDpfCrcA2fXsDjNgrMHWX9I%2F8SUj66WHNf5n4J2V8RCTq4M1SHXy8dHpDkzcCXtWQRbEDqKP5wuGrHb9A1eab43mfEvorJMloQI4kEwLe%2BGoYWRnzubI%2BXZHdkAVomm4pEbRsnQlWB0Xa6xYq8ilXgBVmlQprqrV6tM%2BQ5AzBj4GE27Txz2Kd%2F%2FBMqPkb3OT8j5O6vk1YqNPdmew99RpfO%2B5r87P2gyNBcs9r%2B2mq4rz4phJTH3H8VHag3PwZuLpINK3QC6ItshdQORbHeAQfEDPTCXI%2FXjqXkGZyIlZRi4K4cp7vhawO%2FuElcjQxaHfTtoCfH7NyroplKRXHpgPqKMWDuCfhsh0ZsDLylEJ04Snhpa%2FXeU7W3uM9kZBNW59JraeAqbY7xjpCrYSwxA6Vq5L5uD6ObR7mcAjSqZTvtZU0uX8TfcKe3y2YhTl8W4sO9CrPkC5qWRH62Tw0lssRuuGJKKFT4k5e2mdlIVfDVZOm%2FIvozXehTPbpKlb5FW%2FeQhvDOInMQK49b0XOQ8NL2pHAqYnBPJLch3Z%2BZ4IPZt19JQbzONpkX9%2Bc%2Fk6iuSwJAnCf3iDHs5FxKjWWAOMpIEt920oslIPwjQ5NjUm2%2FeP2yALtUnxYfTtDAxlNR7hDS%2BMJC8ucEGOqUBg%2BEaUGKDLS%2FzdGIo%2FBCXM%2B3nMl0sx5s1kUGwI8sKttI5TUwsYYRR4OWmv5e0ZDpY6hEwcrJhG0Ss2ZFVNwdz0FEc2Ixar2ce56hOg6GwegbjAJ4K7weEhZRiJbvN8xcUEcqv7qKfI%2FzZIssl2fE5RvErvd9YW8vtzpWYy%2FCXfXDkX0IGm3dm2ShguqW6UW1CH2gSHCVg6ZbYTKfd72zZHqJyr0UR&X-Amz-Signature=4905f7e49441cc0fc34abd06aa6dd1d1320a972eb4650a5cf1862f05140c6bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
