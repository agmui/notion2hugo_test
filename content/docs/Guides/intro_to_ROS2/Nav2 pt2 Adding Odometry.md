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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=52fa5c60d97a8b9257f95ab44e60d420fba72c25263e0fd21af8aa5f1d19ce05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=de506f2d1b31805332b700dc6f6b5b5b6d1e0bde5f6442a0940778e3f2cc868e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=ae620ac4f23b700426db962869e172223d945e7fc9a208a6ac3f1d0907533e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=486e201237dc12e8fcfaabd9057af9115f1cf472656c1e26be86a45307cd2bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=d0150dec7af59418eb7817bf69d2ccda13dcbac3fdc673a283c0de57e4ef9f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=a1a58ad420b42fdfd075c438c78c7f77cba115f38615983a8b84b299c505a513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=65ab498304e4bf52ceb60709d7dcdc4a5b37089e6ca70fb7e50ca2fd23b18b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=ae7611ce98355467359e13c2d08976c845e289de7a2d1486300d47de7c536247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=ed4fd6962cbc77cc3439730652dd18ebad1949e97348961b491f68dd56e5ca46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6X7DPP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYoe229UNR2xPsmNmbsUZFG89z6Lk9W1AaLxc8J4RX3AiAc98w4%2FEhPW8CgFKMgtInQD9bP%2BEIeefYXe2IEaLCD5Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxBKXUF0PF8dJ0JiCKtwDNJtirYhVtxRd1qbWaaAs50qocjtcw%2Fx4Jqg0mwGX42qPnOw7JAuUr9TqCXXhJBqTDjchxwQZXjxIgWLEaF3CaYgyZaE2G1QKIjd5tZ1oBEo%2Bfed55A9BAri5uhoiAPwMisKcSrNyZR8DKqnXV5OToTKPa1E3iDRz97sKsoQXnMUV90ewIxSwbXw%2BMW%2BVrd7%2BWFCkJlUFc%2BVtQWJfviAnF8WBgEvcfPUDqGaJfsEL9j56VHFySXodhhvhzmItpLGVEmbzPiHKYkiPWAzqd%2BBz5%2FGKYtF9H6kwHOlQGZfaKdvjcPXoFOO4ndJZYumflr2Tj5kZfkt7HK9bCiOjE%2BB0NWYZ9h1KYjInbILo1xpv9dyEZ34U4JJfjwpQBs0kSNSDvkJLPyd%2FOrMmCVMYK3ZzXN6Og7RCt61t2jzSpIGkY9sJ6fzB7M%2FV2AAS1IJDf6ZJo4yYsUqL6JDm5tSQlZ6yT2xL0vFmbXG8yu3J%2BYdGprtL6cfGv6ofxO7EeBcY0rCBN1cIDoDEOjMxEA5GRBX%2BVhdKPmNndl88ecemruMxOb9vQtLUzO2KPWXm2Nq%2FekY3BBgtOv7FN%2BwR4iXyjxEUI58ZdvHk%2FJkI%2FFyMYmEaz5iYv2RNC0HKkPQ6xe4wzJ%2FzxAY6pgEUozE9AS8kXnvLY38XvNK0xigjlMuvFBA0OOFiwB0wNHVNYfvZDJQ21ldVaFMojaYF%2BlKast1m%2BiZfhYxr8szXvtlv2Hxa3FnDxTJfefMJrDdcR2KP2fks5rxwiFJVzyljD5Uqe%2F2H%2FVPWjU4zzQKx0yFu10H1fgLCCINt5IVlPKVZSbeNcvrILonoeIh%2FbvKoYQt7F4zl48XEBotzahdT7coxwaO4&X-Amz-Signature=05f5773f0a6e53d1606d8c5bdc52650ef32f82a8b702e22d30e46dc065c24e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776PCAZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCxZ12qA7E4uRnKEIcpEquMXsSCdWmcs%2F6XJBysMvhmAiEAr3AYenfrxsjxVmGAIttUvCWaveV8HXSIZ9EHTRHnlAYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKgOpqZJbXEZISf8AyrcA46WqLOwKZxBxK%2BlZo2gtuR%2BBh4SJk2ZYCl%2F3F7JFhx%2F%2BB4KpGrjeLzaeGUZnfzlYGK8MWUk7sIKKOd1YlOd1Qj7AsBC0Hx3p4Fds%2F89cQ3rERM4%2FQdythPqjudbKQ1HkwgznIMuI8AlabnMKv7UfIkg%2BS41mmBC7Ucq%2Fhs68QDPxCAQDR9EwrUyM6koz0YBQ2D4MfwssrBZ5jkeoWTynFyaxyTYKmFzbWvlu0XAo1%2FEzp1RmNLDjaVJ4k1%2FwRxyLT%2BMQFspzQrdUxiETejMiAmbAck72v09LGBGwa45abH%2F3Y7mzvUC%2FH0x4JIUit0tpYhQF2fIuz0cvoN%2FZkmX1pMKewvxmnqz43VXupGaxyQ76xrhCmKRJYUxTlWc1t8B096TZ%2F90Dfvv83FO2ihpy2Bbu%2F6zf1HxdOAo3uUZphF%2FoJGQA9By0LCG1E%2FxVESp%2Fi4GAh9T4x0KXElTVGUbYt7empHDzt1R22C%2BIRMuVRycZFqOaZHXs2hC6foOFhNlvSehOWxMvV7TctgeQacGIZgSAmOJn2sHhCtBKi%2BoUOdldjfXM7QfaDENNN9lAYQuc1KMY%2FnEi5j0DODjQnc5KkWaFqTTTUk2ur6Ph%2FGp435dQ20G2yUldYWyGtQXMPqf88QGOqUBfG9DRhI9WX7V5WP6rgx3g5J5Fa1GBAnJEVH6HTlVoWFnasqjta0NKfFlnFAZwK2tS7fp8lErsQSuAnO1ZIYg5V%2BK6VHAzFUNzCvvBDa%2Bqj9GGwa%2FLzbJ8pDJ1jcWE513%2B0hKXmnKZt6bZYIRdRx51wcNrQNuAgmMzDMmvA56KlBmxRPLfvCdmMpigAiqImvjkgIkyWBNEN3pHZCYDw4YJtHXGi2c&X-Amz-Signature=447f2a97f07044da7976d7d4420e7c244936b95e2a26b2c63727a31b417e3850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=1eac336f5469be3e25bea19d6cda524480f60f7d1399c9953c8069ad92bf6675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=7c0bc16219e4ba9c231bb44f5d4f4eee5888bb77d62e64082ed31e18f7a7228d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=1b0dfadc617d259d31549d91ec8159d61922518ee23d76bb0d680aa0856572cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=01dff085814dc4cf9553f12ac2a0a30c21fb1acf30cfacba254247a6f8c57f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=a29a9273e9f3a6f780ba13b4ac1eb963083cf0dfce1068c91629f6b3447dec22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=8a40f0d47297a567591b382e7aa7bc3fe744d53f0aa1f61c226d6ca7d7a9516b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=aef8494fb6cf20be8e45279b510fb110aa2aae0aa697f4d67162ec5e106b1d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=fc0707f3da01934163e15b4b065d32583b92de32fd556abf78bff4bca8b2f221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7DETE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAjaJ9C9YeQyVlCFPMocyg6F4s8fsUK8p2mcRUU0U6jAIhAJQhUC3UVQndjkXox8QDnlnzyXKy3iBzQXT%2FBss3%2FMRaKv8DCDMQABoMNjM3NDIzMTgzODA1IgwoLaq76B537GgUSKIq3ANCIvGcxWF5BKwancktOTWlJuMi8kBmyG2aPuM6swWz8TDn39q3n%2BazOQqANGapIydQ5UcQHG32CvInNAxmshLvulOTFCP%2BQHmtSeJWUGxe7rqTJ%2FoRGHs1Xo2mcNuTQIYl2fMlUhCJNZGdlffrBgsG%2FHFL%2FiDr6rSv%2Bu2cV0FEle4l3YMORfi89j8IOxrPUNt5LM8fJZoYdJcC%2FaKwIXbvJSRRzbm9JgqrBDCl4u2NVJJJxABsoCKBkK3YL6Pa5RQnBpmGXhFxaZTEZS93A6Z6g4tPxmy4Ohq2FytCqhSRZVGMQjJbc8wY1p54YQmaIfOvwFdBJEq2SgQ%2BL1%2Fd6Wa5%2BKo4lnf3GJ1KqXI5FJNrsNDSI02aLNRnjUndkdyMzLRwK1ZfUzH1cImzFqftYKczw%2FPmEm5rsPbz6Tt49WaaIgXoH7YdVOFfKk3eHCPgTQG7rI52S2NTGRKX24YjJAG5g3TRYw03H%2FDZp826OAsgo%2Fh9Nbinchdw8MBsHWv2x4ggd7O3MqeSgXvtlQ%2Ba6d9cps33voTMbev7WbcyJoBI%2BgXN93BFJvZTGo9NZOjpU%2B6MIy54l5rgPK1shf7gDSOPhcDJx0sXokUMvc7DChL2URtJb2oeQ8EQ%2FRThQDDCoPPEBjqkARCGfH%2FGTPUcilj53AUzTVTUVy1%2BH6nuEXreLpf818Wj%2FB4O3%2FZaHYnwxUgG9%2Brgxl2hTdhDtdxLxzXC9YcRzKCbNoKkKkZAziq08wBKgHSeAtCfZFArvAOWitS6V555zB80RNrTxcGgcBLt7Dc4%2BtUltTAbcVHN2XQ3WjoSgL8SbByAgceuDkGQD%2FQgQttR655ZRNPNzbOLRv%2B6cE%2BVeN19zQ9C&X-Amz-Signature=23df0631bc804afefe8b0cabd1d86a5e070ba7fe3b83173b624f064630fa9bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
