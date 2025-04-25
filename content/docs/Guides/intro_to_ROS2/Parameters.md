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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWG4WAHE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqy7Nffuz%2B3SGwMO61jl6xERhxpY3rz35ImdNNbyAUgIhANWM3t9Wv%2BhXrEGe3ujnDp61%2FSxDr9CiCd79ulHta8pZKv8DCCoQABoMNjM3NDIzMTgzODA1Igw42Hj%2FYGOSOyp3CLkq3AMHzvY1jPjEb26p1GFeO3JV8TG7aeYBkAooMhT7orUOsoX%2F7fpSNS3aDxm%2BkAvmJExUb6OU6KqgUEU4Hgz0S8f9SfGq8GjdiGXpN%2B5u%2F%2BpDPJjONdYngxhueclJ0Pw6xhukQx3oBG%2BlVinAQ67XYsT2ZRvyWOF17HF3FsHKwg3iq9fcbAnTg4s1iK79GCFGmHxDkWGVZzgfXPMnLE6046nsqV3b5uMKiAbe4WMT30V9j5qwD9SeDR60BZ4JB3saps5fC9nak8BFRquL0cn2uPTfRF%2B0umGsiPcGLM1RFLBZoLY5jndRblr9F5x0Aveq%2Bf%2BCIm3XprBrwzB0N1nIEy9MF7ka5e%2FkYKtSK3lSZDt64FuZRAwmcHdrTqUeiIxSV%2BmeZPR7od7V1f3kAmv1hJMqsRDI%2BBAJpY8j1YA4C%2BLIqYnWM98EO1jorS%2FFJ3d%2Bt%2FoQvKKhWXEiBBIxFXkXI5fHkCDQ2CYLnkr4mM4SsJhbmqriA%2BrUvLE4almb1MlXok4SwznEkyVsmRkykTATIQCqsaQb55fLxbqU%2FfiJS7ZOT7pNknkarWheFpbCR9wVRmWORJJwspB9yyoio7%2B693hB4wdypMaWHitB%2FOyk7lcXeA7AYpsVDW%2Bqp%2FySdjDEm63ABjqkARegWwRoq6Ew0nxdopAe%2BZNla5SIliv9GOkUdu5I8ODrHtVwsIKiqpZ2bJ%2FIZRbHt81PrCQA%2Bf4SkvGPv%2B8TfNi%2FbMpZj%2F3QzSIkCGIXuy9MJ7dqIrJmKrGbWXfFCmAYBKk%2B7Tzrwe%2FFRRD2V2MbbD8FbxWeT7GxrFI%2Fwon2OMKwcqV%2FeShLqzebBoSvM7LzffnlyJSnbs5fL6CPFQqt6Y642mLW&X-Amz-Signature=f986f0769b08e8a11aaa9431adfb95e8dd9165b90fce3d1e2bd148ddc07db902&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
