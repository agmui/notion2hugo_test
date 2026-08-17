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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677H5S3IZ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHmd8jih%2FsXI8k%2Fzk7t1uRLZNpUe3r2JQyLoOQtvg4y%2FAiBKO0%2Bzrm3h%2FdAdHW41DwCOJiVpkijCdDsa4MHil0RBDCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMjuV%2FQYj352KLOnB6KtwDb8zAgSvTKGZtaJSDcRHlXwMB1eri%2Fe%2BZuI8Zns1Q10ScNrfPyEfTHi2xcc7PUqSpu7b32lan5TjITj84fm0mlMT57EeMylRp9zhm7sxfPu8Nc%2Frth5lIos83S%2B8uaoN6QdNvpTUas3jW%2B95mgHA4D3HRau3qR1I5QdGN4F4ooKlirvP%2Fim2tjA8pHH55cNrUjvGao2d9ZMNa6NjaS3do5Xv6BtGd9IrFzaMYoJXpAqdGGyu7v8ya43DN8OEYBLVHI2deZBh3sawCM5xoHZDN97rdipqTY05c8fDFDCMy2coBA73wXhe6xyngm%2Fc7hmM2Si1BNDxWmyNXHWUHjU7g4qCfmz7CB0tBktvgu%2BYH%2FMuyI3JTys35ovlz2EuzYsOyMx8uEzuI4FRbEa1zLGWAdfr1OjPnDAibswko0CYInhJBmlBQMRQ24X29SPmzaM75hyt3Whyr2D3WRqwVTyCdEEz37gpgHcPXhm8JT3qQqiUGtzj5pR37b3EkMB%2BC%2BHG8GFrefH7BhametlQ1hOol8phXsfTwr%2Fq8RGKh1ReJjfuxOeZB83LOVV33kp1hHjBKaNCInoIJDMXaU%2BUesGGFIRQbbsEGnLadIe4yAzU%2Fd635wcfZTxMHSXRk0W8w5auJ1AY6pgGRj0UZG9f4Ck3T2hIUL4lDKxa%2BwbUKnqI%2BuiWClgudGsyCP9IB1LULN5PC8%2FT023jS3swykPN1gIFYEFFATPMOx76KLgbLndHXzyPCXNrNjSx9pNB0X07om%2FMsbAn7ETaj8SQUWcswjrqyrjPSzx0Ep%2FHBj6xszL7aTolSaHhLWf4vQyukWZrrjvKJWGTZnlzhuj3iCLnzF3xIp2gt2rsyMWlzQcSD&X-Amz-Signature=3c4657d070e585c8eedf4740b8c3b7b7d9069630e757571bb4d4b8379c446b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
