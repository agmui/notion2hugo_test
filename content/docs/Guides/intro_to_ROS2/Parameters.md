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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VS64Y7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICEzIwnF6CUinBWogLylk3mf3g1xhubmdGuP4RSNire2AiBnTHT1v8EBLeyfePb8D8S6xrI%2FrAF9oUcivZzOXYU8xSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMG5%2BtRd1C6HU0n90eKtwDWFxSR755UasH9sT%2FklQXkfOMz4yX3rCOWRQTZto9uCy5ITDdIa3yZxd8xmeajvXxpcp4MGqK6v%2BtdKO4yRAl%2BbcBwpq6qgHXpwEURz9et5LorM6cVJcPUBS5FTMaNy%2Fp08wMipZqleBFLev5zFtFWzfRJaNRGfi%2B3GoIyfNdGpXZSTXckCjiUDjMCaFBPrrJenblXaaKHpZ4RARySLB9jkjASh7PGYGkPPcCOXdV8LxbBYG8agu6a5dYjQegse2OAlDWx%2BnO5ZrkbZWJjiESU6jfXSasQSEfJ9ppOQ3hFaSFZnL%2FpclolnLS%2FxqKstL6fLK%2B%2BBjfSZ27pYs2JkP%2Bw1evYw4%2FboKNEXWnIbtCCTyj3mZd6JqcMZOrac7o8Byl6lCP4RNZd749bkEJqe6CjRjHRA9YLO576I0eaKMn21DLbyYRdNcf7vorgFWUqhLLGIsLnOmCWp1VmgdQ6vxk6Kbxth0kUkrkRdzIi7qVJjBzGoDQ7xrLcHsLM5JIdfIa1%2FHLHU%2FDYOMcnDi%2FZUDs%2F69XG%2Fi2gVrE0LPJiGWeqZBoowpMrXbHkeeoXdhMPutEtCI1ss6TtTSaN5SWuDXQc0wPgvrjId3xqC5kBupWUoT2Ngk%2BjsY0YlgCKZ0wjrLzwgY6pgGOc%2BNBNviz0NSkLMdhK60S6cpj4%2BhyAvytRe1wVAGhqMwUUNowDJuzbpVArkDShwz%2BHCZSOuZrQwipv5xOkM4eKKpfxiVhAd0%2BsJuBvLXHnYEW%2FO9ThR3jtf41AGyXEspcCfww%2FA33th75HpwkMxN7lmbb1pqbos6g7vU7tHJADBeDG758Nnt1VXk0%2BCo4BonhlwBjMPEV3cOeBgcFIm3TUBl0eV3z&X-Amz-Signature=b63d7ad4e5fab6577916c00514d58223f5a1783f5beb624b024d35794c1d709c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
