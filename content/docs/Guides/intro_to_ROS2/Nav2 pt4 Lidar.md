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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGLHATY%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDNMGsNsoLQCBVX9uYyCFP1TlmMzAJMre7IP1v7uPSeAQIhAMOUcW9Zl9r8vcXhrkS8LItwb6qivLXvCfLv%2FMa24qlZKv8DCAIQABoMNjM3NDIzMTgzODA1IgzLKm4Gzx2zsqiBPd4q3APVSF4aBaq7daW8gULGY2Uk3nDRfITraTRgQybRSk%2FVOmdI99f83Jby9rN8o6DcLE63NHLakgm4%2FBzb2WlRtdvZgRXZq1XC6lObzHIt7TiYrqjruP4tFzbgv26gWRVEal%2FRhbyaL2q6r9o9rRd%2FFVpAk6F2oVQcJu%2Bwe%2FILmZJAc0hgB900DpteGXDQf3LDHP%2BkwEPJe18qQLtbUzPBaaVueSUF9sW2vteCsRAnxlrxWW2Dz%2FSd9dMwMJFhFfkRlY8jJugEZeLLtdUSJTHkgRFrhqRJOZJz42NF2v1sllm2G7CInB0usBOGPtrVtgYqCPJcNM6eCAtJpeUZFJeVx1dxidUajPdXxAEMZ8WpiFkJPSjnCQotkjEvSQuu4SblnddpniqzLQcHLKFKuFjT3p1IsJjd4NFVBBc934Sg3xAe8GjJzN41dDHb4%2FiDaDlWiU0nsuEabWyi8KHS1P2DZHZ%2BGoRep6gCRUwO6TrmXmbFccjd%2F9%2BRY3Atxbk3Z%2FI7gfmUYYsW7JJlPBinY6TKdFGZmhQDbnZVcE7q6Jmi%2FeNxN%2BZo0EF71JmMnAtOivEgIFTKno%2BVWvODs6e3DL%2BD2KeeD%2FRuFYc%2BFYozSbzPpRmIuH3fD2unU5mnvd4%2FkTDQpvPQBjqkAYRBjhJ7IXrIinNbKLiCRdZMqpVwZQm1zgkJSAkv%2FH2pPK452xzLGlgbsEi%2BYxHCrL3sYJ3c00vOv9lVe6dyeQ%2BxLm1eBrZ0AxI22glu7EMiKdXeOya%2FvISqs28Cuw2pRzxS4d6xTlf7wbO8VLyZTrdQ6XqIMPipuUuifyFeuvJHBm2xMyRg13uCVy9ja9iIyQXLtLVqzPN20zo%2BD2reskmDSzZR&X-Amz-Signature=82f5766139dc9717ff740dfe2310528ab5d66fddf4904b2d0ab1d8e54b18ba24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=eadc702c7b05b9d9f76465c5eef8d351fcd2cfb05ddc83b20dfb9c46a56ebd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=44f97d2d4f08c8332baa89f544c6e09727d26fbe4dde6bf96b884c356bd0ae9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=c324da23cc3f6475d9e30cbf42c2a0a0ff99836d6234a19da34362cd066d42cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=e13da4cce4e6dbaa415834288aa53ea5f14160e4dd9a81ca320bf0f3c8ca4bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=d356d9fea53a7fda5e17baee377a7e1b67e407a5f90b1df12a682afb07509f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=a20c7085adbd2f01e9fb8bf4a7e5999022c5384f13b3db27b3239bf5d1ee82f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=809b4a7963d565bf3c282f738341c8e5e592f22f428b35c68a6e5ba955a9003a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=3c62e6a493c18727a441d3624a146fce9a9b54ed8b2c445a4ea8064968686756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=1e60340ec10dbcee1b78e865ec91c0581013ae63b5ec0aa5772f7c72b3dcff0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SR7DCRP%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo9tL5xMl37i1RrfEzKepXH58lMFUQfDZBWvflQFtmKAIhAJaOhY1%2Fptb1DfsKul3TrrDwW%2F0Z1bMY0x1BKVMCg9yOKv8DCAEQABoMNjM3NDIzMTgzODA1IgzBh1jgD80qU6pBp2kq3AOfC8HRYresdjnnoo%2FDijwD1nO4lZsjLAKfVzhfVM6HJoQ99nXBVFRfRqbTMQku96lGse0dHsxlxSopdAWYsrX%2FQ0qBnJzMBMz881IZ8vQ6qZ1t40vP2Tj74sm7%2BjSDX%2FBPlAderl4NpBGfTZjRfOrE1KW2PGED%2FnQSNEpRXi1APQiCDR1p%2FDyiS7GVLJWTpIaG4bP%2BNqELP9YjvxiFUw2ZymBk5iFCQ3SPbpWW5oaQqrNdIktno%2FsrT8FGF0KEGIRslkV1pPIq1B5V6IEEiXqAhvvRwhq%2Fno97bNWakJQ7BJA7AnKk%2FMOEsgV7NoRrA2OzS54uo8v9ZZIZGHG6QrKKWr77PwevzDthchrXe8Zw64XEaCDo1Ur0hzSujLNSDoH8KMRNOgtYRj1UtMqxuNclGm0n5bWdtfC1epcG7seGRYg6gCqSym%2Frb2f8fmxw9wTTcJa7nFMNslLC7sVQHn7p%2BEGESkOVvR225Xu99xVgVznPH6rUoImk%2Be9ZAceVZT5AkUXlsuc7MTyUHcZ5oU1UEg1rbjyIPMWTCLKY2StG%2FeGshIfMBDsgQSsBuHCPUaDy4OaMeDvZ7wQskuLOMt0K5DwlhQ2KGd5x5%2BVix3Ssf%2F2Dkg7Y1CyhnhlGWzDupvPQBjqkAcjjzjIjDGI4joIKMj%2FRlVQDA2TfbNdsV6n1%2FJ9PWz2sOI6tfQrWsnPH88Oj7%2BWfFALWvTPimxWalpmR42cn8BGBQazKMjo2aufR0nVYqCuD%2FKTHMGTN00pP3u9Wx5Cs66MT%2Fj84P%2BSkYL84lGat4GyUm6BTXRRxloSvW1CtAEaZjtxpY2JQveFwyI1wLZhq4mB%2Bhbgq%2FOD1YbWLTodsGaOIUyv7&X-Amz-Signature=22ac71d9c18f6d2368e8853e0112a29cb2182cedc78d1ab5c067589306329a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
