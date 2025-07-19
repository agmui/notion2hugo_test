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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACBX6M7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkGuVjweXOwdz9Q9yDLMr2hr46%2BY8H9R10f%2FF3Q9YlegIgETmaBHa%2FtSkRCbDIctV%2BkCuB0SCt4ekkGDDCpmqBT%2FgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7WcbwdiGwBQ3kfpircA0LAXHJlPyCtiDGJHr5zoez8Lc%2F3pUfdF%2BBIabFTxV7A63Q2tPxH5dm0WvHTGaL8pr6X9K9C5Y0Sc4Tg%2Bhcw%2Fi0Cs143DJw0h%2BzhZbsRa4W5ja3Ck%2FySYuuSg0PaloZMeW3xBdZn0KSo%2BA3ACJXiUrU1hp55PV84g6mMWgtFEM9vfBObwVmD6tHg4333FDFB7UikF%2B4Hx3FYElcXW5%2BpXrhRT%2FmVNdVMCh2jE86BbFkS9Pnx2UseFEKARSQBdkyV9ua26sj4FUVE%2F2EulF3tjn%2FZSfbakK1xmIVvQkl1C4WSIYrnd1ih%2FHqAQt1p%2FpOQenF5PWwlTpoRCMqr%2BRnmqHVhhf7sLFtMzBS%2BgmqT26HYi1fWbSqZazfseA2Mj9X6rGAEeDXz3IxCMf%2B7yxQnY7v02uyMebJrpupy02ZSQoyIyB0%2F%2BlLEOMcUkgAMOWyscRgnYqNFZ6apCeuFLysZO29ynVnjE%2FDJE7XAL%2Fr2q6xLNgSVIpRP4BwRWlm7pjid8GNljZr0OQy6ZicMBB66mVPJbbbBg0ff5gGKegWfLuwuP%2BU7axApPx7ENhYkHo8Gc8mRfPhkhPhs6L23iNfibB%2Bj7zEVxG8wFlaYPhPOkeJ0jVTHV40EWHMiJmS4MPqv68MGOqUB6XKjqOc%2BI6b4bxs8hyeAr9m2LaVdzqSAXP6MqzBLVCtuRQtq%2FaXHPjC5szTDB8IKEWVKMyslPBicCna1ip%2F5XrL1aZaI5lIM0npH9ayAZ%2Bq3ENqYshlofUEda1oKKo42Aqwb7hezaaBC0P%2F9vJqoxUdew4c8%2FvhRgADgNW9SlaD%2F%2FpY63NYwJrX%2FseemNMTrvECvYDRVTpCRjjM5h%2Fc2X0wURxuS&X-Amz-Signature=98deb8b83aed18575848e53e3778d3cd501ba4d97c9ef55beb57995e3c4cb8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
