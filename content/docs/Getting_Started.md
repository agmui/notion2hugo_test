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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSGQSMJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b1mfLR5LjrBEMbOlDO8SWLwH0ppSlId9stZzLrU2AwIgS%2FBsqEah%2FEvPcixMfEemZBR7cYS4bGADYmrrl7wKY0Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGk%2BMQbyRbepGozVcSrcA2oPYW6o5JXl%2FMWbAe%2BAnY%2BA8c3jPo4HvW9UV%2BbsT30gwlsd1JcvHybd6ZdCGiL9Bngdk%2Ff7TmhThtuQkL8XGPedi%2Flcif6ocC8gTygSfnJXfGkRVhF6Pj3goMAlsVITjt9fdEYpJZfE0IR6VrHkBQUW95Lyz1nIZfgq%2BAA%2FZwKFSYxuHrO7ypp7x6HDMXepgiYDtdbUYzfC2W8W95kBmOJ7lZhy%2BbeE4R3colnnGEXKDFC7xZu6gTJlF%2BnYX%2BIlq19HQR2ydyKYTupmoksjb2KMPUVQ%2B3W88WR1i9aVNsOpzWTLYGetTWDTKpianDIYDFfOhcH0POm82yIN5ZBYbfDVIz%2FpSAPvn7u6AobiIj4%2BaDnswkDBBySBjIDtAoPZW27APjLl7hRUJPwcunZPL95gDnYS5xFQQkLXKhD7zgf7ZA%2FtpKPN3momIAjwZ%2B5uP9zVfRYV8BNZLJSwllpA8GzpaM%2BcZHTUaOE8X1ZY09ZK2E1EhKhXbXHKceMmd7X6xr%2BdbCAazTNTrRqOOGdRUBmhcBlqwjxQGyUkNor9j9hpSQkFrTqNPZmJrKOHH9IG%2FNi9rTr148PmzV5iZ7ZyOZqL%2BIoGfQf%2B03eX5ndwh66cSGU24rGL0lhBKLbPMP7h1L4GOqUBUs%2Bxhh%2FXSbMv7fcReTnS6%2F7UPd2o4i4jIorV82jzCK1DR7QfXsORbdZM%2F%2B2d51OP2I%2FG3vpdcM0uXAHe05U49B2hBQWUnPKjKdRvBA2ulwzvd1ZL9j7wK60QDkzNb1CBzPZVpQXwEl0gcy3mpNRQP6ZTSBZKzj0cwZWAhSpdNBEQ17WmqqGG0aZf41zxIOZ6Pz%2Bu7vcuQDngDKm%2F6Bbm9zx7Ttyu&X-Amz-Signature=5c233c3bdcc8a1422b5d8154f0d1765bcf978c6d59a5eee7c7879465b7f5c57b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSGQSMJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b1mfLR5LjrBEMbOlDO8SWLwH0ppSlId9stZzLrU2AwIgS%2FBsqEah%2FEvPcixMfEemZBR7cYS4bGADYmrrl7wKY0Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGk%2BMQbyRbepGozVcSrcA2oPYW6o5JXl%2FMWbAe%2BAnY%2BA8c3jPo4HvW9UV%2BbsT30gwlsd1JcvHybd6ZdCGiL9Bngdk%2Ff7TmhThtuQkL8XGPedi%2Flcif6ocC8gTygSfnJXfGkRVhF6Pj3goMAlsVITjt9fdEYpJZfE0IR6VrHkBQUW95Lyz1nIZfgq%2BAA%2FZwKFSYxuHrO7ypp7x6HDMXepgiYDtdbUYzfC2W8W95kBmOJ7lZhy%2BbeE4R3colnnGEXKDFC7xZu6gTJlF%2BnYX%2BIlq19HQR2ydyKYTupmoksjb2KMPUVQ%2B3W88WR1i9aVNsOpzWTLYGetTWDTKpianDIYDFfOhcH0POm82yIN5ZBYbfDVIz%2FpSAPvn7u6AobiIj4%2BaDnswkDBBySBjIDtAoPZW27APjLl7hRUJPwcunZPL95gDnYS5xFQQkLXKhD7zgf7ZA%2FtpKPN3momIAjwZ%2B5uP9zVfRYV8BNZLJSwllpA8GzpaM%2BcZHTUaOE8X1ZY09ZK2E1EhKhXbXHKceMmd7X6xr%2BdbCAazTNTrRqOOGdRUBmhcBlqwjxQGyUkNor9j9hpSQkFrTqNPZmJrKOHH9IG%2FNi9rTr148PmzV5iZ7ZyOZqL%2BIoGfQf%2B03eX5ndwh66cSGU24rGL0lhBKLbPMP7h1L4GOqUBUs%2Bxhh%2FXSbMv7fcReTnS6%2F7UPd2o4i4jIorV82jzCK1DR7QfXsORbdZM%2F%2B2d51OP2I%2FG3vpdcM0uXAHe05U49B2hBQWUnPKjKdRvBA2ulwzvd1ZL9j7wK60QDkzNb1CBzPZVpQXwEl0gcy3mpNRQP6ZTSBZKzj0cwZWAhSpdNBEQ17WmqqGG0aZf41zxIOZ6Pz%2Bu7vcuQDngDKm%2F6Bbm9zx7Ttyu&X-Amz-Signature=208516fd6eb2ac5670fc898d40a18f9f32eae113d297fe0080cf931ed1eb3002&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNYMS5F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD51Tf3bwrFT9aOVEq%2BdGy%2F9sjA%2BPkilZCe8wzReDfrWwIgX%2FzG0rHr4PCwezGAnWXXawvOCHJVyWUjY339G6gIVb0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGc%2FffsT5oK830l9MCrcAydMWieBfthqL9rHD5RFkTL97XCBphKOo3Ki1C7RM0mO1YghGnKqKcoqDKkh3eEWePgwPwVFJyRnRqLWYFtpvSti%2BffZCduKpNoNlOvdjhtbm144a04shpbOE6IjNmVBjmNjP6G2ww07grwHGpKuIlZeHfHDZKtaBRq%2Fx0lOhLzOhjNbgYNvQL3AdwJWLv7JFCENcDfp6pt0Zsdcw0ljAMyJTqTE6m8Ce42g9ZSxZnsXfqCq%2BeiB0BCMDSxix0U745foJsmQaOBvpRmjl7ZajuIst6RAoBYUetvB4gESuFBXybjvufl94TYyH3wJ300unlzGH3fxVLOi0MPQdNsScVTy4cnSjJpD9NIU6CK90nRVFOxFTir%2FjazR5huk5%2B7fi5PmqAYPhLwOFgN2i0a2U8e%2Fq5LDVpXCbrt4NL7Ys%2B%2FOUI7vFGf79ehv2o%2BEC4lXXgqlXBwBqkbOAZh10E%2BcQAw9Jfl3omBchOaxzTRtOo5LXWhdH7GIc1fjZ%2BsqBTfTohUQUdjyC1SHDI0T8pbCiyYqL8P5Y9rpLtz%2BrQcWHv0plOiyX0NPRjwvYswFFHOmKMXsZzVpsNJBaDvQF0Cn3D7BzpK1HkTwdWS9UNsqjjv73DVft9rGositU9AGMNXh1L4GOqUBsb8DqRKc4vMbWQqkHozEXVk8qFb%2Fltj0kpqCFHAB5qaNa4%2B%2BID9D%2BzkscCsMzfwEoMHJoK8qAMq%2B1uS4RUNct9Ff5xs%2BY24ZaUo10GUsrsuhHvvIeAKZyzqaua4dbgpcVjvAhuwNhEH28mqFjEO%2BxIJsuQuP25fJ3J%2B4A3smSgeg4V3LbWnv3kiiAqUvpEt3Uia7kJPAfqXBgjW158Q15%2B%2F%2B7tzl&X-Amz-Signature=56c9548c1ee61c7c0f7ee6e14ebebd956063f3761a47f9c67ae97a89651ebb9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CNP7JL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmT1HDkT0J3ow8lPK5XECKfzRCCf76hUX2j%2BiFJwu%2BGAIhAM%2FHrxpT7F54Xxa%2BuzK1skr5i0z2YVD%2Bp2TMRsby7Z6hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy7TqPux2Q5Hd5etzUq3AMMnO2AK15k29JNmfblUArKTR37fq7o%2Buw%2FGP952wPM4lTu2leJCDfNk1ep7IUrRdK8STORC2GqQvJiyZy2KWqKovBVZLkZRaegcpYaCwSkI2A30aTuloxUHhPcQ4qmFy8IL05jDt3XntkSuwcueyMMuNGG6rWZLOditfKsHgCe54DZXPd87VZfuPShEVnK5gdWQOB3JlTx901qWwzueMXSQ1fNbdhUFmkCj5Q5ufyCt5h0UE0h4PlB5Jxon4MwP15alyXwkvNhXmXReIZnjZXTgUV3KR9oI%2Fl2HTTa3LGm0uNM%2FA%2BljQlBFB6Jl0QCtvl27FP60oc3MMzXa1IU3LIPsx5aPhXpMfUGR2TanJC87fnpFFQVUjRx25Vj5vqQGLBI0eORxTLvuvvMj1ivPPFx5iUj7r6vea1Asylulz7xA90YgPonaJ5IVkO%2B50fcQ3TwX1MZ9ZrCf7yzCt13eDVZ9kIAESuwf22eARu%2Bw6ohLK83pEx3iGAI%2FnCzfihz0DDZq95ueen9igWey2NWPucDrRbZoI3IpnYH26AGs2hf9%2B2%2Fie%2Bi9ceMhzsBHHJXczqZ1ZwBcp0PEKdBNJ2kcv9saT%2F7hE2BfI8OSf%2BY6aJbiQKrlaH%2BhOJLjqJ11DC14tS%2BBjqkAcaq%2B6Olq5W%2BwyD9TmacIqlckz3mtpgaA7ILG20uqJ1LeFYNAynL66jNsXnsZi6OAGGrekTKns1FbQnAam81G2sEdKGL4BINqC%2Fc5PZxV27RJ%2FtnaPyP2Hq%2BLlqg6M%2Bq5FWHxpkeYzpS%2BeOrZDiaDAYLRa2yPnCcW%2F3eBeejU0ScoQ6EKpEMSYuAd52nJyvkrGQIMxxnrDUjXtRp4V8eQy9WdFbS&X-Amz-Signature=55ea5de6562613eac41f754fc0597fe49fe1c3a0714a2fe579c3df69f05cb81a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSGQSMJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b1mfLR5LjrBEMbOlDO8SWLwH0ppSlId9stZzLrU2AwIgS%2FBsqEah%2FEvPcixMfEemZBR7cYS4bGADYmrrl7wKY0Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGk%2BMQbyRbepGozVcSrcA2oPYW6o5JXl%2FMWbAe%2BAnY%2BA8c3jPo4HvW9UV%2BbsT30gwlsd1JcvHybd6ZdCGiL9Bngdk%2Ff7TmhThtuQkL8XGPedi%2Flcif6ocC8gTygSfnJXfGkRVhF6Pj3goMAlsVITjt9fdEYpJZfE0IR6VrHkBQUW95Lyz1nIZfgq%2BAA%2FZwKFSYxuHrO7ypp7x6HDMXepgiYDtdbUYzfC2W8W95kBmOJ7lZhy%2BbeE4R3colnnGEXKDFC7xZu6gTJlF%2BnYX%2BIlq19HQR2ydyKYTupmoksjb2KMPUVQ%2B3W88WR1i9aVNsOpzWTLYGetTWDTKpianDIYDFfOhcH0POm82yIN5ZBYbfDVIz%2FpSAPvn7u6AobiIj4%2BaDnswkDBBySBjIDtAoPZW27APjLl7hRUJPwcunZPL95gDnYS5xFQQkLXKhD7zgf7ZA%2FtpKPN3momIAjwZ%2B5uP9zVfRYV8BNZLJSwllpA8GzpaM%2BcZHTUaOE8X1ZY09ZK2E1EhKhXbXHKceMmd7X6xr%2BdbCAazTNTrRqOOGdRUBmhcBlqwjxQGyUkNor9j9hpSQkFrTqNPZmJrKOHH9IG%2FNi9rTr148PmzV5iZ7ZyOZqL%2BIoGfQf%2B03eX5ndwh66cSGU24rGL0lhBKLbPMP7h1L4GOqUBUs%2Bxhh%2FXSbMv7fcReTnS6%2F7UPd2o4i4jIorV82jzCK1DR7QfXsORbdZM%2F%2B2d51OP2I%2FG3vpdcM0uXAHe05U49B2hBQWUnPKjKdRvBA2ulwzvd1ZL9j7wK60QDkzNb1CBzPZVpQXwEl0gcy3mpNRQP6ZTSBZKzj0cwZWAhSpdNBEQ17WmqqGG0aZf41zxIOZ6Pz%2Bu7vcuQDngDKm%2F6Bbm9zx7Ttyu&X-Amz-Signature=fcd80d15131e3a522fcfd605cb63dc9445011d9eff581712f35cd8b3b8c2d7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
