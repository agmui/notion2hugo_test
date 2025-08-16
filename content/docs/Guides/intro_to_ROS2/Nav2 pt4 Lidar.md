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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=b735529a2e3a1d2d93612c15f1260a15c7682856ee58f84228150de71849dff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=b38eafb59ef475bd474b997ad8dfcd365ee01022d2707fcf5665527e8d077d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=32abca8b704d44defdce8ef40b05b51b9a8e7972191ecc7c54999be618148a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=21eabfcce36e0364c29bfc148aed1f43a16be7fc9f0dfb4484181c9f9838efc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=84008d831b9fbcdc0129a5a40174374a4bbc870ae77f48d2cdf2927da8956618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=ee2d5d3f7deaaa73085ed31712b3679ae5f67922bb3035796bb62b29cffa4a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=2023d67a71633ccf0dda77c7080edd23ce4f2a1f02b2ffb9704a34189c29c296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=1b928e2dad3b28b51d6971b90dff8cf0891389070d65039102b58a53ea387adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=26902e28db998791d3e0a3c3067715adc56356543d67e9b48c27d1e715e26d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=3ba6d52b1b792f8e64627b7ca376d294eeb29cf3b10acc329a0fa97c8f0ec6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6JPOJE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCkJeqA9TgyUNLNC2LY0ZhuDoZt8FTQvBewZkvy5nf9tAIhAIoU2dNqx5sXkLykuUal5qSH4oBVboeLyF06ZV%2Bkl2RGKv8DCHcQABoMNjM3NDIzMTgzODA1Igw%2B33vwF0XHz8bz8hQq3AOaKkqeqlu9RTImL1wSsF49PYEMuhuocY%2BhRmFwbH8kn4Vj3Vvsuamx1C8tkVhRWHMWh8cdLzW%2B9UZTo90n0lNOA6geTDHI9u%2BBUGUv5%2BM4OaCtMA4fTeIlN0EROz9iTf3%2FU77ZK6%2FDkcRiBiBqnQ6wf7HFyHZZWXZQCfppQ%2F6ZtrDof0EcUWMX41Z7V%2F2ktlb7ZuPXbVoQeiLGg6vO1iK6HCCAn8nmRa%2FKu5B9aFOQEXG89L3IrfC8kSQmnU5ee7AsjsONFJGP%2FHYCWu7GZgB%2FfBhi81H9d9%2BrybkH0LPuQBZ4DDGy2oF9snwp0EdQmMzKNUOjWEi3S2M95f3UmPFOqiSL92Qd0cO1%2FPtAUp5DzMx%2BNSRFNoPJFz8y1a1FniOIzy%2Fd8I8Dehtpscb%2FPNr93GqWIH6EBWKHblszLy5uVpLoGR4tAHLsrugxnkx4EEGzqHxiot%2FOoEfo42Ey9STOhuO0vFPoMuQRx%2BVsaDphIfObxSAUu5kD0hJrVyiUp7fEVUkpB3UhEMcAdQLybe6u%2Bzclwtk8Abh9QYEQhSUVIJAQMKh3Z4P6KkigRpDsYYQzXGYwez7ZB0ZsHsv8yz7NQXSRk2JRt2%2BanGKrYxNoXRDRETTNOPxT5DKGrDDRmYLFBjqkAcL1nE6ox6L4w9EHg9tiLuoRBxfCHQd7hsizCPg28NSth%2FvYPh7nvAVWZLKdwgTyqWOzuvuEtpYHEBV7j%2FmMwvFWClA5%2F5nCWdhgnFk6iovW1mN7jlTTdfixWat%2B1bz1McqY5t54HHJDr6Y8El4BLzdJU6UdeYKR5Wy3Mg3tITzeIHnHJTjoyFrflKj5IAGjJoBP4FONYAPVSGEkW8msRLbCrdUT&X-Amz-Signature=84008d831b9fbcdc0129a5a40174374a4bbc870ae77f48d2cdf2927da8956618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
