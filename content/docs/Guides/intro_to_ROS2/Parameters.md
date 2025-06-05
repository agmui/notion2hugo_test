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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBHDSAW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDbeGPOOVBsyktjNUD%2BbG1eR%2BH6yqzq8r5F5dzJ6SAA7AIhAMGG64XBRBnUC%2Bp50OHM3z6x7qjNX6ClQoyZ04T8xnrjKv8DCD0QABoMNjM3NDIzMTgzODA1Igxn9bTvSoYuVw%2FNPAoq3APd7gC033%2BYUTX7hifCtv8UEzyLhNlm638PddtMq54Saq7nr2V%2FqfjbXAFLahLp6KkOHZrBCcpi9TfWOQWAZVwFHkYRaujqOXNf%2FcWj0EPnk%2BZY4UNRqMn4rBRPFF1xqaKKdNpZr1LnICqUFkPoHC8i1U4xKhztDczeaQ4M9EmClDJZ%2B0e90v%2Bk%2FmU%2BlEmH8XKfQgvFjgrqSlu6f0IzdfIrxRviRJodTocTtoSSvOoeOlcZC9%2FSzEjVvIkHgC3wiVNKRQQ%2Bay7tP2s5j1mf3vbiwz6BzdzcSCTpqBfC%2F8RGRn96qhkcGTQgglKqQLeHK3bvIs26KKopz6A91N5EQ675AJZ6m1R01GUdlofWFlPeFLj1IeudJXjm7dmFYuH8OB9u%2Fof3TjeicV%2FOYUj%2Bb7HCRji8L81ZxvsvQ50DZOZ9029mLRg3fUu6nr4RCUc4GzVmEew5%2BYlIVNG3wSDyAObnVUSqWPUfReCQE1jdydh%2F72wTwMCJ71LZsMCXDmI0eo5JwlVibHeHQkcx8PXAARyQpeLMgHbrEnXeXQLOZHzy0CSM%2B0NsenaoCxAxmidUQSN5dX%2BVGdW9%2FCFJqiZ2%2BNAOiqKhk%2BAIOTSf12atHQfxSf8mte%2F%2BFg5%2FiwE1GDDHpoTCBjqkAS%2BLSDepMw5L3bs6kLAXeieXrWQj3CCO01nymy1vymIOMmtONWg4pOym5XpIRAsSaPRy2VyNqUn4fxRpTGmLfc88wj0hEClbprczw%2F8onuW3vpfnFPDkp4bLLXmxbx0DcfNcKHuxzveu8uBt4cBDLwPhnjP5UZ4i1ZrqIvjz5Lu4r4TkYyiZL4sgXoD85k6BiDEQhOLUtqYKgn5b88XasbMUYg4%2B&X-Amz-Signature=2996272754f0e586678c4ee9a1df76195e099df467872eac0beffabafce21487&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
