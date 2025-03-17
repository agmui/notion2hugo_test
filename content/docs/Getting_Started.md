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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KIYZSP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsZzGaseYl3TMRmRa6u7R5EdKyfw3LHEX62knz43K9SAiBnI03ucT8BZELAK5h6iuePidqDMaSnc1qfVf8P79yxzSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf4JRZdGAt%2BaSyUuKtwD7kZq41xv%2FU7Ju3r3XYkXYqRJ8FcC6qH0eXv0UGzNIWT1GpamUlyC7q%2FrOzSMWLPufF5LoAlIPFIOYAtmVq6UNgCHr00Ssv%2Fw0jUoE2WUaL61lQ2tTz%2FblPebiFw%2FhdcD%2B1yWtTRzQqkzoX3yHGiAUl%2F9oBM9B1IfIXvTPm%2FKH6ssnxYbnxohBeKk2OJSsrwc1xBQjuUU32N52nsJM3XKhs6eifqY0eN5h9YAb6543Y%2BiJa9YRxoDmYRTKyXhEf4fXM1TKDR2312ZBtfT5TRtdoIxn6%2FDErqtmKqsPk%2B92GyWakq%2F6sGueVXvSfz%2BiYUF5ISTNoamYomVzet%2FDwsK4uZ1jvcGMWyBFDTp8IUTvzkI8dMdVXhi65BxyE1B80Mv1BSlEn8WTTTdJWWa3c%2Bib1zHP3%2FRu5ApuguCiPVnWshITM4SrTmjaVSCLtznqa2iK1x0cAvQll0v89huv2l%2BLgDIezkr5TJ06%2BSa0PUnTmgY2FOi8PxzyeXSt3w7MGVTwuI3hyKDGGk80OMoQtGIfEKkhxfG4aKaCH8WSkG%2Bz6D3mqEZCEwgpbJ4cUBKDtp9pMq%2F7lSIoRFtY%2FZO%2FCCSBnWToNjdHu2ch90Wq%2Fb%2FWviyNkHdrVn0klCqvisworzevgY6pgEHCT3vgkr%2B%2FDNJSbmquky9j%2BstmjqSlTaqRKjrtBEaMFRKCJPj4uw531Cknn4jm3QiYf7CsbM85jG16gXMGOfUNJNDsQVxAHYRJth3avgks9b3auULWNVBECr1EmYbGwegb4eggixKyflHCucGipQrzbgqIkJsUj7Q%2BQVDISncS1XA52bNhkYJegmWCrNVLfTx5h8Uv%2F0o1tCmfZKjZXzlYNLY2C%2Fa&X-Amz-Signature=fc699735d0c0279be889511d20d908123573a5e2a0995c005ee70750e4084d03&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KIYZSP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsZzGaseYl3TMRmRa6u7R5EdKyfw3LHEX62knz43K9SAiBnI03ucT8BZELAK5h6iuePidqDMaSnc1qfVf8P79yxzSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf4JRZdGAt%2BaSyUuKtwD7kZq41xv%2FU7Ju3r3XYkXYqRJ8FcC6qH0eXv0UGzNIWT1GpamUlyC7q%2FrOzSMWLPufF5LoAlIPFIOYAtmVq6UNgCHr00Ssv%2Fw0jUoE2WUaL61lQ2tTz%2FblPebiFw%2FhdcD%2B1yWtTRzQqkzoX3yHGiAUl%2F9oBM9B1IfIXvTPm%2FKH6ssnxYbnxohBeKk2OJSsrwc1xBQjuUU32N52nsJM3XKhs6eifqY0eN5h9YAb6543Y%2BiJa9YRxoDmYRTKyXhEf4fXM1TKDR2312ZBtfT5TRtdoIxn6%2FDErqtmKqsPk%2B92GyWakq%2F6sGueVXvSfz%2BiYUF5ISTNoamYomVzet%2FDwsK4uZ1jvcGMWyBFDTp8IUTvzkI8dMdVXhi65BxyE1B80Mv1BSlEn8WTTTdJWWa3c%2Bib1zHP3%2FRu5ApuguCiPVnWshITM4SrTmjaVSCLtznqa2iK1x0cAvQll0v89huv2l%2BLgDIezkr5TJ06%2BSa0PUnTmgY2FOi8PxzyeXSt3w7MGVTwuI3hyKDGGk80OMoQtGIfEKkhxfG4aKaCH8WSkG%2Bz6D3mqEZCEwgpbJ4cUBKDtp9pMq%2F7lSIoRFtY%2FZO%2FCCSBnWToNjdHu2ch90Wq%2Fb%2FWviyNkHdrVn0klCqvisworzevgY6pgEHCT3vgkr%2B%2FDNJSbmquky9j%2BstmjqSlTaqRKjrtBEaMFRKCJPj4uw531Cknn4jm3QiYf7CsbM85jG16gXMGOfUNJNDsQVxAHYRJth3avgks9b3auULWNVBECr1EmYbGwegb4eggixKyflHCucGipQrzbgqIkJsUj7Q%2BQVDISncS1XA52bNhkYJegmWCrNVLfTx5h8Uv%2F0o1tCmfZKjZXzlYNLY2C%2Fa&X-Amz-Signature=32640784e5eab60f85f8b6b8d26fe4d296004ea872da76d4b193524a5a718239&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUTB6FA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC02I845Flje2VG7FOvXX5PN8JGdAKOv5IxQ4U2EKmiJAiEAkqb2TJS9fO73CnIaHYR3T0aSj%2B4ys1vFlV%2FVYBfb%2Bp8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDSd%2B%2BLipnzDvX2sISrcA%2FqBQeqplbmMGNkNpOzl9toe3TJWyZNUK3jLdlj6qnKERenO%2BAa8tYIlhiits9vPz0hvC2icVyLoOhRmEM58C%2BUe8PiQDiIVyq%2F%2FIHLYYlxpzH7zLb411qeviiMG%2Fiunbm%2FiaiB2UqWxP6hN6x0joihCM4AXBG6hlsdXpNRYWp7sw2vUy%2FIsnFTULUyK4ohm1wlr%2B0JUdihVcoeO6ZlHDV8p%2BcFPGmZMcscWi%2FLCiFYbWV%2FpvWlcexfqBqdxDIDPuVK44DNLegDQR%2F3XLotqRfIChRN0oRGv1B9hacAaWHZPA2%2FeHKuZqJxxyAywNvZl7BcTMZ%2BydK3Y0nVCuo0ybjLM1ifJkWqwbhjAkq2fJRO3WC8yVOdisBKBmlLwjOBxBrafQchm5zPqwYPD5nbwxib7M7re5C7jgrnmxPBNIB8VAWjmw5pnMwdqr6%2BQrMgTIuW8ug4lQnnXSvCDaZvjnWmhiPz1LZa5nK8PGVPL13T1HEVIal9OBoZZufJKE%2FeL2l9iKdj2wv55mhRUUzZO%2FkFmkAEFlHPgQ%2BaHjSaYdCyYiz4c0X9IQo2vY4%2FaMFP93CqC3gp2h1mgZ5QNZ9WGV85MUxIs%2Flo0U7wzAH%2BD1aJtvF2hMQNpEEl0A3F3MJu83r4GOqUBkarr7lXTeMI17WqtOsX8%2FcP7wrbhblyNqxLVGJJ3X3wm9Hhn9pUnhu9gfyuw09CP9jYd4fPzTuhis0USTo8aX1BMi1esOBPIzjPnIaDvmvzhk3zDoRlcvhGgR75XS4peNzNeOxO1FmOtV1p7itQZ%2Fg660eRMEZ7k1jUtAEyVgghbuPweRK6JEjjG9tS7le96Hy%2BUwsNJ4lGGyHt8DIHaPLR64WP3&X-Amz-Signature=a86682679999e42b580eee48578463206684e307ceca9121efec61c21170bc3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XW6MYLE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI6EbO1eR9297Ok1ZVql%2FWcmN9JFXZA1zbn9Mc97ankAiBhMKbSkY7STV5mt7GeHy91TzSN7IpM%2BQX%2BK5cGm6LsWCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMJdiiPOL2a6YR7NsCKtwDV9jwuV15he9ef3jlz%2BDl%2F8CeHgVbpFQu9jhcYhwQGElm5PeXUYnecjuVl1ZEVS91wFIBom%2BvTYhAwEVFZ%2Fi%2B5HzWNOny0CVjRi6x4X%2BdndiioQFVanYLycRXJ2bAcZRYOhKbME6%2FaylWw2OVYIus8MkPHjt8GV2ay3bo7OazNyeQ%2FHoMDZR2fkeETsloYJlkMuv6jaMGJcqpyg9ThR6tDJjuOpx3kKivwYdWfosxT1BMsT0kfWxbBgLwO8XwB2lTXAo9%2FDxkW8Q9IlgTFKeae1IxnA5hxkiV1dCq5L8UfRdfs78L6kR98uTWX6z%2F6YvQFw0AKHxbZZE6l6hHF90abVgwgf%2B967aS5o0rqd6cob24%2FltIg5TAFMR%2BsF8TcUPwoDaylno9FF2Mscaqn%2BTGuRsiZKsWQ3bcgw60u61%2FGMMbylqqPKn1rzSDoHXEsUVXhqxOFyzIqcyIY5CtYN0jZJqdeLtB59wvWETamiFMaCBCAu%2FzDq49UoLVErA0nw39q8lfJH2yQBj87m6joVnkBHbvX4rvPCgabwXGjoUMVN0zYYhcU9aY5CybK1TaIGOh1iA1oHaqIuj43a%2Fk28v56NzQrmHeSstDzRn3qCekZ6qnI27mA9jyV%2Fi2aigw7rzevgY6pgGVQKDT0fqsUsJSc5xWHB81AS7LAdKUn2E5J9g3r2GRSPtWcZ6v%2FBzLMu2QxOOVehYgd3Q2UCAIrOE1dv1UijfADLne1N7zEo%2Bve83bK5eWPhFjww9WbBevRcWAW%2BwQRG%2FKXvBhzG1QgbPne8keNu21rmiQIdgqW399Ip8s%2FVHMLUNXDT5mT1wPeJ9ZYmJRN8NDJgErWjyM%2FwXsqX5Z9pf7Y3h2csr1&X-Amz-Signature=ae68e0ff5eda267eeeecef61c5c4cece3163d156d8ece8eb52937379ca1b2da3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KIYZSP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsZzGaseYl3TMRmRa6u7R5EdKyfw3LHEX62knz43K9SAiBnI03ucT8BZELAK5h6iuePidqDMaSnc1qfVf8P79yxzSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf4JRZdGAt%2BaSyUuKtwD7kZq41xv%2FU7Ju3r3XYkXYqRJ8FcC6qH0eXv0UGzNIWT1GpamUlyC7q%2FrOzSMWLPufF5LoAlIPFIOYAtmVq6UNgCHr00Ssv%2Fw0jUoE2WUaL61lQ2tTz%2FblPebiFw%2FhdcD%2B1yWtTRzQqkzoX3yHGiAUl%2F9oBM9B1IfIXvTPm%2FKH6ssnxYbnxohBeKk2OJSsrwc1xBQjuUU32N52nsJM3XKhs6eifqY0eN5h9YAb6543Y%2BiJa9YRxoDmYRTKyXhEf4fXM1TKDR2312ZBtfT5TRtdoIxn6%2FDErqtmKqsPk%2B92GyWakq%2F6sGueVXvSfz%2BiYUF5ISTNoamYomVzet%2FDwsK4uZ1jvcGMWyBFDTp8IUTvzkI8dMdVXhi65BxyE1B80Mv1BSlEn8WTTTdJWWa3c%2Bib1zHP3%2FRu5ApuguCiPVnWshITM4SrTmjaVSCLtznqa2iK1x0cAvQll0v89huv2l%2BLgDIezkr5TJ06%2BSa0PUnTmgY2FOi8PxzyeXSt3w7MGVTwuI3hyKDGGk80OMoQtGIfEKkhxfG4aKaCH8WSkG%2Bz6D3mqEZCEwgpbJ4cUBKDtp9pMq%2F7lSIoRFtY%2FZO%2FCCSBnWToNjdHu2ch90Wq%2Fb%2FWviyNkHdrVn0klCqvisworzevgY6pgEHCT3vgkr%2B%2FDNJSbmquky9j%2BstmjqSlTaqRKjrtBEaMFRKCJPj4uw531Cknn4jm3QiYf7CsbM85jG16gXMGOfUNJNDsQVxAHYRJth3avgks9b3auULWNVBECr1EmYbGwegb4eggixKyflHCucGipQrzbgqIkJsUj7Q%2BQVDISncS1XA52bNhkYJegmWCrNVLfTx5h8Uv%2F0o1tCmfZKjZXzlYNLY2C%2Fa&X-Amz-Signature=47569b98273eb668a289bc07121d8bf13562fbf27966576272253c45f2962da2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
