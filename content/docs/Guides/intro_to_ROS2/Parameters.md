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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DGDLEY%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGKpPZMTmKHPBIW9umbFeuljP%2FViw%2FwSVEoNAJ18ZISGAiEA7TCejL8fof1T%2FMLVP0gtQE3ZJoOJN8TZuvUIEYRcUeAqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbmMr3Jrxup7BMgNyrcA3Bth2ApyQJFpXoy%2F26fz%2BQ9Ypxb7q6xwroePgftrM3oLXmwGGTBdPpFaJkKPiYSp65Bz8b9NLDqr7YxhzEsx2FyI73hyWXNFbeeg6IKPl7S27xfmhALTijABMfvsRw%2FTyCXP4IAsKHAyOwxr5zWGgvDZh8buPEkBY1OpqT6sB4dyvh4lQl%2BZWaFr6k%2BemyynHANMYUI%2FhdRB4eJonel6V455VtRSLFfx9wV%2BoNamrc3Jp0PNGxl0BvvK4uVwKqJzumXzK3LEsVwogRF%2FyUHwayfP2FBukQ9knrK4F0tiizdjIK5kOSShDy8BxTBiF0gZThbFJ%2FjCTE10QoCOBfSPBsV3yMIemcUhRyuBBKsA6xx4NNDX1Lcee3T6U9hR2HjZLkjDtbVlC4ezsWrvX6UuaqJSQY%2Bn2S9CwUfIqDZEvRW2ExpWB99O3HQy%2FoCvCj%2Fi2%2BKW8sfTu3Nh%2FCbg%2Fz0IA8k8lptzLH57l47P5q27PlGtAVw0ZPP7Nh51lXhbOvpF2HQt46sZsnLFdT9Ru0hOEVBgUxh04lYMxD%2FpmP3trcN9xP6tmoOVS9oy%2FnCtORy45iAxrv99n%2FM%2FN2Tk7%2BbZy%2FCWfly2RKEg0Ff%2BS%2FUC9AMRw6LyoXOPJpNhAl1MIK85r8GOqUBRB6ZxSoKXg%2B3bA%2F5kJqvj6pyYENH0JDeWQ67g7cvPFDVtga10lNGBgGSMO6QRBcCr08MxB9M%2FhEgwPZGFInpkvmMzPTDIPczRDpvBCXy6X%2BoOHO8s9fu0l%2FW3bP%2BsiWwgNEGIqTAueEsvaTRdteD5I43Nj2o2UCIb71vPtf4hDMpYBUhyVP27X0yUCo%2BTPB0EB94REiV90Wf9KZ24fsztiEq8sgX&X-Amz-Signature=a0514defbee59b5519371e583167d9b94bbe8699ef7be651aca929a16b227f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
