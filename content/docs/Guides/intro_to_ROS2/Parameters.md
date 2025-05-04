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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646EECXVR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAeHaWwrCPDgpLLUQss691VY5l44uDFddv4pxXUEXjhlAiArXGkccBaIO9DF2wYvI48nqcymy1Udoz%2Br2XrpAaezKiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmcGY9wjMVm6awtgsKtwDE996f52fUvAzRkGOwaDnvPuPIRF%2F2qWI7CQOMROrEOfJsfB52iua5kPjiBGZEBF9hnNNiIVboXUjHr2AqCfajAOcZeiqVOp%2F5b0vrkWE1zAQhVT3KWHadwid%2FcL5O80d9emc1kGrcI5M3%2B7Uml7wpOcGO4T0PjYIpLNY5HurB5eRBhhPqcMrzGVf3eVvd19Ydk83EhLNND9%2BQ8m4keVYvkNFuXZWgQweKAnwDBNeDhzvbEXkQot%2FYlDaQMQBjhyWDp3tR8KSWykghONA6MqVefXgwcDwzKdeVoomWdxfeXdTQWGThOG%2BuSStA5END3tDo5iAB%2B%2Fi7moKR0MnDSromSWyWGjzMelOCOLYi7phalRHwV2miTbR%2Bk%2Bs0eb8VLlgYrY38iF52CbAZ9ue5DzQEx1kcw15noywMTvvFHoX2ni%2B4z6XGcehHsrjjxkYVnP9TMwXrLxDYJYfiNkRBBUqUCw1ShDTLx%2B6j4oIRkPQ%2Fmge7VAC6PBMqEaiXoE7fYHq1c8rkviIpFJ5aZql9ZSQbzpQ4fYF8An%2FKSJJgiJhdv4HteTRWE97Ue3ofLlAGNQmiappL0afmCH2MY%2FbEijHU15dKTiQA4kOC3JCS9fSKav6qOM9KDqMjryknrQwxevbwAY6pgEmCgiC8phPMXRxqbhrHPYvGNxNyb0PWq%2BoP0MjacHenAu0ogItB2z0dMr4IoSUV0JNa5cPFUosUJu3PBe%2BPBmoSWQNutHcgFAEpKLFRtBuOlOvx8xgb9%2Flfd2%2Bb0oUC6AunqyYL6AqexeZux85gKuQhNCXmuBZjigoieJpvI0kmu%2FjexZEtYZ7mMCrxXcF3OAQiZW298LASSD7SwY3ONVPeLtsnCsY&X-Amz-Signature=9153fc32a30506c2f74ad3e6c44b758211601c0ff3c93f6f0cf92b64c2a733fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
