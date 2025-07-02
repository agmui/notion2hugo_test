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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDRVKRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyT4L%2Ft86lFyFY381NJP1%2FTD3Vcu49pJMQehZF69i1BAiAOUdnUGwG1Hha9Rl8aPStTNFmFT2qNA6EapS0GG4K8kyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfc0mDogxN76jL%2BM1KtwDLNJxGfv8eZBxCVgDKzbvKvzkuKg7pPnDF0NNPM7ePThum6lRTXy7YqOtOAdK0WH4MBXaNoJkpu7dm%2FWTPtWLK%2BUqSVbFLjMRokt%2BUUg%2FXuiMZu55qvr%2FBNOyjnl097f%2FqforkbrT2537p%2BuUVVJrrCutxuIXgf5cMVApZHaIm%2Fte%2FSgFeiZrNASEOWLzYndZdfXCFgb0LZS7Y5BN6mYWSus3CnFza7G8KzfhZmQeNpaRzvRYSrmW6ObsVGGGtFSgdduZ4XF7YgzjySaye61GRX3HPE1RNERRd%2BJdeYBLgBL61HgweSiIxeHmvM5wsTe5g09OqZxRlocN4G9oUw%2BqHWtFm%2Bu8JjkfGpRdZz%2Bn05bu%2Br7Bx6KJA3E6hJvUNtNf5OVzHs022kIC5P5rSqhzYAlhSb8pyxuwdK3rYmmZK4Im%2FGC748e8bA82%2B4kNyw54%2FZAotDCXzkRNGfSIeefIGBi73NuTT9BikuuX1wqz1DikAoHZ5dVDBRYGcIpRka3ABZ%2FKgoO3Nl8NR%2BeeOpoWt0D6cequxVXBo88qyEzc4weWWxaLdT04yotfOPCRx2QaW2ozda9RUwZWC%2FC%2FWG%2FGC1sT2FI5o7McPVC8YFOvTwUYveOx50WzcTBTw7UwpduSwwY6pgEucKTYISGHt9dSBiLP8VQV5DcTwG72yqeKDUVpV2W5E69wD6arUr6x08d1d%2F4eoXdqxzTpqU0ODccfF%2FIHjHJLifyB0wo9KPAjyu7tIrXtNudeyU8tufzLz4PE2kPoOTWX6TcNjdfp8177yyWE5S4xHtuvfmewepn7ot%2FF7od2jXwa%2B%2B21dBPNzk13g059rtMFrHpMZqhoZAS%2BoVj9qgHXgzHHoQlf&X-Amz-Signature=f3d79c1686657f9b19dfca25f9e434d1e526f82e9e4661f996cf85dac5197e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
