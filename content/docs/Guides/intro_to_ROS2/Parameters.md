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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2Y3AM4W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCoPbiUYqHWnsUyVDryy8zuFQk55qe5EbRLbW1tyDy6JwIhAJa55JDf0IjnVirwZfxLARXxLBWQkAlSq4MwmkPR0ylfKv8DCEwQABoMNjM3NDIzMTgzODA1IgwJHu1Eup3ZOPTmJVUq3AOgwdutGyzoILeDS%2BPezhmEKIUMHh83VjeY3xjfKLSnYCFiMmSB1yfeCWCijJZH42O3EDJVPbKXt3Afiaz4QudBRJ6eIlsfp2LYaSWkY%2FMTA758uvSk1CHGViQjLSWFC25tQnrdXTAFiX5y6SUOPbfL6gvIN7obAbVX1ikEpQ0sj492otY3pEhAuNd9e6gaflvPjtQpwTH0aGN%2FJoekpvOD1mOZBnMJV%2BTL84erVldxmDB4LlXj0864IhRXraeNwQIQs9RWFIyvGEy%2B%2FwLeVyrWf1OufJnT%2FAwff7FSrC8qosUP0Ky6nBh9qhM8NqHM%2BQi075mwMCbsTOCw%2Fe34d5k%2B12n3qBEwKxj1Gt1%2B1YV%2FTHxpUPKV1bxtJuiCqrlPOIkrdtVfBLKIwhZcbff5KG4uaaWNrQXnvsQcvUYbuMa4NWXIbyVM39LY0pdhLEdgbCT%2FNdODwMpZx1EI7PgSfdqgaqFrf4ND968%2FlIfoKLL%2BbYJmndSRsen5feebW9Papq9OBYrfz21agakAGo17AszbBsh38Hy1iYV%2Blz3%2FvwE%2Ft6nvEna%2FLDZ%2Bb910IspLUnzv3cqgANyBnaAPdd8JZXn%2FL6R1faISQbQh5VNp6Z8dzJcTK%2FUVjrUK9%2F7dvzCa76XDBjqkAcggTQ0QNqMf5FVrmFdTjk7oAFfi6zTyArXh0r3P71zNKv7%2FBF1Z%2BeLANjqZehznBl4786xsHxHqCtbjjCMsTW81cKSFMlxZF1%2FmW6kaM1cBUiVVMCPsVFIKzqWdztc1%2B66ZBNW5Jgu2cHc6bt11Q3uKwbGtIbaNL%2B10HxnTVoXhHx0JMedS9Xn8iPs5vD6b03Ds%2BDc0%2FN812aVxCiwAFSuL%2FQ%2FJ&X-Amz-Signature=ace267fd6c6da50289bf9f461648de7b2984ef1cebf9d5516713f9144d36d0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
