---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=568c60d68bf3220878f3374dd986d0ef1465f6790dc839939e74ab7398102af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=f0c4c6e176d362a96ae22b2945987c28e06d0c3168c9c5cc67025f87cd6360b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=636abe4c60c4c64ab797a23881f5e9bff03860e86a9a18d52020ea32812d73da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=17a00840753d969b56a8fc1251cf777fdbb2e11f7d1581ed6bd508ca65e39110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=337e00f27f7cd074d71483220e8cf794348d58d71d65447eb3fa7846ab264316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=f27e1b852983dd57284207f30ee4eeb63db0def359ba55a4515ae956982db118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=1e37fa67a8c304bc89db79ac18da8ff0cf2e09c48865d2af291b3262b86a4938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=1183007f2117f4104b00ed2e3c5edb8961d07c5f2c963ed2ba144b4dd643fe30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=a1512b7212c090ce9c750e223e54aa5c89212d026992d4d43732571b9747be33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXMGKN7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeP4eCQia1gWEIi6gq1mXtfZuI9TrczSEh0kZU4Pk3HwIhAJnuxXjQ2vx2lrtubMvRlmPMV%2FnudWX18AqT1ChAcQ%2FPKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPp4PbGYqivz%2BmZPYq3APrqBw890VzVHMdGvNSgUHHyLGxnS8wAc4mwds1SOSYKMnpAqzkk7R45%2F5P9nhzB88qqRR%2FWNU70QwyqKl6R3Fcbxa%2F5nTt2Ejr7luThMtXNaAtE4R6q92XrIZ6xf50OacMeOfjkt3aAsd2oNKwo%2FuZtSSbmALJluBPMKHtNwecYreONr6NoLuUWQSlpNXD%2F0wvOaCOeIKKjXJZfnDtHqXKY4ycY46eSFSxtSnAMWHKJwsev7gwjJzgzesKi66rZfbXMHt5ZK25iUqP4csrH25G%2BGRCqemJMn6N7DABtEghTeWsGxFe2CDHJ7InNJfbvTWcv41o0cgO9WNW89bpXS8W%2F4kW9SNV6Yvrx3Oy0M1CZPjEQFpjcceiwbInzu%2BFMYdbLUfbEMLp6gYvZfn6N9crXZ8ey4zamJxK36e3qLtNFEu7vvLP4F5e%2FlH8ljwF6ilqC0pk7MAPr86eMyvhfCZ1YPD1nFQdKnOyFLAJZWHdCGKqd6bQFybU%2Fzox5HcioSQPZY7X1Bq4Qshm8XQmbDE9gDGbAZRflT3V%2FbTT68fohl46shar4GEZz4bs9pauBbxQyf%2FoNnHtNj81nikyLVBfRnMNkEN0MXVDf1QIf6lOtPR887AneSXdCVplNDC09avEBjqkAVs4ovS2f8KPcZ1IJbUQzQeqhAuomP8m9GrTcc8fDxdA8Ud1%2BsVDD1MQP48CC6yyf2W%2FCgjfvQUWcATjAvAJ1gCoshhlJP3W2dSI9DOToU2B7d0u5ZmXIPPC5XUA2HNCKBzsqo%2F58n69xcMzhrAEzGLAyYKCN9rSLrBlPOkpXNhY6SkhjB8c%2FRkRDvuSRmFn0Lg5z6h6wRhc0vbfVdDs227uww8g&X-Amz-Signature=78de13ea64656a9009af9f69a3e19eec0594dd557e08537f23dbe6add5d439e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
