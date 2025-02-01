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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVPB32L%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKz%2Bk0YP8XTy8XX5WuMmQCx7a9yKv7CrFZ2D6TzocBQQIgZVZf5qTeORPiUcfLA7Mtcop%2BAbRH8F7jMT4t1nJVpt0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGprydnh4KImflwnvyrcA3qeHfKP0JoNxdIFCLL8lUPfTI2y26h1hQ4JMD7fyaix7bzKA2LXKmTS%2BGKCkq5sqdlPg6d2hwGnXv5ffobEzHMGSGHS7B62UN0fXWgxB03VpevTsLMOh%2BGKjDTJg8iD5RLmpzac8jHkhzDZ3OhKxB2mmiaW00creK1hIP7cg%2FMo5oisZHRCAfk0tTs43feDABikVDm3kwAjwGOf0ws6sffFiHI3iNbWPj4QMFESERS402ylznXa3TScGr1CPmpaOaEBUobKOJuhvrENznkiGXM23OOELnAceGKaNswtXouUquwJnxPkgouvZoNZjiEVvk0ovejZV386SxI6Y6s44FGkT1Kd0J9d%2BeoKUyjyin3TDWz%2Fu64dBF0A%2BVCxLTUcxkubM6s944c2AybsWriw1RzBnO9rLia41YuMFW3cfyimBh9LF3OAdEwxkCBLuxqhjTxkkUxqZNkdlFo4mivYhGS76uh1Im05oIVMLgXLnRkeZ12hxS5OJOIu2Po%2BF6sqye5j2j0ARFrWnKTbwLlUn%2Bo0rm13EUFrjIBMVQ1QUkzzkDj4JG3Y7FBNQXffEccJzJS6p8tFrsZrZ8u%2Fv8FrebqjC6ITZTQdZghMT%2Fg4mGMLWNtCqLstjxDGCUBJMLml97wGOqUBVX1QSBqlvZtv%2B8prOHG93cEh6zAY4gW3A32%2FVEKpNoH%2FFV%2BJ5V2FKxOTpxJNx5zbPoFEHS2gI7Vwf94fsn1tbixr8kwKjWzO5bg%2FL9HupGrOX2g6OnUn2%2B6AgmYTRp%2BsPeSFE%2B4ZGkZ0QceXjISqdy%2Fz1nRfLXrCSuPcsc%2FilrE14ffG%2BMrvWid9DajktoeUwfrYSSNNxxBp1TtJ%2BVrC2JVxw%2BR7&X-Amz-Signature=71a4894032a9166c6caae912ecde6c528a3954d8486f1854ebc538e1d728913b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
