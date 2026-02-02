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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVDFMQV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCongGWQOw476eBfI%2F9VOoChXfBSyOTSZ8FdHuuyula0gIhAMftT5yvRDtoId%2FBZKjAEQiOccz1wv6AAG6%2FFbTBdeZNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC45bqmFNqU9pGY1wq3AM27p8crYUSxJ0QiHVWivU%2FEh2ZiZab%2Fi2jJD1hCYKii4AW860JH1lysAikVySEOl3cMz3wwYuHgPB9WaL3GTw9%2Bm40bk9ci1YLzEsvIHk%2FUEzCU7dzxGEKZE44g67BmgpP%2BkvPY%2FmH3ArcoTEbTOHgCAeI28b3ulQ3RJMSneo%2BUU7ox0pPoTuxigwgqUAav19UFtD9Y2mMgdmAHSSPx85uOzQzuzLSbPZft%2F8jzp3H9CthTC7LLiVoN70iv2N0tVSt6ocfDiAVT2kKfhq%2BKSSPBXnJrCV%2FIS2QmxnQZXd76jOncrWlKWAe14TsaLCEXbnJ1aL%2FHPOdK%2BJ4QSI6zHwClK2lINLPb%2B940%2FdwUz763XrpvIh5GZGLzynVtFTOwXuaZ5vUiL4BCDIegTrU6J9z7B0Dj4ee4CIAs2j1vFbifpdudtmOmLe%2F6RIcjRfSST0cC%2BpzRLH%2BlRgdVt06U0JVy18LEFulcQgLqcBuTV7XR6P61MpdxehtT7idefpiETqHIMDqFqL8Tm%2BFmymnaIQwQnnowoNE%2BHYiGmQ77Ir56y3K%2BIRt%2Fp2ceGbLyz4veLhEiU07DQGgb7whYO9MTk9jEF4B%2FwlYnWAYlNuffFJw2VL%2F1%2FELwVa6X6vxIzCgiIDMBjqkATc2JMzBTk7Mjs2EzOJW3mpGvlH%2Fs5jTN%2B1RI364bXlc%2BxkC7dgk%2F1EZoizMXvqbrUfLv0ut7SxVlR9uml8wV5E8B9yZkNtVPT6FDBzwAVTvTthxHQ9Y7mU2lCmytQFmOgP9CKhgyvLYFGbgHmjlVuuFSfiwk1bs5ZAb5AP9znYj39lXG3wvKxAOi8DMM19buYy94z8vBsdgsYWHjrRXPp%2FJGw3s&X-Amz-Signature=bc80dd2cae8871d1a3638ac1ccfa5ce47d1c5d086ad3db9abccc680150a3d671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
