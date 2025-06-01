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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6764C2R%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHMkrx%2BcgnBAHwd%2F5%2BLA54ujTMnUDeTHZR9NcWYgsBJiAiARSVsI19W7JLtEDmGMY7mOH9hxMNt810QzLYb1woFReyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95drLc4IoGJGafoCKtwDE9i77XuCTx1TYHwemWQGOmM4wn7EJGxW2QWzZqn7i9q4kOIUewHkGi1qdYmVtSrMk%2BoEWdJQtQXLmaqcGNZQfaQDdND3dnRgKkn4187T39g7g9ZDmULQG92XJeo2Sm5ysBMntb9CNh3BjRvrjBbh3BZEmDBj%2FWrGWbRDv3aj%2BBaM1Zyls37uz0vYCyX5Emt9AgBp8aDvLCgUYWw7lGQP8Z7%2BsFOe8LMOrzXZfJMZ0gTK%2BtEAp0XqQoZPb%2Fex7BI5eF9KLVTE5XPaZI6EB9eh2GypVAaFHXI%2Fe8ZC%2FeSUzbfoEZEE5YKklIQ4%2FUV6PTsBvBE3wd2jcVulJk8EhEh4hS6XA1YG3JDKpVtyQr4Q0SfNFs9c6k3KHWfqrVz1VVRyv1LGqGIKiSElAuuJMXFKGbVSi%2Fq8MzAkjMxT8A7xB%2FmQw8KcidVg57qOWjZOHGY5HtcVdKPVRsUK%2Bg7rlvixs9zto3Qd9XgUAK3nDwb%2BystY4p4eaqTmZisWDGFF2eEVTPdAGwHhmXeq7nvyJJDF1D%2F7hf1ZcVKa9Pbt0U7A%2Bbbc2VMoEtTGsbwSeQQT4fPpOsVj6pQHvEJPHhf3SvRVKT%2BQSJhtfxc1YUw0BO6Ibkuq2S9FA%2BGV3OEQf1wwyvDuwQY6pgFuOIiSrhsWuSuTCFHUxd%2B8YPOvBAAUhrg4SdJqIZs2zDo98dNQcBszP07ENHoHY46eQ3CH2PypSjvOQDNHkNZ0g8vmgMNAat2dxIw%2FPhEafBGOOgCJwpeZAdk%2BZkXi4z5QHMj27GQ0Hig0g5qEHReKZ5MwuAcqUZ6HZqRD5oMlYtR4aW9P8EhRMX%2FihtKgwr2NqC5aiGHS4RJIeQrQxCkPhgDYwQhL&X-Amz-Signature=a87301a5ffd09e5ae2a1947b65b00c97c3347ed3b419662efe3dbcc85bbb1051&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6764C2R%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHMkrx%2BcgnBAHwd%2F5%2BLA54ujTMnUDeTHZR9NcWYgsBJiAiARSVsI19W7JLtEDmGMY7mOH9hxMNt810QzLYb1woFReyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95drLc4IoGJGafoCKtwDE9i77XuCTx1TYHwemWQGOmM4wn7EJGxW2QWzZqn7i9q4kOIUewHkGi1qdYmVtSrMk%2BoEWdJQtQXLmaqcGNZQfaQDdND3dnRgKkn4187T39g7g9ZDmULQG92XJeo2Sm5ysBMntb9CNh3BjRvrjBbh3BZEmDBj%2FWrGWbRDv3aj%2BBaM1Zyls37uz0vYCyX5Emt9AgBp8aDvLCgUYWw7lGQP8Z7%2BsFOe8LMOrzXZfJMZ0gTK%2BtEAp0XqQoZPb%2Fex7BI5eF9KLVTE5XPaZI6EB9eh2GypVAaFHXI%2Fe8ZC%2FeSUzbfoEZEE5YKklIQ4%2FUV6PTsBvBE3wd2jcVulJk8EhEh4hS6XA1YG3JDKpVtyQr4Q0SfNFs9c6k3KHWfqrVz1VVRyv1LGqGIKiSElAuuJMXFKGbVSi%2Fq8MzAkjMxT8A7xB%2FmQw8KcidVg57qOWjZOHGY5HtcVdKPVRsUK%2Bg7rlvixs9zto3Qd9XgUAK3nDwb%2BystY4p4eaqTmZisWDGFF2eEVTPdAGwHhmXeq7nvyJJDF1D%2F7hf1ZcVKa9Pbt0U7A%2Bbbc2VMoEtTGsbwSeQQT4fPpOsVj6pQHvEJPHhf3SvRVKT%2BQSJhtfxc1YUw0BO6Ibkuq2S9FA%2BGV3OEQf1wwyvDuwQY6pgFuOIiSrhsWuSuTCFHUxd%2B8YPOvBAAUhrg4SdJqIZs2zDo98dNQcBszP07ENHoHY46eQ3CH2PypSjvOQDNHkNZ0g8vmgMNAat2dxIw%2FPhEafBGOOgCJwpeZAdk%2BZkXi4z5QHMj27GQ0Hig0g5qEHReKZ5MwuAcqUZ6HZqRD5oMlYtR4aW9P8EhRMX%2FihtKgwr2NqC5aiGHS4RJIeQrQxCkPhgDYwQhL&X-Amz-Signature=7bb37303062372951e5991900aed9133645371b870085d611ee4273e7b07ded1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6764C2R%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHMkrx%2BcgnBAHwd%2F5%2BLA54ujTMnUDeTHZR9NcWYgsBJiAiARSVsI19W7JLtEDmGMY7mOH9hxMNt810QzLYb1woFReyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95drLc4IoGJGafoCKtwDE9i77XuCTx1TYHwemWQGOmM4wn7EJGxW2QWzZqn7i9q4kOIUewHkGi1qdYmVtSrMk%2BoEWdJQtQXLmaqcGNZQfaQDdND3dnRgKkn4187T39g7g9ZDmULQG92XJeo2Sm5ysBMntb9CNh3BjRvrjBbh3BZEmDBj%2FWrGWbRDv3aj%2BBaM1Zyls37uz0vYCyX5Emt9AgBp8aDvLCgUYWw7lGQP8Z7%2BsFOe8LMOrzXZfJMZ0gTK%2BtEAp0XqQoZPb%2Fex7BI5eF9KLVTE5XPaZI6EB9eh2GypVAaFHXI%2Fe8ZC%2FeSUzbfoEZEE5YKklIQ4%2FUV6PTsBvBE3wd2jcVulJk8EhEh4hS6XA1YG3JDKpVtyQr4Q0SfNFs9c6k3KHWfqrVz1VVRyv1LGqGIKiSElAuuJMXFKGbVSi%2Fq8MzAkjMxT8A7xB%2FmQw8KcidVg57qOWjZOHGY5HtcVdKPVRsUK%2Bg7rlvixs9zto3Qd9XgUAK3nDwb%2BystY4p4eaqTmZisWDGFF2eEVTPdAGwHhmXeq7nvyJJDF1D%2F7hf1ZcVKa9Pbt0U7A%2Bbbc2VMoEtTGsbwSeQQT4fPpOsVj6pQHvEJPHhf3SvRVKT%2BQSJhtfxc1YUw0BO6Ibkuq2S9FA%2BGV3OEQf1wwyvDuwQY6pgFuOIiSrhsWuSuTCFHUxd%2B8YPOvBAAUhrg4SdJqIZs2zDo98dNQcBszP07ENHoHY46eQ3CH2PypSjvOQDNHkNZ0g8vmgMNAat2dxIw%2FPhEafBGOOgCJwpeZAdk%2BZkXi4z5QHMj27GQ0Hig0g5qEHReKZ5MwuAcqUZ6HZqRD5oMlYtR4aW9P8EhRMX%2FihtKgwr2NqC5aiGHS4RJIeQrQxCkPhgDYwQhL&X-Amz-Signature=3de9c6e58764035c0f416b5f4602e5bac8b810eb4addde543cbd0f83fead943f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI6JGECK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCg9tWL%2FSjTpLdvVAFs9MXewCu69%2BMyjc3I%2BPZssNPrZgIhAPse%2BbrOETWLUW7TC2oz%2BKmEBRMNq25LpzNFhmg6YCUoKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZuuFJxTpESNHgW8q3ANd3Mga706%2BWTNEZRxi8XncaJdk5fWuUISeprdr4YjM4yFom3IBwWyrNc2xlnmzhNE17Z5zyd%2Fdmq%2BPwidBau8cwtQFU2F655A6iREp1fPj6sCCD7gXbbpJShf5hFgj0sMENHlxTpa4trnpokoEQikQrqYwQpor0rL5dmPsPobcJyY%2Bpgp2fgxqo83pRPBrJmLou9AG0TfgVWgw7cqKNJWyG0jaoEN3yXSFNGj3ubL8mhKvzi2sd4OdNePZ6xjPPZK2IxrD7%2Bn7%2FDnUu4RS2bqceEMzVnlr5bD9xXK1v7gsTjtI8FeUGHtiLbEi9ecg8Md8rnUp0HjSN7iz1SJbbtobBItIOc6UvRHXYwnA%2BgSxbAtdcXHGMaq20018jin57ZC6K1uqR2qanYj4%2BVVNZeYCYC5j2aOfb%2Bqeg6sK8t5PtW%2BAnh9nktBDniy88NaaUAQXyp3xfPk%2BGlSzCoIiOAty%2B1dVleRwHyw%2FAM%2Bli%2F%2Fp76iWsYw4HJaUxm9NasoEjvOfBFfFT3hCo7k%2FoQIMdpAeI8fTIFVJL1Fne1EukFPEFtTlpH8gqVtBEhek0wl6HN7Adj9Ql5ppePg3QItGoaLbESbHgzElk%2BvSEYjglIcSwPMBL0ldKq8kMOPo%2FTDLzO%2FBBjqkAbM6w93OlDR55ni9W6sMMKxX2gEcGR6RH19rzF63NQB0nr9yqQM6QXTmdmGEp9Loo0IqGzT5qqiA5rzqwPQKnbvh%2FANRMlb7ix7%2FFCsVpj6RC1YQMQID5rViVoDGKZmvg8Z9yvxcduhbkbcUSVUD9LM4C7TzrbmN8fSPdQ6YOSsQcmnXYWluoYt99mWUgZUmDB8QDXCAMRXvQNMuzA6rkKuObyTh&X-Amz-Signature=3cc84f22120ca60bf0eb58bef70562087ceedc024c6c08e57c89dee86cfd7327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSVRIGB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCjvDvHtY6isFp%2BJ4Rud3onCcC4ZFNL7zaM2EBRRo04FQIhANeQMORbNuO3DsJPTHuWwbNLAhbmcmTs0sS4EjL%2BPqTuKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfy%2BC13wifmQfvrzEq3AMwInuiuO9AWfqzrS9BqyAk39eDENgHZ1IUl5M8MAkFkFkDZuZdk436oL4pOYNT5TyAgqu92mQBxCofFr5X6FP1eYJcIHhUEFRQJknaG8J1LgsF9xPJ2MK4jyHXPFL08Q9O17S1QHdBX19DPFqoxMZ6%2Byb9NpmyxVTbim8ewCcETLYzo7ZhtS9%2BMzYVavDTrhYyQNGl2ZUb0okaLqdjetIs9MuhelfibAjVtyRY1hEVcd4nbYslXHB1oCEyUnSvQ0Ljt0Spqd4HZwNI4H5ScHfbNjfg5dmqombuCp2F85mxH%2BZ%2BPrZH3DFZSycCvJpZzC9f1ra%2F%2BDd8NOBzyb2F%2BA5M96UJBiifVO56tFnXeX2tuEPMlr7QryAm2iQb4RM5w1VkjEgylalwEyWlMbK6UYYdfKpaQHfZGEk7t2AKW723TXfKSZJv3FlD3%2BwZgV0gMO1qkuNvlJNVXK0P3ZtEJWJp4bvC5kK3QCYsad6RvGPDu0oUlYgbJESsXG8CB3%2BYFcAz4h8nfiMvp%2FICInf0P%2FZ2cGxTQFOyBiQcBSv2b%2B0yYRIjIZwbGcMa2NS3Y0hn6ei%2BPE3B01PlaG9iNJo7ukVTfkazeKNuP%2FKhgb%2Fia%2FUhcIqFMtIukwHBpjF4mzC32O%2FBBjqkAaIyGuKyj5vYQI0ZBzF%2BaVpqq639u8htrULN%2Fry%2BJ5elocWRqjf3s2w%2Bun%2BYmR7UQC4ncAqwrMgyRr9rlzEg4WCr171rThU%2F%2BAYNAQJyJy8z9EN65Hn4vSq6zp%2BGi3T1l1muNy8aGGF9PJa9U9ecvEuMVcxjW3PuZqUQ19oxUFYY94P2yWoz8AJ6gSDTECIb1SBAfPMzugWByjcDsMLF%2FHj3dDgs&X-Amz-Signature=24c2738251dbc43fc8dffd0915faee613fbc8cee3abf3bef9d611baf53a6f127&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6764C2R%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHMkrx%2BcgnBAHwd%2F5%2BLA54ujTMnUDeTHZR9NcWYgsBJiAiARSVsI19W7JLtEDmGMY7mOH9hxMNt810QzLYb1woFReyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95drLc4IoGJGafoCKtwDE9i77XuCTx1TYHwemWQGOmM4wn7EJGxW2QWzZqn7i9q4kOIUewHkGi1qdYmVtSrMk%2BoEWdJQtQXLmaqcGNZQfaQDdND3dnRgKkn4187T39g7g9ZDmULQG92XJeo2Sm5ysBMntb9CNh3BjRvrjBbh3BZEmDBj%2FWrGWbRDv3aj%2BBaM1Zyls37uz0vYCyX5Emt9AgBp8aDvLCgUYWw7lGQP8Z7%2BsFOe8LMOrzXZfJMZ0gTK%2BtEAp0XqQoZPb%2Fex7BI5eF9KLVTE5XPaZI6EB9eh2GypVAaFHXI%2Fe8ZC%2FeSUzbfoEZEE5YKklIQ4%2FUV6PTsBvBE3wd2jcVulJk8EhEh4hS6XA1YG3JDKpVtyQr4Q0SfNFs9c6k3KHWfqrVz1VVRyv1LGqGIKiSElAuuJMXFKGbVSi%2Fq8MzAkjMxT8A7xB%2FmQw8KcidVg57qOWjZOHGY5HtcVdKPVRsUK%2Bg7rlvixs9zto3Qd9XgUAK3nDwb%2BystY4p4eaqTmZisWDGFF2eEVTPdAGwHhmXeq7nvyJJDF1D%2F7hf1ZcVKa9Pbt0U7A%2Bbbc2VMoEtTGsbwSeQQT4fPpOsVj6pQHvEJPHhf3SvRVKT%2BQSJhtfxc1YUw0BO6Ibkuq2S9FA%2BGV3OEQf1wwyvDuwQY6pgFuOIiSrhsWuSuTCFHUxd%2B8YPOvBAAUhrg4SdJqIZs2zDo98dNQcBszP07ENHoHY46eQ3CH2PypSjvOQDNHkNZ0g8vmgMNAat2dxIw%2FPhEafBGOOgCJwpeZAdk%2BZkXi4z5QHMj27GQ0Hig0g5qEHReKZ5MwuAcqUZ6HZqRD5oMlYtR4aW9P8EhRMX%2FihtKgwr2NqC5aiGHS4RJIeQrQxCkPhgDYwQhL&X-Amz-Signature=a054e8cf93cf93310487d8a3f7b7c4408beaad3f33403e890d191bf693361684&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
