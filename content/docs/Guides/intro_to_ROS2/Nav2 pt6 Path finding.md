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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=ff69bba46b10945a2884615210bcc287765301134b6a81bbb43b5393c56e635e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=763c5479ce249ba1bf23314e12f2fa0ebe7e9a6be4f821aa64e39b6c528de207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=66863fa1c0df4036def2c57c1136c9dd3d1a4ade9acc4ee717c20fd849747448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=fec2433331cbb1f5e729340b980ed128b6f7aa7489b4c788049d1b555750fc26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=0be3dfe4008c0596ebaeb9bbf12fd3603497977f7c4ef0469ce845f1b0d4b8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=1add902b4893c28b83350d43faa6c91521495937fd947f11ccc8d4cae1a36607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=c7b1762edfe37bb8ef6fd85c12e61f69a9a2395cebe67e74bd416c8e1bc5f997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=5a4dcb882b7840b01b9a885983b9a095a4e6de5c3fefa190d565185007a2a3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=16c653fc4c2036294633583015dc70f22a4932581aa7d573f7fd7d89779e555a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=8d913b7b2b36a1be592fc5223b09b6ccbd5c8339b2a95e4f91478bc65f091032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=c267700ed92bb17a8de2ddf1d917a42f10f4f3f718e052bdb906effc15ac199a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=0db77ae77fb382903b89f7f984bedceedd788732096bef35a967a64628427a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q7XZPC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDmCo1SRROv1XAtgBiI5fTv8Ip4TgZZgx7fwglN7xk9%2FgIhAI96p2Pv1pMW12kdSJ2dncUBc62GKhUf6N6AKJ37z9cnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQy6MlFPH0kiw%2B66Iq3AMDXppnk0VgZ5Us6RKgTdop7EEsbijc2EhQMxJaXaaS6dymqr%2FiouOFHE7WsfcG6RqjR5LKfqtdNtRhxa5aIAH95vaRwsJ%2BntLICnwjCO58P4Izq7UsaSkELvTn8ZKumcVlil7cNYTRNZNt9WIWlOtuV%2FFCI%2BPNu2zqi36pSL94EsHceJ31I2UACtApqiJumLsRlMTycsUtakpIJOCmlCxH1YLzNpfr6%2BuIW7iVU5Psl6wbhm9MOceApYfkGaJjl4wzqU6aia4WgHOub6CdXNaTraDEwIpXXB7309GI7KxyIaR%2BavSqD7oGSSHuRF65ZYJ7RmO%2FNRMU%2F6v1Y2r50HM5Tv0axh%2BgE1g3jR269JvAcd8kF9ij7QOSGQh4LyBvYKPpOkWakPwo5ViJduXUqVeAwphFyKwDhshPEz4zBYeiLnkVVKtek%2Bx2ajMBXqaUwUWVSZmRqfQYAdMJaIPd70FGKh7qtVU%2B5d6%2FZh9xQ1jePt%2FxyjWEmFHOgJrnG72mlZ4NvRzwR4S4jezBF9DK9D65tGfgT1RC6QqBZn%2BjeHtAh95mLw3QbyoANDVT3Kx8oqcSs2d2HdxmwpOI3csiUCAF%2FIuwxKHtDZs5xIxPg5t3%2FX7QcXHEWhFnLwGQQDCintfKBjqkATVlLsa19KGyRGTAWRG3ivmabnAYVkTaXftTQEjfoNFWHFqQol2SoCI5UF4xz%2B06jwno37AE4dEChUZRopTC2zyH76nnTe%2BWrzpZ5LRHY24xbqdAEGnglrp%2BzGEvKWMHxX8fx%2BnffNFaKs6N%2B36OG%2F4iwgRRBBy5%2F8eCdugBQBqPF6Zsj%2BZWbT1djShG%2Fyoxwqmmyvkej1XUlbkL4HXvUhrX%2BcoU&X-Amz-Signature=e411c5b0c21c634630e7a255a52f56c0870a4042dd7ba3f27a5538798717edab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
