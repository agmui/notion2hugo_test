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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZ6QSOD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV9JucixmHc%2FhwIMMLxLiIkFoChf3%2F6TdiGfPZCBz94AiEA8xsvUAgEyThGgByqgW0H5DngIUEgTn8V7QxUVYBR1EYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAoukTkD0CVXciEWNSrcA3XHurRXkOdnhTa149yoi6KVAAVz6jY2d%2FmVnZjRVDfHqpo7uP20M%2B97Dp1AR4h867pO7T%2F7az45rYY2lHfAQ0sHiC7Q2NTjjAk8ylWs7jRhmjdaFcnqrfFQM3ehRLAZnkC6%2BJIBpWgZZJMPGcBX8hv%2FE7U0uqxC5d1MYfB5OxUIdSjzp6yatdCqnZVJn2Rk%2BYgWF%2BwPNEpxU33tHKG%2B%2BPm9de1EgYzIUNYh9Dplni1fjn1wrsIyd%2FTlo7Ds9xzbYISy%2B4QBn0sce4vNbirPVmZ%2FTjqNCLyvP7dIUDobxN%2FnJnaBtgbJv9Ucj%2BkSMSu8DGdDoy%2B5obK3xxrrf2dMmznNNnZdNQOQCw%2BEfI%2B10jFXX7BHY%2FEjCc0Ni%2FNzfGRtJ5YZ1Rmjk2S%2FJLcLQOX1DhHWTcYiMrNZ1ZMyLDoPN2l7Dovsllt452KJSYbdxCoNIw3luEoWr056rTirXW%2BUI1oNSRuQ303WyTP5Ajos2f9ITtImoDG9lu4PnwNMycn6tNV4gnQ0Ah1ndPUAh43dvDotDtGDsDm6AKd2ssRrLFNQcuLQNzA4PuT%2F75KJp9Wj932Udi3HNJSGB%2FZzB8pgBZ0ixHmOfRkdaL7iDuE0Mde1ilp4%2Fd2neaVuWcaZMNb88r0GOqUBnq7mrhRecKrPdVUy8P024wvYQJcnfvUilWPEVFzW9%2FpRB17OEnOWdpEQa7Po9Tg0V9HjYA1aE5Y6wJzK2oxmx2%2BbzJz9XleGaLMX7nd7yMB2RemfoLHufE8ByKIbn8Ad4LqzYIk0W3XPhW8F%2FrSt8RqQ9UnOKUplgWVglnQdd2%2Fe%2B8V9Sb%2Bqk2LXHedtgSeqWfhLvu8vqtQodD2WuUzdHF6DTK89&X-Amz-Signature=eecc961f5811acdbfe919777b0fbbf9206412750bda52d3cd67bfdab122760ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
