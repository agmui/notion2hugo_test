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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377YOZUB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjHG1vSh3DJ8cjntjP1qW0q4UpPWpNSnB7wjFky3uOdAiEA4aNOVn1B2rGT3rh07yXc2HS%2FAFCSaZGMq5ncq4nne3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB7PqZvo9U20jHZ2CrcA9V0G6jBxa42QQY0YsB%2FyzHf7EvItqLq9LnB29zEA2Z6lpcbjQh0VZ%2F1w3CojPkrX97REIIeBDxfEBLAq%2BwN8KO6F3t8L1hbromXFCjd%2BqzqDaSo%2FqrfS1RI%2B3XGTB8JbH%2BbOnur13HyfbOcN0pZYIyPlGzM3AqoT5NdXtb5c%2FBlccbgqDMoSN4A73%2FpGGVlb4fiftG0FUnztmpDXIobiMaDWuqROkL5X7bAREDMh6BqCDI79o4WLSFzcvmSFIdkJ6N6DmR5pZUkiClIoyvcjwHKeW2F6SFQVGTBTj9N4PrmUBAIecY4L%2Fxg7D11VtLKaFu5t2ift3taW%2B0pqlhyjzWEbLinTRLOGeZW28NW3QGHP0nv%2Fweq2EgS8fnABihlv%2FQfvUZA%2BAf8gr%2BICi4S2bS3bBOxp9NESNtyLdL4cMjsQpcLVZfgTeDmJeIg8%2FTFlxft0dbI6SjWxS8JEPkWV7P5%2F6uUu%2Bfy7D1weZL%2BEVOV2w%2BBE54BcUf%2Btq%2FOvRn08wXYuEBM8s7fq44FXu2LOrd6W520tHfvF9fmeRisOtx1adHUsK%2Bo76vE%2Fb32nF1vgGBxuipmS22XTVn7pr3UcLMcWNz0VdIeKERjC%2FvnzQ%2BnErUiT2cwfRvArpCXMJn90skGOqUBRjIxN2Ab1BP1UE2B7TKtZ7CHnU33FPKLnB4cEouoJf5QQgMsIJ5YNCMF1ajX7r9D5yZzDmhvGrQdHUIa7EHPX8hBUIjXhN82TdpWJgVh28hAaHqFmpsvlehldOs5Ru9CXc3C1xCwSA42wCo%2B%2BshJsEZwZMLpqH0WzPJKC0U75GLktD0K9HexwRDPapi0ez0EyAb89nvr3pgd%2F3BEjS7j7gplGdmT&X-Amz-Signature=a4ac06e5d8ad21e911d198a58fd439e748ae4c33513a83600ff909889b799120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=db964a7018de4060a9f087fccc7db286276f31c9133765a60793f03cbdb0cb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=37824e6140e6681757575a2d958372b34f970ba734d05fb978a1bc1ce8507b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=d9389a773ac1131aab5611ed53f52d78dbf007fb57d7a2078d5f334c6216d80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=0ed8f0d282a501c602b2826e7d9e7dba0604843b2d0e1056a7863ddae8001b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=ad9bd4a41db756729555a289b5b7da737cfc12208b238dd5232fbe4217660c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=5eaf766053cc90616e6d3037b8ebb92008d378cadc54cc8de322e1a8df50a490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=8dd44c9605035f627d25e9f97a3ab1574586dfd94428ddc2275ef3d7a6c2fdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=d096e8b3a80d397bbb68006422d7dc11a0c65b708a204d83a5e5739b949e9b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=3dac7a547fe43dac8d55b0cb97d21553de7956f2c01b5f9b60f916daf39c9069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDV5VKC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPsYRuQ5XHle3bQFtc2%2B98cxJRhZSJkQeva5nYCRPiAIgYZBNU45vNWgzid5SELj5w2AeA1unXf5LUCtlPwTYGMcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoTkkeJiCzwUAgTkyrcA7CguSP%2BfWYWsHepQFmDmScgDmVOHIWWTO7uFZIbkUR5H%2F1vMcmGwl%2FqR1vDoztTNeyTf6hzVjBf558bkNrNtpAYoy3sUcMcTM9eRQ1tCIasnWBLgbvcc5KUD270VlQAlF%2Bqd%2FBmHFjo%2Fx4yA%2FOwj7uDC6gSh60onxgnNce6g1ZMUsKOCEn0pAgOzd8h4n1xJYyDK4U0u%2FAoJE96YonQFFuAJfIVSkOLV0VdOjH33YXmk0eiyud3%2B%2F05p801qFdVaa9m%2BHYGrb%2BmTYX6rjD9aTCdwUGolkBP5qjyHI1zAd4%2BtN6AtGibnJs8B7Mnsj00fhVgsxx1ySaKYUCSh6riLyFY1dhlgfabLuEmtkeKuqdf%2Fd7j71v6OOfKeKc883bHo59%2FPEFHGC%2FGXYRPgJ7Ooqt2uNeTu98meMHc0y3Gmp%2FN8x6b%2BrwE8gS40h6RtiprMdMlTa%2FpSXfKtXLcHFqgGkwrArHng3UobMuysbnzFzfyjmpddfZpotNeZlYHDL9jaW3A60eFNkQx6P5YSVyvJvmZkARfqfJXrp6AyNxs6wyNWxCSvSZHK0BeFI0wmyN12ufmovkZcGzFtZR0fpewzFkOcqIl3rffibjTHUbC8B%2FNkrUqx164CMzi4fTJMKP90skGOqUBIaEQdZ5t%2Fxx5d0ZlKGRS9y%2FKSoCMpyaZY81iUzeghNhfZz5ganvQTxJIa5hLiNkZ2ruIoX3NJ0grru3Q4YdZMCjYCc1g5NfbvWot4miDphe3OwIKKQ7cTJC6%2B8DftD2MAfPPWJTa86A%2F3s46xm2ny4t762ydREk8Jl6rdk1ED0z0aInc5ZJE%2BQxG%2BvnesY6RFi55sVjNTniG9zq7K1mWhB1Xm4vp&X-Amz-Signature=0ed8f0d282a501c602b2826e7d9e7dba0604843b2d0e1056a7863ddae8001b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
