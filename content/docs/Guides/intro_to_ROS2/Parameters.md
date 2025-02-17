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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRCNN5C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF2Ogp5tEgXR%2F%2FD70fBylCPIn31aUSbcUbYobEjW%2BNOgAiAicn24V20wELqmx9%2BkzmawmFEUF8YeP6oLyvzuef01pyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdunI%2B4VULqoiLPxNKtwDG%2FYQteKoJT8zvw7wqaadMGPSKy08B3L%2FwTUvbfDyOQXvAPabo6UtXjuVI2cRxAB0a4VGMO%2F%2FbCUm%2F1%2F6Mcuw8DYn2k6o%2Fw%2FC%2FOr9iZMf4llYO%2FfhLbjuKo4JTquDX7icX66FfL3zPL2OSNSzxdCu6DRSEQfOVsQiqT8Z4vF1WNqNu%2FvuzVgdVR3N5eCHXRoKzHlekVk1468q4A37WlnJt%2Bw7rNk9BMkSh2NSYVPwADJMbU9C0sNPUw7lciVjghE%2ByIy5tjT6e0DvkNSkDM8jCwoc%2Fln3enKs8db1ogFwnDFxNwp4JMTREz06aLXE2lWV%2BkMQDMF1dAK6%2Bq36HtAeRLJwSNfk5NN76hZa6W11K4fc2MxETYFj2Zqxh9erEsBXwbWYyE5gTArYNm5y5GAt06IfytvNNEM%2F6XVrR%2BejcNoG7cvyfQsmgC7Oy81zZA6PoUFJXfLbobcHAzj1XVqDy5euJSK9WUnI8BLXVd8tJO0VowuliY2Kz3JpyeMtzm%2FGYEpbRd%2FSDIMlJGIqGZUG%2Fzxp4B%2BQA9EDPbTwpY6cKvuA9cLm%2BHAnU99ZLG3z%2BSGitym6PXuMb%2BqccO4PCWqi6tigjxc%2Bo1m4e69fZNjtXCQPZVinwDN5%2F41MTREwq%2BrLvQY6pgEoYIOCQXJ1El8PADvB7zZK%2FM5qDBtsqFp2kt3LG7dtQLWtxsSObxqVo%2FXmItYWOjdB14ghF%2BGd0Lkv1qZ%2FBl8GFFvg5kzdJLBHWrH5Hhk%2B7xrmxxVj1JGik9hyS7Ndei9mxoaSVLjOJwi4q4G5eOip%2F6YxqU0SNq2JFWwX7O3d9Al%2BEgRA3Y7x8lz1HzLh8duUXoU8D5kYuzIvxsiIyvcdthcdERNI&X-Amz-Signature=dc834e3684a4d65ba75cc702eb441d1ba35cc61fcaa48b4bdc18767ff6f4157e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
