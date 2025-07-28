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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCHRSFG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG80dKzoCdbVzDYuIhrO3hdf%2Bl3lbcK%2FfPuJVZ7BXX9JAiAHHmmWV9G%2BJjEMWgCCtAqQQ9caEjva4XL7QZDa54MQqiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BeHGwoNxsSHMUhE0KtwD%2FpQDG5ka7TZYsmS9t7FjRqAgFyaLxbIR0WgYxKwasSNzKVDPm%2FFLZlcbSlalxUiOlFIF6qYcRPQ6GMOsX80p7T6QiWid5uT8Ie89MO1EroYeUFb8utGjG1Ju74tud4%2Bt%2BR%2BbFFsaBFN0%2FAh1TaBaieABNfBkH0GFEL0PBt%2BwKdms%2FfBxEreNFgAUFCEt9gOBitD9ZfG14F5Ii7BZB7%2Bi4611Nf7JFxXhbIpOuYePjqHUxXrF4VO9mTJhdrWPkya5%2BCYisLfPcCITbeIOlOj490KQQ4vIXnK0BGDaZQJuGBK1Yf2lZ7%2BLPSl9JqII4KNfmxTBlB29viNvCQW5dLRA4%2BmLnJwif%2B3iLyaY9v94sUs5Cj9xtUC%2FoZB%2FAnx2F%2Bm3UkksFcyiJkXHMgEPaqhGxUEcJZPP38CPuTSHtqcN5BrZLWLqs1JXUGkx%2FyT%2F9lXu1jQR50M02ZXduxKBhUHNIg9iPgeaqFSPwDVZm8HjMbAZ%2FlFnmO0tVO3JJVKI07ofHGJ8hFV1EUDKR1j8l80lY2ML2A3bbjhpFtT1%2F5tjOJ%2FKT1m6mP%2F%2BSeqqkJ3pKNtBmFi4%2BPmDxf1k88ztQkwBSJWja0Cfx2KeK3%2Fc%2BWS03NXwD%2BjzN34u89xQbjownpObxAY6pgHCxKnNl6L1NRNXo8h5WROxyTCFiO2Ilejy91%2BAYCUm3G74dgNoWk4fZDe2OlTNcchnQivDKOg6NTilrn%2BWS%2BEhcpO9tGQOnDMRZ8agrhRhWiHjjnwmrW%2FrIb5UebY5mtTEAy3z89UkUcCx7%2F0DpuwGJRwaN%2Fqxn4Q20jqoVPzZ%2FJ6O0HIh1PgOgGYRRsJRVFe%2BQ93oF6EPIFFMPCrPgglzhs5clUhu&X-Amz-Signature=33d9b7a55da5d698354f386941ae43b9562126d7f59a123e4cd843902327a8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCHRSFG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG80dKzoCdbVzDYuIhrO3hdf%2Bl3lbcK%2FfPuJVZ7BXX9JAiAHHmmWV9G%2BJjEMWgCCtAqQQ9caEjva4XL7QZDa54MQqiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BeHGwoNxsSHMUhE0KtwD%2FpQDG5ka7TZYsmS9t7FjRqAgFyaLxbIR0WgYxKwasSNzKVDPm%2FFLZlcbSlalxUiOlFIF6qYcRPQ6GMOsX80p7T6QiWid5uT8Ie89MO1EroYeUFb8utGjG1Ju74tud4%2Bt%2BR%2BbFFsaBFN0%2FAh1TaBaieABNfBkH0GFEL0PBt%2BwKdms%2FfBxEreNFgAUFCEt9gOBitD9ZfG14F5Ii7BZB7%2Bi4611Nf7JFxXhbIpOuYePjqHUxXrF4VO9mTJhdrWPkya5%2BCYisLfPcCITbeIOlOj490KQQ4vIXnK0BGDaZQJuGBK1Yf2lZ7%2BLPSl9JqII4KNfmxTBlB29viNvCQW5dLRA4%2BmLnJwif%2B3iLyaY9v94sUs5Cj9xtUC%2FoZB%2FAnx2F%2Bm3UkksFcyiJkXHMgEPaqhGxUEcJZPP38CPuTSHtqcN5BrZLWLqs1JXUGkx%2FyT%2F9lXu1jQR50M02ZXduxKBhUHNIg9iPgeaqFSPwDVZm8HjMbAZ%2FlFnmO0tVO3JJVKI07ofHGJ8hFV1EUDKR1j8l80lY2ML2A3bbjhpFtT1%2F5tjOJ%2FKT1m6mP%2F%2BSeqqkJ3pKNtBmFi4%2BPmDxf1k88ztQkwBSJWja0Cfx2KeK3%2Fc%2BWS03NXwD%2BjzN34u89xQbjownpObxAY6pgHCxKnNl6L1NRNXo8h5WROxyTCFiO2Ilejy91%2BAYCUm3G74dgNoWk4fZDe2OlTNcchnQivDKOg6NTilrn%2BWS%2BEhcpO9tGQOnDMRZ8agrhRhWiHjjnwmrW%2FrIb5UebY5mtTEAy3z89UkUcCx7%2F0DpuwGJRwaN%2Fqxn4Q20jqoVPzZ%2FJ6O0HIh1PgOgGYRRsJRVFe%2BQ93oF6EPIFFMPCrPgglzhs5clUhu&X-Amz-Signature=57b7bdf59307d6ae17b70eab44938c8ae4992cf4e5bd8d56b759aed863af0002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCHRSFG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG80dKzoCdbVzDYuIhrO3hdf%2Bl3lbcK%2FfPuJVZ7BXX9JAiAHHmmWV9G%2BJjEMWgCCtAqQQ9caEjva4XL7QZDa54MQqiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BeHGwoNxsSHMUhE0KtwD%2FpQDG5ka7TZYsmS9t7FjRqAgFyaLxbIR0WgYxKwasSNzKVDPm%2FFLZlcbSlalxUiOlFIF6qYcRPQ6GMOsX80p7T6QiWid5uT8Ie89MO1EroYeUFb8utGjG1Ju74tud4%2Bt%2BR%2BbFFsaBFN0%2FAh1TaBaieABNfBkH0GFEL0PBt%2BwKdms%2FfBxEreNFgAUFCEt9gOBitD9ZfG14F5Ii7BZB7%2Bi4611Nf7JFxXhbIpOuYePjqHUxXrF4VO9mTJhdrWPkya5%2BCYisLfPcCITbeIOlOj490KQQ4vIXnK0BGDaZQJuGBK1Yf2lZ7%2BLPSl9JqII4KNfmxTBlB29viNvCQW5dLRA4%2BmLnJwif%2B3iLyaY9v94sUs5Cj9xtUC%2FoZB%2FAnx2F%2Bm3UkksFcyiJkXHMgEPaqhGxUEcJZPP38CPuTSHtqcN5BrZLWLqs1JXUGkx%2FyT%2F9lXu1jQR50M02ZXduxKBhUHNIg9iPgeaqFSPwDVZm8HjMbAZ%2FlFnmO0tVO3JJVKI07ofHGJ8hFV1EUDKR1j8l80lY2ML2A3bbjhpFtT1%2F5tjOJ%2FKT1m6mP%2F%2BSeqqkJ3pKNtBmFi4%2BPmDxf1k88ztQkwBSJWja0Cfx2KeK3%2Fc%2BWS03NXwD%2BjzN34u89xQbjownpObxAY6pgHCxKnNl6L1NRNXo8h5WROxyTCFiO2Ilejy91%2BAYCUm3G74dgNoWk4fZDe2OlTNcchnQivDKOg6NTilrn%2BWS%2BEhcpO9tGQOnDMRZ8agrhRhWiHjjnwmrW%2FrIb5UebY5mtTEAy3z89UkUcCx7%2F0DpuwGJRwaN%2Fqxn4Q20jqoVPzZ%2FJ6O0HIh1PgOgGYRRsJRVFe%2BQ93oF6EPIFFMPCrPgglzhs5clUhu&X-Amz-Signature=527d0c915042dcb04296b591801c863ba4c75a36a21fc7e419a324a99ec5b10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNGZGAX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGcOOZiMLxOOFHJt3eMCxVPWL88BQkaFQQfqEH8AePaTAiEAv%2FNln5w3%2FwCrDHEdMxCMnXzNCmFzVfQhM4MEs8biZaAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr0JPNiT0SwP3CvrCrcA5GKOZjkMI1JsQ7u06rIuQkAY6sJJpir3UGCjxVzi6Ax8J%2BsUDNqgHYgP%2FRVH7qT99DCUKKy4BidFJg6I4xSDoZwAIq05yCEGRiAorSza6%2BcXTay%2Ba58HQEWmwBBzJYVErDkJ3z7WjR1UEM4dED10mBIWahBtq7PzkJNj9F4N%2Ftqz1V7mkOOYKFkP%2Blz7rA0ho8LZaM%2F%2FWjZC95L1xaY6qh759nPo6hYNgoEtapt5SAz%2B7X%2BDTBTCyx5pp8epu6OrrcN%2BBbweBgk67rKlUIGtzam%2FKUBfUn3gKh3gMkPPvUiGih87HexZy9wLivlHGSy2%2FzFc0mQtPWQqiKTSMJnhRTWPt92is8kqt2Xsk4zaveihtQwJHZ85wJS2h1y5gSfYnAanUDM8ApSGj1DckSZYwP3Fc4%2FtifQx7u1Eq5LBQFLxvtlviMHBLxxnCJPBZlDRT%2FfDSlga8LqGAsYdJwJi%2Fe5lg57AVTx54U5%2FtfVm1exPO5YcpsdlnEWdei%2Fm7WzGMoENhBr0zx0HSJlboMskBT5nONeIdz534N8mQZ7Rb7hU59tpexnovQWjuNFw8EyNa%2FhEc9meIfYaKaHVc8DLeDBEKFbgr2r5vafoivckr3HrYeLFlKxoLKMWyp%2FMP6Sm8QGOqUBNnob0mZog%2Fdx2k%2BbbPKGVNXM7cnjheRBZIHreTfyk5cvVmkYlZaK4BqYdHtKziazoxQF2%2FFUp3v4yegQ7Y0%2BC%2BdCoflREdk3n5HwxzumoM43zEFspCfrBX6jGCcrkrPnUdBDqvHeyDuahp03Dw0kaQCwY0HjF0RYKidaMQoSYJlhVB4wv9P5cPIMjiqAHQ93x0ofiReAPwsUOemUeXJYRJmpPfpx&X-Amz-Signature=61b7a13c2eea274d96fef8bc8fd5ddae74140323c534de766bece54361f9e0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDVK4Z7H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhlfpD98NZVoqtUfw1R5qXYgjUaZZrRhE7UFIY2GsThQIhAMmSC7hj5cIXzhKjUXmc12c6wCSy8DlaGKqJVHWRLAP8KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnuPifIX1dItcYitMq3APhL3c6d3CQsqM62R%2BMCeMF01aJYlbFb3rR9b6ZEw8USvgMFFM0vnwvYVTz3gBqnKD0sbmTE7jvqWkMfVOktMohqMdN%2FEQ08iHXymxPTbnPzNXU%2B6f84CPTetnGBW0%2FR1jmmolrAAmLNjJuKpRlxx6EFS0TtpzqpldvQ%2Fxuj0%2BTjQwdW2fWclMMEOX0vYyYiU%2Bburx6fSlhIGAz2aqHi9ZTdJ3t%2FtBq3WEPkCWxHCvM2V2T5sLMeaAZu6JEB6ZQ9LidJm47YJq9zr713Db8%2BepMOeAk5vvKmD%2BOc0I9Sr9flqG%2Bls%2FM%2FAYpaNEf2maRYYxptptIBF%2F89PAPgUXwYEzkPRBj562RpPgG3XS%2Fa5bfZ8lazstknEzbFTkwvX7L1f01z1nmznuNngQjjZFmM%2F1dKuwdpDUdLNcX5fXd8%2BHKjQc0vH1v6Kw5CxXQYMiGuaPkm7OU17BRsOQJPqjpR0UEMAXChyCNh8JTD1eAzJEgo%2BplDq7D1mOr87jU7%2Bjc5mdrFzHPFkDNMPAdMzqFnBw%2Fgily7qp%2B6CAk3taQ3yFBdZ83C1Hb2Pu14dMN9hvpxkO0Yasv9JeoO0eROT1sAXupwQJq0fhUuOA5W3u6dMj11Wn0AIfv%2BbSv75CMhDD5kpvEBjqkAe%2FABYO5JoxQdbCeGAW0cg0d8sV8N%2ByCh%2BgUcx6EArrwysW2nTV4siM8gTWVR%2FCPBYGCM2aJ4U%2BGuFHiyk2HyulQQ41LjrrsihUrJpoHU90xmNnGAay35jv7fI4BZRzfR0G7AtW%2Bq%2FjhLdWutTKxPrA97276%2Baslerf0BV2fWJMZEzR2Q2OkXHNJwL%2F6m%2FbXIgqbyadp7ao0QhOb%2FpfdlAPPJZv8&X-Amz-Signature=16f5b73a31a22d153dd78c37ba6124254b195b9239a34794937bce2aa9bfe09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCHRSFG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG80dKzoCdbVzDYuIhrO3hdf%2Bl3lbcK%2FfPuJVZ7BXX9JAiAHHmmWV9G%2BJjEMWgCCtAqQQ9caEjva4XL7QZDa54MQqiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BeHGwoNxsSHMUhE0KtwD%2FpQDG5ka7TZYsmS9t7FjRqAgFyaLxbIR0WgYxKwasSNzKVDPm%2FFLZlcbSlalxUiOlFIF6qYcRPQ6GMOsX80p7T6QiWid5uT8Ie89MO1EroYeUFb8utGjG1Ju74tud4%2Bt%2BR%2BbFFsaBFN0%2FAh1TaBaieABNfBkH0GFEL0PBt%2BwKdms%2FfBxEreNFgAUFCEt9gOBitD9ZfG14F5Ii7BZB7%2Bi4611Nf7JFxXhbIpOuYePjqHUxXrF4VO9mTJhdrWPkya5%2BCYisLfPcCITbeIOlOj490KQQ4vIXnK0BGDaZQJuGBK1Yf2lZ7%2BLPSl9JqII4KNfmxTBlB29viNvCQW5dLRA4%2BmLnJwif%2B3iLyaY9v94sUs5Cj9xtUC%2FoZB%2FAnx2F%2Bm3UkksFcyiJkXHMgEPaqhGxUEcJZPP38CPuTSHtqcN5BrZLWLqs1JXUGkx%2FyT%2F9lXu1jQR50M02ZXduxKBhUHNIg9iPgeaqFSPwDVZm8HjMbAZ%2FlFnmO0tVO3JJVKI07ofHGJ8hFV1EUDKR1j8l80lY2ML2A3bbjhpFtT1%2F5tjOJ%2FKT1m6mP%2F%2BSeqqkJ3pKNtBmFi4%2BPmDxf1k88ztQkwBSJWja0Cfx2KeK3%2Fc%2BWS03NXwD%2BjzN34u89xQbjownpObxAY6pgHCxKnNl6L1NRNXo8h5WROxyTCFiO2Ilejy91%2BAYCUm3G74dgNoWk4fZDe2OlTNcchnQivDKOg6NTilrn%2BWS%2BEhcpO9tGQOnDMRZ8agrhRhWiHjjnwmrW%2FrIb5UebY5mtTEAy3z89UkUcCx7%2F0DpuwGJRwaN%2Fqxn4Q20jqoVPzZ%2FJ6O0HIh1PgOgGYRRsJRVFe%2BQ93oF6EPIFFMPCrPgglzhs5clUhu&X-Amz-Signature=04115d0110fe3589112c812ccc7b4bb1553be9e48e2fadc256c6ba99922a43e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
