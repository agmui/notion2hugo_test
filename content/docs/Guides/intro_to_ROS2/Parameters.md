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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCG55VL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFf1jQlbQAkc1aWeAVf08KH4Vb%2F5K%2FRl8tKUvTXwHQOKAiEAs4XYlsh0D9s%2Fjh070fJJ5i4zERjWl57djFFmfvSuAY8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNE8UKoOpjfMz%2B%2F9SircA9k8QF3t5HNosrQtbvjBXNGmZXXgERv1s5Nt%2FNq%2BLY7dcdDW0sBxxbXkhfnAoh898BRLk8EwBvmOnL392yvH0KZuGoI5aJmTH0db%2BV0F0ETP57boEIv75yUjQouHelshnO7%2BustFN9fRMPDj1RfP%2Bu2m9hsWGi5QapEwjvQErbU0l485rm58O1YJ9Z8huV9QdTLGSqfCwekTnsYSjH0Wd2SL0vxOZbYouf53kXiHBrle1BnD4GnqENSuB8vSOMmMdzPH0nmGH78xyUWiUbM%2FQB8IBAKonOLBo0v5uwnhEi5bIVHVWEkx2pKwb0F%2Bqyr8mW3x4c3YbqQs4EmPdwXsSVOqAejdXi%2Fqdn30qAXANMCLeVyIdOcRn%2B7LDyc8LG18Jh%2BecaAwfbLeLSexhdga4haeYuxqvYekGDT%2BpLFh%2BdYV2P%2BkzvE8zd7gw7i1%2BoRhqfVObzQUPO45u1kzNEjoaqUlR4bg3LbnpjA8RbvFQEQog31r43VsESEXIeslpOZ%2FGQIJWv9l8hhlgBqGRhmO2FB9Jj%2FsXcCY3PnwXjGTFBEX8A7vKEm2ChT9vEdRvFu5uXnO1B2fImSQ7jCitbiaWy%2FlImWNpny5mNZLRVhTSkA91210vNJ5Ju%2B%2FW71cMI2Qnr8GOqUB37y3oS5imf5QT3t5CcFLTRyATxX5gmEmwboei99GUUhKhnrI4QmBu3cm6Yn6kW2YdtnIFaElDvOl1q%2FGmSliQ1rZGqfhq4X6sB%2B7%2FwGiS%2FCsklJ1kRnUC1xKKrJ7NfePxqBQYg6NW8EbU7GxXS6HtWljayeA%2B5tJ2krcYGvhlOd11kaAA21uPLvOWNeFg2uqdwSjW2H11lvQPAaqcCBDU3MAaPLr&X-Amz-Signature=982bd91b28f90f1597b4d0e06ab63a2ae9e2dd5ae73d985f3c27044ed6048375&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
