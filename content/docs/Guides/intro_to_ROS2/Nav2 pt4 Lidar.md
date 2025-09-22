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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFD4Z2B%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNSwaOpugQ84kyBLefAPcChVOBANIYP87Hh49ITCt97AiBSEoDRx0pdgksERT9MhATNRluvEEqr%2BUVC9dKitqyfqir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnmRLl0sOpqUn%2Fjw3KtwDMhA2Qe3kArvMiPeRxKILKv1uCUpb6wx2YX7bQenqtOsQRssHtXhxTCXueqRnqb0wZmtJJL3ZqwjEkxBMfiGQmngZusE%2FCCoBjaOVwN0JSGh8R0tlJ5Lk1Pw44ByXm9JuYBPkvOmsxKWYxW%2F4nCI6Q7pUz3NNx1mCqHmU9jZdoXtrJuXV8UlP2DSDWpRfgVI1aO68QiLPWrRDuWPW4gdHTucxx8hngIdNSHTlvEGeJQ2yit5GG88LsCd8nks%2BmS1L9Q%2BhfnAeUclLb2ygwZVK2qjfYuI2ddQgP2rkGFpF7tCAFsgZ9ZkrOnvFQl3YI7%2Fxeqc6AJ%2Bv4l%2BYnDFYvn3xM5ic58wFcTmKv0MMT8mI9H9GCw5TXtBsp%2FvZL52WD4GFkTnsKf8BY%2BItCKClqMsjWE2H277dq%2Fbn%2B5uym7desHbxvo7%2BkGpbE4k%2FJ2Y1SXicWH26%2F0XlFeoJJ3Q47N3qsdYp2gSi1tSHM%2FLS1ox75F64sXV3sbuJfPQmVJXe4Shmz%2F1AKV2V8eAFc5wkAurN7rYHm1I6Wa0jdORxZVVLY0kspfYGlglujsuoFvX5VEz4%2FOpZKYFcANO647Z9MkOeXAzUPWpUiKM5bZA%2BPIW19XDNTw2sX8k5dgaDHJsw%2BcTCxgY6pgGo41VvakcxRIQquJAFwGN9YPHqIQ%2FvGgJGS5ZKqiD9Wwwu8T7s41sT9BtO4LoGT4LaKm90kZMuYVdbpsaqQcpvlQXJHyE4Oz6GYU8enreUwUix87qHBOuJE3ZF3Azv04aMRPepcyzQGBMdIhcKhzxtpE2AX7mPrW3EHcBYFLAVPdxgJSRALn%2BoeNbPYFxlwrpd71zGxZsvyVuXOWRCZ1Vz4W%2BFKllJ&X-Amz-Signature=d86369a15fd631b4a957fac73b6f3c7ce69419f3b20f8a58c1ed013946f35c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=5628910d6f8c63840223ef2f1d338922ca5d5849dcc91fa631b18451f0aea7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=b429ebb18da9d26b5bb27ee93096a6d66b1422dd6c5a0bbe849432ca02779250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=770ee054866896405f0ac0e47c7682eac913b002e2d7fc8fd32c4e10c7f40d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=b84e7ff0710c39c14e210de3fdfdf77542fb2bf4f95d6118cb73b7055596babd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=ae4e3c560aa36a1c61e38d5705dbe0f868119ac351902da0342cd31022ee9105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=5d2cff3b6f6c364b9b6763bea9858cb55b72920d9eb076aa98c1e0fa5e8fb309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=e76e7917d3d8c587ff60092f2950ec64dc322b2b3f7f83e47533047e1fd9e962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=d83a22992839843a21331ab4bef130c068e37827a0e53e66622558e86b0756dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=d5fbcbdedeb91a576bd2e9b0748009e5a17c1ed1ab8de6606173f65b7408dacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCU3XK63%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdmgv8%2FWpT7AxtvjVWQCnlwWgriY7hefyYliLS%2B%2BabbAIgGmhQ6xFRlwMQaqS0wNWG2afAQJJT8B8BEQQJlgcKhjoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH36bI9MCjNqvTXG8SrcA3with2nx%2BL6Fokpfg%2F8MJXk6F9OfEJXifgEgKib8qC%2FZECALhyxkiLPNroXpGLPb7%2Bs8QW83nG3X%2F9AuhYl38cvkGl4MVJ5yWvvxpo9wYinHk6lpaKj43gQeUHFJ68ag9A7KRjBNuavv8oGkrVJa9%2FW9I4TvITUP6gSuFdzAAjMp1kxDKHqSuh9SlrJddPJ2%2FgDTRxY9BtOkGpyv%2FJFxJyCu8soU9sA5mBKTD4qeuCLH6Qk7LutCbSVRECngjKu4Oh8LmIRKMLLpfVXNYhfqkJ8B4fO0T94c847qzQFLMDP582yc1fd3Gm4NYtw3FEDd2whKSMEphcbFJN3bd78AtvkH%2FA7DCVtKVQVqSMH6S%2FL0adoM2fwAWvXHJ0gYQ26dZwoHTrKuPJhCGH5XDLhz3mQByGgD7ILubPAAQ2Hq2s0X5S8k5BOe%2BSwfVNIZwEVz3Mjs7ndLSMV7pBjeJ%2FsMhJq4Ng5GUc4nwPBVB27jQuw6zUVUlXEYXSfqEhRweKgIwmtESY5BUR%2FQv0m1Ab6jXJK2ASnjMDvNpxCqilgaIqs6BhiyWmMGF8l8FLVIjQRhtgFCbk2ApH8CmLHIuQSy9jG8M%2BCwly7jDt9xo1GEGWqN0NvHwOekzTBTA0bMPfFwsYGOqUBL8C6dbrpIGMzgCPRK6VH2SL3RbbRk2sD7whJFA0Pgz2X2p7jcnUsGjvFJ4VyHpnqEBU9yRtCc1g0BestnC7sMfcBG%2F7lekoJYa0cL0zX7ylSM%2FgfowkDqxOswoH%2BLQu2%2FlkNCZ%2F1OKBHI%2FqYHmO14RgRlaXqhiMiIzrTs7kWz1%2FVYkrPqqpW6qQ7h1%2BwLVOHCM1OBS1xwpJVWlmupBP3Y4GenFSX&X-Amz-Signature=b84e7ff0710c39c14e210de3fdfdf77542fb2bf4f95d6118cb73b7055596babd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
