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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJPTMXZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDpPhiznswSWgPxsoeKA3kT6V1r8UGVTkBuWeoPli9RtgIgaqJ2Hu9GREcmiBW5GSMmM9RfadPs09k2%2FgtaRH30lHcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpFYYOb7LeqL5GLoCrcA9JykmMR6fPf3vSnQqSbvOLbOjf7V3yv1JojFETIGIerNqxfPMbNs%2FpB%2B8CPfUnjFaz2feNMwX%2B%2FBGOLr%2BnZr1R%2BzZhhcKTcfVG3MN4LyUbi0fsp5s04LonDMJlyjunMHqIbs1XbGdsxwvHttwXAo79ZoTMKLHyVRIceg%2Bh%2BCpxqqRsOLwjNYmJoEFvsaoVoS82MZHs3TtA%2FCsgdgwX4YP%2F2IJPs0tk3v%2BxwBGKd5kyytf%2FYqIgLrH861V3fmrSYgsZVVHv4Z1usxu4AeHh21H7PII62vCW%2BYN%2BuP%2BcB4g2VMNFI3kxQaHoQ7Xo0D6OhTJaOdjDaLbi%2FokIrXGx02YSdfkMOuMYDGFj%2FA3UK1CyEA1q3zBpFaP7KuQpVwoIIiMQ9e6a9Vw%2BIfsHjMQEu%2B68%2FKAS5Uz2TRPrVjxfyR6ob3D3o4eZFNzfNfItNrxqPQt29xmyGfNpF0G4NBX%2BMBG7K4ctrRRx%2Be5XRY%2Bcxkb3Ig7JiSY5xuqeb2eSQ1oBV%2FL%2FagwPCmBA0BldBCh%2BD18VOFSPnFQZWRNCBGQ%2FhkSqg5SujJpGxS51qd7wWQ83hswaSCjJ212RUOfHB7r%2BaoZyhQz2MQZaq9FIqSK8dTC1e24D92CbDLxSadnwSMJjVm70GOqUBYQw2DzxQP%2F0Hmy9WwJPlwrZVl6oWYgs4tGTivAAIirKX5KkibAMFJbBSFwptEmaXg3fH7fVGqfr0o%2BPOezek4gj8L41yGA%2F%2FQPkE12tSZmAQujZ%2Bii%2Bn0VYh2%2BHTk1q9F%2BAkpYkSjOuxK2NssqQ0GzFmsyasmXsJ1nOEk%2F9CPLEgsvh1B%2BI0hA4j7cmhmhkBg6pBtUpZ14xqCR%2FFMIckvGFyW%2FFG&X-Amz-Signature=6573c1c4ce2bfd1749b87674e8727a91e07ac9263177da2395637f5e475d746c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
