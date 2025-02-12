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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDBTDLM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5nfBhH3kkH8zqoB14MBM5auwD1hxcknbYTXu8XvrQmAiA9X8WzVDwi%2F1EKukdJHkvQmxLG77UdEWnAmYwpP%2FWuqCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi6OzTIVYUjRBnbk1KtwD%2BM1Xc0vOZUHvveKrJgXqQMnxOXfQeh5CPXUeunNR8gBOET92gDeMxdj2DAQsvg6hMMU0pbqMliXg5wjrfWbmKJR7G6hobAK2IRCEI3KF8KqSkPaA4L2m%2BfD5aVYQwcB7CXibNLAAgysqcBsfGKZy4HhjKFsHt%2F9Gb2p6AzFQZEztRK7XmvZudS1tJm6pe1mg0%2FWqbXguZYEybwev3rvGzEpGULzAhLe6UzD%2B%2BnXbX6GQXNx9eUO8%2BQd5wnR6rT6eh9fX%2F5P4N7Qrrb4ijtyvhqYZVTcCL1JGWBbb2TwMjWQ939IyypgUUEA%2Bb12sn0hwUEIvjvL%2BiX%2FwpAjIVWEM1jsLSm03yozAhapqQLIBp5Jo43EDEV11j6nzBimESI4UpAq5JSngs2Bzq6eYhSLGkXSXK9%2BzZEWkHod5PT51JtZC6lj7JK93cRLrjynqWbuIHz36bDLHqwJXLyN2LT9CYPH3Qzg8%2BJZZUSSBTjVq2A%2FdFJd%2FkaacNbmacMGOqAVIqvv7W3ig8hkPEpWPiV%2FIT5dt4FOa6Ybt0L1Acmkk0BlW0IyA97Njdaavx6IXRy1181gaPAyIF6FVIY1Zb55oTh1A7Itl7OZsbdrLVVnOOwnMRJrj%2FFnUOAyu5vUwx6i0vQY6pgHPiat1ATiQZuNM%2FO%2BhsCkEoCWf4kyb%2FEDs0rU%2BWzcmU9P7YfhiercCfk0u5t4D7ZZhGvc0uWkwJZX4ntdVN8hLCaa9c1yki1zWyyUJGsmk11c5PaJO3zVdtg93wQaaN7a2eiWs0IkKE4PFGWOxeYdNd0FrTDecb2klERtxoUA3F0hvbXi5YNi%2Fq48rqBvPtDi8Wk0EuYs1jSb8oUj%2FpGzkJ1HDQkDW&X-Amz-Signature=28c1832eb691fd6918f1bfb23a40799ea543272aa824b0a5fc1aeed7ac3ed1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
