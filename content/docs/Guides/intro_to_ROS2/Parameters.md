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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EH7SDB4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUf2nLI%2BRpc8RNmv8hI5j8rykAd44%2B3316N45p9hJw7AiAHiTZlcO%2BNt2l%2BqGE0CtZ1C6vVwbCD2UwU7KpBL8YdBiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtWFOEKHV69lEWEZKtwDLPCllkzLuXxnhzq%2F%2B7nNmmDjLwep9%2B0njEbTUU5pR5qQyC2MpSENU3JBMn%2FkjfK%2BR9aATRc0OQqPpRnrhauUjIKUtBHUkKCrvGSyEAbclASi5o51JvxttLcXVwMTFt1hOZI2WqSTuFrWx3ygpgYmWDEMUxvfG3OgBYhwmJ1%2FScXkYNyY0QzE%2BRzsgco9K7hgPE3jtN5h8cLatwZ3TO7S7boAAAYQsEsEQwj6%2B7NxCVJePG1DJpIVIhKpXBLoHrfSZBl64odHR8AasOpQn5CBcx4kiOFvKtViJxQZKvSQ9aeur6ofsWEqnBDWurpQ2Pb4MYGOAyFUgTm5%2BNUPWqCPXMIfRbxP6hKRIGrhJHlKds80iKZIbYhdihK%2FxWv6mG6J1MqPstCCugsGUvdurRnwqL10oNVGerS8nry%2FNNMUH7UJuaUriGFuZ6a9ImiJpqPW31zapambbJDOesey%2FAbrDXUB7mUnzKTnqjP2bQKtIEr109FdmiB9aiGPQo1EkRmY1BzA9gyqGlErZn1WYBZQ0%2Btbk9NjT%2BbqToc8sTrVJ1wC81FjWGIgVr5wJBJN%2Ff%2FVJNHufgcuV3FhoC8RBWwZ6FiYojYZEWFd1FnNARzpWpltfPMKy4UWhJThWBYwqN6awgY6pgEeiit51rs6BQZjZoImoat7u0i5NGz%2B1uJAVKhV26pFe78FFouFA%2BOZ6kCH7mzczJm43kSosQZV5Qqu6wv3u8ZoCsU2at6DkQcv%2BarNwSHvxd2nJ8ngunKrsYihODZRys3pGqcq05hprkTCygaBq1xWEZZf4izrlG0B%2FnjeaUeSYO%2FKiA2KU9DkR3HKzBSII9pUCU9gBGfufukEpq36W0cuI11iwpNE&X-Amz-Signature=a8953041519268c0ec0744c3d27b602998eb3df727b21d76bac6fb7c3fc31431&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
