---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MIUNXUA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBk0I5jqjUlTRUTUBRML%2BOFOIYBG0%2BPMobDLa9YpboJZAiEAowuj8UkdOBlTjeq%2FVrwiLOlBc%2FFtbrYJtnky6pMukDYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG2Vx7P0M9nzOv%2B3fircAz6L6TMC3Kej7ISlnts%2FOE3JJP3CzVD9XxZz0EW52cO2vKeHHqoiAmDd%2B3c8Ga%2BWNcUOKNcXry5hUl1xenGI%2Bzbh7DM6vWtad1kbfuXLv7ePks28VeCexoX8fmzVVG3i4G3LuX0a4fH7IKkQ3qLG%2FFj%2FO4Y6q6gOqN%2FKurk%2F7vCmSt5J%2F8jmhtHfrZNGCFn1Kf%2BNaWEzL3J6i5jlNqDuG8FFjfDGUGYMRoprcDNoz3JFLzBS30IctmbshWcPrkGcrl9Ps%2F0xmnZdroYMCQxkycHU7yqwsUD%2B%2F44UniIe6gJi3aAcpMU0FRcUddb82r%2BNCbncY8PFuwlExQw0zZvF4EbYJPaNk2%2BlkUjArSU3zjjzTTWX7C6iZehU9gaEasGmKKu3lHBbHaKWc4%2FVMgAqcghwgslaqCpNw4KrIgTLjQ1GaVg%2FOx%2FUM0R0RrAOUFTLBcxiv0puPQE06EFW73h4JqxuAGU2ltt4p%2FLTxvcT253SbEa%2Bwu8y5IMRTcnooSHO1T8FJrDtSyzy98rCEYqsBu3K4NUQjK7uO%2BM5dTR1khHfQYhl5QbLAEAKgbCNXoe%2BR5D2cBgWiQYoFHizrs0t%2Bnpi8DHUSCbWUyITScGqe15wcGHL4q4aiXi5uDLdMILIvMQGOqUBJRmI84QiHq3MJz52mvoJh36%2FrO2ZCxHUALkXWUDcKKzAff%2FEvBY9uuSNK9kewz2EqteSXZQATOE1Mh9odi2cTpo9LpIOdBzxUMqUaDiCbY0l1F%2BN0sAIpfr8np8ZpnKWrxso%2FSIS%2B9OvCLsJ0ijU%2FNgTmPj2yjvPfcBZFgk0FO5DaBrNRubZcJ8%2FQMnD1fs0bfLlWbBfJvrLqOTt5jd2aP7Vcgx7&X-Amz-Signature=a888867a4842cafa7c866c38c40b9b9464ca324a9bc6604b7c8b3d70deaf9c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=c434f3a174c03c1593376298bcc02a1aa6a34cc75b6943ff531bccbf1210b5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=d618217aa0248449d4e4c58a42b6115095fc163ae215556714bf2bcda30073ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=75bf3bda4d6328f1014e8d811f3533d99e2bf2fb3204635b437c3e36a9c2a72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=1ef15bef702332164c7b02dca70b3c79d5976ea632ffdf29b661f837184b229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=eaea9549d9951c13624c9273ec4051426981b2b6dfa6a2c801f5843faee1da58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=ba1ae422ff74d7df1bd8541314b3d19c75a30d51b1b9a2cfba5362f014a01e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=d520bf440cba400c3169a5c7b0fdd2b21d4b9424dfb3169fcb37da0a7741acd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=c5a27e8994320dde25b260aab027df20138b5afa6b11b529eb718306d38c5c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=7f45ff89e2e0686eeb9ad21bfd790ddfaf74b64a45515ebb0b956f0932f7aff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7CLO5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzAHmg5b3PFC81O1NVQus0hBODX519jPGwssrq%2FrBGfgIhAMfAPSgzBBZhBemiEDT%2BUVxsWLYZvDmeyHw4FlodSIieKv8DCCoQABoMNjM3NDIzMTgzODA1Igw8xrKfRskfNoFpnRgq3AOGb%2FnN6wXt0EV0PfiSO7l%2FsM4uiqO6kLO7PgDgyAhq%2F14QGZFRWMybW6s5sqPKYTH%2FEjVjcLgrAlRmtqZDqzrJ0WVl6V1CTF6DtqAW6c4k4s99YyOmrJUnZ2kHmf8G2GnxMiQHrIVXmX7CuSRNEp8q7RGD5poEbQFO7WiqmvzjcfUPYOoFiqdL5OHMN05GzdNHLlXWnknPqcZglVY5DFuTfu5rRlk2VWmISKqmJ2qw8Pg25cMuMlOul7mBw3%2BlGh3UxSCGA9Dwf6EuFhT3EYdWMYo%2B8MustgbI1xYisu%2BPYGBh4D7SJuovaQhjI0cyezhyzXHkMeBTa%2BkPjwxzh2Ux7QV3JtcBlyhPr9t5HpBPC0Tt5rygvYwdY5ObCDOL2PzygLpmVgNeWmWm0w25G6ISYbLfQw9e4klMlRALUB%2FPD9hvd2JlJUXs0kvfNuT12Sv15H%2B%2FXRr1Yv1JAasoxJ28Wl4LfOCAp%2BRgP4DkM%2FfoJO97rOE3dh19B9uEjGlxFA%2FAg%2Ffg9886Jo1h2fMixP4ZpjHVUjAWlpbEmKa4LLjNfw8kqHR7i8vDluvdxq9GE1pVoBEgEAEVWoFQrRahP1HkPNrI%2FysH17VRalFRw%2FaPj734FWEnMSTgUW43rTDBv7zEBjqkAf%2BVQzcgRtSmu5TAETxzCdDJtgk70XDVo7tByX7Cqo0qJzUXy%2Bp%2BEndWVNG0g5bDDefCpYqwyzxgc2OWxLtor6tc4jRLpa3dANVmVTEoCdoD2CEQJduhQM5qHAdV0gfytHx3euO%2B0tIleBS9kOS3%2FCE%2FNsiFrXkd9HBHWeCP9Q5LXWImOBAHR7kOXUQ0IEPY01coxWQREsO1HRzKFA2vPw8NTi%2Fe&X-Amz-Signature=1ef15bef702332164c7b02dca70b3c79d5976ea632ffdf29b661f837184b229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
