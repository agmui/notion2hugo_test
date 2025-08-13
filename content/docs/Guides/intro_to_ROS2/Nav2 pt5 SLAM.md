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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=8aeb44d029b70d0d34a0f04adce63fedffcc2739f73d843c1afb82114080516d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=30f319f7a2718aed38a20fcf17733a6891c8962ac8c6f5479b5b170ba13f3584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=04756eb7a121c21bc5e9da5bfea03e6b64db97818a4c1f9ccb7d12b5358c38a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=bb47266edbfd4d443657e7f044c08d0983c1afb33cb6a13c859c945309faffe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=413c8925d84e4a1358042630675911540b51b45018ad3e0d74064f998ffe3901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=332ccefab9a74bc5966a3240c6d7d2ba98ef6f04fefd315c2583d5564c0d07f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=9833b63916fbbb8955e24e0a401a2c892d064769dcb0abaede1ac6a4c8cd5c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=94a759802c5e6b1972edcdeeb9977b3560dd8b0269c5ebf3df78b62513da4546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=dcfe71170b15445d68eab7826be46a00bf5657849b923677209818d516996a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=15df16ecba591e93a760f361bc103f21d8a5eef786dfe7c4bcd5f831b9d30ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=95e3a921d82d778f3649d0f192a9269846b3c62afa85409ff428f938ec02fc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=22e633959b0ee9e856c62e63e0790fd8c4ca962b8e619d9c527ff92793a38efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=94c58c34dd591e7deb5209ec8f412c530176d98f5660e33a14cd73568eeedb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5G4TBO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Bz2OVmhUVV40zVuC17cWX1N9dntd42BP2ntpk7aYHFAiEAy5%2BDYcRMia9QfkKoI7AVSHnJEL3up4%2FcSIgn2KdfAL4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLN7dy8twZi24cAGnyrcA0jBvvwVc%2FznCbxmtCqNVKg9%2FDOr6Z6Z7ApPaN%2FTLtFllrBKNKF75K431Nk6k2ENyM%2BYfVGDkgS%2BxUxx1caxt9QssGQ4RmCB2C28RMlj6SFJwXcppucNFhvKjkE4JakbqBBXeF2v%2BXgn9R%2BRjWRKFJxjtepqJUOm8idKEbZT6Fq%2BefYyRylT0DjWTskzY8Yzcp3Y1m7ls%2BmBn10%2Fugm7s4bVYo6q5VExv9FFZuUtB2HLxVsal7cDfI8%2FdzYUzSmkSl1if3%2F7gky9JcVaJjlDkfIzb0YzsMk%2FIUEnsqXE9Lu4v1r2HNp9YUIiZair6MrlQq97EmV9dlhD2eJb3aHzBBb%2FpKXOspuX%2FUD0Evs3vVxkeVxyVBxS8UKh7PoOuhn5O8KNXP4CMoxHZbgSD8CwAIWeZRBwK%2F1TxZqN5olnJams3Kz4ZGIYAEfCeTHAbxMA0R7IZiwTH8AzU4Omjil4HK5YQU1s6qA%2BY2TFvvoiibHJ%2Bm6K2Iehhwa6qMEh%2BshBo5qhTgyjMhvTQNtGjQkmhfA7%2Beh4gCXIE3B0U%2BCl4BJAVb3MilFv1KIiWU3OclnNN31RQJecBqhHM0ki8AratBLeXv3YbpysDcHwObX6qO6AYbq4LQjtU8FYfQjdML7q88QGOqUBTEVtfum7r8LW1dYfn3ZdqI%2FUR0odBOWE5uhrhvFDQGLpDqycuTmgUKq1vS%2BDBlJD3aRQidH28vXq9KcixmrSZu0hR%2BkDPELcaowPgRVJNbSjU309XT%2FeURUBekloOTox1egZ2Jzn9xQwgunwtUX6qma582Qvs4w2krfdm1w2JQypow5%2Frg2lbmzyUjeOud339r9aTTMienantA%2FlezlsH5MWZBIi&X-Amz-Signature=91736a54fe0811556e2a5eea56128056a7508b2bf268a7d1b8be4d92e5f3577c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
