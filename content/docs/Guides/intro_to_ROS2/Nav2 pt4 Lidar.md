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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5IW4JJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYRyOQYWIqfT9%2Fv9uoJLNqQnnseHVj2BVyfkqvm5FXVwIgBerwSxgYSDmzHFXWFM26oTip7CzLXIUqdx8SPs4U%2FeYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKB5Fz6DDXoXDU%2FbayrcA5nbUqxRA%2BodwmviWi4RIhqw%2BD7Wp7gilN%2BOpd%2BGVnZzgLpFYSgm5oszp0NUTUoSel1xBZkvCN7zwUibyF5RFztppfgwz7NmLCciV7%2F%2BEMxD2Xmtlx1OKwHY4GBGWNolQdZUdSY%2Bfb46fXarb9dkMCqpHYx4HludyvMWHut1b82CHQ%2BJBe%2BArpEkdPj9zH7Z3e8sJPhpPbJt5xONZDXKLOaKlaYEtleSVWPkvEbquNbKY%2FW8nd2IZT33sJ%2Fkcw5t5KT9RViHk9OiTdQk2zaJEQDS3kmz4%2FWeh5nRq1n6fp3hrLeqw6LYKBJnMjlqLBgRKvdh6TITksE1f%2FMJXjZ4eQwkW0VzXWq1yXrOAVbKZnF5uwx1LE9MEMSNIQtzXYLoAU0K7PVotqTJy4%2BLHI5GamoXY%2BmjMrDiHAMpq7grmw4AYYYIwDsPLZ%2FVrQ8SljSL1h1rwFPTV7os%2BPC0bugXVMzBURqrfJ7hjOai0l8hhxCStAEAIHOPQU8Bf4VbqgeoWsXcocbeoFnkglrRD3YFZzuvYfJ4wEbVm7bwLIO%2FNedEWAujAEiw4TPgU1TFl5zoGn%2BRjePMmVv3MCdWxoclAgNHNWSm0XmPRlcK0fonkdDF8FI3tkXfXbAdqsB4MJ6iu8QGOqUBMl%2BCsxpP3BW1biPYx1%2BDCk9z8Xa%2Bjdn%2F%2BSAyDyEnypsDsg%2BsjIDsvhpgsBo6yeRbbRvE19LCrIfb3204U%2BTBvnS6L3R9wuIoKGwQcatzdemIF5qEl7V8OGfZ4AqwJZstJOAyw8%2BZnrTIJgHtlxEicd4J1e7GxezCsa92oE%2F%2BoIKCIBME6xchv2QPfETluZ5d%2BS5xK59mEgvaO5V2p2m2t4Ve%2BhgG&X-Amz-Signature=63dba8471ff0eec5e569af227b65a84def17722bcb561bcf6edc86150de06785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=4e675cff09aaae48de51980f54853bbfc0ef04e09dac95a2c6dc80a6b2da2383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=5cb259a977856f6957153fb6436ed32e3a0ac716d26d0fdd6fd009396a20ad64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=6dbfe6cde4ea434970459f18a813a67f62b23cef4d090a918944f09c16cfee26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=f632da286eecaef4cb249e9df02822b18a5041850dfdffd64277c84e5d269fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=5c91abed8bf8691886fb3e53e83ac429524e11ce249d0fcf7669cce57b65a6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=b1b985575fbecdb32e0a92b83d24b3eb26b2b00fd54f4d1f50598e8cbefdda73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=8938fa2c988acf453ce791eb4b698292d035b2b3d4f4619aa23a65c167e8fa81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=9a402a7c9a5170f9d8a509b085458370885f8f434ddedb8938aee79a2a2e7d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=da642cd35f714fb873445ce6f69c1179b2342060b4ebd2553608bddb1675f966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=f632da286eecaef4cb249e9df02822b18a5041850dfdffd64277c84e5d269fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
