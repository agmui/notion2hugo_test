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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH6SWJO3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEP9BrTQ0qP3eoyQ%2FmOaRMcptpMTIIRbKXZZYEbmzzXCAiEA%2FRo5m%2BHa4BCaH3TMSiqyjZf%2FQzi%2B55PnTufIlyzi6ZAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJv4N7SPzIIx3755yrcA%2BUFn%2BHANB1EjBSVgfkCeED%2FzJJIghLdhdTuX9ojBsZvtPZ5F66lbrJcRo5XsBc2CcFKi8UTkKdXGAe52E1FFAbz59dlzrZ2mrCS98vEsUm%2F4UQpt0W%2FGbPGqScmLRmdScz3pACs5AaVjPccBpHfHnWy5Ee3MpOKIReTDjjlWU%2BUW58ZnDSebMS5xWUiMyb3nx2NiVbXF7o9OVZKzPyq8NdhCAeJ0Or6JGMDzhiv2S4vuOf8PB5IRGWq1wZKg5hzEr9AvZNvEDKudJal7hvb1r%2Btxb4ZKyX9dY2IvZdwesmCmI6MOahYj9CgRGTr%2FCRPJNKEE7tuHZpHEd2jhNjxBk9QUhJlkNUzYas6Q8ClfLzW2ibpeP8lyaXLYb1HLzdKCiozAkgaPHzYz514XlUkFKlk79CTCO9g9%2BQoXbK4Q4G1ToqJQv%2B3iqC%2Bpdkbj0pBGE7TGnVn4kfbPVytj6mvSe84oCkSOmKBcB%2FXOB6NhadGGiUn%2FeTsIK6CJYooWuhHR%2FSEPi0OEziA3Rp0pKa12gvLzxpIvf4R3UiE98LTLMrq2OLleUtvTpFR9JOpzb04K5X4vAe1iG5aDW0dF8xUxjXVW1Dwapx8VSpGnTfTAsw1IAfYLBCLCVR6MzzCMITKvsEGOqUBeHYYsmSCMK5k1K2zO0FuyAufoMMGyspeBVh8HEdkAvNHswNIHtySZ%2BGPl42jWQUhvxiGmRQZnoPc3VpVbAAZUe3E4%2BRYK7spWSVV8XEBadHCcquqJwhK7RHIZrItZtHJb5gqvoCrIq219%2BY%2FjTuGXF9ntmgNj49YjNXa8kIvXcezt4bU14l9i%2Fme4TelKprkDxHrwcdt7MKrWELirLY%2Bvu1xXJUu&X-Amz-Signature=040add7e5625e35ab115878a59124bfd90d9e2e367c4f69713dfb6c2f53e54fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
