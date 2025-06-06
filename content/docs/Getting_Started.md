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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYEHPJR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxTimPWpJMwpMiatQoN9XxpNK2EnCCxtXGl0qQsZuDQIgf8auYbTEnmV%2B7GR5TbTwHvYwW4l9yalJ5Lx52wIGhLIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDB3cjunyn%2FG%2FuGDfHCrcAw2B%2FiVVQkJ4j6oS64%2FHL9ura1uAOQr5kt1ZgKUTpWrGt5D5Fds%2BBkaqfw2rZjqkrHa3TKKqlX8anmg23DgxeblxwdCHi1aqPNj%2BWky6G1QreGF5KrdOY24QvRkDRQCoRPhlviSNmjHIuqRfRgfNk1zDqGBDJbkaSuG76uSZL%2BeIaYxK1KunZPyByE9btfbQqvLXpPbhENPgOOGTvoinZFXtAaM7memo3uSB1jxoE%2Bf7pkCHCrSGZNYUjNJQC68b153%2FBfUYMWC3nELH%2Fo771mAmhpJ6VW7xghb1Glo8v%2FFjVgrwcp3h1Z5mdifugxBvVeXhbPErFJbUSru0TnCQFx0mm13ptaGFA829%2FypLvC7JXhSOLYfpECP%2F1Ms15rmNvt%2FVUzlQdLdc4%2F6Py0fBptS0U3yvexdEprRVpfd0xko%2FWfQObTOrtVxSnt3I%2FoLIslnJ1gZYFygagVZIltwZJJGt8cPc362thTcL%2FbViSBia0Y1UnIPTRLAvoYjhkbCbF2hDeeIhNaoSNKz8oNWeNkIp0ERMob5g5oWfdN%2FoigmZZVz92UEitA1Ttp3I1ptklwabQngoIYoMaAjx4H5Ag9G9oYhKN8pxjXyN3ytnHcFJE9Z1uK0ze8Zp2ia2MJiSjcIGOqUBQE%2FQ8pQUJjDDJMzZtOtTiNtSYGs1pMZvwPPg4VVHJiKbfej2JXshRNCnGnpfkm4f9kcFDGMxnj9Bp47llmr6NSYfJ8jPNbDogSn6alaOOilnFSBrdlaUO3rChP87F9M0cjpHGD4mBHr3WayanbgEag85c%2B0vAAjDOpfPdo6o8J3DAU7PncQeXAlzZe9kk3C0wRBStR4%2B%2BWsErFyHHJdWWZYLcGvB&X-Amz-Signature=cfcf8dfc94424e6d775be03c2fcd70c5b929a920255176e195f41f5cec8a14c4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYEHPJR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxTimPWpJMwpMiatQoN9XxpNK2EnCCxtXGl0qQsZuDQIgf8auYbTEnmV%2B7GR5TbTwHvYwW4l9yalJ5Lx52wIGhLIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDB3cjunyn%2FG%2FuGDfHCrcAw2B%2FiVVQkJ4j6oS64%2FHL9ura1uAOQr5kt1ZgKUTpWrGt5D5Fds%2BBkaqfw2rZjqkrHa3TKKqlX8anmg23DgxeblxwdCHi1aqPNj%2BWky6G1QreGF5KrdOY24QvRkDRQCoRPhlviSNmjHIuqRfRgfNk1zDqGBDJbkaSuG76uSZL%2BeIaYxK1KunZPyByE9btfbQqvLXpPbhENPgOOGTvoinZFXtAaM7memo3uSB1jxoE%2Bf7pkCHCrSGZNYUjNJQC68b153%2FBfUYMWC3nELH%2Fo771mAmhpJ6VW7xghb1Glo8v%2FFjVgrwcp3h1Z5mdifugxBvVeXhbPErFJbUSru0TnCQFx0mm13ptaGFA829%2FypLvC7JXhSOLYfpECP%2F1Ms15rmNvt%2FVUzlQdLdc4%2F6Py0fBptS0U3yvexdEprRVpfd0xko%2FWfQObTOrtVxSnt3I%2FoLIslnJ1gZYFygagVZIltwZJJGt8cPc362thTcL%2FbViSBia0Y1UnIPTRLAvoYjhkbCbF2hDeeIhNaoSNKz8oNWeNkIp0ERMob5g5oWfdN%2FoigmZZVz92UEitA1Ttp3I1ptklwabQngoIYoMaAjx4H5Ag9G9oYhKN8pxjXyN3ytnHcFJE9Z1uK0ze8Zp2ia2MJiSjcIGOqUBQE%2FQ8pQUJjDDJMzZtOtTiNtSYGs1pMZvwPPg4VVHJiKbfej2JXshRNCnGnpfkm4f9kcFDGMxnj9Bp47llmr6NSYfJ8jPNbDogSn6alaOOilnFSBrdlaUO3rChP87F9M0cjpHGD4mBHr3WayanbgEag85c%2B0vAAjDOpfPdo6o8J3DAU7PncQeXAlzZe9kk3C0wRBStR4%2B%2BWsErFyHHJdWWZYLcGvB&X-Amz-Signature=5ce71855398f5780d68b1b7566560f446f0aee738b8dbf6db6dd77d0d99442c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYEHPJR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxTimPWpJMwpMiatQoN9XxpNK2EnCCxtXGl0qQsZuDQIgf8auYbTEnmV%2B7GR5TbTwHvYwW4l9yalJ5Lx52wIGhLIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDB3cjunyn%2FG%2FuGDfHCrcAw2B%2FiVVQkJ4j6oS64%2FHL9ura1uAOQr5kt1ZgKUTpWrGt5D5Fds%2BBkaqfw2rZjqkrHa3TKKqlX8anmg23DgxeblxwdCHi1aqPNj%2BWky6G1QreGF5KrdOY24QvRkDRQCoRPhlviSNmjHIuqRfRgfNk1zDqGBDJbkaSuG76uSZL%2BeIaYxK1KunZPyByE9btfbQqvLXpPbhENPgOOGTvoinZFXtAaM7memo3uSB1jxoE%2Bf7pkCHCrSGZNYUjNJQC68b153%2FBfUYMWC3nELH%2Fo771mAmhpJ6VW7xghb1Glo8v%2FFjVgrwcp3h1Z5mdifugxBvVeXhbPErFJbUSru0TnCQFx0mm13ptaGFA829%2FypLvC7JXhSOLYfpECP%2F1Ms15rmNvt%2FVUzlQdLdc4%2F6Py0fBptS0U3yvexdEprRVpfd0xko%2FWfQObTOrtVxSnt3I%2FoLIslnJ1gZYFygagVZIltwZJJGt8cPc362thTcL%2FbViSBia0Y1UnIPTRLAvoYjhkbCbF2hDeeIhNaoSNKz8oNWeNkIp0ERMob5g5oWfdN%2FoigmZZVz92UEitA1Ttp3I1ptklwabQngoIYoMaAjx4H5Ag9G9oYhKN8pxjXyN3ytnHcFJE9Z1uK0ze8Zp2ia2MJiSjcIGOqUBQE%2FQ8pQUJjDDJMzZtOtTiNtSYGs1pMZvwPPg4VVHJiKbfej2JXshRNCnGnpfkm4f9kcFDGMxnj9Bp47llmr6NSYfJ8jPNbDogSn6alaOOilnFSBrdlaUO3rChP87F9M0cjpHGD4mBHr3WayanbgEag85c%2B0vAAjDOpfPdo6o8J3DAU7PncQeXAlzZe9kk3C0wRBStR4%2B%2BWsErFyHHJdWWZYLcGvB&X-Amz-Signature=0d4ee79a05c5514f960aa29854840c997dfd68e2469772fd92294ecfb8ae58bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERO6Q4N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHE3BjIxio4%2FRIDbjgbwvmbFQMIC1WK8TvvX%2BBAD1QBFAiBmoDNlk34HNOydzM%2FffHvwZizogZ9%2F7J5Sn3PMy1f6iyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMcUcy1Hb8M7PYL%2BIgKtwDlqQEHmG0NjyV%2BmxxABvwQ0ncA%2BX6NgvgBeagXhUHc3wX3fjx8%2BRw8BQIsrcmqdHWjJPVna6Jr%2Frkt3kgjuzjbZk39Nn2mJB4qxhzoOoYYj%2F9JkBM8TTyEfTdAXTyAqRrQNBe1OBj3js5S6qNKbFXsF%2BQuUX%2F3N2WHWUqCC%2BHysQ1mSAgAYy7iC9v7C%2Ba9zHFKA9pBkJu%2BIh4BCLhfersc0Okx2%2BZI3UwozUFMS9HPdCEpldDnaKJbZZXNP669tOmsngP4IHLGkxF%2BiUqPvX%2BC10EDqifSLRvY4ywDzHl5JJUMeeW52refCbhFWr6Vi1bPb6FQuJpKTFYzRFPi1q%2BpMMgW%2FWKxo8M33%2FYlxzVh8dmnfzeQ4hnpu7bKhaaBjLOubuL8tdL4xNoOLy0sTzwI18xAKL72PegahTFKUBuWK%2FvivRh5eMl0oYejXMMV4pkcs6FdKNNKzjqJ9tTExDa4NsOBq%2BVBmDfYWpYO9kaP3%2BemJOAfpxxOiukrP3mchu8TslCrvrJ88KciUxc5uFdDudwxn2YQaQL2NZKMQ0gky%2BwV9MTjwBiS2jWrOnTeeL6BVNgTRjhzdjvFxinj%2BaG52WUMGLsNgrK6K0Sh%2FyEA%2FWuIzPO4n7eH3b2qe0wjpKNwgY6pgGcH8hNAIHm73cQFScFAFBEDL8TbJb57MreKdWTyJZ21liTqyoQgrSSb86dgVPRpGzWf0Af36FwQPHdIpy9Y7Xj8G4Ww15ks%2BHGDO%2Fo9zXhLIrxXtDVfNL%2FhAbOAOTOWeT3mwW4bIK%2F3IyJayEfawxcZNqdrjjDetRgJhZO7frlQHuIFz4kPCLW%2BmLfUw76tOurh6jySzC3SmF8ZX%2FJ9WtFSVaqJcg8&X-Amz-Signature=0825147b1e17449daf6d8653a32cd08e3f6aafa1350d43b4a536a56beff98f82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5RKGPO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFGy7fqwrY5b8C4uv9e1BBdiWp6NRKU6hLCf3f84eIEAiA7sihhecwjPafz5Fhgm1Bn7bCEVZ8lHruRqMOJliP0vCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM845f%2F0ZrHC4qVN%2B8KtwDPVxvtPddMPajKnKvMFuelzwg5lqd85JsLEL5%2FM8dMNDRbcdGk%2FbWffbeSf4HBo14tTDoB0wwU6rfh%2Bfku2nkduaOSLqb6fUSQ%2B01%2FmxSSeEPgJd%2BzVjp01W1Xgy2ssvXiRLllkRF4vt3zWTunOa6rXHdLezL1LQ0qLmqD3Ax8tdNm1IHsIpGt4O7YQoDZFQj4x41FphM7kRzSqkdvTgToedBYCYMMoyx%2B79jQbgoRWsU%2BHY6TF%2F46VMaSDj1g9fHM2ObTwdIyqwmnz0LFGUFxSAJ1l8GGbU5xikjQVb3QS5hkxaMko0gXWKly4noieZtk7PKgjjz0JSAWctFxN3bp5iWGmTvmB7ILm59qyWnfAsp3EfFTghJHt%2FcDlX5uVrgwkAL5NO2uGFtRlOT7eszIUdVmiAJ5Y7%2Bi7%2FH%2FAfRhLfIF5VouRBE1fsBDcrg%2B8GoS7cCV3c9qSsuLX6Ceq8%2FyotKlaAg%2FRrCnAVWpXoC%2Bs8cf6RVO9d7n5PH3OM9Z5YsuEfcYvjh8ioj5PB9PojQedJlK77%2Fb2Lai76Zo%2FCXOB8uT9fiykee0cXUjC9HOi%2BaMVUZT8Bazil4oCUSmg7CC%2B31Dy5SjgneHmAP7WsffSLf97GwC2tSkIlAkFAwpJGNwgY6pgEcD2vjRC5h3d4SuBuRvDokbLDC%2FDOyEl0grfF3lfddU6o8gm4pgpnnnVX8HtLIgPwxq04jSYajk%2BIC2aAYKI3fUYl%2FHtpLoBdf0SdkHp0HCBO6XZcDcQXyMGr99c9Z1ahxQgmFkbzPmxA2lVpE0AICSOrOM46McsTluNTzo%2Fa3ODBg4YMFIkQ4JlWgg%2FhjydwZuDy5FJJ1tSlUZOLK24%2ByF%2FSS6r7C&X-Amz-Signature=327e903cc0afff176a06736e54357c91ae756ab5523fea96f4e7938a2a502745&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYEHPJR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxTimPWpJMwpMiatQoN9XxpNK2EnCCxtXGl0qQsZuDQIgf8auYbTEnmV%2B7GR5TbTwHvYwW4l9yalJ5Lx52wIGhLIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDB3cjunyn%2FG%2FuGDfHCrcAw2B%2FiVVQkJ4j6oS64%2FHL9ura1uAOQr5kt1ZgKUTpWrGt5D5Fds%2BBkaqfw2rZjqkrHa3TKKqlX8anmg23DgxeblxwdCHi1aqPNj%2BWky6G1QreGF5KrdOY24QvRkDRQCoRPhlviSNmjHIuqRfRgfNk1zDqGBDJbkaSuG76uSZL%2BeIaYxK1KunZPyByE9btfbQqvLXpPbhENPgOOGTvoinZFXtAaM7memo3uSB1jxoE%2Bf7pkCHCrSGZNYUjNJQC68b153%2FBfUYMWC3nELH%2Fo771mAmhpJ6VW7xghb1Glo8v%2FFjVgrwcp3h1Z5mdifugxBvVeXhbPErFJbUSru0TnCQFx0mm13ptaGFA829%2FypLvC7JXhSOLYfpECP%2F1Ms15rmNvt%2FVUzlQdLdc4%2F6Py0fBptS0U3yvexdEprRVpfd0xko%2FWfQObTOrtVxSnt3I%2FoLIslnJ1gZYFygagVZIltwZJJGt8cPc362thTcL%2FbViSBia0Y1UnIPTRLAvoYjhkbCbF2hDeeIhNaoSNKz8oNWeNkIp0ERMob5g5oWfdN%2FoigmZZVz92UEitA1Ttp3I1ptklwabQngoIYoMaAjx4H5Ag9G9oYhKN8pxjXyN3ytnHcFJE9Z1uK0ze8Zp2ia2MJiSjcIGOqUBQE%2FQ8pQUJjDDJMzZtOtTiNtSYGs1pMZvwPPg4VVHJiKbfej2JXshRNCnGnpfkm4f9kcFDGMxnj9Bp47llmr6NSYfJ8jPNbDogSn6alaOOilnFSBrdlaUO3rChP87F9M0cjpHGD4mBHr3WayanbgEag85c%2B0vAAjDOpfPdo6o8J3DAU7PncQeXAlzZe9kk3C0wRBStR4%2B%2BWsErFyHHJdWWZYLcGvB&X-Amz-Signature=918d107642d4f9dc36571e467516c08c7cced8ae6947f6e4b696d9e74e39725e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
