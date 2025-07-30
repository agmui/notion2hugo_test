---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=bf76cee3af11d2f3cea5f8655f9c7dd1b36396b3e83edfcd9904676e16a95ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=c9047d546f61f4b245d4836e27f384d990e8b6ec7e65728f9f420d1614c0bcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=4858a3fd45df1c334fd5fb9624ac4bec328e5af8bd09279be77fb9afb4228f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=ce6b5630b9891481eb5b29eea06eb4b8cd72e85f50c51cff5c0bd60efbabbd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=27263fe8ab27b090dcb3b555cc58ef7b55670a33244c754b866d27eeed92e66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=96c895501f952c29610500d5ed35ade713b3e767f8fed5f796d3f6ebc3323d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=85a71b631af29aee457ff3ae29777ea54f8fdc8ebf9e22bdcb75188d59558102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=9e44f2a3d7af354b93821ac386ba2a3561137207cd06c711422dffa090bc7b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=a685c78f20731a704dd879dcc8de1c310e94a42b53583b7b41742e5dbdc27bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCXAAO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOuzRCBJkFmIsZw6UYxFIT3SF0cdi1hqMEhXcm8aF1SAiBTPSAMGUX1Ub3rQT9T%2BoF7MzNrzh71rF%2FEPLna7ZdPzCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlSoexkUnoCmLi4FKtwD2SMLTfehV12RBi0vuixBv8anF2YBpca3NA8SNB8fVPUifpboG%2B7W64QWAJ%2FGZRSFGVCXVSdvHed26veGfXWLgFuwx%2BaHEfm9v3rKuF5pBrJVWWYXiAVGqg3vHoJajKThivCJeyxhkrGyO%2BldOVgbTsN4Bd3lbn7f1LKnHKw1AQBojhrx9nzxXZydrkb43u4R8OdXuoGe%2FLjeeH%2BeF4NpA%2F00kY9yobh6x0QvI9b%2F2jgNcPN5TSEbEfpqDy9KIRPj9sE5zLCJrx7bBQsZbyCno9JeGCKzpbDrJILNDUGWzJlwUhJQIAK8CQO6UIhSopBMQLroXEMYs1ssllSnVIDWmKU42FJ%2F2v1UgWk4ET1yuG68c7P%2F5mPEP8NKTDkP5doOojD%2B%2BDC6IzQ0fHxFyBxp8Bod%2B9gzCKje%2BQLfon1FEJOUxp6QQc1HKW90aeWzxjo2zUNXsT8uAsvbB67IJ9FET4GDqfnbEV%2FDgqgs4MwSYp3IqBru2CAo6QmF8DwD%2FnB3GFt6Gt6j3Lt7OrVEPeZVdQfv45zS8r3wRJvB9Hi4%2BBQPOKYY88%2FZ0qxm01VTlK5ysmYiv3jg1qshUPbWoaE3Xuals4o9XN9DID65Kom%2BJqOZFMQfS%2FgjZG7IxQEwyLelxAY6pgFB2LpG0ybFT0RiKvgLNlrobtM5VzlykqgeWGSDR39a5ssgpLhNBjQHH5%2BqjwspBqSPiAaH3o89rZvxsplCXBJnskRP7WitmIDjirlYClip%2FvdaicwwpBPaFAiZBthgHewR404oiC8vUBCtkZOcB9x0w30a9Ix9Mr2fbbG2YwgW3X8ObIuZUoKhWO2IgBZNGPMX1sTKx4CJIhzEnstOgMhZij9RGtZg&X-Amz-Signature=5b68d0e3258530f6facac17ac5e143d51473f65e64a606ebfb82bfa0ec3f00e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
