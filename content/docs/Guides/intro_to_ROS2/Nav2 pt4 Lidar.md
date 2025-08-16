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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZ3VBON%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCK%2F8jrJ1d%2Fw%2FLaUAIQQ266MhFvlz%2FK2P4Y1f8k9EX3xAIgOsP3STpXvIrp8Qa6C25ix8qiKkaH%2Bz05qfmsBEW6NqMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHIUvI%2BsjVuXid8eHircAzf8lydFRUz5dJHIa84BU9pSes%2BvnZnJbs2tN7rRX%2FdyuVoLA1RExZFh%2BnXLJTkxR9vKsj3nfE9Eqq1arCReXoRq8PD7Qda9BuveYIlFKYvJs%2FE6uWHxeOHeQOpSSLK7c8ekK9bAafZyFk36l8ulLdtQfVu1ofc6ZDiBElixyuKoAZ738DF8qFiDL0ZuJCbqm2WyxJ34%2Bi2VW68wWMBDlpYwLtW6T9TecmHNlxusSIxRZ0tkcZ8oaaxbYIa0IRwVYBq8VwhnUf9r6J6%2Byt6Hh60TwNR%2Fp5kGJGpXUvKHeJUZOaN%2BH0mwfkBlYY3fiK%2FuJA4mO3ZZ%2FqrGYUbxqQBBXhFneczFRr6FgpHNunQZzZygwFYE3jBcXsJxJS8cmH1KCPuTPVDwwBnvxN3ZBWbccOaXykDgwT8XxtdfR52SqKky2xkmW3giJO%2BwJRCHEkm9UFLKP7H1wvvSQHdoZaZY8WKjYeijeEcvz0ypbOpesX0at04djdex6J%2BEDf81XYRmVaNuylzCKML9gfDCA16UX6NGaJ%2FSjE8upmOfu%2B5urhcNqibA%2BQkcce9lIBGUTNvu1KDdDqU%2FFp2iIEcQ9nla5E4dnGUKBXG3zRK1NbrwCcRRtHKfTfbcvSPqZdx8MKaWgsUGOqUBDzYKfQdwkJelWqfFGth2Yu%2BLWLs9HBLOiTGR8B2Kh1JJzGuIvqF8SJMeFKEvY6E49ofMN3zY2FE6xB7JgIgXokVn%2Bls5%2FsaqNFrxQeMSZcIpCGMqncDRL2ll3qV9txmAAhKixM%2FyKzjgMKAKZdMw01NMKOSej52jQza%2BUISF9SiHYPE2Vqhlog9WxspowCHuRuMn07yEvbi7ngpd9Lp45oOWlcFS&X-Amz-Signature=4c7d16086d975651b7702d9230a69a42a90a17ce399e7e6e85d0837e6e1711b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=6d98cf79b0899df213d862deb497018aeab3d91d5e51899d36f004903c0faa14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=e25a61384c63d93cf068b4300327583263c3027aade945d484278c2fdef73836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=71bec5f3942aedf68a728f33966db0c88fedc9e663c4fc05e736b6f6db1dd74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=6ba7fe0ec691fcdb300015538373955c95df45dbbd50ce174d76512b5a6cd57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=523c98570114e6e9583de513f85b97fa5bfa89259ca1bbaf80957fa2e478992b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=acfaeb73d79d1968e2f3b9eb19a322a6e805b7e7731febcf2628f5c841181327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=39f3174d89c365ace24e373e85e5153bf4c6ac44ab9307100294513191fe62da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=07881603e8dbe7f84017f19b9a2ce8ed24afb429094bd1f5003e11fa996412b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=c9cc87295e4b6a30ba8fa5d930d4f89ad382894d214e92641bceb42165e1c794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6GXIXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGX8MWIsxrbNAkddZ96ImW62qnaBG%2FvHrCauUDdOSK5CAiEAlU4ZjfBDKd7%2Fy8hFTgxBqzcGUa09bCYSetFWyHJ3iPIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO1P8Xi46frCqYd6HircA%2B5nlDAVoJd71MHsnThILOJ1liU4OIcMkBZjWccEhkOFm6ZUPAQp7xXzF8nDhv%2FmZBwj7Essd7XM2ww4dDYrKEOKOOsCesVmNyH%2B3EaE5gfcZWH2lBpWBuA%2Fuhckzzg%2FNePldkrc0o6aYupJ8Hn96CGBH%2BI9nd%2FeFW%2FEBLCvCSrQo0pFe%2FarLaFO0L0T960XCrETp8HZxh76cgYpGHARfM7vxw5NYQbNZeQ3Uc3WZ6ZLMU9XElsVHVYvdIhB%2BiYBTUI7l1T0afJgV43tler8BFeBL9sSiP54rD1OEJh%2F9PYSAieA91eI1z7o7s6U2ILs9SbPnehqSQ%2FWcNn6vQI545XVNE63H%2B8HdvNy6WE3KDvzgjvjUq5Mh0YA6vr6pEc3kflVvJStyujfkUBh8zad9TubFJHqHnSdRxoG%2FRitJgDgrSmKu2XJfitHoNn4fedQoALMQxKDn4b7wtzklVQWXEOzQOjQqPciMA%2Bzbv8sBF4c2GbDD1LYZyxjsoBtQ1GN11tBXG5KhznYAmHk5S%2FeVpdvhzhmyPLjQBg9MJz5mobFLlpG%2F0vrm0PNFnY1RFexqcnWl1ZdvX2k2HjyeyTekHO%2FLxcP9%2BQWsLW6UXkQqMPc9jyGAKeOkAr9NUwVML2TgsUGOqUB8hL%2BfVIuTZY8vFIPK%2BFuLIK%2BLeyzB4xv8Pu0HdeUL32SChEuI6p%2Bl9EW10WZMm26XahFrGupuVnZQ%2FdHZzH%2FYrR7lajOjnSJsM2l%2BcHGSVFGN2ObZsVkv03mYRnVvvm9YDSD6tv9lAR1ALR66Svppb3Sed1lelS0%2FKCx4GcYE%2BxuhKpnxlyMOGbDy4T94wcEHRTRCpcu3UNXTsepF2sdQ%2BIHz09A&X-Amz-Signature=ae09f5a8b0c5796f5d7a4a54d88eb65126fd138a12e8a98251d0d34bc2926cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
