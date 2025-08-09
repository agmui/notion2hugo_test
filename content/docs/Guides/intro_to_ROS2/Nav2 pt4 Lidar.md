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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7ZGL5Z%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC%2BbJsUgIFF93RaWjPSIKOQ6d3sv5%2FKAHaL096aN%2FhVnAiAhhwWUvq0ZNUljb0t9kqueTBvrgTJBwOXhrOdstzRg%2BSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcqUw3aIEaB7zUjhFKtwDlxoMP%2FYuWYqPRWLbhaGdsrlif8KoJRXxi6MdzAsQjd9m%2BJbuLcghpZftN5XvbW13wQVQgQUU4DiXfDxkalM%2B81nOjGIQjGr%2Bsn0YHu9VTBSO2QJTV5GfG9rrkbtUw2m%2BjqyHDi0XbThhZtQ1NLDIDjOPAN7fCC3leabYCfHDfe4MMQ6YvF2HFRvJZ3wrDmx%2FK0grWozSaqlyw2WJvch1MjSULJoIDN%2BPymnDL82NFv9Nt8Q%2BVezCPjnVAvXs8B3FrKllY%2FPRNj2khfNe6W1tmdokeuLSQ9gpsC7EUYXX18wlHyr5VsKasLCTqVVWgjVQASTOmX18IURMDeIb9VifO8JrvUCYTjAG8CharbJRyxO5mEdtUvRCqcZ5C9H8kXbDYlf4Jek6qG6ZLdLUzGIPWNG%2FDW%2BtIYAX%2FPPQa8a600hm7bplubLHi2V%2Bgrcnw2Q9U74mMk76fYT%2Bbhuy%2F1dqJizfLhnitCPh4HmKXm4YzrjnYv1s9mcPTaX8BSD5K7%2BMewVmGoVNTqeorckVCAKfxNoJbsT0wQ6O2yCnuruy3%2F1ooPy3CjHplod8XVaW2O1U8eJCTZfWUrGenBG2oEZoXFMUFj%2Bf7AXuq2O74yanxLi6XaOuhnRHvqQeJ2Mw6MTbxAY6pgGRo6oHT5pELhaR04HeHUIKMd9gVlGVfo6EYRSFHmUTRlzUZI6LNfnESh4I77FBL1WfbKG3qW0%2Ff%2FA%2F5Ym3%2BK0sn67xgKDlW0%2F0QoTTJrFCat%2BlgoX07SCCSH72HbCBFSKwovMQrPlk6ek93wBHxVB%2ByGFFcHkYbynimojd42jqDqq8BxtTo08srf2mkMry6V16NVzU07lRsKYPxAUIHYNP4TNP0Uig&X-Amz-Signature=3660b1dda9fe1d764c3577728c60f4bc75a258a88d26ca93bf18b65a401aa7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=6a86cb4bec4b1d3ffd9ca38ae7e0faf4a01fd8268815b98b3d0344de2859d1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=468ca5fdb952c30543c588eb69ff4fbc1492001f357e2fedcf6a2ee8f4ac21fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=4ecd5760683255684e82a29e0f5d7c08b6d3e7115adb291c1a688f55ec98d96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=0fbb5fff01d6f88a801816bab9ace5a0d26818456d7b21e77801c09557613e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=7a1446c54cd96ca849120ac5bb151f02f4c5dc94757ce93e8605635cecee8a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=20478d9b993ef0e8f48d7f7e7e631c549e5e73c85a213874d83815a2ab5650ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=f8cf18ec4a17ab74a0babe7d097efa2f20f1a96b9eb02a6124931edcbe652565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=a972e5af3a6870e6c7325185c6ce191c2da9d7a37de5322ab598bac61b22aa22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=6503a6f5e13875dc1845a29347f6e9db21465afdf266700cc0ac4add59e2f81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7Q7KAH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBZq2a%2FM8xO49PXoZTD5BvER85nzWEMKNwgz0IRpnr1GAiEA5rwTTS95THHVcpU9mfK5MKW4jTDjOLYD161GDlqBCwcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsO2wxtBVESI42kjircA44QwxorlJyLaAWaMxmaSFwU%2BCFi6NolvHP%2FgoLOPDd7ps2w%2FFqpxpNj1Nbh4usFsWVEv%2BHEJGXVn02qbt8IRFnUSbu7Qx8o9A9w69bnP2K9tUN17lWw4rXUh1n7BSiir33DZtDc3ojhkgXfm6Zrh9k%2FKAANy%2B3i9qyhJ43wFAcDFCHxMAjO4cZydlKLGBV456%2FrjC%2FYyY0d0DGagmKaw8FMsv0lK0HDqpGIt3czQE2iAyyBr%2B1TVIpvAp1tdl0A36T1oKv2ZhFWGPkdx2peT%2BaAuQRD2DXWQTkJVelLJHkUsY1K1S0mlFcwcXAHdlf5lTIjLLDo6gAt%2FjgMOY76o1o8lpvtgaEvy5Lf%2BAjv8ssaQ5eNfPvlMlTAddMBlngvcrthpm8upCHbnr%2BVjfMEVSboUV6tJI%2B73TLDHx%2FozsF%2Bzr5iOvEROUxpU74Jiqcc1S%2Fk25BYy%2FbwN3H%2BuYMBiokNXjfRRgxn5dTbaTTfSiS8TFiM8zLxPNUtI9cuct6cnc20y0%2FZv7mBVtVfwYkT6UVU14eHZve90%2F5I2IyV1u8%2Bv8Ug53ll9ufWzWYJdOrd0YITKOnlEL5BePvjpCM3LiPgCuzsaCdHdxdEN2x4NgxyWXBAtTYnSAVJqzFgMLbE28QGOqUBnUNsDiSFg9htVUYHuP65f7vOvIpa8yBgJJuNmcf%2Fk19gJUVbwFEKpt%2Bs1sWKdub3locmxlm4Gs0SvIrkftkwRfGw98JrJTkIfVrGw67hQHGWbi%2B831MCOOjDdNrBzZIrzCHuHOeFfa3YL66E183AKFIIKs%2FOfw1lv38VePQLob35cdC5hUim0Mw5rzB67HfckKjsvO%2F5UK3P8rPkH2EdUoGU09nQ&X-Amz-Signature=daf06bd67df99499060efb7da1c82dedd6354291676899bb5e5eee1edcbf0971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
