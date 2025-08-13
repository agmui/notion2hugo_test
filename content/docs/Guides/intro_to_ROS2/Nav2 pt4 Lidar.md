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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4PJVNZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw5tJ3FLxc4hmC%2FraB5w0qW6c2AgrkZeo0%2BrpXNcxrtAiEA9X2eAqPSSpviqUnyuO1NRefqM%2FGjlXRi31EuZI2uzLYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI%2F41vVcIcxp25eNSCrcA%2FSxV3YXu9fiWZiMcX858x5zdFJNmn5CU04XX9pfyQbU4Tf65FMctGmu0QyFtvVs9CIG1s0FH9%2BQZ37qBB2Kf4Q%2BWVx8wSHHZChKFQEgIVJGKCDD5nddfltHvATeWnj9Aoq9gr2I3K5z3K%2FSv6smVei5eMVxb0FQbIa5DumzvLBbIxeySw%2BcneunceCFqEQcJzxqf%2Bh%2FX8TPild6EXQboXvnvw4LIISbX%2FXNmLaOyRTcBkmyafEXKYKgcaBSbj8gbS9dgtYHNYUIws7S4hxIwa0p%2FtzE55wCWSktWqg8YMmFVnSpSt7XhdLB2Iac697ONoAP4NU17P2eatt%2FFg3oGXAKTCpeyXfkAYCgz%2F0hFse5fmeCU0UBNWTEA759FX0HUxm5msGvDLzpQ6GTIyYlbgX7wnSsmKOiCIPaHao0D68Gtui0erNNtpwaf3Jp%2BSUZ72fX8gmBHBlVCKxz2a8urLqfnMNb0ZxM8Nh%2BlXUe365tttOUEuDcYiaLoRnyDASwfwpw0xGzL4rCqqo0vA3sejpaO3LLyrvEf94dIJy5nPhWPX4RkWQN%2FJMFP0wORhG%2FZJOind3VksTvQTtDmDusYKImccOCdzQKLQZ0Yd1ihR%2Buviglruzkky1Z1zYWMPmG8MQGOqUBzjA7ifHY5KNY8q%2F0lHZ82Tj7VcUqunjlpwTmKKJFUUwRF9o%2Bo%2FLfbaLZ1w8NobPNN1YVjAC4yW09rL1vJ5icqQrUgxaOyziBr9KnbLLj6%2FzYWa8ItyR1k%2B%2FGwioRjYBwKydtceRvjSY6ajOdXKH3vdrhRuQp7MW4npWD75KffnigvvQVyS3%2FDjYZNslwPG9Uzc40OojRk1ixy%2Bxf1Slh4zt5dYLZ&X-Amz-Signature=893d969263009d2b17798ed24758e8cf120b55a5ffdd0823ca4df0d5f8f3dc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=fa2466e8575f1efe2701d2e458b6a251e4c26f16962ed86f6ba68f1520ce9219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=17ee5e05062cfd3a9b02e1f419ca3b71590e90199aeabf5722d253fe9411d04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=fb5a44349e8037fce1b8b0dda030c867f2fe28e0fba0ab0cc704330dacfaefaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=47d18d934cb19586ef00ec5da98aabfe92cc0aef18b1531652f73971a7b43577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=192a324b2210a01b2c73ccf7c29aa69a8fa76f38f911d7ce72ff3ea6e7528871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=fd9357fbf2b818bcb31afe0942e67a0734e0958694e702d0b4910270d6ebbe21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=ae67605c0440dc7fef1adc4eadd951852526e58d96b9a59732a9d604a53a5148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=d10df44d6b90b5d7a1af9235518114d54fd89fcb49ff29c314b9d8ede0f9d3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=f070f90341e573f4880650439415e3ade2903a3b1e8b6795c12ffec4fdf69ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKGN6BU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCcWgCS9iPPLiEBr1a3l84z4Vnx2qOHWc8Z%2BwGQ2U8AiEA1e1nyA81XOO0IST2BCl8%2B%2BxiEp1PPjj7AIFsVik0TmAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbWSRYLgnVlr5yC3yrcA6jIzL%2FJ%2FRkf3CHzzjoh84%2B%2FRtcOmRn8ZFbrGwbhFq47%2Bo9WSIq5fX5iUjalXnJNNP5XfzOPxMSVej5Q19h6NAiv2hvZIrPJjdbBMeJlPikJD7KrmfTHgurq1V2MEN3kwGwe86k845Mmi7RohXb%2FqIHxkXKevrN33Q0h91YSXOolcm5E5raJCDiKUtvMQ%2F0%2F3aZZsjLED5LJ2CJk5SAAfDf6glr4vdoOnlyFc%2BX346Vsxa7TQitYuugUsj6RBWknNoXgbR0HZ6AUxg%2BjtOHy7npT%2BKmfp2gEJhkfYULbC1X1rh4gIbjwXhTSAWlEW%2FW6mh9dPHgF%2FyNFZDzu9a8XOMW%2FjpuqElApuNsZMlB2G3bxBwmc6cD4W4UD4bXMsBlMMFj%2BYTM00F8qRItXoY%2FcmPYtNBQzlzl7UeDNi5RPFuSnqSnxLDUQFAFdXb8QDsLq06jI2FKd0DFK6rktLzPZy0uZ4jhe6XuNPqUiI6xVgBzQIV9bpFAkZmz4LX7RDfYmHGhcqg2HvHCoAh%2FhfpVPZ9kPQh2Kycurt3PFJPHutumlZsRnPq%2FBLr71KLrYz4b56OjiSW7grMCKS9KbiLOXkIUqWfB%2FmItAkG1Dd2N3cjL92Qo48y05KBd%2BcrqrMOSF8MQGOqUBR8iEYTimKkMCtk6%2Bhx1Ss5FvrplWPYTtaspAUkdBHuwcawV4hMvWRPPojc49mSaNds48r6qSJqG76HQ3TjmLf73H3%2Fk1TB9qMi84ilejH11KTltk2iMMdKCJCNN%2FEPUM2ECdFJgZww7PUjLXX5UCyWrFApRTZa1In3pLwxGL%2BYj2elbPLjCVixJu5eJdyEH2grbVddtK8DMdH8AODreRfz6Z5wuh&X-Amz-Signature=47d18d934cb19586ef00ec5da98aabfe92cc0aef18b1531652f73971a7b43577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
