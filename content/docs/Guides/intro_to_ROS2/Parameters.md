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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBDVT7P%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXO2qEqdKYM5h58LdzzyT2Fz%2FbE61f1OFccomUp258ogIhAKz90LOhy2%2F2oumVfQg6tqBG7nB36o%2BDAD4WziA6zr6CKv8DCHcQABoMNjM3NDIzMTgzODA1Igy5DFxytxf4D%2FvZSQYq3AOkj1sJImZat0g4GiOfBgo4ODz5huRszENqXr4bjrgl9Guhy9hlvN1ES%2FWabxoBPCKQYy20KNMQRNdPKR1TQlpEr46CsBCSKPp%2F%2Flcz3YVHcuqFnDEFE4SpR7JAmeqfr8hWb73nSTdv2bXbUKLpfvkyetylY6GDZm%2B6Kz0o2IifPt69wwuuAmCM3AZ%2Fjiq88aqDsDlDUD70UftiGbp6zMjQELS6tYB97bVjUf%2BDxbfGCuxRjnTEz77%2F1olqkfcTnsZkshlGV8iN4VbkXmogyLk8z8XkBpWtss1SqpXwAvkSDGWrHS0TgC%2B4mcRRZAP889efMbq%2FminZhqkuNktMdiK%2FW5%2F%2FxqPEZ7%2FB5ZjN4ZgLBRyd78iwTdS98DYYxlDmdjDOAKlrsoupF5YA2EdgeZc4Py%2BDm%2FR7mQSLKnEe7%2FDUSCVOGaFWy90z8ujMMLrJL3oXZgcu%2F5OpOY10dG8vtIb%2B1xMJY%2BGDUJFl6GRNK1oMKrfVZsMJo%2Fn9JW8BxBv7P0C2bhe85gS9jh5C6%2FCpskcIKweAnrrw9uEUaS47DEodhCNeKgo5HccELXnPprOynt2zlIK7uVoqdgSo52yPb7T3HOEZBp9kR%2B9tANXbK0Vb7dQdNNNbpTEKHBzD%2FzCm5fLABjqkAV069pF%2FQeOaacDISIVPaeEG98nBMPTH6XUF0ThCIETe5rIJGx8mc7OMV1OjgFSd0wV0sC3sDp1qoydbxIIztUQ4Wu3uNr3tRKzlfohcdUIXj2MB2EtL7WTxBGDc85OJ9BGKtMl94Z%2F9pJt5nqec0kMNNU6tNmvXXS6CfShAlkSBfhuE5sRwGly33Y3x4lNBnFE7ajYDDiH24EA6MMo8pU0GeALO&X-Amz-Signature=7cc8ad46c1752e1e57f6778b5576d0362333ce245b47692f167a06e363e68059&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
