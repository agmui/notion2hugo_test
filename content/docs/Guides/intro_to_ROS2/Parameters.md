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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBXF6MV5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjl1CdtyDaL%2Br6am%2Bz2CVeySQRXIKAGc%2B7i8%2BJ%2FmI%2BBwIgOHfZBy4zzHSuKmLkSFf0J%2BdjOgXNtqKIQadf%2FYt7QNgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFId4iqSVROtAs3%2BcircA%2Bocl7i%2BgvfJNB5CwT3NwXDMpBxqw%2BGRN9BTlcD4El0XvtzZcFx1Pvx8vcxtg59NSng6PbNm5pQsUSH0AG%2FV2A7LlDYbdR4nQfA0tTFezWb7OQ%2FwhRzIBU4BUrLnbzoa3ccNwlE822M0MvWEglJp7GuFj4KnAanj9lom8oAI1dw%2FVDVOGdESsQdhk6Tz6tvaw%2FR3TNjg8a7vxp1pbluSMrNbJa7S2Z3pUCb3xdC7W3ojPoPRPH3d25luDCR0H1DH7yltb%2B7HslVHVcwMho%2BiRwFM3ePn6ngd%2B6j8bZBJjbFpJgQWT2JFVLSBF3FyQFBS1wGjoxLOZx%2BhjbZPZQt5E49EczMxEWW0S2A65uTEaL5hvLdi1HCk%2BX6wTb9dDgcGmXcGlovO33nEeQd7CVugtOcsh5a%2BLiYJDuAyKsnnlcraiztFiDoEzOksHrtvfYUgUpUvSSv%2B4MLcplja1IJlRf%2FqYrZXZFPuFxV%2BjNUdx58l1qioGAmxdnYGDdVSx6xRo%2BjQ0g9g3x6xLVnzpQ0%2BFcl6javrT%2FWtfFn5oIcNk%2FWUyf8tTRemCTwh6T4sr720x6nnKe5mns%2F%2BsWNiiaBQ1Q%2B5ot5i0JqYMx4XmT3cOE2z84PFqw34lgaowNf7MOrBqMEGOqUBHJxHAB7eAuugAu2WkLhARUQtRKGTnzZMusyg7UuqHP7cO85i8zeeR598SRejmuShbPKCW92YQGAzD8blD5rgN9pMZnSPXYwAxlXeRRr4PDVr%2BhixoI7SpYTlKTj2gbqYyyfaf%2FKh1N4O0z2%2BI51sSG%2FUeQMgU7vMXxKMztV0TxqrLh0HDDaFbYWqTFDNTrI0b9jw7QEbhOTYwUs990U5ThqzRTMH&X-Amz-Signature=80046f808b0b8c623e07be839d3ddfba7b0802789c6b8fe09202d9cc67e47939&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
