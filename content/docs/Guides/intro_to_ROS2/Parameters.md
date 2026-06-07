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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGNVJKQ%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW3Dr2Mf%2FdQ9ikJMi8bE2QFCfnqcnMkyU4GUIvrk0fvAiEAk%2BDvn6jycvt2uiXOz5Foq3xqHrc2Zkw5IHMHP9KwjcIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1%2Fro7XIg3EU0tKZCrcA61%2F59epF%2FPMDEX3uF86PHL7COT6nh94hs%2FCIoqGc2MegthEJvje%2BWdR2A94kioMxdGGcpHMugbrE5bGqRO1KHAH84ySWWq6cQDif8XTAt68x%2Bx6XCyshdLBT6aF0kikWX8d%2BIM0T7p4CZixnIE63iJ8jjz8WxgdGR5h6InPJQ3CBiFs3hCUIGs2WMkIP9YI5O0qdbKZJHvlpY2fQF27gZGh59XJXl0teiKjw6E3RJJDa9p498%2BZHXdhhdEOlJRbPFUfjoq1J%2BbjhKNNxFC96YMarbT3TAni1YwtYecg5Vlo9GoWpPHUr7UOQCLiibivFRttnkKh8zbSCTSCjrGoErksEMIa%2F6auuhRRVTMoykXI0mltqLOeRL3KLWLd91cPW1xILBYRPdxZGhTpqCqWfnnjsESVBxZzz5RyhXu9K1h7UU8QznwDDmBjS%2FKIQLo3XE0PtMeeyjihn5XfutWPWXqBY7cOiIcdr6%2FhV9E9e6JN1KORsQoeHs6S%2FaZEqxqFrZtf4YEWWYmuhbhdjLbInrxuQWLxMJhPysjjY3pIS0At9JRC4mvvjC2yBD23Q4LnI279VgNdhtCr5CtD%2Ba1CGH3Lpo%2FGG82mMhYalIOEqLfSNoCCVUHrQttQUcxdMOPSk9EGOqUBLZydpcHykOGD1vgUiaTIxNt6nJ5VH0Fb4pdurrquShwuva1KW5%2B17jULwzsh%2BciWsXJbSQtiI72dcNRrXXYwnDmycPcVT%2FbDcGfDl0kr%2FmeegLM%2BFMgsa%2B7U%2FoPrhRYFFII1IC%2BWmgwqhTbUy20zBtgir1FAIyux5svkawr0askRamhVm3sgVz0%2BVAyouz6nVZkgOTvt4fORhPA1kAdIf8vleVy6&X-Amz-Signature=6e25a409f3ffcaa1b03755555f704c54cb1688523dfa1209316115ffa068cb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
