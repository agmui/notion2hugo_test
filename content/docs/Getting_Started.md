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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIR3BBT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDLbdpkyGyekpEDgofJJfxHzr3rl4ty%2FDyOBLBIK3wacQIhAM0bE5qcJeHbROyfCWGbyp84zok12rzeaRL3MluFNtWXKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzY0emkL8YDfzOixAq3APGQUG1aCijFZ31a%2F9qqKnoyeKjx5gH1EL%2BZQ%2FneBlEmMu1129%2FcC8OuwkCzVUMGQ5bPZ6qN6J8tPHHa%2FcWC%2BcPy6buso7OXeMz5I7I1NPVHULL%2FCcoSyEomFMQxLFv%2F4%2F8YVwxkHCpr41XDXpKYGCMKxbxU4dlyxKDbDK6Vye2Gs8I5JOoK%2Br6VJaK8FITouUFyoFlLCFsdZaItfWjYEqla8r2oRYsaYT7pOof1Qp5CCBGEJqScfsT7hz61KJ5tutW48%2FpnHv%2Fy7me8g4cVhJFvKS9JihmWKrgxFyK80Pjg2gxdspAaLQ12%2FNT%2B9zKoadY32nFyvik%2BEP3mXw%2F9zQffdEYfdfxaVA59XLCfQ%2Fj8zLpsRB85kymqOraFrqyovcMQV1TZNF7BzbDVF%2Fek3cXG9Iyt1Sg5cMvp3sE3NLpFzVdT7kw0dNANNFEKjyep3QE1mcj3sMkUKMTMQIopsK7sNzJz%2FB2Wy7S3f9HL%2B2Y6fTuuTVAkEu%2FvYtL4JElS4SbJtJHM%2BM%2FMvpDFK8X1%2F8KILHl1abNYtUuApgUuvJQO0BMh1nA6%2BafAKsQiZSQRdLI%2FqmITMK4FOYfOpVqxbuxkGJ3qfrapdZd11Y%2BnAdhjfP4YypYAHNdwsuPizD949HEBjqkAefXLCOp97fNjJWSdOWTck7WREboOGAvHCh55xBWQg%2FjCUHwVc0swYD0zb9YcRA0Y2OOjIPUSpGJYUMtOgupR4tn5Bmtwxw8wdEwOp3QITK4Bb6YQocyNtc4age8gkXOC1Ds1XCWH2Iau3nH6%2F8yEdL8Xc61y%2BvZtPfhVKeg3kj7kupy5S9bPxbgYgylyiJJgTNXuCzeI1QOCyMIdYTj5S5UJ2%2BU&X-Amz-Signature=e70ef57aca543ad88649f7c77bd212ed77f843a098aa431fc5c6ca6e45fb99b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIR3BBT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDLbdpkyGyekpEDgofJJfxHzr3rl4ty%2FDyOBLBIK3wacQIhAM0bE5qcJeHbROyfCWGbyp84zok12rzeaRL3MluFNtWXKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzY0emkL8YDfzOixAq3APGQUG1aCijFZ31a%2F9qqKnoyeKjx5gH1EL%2BZQ%2FneBlEmMu1129%2FcC8OuwkCzVUMGQ5bPZ6qN6J8tPHHa%2FcWC%2BcPy6buso7OXeMz5I7I1NPVHULL%2FCcoSyEomFMQxLFv%2F4%2F8YVwxkHCpr41XDXpKYGCMKxbxU4dlyxKDbDK6Vye2Gs8I5JOoK%2Br6VJaK8FITouUFyoFlLCFsdZaItfWjYEqla8r2oRYsaYT7pOof1Qp5CCBGEJqScfsT7hz61KJ5tutW48%2FpnHv%2Fy7me8g4cVhJFvKS9JihmWKrgxFyK80Pjg2gxdspAaLQ12%2FNT%2B9zKoadY32nFyvik%2BEP3mXw%2F9zQffdEYfdfxaVA59XLCfQ%2Fj8zLpsRB85kymqOraFrqyovcMQV1TZNF7BzbDVF%2Fek3cXG9Iyt1Sg5cMvp3sE3NLpFzVdT7kw0dNANNFEKjyep3QE1mcj3sMkUKMTMQIopsK7sNzJz%2FB2Wy7S3f9HL%2B2Y6fTuuTVAkEu%2FvYtL4JElS4SbJtJHM%2BM%2FMvpDFK8X1%2F8KILHl1abNYtUuApgUuvJQO0BMh1nA6%2BafAKsQiZSQRdLI%2FqmITMK4FOYfOpVqxbuxkGJ3qfrapdZd11Y%2BnAdhjfP4YypYAHNdwsuPizD949HEBjqkAefXLCOp97fNjJWSdOWTck7WREboOGAvHCh55xBWQg%2FjCUHwVc0swYD0zb9YcRA0Y2OOjIPUSpGJYUMtOgupR4tn5Bmtwxw8wdEwOp3QITK4Bb6YQocyNtc4age8gkXOC1Ds1XCWH2Iau3nH6%2F8yEdL8Xc61y%2BvZtPfhVKeg3kj7kupy5S9bPxbgYgylyiJJgTNXuCzeI1QOCyMIdYTj5S5UJ2%2BU&X-Amz-Signature=897d307bea0a33bb67639139588e969932e43ed91f4f31a06023271324e7d2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIR3BBT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDLbdpkyGyekpEDgofJJfxHzr3rl4ty%2FDyOBLBIK3wacQIhAM0bE5qcJeHbROyfCWGbyp84zok12rzeaRL3MluFNtWXKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzY0emkL8YDfzOixAq3APGQUG1aCijFZ31a%2F9qqKnoyeKjx5gH1EL%2BZQ%2FneBlEmMu1129%2FcC8OuwkCzVUMGQ5bPZ6qN6J8tPHHa%2FcWC%2BcPy6buso7OXeMz5I7I1NPVHULL%2FCcoSyEomFMQxLFv%2F4%2F8YVwxkHCpr41XDXpKYGCMKxbxU4dlyxKDbDK6Vye2Gs8I5JOoK%2Br6VJaK8FITouUFyoFlLCFsdZaItfWjYEqla8r2oRYsaYT7pOof1Qp5CCBGEJqScfsT7hz61KJ5tutW48%2FpnHv%2Fy7me8g4cVhJFvKS9JihmWKrgxFyK80Pjg2gxdspAaLQ12%2FNT%2B9zKoadY32nFyvik%2BEP3mXw%2F9zQffdEYfdfxaVA59XLCfQ%2Fj8zLpsRB85kymqOraFrqyovcMQV1TZNF7BzbDVF%2Fek3cXG9Iyt1Sg5cMvp3sE3NLpFzVdT7kw0dNANNFEKjyep3QE1mcj3sMkUKMTMQIopsK7sNzJz%2FB2Wy7S3f9HL%2B2Y6fTuuTVAkEu%2FvYtL4JElS4SbJtJHM%2BM%2FMvpDFK8X1%2F8KILHl1abNYtUuApgUuvJQO0BMh1nA6%2BafAKsQiZSQRdLI%2FqmITMK4FOYfOpVqxbuxkGJ3qfrapdZd11Y%2BnAdhjfP4YypYAHNdwsuPizD949HEBjqkAefXLCOp97fNjJWSdOWTck7WREboOGAvHCh55xBWQg%2FjCUHwVc0swYD0zb9YcRA0Y2OOjIPUSpGJYUMtOgupR4tn5Bmtwxw8wdEwOp3QITK4Bb6YQocyNtc4age8gkXOC1Ds1XCWH2Iau3nH6%2F8yEdL8Xc61y%2BvZtPfhVKeg3kj7kupy5S9bPxbgYgylyiJJgTNXuCzeI1QOCyMIdYTj5S5UJ2%2BU&X-Amz-Signature=e448b8a47f7f2e5913060911fcf45c9a5b3f3c628a3b7c54fb541b8403b9da03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDB2F5ZK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIE6SDKm6xhIEyH7AEYIzvO1mlRAY%2B28Yp%2B62IilWole5AiEAqUZyJXDLEz7GLp9t10zTgGXEPoX3KltsIYjrxxMRZQkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0equWq5OLBV2bAySrcA8clXtdkg%2BtBVV2JLAXzoFG3tFjoMIK42eWGZ%2Fk3kI76JuXyuCcmoXV8z2uHTw3S7RkSe13M%2BbtZGIoH61Ed3pnXPSJAwLfdiqSQa8C%2FGc%2BJKeJeHvtiI0zEalpzKXQxQnJS%2Bs5v6uvh8QC%2FXTiF1%2BeDcMMaLbb3WnuiSWTMDqN%2FAi%2FaTdRpWe9EY1Gnc48mZcNRbi13HcGXDV5xuedDsKbN0ROt795OGU89PeYFJLmkAP1RdNgc8rjCQbGjA%2BVnbHJOo7Y40nFj24Ne6tz1b99GvW6gDs3pLNdTKNugJd%2FFilvv42hpd%2FST%2FVbYeVFnej3%2BI%2FhXLkbNVa9o1xJWL6TTm8CxBbFeh2DEhwScXivHgvWf4lMKibOGrhLBGvUEyBmZMwF2FkDKx3nvo%2FIvB%2BTmbwj6CcRaMn6hSRbqmBztLxWCNnWr5lTvEtERvVFMJKIPTteIYPIeQX1VplGjPuhl8dninZsKFv4zoVLmlYaeYVdW8HUUAsXBeJZuOPVILOC60EPRcZmNjcGwm0T%2BwV81cgwkrpvIo06gyRrQGDsWmUaS4WzXf9em12JV3YVbBQnkiXNry074aaIMFGj0qff038xVT0xI070AKnzGVxmjNR22zupz%2ButTgxH0MPfj0cQGOqUBJeBy7DBCs2gqHKyRriz9HiZyz7jsZ%2Fg2nywCgnE7o57F7iYRM47qpDWwJfKbEAvbDleJFeQ50BPt0Ny9y8%2B1S%2BWHmx5r8W60yY9iN6VaQkuvFpPEs180odIMuWkN1nwwjMw3JtfnbKulTQZgZw4fxKAYohj9jGGX9t4upkmg4cBfWMs2dhRj5Lbi4Wu5iDR0roxNkT%2B9iyEMKKgwiNo4speR7lGL&X-Amz-Signature=aa020b83b27edf44287c53dd9989707e8ea690da0c98749facb5e51e9b4d95f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBB3VLRX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGiCBhZFVKMnfluv5drdPRLkJmMFWJ8o7g22MOXmjfBEAiAg17DV08JbcmhumIEZhChUw44wzwAZ0u8He%2B6Q8dDNSyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSyaHycrARTo2KArKtwDBAE4rBOxSWRfvf21yJlysmDNT6Z90EYn0%2FH0b8NotMMHh2rkM84Q9Vxcniy0L2CEXp0oAMR5cJ5IZxqPsVgfbcP60%2FjaLgOyYqx7WRQQWE6K96VlJh5HfgVqGrBV2MA%2BMGckwi4SFMD0qshq4bGfTC4hRk%2FxiTvxVEQqdmsYElhbMfBbce55zfRTTNzoyI%2B5iIFSXnMTm84vyhPYflUjwXN909ogn4hDSP7TgNXAJsGqop2kgoO1%2F%2BStR1jQ7%2Bfzlvaq1Ld2nUS%2Bfu99SyaZQImMBlEvc5YmcB93i%2F9rlDrwQEDzYMgevldgSLNKRb8QCqqk1F7Mf%2Bj85iGjXViHB%2BeVMqFE36iI5SEgzJ%2BWfAB2OgsiokGZ5%2B%2BBv9%2FpS8C31Kxb21XMvOroAlXb%2BV%2BxKKbFS1b7pQZ6bqVAIWKk6eI4gcGbaSu45LmR9OnjkOypMGj2e%2FoD0LxnYa0h3V2GCLHbWAdG6ByltwY9raga1E4AbxVGD2AfPjOsnziqnb82mMHX%2BxWCg12OMzbd9vF5bQXk7vgh%2B%2B%2BGgW1bRFILTDERziMjmcsfcs1yehfhdwwICyHrtD9lvxN7Vnw0U5cXZqXid1Ex3XuJmgzZliADFwAgv7YbKOKFpfMINIIw0%2BPRxAY6pgHJSCxtvT3lyDxSOLFwZiW4jYzJy5st51ALDYyf47K6AlKn%2F4SmsHYHHaSlj57W3XHRMQRwbEibbHkvHnUPMArO%2FJXDTduOz95APDULIPU%2FPuKa9mB%2Fw2u0b%2Bq3nJXaRXNgp5PHGifB4FxKMVD8C0RpUpJMx8QRutuYFFRA9hhI%2B%2FotHk2690aj%2BS2N1WpK0kEw64VskeLLdqQmoRhJWhqYG7%2FR3OWp&X-Amz-Signature=3bc9269468728d6831bed384caca1f45f4b81ee5391fc34823320d1555d26533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIR3BBT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDLbdpkyGyekpEDgofJJfxHzr3rl4ty%2FDyOBLBIK3wacQIhAM0bE5qcJeHbROyfCWGbyp84zok12rzeaRL3MluFNtWXKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzY0emkL8YDfzOixAq3APGQUG1aCijFZ31a%2F9qqKnoyeKjx5gH1EL%2BZQ%2FneBlEmMu1129%2FcC8OuwkCzVUMGQ5bPZ6qN6J8tPHHa%2FcWC%2BcPy6buso7OXeMz5I7I1NPVHULL%2FCcoSyEomFMQxLFv%2F4%2F8YVwxkHCpr41XDXpKYGCMKxbxU4dlyxKDbDK6Vye2Gs8I5JOoK%2Br6VJaK8FITouUFyoFlLCFsdZaItfWjYEqla8r2oRYsaYT7pOof1Qp5CCBGEJqScfsT7hz61KJ5tutW48%2FpnHv%2Fy7me8g4cVhJFvKS9JihmWKrgxFyK80Pjg2gxdspAaLQ12%2FNT%2B9zKoadY32nFyvik%2BEP3mXw%2F9zQffdEYfdfxaVA59XLCfQ%2Fj8zLpsRB85kymqOraFrqyovcMQV1TZNF7BzbDVF%2Fek3cXG9Iyt1Sg5cMvp3sE3NLpFzVdT7kw0dNANNFEKjyep3QE1mcj3sMkUKMTMQIopsK7sNzJz%2FB2Wy7S3f9HL%2B2Y6fTuuTVAkEu%2FvYtL4JElS4SbJtJHM%2BM%2FMvpDFK8X1%2F8KILHl1abNYtUuApgUuvJQO0BMh1nA6%2BafAKsQiZSQRdLI%2FqmITMK4FOYfOpVqxbuxkGJ3qfrapdZd11Y%2BnAdhjfP4YypYAHNdwsuPizD949HEBjqkAefXLCOp97fNjJWSdOWTck7WREboOGAvHCh55xBWQg%2FjCUHwVc0swYD0zb9YcRA0Y2OOjIPUSpGJYUMtOgupR4tn5Bmtwxw8wdEwOp3QITK4Bb6YQocyNtc4age8gkXOC1Ds1XCWH2Iau3nH6%2F8yEdL8Xc61y%2BvZtPfhVKeg3kj7kupy5S9bPxbgYgylyiJJgTNXuCzeI1QOCyMIdYTj5S5UJ2%2BU&X-Amz-Signature=4cff291ca46a0ef9c561e5ff3dcc2b50a1e3b8dd8d5fd9835b1b2ae1610005b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
