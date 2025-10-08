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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=6750cd123aa15e5ec34f0d288dd5238a6b83dea86d4be457d8b05dd3905c8f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=a999b96529cf785cfb9fbe66eefbeb4c812cd429941df76067b4ff21a2e0235c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=862ee7e68ba06f920bf2275fcc3a55e9848e19dcb6b779f59d45188b25dab684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=e6cc283d70807aa894d3d6a84635f192a93c374e0d95d1d57e9e94d748812185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=291f45e84d0694545c6577a09421d0a1742bfa97ecc226bb3e76329018b25301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=270f8eb493e2936c63b48d25538e28186408de46e8ac5f18660809537295b3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=1b60068b1cd46a89eb40c381be0d98c9f3c71e7a575fbcf4e48f53f6c9472ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=38c4748e0b44b1659260be4586301db69c17b8d325f0a290092d489f759c5f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=34679b25c0e2da85e3ef8ea5eef4dba9708f777d0de8253f789cf72cb46071f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=700416b3bc0ad538dbade2c017543522c0a3dfdf1fd8669a6a15853d94a5651e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=31cbf428c8f3e274d0fba26f5e2c47e5c166f1f4e36db077f2a2a0bfaf54494e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=146f2703eef030b67fe10186c257a3df93f6c83b1e17742b1a1e74681b0cbdb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVMF5QL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFZARixIOIKPkmzUOiI2aOcE16o3Tiistt6vq%2BEZcob1AiEAy%2BMKsSbA7bTeWaYd46vT9GUV0t1tW1OMwpRb3XEjiO8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAJ4G1dch11aY%2BEUCrcA%2BusFpeve3U7Z6HlRbEXS0k1SbdwUBCegMsodQjch9MC8q0I9SP5jZr8JqpayOXg5NXJVSKhEHnqIqf4ssPB9QbzSp4zRKESvl7VC8W5jFQLwJ6GCvUGAk6tbFECl2CiVDZaB8uC36g71P65jfXkoiZIERJK5P49iuOvyXtUrxy9UFfUlQHdZxrnSDjjCCrWDkYhgudRnJKjLEBe5cX9ct6GJTgm0%2FX4lWzEKg7xTfmNh9aQu2yeFPhxIo3q6kJn8BEmzqt2kdCQpQmoTZmEP807ZZ3VPPct4u91XoAEXwk7wq4t6fcQGSW1WBRIfyzUcTJOOhHKvqHMVqw%2B5LPdBOf2b6zTTACuaSfDKkzWWedUtBaorFjYwUB%2F1KTrCM5UToXZJipkUCEMueczp7qyNLx76f2snpLc9FrfS8%2Fx4tZyNmtFANqY5ERpBLeIjAG09CvFqg9o7XQNVpVkWxjnLrrQveEv6%2FmK66gPK4dkQnu%2BRi8F%2BSKc339m29rjYVm4RDZDHliuG%2F2uKIDxEU0rdR6TIYfR8SNtFWIJDJJHeYdavDTDb7YDqxhk6ZoywYH78KjVmoXYLpflNT2OxsKL5C3qsNfTQtUECg3pYVjdAR%2F3HIQ2972Momif%2FoEbMOvmlscGOqUBzsVeMT2mPOeKan%2F5SspwPY6eagWmEToLglz%2BMMMCzkm6vwmtGnpPmfCVVk6vPXpxB81BIoovc1c3YWEoI96VQrOWTivGuNqq0RxHt7RIbOH0aQswKptVld1yom%2FOU7Vex4bxZ72LSrbB7jV4S1PBdgdOhKGf%2FFxnQ9La1Abv61uLVmLSvSjufbtd1qFykgHSuRON8aNfIvoh6yWsPStFZMnPTuoW&X-Amz-Signature=95c627ddfacd960716deaebc7259b5185d784b6e0bb63e48b62b85bfc1204cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
