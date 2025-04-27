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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKUNMBV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4UNDHWgqnMh2Sx%2FwK9NfdH6zUHo0jy9YN2XjYwpI4JQIgTrYVY8oIRjpmz7Tvqz5Fojtb%2BoZaLqMksQR%2BTBvXepYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEw0dAjdlrEe8XQoSyrcA2JXuk6ZeQx6h6ZNk8%2B6CSBvGu0ngtEOwV%2FF%2BGWBpSl9uNdlFEUwe94vQ7lqsPFF24VcD6bWgRpSlq1InNVCvteu6cNynV5Odqf%2F5ShFHMljix4B1De1Zmn%2BEMXCeruHucv8ip0M3w%2FcmuRTDVMlMyK1WsU6kuaZIP96fWXwnd4qkYgbOAYz2vzewCC3GNtdSOW9hdFcGE%2FzYHdaPVv1we5h1cIev%2BN1BOYjOYa4a%2BG%2FbaiVQBBzIkqo9%2FLyhwkuwBLlzvr9uruATO8rmsgnSEVeWHt1lnGc2GcvfIF7SBtvrKZr7l9U1dsYnD9iR9gAI6UVIeubHjZ1Wu3hJQ99YenyLuYdsei9KNHJ0tXcIsjHwTmQxwHEqhhtAopobufCAbK3460i73g4K8L4bndnNqda%2Bmbe6X826ooS8pwvlRsdXAcHQKQa5iWupkLkmYd%2B5602E7mLGu2RmJz81JkNTTnsRoo8%2BmUhBCyll8pMjPVfr5MCrvjeRBaPbW2TQjJL%2F%2BnHzsHbg3PQ5MnbDr%2BhSNfA9UzMoc3jzw7kri1zXvcfDBlivuG6bF6wPYUgUrtiJP49t2NZ9M6dxiE689dMVEB6kIHQahmBQuHc%2BtElfkSDHgCHwM6ePZgXNdz%2FMPvstsAGOqUBzu6XJlMNWSrW7hZt2SL7Jf51D8MRRlr1nlYS2auabPz4NjhZvLSVDIa%2FmeqK3m5xlmMepywAY6ZLWxitJZgrAl%2FMnWI9NxlMN4t%2BW%2F61uWG2d54BKfX%2FQqAvLmzWxDIIe%2FS5cWR2gf0vCSzxpqHJvZsc4q9rMuUHsgcBom40hbnEzqTf%2BiLNfN6QoevMlzzdozgK8o8K5JAp8Ju9IK8mPVvcAu58&X-Amz-Signature=59f27a5f987e3a44ae333cea59b8b586df32b00ca944e7c0c90a7d3be2590061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
