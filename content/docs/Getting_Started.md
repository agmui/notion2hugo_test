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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNHEVYL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVqheN9Z8ksgu4lHpCuFbePsEvTRxO%2F70PUD%2BNem8TMAiBmHsBRNZ16xBBAgcM6%2F4VE7OqCXF9qvg5zFBaMrPIuqyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP4zyhWFa1f1Kl07uKtwDQrXqTeDgZmFbWbOA5ObP4xDwtttiRjyJrvma0D1nOoVPBzARc9RnoUNYbMF71hX66T%2FQh3a8mk2%2Fbs6ZrtQHKeCZh1r0elOsWoVnz6J8dwRchvttS6DUevPH6eEUqOIvFjBgnQ3uTMUfYJiH0YvtOQEMtLfsNXs1LVeCyFS3IQ0Fg3CLnpr97A4cZLG7PDxPslC8xBI%2F1DpX227t4%2BiBP3VW1NXklqDn35WNwqlxJDSBaH0RPCdbsl0ySWx1%2BeuHA5RAeS%2Fqv7WTtvAFFdHJxRbZRDnqQIyvSdHaRFHpUb9xQTSYerBnghKUYdhp5QyPNG3jJQG2FaulkKdEzca4b94CoPLNQnjeP%2BGm46lNQLaOfMnfbEquVk6EJaIJTlCgkTNPp7dDOqP0B2J6uKAWawkQOuhkquNG9V0eeYf7fwCB4IDl3lqqqMVddKgC%2B8A5xMHZK2viN%2FUtdulcdTVJUsTykFxlEG%2BpMYuQHHfg9E3dugJmljziCWGDEe55ukjGYxTtidFQQDFpiFsBjajKmbUJ58kx0e%2BbXKN99LQRJJSxKA%2FN5Ob2ckcB9Tu1ei3T9aVpdmHrrxOIFrxmWFWuVW24Q89HV0cDTWLZpw9DJBmhsoL92Vx2iWQjssQws%2B3kwQY6pgFMbUqonO6Go3bFRavLALBw9%2FkIKDzimm294tAG7%2FMvohVHl0nZl%2FdwAdmTlOSucEZEHqeCWEzzI9C34jvd%2BQRkX4B34lA106SSlCKbp03aXUs85yKzDOYbA2h8drZxwi1N%2FDCRY4duNeI01QJ6h7MQzPT4n%2F6WaDZihlMSUX2KR%2Frf9MyVjisEPMQxm4PuvEh9LIqcREn9rLRelJ6dYfOmits84cxt&X-Amz-Signature=a9451559bd21da58a751ccbb6bca6d71b5e6120f4f9b8750e0ee12ccde7480cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNHEVYL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVqheN9Z8ksgu4lHpCuFbePsEvTRxO%2F70PUD%2BNem8TMAiBmHsBRNZ16xBBAgcM6%2F4VE7OqCXF9qvg5zFBaMrPIuqyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP4zyhWFa1f1Kl07uKtwDQrXqTeDgZmFbWbOA5ObP4xDwtttiRjyJrvma0D1nOoVPBzARc9RnoUNYbMF71hX66T%2FQh3a8mk2%2Fbs6ZrtQHKeCZh1r0elOsWoVnz6J8dwRchvttS6DUevPH6eEUqOIvFjBgnQ3uTMUfYJiH0YvtOQEMtLfsNXs1LVeCyFS3IQ0Fg3CLnpr97A4cZLG7PDxPslC8xBI%2F1DpX227t4%2BiBP3VW1NXklqDn35WNwqlxJDSBaH0RPCdbsl0ySWx1%2BeuHA5RAeS%2Fqv7WTtvAFFdHJxRbZRDnqQIyvSdHaRFHpUb9xQTSYerBnghKUYdhp5QyPNG3jJQG2FaulkKdEzca4b94CoPLNQnjeP%2BGm46lNQLaOfMnfbEquVk6EJaIJTlCgkTNPp7dDOqP0B2J6uKAWawkQOuhkquNG9V0eeYf7fwCB4IDl3lqqqMVddKgC%2B8A5xMHZK2viN%2FUtdulcdTVJUsTykFxlEG%2BpMYuQHHfg9E3dugJmljziCWGDEe55ukjGYxTtidFQQDFpiFsBjajKmbUJ58kx0e%2BbXKN99LQRJJSxKA%2FN5Ob2ckcB9Tu1ei3T9aVpdmHrrxOIFrxmWFWuVW24Q89HV0cDTWLZpw9DJBmhsoL92Vx2iWQjssQws%2B3kwQY6pgFMbUqonO6Go3bFRavLALBw9%2FkIKDzimm294tAG7%2FMvohVHl0nZl%2FdwAdmTlOSucEZEHqeCWEzzI9C34jvd%2BQRkX4B34lA106SSlCKbp03aXUs85yKzDOYbA2h8drZxwi1N%2FDCRY4duNeI01QJ6h7MQzPT4n%2F6WaDZihlMSUX2KR%2Frf9MyVjisEPMQxm4PuvEh9LIqcREn9rLRelJ6dYfOmits84cxt&X-Amz-Signature=4848fa1ca898d062fdc6af119020c8af7ad41792ab5316693f8308c92dd7e2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNHEVYL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVqheN9Z8ksgu4lHpCuFbePsEvTRxO%2F70PUD%2BNem8TMAiBmHsBRNZ16xBBAgcM6%2F4VE7OqCXF9qvg5zFBaMrPIuqyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP4zyhWFa1f1Kl07uKtwDQrXqTeDgZmFbWbOA5ObP4xDwtttiRjyJrvma0D1nOoVPBzARc9RnoUNYbMF71hX66T%2FQh3a8mk2%2Fbs6ZrtQHKeCZh1r0elOsWoVnz6J8dwRchvttS6DUevPH6eEUqOIvFjBgnQ3uTMUfYJiH0YvtOQEMtLfsNXs1LVeCyFS3IQ0Fg3CLnpr97A4cZLG7PDxPslC8xBI%2F1DpX227t4%2BiBP3VW1NXklqDn35WNwqlxJDSBaH0RPCdbsl0ySWx1%2BeuHA5RAeS%2Fqv7WTtvAFFdHJxRbZRDnqQIyvSdHaRFHpUb9xQTSYerBnghKUYdhp5QyPNG3jJQG2FaulkKdEzca4b94CoPLNQnjeP%2BGm46lNQLaOfMnfbEquVk6EJaIJTlCgkTNPp7dDOqP0B2J6uKAWawkQOuhkquNG9V0eeYf7fwCB4IDl3lqqqMVddKgC%2B8A5xMHZK2viN%2FUtdulcdTVJUsTykFxlEG%2BpMYuQHHfg9E3dugJmljziCWGDEe55ukjGYxTtidFQQDFpiFsBjajKmbUJ58kx0e%2BbXKN99LQRJJSxKA%2FN5Ob2ckcB9Tu1ei3T9aVpdmHrrxOIFrxmWFWuVW24Q89HV0cDTWLZpw9DJBmhsoL92Vx2iWQjssQws%2B3kwQY6pgFMbUqonO6Go3bFRavLALBw9%2FkIKDzimm294tAG7%2FMvohVHl0nZl%2FdwAdmTlOSucEZEHqeCWEzzI9C34jvd%2BQRkX4B34lA106SSlCKbp03aXUs85yKzDOYbA2h8drZxwi1N%2FDCRY4duNeI01QJ6h7MQzPT4n%2F6WaDZihlMSUX2KR%2Frf9MyVjisEPMQxm4PuvEh9LIqcREn9rLRelJ6dYfOmits84cxt&X-Amz-Signature=c06e80b33253335e45e03d09d2e806004c0ef3e7d0be16db7b4c277e8e0435e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3HCFAB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3AHnQSYBmejTxLGkdzPWY4%2Br2Cja3W7aQLQUsxVKAYgIgQKkbJDZDn54CT3tt1CyaWSt0yk0cTLptCbrol5cqDrUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoiAJOKMp8s24reTyrcA2eKP41NNA8%2FeR5gOXy5nM82EQkwsVm1X67h0trU2FvS31vSKnvWP%2FFxbos4I7KMneGclj28zzOTo0npCV4mRNP7bhEY9vzirK7U6sIfoT7nOhNjGWMiP%2F3Mt4HZIK4%2BX3kaKQ0BuoJOgoHEkPZqthUa28y%2B%2FcfCGEgGs0nFC06zrWOAvRWeR6bjsPR8T3iIsAKEivAs4EOxIGSE7ZmEHz8S5%2BRe3y6PAMRGkTcxlF0YtdFpUYbgJP%2BnniXfuQVBXX9BGxYBUEMHJukZvgQMtdNSZ7%2BbUfM1o1X8M9wBGxkC%2FIubZVrwNQC6EdaLx9I8jlA5oxAN7C%2Bcq9t4wwC5Dc51huRM5ebqPU7yuiaWfNBzuPxYF4s43p2anBnQTaLCGtvdDwfoSO5yruiQgjQaH9j5X7DDOYM6dSJpCnfOWFfhfQA9NyxbxWzZStyGoG5ezO9I5WrAaFlCU0KLhr9E4NOVI4U7Gg7fwfguA8AzJUcgnAc%2BVzoc%2BqrvvZtPCIL0TCay%2FQG%2BNZn7K74MNqpOg1VgVWO6NbFxR83wooS6HLi1WfM2XMzmJJjMgJfM5dNfXBhm%2BLXOlutuqEtQC5eiJXOwk%2Fuq%2Fu8kSWU6XzvPThleSBoEBQ0%2BjbcO%2FmIBMNXw5MEGOqUBBo5TNcnYSIIcqCf8hbNsstiBlsQTvdCHbR6lqE0cenrNBILAK9uaubEa5%2FZjWOFp03RVITSDBm2SxlPrZ1ye8UJ9jh0U2wgvoE%2FVPUeR3WMWSatrqMGRufBsrpVLTP4BjOs1sQRxTDUfPOLhBYwcjCf3LWlEzpqXIzCRngg5vn8JSPw5cTFdZ4NMa2Po8uXeHKuDdw3%2FUEA4t0cyarL7yk2Sd78t&X-Amz-Signature=69b8bb5891baf8933f6dbc9a66a72795221a059972a8e601fe5940dac62b43d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL42JHUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaaBZazcmwp2V%2F4Wx5rBDwzs%2B%2Foh%2B4Iix96h0cnDx%2FfwIgXZeAvYugrh3790xAt2Zh9hjcnCcLq1TVP74IcgSQ%2FogqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkBC8TaPJeyyCL0SSrcA%2Fk8qAS2QJYijFH9r5qway9lGsA7A4tU3BpAKqNv6%2BQQo4PApo0%2BrJoCRvapI%2BH%2B48STKjIQ2wC9HH09T39Td1B3r0yS4xe0BDleMnTSlUgpxWDdsFhiViJD0lgAbAEk2VIqsCf3d5A8tDdfZEIfjWr50tfPAUiYvDI2o%2FJEBHFWuruWi5B%2FcCWsU8pigbFwIUxPVBICD84voiq8BoYqD8a5RGOyrDVZyfZYAKQ3nWjnarO7nViRTK0qiFKl5yJ5RTYSLKH5IVzNqIdSwvDAj21ViNNTtJVksFxEnS4HZjqaiRgkuG08FFud7atEhPvQgbI9xnAY6iW4tpdXsu7wtwcOYPsDM7%2B7yCobJUbqBsUQ%2B2HYi4nXO5fEbXJKG5tPMU5Q%2FvMEAPeElPK0jYYBudWU72%2FfOXKt%2B6nQcUxlX6ctIxFNuDKEg0c4OLcHJ11xD4JA4EhnCFNWOoVsT%2FaN9eOE4rOaKXQN%2Fz5NdJWnvjMncEVY%2F34Q3cbtg6U%2FmIm74MDDfj5qaRjjBmRwDV0Yzgzf0xWLcsDtzMCjOdPFfXSzr6PIHLdoDL5gofzbI%2FEgYBG1gJgVlfLucvJApHn9PPthazr%2Bxjw%2BhcgY4HOIBlOdyaEvR4t7H8PwzK5xMNTd5MEGOqUBUlyTfGxoJD0nRv0vZeM%2B8vPOopiErkBkbcQ3Ar%2BuuNnO3kkG5Bl4kbdPZ7zEhcSiIUvbHI%2BsDGjHXji%2FtXHxIPhGcjirA9JtjzmrGKiM9GN0WRQRpk0iMmfK2dxcXZTbQ459y7RLgPC7hOQ9i3X2HfoOzI%2F2GxTYUA9HNXAMLHFB65ueUXfBba4J%2FVf0wsEH3alss3p70v6%2Fns%2BxnUcPRyXwSei2&X-Amz-Signature=71670e68223fab28aedadef0ae8b0ccdec8a4517ea58c67954265b9fafc72b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNHEVYL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVqheN9Z8ksgu4lHpCuFbePsEvTRxO%2F70PUD%2BNem8TMAiBmHsBRNZ16xBBAgcM6%2F4VE7OqCXF9qvg5zFBaMrPIuqyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP4zyhWFa1f1Kl07uKtwDQrXqTeDgZmFbWbOA5ObP4xDwtttiRjyJrvma0D1nOoVPBzARc9RnoUNYbMF71hX66T%2FQh3a8mk2%2Fbs6ZrtQHKeCZh1r0elOsWoVnz6J8dwRchvttS6DUevPH6eEUqOIvFjBgnQ3uTMUfYJiH0YvtOQEMtLfsNXs1LVeCyFS3IQ0Fg3CLnpr97A4cZLG7PDxPslC8xBI%2F1DpX227t4%2BiBP3VW1NXklqDn35WNwqlxJDSBaH0RPCdbsl0ySWx1%2BeuHA5RAeS%2Fqv7WTtvAFFdHJxRbZRDnqQIyvSdHaRFHpUb9xQTSYerBnghKUYdhp5QyPNG3jJQG2FaulkKdEzca4b94CoPLNQnjeP%2BGm46lNQLaOfMnfbEquVk6EJaIJTlCgkTNPp7dDOqP0B2J6uKAWawkQOuhkquNG9V0eeYf7fwCB4IDl3lqqqMVddKgC%2B8A5xMHZK2viN%2FUtdulcdTVJUsTykFxlEG%2BpMYuQHHfg9E3dugJmljziCWGDEe55ukjGYxTtidFQQDFpiFsBjajKmbUJ58kx0e%2BbXKN99LQRJJSxKA%2FN5Ob2ckcB9Tu1ei3T9aVpdmHrrxOIFrxmWFWuVW24Q89HV0cDTWLZpw9DJBmhsoL92Vx2iWQjssQws%2B3kwQY6pgFMbUqonO6Go3bFRavLALBw9%2FkIKDzimm294tAG7%2FMvohVHl0nZl%2FdwAdmTlOSucEZEHqeCWEzzI9C34jvd%2BQRkX4B34lA106SSlCKbp03aXUs85yKzDOYbA2h8drZxwi1N%2FDCRY4duNeI01QJ6h7MQzPT4n%2F6WaDZihlMSUX2KR%2Frf9MyVjisEPMQxm4PuvEh9LIqcREn9rLRelJ6dYfOmits84cxt&X-Amz-Signature=3b7d3042aef29dfebe029d74704b3b5f1ff8372a117393c8bb28fa63bd0e4a07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
