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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=17196ae2f2860bf167e47e21d9b0ca92d64c6f5b42c3a8e829aef909d31af1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=169135253fe73787868b2bfa56f2c576534df55ee0f4102ca091be64f0434231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=716a66d241acba870a66a3ef93a33d533ae3770cf753a18d1afd3d2183e2d0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=d46b086de45ae14fce345d7783996f01debb0ce9ce6d107464630f7e4eb1bc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=b95d996f9ce3592160ef40e524a880ebafb1e916169a12eae5228155df2de5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=39ccc168eedbcd77e11fcd2866a1ac918ec10d7e0a4a51b374e35e3cd03604f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=41d7c704edf1353fb60acfc521031bea523e62517c4b8c4da2952514e5d73f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=3cc41c74d0b08e4672ff42304b144253bc6226c56e31ffdd11e466acd535a860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=ee0eb1ffc6287a72e6cf24dcb70e6f8446d25f353f12b63cf726491cdf0635f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=112e4ff4ffe3b35b6f18cb515e8c01fe2fb5fdd9b5f0cf5f2efb31a4dc94ccea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=61063d7bd88118dd9ae33a5d5526455d96b73bf588b0521764e52b5443e9bd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=85fd00a798db2bc8e1a5caa8162910350ea895e543214c280330ec9f810f0c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JME3LZ7%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXZuqNPNSa9KbUxDvf6EM8GZ5CB5U743wqQ2dmB2hqgIhAJirDPNE71n%2BZA1UA1yqeGajiwKYWWLoZKyGw9MQE38KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZczmKI2iRqxgpDgq3AOaYxCVBsfy2tsxEjIJEh8JyvQe7gr3oEl%2FywPYFySFdYsAtiwV6Kc7E%2BWj4of1G%2FJQ0WSYxnwLFt%2FzLFcPLZunCKvLNy0i69t2XAP3oirw4n%2B%2BADSykE0RU9LgrxVAlT2Z7nfwFHXwnAwVVk2Et%2BBQm81S%2BcDTvWF%2FrY226oouWl3H8tmYO%2Fa3YDhDXva9W9UQhYEvW9xvse4%2FPsYTybh29dkCDWITrGjM8M8Z5%2BysB71lOeePCv0mwidjq7ZlLhKbu8J1BJ2dLgvRP%2BCH%2B4hIfCarFrzhCs7ENJj%2Ba0YHZvEcyzPH5b2iOz8hjsDJy9JiJmD6tp0%2FdkrEQIkj70OzaTsKPOQ4mCPNPGhyN5wvNUGTpfV8mb2NZog76RNV3larjIaoFjzFSmDpmq5pPhaFkG4vG6lFBKuUB%2FVV6no%2Fm6%2F3Mb7KctDRCYYK2Dcs2MLiMppxHJewS6ax2cz2I8vy8rgolVfF73Kl6n4RcEBOjT9nBbk9g0rsuhsvN9swJZcdNzoioNB44EO4NUajYJfVcjZ5dT27yuGbPSNyxkGicr2%2BW0nsuIpwXfPy2ZKj69QTyeKcxS%2FWx0b7TYHoZWxsoMRBqufprZyUVG1cDk3luklbT0zzFQb%2Fcbd8TTCQns7FBjqkATul30Ma8A9Afy4ETgkv127y5mDkeU%2FKApeBwDlbOIWKo5FBK%2BDBunYldU6DsWmou2tSv2NgWL4Bfpiy31sKHpuuu5T6JrPUIcGr02zFiCGxs%2BohO6gU%2F0if%2Fioa1Ia9iWaOhX3WryP%2BQvB%2BqWv3E3Nf7gisMkmlhacAKEMTlXftoywcHTDTYo4DQSHNyUay7dyjavXedU7wMKebNFPfl9mB9GTS&X-Amz-Signature=081a7fefa1312562a3809ab892416b016e4826d63fdd40eaa33d3e85818e4240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
