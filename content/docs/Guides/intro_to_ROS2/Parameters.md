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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ5TZXA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERxYFPttKrPc1lcYpOgAIFImAN6Qw53CYlIpj4J81q%2BAiBsMTX8Ln67klskU964fJ58W6VtqbUtuQlJ2nWh%2F0LWxir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM2VOAZeV4YqJ2YuX3KtwDrlAG%2Fvg8b1ByAf2355cUIx4MrQppAQI%2FRm%2FHt1IVApzPiYiwEEG%2FsAbQMLDr5%2FdO%2BeJkaHjzHrGx8kdXh5gzQQNswbOa63fxBupuHXeYUBWR4nv4q6PMVQACmwXcZ2lU54Xd2VV%2B%2FM7w7qS64EZsRcwcLqCk8n79dM9510TEXxH8vErGOMPDaHCqtgXCsiVbJLLq05dw41liJ2kSkXgy2ND8MNjP8fouVP6Mzgywwj0nbBo%2BR5DnIZhURxv63tBkffHyA%2BiI7lq5Vl2m%2BkgPOWxRmY01IIOT5wRZMgjFFEpyMO7inQhnCmMuYo7qwod1W43p3WXdez%2Bfw5R4GLVESMala1YMicSj8JF4M28ElIA5mL%2FtpbWQmr70xRCpk6g2jcv%2Bgz4u9EcUbwAKWlJ7ufHBADQzdZTOe9IPdj6VOjTKCVWBKgjj%2FZkqQP1ZIHg9JLYnYMz5aS9wopf9Fcg4RSC%2F2%2FhTxzo4jShFjgX9qRsfjNzFGmMhe0fXUlQip5mQVlmPMWkJhPF20NmtyG%2BN%2ByzEGm%2BENG2r7%2BpDxVHXx1BZDJY8WUQiTvisu1DESzCBnYrum5zJ0UTi7WkUsOJ5gbPnYQ3abKrN%2BdDOY3B4YqinD9sCi8OeYDJSTJcw6%2B%2FmwAY6pgGBluLpK7DOWhpQLuhrRDcxR9nOFTV64cb0%2FNz%2F1osLQDQLO5GKoCpa7yNrAmKLiFbhA%2BgbD%2BRNarsf9Ut2iL%2FcC6HmsIVsdqZDapS6ZsCDidmNCgATSdi7DqlLVoPO683vCTfigTAQI8x%2FIVkMpUMpG275XQfb8qUhn7ibrmjsLZ9IACS63PJ9Bd9cV1ES3ymFl8QrwVUhMUnY2T%2Fig36pDMYej1ms&X-Amz-Signature=ccfef6c1c01896252d3132c757bea9ad614f309f086f8da521ad4e4ea14f18a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
