---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=3ae59a1de4d2887b68fe333464a14a37860488da4efad638e3662a648ea44de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=0b7f7e37ea54f0df21076cd701bb813043ad923d0bb9e5778ca4dfb059045542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=fbb0eb1e9cd8313b5c439561678190691dbf581b992673bf01bb08c60c992e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=26f714e6e717394adaf7397900914e255b7cc9ac367b7b8c014904c6c3442f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=6ad098c021a7a3631db27260e8ac8a0f2536e3b0fb477263dbddb8cb44185c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=d48c8b95e31f5007b47017064ca42994c0e7c8aff93f166095bc5ae878e0b537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=1b2473754173468eb37afc689180fc160f47abcbe92fac9a5846e6e1598661ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=30dbfd0b1bb30e8c3eb1dbcecbe844fa88234c209bdfad67b9f22b3185a36e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=3257f64a6ebee67de4db632021963b9a202305bb30d6d893b5beec6b8321355a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=6c3ce0ca639993c044d2bf5af503dca8143cbd4f60dcf0fc55108e034fc2c163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=2349c26618fbfa113c712a8f91652c2d7866733a705ab9b0ff19e449a9f96f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=919ae2b9198dd105b4bca95f8759b0bef06dd0c7d415bf5560b916c17dccb7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=2cb98065e24876c2fa437f7b988cc63d585d880c0dadedf536f39e79683c4c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFOU3Z%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOYNaJGZ%2FyLnUG%2F6pBbny7wHaVSrdVV6OZ5gzXGTwWgIhAMG%2Bvz6fjfvyhcsQitczveLYZGKCE6qvBFsS%2FD6gkFpZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYW58KKMdIXh3SReYq3AN7eTXTE4ka9SmSsZgPbot3Y1VI6wk3To6Jgcwof6M8JfeweNScVQ4SjdqYKI4R97bBXNINHhlT3VEsDb3GkpEYkDMMAp0FeMhqZfIhho8csZCNAx9QZNoEN8dq91JUlxLJsOxTn55sDNS4Se1h0%2FceA41vZUo%2FqhIea8fdn4d46U%2FMPrMUnLCRjoIX24RxyTSbRQjdSdKccFAsDAhwW0yJiJEeq8qr%2BCSDLszUi%2Fz%2BDAHngULN2GycK2QfL8qlGckeZp95d3v%2BXcMJPRydq5JCmn3GHW%2BpLlzT3v6VGR3xeuGsSllbho0yq9dOYDuA7zF28VZFOTcalUjFBJ52JmHK2h3EmcZQHhnAAgvO%2F3CRoTB%2F%2FLU2yK5AaSgBQgGQjF4AgKg4DOwk7zFGCpcwdrqn7Wnmm%2FC9uaqeWW1%2FH89U7Ijpg5tm2cVvfvA3aypYzi4VXBnlYRUKT9XwjOEu%2BRotcypeF4xE7hDAKkGnjI%2B0aJO%2BLN40Dj2oLUwc4thkkyYNTdIqw9pYOHLa6kcXJlhb7G2FeHntoSNN1wPTX1m6Z%2FgZwzvqaz7oz%2BnD9L6ppFrT9g4TWkAR4RDdLIERtSISSN30lZTmMR3BXNMmZkJiZxzw3ynCRCp%2FQaJBZzCx3K7EBjqkAZj%2FNld6FST4YMYvrWA5RwWEkYbZ87QlDxe2JLJ05VbZKiXqnrb74WWPfguEsXz3loXH3KcWl0Bb2xiBP6iOEIG2%2BZgNCCOthufphh36EG1j8pc3jilB%2BDEkLsGbhrMPLNPfOPwf2t0jysFHjxgSuQnZsavyWS%2BODKuHkpROF6h1P1Wd%2FXVpONDIKVe%2FcPHVvH4uP2mZeO07S5Sx9JjIPWWS1fRU&X-Amz-Signature=1812a502552930ef26179d152cf07c63b8696ed51ad2473b129d4fbe5c70bb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
