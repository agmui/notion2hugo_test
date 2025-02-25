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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNA6BD2L%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCm7%2FenmD1EQVBw4g56EHXkYhWbW2O4gVJmHR%2BMBhSAMAIhANP60tqUZi%2FcIIy9RE9FDX6dnfNhD4fVb55aUWMjzC9pKv8DCEoQABoMNjM3NDIzMTgzODA1Igwatet%2FDvipeFi5hZoq3ANA4%2FUGIh8hakfTgatKpaDeLZka%2BiFxzHFWfOrcVfJsXeq7oH1JSRvSLcWRDyhtahf8LAUhyrqqx%2FU6iHV4iezi6T3SPR07Pm2wGRLRlwTypUdX4%2F9zRnKlBfmLNXYtoyw094EyUpFqoHayL9FsrWQWpFSI046q0Gaacl6DKxe%2B2Ofy628Ext66RdlmUqSdimYIFkXpjUMTB7or9eXBR%2FeMgJUPQmYXPZlCLNCcVkx%2B8Sr1%2B884X7sEjL6CTFrO8rynTT1P7AMUoYBwVU7LWmfCxvQlZEsuZ2FfMo7X9nlqc09X23ns%2FPPm%2Bz3EuzLiz2WBG4f%2FMZ%2FG3Nr3xWTxlWtqsd1%2FrrnEoE8uuDhX7Vjj7Sr17zNY8rsInhi6XBLnTzVbGJeyt2mq08waIYNkID08bVoTJjV6SWA1mAi0aO6G6W%2BDk5tRmREM5ISlzQWiGAMqmvQan0qBwT6t%2B5lZo9piaX4mqxSsztsQbcNST9mJvezU5WODvwYgyeIxBtxb08vCQv2eIB0lAFiJIfmGU%2BSh5djDo05bKGd57HEjXPYSlRtHN%2B1A2v6AbipWmnlsGO1AvsWGvVQTSPTXrEsOhlak%2B5re89jFz8Kf23GUs2hQWTLyabGgOfYqzv6%2FtzCo7%2Fe9BjqkAcAlf01dhv%2B6QveMwyAFA5nGRdRkhFYSkS84XCH5aD%2BI4kDfqbspb8CctOC%2F5WTu8zHrFbxXtFVOtPK1xhklFgJ%2FqLDzUsmwTwGS79XhxEWdZDGhkFBTTraBW%2Fz%2BNX4iBsSU1yaEyEC%2FELxnnFDp%2Bnaf8x%2BOLri28GaDSsTKYlXbjzFZ9MX2WbV3nqvrzejyPkDipvCKFzRuZhPLSoYJZ0cNZm83&X-Amz-Signature=7bcc92f2b7e11f8baf26ff5c942b8c5ce3ee44cbb188929b6f57c044b5ee746c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
