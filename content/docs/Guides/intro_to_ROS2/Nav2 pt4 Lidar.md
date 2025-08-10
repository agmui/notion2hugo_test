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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEIVAEVO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmedrp45e5sqb%2BPJC44mTag%2FJXtec6HxK6xBcciHfqAIgI7ALZMKebfA4bVLC%2BloqOTdNRwDNyIFHls8pp6cPF8UqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAUBSv9HjxIEToj6SrcA8PqNwruO2xAMqD8Bs%2Fn8W3rSfoe7j0jZiP%2FF3UxO0bG3rw4JVsRvb8Sf3nERMgCSpYZBphgLO8%2FmzmqvyDH2gZV3uiScayq9SGU6%2FSYvk4dBGZdTTG%2BKMl2uwrB2hPTq5hLh0cQlAzmMQp555ibIyfE2X9JFXKRe7e4RLQ%2FwusoDOjE3N1Q0nO7yBrXfRozTS%2B%2B388aDxpz%2BGZ28qD3UrZ4fzrQVdpbOAKY0nZfHG8zt3vGaLRl1m3Ckaws9vl253k089TEL6g8%2BHy3eFCSRxbPjOKMDr9OI3z4lAdbtJbhJGrIrIiAaDU%2FG2n%2BchnAvlDWiEVXHGl5vbILi%2FpNQjbMZ1TeCmD41BVrKkg1wqWCPkIS9ab%2BWXr6vAQbwnPraoCgU3Gl14G%2BZG97GR8kr7USblDvMPd7UqieQLTe1Oxww8fU%2BN6qDA94LdGSsli5j2TeM5LnxUX4KPWi4WLjkHtMfmo8BSAin6NbL5Pus7OLHWRBwhz49W%2BYDA%2FEYUTNtCnrB0e%2FfZM6y7ljUAxCMUgrhl2KLOcLiwdegntImFaDTmd%2F8DCPH2XjMZ0fMk2Y52ReTa2Cc9CPO6xhnsJR2DB9b6n3knqtsl2q%2BaHux2OSdzfmK9b%2F0TQNvUeIMLC648QGOqUB%2BcV54tAhrkmhECsBXGf4%2Bq0VYLoSc7YsTe%2FNX0PTMhEKcnTVlSPgIpvuM6IiYzEr6lKjdBdag8%2FvikWAsw9UtTBH5sF302xARYl5CLkP3cuP%2F1IVigvHb2TMvoWN8%2BancDVr8ec9VF8gBJt2kvK4R1mdbEMLbdELjkqrKUcmOELYAGHP2qgPd0VlVzA9X4vs5%2BEu81pfdlI9qJlDMEtQJkgPXasq&X-Amz-Signature=f1e8c33cec29294853367dd9f4afc2fd7f2a0c08d0c77a5a00eaf865428116b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=fbb27d0d942a9d4facc53932f0d3a674e8ac9219385a63718c2866fab5378086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=c966db8343ea347989d54c90bb53f338d8403a3d788b63616a2f1c6e34b0e05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=8c48ce9f2bfdd174e83c2895f69c9431ca05f1e91ed6a95d7870b294cfae107b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=b4be39a98b945066de92090c346a5000d9baca1b789d0816706af003660cd1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=95928f8418e364f2db6cf92a3d1041b9fa86f9c4f122eca82d127e4dcddd8c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=c89b3c3fc670d8c940da28077654898f0df046c5fb05c0e599878d43880a2bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=a7b2020c70d523f97c01770d19a3e83d12287becf21a451706bbe908e696e4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=0866b4844a8d2ac6a1c96ecb2bb81246406c2c82a6cfb74567d994dc58723a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=4df4915dd723ac83b332c0227f730ead3778fdc03d7e1d08232bba7e1fac86b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=b4be39a98b945066de92090c346a5000d9baca1b789d0816706af003660cd1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
