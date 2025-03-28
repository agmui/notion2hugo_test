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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRH6PK4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJQ9ZFv%2B4Y4e%2B9UzuTFKM5%2BcuceeczfMm0iCsSptu0QIgNYIdDXTnP6Xn4HKsxVl1I1P80D%2FnDwcSPd936TRm7BQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEkvc%2B4ThzDqlgWvZSrcAyIS5hBGkZOax3iNWWFQEgua%2Fr2auV8G8NcdcLNAQXqC1Pl5%2BDJ12E3o6R6j3rulNAXUKMAhWfShwL45lYs4TJa2ib%2BPdqERoW5zPR6oGdJAOTTyi82h9u6iv9Zm4qzJaqMdxiLpormeKfObaSZXNG8%2BAl77oxABt1%2F1VRw5nZckQGRZoLhAbyNhexZLW2xMIUXWck4BbqSxPEKj491%2FFjYPewnnrA91KHAkfRLp%2B60OsjmXRLZtDSsmos9MZC%2BDaG4LB6No5cShtxR17VCosxVKan8dwG2NvLv56kTjxPFxRibUT7a9P52fyjJoeXz0Ig6BlMarh1xlIBXrahCztG01T9o1hSLOg8GISueIqeY3bXukA0qpDDva4O2l4K8v%2Fq44M19Pq6EhwGbhPG3ZsjELgZOZzz2dnykGhECFHW5JcGPI0YNKb%2FX1bVl4h0F7BrlheEZbI1kpB4IYtLz6iO%2Bvis8CGqqf2vIdSxYRImbnGazGnz1M5m1RBYzeSZw7IVdDJiIJyHOBlQuL%2BHRl%2F2F6rLW2aqt8kfG7npDsUp0tiWuJ%2B2h3U8zYW%2FB7TmZP%2FyIQTzWZYl4j21R8bWqd7bRJghwO7LIclKV07Q0cOGmDtRG4tOx%2B0ecn3uDdMLKJm78GOqUB4SFdcCbwOZ6BlirBnniN7tJ7zAXHcvUdVlCZj4874Nah7zpGMh3THTovrELd80paF%2FwRbN%2Fcy735P6OAJlhziCIp1SnBq%2Bff%2BZMT5mdohuAN0niOqt9gbmmyHU7GavR8tG6a8IU05P0ri5WaBkyHTct6xT5YkozN%2Ff8K5DI5%2BZsihn9Sv0g0ktbl%2F%2Fu4%2Bto2Ug0RPtPwos2yxdmwiEbyESiKIz1i&X-Amz-Signature=f25a12e7d8f39de7a4207816d5ae049e5f525afbd4fb358af82bf01f276ba050&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
