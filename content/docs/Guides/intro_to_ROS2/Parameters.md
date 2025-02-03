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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIC37W6A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVrBOZrR0D2StXTezBQkUEUNhA65VUY47VrwB0quGdZAiEArrc%2FDvNWqSTSXfmSOYB4H%2F7%2FVw7ISWM%2BffmNvMr6%2BLQq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEvk5UBoDUA4hFDtQSrcA7amoRjygX772B%2BFkwQ%2FbovSOfS%2BjvxrgtsTqShydKk%2FO8sndFHFkgoGBODsxcSrT9%2FXvStwy5O0en79ElL0k6gNGjMgzWSpiXqourj1bVnWddKf6atuT%2FXeSkRY6ylCBctuv7%2B1kDjAzG515AacYBN6mrxjyRrLTSlvPRohIPuSQ%2FB65Eio5uulmYxVum0J4GtSVC3%2FUcyqSoVFXXy7sKhKH1qN0gPjpoYxkFX960m1hmqje5AztwSwthyTTm01LBZFH9SW4apHDMkuReTg7cKImF60rR9KXZ3AzmVwHzIPZBWpW4yqEv7PX7%2B299VWHxysruqdBHnVdYCRtLM%2FkmqzicLuZIhKUhz%2FW8inAVbIrQDuqrQs2y%2F%2F68dcPP2rDk%2BEKisuuy9z8CsbsmbhwUSV8SIqQynVlWPSTovAzcgXd61O4a8QYp%2FfBmrgJurYwVTjV06cLH1lgVk%2FeOVYzw5rZCiBj%2BiT%2B9QFIQVZ3xMRaA%2FQreOjtr3uaU2CbUU1Mi%2FBhZ5FCgRYRDsiyM8YTFScD4nlf8MbyHiswa6VWU84zwuJ3%2FjWlmdWKxHXbt5dlmwU%2B5F%2BygFKPwaxD23VIBLJfrHmBnuF6YsOEmaQAX8eJlQHlLvPQXysd%2FF8MJP1gb0GOqUBW2z864mEpaCdbl011pdd%2BERf4TN0OXAjYQjMSxK%2ByQCmItYB933jacYUO9D7czW3ZLyK6DxlMCGFt7fl7oWJKMrXsqpHu2OpJfHSBtwhhxZHz%2Fr8hpeAjboq9GeNNk0olsrQZ28GT0yZZsv3Mv3LT89a7kWEPkWylI%2F2jiYv2MNfMLR96bOUQhava2nZBaiRtDyltzEUwQEJUx6VA6DmGiFz%2BZLf&X-Amz-Signature=ba28886120e56ed4dd275a684f601e4dc8d6404d2800526b02b154c2d839aa0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
