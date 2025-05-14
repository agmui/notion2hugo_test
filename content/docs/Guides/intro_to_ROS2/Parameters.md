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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMCW6K4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDFnjIycMFoiCMsGcSS6kKcJKWbBS%2BezUG8WUXfePW1fQIgJ8uGf4h%2FnsA6WKpvHDle%2FLCa%2FOmm%2FrieqvFjLNpF%2BzcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW3JpP14pfxLxSrVCrcA0cDcdahYQupL80GQbA0URUHd8kyjCclW%2FnAVROSzHo2r09AUhkmOGSdeZ2GWlBFnKR1vdlvYuPkACnVA4P2%2Bhzc6llh2Y1E85Oxc6brFJEYuOJfGDurzbp0Pzx18tXFU9mbO9ZTeJlU1sNTK9rYDyifhp1tckxt4TZAdhCzyj7GnMPOssy5YMwI6wN3hb8SOifZBaedYXGjRDePNrhLmaL7d5KHetFYKYV5RXy%2FLYFeJChjubu9X6kRUViGoNGDiGJ52ZHBs0jBZYn4P72esxa2lziwk8nvoh2PJpCK%2FRzyOPzXh7fFGFMQf4ldKIbbDQDrMpS8Cmnh7%2Fz%2B9ozcur%2Fbc2FNbowsEGaupd%2FBDRyP8%2FjqhWgm7sYx13we2PYXGv3J52Q5dMEf9Pm7lVkuG%2FLIWr78ZqiTPdVFzPPlPIhW8Ga%2BzYQ6dld%2BjDXzck0K8jrwvHBF0wkNOiRLfINU%2BV9hr1zYqFaCVBCFqd5znpP4J66b1NtYxUhRwTUZ7ZxAJTJRw63SvKO8BM%2BJzRMf1vRVyN%2FcUSMbwyDwpW0fJDc9ZkkYEl%2BpEG39Jehwz4z37vZnTqv4T46j3oeWTzej1DvnQ6dPTrPYypQmldDvo3QQr%2FTt7mCioo9IxjvlMIPskMEGOqUBl9fBS2QpTs5Yiw8zvzYfAa%2BjQnBLu9AQsegBKRo2jjED3rcozE6HPfPQTRMjJrGXFsFdyMLyx4JXm%2FOua04RTTu9dmcwGqT3Vi42O51WtrDPJOm5BAG0NWxo5oRuMkDpfVU2rqZ9grpbDgoyU12X3eyqkIBmVIuIWqz5gE6cmut%2BQ7OPTe3N19pfV3JVkpbNSewB%2By0yYJx56fuRmEMrzE73FEmU&X-Amz-Signature=242a2bdf95d9d455515a2e27e24b34adb888afe7e53663f5bcc36c4851e77297&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
