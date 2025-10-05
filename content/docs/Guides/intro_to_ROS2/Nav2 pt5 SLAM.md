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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=f3ab93eb444e3318d971f70e76ba2bc341180290504743c9a8ca937af6ca573a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=9de6a820e7b99918c7f444af3bf11e3bea5d006117e69fd664fb75b0fa342af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=6941f74afbf20c3caddf98f4935615a98311fabda1114656e111209864e9663a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=c1369f8c20fc5b479905496209a13a5211290ec5cff170eb6be334a0456ca901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=7bdedb5119893659ba246e56b8dd7a7d1cedb3cb9278bd130fba7165a20b836a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=e3b1cef299a9d621eb64d578bd7dee9044aae0e8890281097d891cc6f3060dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=a154d9d943b88162b7012cd5611424a9e9f8d3bfea24ec12dc815d5959bf9ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=38dec16a75d405cc057f4f6f7ba2ffefb9e810ae8639b441800b4e13cc8aacdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=d9fb2a61adbb1c9742b93f0ba3864f16b5dda0c6858c449fda85c0c79bafd9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=60ec1d2f70b3109fbb90fdb6efcd748227a990515e5f8ac075801af12e4b84c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=522c32d3e5704578219dfc0846ece34396036307f622394663159088bad7434d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=34cf639dc46784232ee76f83cf69f166284392170f41655967799923263e4991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=d611603fb3ff908ce224d06f395f9ff006e38f56cdde5d3df8899536804c6d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLGYCK6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4F8Ous8oL3irKBlvL5rDiaDuuogShOkGYzpnEmDxsvAiEAxaIdQVLwTDcolIXX9e6qbOBrrnLcw0%2FYvx1S2Udy6Qwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDABeSpcy54kzooClByrcA4FP3rlfQ3R2ViJ%2FKVMa62hJREGyvOPvn21sHGSxJvE9Lppld2ohe%2BxYlx537m2e99LNCUi2Pv2M58ANzZR2qdNDWvi%2FhUCZannBhGFcFF2KWGXbEtMpB%2ByPlTN7HErniZjowZAg3VVvS4QYq9u9mECKWFd0%2FN4Dak5ScK%2B5guziZMTg5TDVhMloaypVYky%2BSL9O5URZoMgqooJG8ybiEsQnIx%2FI8EnB%2FMq%2BJ%2FLqmeg3BSaoERpm8h5MZhEbOouCHEXv5xjavJWq3xO%2FvOuCFbqZaaArcZ%2F66FbFy9ExVr62MGmBp6HRdf%2BLCYsEzTfHDnM3N6uhLdGtewA0JZV9HVL0i2gdwhc%2Bf11bHRjfCRUW2X3oPJ%2F6UyUsfqeTDLS78abx5Ip6EzhLgVSg9SApWWCBDgIBGcObeE9oTDt3OLo6L7STykr3OFF93yIP6zZWNT8qOt3Wk0DoiNFjonzuHtfqyMIqPiKnFBqck0d3QyaEvjTx5RsTErFJ4PLSmgMg93xN4wi%2B2xDIa1Ys0bLQD99MNnnrPZOgVDPNwmWzeFttoivaMqkWHO7ZYHZTbzFf3gPuQF89Yg904jP0ba87H%2BxDRc2rahrea4goTvcqhxbxNkIkZQBJ2%2B7tGD8WMKj1hscGOqUB0s%2Bf3dHnZqZAhnyBRkGc%2BxO76BLBB%2BpG6So0I7Ct1SXqURoOkm%2FEDCN7KCFtst51bLxaBaRhA4oxOOP9qAMmSXhr2wDXhRnH73DcDeMydZBWS3JUxEtOJdpGV5b1vr2i68kRB8Xhw9vEoj70l1UB0svLW6DwZv2NzY95k7yqDceapNDgt2FHfVPOYbx%2BM3ObUBfgCBDNy6uRLOu98lVHCYg7T0KE&X-Amz-Signature=b773305232ec71cf8ac61238813b723260dfc5fdd63b221641d9878a93212835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
