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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMG6FQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHgFN5ykHwIHnfScGyRWLDuwKGn9CCELlNBWKEz7x6%2FAAiB6smpabz1kzyt2VOtAG22IFIJtpSkWrTX6W5CHqz1iJSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8xw5WltvlyNfcAv1KtwDpgM91UMlXJNg%2BYAQl6KZ0m9wOMa4sDvnwQfP7C644MQrOnzu1zys%2B1%2Br3AkVwIsyPDAcxOMYP5a%2BARipyVysDj2k%2BCcUnhFIohu9U9BuALb1FugGm%2BNrjhcPcQ7hGjXT2f2SV9W24hh3PfRrfQzienQaXlbDAzrUX7eDkK8LoP2y3OdUAwwqejrxmRDobmOMEZGDSMi%2BLFmGMZWvua%2FPI3FdNEri4gNGivdpdfg%2FiUmR2dnxTGNHrFRuRi2%2B7eWcZxPeJ%2FNNzMTcqifqAfooaMUeOJ%2BD462SWZXf3OkmrEM0wCoIzx2AtiY63Vz%2B6YzqD8w1mj7aOjwCsfdPtH2y%2BXMSAtTflzIV%2FmpB2LTOfY045conMZMRQ3%2BprldWXa1dGVz9oyWVKu45py7ibodmPccZJXGzu%2Bssj30afKxBhChOFFqcZLscyedvfBSTaH0gCV8wxlj%2FKfqHUhQ5qcR%2BuLLeSiNWU91zpleP1TPxybUXKALXGVizzbmq4cdq2b66riueL99RcRlfUoAcnxlaWSzhj1hLjxsXNoq72pJqIt59vflrLkwWdu8Jm0%2Bm9VD02YPHE85%2FWoJFS%2BQRKIKodzBZvpvd0uj2RGGR%2FtlsE6qFnroj62Hi%2FjHpALsw8v6UxAY6pgFvB7vbe9njhR2Q36kBY4w60wtrhKOFJbD58G1EWzMg72CsGFWdrwuje2m%2Fv8ZgV%2FDpBxgb0wYbGHsqrmFYiZQak0Mp%2FX9vOfDjc2f5b0kVhW12MdiHA7HMp42LrzkluhqcHsenTvcxH53S8j4HlBNsr1kiAHIMnKUHTy7NtdR8R%2BG20ZeEpuwBzyuk92IVxktPjPHPcNfIYcz5TNJhwkvAiBUy2tni&X-Amz-Signature=8a92106f2aae022b52a11a0398b4ca05149aef3580a0890890a6b04096e26835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMG6FQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHgFN5ykHwIHnfScGyRWLDuwKGn9CCELlNBWKEz7x6%2FAAiB6smpabz1kzyt2VOtAG22IFIJtpSkWrTX6W5CHqz1iJSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8xw5WltvlyNfcAv1KtwDpgM91UMlXJNg%2BYAQl6KZ0m9wOMa4sDvnwQfP7C644MQrOnzu1zys%2B1%2Br3AkVwIsyPDAcxOMYP5a%2BARipyVysDj2k%2BCcUnhFIohu9U9BuALb1FugGm%2BNrjhcPcQ7hGjXT2f2SV9W24hh3PfRrfQzienQaXlbDAzrUX7eDkK8LoP2y3OdUAwwqejrxmRDobmOMEZGDSMi%2BLFmGMZWvua%2FPI3FdNEri4gNGivdpdfg%2FiUmR2dnxTGNHrFRuRi2%2B7eWcZxPeJ%2FNNzMTcqifqAfooaMUeOJ%2BD462SWZXf3OkmrEM0wCoIzx2AtiY63Vz%2B6YzqD8w1mj7aOjwCsfdPtH2y%2BXMSAtTflzIV%2FmpB2LTOfY045conMZMRQ3%2BprldWXa1dGVz9oyWVKu45py7ibodmPccZJXGzu%2Bssj30afKxBhChOFFqcZLscyedvfBSTaH0gCV8wxlj%2FKfqHUhQ5qcR%2BuLLeSiNWU91zpleP1TPxybUXKALXGVizzbmq4cdq2b66riueL99RcRlfUoAcnxlaWSzhj1hLjxsXNoq72pJqIt59vflrLkwWdu8Jm0%2Bm9VD02YPHE85%2FWoJFS%2BQRKIKodzBZvpvd0uj2RGGR%2FtlsE6qFnroj62Hi%2FjHpALsw8v6UxAY6pgFvB7vbe9njhR2Q36kBY4w60wtrhKOFJbD58G1EWzMg72CsGFWdrwuje2m%2Fv8ZgV%2FDpBxgb0wYbGHsqrmFYiZQak0Mp%2FX9vOfDjc2f5b0kVhW12MdiHA7HMp42LrzkluhqcHsenTvcxH53S8j4HlBNsr1kiAHIMnKUHTy7NtdR8R%2BG20ZeEpuwBzyuk92IVxktPjPHPcNfIYcz5TNJhwkvAiBUy2tni&X-Amz-Signature=55ec8f9a2fa139a49bc3fb2f5b880b00285aaf0f0b808e885a8885ce35cc5a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMG6FQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHgFN5ykHwIHnfScGyRWLDuwKGn9CCELlNBWKEz7x6%2FAAiB6smpabz1kzyt2VOtAG22IFIJtpSkWrTX6W5CHqz1iJSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8xw5WltvlyNfcAv1KtwDpgM91UMlXJNg%2BYAQl6KZ0m9wOMa4sDvnwQfP7C644MQrOnzu1zys%2B1%2Br3AkVwIsyPDAcxOMYP5a%2BARipyVysDj2k%2BCcUnhFIohu9U9BuALb1FugGm%2BNrjhcPcQ7hGjXT2f2SV9W24hh3PfRrfQzienQaXlbDAzrUX7eDkK8LoP2y3OdUAwwqejrxmRDobmOMEZGDSMi%2BLFmGMZWvua%2FPI3FdNEri4gNGivdpdfg%2FiUmR2dnxTGNHrFRuRi2%2B7eWcZxPeJ%2FNNzMTcqifqAfooaMUeOJ%2BD462SWZXf3OkmrEM0wCoIzx2AtiY63Vz%2B6YzqD8w1mj7aOjwCsfdPtH2y%2BXMSAtTflzIV%2FmpB2LTOfY045conMZMRQ3%2BprldWXa1dGVz9oyWVKu45py7ibodmPccZJXGzu%2Bssj30afKxBhChOFFqcZLscyedvfBSTaH0gCV8wxlj%2FKfqHUhQ5qcR%2BuLLeSiNWU91zpleP1TPxybUXKALXGVizzbmq4cdq2b66riueL99RcRlfUoAcnxlaWSzhj1hLjxsXNoq72pJqIt59vflrLkwWdu8Jm0%2Bm9VD02YPHE85%2FWoJFS%2BQRKIKodzBZvpvd0uj2RGGR%2FtlsE6qFnroj62Hi%2FjHpALsw8v6UxAY6pgFvB7vbe9njhR2Q36kBY4w60wtrhKOFJbD58G1EWzMg72CsGFWdrwuje2m%2Fv8ZgV%2FDpBxgb0wYbGHsqrmFYiZQak0Mp%2FX9vOfDjc2f5b0kVhW12MdiHA7HMp42LrzkluhqcHsenTvcxH53S8j4HlBNsr1kiAHIMnKUHTy7NtdR8R%2BG20ZeEpuwBzyuk92IVxktPjPHPcNfIYcz5TNJhwkvAiBUy2tni&X-Amz-Signature=fab647379d93b29b88583166c366ae3952d51afe4886c8b7e269f7c7a4dcaeac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMG6FQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHgFN5ykHwIHnfScGyRWLDuwKGn9CCELlNBWKEz7x6%2FAAiB6smpabz1kzyt2VOtAG22IFIJtpSkWrTX6W5CHqz1iJSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8xw5WltvlyNfcAv1KtwDpgM91UMlXJNg%2BYAQl6KZ0m9wOMa4sDvnwQfP7C644MQrOnzu1zys%2B1%2Br3AkVwIsyPDAcxOMYP5a%2BARipyVysDj2k%2BCcUnhFIohu9U9BuALb1FugGm%2BNrjhcPcQ7hGjXT2f2SV9W24hh3PfRrfQzienQaXlbDAzrUX7eDkK8LoP2y3OdUAwwqejrxmRDobmOMEZGDSMi%2BLFmGMZWvua%2FPI3FdNEri4gNGivdpdfg%2FiUmR2dnxTGNHrFRuRi2%2B7eWcZxPeJ%2FNNzMTcqifqAfooaMUeOJ%2BD462SWZXf3OkmrEM0wCoIzx2AtiY63Vz%2B6YzqD8w1mj7aOjwCsfdPtH2y%2BXMSAtTflzIV%2FmpB2LTOfY045conMZMRQ3%2BprldWXa1dGVz9oyWVKu45py7ibodmPccZJXGzu%2Bssj30afKxBhChOFFqcZLscyedvfBSTaH0gCV8wxlj%2FKfqHUhQ5qcR%2BuLLeSiNWU91zpleP1TPxybUXKALXGVizzbmq4cdq2b66riueL99RcRlfUoAcnxlaWSzhj1hLjxsXNoq72pJqIt59vflrLkwWdu8Jm0%2Bm9VD02YPHE85%2FWoJFS%2BQRKIKodzBZvpvd0uj2RGGR%2FtlsE6qFnroj62Hi%2FjHpALsw8v6UxAY6pgFvB7vbe9njhR2Q36kBY4w60wtrhKOFJbD58G1EWzMg72CsGFWdrwuje2m%2Fv8ZgV%2FDpBxgb0wYbGHsqrmFYiZQak0Mp%2FX9vOfDjc2f5b0kVhW12MdiHA7HMp42LrzkluhqcHsenTvcxH53S8j4HlBNsr1kiAHIMnKUHTy7NtdR8R%2BG20ZeEpuwBzyuk92IVxktPjPHPcNfIYcz5TNJhwkvAiBUy2tni&X-Amz-Signature=a867ed02ae116cd859180283c2021d3f57e32a622a76a2176db83d56a239b9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMG6FQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHgFN5ykHwIHnfScGyRWLDuwKGn9CCELlNBWKEz7x6%2FAAiB6smpabz1kzyt2VOtAG22IFIJtpSkWrTX6W5CHqz1iJSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8xw5WltvlyNfcAv1KtwDpgM91UMlXJNg%2BYAQl6KZ0m9wOMa4sDvnwQfP7C644MQrOnzu1zys%2B1%2Br3AkVwIsyPDAcxOMYP5a%2BARipyVysDj2k%2BCcUnhFIohu9U9BuALb1FugGm%2BNrjhcPcQ7hGjXT2f2SV9W24hh3PfRrfQzienQaXlbDAzrUX7eDkK8LoP2y3OdUAwwqejrxmRDobmOMEZGDSMi%2BLFmGMZWvua%2FPI3FdNEri4gNGivdpdfg%2FiUmR2dnxTGNHrFRuRi2%2B7eWcZxPeJ%2FNNzMTcqifqAfooaMUeOJ%2BD462SWZXf3OkmrEM0wCoIzx2AtiY63Vz%2B6YzqD8w1mj7aOjwCsfdPtH2y%2BXMSAtTflzIV%2FmpB2LTOfY045conMZMRQ3%2BprldWXa1dGVz9oyWVKu45py7ibodmPccZJXGzu%2Bssj30afKxBhChOFFqcZLscyedvfBSTaH0gCV8wxlj%2FKfqHUhQ5qcR%2BuLLeSiNWU91zpleP1TPxybUXKALXGVizzbmq4cdq2b66riueL99RcRlfUoAcnxlaWSzhj1hLjxsXNoq72pJqIt59vflrLkwWdu8Jm0%2Bm9VD02YPHE85%2FWoJFS%2BQRKIKodzBZvpvd0uj2RGGR%2FtlsE6qFnroj62Hi%2FjHpALsw8v6UxAY6pgFvB7vbe9njhR2Q36kBY4w60wtrhKOFJbD58G1EWzMg72CsGFWdrwuje2m%2Fv8ZgV%2FDpBxgb0wYbGHsqrmFYiZQak0Mp%2FX9vOfDjc2f5b0kVhW12MdiHA7HMp42LrzkluhqcHsenTvcxH53S8j4HlBNsr1kiAHIMnKUHTy7NtdR8R%2BG20ZeEpuwBzyuk92IVxktPjPHPcNfIYcz5TNJhwkvAiBUy2tni&X-Amz-Signature=e8e93b1fdfa303886e828ffc5e095433d6014532a0bb1d27ba7bf0bc1907fe96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMG6FQ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHgFN5ykHwIHnfScGyRWLDuwKGn9CCELlNBWKEz7x6%2FAAiB6smpabz1kzyt2VOtAG22IFIJtpSkWrTX6W5CHqz1iJSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8xw5WltvlyNfcAv1KtwDpgM91UMlXJNg%2BYAQl6KZ0m9wOMa4sDvnwQfP7C644MQrOnzu1zys%2B1%2Br3AkVwIsyPDAcxOMYP5a%2BARipyVysDj2k%2BCcUnhFIohu9U9BuALb1FugGm%2BNrjhcPcQ7hGjXT2f2SV9W24hh3PfRrfQzienQaXlbDAzrUX7eDkK8LoP2y3OdUAwwqejrxmRDobmOMEZGDSMi%2BLFmGMZWvua%2FPI3FdNEri4gNGivdpdfg%2FiUmR2dnxTGNHrFRuRi2%2B7eWcZxPeJ%2FNNzMTcqifqAfooaMUeOJ%2BD462SWZXf3OkmrEM0wCoIzx2AtiY63Vz%2B6YzqD8w1mj7aOjwCsfdPtH2y%2BXMSAtTflzIV%2FmpB2LTOfY045conMZMRQ3%2BprldWXa1dGVz9oyWVKu45py7ibodmPccZJXGzu%2Bssj30afKxBhChOFFqcZLscyedvfBSTaH0gCV8wxlj%2FKfqHUhQ5qcR%2BuLLeSiNWU91zpleP1TPxybUXKALXGVizzbmq4cdq2b66riueL99RcRlfUoAcnxlaWSzhj1hLjxsXNoq72pJqIt59vflrLkwWdu8Jm0%2Bm9VD02YPHE85%2FWoJFS%2BQRKIKodzBZvpvd0uj2RGGR%2FtlsE6qFnroj62Hi%2FjHpALsw8v6UxAY6pgFvB7vbe9njhR2Q36kBY4w60wtrhKOFJbD58G1EWzMg72CsGFWdrwuje2m%2Fv8ZgV%2FDpBxgb0wYbGHsqrmFYiZQak0Mp%2FX9vOfDjc2f5b0kVhW12MdiHA7HMp42LrzkluhqcHsenTvcxH53S8j4HlBNsr1kiAHIMnKUHTy7NtdR8R%2BG20ZeEpuwBzyuk92IVxktPjPHPcNfIYcz5TNJhwkvAiBUy2tni&X-Amz-Signature=27d0b547033d49c85d3bf39353d8a073dddabb557c77a0672509ed453dfb9df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
