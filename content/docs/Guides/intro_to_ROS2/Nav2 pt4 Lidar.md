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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5A37X4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzNKCVEqdKJ8XUH5zzWsOxQ%2FGGrqqInvj2XRZu%2FXamTgIgE4R8lM%2FqTfBY%2BDSAvgRb8fsgR%2Fk2PUZ%2BDGBV8YFRuyYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDOpWhWqbHezpS7irircA%2FvsP5ipOIIBBS2eLTnAGg%2Bh3j8DfMEtypQ0YLa2psmiUQp4do56Ka1CYfOIFw9vOqK5qEZQQnvu8M30Q1%2BDCRF63MKOvPfGNfb6kOYxGSFErDIbmOQEQ0IE%2FPpsh4AojjEcT%2FUmGonjWACflD45zGtwBL5j2%2FLAweXWq5mpNJU01x%2BlqyK2wi1MUDSFS33OSNDhG2AF7sxFt270yLJlySuevb8J6oMx99tDGhpB8tzfTr6EmT4KV3NChLG%2B767IJ9vwersZp7PAbm2XmiKLnlwK6UFd3WcgUm2CqxCl4XAAowNfrR4OIN45dDROnDPV0Q36BYHRbfAZjMpkEn0tI7k8yS7ExhwgJhhFemNnxV8wGU18tPk6vjSgWPLMIndztWxGDS4lKYmyfv8JNRqgh0b9wuA38xghVuMG8KkVK6Y%2Fb7V%2FSlq80jcQBdhat774PlTYtMFl6n8dj2CJipyOmNWNFaagIcbXd5V0KhOmpfzMrKgh6pM3wDus4vORgiczK3p7AogAuj7mlCS%2BdA3r54TuO0L0j6pI1LMDVTnnYHRXjh5qHo2jcNELlBWiu%2BCiu1wGrRiIQPFjEt%2Bl8XZN3WtaZPb74ujpSS1T8g6pPaofnunYpQd7OH7eFRh0MOX78sQGOqUB4jt7Molk0mZKBZo9X%2FU0%2BLQ3Dv171OzKPrVWDxprbaAD7mTXrx%2FVTNeYBcj2reS%2F3sPfHMBro4EY3HLaa%2F7AShl53%2FxoTDmk5V92C9I8G1euW5Uq3URCrlFdzgXkNxu%2FdlD0e9tUwr2Yno%2BorYX0bpMfCWYzpbaRPEUZcHVnRQHzQYPb2vS3FlLDm%2FtBe751ZO%2BkLpZQtwJulLSK0juWlL%2B9j7ey&X-Amz-Signature=6efc06d7d5b05cd0ae7172d78eef383547a776aa643191897575d9f5272ec9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=0298c019a1cfc103bed67581c2cd3fc56ca0a9be9dbeb14c198c857ffdd0194a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=4850ab69b2323bf4211fb0b6391c2ffb3042c9339394e263fe373e9e94445f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=80bbc58d607e7c049da3ffa9b7128a6fecd5e1994846306690686d54886bad4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=dd4069b95c4142bf18582583734b43e945474c1632ad818a90b418622bc26c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=d0dcc368f1c731c49594b53309281820b812517fa3bf38fe967b5b07ed07dd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=2f8393f811e0e3663cea01d6ed08a9b1e34686f44fb78d86e1441e39d70cfd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=89fae8ed837fcee9b06a6a27b90324bf221df7cc1a54feee13d66480527096d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=8dfc22fe03597b3266c291b21697a49111b0aa362bc655a0dd171846eb841be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=f924627a03dab140fbbe9c7d147a11dbf1690211a925b7c04b65ee076ff43ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN56J76N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwKI6SNAgY97pt2BO6BaVgYQB8Q1twWVNeqBM32%2Fi4AiAjqyeFTNzxMEk39nhi6awBme7Re1gY2sbPAJvu5bQ%2BWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNy1RQG5Pn%2B%2FrbH0ZKtwDNOuGDipu%2BgvVT6oyYmxFzSzUWYam0%2BBSoeaodDaT0te8tiJ%2B2LDB2dSY%2FL7MWaZir464rstP61o%2BqyDbr0PICjWz%2FydKk6G9O69U866CirQYR%2FRXVyXmHjIaNyqwPIsph0oIfaH898CP8gnWBOucmS6inht6fpoeQh0pOP8y0ssvcHa%2FtFqRz28OQYXutoAAJ9jKpwkM8GN6V3QAf%2B17aR10tBa18w7lBMntOkzlmh%2FEyW4d46eSDNAub%2BcQOFCk3rXJrL6vKvYFVEiG4HRu7efIyJ1jqtm2mf6%2Fq8c7wqGbFvAX1RHS69QvM%2B8CLIYOxh36QF1oReKtpbA1a1pL6RFQYnIME97Bwx7t%2FFQv8xWoj89pvVCs3ufrAy0znd62ym%2BxKZAV96eUUJm5heFfgiLBbN2e99qB%2BNkkBC1ga92U9B1DDppdvg86zBr%2FjdOF2BxfLmg9kEHM9PlG%2Fer%2BIit2HBzNgP2%2BubTd2as2YDDqdQvN80HFo4pvn%2BRJgs9giHCWqW7E%2FW51BetVZbEVn6Mxv9bNg8yfsPRqZ32mqsGAbUnWiqj%2Bv2WLCcJiRnRnBc5mnDDH8BOxuMiZSuRk7co6CXED2o65PjPJQHgJNFclm0bRGD49KCX3d2swpPzyxAY6pgHAniI53SjCwnoHIdeCluTh4qPX%2FqoYwoH926G7VVMILPtBvb0vOA2hw53vQWs51qsTVvcyesWLhCF4q4eItfLUIpkOe%2BFCUSuMTSZ1SA%2ByXwLdfj4rZZHlj3pmDhv%2BqEmcUQXpaioHMBBK6AsR4l26M6K8DJUi9iuEASu8QihdlVQRI85LKMD5Pk9MwCRzBGbD2MC7WisQVJUUeDu6bLmGftZrzbB4&X-Amz-Signature=dd4069b95c4142bf18582583734b43e945474c1632ad818a90b418622bc26c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
