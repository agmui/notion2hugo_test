---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=43df06930468c01f045a7671bd39d052c1f0dced862ee377a2530c92cb445335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=bcda21061ba6e6717dce1aef6c1b4aeac342f89ab70f2bcbca02526f5b4f74c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=6615c5d646090177c50cf2aba211fe8b273785820a79ebf3e483e6959410000f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=90e4fbb4246c3ec625b72fd6326e28dc96340cc9ddb20c9278f7a14fb04f8e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=18f66c067092104e202ffb7f954e8cb03833ecf03c10908718c911d27b01f460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=cc04c7e39924aed25319ef3349b675e39c432792fa4fae050fd2d920683acfca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=1ad4c9ff977ad6c80b9cd0f154719f2467277de9ed46fbdd13f3ac2d6b1adb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=a8661fe4984e5272b04efe89ad9410860b2087b07f0ed11577eae7e311b060a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=fc89c7a8a1432fcfc9ac75e0dbbcfd7475b3a39a5b9258003f6ef259912fb170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RTOSHM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbvqbHXDTS81UjToiuxkf9bC%2BREs3voNd5udq5eX2X0AiA7a2m7gALba%2FVA%2FoQapGZ2P9E6D8c8ljNB3OmNYH69cCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXmG99%2BwtEMQCzqdSKtwDHd7V2crLtPc%2ByMr4Ka%2FC231xZyg%2FGce9h4eCmf3uYhATxpeVvamHs5FyqwAhkzWHq8Bip8Hff0hQH%2FTWR14kTYvPmltRj4HteQsJ7cd2FWO%2BVqBT7O1zp20GATZ8PDDHKG8maNdqZGNcEQXn4SF98iNVI3WkcSnX04EGjOeb%2FRHuc90P2opIR5ANXHvK6c8j8oWxHN2VRQVkylIjwifOhKpBcYqKUZa2ur7qQYFmlxnkMtqczY4s6%2BFUyik5xZZ4LdEf5n9pEFnwO2apIi%2BZ3ALrnmSWimSA%2BfRzH1VzzC1ZHLyEzrsr5cLrkou1w%2BxRtdqStbahV3V6Zz%2FuLwkKU6AeMyIVT13vakHKwvc9%2BjjbCvzCatc7797DIPnEusVTA%2FbDHldgDFP4wPYzximijHHyG8Lk2YX3MbGylNdcbu3fiClR3a%2FlwDY5NtvQB07Fs9crsMGmuPP4uMpyKwoqVdBkjhqfFLJILtPnRuI7x4JWLFxchQcDHvV6ya6dz83p8eLpWvBUfRyOgzHUjoyqf9WW5I%2FBLG%2FIHJ7nt3e0ROIhzS79oLO4HR4QwEDZdDQM%2FZ3trIM1o3RabL4jRXWoUVEb%2B3jru8QK1OEYDjd8CmvqqpTEu%2FcnB1imvVsw4IT3xAY6pgE2NxOiCKtwHrv8x%2FGKINXUK7%2B2J6KsrAgpc3TnrnrG7J5aSqhRU6wBzlPFcCmKI7NUZYip3BNhRi7fQ1eNpKzTF%2BJOv%2FbNpNv%2BuJ5UUTxZc9LfYorBLrn6riyxJCV7donPo71Iohg2ZG20goCvXGA1iVTbNvQPt4CmnJRqbcoJ6xt1D2qVaB8nBHUmT0%2Fh0gnA5lfc1G3sfIUor1IZNvvGK4vjCSUr&X-Amz-Signature=fca839dd98d515bb23c1be3bd0bb86e37913da985525d6731cb99a6b106bc8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN65ZMTV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkGvu3s47oslyHtUN7m95t037SSRbziQbuVlB2dHnueAiBDfm7EXel3CKuuP%2FHlunNDHmdaq%2BlsKJFfQY%2F0pAQkOyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIME6P%2Bv%2FWOV480zIV1KtwDbkaZ24GXOZK%2FAVcefbX66zvBjc6sCC4XARvXnkyciRP8v1FYHmSKtVuc7h73tkxwEJkDbLMRnCSJywpF85PhdYXnN0cm%2BAKKnQAcRp8yAfjab1DjG6HWRzH8PauPvzqkoQuWaUGSdc6J4GO%2FtI%2FmKH0cenU4pJTWVu9T5B7L58HFTpbPg4dkVNmcyJf68saStNDOfyyA1XdgkK0wKj6%2FWUXIfNul82VwC%2F6qKmC1cNkV0N%2BcXZoHIP8OmR1dFN%2FbWi9vVBlfK3DS6e3dBW9u%2FewgXWmcebR5bNMMg5pvTDsUjoAk%2Fn5PfT%2FfQER3Oc%2BWvT85G4GP6BBxTUkvsCyuN0EjmN1wrUtZ2Uca6TtwbAHc9iHgOvDCQwSTMqoOJ5%2B21wQC48hJIExCyNhDHrz9p9BAsX7SMJDVaaJo4WrjpAnMwGlGR2mCvsBX606BZTG5BGd2juZSmpL4E4ewY6pN9jiQhfzI4jPuo%2FLTwj1lNpjFlX9wgprghT1obGLTaKB53egiTnUCGEksStk9PlS%2BGT7LIQcYfmnJUr5w0xUrjX98L3i%2FjnORjZ0xN7%2BySySOePs1OLiks4WtD%2BW63xBFxKmvjE2Pp3NFX1k4XClMX7LqF%2FEDNLs1XOXKkvgwu4T3xAY6pgGvGQqO%2FCjdtudFzQsql1iAHhlHHTOERurizedO9a6Fcwz7HzZqQjtDT5rhPo7hqNHNTzIZ5v%2BFBlv%2FPqhIXUN772yisAuDAHVnxNFlxwP2TUwTzbrX2bGNrwZI5hlJ8pjWXk62vR95pJxxxZX0MR%2BnYkJIGeF3MQHdZn2SqIqIokpcNnczhhkwfGoGcRcLH9W8E%2FtDWy076liRUVMELcjZm%2FzpQQ%2Bg&X-Amz-Signature=919a76471fef0c478e5d3f2af1311b82d83d951386f8890add433e4cc9e8423f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=d4a2f8124f5fdb9364d5f350eeaa733910807d88ae6625ae4d3c621d930ec1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=7edbe0e21b36a2def19122aac2f0559c80369a733382b03b8e82771f8262c56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=71bd45785981dda25046cffc3a50a150078abb2d0e550e89d7af676052b3ff1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=935d76b230e91c9b04431c0ef64068f86c624b4e51dbe6dda3f7601c33301561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=d92ce7a1ab3a1faaa20c871fc62266479195976f433df231a440f2a4aa15ecb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=89fb9dedacebef80ca42fd59688cf16e5216b16908cd617ee5cbf55330057f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=975a4229bd15bed8f242a3e97cdc86049a7ce34bdfe179370e32495f99125b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=e456f22dab2c0e8ad3f62de7e5f93e42abf34bfbc556b615a856f9daac36f9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOHOH2L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8uUAWxIlvcko6YrU%2BiYzgXntWS%2BjdwqL6CbXOYzOkKwIhAPxE09Cg5z5s5OiH2ns%2F7g%2B53cIiV6%2BhzNycGIea%2BqvOKv8DCEQQABoMNjM3NDIzMTgzODA1IgzKFJAEFSHRseDmpNwq3APp3mEE8tDK908KikI5BFOXHCtx999JsZqYSKs291lUATvBrh4hMvdVN7QsNlUjcPc9fZr%2BBkIXX09fVkAks12CrpSDRImcZz7dEh6FgqEKjJKJzIrSjmpQakpNX%2B17M07yGJwtmY5WfvRBgPJMk2EhShG%2BEgPqvbagqS7QBi%2FX2qbIU0O5LdhjDTE3j3VL%2FtVF6JXaNAm%2FbkBHV1QbPbbjTHKHsF1kfkDGaOyXqk7rM6IsVsYLzmI6ZK8pAHuml5jEPph8ns2J0yZEFCXuT0mqjMB4O11YuvADQ%2BgwB3yt%2BJgKwe5agB%2Btf17IOARCWTDO0iY%2Bqm2OlhxdnMQVeEtyVI8Gkzqxa5WSp4Qw5kuvFylxSASgWprOyWSe%2BlRkMrnCOSyGaYvyaO%2ByMhGx3qeLkbw%2BLToHkem93XVvjvchq53HLUsYRa2Qxf6QdNXKL3lJ7uJG83uOR1sV7xC4gVLxDIcrVimNr%2BME%2B1TxIjo0ov5JCphgPLcontHoAbxuAG8RbgLd0DGNWTQRRZ%2B6VSwDYuwuWU9kvqIHP%2BxyGLA14xH9%2FTJBj3sIsxMzAd%2BbrFiuN6D3dllPA69GpNq9UqRCQyPd3nVGEOWMQo%2Br7FmNy0JNrewI3crP4blykjC5hPfEBjqkAYuZg7qCIcVmyreuHnCSwGW78Bj%2BQyfYmqK%2BjfxiPGTe1A7Sr%2BgEwFuhzNwtlRIAie%2FY1pdlx96mMAqz80Xv3axomTDJMLYLs9UoRHKr4wQPVHokJ%2BvTvsosj9i9JggF9Mq9StwxcNmD9jaFiiu6lqvETWPf402RYbEYZZX0BmChZ3M9xWcA2jGF1pQ5id%2BJmNGhnKjhxvQEmYpKHlU7pYNHbIU7&X-Amz-Signature=7db3cabbbd1a261ee720420e537bec4c6c8a54b7f95aeed409934648a85a45c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
