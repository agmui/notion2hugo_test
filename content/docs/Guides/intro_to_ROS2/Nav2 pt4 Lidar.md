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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7MOU3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDvb30QnYfY%2BdVYDKQdmimbun%2BIeDRuOKsifbexD%2FSDjgIgY8g%2FCtC8vLVfSI6KyJC7q2xvMGZWMpDTGCKkIyl8wDAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7VM2VsAqdv0GNFFCrcAxuazRpSNDnihJO03y4NoAQgpTRS7ZAaEs9SyXM1KYN11qgZo90FGLb1qCXUKB78IAM6HC4ZVXB8R3sf1JCvnsiqj2yzGI04YK88yTde9yN%2BMS9lsVMBBf6fHFoIdT8rOQNhkHhi2DXU5oq4CNkim%2Bzk%2BLTqdNshAhBqPWZui%2BgPpVkzY2RfxFxK7mzjy8yre0SuaqDROo%2FpwsjyKszT6ZDEvIFST9EM8E9ESNXmbCvCezeFQBF55EE%2FVXv7nU6fkDvdSdm3aRZ%2Bh446mWkdfPMZnO8xWqCrBGiUl9kFDTP9k29OkId9eZFDCGAtqd6DnTA3KOL3u15EtoOifK8%2B96%2Bl%2BiVoJUDBrSX9mVmSY05fYg1n2k%2BPjxOOnQZtHeJUaQjFnRvZbTmWqXabSEawmE8gv2O%2FkquKBTrzb5Sifw9608uo973g4sBfVJuwIFpHRE0trtsgTOoREsT0xn1aeWCnBhygiQ9F7I%2FLpBoqxBtrCQPUHd7tGeTGGwd6TixFqSL%2FHz2125O6I%2FRPlOvMP73DXZY9MdzSvzE4raGk6gpJMfEPcTAxPfszKOPY4In5PtkbIzQLC5SLOd6mYFQ%2BrU33vXHZFPIQc4tBVVxe9PD168E9JSEqm4nff5YvMKX50sQGOqUBGd36TVj2u5r3Jlhf%2BIkcAJdZIYC4Md2fMkMYfjPksFPpsWQLYXSVI0w3hADacBj7ACkmiUfZN3%2F3ByLuHIh%2FU9Rv2HNqURJgT7TmJjLzFbmxQXcSxzvwC1QKYdOKk6wP84NitmVVfPDNcrnOdWciF79p1T9QHIUa6DY8Mnd0uCaFBFrjgks9jmEJiDVhDahoZyo3T0hFUETByrufXgP2zJRfzcYf&X-Amz-Signature=1bc64a7386d617b2f2cfb2dc9cf6d7c504e11fe1b69b91b8942730ee6380d9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=876c339003377fa3dc1b474c461ef1882844e397001e9df941798ca08e78b2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=3c1dfcf7fd363ea3f584e3976531ba3ee542f1a522ab1cea9d7bb1edd62fb727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=7c509a5a2a215bc87e5d7b6c5593c70c233241d9b55673086669719f55b7f262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=e2ae31f6b8c0ed495a73fcc21060e9e40b0fe83181967c1250f3704c54576775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=c671a6c8be80b37bfdf68a745366413bcb967c64166486cde1da023e8fd09003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=ba3a4defd71569e596f73fd18b883b8ee1b0f5d456266a99247e6afe8854dab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=42e20c71ded4dc8bac70977a38643274be7cdd1b41c6d9fc07ae469666a14e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=b0f0e85ac5ced29e741561c706278b96c35384f068f1249877fc08d3d4e52163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=a754a0797f6d3b41c988c7547332e32c673b1698f3620ab432ea5c725e8ab8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCGLZBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxwxYTWgRlcLpK5BNVpXFUk84hlynjRtjCI3uf1Mu2LQIgW%2Bad%2B40xyj%2BKT5e8YIkaGdEAWfksbqoGpZag3BCIMecqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3rdWnTT3qVdH8xmircAx%2FbCqx%2F5ALq8QLRFmr4Hx21oYnj6CGtZsxLXSZOo6UQSutxWvXxKgREVWxyM8q5faPM5dLhDIi8HUWR3NeY%2FOa4hEw5wNkoqrHurt8ya1P%2FUx4m5ra3vZq2sUTWcfsVGzrMvBv%2ByeSv00SH5hj7D7BP5FT82fraO%2FlWf8BpAW4gXYx%2BjC8UE9MIQM5bRKHvPJznAFbSHjp3yZW70VwOsQAllFr9W83RnYyr6W0LVtsmrfECkAiIuxBqaId9Zp47IiDApCYQoSKOh0toK9j1X6kol8spPL9LSA0KtshAzVf5WYnMKyP4Ukxt7%2FKeFzWdOfJJBlDD%2BOq0vi0jsAZAWLfeddlGst194yn%2FsYNDHd9PjMfxH73m92tz2IEqJh2yFQtT0i%2ByFo57xgDoT12e19ddoW9GITOPWCJ9JXfdTsff9byfVExdivM3ASSC6yULrj%2FjK8wl2VWV%2BasNCqQPYQpGhdV7cbtYbp3xFtj21p3KQRGgt1wyevf%2FkVEuANyv4kGfoMkdDwWcv%2BJe%2BzelqBIc%2BdJ8xMo2DXBpJVbePA0oFg4LhNW8FKK1l8vQ35vKQmUhC33O6gic9NWwU%2FUAaO0mGKUUEfcfywpfa4CTNkIFjDqzFQ4Y2Z7%2BffxMMJ%2F60sQGOqUBUZxBh08zD61G32rTzzrM1YKZVIdMonshEzChC82UXoJVyzFtF4OMVbvtZuEsOv4Wa0vTveEyixTmyEuYsMmXdLY76HQL6h8OCHID0aqW0UDVLjeTbGn7Yeg3DDF5UB1vrr5%2BGetjvFyQl3rxY9oakELze5VuTUSyUsuugsbMf1W3e%2B%2FNI0hazgX%2FdslstJDeW6mW7Dn86IsNM%2FDVJnGJy5aGV9rK&X-Amz-Signature=3159cbb2407265faa579b58c721bf3fd5255405403e7d543f4ffd426339d0eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
