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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STPBMXC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICk%2Bv33Z%2Fx7S%2BMTcDd5ocXs3KYnkN0OkWWGGK2lu%2Bwp9AiEAlMPBYGwtx9tNn2wdzI1W4WtXU6MjTMTP8qDd6%2F0URIUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKtl%2FXqhMslGMp0%2BIircA9I1vnQ6J7sy9X1YBx2FQcZG9btUoN%2FZcrTWbFeSD5pbCRiVodFMrky9vD%2BBoC4dykEaudhPIltvYokhQ6FYL2CBogYfWvM%2BzCTvjSGAKWt9JutU7KOu5AHMTAcw67yycWUglp21Yz%2FxJE0Ziq6mjWIvn91wrXaNS1VWfWJVrxOD6QdGxI39mrg3mKYNsloniR9l8Im8a83Gbu4Du66T2M%2FfSDUKnp5MuvzibOOprXF01TAVS0MUVo1u%2FxvXMS7l6o1EZovb1Q866qUXwV423OL136dL4dEFw5un8IsLB05yVJk4e3JTPU1RvnYj93X1JEdWUkYIcVFZRHkRFE3LkqbS3qdBuAXLTvf6NgTB0PeB4TBmj2MJI3rNt186j3uctYCEAgTaEIMNx7s%2FyXG6cLFsZlxoYVtrYNMSMNQMpAx34uT8p5KPYVHMnZuJAhJgsDQYBA7SbpEsw%2BeYoirMtxcjUV%2BSBK9D72IcnR6gwbNFd45gwtZiLV4vo8xpChs3hL6LT9ABhcST6TOCrjl%2Bi3NeqChlewlblL9uLbXrOrnmWc9TaFBWb1oCY%2BGhz54E9K6sajXT6VVmTs8W14F2LoCH9Agqg5EANAA9dwgEqM9EL6Pnht%2BILvuR0dx5MIXe7cIGOqUBmhx%2Biek8QimsPmUypE3nqb%2BBpUV6nEjji9MBHMuiOH8tB55iRQWHJkExhTmMFdmwS%2Fnd9J0MgUAbZBKcQPRyw3voRoY4wja6Z5d2paqG00b4KKnhdNPlOTCTKbaqwwkubO%2BtDwaf5kSdnWavp%2FcbhKD379NHfMGZ3RYjMYbwGv05UlAdZQElzxFmoFDNnri6TbQvijXhi0XdVrQtPPhNTPEb%2By2E&X-Amz-Signature=00e90db52a6c9fc6bf138592e6ba5a3a694ed7f7b470aca124b97e8706bad59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
