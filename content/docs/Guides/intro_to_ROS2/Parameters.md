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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOH3WEJ3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCoKTOFBOUcFT7pMaXL6TsYYUU%2FIsp%2F3cV4u1ADuTodSwIhAJyfaKrc%2FFx3T%2BuG0bTDYzYS48ZM0aIoW4mwOFHRCNHHKv8DCFgQABoMNjM3NDIzMTgzODA1Igzkes%2BQz%2BQc6ESdrTkq3AMrY41NWjq4BPY7yVueBSHiSj4MFeo47nuDk1bv324UK4xlxvaO%2BDzcSw47jQpwh0IiBkbvx6udMpxPQM5jodq8qcaFP7VjUoYMcAxRyai0ifvr%2FhqH4elzQyPBwVBB0UypR3K%2FBpm4wSZ84v9ujLZHNX%2BhYGRGgyvaQjri92%2FZaF6CvDZ%2BMYCp0WQL0jArhN73vJGrZBzkbJw88MRI0oulRrZRNvKLRvo4Ahf9unVbUkvn0gg3b%2BB4DzH8PYxVUdEnjm0mmdVT4DkWF5d36afaATX8ZqMlKOTKSkbxq88%2FbBYHtYlludB3OIZweqZNvSRH%2B2SxPRpPmCn%2F9MIYjxaBJ4Cjv4zo9rpb1TbWoBlLAsU8B7e4Ux4ct0t6dpNU6VNCNY%2FzdTBaepYQ0RQkYwwb%2BoF0HH9CeIKK127ePsIru6yBK90YgMpzaTuYpyljlO%2BIBvP%2FjCdV20GQPLxKDVvqWPDSwaFDxx6lZdir9O19PIkmWPZvLROI9%2B%2B4Q26YRFdbC3xpSn80Pqoh66u%2F7Rc5h%2B9Vg0ypfJqIlOWSHKOmkkBmg4dQZu0rO7%2B3jFtYocSvMT%2FNbzvpWBlcydFmzQtubmHk2h0N2BRzmep4yVU%2FsWR3vHVc74mx56Fj0TCx4K%2B%2BBjqkAb53pasvsnqX%2FfuGLJ%2BzWJWyZ87mfr%2FEHRNoGdHxDP9AwUvxCoVYhWNL%2FE%2FEtiyPrXBc5LMDgzkxs6scTs6AqBekRNw7LVWQpwiihyxH9vbfcoxf4K%2B4sGAlyA3QiU8XYnGGLF44k3ILSB86HaoUCGkQ%2FLjUiYhtVlGFqaOwIxolyPbCDA1fu2jrdZyl1C9PNWcCyD64bTRFJHnJVAmPjLvnrgLl&X-Amz-Signature=e38d4fd78657a77ecb2d438627e057477d7c073aebd23bb196e9987ce3dc92c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
