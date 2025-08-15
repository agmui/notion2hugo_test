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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WM3GPG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCbdbABmLKrv%2F%2BUe41uulO7LWL9RI4mCDY7vXeHnYJ%2BLgIhALIlgQvR7jFmSjGSUiu2keFpDE1RymTWaTfiBmTtfBVeKv8DCGEQABoMNjM3NDIzMTgzODA1Igxq8sAuVTSFS06mQ7Aq3AM7DRw%2FIo1PyWnhhzkgTdvLyXb7aUg6Of8Al7eKUDhWzDQPWUp6mO17eEl3%2FN2VBtEU%2BhxlKa%2BdcY9xStinfcrZOwJR1tSHmq7eVOfXGrj%2Fes1ALtAOeI%2BucfL9PSCEbHrCUVI%2BIgPpNT81AHAFFaObhjr%2FvI0aIJPEeZzmwcWAIXXeA4F%2Fk%2F24uZEMtJbO6HBThlUuOHKE5UnvSjP4lPsHm%2BKCVhh3UacRqAMdYvIT1WgfgBVeMKKBYSqeron7oMXUWT3F9oYG7Sf2vHqsFA6h0MysmErHC51ecLXP%2ByRz%2BYg2bL7WWaNZmpdtN8xtC3uWr4NPrsEvcCm8LNdj48dSl4m2zCIuWGgB73WS1IaX6K4wFh2V8KeJsQ%2Fu2ry683UFwZkPdbCA%2Fv0Qve8Oy%2Flkzj%2BkPoI9wG3jwwFakkWcVAaOoejiOMlZPYrj46%2FzGl0h%2BWusNlbXa5OJepRz%2B%2FGP7JXt82hJhDY4nV0skLvFA%2BUzzKO%2B0RkiTkXtlz3O4l6CO7hT4mYAbXrVDT42R4489m%2FKwj3%2Fozz8YEMPjsnU5kxCIh4uPxLA3P0I1hrdBs6Hf0R03elJaunPWkGrmK9yZ%2BFesoIMZ2YVW7jiZuFV6VfZ82DonG35q2Y4vzDntf3EBjqkAY8PDX7xo2eweWxm8%2FRHG3S%2FCw5ks4zyoI5CW8rpk89vl0hWPN9V%2Bt8KM6Ha5JLEVP45fkUBp%2BYG6BXZmTI%2BKMg4A109bEmkz22YxcL8y2MTT86oNm4diQ3CrxiW0zK1ip2%2BZPGye5OKp%2BUcpZx1uRNxUEtmPjMlm%2FjjRQ43XYmNYdVrnJUgsHNzh0zDps797ATH31VydRjCNvKhoU3At0I5Wvtp&X-Amz-Signature=85c3ba301ce7fa007c71da1f836266de70e4e0e6171fbebf9ef8ed80156ae00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=541649bcf63450ecb85f54f28dba3ed617d50c2a5ff182ab31b95f3fd0968037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=028f98dfda3c6ae0b4b63d69960fded693d8311c02452aed1693b474b368022d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=5e43fdcde70511c80fa7b6ba8d8cc1d77cf4e4d183c01e917b49582760f9976c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=512e13b284d69ccf45ba2d59a1017ff1d643cec64611dfa885a48654ce547955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=3dd094c752ec1a834b8efa89617b938e33c8fb08ae8227f45556d73860e90923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=89376267ed8e0ba72d21de0f6e6c9d4681bd160d25536b2b8a9daa90fdd7ffaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=ebcabdd1582a5bd32137d8cafb8bd79c2cfa7340ce66d751b0b180b02bd19223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=6d1df29633594972a9c87858dd67aac6b80d02e12b08f9bc33280ad69fc2924a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=d5826af3e47531a08cf6c0f3e162062466c4c8403a965c037e78055b794c8bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=5ff21c87fa34190be8127dceb2fbf2d61da8152b46a078b23f0d10539d253324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
