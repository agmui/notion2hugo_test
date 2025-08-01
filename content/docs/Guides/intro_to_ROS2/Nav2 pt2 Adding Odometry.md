---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=32114d4fa03b201a8efe7d3be817c84aa2cd64f16464249b904f0a11c491f92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=44a3b6bd66a577d411af781a74c3e2f88e75dceb9ae3e146548124ec746693d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=bbcf72ffa927b126d0b0900d42fa2b783ee8b0dd7916152e0f5480970cd10124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=dcc6d6ba1bbc57883bdaf832d4f7ba28f41808ba40ecf86317711eab6f80b023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=95066ec9601a30f180f0099d6625c0de2de4e22ebaa793c1ef524b7f687ce695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=bb7eda65a996524c812f922e5ddbf09a36c98cd31e1d42d05614fc8e9e6aca80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=d9ddad9da3ba2b8ab9c04d606e7c36397ec30a92a601c677650a6b98ea922cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=048386442eea35c960eed28c7b75ad7c1f729ca75c2a9fba384a47bf2bd9339b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=1578b053a10a1bf71853c31268d3e55abe301de8605d3e48f61bc360b8d62cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYBBGUW4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoiGtZZvQMC31xjQkIOPSMAbDGyRJlwPrZI5ESBjdFfQIhAPjfcnSgjywvwWjIqkSzdtD5OyeSJhQCWO4gr1gLUKDqKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsxMdXThNWhs%2Frtvkq3APPV8PuyXL7s2sWTFkEqRX0E%2BORztYS%2FjGDH0%2FLOkmFv88n2qDMcKWt67EksgevuNVkjbWvZ2NB%2FkhpbuTiqe%2BjYA2TNodiW35U%2FR2%2BoPjstdwxfrlo%2FciOWnN6o6cBOeMpRrIjFVCHmf4kn7HcuDFih9veoMUDh0gczqA%2F%2BHxmuIe5KwuFSObn2oR2VPfnONqLTnKlZUrgwnlNwNZUAir3qJCtOXEEZfXT9hN8pnTAcF1Yium71qturYsvwmZl24oFWYw%2FoPfHJiRWpnIzNpkSS5ilpek0ZIRJF93AbHeJTMPzngzb%2BFg59gvU%2FJSsaghA3lmJkrSCEojx2XnhJu6sp58ei35YtXz6Dsa6Tn8uhVVDuA7gBmsGcDjLJlF8R%2FDOZ%2FWx72%2FK%2Fmy7Pv4FQsmtle7N0qnQ64Rbq8MVkLwpU0NvWJErD2Oy8H4kY8ni7X0Zct0Oh6Jz0NaI4jwGO0hAXdNXpcGydjDz6HtmZYKjAEHsEC7sVhGa0LZTk7f6C%2BbEFAI7LYSdyhGXgborvo2ayDX%2FPe9MiygnGjvqRlNfbYP1uJzAa3I%2BJlKb5lIwBhPLWV5BE8WmbvYmoSzUOG%2Bqq%2By477xtLewtkPLgv4FXFhEuINZAgZaFel6wCDCy76%2FEBjqkAYpYJMz91xQgY5CXhK8IURJA%2F%2B3NXr3Ze3SliMbyo8aaBzI6UYAKlKjUvosMBmkTU77H1BNfNoPWJDWBSuLD1hIB%2BIjErEqW%2FarMfj2l9fIsl5BzVmCOjTHFmQeMnCmtdjO78g%2BRAjqgHM6wGmTNN5agOdwWoFNJ6KPjuBLt2ksYJJctzilRmR576l33FY5n5okHtK8D4Z2I2qfIr1PTFQ3BHq%2Fc&X-Amz-Signature=b724cbde81bd194c367f7fad24c8dec3217a51e343b4411d2bdfd00c9edc52bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YMPP4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8cocGfC17OCHPyyfzGrjoEdd0iTaUTlF02iPqmd%2FqAiBzz%2FFasUZuhaahe6CguR4QA9L5J0AR01GavHmzILIPrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtj9TZquq2%2BX9AGbUKtwDV630wN%2FYovNTiuohRfEP%2F8NXtNk5Gxkx4xwSZujAy93UAjcLywy7NJQrzd9YlVGBgYc25V0FXjwGCnbUyrOaWJ6yGWpBAL7fTKGezHB%2FCDy7RU0jBhccAO2emmarlRyk54EbjLJbZwzOXf3xSGgxf8OiyXFVoC32lorNgXmHQgfj%2FeJ%2F9tGV8TXaDpzfAg8TyIkCiL1%2BJ%2Bm6%2BlUgZnHYUJljNXdhuWopeBplQw5Bo46UHCiFHAnctxhVn67NRXA7u%2BiPxM5XumlIJ0PWuDHyKYugdGDjQjPbb2Dy5XflcrRjdDW8cSK33QgfvziApuIeSA6gxaktlWrQjpi7gYk7SfdSeudT1OuWufRUpij45L5nSPSpkboZSBEpcB4Y0X56pMKvmJwO4aI%2B%2B9GtA%2BysvMODmYkcVLsIVPY2Y7Tl%2BFt6xRfHYR3CzRg%2BjikzZpBStiPs%2BoOiHTjAm4qwHw5S%2FVztmZNORMtMrJuyuhUg1seALiLObzW1WW5L9LzIRRI2W9V0%2B849qGihueEMJJtmKrQyAMNDijal59wS1gJxvXlnotJv5svngQKT%2BFAQ9oe6H3RGooktB64pqECYBhuG8k3c4%2F0MdcCvkeqT3BPaqByBQIBqpIz5G9opvF4wju%2BvxAY6pgG1DIYq5gUwQjVdpvhgaGD8WnH0f4tAm%2BNWu4zlg%2Ba%2FotlY%2FLYNzi1Vss2abiqGN8RZQ1yyobDPBhMmmbBDhHnbTgFG2vrsXI2NoBRLI2Ly72MsT7gmn%2FYRlfz2z9CTEEpy1Nju1hhsWGioZvrjIYvZYajKoEWOog1EZig%2FgyoSNYuLxZvobYc8bspwOpsCeN4AwZ3%2FqxSm2aD0KDdRpYXmHoYD9iLF&X-Amz-Signature=aaf96ef3128ccf08fa34101010faef46d153d4e349f4507972d4a1da6ca2805b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=4974b394968fdeff0fdc2313a2ddaab2a57099ea9878f0b854139751833a7a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=416a174a2b15f653c6cd1513aa52f5bc9b9c8693470d5aac559948f18ee65ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=20239ae32ddbff9e311ffe8789e3fae69ca812255eeb7f2d9f6c36c4f4732587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=3b7369836b1c90dd5356a202387184993f36d3cf5c71adc03483b8c8a619d683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=3364137fc446ee90dd957e250e06313b6e60e1d4dba2c607b59232e058999d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=3ca96aa8121ae606a4edce91a4baf9e90ef97ba7d7fa26d5a998b287c8164bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=34949bf2cf64400c8e1eefc99393c9af4d08f2b00b6f24b3c0831dc6a339b001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WQOSSQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8MBo5Y0BTwhugdWyeJVunROaS7ewpWD4ybns2g0MulAiEAwsBYLlK7ePmxd%2BoXLqbAGxNDWUUOQ6AVdAUCvsh8NWYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpMae5bebYH98ayWCrcA64c8wWiKIVi8N8dubfwbewQkF1%2FIPR94SjJCIwm5Q%2BVLl6hZI88oPv1jTG6TKBt9MQ7hazECJSauktVpdRyjRjM24WpyOTvz63195uQg8Mzvxo9Ms3FqxXSqGrW9sNPrqx2SVTLqs93SigHRMB6tOjeSSFeUpbENhPANYQ7qMFydMvnKh76049WQ03NzIHAGe%2Frvao19HSDdDMyRYQKCD49ffFS03DjgStPLdtlaxEPYvUMGaHhqdd3m%2F%2BLyMG0JN%2F8fkikwq5nPj7eT9xF3TE4odwNFlcEES2mmYIf8EqyscdYcIjgQ2LakcGz4zCgXGnERMYjb5LfToWbwWN%2BfQzSjRcsP8gjVjNzWCKlXoUbcV9Gs37dvmjFiY%2Bwf5%2BNzQfySVrUgGtihAS6EpXbGvj5RIeAhVwXNjojHRaFeWFaqkqoiQKG6%2BX2qbJja36ak6E7LyAPkppDSFwaLZOKQm2IJB2unPxugNveACd%2FnOAkHI8p3scAOWBTWgFUzyzh1NnS%2BFwwujrwgiZfPSq96fPrfcylzGJJDD5SCoGBDT5Ke4nILYHC9Hyotg15ovsx20O0U%2BVI0%2FlEXMD8ST1OT%2FH%2FyrYj2sQ9u5R7whOXj2Es8ertjUR4GUKYTMQsMLXvr8QGOqUBbIeiLbC7IXI8%2BdwAXt8tjzZLaXm7jDmQH2cKJAtNjZzgzKlLzWR0I%2BxGZRJ0wkYiOMf2JQj0AOFoEUmYFddtWq5%2BomCepI7NQLQSKa91bd0lNO0qj%2B4SPHGU3Gter8njPLnpjfYwqiKWu%2BFOx7QluQ5nf%2FqhGcVsfAy3TtfFAyz0HWF%2BYRmj6OvOtovBEHMMPxYbi3rcjvEqdJR5SJ9HHKkMcCdb&X-Amz-Signature=24c762f008ed05764539c3bfdd5127f5616b7227938eac3984035989c455db11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
