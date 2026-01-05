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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6EEP2A%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCbOJfu%2FtL2O%2FzLCFHA%2Bg5gFSba0JWMYYruPWgs8cOynwIgbQG%2BHhot7qan1v7%2BAo4lFECXo0jtKEl%2BR86gz3WpdDcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCYP504CfAyUdcJufCrcA7RirAJsDCopRboSWy%2Fd6l3cYaiNjjwAza2%2Fkf82xHgND9PI5hyy2MlEuDVLpmsvPhfOXx8KCLrhzNXGBRmB9fqh7Gvpt5vOLhS0FvW%2BLvnlN4kTYre6och08uGsN2QPa5LymIuYLRRo5EUM3DtUfB3oP0vHUbaDW6XX9QOQQFwins3QdH4fWQODqgl%2BY0f6dOC1HL2ESUA3ucs%2BFHGVS9qkxouV%2FN7Mi8aZfCHd8MR2Znn7peKKEWd9Ha%2FxWg8ItKitGgrKMNPTZ5lVJbR%2BS9K48I5cSVEjbE1Xe7sCGp7M7mMrO8yYCvoi8H9rW8AROutGptQB9PNxyZeE6JSCPMN%2BLwn9UD56dmqaEmPpz0yjR3IGbm3Z8XWNwnW7sQ%2F9cY1BFBUiM9pDgJ6xT3Lp2%2FfZYEkm2sS4xwJw8YQvz3ufIFArU5C6uBhfbBCOrxxJG25TOtBO8SZVt3nt2Un%2Bk30KZVQFPAOgmcjxo55Vljbv5UFel%2F5vUMfZ6LpQ9Y60hYdUs7nbFHBuJPZ%2F8o8au4EmCayxdubOhnAoIo5b57NRtZw%2FCgxmmye%2BSCL48ZZ9020ta5c3S8pSkzG19OtjYhDsePLz1SNUV5AnUd0t9rcO3clZ0YhT567%2FewQnMOql7MoGOqUBl3f2FaDnogeBZ9LROVRk5RbvlhP1U%2FHM02Om09ozb%2BEm7PvXywZ%2FkAYQEffSVlE%2FI9tgKqtEsxYMaR26TO86c5DCHRAqJzyjhIlzMZV7atlcEwwsQ%2B3BauNzxK9b4zm%2F4yqwhbalcN7q0NBM6hjA%2BTswnp%2BZr1NMlIxvro5ejI%2Bi2C3RIbRry72woSUb98JDp4T6814lwcukS8prMeejJutoTYfa&X-Amz-Signature=6155577e9d59746784d3ba87fef90fa6cbdf0e3d490c1ee6fc0b7e9c7c317a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=16e4c4818379456db6c830d932a10dfdf650ca72318726ab328bbf29827f0dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=0610b958ca129611a7fcd0ddd068e6322a2c7f192fb73c47b3c96974aab394bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=511d26474360adfbb524cf2b3f2fa9d348fd91a889f8cb4f6a341bd070019c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=f2e85691702ea8d120da7ebcac854166c85eb87fcb3d8aa7468a4551aef3968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=5f36d78bc0fe199706d41f37ce7a8e355d4341ecc8f444f3747942af84bc843d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=57d6985de03c99ffe1ce4a5adcaa6c6f5fa25215f7ca09d1c5c1963783ba640d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=e83e3e3a284c0be916d692b64edf253ffaec3687f3f37030cde08b0a73108cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=8429d8651a1401730ab3a3bc39319ad1bb33b315da3b5fd42f2e252cdcb5031a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=2e2fe87f6be01f1078c18fff927edb9788b9762593b600b4330657c9d527d51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPURLZO%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAvioSwxWpRuuoW45Yd%2FgVv86OdfOGEA40KPgk1OpM4UAiEA6MPhJNClyD8bA1mCPv0pmH6SCg8vB%2F%2Bf71ZkOMuylsQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF%2FtFc%2FA4AmdXtRMPSrcA575amTsnECOTNkvWf8opjrUy8fz9uniyXTaHEmq4FnqI31oYkGpev9a01eOD29hlgOax%2BDID%2Bzezv%2FjW1WjhlQvyypxqhGTk35aawDb8eqP%2BIDIx0p8fy3pMeYbIqIAPhEXiPpruPQv9OgW3xka1W1BPHIkmul0UWQT2O%2FD0oa8P5bGmXMoJCV%2BCSN94RZwvRxx0IaM8WG3sGUWNPy23z8lK8ARaqH0uy3gJml0ENjMT3c%2BdfSvvXMeyyVBJ%2BVFFRvGm%2BSCHoJLYBgh5gjEM0KuolirRDTySQJw2%2FY3qda%2BGF0FCdqBhuIgEMX8RnpX43ZxKGkUadX0D45dKLmJsu9dXouSSd7srvokWuv1ZRSWRVttJsqMD53rcmAqZ5rfd325C74NckNLIuZlvQYAHtaHvtN7RgPkjRB%2BGUEsGqIQqu%2FMlcEGKYIXMkC4l85hY2npN4D6UY%2FOYExQ8V0DYV9HKvYlPQNAJEwXSBxQ7La8gVMceAk%2F4vs3%2B%2BJwTsq7E0byCYAj9vN%2Bge%2FU3tTzfDnjqTm4VVrhPzfmRS8xwcQEJKxmA%2BTX%2B%2F5Yvw7uz6EClxNlCIIrqCm65Tvb70VTGEbnMQLy5foMtHxwaCD3A0OBb5T2fZE4BGWnjcXNMLyT68oGOqUBNZn3qKfBQjlBEvXPw0gDmw27dw5ja7PiWozGoVEhM69EzmQpSa%2FvA9Q98h4aN%2FP7b4Ty1OSaR6zFPYLjW8rR6zuEt4JSEXQR2xFtZ%2BvKOsIC111DjSQtV5b2%2BY86g%2FHpcoBiQC%2FuMd1y8czhn66Xe9f4J8i94rHaYhZnmth0LGc5%2BagXUBfKoT0vsrGVCe7yCSh968Cj1Le5gf2LqbrqS3PZlgQN&X-Amz-Signature=f2e85691702ea8d120da7ebcac854166c85eb87fcb3d8aa7468a4551aef3968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
