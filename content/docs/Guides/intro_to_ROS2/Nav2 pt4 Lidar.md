---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ3JIIQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKtA6vxt2zzhcuLH1UXm5CMG43SIEy9A8sYYZveSpWVAiEAujS%2BCQyPWW%2BbgbPusGl2UfOtdDkDxK5%2BFx9R%2F7GBWzMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEKQptky1VmOyMfcuyrcA0fKTyQCFIXETS3pYR8UkzqzQILB3UtRWDtUSVTZ61ChQipKkTn7xVwxHvIXFWuX9dDXzNBkaR5cQ5vbbb%2FFNAKbqwp1wRjtMYmJvQMCLsGrC1nIuEhrvznkF0f3ERmbcVkrMwPspQHk87p06wlonL7y6RAwTM1khuS6j1iPyTOrHIAyhfioHy%2F206a9v5vFYeht3%2B7yh2s7Hw5T5ubgq59RiZymq77FoUlEQk68QV5nyjqB5OezqhyxsEc%2FYLTVR3hGQ5ryIeCzShFOdwTT0BVv6RHsxa%2Fsjvf99cGMlkhVxEkOgUZ0K9Dishf9ahhetgidNHTdnAXEeykpavIYjameZUYwQ3HLbLIRko6L862jfN%2FtWu0Jlx%2BX8Ss3Dr4fWTTtCxcXkb7OwWoTXUrqrCOaeSxy5Yyp1TExIoU0rVP8E%2BkVdaB0HFoAoF5ayzDx5iMAum5nl%2BNC8FdLfrynrXlsaGOqThnr2OVni%2BtHnVM5cq%2BPVPhw%2BdhkvaBo8KMK1%2BMnDUOEN9jFIgTiblLnVz0BwSxw3Zz5ou%2ByzxIDYf4VnvTvrl6spznqDcDw14LhYdoKLBQ5Nn9bnKF36nB8xJOozeJ7S4mmEcBphbz3sT0G9TwFUrtIQQgn3D9%2FMIjCvMQGOqUBI1F7kUnOnQqUi4%2Bta526dg%2F0k6Avv98WvzIhJETWbfhKWFm6Q44GwmYgBfw2Vr4QtSVdKC2vvw%2Bft9MJvXNvGDnOrB2v0miUsqd2P%2F7GP1%2BDYBPzS54m1sebBc9ko7gl%2ByKgEs9dRy%2BvpBwQ5IB2caq97MQBWhIgmK9oLjBY9MJME4lCoLSLF0midFXt3vRctwLE09%2FSrPee3sboKwL9TRh5gKoo&X-Amz-Signature=42c43b2f999e727140e7c3de940f0d43a1f6d9b564bcdf80ac283432e8c6fbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=8436b509e38e526d36bbe6794e444d32e233c7f8ab6a2d5b9a8b08ea452d42c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=af7426cf529daaff2f43dffdd7edb2e8c74a28d87a35f965cdf59f25975a83a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=65b59488b6c48dadbdd2aa61c2475096e0b7d1eac4acd72c4ab24c96f76545ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=db9d84a61440319ac0fad00cf7485c3ea5d5f98e637369730f78bdb97657f54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=37b0b480c319b57e5bfc031959c1365536f551a02d15611887cb849b4e2adeac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=2c8cfa3867e104fdb745b3216e71517dc49c951edf8b070f747f7500b48334ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=1318fa0ec95276c44e760cc5f8aa51ac35c78051620b7d71b37a1be6cc8d770d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=a30dfa09a92c667062b5ed781100e18d3bad658af31abec0114fa2b5a3795578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=b346c956d643f73774423e7002b164414fbc7143b449c60be81cc9651d18d1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCY47HK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEznsvEt8thou93GBwprlG8xCxgyVujjIBE8CoZiXnqhAiBnOmfUEuYni%2FpL6T6K8llHZ10coq1mS27CLcdyyNntOir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMkEV4suKUKP24YIjEKtwDsUH2YshbcR8P99kEIexvaqR%2BKio1gX4PZGcgyqhs1e3jf3%2FApWyLep%2FaAiL3Ztn%2F8gqiEaSYJLVNRnMA5MHQ8Qm8ezb%2BDI2%2FtIE%2F8Uwehs0MGZNq4dC%2Fi1M%2BMqwcMhaPUmeSs8LQ4WsCEwAxrsFyyoX%2FBkkNCT3so2IGZmnoJtmtIEwndK1wS5iQkX49jFeKnbd8wJGKf3WSBTvIhYyu9NRLt1S5k9G1fc37R%2FNULSqZN5uZNgi8YZa0RtsHLyvnENFcwyzgrMvY5Mjk18Yicirzrgs%2F6YkSBvk4LDfEqVqrVK0fmoS3MaJs4LSCml3o7LSdkkObXdrPtch2K81IhfhfT8zLvWXL%2FF%2Fm1E5rK6Ypjgn4J6HQaumwUrELCZz6RDjFDWS94mNzjO%2Fb%2Fe3yAKA9v48ZY34bqEY1pBNLDvQq1h%2BuEq8gHaz46r4gRIhClJPG1pnPEO6PDO3sgJHm%2FK9hN7fKpXOz9GDQc4T%2BSwRooUkG8ES38Q69yQch9GrlhvJRmCjFpmEz3dnC%2BwQzsQJhmR09P2%2FDaE%2BVJPe%2BFRI6WYUA1SpgiWQLnku%2BUXTXanMyKwzqI2UVQvSBwKH9F4gtOdumEpE4osfLuxLV8y8j9kL6UBfdHMimMZYw4b%2B8xAY6pgGT5VmTgCuSdxj8i01U5pDfFu9O2mElcYaGUEkNngC3djmD26Cf2ddYF7qwEuoNVlED%2FeEfbJSvtYSpA53RM2XOdxt%2F6B%2Bv1Mx9r2RakpiSuH5p2eMgX9%2BjF%2BZuwL0EIiyom984ZastUxXYyK0NqmAKVdz167zXMuDs82hru2we3NThhCcOsUYMczOTXUKcHVZQAKAJ5qV97iQAxXV6lte1t%2FkXsEOR&X-Amz-Signature=db9d84a61440319ac0fad00cf7485c3ea5d5f98e637369730f78bdb97657f54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
