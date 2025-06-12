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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCDOWBK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG12%2F0H%2Fi0dCJ5YJ0%2B8SsptWX8f3fhcs4OZ3a7HO0NueAiAwwOIiO5CKxiUI4A76V%2BTohk6ITjBcxbYABWqHAk5QUiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjMnjKebp7eD6O3OKtwDOhUamSI3E5WOe8hjVLkUQrLGWQVyYnaiilsKQJlm5c2HNCl37Oz8QhscFQ5YMOhwP%2F3E9rPzC9Ni8J4AVTam5eO5ZLS6mmsWQWOGx8cMvYHco6X6hS1OEvYxd2iHMGjOIBkTEt6Ml29lUGRrYRr7XUI9IjzBBgdDLd%2Fx6jlpjbOFjMCpqCaNUQ1YHXuoKGl0%2BEdgN45M%2BE7a4pIG2RhkPskCJGIvCEQQlXSlm6edHzDiRH6bxOWOnSfE6w2CAf2JhYHfZ%2BmFq%2BwRS36QoZtKJg3vSkJwOiNzWP7LDANNmxuirskg7bKzVHOmorVIET0hs3PET%2FoQDkKeeQwQHdGyuKhIcZXWutJU82UYmmNTyaJdyVwBch00JAdcNF%2FJBfEGdoA2o5BQPWiP9jx8NtRVUSAMt3HYXoeySwQwykL%2BCzHeknerb16QVCgPSFMT44UTZ5oHT0l1rxMXJX7ETlQUIIvxuKno4CLxblFjsaXUlZ0ypVGHp82FE1pKqWsYW4Anb8Pfeni67LCQYPjgQD%2FiiQuVEoFOVlwlw9vD7ZhgEaxy8YhYkeG9oP2%2FDqIaiK4bT4FPEv%2B6GoCHe5%2Bslqu522Lskhojmr00QHtVqOMU53FP99Ele%2Fs8k7Ta66Ew55CswgY6pgEDQzUNR7CtdXhHM42hQE2eSXDi2ziQ1vyexeTan0jo4Fvog3fBhpkckyt65S%2Fqme83VlW089O4F8ustbyJHYO%2BQBSxOs6Lj6krsvzhtjW%2FdXxt7ntKPLvSn1Ijcw7naGOuDBteS93dAeWyTB22CJNgLHb5qCY%2F5Kj9PNCsM579yz6Vgdjo76vZ4J6IVsIWhk85P1L20Nnr3JFNaN66ewtTWGAqYN7a&X-Amz-Signature=697ce27a2cd02478a359dbb16ed4eb266a79381d9d2b875bd0cd78e918a96a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCDOWBK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG12%2F0H%2Fi0dCJ5YJ0%2B8SsptWX8f3fhcs4OZ3a7HO0NueAiAwwOIiO5CKxiUI4A76V%2BTohk6ITjBcxbYABWqHAk5QUiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjMnjKebp7eD6O3OKtwDOhUamSI3E5WOe8hjVLkUQrLGWQVyYnaiilsKQJlm5c2HNCl37Oz8QhscFQ5YMOhwP%2F3E9rPzC9Ni8J4AVTam5eO5ZLS6mmsWQWOGx8cMvYHco6X6hS1OEvYxd2iHMGjOIBkTEt6Ml29lUGRrYRr7XUI9IjzBBgdDLd%2Fx6jlpjbOFjMCpqCaNUQ1YHXuoKGl0%2BEdgN45M%2BE7a4pIG2RhkPskCJGIvCEQQlXSlm6edHzDiRH6bxOWOnSfE6w2CAf2JhYHfZ%2BmFq%2BwRS36QoZtKJg3vSkJwOiNzWP7LDANNmxuirskg7bKzVHOmorVIET0hs3PET%2FoQDkKeeQwQHdGyuKhIcZXWutJU82UYmmNTyaJdyVwBch00JAdcNF%2FJBfEGdoA2o5BQPWiP9jx8NtRVUSAMt3HYXoeySwQwykL%2BCzHeknerb16QVCgPSFMT44UTZ5oHT0l1rxMXJX7ETlQUIIvxuKno4CLxblFjsaXUlZ0ypVGHp82FE1pKqWsYW4Anb8Pfeni67LCQYPjgQD%2FiiQuVEoFOVlwlw9vD7ZhgEaxy8YhYkeG9oP2%2FDqIaiK4bT4FPEv%2B6GoCHe5%2Bslqu522Lskhojmr00QHtVqOMU53FP99Ele%2Fs8k7Ta66Ew55CswgY6pgEDQzUNR7CtdXhHM42hQE2eSXDi2ziQ1vyexeTan0jo4Fvog3fBhpkckyt65S%2Fqme83VlW089O4F8ustbyJHYO%2BQBSxOs6Lj6krsvzhtjW%2FdXxt7ntKPLvSn1Ijcw7naGOuDBteS93dAeWyTB22CJNgLHb5qCY%2F5Kj9PNCsM579yz6Vgdjo76vZ4J6IVsIWhk85P1L20Nnr3JFNaN66ewtTWGAqYN7a&X-Amz-Signature=20df3129ae0e46a7f1019666eb7b18789c2a64387fae238706692dcd013d86e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCDOWBK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG12%2F0H%2Fi0dCJ5YJ0%2B8SsptWX8f3fhcs4OZ3a7HO0NueAiAwwOIiO5CKxiUI4A76V%2BTohk6ITjBcxbYABWqHAk5QUiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjMnjKebp7eD6O3OKtwDOhUamSI3E5WOe8hjVLkUQrLGWQVyYnaiilsKQJlm5c2HNCl37Oz8QhscFQ5YMOhwP%2F3E9rPzC9Ni8J4AVTam5eO5ZLS6mmsWQWOGx8cMvYHco6X6hS1OEvYxd2iHMGjOIBkTEt6Ml29lUGRrYRr7XUI9IjzBBgdDLd%2Fx6jlpjbOFjMCpqCaNUQ1YHXuoKGl0%2BEdgN45M%2BE7a4pIG2RhkPskCJGIvCEQQlXSlm6edHzDiRH6bxOWOnSfE6w2CAf2JhYHfZ%2BmFq%2BwRS36QoZtKJg3vSkJwOiNzWP7LDANNmxuirskg7bKzVHOmorVIET0hs3PET%2FoQDkKeeQwQHdGyuKhIcZXWutJU82UYmmNTyaJdyVwBch00JAdcNF%2FJBfEGdoA2o5BQPWiP9jx8NtRVUSAMt3HYXoeySwQwykL%2BCzHeknerb16QVCgPSFMT44UTZ5oHT0l1rxMXJX7ETlQUIIvxuKno4CLxblFjsaXUlZ0ypVGHp82FE1pKqWsYW4Anb8Pfeni67LCQYPjgQD%2FiiQuVEoFOVlwlw9vD7ZhgEaxy8YhYkeG9oP2%2FDqIaiK4bT4FPEv%2B6GoCHe5%2Bslqu522Lskhojmr00QHtVqOMU53FP99Ele%2Fs8k7Ta66Ew55CswgY6pgEDQzUNR7CtdXhHM42hQE2eSXDi2ziQ1vyexeTan0jo4Fvog3fBhpkckyt65S%2Fqme83VlW089O4F8ustbyJHYO%2BQBSxOs6Lj6krsvzhtjW%2FdXxt7ntKPLvSn1Ijcw7naGOuDBteS93dAeWyTB22CJNgLHb5qCY%2F5Kj9PNCsM579yz6Vgdjo76vZ4J6IVsIWhk85P1L20Nnr3JFNaN66ewtTWGAqYN7a&X-Amz-Signature=c21df4a8f7384ccc10c124c371dd7784276695384643c04e55c2381730e66bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MTG5DU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCg92qqldglbe7clqwEfHUVRqhfM%2Bnzo0sQZkkPScFBeAIhAKv4q21o6FU1Yxt9cGv9otS3%2Fg7ojIKT4MQhsH5gp2fGKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxARIk7ypVzrMj5C0Uq3ANt9RbqndjCNnPeuHK01bgpZfkA7ndwxW6e0dTWBAC7cweAGVLHGaEuU7x5LFJeh5fBVZfCJV%2FPXNV6etPXlSavFSOaVQWrcPJ9E5vIqozfr59KSKeb8ah2T5H9bUsEHye3H4qzUMo8Nfvr2njIboAcI862ebI16rnEl%2FuvxL%2BneeRNQQsQzxrBtRE1YAH3GyVdoGxA7ZTgc1m8IS%2FmSGIrNExXLRehDPhjZ5FMY6O7yUu49bbuDScBO0kEAUA%2BMlr3GhcJIUHKymf%2BTdoEksa61wzG67TAgiIzYNJ3QnwKsdmqx3OSncDQZIIPNUQKFEc6o3UIRczZhbI1BRGIbjqvFUNLmEboBdG7xiDUGpZzLiPhDQixPLtgzPK6EC%2Fs4nd2mFnLaKwH5o4h0DoTjjI9efBG%2B6raTJrMFprFXdVyQlbCir0v3CZFimnuiYM8Z0g8gEYiTIqLlmixD%2B1i3q7RE81F9NzoXNJq%2B3B%2Fx3d8sF%2BcNiAJ7JmE3N7J4rb5%2FQ8pzLhG2QKhkglYcEWUE7rarzxcZS5tssCQ4DogBXPwFBEQodS14ZsVx3Sa%2FQMPkuWNfZ7UYhiP4gEc0XjYKoE2psxaV%2BLLujKAKHKaJgkQ9ZyX8GKTRWy6ix9vETCIkKzCBjqkAY8aSD7ieuPeI%2Fr0%2B6YQLUjz%2FXDi5Iwhj3EdutxLQK%2BuELE4ZM97mvfFFP0FiJXrB73F741dpGdcWckOSdiX1dJ9yI%2BlE0s1akRcyltRAjVl1UUelH7ItBjcwNWyNby39N764U%2B%2FvQ%2BhVtntKl28srODStqu2kB4DV7LEBk4I1NpTnpEPunUpkTuhaFxcC5O%2FG7ae75%2B523kflfDWwlVfoH%2FfrGD&X-Amz-Signature=020e4867cebf9008bf51a83ecd3cf5abb8ec4b14ce35a32d11e2bd56731664a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXHSUV7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCFnJpixZNRU9smZVN6GRWhHq1Ozz7B%2F8jroTtHktHwkAIhAKCQ1eKiH%2Bx%2Bs5PDrYteyLRCo%2BstbbyU%2BwHgFj7Kj5fNKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr4aLaXcZqmPjEQdEq3AOIrBsjnv6bQ9CPyDTr3VWi3OkXDoIzMmk2yw963ZPQ1N2rIY5PRZqYB0n4vPNd1VgBYu4iuKa6LVkmdBTQYNb0moQlRxZGtTYb6TVHxPDO2t%2FDDfhJHtXq1%2FZeo%2Ba7eWEFShKt0rG7zmhAqKtZeS47dEP1QXjSK%2BiStA7bZJOmikyzoFI4fkU3W7DrXFSKWm4geQ%2B8MIdtvg8tBHbtJYZIdot3veryX61n7zObdARP7tY7IJPor%2BX%2BoEuANUYH8wxsE8r5wH3M1Zvn0uW5pgx%2BlNine8Hwt7a8FQodSFSoAUBuM3suC9YzBVY4rg9GNNsyHpTyM3VssK%2BNDbLsXYv2VadAwN%2BJlHvme07jO%2BrDYm%2Bjh7U7%2B5piyXSgbpZmqwvhpzUdmb1BJBZLKZq24EGHt2WjwaWcI0duqWcYH%2BJcofVBUemvkRVqdnntpdgAdx2Qv1g5FZ5gkEPDYtSJlLuvyg9e92%2F8ZTDVL3wGo6Ggnmaaclofhz0EGZBgFP98YWLU%2F8lt0uShVCCfS7XXPtUGpxCNvd4dIjb2ofRTsluMka5ddxMwIrSIi1s3vfN3vSj8nz96WqWYJ0ldOSuZy3ah6twjUSF1rE2n0nTZrfivpmSqjowXuQi0z6VljDD8j6zCBjqkAUtFKfX8FpX%2BjcOQEwIUkV05ertRy4mzytqg5geTE%2BVHqB0IGEVbny2sqPlktk9WNywgD8hzuGm%2Fl9PvFWqmYtHG0ShD23Fw9ybmGiGAIfccGyAjoGL37G6HPMnPXJV0hfWfZAYiLg1oTxSNdQs%2FNHu%2BniOWZDIoESuwX30H9A8ulDDZWxGKtMAhCbSgTsNuPcvnvoFOt1lRdkXtcOVxzNAhrr8S&X-Amz-Signature=41ff34f75caeb0ce6f404a72d75fbc545ee5b29ab925d5e31763e98824195169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCDOWBK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG12%2F0H%2Fi0dCJ5YJ0%2B8SsptWX8f3fhcs4OZ3a7HO0NueAiAwwOIiO5CKxiUI4A76V%2BTohk6ITjBcxbYABWqHAk5QUiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjMnjKebp7eD6O3OKtwDOhUamSI3E5WOe8hjVLkUQrLGWQVyYnaiilsKQJlm5c2HNCl37Oz8QhscFQ5YMOhwP%2F3E9rPzC9Ni8J4AVTam5eO5ZLS6mmsWQWOGx8cMvYHco6X6hS1OEvYxd2iHMGjOIBkTEt6Ml29lUGRrYRr7XUI9IjzBBgdDLd%2Fx6jlpjbOFjMCpqCaNUQ1YHXuoKGl0%2BEdgN45M%2BE7a4pIG2RhkPskCJGIvCEQQlXSlm6edHzDiRH6bxOWOnSfE6w2CAf2JhYHfZ%2BmFq%2BwRS36QoZtKJg3vSkJwOiNzWP7LDANNmxuirskg7bKzVHOmorVIET0hs3PET%2FoQDkKeeQwQHdGyuKhIcZXWutJU82UYmmNTyaJdyVwBch00JAdcNF%2FJBfEGdoA2o5BQPWiP9jx8NtRVUSAMt3HYXoeySwQwykL%2BCzHeknerb16QVCgPSFMT44UTZ5oHT0l1rxMXJX7ETlQUIIvxuKno4CLxblFjsaXUlZ0ypVGHp82FE1pKqWsYW4Anb8Pfeni67LCQYPjgQD%2FiiQuVEoFOVlwlw9vD7ZhgEaxy8YhYkeG9oP2%2FDqIaiK4bT4FPEv%2B6GoCHe5%2Bslqu522Lskhojmr00QHtVqOMU53FP99Ele%2Fs8k7Ta66Ew55CswgY6pgEDQzUNR7CtdXhHM42hQE2eSXDi2ziQ1vyexeTan0jo4Fvog3fBhpkckyt65S%2Fqme83VlW089O4F8ustbyJHYO%2BQBSxOs6Lj6krsvzhtjW%2FdXxt7ntKPLvSn1Ijcw7naGOuDBteS93dAeWyTB22CJNgLHb5qCY%2F5Kj9PNCsM579yz6Vgdjo76vZ4J6IVsIWhk85P1L20Nnr3JFNaN66ewtTWGAqYN7a&X-Amz-Signature=c68b636b57f9fb6504dc995ba6b332c202fd914da5b4c823d4a0fe3cee7a16e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
