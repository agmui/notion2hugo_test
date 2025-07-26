---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=7ff46918f85f41b31b9f8659678ed15dcbc09ec13610feac574e71b4fedcd71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=b5382aa417a326c960901ce001e7e8b269aaa59de49e7a686f03a9dce1a0311d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=b129ac417b6da8822f6f59938ca41c497bd95e08dedcc19b456de4d954f4a57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=45efd311aa27abb46c88727704da739115008eaf8c8ec0168fd20335b0213874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=75eac3e32a111e74f827917322ca078d14eec9b28fe5a969bac5cb85f8200258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=5b4c59bad0e5080a81710e3c7fbe4d7e32e0c4a73ac0690d53a880e2e6dbc87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=f39c0e0f5cc764b01a95819ea742f0b07dbb09d7a7e97c1907c70b2b8bf8e32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=3bd17cf7663894ecdcb4a35b0fadb19be5adc4bbcb72dcf07997252a7cfa020f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=0047943d98cdc47befc8d433920d257af2b41adbd61fdc80571654bc25e3afc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWFMTV4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDNDBOjirL%2Fb3kGu3e7VXODcpchdTDwX1c%2F5oIRzf3wIgIgHTgmQkCUzlSR%2B%2FBpxr2rxY1dXA6j0lkfyAeBGRRfBCAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEz9x28IRWwdaSrZCrcA%2B1hR430nsdnSsnmWw3sVPhCKCPTaW5bKphnNr%2BMOtO0CaNVdZI9wjYvhFY6vdJw6ts2GjSRqD04kdWmvl6v700g4VbZ5hhWmyo9UED4r7z%2FOYHLebymNPCBSfu0P3CY7e8iNkNAK%2Fmatrt3q29dRKLY30utt%2BynIHgmupvSUNb4TWnwbRq8Mn2c%2FrGBzcezwvJUqI0xjk57jyYH83IxCiWiZ6hWl5OHSwVmH62PLhxaLUN8RIYaLz9WbTERHvt5nW3ttTVHpuzf%2BhWhGdOOVLuUBCW%2FcCXQ4ymigyrSXgZ6ROMa57f8q1YJWX%2FS68dYN64l1mTNtIN5YtvAYZpKP2fFkd1t5%2B5fCB8P06CCwFw5VbJVq9RcTKo6vnFCMIQ2Ty%2BsnGLOCcKYy4kxbIA9Up8YgtcMfqqU7FTMNyqsKNWgSHivi0OT8y0wqbUzjlgtWmPHJV82AXqcUJGeqeQUzMTbNg2aqLtRoJ1VdLbbpF1JwkBXbCWVcilk1FaGsS%2FREHh4s9O%2B0fQYEYuXEnE%2B9fA5lkp11xTfVK%2BmddZl9nf4xqpEyj939vZFk7n7WOdJIcIPQlX48VlWfmBXoGqtfThRAksIs%2FTbrBK2pE1rARXnMMg2CGZ1jbPh1PriMKD6ksQGOqUB800ZOU4%2BMrkTzmdQmvPbCZHH6smMgAPogw8t7NiwfAA2O88t0RVbIpzR%2BxvloHoOU44XzXWPRqd61tMGb09QZENhWACg8ZzdYJF0JXGMlzQn%2Fq%2FddjpVR7e4cFZCK7mABji9CMOcTbNNyH%2FBBAA3Dh9%2Bkhi%2BXnI4AW7L3P5bv8NbjsK3btci5vRIT1YzVMbwVUT44Wtc6dK7uqCJkj5EZIsKn8ml&X-Amz-Signature=319eebe7583b574d94a8790f191490d6ec534e3e1127c8ba84d8cb0d2ed9b616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

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

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZSJZHG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICv%2BE9MPtezt0g4vBdm8ZkpauTShbPmYCsIN6hxDz0gvAiAmXdDRMMdzLAF6ju36Drf4bCgkMRtGKmbdpZbKzKfVwir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMSAMp4Ys%2FCVJwbZTYKtwDdq%2Fv1fWcjzQhlKJ7pCpmzM%2Bc7Ne6pJfzh7qGBaz9eAtwDQdMaL4KTfNfbrPKuhCR9bzEGmQeYsTQ8k5%2FpEE0yAtfdRaRuLJzmCYoH%2Bnm9ZuaVXYIODFotyPCOEVhsay1esqEy8RQi4E1XnkiZyJfiNqwQZHQiBHjL%2FlcrtXOjrKWBLu2RuC7cnTzZQiD7MfHMEZwPBnep%2FLmFn1%2BBsUpQMLM40GOGaOTJHaNq%2FBI1zwMdT2xc2TILNzeHE33GyzXxpzG7WkuTsSh3mQwD8K7Z%2F3HpXPwnIL%2FHGXiR2lBZnAuqPMZypR2fbEfqi0ASJxaCpAPHxbtxnWOEGS7kK0ozGrU79nEIug9pwUaHZL3ktxPjKHpdbROgUubbMRNnvd9uOvb9Du7MUZp%2BFV%2BF3JiLmlSn3Y0oEJQmtdKNEbwVXryU%2F%2B0BA7d4c56dRNbWgvp7cZKGeFpXoa6oQP1i5%2BTaMfU9wSIEtbFdywbopnlNWnhTo69MC6i%2FoGQ4%2FwNwsfHNRlzCWqqHnFFoWtPBAA7syuC9miRgBdOv6Dd8Jw5Izaos5dcrsXrAQIuHKVjRRm35f5gZB1hcTuAlT6zYo18BpBP%2B7AKKE7eDjMGq6VJwth5BXp8sCWb3I9J4uMw%2F%2FmSxAY6pgH9skPnKclU6%2FMNFwKwhZ8pD5XAVYd63iBl1khleBPeqKBa4W6k2PvwvlB3anXZzo2LlM78IKgUdtikX7BzqSQ9jM3lxWlllsM2Xfop2ZrdVw9y74v0Pz3JmQsXQwuJvqvL5yhJ4axY5Y2ntX4SlTz4BZnWZHVJ0siYCmmFjdphvRad%2BUZvy0bJHahxYTiNk3CFnNqIos2PQR2Iy8xeI1pHhcMkJtqy&X-Amz-Signature=fd45f0c636271add2c17c5cbe752ef88834b8f9180f79293e3890135bbe48144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=53bb63e037818a87fa6d85ed444ab2c7b75c9fec4f43e08d272691ba0f4a4b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=89920c02025e975944eade8e3ccd625d4f68c55f80cfc180bfe1942b6f193b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=77b1c46667ae7f974c2bede5428066afdf2865c7a303c2388ccc831a840fa55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=a5aae4eb3f270b2c3cb5cedc7f80c33c8fc0bf90d1314ad0551b5df9d30a48c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=bd4eb38153de34ded50901d2795b598b40eb6354a5e117f671469a3e17567363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=b0c0de6ad3391a50de4d27992aa9e74103ef8ecd6cee37bf7aa2f4a563a40f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MVYJOHM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDlaflgw9RkeipIJ45A8GGsVvruaEPCuzmOAzfMQQoudwIhAJGH7irpVoh7wTRnvzlDgFDZEL9W%2BlODM1kxurGP0AbpKv8DCF0QABoMNjM3NDIzMTgzODA1IgwylMCE8uagMfoKeIoq3AOipv%2BZ6aoeGpra6i3poNGXGJ0c2sPcta7lAp6kPO0p3GZQwhpwqcgmLJvouocJhaVtr4KuXFaeImtlCnkvqGbq34kTcTZnjytzlkZTWc06yfKsLgNX%2BGjFKCQTrixpG0kD8DtKqeHmzwmePIxyZ1uHV5vXpJhaU%2FD%2BgUHEesLicFWrjEbBQ2m5TVLD0Jeq5otq2O71p5S5CG97Q8fuFMWrjIPTt4XgMWj4xnP7Qc3yB30N0B6e2sGmiilpvzl25gJIhjFm%2FY2V7nomTp%2FdRJNpWiSw0MWuRBMAWSCasUzqQkLY5Ft%2BR68%2BLXu5I%2FPqa9VuClF0Rv3%2BG%2FgJw5pfDAo2fhbNhemB%2FOFyWvHVfmVG72NIi1hdeLFyorM34JTs%2FASf2Oz00Hp7PlZV24tDBMoXt5LozzvWBscOdOruhQtoa%2FLQ9v0SPV6zdnQaJDpps0GO98aJ20gWMFkgW1LTJc0y4Oma9A1uDcSW4JYB2U6E%2BFOtTsKz2GUK31cFs6akZ9nYUhZRG5JwDXxiUPQOLewWb1JQLe4Bz3v1xEGTGZ2LvoP5keOnFZ39taxl%2BRPS2UtNQ55IUDQGYSaqrOTrojMCZ6scBwn%2BhMPHmwNAxcqvJ9WHa3OXb7cl7Gu6gzDG%2BpLEBjqkAedSt%2FnshjGJifhhs4C6ZKcD%2BfCLyp4ZfN112t5O01Nn%2FpWqZvL9OyIpPD9BQAu4NuHkWyWRcaJo%2BYD70qxxqK%2F51HxHjiOLy6eNe60kAddhZIuajjL%2FbR7im4WR4vSSk55esAjdOF5mZH%2Ftl%2Bg9Mlbg%2BIBVUshqnp3MkWz5g17r0fqWGXhmwc9qGcBdbtnrDEuLDxcCC5v%2BG7E4G1ImJuRTbWBF&X-Amz-Signature=1b3987cc1f0a8a50d2bcef91c1a62485de45da0b0d286e6d7d04b16d478e9490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
