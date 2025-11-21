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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BGSRE%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCID8Zdp0jxfmQETqUGmvHIKMwsOuaO7fIbEYyAF5EO7yhAiEA%2BxhmViCoGNFaJHiVfJ7METh6nsFqDvyGTlCQx%2BtuFNUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJHvDmyM%2BOcZxax%2FEyrcA1PGvwveTUTkWQalVhjAJwl0jW%2BukB0FEdh%2BoZy2Qmj0LWDHKtUe81BimkpAK7yzKrYKKQLptmBySmBibBIZIsPTvY0Q8zrdxzKOVD%2FyQdDY%2F2qnOIcNeDeo65ycww81LwmZX7l2pW4UmhfSo%2BRejFxgBp%2F33inU9ToJwFKDm389vUTwqtJJscNWq20o8x7H4pwD63iPKBB45R%2FoXw9W5StdWDauvzkaM5f3Raw6HUrjaUUvIdJ5Eqbvs6Ocf%2FJQvwjE6rZ6mN5UPUiJ2xXmeOMAF3yQncXvWIqcERn%2Fp1i12VE6qtST9YzcbtKpCrKQznGHlaMnuNcOX%2FeioJZKTlLxhnuzVTt%2FZB0anQAHC78F2N352zRjw5rVA2dC0kXpFObfFaMt35%2BM7WM59ZTzLMgFeEW58YZp5U0C%2Fyw5cxQNOoECEcvhy8H425ZrQurUNgKT8TI9Z3ud%2BsEzeMdc%2BzwxuqwgjvBlGjxCZQuV8Yn2rQGCnS%2BbmYM%2Fza%2F%2BW5qbadcloeEfIwndwhcPqgjs6bmDd%2BkAFk2VJ82YmYkovDk2vwHtbkIoJ9J60WNT9vEl5NOFYv%2BDWGHaZhLnEc9uY%2FWgZ2etLz6MXV4az%2FP8llgO1jAMgM5S8P%2BAk6bjMI%2BB%2F8gGOqUBVFs6L7h7ZL5p7YsirQRrZXg6M5ZNdyLwG4W51NPAzp6MUTscU6zDjuPx9YdcM4O0%2BI161O4pkEOQ9yGPAQcUhywyLYbaE0W1BclJyW0tEooY8%2BGZvPKKCY6j4%2Bm8mZeyYXYePBgtuxZU%2FhJdy9Fw2FNf7qsq4KYQzN9KSAst0TSXRSIZT2M6FkUSFbo12lMTONWyUgVk2SjV%2BgXO0A44YxN%2FUCHV&X-Amz-Signature=6aec40a5315403cc1635de6221fb131cb8ade847e23eb17b46e33d5c38117f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=cda92dd3c186014132d9d4ad368034b1c1a29050b3501ef07aa08910f3f890f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=13a293f041f385eca40e78a52ac62fd36266811e2675a7cf8140d8dc7f1035fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=d6e2abc34fefdcbefa7578f564f36a3ab4a8931896c2a70b70398628916472c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=9487a9347e5d25b2c8c5ef61ee1d79862a7f77a6d1c5b2e312bdb1cc0b1d758e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=7277c92c8ba6e520a095968d6c7ac4f7b00dcc2fefa44e011da41655a66dd8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=67a604e6e631f189dcfb0bfd41228b9149aa9e327a056ed00c254048a6539146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=1e4342588186576873b0ee4bdcc784fb8be17f9cf9ac39040d2546e4929be2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=5abdd4d9d164bb50422ab051a3d1276e41de284d865fa9988f08bf317a523c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=0ec690eae786495b7551969ac3744bedf5df35991a6adeb01bd90eb900875bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW27OAM%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGU%2FF%2BEKAeC7oQTGVp94SW19C6isBXQtpRBb%2BrrojmDbAiEAkWIAvXfv1bEJvUgMWkkn8Dxb%2FShHqt0y6SVK35ibGvIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ1HCwYUVlF5KBhh0SrcA5y7bok9QMBOauNfU7ySgMB91wT%2BetpgCIcsG6aqFaTfkAMK%2BE5PPTSGUQW9aGL7AHVHNtgDp7fMAf4ICyKTPzY2Bji7GR1zKIpVlQhrGsSZmHNHIjsJUfvEbzqbLOXC8alP%2FZmkYRd1K9H2druv9rsijzzp3wQsPhBqfel2o98F6SG%2FxGrTF9CSon%2FwfybqyIgQeaLJ0A99ROVQDx87CxAoQZllfM47hyVp%2FvRlOcqeO%2BmBK81DpTIhnOmnpHjYEJPLdP4CQlk2Hx3%2BtZVoVqqJCfrF%2FSWjTdOK2voBO%2BOAHLRPbSPoXpaViWTbpIBG8ofJp0ZoNvGJYqW6a2RvVFmWjDlBEojtRJQYShjN4VVtxyP7%2FE8cLw40vGP9ROXZB92lRBBTq%2FFfSO7UJBuuiA%2BKpNdxS3dsqAr053Gi%2Fe20fklwuxV1xrK8fjg59sljgqR%2Bpk3aoMd83%2BNKg0TTeSncGEdQr%2FupvgZBEh4xYjk00jrxBdCrzIlCupXVEfZS53UXukNFqrxjgYrOMeZHWeXfVWk1gKgMOQ63Otz6dTVPRLMZ3lKxc3tbHrnKL4nFqoHW6IKYzjfjze8vwf5JWy4kKSI7FRNLmYN1tfDR%2B46Sm03Ju0VvDHe8yoCLMMqB%2F8gGOqUBTZlMBX72%2BvrldLjReWIy7vxKcfgT7QjcPtfmo9CF3Gu6WplAilT%2BAICCAz2wzjvaj80Qvhbrh4Ts3NzizsmgAgVgBM1%2FHIHT%2Bh8VG5qbj0JZfGqz2QleOgnANq1%2BWncRYMvtI7MQlQHpJAUL32mFKVc4VDGK74h8qRuquMs8DJGmqgdARGrDUaMgFCtZz2rU4R50VxtaQIpolvobTdLIZO%2F1xSe7&X-Amz-Signature=9487a9347e5d25b2c8c5ef61ee1d79862a7f77a6d1c5b2e312bdb1cc0b1d758e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
