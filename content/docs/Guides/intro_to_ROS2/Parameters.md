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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBEHK53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDOtE9S41Be0WT4XE2rsz9xnU7TotoFKyM%2BTMp0DxoLQIgD7QXfuxZsWm9uewQ%2Foi4Iq9rBysIbGOcZbS6Od%2B5qAMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOHkXM0qK5bOMFDz5yrcAy13kb8veboRasyEDFHuBDbsKO%2Fj3oFoM7ac4XC74Sw4bCXnqwNmCMlkk1xWEcl4E2FtWk%2Bgq59zZ1AXHm70JMNmpHqvqqoXRstCfhACUd0R0%2BXbXle6UBEmYI%2F29DSxWm69fHvlpM2UIE8BfICPQLGusEVeZ4AFUDNB6jJXJJR%2FIy40Rj%2FJWBOtpb%2B1HmsCJzc88fUvqdpkczgNkeyvLFQhMG7bVyJWm7wfzfUlzIjqCYblTdMVYaC9dt4t2MZ%2BLOzWdxmvMMjT%2FobqUUnDVKdoSHS6%2F04z9TyTDj2iEWlnSEDZUEjIU60goH9W9WWoaG1RdbD5MQiLrpJZpK6ANuC7LHMnAgQljCPcIjU03AiObXEonnsAx4t2kZ3ngDHQGh40MVexjWaEqpSvi2oQlcqHD7I9qKerezUzkcvQybBDS0dOkT83xOAMhRmFix4o6D%2B0CufRULshsvDemMJJeOfURHOkYOJ6B%2FuzBgONAaW55U3fm0984%2BqSO5vPslZgixhvjzu40lT9iro6rnPt8d9u1wJcwpgCtj0TKOL0H5tAvQX%2FjdAcpq6Y50UUYiaubYj3%2BMbsHQBLVbYP7O9q6bez8D%2BXkQ%2FuX9fWjI8fkCQ9YdCfQnlStLV7pigsML%2FWqcMGOqUBU%2FWy5lF31U9r%2FoiwJy4wSLyVFRC8cymkJpZEAuXE1Kj6PzN2J%2B5g%2BWMcFEixQgncImugZJN%2BQHCEsMpmrysF0ufeuflxKPgOgBYSwd9JFa4IGM6pQEiRbGhWciqseadpnG1YR%2F57EfXXd36i3kmEScfLdswp2Bm2gYqd%2B17ujThWHKx2p0bvUDbC5t5%2BeKA%2Bf72m29NB5YY9RTtZGbAT261tjcBG&X-Amz-Signature=0405b317115b8c7a6906bfbb1a39a16d1c81ba8649122683cede3bc15ee83623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
