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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENGVZFH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIGqQNnHoHHlR0lsAIZcTSAj6DJko34e0YyFixBQL71fBAiBstvYfCfWqtrlMLuVjZT%2B3rqNsGCMEK3nWbVkcCl9sNCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLYKu%2Bi%2Bkzn8sxQ8lKtwDie5%2FAmhayPHgBCiDP2LEMC82IXWMi69cllEnEdu3cJuN%2Fv97dYibssnwz5t%2BpNJD5bKHre%2FhykfUfQ%2FYsENeDOybV%2BzOqC%2FVNGHrSyR2z7aIgEjH06mFvR6tf7Nk902sGP7t%2B027DFVVYf%2BQAf3CQkM5Ysd3iCbcUd%2BlfBbrRszxfRVp2w%2F%2BsigJfZX9QIJj2i02qBBrwtJ4HL2pZVTdAEomZ5KGBbDJHQRY3ZjfYcYBnWcX2UmduXNgJfuJOtOcN9VvU2noMdPuSEifRuRoiIWHa31GSt6100NfCvN%2BPuXisPICkPisEh%2F3Zd7Knkn1dPrFDnBMb2IAQvppVA03pNk7a3JF46ngTYIMt6fh5umj%2BYpo2jCZ8xFcwGuUrfYllcJwSIaT%2B0YFENyzLbhlXpMpypAROw0%2FGfYtkWXkQpRAAyBy%2FQVm2Pjtf7TtGlTTSjfGihyXNFe6kcrtaiRfFCFcZqASez%2F0a2biDBLM2NPjqvtSzjxkP5z%2FmZGwgWSlyi5ETxtRrj%2FXK8dAz4ZpK0c%2BAwtMYVls2NyGRLISOhz08rstIIaCMU4SNg3j4eb8ccII9QQlByw98%2FopNNLA%2Bv3kqy5Fhr%2FRqmLu7hgQkijKQN3adBkXHPjH1Swwj9XSxAY6pgHlbafp%2BRuUgFfizTjM7LMMGn1%2BJS6DGw9V9GcQUdl2e3lM25MtMGVWK4mRmj4zW3b5P6%2FgLbWbGoFhARzuM%2Bl7l%2BDFGJnMDcQJHn1muk80LlZOWxcbArQ6wsNYaTsig74NCWB2uQtWjXGRbiGrDNJ7vG6f%2F%2Bl90EOWsKyJ%2BPDL3j3u7YfY6I7o1LTN5x9xTKf9Br%2BxPPPVrSGLvqrl6Gy38ZtsrOgd&X-Amz-Signature=339affd4d371cfa69f5f6763e8b4d9d666f6a01f96b48c22a0ac0e1666e84198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=b8e735e03db7995ac7662e2690003ac870d115bb79488870f35fb047ba666e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=1914aaa9f78ef20509170299e796f322ee86b370883f6201303646e2490658ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=8df74f72d4832b31a038a71d3f06db3e5f39a4e4e9229331a5de12bb2eac8e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=ae004411dc3812d0a0522e628717f6c3244bc5f0a3ca2c20e88fb934ba824ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=4bd048944fd38e24b2b00d9e244b7e6a6e9e42bb8f89db44d73204bc6b07e6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=0e22b13397dd6ac1b902d5d3702f93e9d3634040c879869ff7e58a77020d9537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=b478e3ac188d331bf9208e0097bc9cd9c416a73cf98c0378f78462b346d62c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=85b2efa38c563015f8e86640d57bbe405d9182c1ecee5271ab3befdf7b4b7a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=05304b93ab8802b35657557fc40d81397c0a4ea7fcb327081995cf7e88906194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYHQ4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBvR8mUSdT9sFntUdfHPEj1Ymc91vH9DeifgJ2TYqscqAiEAirSl6t5WX50O1bk66qXSCxengWFG%2FE4bjC5MwHjBfecqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeGulDWZW6oXJVCjyrcAwsjMwgfdZ4aNl4CRRXKBrB2vafM7ABmZxXAeRRB0mrujPjTxnZd%2Fs4OKV4JfcFLW3vUXvQMdk6DpWNqU1dg20thcK5ELuVF87U7X%2BWwV4MU5qAXA92Ncb7dsdQqK3RCpfkfEAt6NBsuIuelW1%2BBsJq%2F0CB7rFZy0VLiu1opm25fyjcjrTjsiDoQsivVmC4A9RGS6i%2FJLaGIx8Fvn73NS5wYsVQCWJRUFR4rFtmOX5QCYIrflc3NUjG571fnge2DFn3j04SHdkVXjbzQB%2FryTZZqH9aY5BLtA%2FkpoFCtv6yg6o7Xm3dy3W6KM2bqeKipclNlSGZTLrcVErbN9gEOvdX6pVQWv6ht3UXPTVj3Tgvh06hieIRQ2G%2BMuwzNR7Qa3bMivSjKtaQFVDvcZmdbNwmGzJWyDREaln4piVJ3pB97MjOkK8dRfP1XIAnRvtMT5C%2FZxfO%2FBakZnHZsW%2FtOszWVmvFwoMmPaxC8l12YnsOTKS%2FAw1wmv%2FO3DNAIrc5%2FQ2%2FIGK8jIjaKp%2BSLA0jXMMJ%2F8wQp%2BZUabtngCG6Q9hi2ZGQhsJ2tnhXVuv077oiTp92nJPo4i7CTKs4V6H1Dh6RmzGOrvJKY936cZHcKO3rRjQu3jmSJClW%2F9rf%2FMK%2FU0sQGOqUBw23Nxv8D7HLpJvRQewjXW0wSXiQr4cCV6r0g1TaJFSIESn0swH%2BAsWPx3PrxTYbWFTJj%2BdK8Qabiqu4JE250v83QpM7UiyawOSOBvMs6ZnJBbURWaY0eERj1ZSDcCA99g28yM%2FBBwGC2irnYb%2Blu26G67Q8MVI%2BD47SgGdQKwvweh%2B0HojoLvPJIklePkila1z%2BxcGV4dWm3WRD4YUoAY7lNgiQf&X-Amz-Signature=ae004411dc3812d0a0522e628717f6c3244bc5f0a3ca2c20e88fb934ba824ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
