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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YY3DZLK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGUj4ZgxTzjrWYWmGVQ4bbkrdAGLhVFoHWAWSiFJgVvqAiAt62hMgcm0hezFryp9pROcE3h5TXd9l2HKLCOSzplOkyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM8AniQPTxZX1TUfUFKtwDTuaqQMkzGGdwNTauYHMzWpj32YGWPF78vW62pNXZtZYlA8J8tT10ANHRpiQkJqAflxaFhp9eoI5U3ZXGSYQ1K16nIMqc3Tm1mtl9GqpJAERBYsLnmMxhpb7AFe6L3vb57fyJMWLkeco0ngZMraSANMz49OY3hRT3dVvdJNy%2BHf8BDEAEyDSMbK0JTV1KocbWsfphtwEsYh3BMGqkpMLziqFfKHvETgKNNt%2BdYOxiDdNmzjbhJ13GZylBPG7kZ9Sl%2Fi3D3prY3uDQJBn6mcPO6iaSmJrmT4b%2B3gDCIjxpNyPm1RXd4umYI5EsFoQLAktwVjp6A3mspId09YCByibtBli0V3P5Brb5Nt%2FYdLrcj3ZHDSEh8y25FA2MJdTPmWc9tchNLjpvx5K8nf1bBfp4SUuzoA4TTiOzM9lTL1EW%2B8Q00CbNNbPdDg7LEw8mjaZVlmdZSUzwm0btQp6oGObNspHn2E1sP2cmb06BkgG9DhJVreO9IXniypDOHXIVrRgoQF56q86NgFxjV0Eb8Puwche6Zl8b1sUmYqyAtM21%2FW9%2BgD5nehpuItYwzU0WY0%2B9bnru8UyBXC9qJEZwyxpzFjBWvpobjGrFPxaLc5VCkPtjl6C%2BD%2Bvh3XE%2BN5swt%2FmYxAY6pgHMX45n5Ge5WELHIi%2FuyUYx%2Fhm2nOOWw6yGUWXtjX1M083tl9S8%2Fi6j9P%2B0piV3jSbA9XrNlKF8cxPvF5TglFXoPuX%2FVYlFTXAetLG12jkkqSnF9hTIAlS1i1LCDEGNZYOCMynvS6D%2FZMpcdsTSG6SlYdwxy7q2fi94J%2F2wc%2BljxJs%2B3lTNv7XwayGzRw6e1F6mZ4huzx%2BgzktHdwI5zeC3sVg%2BCazC&X-Amz-Signature=08def6c2ea235fdd453fd2ae66d89499878ef6cc29a3659702e23e13b79c18ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
