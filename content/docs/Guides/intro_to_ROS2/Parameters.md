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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XDN2WNA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDWMqmU2P24WDOZM1UVHa8aR0bZ7zdMpyGnvHYTMqMAIgPG3eCgtXJdMXbGTDKCl6Tpn0FeZ7kKZSu%2Fo%2FZDIjxNMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM3JKioxT7unBeN5ircA5fRf5GcpPLABK3tEI7WEAP2d5nbp3Kiy6WHAIX5vNJSeXamt2zmI%2FKnep9KIazRjPcIHVJMZfVBmUI0ij5EJhc20mXcC2N3Ja%2Bq1W%2FHyJfC7b39G9FWHJJW9sWn2JrqIeKHxt7eMrWwG%2B%2BrhxOaFKivvLD3G%2B3F2NNo8vXsKI93kezGng2bqDT7CjEJ8pGf6VyyeSWMwC7CAUGTlPtAOMsaOVIwFOyk8A5EO0vNtA1l995FEFZtDKASJg56qeW3E3Co291ReDxOCKOyszynDYdeLGQmK4IZsngwn9tlhYsxBWG8uBOyeDL86y%2BdlXB4GfROTvQRv7pd0UO0nzg4bsssfRQCXToQVFZZENQ8OKk4osgs2A55VnqKMXi2Jrq13zRqqs5tuSDHDZlMHu%2BuOU1VZ4i6mqf2yb9Yg35uOFgA3ly9B96%2BI87kr7GQUDOLWMjrkZNkWT5fdkri0V7I0IksVf8RRqLcGCh5NI5ajwADiR6PSBlhftQA6QQXnRUVtiUT8aWLO8Im%2FWpHg0AcaTcwN3IGAXQW1FBZKLxzeyr6jzhyByTMZA7JOO7qo0tjGtezEj9SgimjbqaQX1xBPgS0jgTAa5iXOeXfyCzp0K7R01AI7WE3QpV6Tr6pMLqG2cIGOqUBPB4bXf9TY0Pn8DG7jkYegJYVEVZbQqMvxKJLYbbh4bilZvezHPxs7iPSB9MVOUDSIr16CF6WyYV%2BDvaYuogj1cRiwmaOqlqqloh5qJvUu5xgA0p5S0K5NszYX6qMcmVW%2FZcto%2FwAIDvs%2Fh1JJ%2BY05Xl8uL7cqKiSGHBknDu%2FSK1FY219N12KAS1F1EgG3AAfVsfoKqCJP47i%2BnCwv%2FkXz8OCvRYx&X-Amz-Signature=dec9396a650f46eb7004211813b6e738d6ecd1661f3236b44e88102d1cf066a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
