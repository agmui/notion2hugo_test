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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CFPZOFD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hu5jRprSSPRESUkgcHWsDVBQ6trnL26DpzCPASziegIhALsVhYr52bRmTR3EPZDvK%2B%2FUzrYpDg0m8MwR71rj6o2vKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlgNdZ9EejGSbxWksq3AOz%2FaTn2vqsJdUqStOIUXekPN4iuIv9MQik%2BGhmvbIgFfGArSxuHXAi%2FFE2b2Td1ATNHx1YdBHBmsYrCHCUfYmcYLvnWh3NUrL5cMuWRoA45lmLEyqDp6KMI3cIhhN67Ez%2BBGL2p876h2tuyd0ZOAoyOIq049VR2KSe7%2BidRABK5xjKLdcQtXN%2FrfEUsw%2BNcP7J5iTU9HINgvYjTWsvpreTyaIeT6fMvZpS7Yy6LFAkQE%2F7QZPuCPrxoaAi5uF9yv3QDinun%2BFlvscNFzEdGMuscE9bJnrYNOq2hOepvS66z6oE8EospVR2I9CblDEokHSoGOHSciSwFuyecE1LNSFmFqU5A%2Bdd2ZA8l7k85b4nbt1OvL5TQnFtLtp8VykHpiooXgNmFmIIVqx%2Btfw3e1auYNcTDKEGHBaxBJhlEmzUc4uqtMd5C8B73gYs6n4qMPxMzlAr4r%2FnsX%2FV%2BVzaOwf4FLwIiVMa0y6OP4KP5qtUtGkLIBSUbioCZCDZ91EdnqEwBRSxdCTjvQhdQKCqCNmB089TF1EhoBdPrQGbiSVMjSwp7mRoiPfGauEONtKTSnWwz6%2BujXf79Y%2Feqsxyj8iigcJYSRf7TQlyFIRL0pXHyu8gtQ%2BctDn8PpLodDD72crDBjqkAZOH4RhKu9n8FbhtXTGTsmxItQKqptm2LJ33m9SWUDLWu%2BRB%2FY%2FMnr9I6LjNVUWqNXYjw%2BVVJTfLfzVi8hDSEM072yDgCheZG1VkWU4QaiGhposujzw6COi9qNggIxxwbGOpmvE4zBF%2Bkzm6kTQgqj6hLXSScJQCs0g610xfMo%2FP0fg9fLkKia59eZYeAubzsPOIco6mVn1F0LlZm2XOfADbXDFl&X-Amz-Signature=c7a66e93deae59d22d2357c946ca939192ee092f28b1282ae68fc48209a740b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
