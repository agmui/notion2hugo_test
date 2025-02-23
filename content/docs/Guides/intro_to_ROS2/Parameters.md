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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JL6OS5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiuydUEkBdP8JrGiM9fYe8HbE7%2FH%2BKD9hQS2iZKwQbNAiB22ozrxqmUnJftcVwqJ9quc5Y8w5IeZ10B%2FQeMpS8tcSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDeqjf5FqUbcYp4zRKtwD4ZFZmDBeFj1D5hNPwEbMExGQxHndhE%2FsmU%2FvU%2BMwBcU9UFsTwbQxmEFzsJ5B34oQ8To3DSoKF49xJ9ia3ntm0S1UiseNs%2BKyNrEQO5fA%2BduPvJleyq5unRTMeg6AtgZZghBYWZ%2B%2FQewCH3%2Bknvt0W%2FHEGDAoOP%2BrJq9FKn0ZgEPIYfKw%2FXKsp%2B3EklUtSfCmCAn6gFwJYUEyywlLg%2FEbrqLz8UVfOEAa%2FAxkQcPDyb8v2JRkC0XOCiCqbSAdT3T5q5ReBjwBMEIER7wzyksITHDMW1kns9K%2B8y5edFSgsuhhCPIo%2BsZqqaBT14qLS8%2F%2BmBxgNS8lQgyQ7crw%2Fn5643%2BqYbLhZgRuhELOHH5IC94ziMj5ZGBLpWE%2FNBCcDLboSxglV8VNZ%2FplTDd9i4AUKZ7q2KGYYCTHGdw2Vv%2Fs6rzUVtCl0gci1oKx6pPkYhzLByji%2FADMT989ZranRGFAYTCrvjRVjhoKX%2FtcVgEi5PhNrlSsU%2BDsoeiHJellE%2FHDYJLFZO%2BgrTUJs6CWhgfhVwhtTtEjttZa8mdwHzL%2FUTyD1%2BvObGzTwfYZ4XqXFIxATrScZLawx0B9MPIBUDHqkrvaJ6LgwdQTrfOXb3ydVZaO184GVg8NuckfwDowurDuvQY6pgE4NPhKrmmcMxdcV0W1y8dvn3wkwYPHhd1K7EUNYDUyljQnV9g8oMGTIlZJic9QpD1Uc1PzA6G3WCYrw3Y7xyaAVIKcUy0J3N2KVQ%2FXue3LFCxBdWmgq%2BTi5kpW%2BRmWkLOl7Q4EA9Lq9RtGgtOaz8THOmhMVvQJvpLWUl%2FhaQF9qqhX%2F2YXE6te%2B10hOcDfS4pZJ8zkFknGqDxadc3wXZ9VVNY%2FW5VJ&X-Amz-Signature=50ac9f857e286d1035509df56c33aeb6502d13464a588f2cf488493cd2bf6ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
