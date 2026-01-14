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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZVU52I%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDVqJoiz01Ll3BdoihbUr8WB5hj4n3nTsEBz0aKF6aBrAIhAK5RZw%2BoOib7bOXvq3hSsgU75rWMplJePbym2eNt1Na8Kv8DCBIQABoMNjM3NDIzMTgzODA1Igx49A5HFp1YhhUmrFkq3AMs3qTiEUl%2F4%2FFbsRxuA2qXTJsDUgSwSWexmWiwrpBi2lddOWBf4HEg03%2Bt%2BFOaHeFcULlgsPFUX1Lm9W4raR7GHb3LUet%2FnCi5N3hk2ibuc2BxKIqM%2BmB8biltLjKyd1iaJh8oFrEUpCl6HqLuY6n2ibQMzGjtS%2FB9V0VCOOEI4iOwQqKJ%2F3YW3xKPLKncMO6tzDtyKRlbiCjY1oJZ3leM3z50elJWwlFFAr6%2Fg4hDdXGVUAtN8%2Fr2o5ZDMqgJCRDduIpWeuNyTabFKYDABXNdlYO2W9KrAm3RX0baYqzISWcZqZZ4MXRw%2FX0G4Ed1ZIP839hxFZH63IMVsN1mp5KR9oe8N7rdrVZh5oup9Sp14g8HsQRJFPmzwTBsTRGCdOKUTOtqHFFr9vRBxttneSeSkVcIbYJc3OFb9At4H4OuO1eQZHHPSa9gtwXmmiO9fIsenCGsNNjjqelNk%2FQn53h1%2B%2BynNqEsYjInJx9tvK0NyU4SHT9u9gs5S9cKB0XUQdxmWMYH%2Bj1j1TN5dYoK3cTF9UazrGBoELd7DAZdhlPDgQC2v0F84TdUc22RINylxQZF1%2BbpIWBANjpQTsFIqkDgJ4CISQk12hnppm5uI5EHCjTYUaMme%2Fx0prVrDTDKzZvLBjqkAVNDBOeLEDAziSyceJu35oxMo2vKFA8ok8fy%2BNXlg%2BwOxqJHM%2FlHg1f4RQk2zsCMGd5BllP3WUqttOHTZ8GI7Nq4hVA%2BcKjYEFc5BzkJriL6f8ijS8to4ETuANnU%2BgBVnJsWtxAVWgTKcoj%2FP807FYZFrvYOkdMypsXghskWe%2FyYMvsGYskSJKaRVjkzoOXZWtQ9ew2bHUvAs8Ho0NQpOKWqb59y&X-Amz-Signature=4bb2f266f913cab0a837260195fca89261cf21ac7b0d11115b7a54a772c88748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
