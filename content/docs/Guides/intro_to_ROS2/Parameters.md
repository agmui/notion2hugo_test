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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCE5BONZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFipFv1DQ3SMzZwzcJFFH6X8%2B%2FX3i1yJx%2F6Lnlz4Sj3BAiEA6uqctdBq0e87jhXCDHniNYv%2B5XKJiXJoasOYUKJckeIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD053fYGa2FnWO8RircAxTFu2mSz7C8NsA6FIP4xxk6SpQRJ%2BkWxY7BdXSMoRGyo9xHJTJVRjMucqj2VelBCYihWtLj7SK2CsvUwiWnbwNgZNao5%2FJ%2BvWSbLzK6eXvfj7XnGp5IC5%2FRKK01n1s9sYVyQdKby8waEsT%2FSKAuACdMgEy9nevbb4aYrC51JPV1fqXx1mLe65MtBfrAS4SSkbGXgDmrd0Ix%2Be7RN1tWMHj1vFGV6y6yPtVxNmdPeBWZ99%2BnQv%2FyqCbquHEujh%2Fuke3Ln1Hf%2FA4SLCKnFbbp8ApQoedQ5bePwEIK%2F9HdSXs%2FqrZRlGNY9AOnvfgk40AUdhlBrFPPAoUwKop%2Bj3%2FDMoOWmI6iZ8thek89PzuAlpn8BUZtEwzRXkKnO8LfD3kxoSnJCz1WuZi3Wkl%2FLq%2BZ4gI%2Bf4dSOTO67VRvejI%2FB43NjMgIjjEQJibtt2a5lDyo2j2k7mNXNAPD5%2BJHzWKfD6B9lbKVxcoN5%2BdWdEkJBBZN7WQVHMkoIUNbF%2BJTnwxWCcDnlZSDy2Zbqsgu1Dilq3eKk4LYmYTwIfKYr30hBuG1vQwxVV5l6yBZzIeIrcsJYHg3LO7FdecVY5MtJVEPkn%2BSUu1TwxVxFXW9wU8pj%2FuQN4VAC2afdqeT91%2B0MPWwlMIGOqUB62l%2B6xYF%2F%2FHmv9LspZC80Im8jDKXTaHLjadKvlm9%2Bz5RpyNe8FPp66zS3g7gf1QdojGVs4HZyq7Ce3Dut2GZZ523MXxIEjJwBTXMRGT8foU%2F1wdyhqcEqm12lXI%2Baq8U6%2BqwhI%2B1Nefwa2a1I9GB9zSy6DfgppI2QkQtKmqXha1y30gv7hseD80UvorSU3dVrnkMHXHkq1wqTl8bEkHc3OGTDzlh&X-Amz-Signature=9fe340df3ea61e9e455a221ffc11c0118239157d41d4f060496f70d579ec9c02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
