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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PD753M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjEBTsxEbZxNcQujgkirHVNHC6HAsWFCfPW1D5n7OYhAiBZyRcjFgGgR2aVv%2FN50IVDM5Ond6EH6nP3wwCMZbMAhir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMuBvZs7owt885dgBwKtwDLNyiC8Ry8tK2y1ParLqINQnpXJE5f2MYjB16V44PnWByKVumpq2aTEKIkHTZ3FI5nOKU0%2Bkj6ZRc1vkese4riHQ2rMCUg1%2FPhjCFf2twjf0DZCydAg1e%2BTxX0iD1UU0G9VgmbwlZWiGhU8zOW9qqmeWG2o3SqfsKw1CyX%2BJ3diU8OmUSCBsntu%2F9%2BR4cK9qV%2Fw7frFeE6ZvWsTyMkSXwi9DUVONOBe4Ix573J7Q5EHVjHvg74ppWjlEbkVqbHeD8vcpLUwJj854RhJiHQr0i5VkVRSsd5sqNyE6%2FxLK2gj9PwtZCi%2FzRCeklAl2jvkdMXgXudIP5l%2B5MTNH4CdKMFaE7dK4ClnELnusBLEwMG5u6UzjbJHonx4EwHmyWhQkc1aIeqBUi2R44pkisSPvVysdS0R0%2Bn1BKVpEYMUNQ%2FbmJElmCKlrA4%2FcdMLeuf%2F9zZ5Hz8r8bMn8UnmAkqqQl4ZwbHeRDM110CbJ%2F0PZ1rBiHJzMPyrei%2FPdRlJAoh%2Bg6zGUcdR1kdpHOoKZLWfUCrMWf6jhqDrDwi%2BPK5n4z00Ji3txFu23ZEW%2BHYq3g36f5gVYmsDn%2FNeUSnCI2GN%2F9Y0n3UM4eqPxhYF940RR7UbeYwS1HBP4ks32wasowtf%2FIvwY6pgGu4SyY%2FiOn5QbPPra5keliwUlxMOs8VJD7XE%2B6QXkMfN7J35%2F%2FtNRAE0%2FtmgWX%2FHw8MLnIX9HoG4%2B53deoNZp%2FQr66GPbDx%2B7pW1TPZWQAd6flHNZrTgZYGFLDHUJzPlFm65dLy9kzlN210zDo7dmc9ruhPvHHe5MLeNpD7e5L0Ltf2AaN6zdo4M08FxxpXSoVrFHk%2BNFYqeUVU7aL9MjSXBqNk8%2B4&X-Amz-Signature=1424aff16ee30e6d0053033f34a2dcab69afe96fe9ee83b9ce5a572d65695e61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
