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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HM2ZUJH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwiJCE78yeUfISkq%2BTpWR9tOr5J6Kb1Da8yFhEWHYIPAIhALVmmVcSOF4r9ISPjHBk%2FMECHpUfclHkt8Hj1b9V6VVGKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8MT78LUhG%2BuB%2F70Eq3AN2Tpi%2FDttQ1jebHx9iRKb0pY5FaA%2BDDulSZVitsNpA3LBMw25xXS%2FjTGr%2F3rME%2Bm27a994CfDD4hUdO9rXGRUu%2B7%2BZSd0RJijhC4oeQjBdVNTW5Ai8ux%2B05soM3wqgXWzPCDckKYEYelwoCaHdonqshnR9Wrjcnw3IlrfliVLOG7Wtn8nxIpHHr4q3MCt7pQK6aqXNg2kfEcYSSNWxeWdwW6toCxCy9JwrdFWzVzIcRODuApH5Iw69IYa20LTi8YYzg9Df0Qb4RoUSiqJ5b2IQPblGFBvXzQeWp4OxGTfmCyXY1OohGKr4yzS%2BST%2FCgfHbWWppIhGUhMr8%2B%2FRGp2FFegnejtLkpV4uWy7Bw%2FUT43gAZkQE%2BLlnJNpZkFEZ6RGLvY6YHg6tiLLPpmA6FT%2F2mXeYom4LVdqlK9oHszbq1kW5FGSD9baGplcsvI8Mp4V32vRseYEFLn8i4WLcVpDZ812HsFUW4CdXMKRVRntOUONzukjT%2FiLAwXti3XhGV2hxMOTNWQdiiv0UnU05HTd90d6xOwCaWmTA4PvYYgLp8SQeqBlMtT9lnDhyhpG5H%2BWp9Gcp%2BWlZ5Gb9LZVDJwvC3l%2B%2FitAz6z4MpYhKSbN%2Flk0fbA0JJ8HkSaG%2BODDMgITDBjqkAfU9hvS%2FrKea0HYItpsvTGmPPaB33bODAAzb%2B8dgdLw0YBQW4NsFVvzv3gBQ6Zpa6zqmD%2FqR5XT1rCgDpNnZtTjBnlyh3olxAMqX74s%2BFZgZQ233RZJnQRTf9MguntqtK50mhA5BbrMqK%2BHumYCnKClkR16aIp7E3WGi4h%2BkdPGt9bPrERnjyvUjLDPI24Q9rmIhrRwiA6S7%2B3RIbc9eRJJes7Wt&X-Amz-Signature=c0af265fb28d138640ac33e4a9a842bc61d4fdecefbd495d4350e609c6dda0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
