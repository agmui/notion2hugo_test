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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHJGQLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIF5k4ua620kxHswHcQUqpGPAznuedrgViBWUIgOoUfsvAiEAt1e5a40uKE3K85lCLnDAN2hXY7aFcMDcEjN95z7iyiYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOMs55FQ05Ew5UKLSrcA9QmzlzhPhkMs4i6QER67yBz0Pk0eO%2BAiGCnCL8o8ngVLmXgHGnPHF%2BhSLSe%2FhAnDcfxOK6IL2tWRt2TeIgbXRe7WRQmnGyb1%2F9opVeowUS7wLbImrC4l0lae71HbG3LKjPRbHZpm0J%2BPmk1E2oWCuIH51lD42R8XsQJh5LMWomtnP2pBzDO0GAJDZ7r6U3Fl89A6hE5%2B5ht88fOIDkVtQLKSH5JtT1jdtJYsN0zifO9jzQwrSbNEauTHlX6OY9g1qNGUTllfrmwPhErngIZY3T1BOr%2FaOGgrD0xwvnxEhOf9GiBqNg4WGNiz2C9tTLc7te3byV6d3tPOpmzki4SuyoY%2Fu9htgs4lY%2Bz5G7h9CXxpIhlT8IFGSe28sNHPjZOJTje3XwVlt%2BuQWZyHVooQpylsu7X9eAeRw1cngqy1Yg2EqcEsD2P6tNcoAMLF6x7xxH5e%2BZH13jmwYciX3Rsb7h%2B1cxpeqXtx%2BTtlPEYte2%2FyjBzGOG%2BkjIt6KYjaDmUTqTu2lSDTdOFKWC78G6DkcDfv2lLDEnkjMwbiJ9HPj8m85jLnCF6ORjzG2bVs%2Fy6%2BG8RGGuYp%2F4iSURtSA1NN0TRhA2%2FPpq4Nolsl8CHIolfXY60oR9HbI1CTcRkMJ210cQGOqUBdiwO2McG6i%2Fi0QjCsRXxMEiaRPd8UkrbDPX%2BNfNko0LU8ENLJxaAMqVK8TBP8WiUMhvJa6Ah%2FIouRNfIwgOkWWEerH79Zr90k3AC6HTdBiuy27SK28RSjDCOwIzCubqtcSQSYFRQhvX6vDdkuXlR6eSj3TBpkmlC4JtXjZu3Tq7dRhbnFd6DMf4zUS4WSB6ry88uJSPjgd%2FzjUai79lrgdL61U%2Bu&X-Amz-Signature=8a226efe09c3ee097599b83a7eee356d96c916e48fec0a3cc7e9b659bc8b861c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=519d8979275f97bfe61e63756f8b5ca56aee57034ed3a0a63c837b533c9cadd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=972e12bc60592bbab234eef5c14d667bb71c9ec02d5bd9803fee0d7c929d93bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=1f756d44cd5948d858d1ed352c537291127b349f2c29ea278f381512dc64379b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=1159f85fd2e8cbc96c3c707a0bc18c9a73fd77da68c9b27fa53edbd7643f2234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=7f663a27835eab15763621125e6e2b68edb2e75690bc864df86bf739835155ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=e41eb74360df27560f298dfa2fd88c9f38b1645ac3173b67192743ff9d0e8e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=f0cb3d2a8c20ca160484684320e9d38ddba25a6b283b79b968714f15928cac30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=cc909ee44a5b447129b087c18e66239cfec44a697d765c6fc2c16cb009d4238f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=6c92f53282b58eaf9e6068fa27c7070eb7ac74df29f652d1b230c233f054d53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7C4DM3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFAswmpF4UvT5eJox7icB7zPIEeNR3mzxZXAgAu7Oq48AiEA4KDmOVr5cEsXZyBcRphQWdcrgZ2BMwXNan5cB41rXccqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMyrRDTpZy5PMJgSrcAwGVYy10218mfDl5fcitDL4TkyQ11HPHdDPNTQztk%2FwSjiXsy06tSPZjBqQWLwmosVsGiVeWRhIfYleFShig5zXeVL3DFA8wCWy99Gxq6G1zlKVJ6wyxrV7JSZX6URLnYgH85XpoAmnNdkvrPUuhZOyTzDR5YPraUzofLUzup1MPaTdh%2FAzyUOy59e6uYqcnCJuiMjOMbqEU4bp%2BS%2Fgttm%2Bkke7XQRwbiOQjVgkxBIcLM5cc6qeKiOVwS%2F%2FXKHXuZvMTOI4GkTObZA%2F4qtveM4F8z8RKUz9m%2FB6HyAZurvm5J8jjee7QWg4CTQQwPUp7OLyhHkIN8VbzQcq7gLViUwbInnQiYFE8BS%2B7noKjYa4oRimNkPgWCvocUdIqL6qEOImdi3MRPIwEaK3lFuiZwaaknOQhM5DofUHZun8c4WD27csD1kuO6SxTd5vrln7k0G2yW52uj70j9RAIpH0LtdwnpRxNjFmm92%2BUTZLZ4yH5%2BZpS202Js6XZItqOLszdhDlnNgOtychdOItEZe5TSFF3%2B%2BQcpqwxRBmmPXIp3nzaefwj2bycadlAMxK1MRCZSGYaZPxm9IhvFHbZOYI8D1HOfYNY9KTiUblwAph%2Bibf8bjCnPiwV5%2BeU4ck%2BMKW20cQGOqUBFUh0jS5w2AplgQHgPLNJ33SpolWRF0LG5N7NOAxI3wsKVOHkqhRpo7ZbJbVP7sT3g%2Fe0O1a1nTioSrAlAhADZSdu47xCj15yMasTaXWYQp9joi9Opaz8kCwj3Imc7k9yHK1kIeFapxIISyjyLXGpu%2Fqif806L5YBMz9aG1kbRvj4tEPHO9kj7jE2bvSUlXjgpjCS711W5yD8c70ixCSlwMajG%2BXU&X-Amz-Signature=4813b44b2ff9f63e113bdd2aafc581f1b13edcc31e7c5c1145546c5ab4ec2b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
