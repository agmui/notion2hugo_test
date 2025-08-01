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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=2381f35229191ced2c3d630e3c7c9a866ae50ae65a91aed0eab6bee2fc818bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=372c5ac8836935d53f2df21632f9eb9b7ec003abc8f52b7de5b05a429fb7e056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=803f1e8004514499529b986cf4443f835f32a165eeb12b7ef5e4b7bc1ac2962c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=d2a1ba7340d2e64780cfa9a45b495d151b6266456d13c958a297fc2e1b5d7cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=e45a91c291400bb3c29a7475c8280613252641b3bb0c5566afa4e13ac1b29d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=29c868c115a5d15450cc91b08a70144a2226388ab261bc14284daa7421333357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=b1114f80740c667785794d7adc4066b4ce7d582520e66c8212cd02eee8328def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=ffb54edd1057019fe04f88d100b25bfcfdf3d1804ecfe96d1d374cc42833d7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=854cceb1d58d401a85f5ad95773c6c97a825fe0d794aa8a732b1a1f1ffaa9f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJGK3WB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOsQM3JiwMXjGpm5HHsAk0jps900vKzrSrysnMy5A2EAiEA5w2Dv8mI3V298q1KPNgzep4eyr%2FmaHNN4KxkXuzK5U4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCXU3ZYCqqwqIG%2BlircAzrRli9wPfmzrNZs4im5Mc2cyM7qYjSleoreQkB6Ap%2B0Ej1tad61T13zu3wWydflGESmc2VUUyCNsriSfxm1Tkjhe7kKCK6OnP1u2UDRnIpsDPFBmdfT85U829ONqP%2FePUSjB6P6suhdoV8oECUqerg1utoDKZF%2Fy7rdC5cnJNNQGvEuu8ml%2BI07%2BNF1qFzvduhqWCdDfRXd%2F6B8m1yBap4uKuF1HWlRFZioTM%2FtyJ5j4u27ugPwQs4P6KHmev8gs1Syll33SG3QA36%2FbAfYpEG18F7hoxFlhroBpgUeYBJkHziz%2BpST%2FjCdJZehNLAlP%2FpyX5dthVRpi6Iz5fw55Q%2FVir4bV4agXu%2Fv5Pwwqw54fML9%2FX5Kej2RnQ4qrv%2B8dV29cao0fTdVyzqBEF8%2BFuoql97Sba4U%2Fm7mMWbALHqiCLgBIhH2%2B7Sg3Dl2NSUEOB6YMz3hIuMO9uCR1bCvAm8Ny3B3da8Ho3%2F%2BZzC4vEyqsqvaw4Yc486Fm9y9aY%2B0bAz9tWlFaJpcvgIM4d%2BAmb8dcN7VvxFP%2BJECvmqgl7xZLDrl5NVGQHlK4F%2BraE30%2FoeIRzVGfm4Cpibeml7wp%2FsF62MAO5J05QwzWfnHU4n35SGGbm9kmxKl2ikSMIWRssQGOqUBNxPagFt9DN%2FgErJyTk0gn8nmqrOQeTwrc%2B5Lzw6sz8MfLrWzv7mVEY%2FMvTBTALMBmnC6ab%2BV0SUNYQ4YTWpPW1HMa6%2FEzDlwwDpMQanEf6vVDiJ%2F1DixUlpi0U%2BE2MxTsb6a4EkcrLkQsEqUz02xNCwX9PpV7iEGOw%2F6uwSpCr8MG0Oj0KZYPyFzC9iwp%2B027xZ2DurNCjoKJBMYtyk7NVQOzZUY&X-Amz-Signature=a57d81a0fc713422e3333e270dc94ee40cff547995d9e9645cc84b2ba376b912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
