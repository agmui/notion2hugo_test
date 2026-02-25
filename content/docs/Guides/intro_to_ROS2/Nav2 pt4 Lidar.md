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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTA33D%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFvuFe5ivkAd8X6ttk%2Fj4WI3jreMXms8QJU8ILSos7IfAiEAnRlo22TYFmKUIKLCleyszdZn6WWx6%2BlbZOZ7PjoqvZIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDO5Jc13UVfGQX4GpxCrcA0h1glWVZEo9COYNdoeGsUOuiZDexoThOkH%2FPWkpLcizgAKpcXrDLAPgTW%2FYVHf7FSf%2Ftg5mfu0nwkdXBEv8MtXkCbhdqfRRv1Wlbr%2FQp1dKJHveO4pLPI6qIT6WKZ18dsPD7ZPVot8MMkCNBDQVK7zamHigs7xH%2B%2Fr6e9KUN4tFFw8hYrHYqk%2F9hsu7RVBvzt9zxyvgJoDMfJH8aGclISXWwL3%2BfX%2FEg33wmyGldr8%2BkAlD2UKZ6WRMflYM%2FiKcq5GBZj3cmkwvEWB9NUKxqStTqQ0y09U2%2BTObj62xBQ3SqBrDgbC%2BRjKw5zZF4v%2Fv51tAeh3Hv9x1u5r1CP%2FrX8S7%2B4B%2BUSOR6JkFvkz7wosyAFItv3eb9Mq0d6mAtaG5hrcLAnMryOdL0toUzfBj2DOkzVfOUxogk6sZLoSeBBDB31jLg8CN4NiUbQh1IpN1dVR3mHuMPbn50HT5cwA2c%2Fw4m5MnaLaYN%2FRiM2Q5J5d%2FX%2B9tn1xYBehtKo0e7q3BE0j0O0DATQq%2FLd8kCzWqO48jrIUZ7s3M7C7ULAKgBobuTgdh9dEs7a0fOZT4U96GkqPS111MIzlwXyf5zaFrssAfgyXHEm2JgAgzvd0YN8WHuGJ%2FJ1bZq5rWRWsUMJ2D%2BcwGOqUBgzdggGcSJBHsZj4%2Ft2mCGy6fqlf3li6PR8nQQPZ3QI%2BuukG1MSycRqmpflAwiigFcNh15gNDTX%2BQt5qF%2B2U%2FHxDz2NGAQYq8JlFsmicAgoTftK5Kp%2BXurd3RML5QVghmYMHW8wnaRLgHFLhD%2FaWhJHc8ToZf3ojHjeA7FHP4lptCEWuvjdwgRMUkdiw08Ncw7oJ35RpCDEIXx2z2%2BW2Tz07WWHdh&X-Amz-Signature=f23f3f173f45d50d729418ae878f70461b0e358b8c069f8d31defe1bde4f387e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=301cf19e0cd8f1b7c3940e593a03df22ab757462dd17cee1d81676649ac32975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=612c04697d4e722d3916743b5136e9e282cee93bc3f538e7305481eabf1e93e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=393def45c1cc7152c8b9cf20eecc6cd716df223da0493068c3021f0495abfedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=1a51c4fdbbdcf1e6cf0e41005068ffd7e3c55d94f29a95746ddc9625f669c710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=6a916f019d3f91a1a35f3aeb1568219f5b3b89c92974b2fa114c04d108194891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=542e4b2858b82d048327aaa041984ac0976f3b69f989bdd0fed986e0e584c88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=423f702c9ac0de5100c3702fd9b1adfad3b6dbe543eb46589ee3b1fcd59d792c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=ef60a1ba770959ca3a2e5cd561e73770e97c141161aa0c355d6418a34fd78d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=e3e5cc2fa50a64fc65bbc81258044336e40044bc9c85cc2eb61d14136aaacb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKEHNMV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBb3IBMwLt57EyBHkrGdR3iSabOXgyklXhe0Qz5kmxMYAiBa%2FRujdi2dySrGOhhA6p7fFPoAEYBq9kwk2mwGbOQR%2FSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMvTMumeZJtvtoz9vUKtwDyUclHSC%2FzWwnPicwlN0r3syYdY6%2BBSbBM8dwSzvxX69%2Fehlx4qErd3GR5MrorxodCbdAGpUT6b9vas4bAoEJScf6WfQ3pmJVIuAfIy3jO%2FFFVZkxZ7KNenXAagzp5MRp6zkRHw4SEEwUps82Xb2LwaE%2FH4AYtOZPIMlCArDzIZFnfZpcGuUVqJ9us4u%2BCaOltVzwQX670jig8FBdNG7%2Bb7gzv64rv9r3MyrZEZhDfSr%2BVjimQL%2BCDBsT6xM9x%2BI7LDjGcjE8%2FZH77PFihLNQANdX823IXNdSdBFh0irJzOMRt3%2FHtldkl5ccEh0X4%2Fdnp1XNOezhHePmC3tTnAEI5g97oeFtOuhsZr9LAjJFoDmajAtaJaG9XXzlmP7ZLnhNTmQeE9A0VFqksJ6QqaKsAxm3gWGf68bW9TlQGr7jXCFc8AdWGns9iV4%2F6NPUs3OVsleghoYbn4JkYO6PyMbbF9fC2hz%2FPDpvJemb48SoyDKW7AC5BcugKL72bpRZxAdIZRib1cN02bZq4rNwjlF3TdWU26Q39J%2Fo8f9uLZbWX1l3oW8144pTFEzRxt3gbJvV0hTVMbO5fgmG1pU9TJ7p%2BXpLCnRpYu4SETr1%2Fg41NDeQI1abbx1hV%2BDpsBkwu4P5zAY6pgEVF9F%2FXSJeJ%2BQJFhfatFFHG4TJkgxBHIWpoyq44aLpP2lF2hGL06LaN6u%2BBKDQJPoglHYhIA69dX8vdvQuqr%2FROYnMjECnPMNujLqKqG2qrt7dZJ0GYi94s%2BXiTacFX%2F%2Fb4CZ9uwkJogmjTs2c9mHbcDKVJrW8SC1F8jCAPtw4AEaGnfsIlm0KKDde3SilWNu%2F%2BLmOfKiDVEned8Ncuyx2MniHO1Oe&X-Amz-Signature=1a51c4fdbbdcf1e6cf0e41005068ffd7e3c55d94f29a95746ddc9625f669c710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
