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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL67NJFJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8sVuumIqzTnn4DYnShuPhoXuWjLLUYo0GPJYlXqVA2AIhAN15aYZySehb0yZyrDTS73F7q%2F2tCeWw4kP3rF2e3a1lKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3KZdh%2BHp8DFfJ3GIq3APvlR57Fp5rvwZXkiX5yYpeEv6Rbf2IfDfupBzyzvkO9tCffFRJqKPJXWoE4Q%2FxmbKtH3PUhAqX6hGwU%2FhAEIVWmXzcdPXaO0ndcw%2BiMu75K1WR4AZ8FKNg2RQLxSHqYbl2JLSjBAuTCPDTZwE3FZ4k3pLdq%2FjaJCsQCJaZ5FVmeiCmUmFUX%2BgEQO48W2PiCAGlfgt6cUoZ6tXKANgC0FufP7ib5uyxRxGphcaFEJBPoGzL2D3xk17NUXq5XjEMie9UNS%2BLoVvWuAH0GarUDNtYRjDCZ0uaZnRWxsqrgvx2knxuoJeL2wJuqNQ2Gyg4qd6gWoh2yFJ%2FaJKJO2Z6OUCyzZ%2FrzQadhS2%2Bp6fi6%2Bg5VOfCiP6goVr30TuxSdwMmBInGW7QfQywMz5B1EkR1Xim1rbJoz7Fy2nYXfcPq04qKopIy%2FO0Dmd2exd14P6e9dNsRtnFR3Yjp1cireDizpQn4ehzn%2F4li57dDJPpsD%2FUTgUVMufWTAZkRV3NEwgkRrKAm%2FmTH7ncgFNEk%2Fo%2FxHCF0TvXjLH0P0OXqq94Pt%2BP1N1QGkPcogWyh5neEr%2BT1gpgQBLcGXifHLpgdkCUK3PtnG%2BYQ0B62XFaweMjWUbdvzItjnOYY9kbKgVD8TDb0fDEBjqkAZKmel4u4byv8kJ7U2Q3ZvGuaYlH5la3TF47N3Ry9PQoY56kGEbpOambALESTrvC7dVUnQKKAXNTTC%2BwSpqYi7lyraUXyKPFAEjYmJhvHIEFIwVtFxQL5CKjUn5QZxcwXLyGU1acUL%2Fs%2Fl1WpdTkMn%2BLyNF5wbONsoxj65fcyO8P3LlLr9Edgx2pOcnpExR21Ktc2xkbxJrEfmFpnpxnwRLtTBAa&X-Amz-Signature=b8fd17e992d6d3b30e553bc0d9294e5f147920f597899b678883f2fca37bce23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=5e73e44860dbf8f9c60771c0a356b15ef08491dc7095ecd88c5ff47bd3980855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=3dd79a420e9aeb17a4babcdb449392ddb2b5333bd932ea5d37485d62fdbb53c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=774be79acfc3dc24da0d7e62b5c7c26f3f3e277fe3b8fe3f53a7d1abae10003b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=0fc2d409472f08f5bf233450369fec6ddaf8039a9e0cce7c4180cea8d71ccd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=b17618e6a7364ebdebaa3f21bcf88c35c2144391d8ea28db3da283f4823788f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=1245350bfb0263946691f2368196fe725f54db953359514003cb5879778cebe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=cc7ed98f75071fd2506da02aa56f245a596313bc1dde0661ad9c163ab967adf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=df7e4818cfd0dafea2df720cc7fddbd66eb3d88fdbf288bfbe598ec2e2d6e55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=364e0c2dd4c44ff8bc3d44c93eb3f2270775df09904d32d43b6dbffc4e51921c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734GM3W2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7hPVqGrKpg3Z%2BemttCPxSFxCRI8n95E7wa6NLs2JO1gIgH%2BxX9wOoI%2B9hVcVob9mPr3bP1Lr41LdY%2BVTwQzeuHugq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMRTm8gCC827E38tfyrcA1Xwst4pWQPQdsdNZLU0dfOYj95LByfAv4%2BFJ%2BEOAKz5c%2Ftd7cj2ew8aEx7UEdX78GiaVtl3U%2FyEN2cLQs05UJf39SqdxK8NdJEa8mSlF0jIxaf4AdkdsLTsbNyNhjmr6Rg3i5jOZh9W90pkiXg06P060sqlVdx1hm0gBLoyOLeYIpVIa%2BdSfL9vv%2BYlC1ohnxQmGBbDWZTmLPBFre7cLnK%2FVJGqgd9OQO67451jmJ1x3RKorAG2pv7kHU%2FknuUi1wIKDBzZ2G9nFLwdBJNEGvAiwBoJoKQPKzgyW3zNvDU87nFqsWxhcWOUKhwHONhF7APkfhX8%2FKFzNiD03nwiXtQMQt4y9XYGblE5u3sEESmWfxwzY%2FDraYGp6%2FwvPmoCLbMuZgXQiSinDWmJJIsfkPhfkDiG0VByjqnZN7H8ZIAigpUnAWKEoul%2FWctbn83uiPmQyaD9so5iVJBMYFNJfXlPPD5Nzk%2FOBPOdJXdyBxW3cSbfAXImc9lEisiKkMDpPYedV5%2B4X09y4zq23pRQPG8KiApMCAbp2VVaQ1O8pra6grPxdP%2FpPEJ0qifdn0dqzUbjLDojm%2BeYSofcAXF4wiFOzk0XKSxyG0zgJlc7fUIN1%2BanzO2RNV37ukRSMMLQ8MQGOqUBMydQUWX%2FuLZBRvmZgLQV3SaHdwd46ZCnd1Pb3VHlWU9ZGDD92BOy8IQR%2Fm%2BQePgQhDcqf8eORUu3r36ZuCIveTMnyaD18js8FR2N7PJD0qa5h6okEpLqEC1ZRLnc%2FYc8PEV3xhjq6k%2BQjuxRdqyFU7XyxVfajcod7mRcXRK%2BsyMse2VxhvLwQwrtOrOpZVc8SDqi6qCBCw1oAlepRUg06uaVD3VQ&X-Amz-Signature=0fc2d409472f08f5bf233450369fec6ddaf8039a9e0cce7c4180cea8d71ccd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
