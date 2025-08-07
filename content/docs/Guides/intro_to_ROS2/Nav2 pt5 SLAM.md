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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=c2e48dcf36ff5e74fc508e6376e7b220a1b799ebf992e0ac815746b803b05b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=341d6f6b3566b2522de3a6bf1ef93421f2818d46ac591ee705ae628059484eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=816d07191f3483b77acef05d2d6fac16bbc1122ff7d9a38cdf06e56e282623a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=883115f6f3b122da15ecbc6634dfd4bc3d270ad4d32bb4531f391791d39ea32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=bfeb7dfe20931ddfc965136a43f8392ea1be1197804d0120184e75b5e84b566c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=60845ef6e6e751eead7c31acc79d929490da9bce4906c987e1cdf2c81ab5308c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=9a7b6f674d4499a8e34b19a2e13bec38c87fa50124c3cb4ec0b53710e69bcfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=abd4bb09341d3e8d70ad051fc060adec3cc464674542c9f64ec7f96f99e3a790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=3c8556229996846d446195a5f97774dff0a0e1b62cdd9406e17fc9b47006bb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=9fa099fed878e3cbe96a46bd191f44c75cb8838209f285c5332bc0ca5568c84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=fc2ed4e751687a5d9e8cd24a46f1d85045152e113c7f19e3ea7a010b2bf078e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=ed6644dc4ebc9a997c0eb56a05a7e7d61e8bbc8e5e9e017cab75fd4e5efa2e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=56e0966ad8b07df38201fe49f30b9f0316e21be714e91799f0cc5eecdd404a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC5HZTT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID06xzFNAfPGudi1uB2a1KAncgVDInskRzGTdFuwnc3sAiEAkj3srBi7bkZImb33iiShf98LUKF3QOJ7Yr3NrS0j2ZEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rx17BSvx%2B0yAJ7yrcA5Te2nqFQGyIjFLdCEC6Cta9PxMrGZvhvaQJcetFnzJq2tMJWuqzU4E5CYtwr7N8iPzWx7eZU3aCJuTuaU4ApIhgoJ00BgxrjtYASHVCI0EN%2FkiI8OxIttGICDKX1jix5QhRviapASRX0bfQnU4Vx%2FirJxzAFBAGxEBR%2FFoq76ROs%2BaCig6ImnE9ceH2%2BnTZ8a6Yw8CN%2BGBvHRBb%2Fe0Fusk0j6DE0fZmAA0tl66C5VE7U4%2BXATzNII5pov%2BJcCUBGqgxAMg7Umro8rH9HaW6yhaDZaXzrFqEOFATNqIkO1Sq53B1yPfHJzRqzMekFatrzaLWFNXd535wuEGkqAIQ2QExREaxyGtOL9axyUbWQmJP3dHMzmeAs6iLeE5MGtXrIBiXHqGVCMw2n1ahOODCd1vvNPMxoCahIQu9xFhl34TCuT%2FKg0iuJuGJNkUFw86M%2B3smWQEvgFmwVF910GjFL0xOzMTbMGS0VBBdzQNgCi%2BEiZSi680KTcS66lSWa7C4KmSm84%2BOxoAxLrxe5y1Vd6FAOiRKjavKwjIdCtStPzFpo%2Blu0tdGQwsyDhx7svr2aUl%2BTan%2BKU9sdTQTA%2FVp3%2FVP2PREgby6PuTsSsIKlsIegF8%2BfzHO9dP3iiwJMIXu08QGOqUBre7tqWL9fjh3lOgrakei1d1MuOqZcK1Oy%2FvmJU3Dtpxem2U66ZSSUZsdAyDF15VvIIMoFwpfnf05WK7rwZW8esxlcQivkz8y3Hfz6114sLJWvKC%2BKNjIhjaxrMY8eMv%2FhaV3krGDPsHi9Li%2FkGAdscqmol6mnGipLkweB3X5swu%2FYutnj4ZqetSVgImzOmRM2WaHr7e1cBbnUIIonexztlUmEoHM&X-Amz-Signature=b29f4f2a6a9ccb8a488e160792b0144844accbe9d71b310040f2ab9c0f0a6164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
