---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNWQDRC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEb4LCVp3HCAHK6mwlZKmuDDwJhUiJs3gOR1sDHX3OzHAiBwjnPnakflIdatbg3nBSu7C6j6sVtLT4NkvS8bVI0%2BVSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMeViqJ7lHI2p0N9D0KtwDCSPGqWJhrm9Z3SWz40ncDmHZE4mPuK5Rt5Vklsm0NwdU9kvUgBlfZq1grG6r2idWMnmp%2FVLy7WE9TyjrB4cwUxt3ZV7EE7cBkaDqZinzSb%2FSW3br5XJtBnzlydjEO8t07zt0ncVEcMS%2BRK9S028N1WQTwg72VbdiTovunL3xZHF4Ct4YU5aYEE9iuFVaJHAXPQVlVyRyXxsD0AcnGbqij1n2%2BdumFa9k8ho8SePqpgrghX7qnr23IZRAbeBVvegzVRJ6wdHpVvLhrQzGMsIR97o6vk883GhBG3lZu%2B86m8vnLoVNBJlwL9bNfO1wBEn%2BCU2MwGVSwrNey5fiKhqeK%2BKp4gMYDQeO5NT6oXpm%2BWYAOvw5MYfdgCGe4wdVuyuAW6vIdwTLNh2RNscabdwYbYGNz2SaOjbSiugRJS57WUOqcMTAOeWDIDWXkiLvPTsBNFFeBbFI%2BPe2gOGcWbbD1uCFWDip0XXYBIwKuPx7s%2B9Nd6pyOoBYff62PlvIIxoplW1sp59xAqTLD56%2FEH6W3xtKaTt0KXyp5fPbqSRydEIVJoX9z3NqrnYJCD3e9%2B030Zob%2BGMPjhW8U90u7B9Rwt9s9b9KeSWjZuFNIaitR66RISGpCpTukyL%2FU%2BAw0u3%2FvQY6pgG1R2IcCBVjERA7ILZNoBBlEX18JnjmnmMDa%2FkImBjmW4rmmhHJhAOisqEVSgr95TfOumwEKEyPQiTUVZXI0N4eHuzA5Z45W3BeMMQZyoURailf%2Bw4jzufhtFrWpcvgtMYjSA6ocQQ33fBWYQUTXa5bFfGgGf2CSnTTtnV%2FTJJGeaVvBJxQee2bVp9ymTbfbCVYjkpvOHbIDcnyuWfHGCOGsUnAXjyt&X-Amz-Signature=e2cc029ae5e5ff841da2597643a77691b0bdf7d4a848a82e52378406e801c0be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
