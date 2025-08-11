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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=7e205260fb21420b822ea4a8deddf948e08bbe0b03a800c311714e040723d369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=9f193fb9042c46462923e358c6be72a0fbea17024a06eddb50953af71b6e588d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=3095e7acb20dc0d993a3e47f02e7e3f75bffd1f1e28283bb093beb9ae2503d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=231a320576109be669a771ef114350ff0b44f35f892fd751261f558f7a2d76ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=0cbe282d0a95003bbc5eec873984efcbd649dcae3e4bb7fbd81673f6b8c17da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=ebb23025374261355fb6e8307e240e1f75b484bfd07b3b3cdbfe825ab3dcc484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=f094fb4f7ed310fa7fa0306f1b7f2a8a80b400685eea1244c2f19e1b40decc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=fd4e267e1826bf3923845dc8c14a96975eb508b5b1fc10331fe5ac1f2df85b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=73e01f63c13fa14742d8cbdf5727963789fd50db10590752f6ba6e9eea4209a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=e14771c8b87ebfa764cbd95dc003d158f85c41940ff8b56f87915314de39f7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=118cb131143c4e3ac1b732b0fb6126950d5f1a53f04d78b94bb4d8007b5628b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=7304201bc5459ec4d10a01d267fa279d2b6fa0851a8f890f9fe2409e35317c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWV4L6JZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaW4GRXoDqzts8SFaJ%2Fr8%2B1wHb4iR5hZ%2Buv8YhtG4ljAiAorRfCbScC1PliRXICxJb0vUXV39bJEfQncpkCDRQeWSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy050ExPZGcfmwtMEKtwDTHsOOZOdHYXjEIhCyuBqVXPlh0SvnymnWRW0SpW%2Fa2IvXkUpoI7ZT0I%2FokGT8AV%2FTi5x1UAQAatdKm3u54s9jf3Er7ap%2BVXDOGGei1uqwYEK%2BG5MRMwDgvFSgdLkYRpJvIIhdE%2B78OCLktJip2LB%2F9j5qpI94SDFIqsWcnaZcxwrjOmYSYAnY2pUMQ%2FyIefuFf7BynoNpEvK5DFPySaHRuhWwvofaSVQir2%2FgswsRgkw4%2B6aH%2B4tBv5Axxju1Ql%2BitDY4oA7gEuYp2FdKC5MJVz3lgrZyqAocV60vk1GnREnp9%2FDzwp1veaU2VZP12eHmXDfFqybT65Ae7FscrhvlfgUfF6BNjZazzGu7c%2B5mIxfjvjKQIv1Kq63HVxkz7%2FBzJgYG2ksluBhllMjlQZ3dWVK1vjn5uVGul7T%2BA%2BMABYS83uCSUcq8bRKTl93tyYsXVgzpkfnDEPfRVCm57xBYJdyMpskqcD%2BP30Rq4pQMiQi39pidDZnmpX2H2gaPa3tSvHOba%2BJh8iFfncdl9%2FOB9VJF7ceNJ9O4hMzhkpOn2%2FQF%2B4wOnyOGnrZSx0JShUQ2hMWXNwgWehH30wv4RT5%2FRX91lhfh%2B2%2FTInP1pem42%2FKIvYCTQXfmS0oefswjZ3lxAY6pgEQInUMDnXqDu3NQ%2FUo%2BO9GFleYQ1yhP9gBJFah5S8cb4Yakbu2jKCiQ05mh6kN0HeDGYbkKhOK9nB%2BCbozaTrwv5kcDmQo9RaXze0EeBm7tmL4BNWOz2COp7GIkVgqXLwVlpGGqC%2BkWzyZlwaGAH2VhXU4BzcpS9xIeI9CKXM%2FWhnSa9krr4eJpg4qbMa0Y5%2BkN56%2FEgdsCZP0%2Bv2H04GgMz7SYCqI&X-Amz-Signature=92a3b0cf5edcda184c8b437b99894aa5d910c74167f8b5948746e2c6793079d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
