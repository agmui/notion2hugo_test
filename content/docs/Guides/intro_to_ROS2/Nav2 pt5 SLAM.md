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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=72663fec081f8967356bee103821202184f33b4a86d4013f7fcd4973d6fdbbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=8f345c038c8470ec3b63872aad0b2db849de4b1bff26195e267cb8c30049cde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=fb708e4a50adc13e25d8ae5ba4268db1e7b7b89dfcf99b00533fc960997c6ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=6ace74e293493b98464613b039894244e45b93245811f4bc6a0f942a5e8c454e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=42adf1289125c57c27010bdccd62ba21dee1256d7c626d2bdfa3aec3ce1441e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=725a93e6488068c9e575a7928e2c7a227cb6ec2a0400dd8c4992be7c3f636655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=aa387dbd5925e592fb22881be7c7c771a8a805158e21a98bec83e53bd8ac05f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=3a0c32c82d4e64fd3c79f8914005783edab7a1b13722926f3b969836ac2c9086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=ca1ab523c4def7225168c14341e433230ac1ce74cae419d8fa416d81bd5441ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=6c7a84eaad1b147669e29350d6f89bed98189827785a3846cccc208e675577ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=4d4652546e5bc4b5fb13a33ea1d38d3f773a6f62e9b9ae95618d1e117d31d0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=43a5e2a9fab48d30ddad8eb8a5117c4eba8cba444574a01bdc39bf8806512bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=22436c5219e2b3ee3d2e568d75081ffb6ed00ecbd91c338fc5e36042e999cbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FF3OYI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICBK9ieXZs8%2FsyYT5HOzwGlBRDn0x074Jx%2F85GpSRLQNAiEA8DHxwbCjpN1q8NIMjR3iNvJfdsPS5qPA20rpHESs1bAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6cLMZl83DMcOHxBSrcA%2BY6%2F9HwalvqVU5rJbzHpBP5tL7NhSs9HmaQ3z4hBXkHjijCQKR%2F5GnemUbQMQIVr5HVpfz6P70CGMAL7rdmpSFtprVTfCBvU%2FYJlGSO1iNFh8DpGyUpdJ0CmAXOp2I60gHPkCotU3Qtz0bO4sO8G%2B94SIVN%2Bv2L5pP2jWF3QsdKKyG9gs%2Fgh0j3Nma6gwjCx5D76F8qp3kuYtEDDAMU%2B1IEmaelxykGu9LdQTGcuIXWWsyp3gMQjGOobN5lGT6WQn8fa4eRyQSr%2BOZ7R9%2B3Idpv6QAH75o3AB9AbMJBX4B7Dod8Bl%2BqcWy1OjKccN6Wskix5NBOAkSWOv2N3VGR7hNPSABfBilK4ADr6ZCHKO6xf9dAp4L4SjIi2C7QxIkS70DqtzWIe6jSSrYkf%2BUAEM5aX9BAnTLSGbgA0WtPbgLSq1BZNyfnEr8wPBQ19B2XpCEui8wf9x9jNJQyA3pE3JaTs%2BmzilvM%2FNpp%2BFzDpDi4kcZQa6iuWZ%2BG2vAyhda4GrGOgCtReoWuWZuT%2FckRFXvmlFutVHacv0ygEBYginFJ5WtcYL30QmVERqDNPpAkIwrr%2BQTArr%2FBtvoYLv1CajNld%2FJnczf1Wg2iwNBn8qzxlbgrRLm7IV0XEPwoML3o4s0GOqUBgOCsVXImwyZRs58OZ%2B3%2F7KMa1ELWuBvJfD01WsNUyvYZvVmjbzWhDrEwSq%2BOXQdSE%2FKD5YWScw5eHWdjzADq%2FlYydaFRvTb2ymxicKByOLsPMTyXJnTR%2FwrcTn3LqDamoZMPjkdajgM3i%2Bd98XTn64qKueQowqZmuvFTUuz2wbNWo86pnUSEjFKTZDIWNvf56wDdae%2Bgd5hoRUpseu%2B6JmUV3rWv&X-Amz-Signature=2c4104b054b9e1e851f3a5135bfa12967098a464e332a5b05c50665967c441e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
