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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SNYFZ2%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEFnm2ebYF4p0wrw3GY%2F0ezC%2Fe3Ferv27TqqLS77Yq9qAiEAoxocxdUWqU%2ByDqft%2FQxZYYkmjtGsIxGI8RUK84P7d%2F8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJwCdbT%2BiFSANBmBrCrcAyFlR7LU1f9VBzsN08xY5VJ0T4WwYpo3CqjsfBO3f2IKOPtVuaQbx7bjXP7w%2FpgrrWsNUp7ffdAgMSeboLg8l2wVPeDNlIhDea7GWcOCfIEUX5GMJcAWXKCvka98ETtPs7hXLKleNxg13Sqit3pBYAw9gWhVCrKJz9pfLqxxKLVTAAw7d4Ng4AcZEQx1jUs%2BWIamBETRdR7vCXlnVTP4q%2B82hTLLKDx%2FkvhgLs2yHHm59MGdOJT5vErFKh4MvIz%2F46joFV2SCgmyFw12JuO12tRRUaHy3Ei0EyZAE%2BLQyHuKiSU9IyA8nhYUNcZ1LA2NT2oY69rtATB2xB6lqojeH1%2FtM7CAohYZTR30VSUuy55dX58e9UFA36q3RtehMaxPuFeeGib1Ch4eojPgEJA0eL4KNiTA5QJTUhEzYHNhfFFQXOptVClsiOwoU3vi5E81shqfydPk0l4HeSgdkKGEBvMYWOgorKq4IMYPTjmD%2F99c3ujsY5tHcut7rmWWkBz1aJ%2BCVC7IaObF2lIVvPAFwkMiZIBGo4OemAG4NF8Opi0b3aH%2BA%2BGkzdlAk7FOOeBtvBLcVmuboCG1q3Akl0s1o8ALLwE971OdxJX8cpyWmMNt%2BpawGJ8vKJqSNa4VMNXomsgGOqUBv6n6RafpIRVgBXSYENQlNHfPMYsWs9Bfbplt3F7vES21CbRPlGnsmbX0Spje8icv315XJI43U4kwIhH9Ybx6klUQ1ef8WM3GdYOVn69YnXymzzHv%2B6VxsmjssXx%2F%2BB%2FXZuts1LyGTmlqDao8YHmhfqQKQgyhe%2F2ZaBpbPkIk3GK%2FRt3nuWawbDnsdo4TvrV3Bsyey4StKZHhRb5GYFwjfnBpgNus&X-Amz-Signature=7042cf335cbe1221c6ea162eb381aa117de359d29bd3c4497a2fe25ee0c9d65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=518bc761133b797b92f1a8449be069a04b0f08a8aadaee7e645f8afe7c9c1520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=3b94dc35ca566e1cafc1a2765b79115c1fb46e2fc456e0012ec715ed39ec3639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=87103f579c43287ab5a4e2d07456a4ce2fc9126aa4d2cc5ff0684feee8b373aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=5eed44a4447a31d282069f84223e2a9bace1f7dc685dd811056d49624a84f2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=f68776b02f1a4528ee96e25f8eee93bc03b91577f46ba77a392fd0775b3732ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=009f57c648c78b29dc44a3cde48df585cba7cbc8350ed51b5d2d2391b45d93a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=d5ce06d6197c9037d46164ec1ad95b66c92d16a23b9739c1ca282de6510b1cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=3b92c5e44ba2e618147bb78ac4cd361d58f8cea4601ec48adb0d668ed4c765fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=1d260186c05178f3e4233dba44591a83dccd0396f5c4aa195caa49d8a930abb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJS4LAP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtumi1jFH9NCzKdPmvbUTNn8gIebmWzW4Os%2BCIzHr1lQIgHmPik7okWgWs8Bj1%2BpQN1Hk03MVhxbMKv2yoydOxmvMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnD4TbxZL9XxPYSrcA31WF1RqPi6Kx%2FHGCFhSE8Em3fuG8fjIwVt6KIDAEhuguDEoBKd49cM3r3VfIJJNfeJyKd1Vb5BwvX5zP1Ta4JtPZIx8AeXEf%2Flaj84WM6MiLzx1J6CcUsnClVPeYztjC2FjqlfoK5u95QcC93%2F3r3MTCYQ16rxVfC6c%2BB0XCBQxcwLQCDTjQgB9%2F8aY3UJjTzml8Gz14WZcNzUg%2Fd54uTH0beGo5UZI8vqAEBjTdP%2Fa%2BX5%2FJrz45Ww5S%2F61BaQvSQVbywthC2jkFX2IzY3dKoCickQIR9HTCfKYNFpLO1CgiGUmUxCAbIQ%2FU%2Bi%2BofcwGEiMv9l9hhX2N1gh1UfEMYR%2BJ5tOIGK01iOx%2BhrONTp%2FOuoY0LH3ATaEWHNzJOUv47uaJX6JJjWDdq%2B0X7t7zWD45zFV0Ae5rAUJw1vX7Sfq3Qxn8xFbmOVY3XSnsNleKe5jr%2F3Jqsppq%2BT6xT3O7FqczkL7Du9kT8PokbRGwDlvblS32yotnb8qI25wJTyAanYVMKij265pXe56mxdcev9NC9jsra8VtkesMRQP70fo7ErKVkeragU42xL3yH2tXrDaLIicFHvHKaPTxf1o1XopiMQV1GHXzhsW4fwlLygbcIGGyM4udtouYxltMMnnmsgGOqUB67k87Ujfkx7gs4SZpS9IqNfSUhfjgecqRGuYvIdhqWKY7ktMu%2FX%2FFNQdnAgOZpswagZ0QESPwADX8DUPdVWhh%2BbC%2FlPjnK6oZ11jOAQUP8bU63A9lR7Io7zKltZsWcvMNeoeML2eL1jpjz5JhjIDKW5%2Fxnii5DqCVgE7zwkRR2AL54zomzcyvv2h%2FUcM0mYybI1lf6XoT%2BMBrFh6COASIBX9x05R&X-Amz-Signature=5eed44a4447a31d282069f84223e2a9bace1f7dc685dd811056d49624a84f2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
