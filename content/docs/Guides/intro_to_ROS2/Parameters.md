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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLEGHFB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbTg%2BQP1GVDdPLUHTfQ4oI7wOSAE4MeAyEADkSYppETAiEA8JAjYJRyK6aZSrxASc8rQuJX%2FnFkFiFS2mvqGaasL0AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbndof8gdfQKC5XPCrcA93IgrwSD8zaP%2BRWmccrY6jS6Rp3LYBy3NNQp5VZOccLqiNnkhFadPEmxoWP%2FgTFBxfo9RVJx%2BD%2Fu6MgHWjC3u6nCN9jDlex%2FPqYkPFDwXAWqIvKd3fBY%2B8dZ9ZTByOyeWi2TWblr98huh2dJPROGJpC6i2S8SY05CoE7%2BKz8b3P9bxCgGwe6jpy068dKrhM9djh19wnSIjhLB2SZ9pYg%2Ba8wjkDlcVxMZtIYrOmndKaCC%2FuLljmDdf4R10S8voi58pxsXe%2BcFUAF3zUr%2Fhft85PvvZ0UWikzVMzrtittffbGyGBfZPjkXFOe8emnxfk1GtiBrtQ5Xhlvbg2nwe0W7stwBxYh0Cdk9oT9vrDPXcApH1xaqAUToID1INv0TLMEsg%2FSiS9p4O%2BlP%2BB%2F05oI73U9KRafn5fbIdhoM1UWZI%2FtvDyiuLbv8iIEdVHGGt8d7bw9CfkwmHpuVIaCk5VpoFIse8OG6Vev14UyQrVk8H3i0f%2Bah8Q6iJnfuzakVEqKbHKtHLu0RFYXu0AxpcV6OBt7zH9K7MbP%2F1D2L8vS0mixLnh8cmxQLrBNMpO7jf7BJrMaIDZwg2prho1%2FCkW3NKgBgyeaMQ0%2FxQOGTdzADEyaXIcxgvX8GpE3xDEMKvR4MQGOqUBJfWsbJV0%2FkjTH%2BoPSm%2BPuPUSSNbTQTKMb0bbhttgN4a6pKWcZiXn5GwviXKsLE1P%2F8qfl1T1MPJEzD9mCHtlJooogeiQDjPWoSnRCyTohP6aA4awmYZfpt2Xz8ak266ax9bQ5SRcXr5RBYamSi%2BHj1CitJhoXmHR3HHtm2KfIRURX6ZOz9ujv6fiJAEFzsYCqzPxSbAD%2BZ5dT9hBWohRBXI79C7D&X-Amz-Signature=6ab0d21af9f638fe8e018099a54a1579438b5493515994090cecf671826e2ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
