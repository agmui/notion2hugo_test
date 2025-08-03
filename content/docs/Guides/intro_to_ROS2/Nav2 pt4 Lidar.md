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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634M4LFNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHd%2FZyBppKWx%2BBQJoe2fX2HwxEUe6OITWRryiwmEgGQ%2BAiEAs%2Bi3PrgR%2FzZ1j6OzW%2FqtzgZiWbiFSaXP5zq%2BvLjkwjcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOJgz3rfnRqa%2BDZZvircA1VsZxk873Xjd82%2F%2Bwl9ePqniOfAj%2FziAlUWr%2FQl23NdHwjhTCHF9fj3lcq3WeiGH7O%2FI4KnCtlLXSCaJ1raS2Mykj2W71PiW6dby9sGYUFsue%2FlgysY8V7XEdVR6VK4W5Ca3xAgjucTwTL25wCwx5PTgv9loUVCz6xUy4stgImW%2FAaoh7W%2FIhU%2F33Uznz478ndhDqiBxQXeOnisrcX4DYCXtaFNwJhwiOy%2BJTgdx1o%2BJkB%2F%2FLa50DqgkO2UH7Q01SsfgFBTpvlr5TMp%2F9ooiD%2FVdiFObzyRLY%2FaQftKgCNz%2FKy7KUyCpRHau9w4s1VvLEcyo%2FTay7H07GF46lCjvhHh8nBwjeO5GPOK2fkHxKkLQEsNLX9mgbxFq7cwbVDbh29n44UticUbd6PKioBOJPbx2tSJLdKkbhIOV3RwwNotsUQJ1IsY88Pg9eKmUlZoxdcpLT6eTseyRbi2udjZtPXKsfmbER93%2FdXb8Y2u2KfYvY5CWsmZAKQOD2c2ygvkjnJy%2BDpMUtNbcNRcKQf9GlItFMlE%2BEJ267tSjU5D6X0%2F3hKPbo%2B9kLh7gJd2w4eIuhcblFVRzANCyNFf5jBQS6M11JKK2qXF26xjRDbfbDR4GsS2YGsuZgLr28wtMPG4vMQGOqUBVb6MwUsTl%2F8bWCuHdo1JIZ93ixKV%2FxT8qEw%2F7jkQGovh8nj4iuG2ym41WEbq4KrronJejXTW5ZC6Ez6kvmh0i4OCQiMQq%2BVLC3kS1s82RuwrE5FC2AubfwsZ0%2FixxT8g6jzGWRtG1bSSnTB3kTC4DAeTD2ZEFhhn%2FC8ibVK3EodsJ0vG8i1K7YmY1uCEdu7WkCuV3tdJx%2Fdeb9f3thhj%2B1X5ZhvS&X-Amz-Signature=75e06f758faea583d00b826b76f885c4418fe670addbbdc39dd3df11edc95929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=e0224d22ff378dab5195e4d73b53c49562d259bead78cffa9ad30bb45b12decb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=56b783afb41f6ecb69dbab0c3025a31c87c095a09d3fccfadff5037cd80a2144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=5693e3cbf2d4c246ac929493ea07e4fb351781f96553584c3b460251a9579bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=9d242e04404dbccc9e7feca087b5523580c4d8ad7e6c485645f5dc66b16ffabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=45beac961d1007a1feba664f41fcafe68486e396fbca8cc4ffdfbdf67adc5631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=873a9ff6798feb305227ec250fcb1dcdad9ea1598d4f54441ffeae7722d94461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=a33f39bb7f653d1c5ba4cacd2c1d4294e4a684e29d98b27e9b9b9a1ba3fea2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=c37445427325ca3163e412ca0c3f23107ea2b27a01990c9ad094c7d809d218a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=75f9cb35da8b249cea025860b6ac21a6442a6e2f2d02b5ad783aed2189526b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRFXMNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Aql2JY1lEQjucQ%2FGFvcejn8BUIDNh%2Bi66vFOh9XaPwIhAJQy0iGAuscrD1DAMxUC0NopakE2Ee5Si%2B6z6PodkMZ9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxRE87oyWr5xK%2BMOx0q3AO7dNZsuG2OyJmS3QMn0ghOAdiX1QOo7RlBQ1bDLKVxVHJ%2Fc6V45S7gSOW1ANrMCsUmF%2BvHZQqxhlq9x9iY%2BmCz0WYaY5viYzgcUl4KAau0gOd7a3AHV0Tq5XEnfUapU5%2BgfI4TnZ3RuQ8Qt%2F7cGH1tKeelzgbt5zjLUi3GULMEC2ZxDnuDBY1o47IwrvytlniKgIfbj9bzpc7ilIOqYKfLJsmdkv%2FwxcUvGb%2BQUM2Ak%2Bw99xiZXCh63lAyVvg4OzaUJtqhp3Eg3yOvfe%2B0ok8Vjag9aQ9Io8FUP2dM%2FR%2FO1F3nZAZRFkk3OeGHV2hQTyCY25BxIEjHwRhXnIz8Z0GprN459fx1O79AdGrFky55zdukXosQuK%2BOvELPSriq%2FzlsCKhpwVmJHQHskS%2BLyrwL%2ByOKOF4hO8Wj12pHTnrjrvkFKh3pAqSF0IaFbRMTHuZ6kUJbkfKOoFCfDq%2FPrBYwiCyVhRa7euUY%2BRlHxazU7mE2qABQNQpU2QSZoCDbxtm%2FHbg9WYL31I4Pj0opfCrJ1DEaFsVvoIKoDwXhG6%2F77%2B%2Fc7ZewQMg8YN5zIMoKgMiNeTc5q5Gpc3YZ%2FkmPXJXquhzzrLNP6%2FEYZYI68ZCbiSOu6qEZ6SDKB1H5zDDfv7zEBjqkAV26VXBRjGwXlAT6Up6f9pa%2FoTgK36fuIjev1I6EvfxxD7KiTwRK8pgmNRxU8O%2BlQO4ShZHqK2Qd3UCtk%2BIHDLJHgeEH65jdQC6oHPaXE36Mu6DZyAISVqzggMqrI05MmbD1nOmqpUdW5C9iY5HCI6JHjsKLpDZdDHiKOKIa2IZDDBP7KUWA%2Bdj6q8vWWfZIChilLqV72Z5l9I1Ry9sjKhvIMbB2&X-Amz-Signature=9d242e04404dbccc9e7feca087b5523580c4d8ad7e6c485645f5dc66b16ffabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
