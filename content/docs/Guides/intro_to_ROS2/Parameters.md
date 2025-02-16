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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIAATZSC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICoMZm%2FyTrA%2BjBACkMj%2F4i29MbHUWD3o74QufAHXwjFgAiEAkzSD6pjxVkDxQaUquwmmDS19t9GufIES9tud8nTUYkwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIy7ayWd5%2BSAf51w6ircAwctiORmD7mgdR4vQfsVfW8jRYSVXwpsLz49%2Blk9iQ%2Bliu61POvSvcP6U6EHTHiAXdk44VNKlFInXsYVL78cZqEU5SJYahUUzkxFqK2AxPuaW7bq5dqSNlBo5SetYj9bTsa4aBc2F%2BmR9AEkqVnib8SIb%2B0robxhQEWglUBsdW4XktL4mwv3xJk07Q3xAZ%2FLyCWG9huxU%2F8rTCmINalJ9cCAwv7qdOo8l4yt5jAjBRbciCVc486ReTGAGoSYlGpfgcyFztC%2Bdl%2FLd6%2FRk9T39SAiXaUMRDmzSL%2BsoUoSjQ6JMrVTO556Q2UltpSyo90tAUdGh3oavH4B8gyCYRund5bYWSCU3Sf4r5TsG09gM%2BRxhEVjiqf2dx6KIhwDKUO4IcIRUjGKWztwKMvJ9a%2BvOwBcJfcSAN73yD2e2lI8nGEBBkkg%2B6RSvpBo7tcUv1q1%2F3hl%2B5jx7uccfKAUTjLQ068X2V%2FzvBFzyiUWeK%2Brh73t987jM8BFj%2F9YUjiyvcFo%2FRS2bBEf%2BsNXGXaWEABRlZa%2BPbzEJMl9f2spWvIk0lRpSu64pWDU%2F4n3mCNpMX9gLgls7AtGOzU5Rkp4pgoMBHpaNwi%2FNlOP0gSOjFCQg9QSf71usjIX4eRItC9WMJbKxL0GOqUBJVwy2REAYRU42%2BnLAE4ZvkijZ1pRk%2Bvv8Y2MkCjuTisx3dmHWRRBUmQEIH4HzsacaaHwa%2F8UMDoBFqpc9IIbmndMA84RJPxuRon9Bx4G5ukul7KXD20%2FeGyMkvC8DAMvrS5lzdu5H0Yz%2BNPSn5NioYCeatACQnEuK25fCp6JTKImUJmXz%2BpnFLuVxm9vm%2Fj2LtFeWcpiKx2YQZ93bUPH60JR38Pg&X-Amz-Signature=a95722ddf4c35228b507494c3ef8b61daa060fab91b85a7c97b20d706c73438d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
