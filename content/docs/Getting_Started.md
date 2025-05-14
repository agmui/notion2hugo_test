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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FU4GQ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCCuqi4WhlPQKK%2FVnFWe9fNCd5OpGFwQTrjBo7g9cGQYwIgemxP1BdONcPzws16mzVS37p2TU8GkHanI%2BUubYIOxDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK4zAaybm1IwpbF9rircA4FBmJ5MIf8LjA1w269Q7IUKulecwLYvWP0AxjD116GUaq9J08X4OSuD03n5EUktJhx50d5kcab3KnSh1sJuQ55acKVxduIIUSesFLblFEnvmMBJTwxOOSAV4JqTZTuisUBKtt7OQUxeqOeD7HlajBnwiMsSlT8hKCgpzhqTnP2luH8yvKlQqSuCWQpukQuIQvJNFKTGbot%2Bv9oU1TjhUZAQwbNZad4W3lTCz9U08XgXtxzOOwimCzm5xUXhrmkoLTuZgPmbK9Z905KzTJrqPFw1fJZXzoWzIcvQ0Ryd1SLL7q5yE2COH6IwwjCQZym%2BddVCGihhQkhyKO9pqTHuCVrJbg1G4%2B19oxOCi5XUKSAl%2FIWMd5AFthHQVJaFPpw%2BUw4bsDbYWSsNGToqpYRFoln4nxUZXaHb4m245Hf7hYr9CQpITvG8C%2F%2B2xwG6%2BWhRWlLpgIfqnikeWypy2JJn%2Fq8IqFMvsHZR2m3W1H9J64n7R0hXgSsAyM6RwvSyuWbkQB9wrQlERjWFUdude7ts2ZWnRZ0qFXRdpXmjfsH3%2BgdSYjEClQ0kBd9vkjuiBiBq7tE3D1B9NPAYltJZZsyEqKaIcisr0PvVPtDQuOw3rRDNQErDJDRF46CjDYAbMPiFksEGOqUBp6gpwS7mSbVi6q0qQSYWLaDbUpXmcpPH6kYL%2BxobuzPqln4Yuh8hgAem25qgpZ27voSeru2xpmtnhT3mmYZCUsEPfFr7Z7ZNeQGJsovT3YeWbpKJDuMvP0na4zhsIMGS2NDktNCoJA6viOx8TkchAdf%2BOrts8Hn5f8OXb9amC%2Fw6B5sBaHKqE5uznSONPl%2BvvBVK0jPYM0tlRWWjM%2Fl8wu5PGKbV&X-Amz-Signature=68b4e7fd5c64027205aba4a49936551f00d34a53140ea45ad341b9f55c09fb1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FU4GQ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCCuqi4WhlPQKK%2FVnFWe9fNCd5OpGFwQTrjBo7g9cGQYwIgemxP1BdONcPzws16mzVS37p2TU8GkHanI%2BUubYIOxDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK4zAaybm1IwpbF9rircA4FBmJ5MIf8LjA1w269Q7IUKulecwLYvWP0AxjD116GUaq9J08X4OSuD03n5EUktJhx50d5kcab3KnSh1sJuQ55acKVxduIIUSesFLblFEnvmMBJTwxOOSAV4JqTZTuisUBKtt7OQUxeqOeD7HlajBnwiMsSlT8hKCgpzhqTnP2luH8yvKlQqSuCWQpukQuIQvJNFKTGbot%2Bv9oU1TjhUZAQwbNZad4W3lTCz9U08XgXtxzOOwimCzm5xUXhrmkoLTuZgPmbK9Z905KzTJrqPFw1fJZXzoWzIcvQ0Ryd1SLL7q5yE2COH6IwwjCQZym%2BddVCGihhQkhyKO9pqTHuCVrJbg1G4%2B19oxOCi5XUKSAl%2FIWMd5AFthHQVJaFPpw%2BUw4bsDbYWSsNGToqpYRFoln4nxUZXaHb4m245Hf7hYr9CQpITvG8C%2F%2B2xwG6%2BWhRWlLpgIfqnikeWypy2JJn%2Fq8IqFMvsHZR2m3W1H9J64n7R0hXgSsAyM6RwvSyuWbkQB9wrQlERjWFUdude7ts2ZWnRZ0qFXRdpXmjfsH3%2BgdSYjEClQ0kBd9vkjuiBiBq7tE3D1B9NPAYltJZZsyEqKaIcisr0PvVPtDQuOw3rRDNQErDJDRF46CjDYAbMPiFksEGOqUBp6gpwS7mSbVi6q0qQSYWLaDbUpXmcpPH6kYL%2BxobuzPqln4Yuh8hgAem25qgpZ27voSeru2xpmtnhT3mmYZCUsEPfFr7Z7ZNeQGJsovT3YeWbpKJDuMvP0na4zhsIMGS2NDktNCoJA6viOx8TkchAdf%2BOrts8Hn5f8OXb9amC%2Fw6B5sBaHKqE5uznSONPl%2BvvBVK0jPYM0tlRWWjM%2Fl8wu5PGKbV&X-Amz-Signature=b52ec84b9ad2b263ef51d316d53a697e2fdb3d15f69fda05542cbb5ebd87127a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FU4GQ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCCuqi4WhlPQKK%2FVnFWe9fNCd5OpGFwQTrjBo7g9cGQYwIgemxP1BdONcPzws16mzVS37p2TU8GkHanI%2BUubYIOxDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK4zAaybm1IwpbF9rircA4FBmJ5MIf8LjA1w269Q7IUKulecwLYvWP0AxjD116GUaq9J08X4OSuD03n5EUktJhx50d5kcab3KnSh1sJuQ55acKVxduIIUSesFLblFEnvmMBJTwxOOSAV4JqTZTuisUBKtt7OQUxeqOeD7HlajBnwiMsSlT8hKCgpzhqTnP2luH8yvKlQqSuCWQpukQuIQvJNFKTGbot%2Bv9oU1TjhUZAQwbNZad4W3lTCz9U08XgXtxzOOwimCzm5xUXhrmkoLTuZgPmbK9Z905KzTJrqPFw1fJZXzoWzIcvQ0Ryd1SLL7q5yE2COH6IwwjCQZym%2BddVCGihhQkhyKO9pqTHuCVrJbg1G4%2B19oxOCi5XUKSAl%2FIWMd5AFthHQVJaFPpw%2BUw4bsDbYWSsNGToqpYRFoln4nxUZXaHb4m245Hf7hYr9CQpITvG8C%2F%2B2xwG6%2BWhRWlLpgIfqnikeWypy2JJn%2Fq8IqFMvsHZR2m3W1H9J64n7R0hXgSsAyM6RwvSyuWbkQB9wrQlERjWFUdude7ts2ZWnRZ0qFXRdpXmjfsH3%2BgdSYjEClQ0kBd9vkjuiBiBq7tE3D1B9NPAYltJZZsyEqKaIcisr0PvVPtDQuOw3rRDNQErDJDRF46CjDYAbMPiFksEGOqUBp6gpwS7mSbVi6q0qQSYWLaDbUpXmcpPH6kYL%2BxobuzPqln4Yuh8hgAem25qgpZ27voSeru2xpmtnhT3mmYZCUsEPfFr7Z7ZNeQGJsovT3YeWbpKJDuMvP0na4zhsIMGS2NDktNCoJA6viOx8TkchAdf%2BOrts8Hn5f8OXb9amC%2Fw6B5sBaHKqE5uznSONPl%2BvvBVK0jPYM0tlRWWjM%2Fl8wu5PGKbV&X-Amz-Signature=0c3d77737cb1e24884d351396bafe99b1aedc7d19e9504440be3dbdffde2c314&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTR5MGGO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGrHxPiI1LSkeOAO2abZLc9Fh1eRjXSFp4RXI8cK%2FvBtAiEA5KcprW7sARK9saueAmF%2F%2B%2Fiag%2FL0c1qtyqsMY9XN4vUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDApJuylqnPkvkr75nCrcA6p16QTA2%2BYwaTgVlGrTy7914RMT1s29OTYd2bsg2s%2FzeBHZIVrxvZ%2FYwvY8py3WzyULoqhKQGD%2BZlElrPvq6EoJyZ9dsHyXWOk7OkdQJKtrJLEdVPildyrAyipQHNyQNYrZ9lvg1WqIxtVR%2FVnIaHUFM%2BawUICPUgyBMLqDx9rGWgNhPu84YMtye%2BsYAoGcku9DuoRVSg925VmB18a4j2fZKvY6FC03XAEuo03mzG73h8oq80FwmgwUKH9ek8MmkAF1jL83waLpdP41zBcV4USHORq4DovDx%2B4nO6wyMiux1%2FeqnP2ZBwBzc3088ieDHaIquI%2BZoWE%2FHzC6dms8ljM48bgVvCuCRPoFltLHSCrNGHCVZGfLEeAK%2BCBDS4RIp57J7Dvx64ecr2ZExLeMLPLXMt9wXiiq5O3qDGs5c7z4Mnr%2BznVPm7pVmkG%2FTiF1nYBDYAiiAcJWaiE8RmmnPPlMuwWwOdI3fyoEHdUTwA2WezQZ5X8f4QwvsHy8BDIcJRIPH%2Fu%2BkI5UzRnLc75B5o0CiG7A38FxYUIhzfxlNK01Bp%2FiT%2BC%2FrqJ48AQxrNBX66y1YUs13vwRS4extkiEcQsqVY1AI1g2YslepRaxphyltSjvZ0iBP%2F3QcTshMNiGksEGOqUB%2F9x5IWjS8XLcZH5BnStuBuCYOGDOoTzkZpt97QPysK907G2seZYPQWsq3MOclQDCZp9PQoW5vhAsgTrQkaIOuxoa%2Fyw0TNIornTNMrm7B3BZUJYEdr0uWl9xlyXh97%2FuVHImOB7NSmoqhHMOzdCk0sUOEzknHVPhHebazlWhf27EZvoFezi4uLC1XdHuIZdSCJ2Q5BroAt0kwRw8leOgokaE4PWk&X-Amz-Signature=d1139cd1667fa8764d34a8d3422dafd5b6b863f8c453fa74e5f6a161cedb7a87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIRXPD2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHzBhRtsfEzqfiynGr1BJ9zE0%2FehORuH8PfLFuzk64%2BcAiBLLi9PSZMXJqs6%2B9LMNHS46Vk5sf17nh%2B21T3PHW1rRCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMfNwSasLRPA5fKGMkKtwDxC0JE3q4Xn3mQQAc1YctI%2FEnG5MRr6fy%2B6l%2FVVCwVDRwegZZ4%2BWFGEuUSOJ%2BEGef5aOqCK%2BtlaSimqxS5Esp9cERn45YnEQ3%2F6Ibl%2B7ivRIRk%2FogHAaksg9niet1E%2BenDIjQFy%2FDHajPNk8oua2E6zRw%2BL45RjYI58TNMXoo6RPywHNMGT%2BnQCuEmIRfv7ZrcbzJMLj2xupe0d66CRe961u6pwZB9VR67iwUZoZcnuRlBe7ym%2Fw%2FOGIsf4OlavHlukaRGau8Fjbt55gezYGQic2xzFKbYgw4UKxD5iL4t1Ss89daA09ogHLpszxZ2nbEbYAG%2F1RvXBkTFsvRGymgWqNJ5TzSfDru%2BBLPaVsOz42pcC4ZiVX9Ebq4RJJm1Mbu4Sj8G2ulg%2FEdlkN9n38mUVa2MgKl0DVO43BC0VyJc6iZ7rkg51UZMzQnOHdqD1YfduX9PVyptrr4HnxX5WO02hIxCqdHAulwhwvC4ZFBpn759NoHpzFhThNGNobFNnENL4yeHMBeLEvIAw2rzzFZUJAiMz2rFZV0ha8PXva1r1Rog%2FuehtFY2dwlSl%2FsKZJfYF2IQe1MWV3NlzZT7S1XR2B3joCfThX%2BycKwv3d3E8HUhReR%2Bf4bpu3KvB8w3YaSwQY6pgH4uImBzKx2QlL1EMAC8CJmlpVucA2FnzPGyrVYRKA0TjyJpXlwh6BZvjBP%2Ba%2BoBc%2B8VLq%2BW2U%2FdnknRMX6ACfxjofFh6zsd6BnPSfGu5EnmiKMEXbvylhWkxdrcGXsHW8oQTgp18L03FjRRbJNF%2FZfjFzoSG7LUNgCs8sQSgmXS9kI2yJFOYTIAly%2BytPHVgoydb1ePpoceLm8ieDRuMHeDy532daH&X-Amz-Signature=c6a031fc4daf1857ec67aaadfeb649a8fad7afb4ab3506e42287ed62347cb335&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FU4GQ52%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCCuqi4WhlPQKK%2FVnFWe9fNCd5OpGFwQTrjBo7g9cGQYwIgemxP1BdONcPzws16mzVS37p2TU8GkHanI%2BUubYIOxDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK4zAaybm1IwpbF9rircA4FBmJ5MIf8LjA1w269Q7IUKulecwLYvWP0AxjD116GUaq9J08X4OSuD03n5EUktJhx50d5kcab3KnSh1sJuQ55acKVxduIIUSesFLblFEnvmMBJTwxOOSAV4JqTZTuisUBKtt7OQUxeqOeD7HlajBnwiMsSlT8hKCgpzhqTnP2luH8yvKlQqSuCWQpukQuIQvJNFKTGbot%2Bv9oU1TjhUZAQwbNZad4W3lTCz9U08XgXtxzOOwimCzm5xUXhrmkoLTuZgPmbK9Z905KzTJrqPFw1fJZXzoWzIcvQ0Ryd1SLL7q5yE2COH6IwwjCQZym%2BddVCGihhQkhyKO9pqTHuCVrJbg1G4%2B19oxOCi5XUKSAl%2FIWMd5AFthHQVJaFPpw%2BUw4bsDbYWSsNGToqpYRFoln4nxUZXaHb4m245Hf7hYr9CQpITvG8C%2F%2B2xwG6%2BWhRWlLpgIfqnikeWypy2JJn%2Fq8IqFMvsHZR2m3W1H9J64n7R0hXgSsAyM6RwvSyuWbkQB9wrQlERjWFUdude7ts2ZWnRZ0qFXRdpXmjfsH3%2BgdSYjEClQ0kBd9vkjuiBiBq7tE3D1B9NPAYltJZZsyEqKaIcisr0PvVPtDQuOw3rRDNQErDJDRF46CjDYAbMPiFksEGOqUBp6gpwS7mSbVi6q0qQSYWLaDbUpXmcpPH6kYL%2BxobuzPqln4Yuh8hgAem25qgpZ27voSeru2xpmtnhT3mmYZCUsEPfFr7Z7ZNeQGJsovT3YeWbpKJDuMvP0na4zhsIMGS2NDktNCoJA6viOx8TkchAdf%2BOrts8Hn5f8OXb9amC%2Fw6B5sBaHKqE5uznSONPl%2BvvBVK0jPYM0tlRWWjM%2Fl8wu5PGKbV&X-Amz-Signature=07a0d241668f85b79118e22f4713d4180f9baca13664e5a9ff3173ce8c440307&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
