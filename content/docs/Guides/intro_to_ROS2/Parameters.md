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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCGYVIX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD7lPgrMZPsk5Cs0oYFh%2Bm6xCeQoWYLsH51IyowVB%2BX2wIhAPAS5r%2Fnx%2Bc8Qnjf78tdR9MQ2vN6nA86L8FM5tBDyh2KKv8DCBIQABoMNjM3NDIzMTgzODA1IgyF4zCJjJWk%2F3jPiNAq3AMJ38G1mJGHTUucLtmsSlpUWu9vJVyesoU23b8T1G6LEjvP%2BG4gF2cid8RHN2rBVTNid2gUmp8quYNh2uVug%2F2iM6FyQW6djCfFse2dZw7H7U%2BDhbPiSnH8T02x0FNJLO1uwRRsQd0rx0uzBx0eHOpbzR0DJDsCX0uyipVii8Y19wqCGNTbsLXXiFp6RfS9N1rEvKeV8zjxHbHAWzRRf3iQWK9jiTqtul1MQfvJQT5Pq429Hj1Lphtcv3a2VDlg3N0TXRWcGR%2B6hF10AjVcxM0bijUfg09jTPrc22TJraoqtYOKA%2BiTiu06dnTodRhdbT82hRsuVTpmvpsG2%2BNoAw1Vgw0wSUt4Oorh0F9ZbGdX%2FofJfgnmPOHYKsVCJvQLVClE9neC2C%2BgPSKifT5BHBYvN9nymvlvI95DfzuqG0F5mFlBA4r6a%2FljGizgtV2BXJVuS8M4A7yGeiHdMrcOIQtwxw9paiWk0LZe3DcyOIB97RA7FFv0bJOVjYfv3Gw%2BMJunhCgITaE7qHIc6rQ9b8uKGkB7uz%2Fmj7kGGWyqqCaINMkxjxW%2Fz9tM0crOx3H57y6MF4EHqBnDuo7vWM9JcAaabofj9zlmKPv3Wuhte6WYtsLRHORevoqzMm%2FLkDD4jcbBBjqkAXta%2FKDSyjJ4xneoy6NCviGKPMJgD3xnlOYCopXS8DVYQdJShq38N3z9t4CnQS5xAFdIUtsIrMqwj50cIpjnvfRRrpQOZkRsAwa5JUYhiPTeiNe368bNSYo%2FEugmNcKBpefPHoXzLV%2FLI5auzFU5Q%2Bm6G8JCyJ5B4Fro1iy7g66%2B%2FQr0RCkcfpcv4nPBkyNTJWSKnBmdtlAEG511ONp2Frfl8hrB&X-Amz-Signature=9b90be481d42110d02d3c77284d83e9ca6f6432fbfed6967b36458590e8d2038&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
