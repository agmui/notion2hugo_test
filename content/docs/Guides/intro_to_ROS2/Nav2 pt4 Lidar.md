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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=a3ac24c7fec29b897b03585b2329cc79512392052f92a6fe64b2dbe9747b3e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=b0abd017da24a5f3a268531907a6dc3c2819464159f3c4732ee492b831cea4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=f12cd6f45ed134d7a50f1664ab69b7228a43556bce41083c07521baad16c129a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=879a4411ea5cd84d9f3a430e24dc4c1129360f00daa5ebf693ba3fbe398c36ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=631e44917c69e3f8c15fe9c93ffbcb63350a44c6006792535acea5f1943bf4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=5cbc957ab086109f641420834ad0a86677756c5cf759828a406097c481ee8847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=633fe59fe2dee1b09e1bd06a55fa64989712f0c770316b0e82706153748235a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=621f242ca95b5eb169479f220b890c5f1ccb9a7f07c7b9c6493abfd7ada68d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=0f3b925a8feeb1010a259c5a5fef2707084fbdc2e5169596164da994f1ae512e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJKBQFH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3V1QC%2F%2Fkz80AKjM2RR5FQfziuphNbiSNpbM9c9B5VowIgIai4vnqBbeRvQkruJ3vdgfCOWTd8PaZkS9tHN7IOzP0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8iG8HaoPc7Q2p27SrcAybRovKD0FLdBcVcmIGqjmQiWJr0WnnSza14V7QXzWzGxBR3qgNvg%2Fm5lqB3aRdyCtwrkYBDrOdrlpSltK%2BE6e6a64Epa155E8UseYakK8G4inVMcVEoNvgF58wxxVCGwOUXF1PXT1ZAOVTu5YDFRJHHaFsP6YEC17KmC4PNCxYfeFxrhNEh2yQ%2BcxOfhLBO9edio6vzla5qxqETgwgFFvTc%2FBwG8YYc9dPK32ZL07dNxwl6LCtLf4tIXpc4tsMvG08MsAv0%2Fbee0AV08fnETWS%2FfQ9lyycmDfilByhAl4Oipi4%2BB%2BxmiD4LnhnvQzbzCnbAOaKKhe%2FtikJHdh0Bw4XCnYbz2Y2sgeqo8f1XSyG0MV%2FRMror1e47wsc8iweqXepRrB2J73vjpyOIeyCP1D%2F5CbKH89IQ%2BhO3g007KGK3%2BHkUfqKxfiTq9gihElSyQHn3LE5Rc8%2BEcE%2BkhvwEVqZ7zukMB7lWhgWPvE%2FTU%2B0dtHtmt2%2B8Y4xBuo3eH72v5ej5Anq4WSX0yIQFdKxrsdG%2FrUU5fapcZPxXJ3VDHxh5WL%2BMByDZVvroxefMayOV6wC1IJHHK%2BRqDnIgeUViIUl0B1CvjZTutNU7pFVo0W1qpxPE1sJHJqTduvhkMNW4rsQGOqUBw3hhLKcsKjhfAQwqaOnDekHdbTIrMGHWx69Y49vtFinYuaHQLGAPdbU8IbXFG7hPYAdSm2jWbtSLdFaBctV9WlGm%2BwbRjv1YILdI4HaIJaQHjiQvorSJDs%2FEMggBlNgf5mp6mzKgeKKr1DhNVywJULfW1LJJ1RncEyIQNjRd9D5CjmC8uAyp78zVwiySqpk2YYjVEMi%2FpZMs4Qiqm81CEgKxFYlb&X-Amz-Signature=af50d6bd0ea965f801fac84ff31b667908fc8ff95aa1937a705b336f687b3615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
