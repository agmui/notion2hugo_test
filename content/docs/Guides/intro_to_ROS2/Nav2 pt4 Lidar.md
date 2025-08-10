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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU6YJSE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpTpG3TIhh8YzI%2BGnIEpYpsUAIHmzY2fYkCHKTK3E1mAiATv%2FYpHBrOKIF5WZi30%2FObuboxtxTJerrj91zsSWbijSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOe9k1Q0%2B3aN9p%2B5KtwDyRlPcNVbSLTME85zuu74P2FtmKtwnuOCUmDoCOhohIcV5xsdjsz8l2z8W%2B3eMzM5fiRmClJsq43%2FSXuGQmXnrjBK01JgGpP0P%2BSpniOvagLUhmNRa1hY4urACfmg9EdW8y1D3TwQzAiQySR%2F%2FxyV3D2kSEOSVOgElCprMOYAP6BVybbXu1nfavvT6a6yUjkzxiMAChNDREbdEo1cZhwzGXdOzMhtAMup33B5YLzWiUUNQ1Uq3YByDvqmdp8AIhe%2BMaSD7a%2BN9UGuS047NGsep7bOIBpC7FG21Hn61zaz7XS5wu0Yejtqyw0AkV39FSXP6gwRDh4OCtuZPN%2BiIcJoWTdrouvEAUohlKIhx7pZ4XjaXSv2%2Focy%2B2TI538ULZdnsPAimVttie8nfcogNoYt3D2ksXFp7s7plRaDj5KvNOhh3tCk2EbyZlimW0yJJfurmRApj1f1l6Ml%2B0eNbSWK34%2Byzg6n7mxqxh%2FDpygJ4cXSS5iyagZ8kvKDeqfz2zBNqIWK25QxJd%2Fc%2Frq4j9E%2FZFYxLz4z8%2BM5qjZiXyTE6l9Vio3YaAoT0fsQNHrfUKl2Xizkb%2BLzaZNWoWSU1lCCvo%2BNINPtMpG7UYMp%2FXzle6BL4AKGJ22iu9L%2Fc7kwq%2B%2FhxAY6pgGFUfD1e%2FvxocSi0laI9MH5QkL%2FHcBWMSdgAsrCszv1CI5Bv7%2FNgu3Odl1SBG82cpDLdwpx2jk6wrHJZ30YxtTqWWCb36QejSeHlo7093rxM%2BBg%2BEIfMXbXHpcEQ%2FgxAfwnDfOqZFBfi%2FUAPPCngCqODrp%2BTvUsvZshlEk4yHQDQHR1KDMX4Wu630HcxLroVvGNa%2F9La4Kubw0cQiq8NtutMYtqoV52&X-Amz-Signature=0c69ab56d25a094ebe49cd5df8b3367007692a3293ddfa7ad9da7d21a917748b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=661f90747c970cd0b07cddb70291cd28ec8c4aa20b684226ef9f5025db0539a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=a6c6f7fe112b87754be40e27ec7cee5f224404b8dd1776460739f3335fbda512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=eab91e3287fe5442795d90d81dcbed84e2d4a5517f98bcbbbb876d3df0b8a128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=da0ade7ad0c1e74b2bd03f531e331331b34cc87baf704e46f153338a01571fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=807e37fc7b95bcb059ea07ebd51acf6c144caeabce7bdb5d8874ba72856013b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=44bd20262e913e51ed1f7858624fa5b62667080750411db85fea27d769a83437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=a61caeb0e1f2cb39cfd0ef78eccc6e33a03a976eadb788ae2f30f64a854f9209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=e2d24273a35d6f542fab25770b8b51a4913af1d9683a024039d6cd31d86881b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=15c35d8afbabfc5bb37f9c6da4149ad3bdc24a25b56f2b14aab924e23d2ed083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UM44GAR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HNjZJVYKvC0sNiX5GcwrprJYinLwDqFYOkMJfzwpUQIgKxcq3Et%2BNL8VenHYvVRopf%2BIsSck2PtWDkM31owuJwsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw4stCMfGDtWCUCeSrcAw%2Be8OlVBt3ztNIRXodD6F3jKY5UeGiIMX%2FZyxZ3JCRc081mlSIADVUjBhllRJAFsebR95KYfLGRpekrTjh4VW%2BdL7nLxHZ15fn8z9c8SF4W12%2BcZ3wf42sRwo%2BO5ehkoX2wCx4p2dF1y4t3XT6M8baiyCNy3A38dl0iCtKnw8%2FgRZzSoVcdsfF7cV8eq5JNzLbmZ56BxiIYRPVYwvF%2B5ZbofkduUN6dTgRb1oFG5Jalnqt5F4GJW%2FKWjVvhu%2FmeLU5RKDKm6LA8q3AeV4xV9EkYjOVdXXX7KsUkAdVGC44TBvjG3995GEvLGrUCnHYyMvDJaRWfsRyZldE5JfmbZ9ggXFHJzttbJS05kSP9i7Hzz8PL9jqQcCwU6ScotG7xl%2BeiYJkdh4NYFY51BgmwF0RUQcd4m%2BEXv87sOVvKv6cC5mBRo6gYv0uw%2FEbi6el1VifQKuzvTtfBZWWtbdZ%2Flx5%2BpF4Fwizwig2JUq7L0RIlyk51byrYgJdsM7zGPJvvrj1C5uLDQzIRklbJpc69CJP2RcfeVYX6%2B3NDjbE7D82ljLWNRVhxb6%2FSpjW8iooMv8A0ihlhsvbqNqjPXcDEDkZSjb%2F5coo8RFWtdaNSQwiUbg8uE%2FmL6HTXI%2BEGMN3u4cQGOqUB8w%2BT6hHQqgU3ldXLPbZ78ZAtrhO%2Ff4UlRhL%2FcMLRQnpQ%2BU2Ng32wu8YPUl9El264KJA3ZBQOLZTvXzJrXXlA95ru5SiYkcJFVCEqnfSE2PvTCWQlgJ4zR41CyoQn6HT5Wpp8LxHacE%2Fn0cdR53PXupXAeN3sKenM%2FfjaAgMpopxJqMzSirVxB2StvnE1mj%2FvvHw3T5kpvsFOaRrJE6TEceDy0%2BE9&X-Amz-Signature=da0ade7ad0c1e74b2bd03f531e331331b34cc87baf704e46f153338a01571fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
