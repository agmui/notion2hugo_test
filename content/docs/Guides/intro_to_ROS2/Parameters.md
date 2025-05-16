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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOZBWUPC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9uH1dv0sYp0bik2R6RFY3RK1W%2FYcXSVfPf98sPwcY2AiEA1p%2FcAqjV8c9S1zJpMiWFHQqr3SA8%2FGS0PmPuD0N2mAAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM7PMaNX6TptJnldJCrcA53nNl88HloWrPKaPFOl2e34AqFUPoEujmwrims86EdHhwZ982YstMc3HOlOeiJLeDuKHAP780bCYuA2%2BnM2UfgMvmEcjKQqabHap%2FGZEMIZ12XjTB9OHh6EZGRfZrwtzMY3Hx%2FMiYmB9vj3sZHeFyeDpxy8NLImeLzsrqOBjDuL%2B%2BFr4Tf3oNj3n2%2FtcHPRowiFj7UZcJYE9JRnaqHQg%2BKdjxVl%2FFo1uLg9D1OocRm0yzkSp3Ljr79xuTff%2FVED51Kb%2B7MJTjHHNkW6%2FV52v9bB%2BudjIfDPKp33dr%2Bv%2FhJ351aWkEIoF7gJpS%2BvyCCSOFk0BtFmfA2c28uDfBM%2FYSSG27VPOb53IQRI8pJUELVb%2BJQLXfySdRaxtXyzp4Sw7UOqL4GWlaiGXIo9Nqoyr8dVktiaAxk2Y5SliCmUANbSRNB%2FnbD5SAQaOJD%2Ft9053X8HB4e31H7CSEPTsbNBxIajtHxZj%2FVNduEcWf7KsrsuOGssdIsDez96wNKYq%2B%2FtjeUbqDZcVy8KAKg1IZVAKJZdJjZxqaz22mdHZI3JAhAfipihHqferJZSxkFz8gCsGCabXhk4LXBK2KaKydMSFh6cxakOEnnkjDEHpkajZZM%2Bg7kegxtTOnUvEVn%2BMK3um8EGOqUBl%2BSlz4JcnBUVD1%2F1ZMOoWD45HQ7TqEOkpGYV64wa8O%2BP1LZODFFf0BAqRVLCNsdciwYMKogiz0G5NEzOM93jPqESTfSTX459r37tOCpNuL%2FC8DoQ9u4YCm0KxG65uOh3jVeu3tq72A3a4HMitW9Rsy9%2FZzcVQ7sbF9rIJ38%2BgwLy6F0c7VyZbLfFbPnaLS3trzZqvhIqSY7uCTk1VvieiT21nMak&X-Amz-Signature=09c7a8cee76ca6d686272e93d2e09256ccc368645b3483e96c9911c9df339935&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
