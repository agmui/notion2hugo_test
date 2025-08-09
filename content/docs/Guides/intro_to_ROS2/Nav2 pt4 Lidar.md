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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XP7KEDS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEFLFDW787zgh9q7t9a%2FebwXsJ5MjiUMIjmnqWz8MZGSAiEA8gzMblvDX2DaSgZ9kN%2Bygxslo6TMpy3Jxju%2Bvhm4Kb0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEibudNGkcD6joQZyCrcAy3ZAYRPUstptvTID1hZeO%2BbCFgUXosKDHbMwht91NRE9JsPAa9y2iG%2FrSAUDXkVTPDsPCW%2FnHIWHR6OLlHkvwtkfMPxPQ%2FD8dljikwN2dCwkrgEVR4Q6RuUoRxATKfqSOvuoarduGwEJhj9vEHPuzrECU0LeYdhpNDqUWRctPpHUXL1xV3OEERwOdTg%2FjSFMbAhBygEp9f1aGqR6jZdVud9tANjX2Pi9GxTkOXS29utBHxX9t6FhaqBoeF9cmjPychM0xt3brX4yZIg8mLiUjb04ijQS8SW6MrCjLLszsGbS0OPtrvbEbn%2BFC3V%2FKqbu3qojDcpl%2Fkw4x1ogzw271begy1JJ828DHPcjngaFqfld8rjJ88HXmThzyGd4roTPQbpa9ZAmia4NqSxapjRMCSzg5PNdqce6XHHL6GlSN7g6YzGEoQ5E7vQq5B1YyKJ3c2Ybzi132vLWG81803U0lbxpUAvt%2FRknkVC%2F4iv2GA1g59Awx6WEE%2FCbCH9qMqyw6K0NLpYmxNJn0YlAo3HtOYjklDPge20RwpAjrfyF9YtIUYZEz%2BrwdVJMB%2FBSBi0d9Nuz6RcvTaBudV%2FcWegXoLbaFey8zb%2FIhgtJnaY%2F8ZeZMi3U4p2pkLDbrH6MI6r2sQGOqUBMqPw8udpIqBQKpZtb1fRBO7YfmKwOfyIBq2LEIU%2BflvxamIPLouOg6MD9QNNFtBS5wlNoc6S2RPp%2BFx9%2F2ZwfH8%2BKhGt%2FucyUmVzIA66mKNqSMdwPH50WbujqS2hgDPMWd6S2QSFwgmAMi9ICBN9dQujNFyHUV5cQFxh3RpqlQ2eBVbcpkrHWqs2ddp4oXh6CWK7GBfUypRd%2BNwf3%2FuHQ1FkyV4i&X-Amz-Signature=031ea5fa441afc397bf442cac1f44adb157a123600ca0f766eb66613c6dbf3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=2c02c73a392922c221276343e2e3688be34b29d587d9b35d3f603af12547193f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=45f4804f0a2604aa96462838303fe58291310c94daec5b7c110278519dc7a67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=d039b261398fc938e33ec0b54a967ca0f5254ed522e2c353cfe3ca6517d016cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=be027117340986dd752969e79d410f78b5bb50f386f716b56fae98d1dbfb26e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=9483bec089cfcec909247a0496c95efb07b82eeba0dd3c25001ca19c1155e22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=a2f48b918954bfc4f5014141a21afdcbfec37c39c7cc686aecfd99f5697177d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=d318826ca5d41b28d6e76f31cace1617b7a9ee4be5105292e76c9cf4a1f9c321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=8a6deb61eda666469f26e2729a7a3c07079ebb8fddebdf3a5d7d566586d2d75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=63cf8b07bf3fb8b7233c1bf4be515c53f4948f869f75452a5ff6bf3d5228cc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK36YQEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCseMSRCglXeMW18ScNIzggpcOp2uTCB2SUSWiWoCiNPwIhAIutIq6GLvHe0JrRxZIRxKEs0cp%2B6cANVGD3Fm%2B4buuqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3C9cr18HzHEnTdRwq3AN8RrTT6rOIvmboFIDV5ZdoDUv3ibsYpWVEFJxCmzCUjKoSmzucgR7yvYCzzR8hzCT%2BXf1f1kiFQdtYPMprtuaNSNvf98G0Ut8htAPqqp2qh5GGFIGPdu32I3Q1kazcKa9M2dqZpUjtxVLar5y5j7ntbkkLD4Obsm39q6M%2Foz4JouqZwPbm3S5WtBX%2F%2ByEcXNe7yvbLK8Nq1bQhnCgcp2qI%2BZVgNt1QoSW5JptCK4yvBtWvn6VPMkrio7pWv1J20l5x6yG129dWtU4b8vqeM13WAKptuoV1ItUR%2BoXgw%2BVPm%2Fo8B1BbwnK5ZZOOMcO1gPbpbzsQD2A6uAjOQow06uvqilCtA9Z42b4RkPgrRm%2FuDXDtwyIS2A04I6SRNg8UHal1SNK551x7xFMVe8nkJ4lICXzPWWTK3Gj1WQamjwysFZaQsnLZ%2FKSDkWD2j339sYSBUlIaIbJoGzmDS60RZ4qcDacFRWNNmfDJYdl2WwG7893qKF%2FSWtnC4D5Z7d2q8RKtCF7nuwZqp6kniy3YOndW2n529cSjcONk%2BrQA6hHn4H6onTPSRWlMku2ezYpNq%2BD3LUXiINhreKts5NwD8AGfdjlQDy7x2ukBhekDqeTx40ksRGmREtYI2ncCgDCFq9rEBjqkAUfbm%2FqIUTMBJwVe421LiYp7TY1bF5GZ51Ww4MuXHi5XaoLdkBKpmpqYeZq3DCyLAhfSW38OvpHK5cpf5Wz%2FBEYGzQrIbWHD6rhNN5cIdKoQAP8LaNJ35azPyje%2F8RGcvXj%2BSLRG9lJApiY0QcTFwNCWvIozOvb7RtHhkshdNG4vE%2B3%2BNMKx%2Fwvb1ZWx7clJ1Aijh65dPrwAWiOs78iXfr6usVQ4&X-Amz-Signature=be027117340986dd752969e79d410f78b5bb50f386f716b56fae98d1dbfb26e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
