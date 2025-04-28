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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLITSP6N%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICosqnOL%2B3EvukIJ4LAiZqxz4sMFQmjkmyVA21hmLzSdAiAeoAE6hkRrVLqpyQbSqKFEzLd0Zi2ANvyknXbAihRzJCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsFnhJ4998XCFJC2%2BKtwDENs9M9Bgu4YpNPYRWbnJK5vn%2BwGmJUJxk2nm5CS3rxVpctZBQRJb9pJUSJsdVTpyIS9u1cOvRq%2BzO35iGuLna72v2BlfP4RXAfN9DBzwFH1lqa6ATzQ%2BU3DrW74%2BqmIep%2BGx6Rl1o6DQoogJpQYaC%2Bnn1GTtKG0epZW9bg3nJwURZgRCE%2FPxgjK3p1fetaf0VQbkna2R7W%2FzW%2BbMR1c%2BK2Rme1ma373DzUDXDLOK96NB3WE8K%2FXl%2BbwPt64Z23RLseFDHZOANGA4aPGIkO%2FxEmWK%2FZtjEHsMDenwZ4aJSaFNUtydhni44Dj3sK7Y6mbtJEfeZAqgewfiMlTKO9lkyY0fdDjyEYWSsyq1XQ4x%2BkcAervDiUEMoWff%2FNpq9kpDtOkUmy8gNO48Q%2Be5clO3TCRSWMXk%2FhPL18fSl3L5b3iDaRw5VCrGULSb0L%2FbrlJ%2BrOgmiyTfv%2BbjJpUzSO2nzfAXpdGukdeeia6fz32GsUB%2FgTZOKtaEe0mVSgsajgUmRV1j73tclZvD0KiVLKVipNUy1dASgwPuCnzZ0cNeaGo76ImYbRO0IIXbWqfLvKsFeNRbcxNJZ4gu8d6iivV1aHYlDZp5oPhdRHx7EXPHLBPHRbDDfa5ysLi1QGwwtru%2BwAY6pgG7Qagm17zJzDJJk5JJlkK5xCKfO1HjhDLez9mcBTXHp7V0C0eQJ1IhCnCeE9glyhs6v4cjP8ayJOZzzPVYtoFyd4GQFk0Ve%2F0ZW%2BoZqkzz0JoEoQUw8L9V%2Fu1iqGwK7XtYm9Q8yEMtmWsK4Ebprmc2HGlLPAs4V7ZiLseXJfnhKqpkuwdd%2Fjb%2BZN8ldT58ljD91jfE%2FpC54C8D61EbQ8xHtaBfI7LQ&X-Amz-Signature=ab810943eba7855f95719bbabb673e694710580fd6f0ad73e9dcfaba816a773c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
