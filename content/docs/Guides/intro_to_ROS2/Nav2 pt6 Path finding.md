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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=108d9c89e38732074e88186cc6f898ba077b7e7b17557b6ac8e6d7dd34d12da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=e74ec17990c193240864379d2cb98fbafd7649deb582ace52d076bbd80ceabfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=e91ecd59f3f373ee41614c763ba18342a2413761fbef6006d83ce526dd1277f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=f624fe57160111d0edf3f1deda824e67ae3c0eaa9f117084d365e6a0a31f6911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=9deb5efd94b5fc89dc99ef07087a0367251da4acc7e5b8ebe77dacdd86820a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=e507728b401ae4cba9d3c782b409eab074df1edd769cf0f591ca09b0c8145f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=7d9725e16f1f7d825332d7e2b21cb1bef509b031c54f0a8b87c3dcea6bd8e374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=494fc0fa88c67dd20b6ea7048e21b750d8a8a49dc2d54985f8b566bfe9e2b433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=079ae2ff09fb463bbef2c03805c112f929d4c3b3310342df6154d7bb6eceecfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=ae06a4baeec618285cc422dcd0cb49a35b6403582c254dee6018b32c65ae8823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=e9de4ab0e38a5edfa6e8ae99a99acd013e12af4973f7f42b84f1809ca9eed977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=16cb432f502d1c1fd4516ac09a16946fc6467b68159ddae3427832a059f844bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=4cf9eff73a4edc5f9064e7f9c27ff9806ea1e93a69fca2df1d34add5bbc527c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
