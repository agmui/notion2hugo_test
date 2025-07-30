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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYWED7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBacShKM0J87HzHbNHw9eoveyNBbWO%2FYZrtqPefo0ufdAiEAmCgCHorfqyC2d3D%2BKpbRzZ38%2FjR2d45sozQiZ%2B6yqZgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpx6FXlJIELreEPhSrcAw4uJkVGrVUof9dYZPneQkj1fhykid5JlEjihJzZ8kGBMJ9Ez2vBHC%2FMC0kx4lLwthKUO3Np2ZM%2BHBrvwa0sOYkQ8cMI96zAKfcr%2FWzMsNmzdqDE%2FFjpq6lxEz18SW6J24NCjp6xShhd6tZcGQiF%2BX%2Fx9mc9lbzojF5Y%2Fm9AhSnRopX%2Bd%2BVgxD6O1Wu%2Fiix0BWuGrW5B2NbnIY8QcXup2VuLx84Q%2FOID%2Bm3abNmHI3gp1vKGjB7%2FZu64WxYGT2gECJhSgkzdVNsxlF0srE6zRhmiE6PyfWkczi3oobHvC9Cxce1dLr9TzxjVSg8kDYDreA7ZU1SwNYBz0GPJ1kMg2qTRHWg8EvMSlx3Cepgq9ljVdleZ62Xd0dQZ25lq0vKNNvr3Y9DxCsTWoTpjX2LJElPveuT2QJrAHF%2BDCqQTO2LqwdmNmltYLyNh802QbVVOCR%2BbdZN4pFIqKGRgfXzK4ohx%2B2sIubriSCAgLXzCh3tJVk98YKng%2BAgSFtCOM5s%2Bw6cDeBBOijRQG3HkSCmgTBWC3zlUSbQeD0AAiQN%2BPPUUwd1IqwVYscMkc81zdPrdjDE%2BJSpDKEwkA2SNrKWMrGG1oQOZHa4Koc18Z6c5R38t4DCu8f65EMOubSbZMPSiqMQGOqUBphDU2KTiTlNYRSocTnRMZpkMPxGSOiJGurg79zpJdtXKxc87JbplsuN73ZHzV5sqLr1XPBNJT0wjLJOPhKBrZwOcIYcZEhdgHSnriGKiknG%2FX3GMrXoKLTw%2BaXUhlxLTqxPhAU%2Fxl6zrThInLFz%2B8Utbrv%2BwUWwJph6PH33u9u%2Bijw90xRgfz9xeIU4Z0ObneuI8i99TmxEqSW82KySuTFFKoPou&X-Amz-Signature=43446e70c52982c52dde6c276a9ed2e1a34e20933ee94a88d78b7a74071baf63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
