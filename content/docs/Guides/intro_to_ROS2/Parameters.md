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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSUT4HI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAabL5H1Iyxf7K3RSntAtmGje1ymP2mptOISl0GnlNKxAiBz6IrC%2BUIZY6RHOgU%2BCv8b9bBhv9AbwXjC04%2FNDu0WRSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMqqkSe3%2BtyNgONoLjKtwDealR2v8viaMDCqhPk%2FnmxgicoodCOipPYVaQQNwlj8FUWsLoX9WxRvLbDpKEL7y3r3syr1QyRLlCdDVao2qxzlCdBbTHGz6doPT5P8U7%2BUdu18MF7CDIMh99lesXgdHrnh6Lm07xEmI8NNXq1npBc%2FoGHHIijVlMtFV3GNkWs6I17yiQC0sjjTuwsGMLvKZZUzvdFgXGNebX8T6saeRZa4DWmG7uk88IrpoU0Nm2QKMUxOGzt29jJ%2F6NOmyA83KyuJo0PQE54%2BvWFQG60RdwsSv%2FMp52tJIH5edSVEMkQVINevds%2FRexjV3SvNsnhZDBkpQMXLtwFNd16kN%2FnVpBpZVYUAgg%2FZAmLSsNDjqNOQthNZedlVSLCcjud40MvkNAycwxLMhfh8XXTI8tFWzOC3nZkrZDzGdwv%2B140rou%2Bct%2BqHu6QEk9%2FXakf2TVu4X%2Fis787rxSZhep6X7IT2E26tyyv6LWGu9JTVruDqQyfed5r%2BbjLuSIFihOCCe6V6uQ8HnlMOZJ%2BU4Xt9BHM04WHoV6022NLjNZ4m7kByKTDuksucnmsbtIjowIJst%2FCgVYZvmxlkyZHqaFDSoINZUc3iRsn55WjmgxjvQ94wVQ2u7CiVqz0bDWaqH8WYQwvPn3xAY6pgEWa8Z0rH159mn9FZxFS8WKYonHtpkYX9Cqa9cP6Wc114PyJHFDnj%2Fw6iIAKseO3zSIMP%2B63XnJVV0VM4ViSbyFuVE7EGHKKuFRzhJupXy52tFGUF3RIADFXFbv0Q7IlNanHQvnWZfybyYytKl3l%2BcU9E9MBBYlSJlhAqaDUn%2B8EWnAnUf9B4ruTzY98lxA7w3XXK153eWxY1oxTqWLMrfYwLg6lBOH&X-Amz-Signature=48fd51fae948cf21d99b150cb695b34cef438c0c2e5f6f0bef31a6837a0cee72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
