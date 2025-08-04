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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=f91472a131ff2e98aec66476e2f02c7e19a0c0baf5a6e7c20007be16b63aa014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=e4fc6c47ef759ee3dc62244e2cf1c5e3862845a4df8b381b42f09e3b0624a7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=e27232efcde7a86c53ab78bfd393d86fb224a0043975b7f5b44b01c999591d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=94a374b52d01030d95b4c5490cce2584b1f3f9aef3ff31a989d70f39cddc24d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=556808a9af05df45598ac8f9858f3ab6169e50956517d5e28dc9bfe8402d0f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=09dd300d250828a196378e5217c94afcd8019ea98e941bc32cd29bfb35c71302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=674a8463ba1183a9c29759396b54e01b2aac315b5b34036028499145b38dc161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=94cc647558814aada116e75da5432b4a18dfbb68673a5c43e4c60723cf7f04d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=275c695c804717e60c79371ec00a07ae5b6b195edde77afb724023427b12147d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=669608ea43bd44f7df6cffdcb836397f581a0701fc773d2ebf1fed6819e320ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=521198777ff89e4c59a15418f8b422102b0ec908e98953ad9b4bb71d481c8998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=af22cff9c3788b28493052891cda7ff5b6859de342ccbb355a21402409766c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3VWPE2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7LGx7JJCBxsmNgY0r0w1zmyGwabbBcO%2Fri3Gy7I9qZwIgJ0hkPbuM1NGmwLWaale7M2cbO%2F6%2F9TTe8Irjv8CvV7gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHSGFhP5hKe4lung6SrcA1fVLG1f5mw2eOYGEwf%2FPPsvKowTxHpyK1Ptqcvpftxs8fFvbQeFsSrlj0bvAla%2Bm8vumrO3%2BZCCu8W4CZA64r%2FBkav3FfFMZA3s8ikbreIQOeJ0vQx27%2FA8HtHbY17rMyvXT%2FOIyHp1R2CFyBB24ZrjIJo4XQriTmeliNviWvc%2B3iwA4mbds%2FhBUGoXdw%2FY2QBslfs0MHjhkfWl1vpi9rFk7IxVdbRGqXFlgcWz%2Bf14K3RCpPK%2FfPDi%2F9vefEJJQu5U4LGvVfRpsGm6FxpqcqPERirPlcMFn9DPcDJFWcJzD19p65uNgFZbqe7wNVJMTRs9xvbFo74L%2FVk9%2F5dxTV0eHGogb3%2FQfbxyUSxLf9uTSQnQcIIa7x9oKd75hp2cqcgiq29Oq94qk%2FargI1H024ciXcQau%2BXDHv9USShyvhzaCg64n4WXavx54ktYUY8LPUHXU2SRcUZiqRn9bpJHik57W%2BPzQMfNLwFj2oaRFrWrXNjqi4%2FMGlIK4Y3sSIZuQrcSuYgrAgG72U2xwDX%2F8HSvTLJtJ6NmI14YkhtmiZrsj%2BTL6S%2BV0RUZQjONzpltoCLk5Lqr6povgoygO63%2FfYj3VPqk3FEml3MqWEvvoE3c75tHv6Wg7CEVQgPMKqNwcQGOqUBiUlJ8mrVYWJ8xnf4iehs3mqe4vzW7ICHtILVVCNKwuIYsGCZinTuB%2BU6KXPsE6JyP8uKxP4%2BGoB877R%2BrWLxGGJlA2sLHarnh%2F8QX6CciKMeIE6%2FGjRV%2BVEJ7hBdvnovtsuxhCc%2FBvJ%2BBvKPP2vpRCJ0LllDC6dmptSgfwXQCWV5wlw43htpxqJRJKtBrCGjTAZzjt0%2F25FS1O%2Bmbd4IWejucB8a&X-Amz-Signature=fa3af82cd7a437c03e08c9728809ba4008b9563606e448d934c0e0fda3701f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
