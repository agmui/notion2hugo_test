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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=41cb2c07fdee7528c12b13f76f90c20cf15c5a12f9bb9d6f268ef831bacf7539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=8830f56b08ca7448a8f510d08f1ddcda59b5cdb708b63f8d30ad301683caae94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=108d03d888f80127958f4847ad279cae2193cb283d1c26a27404aa6c7f0ae08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=127e23bd65806c2569f3ff52bab1a02f943bdfad19154f448d9d86d2bb445e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=70065c525af8ec8c60faab56bab69d14af6bcd3c2aa1595760e527c66d5e01a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=846caac124e1ddfba4b3992a4cd77478c9cb828baefaddba9d71cc90ebf8ca49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=813dc66ce0d21390b14391d77231f1ffc561a20d2b5ef299a4e8cb210dbd50d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=e47b2904b6d366deb2f9404229658b6f1d4b125fa76690071787b64f5d84f741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=43b73e7e7a5a017bf3f1f65bcea86acb31218ca4dd2dcce9ea4eb71cdb918fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=85539bec257d022cd63ddf9248ed9661d452994d9d4247bde96dcf9ba2af93fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=4875d0fabeaf8f612dd81f0e271116a83f830686b24b5f8c069747bf7ca08611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=d18c808eaf743dccf3f39e0861e984a8f72e838a9692b86f213605a7bff5eb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQFILRR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEP77yXjpqaGFOxN7e3LD7iaCc%2FWXYJ3fros%2FC4dODmhAiAIddPmzdoUZS0OAk0%2FI9vaWEsAzSosc1adCwHDVpEimyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ogGdl9M76neBtObKtwDG5E4GbI2lSRolQrrLCkYZywOo%2Fkl3JJuuTlO%2BsPsl%2FgIpImh1NAYf06R72o4qAkfH5g1NKzcp7wFXTpNhxe4YQbLK2Pgv4Ru7RqST0qbItkQmSdaVZkJoc%2BegoK7YWDBFJuvnsK6WocLDIfTq6tisCfhFVCKJ1wfOy0qcoGnA7Wnc9SNqZQGg0PUPpTKz2lVGJpqNQ4vKNL%2F5WmW%2FejtJv5Mqv7uIq3HpIF10KnlSdf9aCSPMr%2BYqEjkzFECjijMJyKiPnlHgowLuHWh8jb1YQdWidfMZCBayKDoMwdbxXozwNkTl59iJXlCRmlGYxjw%2BgsuWpwgGirLvLJnRxbWMjEKYRmJmgh3BPKhBw3tUNwTFtNym2DGtgvXzE12bx4Oclp5r6wolp0IPO3lil86g%2FswZVu4toyk5xJzC6u2aulfhmhGGEviHsdsYlGBgOWfAfdCQZuS0xSR5vLs6P6xrcHq6%2BicujVKDb3m8kYJaOyCJslcnXgghZaLBWPqkXJxbWQXkJO6lj2r5wQIHybR21KPispQy%2FG9nqLJv4QDQ7LYfB9u3dsYAo2LOdcOJH2ssoQfNUp0OzKGXsxX8cw1xw2cCDqD10lcEhcJcauQpgeKlGeiXIY%2B8DbXbMIw44TNxAY6pgEuCIbL8%2BsIcj4gy4NH6VfqORTAEil40MPZjliTgDU%2BWZfwBe%2BP5j3S0QBY5pnm5DypslCOUgdwWSOz0DJknXPSZFyqx8IlrOXkFSTObfVWttHsGZyiVzAxCBh6fdBNYz9uyl3lQob2mGXQimAXKzQx2yw6aiBvCStIQoQu2KOHvpdIFL4mgHMbh%2BsU9U3x5D0Nz3a%2BRUjEXF9S3yij38P1U5bol1OC&X-Amz-Signature=cd209eeeeece8f9ef07a5194c0fd36a184cc644d30b29fc526d9a9a59072f754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
