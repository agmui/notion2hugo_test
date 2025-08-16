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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTRWGMF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDoORlFG14lDRvVZBzwu0nbiylSNT5ohkwM6GiVTHP5XAiEAqnyPqxfffA7WjVq%2BHYGzbeV8MZrHwFlQsjR3HFTLkDYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCtwsdBkZNZUN6%2BtgyrcAw39tTmGyKNy5JxARFSbHPLmyK3GlA8bZeQDjGrYa3wlyg3KcYApPujlAqEXZee36cNAUqObyYlKSgyYZDoxBaS39xWmQ4Apdn9h3Ob5u7qKSpGYtBAOowVhmebFdWa5zPDP9O79DoziJrjnbrMsJgd%2BtrvUDvU0FvKR6HVOLbizvS%2BWcj26BAl1CgqimyC24dYq37M9M3H4encn6MG2DIILVlZ42LPeAPviabR5G88MAt3pMi0129hvm1B%2Fl7GMTPZGw0Qe3%2BqJ3D7TBM4h1CQFZYYimGK8GsYNvkQleVxeIZgBOALnTs8TjDUWt0n46CiWiCsBYfn%2FWnydlq3oyeoyAFUVL2v7BH5OCuNZt3ByqzIPgSFmZRAkMLsSEDr3WV1HEP6kppwB9t9u2HCSeqFSvQ%2B1kGbQiPc%2BTTnm94TAz3YSqOrajZP%2Fe4g3JFYAPTiNEv8F7E4IoWKNHJva07Vw6AwAuSTxNXD4q0yPuxPVcMxg0zqJgSjUqQrt5Kp%2FATnJ1xl6CFM03ZBcqHYs%2Fzgk6wuDlsNgbCdVEq7t1H7Pr3kdWfTkNWP5lziyl6XbY0GZAW0xDbgJsdCKNR%2Bc%2F%2FOpvhuo2W2d%2FINs0BLyByiU4xbZgM%2BGpKgiV5laMJP4gMUGOqUBV46VCLqgd%2FijGZYahjOOXqQ%2Fnxbo0sdiawHK1Nuinjf2T2oZSn8tuuvr0EiUdRnzf1DFcd9KaTCHrh6H5AJpG0Uc9hw2ktRUejVhsScYWJSf0mLNbDq2%2FfiJmtun0dzFJBPc1Mr%2BEuemUwiEhHAkQ%2FLd43AE9o5QUibgpY%2BUHKEbi%2BQHpIyjru%2BFFT3zlZaEcL9exw9Chdz%2FZRVcYGUsCqn%2BOQGu&X-Amz-Signature=0c00251ecb16f09f1041c096c67c403a9e73409f44c8a40acd461e8a55f54969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=d07e95106713ea7579b67bd84e31e3d805cc15c5738f9fdfe177b222f4c383fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=84ea3e44e42902df02cff2081ac5dce97371552719a1ebb09847e808ad64d9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=f59b3c3380790bd2df59b47d1261fcae5b8632df061d46c1a5c3cccef0648dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=3ce1ff896450e1bdb9e8f3ea6a5b819997946bc42866e43f94d9a4c778808d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=487f0639346d25b2b0040199d968c3011fbff269865f37de5ceb8bafa7f824ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=e222b6be94f299a5d98286268e3a54b9f4f7162a0982a940380b052028e26fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=ddf799a7c6b0b6ec23266c1f3324d15228555da4735dfb6be9e5ed017b3ad051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=bebd1b988481381738d0c8abd1fe869d9f0d5597d6880b991da64f3684407f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=7ae158a783649baf653ecfe533c22bf281f2eefebe1876fbe5867e49a24e8d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPZJMH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFTv9KGnXOoWQoiXtdKnKMq%2FDVn%2F%2B6a%2BU6aBFtVgoDx%2BAiEAwAPQZvsfh0%2Byef%2FYEMsYTvqRktH6HEtKr5a23pt6G58q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDmBxa9nOltdRkivmSrcA%2FVRSVxm%2FKU916UXlUy3UaeATEkRmGXJ2suYDcbt6QWO2Jo%2BU7KFcU4mNoHR3UjK73OOavmanlB9l33LWNKXlpBopcABWBVLrQrGG7mHspZ0v098ZT0f%2FpAirowF5BDp2vITFj%2FN2CjmSO%2BFeycbl1dIXSxxRax9h2FYC1Q6dqsM1tOHjuMUZFnu9yvsnbkwC2js7AvbnbPdoZsB%2FN%2BqGs81GQcJfukIe%2FidkYfGjcD7bh7iQuDwFYl%2FkshL%2F8jmZ4f32%2FLboBSj6v%2Bd2xRQWYo9ZgvXuBIOSGIvvxli%2BIH9AiLzfinFzkbHljqtpwbqvUJrjTz0L%2FR5xLGH7SuPRVUfvWfSYjevbKp8lGluokoars%2FsZkml72IzgVy17yH5dyVYfnH5fKagR0rzC0AQ04Am0l0UDIuWu053wuMP6RJP4xNUPEDtovX7yS2HBZi1J8jgIYK47HMg07d20ZDnk%2F9w91OKjAj1hwR1DyDIsIedG0hifpjur67R8E%2B9AzW7ocioAbwpOijmhX7teaTHqz5h91oIPrmJ8lsLht9OzyvVYmsjaeWHBEZe3d1Bw%2FxFDe3s7Nhjjh1R1X1vfC7D1VaT%2FUCmybwAw6yQt1d0kp29e1w7pD3vjcLne2BNMPX3gMUGOqUBAWaCsUIAu%2BpOQSG3S9B9Gc2ByxXUye21Rij5oeeJgxfCNErX1w2rNnAXRGN%2FciVPC5ViNVghvEp7%2B7FJczrE6s8aAOs7GC8Fepip4%2BDgT2%2FVDoXXDnkel9uyWUfA4XCuvQrA05O%2BANmKyu0cW0IfQAHHMdHqr9HMs3yITyqNu%2FVAbduU4AjMTV6XPyNFoKXkS%2F4%2FxK7eMYT8SILtmcnNfx9IJlwL&X-Amz-Signature=6e4b64db39004786d2e0a6d43da50b4df1cc601f9d250f866831645ef1c8d8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
