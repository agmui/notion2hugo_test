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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TBTBUN%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvLif7a4mNPQdeFXMNvVi9VTXGZ2xtQhcEguMjrmrwkQIgZBeN1Kwn%2B3W9Bl1eUorMd29czvvRiUGQxapAyhAySAsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIugDHCrk%2FJgD5jRFSrcA6s6YTtZYKvB%2FsdKUkWrU0tc%2FRnUJaNT46c3%2BN60e9AWE6t8M6gKzEXX58ULjb2cPs2FH9qWmMSojG7ptrr9%2BCEW2E89pJnn6lT2Icn3svgInShMBzA0XJtq2cFv5REAcWXzR7CBYHlO2ipbOevsa7Hrvd2rP1UDdoqa2oOGQFzBbx6gua1gGIm8fx3H4YLvQ%2B%2FaEOrgXmbwCRloSuQapJxmYR4U0dmT0MB9pMf9MviBP02YfJeK1D89p2OeB3i4RcvkpkKf8pMfYZAivPAdJcVB6a%2Bt5GqTWqbKRfda55Do%2FNF37eq%2B6JNleK9WOsv6oiRn0cRG9Edd77MKvqW8ZpEkD5y4JWifDpbH4LQ0OnWJlfosb1Zjwr4H%2FbpzIBjDCbVbq9jGtMl75yx1VOwxKvnW0w3Bp45f37tOOYXtATB%2FAJi5wYhdWZeshqGs8YF3IhpCK6%2B8dRQXTUWk4unPeXriXn7xRxm3wQBd9s9YcZYZdSxGK9Jw5OEhd5lPgT2J0uZf74MU5PlZw%2B10e3qsp4uPsywVCXU6XefGpoG9augjSlr1om9BiPFfQpeMLlIB802ow%2BHWJVIFF2mhhWanaDQdD%2BGB2JUT79dVz7LI7rwro%2Bp81BhLBLygkKOJMOaN%2B8cGOqUBsSq17P24N5ej%2FdDWfyExBh4o5xST8xUGJCPOlxgOIBSa6JxHWpIKgoU7dusM%2BjHRREwhaGZg7Z3Rf40cNdEwF40g5N7CqKv5cA6vROusR0d0EVNiaW5bNqeeqeGHc1muGRdBAYGFQ2x3PEZwsqCCjtRqpQgBz8BQpDWSPYyUq8Fk8rFD999mhDXWd8kl06j5xd3joH0fgVe%2FiatVx4HMzx9ea9em&X-Amz-Signature=43408c8009891eba8f3dded4a3073b3e34086019ff7ffacee06ac8a03cc13c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=64aeca6027845e003ffc2e817282c020af9a678bf580d5d61fc5a90dd25fc363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=da1c57fa9de92f8d12acb99db6316577cebcae1595ef38674232ac2ae2e2c813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=36a9bee6d84cf69c778b96ba94ae27d903c95f9054b527607647a434d2602b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=83e711ec1444a4ead7a03d897a92f87c9426983e424aab291735613fc727bdb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=74aa1c2bbb16703c7b2103485a4d0f87fd24ab9f55f9563849ba16d9b4e7084b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=9c4ce2366109d138e69bf95104a51aaa15c8995b2a1e1e4400ce4376e4f63713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=6c195ea9f15ceff9e949c264bcc4d90ef343b1d98de573179097bbb3215c21db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=100213d697858530477b609c60cc9d2623c15e763aee2397d8e65e95be09fb3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=c839481c9c5c7a0866c6efb9fc9ec304737bfb210128ca08ccb87260219cbcdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SMLAKO%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5ofHIn4yTKoBhQXQ6r0%2B2Txl0zMzo9rHPYPhtGnscAIhAKfP6fqIQ5gHTOvKqgWtEJkpUp7%2F2uWMZ73B5%2BqFv%2BZ2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMlhnntod0Rion0nYq3APwgxjEDrCV23QPJ1DHTIc7I%2F%2B6O%2FlOdC16d383NISEKysk5%2BQjfH2TWvoXyzlzH798JWiEic6Aa0rkftQvlsG6qhoGO3V06FagKflGsvSvcZPONGULoePUyIdfVtDYwQw8qVrgITlkgYYvTwzzT7UE5iDGvDT8ZRp8Rts%2Be8sG17qEDm31nZz64D5Cfc7Hbc6v7daoPA1FqxfdSYN9A%2FKnUQyWBFRlJzRutrQRozvLEP%2Btn0rVVu73l8FAf4Y%2FtQaiU%2BjoyjfL8XB%2BXXb%2BBkro7RrLrZOiZjCWLScUnQ%2BI934zguq2F9bW7g0pFk0HGTU1%2BhrocmOPeIdQdWHQmJOoVEX7Oijjx8Us9xqFAAQj7PtpwXAniG5zQ7VOJFCHzMXT3Edyf8m8st%2Fsj2SYSTxcAU8cSC201ibwa9P77vR52fjf%2BcqnK2%2F9%2BP0Mtjm3jsRPbpEsthqkBh8tuq%2FITMo43ihB3dICZFpc148p4vLwZifSdeLJ67Je3LlcXP06R0sVEhmpL7uWS7j8bnh61iQfPDWbcKwNPKbXH5qkTR4qeKDR00NabcsZRQ7%2F4GkKVx7qZGq916oYMfGul4zeY%2B1Ueru6RhMN7UVnkCVCDvTEL%2FxayPgDz0lP%2BSTkQDCZjvvHBjqkAcRQrPkRzdfkpCqgnUttz%2FPie8%2FgnBq2agTAUqSvB0yC0VLIKZYcz0HSPzgIBTCeVg1nGAr%2F5bs7qZ40kbvkki4y5K%2FCEdNdWTuB80IZti2Aq1GIysYLzYrFqMe%2FNkMBD%2FSJeIMsmQ83sTnIJw111LX6fywPU47w3mapPsKUp2PLuxXrs4fciLtIGza4meC4Il3ja%2FuVlDEIMqbBEMoUFIlJHBK1&X-Amz-Signature=9070d22f3b7896eeac36a448fdb08625ba15713ba0f46480c43d6f5c70defa2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
