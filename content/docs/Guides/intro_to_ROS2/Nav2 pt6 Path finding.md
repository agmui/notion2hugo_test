---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=fa03aba0ae58fd6f7b74f0c6efac7570c92f048e84a4b37ef9edad5fbd9c3bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=9a5a2cf35f449e17c5d1f84b7dc4cbf6d1022031dae681fd77ee302578637dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=cc253def5b55fc1fcc5b113222052b747ed1cc1092c54f530ce4768f164c27c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=f8f2e62fdd8fe3a32738988565fc5aa540619520ee0592c8f0244e082683f9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=7b4336a3b56f7eb4572c55b1f4eca9f798ea069573222d88153bf6a9b8f625db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=4aa0de9ad68ff947d39b633282781faace0cb327aab8cc2f70c5bd237e8dc7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=6bff65b910b5582737690b0ee6501df02324f81b91c485b3abedc22754544ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=ff75bf56ec1f4ef69657f6c17ae0d586c4aaa50ffec0c3b2b9b04fdb615453a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=9980a72c3429703e178f1a7f3696ae2a5537f9660c6764a99c3270fbdffff40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=c25fadebbf59cd449edb1c3865990e0a1951c86dd8bd1a015c9cb8ba003365a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=caa0eae3e6fc259641c5b60d27660c5a4f1bb2d9c96294ce6bff6abbaf045de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=d46ce0d0dc34e7149942b8819c5edabca077ea131ebd819ee13e4d7853c2aba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHIPNY7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUX6RwufIP%2FNQ8jTQCtVeL1ilK60GSHG3bDJIhyF0pgAIgNMBFDb4T8ovg2ixF3E%2BZUMrf5ZuplKascDdAUA3mojwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhouhZKMEtAFxocCrcA%2FjOBUm7N3bROffzabjMFE4bbmGjOkPXUm0UAYVyjyAvFCJWXXlRq2LxizwnzumQp%2BkvpMgQ9JQMrQBoT3Qp7CTVLd9HNJRnzmm0%2BLX2zccRZSNzhK39sSo0ozgxSeRFzP7f8vy4aGwgD3lJjVJ6OuNDJN3XafeR7l7WqEtmq2EOSfORvb0Z2mGW13Hhh6KsqYp3g24cLv7fkl72Yn4rMSOnXdsv9oqJb198gCcPAP%2BltQXGMRaj3Mx%2B2J%2Fe5a%2B0srXc%2F57xFafJpY4OucaVCqNAj%2BG6tQqOMoMgO4oTArc%2F3V%2B0QXr%2B8cWxEPNy7P02iSZ42xBmWBqnHnVoG2EMbdpip34HrBdE4pJuiBhe%2BflrvQd0z6le86JmHgliM%2FesvmXgf5pv9bzy1BJa%2BPXbOua5uJnzpXWhZT%2FLlRHENCBgNcDDNsazoLzFnYHtUObaZ8goP%2FyeNZ8fVTHrM33aohXtfEKQILfiYeqdB5npYcFyqoef%2FUUUxD3AAGlxiuOTIEyP6K2UJgifddXxfekIFijWcfJus2EUAnVhl09XAK9wd34P9wqaXwqYrd%2BhZO7XEDctSGfnRDiwKZHo4804RqdJ6AdcAS8Z9T2VH%2F8qzb0dUftAu9xI1YtyitPzML6Js8QGOqUBMYJBY5nvzGz5YeVdKRYNIGtKX8GYHZcIS%2BbA0lEz7EQHQkDINyjnPbwFswHAdsUp0U5sWFVrONafRJjFbPTQzNfOARXDJEqQebkrD7mP%2B1arfrDrj%2FgiFg8R00gHlS%2F8pEtFvNRouWwoFOiXQcffPTeO%2BRJbEk3ogQlV2wEG7PSOGxhdZtYxikYx58zCDBtPU%2BIkETFhaV69XqF6DrV50oou8WIO&X-Amz-Signature=5084a9ac523450d200b0fc87f6e839edb746fcfb600fc81fb466dedb1b780db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
