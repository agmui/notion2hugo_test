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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNOGE3E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD7%2FSrjBc5vNOdlyyparXwhUWgRKc08rw4SxylrbTmghgIgUG%2BySUa2Z%2FnmSsQA74I5IoyTdgpsGREHFGObdHFgnzoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH2T%2F%2Bce%2FzHkFqICgyrcAzti8sD2H34NpsVl4Sso6v4aI1QeKcaECUaVaxtQFjAigU52NIrXfk0eo5cA9LGybP%2FarD5JCB3IMaVVNDal8vSXTIXsK442W3KncmrABihmHWAp6iEIvb2X%2BvT0xodo1avRsfXVBv30gMQxXwZAiAEaWoIim7PmcjlSaRfrhd%2FJ19Ryj%2BxgeTKckigKMJRwIOXVqfJZYTUjtAN1VYzJvtj%2BUFEz3Rzz%2FwYIlX29eNj06jN%2BRg3UcMS4t0UuzBHAybEgN0zHzoLJOYqCUN4%2BqcHXUm3822s%2Bftn1mWVXIhRLy5muPw7Xm%2FOaBuLa1%2FopSEj72JRd2CA%2BU9KlUHjtRnsmSEcJgFN0ULh%2FbIfRpx89yo8h2pJtXAoSSnOVmyVIs07tPNl7fX%2FDN242NCdHBM4pvjzKu4tm8kQnANMbdI4Mf25L00082q72IfPb99yVobe6F1MaIBhmaMMAhYJEIKTORgBGtgXb40gpApurS1hvU5XRy%2BMK6oQ2ZvmOUDdfgXyuwuWyg3eMhbPf2PLzW8aOdSjdT3yYUdR%2BcKxmEy6H%2BRRMRWQIqHxnIDqF62f72GM33j3YugFEDgXydYwWVY67YG2Oeoi6GaxYEqHAGhmWS4jhZs%2Bs75C%2BIs6VMJOG2sMGOqUBsBMyOgN%2BWa0hOCjK1HfNvivJwZhhhLhlOqhwxxScRqgEMSYNAwxCN98zy8u%2Bn1l%2BXyt%2BFT%2FkgO%2Bo1fvGHOL6XMMWLpqDjgIA%2Fs1AUBgb4hax7oESTU3YJql9IzTQcWDysgGoEvE3SI8E7brcUDu4tVUOAKrvPCAwssqYMStQRtrQQQXlfpRuBprXclBWMyknf4CRB74QlwzrrNgldomFgzm%2BvGYv&X-Amz-Signature=ddb9fb9719c2e2ad6d323e9085a4ab224ec4f864293336f4043ca995b6862af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
