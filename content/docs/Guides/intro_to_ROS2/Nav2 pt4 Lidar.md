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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CO52FOX%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsHifHPau7VY1vGustVqm3%2FUhAL2csvBm1WnjiNiZh2AiAMaDqYGYPu1HPNuPMMJY%2Be3DLa%2BLvxhJCy8ErgeiAZMSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ2gErBf6VAj1xCsBKtwDv%2Bg9yt7kpoLuQLLpr4n1njm%2Bn36gMcYIKFUHtEVJx5Y%2BWubF74Isqu%2FDhwNgCfFCGA2iX5F%2BGrXBJALBgdkU7I2JSwyVOvSqdB5ykvdYwCrecwVNGBwNJ8XsgbF%2BBwEJq%2F2Z8J%2FIMqff%2BT9XLW1yxCYKUuQPC7HXpdbsJ8aueEadcfyNRCB2gxz9zv77PBdzQknvw%2FO2OML25zrSHiOisET3tkJjQMF10vbMUng9JnWwAaq%2FY8aMlo5gTBKVDvth%2BA6y1xz6vzVDfrbOyMgET2%2BzNPyX1AkL2f%2Bf7dUWSdRy0mFsWPOICQwsGkNiZbvmr9Qhlq1LdoxYm7ZI8joycdIAN7v1zKZTbpWxr2x0JhPbg6GN%2FYrsSw75RGzl9zrgCQz%2Fi7%2B5lWpePKFXx%2F3ugglmUTTw34K6x8aSKD4Bm0eslMOrgDV%2FE%2FfLo324wZrCIyiSUVAtEPcId6hZ6qmn7GFVntnQcWksCAgCoxN3X84tvtn5%2B1H9aIsYADKrdkI%2BoBIwVHJzFdnWA6GV0faJust%2FNHJyZ29qlSdWMLCoEpqIr%2FVh7wGuhFUhKeYmNAH2kKjj3G%2B3mBXg%2F84vU9y1Yoxqe1L42qXDf%2F7z0kmbjgvSPzRiJxiVcnYi6OYw5Kye1AY6pgHnCWRa09cW2wQYMOYdyueR05DnqdoyX2qlrOnec%2BXnh0aJc2lCCFIP4qSF4%2FMZ%2F%2FN%2Ba%2B%2BUeYPFV3r7pU%2ByV%2BOeB5ha8qyL21l6VAYJnCYXPoKs8UXpXSVSqGXoobPcFiyAYJuKeLj2lBWVMbgcoOpGY%2F1PrZ32fegogPeyH1KQfPlHjWfVuHPABnfdrB5KRJ3cDxbc2ZlPlDECX%2BSnZsRkhyU0MqFO&X-Amz-Signature=118b6344a3d51b5531779c6669adb471b71fbf7fcc12bb5a0cfa33db99eaa220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=384db2e8d2886f549151e7c419314a777ac9516efa01753cd1c3fb620d270a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=0555a7174dc9368d20d16db14896035c458a5595c79704e90ec13931611b5c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=c7237cfd39ced0491d1e256fd3813badcc823e46ed3509008b52c5ee4b160172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=572deb41b44df3812f20417b9e74acabe78e7b114a9d4768ead224ce8732de40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=db0d6a831609b4c759335701b1186c9c6e0ec5c803be67f7aaedc76adfb62c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=899a52a8ffdc3931dd36f2119107077e367e4b42bf33b208dca211474ec87cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=734ca82a034a6951784cdc30fcfd943d9ce9394ce1f5a708bb9e52f6003c689e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=5a305661b04d80d966c9bb7765c134072a4c678a9d10ffb5a50d88943eb51198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=6a1656f1bace001113dea691c3015c0b66a8e2add06323d3194533ee6b9d3fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BLO5EF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEZwsrTS4axj%2B5hY%2BCTz4qvbRxPRm100bga%2BdoLEg9pAiAtWmRsjDFxWlG58yasexz2h0j52vlRSE3p%2BTH2uyEN3CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8A8LcTo1i91mrZ9KtwDDg3HCATzCUwrcGGpJws3stZHwsuqOwVqEMSSFEHCyP66yMPINuXuzkJekoZ%2FD6Gqc4RAecVjCN71c7z41nHr4%2BMTRLg3gRhl4NzFTNtWDvq7SJE91S7oHkrSASDtGoJjQWwQKXJe9owLHXIX1AkrjdEoyElImjLTJ6tCl0dB%2FgTIGuA32dUQK4B1pHrYWlD7TJk4OlKA8WGyWh%2FHlWstp3OWNCRYUOrcAPJSZaO6ziH9dQ4PDnbS%2FM%2F%2FZE0iP%2Bxure1L%2FlHe%2BElOPvntrbiJtLg4TUUhYfTkcNq71xtlJ5%2Fm1Su2Kamy1R1Ih%2FdGyQ3Z3IcAJXkYgnTr5yX0LsUr2V6qp776TjFHqESEnmMCJVTaNL0upsDxpXvykUqNkwoRCrtqSpLmpYkSoSBginKQ6mw4SLHhtFR2Nk5q0m%2F98YjwZx0I3y2gDBA1NSfqCHQkNCiUk48IrM%2FI6zKJxgeQY4nLAJagwO%2BJnEQIGuhat35WQBDXs3NqLmi7bE0K7%2Ba%2Bu5LNXd6yqxvmG%2Bjch1WvARL4HUsmT4eFPJcAfaWTZdJGTh69T0CinWP4fEdedjOmV2VfCrR1vFoBgAH2gpG7%2B%2BbXVdtuN2k%2Bo0%2FectdLHkohSo4JdTspnx6gEH8wyKye1AY6pgHHubWNajjDUErTKDdCDLRwkEYhOrluRqNTSchfDeCVoEAsLh6S4oZarK7obTyNSWvxyf1SmeTvO1VbNWd3lkswNjD2GllfLnzkwV9rwg36VO1A45%2FkJS4o%2BilI9%2FC3tN0HQdIL9PdEn1ytkagy6mcV6CubO8llDySKiKcxvBB8rDHlSllr9SpNXM7%2FkFb7UVSQw7wu9TG%2FCtUWGn40MJTxYCeOcwUk&X-Amz-Signature=572deb41b44df3812f20417b9e74acabe78e7b114a9d4768ead224ce8732de40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
