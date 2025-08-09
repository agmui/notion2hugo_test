---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=579a9a37a7785f88adc94fdf4633e490ad6c577217074dd4a5bc5cd1e38874c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=627427a3232affa097d12200d8d9e73d6964430bab1eeddf7ddad7b9ea1b0d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=04f9a01f876f66cc4bc64c41b966201d336b5f1c4f9d94cd9a707c82cd601197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=1704506a56d548cd33cc2ab7f1d05c277808dfa2e87abfcb9b6dd6146b740ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=e070212f021d71dbc7099a9118087349fcb6ac47e11721886a0b10e36bcdb1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=05b88f433636e3ba651ed275c3d94ac43cd0f20132fb891476e4569b0814ee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=6f1552042b7cb2313e6ca0e90cf6e05e307af55783e3ba54838e474dc332b0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=429b5d2ec1f3d948b4ca169e485ecc0fc8b1aeb78daac9ab4504baf096837480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=0a90b24ab345726ac0faf0426a2c309b60a702aa9f3748a33e79c217908f6745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=b39ae7b0ec27d02e8a635e2753870f119a544bacb6d0fcfa931ec73537366fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=c15671c949b24910f7a30acaaf2498614d8c58e569503214c760d49a9f3981a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=a0f303c9a63b0029484d7eb0f0456240c149a55b37dd74618a7b1cf3c37500f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=d42c920478e0af943606d3f278a54263297d03ed7cd6f62d2c84617455e2994b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLR6OBC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGjjzr99gORYMJifPuNUYnCIVfBAyuoMFY6%2FVD2La9XAAiBuY4G20YHfqB8okVcidhwuIHcQWLanzkE%2Ba2%2FUfz7xhyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMetPmSjgvbNQsArNqKtwD%2FazzwZQBNOU8VvKdMnkelGTyfGsjWbU%2Fqoz6AeQDnOaxO2IgcQCwWTMRaP%2BZ4ormq1punjbMhyRVvS5Ikmi0ov2udgyEiYR07lD89hIp1H6b9tVOcsu5G6hw0%2B1LwLjyaiPq%2F66WfuVomMCKRcHOl%2FfgKJc6%2BRsOA8N3hE5Zz41%2BMVvM3dq64yKiUrdnYWYePO42hEEpg3sNuHK8%2F9Tbby3sSuITQylrcbAVZu4K42479w%2BaQebbSQsN8Z9q9UO6onw2wbneVN2NuCYVARS6OqXPcUFt8TU2aXstKWh75aTTnBDUYxFKgqUOSVWH1iSa0DaWpctOqxRhcCYqemHwi5GKzuRMSGqkbzVSFskL4cFduu9v7kEX9TVAPKS5Q6xBNQ29ke5MRrTE6lcEdMUkPxfNeYBRt%2BuwtHCV5aZPtXqVxh6vzTBL8NhFUgCgEJxRowrjEkly%2BZ21DApWfu3C%2BwkexXwXnh96lCysZDt1dITdmy87HWI75x9eI%2BXdLxjZ%2BykaFX44mmaTj20G%2F1IdQPYGF57KTMcsa%2B%2BBgqoNkjIpmnLyHMOjE0fFH%2FWoo0z67lL1oq6DOVBPXz%2FbklMTRjmMoWxWde%2B0wr5XO99Sely%2FBtl1KisYIz7T2b4w76raxAY6pgE8m0apMN%2FVA%2BtyQ%2FWNI%2FqY6%2B%2FjPnvI%2FxSkNRAHHQAQiyJg7Eabng9z5s7wmHpBSR7ngsFiOQgceQXIEpdqyaDFSkqvkoB1Y4snTwWG%2BDfBkQjMnk6EqSbDNQo0oaOGb6SFgCay3YX84JLgk5E0O5MJYKFLidUgOgNuUg%2FAoxX0fRUE7N2JEsWD7mHMeffW52DzKzLsWMkMojUAlQrGz1TSEQ%2BkDeJD&X-Amz-Signature=777ceb439c70518a30e82970386b83fb2d0c04ff742eb2048e1cd89505d618a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
