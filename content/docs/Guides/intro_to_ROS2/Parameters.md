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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GKK3PC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3vTVjPF7hefU85CaPWEE1o%2FNlCWktLSXGNoF7eaLfAIhAPF1cJdBHQeijIMVDiirXwQDPs%2FM%2FAxzUsKUmtDZ6LftKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOwBsfBzbus6m6c8q3AMeczbEhQkk4tDjM6YZsS2VD8mcRwUtzU2IMQCSdJYfblfaTvHEsL3MWBRy%2B4JKaqM31D40YkC5kA%2Bf303gFBUpSCcQDczZSUrr2oVHkBoBy%2Bp5nPI8JphRtMV9ZcAnmrogUOI8c5lsErdTnFrXp6aO991wIwF%2FlaRj%2BYlkWZEbP7r2ll%2FSqweWDg%2FVLMI5JNGuqkb8LPqNI07rOlNL9xBnQqgq8ya2DIrnCfXTzZ9LUsU8HUp%2B9WykoTMbUwtqggwcVA%2BsxPcL757LjCI29oSvHmmSDOjq8UAcHVGTPeXdiC34DSdUHRqWG62H1ycyBIa7wXbIJdH6shTv5AsH4o6VXN33zdS2XqeGqPDTNrRPPIMm2CWnLjRPsgms%2FTTIRdbKYls5B16tGt5XdJC0mXfyK2cxRel5rmVSs0Sbr8cCysXMR0Z%2BsvQ%2Fao6cbGAxaMU013srZKGbjeWw8b085C%2FCGuROfKsfnp%2BlT3nkYuHtROFBZiS1BkSNGgBXrClKZn3kPFyjuI9KsZH2yNigxZ1Hv4QPa5wCxMCsgx5UPLzfScK8eU%2BoUCfdq8BIrSVqNhnfephjRdNZYnZz5b4Z1WK557S41OCuwLhuStibm6utcfQqdkwziese1EV%2FUTDv1LPEBjqkAWLTf995KhnuZlmtV5oqWU1%2BpzRkSocdf1xnlyX5U2l4hOcbmmTkacl29AjceHECqgT%2BPprAfIey%2FXlXKvbvweKeKRbLbthD%2BLOPVpt%2FvTko5VJiGAbzgpxUoOMRbr0TA63OVfEibBILyuHkXawpIjAw8%2BL7Y95pX8EolIvXwQuNbEvdlDN1%2FZc4vqQXl4vxiIYPTcvCHQ5wmy%2FxcqscrWzAuDTR&X-Amz-Signature=fd1d601b8b262fbe0f30d9c4049fc90a2c33ddfc70b2c41b79aad9ad6ae61fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
