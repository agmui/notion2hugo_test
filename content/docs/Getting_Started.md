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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDGQ5VQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD5ru8tn3CgyqTh5DzNSfeVW9eD2iOWM3qz90QFFinf6wIgIyGHku6nuorBh7H1uEdiRxS%2FjG9BI%2BhF0g80Uh3XR8Aq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDA21qi%2BhEeGyLK%2BULyrcAwWLswYIZRwtloxeODic9chPGITvbQAhO0C9bV%2FaDYQcs%2Fc%2BN6a0LiiKgqm0tp42lKi8J5b%2Bf1wjZWkYQa0lmSR7hbLcpqllzUVH%2BNMuvdy1VqQ2juTNKdgErbQiUCp1BJOpCruuiEud7uSfUuFBuLoPfKto80k3M0KLEDvk1%2FIPl6EXn95fpEQNmbThMWQ7fkH%2B5JwUyKHvvl1qw5uTg5hChnV5sWrpmvuDfhKukAK80Q4Pzlsk4rRyStHLpnkgmY8pYEO%2FreDB64rhz%2BO0CY8jO5hn6cH7emPFsRW3GQD4iDZlP%2B9sz1HX%2F%2BOkL8fOXX6JT9k2oHHpZjA4x59UCDb2xEwucDDKTsDGR2n1b38GZkk8miZZ9Pt7HPETK0OILyZVZFLyZlKIC7ty6H3domA9rLlbOnjooyztAgyiBMHNsDqq%2BLYGD4qDvmXdjfZkyHdml1XABD3ugElBX0a02kl%2BiAKAfnma68vAxxFu%2B9f%2BFnuOxtjLsSR0IGENnwL2e1%2BueqFGKVUnHMn7hmjPTgn%2F4JTO8uLAmzcl%2BSznBvAPenycrvWMHBxJvuuMN1dHDfPqMoir1AOvz7P7TL8Ggymj7mDxqvjYKxOwfANm5iuGMBBoCQ8VjvdlCXQhMIag%2FMEGOqUBl%2FCv2oupHviX4Sd3S7c5mmpeoG8mUHHdy72R99WAttEi6fqryVWqLP6dhutcI4rgmc283cpezZlx0iokdbkxMCulvcpiK0SPn%2Bu87tiDTq3XdIbExgu823aeWnisqa1sDG3mB%2BIBxXJnJzqoi5XmiD0M%2BPnyIFq%2FPsEFEayeiayJ%2B%2BazGOp3G%2FI0WhGYl4J4RwKqxf1gf6nuhhadmN2KPznJ4tHN&X-Amz-Signature=0055983c1799eaf0bfa0f8a5f5c71dc713464c1888076f06de8c2560c75d00b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDGQ5VQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD5ru8tn3CgyqTh5DzNSfeVW9eD2iOWM3qz90QFFinf6wIgIyGHku6nuorBh7H1uEdiRxS%2FjG9BI%2BhF0g80Uh3XR8Aq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDA21qi%2BhEeGyLK%2BULyrcAwWLswYIZRwtloxeODic9chPGITvbQAhO0C9bV%2FaDYQcs%2Fc%2BN6a0LiiKgqm0tp42lKi8J5b%2Bf1wjZWkYQa0lmSR7hbLcpqllzUVH%2BNMuvdy1VqQ2juTNKdgErbQiUCp1BJOpCruuiEud7uSfUuFBuLoPfKto80k3M0KLEDvk1%2FIPl6EXn95fpEQNmbThMWQ7fkH%2B5JwUyKHvvl1qw5uTg5hChnV5sWrpmvuDfhKukAK80Q4Pzlsk4rRyStHLpnkgmY8pYEO%2FreDB64rhz%2BO0CY8jO5hn6cH7emPFsRW3GQD4iDZlP%2B9sz1HX%2F%2BOkL8fOXX6JT9k2oHHpZjA4x59UCDb2xEwucDDKTsDGR2n1b38GZkk8miZZ9Pt7HPETK0OILyZVZFLyZlKIC7ty6H3domA9rLlbOnjooyztAgyiBMHNsDqq%2BLYGD4qDvmXdjfZkyHdml1XABD3ugElBX0a02kl%2BiAKAfnma68vAxxFu%2B9f%2BFnuOxtjLsSR0IGENnwL2e1%2BueqFGKVUnHMn7hmjPTgn%2F4JTO8uLAmzcl%2BSznBvAPenycrvWMHBxJvuuMN1dHDfPqMoir1AOvz7P7TL8Ggymj7mDxqvjYKxOwfANm5iuGMBBoCQ8VjvdlCXQhMIag%2FMEGOqUBl%2FCv2oupHviX4Sd3S7c5mmpeoG8mUHHdy72R99WAttEi6fqryVWqLP6dhutcI4rgmc283cpezZlx0iokdbkxMCulvcpiK0SPn%2Bu87tiDTq3XdIbExgu823aeWnisqa1sDG3mB%2BIBxXJnJzqoi5XmiD0M%2BPnyIFq%2FPsEFEayeiayJ%2B%2BazGOp3G%2FI0WhGYl4J4RwKqxf1gf6nuhhadmN2KPznJ4tHN&X-Amz-Signature=0ff4c2ef7e561dcd58fc5622dfc10f0cc7ec8b49b205997fe4c0b7c19cfe1d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDGQ5VQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD5ru8tn3CgyqTh5DzNSfeVW9eD2iOWM3qz90QFFinf6wIgIyGHku6nuorBh7H1uEdiRxS%2FjG9BI%2BhF0g80Uh3XR8Aq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDA21qi%2BhEeGyLK%2BULyrcAwWLswYIZRwtloxeODic9chPGITvbQAhO0C9bV%2FaDYQcs%2Fc%2BN6a0LiiKgqm0tp42lKi8J5b%2Bf1wjZWkYQa0lmSR7hbLcpqllzUVH%2BNMuvdy1VqQ2juTNKdgErbQiUCp1BJOpCruuiEud7uSfUuFBuLoPfKto80k3M0KLEDvk1%2FIPl6EXn95fpEQNmbThMWQ7fkH%2B5JwUyKHvvl1qw5uTg5hChnV5sWrpmvuDfhKukAK80Q4Pzlsk4rRyStHLpnkgmY8pYEO%2FreDB64rhz%2BO0CY8jO5hn6cH7emPFsRW3GQD4iDZlP%2B9sz1HX%2F%2BOkL8fOXX6JT9k2oHHpZjA4x59UCDb2xEwucDDKTsDGR2n1b38GZkk8miZZ9Pt7HPETK0OILyZVZFLyZlKIC7ty6H3domA9rLlbOnjooyztAgyiBMHNsDqq%2BLYGD4qDvmXdjfZkyHdml1XABD3ugElBX0a02kl%2BiAKAfnma68vAxxFu%2B9f%2BFnuOxtjLsSR0IGENnwL2e1%2BueqFGKVUnHMn7hmjPTgn%2F4JTO8uLAmzcl%2BSznBvAPenycrvWMHBxJvuuMN1dHDfPqMoir1AOvz7P7TL8Ggymj7mDxqvjYKxOwfANm5iuGMBBoCQ8VjvdlCXQhMIag%2FMEGOqUBl%2FCv2oupHviX4Sd3S7c5mmpeoG8mUHHdy72R99WAttEi6fqryVWqLP6dhutcI4rgmc283cpezZlx0iokdbkxMCulvcpiK0SPn%2Bu87tiDTq3XdIbExgu823aeWnisqa1sDG3mB%2BIBxXJnJzqoi5XmiD0M%2BPnyIFq%2FPsEFEayeiayJ%2B%2BazGOp3G%2FI0WhGYl4J4RwKqxf1gf6nuhhadmN2KPznJ4tHN&X-Amz-Signature=42e853e897ebd0bae3d6c0d356546ead266375eb6e8570a5e76247e7b2f6c0a7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJCTPOE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCCZN67e9sgG5h3KgBtrm09V9WZhQtZSOsHZY6Ka9tmJQIhAIclLpSVV2MAPVXcVa1kaVcvm4WNGQIIJ7XUpLrAqhbZKv8DCBYQABoMNjM3NDIzMTgzODA1IgzOmKrLU2pFZSsQIJsq3AMEp4pUAMjWYFCMhR7FroKLLkJOLKMsY%2B0e3kBpKXr43X9nSx2dfzEijDogyZO6JuKF2ClOzwpEUFS1fl48SlKRdd%2FeBViAVlEnEbBvv%2FSvX45%2FSN3FhK42FUPjVQdKdUXBrRk4mwCFCNdRSs%2Bo%2Bj2WtQogh6sVqPwT8LL%2B9382y%2BVC66vT6Pr4LLobmYN8%2Bruot9BWD%2BIjZiFZo23uFgxAV1uFP041364c5zdIcPW1QsjG45SE8n9tgd35PdBJCKt5rQccF7ccS%2FFTZ3ZMOq%2FsYZk%2BMXZCVqdC3oh2YblItxHkepzTU4SM24h2FINZF8EEK%2BSe62GqqaOFuvZlHyQI6dqk%2BdlWru8KN7egXxCzA0USIytAPO2FNhznhXGBN8rOYgLLaZI1Fzt36GAoq3KprZTPCcEQ12eR1Bd1663yT6bAWs3x1PQKol1WjqDbzyxV79sj8uJCSc9zwysl7o0RbBO%2FltGxfhj3oHoBpfANmWZSpgVJOJKWJp9RzpG2UJ2G%2FjbWHnwi61hZostCUvhRV6SnFG%2B5PX82NOAwOlGkzoLaiZGSL%2BUDvHkabhbKznZ7Z6PtLi850EJjaNHcmgZ75%2FLZvlVEWlFrhbKm89DnjkV1QN5QP2ReVf5LHTDM5vvBBjqkAYumm55hKCJkhB2Ifsd0lgt81kE0qegUl5Y%2BlYrMxT7pJLfiGi2T5A4ztBButOTV%2FpKn5fCcBI2LK%2BKhaULcbV4r73dJZkXfagSN70qvUyYNi8%2BDdBhmAdD8LT6V3nlWBR%2BvY4IscFI1FApca0WfoRqy3ComiLazpSyFymsxaQXYaRlhsTdx5tnVAYi%2BrkA9xK7JRJVsXAAJodYnca3dOvVWieUZ&X-Amz-Signature=8e9f9675411d64c2913105d4ba20f99db87799319d56707f911f91c94dd3a6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VEJKYT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDVpLtVzHijrZdi9ddU795LfROioCUG4UFGpY3hiELCYQIhAJbeiI25Pl%2B00s9HGTjQ2KzK0ktmpKnBjfMjepekDXLvKv8DCBYQABoMNjM3NDIzMTgzODA1IgxKnoJQZmjE7zRiIOsq3ANfGfyAMeuEoGrobAXB8imTDWUYaKkJBjF1gl9Dp06v3bpKXjHXt3HnIFyGSMhw6pfCRs%2BKUHGZBnRN32U2OXDvGyYGJFZlsZhR5lPDWIp8R7sOC4149xBESrovgy02cipotbERaZhsqeb4CSaEhTFWfu9TRVC7LKFDfjrv25iRRywuLhudlCEuLMb1l%2FEUg375GiIKByKFZVniXr4KCySmrbJazQv3Bn4cWAuzvHOAKfjxsmFuAWu1LT8lRxlWGu%2BeGtPpn07xvvFb%2BLtY%2F8F8RX80%2FQ1eTkolwLN1pfrfFi83%2F16FWrH%2BYeYBAt2DZSpAm6phFOuRdx2CboIEkPRoP8%2BH5Hqu4bngVrCLGxVwrjAEJh3G5v7%2BHYO3YKet%2FGyzkEINw%2Fx5tNHwaIcua7qOuxS9KIZrKD8qVVeW4IeAIExQNdESW5tPgAgfrvELMP7rWfTY7xeeERrYJBa592A5IAM3Eg9C2Qhu3ohv6s5dr8miZ%2BXBDEUXqXsM4SDSMfWI92TzAAWqahlnsK1azZ8NxodofaxyfpVNgEQT41iFJwZ0n4KAOyDV3zIjVSEhLsc3ppGEldRmvqrToYtGP5oPKynP504Jff2LQ5iBUzLb9IXD3Ikn8z%2BLX5AZYTCJ5%2FvBBjqkAYsNeXCRzuxra%2Fyu%2Fjpa0FhjIEp39KaLX8hZfItKkQ2rJcigKC4AM6E96wwVlTKG3Tounzt1ajmHAaRg1GDi5Kl55PvzoCwPDyKfBQVsAfZhmIYo4TIx1BVoaUuH84Q%2FwBgfjlo6jQTkmU6ZM9Wr3bwLe6BeTN%2BpAmanWdBZL%2Bb3G%2BzAJTxhIJOFhjzP%2BCzn3DlWsfUS3dKilGo5fwqZiTfvqHP%2F&X-Amz-Signature=f9fe83e54e1004f3e4faaee85c98b089dc9b831ed8909905d5dd00cc9aae7934&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDGQ5VQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD5ru8tn3CgyqTh5DzNSfeVW9eD2iOWM3qz90QFFinf6wIgIyGHku6nuorBh7H1uEdiRxS%2FjG9BI%2BhF0g80Uh3XR8Aq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDA21qi%2BhEeGyLK%2BULyrcAwWLswYIZRwtloxeODic9chPGITvbQAhO0C9bV%2FaDYQcs%2Fc%2BN6a0LiiKgqm0tp42lKi8J5b%2Bf1wjZWkYQa0lmSR7hbLcpqllzUVH%2BNMuvdy1VqQ2juTNKdgErbQiUCp1BJOpCruuiEud7uSfUuFBuLoPfKto80k3M0KLEDvk1%2FIPl6EXn95fpEQNmbThMWQ7fkH%2B5JwUyKHvvl1qw5uTg5hChnV5sWrpmvuDfhKukAK80Q4Pzlsk4rRyStHLpnkgmY8pYEO%2FreDB64rhz%2BO0CY8jO5hn6cH7emPFsRW3GQD4iDZlP%2B9sz1HX%2F%2BOkL8fOXX6JT9k2oHHpZjA4x59UCDb2xEwucDDKTsDGR2n1b38GZkk8miZZ9Pt7HPETK0OILyZVZFLyZlKIC7ty6H3domA9rLlbOnjooyztAgyiBMHNsDqq%2BLYGD4qDvmXdjfZkyHdml1XABD3ugElBX0a02kl%2BiAKAfnma68vAxxFu%2B9f%2BFnuOxtjLsSR0IGENnwL2e1%2BueqFGKVUnHMn7hmjPTgn%2F4JTO8uLAmzcl%2BSznBvAPenycrvWMHBxJvuuMN1dHDfPqMoir1AOvz7P7TL8Ggymj7mDxqvjYKxOwfANm5iuGMBBoCQ8VjvdlCXQhMIag%2FMEGOqUBl%2FCv2oupHviX4Sd3S7c5mmpeoG8mUHHdy72R99WAttEi6fqryVWqLP6dhutcI4rgmc283cpezZlx0iokdbkxMCulvcpiK0SPn%2Bu87tiDTq3XdIbExgu823aeWnisqa1sDG3mB%2BIBxXJnJzqoi5XmiD0M%2BPnyIFq%2FPsEFEayeiayJ%2B%2BazGOp3G%2FI0WhGYl4J4RwKqxf1gf6nuhhadmN2KPznJ4tHN&X-Amz-Signature=17efc9867b5e1c7d5ad6ec761cc837ff72ae58ef37bf9589d4363755dccdc494&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
