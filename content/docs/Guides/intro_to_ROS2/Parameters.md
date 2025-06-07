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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG54ICVJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCxcQYcruZ3SvMmfUpduh1NJDHJH1s5Dc352wphNBwvwIgMQhYLDWNbQ%2FP0T4VtPu8EfuVNy%2BNx0yLjoZ7XwLZTC0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDC%2BsI5HmKEoKcKcFBircA%2Fv%2B1WCQtFtjTalAVOQO5gcTj9r72v55PRCuHHjv9ot61ptpTQ6PwzOkdtmAqjnutLPCxVunTQcfzHZEWox1kRRiUcPz2IAPafHRUnu4gdgL%2BnQwqPvs2Rj5CRRE4ThKeX%2Fz5y21KbQMR81968p7gB8iUh5UUJGLO2FH0M8gPcstVVhGEu0Ikgg4G4aRoSQNtt12H2%2FtEuFFx3OR1vf4tOA1V5jB2lZM4RIxtns6hVoOAzUZdGtP8gvnYmmu8E%2BQFAQgbxe%2BMiYiP%2FBOGqMXSngxP51vVNQv2M1L3zHiCtzhK%2Fj2jEuAEvgChIXON9ycGgwla4EGOhtQ9HXy6ZJ1jAk3EC%2BqRUrZN%2FTaKKm5%2BvhH1SkJC8nzB4EkPxjmIs2QDjdeG5VDwaxpgAo09O44fhWSQAqRzLRZAj9AGnZU3uUQ2pPtuci1Bq1XjdKceF6PKUKBktk%2BGLAk%2Bo0Qgu9XdvTx3IcagG%2FgC3SYAa%2BBG9BttlJPuzFIo2d5kARD926xVPTkFk5sxlk%2FtzNxV2XnfUbC2DT6dUa91BeQD3Pt7nVE9Gp1BIABUt4yxTFwiX9OURShlyRXgCWnbS8tFlmt2Iftw4o%2FXXjt%2ByNFwSK7etZr%2B5FnNFqYHVOXl3JbMPnAjsIGOqUBhDYjkNZuNRUTqBpnuHTzykRqjjrSxUKNw%2FAN%2Fl%2BOS7Urid8upgCyVyI%2B%2FLiBz%2FSIuRPQIXWhSDttKe3rcc2W8J2akPrbztTcUiEQXrvriRyxG68il3RIyEjdIyj4waOpwfbHGz%2BO%2FJ8dLPU1UJdqBKMvrdzG79MF11%2BKKL9nlqJHxtl03SDDZJ5xJ8Zyed6D3bDwlgwmPeF%2Br7uLIRSAu7fGfbvV&X-Amz-Signature=5995df6917c6609434f8161454a539ea09ccd767a6dc397476ff3ad247f80189&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
