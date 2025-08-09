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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEV7T7NF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNLLTBRIEY9cq8GpK%2FIph5s65VgoYSQOcCUunYUw%2FOSQIhAJPS3FqFkLYyj6XIatpjnjsTq7E98Vbfid%2FIMQ9DlFEBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBsOjTRT6YDW0gyjAq3AOuuYP80Cn628iwrkmNSzdXqt9cOHJfUD9E44jmuHcOV7oauL4Bt%2FrDVVn5vg9EhqiBQvOLvOeIxylNA4hlUryRDcguJ3fFC1TW0A92OG4WzUp1x%2BwNHrNOzQXoh6evu%2F59%2FroJMmqlOH%2BOJNdcRrh5CYk80rN9p3x2scdu58lUIHPQW0CCLkGCkC1%2B%2FBlnpCtVpMezVlItDTMlQvg5prRTyQ1JS1kn9eK2IvQmE2QldJJGkJYR59cPqBVwf6RDBMfhTn%2BXvincY70bw%2BewQ16OI%2Fas5FO4iDeJpHvg%2FONEL%2FhlQFKZRZqLHcamOnn%2FS79wTHbgko2iCMfcT3pI6YsnLxn02FkFz%2FalizDbV8kcgVwE0TUnVU4SlizwgPeAlRzVArwRg3CyozJ7Usrr%2BNr2WnG70B2JoYsIMnyfEVwjMvGrfFg8XmK7qG0VILMpp73u6sLu53Hh%2FFSKrApgw2AC10B3tQc0XXZP75tLh2GBmgGliToDvMC16JxBsjYzMHlp8nLcZyFe1U5kXvjP8TsFh1rCHx6qbAM6xQE31dC8gLvlFFBW6mvpRVr4P6bg1vmKUJCK%2FSRyv8ysAZCmxqdesd1wKscYIqO8fAUBZgWeWSjXQTIsKN0N2%2FMqMTDdxNvEBjqkAaLuaJiDZg4ndpZyFRmVlCND%2F%2FmLxT9xZ0ExUHe5GplVZAkOcOZPvxbxdUVD2dS0pHJ5pOwrTIsgFUbG9TD6JMaLQjG4CImPw719N5sMtsX8EqM28axvvEUIS5epsObiFpkdj0K%2FZOSUW8SO%2BSDdyYtQqU3nFwI%2B0%2BW0tsYGg2TjRBQ14iMWVTRxpWCicOxTZ0viKVbmYKQWhWyZX40tzEk4QMrh&X-Amz-Signature=b7b5349fec2ce97df177c78b64957414883238e063d52b8bd1934ba64b557353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=22e7d067698e540c11177866e28cc79e47faf42d0648fb047b52398c56aed688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=c261689e6f277c295a9c9e1046f572f80206e5a0a50dafc944d3fea2c46b0f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=c8e9afd21b4914a29a07f47f739e86974315b6ce42cfdd5756c2f9e64876ba31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=b4291513fca6dfca293c741b8ebe7292a97377627d6abc659aa1662f5545bd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=87c3fa00a1a17150fa303103a7520422b394c33c5304fe0adafa6b4cee480f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=0e35ebb230afef91b5391e26d38eb3f681c53205e0e647aa911ee0e77493f2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=557a37de33e2ddc7987ec403f161846c8a6fee1af04e34f9bc147080d3552784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=cccd0e280780ffeeeef43f54709c2dd916de3f2eb3fe2060ca2c8e83d6c4789f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=18a5f20d47cfc55bfaef51350f2340ea9481e25e7ffdabea949ff5b126395e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=70eedc47af46acd80613b76e0eea95088a2153f77fde7306d5771439e618b8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
