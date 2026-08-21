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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=cafce3754ad455b4d5f669d05dca13f718dad097c9bcd62dc26ef73c5baeccce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=ee558df2a9bea0640b5eb013a4f51cf937335b3807e424ae9ff258df662afb9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=453a678a9de90e392ac6b132e17962539583c3a3ffd4559c1b3d7abe7bb5a515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=d0ac761976f874b2e2e544373d8bbbf185394a7cfbb1ffc3c252987a934ab125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=f7e7f37f97c66538ead1398d340be0d7f7ab923ea428678bbf0c080ef8a1226a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=5991d70aec92b42afc283944066b201ae8a90bdb4241434146f12e80ab42c80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=561d55970be676006f96f12091315c4141764052a5ec2a1638c84212642f0b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=bd9fe8852f2efe25f231b04b97bdab5db1cd4b5760aefe4979bfad1dea3c468a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=a5a6f890a68539d3d4f6fdc86030485987f1bb519e159e1971d9b35b0f5ed3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=2f61470a438de5e2d2bf650c0d4255c0cd8fd76ae50504287c8e816a58429a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=f521213c8a343f3b2468dd816bbab27cbfacd5b9515a9373f20688b5c41f3dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=9653233f3e9652f1d908183d6f85be83666cb1c9983443533bc7cf4560bd56a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQWPCS3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQxwIvFoJ4PfnJdDe2Qy3E5tOeHNcudxpLCaFj5VXYiAiAl6Ewl9qUX2%2BpLho4D8pYvd6hA5bx6%2FPYBrFu9i9tmaCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDsKM0Pt%2BWADIGLNmKtwD6I8L92ACNy1SP%2BGANFHoccpDPQmy3UmYFRxoRDqb8DTeLMvaFehJqyGMIOwkjdUdExakoOFF2FGJf5l6DO4fuwDSRRDPFDbIMhIYqu4chDR5hTofeeHYJ2PRW664pZQ%2BYpQADRLw9r0Ow3CXuusGDgPi%2BVLy0Y1PfcZsN8mTTRpPTJnZkk5KdxPNFrv8DByZ03EPVxnJ5VIYUGTuw3mPzQJ35%2BLquNuCosTtt8CXCfCfQg%2FzU8aQSr4dtNH1FfonZZ0%2FvHTY5%2BMjCe9U57i8igitmaqcbjf6mJ4KYz0QqWdfF5VwDwT%2BdNAPWSUdbmM%2Fj72OYd0ZiszgruORtlsfURwHD0ZqON6kGmJ9HqEoiZKS2qOTT%2F5xjZ80kjQiJjR%2F8eJVlxNl60yTB81%2F5KjPgW%2BZO2ul0dbz%2FYv8BjRC%2Bh%2BbAQ%2BsSksnQQlpyt9nbwiBVa0eIYk7HpT8%2Bq5dowuCSKhDTuwpwclF3z3Z1ecOBoYo3NHx8x2udC6NcAQy96udaVXerhUMfBN05jup41TIjFQgTJdMP4cwFFMwDP1VA4ijvtwWGZGJgjQymWx3oMwxAIfVYEd8npGzAdukbDyECi%2Fs%2FKQTYCPWxtKdLXqsP9aEBRX2G2NPNQjllm4wmq2e1AY6pgHyd9yhKjwwTJ%2B7lbF5lzZjOSPC8CDMzR6yoorgOJWzzNsSgCWJ8%2F0qwU%2FXx0x0i8FD%2BxfS7sc%2B2DAlfq2Eg4%2FxV%2BxLtJEAoJ%2FotzsSDfCyILMIce5GLJpQhNXhP%2BztKy98roc8aJAwOAqry1FLu8Firau62hvQi%2Bpvve%2F1JR1HbKib0MRy0fOZZU2N2ZFCMvV31ZC9VxjnKLeuWyC%2FdyjoGcubIptO&X-Amz-Signature=aaedf0daa6c056ce8c81ff13bc64dccadfe1c008a1591aad6a4685ed926cbb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
