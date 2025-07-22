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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYTOKCS%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnCqHI34WqesCpoySor5vXtSPSVYN%2FF4Wbuv4onvTBCwIhAPdfXP86wcvQnwfFbadjkINylKitpvHkltRgBy83qwXpKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZVJwEFCW1RemRi2Mq3AN%2FSj77eZ8q6qbQL9XCuU4SC9rncAMr7FpHGmkZ212NbSbxZqoiB%2F2IgE1IWoATbhpR3cTL8dooac200KePBwfCiETZPDdyqjkrePZihIoh0dgLR0%2BUOy2HMTHZvdvPJoSu4xyJv8TQcATweu2bqr90T5dHnmuEQqionq1T44yEhFJFGk%2Fya2RA8ONI%2FqfzNfLywcj8Nzu0is5rP1oYVZ%2BKghdNdnzdjYc2445djL68GpQCrirNXRR3Cr1uO4%2BIdC5GQ52849DBhUtBoSFc%2F2nebTpdqSJtjVQHD4QVHgfXLvw%2BlZxVPTcSiInODGk0IIaSPjKG4ck5wGFqokQ3SnEplsUDMnJNNybFJlPtIpfcvQJ3CgJUdapmx3HlnPan%2Ba8z5HygkUfin9MUwy8%2BhOJx6auEqRSlA7yQnBLJ4pgT4mAdNlLK50wK0rx%2FanK8R6dLbsQCn6DV3hODnJdq9%2Be%2FuGq973q%2FJhaJgKatB4uVzyDSrVOEMYniOjkEO5j1Y7Pwg%2FKD9B24fW9rrP3WijfFeLF3%2BIGNs6D0fHfcQGyGKRh87LmM9gyiCoLyOsUAdwwKdBFN6v%2FBy96MuL0nwXF4MKde9QqgLh6do96ktneoQDtn2RU8Td1XvGKpkjCAoPvDBjqkAe1yK584xAJic3c2mZRwO20M3QN7Tpl5arVivDwT7wpUeTsgd8zqer4V8r7HCCBIlFoW%2FsDSemw%2FI%2FMZU0Ojq9qj6cyJZ7iSx91wdflQooXDfujJfHozYu7vjqQsBwNns%2FZufLJrNseF4H%2FRBT3NCoDxux7BPaFjYuQbIjSRRonffbn52MIH1uHwEOs1qbid6eZDpOktHgCn2YLnnkBKeZmnEgnt&X-Amz-Signature=ceb1dc532047fa9dd93cfd4bec64876e818e3290a203e8b24825333767ba8551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
