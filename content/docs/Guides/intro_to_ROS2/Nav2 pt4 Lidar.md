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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXBY3NM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8wn1S%2FYsCkz5uxy7MeybiY%2FDGmCnWaR0qq%2F2ENzWg6AIgGTpWMBxUbbg1q%2Bs30p%2Bb0j2uInP1mXt6SNX4EBUJjkUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRXd2CHg9PQ47jpiyrcA5ejLoxBXkP2%2Bz0by%2BvmPRfTmcI9Lw44ZKXV2RkvjCB4V%2BrFASq%2FaG0j7uVLKKsgtDD7uVA%2BvzCYVwdBdJfRVjWjo%2BMsvWOgrgc2SUTuQnp0vZM9LpUn9mvpZ1lKY3RK%2B3CzCuHtKGPR%2FBViHisQgKTzJEmSBioENJ5lYmJWyxE88u9URPRPBPI0sO49h%2Fe%2Bnov9XIpusZWxvbZuOQ1XwsDubeue0vQ0JbuaO0RbFpWZjMIPncsNAxUAdBrbw8Ywntxjt%2F4OTAMJmz4KIHrWeKiOPq%2Bdj4RP7xCxnURRm6YDhYW%2FPXd3oFzjpr3mJLbaVY4wYRKoXycVX%2ByL0NsJPq1pUxJntT26b2tYMv20xw7puvZSy7vpDtJ%2B%2F63BsfI%2FBzZABNvPBgloWNDQHmIWVgWPyL%2F6fkZEokstBNV9kMw%2BOI8rZgbWMGGnVggujwQTsW5YSgz4sBXhcuhyNPmSafd3qYhGM8vEEJPkvETIP%2BKrfyG%2FxgwPZ6DQDztqeIks%2B0%2FdUMYYmUBhfDP8BTu7nbChgyrxWLS6ldQRzgz19a5E7UtClvqYwZYlQDXifcn60vhzACv68Wo%2FgxCd7KWUnDRdahmN85Oi0OV3%2Bi%2BGKWFyi8QHgzg3gR6r7GyuMMHR4MQGOqUBq4UYsoW8KDrCIGyBhUqrnniuVisQHE1GduZLfleKOA1SEGwVkv5aquRbgAH1KI1bz4rmOqv5n5NQwcwLV%2FIrv2uUYO5VQGbeVfBmCC8upFw%2F351MWCWvfP38yPAydbKLPd6GHAD1PT17jjrWuX5TDwesEP%2FLnZIlNLkTS2WhmC6kxqfZcOeRzH03zswen7rVGk6p8vWwGhSWTxPxgseiCZjfZrw%2F&X-Amz-Signature=2c2191069485a7414ca4c73e6cda576e06c64b6d5e90e7934896c5184e7c1feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=7b268bd4c307e4937d1f9662ce3b2d1a6d3a515fb1d0dd7cce2e4e8cf518aeca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=bf77916153ef02dc0454ec02f11df827c38c0765f695fd85165f528ad32d8ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=aa07008b502d47a6c24fb9c73805c3dd4d06afe68731eeae39542369cea2f6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=e48ffd5945dcd9e4d7ec35acbb4fed21970846c60f5bc4d075a0a7c5c21ded47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=82b7038e5913e5295bf7efb6c3d15aedf80efaf0bf8a62bdde0ed78e0c728eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=a82d62819a2ce4deb50734f175cededfc17d40c5281e19665086879051140549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=15d12c03541945dbdd7fcaac558b0e0aef4d33b7c6e7308b0a0900b7e45ec63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=3735df5ec6526465b8589eff548dbd39eeb4b3bfa06f3583621b2be6f459005e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=1fbab4a649b9e5478654c038bba7d84706c4d10ed3d8635981ca50acf19799ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPCCWHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKpZ%2BYPSTAYKzBnNQ8%2BV19qJQ2poSoF3fCc17Sqg1PbgIgORo4h4mW5CYEB1e2RUeFAGSMw4RfuGZlEL7w1KPoA0wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B0Q0uafMLcoKk9UircAxVcdD2qO2nzpZx%2B38j1lUultMC9TW2bGJEvNVigV9aP%2FjcOTqSSgl%2B9vq8S2Wyfx3qu2OFdts4jjsmVDBJVfzvm5O6%2BNAYovUJERiQmL2Mvv2SzpRrc%2BndC3OHXU2c2CeljuwnuGY%2BqZP16NCeBJzAyTXbXBMpM9SqABthBSjhDzl09q0m59naFwU6LjCNSGPVPjea7HpoYmX6wRvHpZZrr%2FV49OstBtSw7HJpcTzGAvBpJ7IwrBcZK%2Bi9nTjNKGgoPlaMh7N9%2FmVf8rYe0OggekcJztLlSUr5xIBqaOKuxiID37%2BiGW2C06JNCR%2F18An9R5OlhOHGSADW4wR9ZyI2Qp%2BhJgOVG5o4vYhEMJUIPGMUEEoiCjWhNVSLiLmIUbqtTvf2AlsMa2uUNyerBgeysIU3LwsCH8ZnAPBTomzUPJ%2FDzj1XUg1bunfnhdeICviGyvVXPfkCi8vDCsFrD%2FLuYWoCLNEEvbbMFm8XFr5Qya%2F6Tg%2Fh6J175HF9dGqofoXYy58bcp1fonLESCLM6g3DA3hVvZu53Ihee7jbc1NUb0jXlxcsjqj2Fd99aB%2FNgTBNjartiGomblaMzrQ8F5PbvFnj33C318Hh5l7IhMBj%2Bf2Mg90DNthX2RmIUMPjQ4MQGOqUBt47EwmiJBuf499lE9CZfDHew54anSaqw1hyrmhAv08ickNL86CRnbratT%2FXK2Iv9%2FY%2F9o5%2BszbQA2kH0j5gMz%2Fe%2BIVNLdCNg%2BQzvfet31IN%2BIFVQsczZSI6idIxRWv1dhBpQ41%2BtAdktuV6lP4a9hHmc0rYSw38XnU5qKz4uJILLd%2BxncL0rds9aj0XTffmV4yK0%2FHVbthzxy2NAfqBN7%2F40HjNc&X-Amz-Signature=e48ffd5945dcd9e4d7ec35acbb4fed21970846c60f5bc4d075a0a7c5c21ded47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
