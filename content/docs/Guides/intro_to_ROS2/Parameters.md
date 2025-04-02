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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MPLI63%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIENMmz%2BY0H4odTsaioY%2BvVmhWERwrjUmrJ9DswTKv%2BjaAiEA7dOj0aY6Es49mijuhyjvmMGd00tN2OrQVy0GNHwbcyQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFaht4mCTSOZBe7lircA6Dhes3NNDCH5eaF1zohoRqwUK%2BsZKbXqhEMph7W4u0FzxdS5U6%2B5fC%2FtTok1CCrxzJgMElnrP2nD7TDA0R5wOp7JqCTdzwB0IHbnJtwxCjMkMGscAXae%2FBeNnRM%2FfYRr7Aex6JVIUBGmMElilW%2BsjHUThnEEwj%2FIf4wKVzbg9Pt2G0ihiqePO0g1Z62QLEKgHjw%2FA3SbqOzBb2LnKz5I4hyCubTGRGUsczz5Nk%2BxKZG%2FCxPP9NnzwR20l9pzhjHQB24lfuerhclKEQCNGMqQ4BACons5n7euuGWQNvsgvkF0av2buGmNgnmKCExvsREj1SXOfCnVUC6zUy%2B5K3QeUo8f%2Fg60%2BxZMx9yp7eYGQvLQyPj0A98apflGVmYfFGbh8ndjq7jwL5xCIQu4FppcuId1ftu8f9Bh15hXPYfjlj7L2jcoWp84PEYi9hlpyWMJmc2%2BHUfBCmsJQASKpgt9xZM2d8CPBp6d%2B6rK6HsZk%2FxJGzv2PdhTrWYIsEnJqm7KN2dEhOzfELA6O37rstK9SBvIk%2Bw5XuMyod1bcNEiu1GGbjhe92lNqS9pcGJI6DY4RFxoPRgO6HiBUZ%2FS5Tk7%2FMfL0FJC9JlVWXGkEH4ovVc2ZqFlWu%2FzXJk1QapMOHPsr8GOqUBcDhYD6rvJ25NtiZARzW%2Fg8buNMzX1BTdgXiTGwrCdF1D66XRULfU2LRniDnMt7R8Wp6CN7ou93ZwJ0HXXpLwqLNicPmTDsgJi0CgUnkZ6yQMa%2B5v2DAZ8HxiQJ0a1w9sXTbBQBnx3dGTMgT1d90xZlrKUlUaAMZ1hqxkGqlxItABuq1hyzHT9P%2BwwzV2Wuk3FoRIvjGHDD%2B%2BrcH0VQIxibLvnnuX&X-Amz-Signature=711725d9d0eff4839f26107a463e6e0ab43ea845516d9cf5595378b85f423df6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
