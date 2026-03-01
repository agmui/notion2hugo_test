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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2372NQ4%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCcdHMd%2BcDgFfvTAXc4mk5leNGVFF8RjHLF6b698UBnAIhAMCQQQC1gqy3CK72%2BRP%2FhNjdRiPiSCJ3BA%2BClvlscdysKv8DCGMQABoMNjM3NDIzMTgzODA1IgxjLUlP%2FQ0xy%2B%2FSHj0q3AOboJVVOzNKirrDlIuD8bHtfVC7p5xaId5HD7RF0%2BLmYC41jIHibQLTN4uFwb7JVGgM5k%2FV%2BLbT8We6yHtUHH%2BXmZA6j8rREid1bxPJ45Mn7YTXzgOU%2Ba%2BiGTdSjHgBDHmpgsxPB1eMykncT6NVE8kvJkf8szfhmXDVs436SVGPGjESSGdI7LDFmDI55JlCDeN5JTGlyu67yw%2FTb9mgotKaMKXqYedEAOZFir5Prfw6o6Arseqz%2BNMRj9PckuMkjoS7VPvcs6oyxgoOGCF1NZ%2FiqFcKnsNz%2B38X4c59fn2gE0L8d%2BVVYcx6HYH40Jr%2FRjMZDOA8Y1ViheDJ2X5AximcQpjLcOnwFRIsOjCoWr7kqMAgMkCVbIMLNQPVLqauSSA1%2FFKhycncMSN84zhjF6ElaCfhApSeNnw5LIPaSMqS52nCNWKtUpG6O3B5whehMSmzLdVTuqFQ8mzpIoRcZSRH2ApVuoOLrJStSeKzftj8op1TC8At7h3ApLZftRO1AQitDK57%2F2FL7ndNL95xRhsVJGmX8s5QCcPW%2BezUt%2BER1OVwWjL9Kuy4%2FdVH5faRXb4XnYjTITKpJNHyxdHMjQpOSUpMYg%2FAJv%2B%2BpFdDh9cP7DZMMABeKyQOk2e%2FeTCOro7NBjqkAVMc2%2BXvV%2BCnUE53RLO0wO5zylQqE06FZVZf6RpsgsowU1u61If%2FyV629XISLuAN%2Fj2XgrE0NjANdRaXbw621EXPaLLa8iG0jm15XtA5%2B%2BwbQvp%2FqrED8a3jJkgYUUl7OotmbF0Hb24U%2FwRpKzjbeXN5EnUY0IdvHxd2hiYQ%2B2rw5Hu69mGkaTn%2BI6fR%2Fz27j5k%2Fs6gIdhc%2Bgc%2FXwXN0agjrdG38&X-Amz-Signature=aac31ed6f87a70d8a28181263aba0f4f4bc6629fa5e9581c5a8e68d0858869cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=8bd233dea9e2792b87d5f284a92460cdfb262373d5de1acf94c77b6e9970c044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=1fa0bdff7b89ff38b777429d7806564b0410282a0a4aee7a3214dc3768fca501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=d13c50481fba2d027b71e46b0ea53fca2b0980cf4e240a65056c44bda7096f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=681b969005cd8b1b1b2f8e3b759c8df3b46290ef14167f74104cec2debbf9c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=4f037c6ec06d5d974411ecaa9be783efa6c046fa14bb3e054ecefba03cf0a99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=6e3cfd5ca86c58e3d707489c0e8ad76e9665103256e7b063346aa73023a40d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=fa8225adb409d61f16e46f3e94affda976cbc15c716ab722afe384148aa26881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=6693fdb255dc1dc3b5ecc4e96fd1230d958e17491832b6c0927d671e442d25ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=099575be97c1cfe57ce624c993f6d2e55c8fb34dd3dbf2fce4a542c9d4c1dcb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6YTZ62%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcCOV45l8Z3Nr%2Fg42BgwlLTq3RMUEz9YyRB0Qx7lUqZgIgKwy0OfN%2BKwYCc9AuyulemjuulJ1mWPqynSVa6zkMFhQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRnRwSmUf6I9%2BIfQSrcAxEKTU1KF3w6zL%2BtzwfX4gmaugulUFP%2Fxu1u2AJbrFLv5JliyAmRDQvl0gxQdfQ4iF680G83Em0A2c15f58d7j7IGN%2FpC8RVfmvqbRqtj6xHu%2B%2FmjhGJd%2FbXKBMYhQI4IbJ8hipqY%2BSLLovAVuO3C1Rh7aFvUZaoHmuQxeAj2eFIskrRswqqa%2FBH5JMDWbSNgerlystWi3PxfFf9J2L%2FxtbF623qoOz4CbGznnGEIVPGl0eLCcwD0IBcrkCNB1umceuN1npTKgn5Qwvk6JZrLHEyG3cOdqtOGbV%2BKH86vdIcudyjJfS7Uu1aHWSGKTvsBU5yPQ6rEbPJSjim33zDpUQCWGG5%2BsWB%2FgpSorlmPEJkuaZSPol1IAxRTke4X9IXFh8wI5DFRYOYNju7m7%2BmAtrKi84VhyonTAv41OJtLxJsMl0f9z1gZE63Fglvpzo8zQoVvfrWQAQWr6TSDkMBAdySShSIjcTA7qbZrJsziLK49VIKIRJCUkS572h%2B%2FuEHN7uS5r%2FrJ6BGf0Jc7yCrQ0wPbbuiXmK4sTzOWjO1lQBfEH7oePvAO70HNOyrLEHo6OccUSEOWQVbdaRYLD%2FBm7Gu4eDMpdC2HQ9LcdmtT6YgslHkwsGI6yx%2BZYRpMJmujs0GOqUBJbjFGKcf8JFupICZZsfb7zHxIR3lmbwL353pho567k3%2FTa3UINFowrxM9zAMYEvaMv963%2F6A%2ByKQcvht0NuyewZOEEYFeuMzhqrWLpfnkE8jTTG2QbzpVe1CT6Kr7RWIKokRDrev%2F0N7sFyRP5tZqoazA%2F%2FalHVbFZ6UI6mVZZEbkNuFF%2B1oJjB6mGJjpN2FxhxHn7K9in3SYvY2MbCy0u%2FcaO8y&X-Amz-Signature=3a8d35fc927991384fb94cd24aa884197c97d6721114ab966e466390881cd1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
