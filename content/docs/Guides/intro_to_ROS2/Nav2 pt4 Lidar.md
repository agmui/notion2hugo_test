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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYB4DLZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZL1leci17MJ2g9Vo3R984OVLRnX%2BPUI%2BoUn0DGMCA1AiBK1THFIxCgtgjfLEvdQFz2Pd37qd%2B6xYXrWukzIyzMEyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFX6F8umYn3tpNNpfKtwD6oKIzI6SrlducoveW67YOcueIvwVrVKeHE8Xco9EOyTFUbZbl8SgBGBWgqsYUQjcPKlma4RKPu4vm%2BS472puhnHjciectySwrbQ%2FlbXZylKHs8NxO2s0zi9%2BRgdEIC1%2FX%2FjjIo11D1Rp1p60ku0woZuciDPrUl%2FNwQ24emfbq%2FkH4L2ShFB4H9vwGvuyco3HpDHapPzD8emeIJhsd%2FfcdkA8e1dGNrR0GhAi3AxPWqdxQbaVsYNolVbRvx9tg%2BSVQCk5HX1IB%2FAEnpeFZBHa0biKmQSZ2jkE%2FFimslujg2eM9ivlC2uAq6Iw9D6ZSPZtZQHkZ9Dkv%2BEnmzuQj1OuX2Pf9EI9dEJOux6kvxAZFqPCPFO1Nn5mpE3h9BHWT1fgkXIqfsIbzocwsghPAuddJs4n0JW2J5O5Tu%2F8m8RWF1JjX7%2Fh49XpeLK14wsMjpd4VE7%2FgJN11zfAUtI9h5nYaBmCDeovp%2Bm1wZ%2BzFkskQwSlrIj7gIZJWURB5Z44r%2FwNzQjwYOwLnVQSOEgZhG3T5SKJqqfyFeTzcTSG4VYcxDyeYcaEubzAInGVCV3W0E1TYnpkqwDEM7%2B1dj6A%2FBtd1JkUVv2vUEfnr4PilscGaAUel%2BbPXX5Vj3jE6Qowu%2FLnxAY6pgGNiZrMdxxggEtbdopjR4B1hedfDXbsgyxoVwEo3qCjYazISu1jVQD5HMp79C5%2BPZhL3oFNpcjYZnrtd1eloHcMAQ7q8u1qCJBBU9mVhlVRsifi8TCEJ73%2Bfvbry87wXOgJ%2FhtfW7Derz5BdipgabdmL19ZmWM3xoTrs1NnSez5FnOqPuVynI3eESo2z7NBMjCcGqDVPlvpso%2FVX1kyVmXP9TcwCOPZ&X-Amz-Signature=58c8282843cac855d7c7a925cbe4b676337fb49f54e25ac70bc9847950503c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=44a65d2e9e946f671c76b066e849ef2d4e455c73ee08106d220c6bee7f668d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=ba94f478de027b5dc03288c767f38b1249b634cc9818cb6ba7bb0227cbb22aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=31a6f68761f87a7fd4425a362ef4594c1db218d3a382f9269b528f595c303a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=cde68b36a138bf5544db0eeebdc4e126ba6c8bceb8b725898dd0532a1f3d8b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=0b63e91855f1bd514a52b21be24d1d8c5afdae40250afdc1fbbbfbe5bb0e5ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=e5d1d87b66b265582ef9a2cad3d14946a547d8d5847ecb9034c0902d64b52651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=1e5f49181d9354f0b79db666f0b16961c015600106c4541bec596f765ab86486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=6296f6b4e17eb8f7babcfef86432daf67502f79063bfd8e87e73309ffff506b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=14418a5dcc7ae396fda6d97d75726098708a133a93c2b4789436d90d6613e5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6YEH46%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIiUvWCRXIAnS567iI5J%2Fb5MHKTCdwkBhtLhXqkk%2FjNAIgZDfpQCGC2C%2F63wabQM%2Fg7sJabxhEDiHsZIOYtyW5bH0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITshrEdPp18SL3C8CrcA%2Fpf0h9rF%2BgYJs4N60HzduiKq96OIUAs0O8WDWlFXHGH9RMGAG60mAO8O9AeI1UnCNO%2FvNzi0woEdn%2Fwq%2BxzK4OIxppIBAaz46TPAqSgd5cBAnlrSxwV1uL6UX%2FItv1UbL8Sz6V0EpeVRm4%2BwlW4B5mWrPehNUmK5QETbUF9NL%2Bdw04rxL4aJvRuEYSyxbBvx%2FMqmrUG1tDPbwTYolMDRozToq0Vh2kAflWXf8241g46YqFHj5dQsZk9YuazpFjoISDChNQyAHjAQHU9GVP%2FxF2vA%2BnKLSI%2F9Puaj5bu5Qzj2SeuItXNkUw%2Bk%2BH5Y%2FGTl%2BHm6%2FrnwGOuYdreMinZxzC3gnUM37KO6ciBKe125g0N7cPTvZc0n9VDDmw19rG%2BbBDlKMhiupYEK%2F3FCf0%2B%2BI5RJEjiqZXrF0ZCl54K0GpndS35wHVqNZEZW9%2BAQwqLoFabgf4EcEOJYtM%2FLPVgncN0YZp5Bxfeq8qzI8M8xI3JIlCFQ4%2B1aib2nMD1CZO8lh8%2FMRVtOOBrJQyFZEVYRFGzCGRIQGOK7xlckDEwyTgTT0nB380abuGoLXtQdoVHnZVaIbODGIrGVFwNXSJTfo1uKVDwpCPfsN%2BahwrpU6wGdtuC5UhC5Bm1UsV%2BMIjy58QGOqUBLkHAtANrDvhZ0x1d5dp8xWN%2BoSnmAIDyNHXF3%2BuWwKNiBIt5akDqxWiZafgIZ0xqqse3Ew5SFU3h3y75O1Op%2BcUWXa0rRbJBl7zM2xlUp5b2tGbEPr%2Bes9Zcpc08lDtxtHuuu56NK34uiC9e8GYH4XeSHWsZosvOnH0%2BQPIpwIFMMWPnXgXtwLYcJSZfMNvI7L30h8JeOiDXydWGvXw6hprLw%2Ffq&X-Amz-Signature=cde68b36a138bf5544db0eeebdc4e126ba6c8bceb8b725898dd0532a1f3d8b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
