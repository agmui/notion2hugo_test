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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRJUI7R%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICRzEDIhVNW%2BPNUMnCYgTn3NYQ3t5QOOT5gZkHJKnSOHAiEAsnyiJ9NfBbjWC0tVA9sx2VTmUDOJPSGd%2FaZZqU%2F6Y%2F0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlx1dCw7pgGBjZ9gCrcA7ffc9TXfL2QlwW4Cl0OotTyppno%2BkpPbUgZWienQlKfmc880tB3LuUI74UokdcvEq4YQGXD2u8HUdr7qiK43r8cLEdUFKAVFmfI4znHCR4wkfAnMM68kndV9mnR2oeDqe4VN6OGvDNPxOTkOJaiUPgp62DId60ogng61RcjO%2BfQey5yCSrvrh61jOFdvnmNWk1hT6lIpgV%2Bf%2Bx53D3s9cl8%2Bh5dA9VQQeER2jQjfDa%2FFNGmfKNkIY7vR1XzXZDx9Ec2PHiTHXy8DiL0aX1cl2uDgJzFmSgVthxGZJBNwWPd6%2Fq9RlJA8K1xPOc8sp%2FmY6UPLbjWBFz0vEsqWfUMyRA5in%2Br7HR15L2AjPaEBUCOZqZr0nS%2BPch1AI7gZZ0KaxMu7aBI6vKaaHpUHlZsW5w%2F6UVOHjEwizqnq1lsahTp1YgC232PCNtfNpc1wnWfyiLlVVPwcbG1%2BQ0aYULgFZMAZYyv2sTvaa%2BsivpZjGb2UyXpYPeCFNFXCTaKkk3obHAX85HPzTRU8%2BwfsoeUFDdchFKGNG%2B8OQ0EOkzU4divjx1BZRLIiMiV1Upuh9lG2E9va0hm%2BqosWfcrx%2BI%2FI%2Ba2mckQqZ7rLhGJJZCfmBbeWBToPxLjNbwNnNVvMPLmlscGOqUBUuekvCsn1Zd8G9lzYy4mqDaBOWtepL8A96RtE02Ji8C2Z6JnsEdn8pfXvnU%2BTJhnf7CrPu1AY8W3n55lBr2IkcYTq7hqyxyuwhekpCJ7VAJBnK877Wz5i77c2iaNtXi7wlgt%2BZ%2B4gKJ8VcS%2BQ3EUTbUiWGGJzkdwnafO55jdHGc%2FLo54oNWCJicWWwX9fKSX29Yp5GkvluC8IYUN393PKtLUjtOk&X-Amz-Signature=02135f530f11adf3648ca5ff3d1f1ee7963c5031f767051feafc6a177d4e8b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=880a0239d2abd5e61d8e12b1464dbd83c506bb83d3b9a907a33dc2892cb6f3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=07711b4f0066e8824a79c56d22e6a8dd50f32326de3fbff7e37d16d7c916f57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=d11f579cd1598859e903866cf40f9aeeaf80956e6c4b0e5ea6f81198ec7552bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=12da359f75b7e0ddbaecb0892f6a53946a45708c38cce24d6bb7c33362bc7d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=993695be1953b18dc638e8f99d82acba32fb2ad58d749ceec3028d09ee9e4c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=c524458a61403c3fc3b9f9ffb2cd792b2ece219eff3e41cca1bd5705a9489ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=14f154a79b75a81cdf8c96fdebf8ce2dbbf85d13019d16d0f7e150a7ddfbeace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=c7626136777db8f73a5bae581986da331942ba5e1f6f2d98000cc2b5a4784b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=114a0649253163ce18b4ff9fde22ab6ff5d5c94d794043e6cb56d9bfe0c7ed1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=12da359f75b7e0ddbaecb0892f6a53946a45708c38cce24d6bb7c33362bc7d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
