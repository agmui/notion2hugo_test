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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWTGCVT5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCd9rfuTycmHXczEgFxLOr8DPmCRQBTLHjuwUjiEMh4GgIhAJT3yhQUDThCZZz3xGAwnwMwaUFK5cLTGdNEkIz5TpeRKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2FaTr0HN4YYF8xpkq3APnbgzzN3JYUnlZYnSGkncMMC1%2FI7ezKzGtPmAUJrssdJWWyvL7sxC3ViPwsD2e3%2FP4cdBSZY7Jrd9P3twyd%2F2UkD4BbsFayp5R26UJYleGmSDTIXbVVPOPjzvjcMp15wWREobxzHkhB8SwBsnN5DE4%2FZ2%2F06g9faXRk3GzmsbGjXYbxMSq4E6aIjFbTcHr4aNctRJpcDYZ9a6mIxzCau4Gx5lF78dqyQb3cNXmHfU53pbHPptqodNvyBxQuJoBq8Zk%2B%2FeFvyl70GRDc74KPYPBXTkZIz%2FZ5TARxnycQdtSPvHbK7eGlXh%2B8FZKHYZfgttCPr3C2zjKAkZomp9mVFKRnRO1NagmhHVRIcq45l3j5%2BOxPuuGycrIfoi9ArCDA5dpqxwgBGEJCFKKr%2BQM83Hp2hG%2FDppaIwCMX9RC20xAd29QVbya5RfwGKR6%2Bm7oz%2B6MNy5YtLVSRkQ9Np6FzOck%2F%2BOZA95UdPtjU1fQakrEBgWpaOzL10oDO%2FwXtCCPogda8FSTjrVvkiEjpxCuWm8UxzuF0pUllVgzSrFEDT78jlDk71UJkTwvHMQ3ePRxo11Cu%2BqVqpxfhA0E4vBbKaODndxI32s%2FJclDaWeo0uv6wUaIP4aQ94Cd3U0s3DDYx9bEBjqkAe8KisGCQ1ulDYii1krnW3eW9fyuFKrZF35HSbkfcwcGQYGclhAvkZYQrMjN%2FtUhCjuzOEtXtabS12EeGpYeckYIyXBTbx5QjI1qVRxzWCJDBOiJ7Ou02eQNLa48qJUtHkqpQNQ7AaZOV9SBCboz%2FV2K8W3QSMlUNaqZTt6%2FYr6NEnWAdgBtkvV85UqC7RVxzSac6m2MxUPvuGMFs3qXL2HMApRb&X-Amz-Signature=f5032bf87103048650416e2bb81d97d8a1147f2bee27b284604a0bbbcdf75bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=65a255e194b942c8c03e9fd3c58fd432f992cc5ba67212033aabdae4ba3273dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=0ce48e027eaecbf502ed759fa9ea571b50ce9e3241b86b25f4f57d99549e6c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=0e18bd5b8f22f118bff2b7c41b5332bd61e5df2d4b6f6583655ea27994beccb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=8c004563d1c1bcb77017306a07c5d17886c08bdf0e61b4ed16ddf5234209abcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=0ea6ce5fa00755587b7c2dc4b5a3cf3a19e41ca3809ac5d189a805b66379f4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=e4e2b975d259ffab12c1af0ed49e6b854dde3ab94b30bddb0dbe115b36381136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=68dd805e31cf211509294a3114584cb40c5345a39cc90076ac1484201e436129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=a877cd60ab3dd41bffe7665879726f804e1c9171594b8a54a63fe796d6bc5cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=1128277ab42b98b0e2bd7e3f63b1c70c2755b382e8a9ba85ffab300898e46942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45SGYX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAYfG4ou3pNoMP5d6t7MeF3HbBLfWkt2izf324YLJtb9AiAaYZyRIW%2Bgx53S6DqSUnCTldGqAYQd83%2BGoWUI%2B0eZXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5ogfigADUV0qRcUKtwDPRU4R0vk3UOJRCN1NIytC6GCpJ2xdS1mgf0kucQf6ps%2FIvOBg8lPrrrgX3iYNy1c6eQCOoDQZ6Sxh2bRJKJVSt%2BbJRhYADAqh3XtECV2oxqd4XSIfStxEON1C29PkCYCVUKeqf1aajvmjMQ9qOcHGvKCqVbIdSF0CNdvio6CEk9PbU5LIsRHn0e26fW%2BdKvIIXYe0mfCveAGr4zjCJLq8coMFNqyy0%2FZIO0OQTJ37JVrm%2FpreeYD27X59cx3hwrAzGlF0Ispg4gBPdfDdqqFoc5RxMn9RKPF12818IRcHMJvyln%2ByhriKDzbcZVY%2Br1f6UzqyxSHGG2SgrrBmWtjFd0GXwaCQZt3StrpZ7hjcanQJ9i7J05wWlcvpa71mXAptrOdyVwJvslQtvRcQ%2FzB3tfkJ%2Fi1jHkq4soWNwABNm1ORUFK5Uqj124HJgJ5DTrEqXuDfu%2B2U8eDMXwKxXiga%2BMDSYPBaSZlqn4VhJSV7MXul4mwBYmiYaWHgzgA6YW3ihkQdN%2Bd7FgguEMa75B85AQcZZutjCSCaVpeO%2B460%2FOVETIPzaWl%2Fl5njQ2DonBhW0z82zDGf7i29LgDbomlToSIWX7V47fsiO9eqwMKY8vP7tYOVOJLLAJb4VswxMfWxAY6pgGq1Q%2FFbHWtXxmZ%2BRjzmJR62%2BSjge39WW6kPDGUCgCBfR9cPn7xh9mTtghvvpNjJI7Kv4EY5BAsfUqs3H%2FRksRGtGQgJVNxBu2Tx8aVO9y6PrLBBUZQFWs0tSeHrkNPcnT8s%2BqDQQdwv4KCIPpv3zOXec%2BgFrhYpd06Iv%2FPpmjLAjXdAAm08sN8G3dJO%2FhFKe32IQ27d9MCPXR4GzzRbr0tIoxXW%2Buh&X-Amz-Signature=8c004563d1c1bcb77017306a07c5d17886c08bdf0e61b4ed16ddf5234209abcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
