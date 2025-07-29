---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=1535d424a89c2f94879b5d4029efe63c4b5ecc3707448a6c990fd50bda14a78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=adaf8f590f5a18d7499d11e10c20497101b3e76e01a072777cb7b66796cea731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=b130a80f546b63aafd868ea84a69dcc761f125113b1d9f16a229b227a58c4bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=355284c9955c23bd8eac5ad8771e39c57004873230439f5b404cf06fd0270683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=b57a1c5f631ec3c22ff19ac425ddde5ea1339b8cec1db03ec3fb01e0876ee0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=7e69785b96331c0086bbacf88d4eac24c4fc23950bd63382f288e5c0986ae98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=04eb13846616aed1482e0caa76d6482dd9b01db20d16885770f077a32b30c6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=da49493356fe77ce7b265548d3cbb53af52e75555037c3240424c02196ab4d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=f0f47f18508d59b8c8aa239deb14707cdc7d8a628c6edb2b87e1d5e8e7816e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC2VZAD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOd82qVgW%2BH4TavZWYgMI99Ym4oZDP8TyEIVMcmHEtKAiEA%2BIpxzvbNG%2BCorQNLlMJy5G2RevJmjLxv31YImJyvkB4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE8vjA%2FK%2B%2BEPSEgTSrcA5U%2FGahWpztZDb8nadIaK%2Br6bj0JAfFsWF32vDy%2BXS0pEImcD1cNZMIOv6zOd9CMyCn12t9JEioQsUD3sWzFBTzyB6UMU2t894My6nub5HOZswR1UQdBIZtnhW8%2FXUrLSUImqOigAVcNXwK8nzHliwyjZaUej797imv4sxCv9eJX%2Be7yORLtViPsFWkhx6eRfIGec8m%2B7ZQLNIp1LrYDKDWzCWLoeUJ6yQBYhobZh0uncWJaawg7vNuiZawaAyJCZiepR2mCvI61%2FWIaaFY4ST1i1EcRH2Jq2Act6%2BSisMnHd%2FzpVw1G5MJVOROjSsNk4yVPN1pO%2FigBDDM%2BMz3f1clBC3ZE6YTpyzn%2FZ5U3lQpP4KSbyY0yjAbH37MrYqoMz%2BLXHG0YcvsUS4zchAo8CSxfj45%2FRFoy7ch4G1t5y%2BxI%2BfumM1SA64gBPOjeWJRGzgVVHCgvh4Hra1OODjFofaogEKuOpX03UScWqPPtiqn%2BZ9P3YoCByYrgSiNjqDQ4jwMjUFZaOB%2BVPZ2L4I%2Bg8gcz8htpeHeIuvBlMVYDYRbO%2F4moyhdnlXrUZ7W%2Bh2C1Rko5x2n%2BlnsL0aS%2B%2B1BdZtwli7bqDbup%2BDwOclstpPTnW9Bws7VkPj%2B97qrxMMOtpMQGOqUBhQI5oeFEiwJItQiBqnFS7ZFV7vz3RxXsA5YxyjBqtFg5OJZ%2F1LVOCDKBkupzYPq74lOKUrF%2F%2Bl33B88Q84eCuzhGnR7FL0sJ8TgGo9aVU%2Fh%2BUV2R%2Bp3KFqj%2Ft44g2mvjpjhUZjfkg0KKiVyb7oyQ58jX1qLUK0QASgPASUIyWGLMYOT2QddBQGXR8O5TQCBMVx9LL4dKz%2FiR5WGOsDqjKwmHgsSm&X-Amz-Signature=90d6a832a954f21a50f8a372acc9a79fa15c254b0663995759c53e37ea3efb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
