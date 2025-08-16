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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=63b03635e1ad95dc6a34e9091994fa73eddaa3b2fb844a1f3052193d5f85cc4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=e68b572fd562f62f14a117387154f69aa24ebc28feedc164976e567ebba5098e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=6dd082d1946b124fbc76611df6027d63fd6b9cbc5f94549e6dc06639d5e56351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=a0f494a1d4e60b3486c2d3e06308f4cd87b62770069f88ac3b1976e8e6f374ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=45fece0d1204818b3bc281537ed7c2535fe0c307a08972c77f077f5f0fb311d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=108695ba911a7e9e640b4c679dde14e9ab023185d022c2416daf51d9e8b8fc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=22f5d6b96319c0f1c59fafd50241d3422d0e899604ea65dabadc79991897c9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=0d7b08482838432a78203e26efb313417534c84a7d02d7cfa7416f24dd7225ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=856129490d33f1792df3cdc19c65a8358f407b4c33de682de2efa43fcb95e6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=e6eb25350c44915df211aba1c34eedba44fae26bfef7c54b485ab5a2fbee4cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=d119f176b39d4f020bfd1874ee4fba7e154a74e993d5b1dcca3c50ce61a419d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=5b5957af501a853664d320ba6dfc0cfce0b8cb7f1b44f34d79db0911017ce8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO76PTL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD14BemtcBzVzxmKMtbK%2FNpnCR0kK%2F5dcbwrErIubav%2FgIgX9Wfr27cj%2BO6zuZh5qPJwAnPzJJOrQarw0DnaXnMbJcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExGanCp6A%2Ff9eJTFCrcA52fgfJBoX27Z7LzAy0x0Ep2w%2FxI9F4D9%2BDiHsy1G%2B0NCah3dgv%2FHtO%2FXCPUxAZxHtmYbyR7rW0qFFBaLM8yoCqw8ZjLSId2JQrE%2ButDpkiywsbyUl4TwrDb8lIsaDaBmxYVAYqMA3pw%2FxTO1V01orYE3sru%2BjfsppAP7HHXmj35%2BPUE%2FyC4e2UF2D8QMKHJX6qAghz5DmMD%2B%2FjL%2F%2BTO%2F4dN%2FlJWAxt%2BOadq%2FPG6BNv61dGBeS%2BqEW2fxOTBuxeRo0q%2FjQOBixIOU%2FAlKCBq5AYI8443KZD5UOTgdGaDZg%2BziOPqr7bTB1yvnNegJ3PyalhRxNjj3Wp8r3LXhBkUyr%2F737C2rddCRIsyL%2F0Vx3pACDl50%2FHqqjBWfbLP5O1sL6RRsFqsurSwbzcfYUppAFAB6vZu5oyLUPop6BdPO%2FopShCu8j6QpTRbodZJ%2FBIxbP0zbd0rAdDn96FwwUKxYLzmOSowRWgAJqFRcrDgNLbOqWu7rQL9ScLZcBXvDlz52ysAnICeu8cgm%2Bg85lWm6kAOMVP0Czj67C4Mf9rJEIHicap%2BMC7dw0CpZfOfuAQp7LPwMmnIu02t7rWU4aHhkR4kNBiXMGLihrXkkW4oAMBU7PFaxJC%2Bxn9VX%2BKdMIz4gMUGOqUBSyi9CkZ7Fj0y1d%2FCWjuDS%2F%2FeXAJVpKISJc%2BhWGpnhTaxFvvUjOErKxZF%2FJpR76eafCQXLmAmbkd0dJK%2B%2FFoV2AHeo8MpCcp8ZsKPLms4pWybBBsS8ETLKq4wnyD70Oq2u9XENXMVUNjzA4kWULMy776LI10sNjkyZAQf8MGLzpuSicxbQh0x1XxXk7Gb2KGa2GOsD11mReGPEeXJN2WufpYzY5qX&X-Amz-Signature=6b551e144d37652519da8228a8d306e440ec32a23b1836c50a8d2b3b5b0ad90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
