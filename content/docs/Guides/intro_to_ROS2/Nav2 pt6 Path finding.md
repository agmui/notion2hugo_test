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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=051e3eb382e02f1623943da076e1e923c5c105959f7ed500a4a51d9d57907b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=7cb3dbd59d09926bc7ed43b6b778fb3bc9def20ab279771c25daa89894d96700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=266286265ccf8ce3996b7dcd927be2bb607295dee626be47a13a08cbce43494a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=59d0edb5e03b331c047e08ee3903b721f81139efd5b8076321fafcfe3bab03c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=9923ac2a26b231944764de7ad853214fb3d023e452ef649fa60ef33824869c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=e4403de64787dea3f532489fd10198f3f1b680a847c46de8c3364347732538c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=ea477d7da8ae3a78fcf4aefe2ce1699c755959235782030c05ec3646680684b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=acaf26dfabf2806a7ef3b07b4c034eebf77f14aa455c8395dc70eec844402204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=7fde997d663b64ba4332278832768c132270e5c9c1bde95cfe61b2145fa32fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=2073d552691409944929680a9fbc66583db71121edb4e56175c79b9a5abcaebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=05d7212fa5cfa1b1a55c5d467d5c05697e2d185b041635db1d0723e8a12f8ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=983307cb34c94340945d824567af44b7a1d8c944ef84d1ae8e95c02c30a6b551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H6KALG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCrh5SWtMgk4ygS4iMveZcxcywfuKXg53IHdM%2B9G86IYgIhAIuaoiwYQDSyhhbqPLmCCg4AREu%2FqycdAPIcR00E4PBKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDg4maSXlL6tN4pVMq3APQrMSz6k2FU7Y2NlVzykPVGcXTi3uqu7AbQbIWXbOB9z4YuVuOP6LLdxDyjvS%2FakTejV2YxBF%2FJBW5Y%2BrV%2BBGJr8blKZHpXZqtMEKD8Aiy5c2sGhqbKVgsVOABKnrnDUqk1BoH09lRPiyccGobw2b4vUz%2F%2BsaikaG7vAdAGkgTcsfgwBnqOTmykKtI5kCuTaSNPu4TnGTet4nmIEMMxKyLKL10Leevuw%2FUa0deh2jcOxmCj2GNqwnFKnPcz1iEpip039YCqFFi9Ks7VG%2BpXeU%2FNK9WoVpsjuGd9JeeNO9FgFsg2iSzCLWhWAkDhvaBusSkeoT%2BSoafhlQtM6iXWnWpjmyd%2FbQtvWDcOSATx0EvIg9JttetD8P8Axo3lHenXe2TZw%2FjrDEuj4L83mpWcrTPRFECXAEFdj0GXndgPkI58p6jLlOXbsPMrDZHCoNjqmhT6TDnM8j9axmdGjwsb2RDWI9GIYiWzY66NXKURIl6%2BlgvbuXwiwwpQ0zVJtpct5lfFtxTUyeRw8qRsdBK8ULndrXOz4H%2BE90XhVM9dbtsSnVFHCqKLsBKC%2B%2BgwGmFSNXiKSXgv5pMuVvDj3uHIveVZUFLWUpduM9y2q5nXwt%2Fu2ci77UJKSbQvqTqyzDy76fGBjqkAU7n8XlbKzb0Y42WlpRnFt0oq2aPYTo73qkLdqdmEyO255Vsl5h5fOrhP7IUgu%2FEKiYbPZ%2B6kVMQlV0vPb2yt5YLH5rvrb966dhwMIs%2FzEW4dgltvYIiWS9RNcT%2Fhu1TlPCXzx4vj6DxQ3YnsrH0qYchEsj8JupPBDrC0xo0MbHqGUrjwfLI0CazbxjP8h%2F8Pg5VaX0KTC%2F9H1OmzMX6aFyUzmFC&X-Amz-Signature=2bf92009c1764938a400a294b9dc161ec6d02ecd2c2adcaf6b7cc36461532ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
