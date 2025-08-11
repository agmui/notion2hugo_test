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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6AHKWX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70QqPo3Om5auz21oMru4QDJsyNrhAQjjB9mv2bqLHtAiEAk47ey0OVHqFUW6Anfhf4GzmZwOCdBOkUkoR4CwGWzc8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDI43mhZMISZ%2FZVVSrcA4U8cy6dqP4L4QZGLfXDnCh0sGRMrOaqOuOFaT2m5Ng6DbNrxBCLe%2BxDI2qRN8rqWkb7Zh8yOY%2Fot8S%2F5lQ%2B2jVMbAXMjV9ThXdDwkRtkaNwoMkm2VQh3EfPNUmH6ZozyvcCdlFLinaSpmYKaYTQI%2BugunugzUdrlMvwC8iC88j6mmkrGtpmhxX3FUJ4kiXBbtOfYVQ5XsBy0lpinvJCojEoRtr%2B90Az%2BOKr7%2FcrhEzxuldPr1%2Fcxzq5oPbneA22BFi7Wi3Y1pH8KOzM2bSaC9U3mpgxLMTTcLD0ifftygLnkDHRnRqo2CZo8zdTI%2FbcKVGNC48QHg%2BcsAg%2FEVKJagP4GXzpCIfvEOZgUNYx79q9cEr%2FtoIfpeaLs2zYMeyw9jSQyYHyCQH%2FK6VlVZCP6flPCloacW%2FphuPC833eAzoVbNpVUFRPnG138jScxrvOv%2Fd1%2BqHKWkYYvWXxw38RgBfoo%2BIJG2jhvaTpV%2BrCuOY1KQIN8U4H79qLuTTLT4INQw7tuuZ4If5EUgd2c0aTj%2Bo68amNcMLMSebNfNsOporAhiMhS98%2F46KpJ%2BrEyiIfQAoASjNOGn55%2FWM5pJcCTQGFKkLTpIAtJuc1uEwRPLwsfLRN3k8NseyMwMV4MIad5cQGOqUBet1fn%2F%2FmxqGHG1009VfP%2BemAjayWXO7mTJoNKQVIQu5BUz2M18kw9uUuNuo8Cw6tXJtPz4rBmB4wD3M3a6MWt2MXtW0L8zaNyGlBfOOk5HFqDcahMoRKPAXEWbCusx1K1k2CTLaQJRLgdQl4%2BYLJyBVcG3lImA3sj51%2BSF5AEgBAlBtWdMQtt8xiVtgnZJXB9zox1S%2Bl4v%2FZ93eBowUOZey3d3Y3&X-Amz-Signature=8aed447fb1670a62445108dfd67f62f684441f8ee2efb1e05268aad74b4ba2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=2cfeffed3325fb190c8add74d37784791fc44fead2a61aee5dc380067b07dcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=726db5a91e18bc24c4336c7cf8373b75d288341845de818b16229fe8b4f1dd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=b8cf843f5ace253c2d6a98f687bca12f043c54058103c35ebc906f43a624d90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=d0ed01713938bc525ccc629c570b96e71a80c693bd248f9f271ed1868490e5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=8f7bbad41ec68f8c94f4e97c66e682d829c688fdcea3d5625d28b66be75f89a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=23c6a7990b166c7ee80f991fe9cb5c9db97c213917e8a150326aacbba5c7df8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=de0cdfb21cbb2f6efe8970ce8726e95ab8957e0889b0e4268a68017a4534e0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=1ed107cdb1209ee89544b149340cc7a0f56938f8f05d311d12da56b2bb730515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=ebad633723016acd7b6f050186379565fc9c779a0c27aba0a632cd6fec45a982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5IILVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i8cY%2B9%2BU%2BieeFh2FZEYRY2N3PV8bGsQjNxkqwen8SAIgTMYzQjsqL1mbBZWbQ%2Bvpj9vD241Ei%2B9ch%2BZ6ldMmnFIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONmX0f58vijynP6sSrcA5QvGR5LHjueV7MSZwVL%2BUkucuyXLj%2FhYI7%2FGtMlCx0TwT0N09c8SShPsBmH1RONUsxri29N41e2KxCCZWaWGboDU6s0Bdm6bd%2F%2BMRToXRu1wjmDIZOHgpJBaqi%2BNglJjpVFSjjVVJ43koavxWQI93yiNB%2FokSOi9gTZMzyXxXx3R5udgnrvhJgxuL9tm5DfldEOPn%2Fd8gUCF9%2BWN4QTNG4IFRainHVhxGE1CXPphVdpRNAmB28VUS3SmjC1O1%2BhjjRiXZHG6iFzY6h2jKxv2aHT1QCnS9vujti8Mj0%2BQ1%2BPlQJbwQE1cDN8sUpWcNnPSLkGpJHbRSKboUapcKiA4%2BGTdM75ZB3dGSayceB74oWkCLgUoTSvjOdnOPrbPuonHrCVYPCFWDuJdltKzJEM2RUNoCJymUvfGkCV4mn9O9coETdCS5xmB0rsm59gGLz9j%2BA4QbxpBzMNMenE8cLqvLqq8Ii3ewLbbaErnYUwy3uuSD0nK6JW2LnxaLPFoKE6XHjrhBWoBPA0K5k0kOLTJTkwCfuVftI9Eg196O68cOD4Ju1tMYR3UR%2B9ERREQfQF49DTcwFkwO5k71sRzmSXuAJU07w%2BfIiF33CSvlRcXKqeMZfgD5%2FY6N%2BmR%2F%2BJMKKd5cQGOqUBHmQzX3YZY8thGne%2FJtTaQhq%2BMD4fRfNlDn%2FlDR9I4qGwDMXYqzV3B%2F7wdvthLtRs0UNjuREaHuCuQR73ayP%2FHc2NNnikLxQEeJXCL2nXPkoTaCQSEbtti9RMGSwStoTT2N0JcMXq5l2epqYPCkirJF6ylf9yBN0P0mak%2FBWrLAS1uDwxHmgFnXCC0AVFuMm2TkmiXS%2BoYOoGDSuwa3W3pvZF6f2o&X-Amz-Signature=b983cf4891c2e6cc83e4805ad3e14df6e2ad08f064f3a18d23a07082a93b44ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
