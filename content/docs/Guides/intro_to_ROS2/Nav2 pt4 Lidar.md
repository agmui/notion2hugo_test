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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXIZGJB%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaRexwbaRyFdCz7eUVuHd%2FTpMEOEcSxazQmzk3GF863AiBZQOrwDvcUFRPKmqpOHeQlwWrm9sbw6Jp2DKsv5bauYyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZSo39gKxxPbtZryEKtwDd%2FhoERBapU%2BZ369qTXbYSX%2FgA%2B29PumVR6DV0HdUndcVTs0T8ceEGMoeJKM11ibry6dVf3EVs%2BFFBSAskVnIjYdFLyQqCCuWnTVewwzTMQJut66IQYxUpi%2FOqNpUacuo3E9our7vkiutlop2ztxxrc%2FnopFCpxo22Q2zuDO46NEsg%2Bad5BFcoJ2hV8chCkphBeuamvvsdqGnnxhaAwiCFCNMnbT1YWTJcXoByiONUSo%2FIwUO718jQa03Oerkryn4U6ssh3XIboDb0mjc8PKuWhZtL4Tj4aeUp9b67kD%2FpHlG4yMiRwxEKnNovT706CVWWpJozNDIUOkgV59LXp1oyU1J1L20IPWFkfHeC6uXleb19O6Jv74AGCQBxy4NV%2BgH1HsHLxDHq4HK1TKMhalWKf889kVVLr7da4SzqPACpaJ7hwy0B7cOb5CNkonVGiKlMK64t%2BqKUjY%2BCNusgJ6L9dm1VUbOtY4XC4HCtbEVrtHLKqv6xnwcmgBkww%2F3Y36s3lcGqn0zyh8IZ9dgZlrUoe8LPmUxyLr9zQ83pIGcAcA7Vd4SL59AYF%2B4cvF4enn0RhGuH%2BrE6PfYJ4FSHEa1fdi9a6CcJArgBbUEG3kUugU0MwmDltXRRN2cqbcw%2FtuOyQY6pgGTWoNF6MWHDnh5JhlpVa9y0vH5zpvUgc%2BaA24ugO7LodFaxXkz7IunFTdv%2B46F3Uj6KaJdcfs0A5SU3VI84wbzyz2FURjRsWlkEPi5XLgy1BbaF5xbS%2BBJSLbpGf0g%2FiYdx37JCvT4Dm85AjebcpuxQgcCoyYSqwlVzOS4XrYRUCj3vybfWHyvwvHzwwxIeuFcWWRH9QRfzxTcOl8yCGhexqAw4WE%2F&X-Amz-Signature=6c449ab52874cb5fe37764a084385a533944980fc3dc4176fb721c6777e7b797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=cb14390202e99e5637e3abde367a0863a841fea52cccd938b39bc5d6fd766e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=4f829b897d8c1c5740354d88e49bb59d82db5b4b8eff4769a21dd4984ba0af14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=2bdc2de4e32bb00b2411457769d7924cb3fe4724c1692df8f48c5773d3648b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=4639e07022e1f1de061639c6f60ef44642c5b7062c6c62a3281682ffd2e536e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=ecb5c671716d1e4bdf2142fc7bbc67f9f3150fa5918dd77c219fbb91f85ccd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=968523d376f4944ac62bc5dcaea166ecd2e80f4029db2605f1a3b13c61c3a835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=f974f5320398b0a395d17168daa93d558eeceaf882f6c13f5b9db9d04b29818c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=7919a4b1011426fe6d3b80195de47f32c2e156fa8ae7a548c7906692dfcf9bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=34e4a7001f31585f1a8952428a7c279c2a732b2106402f4705c99628d389be67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSZCOUH%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgW6Q9g0Cly5qVRdsQOqxZeliUGerOOALIFtuOI9ejAAiEA5gePf9JQEd9d1gOxRjzJ32BCoxMspwg%2BwVYQFvSH5Hsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMRiztf1tCAT%2BZNa0SrcA%2B8V4fpPjaViL0x3hpPwekt%2B6LOmPyS%2BgJyJS%2F2kbM1UIQUftDaIjEDj44egLPbCh5o8CcNCvvDjA8Q5vyp8Tfx7wnlBDX4kU89NOYdlyaqw7nlg43de5ZIzG%2Bd3%2BRsPDdib6MN4UHlSxyUt82%2BQlK8Si5tLvlsM7Nr8SMROrd6CB3Of6vtJ%2FN8%2BIZ1c1GaXZZ7gw6crSVlb1058bcTIUb6GkZ2SrV6fK2Ge5P6%2BjPuIoSZ%2BwuLNm4LhE5aG%2FP7pYsCw2OXghD4GK9xxP8dG24277sySg50hzOx%2B6CIckl2fzc0sTB60lch5K8SWqoHgxcLo6c32pzDjMpC8t6t1MRb9wmsWU6YcfHyLecFXZTalOYzlcbu7oo8cldedn7lddc6m4BluZ1KgpyBubICah3%2FJRvtboPTq1pSOlNc5d1rfUNhl85zv2EdYfiIJcFCwEeqSrBNnJMEBko6n%2B%2FqfZUcGWTTjOB3lxbJ0L4CUgQqync2YfvwSTFQCHF4JTTel9qaFp%2F%2Ft2lQSm5ueWirW%2FK9j%2FzFnKAQBpIUMmPKSeU2f%2B6%2FxIhg%2BJBlwKKpp198slTTdrPe%2Fa%2Bz%2BkVxU20mqeQ2WceEYvF%2BnKq6enlP2Qpj27BrDiyz0bkJoTvY2MIDdjskGOqUBAVMHjv9g4itRFtfGOmyXd%2BGcsE67wf%2BCGJ9TTIpgmQhzSyYZiFGOEaAU2%2Bv%2FTxAtpgSdpD8OvA95UNZV78CqtXzI%2FaJ9nHbXPZVcB6%2BUjRCIxbQ61SYbokRA9nOWYhPW7uwzMBc23uiZlIGx5e4v8g0uZ711OmjnyOxdGZ9v8h%2FOwbqsYwzr%2Fh%2FHoeMeKn1CtdFth2Ab6qCAbGhhHlUMtJzL2w7s&X-Amz-Signature=b1397ed7ba52bf8e220e3fc6062acd7c6d2fa5928e75dbf57a88b296a966ba7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
