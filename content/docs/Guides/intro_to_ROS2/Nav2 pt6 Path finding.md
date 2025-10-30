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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=d193fc087f381fad6b11bd50bca5988138de0f10d69d770d6a65667bb00dbf0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=a2c64ddf0188893496ba66eff5db55c3587823d00b35a0e21c2099d5623bc34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=ec66b9050ddde684ccb7e004dd0d093644a11676f9c796299e77323ee38d66ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=43c8ea04a6abe77d0ae7f687cba391bb412639df3c0b6281fe4d69460a9dc668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=373bfeb99fc595e4b82753198341d6f5a6a90882ff2fc91759ab22d640d723be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=3d7fd4806d4a2891435dd60e9f77892ede5b613470b9a9eb0547fc42de119cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=91df28de28c734dc8d21dea1e8ce5da6c3c95965530ebd0391d22a21d4459017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=9ba0ea7a98ae6c6d5ac42f84e937a5ada3d30dc43621b6f0e292aced5c792962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=fa225929e8a17f28e27abe514b9b28e8af510253c69e5651f520f899025bfc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=8ab1a17dbbf711a543b2d9a837226c36a1c4351054beb9b5e40e58587c5e03db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=d5696abbdd6fed5d7b018baeb1b9d241233389d6f7ec3e1403bd9c214119861a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=cdea113df4ee1b9a8c3ac0fde5db313bfecae67028b94e9f3e9ca4e707a0da76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFV2N6A%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD8%2ByWGKRAQpOGHsdxPFAFTGmrgLHG7WSPAETl9m7hDhwIhAJYXqH%2BeQ%2BGHEfZvb4JJYqK7ah4nGIk%2FwIpJlHgCrIMaKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrbk2AEmPIitVQcoIq3AMpwfJgxAHpok6wgmri12sQSwYDHH1N%2B%2BZpHbgkLz0PChgzXnRkh0e9CnVvb5vfhwK%2Bv3Y88LB9HPtHrl%2F2ZSQTVmUuglFBlPY2CxPnMJcsfTavBRvVuyND6%2BylpZD4kqQLUPgletfLNeuJt2CB2yys9cBAhNKXqyqrSp1gdQj7%2BQyM6pwc6o9dnSo8U%2FQlwbqa%2F1ZjFXLBXdepbbTsunFMsO45jk5WskK7cGGDBcEBvlNO8vUX5JMV2tx8CmvvIYSojuxDd5ZGGYGs7mimrMoavd4HPXwF7i59w20rIM0%2BSVAuIjLp9bkgC4wEnBopwdLFl8G3vPUqF0FU%2Fqk1Vr9vu11KYxiDibOhzTja6A%2BbcfDFI6YbxjcLqcA1xHxA1zyohmx2ItUVGLhBVHWOWzuRnQ%2BbXZUSR2DqMqxAkpTYesK7mRNOUM7Y5skSEXNHp98EXvFRPv8kDreYHR1Jn1B4T21lBeJH%2Bg0KStU39y%2BQttnmRDnlrCxp5EDvR6bj9JonnBg7bWev3OP4PSLKwvOX%2BpTfDcsnw%2FxLaA3S8jV1rjGvcGd%2FRYYnKdjNsBRAS2YB%2FJfBwbQM0xIGaLRKKKUhHe8JS4cg2lD67wOaGwSwueYgZvqyAljuqcAtHDCa9orIBjqkAe565bW1zygzvh1sD8%2FMj8WbRQqB2BAxTEEa9ySes8kgsa61sUfXe%2BrS8uhTcsccLocU4CcA4UuXWucUTv9ah77eWeijL9b9x6Et7Qky6CYGyfGQWOZqsLBWn3U8t5nhmzsVJFx9vvd%2BNyfTjH90w9c3HijiSYw8ladlC2uyWAFimb3o5SBTWOW8PfGxnhDc9o%2F402oOL7Wu3YaOTO%2F0%2FdNod%2BJI&X-Amz-Signature=e1b673c0804db8e62a707776675061344af2a4deb592c05a2cda0c73bb17bab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
