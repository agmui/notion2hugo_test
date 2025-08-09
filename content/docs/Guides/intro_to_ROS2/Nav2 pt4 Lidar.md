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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BLMHV4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTNQ7WytJNLC7%2BY7v7JcawGcVz2p72Omwg3X%2F78zM6agIhAMUlfRdmzCVC2bNgR01rlewPrOPxDEJQc9qwVYmAl1M5KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz39ky%2BbjnkZBMmZzcq3APg3Z4xio5WCx%2F05GevTpbBKgtUfUPUcC%2FLQ7cM%2FvBymF%2BjF7B0JT9tztVUg0oUp%2FoBxMhbPtEgq0qWSW1oBNEE%2F8JJaisoVPZOQijV4TwIxEjA6JD7Zwo3iOJn%2FEiy%2FopctfDxW8hPgKchBBNX4ZfchN5eOIbDpDERAWSgPM38fV4lqGmVVjyLJRhvw3UCfqVlnUtCP%2BUXfgvkhm1G9CKKNlAT0Dy21pRmfKYFKDiTZv8jEhlrQLRDVEp9yMBspCZQaScYlTd1dwTTO%2Fvwm05wbqGJLxolAfv3WPjBKWbt3xJEsSd%2FpLvCfP2RFNaCqI3HxPKeoWaqw13cavSZobzSpM93hX0AcaC9M508160H0qQe2rHAnUCc2Q6Cw%2FCp1wJWcrGqP%2FEWn0sICcM2mS8e6lPLlPQlHLtXsxD5i047fUobZggO81v7LUDBGLr%2FflPAqjBt1wTK%2B%2F0iEA78myUusD88%2FYiYRUgCPSvZeYF9kTQbq%2BUVO%2FwTGHj9GgN4EAxYMYVOFQg0A%2BpuaRZutaokoygGesIIf8PCFv4PO%2Bl%2FwkXjbDOjFrmAtCVW4eG4x%2F1LybeF7iZvEFOetL4IDlGViqUkCbxkENtAtaseVfL1NCHEZJQCWsCGH5PZwjC9hd7EBjqkAYb4vPjzJQ3zTo%2B3L2RoMT1%2FKYYIuWKiWzx79BY65RAMKN8FdQ6%2FyLnVsvlViAC9OdRYtIK9NrJitcxuxfa6VlEytv5SZiP%2FbF7rNA%2B29U9x1mbosxzzizdvM3tmjC62KaB2uMFb7HgqrJ3Ha7VQEmX%2BofLioIJRbC828LUjCyf3haJniOa%2Bp8%2FxSoVyWrJLi79I2L47G6mGl7wDdhEYCaIrroBL&X-Amz-Signature=899b1ccd812e12ee011cfd6d0707818154acbb971f2e02a6c43d0facce712a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=f9b846cfe60ca55eed0600261d0b25448aea41b91b11d6c7abc348a6097958b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=05e2c87c087807e26f2d07b259f73b0ee6921b111ec1748d8ee9520aafd6060d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=07baf833ea103f5503f3eefd50a3f22d43c2c9caf07444d1d592960d09cfffef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=6819f3a7ccf500c17aaa05596aa8bbe535c14de47ce76c76f6348cec7ebd9f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=e225c4a12528407eff2d22195eb1cbee150448bb4424832877dcee70bfa71656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=1d35f08375f0d5b83bcef3e6e66bc0308f92ccad7de9d8472ffdd2f33424a312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=382faf6ec57f8d70c6e7b70abd1517ceb0ace54dc0162835347596c37a46a93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=fd419c47f1c9719ae207ab3527cb9cd627a3d9adac18ceb5a17135bb5999b97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=b4a9c834303c543e73823f5b43e910f6270718e16f77d6f0e75c32c47daebf9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB3UQPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdQm1qkOP2oRzG7RRNcrtrMe4F6%2BWS07vv7XEvb2d5zwIgPM5ng%2Fob5SEGTK1IyvmOsrpb8bY8%2BBrQHsaBnvbJpc8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAinlIwCN%2FVZtfAqSrcA6ZTMpfKfn7soiyYpmWlry%2FRLA4b%2Flzx3GDqdj2r4mm6ROQ8qq6qQkzU5AvRvKLJ7kYD1Dpvlhq0tvWJnL3NRyc1e88hUrXY3dbWr2dFclMRvwtuSkTXJ%2BxSgV1jOzdN9IR4DDhKr0PZ5p2B8toNZcDaJynev4oxBfi7Yup4iDJTxuMbfvAvTreXQe0O7MmpFYjuQzTULjilFl%2FiM9aglsa7nc5C9W03X5TkUogUSRvob6pKQ6%2BUwfyM8QsRRUEggZv8dpVg8rDVPrhzQ1UdUaLoF9iXIr8cl33HDRWaUv6UGdvwOMIx%2FL6r7P3Nf3Y4tLLdoUw9%2Be4EDdGNEXqBjVlKwrDMJV8OdrajHbJ84hgq8qaspDwsfjXitUKex%2BYzEdck7HWQO5g4n1NPvjArpiMIvEhb3Qqb5arjEJXEbIpzDYX3lIiTTS0ZKq3HZ0Ox4VjYdiN6NIOWdtcpwW3FTp5QksWxGQLpQlvAZcQMRf2CLwpTraXuSMf2guXV%2FhrKybKKRPMvCFJCvSVKHiSswzQxEQ5TJc%2FDJ0jxPVZ1HS%2F0La6aN1egTBSlgj6G4hbHWtZdumqCIH6i%2FuKrrrrOEBiS2P7yoq%2Fszm4Vz6RbE16wGvtQtmSAlzOUmiu0MKGE3sQGOqUB5tYwQ8HShLimjFfIh%2Bxpg%2B2fv5REN0cfNg6XzAtqasr75DTqae43UYUEolqGa1ePe1kDUhwyrfQG2uv71mmqVuaxukENpHFuX46m4axRralUl5B8fhufDkvFD8j0lFLGAWqwqPdX3PQd3vfBZr3XbfhQYETYkLxrtmPFApcIBPn6AhHLw1IFejaG2IpnhjcsgDLxvuBka9%2FJ77Tpvt00pUkdYhOb&X-Amz-Signature=4df25cc4fd122035804ae66a5d84706772cca5f6892799e1c23e64f557320ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
