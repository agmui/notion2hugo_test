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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=6db4ea3adf19d589a3665794f934cc980b71459778528b84e8d18ea87f8131c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=33cd778aaf27cbec2b9138771393b3378bcfb2393b2c21af788ac043b21a76f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=1949442fba00009dedb3b6966e8f8fbfcd893e4cea3a6361a1a2266a4c54ad4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=aa9a37eab5cbf90d156fa94d2a615ce24e03804a0c3b61c177c5529199b788ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=6b4bc87ad328cf0bdf3705aca767b65f2bbd08e660c86112ddf37eb506e22234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=ae8b25372bced80918083b49febfca6b8877f6ff77097da4cc40e817893c55c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=90f51f1a72bd765246290a39ed2b9a7b0505626bc35ea5ccf20e93cad85780b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=e2ea967882c77ef06b9d98f960d7822daa4a71e6d15577b0c846193bd10d6cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=34a57d1b04b3cc06f08a0d5a48c8b2891f7672ffabdc7f1a5fd314e042d4b239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO6SPHJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd8a55JSiBPvi6wo%2F4CQgPwg6LPHsf47p0KCeT%2BnyKXgIgbjGnuIASUTU3aLw8QyGx8IbRUzTwspjSRB3DR05FlsUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrQS812Ft7yDfy28yrcA7RLz7tCEoFB%2F9othO0MWJHUtxHw6rCwf1fMFTjJ3IShydL%2BA0YTVb1zf6eU9%2FL9qEbTK6evIFWKMwqFc5elXo1CIi1MkOb6GwqH0%2FyOtKsKqaUOR1%2FnpKP6rxR9QQdLWn3eN3MVOXFNHKBMZOp2aH8%2Bo5HCWpa%2FtJ7s%2BUF3xIodng2tKm3VLMWzp00I2l6i8tkz7hvwqW6CC4GR209mYd%2Bdwj06tyR0VlnZRwYiHtthLnKqu%2BOpJxVfjX69qDKTMgxvZCyX2kVzD45Ft00%2FLZK0ryWX2CFZuxO%2BLNHJnlUolccBP8RV3T000tOiMg%2BITB6fTsV%2BU49%2BMcG4iBotvJv9rY8GZ2xF%2BASsLLbV42x9%2FPUPlxlis5jyzHODxgRE%2FH3Nb9fnezDTXBhjhXqqPeaP2x4LJEIBoFWCczhMdFyOnLz2TEP5tWh3AoKaD%2FHQ7BBRXxjrPHB5AKC41hFBF3nlk3XY5TGZZaYlkSfhr36IyK%2F1b4Y7gBwlO8ikvaA4u12WWpY0btIkYxqgC8WsBV8Brg2ZPEhNbK5itSrkYI%2FqxoC4VvgTpSQTnMShk8YzBVY9hli8yjEPe4o%2B6FR0DLWJrNOwkFo9uq%2F%2FavYxhmPZ3Z7NOYxxiFYbJB4ZMM%2FLsMQGOqUBtNc4EWc8KHc0zkG84sI7kqL7GxUVJeaNdc5ul%2FYj4oBc4rKAJte5fCYHDqcnTfBkGREvNCNPpnhxNoeFv2liZh%2Byx2bMBpT%2Fzyfk1HCMfQ63UYsctfdUWf5Tvq6Gav2dSP7VO2VrYS6kdXidkXgKeFpWjB2yX1Fa5BoexzHE5obN1oeuCaIEtsgzypbafaV5vr2tzNKw7KVk5bwG%2FhLXlG6QPvu4&X-Amz-Signature=e30e45b2d66e53cc8d8d7de9bf0c6628802c48b4c8d5b0dce4799365a35c2b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
