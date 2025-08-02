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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=264d05273d79ce98e1cc793ad9803bf1ee4a8a5346b192856d595647bf2b8880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=03380985a1ea332638fcb287d978f5ab553f42fbe0545b934cb46c27cc707948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=f1dee14f334dfc15fddd00e2d4ff8f5dcf4403d2daf1342d1e0cc95c968d0fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=aab10af65bc2076dc720ba2316bf97dae3ecfa34109f9c1337b140517d515f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=9e128b1b0af79c58f852387eda31b7be4b31027ec32188996c7e2ad76f5b9322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=05b51e55f59f90bc4dee8d19feaaeb06abfe94f9af6d9b179e3a83b97ef2962a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=384f9f8553dec3821ddb8272252d055e1bb4e68ff58296db179f8a1a32d56903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=a8b6367187664f64f6989d581d813301a2f0189ead4a863e5baa29ff66f910de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=8d5476044cc6007e56a1b3422f67f7f85a471219e108c1fd2348f488115aee9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=4c2c9a7bbf51ab4b0abf3be78091c34234bf6ea5054c6ae46adcae8b28906854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=64907c0474baaaf5553294b484ab85385d3e44c102f2356e5c5df7c54436ca6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=71594b3185c9343a3ff85c4036a398e67b2d97e61b9fd282c0b838e8d61c9f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=45a601be079469098b65add4241095d414a4601956faee953ffcfbe93f2dfbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2AKKKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T637PrdEL64Mv0CAwL5obzdH33%2Bf0lNo1dFjDa%2FLkgIgS%2FDk42IP9U93XRko8OsqUglFCvb6TnH64fFySVtQ2lYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKrycVaz%2BxZalAWYvSrcA03TfClHF0KKPvqp8lIdTBJ%2Bzw6aLS%2FoghkZUphkCYD7K2kzyCy9lh2GAtQlwRjIM%2FShTKQAboOTErmR2UAguDCxLjTLUSy0a5K3nTPHhAZnO2J3vXWfpwKMYbvL54j2E0qY6HIMQnAzcP2FTUx4F91fZsoRrowX2%2FDURF69b3WvEgOKd8nKhaZuBNO%2BQDOoUvB0NrfvjCHAOkLGAQgnEmsHu%2BrDO2J2t7e35lq82A4ITN2CoG4V1gIkN20CzwnVDuZn8%2F63jStndphbMn5crri%2BmZtGu%2BSLb81mDDuG5N%2FhT1dYHVjWeb1%2FpuUf%2FtEMmov0Lo%2FvQNpghlmd2bAteCJ9fb3kxLZnKYsEENXP3DQapSdpXoY1gF0Md7P3qbR%2BI25jUqsG%2BxtwkIfWAvZtC3iv8po03jKfke6vdh3FRUmPZ5wYpDUNgkMVItVcudrXIEUoCgROGyAbfPuPDLSq%2BgBK3XxjXIv3TjEkDFb2e67e80qnnQ82hnvO9dsiWzOcBxXPTTNJl6c25UvBa0MFwS%2BYX993iGCx7AFuIqEwha%2F7cMmBaZ1f0uxB1%2BUE8ScOg5DR0XGX4yWAoZ9qZ9UQqpuDI3tIX9O6MDWlkhe01j0gbyl5jDlnJ%2Bekx4fxMI%2FEucQGOqUB5UeJNWHIvtT%2BinUObvy%2FAb8306GnvojmD95ScFu4axzrdE4bpWUWG7ezwuApdWR49fsJjqlgsEUxyGnBRM7UdGM0UzKlnETt%2B%2BFJ35JudqySPMw0y0XaAgw32TZhvkm875TIgqPuW1%2FakQee0lZQtDz5MBH5jeLqjU66Q5S%2F5iUQp9Bb7tkH1k%2FKs7Uqv5vbaLOBMivAaAoGIepth3ug9LIpUDru&X-Amz-Signature=60c07bdaf2de92b0e3c41ddcfb1398864a95fc0b1dfe801772fc163b0753878e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
