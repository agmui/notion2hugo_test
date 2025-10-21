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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=e52cd8f620edb5fa72b21ffe844cdbbd317c391fdbb781cd2d4b7935895d533a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=021ac73bac933237c2218cc3ffe922e3efa4a5545ce35a6d2154751c7edcc70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=1207395380ff9f7e072b36f1e0fbd739d6078a33da86322083386d16d2bb23bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=0e55eecb5668a30bf5543b33dc8bc3bc072b1b36e898ab8f4c73252c1bfcaedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=cb58639d913100a74eeb006ba8b73f9381b7ab572d4e85b3fb686a2242b2adb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=bfaecd800a102b49fa1fbf9c12723abda7bfc7c3abcbb9bcefb721d28518e7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=33f3f087b943469340176fc3f2890904f457600ddbad655b37dc30c9a8df2ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=a740f9b8dc9f3d4baca3d660f6414fa36bc1b742d697ab36bb6d3724d8b7302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=96921cf7f2faa3788ab09b2c6923b6decc5c92b8e467c66e56c7514aa33bfc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=03969ab39a2da6ea3bcc83bbdebcbf73a5572a05a92daf8deb6d80e40f9a4500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=a7846b17ca45b2e19e5184bceff030bdf998b367753feb952d67ae4a2394baf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=effbbf973fd270e1bc67b2bbe755b77ffcb51954cc735a350606e2cba2155c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG3TBR3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHHk9Hs4R3PyA1WNiaBFc39SQhvafufqwhHh5Jxoz9tmAiEAqviNWUByZpWEtJUQ%2FuWgLB6a7s3xpa1I%2FvMfBV%2BnZNMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDEGdJqN8WvzWucpircA4wv4%2FxxSft2%2FWiReI8SSpeLLQyDegRuC5yudkg7LgG%2BrdtXSd8Xc7ZVgZiOXJMcJ5mj%2Biqc3EDiR%2BDfGhQi257cFd3xZOXNPJZu%2FioxIz9nCTQlgpPG%2BPu2HT5GPlgwE2EgnqkLBqn9k%2FdOPbljvzedR2Uc8hRBJtq1VKG8eFl2Vmk6gumu%2BwVenzGX2wD0sOIIns%2BtqiIF54ZROljdOo8quSnOV1FXQdU5uvsTQKBBA7UQsS6mAocbEC6EJ8zEuKiG5jRDFdcQu2RqrKkRdfY83so49SJv6Q77ipqeIVIO%2B2pwKqg6hSNCd5xjbNw2TSUBjZo3ngoWmj86MCSUY3yZAo7CVDirrFrl6FkyC%2FPGY1cdsxA7L47Zz9lcJgZ1%2FeKqKSqd6IeUmhV%2BJ7QH1v9G00KSNhAUl6HdMqJSjpS8kL%2F2nN0YjkPVR3j%2FdqTMP4y7SeDahWcR9CVCCTNsxAdxK9lwNMcVfetFx658IJu6U0HdRfi14Xq1W7CgRsVYYKRDFfvuUspRfFiFjUizAJenGIoukXX7hV4xZ0JpOZHJ6sA3%2Bme9i%2FxGTVpcCMCdfBw7XUF396aXJ29SykTH%2Bh6tFVwq4CJYFCksEfk4zST0NEZis2Chna7VdpaYMIis28cGOqUB0VSy6A%2BrRKYYP5iqqtCKn%2BuLMULZKpRoXgiy59K3J75tcVzrjTg8f3MhXThgGcDJFQMc7w90%2BDiWP%2B%2BxZfmrb616E5qrPPc5lktxC4yOnZaWTfhguzZZU6ztUewMv%2FW3kGAQm5tI%2BTAemdgaGHMmb%2FW9XwTG3c0ZpJaVXxVjCjwk3PMK0w%2F64%2F0XCXUwwG%2FhhaDDweU5hQCE7GR%2BNZ1V1lkVoolr&X-Amz-Signature=74816854d1ba3af49d3bd7e5cff601a35bc1313fb2e5af4bc339a1e6b453c18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
