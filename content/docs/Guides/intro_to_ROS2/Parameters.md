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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5SC7M4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFmmlrpUWgmFlFMCy3%2B6H0ZHJ8fBQKh6kldpB9GBaz1BAiAWvd8Pnx6V6ctsVji6QS1gNlbPorHEOo1brgrfA2UgaSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMf4p%2FjE6QbC7xQNCLKtwDY4dKjlZmgnpyBNS7EHr%2Fed0NcrkcX17Jt2eT%2Fv8PyeYKoQIiyqKIjvBYztNP4UzwhSUXG%2Bm3YbfH5ykmTYB3Y9hYrh%2FWK2UQH3NMZOAfbe63iNtbei%2F3J0DgJlLl0U945Ip4uQUOgDIiP1guD9NlMwY%2F7pbw247JI9AkFNKm%2BewC5TfWZL%2BlBfTJsdJE%2FYmRsIrWXdXMWP%2FkhnTaAqyhJ6%2FofmXhenJd%2FSRfyWpluEk8kV6CLPhxO3%2FwmD1xK4uDfppoLKI5uqxqiICok9pFzp%2BHtDx6lAZeEnC1M%2FrDW%2FvtBWim0sYeryPt%2BpuRA7Z0y4hFYJiBndphgUV0RYT1%2FYfUO07WZDbVIAXHY8l1K%2FIGkYf7mBC7d4cO4iR9WuSgXjN2wesZ94GzjrbgR8anvvQ%2BKYrNmdzZ8ROUBwf1vFe0b%2Bi%2FFqQ866Pb%2BzDzRUAwaBobiestD%2B6ozyE8EYu1YMyA4ydDRJy%2FrEZsjqFzpsqSNK2dHsU0JNJpjU5FE6Bmp1HGNUota4JeQ3bBZJPY3DBinaQNdqHe7GIHd%2F7fJeFQHcgoxqGWDu4q8HA65i8KHLlkEDr1kxhRUfqls9Qn7o0Y8v4n3q3SY%2FYM5NLhfLtwMPNfEwNxlMoZpuww0ZufwwY6pgGVBaiAqFO1oB7U8HB%2FRzK3%2F2QJRkZAmZ3M8Of%2FZ4gfi5VP2FFHAX3CHMsw6cmHd30XW%2B2w%2FFXVwx729R0EqZZ%2FA%2BtJ5roZyaG8s9%2FtAjw0h%2FUzUYha2WKnVslVjnhfC8BVb7JOp%2FyE1iPWw1a4fGgEWs%2BXstxBHpVsvFQACNUqCQPdOycqav9xOeDd92r%2BQ2bC69uiCI0ttdk1c8BQeYPmttri5yZg&X-Amz-Signature=e365f4ffa060ed413e0c4e1705b7ba7579de493ab0dfc70353ee118c286b7d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
