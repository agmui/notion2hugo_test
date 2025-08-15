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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRS6OXK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCJADV1tb75XTet7SgeB8zvAzq%2Bq7ftNpryhPjf29Q4KwIhAIf8mNGlppwXszFPDonMtw85j%2BOKSGbJgEoRtSwJXWZBKv8DCFMQABoMNjM3NDIzMTgzODA1IgzxNL8r9kUZ2CWqL%2BEq3ANZMpizrZ%2BeZB7PsD46ba88RYrMkSCoHyKj%2FhhBFB%2FUhhp4fdcElNbGzQdNH61w3SYzbmGh8MTZ6WHTPTe3qs%2FbzZTRbCN9RNwJrVWG9p2InzM3KG%2B0BHU4hlFcvwRToJbb1AGHq2LqAcgwCUIGHOtV%2BjjcLNyldY2THX7bU8%2Fy7GQADi3lSzXrd%2BUU961kofzdvjS65ZggSiVgxg9GBtTkaelp7%2FNTWXThVzvo6P3Ri5egfRiaSt0%2Fqp%2Fr8y8ZAkWdlOwL%2FXjeVweJ29wMI8LSUEBdhZkfTSyQIaezSK6wxxrVSED%2FX7luuUAv%2Fwmnpjyp15jy9Kyh0L7PYW%2BCV3YtCI8%2B03RIlxyUbB0xXQgZZQIhSNQImZKzyaVStarDeqOV2J88dYikv9N%2FkAeFZ0ohYhQCe5oUNDIUmKzNbDRk2UWP8zKVq8iylFJR%2Fm8ED772mdPufEao5Ud6KnMWUihFetwBA2gqKI7I4%2BbLOESumqWpXTAcm6vAMFHmYdVGAr6sehzxBgfVlI%2FNgmqsVp4LJnOoAjiUOa1tezVNZ9ZL6eXqKI9ukl0rfh3Vg0Ib87ZwVPCvtaHIHo3FTrBei%2FUjVAHrUbNOdaj%2Fb%2BAG7Khu%2FfZ3NTdSd%2B2TdDUTdDCBo%2FrEBjqkAVxVwknALnyL73eIYgn3AqYhJdIFdSidPkt8vkxK15F2cX%2FLNUWEtK%2FmSLm%2BpMdt%2BEF7xFOEwvHrV1MEYmh6Mza6dSzEnttpgLlHkNjQw7utEQtnB6yg%2BAlljM8%2B%2BO0Nmfp2lJWhZ4TjazLNkCW6Ki6FmaVF2uVwVR4tIul2F6axBTJXL1cbjDsws%2BZxWmABltUi2jfQ6BKBJcxIo59VhDsl%2F2p8&X-Amz-Signature=0a3ef95011222a0d03fd70ad59c1507b54804b8792d7926e6594c854347fa0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=b226e9da00534b5690cf078812cb36052588ed0c2a2fe8508f380461ec23afe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=e8ec6c7ab8215a2c2538362ba33f750365c37309b5e9f400acf20ad556f42a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=bd6041196b06cc7fea52439b885bb7a2e7775db2a8fb5d50978abd0173581edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=347fdad6b702f66a47c2cd6569c36216b6a9d91076d4e1e6950cdb795ed751c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=77e3fe49d7ea575a4ae099eb440a7b1a14fca321aed6a49a43b0536db8708360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=72a922602cb668aec284210b7df0b455ca080d5753858e95d689fd1316be03fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=074a7ae64ca9475c20ca6fef5dbff7b66dce7d333e0647ddcb4b57374e5741cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=425d0c9dd03a278916c27254594eb51c4fc63db46063c579a06d301dd0f461ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=6395d6d7befc009d53dd9cba477ebfa072f7bd9adad629bfe2674834db2ed04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFC6EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBlbgRVwJ05XEvIpUolRuExuN44itFwMlWTtD1JrexH1AiAPTGa%2B0SDMEtl89tpO7ZvUafhFN2s0Y5EWFKA0Qx%2BvEir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMp5od1%2FEdIvQDHervKtwD3LmS4ic67%2Fshk05OSLGKY5w4d%2BADldKxrq5kL6ERiSe%2FJj0A8eT%2F%2FrF%2BdyBQGO9KSZxgG7QjVbPjacXejpiO7mUOEEjUxTTXc45mj7%2BZfhchxSaH9bgA0OEPLUF72c9VoP0unF%2BptfF0vTeb2KeD8FBXH1Xs12B1Elet3ELaTnOMHwnbpkbSiM4GMc%2B9DKChUXkjk%2FJFxED4zTNzhiu6j%2Bk7Mj5eUjh%2F%2F9Lh2NqoZkwMk0zUi%2BuPIZ%2BwVLlj5gwV7VCAB5%2FxmQ38%2FcyGNe%2B8tcDvJENWbjjkReuHKzvTXXXXF5NayAvyhbz8UclTiLVVBRluzXTwDrfQihZRzAVDVXpKl3gcTg237I7IJJRmlIwkilHzZ%2FhHCnCxweiXaVV77xOPWfjSCzftdNuW%2FlahoYsFwURcfGJG%2BSiag1N%2BBvOAwrglNooCcGCJtVciMAkk3ZvcNZBYmoz6onXXAFeax54e0Ja4zLHjxyR8Ts9zOZV5Q%2FjhVnxC8sCqa6W0pSyMY2%2BzPwz4o6ZMUmrPd2SPOV5xNsISCXzYQV22weau7S3px%2BFjZCMqjQ7Xxfeah6H6emiAYAKZU10iotJiY4vI7YV%2F%2Fwk07zJ4th1QalZXtdoq8e5HsprsdIgtACYw2qP6xAY6pgEdv9SYckH8ru5CcywtGYlRbdHggP0kuZnSJYMuEXVUY%2BdJdMtUEy4SbmzFzEG%2BenEvM%2FEEXVAwbNEVF3yeAPAaoLCvmQakFzd7FDIDeTsrdLO1DHZbpjfFAz6BvhnBSakjsxxV8PkTNXQXbf22Re3nokS%2FqeKQ3CVaXfuV34Z%2BieyIDmjZ2NQHggJOhCVEfv0N4pn6G9D4o1gcobRkonbwlNZZuOR%2B&X-Amz-Signature=347fdad6b702f66a47c2cd6569c36216b6a9d91076d4e1e6950cdb795ed751c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
