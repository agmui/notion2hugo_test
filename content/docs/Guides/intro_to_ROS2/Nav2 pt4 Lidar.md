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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2XBZXXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfDqp95VrHvRt1wkTloR0EVwJUFLpDbw3OdVXm45DjQAiA%2BZ%2FeYbvYCrAN4NqAqW5tKdOwdS3Fs7Y3SAi2PuofyyyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUANOvjoqMVmvikhLKtwDj1YV9pznpkVVySLsTXuDKxjQdLRpUQz%2BpncT1Ib6MvurYg8f1TJE1khwM4EzPT%2Fxo6YRuKqbfDCjsFQ%2FbPnNERfkDEtlvEzZRDs7h81pvbgG2zRrDT3hX4mLJWaLkzrhcaoKaQBTLZbwiywpsDXQKdVuRw1Z7El7IJKbTqqTuqcJSplw5K8yqf6DOrB93AW7x0k61Nb1chnWWvd%2FaXdZE3zZ4yZLM0LQKI4RU%2B6CFqOVRiGiCOT0qdpmayK%2BAGtbYJMSaIq4R10yBeGIRDyNHz7%2FTng0L1iJS1cWfMxuInEk7juDgR91D%2B2bA1BMt3hVb9r79P73nveylqGJZ4Ir9XE2jZD8DDcNFaT2x0y4tBzkoJ7hug0PP5WkprEOlIwMujpJEXgLzG9ycvKIMac1971ghiSgNNp16F1CqloUv3CHbmST2ZU%2Bbhi9bqeAShaqOUjvcMN3Yn3J1KSyPLiEfGYkSZqY7BWhJwhCYc4kTFfJwvIXuOpZtwgePfM1fEDqGhCoyu%2FuJeZ%2FNVU8Tbp0VO3Egx476fG2RsNNeiDMLzQnZ%2FPln5H99J%2BVbbp59b40VCOAGtLTFPvjE7gdvhvI9T8UJZbNyJSWx%2BYO2%2Fd3xrYmhuwsPPP6E%2BeANnowzPflxAY6pgGC%2FrjxO%2B5PTJ74toiGg1aTXcRoWMUdpu8T7BvqLWHDoE9Nfhse80o%2FiVHcAmAaL3AkFLMdBOTAcC6g2CMmGKQrKgwlFkwMLtT3VsmagrkDoglDSbqE7hpN0JK1UD%2BiBq36NZmmAqD%2BdhksrS6kMZ%2FKIDuexz6anAFO7lXq6HSkzs%2Fc4ePNxFeRABc%2BD8ty6ZPW%2BNovDkgrP4hcnVkqzyQvL2GhiV1x&X-Amz-Signature=bd822378fe57880871f0b6ed2a14d834711ee9768f1e04733a5d24b9138ef247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=3aee3b69e541c2d1dad4d280697f2b3613c63188fcc49c9e2f8baf2ec70a9c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=603e4e3398b4af83e0c2d60e2858cd78a6b25caa1f2a1ab405d65b1d64d9ebed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=599759674d7b8868f7150d08ab781bb03eba51c77fe7056fe80ea830dc7bbbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=f497182cbf6a063a6b794555bd097181251b39a25b3d7fc636a9633a079f7952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=0ee0864513d8604e762662abe69234d25eb5188bc0528875f8fa999886b9c9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=2d290e94d0af398c6161aa6074db4f6c2e81340a007722e329bc61757b749561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=abd746817df8eca6ea2269f8229428fb5a3bc672fe98dea73caee06efcb184c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=00441f883604a9ad94f2cce2ed552af9fb186fed2f72667d5980403584f9eb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=16775d9bdc66c3ccc733ed80c02fe95ef7c5c7a5ffd643c0d6c3727f568f3c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPYTNDU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBczHhEGktRZbggVOSHAzJ6ng7wLxHuWzCaS6Y8hM3%2FXAiAUovqBk97Cjo8JN%2Ba3otT%2FL2LnHlgxoAQkF8GaLhZDwiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgYXhOGHg4dboWA9KtwDdLPpkQx%2BqUP1TcuB9609KwhnqEC3QYXLxXFPYEr207M%2FHXZMJj196tN5kPlmbhwFeMJOMe1z%2BZ1Dy%2Bik1SJQ4hfx51FplMzooMDjR6YMXszfvPkjJr5WbxwPFSW7xBWwGJmJeK4YpO%2BAmcRJs2UyFcZaDJFS3V%2B0F4Dy6mANngTVSY8Q0NKaMVXLxhNeed0EGGVWuVO8qIJM89yhM34sOgVnFyabHhqYCdYYapR%2BMoEChLRUgqURjZbRzvFluXOYDCgqIlOesLve5xafDnaOwAl9CN3t4RHUW%2FloB8k2zttJ25JPFo0m5nMW0SkvwTlZjldojiEu2MyZTTv144keHxeqhcBOLuSmkl6GFNng4Lmba28EMKy90sBWOi20GNW8cro6AHdX4YQ0taNS%2FjQij6P5Owsb178byVeOwp59qYUGqMj8zLrpVfyhoLmtmJEtLXvoGUrUZANedofPNS46ECw7RKFVpqaEQAuV3grB8ASsH6VrpUyOohDeykxS8eShO52FvX8MEtWKeSSR%2FqmTK8lny5FKoV4Rq5L%2BBkjAWKSis%2FdwW9MqoOL9%2B4FN69qj%2Bql8gG2xoSFB%2FS0P0ZfDtxDznCyc1j0kKCTercUeBBikFPsTJi0s0piFU1Uw7%2FflxAY6pgF9a%2F3wjatfVL27VFgK6bA7XOiqz9RtIdUrd0FNHg9C3iRW8hOD7NIe39d6c8rDcYGcirkqAN71Sn5Kghqv%2BQUCiUSPEGUB70PiK37F%2FSkKUBUIQW9gp259LR%2BWrTRubiF7R4tvAaMzGgXTNMvy8ps6kusYrCw8SrvCik1UoTvcneMKNjJThCEqWhdCto8KPLDf7lMFOiqVUy80cJ8YdcSyGRJfQJ9D&X-Amz-Signature=f497182cbf6a063a6b794555bd097181251b39a25b3d7fc636a9633a079f7952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
