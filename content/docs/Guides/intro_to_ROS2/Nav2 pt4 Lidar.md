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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UR35Z4P%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCv69RIArGZk45win0LXnLrmJVzzfsm3E6P4hOZrusmTAIgeU27twDIRxwuPSbmIC2O9F14VEZVMvQlcNfom8dwSMgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFmlM28kNjRvy4EwdyrcA6IB5O7yeBqHvLJbIhxTC626%2Fsudxm8LwA%2FIJh%2Bkl9zSXkH6zCK6vrYBXB3DAECUS10eUDwa0Uld9PRg%2BB9cEFct0duIbBlndh0LUvpl12wLQquUEtYb784a2akeZzoHn4pn517eY%2BVdOLLMlWksel5xwL5xkKuEIsR%2FdWc3RnS3Oo1X8hvibZUuQIzTwa1C%2FfsFerPfAIguSskSGcMr4%2B%2FJMaVaEnTU0fll%2BsiycLiEZEncbp%2FBtepd%2FE%2F6109ejTfm6OCsIdA2oDh%2FgU2A35%2F0Gxv0KWYvUCFUsHdK8CVh8e2GMzfVjXoTHAspPPW%2BE%2FUviMPD87raz0OXeBXrPimiwsdsbI0EW%2F%2BouaHvS6cc6UmF%2BgsnbuCBzhnLuhKnFO5TW9qLGtpL9Vtk2CqY4G0QP54mBVHyrZItNmbBBTw4F5XP2WPEkzhugkeO00bodbbLn25MkFfxjBRIg%2FSrUGsX0eJqNt2JNzab7Pon2sNOsoVqXpVSJ2lMOjzPWO1z2opW0X2zmsX%2BEL88%2BEl5ppjqTm4fTS63MW45Lgws66qjB5yKUd1xPGB7hoBxw37auyoowUW65pfW4%2BhnUxDe%2FBTtipweYkV8G358d%2FZ%2BwQCZP6S6M7l5hXXAhVLTMO7PzMQGOqUBkGjcDad0zs1okUGYGHqfdBmVMHOq1U7%2FDG0W6U%2Fr075pSz43haGgNhmKh%2BZi4jid2IXUEzOxKsDnRCZ4dWFAxyzGOuRAL13C2JZ3%2FVCpr%2BgCYHjtMHiLeg%2BA3ruemYrsM7xXkCTMLYWaHCt1KUl6JIGNk%2Bry1ttHRRuNF6%2BaMSKhyjCSfqGo12ZVkFUlmMfjKCcGoIwu3Hug44pZ9wtwKIq%2FAJnv&X-Amz-Signature=176611d7dae02715ee27a70eb121fb6548f135882e61598dce51567aa22c3493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=8bb1b574fc004c41874b31f23c7780575b4e3e3134d4b3253e0cfce10fb5049a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=1323acb80d3cb94e6888dca409eb34edbd7233e3aaf033b864192fce9cf00017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=c03acade95fd0a90cb5f5bf8afd041d30b528af91081c5d5c8e1a9cf4a50c7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=aff123c76dcde1f5e71488f1aa75c9ee7c6ea9da94b1d118b319b4ad4bfd2f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=e899b91ce13a61eed140eaead2ff5cdc13d7e5a1144c0de76f56a1c2f6f8d0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=05e581de683476ed1eafcc09e39bdaa14e51ca54429e71633e84a3aabe9d507d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=9966076f84638f8a037b3ba33c890d78fe40a489dd1ef336a88323a188f0ced7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=4a73724325371ff50cd35e133154abfdb2f81958087298d2b9697ea1f1b7cc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=a50c29d6253adc651074f83b07a85b82c7ad228bc94310ef8e65779deac037de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y757QLV4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC1M4ASauC2PCXWJU%2BTcGM81Rq9s6pGtc1%2BhxCBmLZ9zQIhAIDNlOO%2BdDz%2BAQQc5UnKM82271l6OWUsScC2Rs4L1Y8rKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2B%2B2wIMmF5N8iZDNcq3APyGpEtlDcJlA1n3IrMjVzexmJWOchnMCJVLFmhi8pHb%2FFu4G8QpwiGtZAuOlsR6kW5o2%2BoTZw2%2B%2BaEr9fcdz%2BEzObSyJzEyuUKTEuCQp8GU8xPOPOiV9wQH2%2BFqYTt79vR7bs27vUyWDpLz%2Fxy1ToMW%2BvDAA79QYSCM3Ee38TVPOv5A8gVODKlZDHaxIvXbJ8n6MD%2BTZcBmiCS%2B%2F67PEVVEuWG9rq8nrIdsEaTdDYyb20BEC%2BlTHjsxqwmAvS3PFxgjZlwX99lpWcSqS0YQSzoIiSKPo8j7V%2FmC2TS2GMv83mCwCxnHRxqP5VDL8wz%2F4T3IzgV7GPSuCfKZo3XAPNuH1eXcMHjDUttf%2BBtE3uCwj4Ciu2HHBf9%2FvSzs4Bhp3mXMggwke7xs4w4xHv8jcOOxwroguvnda6JK1AgCTGSIg2R47gVrxdow5KKPbwgX7erqaTjTbOJo96EItLRlCxd%2FmneysuI%2BPJyDkjle%2BGJyaX%2FYe%2FZg5mG4ftSs7WrdEcmmVME3VyoosOuBbFM1Btb0bdEYOEhUFThdRB0FatFsQOcCmgpwW9u57Af%2FPmN9%2B4CTEwy0ANHRjej4snBH503MSUC8wLldtwSkOlMjFvyFRwLw9eJ%2FnfBZDxKPTCB0MzEBjqkAY14pqDqGWaSM4sCj6jzGDan%2B1eR6kiVGdVZ96CqmWJNwlKdNattMlhvr9mKE5c4JOFAtWENej%2Fb3H4R4R%2BoKfC%2BI2UaYT9pmlbwBW9W8no%2BRpFYUwVU13Cb4FcVbV8Pj%2FwM%2B31fajW2fQbrItSUADRb9Kcpq9Oim%2FvnchFa8qXf3gzZGd8kdTNNVMd9gp%2FN5Z2KecLnZohJ0RyyZp1ulG6temJg&X-Amz-Signature=aff123c76dcde1f5e71488f1aa75c9ee7c6ea9da94b1d118b319b4ad4bfd2f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
