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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSYTSHV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCWgiHqE%2FlZxG%2FiZd4D%2FAD0x4Lg%2F4HX8vMT9NdW%2B%2BzyTwIgOzx2W%2Fchi4kHC6U8plwAk6UpOv7XscqAO4fMWyT1lTYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn6sQw4RfTIK%2FfvLircA%2BjtCcL554K7ztg8lM5wkk6UiXEeTTo76AIiJbs%2Bbxg0JZbfc14BzUK6M5dTrls9FyrSD9MdQ2FBG11KRdvjIKCrxiy65iUTn5wkkoR50bZDMk%2BvQwppoS1v0C0caN4HBXvAeSKcE2qKpsOYJKrmeDryJLTEwolsOosn2wPmjvsw5LBZKGtW5fM6cu5LGo%2BvJ55Sj%2FgBiO0ZUYz8Uj%2FwmlFQOO5JmGWjuH7UQwGm9tKLeBM4fsO8%2B8eIJBPZxNpzUboWqzZtE4MPmbNMwesAacXSEcwzvR8pQi%2Bek1lSVYsdnBYxfuBZwlhF0xTnKmWwbeTBCz1niP3gd9oVV5AaPBMORDR%2BO0Xq9rRjWSSC0CMGyWIt5uRnZ81kMZgDNz28dfAWgcInCQ19evDIaOay%2BasQcW7ayhbrWqgw9DqGeL7rW0GD0Wn7QzCPxL9me55XCwzlKHxi2tkjxFLtuMUHta4%2FsfOU%2Fg%2BN0IkWP8oI4Y7FDOpM2PR16iDXm1fKZ8h2it4x%2Fd72XLsvlzLtNhVSN%2Bt%2BV58jnlfLBeA69eKGJEpm5L2RqzgGH9hFXA6tqVz3PNY1XXXGk3qXiUTUemF56AQ0sEbwn%2BeNaNHEwx3c%2Bi8A2J9g%2BGtCqwuQUpMbMJ6V4MIGOqUBkjBnopvikLwHM1A2%2F23UvKzYThO5CiXnHgJoKzCe3op16oaZ8XqoUKkTwfnd4lA%2BFfwa6mmm6es5Ivlr6OwZM4kFcJ7z7gHXj7rFe66SMVo6yAlZgAfhd6rxbV%2FfrA%2B0JxtAu9bydgUlgT7yslPDKTgyH%2FkybXQOQWbcKRcRrTN%2FCYnCJprAelRU60mpCOkAHWtaPlgitBGJFjaPgMbMJi3PXeBt&X-Amz-Signature=3fd2ef76327fc885cdbe667466d4a5f0481dea619d6ceb9d9ee11df8641c5290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
