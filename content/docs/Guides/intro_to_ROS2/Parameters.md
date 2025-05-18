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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYCGQL5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYeKYHkP5SC45oFm7uAB4b7fkYdIAQOLPhTarMlxq9KAiEA05%2BGl7z%2BnTZ%2FRR0jdtJBp7%2Fs0SQKLrE89IqUo3AT1Soq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFlPeKnBd8vN80gHiSrcAzPiMzvlN0PT1CnrhfIf1GjrY7Utkf5e4Xebm6rTlKIY1vDHq8g0S7iVkgdkZu6kpYsNP0MLClXa0nVZ6iXnCfeyunMdXe2M9M3ehsyvqMVI4%2FeazEx915%2FYzfuFiZA96DuDWvF2ZRf9OCz0jwql7NYqDxC3CAaGKItkJv0X50fm54%2F9%2BsvZLetF9skZUfi22ZDYGpACDc%2Bvz4dac83KlXTMi6tb60FQ4mR3iXTHv58nc0sYtFl%2B9n639xJxbftP47D2RxQRR5BSSGjimF42uxF%2FBgWi1og1GjEf3FZT%2F09J7JF4%2BoNMic1Gs1pn9lYjQh%2FHWgvAx6R9SvimcQC6jKncWZ7hmELBxyniJZUnGEub502WcxF4KnJIg545UkeEezwBCHeF83aFAElWnWRSCNH5Wmb9ofYt5a9ozkaW9q9KN1FwKCeGhJKkfglumdd7e0u6W1xdeZKZ8YW2uXMgnfYidHZnedThDIM4A2KICNWu8ZznDO8DbCL43oVkhoXanCCMcgCDmxZfmu8nIqJtk49y3m172irwjGu05avBcAAPROJgtYyBrKiwbfi6C7ZenBDTC2UzVVdRVfm6CUmbwjzzSXGPaYuwlQVNWyJM9wwiEBgkMEofuAhhBP%2F3MObXpMEGOqUB3VQdrXz8wpWQGQFprNg3Yt3Ni%2BcpQOA2PEPmRs3xVevzKKw%2FekNiaWOwMkZp%2Bgtb78A8APko7H9RwFGYGPpURJd8%2Fu5MaNZPy7McvHELB8apuqaGG%2Fq5%2BK9eMC5pV1fzAAZYHtaqyGyDyAf6JGg1lt0Bsox5S6OpezckEQH2eOLaGPADbmUjw907DWlDJiXASYh%2FaK22uRVI99uBl64ATpQb1AAj&X-Amz-Signature=4c88b1ab8884c7e217163b2009cc07dbb1f9359be3d312899a9f76c6c8213281&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
