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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTFGIVN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWk6GnZrSbRAnEffOnwe8j2%2BVW4VcNd8R8%2FMCxMPWoQAIgIBscE02127vwxMH8V3%2F5PGPIGL9VF4yuRoxlPZwKL3Aq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDH9Fpm4LW6J54G0v8CrcA2rBhZ3f0lInMz2GocsEFngNPc%2F5SgDS3Zt1ZGpPsu8bTebdDZ%2FMakLDmDnM35%2BrSOKEtYxf2dD536J%2BnqkxEec3f9vC468IzjhumlZZPOkCEdUDH6sZ4SI83XgTM0q5SYzZ2t6J%2FgUNaHvzENz7BEiTKwGIa6fIsqfSwTy%2BYDgHPieVvUtzM6sG1cwy81tgF%2B39QGBN6wREUTzIRUVzut7mK5eTqt%2FVphfSZYf1DTH8m1kXRufsFvfpXFwM7sVV%2B2mqa9hFM%2FXsGMNmSHaL4Krb68dNbutE1kikQylGiVhvlBcDQFPSpDlgTgTGymTuLuEXYtJWnDJ%2B7kXxFMb00qjuGIJPkGjr6ZuHSB%2BJtJqqIU%2B%2BLvsABfGH5QuYma6X63DreWhqvtd3rUl0YohH0BH0HkpyfJAusO5uKoLUWzg2nwIe8RMTBw76BmrlI05VVgiPX8WAUt%2BaJA%2BaWIskuhEx2HBU9OZLQUc4Kmn1xML8HSUwCn5phc%2F%2B74lOxOWmTjDeNeddJqNuyzyVUwZS%2B6l4RlpZ0Kcmft8SxVwidy73dY%2FthZYpWV8wuyJoRmcpWkjOeMURe%2B25RSDbBDazD09Je70yV%2FnBbDw5hLoRUQ7Em3T9qNaiPLDPEuLvMLv6tsIGOqUBGnQE7V%2BGW2mUof612ZKxKqDcZehw8YwSLqJ2EThZRHkUe0z33D1FWgVPH18qPCELLBOOe1BL9ANpY09eewKf9Q%2Fed%2FFCF1hP1%2FrF1j050lu5by%2FG8KxTwI2aSyoleA4z7Aer%2BCmy%2BcS8JvCMZx4zUemLycQn0x2zY%2BKjZFZ3ciqFE46rMD9sUbO383EBusmE%2Fbj6Orr8dzq9K63ZBV4bvHA8m88Z&X-Amz-Signature=3a640a154f1661db859dfe68f3ada3e81e75cfe5231dc5052bdd8ae82ce5b507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
