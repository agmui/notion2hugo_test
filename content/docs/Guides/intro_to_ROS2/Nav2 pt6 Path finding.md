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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=1f7cc7db37e288962fb6bb6f81492da4d12907db1b35e95fddde3eb2a3f65d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=30a1e6a6534502378c0342faeb1b09c2440d4c276797cbf0596aea1e22611de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=4365b41ccdea61c78d9af30f4740e8ca3dd7886106881d74f836809358650c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=931e6f8a02b956ad7146a8ff6632c5c8248096c58efe70daedc0d8f0d6475578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=7a574bcfa1e66106d241140d2591a9bdb306133bc02ee59d20e47129c60e3abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=48dc6abf424df7a49a2093cf5482d6dc947d963c7841e21eebda1dde9ddeb67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=2b8980ebe831c6f0f06ef0f873488eb323230ddcaffc43d5d505b8235ded5064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=a3acad4aea8b3db449f50244e24cb16ec446081e7fffe15248dee91c53a9875d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=c7631f2c681dcd9553aff9e1bf4f300e03e8e5f141f7f511a86cbb2b04a91b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=fb24fff161816e9fede0b3aa70a5c4582b32e68fb87984a730ab533aa4e4250b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=08b7ca7d40c9587ff14a766560a2eab4e6dc0198b73f06b1775c799c68428ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=d4804f90e3f1cd7f48baf4cfcfd013fc403baf03f027af3e5d3a0f1632496497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKQUWIA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFVhm3FYQ3labT7YCf8fN%2BTtXqaYrFUNu8HkQuBfs4SQIhAOMFJIWWFuWhCCvD3QFAV%2BFTPx4bjfXiQaVfHMP3%2B8uyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAe9it%2Baw4YzQ6Edoq3APeVaaFpaJtqOk6q%2FN1KKD7I0po3gIFN3zO63cf7CSJLFht416ho0wTi6PELoarTrEWVmGGKhFtFlLI%2B5C1K8y9dV3zL8Rg63SE5S2uHjYImTFGorJbiTRsFfv7ux4GZL3DCbxmRxRECEFOAdw7znNeJ74R7kJZ9EvKQ2KbH7QbS9Xc%2FDRKAYiQPPPkhPgE3NNOmp69OjDBkvQg%2Fatv5Xu3b8qNliJSUF6T1enUofXylFrc1p2qbTjYly1nBsC19pSeLw0tIuK%2FxouDpJdGrfpJ9OUflIeXjAyA7AD7WBx0jjRDNsPi%2BA8CwcHvnWiMg9ez20Z7WOft6YyVEd1tppPwnS0mKmaw0fKv2PUSwmU8Zfno9VgSJck8Riu3YSofHcNhNJGjVzvXw9JFhKDIAOZH6y7OmhCXqdufxltVZKbD4AyBmRgHwYBfKMKsSvx7OyKd0iMKgRfqPHoav2ze01XPLO%2Ff9s9uMp58o%2F0Gt3xQXsA68GjUGsaGyVSEjyiQtRz%2FzQQktJ3eGhee%2BdBehpFpS1A%2FURRkL1%2FV%2BsRFFCtzXgB3PVyGmCcGGQ9tPO%2BWQ0XBX1v472WvEVA1TiFzUfKpl3tE%2FZIwbZPwFiyHlIn6yp6YKmP6Nr1YNfBe4zDomqzEBjqkATImq6mJpF6PpWsdan%2FSoCQaIoaYsxS4fE8K0txdUXI2yXj7IguzkDiyESeODKyoG5jddiBwXG%2Bg2iCu2W6s7dn8o4h5PwdSUNaMViIBXfBo5%2BpSBFjKj8x55%2BJtNu4PIAxKzAdO%2BX8ZpUuXbnyJ7mKANcsjhzV6NLEup6AMq43OVEvtEkKT2Jc5sbbgsl1jsbUonzVh0flI80UtIWe%2FwuHhQuNv&X-Amz-Signature=7f991d76bfd0f5d4f5782ca2d87607499fa9c4bda970e138d12eacb7f893816d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
