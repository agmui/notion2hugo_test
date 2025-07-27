---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CYE7WS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDaHMFrXRuUF2iq%2FQuAuS947K5xhk4Pdi5ORKxwS%2FP8iwIhANIWXw5XY6OxWR6Gp3L23s8E9Gjj1UdJxEOsDiyUdIyZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzR9hR3aIYtpDlvFjQq3AOqBIbNOR07OjBoNuQayeF5FmbYPXIbkB99L6VfOczELDHfeo9UFKtKyLXJA2uRm9qmZwBeaK2u53Lb1FSasP0V%2Bs1439RmKXQObdndwSBKraopw7f95SbNJYKe8bA17DD66rrxry6KIMAKOORaDHZEv5zXpFCUnRKFRsZQaQO19vUuAllCT9vgufHDb%2B1mb419S15lTEqzSAfO%2B3k5pt%2Fhkuvcgsno3vn8IVMSdyVRroqSpZZiO2z4iuTfh69YCdyNCIauPHJ7%2BMRjjzK9Eg6rvdUH59ctN9AtBnQuOW7AJmz2Dh7Dk34UQq9zIEk%2BDRrvvRdnEufRMSjWqLiiISkerqzQHDD%2BK34OKtdj7o1aml6jGD4oLu1cleKA5Wqtg9C5huCfrEJrBKNZJrc9Bv88qx6jWj6W6zU0zG%2FKo4FVqWSJoairIAo33CWFUoiDmmXukn0EB5%2BiiA8U7vry7CkFvdCBIPP%2BUiVL5c3h1xJUPL%2BKkbvY618Dz%2Fq1F3pZhwBfHzzFpyjRqtOsOxlFGpS43OH0ynJWPfqpHIqvoHgRQsZO4NKZmj9%2B%2Bq3G6eZmaiYr7qP9KT1zqidmix3CmM%2F7nFVWgS5uiqv3Br2CR9inkvbyTTw8uKAsalloMDDtupbEBjqkARCWm40BDKcvuk7ET7qHLkTxr4tOIEFe8YqjF7cZClrDJxIDGIwiNBp9367QM4FbmV7%2FEDrqA4zfvnSODkpG2EuD8ehuYfwC1bEju871F4ztZi3bu%2BfW6WBy2kNeT2XMU3RKDNIzmIhkACi5hyNDub2nDaN05vxnTN%2B7bSdPgNSHMTfT%2F2lcpWFvVTIPC3YTH6YVw62lRQJW726hNpRw55RoQl9A&X-Amz-Signature=6729933c420c4ca811669c3cbc168c8123b49c4efb58e4fa31ba7b5b52738e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CYE7WS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDaHMFrXRuUF2iq%2FQuAuS947K5xhk4Pdi5ORKxwS%2FP8iwIhANIWXw5XY6OxWR6Gp3L23s8E9Gjj1UdJxEOsDiyUdIyZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzR9hR3aIYtpDlvFjQq3AOqBIbNOR07OjBoNuQayeF5FmbYPXIbkB99L6VfOczELDHfeo9UFKtKyLXJA2uRm9qmZwBeaK2u53Lb1FSasP0V%2Bs1439RmKXQObdndwSBKraopw7f95SbNJYKe8bA17DD66rrxry6KIMAKOORaDHZEv5zXpFCUnRKFRsZQaQO19vUuAllCT9vgufHDb%2B1mb419S15lTEqzSAfO%2B3k5pt%2Fhkuvcgsno3vn8IVMSdyVRroqSpZZiO2z4iuTfh69YCdyNCIauPHJ7%2BMRjjzK9Eg6rvdUH59ctN9AtBnQuOW7AJmz2Dh7Dk34UQq9zIEk%2BDRrvvRdnEufRMSjWqLiiISkerqzQHDD%2BK34OKtdj7o1aml6jGD4oLu1cleKA5Wqtg9C5huCfrEJrBKNZJrc9Bv88qx6jWj6W6zU0zG%2FKo4FVqWSJoairIAo33CWFUoiDmmXukn0EB5%2BiiA8U7vry7CkFvdCBIPP%2BUiVL5c3h1xJUPL%2BKkbvY618Dz%2Fq1F3pZhwBfHzzFpyjRqtOsOxlFGpS43OH0ynJWPfqpHIqvoHgRQsZO4NKZmj9%2B%2Bq3G6eZmaiYr7qP9KT1zqidmix3CmM%2F7nFVWgS5uiqv3Br2CR9inkvbyTTw8uKAsalloMDDtupbEBjqkARCWm40BDKcvuk7ET7qHLkTxr4tOIEFe8YqjF7cZClrDJxIDGIwiNBp9367QM4FbmV7%2FEDrqA4zfvnSODkpG2EuD8ehuYfwC1bEju871F4ztZi3bu%2BfW6WBy2kNeT2XMU3RKDNIzmIhkACi5hyNDub2nDaN05vxnTN%2B7bSdPgNSHMTfT%2F2lcpWFvVTIPC3YTH6YVw62lRQJW726hNpRw55RoQl9A&X-Amz-Signature=98952259e3c5cecc719b7689d69e60390cef0f3227def91a6e277ba410af1ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CYE7WS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDaHMFrXRuUF2iq%2FQuAuS947K5xhk4Pdi5ORKxwS%2FP8iwIhANIWXw5XY6OxWR6Gp3L23s8E9Gjj1UdJxEOsDiyUdIyZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzR9hR3aIYtpDlvFjQq3AOqBIbNOR07OjBoNuQayeF5FmbYPXIbkB99L6VfOczELDHfeo9UFKtKyLXJA2uRm9qmZwBeaK2u53Lb1FSasP0V%2Bs1439RmKXQObdndwSBKraopw7f95SbNJYKe8bA17DD66rrxry6KIMAKOORaDHZEv5zXpFCUnRKFRsZQaQO19vUuAllCT9vgufHDb%2B1mb419S15lTEqzSAfO%2B3k5pt%2Fhkuvcgsno3vn8IVMSdyVRroqSpZZiO2z4iuTfh69YCdyNCIauPHJ7%2BMRjjzK9Eg6rvdUH59ctN9AtBnQuOW7AJmz2Dh7Dk34UQq9zIEk%2BDRrvvRdnEufRMSjWqLiiISkerqzQHDD%2BK34OKtdj7o1aml6jGD4oLu1cleKA5Wqtg9C5huCfrEJrBKNZJrc9Bv88qx6jWj6W6zU0zG%2FKo4FVqWSJoairIAo33CWFUoiDmmXukn0EB5%2BiiA8U7vry7CkFvdCBIPP%2BUiVL5c3h1xJUPL%2BKkbvY618Dz%2Fq1F3pZhwBfHzzFpyjRqtOsOxlFGpS43OH0ynJWPfqpHIqvoHgRQsZO4NKZmj9%2B%2Bq3G6eZmaiYr7qP9KT1zqidmix3CmM%2F7nFVWgS5uiqv3Br2CR9inkvbyTTw8uKAsalloMDDtupbEBjqkARCWm40BDKcvuk7ET7qHLkTxr4tOIEFe8YqjF7cZClrDJxIDGIwiNBp9367QM4FbmV7%2FEDrqA4zfvnSODkpG2EuD8ehuYfwC1bEju871F4ztZi3bu%2BfW6WBy2kNeT2XMU3RKDNIzmIhkACi5hyNDub2nDaN05vxnTN%2B7bSdPgNSHMTfT%2F2lcpWFvVTIPC3YTH6YVw62lRQJW726hNpRw55RoQl9A&X-Amz-Signature=19aff5b9ac4bb1adacaefc2dd517a8ff97a7fc20c2ad8b8df68ede5d4fc7d154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CYE7WS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDaHMFrXRuUF2iq%2FQuAuS947K5xhk4Pdi5ORKxwS%2FP8iwIhANIWXw5XY6OxWR6Gp3L23s8E9Gjj1UdJxEOsDiyUdIyZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzR9hR3aIYtpDlvFjQq3AOqBIbNOR07OjBoNuQayeF5FmbYPXIbkB99L6VfOczELDHfeo9UFKtKyLXJA2uRm9qmZwBeaK2u53Lb1FSasP0V%2Bs1439RmKXQObdndwSBKraopw7f95SbNJYKe8bA17DD66rrxry6KIMAKOORaDHZEv5zXpFCUnRKFRsZQaQO19vUuAllCT9vgufHDb%2B1mb419S15lTEqzSAfO%2B3k5pt%2Fhkuvcgsno3vn8IVMSdyVRroqSpZZiO2z4iuTfh69YCdyNCIauPHJ7%2BMRjjzK9Eg6rvdUH59ctN9AtBnQuOW7AJmz2Dh7Dk34UQq9zIEk%2BDRrvvRdnEufRMSjWqLiiISkerqzQHDD%2BK34OKtdj7o1aml6jGD4oLu1cleKA5Wqtg9C5huCfrEJrBKNZJrc9Bv88qx6jWj6W6zU0zG%2FKo4FVqWSJoairIAo33CWFUoiDmmXukn0EB5%2BiiA8U7vry7CkFvdCBIPP%2BUiVL5c3h1xJUPL%2BKkbvY618Dz%2Fq1F3pZhwBfHzzFpyjRqtOsOxlFGpS43OH0ynJWPfqpHIqvoHgRQsZO4NKZmj9%2B%2Bq3G6eZmaiYr7qP9KT1zqidmix3CmM%2F7nFVWgS5uiqv3Br2CR9inkvbyTTw8uKAsalloMDDtupbEBjqkARCWm40BDKcvuk7ET7qHLkTxr4tOIEFe8YqjF7cZClrDJxIDGIwiNBp9367QM4FbmV7%2FEDrqA4zfvnSODkpG2EuD8ehuYfwC1bEju871F4ztZi3bu%2BfW6WBy2kNeT2XMU3RKDNIzmIhkACi5hyNDub2nDaN05vxnTN%2B7bSdPgNSHMTfT%2F2lcpWFvVTIPC3YTH6YVw62lRQJW726hNpRw55RoQl9A&X-Amz-Signature=d0d290e0a34da7405b7537b8905148016612aafed2260cd2ce8ef5886b15798d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CYE7WS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDaHMFrXRuUF2iq%2FQuAuS947K5xhk4Pdi5ORKxwS%2FP8iwIhANIWXw5XY6OxWR6Gp3L23s8E9Gjj1UdJxEOsDiyUdIyZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzR9hR3aIYtpDlvFjQq3AOqBIbNOR07OjBoNuQayeF5FmbYPXIbkB99L6VfOczELDHfeo9UFKtKyLXJA2uRm9qmZwBeaK2u53Lb1FSasP0V%2Bs1439RmKXQObdndwSBKraopw7f95SbNJYKe8bA17DD66rrxry6KIMAKOORaDHZEv5zXpFCUnRKFRsZQaQO19vUuAllCT9vgufHDb%2B1mb419S15lTEqzSAfO%2B3k5pt%2Fhkuvcgsno3vn8IVMSdyVRroqSpZZiO2z4iuTfh69YCdyNCIauPHJ7%2BMRjjzK9Eg6rvdUH59ctN9AtBnQuOW7AJmz2Dh7Dk34UQq9zIEk%2BDRrvvRdnEufRMSjWqLiiISkerqzQHDD%2BK34OKtdj7o1aml6jGD4oLu1cleKA5Wqtg9C5huCfrEJrBKNZJrc9Bv88qx6jWj6W6zU0zG%2FKo4FVqWSJoairIAo33CWFUoiDmmXukn0EB5%2BiiA8U7vry7CkFvdCBIPP%2BUiVL5c3h1xJUPL%2BKkbvY618Dz%2Fq1F3pZhwBfHzzFpyjRqtOsOxlFGpS43OH0ynJWPfqpHIqvoHgRQsZO4NKZmj9%2B%2Bq3G6eZmaiYr7qP9KT1zqidmix3CmM%2F7nFVWgS5uiqv3Br2CR9inkvbyTTw8uKAsalloMDDtupbEBjqkARCWm40BDKcvuk7ET7qHLkTxr4tOIEFe8YqjF7cZClrDJxIDGIwiNBp9367QM4FbmV7%2FEDrqA4zfvnSODkpG2EuD8ehuYfwC1bEju871F4ztZi3bu%2BfW6WBy2kNeT2XMU3RKDNIzmIhkACi5hyNDub2nDaN05vxnTN%2B7bSdPgNSHMTfT%2F2lcpWFvVTIPC3YTH6YVw62lRQJW726hNpRw55RoQl9A&X-Amz-Signature=b1edd9fa0dc8c4c1858296fd64b31ca950cbb5f4592acbec5380adfbd978b1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CYE7WS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDaHMFrXRuUF2iq%2FQuAuS947K5xhk4Pdi5ORKxwS%2FP8iwIhANIWXw5XY6OxWR6Gp3L23s8E9Gjj1UdJxEOsDiyUdIyZKv8DCG0QABoMNjM3NDIzMTgzODA1IgzR9hR3aIYtpDlvFjQq3AOqBIbNOR07OjBoNuQayeF5FmbYPXIbkB99L6VfOczELDHfeo9UFKtKyLXJA2uRm9qmZwBeaK2u53Lb1FSasP0V%2Bs1439RmKXQObdndwSBKraopw7f95SbNJYKe8bA17DD66rrxry6KIMAKOORaDHZEv5zXpFCUnRKFRsZQaQO19vUuAllCT9vgufHDb%2B1mb419S15lTEqzSAfO%2B3k5pt%2Fhkuvcgsno3vn8IVMSdyVRroqSpZZiO2z4iuTfh69YCdyNCIauPHJ7%2BMRjjzK9Eg6rvdUH59ctN9AtBnQuOW7AJmz2Dh7Dk34UQq9zIEk%2BDRrvvRdnEufRMSjWqLiiISkerqzQHDD%2BK34OKtdj7o1aml6jGD4oLu1cleKA5Wqtg9C5huCfrEJrBKNZJrc9Bv88qx6jWj6W6zU0zG%2FKo4FVqWSJoairIAo33CWFUoiDmmXukn0EB5%2BiiA8U7vry7CkFvdCBIPP%2BUiVL5c3h1xJUPL%2BKkbvY618Dz%2Fq1F3pZhwBfHzzFpyjRqtOsOxlFGpS43OH0ynJWPfqpHIqvoHgRQsZO4NKZmj9%2B%2Bq3G6eZmaiYr7qP9KT1zqidmix3CmM%2F7nFVWgS5uiqv3Br2CR9inkvbyTTw8uKAsalloMDDtupbEBjqkARCWm40BDKcvuk7ET7qHLkTxr4tOIEFe8YqjF7cZClrDJxIDGIwiNBp9367QM4FbmV7%2FEDrqA4zfvnSODkpG2EuD8ehuYfwC1bEju871F4ztZi3bu%2BfW6WBy2kNeT2XMU3RKDNIzmIhkACi5hyNDub2nDaN05vxnTN%2B7bSdPgNSHMTfT%2F2lcpWFvVTIPC3YTH6YVw62lRQJW726hNpRw55RoQl9A&X-Amz-Signature=1a474fcaff49da4045424adaacd67525bdf65fdc3a2f8b074a4c9bae42f7efa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
