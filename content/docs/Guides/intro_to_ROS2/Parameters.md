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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLJQVV4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDa6sGD5YarygoS8CbZgj5o%2BEiUyv4NhoZFHMcizJiVGQIgL446NC8Um4R5U7sbFbOFdwBA2uvUdygsZC3BcusEI%2Bgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMYY4R0wTWlqe1VKrircA5E4zGtozQDJgaHEF2WCQoOjs0AihdtdsQi2O2WrFwCizsuIH7AfcVWR0Mc8n%2BZ4Tj6WtXRyK8i1DfffBEhqBtQe%2FSRlheTrb%2FxaEG%2F2VRklI8LaoDPSLLtkl%2Bn0Swd6J95ZCO1lBgHLRT3BFsi%2BC1xnxigfsLb2tXyI3nT2TkO8nVgvbkMgptJ3E33ypkMcBOWqwdysei3BFZ%2FcdKz58uTK1cbZkIJaDEdOjNHKUnDEcUQBWXfPVK85KmlvHoUDiywhDrlb1ihde%2BxV6GqHT2DjDhviD9%2BPvSe4l%2F9vGQWUKybjrtDo%2Fsv%2B%2BvUrH0OkQyDYDPh%2B0ew%2FmAYcPzNQjoTbbdgfCpxXe7hvTV7rl23%2FIdZpaOaZ9GsJU0myuAsQQDY%2Bu36SLcKzZu%2FQePZHMesFFKrFIbhB6kE8ZOusjT7pppi2ZJUXQF2a4%2BDQG2fJUD0ZrYIMrk%2FHr0CgKwCMXVpLKADHfln%2FJAiPBUdgev8je3BOaNsZg4Mb%2Fc%2F9EhWeoSmEpVyvWEkEYuEaZHsY6CujRVd%2B7Sg00ASWoON104UP%2F7IREFNQsR73gHJR54VAE3S%2Fq4%2Fw2bbqOrd5OBHkl40J%2Bg59ae6x%2F6TmxXBZb87HzcPktX%2B3%2FUbJ0GG3MJiKosMGOqUB7AqgNkhgPUhmCEe1UdBtobImK0d3ccx9myCTskxy3nkXRsrS5uHH6hn7LaR9R7Ak0sMFcimF3PE5QAF3ETUxoMOlIgJl%2FsN1s2vv4OyQUCaA9aq70lzRpdBtfBuGIlR5%2BvNwGs4A3oTVjKlTk8zEHG3kuA3KDQmRFlDx6JB9boXaGMa3MlW7NiTJ0th3hlcCze9iZArw3Qg66a6pv6VDjdAhnaWq&X-Amz-Signature=337ef0f6009940d6b7717ea2eb20b12429e36109a371baa200e173b830290d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
