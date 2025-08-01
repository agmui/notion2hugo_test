---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=6d5be590c8012ee85621d771bf841961a33a614f3e830acaa40be460791c070a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=9700d3e6cc14cca4c6716a68e1f12595b141399fdded1f9cec9122b622c02276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=91b674793d4a2b41551bfd26dc168853ce3d00480f0cf222e32cae9add3880df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=3ecd312e11f48343d2b982840f5770a6f8b4f5945b55e19a462434f491c62c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=f0a8150183f7cc8a76f12c6c95b3a93ce176066211077d8063548d0bad9ba386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=20d521c8bc71c94d93d8f820e3be77c9dc1b357b4ce374e6380f495c85b5af96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=490a8e0cbdf4cf4f1d36eab2ccde8db863ebc51cf46eede559e8d54592c2d00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=f96aea2f97ea2223e2ae267f8f350f69e7cbeeb09d57a6055e869aa1157b67cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=255593ccc633a83deb4e8f998247643c9da2aad1f5fa7d0bdbf7848a7e2f18f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZVX5YS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3RCM%2Buz6PGc6RHhq%2BmNoHw5AaafChDWwmAa2h01P9XwIhAKeA8KH5HkD8DFYAnxxE6I2WbObyi9051h%2B3zNdo%2FPgFKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeSPjHmM3V5pni5eAq3AN97KEzs2ahwCLSIaLjexDT4NuEP%2BOeP2VTY6vaxcnZy2CU7vbDLFFCJ381%2Bp4MrKw3xD8BmVcZzGej7nz%2FKSB75pOEDJ4511Zh0LitSasTYLaoBl83hvz0rv7nSl6eM4HTpL%2FXOFMOuHBdF5%2Bgk8Qk5M7o4ypF790jTLpaFYFuKctJiMEY%2Fw0sWOsWR98E1JSG0rlh%2Fcrtz12ztBz%2BnhkQ%2B9ylLhmipHOC6jIZ9i8HKZWMAFlRYHOtE3u%2BDjS1l7UzqM0y4eMTnjquM3TDfjrqvfgIWM5eWqYy3HiGqAyhOlFKVfwdWiL1iQyqz%2FTkmfn5cw5MNXU9%2Fn%2FRGJu9mQCXaNd11zMZvblvm4JkI2W6moFmMjz6rZmz5aBigEnCNGnHFyGx0Rmdi7jFfVBbkSjPyOzwomQcotNk2hHG01IldG8ivUF8bvgoQJ4x6iyVXH1UuI6IreNhIYksk0jxdXx0DWgIF8YAFoYQqkpxRblPE9crHJQp1qI1BCHaOCF%2Fq5D8f6u%2FVD%2BLSdWTTZvWjHXSGTpl7c0GHNLNX2tiAMkutOkDaHKR7Jn%2FjrukcJGMWSHZt%2FCusD8s6MzdImCUcc5d%2FC%2F3lj0L1x9HFSWaseOvaPlVt5riFQdnyFnMDDCg76%2FEBjqkAVLdBSMhLMiMAhM4MinLevidelAkMju5gduddq6fXrlUuFLaUdDw%2BRyGb6n81Pz%2BGZr75vE5jOsszYQvTmKlgLw12SDJk5OX1ppkI4f%2BnhwimICLs72WTfCTgodWRko5zzl2Gux2atRVF6rE7SL4%2FIxtoXlja2fvi%2BiMe1XVdDyS3djvZaZhzvEFhm3%2FtYfCSOxigGwxqih83WVUOgfzUvFDw%2BMA&X-Amz-Signature=abc26476abf30c8ed9b9fcf42afd95a42675bf2974aa8b394a732fc35ca2c737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
