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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=d6c73abc8a0084adff7e19a486e5fb6506a0b30e8a6ab104d42d5dcafdc3c9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=2db5e912725ce7f218df2142112e73cf4d4e55ed0b15155d36a0140470f3f10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=7f7bf693ca2247b0c0336478f1b34e2ef1d42b8bd70b57be3f58f93d44523114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=75caf7fce944fceb23c15d11a07c4bd7ce76bf7480ed0cc9b2389af2ead22f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=7a0ac2514cc97bba22160209fadf51937016825fa01efcbaff3a4cd4d3099b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=69ac769566cb910f71c535425193d1603806e8c688d17775ecfea9cddea70ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=2c80dd453552f41beeecea001c9d2f56c7d3811d36581ec5407a7f6ebc81b80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=2de0e5e404a65c9e912df36712e0b7d4fbd729fb181468d14d97061252b816a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=da55abb9f2c90753f11bd5fe39e4fd0dc9c4e9f8907cae4b56fe9f147e848e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=a273a23ffdfdd3eec476b2d5a3fa6d1ee00a67b02bf0120c43a3600b5ae3b87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=5af62b391bda7c33d6333ce45e329f408e5f39a48c8d21bcd4357b4cb7bc205c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=cb731f2bbf95587242e5364fa32ef5b9b3419fcae08ae6d80e94fb49e7550279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=8c5f9c2d8cbc75934e30d889bbd14a741e2a9590f793a46067d47bb50109b48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUFJN2N%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpU3aSY%2B6P3rri41DcRiTqaUdQqPKAgvl89AXhUc68wIhAJQpWlEBDScLzZjIlttrT25nGMi1VSPHjzJ4JrrnSVfSKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0clWDvuUt1fzp394q3AODPdZGGwxwJ10pJoWNPTPcFH6aTqf2UGrSgg8HF92TJ1SuDYq3BwVqrwH1lR8b%2F%2Bv9dDOg%2BGqU80vr81nq%2BrggyKCULeaC9vqTmy0GZwWaI2HPSB%2FhsllkDdh4QcT6hGJGiFqhRoiKAAcdStcbSzCYB3lHGwyF6rYcIwrOH7OXl0Sg36SARZxjuXit%2BgQLLj7v4mey0VuYATQGxDmDryQ55jBuha%2FmdERG202li766NICWmig2ZRiovjr0zxg5DehwEFiAkpFcpOx%2BPdChtSh1nj9sEeV6lvuglQHiqH0%2FvNsHXWjQTlCI%2FAKNnueFwzwHW1OUm%2FLlCPOmSQmqopgYjdskTU1PfoPT86i1CvqRf1xgND3JkwQ3vEyLJWz6qhwxs8j7gs6ajtPYJimTZEvFOEZ1cyK%2FnKJCxIKuNbD%2FLnBmoD4FhOaLUYWOueTr8N2m%2FQbLcyMjhNS3s3KplZgkXJBR%2FmZUFoK2qBo1iijqegqDWQOV0sNvi722RfqdhSKJXfYv6EDB60sr2dTvTmqgCDVBDarCBi%2Fa2VfZPiLuAcKqfNVfnmHPbGhwWjkbTHtEVGopWI1FVP6e7n%2BbkKGLUAHEp5835egDakuoOl%2FLsOxX7trh%2BGlt8mR6OjDIubXTBjqkAZxpDFNtCVqY%2BTp1tNPOAzs4J0D%2Flc8gyBsNpo1KmJ2BZT7xUOltd4OPgCzyzjtLzAmN1MLXjikmawh7idyNCjauAKHA7wMaHeK5l3QnRxYj4ZqYuymYSEw9CvG0fweXBtLKofp5aDVOYr5rv3lu0RMrS0QHWURHK3T2TMdbMm5JskqYBO2CJHJZ1p9cfdJYLS0qXD6g53Eb3RuFZ7Za1UMyEzXi&X-Amz-Signature=9f250d950bd1d3f1e42380f8f0913038f076054a7efefdf15fc97c095b9fc0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
