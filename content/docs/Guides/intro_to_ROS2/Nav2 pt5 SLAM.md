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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=d62d387095b46bd02b894f15c5f1c1219804e0a55f72c86f5bd2462abdfe06c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=c30d7bea95f8dedfe292762877d0d80174b06f11c887df84e3d5581fe5fb1be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=cdf826f4338556ac329c56595db14ea698e29268caf0a641c640f3311aa509b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=e7adba7899b604a5a4c62d418ca95532d58144cf3ef0307e384837a038e32dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=db8ab9b059f3623644c66fbd1ce9b9b479dda30163b3f58acb350514b7aa2e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=d57443f42f57b54d512bdb75637203d05b0bcc243c9c5c60e40fdb025342e31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=b4a4cf3ed6580084f293666d5b5341cdce095962eeb3d6bb468bb91965ab3363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=3f885205364dcb27bfce8458aafbd562499b61ccc3687b26f01ccb22c7b437ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=10d35e0e76611db1859bc8dc56b7c64ec44b997a4611727746eeed45b53df2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=c38bf37bd6123d3129a546d616cdeba99b7d3c81f55bb1c6fbdab551448a42e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=c97266833fd8c833acda7b48db36b91a250d791070b58815e6aa5fc17c6c9109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=fcc9ef82abbaff10fe3533df4e145161f7c6e90e2a304298b4696915ab7f8fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=ffdde424876c92bf4bbeaa5b27126e12835f7cca3a0f14ff694285b443d4ff35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EHMHGD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCEplCHnfC4wlZipyosUxVi3gLWPZoLWRIYCzA9TMaYPgIhAMtkjuNzlpSPc%2BB6wv4a4WGvoHqUzQjxWt9JJipGiw4FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmPqGXz36U%2BP%2Bv8Esq3AOJ6uA57WGb0SjBEvVJTFKVhTPVhdodnAM%2FLDY0CBY9WwJx4D8okNaS1SKaf%2FG%2Ft4rriftymoU6lZbkzwwNmEvv%2FisMGT7lX2vRLFuGHSkLeWJGUWAhtU6tyqPMMql%2BD27l%2Fep71QwpWSJ1HTMQwncuEvAdVg7cQIskxe6qqSO%2FG2vDIx3fPwL%2BbT87qVKE%2BsaBbII9byO%2FAaD4xLeHv1hndvJxrCSXjuEgohFFPCskxSR9DsR9Z8b4hiQq2GtWEGDW06sU1BQyxRVoDFEm%2B%2Be%2FQNps0ui5Kf%2BTV7%2FKKeDPxp4rWqeWqCHTjoChdDJ46EJplP93qDy5otRHCmAtP%2FO5OhMbtzu3M2A1AZU52NbLvs65xVdAlF6fS0es8wmnDD0ZS2k1UB88Ptepcq%2FlBsDnDpDYttRFCr7TJolt0PMbDnsd7BOHBie7aRVhh1NzLGgyXhvCBe%2B%2FV%2FisCnYlwKfrebIE0dPwmnU7QTTLKcn7ocKBwmfMLAzEe2vbSBsS%2B3Ln%2BS0RVWjY7nFXlUwMlvBApB4gAh2Sqsb6wwWkOr9UPUe8Gr2VAKE87TFtTayzz3jWSPEJ6uBiHq1mtVS7Oy%2FL9I7jqDAwR2Tz1YO0RdR66C9CEBTjV9%2BNQsFS4jD2gIzLBjqkAYtHA21Kjdxqjont1NI8R%2F1oIlGNLm5UzSjcV%2F0ZETPlSokGG4156PGSEBL533NVPoeeNzCyyZe2m%2FBVbC%2Bz%2BY6V2GuUFt%2FDRv1EjNWLkoNndWp%2FlL5dsCyKtsj5OKrMSxVcL4br1OfIlqqEknh8ID8ssKd0qST1N1fXSuE8u27LDWZvI%2BbK1P1QpEhsYDWjETQ8ZSyTGxFNeHbB%2ByJAU9Z00r56&X-Amz-Signature=40a69919d3da264d9ee34f5ebf175cd1ae257b2ba5aa6d73a89770f3ad05f1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
