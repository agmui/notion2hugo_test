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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662P6KUVU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyqJtMt9rhvudzuT4BN9zmTgtxVv47DTuQ2criVVJO7wIhAImAmbMYgkR4W7gDjqsUbkvMOKj0LKrCLpACgEgDStl5Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyUmYBMFCpjG3HCijsq3AM%2BbTNcMQ0c8kmQScAS2G9MqFgvPO9P5wdzp%2B6D%2FkSQbzz860As8gWW1FSPJGs7SAO2DQtomXB2%2FmzYkVUmu4j9K6n2RmEWJIUwehmozd3MoVMcMSIly0i7eqQBn5H0aiM8z8DJxCQuDcq5RlOMxCLtUE6lj8Z%2FL4ihq9a9GSTFsfXtaff8PIJitrm4ABoM4%2BEd%2Bk%2FeIGsJtRP02wCkDKB0tSbLAUxu7byVWEYb8TyPecxSXxCdZlBcPwwcDPyC35jgZPIRhJhT%2Bd3oqbJqdg9hefWmhrKRu2K4OQ3gJScIy1t0jiV%2B45e%2B7AIutUjMJMdFh%2BfbY9gNsES8jM7yRuUtTu505V8T9ASuiYwrYfPye6unHaF86SSKS%2BXQAx1GYrY2hsPGq1exCWpbqXX6VIyRbuGEWRL8gdoRu%2B1KTpLaVlNj9iQ1BJ%2Fqpk048kPAQtOZsy1k1IC%2BaXnM%2Fw%2Fq8F%2B5BZXH9rIEQComBvz5r7MZSTyEeEe%2BvZbrTBsEmhCSH1eePoXrVdH15Bww%2Fp7t98Wqkf1SKYfXzoBaTdAxHbfku8ZC7oCwywLby32wpKApVn7TrTXVe74J2ZSoAEgjs5gHFV9D%2BTQOIc12ULdhCPwpTVP1PPkhE6VVsvPFSDDM%2BPfEBjqkAQE%2ByW%2Bzynmh0SO5GsDvqfEVfXDrM5AP37%2BRGva%2Bv8nA2yNWAf3Lg2gnZjqN3d%2B4IQrxpGy9adq4CEqlwS4lls06dkVDiCCD3NkZdSJRJ0DZFmyvvGCfPn8YTFBZMqpLlIIQ%2FZsuv8d%2Fszk%2FYFDHC4pnNf8ja33dURIiiTQGtV%2Bjms85w%2BOzmQVAiVDmPnkILjejzgUW2gsMdGakK4lfDQKCmgAG&X-Amz-Signature=d4c34fe651f7f3c4b514c897012776fce71e29b2960f3457f569b6e9de160cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=6c1257c9db48c49e5136ff4630d02fbb325e034fb34bb1d5bfb314daa5ffab24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=62bcd9025aa65e3de7b6dc4bbb6559ebf7f11ca419c8cd3a270fbfee6a3a02db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=92a88d298a1ef3765379c9aa0ed4fb9e418bc4b15905273d3bd5b0a554b067ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=438734b49e73db86139e3ce738167f447a735f22aaf9643b49c38275d1a3bb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=762bc269cd60e2329e3cf6c0ad5b21153e4a53a28738b905e03de77f144ad8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=7951219e4148984bdfa6d75643b8fc54333424c478a32f535aaf39b07abdcc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=cf1f78d6795194c9c9fea228062e546c05ecc0501c9f17fbe478b13d62f42ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=d9e5c0060b152719c3d1d283a538dbb6ac038c6e0f3dc8daef43f84978b11828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=ce0ce4b23fd4704751b92e702640da182fccdb2c3eed4428b71d09106b692798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=438734b49e73db86139e3ce738167f447a735f22aaf9643b49c38275d1a3bb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
