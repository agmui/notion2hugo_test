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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKKYZKX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF6PwZ4WLjyRWIsTGDVpYLOs12%2BsjH9yiG52u2tO6rftAiEAri%2BonZrg6C1TO1FioZoRPaqysB4iQuAmP%2FCsH84pq4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJsXgxDImzRnaaof8ircAwOy7BcNo7RIsfr5zDZJGp%2FHHhTGpN%2B9nYhl6e68ncpOQ4EwSUcg0c3fvr6u1reIILG6yye6hHfGhRPIdBs1h847kKRjWQZHWVWSUFi%2F9Q2hPMtmuNkCWVCsZNZn9SQt4Mq8vc8SDiaNs8NFmBhhN%2Blnumo%2BsfrZC1yJR1dbBQkW7SdKM98IibJAy6f9V9bWfcCyHpDKY8fR%2BHD7t%2BDPKpmo3bkKyhbvNHdvo4fx36J0gNhFA%2F2%2B%2FmsF3N3e0vwqokq306L%2Bl%2F5wxURPG6hj0cUgZRA657iSCFtgeLWDvOMEnXix1itW0vy%2FZBCZRygYT9v5FG2VhfnJr7HWHtANClwpkC9qMUnSgrLdpESY6N6ozR1TcKa5MRajjKW10mbwmMiqmsDZ79HRRV%2Fxn9JGyWtL%2FTo6RenyMoz5tAUlCLIoqh6D1Q73dcn6WDnBJa8owEvm%2Biw%2BJP38T21XnIOL2LRHIZSXG7BnjhXiALyQhky92ozfM6DGNMp1q7W0fnAZPump2bT1mRBWhiM%2FypfAj6KexKt3W3IHf5bIwgBvkPgy11x47UPpov%2BBEsCVmH5syNMwpuSJ521zMe%2FO2wVKCZeBLQ7Q9RW1EEfwUUl70LCwuzxWoB3wq92kVKhVMPiik8EGOqUBf7P4sjfgeYaTiNhd3ebaPAQVpbxWHg8n2owiYAWiI%2F6nGhhfmgcoVe55gw1ujuhnaKG7VF1FacP5P1LZsIAlOQ1yE%2B9LHiPnjLF%2FN%2FcQ18OoRiBRCU4UHTtSBdRKxvd8SW6gQRhqoBZweVFN9ywQV7gcnVf3gt5iU%2FssGsyW6ZrP9F%2B6fBBtoyhMYQ%2FVM7p070diOsb9Mg3jBhDVW5MSMT7DAWJK&X-Amz-Signature=9741272bdb6845dcb0f143a2d4f6c62e9bbc3c773db8b5564abcd5d0a373eab3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKKYZKX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF6PwZ4WLjyRWIsTGDVpYLOs12%2BsjH9yiG52u2tO6rftAiEAri%2BonZrg6C1TO1FioZoRPaqysB4iQuAmP%2FCsH84pq4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJsXgxDImzRnaaof8ircAwOy7BcNo7RIsfr5zDZJGp%2FHHhTGpN%2B9nYhl6e68ncpOQ4EwSUcg0c3fvr6u1reIILG6yye6hHfGhRPIdBs1h847kKRjWQZHWVWSUFi%2F9Q2hPMtmuNkCWVCsZNZn9SQt4Mq8vc8SDiaNs8NFmBhhN%2Blnumo%2BsfrZC1yJR1dbBQkW7SdKM98IibJAy6f9V9bWfcCyHpDKY8fR%2BHD7t%2BDPKpmo3bkKyhbvNHdvo4fx36J0gNhFA%2F2%2B%2FmsF3N3e0vwqokq306L%2Bl%2F5wxURPG6hj0cUgZRA657iSCFtgeLWDvOMEnXix1itW0vy%2FZBCZRygYT9v5FG2VhfnJr7HWHtANClwpkC9qMUnSgrLdpESY6N6ozR1TcKa5MRajjKW10mbwmMiqmsDZ79HRRV%2Fxn9JGyWtL%2FTo6RenyMoz5tAUlCLIoqh6D1Q73dcn6WDnBJa8owEvm%2Biw%2BJP38T21XnIOL2LRHIZSXG7BnjhXiALyQhky92ozfM6DGNMp1q7W0fnAZPump2bT1mRBWhiM%2FypfAj6KexKt3W3IHf5bIwgBvkPgy11x47UPpov%2BBEsCVmH5syNMwpuSJ521zMe%2FO2wVKCZeBLQ7Q9RW1EEfwUUl70LCwuzxWoB3wq92kVKhVMPiik8EGOqUBf7P4sjfgeYaTiNhd3ebaPAQVpbxWHg8n2owiYAWiI%2F6nGhhfmgcoVe55gw1ujuhnaKG7VF1FacP5P1LZsIAlOQ1yE%2B9LHiPnjLF%2FN%2FcQ18OoRiBRCU4UHTtSBdRKxvd8SW6gQRhqoBZweVFN9ywQV7gcnVf3gt5iU%2FssGsyW6ZrP9F%2B6fBBtoyhMYQ%2FVM7p070diOsb9Mg3jBhDVW5MSMT7DAWJK&X-Amz-Signature=316644d9a3e26c41cb2f9dc87b4b7178f96a6d82eb55cb999135e6277a207f79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKKYZKX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF6PwZ4WLjyRWIsTGDVpYLOs12%2BsjH9yiG52u2tO6rftAiEAri%2BonZrg6C1TO1FioZoRPaqysB4iQuAmP%2FCsH84pq4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJsXgxDImzRnaaof8ircAwOy7BcNo7RIsfr5zDZJGp%2FHHhTGpN%2B9nYhl6e68ncpOQ4EwSUcg0c3fvr6u1reIILG6yye6hHfGhRPIdBs1h847kKRjWQZHWVWSUFi%2F9Q2hPMtmuNkCWVCsZNZn9SQt4Mq8vc8SDiaNs8NFmBhhN%2Blnumo%2BsfrZC1yJR1dbBQkW7SdKM98IibJAy6f9V9bWfcCyHpDKY8fR%2BHD7t%2BDPKpmo3bkKyhbvNHdvo4fx36J0gNhFA%2F2%2B%2FmsF3N3e0vwqokq306L%2Bl%2F5wxURPG6hj0cUgZRA657iSCFtgeLWDvOMEnXix1itW0vy%2FZBCZRygYT9v5FG2VhfnJr7HWHtANClwpkC9qMUnSgrLdpESY6N6ozR1TcKa5MRajjKW10mbwmMiqmsDZ79HRRV%2Fxn9JGyWtL%2FTo6RenyMoz5tAUlCLIoqh6D1Q73dcn6WDnBJa8owEvm%2Biw%2BJP38T21XnIOL2LRHIZSXG7BnjhXiALyQhky92ozfM6DGNMp1q7W0fnAZPump2bT1mRBWhiM%2FypfAj6KexKt3W3IHf5bIwgBvkPgy11x47UPpov%2BBEsCVmH5syNMwpuSJ521zMe%2FO2wVKCZeBLQ7Q9RW1EEfwUUl70LCwuzxWoB3wq92kVKhVMPiik8EGOqUBf7P4sjfgeYaTiNhd3ebaPAQVpbxWHg8n2owiYAWiI%2F6nGhhfmgcoVe55gw1ujuhnaKG7VF1FacP5P1LZsIAlOQ1yE%2B9LHiPnjLF%2FN%2FcQ18OoRiBRCU4UHTtSBdRKxvd8SW6gQRhqoBZweVFN9ywQV7gcnVf3gt5iU%2FssGsyW6ZrP9F%2B6fBBtoyhMYQ%2FVM7p070diOsb9Mg3jBhDVW5MSMT7DAWJK&X-Amz-Signature=2c9d52c14628150095806eaf004b73ebf9513020c84c58dd60bbb3724934bd1f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIZDFPT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBbCQ7fwNGzbnIzFaazhcoQ6bPdBUqezW%2FZ%2Bynh5nRcVAiEA3g5p3DFg1FJBhGkFsEN42J%2FPElOYCEW23yo3mM2NsiAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMR4cFdIh6%2Fn0cIe2CrcAxaXlb6HHEsOdKsvypGA21nlwGvPahDIawJNEryBcAycGPMx8NujHnyaEVx9C7phCCxszwygvsKhWispLt3KRKqB5YCws1pInOPZfaGpoH0Wrpb3NY7JcIXJoggiMYD1JutLD3YqN2xghVGPbgYTzaAg0gadhj2yP%2F1ETkchyKUAeYvXtYmgHvukGpZrGAWGW0u9pdx7ZyTCYufjaLe485g98X0pnvGdshmi3M9BQcC4IXiqdcUAVGr4V5UJo90DRjHVkOjMdAdEwlQn3rQvvc8JfhHhkeAehY7n4%2F9IP%2B0J9TnFCfmQXcWXqE3BRKX0w%2BCEzH%2FUKWlTQEr7DwdTvGCjaAWKclsCa8y4WniwCPhzNneJHIRC3ANl4n4LzJw5Qi3yMk2PZNWSnuC9QFIxS5S04o5FCbj5sK3JScahMgcUiNRzcD3EJRmyqH2ttUh9wHZNPPTv8eWXPaDjO3uRrTX52W%2FMjEeiqHkg0HqmSpu%2BrFKA%2BRMPKQjUQSKUrL5RT39salRrFwJ27eO13Ko5QpqNyqH1etYK3lEAlRCJVqBMrPokitdVHFVMVfMRXTHcOoUS6wpx3NF%2B6ZXe7ttL6mRRBCt%2Bw7sdA4dgfbwcdTa%2FrZU9av5cTi5TcfT0MPyik8EGOqUB3efdQu3bMs478Xrk4BYXwX1a3Ulrkvk0NOk0OAoTXevVN6PbU1t7Ic5MAFk3AJw2x3jmWBOX0gMqz%2FQGpBgEw7zkpses9YTTysgj5ZTQuvIl%2FUQlgwZU%2BlTYuZQSnbv8DBofEiQzpSYBuqdPh8c2MiLjXX5xaOXKG2tmIL9tPkr71BR%2Fev7OXIeqNg%2BzgRK4m7MzI87q7DsgAQtsrhhdPEfuWvy1&X-Amz-Signature=e5b961bb5cb2c5fff967ca70205528eb7b2e7689e6bacb8e31a319cc5645f754&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMXKGSV%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICve93c46q0nWIS47QVechXCdA3ZCjTJ234y%2BpP2ipQmAiAd8b%2FZ7RBNQgrhZxdeMjC1BmR1EGtYmfcWgOypi9EAsyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBihRJl4mbCxbAxthKtwDPC6L%2F1V0BOLMOzFEzHWuAGMMKJaHvv%2Fh95Fqr8%2Bp7sSg43SooSAtcYWfXRnXUv5Ws86cmcMK38wrIqLKfGXgKmBWt%2Bn47nz2YF4NTpaaG7TIq5RromSN2RGUSd19%2B15WuBnTIAnEq456yyfzwAWaE4bxRTMKFt1IPIkSj9FiEwipnyYhtVO%2BaS6f3LIfdGg3YScKkYtfMDw%2BvVZN6Jirl2IT99iB4mu6xD9zGwmOF93b5ZiY7JptqhA4JEETfIJ3TlpHoFlhqrBIPUG9x%2BqR4JUT4tjJ5BFZrit3BR2EX6ogAYdRb%2FwPNdhk%2BWqjpXlx%2FfpviHCmmTswDLxIePernPw6r0%2FsA9lEL6D3liZS0CxrlMUHiJrzdjMhsoJLBlt%2BPGwL7wlR6566ImISAKjItu7QFr6OUe1kDZgQFE3XMQl5MmbxXLu%2B5l5OLyzWnP%2FZZZgpToWPryDXrIDe2NVM9vY2tMDrSj3LNLETrY3XT5BaCHNKlbAc8G%2BHjtS1uip3XBPx4xUPp23iu%2BjVz9B14x2dA7%2Fhj9UDgdci7u79rs7v4rUVyK07sqJOcVgFKhNCq%2BWmxvYFAADcCbSjKrgGZMJAMetPL24xW4XQ4%2FwO7u4FTvFvvRbh%2BGr37X8wlqOTwQY6pgF7TaSy5kHghWMPprBFjHhDlZ3%2FOpKv0DhsHfmlnIEObcUEMjIHyT5Ir8vsjeU1MJxma1VJzqKt%2BdfuksQ0MMfDRk8bzgOIEPwkHroauo0wyQcszayMh2YHZRFQ5BepWjz09SQbrqFrPwOo%2Bq0XeK9wTIRiytRb310jhaYcMqCSPuHHBtTDUDA%2BuggVU2%2FYINcm2ZUiuASp5YvjoHuZUXPrkCba3iwM&X-Amz-Signature=dc9cd4de06b837b13caac90d7fe97587f585d1955841c1a1b068dccfe7e66505&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKKYZKX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF6PwZ4WLjyRWIsTGDVpYLOs12%2BsjH9yiG52u2tO6rftAiEAri%2BonZrg6C1TO1FioZoRPaqysB4iQuAmP%2FCsH84pq4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJsXgxDImzRnaaof8ircAwOy7BcNo7RIsfr5zDZJGp%2FHHhTGpN%2B9nYhl6e68ncpOQ4EwSUcg0c3fvr6u1reIILG6yye6hHfGhRPIdBs1h847kKRjWQZHWVWSUFi%2F9Q2hPMtmuNkCWVCsZNZn9SQt4Mq8vc8SDiaNs8NFmBhhN%2Blnumo%2BsfrZC1yJR1dbBQkW7SdKM98IibJAy6f9V9bWfcCyHpDKY8fR%2BHD7t%2BDPKpmo3bkKyhbvNHdvo4fx36J0gNhFA%2F2%2B%2FmsF3N3e0vwqokq306L%2Bl%2F5wxURPG6hj0cUgZRA657iSCFtgeLWDvOMEnXix1itW0vy%2FZBCZRygYT9v5FG2VhfnJr7HWHtANClwpkC9qMUnSgrLdpESY6N6ozR1TcKa5MRajjKW10mbwmMiqmsDZ79HRRV%2Fxn9JGyWtL%2FTo6RenyMoz5tAUlCLIoqh6D1Q73dcn6WDnBJa8owEvm%2Biw%2BJP38T21XnIOL2LRHIZSXG7BnjhXiALyQhky92ozfM6DGNMp1q7W0fnAZPump2bT1mRBWhiM%2FypfAj6KexKt3W3IHf5bIwgBvkPgy11x47UPpov%2BBEsCVmH5syNMwpuSJ521zMe%2FO2wVKCZeBLQ7Q9RW1EEfwUUl70LCwuzxWoB3wq92kVKhVMPiik8EGOqUBf7P4sjfgeYaTiNhd3ebaPAQVpbxWHg8n2owiYAWiI%2F6nGhhfmgcoVe55gw1ujuhnaKG7VF1FacP5P1LZsIAlOQ1yE%2B9LHiPnjLF%2FN%2FcQ18OoRiBRCU4UHTtSBdRKxvd8SW6gQRhqoBZweVFN9ywQV7gcnVf3gt5iU%2FssGsyW6ZrP9F%2B6fBBtoyhMYQ%2FVM7p070diOsb9Mg3jBhDVW5MSMT7DAWJK&X-Amz-Signature=2f4f951ef6d1afecaddb2d96aa48323e7ba87b992af131c27db5c78c110a2f95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
