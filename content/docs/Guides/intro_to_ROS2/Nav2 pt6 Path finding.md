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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=eacf335aad4bdcaf7d83505e67a9b396043e076ea6c9b107fb534ff0a1d416c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=5e04e0c41aed7beef15e6a2f12b372def63a8a29b382b0480bda74fcaff41da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=bf2be5c2f9d4816da46ff8f53298fd5262b48db859e3faef89eff2a05ab0b687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=92455a22fdcbeae173dd123dcb808987449bfc224db3193ac87d8afae8f63630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=c0949a3d2b46eca8db1c5bfb1938be98a3afde4b35e2c5d53c72bdd286c4bd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=fdef590ff7565de75d42de6cef2fa04f62376423979ed68036dc02b40ecb7f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=75cc97e2e3f6facc142167875e26d86ad4554b4074e9b1fac4f089b87a71b2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=ce90f09bb26207dc94ee4882d514a1b010946806962ea3046b0f1c11d8999706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=1388cdb1ce1889a4fa52ad2366265c889d570cd057526f3600f77c6f71254c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=a0da473176461310f55472f2e7cfbc3fa3a30c5c7753c771c8a6f1d056c442f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=b4c0448f6be17fcb84847b5ed5b4ae79b537bbdaff66b07b945d443d9bdf552a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=d5f470a71b572be38d4cebf8c310a1389fe19c0f944d803e164921e9dc246b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVP6IMH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrZr7syhdIvKoDk1D9s6H3OAqnrP5Dvn3%2FNdBKe%2FtkowIhALgUPKsXSxPtBSRniBGFhsJJ0li2gVwPgI7uuVZNJVIjKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd30wnkGyTKawO3wgq3ANuUxltQOl8to6tmkHMoES%2FzRiS2qgWPhaheISUKfSYCPiiciKuhvG2KwWq7t%2B1xRlsesY5iPLqcIZLesl1DobLs82WtxVjCXVtA%2B2H5sZcuzSzcHJpCSqjlIOnqKYVRahFbr8ycMJ9ZgUr8urwt%2BSY0joJF341lbLP%2FQZIcLwgFoxQyRqxBh%2Fakzl5rgckgHPusx6bAiX%2B%2FtKQCZQOtEMQjqkHZ1bPHmycrTyp192M%2B339G7laO0Z9pQ6Ic90p%2BfFhK9vr1z0Ond7DLeJJvP9kzzdZqmhHf2jm%2FzvuOJNlPf5aQygaWIKOB5trFgK%2BvH9OAHdfw7Hi581%2Fr%2Bdfb40kSr8CIvlRDYaUgUz6n4Xbdh4aNJ3h%2Frpc%2FOUUgqEfDpZHXNuqrlz7up66ffHTuG6Bbn4KnW4JE5SqVe2VyJIcjxorJVsmkoPk83xALv3JlAvemB0z9LrqlWQ22wK%2FA%2FRaxVzSW2IGWzNUa8WJTgErT9PWMUdngOMTzvdkWMiQPxxkJKHo8rKol8vWAW6%2F6bZp7wsijqP5IgrHtFK1wUYmu8qTSZGmZIRr%2F5lFI5cuEeFb%2F7jSR8JXshG5ljI1qbvL3rFArJI%2BAaQUjsQksTyNSqNKWiTN4D32psA43DC%2BxNvEBjqkARuRlBkFK84%2B5rG5hTjg%2B55X6zylMzzKwlI6bla9XhsLjqo9YSbeDlGE46YAVYDCCgOUZqm8VSmwuX%2BYFqepabaH0zcb%2FLZIcPaLKkGn9ngVVZ2rYeJYDWtgyQBbm3UGY2%2F7L3XvNxX203b3eYcw8%2BYd9lrJQH5f8LmZdXk4T53Ylxm1OTifdoe4i2%2FTFMvCZM5lvBXtN7PLEuqLSxGb95NavvFT&X-Amz-Signature=06987c01f38e3ff0bb44a80ecf3f2994eb00fbd1d9f395d08903c8ef9948e6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
