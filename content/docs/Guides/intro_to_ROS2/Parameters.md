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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEK77HKV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgf8phCjgvLw165Aiewg6x0dzwFteL3AWbBQk%2FF%2FkZcwIhAOGk8S7zmfYRgRskCeT7bcxT3uMIuMMIG6ETIsScoW4IKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDYnXL6QlSxQDF%2FyQq3ANGw62cB8hfTVIzOlKU4wy5BA8JCh45qK3XmTWQW%2BphMygpP0DIbP1O9KnMqU2%2Bn7YAFQoTrVDUXxiPNZbJgz0irvAmAgOWTJY6v1CUkQW3PVx%2FKpL%2BrmIYQ4C33%2BZIM%2F1SZFhVvqeHSYP4F1jtkdcbJQTPEikYT7y5ZBasl5fujux44%2FGOUkknpPAS21snA9jQDu6JyF26xw2v%2BXeJhy%2F9PC4Bu5kgBREcUMjesplKxcULnpBLuFGojw%2BvmjpN6wM0gyb9g%2BfVJb2dplyXKGgtagyiEiQSM03Nh4bIKV6mz%2BSS0HF8qkS8njclSWoImbQA5IIZrqneYwuUDUBakY4toAqCExW9onJH8UDYp9PIjdLo1TTb%2B%2FRLbjWb%2B07A6ih6fLUONHyDlzo4IWIoT%2FNgupfENRe1SYqtMDWFycdIVmd8OaoEfs3i7WtswNQnzSbLcTW4DkaztNsk%2BlURxt6HKCTwxyp3YYl50Mi%2F94D6ZWbmgFWgMEhWz89WpUVQtb4%2FU1FeO2P34Asg3eTCXzsAMO2Vup0ce5MP%2BwQchbPrPrG5rL1GAzy7cPH1x%2F0%2B2EiPZvyDCmZYaKTMu6rZelCMWEgar6yWHLId5rQwrBHeQaNNP3BGk3KOwMu5nTDr7bTEBjqkAdq4Q0CzkvTZcx4AhuPFHbygGwQeqzKLXNiNsy7stTbAolgMyGKO8OiR0lM%2BJLInVnFas1o3qxvSRO45g05L4R%2FJ8NRxtoKP1K7%2FwC%2FA1IOavuJcKWVzay3x18d1tlsdjaJ%2F0Jt8kf%2BizfAHVl8aFud7kfoKnI9uI%2FlrzWYZbAMO4JT117veLRM3ZkBHcBYSNchGNx5azBmtCqA50W5IkloY5XnN&X-Amz-Signature=812ff2f9c301a52313ec91209a6e6dd563c2f61a8067745963c144023778da8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
