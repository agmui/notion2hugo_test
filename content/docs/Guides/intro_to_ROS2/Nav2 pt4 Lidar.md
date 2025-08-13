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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQSUEEM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2y0Pk2KBTnomQuZLTPCd7MXvhfkc%2BdK1CgswX62meYAiAvVEb4PWGNJVz5nNKhZ1FtRDy9dXgDjRwFX6vHVKiCDSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMNyOVaQ5Qjy3dwkxTKtwDVVOpjBiZQMWQZdAkrOxZQenHM0Om3%2BHk0hTJo%2BFU8bVR309J59ehsiFuDLToqoRENzMiA4nPqJKyBT7P9wnmbU3Lw0T8uIHOFPgzwoAxCiXnr1Mgp%2FlxE2KQuhkEVrhAmgZIQQBL01RbEPcqHtL6tIqf2EO9slpsGX1AYjTHgrHx6gX%2FzClO4cPtHcCjjxWZnd8l2oCZX9wYbwAzdR0ArE0I%2B0N0m79y8UGAgWRLky9rVy3WyXhf2C3kcqXXqz4Yvj1Mn5ufL5mS%2BlvESTiDW2aZTfZFpxApZG%2BlEniDsd8qz4tL7WnysCcqplpKwIlf96whQwgXtTGLNo2pgeSIPfkfY3OKpUrCjlCay0bPx23LBIGUc%2FNHJWfSR4%2FFNVs8QNXN%2FVYfsl8FGVhKWgEVN%2BWAN6Uym0mwmAixycmu7n6jGqh8guJy30OXPcdcXD%2F%2B229r8HVnXRcs4HWgq0%2FUqurZbe%2BXD4BDnZ0dBvj93c%2F0bUYCIWUGoJjnQR91Q2InLmmhrZ9K2IR4RWP2%2BJtILcjV7fR5Jr2fDwWQ6qBg9FwiqmaKr6DFTwLdwN7e87RNoWC4K4QOPzvIX3pV5ur6eUKx6ent9fUs2VIwsca%2BI0M%2Fh9C6J5Ejzk4hqW8wpLPyxAY6pgG5INxsX%2FMWf028fLG080C3jiOrarF8mrrKqLnSbRghtdVo3h2B7kPJHO9egvEO12oMfqZzykR5H1HA0EGv%2F4NIo4p5PfBd5TQcsWC81HcTnLc097ZSAMZo0VXBMAh5xcvlamRKXiQtnku5Vyxr5CjwgDYgZS%2FCkIF2LxmgD%2B%2BMMFcEoxL9yjTvsGTeJx45yghtHNoA9oKGgW3Xd3GLbupwAbaz08HJ&X-Amz-Signature=d272d1bd49586e42910697448c70ea3cfae61496fe3d4092aca7d3c9d1b38ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=8bd96b7cc9031d207cace234fed7eaf30f0c96c7b3382fb8768d2271a085505e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=717330930095b6178a625bdf8379d927eb23a8a85150d60fa2930c88956746e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=2343e26497299cb6c9b5d958c9fa0017b7e22b3fbcb6b58fa868d220b3ffc6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=dfe07a54996877e48b9e0e06a5b0ac9ec1efd55da56b21ad24a861f79e98a4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=dd569f1d69ddea510f306a23d2bef6384f293bf71e66599140469e5a0c92fbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=785a9173b5a8402427d9e2c9c85af8b178e448d5e04bf02374b140dd122f51b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=ffa2d11520746dea8fe302b872a36936f03a07c8f9fac380338314c2bf18675e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=2f3c3d23f63e1687020e1801da585ca733af78d05d40b7576fdc3a3026dec81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=e1939b91a2568349af1684b7bbaa64bdd6ccb0014039960bebb0e7b8ab726bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF7A7I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCea1aj%2BPgfNIFcWaEXm0ITenfw%2FXE6BewfNR7jByRcuQIgDWWVfiAwOTtX0WDLjBEsJrRhdZvzjPvwRoc3ymFfTaIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJZcTVBKLJUaEqscircAx%2F%2BxcqQ%2BdnwRWOhnhFagenyddtX7x3stD4pHb%2Bi1z0GvJuwDDucfCnq0Pn3%2BM%2Fklrn0nda8LqiFS1NI%2BwdQ8q2ud1j582nP9YHkbmjB%2FD8NUOq90g2UV2BpvqvwAKgoE5x%2F4qVkTW21i82GdLNuMUT46JZPsJtVFGC73Q6G%2FpuiLG1U4uLzyxOA0%2FsV184ySUIIRol4B%2FDrXEVGdEPgwQHG8ntLEVdL%2BXi4OpRnBDgCdFB6fZiKPcGnhlIq2wwSVor3JdlH%2FaUeQ0u%2BqZaDWl3JUyyGGnKSYeWP3q1OlQviGJazLvXo%2BtvmBr5AhYu8kUzIP4F9le6UOIbaohQIekNhebDmjYlz9W%2F144xl5wxxj0isoHxFE%2BF4C3m7g9Qdsly5aw0LqLwVSptgpemFvzFRCFGbkBkQdk8vT8J3nF26of4Jx94jdyaXOkEXJAlqPq4zkhbwIs2XmTx2R01O5Q26GoL1msdUHAFPELc2%2FFZyT0Oe3M8zaiFWniALtvbUwsSgFedrKOrje%2FzXPx6uLXQ2S2eD05QQqx%2BS%2BUwFON8506HKCC1bTOR5nJ5WFka5dAtIQa5bSREze%2F6rsKxegLgj74Y3lHBFGQLVCAyx5g6pjiE1QSccL2VS54i5MO2x8sQGOqUBRM69bcEESBgkDNUHqCdV7hXcEFiiXqi7qqYr1igYzhfdE6SlEZ%2BVOGYH4e0cVvhkGwCCJBYgeAT7FQsOf0EFoDsjox86zPryRlZgTyw%2BicZd4aVflJlasHVtcXX8mLzk7XXKhafdoTljshUPPB9lVyj4mX2ZSQIlkG1T13qC%2FZSEesmhUiim3QAFwwp7nZCgMu8AOlJ%2B1GxDU0soIRggpliOTLIg&X-Amz-Signature=b52429c8a28666132b1b18c82e29364846e9a9e2424d50692421f2749a267241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
