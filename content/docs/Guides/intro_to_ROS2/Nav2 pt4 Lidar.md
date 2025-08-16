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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4NEHX3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDnLHwS8eqFuPlZuzzqtlX6kwcR%2FEO3EUbi86YYTyOi5QIhAOXzMjfETqdyiUej%2FJ89eNTI0Nn61Ocd3I2QLQFWGVlXKv8DCHcQABoMNjM3NDIzMTgzODA1IgxAM%2Fx5KTGmONpKjGkq3AOKLZ3mC85PopsLQUUMlPkr1f3EFoAlUdbpuqD9DW1hr4m8%2Fmv0MyEtJW8bcbn1sUp15yaSngKu9RJDoVgAAtWXbqkVsppJYxM3ZjeN17ZZZ7aL6KfQv5iALNAjyoaFWM%2Fq7Z8w0UbPDaUAvz4bKOW7R758oC1Zcm%2FGwPNGefQ1RSNZpvGy%2BCBCE9JABTWy3%2B9lLm1hN%2FneXsD5zIRLMRjJn7zcVvHhnUjAuPQCZMoXdvr5GNqxDNfeGhm1Sz8p1gve24CJpRVzHsxt%2BRwQcBSj9CvQbKyhTfrmAJLZp4VR4gCq3ru%2Bar8O4VhyrUficP3ENwZmzsEobotpODTYz0VRsrdtEqnOin5sDWJ4Gsy%2FGas%2Bsoc0Gwm7jb0NrcEguvOTZKnkBTuyISaL0CGe0JaS94rDhzF6zpKzJBFlpryjhw7PbSCaPe2QQVwGoKsxN9yu6%2BWRUS7p6SnVYFoGCddF2F3vTasHSiuRbbnlr9EoG5tC65LYNbeSivz8T8J4Isj%2FiNRHRYmVTUKZ1OGHcYDQ9r8ugr12QMQsA34RklHDDxAzL8KC3V3981r%2Bfg3QmYpvWevkjJ6G3cwPoHgLq5Bc9gBMj%2Bk%2FvvMk62WlRvww1LXiTRyAXabfVf2CbTCmloLFBjqkAWpFLAwEEVk4LGk7mOP7%2BIxjd5ppKv%2F8qrQX8h5B5VUihriqpKTQqRgvdW5%2FOfMAbKuHpv1SLju%2BBPTAgR8prbz%2FDRM6fgjL27Z%2FNwbtddh4r109fZX6IF5j2%2FA%2BQMWFmquQPCA9ekLoWNNC24g8jCEf0Zl6m%2FCtnDLbWlJawdt4sM58wHa%2B4%2BDE5shtMl%2BHGEWd4Tu1sfo1OrJufCtRQPXtlgkR&X-Amz-Signature=f60fa983e634958d3efac90ff96d2a6b13bf68172ed688973498a59ebef3294d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=2390fbad11a573600ac57d8d856f7b546c279ef204bbc2068683d2fe670d9840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=a16798e8a0cd0a700cfd37a891657f71916e6cb4380565001c90d3c3721acadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=9228155e2896127d27446ef0c0764d4e2c985b3eb4c74b6647b45bf818729a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=a47115a0c6b07e6fe862c58b709592589d5b2d96e752899ca3746afd1827a345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=16e4ea51d42b9f9921035e94a88c40d4922173a0684af6380dfeddfe03cffa4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=cacc0278c88c4f92635128b2c91c7badd505588657b078c0d911bc67b4964daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=cd1e7be262942e20753d1896e5cc5d04589ea82f2dffbe98f1fa68b17b692fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=8582311fb3c6d45f5cb86c478c214dd72198874f45a4f50d16e43a58066bacc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=05c5593ac7742aa0ad4bc10c27e92aeea6b02dd4f55dcdea38fd2b9e28a669f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZCH6I2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICq3O44zpUsAonARe5rz360ieKsIt%2BCTg0YboUA51BixAiBMH23Xp5wYrL3WJTyl4nsiEzH%2FyBm0qmf36Pj5vHfl8ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMaSGSwqiyx55f5GUIKtwD2%2Blo43X%2Fgq0pHVcqVSf0ZgL0kV15Je2ExULwPR3gVgR%2BXmClELgl15noSAqj5v1NfmW7mqik2ZL7uGz4UZYRHRlsnZqgabkvpcoprIseBsUPMZb%2B2%2BoKLl5EGJ1l0ii3%2BMLeuzJ2Rrw7bdTKAULVlSLc4Xyf2lZcTjabAG3VkEhq%2BPiksGKO1Y4XZe2cqMA7voQP0nkPLhysxrX3u60%2BfC%2FFATSIm8zpQ3qtSYfHemXcheNj1qFKvffMl%2B9gf4zWNCac2src9vGuiRJ%2FeRpIqR3GYFb9DZ3O%2BERRHHoE0puHez4eMeAYO2jYkkHTj4o68sThTeH7V0gA35A8Lp6yMh5hP3gf3Q%2FtR6hDyMO2oJQokmuQwSnAvBLr%2BAOCisx0oaFxo9fcwY6rzEHcTqqzeoIhgn4Axf%2FzH%2BC6flyN953VhmCh8kdO7mVl8iBnqBwh%2BEMNsviPvsBGIi4obdWCP7exxQN9g6gwib7kcSAauqgb5o8xvJTtG0JNrsBtp1tlVNDA7Kj2E6r7aGsd8T7buJvMSAYmoyGTgqiwAkL2awHknwUB3SNxnqP07CVRvAYI%2FEsipgq8ZvSPcqXVkmZvziQh6nGL6UPeqXRBcnr6yGOIohsTv20smhuPHn8w452CxQY6pgEzC8%2BOuaIc5lWS3u3ZzVqSkcKJktzOXDqDTpnlZUfrKuNs%2B0Rc2zH4BBuCsHcCHAdPAs6%2BM61onlQ4ln34OO%2Fnzcxl47MKMjqH7kIzBsKMmkXYrA5QgVtMYSjc5euhnrTX%2F3TxWrF4NuKcdftRiduklqgZb79WgpxnIqOcFVLV9KQi7X5yFfWvSjqLReUjFURAMAEf9wQv9c1TMpgNg5H4gbZrq2Jm&X-Amz-Signature=a47115a0c6b07e6fe862c58b709592589d5b2d96e752899ca3746afd1827a345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
