---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=90371d6ed41942a3924db0f371bb6dbc1d631a6348feecc92359a21d9e32d64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=f6e761d3df8600cf8de839fd6daa447b7ead442efe65e25445cd2cef309a0cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=1c249b518d19a11fb01a258596aca9288122ac46c8f4b62ac68dd2f9379bf215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=62209ca9cff37546950a52e3248d05acf094534ae1835004a7b0f66b66b5ea35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=ecea23393a02de1968c84ed038230cdf4ea6f81347f841b80e9bdfa000cc9df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=f45bd7cb85ba98137162f5acb8f461f6c8fc0eccfa02f2109711b58b2d8c89a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=c384b951539781019ee82f506ca4c91b98dabc16d7f6c5c9b6b46e288ba800c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=c714c9f6058243bb48e1fcb943cfe25f6973fae41cc8a0d4dce036ba0b3d18e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=4b02ffc7646de6e71fd326f86c00fd54a423a0071a2d7d5eeef19ecc49027323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

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
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=e99c8d5530f72756c072c6adef1f73a90d4806024f57946dd3e2dfa995413549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSI3WUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDaUyRIg5bYGqWx8KnJ%2Fxi5bv3ym2SRZGIndXqEZOj2pAIga5krbXwLe6bXZfC5lzHURZp5aAvOs7DyjcOSvfn2%2B9AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2YepuXA3zWmlI%2FyrcA2hsuIz42iSo3YgyQHJhHwXcWwCa7KmgiN8lZKb19SRMLK0lo%2BltNzcBU722HVsrfsyEA1FTzDeS7xoQ6bWL%2B%2BXtpNbfeM3lxFDaN4SOy1vfqZWESLVtOtIw6VsohO3%2B%2BEM9OfOjs4DVtfUtJQF0j4XnkrmOazN1sSK0jZazE3CHQ16bOKgy5a%2BR0fqlzcATs9h3pRN7mZAFMXVABtBAkyMKUcjFkW56DexTERTfWYD%2BUWRj25fpI%2BB50gop1K8QPv46YMBNt5gj0QaC7ZNtCnXiJ9g12%2BQQFd7Ty78rm95pvTsFbIp3kEf8avmOd3TsH%2BzYeMC%2FEVtbJbdJhPvIf%2FJKyMIyIbmHUfW8gZDppdurx1AMCYTxxXGYyLb7UmSTIFbGX32qFNvNrTajJtpx3rBrXGQsEqjiQzKS81I9%2FKSsDnWJ%2BJ6qPlXl%2B21bz4%2FF%2FXJ1wjCp8Zv4OblYTcII8drFu6bcUQYV5YKemAhrospXDpnvKnpScMdFPJOy%2FHuWqgcmuI%2FuKPXQa6IXWIn%2BsfGcaZvnDtlSB9szdsP652QerhS7gszQH0WFa%2FC8uPBY%2FQoRYBYB8y5PRIuNzcRynHs3gF45UHGuqZlF%2BvGGlgQAEAyanA4sCkzqaKEWMIG318QGOqUB4o%2Fn8czX1pMGw%2Bnf5%2B9Jr0Q4vqjv%2F7WTNv6D6qCV03Lfqa6syHviQ496jSYJcCwJxYc3xiHBfLwLLJH7xXfSsdNmddDw6bx%2FFodhR3%2FrmgkkQ8C%2FWLxrCH4CleBKjANVbNkOUaYt4E16bTnYzPPC6WRKUFJSQ0DLu9Y7ZJoCK9Pn8hfspR14kZtNIsXZFjm6XWbbdmc8lPQ7LGUro3OsHwu5%2FHtF&X-Amz-Signature=ad112003fce6c0011f91aced425630ecee0c93c55ddae35b794986c7a06ac134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
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

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
