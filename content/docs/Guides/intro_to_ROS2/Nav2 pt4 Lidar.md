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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3G5JJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYuzLYjErCYS2JWb3fRNC5H5riC%2F790XAPantfLcXKEAiEAwkMNgm4ifL4d%2F78Mnaf8gZYvhBf2j2Xt3dEERdUbs44qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJosTJhyk4zsReqT9SrcAyQXP2KQBQyehPnIH8lEhCaqrC7G9p8X8jokOlx9jxH2cy5B3%2F1NOdSioYDekUtKDKrvIJU6Ye1D%2BGZWcJcSnWT1yu4jr59YPuUfUUweAQ4uNrP3V0wLYtzJ%2BI21pslrUWxQ6kHpox33XXrqE20jKR4mPHo93ho4qhlfZjvDlTNk%2FPKwBEjdmJXTAB%2FRNxw%2FeYjM2N3b%2BKdhm%2Bh7PCtKixT7bD8EeDiJlQZQiwbI8TGF%2BCrzSKm0COSHbxcTztfgVTXeagMDponara513%2BKrHeCPF%2FnVksSRBDewJ5pBhn9cV4s1tmzxuiRLqMkpnNef7G29m6EeRzrIF7ohu9i2Fk9lWERr%2FAhf4iWvO%2B1J%2BuzDziSzMce3v90B7g3BnUiJz8Z9KDrOdD5h2G8m7%2BmjPalEFWJxDWq3WxRjO2JkEDQTFcvAJnt5yAJuWKApElurg8bwvhh810AZHqQ9pFlu1me7zoq1M0fdjsAqRtBgnxhh%2Box3HsDaeoNn8d9GptqiHbPk%2F%2Bt5hQlrPGtiSKM6MBJnSU9OSko%2BZWEVJkRDAwCXfyyHH3Q5Li2wNI9ssI%2B3VF8MzMRP9o%2Fh%2F5rZVrMsnQhLH3o9OAwwoGeH5ZqlP%2B2JRAqrKXWS9Iy%2FyuVcMOP35cQGOqUB2WH44vU%2BBwlLzmHu4OlHAerWEBkNVdfgQ%2BdJnEtoDM0%2Fmbkrql%2FwHhpZWd4%2Fi0gi6GyiubPmb6OihQWhe5c8ZJD8gsA0qp0wJaInrDPAEfCi%2BcmTCz5yvsPzExmWi%2Fq%2F2Y3SxWQBapaux5HWcwFG04sVT7wtYLp%2FqYU071GXdzJUAiujc4ZpsK7%2FrjGcm0eo6QDsa%2FkcqwMESe6Lp2uxOoV5Zvc7&X-Amz-Signature=72285aba6a37f7c65924d6e4e94fec3957c5f00dfee105d7616824e620f95b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=a202a05672b8e4557d515d0b960dd55c1b14504d646b34867122915c1798e711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=210136226065538927366faccc74fb7d42b1cedd1817b1eafe71832332a44653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=56f9a687b409fc4a48f38fb81aa2210de4e88ea2b8959c59a3fd0be0dc970566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=1e42a1d8d6c6c328408752f6544c9847181e0498e4d4d9538f4212d031911228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=69cec6ce6f23881f4497fe1f29257196d775abfde189c65a42eff0a43ce8f79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=d43b58676c8068de5163392d538eeddd0448c8c74b5062af99a0d1ccdb190a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=cd59ad2314cf99498af4a99ac09bc579fcd2774cbd55fcd3243fd2c15b24a6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=e083e4d5916e102a07a1f5e0b8d98cf6b3cf12dae285e7932f0ddb52c30d024e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=94ac5f67a7186e990c70e336eccd87a9206cdc7b7d0bedc190a7739afa45b5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGXUCE6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDobkngwxAZ6fQgUpskfQltcIvCSAJrl6j43gDPhQPrXQIhAIpMXpAZqzeg8eZnqCZg5GFkJyung0wtbVfgMX4pu4ikKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoRbyw1QG8QXzuI%2Bsq3AMLWB6cWhAGqOEDyTsoweMgYxDH98%2B8BEiatRdHLmTrd4AgYOE3bxArHXtoSyTZrft8aKl0TxC5izV5k4SVy9bTC8uZf9muIJDnTcvDxO0OpceEkbGy4tuTdCbaZjpGD56%2BhqayecVsScbhkIAbqhAeevKw6Gw5AEtIMghDvliY6FgwsiAgKLGl%2Bn%2FvcJzDopPhVk%2B2mnruwlEu97SWeGe2fwK%2B8PMaowANrZohkvAW%2BmBInuJCEM%2F%2FKIYBjRaerkZL6wgiNmiYozQ06DO2XyIsqYLTPRwrA21ZvjfnX82VtErg1nFbKyPVlW5obk31lN26Xh9u0jrHKcymXlAnRMiE2oaLBIADb66owoqPovBdjH7rbBORzj4GMrTob2ihcm%2BHKefMLy%2BfCJ9zyWdzAtwoQhM%2FiB%2BdMUS1rN%2BIgO2FBKacQkvkLwEEkszzg2L0Fjegcytr62TIkZDrYCcgAcIDTVcOcfVSBsIgWTrgzYArmC%2FUAD5Qgm7BhDkL5AYegrSNw09lah%2BgSoaK1IOqeWaQP%2BWDmLt8%2FP%2B%2B6iHw3o4y9ddmf6OAYh3v7Ee97FViHdEb1DMJvi5vqLKWhMocFiRusnnnEjW4TGmvKdsiqUlKqqXn%2FuNODuarCo9GdTDj9%2BXEBjqkASae9QtJzRKxA06Gzy1gjmYKF3i0C%2FwylLyl%2FbLH9a3SVeQQ0sZm%2FyRWYt%2FcGLsK9VjT5sntJyL2Ne8bhcsdn92gsZ6s%2B0CQXhuUrWYx9IUkkjV9eVPwmQdQwMIhc1iiHsQRBoaA6sN%2BpteC3aDBgJXVItU68Ag3TIAJw90h3h4A7ATtCaxuTLhxw2lrUfKO8u2wVjgg8vwu1gCBg2dwRWjc%2BUNd&X-Amz-Signature=1e42a1d8d6c6c328408752f6544c9847181e0498e4d4d9538f4212d031911228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
