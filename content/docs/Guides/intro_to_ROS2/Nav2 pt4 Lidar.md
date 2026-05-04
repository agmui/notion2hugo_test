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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655OUI3LV%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJez%2B0Fki8o2uOtGMB735JUcQvaOJqSdzTLp9pzAvipgIgcJNlywJO7RzxSdf5HYB%2BD4Xo2q0%2Bro4uU1e7ed2WpiUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGj%2BrgoNMM4SCz7C8CrcAwBAIeoPnNQLbvXwN7O%2FjyMpgOEyzfqurSqvzOP4HmjPb4QP5SJ7UazRD7Fh3%2BtrJN98NZaJtjrmiTJsYEp%2Bo0C9z3VYxgHSUWTdwwcBGOXVRVJi4RaXsUInM9SkyYikX6pMX6P77GI7VbdGWSCHXNa1zHLNoiCDtIoCJpadamzAnobvBWlme8dkjri1iQSwGUfARpPDQ2BZhfxV5Am0flk4DdJBFGnagaoNIolI%2FB%2BYZkiHUfQnt1AGQZfSg9NBkr7UyBxi0bCMo40snYmaat4p%2FVsLfEeu%2F%2FqUl4cJLFq2RWpQ9C3JYmLf4VGctODtSyp%2BON1%2BKlP4FkHqLqbEhyF%2B1TpQp74RvidoWHbKykdxWZTVOr6LLKQDZf5v%2F1etc%2Fe8fBZJs42n9ZoFQlnEzQTGB93fdvBPIU8jzZ6m%2FrP7whqjjcCRctKHJ33rgOG9Jg5XEEFU4nnRu1XzPm87FC2CXBFuzicY0ZyqedJuKHawaEcjk9jy2AIEb%2BPcDQkJxEbLHbAbXNR9xJYe7dPao6b18oa4YpY%2FnwbibnRuouZQAlOy%2BZrbxeG1sE%2FSVeRyaQSyqZ%2FImX%2FDrGqXBP%2FdOn%2F31J%2F0qUXj5ZhJdnJVsJHf62qyyh9BADm8k%2FnpMLb4388GOqUBaxyNLhvuBR4SBxjdEnzvDo0OdOzUMoSIfdx%2FqeioVTgxTC7FqVTxjqGD4cWXYwQaJZnT5L3pZXoUku8LQ0n%2Fo4WAjxaMteRXorH5ft%2FSHKQHOfz77Nu4hKHISydAik3AWD5sLXBaZdf7PittKxJbCHYYzTbGEZj4H6uUO8fB8ehcsrN%2FKF9BqyhUGnHPwlR3nbKOApuGL2q3BQWyYIg5kjY%2FwwQs&X-Amz-Signature=26c979b1a8203e1a52729ca04a58019bbdae3a0e20a3f67ef6dfa4a1a3e905f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=d41ce9d7be299732beb3845851adaa94ef699256ec44b28767e623f056f35f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=69309dce21aa0a9ba088db1176de1c20f30198fd91ea1f7fd6ace699236c8e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=bf566e715ed40e9dfd70d69d3cb21630671c26a17cd91eb8dd933ff5d2094cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=9ed0d7d75d13cf61f7b2584d60d5ab48776e1a766123ff531c9ed8fafb2a8b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=4ab66bc853c1f30c280c6c5b73b2dae162a798e053fb8c856fd6147fdcb4695d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=98ee0e87fe53fa9859f51204b0d70ac3a4459c8bc881ba53b7f2b1e3089664b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=b270d81f9fd6420f44099f7cdafcd39b8569e80c639db55c9e0c936dd737c43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=7fc2e814f9c8065d6d5f8889dc9d7e4e702e55a0d9c6628684240ea207461b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=628a750024745a0e0e022fc5c39565ea133a7d30ce99c3fe6d4c6b2b9a30ea0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ER5PIZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoieVprAUFeCeQb6VqaW%2BvSCwhsuX4kvnzEiaYK840%2FAiEAiRmGc4Lp4Yu3MjVjq6WuFqRiFVk2MAb%2BYnbjHwEPpZ4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD3tUsfVggwmNokYcCrcA4GWxdA6mqxFXA7tDxhiYWD9VQshxPX0kg%2B3I0L175vTkukKVnnquqWfzIiIWPNW3Twy%2BF6dZxfVxb2sfsY8mh1Me0HZqozmntkKcnxM37ZmOEftu6txA7bxGb3%2Fgbu2uU009jkDnXtaOFKZ9PHkfIZaZ4uUprnVC5BKmwof9DV38fI0S7lLxWjRown7CvoasSc9ox7EmhZe8tg9GAgrhu8wG1FomcLMKmJh3APE9ALXIPt0AUE%2BUmcIIEyI%2Fu%2BLEmZLHqdOqQsdnT3eiSsXpTp96HpU3K54lnYea6CIL4Ts0Zyg6Z9yBizeA%2BfhZeLWBKCNwHYN3yPCn2OggHrhdN91tvQs3fO6p%2BiwLKG0MZMK9FvH2iJ06wUhd75T17r%2BeBXYHSA4eUDrLboYGzP4Fhirfvjr6RMaYmOGOsiWq8JJTU1xPFwghlBScAHopVwK6f0NmjgT1HgoG0wxM1J%2FIceyosd3DfpPjoUwKaMHCg9H7qjvUaDhCyBZYmnqAVVd6Jok3J8CrASQgtTMOyQ1FMmVMKIhI%2BzpvFdp5KUk7IZ%2BF8CYCwcUPZ6wrqYHYSAR1oW%2F3v4yR9d%2BYkmD%2BK1BJ5NDdY%2FF9s0z%2Fg1%2Be5hrIBGi1qhHx7lEUkUbb%2FIHMN%2F3388GOqUBfAPDHr9XCncDb1OADtuok8rsorjTCfVrAttkU8VaEkbkTX0ORbPVbdLBrwKaglHF6toTzTwJk8kGq5IutePVvcx9gP0eNi1xgR7GPH0BN1QOJxKq9G6%2BBsQ4IzKac1MTW8Jo73Zo1FNaDVBjvqvg3PImJuznVMQU6mLFFk9r1n%2F%2F%2BSH1FAZQzAG5PiY1yQWPVNM%2FpSQfK%2FbXEXeNotIYKr4Aslh2&X-Amz-Signature=9ed0d7d75d13cf61f7b2584d60d5ab48776e1a766123ff531c9ed8fafb2a8b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
