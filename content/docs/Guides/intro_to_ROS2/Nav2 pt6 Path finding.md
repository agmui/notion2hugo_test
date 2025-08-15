---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=ad04a7728e0308d3228d076da1499dc94dbd92fdf56ea2b19c0d494fabeee226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=f90f4a10d6a78ad889c4e60ff326f4405efa888468b09f6be35f8a28e0967c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=93180aee9bba814f0590b253e6bdf440d33c17daeae2ab701291c559a3e5ea1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=87f2cb949abc666e0306cefb886babdd58fa2a2558c8476eca91169666c4fd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=a5ed00432b7ce990738c7dab94d155a24e09b03c4f0138ca2232bf915fc4f3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=757e3c9cf59e11bd91561c44002cd581783bab73397b791b9696fee197b77d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=ef98b50413a5a98c56292adc13f9ee43421baca1f2bd4150c6f77be5d2fd1255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=1cfc6fcda8fe77354c7948c255c9b0baa6e56bb50a1c27fb429b81c5ccdaae06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=98605e4bd5db6c5c8ef32ce82c44ab88031f30eb6d8192690562313bc11b0375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=802f41e030aca9938f2cf2bafa4eda82e273e16c39ed05a4b109f06460ea11de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=c3b4e5c7a80a05056dec8f20f45f3b1b8b52c79f1424600a7d41f2f145ec7115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=e4bf4eaf580082ea822c3824e5ed111ef1bff220114312fda0039183f0d5ed8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQSB2XS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDJUWaYJSQdkLbHjNb0tc39Tnge21aXp7Vh6m3jw84QDwIgYXFJSYHMbo68DGdurBKpisdGZmdfnDaoQYCz9tFwElcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNqNWgpaulkf03yDYSrcA3ZNq0ZxoLJOL7L1V3jyevySRCI9%2BWrduQBr6AzPM3CaAnyH9bFRsS5pixAIEK1YVtURnN0RaN77NPVrl9sn75Es7c3eEsDmyfWuDa6%2Fej3jynsk414mzw%2FGD%2FMo%2BYvU4fvk1nYtNEK0eCWvE6pIy3LLRozsK9aEcZJXs8YEwLnTcz1N5dzyCLU5lafH2WvTzDsCtMjzb92ePk4uzrCjSFjFTlQLa8KNb7dz8xcCvBP4Y81yTUuzIxBwemx8rG7Vqd6tcGMHC6v6pxsrbsy6L%2BomB5tYFJ1y7PjtLcrn3d9V7z%2BxoCziYTxBxjAlu%2F97yvuoA7sid0PCPoCCre3DmV%2BB8IsXLdYl2ZkJdG11vS8XgVhs%2Fewi4r7WU3EMxsvfGXsWi3Ox4XilZ%2FCxj8IETUBB6lL7b4QM1pljerhv7DPkxLEsXCmJDW6e4AnH4jKQ55e3DN7lSvoRgXdAPeZk7jLafT4PBG1UtEredn8OWwOcYW%2BSoX%2BdIdbhFCd5VrF5CZC9Jbpwl9RxuOjY%2BaTR%2FERlNtCCZyralHvKGyvjZt6u8CejMo2Q7ISiTlgRWtWK5ygh9PAdGvGyBnAP0azp0DsLf8qpCgu%2Bab6b0XL5WPDtbn5hXYo1h0n6%2FrpuMJ7Y%2FsQGOqUBuCCSWwww6Ycu8eXCrQZciatLXShdjLcvIRJz8ak%2BvaMb%2BGDmATfDTf3eB2OJMPD2rEQNnpQASpqNQstQRHilehKtHWDH5AZBuWd7eJxGQpXyCTXjqZuUZiUKrSPDhamgjqPxUIRJ1AtNxVrQ4D4I6SAtwwHR%2B%2BprqHklfUW7IewvYmvLg%2Focm74kkTqb2WHImxWxpiFUthQavcqj%2F2Wnh1UPH2Gf&X-Amz-Signature=dab2551540d89ac5a4be70b7bf7a2e28084e91c1efa27a7598f256ee2429e71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
