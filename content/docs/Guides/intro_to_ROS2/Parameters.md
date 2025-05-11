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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQJJSLB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIG7rB%2B1fjOYIaZD%2BxFz3gA5YORm3JCDeXZre4K8%2FjzK4AiEArZTzxl7bNV3KzPWtYO5U2W5UK7Cs6dF%2FYVlk23rGKFsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnNWN8u610wOsCwOSrcA32V2WT4pCiS5IIeTDtYekcN6oX7mLrYnPPVFTwChgaO37SHgtAi00jODNmLUp%2Bqyg4X56tA7%2BRlm%2F32heXj2h7o%2BvPjxH7XhTigtM00q17ghPxFs29BDT8jn7rpJzlQJ1uW440lG9u3c9EVrDSr8D8BDwUVNyQT%2BDDlL6qDTDzKPMs%2FcXDZa8s%2FOm5zELaoqtIY1NmQYKsYXezTAQKt8WPu6kjGX8OwKWzmp%2BZded3C6n7Vg2tfKyJOC%2FFI22ZYwqDDCbCDxUV6QM2Mb8p7KjiHXx%2FZNs99MepKHC5oYf9kZ87%2BngL5ZgWRtmWG41IsUrRDdbIyC0v50oXNiEyWRLWpvCmU7PQdq1GrlK6ZSnGKVOMv4INY4qFZbfKwFEIupM%2FUUXXYIJzZqaypIj8ncpO90rPVsSAHEeaGeceu2%2BEbml2LIAapmP9RDPQt79P3g1fioSbwtFDGrNPa8COMFIBk6fAGMMxQhtkKrn3uWJSVw2VYr3yNgpwoIAZPcWKhor5n%2B%2BoFVZzmx%2FczcfAbaS7psVQwV2K1DfMDVMblQnFMoZQEK%2FefC8mJX6rJjaBo81bOK62k%2BZbq%2BZYYMrEumBGgbRHdaScRsGK8vQjyoyp90xoRACW8NJMvSSg4MKaig8EGOqUB0WLIW4KQ1LT%2FFd%2F5Qctpwmv5dGn7yntcWjyDri3VkJuocWLmS7G5qbB9Q3wQIusJ0NizWcVtUMUsviUnwao8V7R%2BXbuifMUapZhOxFQFYAvsXEwd6VOQERYJ%2FvgWdbonKAWEDw354AC2gd4A%2B19eoW9y3%2BFYpHojvnHeE9ewP4A%2FJKDyDC7%2Ff6p5efZaPHsyBeug6V6uReoMIgiYBj7psCnMVNOi&X-Amz-Signature=30b5d31e9f174897cd099f3e804a9459115469f2ab9038d33795d7148947d1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
