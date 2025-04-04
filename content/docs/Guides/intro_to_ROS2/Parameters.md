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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DJ55AD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDWyTWNfKFvkRQUXpp5BJrrge%2B%2BiwAwjeHSFwJTD1QzQIhALOIHPN3YhJc1OaPgMso0jKVbNzwp0wMyWDWY4T%2F7SAkKv8DCBkQABoMNjM3NDIzMTgzODA1IgwyUt3vxRE5iKnJRkQq3ANsw2OannwIxKpdNtBk2kktwoK%2FPXrZ%2FKqmtYyWYFUgPRHPi5rgRSPNwdNe7gWNOZD76MSPHCYPS5OX2rPsuxWn7uwr%2Fg6esFF1Zm7KUteJbP6MCKVEG03rcxWmpHJTxl8S17Zq0zZT86%2Fc02xdKhx%2FTd1PeprKhEYLoYyVeReh%2B0Fs3uCpe4%2F4eplfOT9s0ICMku7bLpnvt4Ay2ORggvbu3APqAZnRB1Dw7tl2BXTn19hOOQB%2BMjXd%2Ftyx0GTvW1tTcxgRH%2BWR2xIIa%2BqURHfiWYuz9txKDn4UXfiprHJeYfLvOkZPmUolWNOmnnZLVV8QW8lSEHI7c994TCUP6AJhyn%2F7nLPiBWCXF1XEi27vptuDRuQo%2BtbhL%2FNgsYYaGEeJVKZPogiwwDw52IIGhB78LbL869Xa7bDzDOjhK2WpsWRkZ8aBSv4%2FyXyLIJ891%2BkiKAfc4V1pF2ykrh8Nq1pYnPnz1A5hbwRSrQLUqUOYmWt2MJIgBiNE8wMZxmKWstPwIrtPz2%2FEr4c5rYOmnJHwxfuByvmHz1FNAvENEl3TuOef4ddCGWXCVyWP4lALniNSkKys3XcoJDscN1pmcsT6Vb9sweOJD1d7bN%2Bw8T11ZTOFFUd0qjkxrqupAzCGgsC%2FBjqkARzJmK0x7W6MZnXjIBc3foZl6RsiFTi0ORMGL450xTwcDI5peONnNFCzUgn76qBbJi3fUdw91b2xev62fd8xw%2BVuY0tkH02KQcszhkz2w4TO9HnPFTaEiHMD%2BQ3Um%2FxEpRP6qIMFqu2gJzdfvR8xyqTDpiXuBF0B1RuJAMcfTOm5sKiyggR6CcpW%2FLZWJZmX4GsuPnjI1yDiirhAvIr9Y%2FeDc11U&X-Amz-Signature=ce3ef17343e680d4ce076a9a00cf6abe59e93c694d8b65b8e73ed3386c125646&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
