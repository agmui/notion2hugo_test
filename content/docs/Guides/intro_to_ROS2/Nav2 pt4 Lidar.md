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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2APCL2R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICfdRs6%2ByEZU43wBwtfUhMwDS0ICGCgHYeo2xGqJGHPdAiAnVHQ8qHWhGJ6vNhUXp03s3N3%2BBiwxL4HjpUEL0W4v1SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRtht0qgmVlmsw%2FbDKtwDZribgpss8pFHPqx2poKunyDvR4Rh9f2nlKNZ9BGBnkPcmlhuFnJdmqS0PupiBDXbvdadOCc71dV2FQiPTcYT8zeBivGhITn9NIW7S01R1FN5zFRCVOJtMX1f5luPuvex%2FZE5bPwS2JsauQIdkxyFsXjMnZcTmF8sBkhEgRwhnYgdSWzv1TQ0XMPCLRQDRvtMpForgn6b1B%2FoNixhvN8n7DHKCZs3GTqeXeZYDKuOALNHDtYvclaeURqh7YMzCFWf7d6dhnTdgy8G2BKVKbw7y7RPIAd5Tok9JyJmb68CKcS3YF6nb5IC8lqH9rCL50QKs0PHB7FYe8yvt38APDKX9QdlpBz3uaUK8nlYQ2t885YePFViwM80p5Hq2%2Fig8oxJTWw2xe0jMrgRSLLHSsNQ5WYRPWeg2jeS5n7qwxIY13Uo%2FxLlu4zcuXSwxmUCRPjRh4S1BRW7VOeXbcvsG4xmS6ZE2r0J2n1T%2FpMfV0VxvZ9LJ%2BejCSL7fX5%2Bw2PJJgI1gI45q%2FE8moIi5wUg%2BmW%2FZn9Xk2dSeCp5t4YHNLlB4Q1GEWxOhdydiGwFZJw0OI9XaXzyaO4iMDTMPN7rCN7hoX3iYWKm27WChIeGCaC%2BoLHgIoWFmKUoAIfZ4T0wzYfSxAY6pgHRCCeZpyDISATFuHUQVS9SuwvBcQ5PfKNn6yRBVecdIG%2Fg9q6leFh3QnwY3WYq0BvFiX9GKI7vBrjUQ8HckDB0hMJeiP%2FP3m9p8UbqSsz3ey8vefOB9HBfrD3oa6LGhVTGtxoC1bbDS2hrFqbQZqIhvv7PDm4mClPruggfwQTcnrVBqKoZgHriuo%2BlUVgVaGeUooOP8z3%2FshKhK7qbTBeokH6ZMgG%2B&X-Amz-Signature=a7024c13e3fe1bac44c9d2862d87c10512041a8520971e25126f54f1915261f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=5bbc8df2df9678b6f5194bfdf6fdb6861e3e29b19742f1e8ba9dd885213a89b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=2728652c58967e3cc182cf28686410b844b2502b26b6595554078751d35e8f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=523bb6e78a4cc15e874c7c4c5df2f265a50d9d0cc87d2fe22626c83406ad8911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=10a963b1d293ebcfa28359a76925af6c20cf6cd2b9165ff9ac84c4b818268401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=11d223af55ebdf821ec6f7e2539bde7b0b8313763eac0bcaa506fcb884a7f3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=52e70e70c181df0fa3446d7aee969913cffff31d741ae2377810fb7f09dfffed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=96a3169fe6d14a8471963e0307e12df662470469376d438cb9fc07612d33160a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=232b19c7c826d14659718ab3d65e56f9a6dea2fdbb2be6b0fd23bb082b93d8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=7c4303294a1cdbeee5621f9fe6038baddcf775ab704b4d8488b24f192b40e7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUAGB46%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDtYhe%2FK%2BPZm6IC9Bi0d65Pb%2FxqCd%2FxOj1VJo0aF%2B8CWAiEAzq5CxkmzKdjfERcGLSRUDuzyDP6cj4u8dQDnWU4ykhEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BBYoh990J7U34KWyrcAySrtDP4w0H1Xjs0z9XBHHC1TWS9oQqW0wo%2F%2Bt6d5dA3S%2B0iQygOhEt%2B5D5%2Bhu7e7GuLTU7boE05yABc604WKrnJMfW5BWHFydNdRHdajQylVmwLImNxILHa8c%2FGTZQ7P8NiCBpWDuh6Mrq0ZxXcBSwDD8MwvBik7N%2FPRN0TOxYAIZhf7G1159%2Fh%2BV1Whq8c6EQLvdQJh5CRSl6cPrXrWWEwlvgNuW5PKPrOaeCbGaH1IZnmede5TxUfQ55w2PrVSIW1MOeW9Oqb5nL320ubBGyt7mjahUr0qZ2XaX683qqnWvINkRxMmCBA1n4VVN52%2B6DKFBjhPtAK97GjbM%2FmMehkRXK%2FuakP2fYMyLppjYoYecNTD52Tk6yvOZVwKtUvpsskYn%2Fmpye4X2P3R5tvWePOFfeOvl13%2FEBoxKZBWxf5mgHk6WQaDC%2FfP0If9xKIp9WjKqX%2B1826S%2FxFjUQAr7pcxMMuvljaJ7%2Fm2Og16KFJbKWEDG8FyQsfOPqrPbEolc5XpLrSFGKfHsjvPRYm3k%2FRUc7K1n3j1Q4iv22Xb38ZbobXkPybMuYJqJe%2FYUYb%2FXAsUqZoBStIcjq8joWyLyCQvu%2BORN7%2B7M%2BCoSgp2iCxqFlmbosZ355wueRAMMSI0sQGOqUBMJwIzBQ6GD28q6KrLvohxAFFg2%2FmN0pjF%2BhWdQu9r214OhcUG1XfCPH9B6M1VW7MfG1GklaVc1vOUIAECsF0RSAkLmua99EDxCo%2Bf3tqNb6C1dEybR1p9wZFw%2BBl00rBJixkZMe8CFXirNTaTDMwgSPVdZnDf7pQM7FXM46M0o%2Futu%2BA65Yt6nB77VWeER2pULI%2BJPNMLFiIb2lFXZjTTnYc%2BK6x&X-Amz-Signature=da02046c01e80c5ee14139c23fab4fd2254da7627594c1bab6ac517cb6f0bfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
