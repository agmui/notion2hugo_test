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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOOV6C5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BrG77%2FfmzSUxHmEpiR5TC0GXWmun6sn1f2XMK9GeQDAIhAPvSiIfbfpIDcelSeuYtIoETA%2FwiC%2Fj3H2qjL2kVhlG6KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzmnKDgw4P0XZMr2Qq3AMlGX1kNVmRQznh5z%2BYZy8ZdqsQizGuun5EcMjnDO9JAW60q%2Bh%2BFNoWhE9xKatU2zzWR4hbWXF5DC%2FIok7b1LpZQADudsZbty7ImDsWm1selD4QW0HPBOyqktqUUFNORHgvGd%2Bdl0jMi58WipWxexhqAsIq9xnmmHOVKbaJyr0bOSIRMBUERNKA4h9kk3AkbecOU5u9ILTP4eFGODO8TlS1%2FQH6%2FxjN2%2B39HddkkBHE4cxrXlKTuZ6vOvz1vA9y3FgJlgLeKhr2rGd%2F32tJR7AE3uIA7YVkVzkUtq2%2Fp57oVI8nRrx2xSDRCZ4MazPVwMi3kD24IxBft%2FJlnc%2FFdXymBNLcU%2FcnpZXb77D4oduF8Zfom8BIqlJx8s3wEZi%2FW4U3Gy5rj5ZCSeU15qUO58PmXgBpLDrl3HxPQsQ4Ra94GR9ZEeZSPtBvO6w5kJ4y6dZwGMurAeFrZ58GNMCXwmOKeQY9%2Fgr3GsyJsrHWT8a1IXAOXZYIWwYL7Rsejs%2BtWPVuWtie1bJ8Zq9R%2FUUOL3YNKjTW04g7Lf82YIqtChQgjz18FEVG2UKYSs0ZWf0ZeBqclRS5r6vHAmz%2FLDha5%2Ft98KK8DVSA%2F6kTLHwJIJXaanG6XobPTMFKEmWCfzCCxuzDBjqkAT3mjKCy3Eulhn2kTUle9GWJhHvaOrYSCE4mCZgUavH7Md9vkIFi6gN%2B%2BigpGbMnuZ3b7KjJANMz8dGQnDywZK5JvKM5166a8BNf0nZfH0t0MQkih7KlrOboYxSQBykxKkj2F9r5YClNSsUt3RFxl4NHavY8sUk%2Bw03%2BevPMUscRkJBkCSLurfsaytZxUAREoJPfDBYfNWn5Tzb01uOAuRYhXw4b&X-Amz-Signature=70fe2cd5c7dbbb4abb8e67dc6e332ed515940dd5262712e9dd50c55c6bd6054c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
