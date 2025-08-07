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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=64ac64aab34c5380d6ae299b54b666ae5c9163f721ba5fdecdb07b5dfeb327a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=972223a71c2222f3bb796b9814203eb838ea3ebcb00b1686b92496ccde8cd56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=80244a2b95b461d50cad74f52182f219b95b9ec105849f00067e15f315c8e255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=e2e95b8d1c615216665820fd0f1b9dcb61f7d1a337e30262befdc248a1f66391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=1466d049e5cb0f222d7e862830e629837a7833dfd91f7fb42b063ca3a8b71eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=50be9e2d8ea13f081822e6497741ddc50b2758156575dcdc90eb2a0efa0326c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=add68a0aa67caad05095e1efe72a8412ea23b0189075ac33623bcfda5ed1929b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=b8116a11073eea570df6b10a2b7340b87e1a4013f57e581fd352857d91c14db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=b5686b3b78dd0364c5caee6a522e85426f1259ae6ad5f11a40b92c90638c3efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WXN67X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJFMEMCIFhMLIPA3dW%2FZSfcKf7MuEf2H6eYnRr%2FEc2x2GiyFOKwAh8lQcIDpdRySZemB73D5yLLQ3FxzA0ApwUBEr1S2DKwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FQecCJn9KzGE9ukq3APIDMd6wdvkH18PLD44dkK7kVKMHzFNlf%2BGwge%2Bc6bf0R1fRgnNkLuJAvzNTZY5meuhTZxNpSWu874aLwqqBXuU3paSNi3dk%2BIxZhVYdZqePLHt3%2Bsx65Oox4cxB23gajQGhh7%2FSb8m%2BiRZXYikgd7u4JUULJr5znRYCDHSOvUpvKa%2BWM4noqR4qD6xYemNaVC1q0lMBzXO6wgG6BOLLiCB3v5Jv49R2NvGWYl%2BPfjkeCpNGdzUMTAMzuGG8M%2FBIc5DGhTBP3nBskt0j%2F0jgEHOObIA67XhAvy6glE0Y1IbDfdlFiaAorb9i5mBxc5ukdMK3k7shZubzEZeg5ea2MzhQ93uSJZDHoeCIgs2%2Fq9bIp2Y8zYwHOVEa32pc2X29bZo1vqEbP6al0DaInjm4PhvCnCaYLLqonETd12jM0qAWyG07YnRkvfw0ueE5uyYU9Ab7mDSGvMan3GDBEax4WFnuWXbqLruEu23AkmC4p0ERzJ2JwcyPu1%2FfoQJj3t5F3DWIWxq%2BRn%2BEj451BIB%2B%2B%2FZQ75vcOvHli2Cs3Yfp6Nf%2F3tPmS7k8%2BE6GGrLMZomPFXuR%2BB32ozJ3qh1IQPz3lvJCYr5PKhHg5WXr32Fi02GYth467yAje0d39jbIzDd49HEBjqnAZghU1FTVnYtxMW3atgk64VvRX%2BkAxMiznCPC6ZAJXmVDdQnKJNn3SnraokQ%2Bg5zEe6jHYCX8DFrwDq7F%2BCsnL3a3KRL98tm2obDPDbkYluoZjjgVclr46CT38oQDsZokyV0ZcM%2FPXJzW9UdS3kryM859yc3SJG%2FAvbSgd2X5NXOdU2YSVLVZNhJeOHl%2Bw7jZDXFeVXDK2lKOhs8ki%2F2sUcTJlvxxHMp&X-Amz-Signature=ead10022a5f3930da014e9421f7f163dcde753a182bdd06d9ec8f55967f88c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLAONBD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAYfolS3Sf%2F0hUoOUknVrh3PsQajtFfYXZZwgNBgJsGIAiAEBzMcYeoto%2FrajEtUVTg%2B5DPUoysh9SEBAbo5YXpDOSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwSgLhlnUHImQvBzsKtwDsjweD4KzxyQ2TEwlot5r%2FsfRF7q%2FcXOQvxXJ54abb%2F5H3C9JCXglj9eRxaw1bfTO8MIOQugDOi%2BuWAQf7kxetQAEg9HcqqpO8yBJZ2OnqiT%2F%2Fzde9VWXWhZA5HyVuf6YiRq21zni3QipZu0fIuuAGrDp2c90dQTSzDk4tGrgBNaN9dUsOedEv4k%2By4BRWjOa%2B31Fn4jW7iAgmQXvx5jxa7qS%2Fr4UHv9%2B8CK%2B%2Bhe3xSHzQusWdr5HSFBczvwurE%2F%2BmV95FuSaakCFamaBJ3CworIQwwjn1O6M2TZyL1yuGBhclJYqynWgmx4qjW%2Fu3N3a77mMb0ExL98k1MsSCALxjsHMFCFMqdYRCANyH%2BtNdiY8oxz459TTUXr9JY0tr%2FGPIc%2F35tkzi%2BBoc6LGR3Mn1vYslQWeOumEVgo687ARa%2FGHW11xcKLLZcYD63Z1z8AQdie3GkM7gWw7T09%2B%2BY%2F8CM%2F0MQH0lFbr6rlAR5pkPT9dR0Zjfvna8mkjsBfYi5tpvrXkA%2B%2FtO2TpAEd78RwSSQ%2Bbqx4WuvvpWrsSDgbJre5KosCsgho8XdsyNISGXEzFuDDL%2BH9GQdXyl2putNRxb7kE%2FS13%2Frycc%2Fc%2BZ1XCNFxABhVVF0wWCI2AHB8w4eTRxAY6pgHtpknt3DvNjKAtkdJU%2B6pHRjRzpGgCeQWgGhFeQKWUTW0YwXk71IOqFNebKJfSnIuUQvKg9LFxf1bmverqjPJsMHmpe6vB%2FH4g4GqCZpYUTpB6RHx5bYCToK1jINufJ6w9RkqPMGcZ1fgs0TVgJryfHUfE5ujKfvigDJk8AbjCqHU3WmhHHuGpJewVGetMPY3cnAeDNc%2Fx2uM0p6%2F1E8p%2B9gojsBKG&X-Amz-Signature=69120206b63461dd25c67824082ca5f377fef1a577b2370bc86d094e3789e55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=1ff42341deea2d8c3290577f9d1b5b57085dc621515307cbb239369f0bcf3e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=7d684fbd377c458ba2417b171455904bbc5cb10d7409cd698e90059ac44cac7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=8a13754377fa736249a65b3a377f1e1b5154ba0322bc3717d5e7f6142d0893cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=b4cf114778e6e6987994a80326ecb0f677d82bc2fcbe35f8367fddf5947d45e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=2c9c7d1d84ba21104dbafb3f4688edb475ae0f0f733348b18bf426dfd5bcbd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=29182da68fbbc1c397d89fea7fe1acd6e14684b24d3dc386f7b2f40627cee1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=636a554a4c50243f43a9dc656eafba8dd5503564a0f3b9d69ef83df2620fac89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=d4460b006f71d5a2dc21e5da1a3aa4df1b8b15953e7f3d9c83c7af9a427bec73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXMNZE6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID9KBOzVCoDmIEzAJtjNV3KGVlb4Dg6vMA%2FFnVUBNJH9AiBxbRFbJsp7ec5scYbRwzFQL%2BBoRkTXl8ArCtPFfyqmXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNtCcIX%2FesD%2ByvRzKtwDXQSJ09SsTyB1UG0OCPkFsSQ9G7s0PSeTonjq6dTtD1anNWuYq86%2FdWG97mEydCL0IS5A%2FwFjYLe%2BaHroYg9i9elIWYMa%2FeIbGd%2FrOUzFrzEg3oOSLIXDbxaOeXbW5G4S3vUmi9Io4QVOxNnIQU%2Bx%2B19OsmlNoBfhQJygzb5eQgJeeBSWUSzAjk%2FHYCxD3sf7mgj5hXsHfBbdulh8WrA9jD%2B2NlJZUXjtw1D2zwXpxXeJJH%2F7hsOvy9xd6LZHZXCKajMVid%2BX6U%2FRsP69nQM51%2FgYpEX%2F0pM5satGfc2ABWZ30uu%2BRUIs1dMgpTFcCrhxgixdhWzx7JG490wl36Dq0szFHCeDobbMj4sxGau6yYwtUMwmS5nrc0AWZVsPMzue6orQJEaNgbhhF%2Fm%2Bdaj5ZWquRCXFhivJztI0vqSR10BXvLkMj0jQTpUV5FjBQ9vNmJZFcTIKUasUiVGGL7TGBYDDeu%2F20GUfZirHtVXg9dQ5Z4IcMPGQMfLPL5oWILT4Uvt5se1p9kXdABRUA%2FaSAzFaoYBlqF2ecMZZ98q9f%2Fd5Lt83mqaLsAwyi4J6bzIy5ITUIVr6Y0FPCjVpYMRL7lHvv88bCT7hpKmM2m1N4sHnjx%2FUNRz%2B4f3vkqYw8OPRxAY6pgGhI%2ByVEr42BfDE9Hvf4I1O6JEcSO%2FQly1ZQFEN%2BWMikryiWJZXOyVpDGN1T6YajzqYPehScJtYkRFaEeiJkA3wJ7BvhBBsWi1gRPVtDdRCNYm18YmNkOSNdCQ8ukXv3CWejV32baO4HPWUyybWUiD7MSLJEhG7lkAy%2Bbj3sPi6kDLtmouzkRTbaWWTB%2FxEq3PF6bK3ULOSYefZKM43Aok%2FumxtRaKv&X-Amz-Signature=c58fa1599d6073c244ed2f8a691cabb54abc567599555237f94b126a79976c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
