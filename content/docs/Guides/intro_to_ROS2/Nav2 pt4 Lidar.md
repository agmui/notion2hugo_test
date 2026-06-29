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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LPP5FTZ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh8LUy1Ul3Mds6fZjVQnW4KxDApGgwiNVUgPd7DWta2AiBMzp4Bv3waTccZWk3jpmNBy1WzMXgTCfOkhmRT023YPyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxbX8B54jQUd6TMoGKtwDUkStjOggjjixY%2BwTUTZgP0QLqjf91utKaez9sbsJpBIoQlCWWx%2BMOCoqWEs7VhIgMGtcFY5vpzNjK1Z90g%2FkuA9y%2Fd1J6J23%2FzPkGJDKPgpuSalBTWFyJHrgtE%2FaRh9cG%2FUJ6mdRhTiFqHUS55ll6IZCFT8oO%2FXyu7SlHV1HXeU2NzPn5XllXlus4O6TgIatyFtAQ54LQgkVy%2FHu0Bb0NTutdlUmBRZqYQvtJn%2BuC8Ust%2BNnwaH90TrMiWEEVjwF7QsPtxwHTg08QR92uQMXe0NQH%2BJfJnz5FlqvCJODNtO12i6JfvBFwYX0%2FHPexYCU69Kbg6xhfnGg3Qssi1OdhnvH%2FxnONM%2F7%2BlrNe290aOnG1%2Fn%2F3DQg8ve%2BNqxQQYsdhu1LXtM8U2QIRbztNDOgPS0NELmGam%2BMvIfop%2FNvXWgOtYR4Iti3yinMSljxbu5fv5RBR7mGt1dFnO4XWWkjtOeMVmYKgiyD7KYsqUVwS%2BFCL%2BxdX0g0gSUefY6JNyRbRExJFugPobxFxW1sedZzPYyagpHX%2FAKVrqGeTffV6N70K2f%2Fbi2d9jsIZ1FY6f3zK9OeHSssbGRf5odojoOFfHPywIsFjmA%2F%2FMSr%2FREPIqf57E0B8nJlm0dzk1kwnNiH0gY6pgHXe6Wc7uqn5a14nSi3y9r9mdeC2fZIdn6TzF0zwcj6tfm6CUg%2B7TWasBiH5c%2BT5yQWGNYHw1J%2BM5nXdlP80EDyM014a2l6swkl%2B%2BZohg4RliIv5brsRJo775cfwpjQ%2FjxwW%2BaT6zCgHOKQo0XhAKIe5n%2BZ87YQMfvfXR5MIZ0O67BNCx2zsQePO4xNrzS61E1Q5xdIWkVDbCbxtGcF5jMRRilgeNcn&X-Amz-Signature=70fbb5f97932bb06159eedb7f59ba06a333f1b28a01d4b1b45e0552cacdeeae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=bd631b98a2159739a0a148386703dbd9295b3b9ae7b876804f1b83ac7e339fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=e2e9cd42bcc8997f930556894a41207b228c9fc5e3b486c7cf8227130039ea9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=15a629cbd8af9cf5060eca54018e128ba7c85074069f425e08205f0541e66c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=3c032354c2b16b568386bfc9aa2594bfcf281d4753eafdea75d5a16e8b9ebb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=692d6e2d1d59d3756e93909846004f1351f06931bb4d73f38cd4a272e90eab43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=08b189affe44326f04e647a8e95da4a946678e0c449d1d73313e07c428748e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=1f20daee41c55584ca6322ba358c55eb3cadfb9bdadbf65144dbb958fa21922c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=72d63168a4de1fa68265569ce6950e3fdc9ddf7e8b0a5c5c239b74ad6601083c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=fd3ff7c8fbf8400b48b1837ce44f26a9fd5e3467a12b2c87abfb878d4fde6ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3CMDPJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfmeqTWC6E9FqPJelt5HD28XyNrH3XzUKlWRv0lwGuTAiEAsnCBj4%2B36u%2BbXCoY4A%2BHMnXUb3aCHpTHlIULUbZbqm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjLnOjTyDCaEKEyIyrcA%2BNQkBOu3El%2Ff7UysAWN2DTUnPt0p2vE3%2FltlZOYn1HbqXHLZ1rCcMOkdFXPAPBYun8X1oFSKkpoOAvT%2BnjKHAiAbYnCOwAQvMo8pmGfE1t8MBVtcYE2kcjRhAlevZvYh8zJyNQbIF%2B6c02VjvBGAWsjbNOqMk6cgF6BK4EZlhKNYBFpOKsr1mrnyKriVJEP6Gwo%2B47n2U%2FhPZyhEti4ODVVBBrIQ%2BRMABUM6PfTh7h%2FSnPoo4W5szVpqyxxYpCRTMbEAfKWWCIORduTpEAzIbj3u7CvOeDBpPnJU2wk1KUD8S9P%2BCpTY34g51bVsnT6j58g%2FRM924hqgpe7P7ILLDEXJLramgonW7jcauX%2FcsyusPv53ZFTZ3NtEO%2BtH9%2BuG7kyKcnVJxuzM6ovFzDHkyv9Sh2c2bwsEMk9yUeMI%2FuSxtvg52qFas4iX4XBBWa7M4t6phQPVzkuIQqCA7e8BjEtIQeiF18%2FcqIETNSDezXstoNrP%2FPIHMMlyUT%2FfNwghpfHybF8U4pGUkFtKMYxFJspRGl%2BwWlhvI%2BWT%2BCF%2BPR90QJCItzirKeaEWURkQMhGqA7g1r6hz958KYascsw6Y0%2F00q8Psi2WbXjZ1eN4n7y%2B01xc1Myq2EkwCbLMNTVh9IGOqUBeuoENWoEdVfJ9ULa66ZqF6zYoD%2BS%2FlPrRpV9wYd86cD0Ky7bLMAEZbZTF8%2BHKJG%2FMo8mB0Klhwx4OwbkuR5wjuiPs2wYr%2FpU0L9r3hDVSAJubgTmUa3nS2ZK6j7YYkMUyeEnRFyyB3GJEXuokxODhAuMeb1M4XPWE%2Bf92PhV8H3rjRk6osohqusefOP9jYEN5DMkdwKmtgi97a8CzNlQgRiO5fZg&X-Amz-Signature=3c032354c2b16b568386bfc9aa2594bfcf281d4753eafdea75d5a16e8b9ebb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
