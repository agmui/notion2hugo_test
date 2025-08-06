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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCWKHJPQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEzzAGXoCWj9CUX91V9MA1DiSVt7w6i1s6OBz%2F9n%2F91zAiEAzjJzx1B3cajS%2B5uMn%2FdwmT2B4G0UscGpBROKHzBqYLUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPV39SAVoz5QBws2VircA01IGXN0xbJOiyxryIzS%2B7iWlzc55fOhBifaxPm8tNJKYsancLNQOilx7dONy4LQN8Os5FkgnTJzRITzsqYT9sStF6hNmblw8EgVpmXEBO%2FHVbrBjDhzbNRW7753irthb1Bu%2Bv9ADOWbntojVDEZWCYYVfcE%2ByMKmyo%2BQsv4hKKNLRDYzbk9rDJuuMJaJSlGfpJp5C0nW5ASneW%2FTZvvw4SGcXYCZRZHtXLypY%2FXXvl3b8SPPV5J%2BAHdk3Ob6NrUYSdXAb5VCZNMhrCXVEDgxeBbCD%2B5Nhw8veGj3uDFy36S6JxYBM62EsAlnnZrE4dAO7zkwELbOM7XRQV%2F0HIBGlxCWmmkzCEMmGDAN7ATUCMhZtMjGUR%2FUa5VjmNOrTaseHLvVrUjGZtYjMQfHTL3Qh73rtUn3xkZZuNnCcXXW%2FPoR5hXeRAQTyKRa9fHlfyLSfq1jBrvgs%2BSjcmB0cismnyVYDTGA%2B4XTi0ruqydBZgrw1FDR7JWORzX42SAkQCh4e1lLGXKguvO%2Fr1iM2I4WBJ4KOV%2Fn7QN7BA%2F98%2Ba6UqGr%2FoaF0mEmqSIbeKn8FuR01gSQvGrrn04ZpWLxPje8aBbrCwkFR8WZZ7EHkVEOLipevIzSRsamBzy6yTEMOrKy8QGOqUBJHg9O7lVBYEsq0vFyhCdG0q3z4PAt8lFfwXdRxtV9iVARDverS355%2BnbGG%2FGYDdju1AT1xwQmsBEkku9YSYp%2B0NwUbRBlI2%2Bas5%2BdW0Hf3UEVdoKSAmVuCWqPm6FA1poGRA4VZwf5nD%2B5Ii9x%2FzXjteKyxOxYjCg%2FD1lHcap0pT%2B86iNL8poKjsC4aSZbZFcHgZESlJ6JPdl7F3XAAwXUPXlYFxI&X-Amz-Signature=3f2987096edeea18eae2b1401d9376dafbf711469117084936f27cf35c2128f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
