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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQR5TKW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA57wOERCXCpAmbbde8HqyHxQiGntVwVDPIIQohf2BaMAiEAyyALgGOXsJUHeJEmqD0P9HLhqgVeprRwWD0e1PozGzcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOSqQfJV%2FE7SFGFfaCrcA9TW71S1dW3eKxQsyNxmx%2F8ePwHcbioTHxVB%2FAHFYED4hMPDZcXe6SwjsNQvoWSyJiTaLrDK1FzgmNjK04DZHYXtBd9OZnR%2Bw1nhWhDZhYP5ZpX6TOz9FzdoVhS9VCse%2FyVxeNDu9EjzQCvPgkhFLYk%2BcmSRtj2bvKECimWJT8shvX0LVG0coAflgV16ezzyEBPSuxX4fdEiMFr60zg3DsLfU7laB5MAsC%2B15rWqeVfFwLSecI95Ikw4MdjdPo%2FYWOw8MIZ53aHX3NkiidHw35I1zDhwrd5W2bRPoK%2BxGOdkg3XPR3me8cFr0cmu7m6RkrW6iKT62KoUpurlVbHg7D9Lnh7rFAmFdLx3%2BZy3Vzj8cYYRUJ9XDiSQcQ2K%2BQV3D0um4OSStKIWuJMz02%2BxQWurWrPB%2FTFv3YmSKE3rzDc3HluSlZjxbNEf8W3f4I0kw5%2Bu2Y2Rl%2FkT%2FgNWekDhYjajHP82iV2rGGxFQS62b1%2BWsniFBM7cqKMobBUMSxENeam1yMNbO7qrLC5sB5KSSQFOgxSl8hkhVfzFa3Myy6LAOw0ZZTbWc5mSfuBWGJqPiwjw6fKYPNPNQg6sy2zFfI%2BcJnvhkxoWfs06FnwfcWScH2jwBA8tKxcCQivIMP3O8L0GOqUBH10PscA92H13GpQyOCa68mHW%2FPuRMBvXV99h8wSAM1vNZmAHboNL%2FhPCVout5%2BQZ44r4uzWfxcoq9mGZpgacjB9JNaLpgjqSmfzRqMXIKgopyhycSwMZzg6m%2BRXZtlRAAMlSpqhmB5wWhtkZ8VKjPVRVGfTEF7pdmwhEK%2FmMb9%2FniNyfS%2FFUOe76rhI24IxwHK99P%2BnhyrdnhyQj%2BwXd%2BoyDd1XF&X-Amz-Signature=8a547e4ad691a118fa2dd8c4ac345fd4c1e6e66b9285f2c7a0b27b9dc9d56c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
