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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GPJ5J5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCXRkEY8fOXNdsyFsqK34tsy7bw2JS7Q4foA5B78%2FzuTwIhAP9AL5OyO9H70lJ%2B2R1uW9X6ENKV6wEzdYiwNfYUwtchKv8DCHMQABoMNjM3NDIzMTgzODA1IgzAORlmu3lD4Wz3KYAq3ANDH52mJtR3cfCTjmt0Wm1T8toGih6FSqRnLe%2FtQK1a8Ed4%2BX88UMnLboemTQtiagjQ%2FiiFhtmB%2FNpouiIGIMagACCx8lZFO%2FFLHhXm%2BmgPTENMrF2fDPonM5erd2TaZyrZVGKhP9Ls36HZIlaLHZtGwToRxYRv5sJry%2FfPedpk2X1nOuGgqwbeIxzhk6ptmxF8YbrroZsiqoMXY1DdAqVWQWdMHtwIn8JvzujU7jOAnZXE8nEzhfC%2BlnHnehYr%2BL%2BluCNZ1WDKEgVt%2FFnhg0fSqaTHpq5i8rhHMK4RF8OV3JCu%2B3I3nNlWRtKfPQF8ubjdn8N7gsE8JTbVB4Rq5VjxfEhuOnbZa0F975silnSWknZ1RlpZXrvam%2BNV0o%2BIzykbO9CzpCIIOKPiVHjjNClivvxLnRCW9PwcHgzAxn0TeRvc1wj3YcYbtlTk3dopf3p1kgIgUxpO%2FH9BGUMwOKi1647HjdZHTgGeyDH6pPZp7CzUwFQm0UDu2fuDlkxQDz%2BzPOwLquqPOjFXj%2B1U10K%2FK8Yrwbckp93EH9RgZfSIbUn54rAx5NMh3eJpqvARGiVlG1xhAjeah13bAyDdT%2Ftn38TaXjjfyJrXQunNUt0fp98UG7QHYlQdmiz%2FVTCy0MzEBjqkAZH0pTEZIHvDv4bLIHi2rPXvGj7M%2BeJHXqQKHuQ7y92RYs%2FalBzfVgASOF3Ly5QDsXKmQL9X9SzwmBg73ELwrDR246TcQBb0O0iR5So1JNUtcvTgFVAlUAnQ0Cbn0S%2BMKw6LyKbY4AGrrDmSDo4dSUrU2MMj2qNm%2BHYgdX1Kccior4H55SJ60P5g5Nxn%2Fsdji09thxO1wI1l%2FVodIL1sUXoT%2BafI&X-Amz-Signature=ed6834902478eebc90ce7b13572c99da30c34d788342183b116fd982399c22a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=c29e79c29b092d39f44043eb82014f569221874561184be63f598104ba6a60ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=a71b32bb317380629b6808a20eac29df9462297fd1bcf4b7ed9571f7d636e4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=42881ca40021a807f1e5f86017fc7755b605873b298f276513858a609eb11cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=e55392288c5260d47da5ccbca2ee2b615ae190e1cc96830c8b949de84738507c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=787cb3afe149cb61470250cd0abde31e77f18a6f8f41cf917c76d8c282080903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=86296e075d8c6b7e740aa2f54082b3c41922a07f054e1d5cdb0ca366cececb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=9cb57817fff7421e277808011545219d679dafcb281c36050a2615825401c73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=56fc2532e25a2783ed48d0568a0f21a21986a6cb3fbb425a30e6af642db1d548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=c75738285d9d8fdcf12a6cfa7161c3cabec0e3c8f301e060bcb6d32279dcaaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN5RM2NO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHQPGZGnGCOPGUGeFXnOaUZWEDmehDH6BHJeY6%2FPc%2F8mAiA92Q0Y02UklKs2dqony4oX%2B2yHN1oTaSs0UOe%2FOmaEYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDsCB36DagGfXkjV0KtwDSS8i5UReZq%2FNZ%2Fj31%2F20Y3JdT0FDHZtSDpesWE2mB02%2F4QKWlL%2FLYs9%2BL7LG43HeN1hHbFRhL4XANFH%2FDm9FR%2Ftl0no%2FnIyTxYuxFIu6n6cX8ht1UjeYVA7eaeAGt%2FG5J2blaNT9FYORkf6fIPOeAYadSXOvAG9%2FSpm6SCFf5%2BYCfc1jUeqXcddTaMZ3lJn1U7WpWfIte7Jud6yyWIdo5kngdK%2Bid8vSOEA2E34Fl2FkRFuJA1eqHfWgGvwWR0d%2B4t8FX%2FAQNsJobAMqg8x%2BHtrLjN2USZc5XtollVE4CzpPdIOEH0fyPnN8uSTfCxkf%2Bqu90YZbAKrw6NsOxIdZPjIgBBspEd7J3DejNro2iNGkdj7v%2Bl1gA3m6Gii7fUP9kjHuc81zq4KsY0m%2FI5mYKRVnwQEInqqA0IpQLJ6rc4z827DQ8l42MrXz9iFngufcsYQfNwWBYfKEgAfAjLewB217KSlM%2BFp14oOMVKlSHWq%2F5qKeHd1147F6ciuG6P2b5XWtIE37uIaznYaAlJymYg44189vkin5v3eo8nMlLwkh4cAPNTn1MeaWGbXBO9mC35PtgBGF1kRi0ExlLHhBsy0Fe6b19L0b8JH%2BErufJCqg9zeiFQAL9u6V%2BX8w987MxAY6pgEFXRMn3iO25xw7LtgoOo1gUSKAJid2EoTzhoB4KOIpGWdKIkA1hEx52P7XlXAER95zs57ZX2nHFru1f4DG0ThppUj6IbHGP7rnF19qPxHMMxVcfSJlqq%2BcG8dg7SUEuUeprMW1K41xk4GfKPnhRjxYcmR9%2F6Qye5f9F1p34%2B%2F68HBl%2FzZTPuYv9JabVFpXNPShpnoqL3cneAALa2U0Zc1d%2BaUSvlSH&X-Amz-Signature=e55392288c5260d47da5ccbca2ee2b615ae190e1cc96830c8b949de84738507c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
