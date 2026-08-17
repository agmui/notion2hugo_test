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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLKAGVP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCIYBvB4hgWvwnMMlbqpYqwQ19YP4iDBPnz1iX9yjDQmQIhAKmCuAVgQrl6qoqwKEWtXkh0CSVoc%2FvYs9fvGlTCZ4%2BmKv8DCDoQABoMNjM3NDIzMTgzODA1IgwR3ko5opYbH%2BnxuC8q3AM8RKVy32PY0rjkZEUrP9pKtkEeYGeJ9ifqI4SecOZgE9ZLty72DEpv%2BBQ7p0PO0QveXCo8Hiub7nFuj1uE0T3DkNEN4dhtHxkVg%2FEzQYP2nCOll6V91Dst4hIcERPlP2IlUhvN05J%2FbJNapDmUbWVZbeVo3HWsz%2B3R9s8Wwfi%2B5sZn2F0dKWZqQlgmeH%2BgHD%2FO8NrbVfOrRd2yPGwnWgV6I93Tg9lK5lqov3xA%2F7by8pEU1dQAmD3lzhJvoZpPh48eSAqy8Oc8hmZHd3NBNExIh5a07bLNDnZ46nreARO1SQhHeC8GCcWjGP4FdfHjHHNemqNBt%2Bw2aM7oJ%2F3oEAOmlosGjlIOusnLI3f4gBpNJSEf03T0ov9XcvjQfm1YkW%2BCybQUufUJZE6NJq3g19YXxT5IYKkSEOsU52ba54kEKqgtGVTSIMGT549mCDMREKFPzoKtoPUuYfe0XZZPMrgILDbnHULvlqHSs6%2FWQRayTE6unhd3fk5sMz3l2Ky8v0PDJWTRA97zpPMmM0vo1d%2FlJe5HGJlx41TmDJubzJMej29n0iuz6QbxhCv0fWZTiWRFmEZFVHZTJWTJMfG%2Bdwiy%2FNJ2FJlSsh5LFM1ovI%2Fpb%2Bxi0aWwD3IK8%2FZX4DCBq4nUBjqkAbw%2FOJu7bN%2FH9cTf4EDXWXpsUCDjSK6vSJGJQfAWDqTZ3%2FahmAlss22qX%2BPqOakKbduSWiZyYv0b9gOlDmBHltcrJM1fsdlJ5Aumd3%2FVMbQrwxMYjhSdy841xLyKgYg6AB7rmSXJa5Aom7BFQzU4zjAUXXv%2BAGlHc2Z50gW1bpJKFO5zUqvMo%2FBj2rvp60QrARrvobaVWY8BrwUGqXuLFk6sBjH1&X-Amz-Signature=207c5cf6eb9dab3ec8b5f565c6991a6d98d5f6cf1f42fdf1d0b064cd4e005167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=a995ee3e695992a648c8c0f802f73422c75dcb1501a753444bda9ca33e360028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=c85436b54ebd603fc0c132cdde3c7b19ffc6242c725ca9b81db4395a22f82850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=196f62e8730dd6d2fa0a224d7303606ec67534089b2c5b0d1455ef91bddc8f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=840fbd79fa29c8ffb1868fb764436b2e7b2ad6b76c5c519d0c6c9c89e3f95955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=6aa0de57fc17cb5084be3a8c819da59be8937cc97b73fbb8bd49c35233c4e3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=a9d57e378d4fa8d31d4ff3fd51ca3f680f7318a1af6a9df438412cf76dfa3834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=9f80cda5fed08c18a9979217a4ba53735648e064358bf5c8a20609701e5df021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=810923fa9af90d2b214b99fa882ea48b215a295146f387fac02f27dd085c9b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=88af5601d828093fb35d0b239b99f3815f5fd65aee308fb5cfdef8d0fdcaedc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYTBFD7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGEz9DTVKRSFZ80EH5Jyu0IV%2F3oQQqVkzhRQ9DZlv99CAiA3JH0Uwt272nWXsC1VNojTLGS2jLj1J9l0n%2FYjbNN95Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMnQ%2BeHKwn6EeCamc5KtwDrNmhzGGj65TWDQj54sxklM4TpcXr8Wh4W2xPX%2FiQ6y%2Bt%2BnXsps4WdKtlmrs0B4BjjxCvvpue8iSIgtgRftU3aioovgZ8qLdijk11RneczmILC8vgCGKO9Y6mXIusG9QvLRF3HlCS5hgmn7aKg4AQmo41coFqorRCHQVuePXbYXzWfuJwXRn%2Fkd%2BGZ8u%2FbdOaLbff2%2BIDd4ufZgpRjN7DdiWAuHSX7wq26%2FW1ucCKgWO5zZ34Q8F5vPG8zl8DMTdpWMxBD446sf%2FVjvJ41scalej2DoCbesuPvYnQ95hunoxV7k5Dfuasg0uD6PLZvEQfG2%2BE%2BTih5USzVzA3Jw6CxCTfIn7fdZaWFXNZ1Te43Yzp4wHWoxzH51Qz6BGcMFsZa9qqzZlV58vthUkM7mf%2BGMzsVtWOaPM6QWQELXxoXtAT1rExxwTzwIebUzdCKn7dJzgtCArsZvyRNpYZPogHRy65rnZrdkLu2Gk3AHosK188EJueo0ez6inWJuJ0oaHNV3rDZJmaL9%2BY8PsGFx9krZtyEfyencPsCFIoTrBj7O2TEr9Gm%2F1ILa%2FKmAHWfOX5WXF3cxnDttZQNIzeJNoI95g%2Fx8b8xNRK0F6dJUYKjLVfdw99rRCvh2nG5%2Bow4KyJ1AY6pgEQUZP2KLyJ15WRys5Aq6i8%2BpfySBClrv3A%2BfGPlJl2cMb%2FVw7qOunbt5pJciiR4A7%2Fs4eZUqXhYqj2TrXGA6TQ%2BoKJZpuUmbmAefFk1oL6oe6vxlTmIZyUi6dZhPcHoRwk2urdzVlI7iAFBPMShnLSt06Sx36hweDz0o5%2FXTL1KRkNArnfX6fX8%2BXEVQ75JhEH3N3ito3xh4XUbeU36xWH%2BAMAwVkl&X-Amz-Signature=840fbd79fa29c8ffb1868fb764436b2e7b2ad6b76c5c519d0c6c9c89e3f95955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
