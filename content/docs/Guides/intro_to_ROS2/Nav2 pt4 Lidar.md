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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXN2TWA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdyRg8mqCuljOplm1Jq%2B%2Fg3f%2FN%2BgByKsdv%2FcOTLnthgwIhAP2BOcWwKCG%2FwEND3bwtnyvj3%2FggZoDqrd4PAj9ebjxiKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3wAu3cO1CTtGTcUoq3AO4wVAgn7o5c5qSG%2B0ytYiI2jfpWMTHiwhgMdXhOY37uh4JchN2O9KKLvFWApk9Q%2Bz1euToGjjk12fzfrdQ6elsuQjckrknUxTu0fjdiL6zg2nrBfqLV6TIRCc13etuy7F2xusuP4xkOMzMjje7zoJdJdZdqxnrEbf%2FIMbQ6SldjOC7wxV0sZLOYGhcCUPrF%2F0bJqVmWzcS7EcKx%2FSUhMIyDFbjcqLVV1tV2fdCOdKhK%2F%2BUBrJ2u8WwrUbv4wTldIy4xgaiEq7Dd67Gk0EgOiaY7QTzrCmPCA6XQUDu728RCdsApVL97FOgx%2B8T67dz5cHWgfXfDCf4DtVaRG4Sidnx2HnUwqryyGg%2BcwzGJjOWVNQtDd%2FJQWGNpV%2FkMDHjKsZ1sfgxzrCoiByD0lCys883%2FHISYPmVCRFxcmVqEc9I%2FJEdcU%2B1CvAGZoz%2FtNh47mdyKYTISxOFmQwqY7ddg%2FWSFwHLU1jRHvqCuIXQfgTNwJ9THG3xj%2FUPHYAUC%2BI6vgLtANrWafm6xA1T9GCF%2BLP%2Fb%2BCTsDt6JsRzZ%2FFahlpN41m42%2BZV142NMvoPJQv7zEW6J%2Bx4fBV%2BONvfnsjhQSX%2BNBm4LiZYs8ppagXNqKBGm4CHHbUluu3Qgz71rjD1vuLEBjqkAV2qEDg3ZUegvd7RT%2B%2BxVJnVxHGmrnogvdCVRcvUEh79wCPf%2BHTp1AzDGshNEXpO6VBzitoXhk5uSc8XYLNlMvwRRupUSAOG9hpknx4y5Yv8FAR72B66TSbRUPefsWU24XlggaPXtn2tJqKHVZqid5%2BTXadrhMpyMHrDrqQrRGpVQImRmzflBovLIUqn9745j3LKvr9Mx%2F%2BnVwLuYEk%2FIHm69Krs&X-Amz-Signature=af331ad5c05ced5204c94e06f483afb62fc027814f946fa62af71462bff90423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=2dd409902ba6629375e1e0a56aa9205de67385a4006579fc4f542d3fab6258a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=f8856b8964bb4bc94c560960f4b0771c823119accdc4c20c649afa3e8d30ac71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=ee0bab26df15da7adbb6b6875b7f4e2f2da3957e55c08b1654366a7a93c6855d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=85e8a6455dd993a1fa9bab14a8a4e1185ea0c07b994ecb184a325b63c6e1bfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=7f31197a4c14c6a4706abf656435561667ffda8e23e31337be2488086328996f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=303bb40ebf34b24fc42bcb973ce28d098c9bd5fb374625a50a712876b5d062b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=568ff0fb7008236291b358d3ae9e66ca103fd5162ee64bc653e80d5d4e816f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=7617127417358173a44567f48173602e97550afd8ae284b65dd561eb9277484c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=4c1afe5135e2093aed90226507d13007ad139f2139cf9d1bb8164e62e06fec71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QVCL6Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDECwsWD16sZRErx%2BxjUlWEfBWHsjrpZTt4E0O85sn8jAiBBTxRYnOGaUi2q5QhnazsngNypvEz8IBETJ9hJNAdkzyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbP7O7iEwRi%2BOsfEKtwDRCUviwrxxw8Xw2vE1PpOVazS5Inl5SLCEGkzjbKB7MZshcaoJqg7Y84DdTDKZ%2BpGIK8Oijmji70gVQ%2BK%2F%2BcJvp4mvP0HmNsaxnH4miSzGJxn74dLfiw3Aep7emGCTl3f1eEMs24VsvQEXWEUdwsCG4pq9us4DnwuTnXjSUVd4PKaI5bRYM1lOGTszpgn%2FV2iOi6b3kPMk5eFOajS3pBckpeeSrclfPIWNa8ERy%2FQ3kdHTVJ8i64MQJ1mBpZuU6qX%2Fedbwz2M51GLGGlX%2FFhaY%2BzWdPy8zZhZtTZA%2FK7b03tcyhmEYLW3t3mVzLTwvYcINx8KQZvdK5hirYJEQd1gRiD81H5yDmuD3JcHuiW7rKxxJN2Q%2FFuEBXy%2BArKoQV4J3MDsaqnZrwbL3c6PuAMHS6yGM6zA%2Fm2nQD9MOoy4CU%2FilpBM6pTRZHjTqRAv%2FVklD73DRilToTcMz%2FW%2BiEq4gNOvYG%2Fxot3K3S%2BZz6Roey2Ye1Iis2v0mzxkh06O9Ipp89tjIiW4JgiTSERAN0iK4zmdfTUl6M9f8OJeCV%2BwKq2gQB7N2%2B9WqpKz5o1RKS91TvoGTF3%2F3jtJQX23aEbG6L%2FhFxPzPcsn7kyGbySbjlBrE2Z1djEyOt0%2FuyQw477ixAY6pgF0DUY1NWloRjQLMh9WDRIHvMORyMhOr37fblsLrMkxrvGFar%2B1W6Dzm9lLKBs4KT2NlrTtfZimjSfyRVps%2FW2hTZzKp73q1rysGDam8aczCoUo6EUDJZJENLRnYoUGyrgZbxHDzmjD8g%2Fkx909zb%2FCbmXLZqYcp%2FfEjazrgZGmFILPJqYx5a58KP8CXH%2FW%2FE7grlO%2BaQvVLL9Y37EOrTAkQagf%2FO7o&X-Amz-Signature=85e8a6455dd993a1fa9bab14a8a4e1185ea0c07b994ecb184a325b63c6e1bfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
