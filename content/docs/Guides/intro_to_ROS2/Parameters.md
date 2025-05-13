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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MCV5HE7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDo7CafU5G%2Bm%2F4RAn%2FS8PuFIIAP3ZxaGz%2FWzJ0D4CIvegIgbu8EMDQAE8TfQ3YWoSw0PEceaKKyRpL23aHAwpPd1d4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKQZP03bRo8el1OCircA1xGiV8dJhaLgMFacF3w2pMjC21ceWS4esgin4jKC%2BzOFoukYkXC1cti0gO2ibdWRwvPU5wCTAOViuRxb0yXNWGWazpBfXJzi4GDt%2BwJlcuTEmdHHTJi0DMlzcJHLmdJzFPZPuedeFEFFEDA6Cs9fmO2Gt5yrzrzo%2Bu4GvfJQK9fuMD0GNAY5Sq7GUgooUZ8yV94UzBWMNMnsrHDt2plqrhWzTxYBMJJ2mwqZpDAKDsuHrMHdUmJPfG43eT%2B7VwgcD6U08NYViyl1h57hsYsJH0UmzB61lRrpVWz9oFpf5%2F0f2hqmfUkXbnmqhV3TpCoqHQf7EM%2FKS1JmKYg%2FC7Y75S1WwzlaL7fASB13KWPcPH%2FeZHxJYctUDdUk7GXWVLfgNa%2FLblmZsoQRQW%2BxnDV7ua10u%2BlkBcIQKIXCIlTv4UakWCloGRb6SPKr05k2ludPrRqMGKUYEG4HsdKPAK0L%2F7epY70sdeSvf%2FVqmDy4qV4AGOWiF2vaZaZis4lytBWmJUC%2FxSU%2FTMyVk6iN9KCnN1Mo2S85KHss0Neyc22lS798A23t2bMk7BtNsUHf4%2Ft9jY6SkWhQZNOvjf4goVxRbS%2BV%2FuWdCcep4x9C%2B32y2axRR8MLFYC4ou8KzyKMKLai8EGOqUBEyjbUWUbFroopoqkOa%2F9A4RL%2FAL7LxIHwyeUzZkUfKyZlgpA2WcwJ2dPTJzMec1JCCD%2BKm%2BMEpub3M8tIkoCguCZFvNB0r6V5IPc9%2BoQ3JSr01Fe3ly75xLX2SKpHm3H9iPYvVJ9ttRRmM%2BgwcsTNfZ%2BUX0CXYfAHe6jBQgIyZILyXNT9GtAAN1BT7q%2BZoNFtwBM6ZeRFX2QriJLOeY8uN2Tk%2Bqk&X-Amz-Signature=03c56d9ec78f411205de574e436a4257420c9a93daee8dda7a7d23a3669de678&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
