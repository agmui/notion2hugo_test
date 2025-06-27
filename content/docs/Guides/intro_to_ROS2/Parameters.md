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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LOPM3KO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD6vxghQqKVLci6GBmacFg7duB%2BN0ubva4%2FvkQUG8M%2FlgIhALe8xlmUOT9wbBwqZ4xbUfiwzCfzwmX6vuzH2Tki4KWoKv8DCHMQABoMNjM3NDIzMTgzODA1IgzFDl69ANNulOP8DHcq3AOCsag%2F4%2FKy2xh27%2F%2BT1P0oZeezgspTvm0886PvqNeQg6NFuvZPly4N08ybZbCqguTN9rpEc7deIMRVA7y8f4MM5%2BU1DdB%2FUc8YZ27xAFUs3ND8CX4Ft9kuMQwQE38iZwiVVQBn4sOLR4x6NlPZcageJBsEPplxFQsWraM10%2Fv5%2FsI7yKEUtamKfoo4iWJ1VXVUOaC3RbVg6Ju9J7FNSBjxcLJbTgI253V9YFL7U6rOow7pWXSLaLkDWF4nl8IbbofUoSTEMkf8ntoJUjJFKznP2788Ck4uMp%2FUYRsXAfTjM7vhTxJmYahEQHEY5P9fprz7Q7ApWuH7ZzeQtqpzHyUtvOLvlRFJfu9q%2Bpj485kLq5mKeRttE5Fhf2TP1nnXwxIyaOqBcj7anK%2Byu2jjKmdjjoydSIuKy%2BGMKq39MsbXcVsUjU%2FyuNGHSbiLYRb6hz9D822TwAGBl42s%2F5M7MzHD%2BwxOrQnpTF0XmAleh8lhW%2BVgs003OA%2BTPwDY%2BI69RnaV8nJMFjiLSz8xmP1U6gSd7%2FbXVkjM%2Bpxy6z9l4AD%2BUNPHwYVVvJMq298RlewFQVZfCT06MdQAQkWeXuWBRCA9XlO%2B%2FLenncZi2YQgs7QG3eF420wxzfnEIEfzMjCw0%2FnCBjqkAf7XH8Mk8M2MKtHwfWw2K5zN1LaI7bWFez8TUrqqIjdj9yTJTujeud8oYrm3Tp4ZkX%2Fcz4y4J82KDPFevaMlIgvZETDIJf6%2BVdtg%2FgFhrPKiZdQw%2BPPzTZ6xrXDk%2F3QL62LfmZe2fzWQFY6Ho4dBf9sf9R4dzCgBD5JAAc8uhRiEjcpwuyRjzQBm0VQ3eSK1cbbt8PVJptu24hB1466S6CdjbuoB&X-Amz-Signature=9fff17ec50e6194bb5f3c490374488fa1c21870fe8637923b95d0732dd5e76f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
