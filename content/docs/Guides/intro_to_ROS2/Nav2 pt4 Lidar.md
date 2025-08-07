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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5RRW2K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDYaKacFg12ON2JNOjwYBxQ9hk6hiQl%2B%2FMK280rG2kU0AiADA08XbVFqLwCH12PhWstctw8gWaf2ufoqgbNyjj2heSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsV1DE6lvOTJuWJjtKtwD5g2OXPp4SSA1uNTgaLJ5rrg3snf7oyoJnfPgXLIinHB9EN76kENVYZTzDSWQ5xVVTyk7wJH0xwnFKXIQHTS7POZwd2SUyKSY49mOdIzKQTs%2Bt4wCTZayPKb7dbmXZvMXlN%2Fhffd2GfZTfX07YNWl%2BKSxwi6TrSJeLgRDcfpEJxoM0a95BRs22eY5FLxdio6tCAq0mfYDu12CUnulBYV8%2BgtF1jP%2FIPzzJIqergSTQwQqknXsHy7GEOP15HiWb96xrsUIh3mk5HYNUTTB%2F9kYqpT7yKnO3Orlsglyr1brjK%2FjWE9Z%2Br5D96W0f4mPFOYj1Jt7bUpm9WJT2h927F39UnEWk1V5ORO9E5Vlh26w73RbfC%2B5O2KaZAQD7xm9HLIWhlubEtVzUoynW38nhX%2BiuqCoVa8PXrrVnMxWNuQ%2FZ7wxCjR1zVUfZygwWPTAAGgG7ZzHEsnuRyAKb%2B7Xxjq9pb9RX%2FiQi0owsDQCoslW%2FIx1aFEyFF3ORp221MTX2Oc%2BdLcg8P35bqECea4QTkcJacIE6cFLwCegoRati7BD8oKgQC9INkrezQFTojFGqmvMuda2HZ7tJ4maxgMrkB3YS9U2r3BxRXpqkmNnRmTQM2AoQGWg55%2Fbe7z5FkYwirbRxAY6pgEGLtNjOKoMWu39P8W4%2B3pOJepmND1Oiy0PruA%2F%2Bx%2BCdPPbZSlyfa78%2F7l7nCtmGLY%2BsS%2BQpFPGMew%2FiuQ7pGDSp8N%2FkSZbAL2xdT64gP2TzAZPzx5mfPnu3Gd01y5Rd4Q84aM7ibB%2FInLIOZdAhklVykwau6MdZYXJOXns5RGqtUMDFUJPaoBZfNbH%2FEKeDvDK2%2BEnklRT%2FBkvL%2B3IaXQLZJAd8jRj&X-Amz-Signature=91bd1d036004692e893d9ddad73ca2cc55366bdbf5a2317272fd2ddc7e33c349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=f391d2f66b8942230ad6c193c4fba878df4761a85e7e81f40ba50230e3654ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=f4a46a46166178ff4512a9630d30a7dfc7461d28a5858ccf5f79a273f2916d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=1d6fead3744ee175d0ba0247d04de5085155859e8ce659dc5b8cd4f015ec4f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=44baa76e97042974b0866abb0c1caca2f51400b24aa1ace5f4fe301eb0fab19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=c2b8e1537b129bf3052239623ac72ad0ebb10843176c48faf6495716affa5c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=124ab47093e46b8938f7771ed568f9c2e573c3f610d21687d2e3ef451dd30d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=99492fb607cdebd0fbaa9c43566ea9731a3172d7d5591982ce2876b21111511c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=ee82b70119c6e039f94b6a88dc9d7513c0fcc66cf2da1daa0bbeb2b7917b3298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=d4b89e4610553af08ee90f832cd008d1627af51876e01659731d20599ae1f71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YGKDVV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGvtTVxMJpczO7cSI0vvW%2BCDMvJ5FvF8qygM%2BwtfFV12AiAVmRVOzrn98ysCyx5vV70BHTmtmZMbmW6gMw7jg1HSISqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFvHpfHgGUvJJ%2B2JKtwDTxb81LcZGbdrQy28%2Ftdu6DG%2Bz03Xqlw3xCdgDP5%2FkCQspsD6OJu%2BcG2kiXW8q8V2Y4Ea7jniy3%2Bu%2FUXaxD6a0GuVYhr%2FTQEW%2FzV7%2BlvLlplTEcEOQa397fTa5yjMixaH38kOPXMTXVudpjRqknlmcD0MqQJTy30NZ7WGLv5HW796W6DHXZkHOd1dVByQgIE4Si9SJxzTa5rbdlTV5fqhZUYd7WopeFfVzCnALdSUgnZazpNFvGuAmdRy3AgZYDgdwE%2FF9ZnXBoQLBp2bSWMNvokiIzUlZfp0nt%2FDu9V8H6UM3y%2Bm8BKygpRSi7nLPbSqtkXSH1wFwK15X%2BLoYBTjOWAe60KSKMWBqq%2BbNc2dRRr8s4O1SPgv8KQff1LCcbiUSANvm7JI9w1ZUC0Bv%2BHu%2F%2FxA33QwhhskKda5t%2BeWtsBz%2FVYcyLWKj6Y1ES9slLyZNvEa%2BdtE24acQNxka2miZuN2MtdAEf9%2BrkDTejIiOf6oPJLt%2F8F%2FZf%2FtxW%2BCaBsf%2BO6Nwx%2BzSXInNr3H%2BjNh3rTI868EMRiYwd9P9EJymINNpjaewoSH8Y7wd1WEyVaCl0hrv239eK3EysDIUagslgiw8NMrLFgyz9UjVaL9YRbEnUNNsL%2BUwnBGOSEw3LXRxAY6pgE1cMAyusDLWixYWRko1K9Ppq8YvU20N9MJUnc45zP12tXtJQBEpY0PPScx5Aw%2FC0WMYQ81evyw3G7IR8TzwKpqlOhxQ0USUETpxCZqt160mimxDmCmPcD99YvpY4er0wESKrx6C7QxjNPRDn6w8quZuvnF92ZQ1nLZjOhu%2FIAL95jG8uN%2BF4WgO%2BeR0Q9%2FxHmAQd98v9aiiqpmtGsvydMpC2KloP%2FL&X-Amz-Signature=44baa76e97042974b0866abb0c1caca2f51400b24aa1ace5f4fe301eb0fab19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
