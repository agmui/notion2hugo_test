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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VAV76V%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHkWcrpeQYgDQtp4OcMJEmvswI06YxQKyegvdAFheYHCAiEA5mY%2BalAu0WFElclSb3c1txluVl%2FI5jhtzC1tDQ2B%2FkYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHY8CCCSoznzEm2P6CrcA4hM07m5aobDDuXOw75nGrE4wkquwldDSZibzLcjKkRQN8KLRX40CAZiK6T8xe%2FH8KWe6hl9jG6zoozfEU2YKc9qhipHM7MtMcutU6apqL%2FwEKUA8hrcLHnVuWASFQjynp%2B%2FFZRRS3VPlhgssIVMSkSuIsYSJVgdhIX6Ud78ZM0cNQXCI4K%2BQtcoNqCEG4qcjwbSGz642U1CQ3t9a4aq3KaTLkphf1wu2UuTUai10Ut2pxFix%2FCAnGYeOrOV57Z%2FOSPJHvGcnn2%2BOjyYhOgSDtG%2BepwiTtZUNlXnoGpkfO%2FvNPbCy%2BvuiBxHkADVahNe50Wt9hINnh%2BJs%2BByiozLs242DWlftJXDDu%2FzO4KnhD5g9BsOrh2gV24oFGOx8bcyE%2B8c0lc344v6MmtC%2FGmRQhPnHt0FT527K1KjOji5GY7yKGlFMmjIbAkIoy5o08%2Fy4311tWoGb%2FZ%2F%2BBdQGtXo84xhdh%2BWGZWg%2FMbQPxYas5Lm6ApkD5uiH3KbUrJGnvudi5Lo04H6pQ43O3kFftFq996kg75CuZC%2FFxKqaaReK%2BghCaSV9Xeib66Vwm7sw6FHFVRe6Dgezkove0MAW4XdLDR7nTloEicKdjmGSxD4kCM1L%2F0QqqiQ4rPTIm2VMKLYh8IGOqUBRmSmyfT1YVPBqAZ%2FEnb5Xzm%2FRWUZSTKwED5Uqt7V6L68IGG3vvCKmdMBccwN07rHD898Q66UIXac6S8DoXYaRlZ%2B7SXVG6QxRsNrTppZCEUagZfcEA3GkyWPopKybW0JJGqc%2BjoOO5lOPdnYUfdOIpYGbdoGbibTW3gB51B3bpxPoHP9cNod2EfjqVkqDDKySy%2B3Cncuf%2BwwNAx0mms2bfJD4U5f&X-Amz-Signature=d90be6ac2b94a9fe03c8111aba9ae4c5c2a7860859ff488c6b354b25898984fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
