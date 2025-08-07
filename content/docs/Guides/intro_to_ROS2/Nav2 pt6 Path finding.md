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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=24892e749ba8d2f4d915ef0dd51e92a1602a0218f7ee6807bbd7f9f5b8c0ff1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=b41918d2323626dffb9b097e4b68c4b16c6810e4117d53724967b0f7ccb49324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=c29a1e6ba744d393fa814b35930f53476734b28f5113b7d2d89b0e3f5ceb04f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=f0902912040afb1adcfb3a1b4a9fa9b4ec6a97139af0a1f42ae2b21b64c670a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=1b232d9ac4788267ec0246a0ce95b68e7465a7bb62a49be82f826cae7f5ac7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=c6e307b9452294b45a6c9e36540bcdce9ec8049ae90848f4265d5217df8a3059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=04c2359c470279b2dbd3e18864223a821408a30c59832dca0632d174241b59a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=34cb331b27f4d741489c37b07d47b282853e3cd4d782d1a9a2eafb434ba45127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=61bd890caff4edff440f24056303f861408b81068b03a5cdb5b9b82c054cd351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=cca93a2ea3ddd660378a3535d95c7eb311c654015a2dba0b36aecfdbac1e9860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=0a515374c1f97275a4fc73dd2be298508b568501698b325aeaa8b4f78763130b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=ca6923c5dba8117edc3884640f0f594e0bf214bed14e5131c04a3db7360a0b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OE2SJIX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHa0c1HX8CR4wQjTdn%2Fp%2FK9eJC29Ug7NXtH744dobxGFAiBQEiBcNhF%2FH2knnxl33n5sVkhoebMLv%2BTDWiocURUUFCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCFG4hH1ui0%2BotRBKtwDIP%2BfgOkZ%2BsFMMC2yy4N%2FV5Tag55XYeCF5qSrzHpGmbBm3t7Az6YzpF8SgTHCUk78v8tS7P6yXR7aV4Gp9fkL%2F10SanVYWnDYXmaWL3wDuhOaSrOc8a2Frj2QafEsH3PZontGPWUcZorhub%2Bzgt2ojrbXUz6CTRfGSUf6EGzt7BkKttLnOqxohvvcotuRXgCtGQn9Ggn08jJe6tue%2FETgTIsUtcF41QNNaX7%2Fj7jmNMyf4VA7Dd9O4camYPIwuTbD6sz%2BDzYhghFEu37mgqNW9Spr7%2B59fNzvnt7IMTPnnEN6LbMlIHXuDNzk0aMCEc0tlmSajoHgBa%2FA99P4Gv5WrGd0icjqau9aUuvjvBcS4mIWsW%2F2SdqZGMGulxiKmISBrfwJjCDV%2F%2FhoR6G1nj%2FtZgO2Zb3kmgJfVVnkcO%2BJ99C6%2Bmw5iUjD%2FgcZPkGXagu60KwGHYW%2BaPBiUNszhCHgBNg8AklqAs%2BegJOlTXs3q30Vx5XGH9BsFRkFrUSQeaNFlhm3Qna2owVXE9P7YyjQIsUr7bpL6VTzD4HeFOZ7IsrUhNLV1szO6WWrx13SWYKAQvoZAtar4T42JBuGq9%2FleAjUdNNdEmkEvBw0zTlkUqW0Y0lcjSrk5unE8JUwl%2FnSxAY6pgErUeMnGzRJWmuE9RY5uBHZ%2BXKSSFcA3nI6ax4X8HWFKu0qIyOWPyARcMqn94GjuvTC9gNxWYrc9fAtqpoTy45%2F0PEMMMq9vjdF30hMLtXtm1ctouGd0X%2BUxmujS089VJ8jb5z0LE5o4t9JOfKCSKaBbpk1mYgJWULeoGpYCbSueldbOMVuIDvc1tvq4%2Bv5yIas2VbhAUGHw5imQfaMR44MnwaxX6%2Bk&X-Amz-Signature=993479f1921b3ef02eab382fe68c6e0c7ab226f8ef6a442a303146aa938f3ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
