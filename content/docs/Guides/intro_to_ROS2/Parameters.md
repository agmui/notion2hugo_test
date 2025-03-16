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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDRYNFG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFs25D5lFDtYidLtODKZBEBU59cfybFq98%2FoVQGdSlNAiEA75Ap6fIl6zJSefMor91a3x3F6BRCUsfVr52BdmopXcoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDK5NOI5%2BJPfJRLCz7yrcA8n%2BPjDjhHh2w0yOw5FazEKRKHz1O2wYi%2Bz3Fil4ZutWtgi1eK%2BUQIWX6Wjrg9znKkviQ8v3bou6ZZM2Fy0HbWZlgPoIvOob%2FxW073HYXku62W7uM4YkXGwzTPrJcqd26Ymubij5i3bWDdXATINfo7nt7ta0hrim%2BAZ2EhPvvQj%2B%2FHrxrx9uqpO5h7Aa%2FfFOEImKfaBhu1XxDRHQoP6wyFaP63wkhlgV%2FYBy23N4YICMI9dWs1UIqfl7gCz7BVDO8yYqxRSBwjgDTVS1OA1r9N3v8TSRqkq8yjHvMlLGVVPu%2FjAgntUSFOFdniu8Alow1zBrKv7zvltqngeJ5ZnQ57vOGCXBkGuCfAm8K6%2B3ljNk2AAzmmHlLLQ9opjM%2BlCUV%2FycbEueIR0Xg6xUKGpGuj%2BRzqM5Yeb54%2Fkwqnc7wytmF%2Bw8r1Zm6yoMhcN8c7AQRsIisw1earRVaePMRdkqOgK95BM4hVOMyr%2FIRMGnqJIZ23t%2FrbNj%2F%2BKW7uwM2M%2FYBvki9Nv4TxQ4r9ewjbARlyrtJgnUtjQK%2FdiP7%2B%2BgMiB60c0MuXKW87JM9Rs%2FibxzyUUWOIwdUKbgPQ9iwlvhd4z%2FNItAh9oHA2UNkNoZSrMrMms%2BuMSlyFDukIbjMKiT2r4GOqUBidVfXcE3o0i7u9RpHY1xxkH%2Bm5LX%2BMA5rAs9rItHPTr4CWrXiC5BWSnOujN8xQe%2BOuEkmrFiAhnH7MyVFybKqdXocd1vmJBYEGgm4p9xDblGkoAF%2BpMrN7%2Fn%2FvFKZZdGoQNx0zSmFf5eoBgAFpLQgrl2OCjYpvX6VBfBV1%2BllWDrhJ%2Fqw2x%2B9dExBMRdqjCa7GbHR1xT9mVGcjSlDrfzxIrUZ6Xf&X-Amz-Signature=a3b5633d4ecd10753b440bdb40df5bbe4a494f5a492ff5c5034154f9b7f459f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
