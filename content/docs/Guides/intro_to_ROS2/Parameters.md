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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HX5VT3M%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBvbVG78trbkiQGeJcIbXmyUAWCo30gGaZqvEnOOvNKzAiEAinDm2yE7K0ZmS3lL6tmCMQgTNjgCjx3OdG2bZmJX8XUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLApOubgEj5YNaOeyrcA30MH2ctymGoJND7CNJQnKPvm6f6G43Hh9W0kVUbtcFbpgqQqTiDtX05bS7JER4OON3nuRhA1N9rH%2F3ZaKfuq3HSOXB0LmxR6veyXAzu7zWXDrTM9uSOstGIS72cHOsnxdEvkATUSvv0MC1xAFyKprp%2FJ9I30MZj0%2FlAUn5MJfgPHfILpTs2VYSSelb2N%2F68yNj8L6VGEG%2BLNQ2CaHCkvWEfAbJUIzhi3tfVenkRcwdKIFFFY1hRmloxy697JaqyqBNi0uC%2Ff3cXy3EiemGqjCK95rkWi7GXrW7k6qDWayRCZ2EQ9u5JG9%2BRRmT9ZcWE6ETjLIePiohOFONFhrfLSCLTiwjysovIOA9XkVNdH%2Fa7AglDmMPOW0uquT%2BjRxcm38g8ibbeH7%2BsWLUa7ECODu%2BoljZzK6a3i%2Ffrp2GOu%2Bc%2FY7jry2KCmbV54UbTxif3fYaUB%2B7KRpIOkD1HO2w8uyjAatlPbwDgk68Bm5XiRbFhTVFZypkdcwpEqiNhpNlFohbTCDqHswrjYIkfA007t%2FF2ksFHTuIR6H7RwXN5VOwHBbt2IQ6TvP5ashr9pwBw5XDNVi9kSlKGiuybfk%2BHeKQG7HDh%2BlcHdkXxxzQmRufdfVNXtunNrsDkhMcTMP2%2F0sAGOqUB%2BgCSlS3LEj92gFjzzmrEJF8OeGQz9T3kTLLlA6rMYDjHNeaFLmawsRs3IbP1jAp%2FTxm8jLHxe%2BHWfmT%2BUTBgDgIz3VzhlpQNxpL7xK1XLR8Jcl3j1W7uklhXF%2BNSEm3zWkJHidCTCMg2z4NA%2BP4Q1Jto3wQpfN0y7LboENbVHNH7AqZ7MyqTu4t1LgosNzJcs9MfJHWFHEPUeVxjMXwg%2FMg%2FJvyB&X-Amz-Signature=2286de523079bc60b0a32671cfe066a2a9b21213ffc8e6aa8dc09f8d02365ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
