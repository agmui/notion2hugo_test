---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=ac414ad6241fb9b93984f1412909c749c953f00b735d62f5b6f203e01917efbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=1eac027d93f36b3ed2243b4f97bb87dfa500c7e435f52e87c083028bdc2aed9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=5127ac230a839d7cace2e8862821d35790a04ead3376f5626ca484847fb4b989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=902fc0fbbe8aa7ff53b7114045c5174b4f30b7f00cd03f94cccc8b48177cce09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=a36989bcb93df89872d03f84c2baf6815b5b0307243e97f855fad49bfc789a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=885d4a3149cf16b5d54305e8323f277c60d2b7fbabbe3d9f41ffaf4b5011207f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=bc6c4edd96777a394c67d7b66d09f0a88ea4b4b178ae532df599538c1b3a61d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=283d6135cf7a57c60112d27aa9e13542a0bcc221d741dfb9107f4f8451d47ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=cb344c255b1188d4d39687428ce5cceba896ac61986848882ce007a201d8c654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=c6f799c5f9d04268e165c977d17fa091e6210a780e4d142f98ff9328d56beb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=b1e4a6b344104f263921804fb4919dd4e45a2a5a5d21ab2e92b5b3aa3337a4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=579d1195e12d3e1c2f5704a85d032362dddb4864a4084062a0095b80bae78194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PPWAZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFRGgP3OK24bp9wt6A2PDxtNuRvpnqtiDBsKgM47FtnQAiAk2CqVap2An5bDxIu9jQ%2Bf5pn9a83ZzNXhdhDCknH1byqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5AP0zkNykrEo9pflKtwD5tBKESVV9V4GgDwoaLChhP%2BV16%2FOHVv51tjCkXoXGwU5nSnPhfisfNoRZiZYXq4pdUSA2c0MuGY0PghNKDwO6NcJxX5LbtO7d7cyRJ4zD9Ub%2BY3EevW05Aiczm3fbuUhqp4Q6d79cj7sCv9RYnvqHVkqDyOPNahIdZPHZxJHtEUNMCy%2F1d%2BdidCKaKHW6bRu%2BKYBpDAIQkEClGKiEuTadlmJsBG3UvJtGQjAU0EBYYvggxm%2F1oGFs04jS14rTlAJzth%2B1DrwxaQO5ai8%2FzUqcBoq5MhGSgrmnhxPFF0Lraowqdczp%2BmDuqar6bazSIAoD%2FoWhP9QpCVdRXWmT0debBbMtL17CEg3e45QLYssusEUi5c028zHnI3oY%2BEkxG7p4SLSPcXHOUEoOuImGpXTOALwAvv4DyuQvMQWpIf1BrbI6r3Xcy11YyAhitbUXD2sAgp0tYsLiiZcP0Ry4xbC8WV7glNyIos1551FqdTKawE7Dh2LJtGWaUtCluLwu6F4mbnPcv7y%2FJ%2BSnW8X2F%2BqpgRToI3vD6nfWp1rPT7LJSphX0hV1%2FAlK7By9jtsUjdELFkpo8bVIQBlR6ZueMezeOFr3NGsFY1wUopCI1AApFMhutixwAWfsAEaFqwwxLXRxAY6pgHAsCT%2Fx6Eky7MdJuWN1iGCFx4QcA7P8jJTv1mBHgzYclbA6TGvUkznGDOitijiu6J3Bq318lRZIEe2deOhprTqDQgexLr9Yb6YNgVbznprFA%2Fw4eMZKXqrGOIrKSFQ083oXfcB0iRq5rSpCXxSgp23Fg0jrzgTpXTC4qCsjv0Sjjsy1%2FMpDPkeDLDNXTUXJ771KZweMtUPAr2llDUp%2FRmAQCRHXToC&X-Amz-Signature=7c64e921fda9eb1c2eb8e0f3ee7ffe0d2fb65d4e79b0452828086fc4f7556d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
