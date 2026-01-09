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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URK3BXVP%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9i1ug1cMxdxmBy5FI%2BCfYAokvb0urP4TI9HpAVtDKgIhAM9fF6nSNF3rPvTSDcFhwzbHax%2BTNfX3Wa9d3St%2FT8uRKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg4OigWbz91QPEbrcq3AP2OC7TvoamE3FdK46GaK86dj1aDYA21F5Xydz4%2Fpmmx2js7rS3CBH1JXMTnL2LdsFsv7AWQKiT%2FchieXHqIYqL%2Bo%2F4m2dXV4IQbXvTxPVS6XwOWih4%2BiaNzXx95webnPyPB5hbqo2ubAdkLaTSXiRk5c46WL6x%2FaLYi%2BKEoPTSNc4m%2B6FWqUaR1I%2Bwcrl2liUZnxz8BZNQxDhJmeOclJD%2FS14jbnBxsvHCy6lW5p%2B4som%2BUGcPDS5shQEIzXWdHvPnczHliqo7Ck2Wcbbjanw%2Fer07zw1l5sI84pMphHzZkekLux4lQ%2F2lzXOFONnRAnGA%2FAaY3UL8MSRfQ9bzn%2FRVcfIWiKcEBctip%2By4qmcf%2BqsYmWo%2BWXJ4DIq9HNrAjGlaiOGOH3BkasGCVvoXxTU1k41YREhYVTG9Mus%2BmNEahiYMbGx2WuUqqtzK1JkarHdE5V3G1%2FmRO%2FvokCm66YHwkOdGRFdV%2F4BLNXSBY3QVS82KOIIA1IM2UFG5xCTJHUcxsiDBiKgxVwYPVlm5mRiVQhdWSrtxnvfen1MHHXphrxO7CY10FBUazKG872z%2Faz%2BrBU15ZJ5YJcGCctxDiQlHTlnW1fRNiaP9WiAAeULQSwCRax4YqU0H4I8PmDCCpYHLBjqkAaXn%2BBvHU8AJfYnlMfPAeS9ll6g%2BzUNXLM15iMh5kM8jIDBY0P5dbkkTtCNedr9AFDi5JTjufpXQfsRmzu3gYXnyiER5sev1huI8qJD4uTG6ZD1PYra%2BTqIm4SbLYNvZG8ofA5JABsh8jNOxZEaBnE16i%2FPgDHTkDgTW6qvOswecmtcQKZ0YZhGwfCe0uT61832YAO6ri631v8POL6JrHWo%2BDuKi&X-Amz-Signature=a5e0f4ae92d1e72b24e47814fccde80c4b27b95dee9d30d240d756766f83b0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=b9cf60f6969ef446fca186211985622051b3483bfe5288d4a84d59a476676965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=afbfd79e7b7efc00d5455e44abbeef6fc2a25fb142beb35f2d3a16e3b5237466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=6516ee580dbd1950fd312a7385027f96eae2408b32c2e0836e6f594ee4550597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=b6daf28154e09ba3a7b34fedb6394af7f4db5f317b51c3c6f960c286f423403f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=478ba3318afc37df7a97a675c9a326c49e260d8df94ef335238487fd16cce371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=71fa98d0423acfc95080c375688e54c1d53db9d0fb0631e2df11b88c2d939afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=06eec453fd0587c60f4305ef7f023d620ad4641c32b8fc8398354fae7cba858f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=8abddaae9e52cd7e3500694fc8e16f3501d4b794291597d1e2288987aa3edaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=274f0ab9c3e473aa66ec8d55ffddf17f602f82ac2bc9fb6cfbb7c3982e0ca8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227HOCAI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM%2FZyt6%2FkOUj0JG6D1EB%2FREGFCcqlyLK0kOdDXce0ZUAiEA8Ua%2B80uAmRo9fIk9ipLxrwhAPRFWmYC6%2BKDx0r2LWl8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BBTbbq%2F8pAiPJbSyrcA8naAmzHao4eM3xVCWD4ccxfMAwFQnT4bXwPsYMCh4690GW5I2FwsNLlBvV7aDf6lc7cswcw21mvg1PZiOYDrxKoq3sxSSouSESJ5syQkcSef%2F%2B83KlGr98E2j1hCufZmLZEVSl7gnTR4Pl8RO4p8zyAwBRfkUE5om36QFzEEvt5RV9ljQElJvdI0Wcy8vhzGv7lHxQklgMs0%2FBJcp5tKs2tOg8pfmV%2FUaCZYEXyGrUJQ3FvF8PR%2Bj%2BY4ckJLxu5ZnSiP7UplK5RUirhyxa2yiHuKnlXc9On1XTKhZbRIVxmBkC0k4QyZkMH9T6vVERj7NrkWJ1BvWem4QhccYBGW%2FkKpB5boMkP3lA8BfFQM2qO2MxwQJzXCsR953wOo6jZGAsGHmtFVKTRh41QFjxx8Np0EOSZLZGiUOG1Q09IWJzeoYWj4bFDz1Qcx%2BatelFHM1BVtlJwiDKInLI4Xf5GyFcUwwdPFQAYa1R8sMA9NZLBrdlsfdyyrUH4cC19aU6aHfGQxedWEthKn5yJIJZQcUBbBdP4CqhrNWqbcf%2FapLuSP5aQc%2BSG6tzVJHNvI6yKyCRzP%2FcU2Hr8uYPtfBPji6ULc1ArqG7z7szV%2FCeLW%2FF2OV9OCOzcG5LBkco%2BMPyjgcsGOqUBgAwZu%2FT3eQSzXezfqDulZRy4H1tsoH%2BmC%2FbiJUfGleeTxtk92CgfouzqLpxYXjRxL2NtqdazDlW0TQfflDBCyuekFEypsntEo%2BJ9yFlrj5ggNhckN%2F9BGA8drvRk7sEaLqIhbV35l0fm0zC8G0pwOyMMAgSlumM6wvFgcS6lfjAx46nBS91z7jHxKSSdOPt7iswaZ4nH8GQqfA6ZQLZaIEZ0t75F&X-Amz-Signature=b6daf28154e09ba3a7b34fedb6394af7f4db5f317b51c3c6f960c286f423403f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
