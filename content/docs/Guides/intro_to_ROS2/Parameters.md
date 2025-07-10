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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZH6JZNB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0TL6UA9yXPLYZgWJdcu%2FNJC4MaCyqcnb%2B2bEKRVbS6AIhANj0XEmrocnHcBlq9GJNZP9KX%2BELDo9MK6X2%2Bjh3LAvKKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCRbikBeb%2FFoR9EZsq3AN0Fp%2Fs8ex%2F%2Br7738AJxRtw3C2FH7qYNPeubrAtU%2FC5RpC5axnQtBbjmuAfsWgawNxTqUWRwk8hTcu8pUmjfZDxfQ8hac9rF4TnpfgIO6avBHHzwUZKebQxqGolwsS5bqpbh3axvp5Cexe1Qrk%2B1kDXi7J8kfa8Vftk0r3FtatjN0JQhhTxmpCMV5NTeLQj0tAYrgXoC%2BESlafiVx%2B0034bdvcK3LugfT705pPvLJvRxqaAZPkuX2ED2xSiyAjV15AdCSIPpda95Z2h%2Bzf0q2bxSQH5WCbWnkE%2FAqSej0BsiirZukBdfOuu9YdafGhKfH0whA%2FJeCbH9EDkVoOKDCiZL%2FC%2B%2FeENBqgq%2FFADmcmu%2Fq7xJOMtlhxR03c3Mi%2FzJR8yq2Qcuh5gvK36ffsunhKs2wzLDIA9ob68ESWLaHROO73uzPJ%2BG5EruvsE%2B24zEJq4p7zAadMuKgSLda%2BvSEcPTs7hYAyCi6GhlZB7HXbroruQwjVT8DBllrFpLeI%2BubLcCI0MGryakQ2yRM9cs9gpyzvD1UCXhdxPtRKWh6WaDlQMCzwZ8SppDFESEzCHYrHJ%2FwTi301IM0VMXqQA9CF%2BfCYSCqjbI37YvAheCEEiAjHaFlMDMPWwT1X8GzCsobzDBjqkASNOZPwTQ3FhPcDAO8ALdPuX3rCt%2BRDwbwrd4J8EL9pDlIYTdityjZ5VNdQZ9Wvf0LYqfq5oBCOwXhMycRkQYEorTiCkSlUaWyHF0XtRmZrXEEKZWQUwjt4O6x8XWQO6JUur642kRNb7zQPQ10AybSbpPyNGbaC8s1bDV44Bvwyt7RJxbPRaXjDINXmM1rmo4CkNuE%2FkVXoEsmMeYbTPbmVtqkB8&X-Amz-Signature=dc13292a43386f54f1190c09f9c4bca2f0748b6ead2faca75c2ac29d917bcad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
