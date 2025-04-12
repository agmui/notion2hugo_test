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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKIBXDU7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCjhFiQIbUiWNED7hR7dO8ahsL8cByd9twcHqcedzq9CwIgFQCcpgym6qmqlo6D95dk38y7Ue%2Fsy0X%2B35DWvgrSpyUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxHhhLcNab6QQ0Z6SrcA0ZL6EfUc40VaKlXgEg4G5Er2LvZzaGN1JBFrdGYqisUM0X%2B3nuhpo21M22C3204cylwK3meaMJ4BNb9KfCwZe1LNZmNK1NKT3q1VxyscsQXaxVPf%2B%2BClKLZXwyf6XByVzcHkaxI0JE1XeTvNvarBKHWILq7hTv4Ob%2FRE7x5it2Vvm9YnJoHmw1AUicU4kTaUToVcQPxb90tRaGpWqZ68cOqGSh3luy18Z2uwVytizFf2FJFzW6jZNmJNoiQ55eeZSMofGOBSD9laeb913SK3PcraZOCwXWf4PIgNRTt0FmT6gSjE%2FuJ82uHiEsKeKB0rSYBkJRf4IKUx%2Bsu0LN24teZ63o7K2deOaPqZOc2L8Wj32GpZz6go0SkzpCYGJPGQkef64Qo6PLe%2FX0Ckm%2FRFJtk5eUwg2J92Aa6YUI0EbdsFaEXttI9PJ66C7mfkqtf3x3D2j1qOHCwbU7gokXbpz0P7Q1OlE%2BsmSEsbggY8srpjnyNIA6o1avGd5lCkcaK6cjp6EnZveTvKZjwj0TJoZuJknRSfe5i0CRHKfSBL4qps9MkLy%2BrkL8%2BMZ35GOcj1a8jQSA7fg1RCPNCU0HC3gIWwQriupxdkto4uhVd9KFrT1iWANo6nazRDzJ%2FMIWn6L8GOqUBgxJeqawcXgQJgtpWuIPLrYDsFaMiV0MY67Ipqx5zCidsk1yVpwhRdQOak%2F2UU9o85NWaB4qg0B1WwrBc%2B2uqzkCZ3yVzfTpwGgo62Y9jmY%2B8M17dU9pWWPIq6Gq7e97x%2Fn%2F9t4H1GzsdmRGf%2BUSqQNCLSrT42GjRIIIG2h8pi9STvjLQb3qyc6UTvy3hr6HcigVYaCkHppw%2BU%2BHEigZGmDDXUU7Z&X-Amz-Signature=4eb7bc8d8091d13a809eae36f516d5e02c1570baaf5411a20ce660dbfd691ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
