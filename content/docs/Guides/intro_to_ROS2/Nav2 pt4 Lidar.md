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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FERINIO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCQ7UfrZ1gVobHQPQlBwSRmuoesB9sdwmGgj3huzcGxXAIhAIYfbNcGjRwTG%2FkDAO5JBFWwO6lSqBJ7OTcyw7WHjq1BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxqjjmFPfkSZfLRqgUq3APn4Ev%2FZSBc%2B1yrBS0Ps6yj7WWH08PoUd%2FeN6jsil9y3DVxZCeHaeIsiweIDEE6VcP8JX2XAZxYeSnx82rUJIrek9%2Fu0%2BMbgkrw3O9EQTut6O6sYN4hjt8FUPoI9nQwX1xB9RaD6vkCOatEvAfOVruSfMSdWAvQ2ZCindABZiYoLTygkVOPc1PKJI%2FGeGEiQnt6b8WdU%2F0yrhGo7S69SYN2snVOXqc%2FSfhrC4uo3tl8GY4UB1Q5v8GhPqZ%2F9joaB5Ad0TOAOmZFd7pPTfCsaV347p%2BWJaXeooekpF5K9V2QwlNi68%2B7655PinQzXBpRqRQfUm%2FLI5Odq9%2FXubK4jpAKK%2BxqLUSKCuIpZxbGh4d6%2FaMu93rtNzn9fUfIN2iXvlV9ISb0BymDGlXXH89eAP1OKBOHRc%2BAtWh4CVqHzDhtCNiQLwydMxu2av1DU%2BkYEW6gZbW6vyKdXYn8wIMlyHHCNa1IriblDqTnkKxEBAxvOi6WgvfPRyDdSxWkg6s0PPX30DPr0KYeW%2FEruJ%2Fh0CbGEr3nLh1%2Fn9KYOtz4VSvuwFQmXg1KbJugre22XCnVJ3qUc5Y2XgdNsIT2cW3eAxL5BYo3%2B2iDYGVrmek3%2FbX8VKFa8Lki5w%2BfxhhARTCFnILFBjqkAecZd%2FPJ0fALQfS7P7%2F664ZxcvHNK%2FmMwDD8fDEmSCkuxSUL%2F36tgntQ2KmNvCIbn41Gx14Xbeu%2BjZAdgBKJ9f5I7gAOt3yf0hM0YDAX4mAdjKQP3L99t8byL0DrLobPnWp2s03ETFUMSGHdxHRBxqng3E69kDOW%2BzCix%2BZ0uCXNfkcKnZay1d6FDXqyPFRUsAuakyV4cb4loL1YqJ8T9tQOdrHa&X-Amz-Signature=ddc1162c520f8277b930b62527d082e8cedb9e50b287281fda68f35a9ca11bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=76788eea8d8ba330da3f3d8bb43ad11480e3a1ea36a1708ec79815f6e76ba0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=c58c26ce4174c1edadfb0ed09aa38c523ab936cff11cf205932bda7fa4b815e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=cde1f2a66447add5c9a4ecf03795387a6a7e388e794dec63da80b91df1f429e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=1097b62410b1a774688eeb792b3e9797d1bde11941e62a2b43f7cec2eda67d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=e21c1b91453c55ae5701f0bee5f395dd621dd6a7b7c6569ea3815814b1424934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=672d7a392d511825c2120f6a2d9368c7062f300c7b70e9f0e4d2dc8fac74e57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=1035c5f7da464f0b88e94b43dd800620d74de5267ce14eba2d22c25978d61a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=611d236a52811c800c5ea2ec2c93ed70a476452007b746f5870d57df577a85bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=6ab11da12670404c65897e22c295f44b33f72b5087c33f60ea4082a2cd67319c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBLWQB2Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC3%2Bd1Wcn286o6FrDzABWUkJ2GBa3iHY4DIoqpPdasyZgIgOJMWc7EfUIXoKxSXDkjNYMOImUPHx4nSH0vYpbey3Cwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLfyCom2M%2B1Mr23fyCrcA6bo1yh%2Fbk1dgtxhKeob4FBvf9xL6XzPy5%2B%2BJqTQR%2B2Xnk7hvUPk6DSMrEh2mibjHP712QYXaFlClhUoSpapMqQ2B092PnrBAZUoKzUsFutXIsP8e6bTgjLX9I5JWQhmx24E7ytSZVlOzZxjOGdoZN8AR2K4qIVRvKmP1kV1xaIgjz1GHATnV4tRgE6jrttyXTvtheTK1rOUDl6eAFM5qJHrudnczKoqvnaH0oSM388aPyAj%2BFcoJ0Ar0PuUrAW6dS7GPSpJWMyBGUylSLSpxG9Ds6bACC3hLFQ7JDzXA6WsWOR4QFoyZMDvmH4osVxfgHOBvv76go4gmasxtwk4Un9RsOQ4fHpsUcfJqagqIPPxAqvOmDVkB1%2FhRQlkWnjLWmVWg%2Bj07Usmpq7gNWRov7CUOGO8J%2Fhj1rBZfA%2FFBPsVMllBhPkDQc2C5r%2BEaXMGeDoFrxSz2MQwGZyeX%2FgEAs3AP%2FCcAHtLDTvqPj9p68Tl2LM4zyzXApjz2NiPf2gzPX%2Bygj0%2BRYfa05RLy0nXpWqmdp8Io%2FWsTJYYUSMFAh8ssBIIABE5gb8n1JI9x%2BILeSbuSUIKbX2wUgwZ8VPTXAvFB7Y7t2g2KsjJFIsyc5qIGouWFf%2BsxrZuG9hnMO%2BXgsUGOqUBfbug2rtMZiej%2F6p%2FurhyWSoJ%2Fg26Ctw2cWdYmpkAW2xu51zDvm2jMVamk4iBUh5rCr1VabVRvoMPmdjFhECLZkiUplBOS%2F%2F5LFgUsP%2BFbg1ar1zeVrvXcb3apSn0HbX3%2FUv%2FN%2BKSygSlNtBPTzHnshlq5shj%2BvBRHTDCnGyMWfBTptcU2bwxwaRRgTJw4TwyaQNQTq60E7Rp0vlDCrkJgOF2qDVD&X-Amz-Signature=1097b62410b1a774688eeb792b3e9797d1bde11941e62a2b43f7cec2eda67d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
