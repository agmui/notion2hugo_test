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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5N6H5E%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDjixztk38mO3fyjkQRhF%2FnFGZnWkG7U3X9lGmC%2FPqBsAIhALzQNK2xPE1Z0v24JUjRqRgw5mZxMQD1HAGOCahKZniZKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcCl8eJZ9IKCta77kq3AOoCPhfYuDDU8yTxo8QrFlJgG8kGmyBzwjWrSFmYVu4ovPrufKHuEWcFT4WUgdGJPDt7K6Je9OWoQfEEWmNt%2BpVA7aOKmqzHosPPVRfh3lsNKwF%2BUFJjb9AvFYNFxrmPU7fBfW4kIDjQfm%2Be4egcugTWrgYhvW8qz7ZndL9FDaWgAHnYQl7AEbuagX6XToBJ4LASKBEKm%2FI2slVKosJ9e9Z6AT%2B91TbwZdhVRD4U0o5GlmdSh6ALCUVCX7vi5OIR6vwLLWpu4S1Tric%2BOckeSBFkEeYJdL%2FOQVNpNjwtSEigsHdb2pQTwEtnVQnk9x7r4Lbl%2FFVD9c29RWwKUUuWaSBLw7xU12ptKubrSeJbHm6xVff8vMU9O0SUD26t3yfpxbX3%2FZkTBpOc72RwIxm%2Fqko1m3zkvxD1pDUBNoTh16wjXu3iCO8Jmse834Zn7174e1QpcSPs5Dw5RxjRr2btM2%2FWjoR0E6%2FW1mJjSoBpdRr3LJuknS0QDA6w6wY3oQlFm6FL3DoQAwuxdCWXXaa37iivsgwRCuMP8agk0q6DLDO3BwwwBynx3jokM84I5dkJighTJxarz5rbU4eUL%2BQxgVbxTvpPw8k6W%2BDptIjJGhx1Vn%2FWtmT7f%2BG36IF0zDUpa7CBjqkAZa3LhRLL0uzESkalKFAAzY3a5GZlkByHfec3gRiCrZ7b5Sm7l46h%2Bu1E%2BA%2BwHFPspuDx7NRQTBusFD3cTKYj5%2FvyLXhpZCA%2FfzNgENh7vNUeUzjwuDH6hKOyoFirXGgT%2B9AhIhkfuNioLRTgYrJ46LUjqEqMeMyntnwIT2v94nwph9S%2F5Z%2Bp5YE4rZ3otNBbZ5XvE5x3GleNbuSH6A8Nih4lsdz&X-Amz-Signature=050e14f4c49d5f11898b062a4598b9b4084ac4b4eddeddca9a8c6cbadc128e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
