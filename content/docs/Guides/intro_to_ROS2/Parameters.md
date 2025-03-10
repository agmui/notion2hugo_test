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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHJ3FNX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC24oPBGoLCbYw9h%2BO23NZ2eOZaGoAuyyuOS4YfYQGILwIgHEkeMTAeSaBvZJ6%2BQ18EVboUvnMLoHQKekob6eRJeQMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjnuN5TnF%2FV3UDunSrcA0yV7HGpO%2BfHXJLbl%2F3WNIZeZNXiAhuViSPU4I9XbUJUxK9O6aPJVVGul8HuIurnVNsv07XgoDX7GzK3HctqKj53INfUInkRhJW0szqc%2BYvZrKqOnp6%2BXxwtIMYBdb%2FyLM0RzEwuQ3lWeAcIuGr5IJJ45Jjsqg3YnyRmFRIZRR0FxGDjhR%2Bpoi8y%2B2Gvkq2AKN9maXJQEsNe4ZKvk7o43sQmxjXhFhwPjZaGQkEFfxrusIuZ9RyFpXz36T6F1YnJQVwPkUc6fIBc016lxcY1y0WNXLwnW%2BNBeJ27Q81RdgwyKKhTahJRkKuoWFDEvDq7ZE8qn0vdw4hHVASetxWDw6d2EG%2F07kYx0XQVG30sMowoHbFvXUuIhk5KZE0LFng3HzVeGBUGgwxlbZvurVrB7%2BiYyN%2BORp1ZQObs6zkgqg4nwTTKgFgQH8Pn0bsb4GifTKJ1EGgSOov%2BRNpuVtx0WO22hU1zltvOHhvzJZNa%2FOGxU1r44KI3VaNM%2Fsc56UVDIQlYcQb4dXKJUUbS1N5RemTuu61pQnxSiZQhAypa7Q%2FK1xTe5AvRvOT%2FuxYj6ZcN18uJH9Dzz3CFwy%2FohE%2F3bNLNoSgWpQGhtIanhStjFwq3Kh%2FmxuYFrRE4xs5AMJOqu74GOqUBFgsrz4ZT4TzDC1hyqTygPcb9vv2rvwR9nxhyI%2B2oX5BIprCd7wYFvcPA8MQzdVUuiJikOOwPP7uMVqG6usSFVGyry8eIVfUi7Mem1rg%2B256w0rPKGrXXCSeGYi%2Byt0rykH7R9MHb7gC3Q%2FTMHrzapqam0tgsakVRwCKxvlH8fjvAoU13At%2BcyGuuJa6rZ0CpKdRXKsx3eCalIscjf9rdhwhzitlX&X-Amz-Signature=93467a9ad19854be472c391f871240a69aef00ec27d3fe29f18e08037ad52e36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
