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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPPOE2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFpH%2FruCyQtEadzIihN%2FECVKdBroH4DL0FrsO9IbgTrGAiEA7AcVD6pHQgpeCOJbhrGYrtaLbArXFa5LOT2iuws%2FzIQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsujNkKGq%2Fz%2FNpeBCrcA6yyxtrcHkwoeI1%2Bd6DUpQ0b%2FLyFj70cFEoxn6o2GYfs5ktiEL5qrnM0GD2z8OjhC8vf5rtIqcrnZTEzVby7ckAD0ctwCm1cbCoUHxJSfqgUBLArXVaTybAkPeBVEb%2FlpdvSeN7xQ77wU2So3GKtzOZoy247UQnnOOInwA80BR6VUufTXg9xen7emxz5xRwlRvOVHvQ3wjVPWkvwlR5aV%2Bh1B9qL0vMTGA1ogtFriMXv9KkVcuLDBM9W7mh3jk46GSQCyJNTdDRTY4jfTuW6rSPoLpzEMYbkfwYWBBaYmZQL7LurVBusRghMKOIgtDbF%2FA6H6toHiH0uzgImp001ZgvDzdZaeoK5uCjOx9uzScpHsSTQ%2FN4HzpIsRC3cjm8pwRWoLDDFej07gthlZhbwKD%2BkScawCghprbRg0%2FFqb2aisbcojVeJiHdG%2BrOZ2POy6ALpWcBXlU4%2Fz%2BIT3pQVeNMD8AAeCuYLaKNzg%2FMmeL28ajqAgCi%2FH3flvI2v6%2FYzTeyck7Xm6dEME4Dkjqa%2Fbs62KY8jfGe%2FS1YLa8Y4G1IMsZGC4ZTUzxdSLsvkd39njokxdgbLzaBTEL2MK080s8u59w3odC7VbMXOQVDOKhKQGwMgmEyZJQ7B6949MPO3%2FMQGOqUBaVimonrEpWPPWEUN%2B%2BSUzauaVBTSbWrrewRMYAvEJ%2BQs7n6jm%2FMfBOrULHpdLF37fYn0whakbtl2ThoNo27RURDHiJOlY66pVIKPmAXTVq%2F334oJ6oA70yb534CrR5Y0bUCO7YhWBke09SNBUYMGCsymrFqSnu4XCxLbwVOOuWlex5gK00erpJByhkwlNlDfkpOOY3eNmdqPhy9%2Frd0OZHR08lwN&X-Amz-Signature=ae1c6ffeaa814ba8a5853db677370cf9132cebad87982286a549d3e98d09bfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=d6571a9147fced250aae3d71cad760d42ca280fc421e66968f51a5b3d936c106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=7cb7e8205bf9e18fa63f6aa51bebed970f1649138c60cdb767c6d1593b9729a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=ad3daadcdd00a6d3ee2399137c014e4933726e8459756ea8439b9e07952c5a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=f5b25876c5f9337da7666692c1ec39454f1ebbfc5bf2a98d347525c23eea3059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=f9773a2a0b34be496c3ca213eb0233703aaab64180d451cb5474529274f42a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=4f3ee98177e528397cb368bf2e6b2feef7489028a813fcb3891af82e548d9693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=422b2e2dde95495453a88085eb1959e27ce445a756f1cdd67502b8cdaa68a8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=afe4fec9464ba6740742410c2ce4bc82d4016a063c003e48a31963cd9848f3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=aee84042898bfb2f3697a37782581f343045acb3702c43a1cd45565e8aac7a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLC2PBF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD37GWlAyMdHLFPGY9%2BPYP8fBjaBXHAwxmbXcM5OkVgcgIgafEl2CU3%2FbGBbJvZ8oTjocooKxGa0BgoOdBsTpTfhekq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOPL%2BJybkgBy%2FyzLNyrcA69xgHXnOL4RIkjwk27qj55aWy7WdvnkkBF69r4F0nIJBu%2FAj%2BRZkKp1sIx0JxPmLiAP2dfkSgg2VDscNlESomsg4Ye2gng0nCDri8zINAcs6y4mpMpl7mnFWFGwD3Xwe45joT74GlP5ixQw9vXUwtg8870RPznFTL62LpZCnSl05SqhQjen4m9uen03d0NxoYxrdD0WmvkzUyPcq8XX8HLzqWc2CvesSzWwkW06Rr5%2B1oWny%2BrOgxo25YwO8vLEjMdPOr9pAPA3kI2b1uihcyptVl8Jf4fy%2FgOs2rByVYYRolJOTIF7ySpQXXbV38ayJkLnQu7L9ZCkWA0fC0I401Fqj8VFaWH4hgCINqsLw947ZwCWDZNQkuX1dFNrrlQJpXu%2BJ5aYlzf37Fp0CJw3XvIbjbkT0QXk0qlopZkVnSrgssG6WACnBQZ6FmkO2Jqv4%2Bm2GHimzMRGzj0DhGnlWFKdEQja7clTI6kqc0R3cEdrDXTdvLUAAGOJZFXNlL%2Fjhfk2YSAVJN4HoJ9NohHusS4DwAWaje9ULWxufpZ5%2BltY5JjX3en0RPrzZMlTz4zTzhOVBkeVxMBQa6ITMPHT5QgBuI8k8ogEeBUeaNaH%2B9z5BucbfhYJD9rc3MhDMIe3%2FMQGOqUBm5rpDE1DlnXKqU%2FvZYFdrMtM3WwiNHgdVtFbsbd4EjOaH6CbK07JV2h%2BU56l3K%2FZTvWaStBE1kA7FkoOkxErlGquudGgoIZ4Cz4yI%2FAvK1FRTdCqRyAFB95ilxz9UdMnEl5Rt6GY2PR0kQpDoKsGrtrSvJlrtqIzrX8Ro6Ety8YJia1nuoRNw9VF0AaKdSB14%2FI02hR8AyIhT%2FW%2Bwl7jY8ehBf2r&X-Amz-Signature=f5b25876c5f9337da7666692c1ec39454f1ebbfc5bf2a98d347525c23eea3059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
