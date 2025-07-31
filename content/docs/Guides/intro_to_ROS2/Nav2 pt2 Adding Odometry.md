---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=ed0f526a5512f6770322a2bf9a58125cfd0497e3f9db70af56de1ebd5f04a534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=109d1a5ea8a8d266f1c4bd789034d366b819255c1f7b680a1a26eba4ceeda68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=603a636a1b3c5b5aecdba9695a003d64b4647ee762d8f1e5a8a1e9425688dcba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=233fefb1238f4686ca2e2986dd3c00c8259d45a08cb9015b258279df786b1ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=8d08e1f7c385d6b117ef33071e1b02d9dd35505a3c05b143d2c7c1863b7bd9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=b301359cc897883c858735af86978d4afb08f48fd2daf3458ac750effa3110b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=7e9d4fb2d43a995fafc4feb62bee22830bf7429e7b403e6fbf290e6fe4c2c3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=1adaa8782b0a084e0e96e375f1b43ada8d3cb76d3d4dfcbc3dc3eed74de003c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=10890ec9e34035f3101a8c9ad206903195059adf58161c8b08fadb536380af13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ56PG3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd2HCMzYgZoPZXZdIPnvz7KVkpF3%2FFk24oFVq7s1qeowIgZ9ZuSi9l%2BFk8YfE4v99%2Bsd3g30HTqDwATK8VSY6lU6QqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTaafiaSczZv3t35CrcA2s8vFBjOUnE7dRLSk72yQlMSfvkA%2BkzFdhzsIeAPI3LAHfkiuNRUrQqZ1mnVABv%2FO4KXcxgh7G7kqCtG8HSZaqmOIhm3CBr901wd1%2BZfhLRjWa00q9wJAPfrN8AGliI75Q6oWBusZlwswSkRDAl%2BkluEEu57zojm6rRHHz1SE9QHIZYBTdMG2%2BJf6RyoQVu3fHZW4etBJ9plCUfrB5U%2F%2F9TIOGm2fRa2ohD9morzy%2FGtt5h73WfT8DqXDoapGeTCm0%2BlshdpBut%2F8tcXyFo7sD3ldCwG1TmETGB1T7ENIpVC4q5UftHz6%2B2e4zDh6A9NvO67LT97Aj3oAt5tnlmUjGKE05S0hhcUZPibekxd5cLQWralzO7Sdtw1bP0j0nW3bZvTDSzdJSn3IQZtJN0TPtAyiGk%2B1JravV6PITrLSa5zyaoNwBUVAAMD%2FxN0F7KMvYbnakeO0r684PcuH68du4bH1SdpGxy%2FcUsZl9lw%2BFOL3NjV9gYqhdgDzcmAKa%2BC5HRN3ZZLDhz86X2b7rOp1UE3RjPoWygbPGc%2FeKfyQbavPyksusc3V8bH7C82Fvp0npllR%2B%2B5WXWEcna7C1cHpjLalBtJb7pYdEvcK4pH5TSUHFPLXJFlDTe%2B%2Bd%2BMJ%2FGrcQGOqUBXDHwTOBpPo6g8JTwTHBovUwgANhAYqVUA0MYY0xe5JIDU%2BqDeiEx3GGB6cTJO8ScCneimIafTf2Jdoxo2sqhMVmUPJp0ILkyjmexY0dYmAwow1zH5VDNBAWqhsaZRLEdICCVyNqKRt25zyu%2FcJFOR%2B5LhtES1eqHFDvn4qMDe4LM1nWKyh%2FATe3CGb5qCDEy%2FQBvLoplfQT2CfpQjHnpfTmxcQCi&X-Amz-Signature=64c308f9b1cb05ba2f34616dd455e433fc8472392cc42a24516109149d3bc349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXM6FPZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4gaZAr1xl681vXicqgV0K0LF%2FBvwD7PJit3%2Fme8kShAiEAg%2FUuYyg7N9Bs487L0o2EF3STo3uQ4gKkFW5ipK35Sk0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSBo7SVcECWGRMRfircA4q0ztnKjB7y%2BdGBnTAnzXOz%2F1swhjxM6kYYzKh%2BEjN%2FDB5%2FJzr4CJtOkWKcuv4hx4MUOPjsDrszYlQDUal3RCSdE0y8XD3JuUD2AJn%2Fx5YMSXQEEJLwEppd%2FyQPZVIkbFg44G8bErXLao62NhojeAK6K8OQIagc8BPQy4CjHWVmwapT8BHBecAqpaRjN16DGSMcL9U%2B%2FxAsJuXi4aWKxLS0snTvpAKPJl%2BhV%2FiOmoEPi%2BpiI3DzP9xiqIgpufi0io6Ks53CQ05gtT6q7AGkHwouPDwD2itPaVgi1844MGck1l4eytGuz%2FGy7xvKF%2BgDSfaMHW3vm2%2FigODej8IKb6eYBMa3Q8RTq7gLIPOiOrd9Gd5bbM9mEQUoUytEF0SYmcSAR8MQhdd1c608MqhDiFFQdqMYp3oqvo080oSUmrXGFgWIFAXTkQu6CM4z4sUFTrMQUp8iY7qWNyqMCSTFX4o8%2B%2F0Myb64HMsQKINk97WlooyrYetzO1VwRnyu%2BdRfJdyvELnJHcPUc1majzIoXIHOjqR6Ui2T%2FsY4zPFwbgxPMpysfNQuMGGIaOkbmPUm9c1adebZ2fPqAnUhHDaS23VhOvZFQDx2fsHvYm2wJIiXMVSilpg4YSNjGt%2FTMMLFrcQGOqUBtMWONryT2NkQZuNLBb0IlbT4hLdd48xMGHOXie46XWQY8BCBRjoChwxIX4f9OwB4J6ivRz06dRMYbQ9czg3QvfeDAr1W4RvYa7Y0zZRQMP9I9fhYuBual%2BggSb3cYFlmORX8n3rj%2FRfGJOYlhFxBpoE7NTrmo3hD%2F9w0yDoJxTQe0qTKT3s%2BV%2Bf7tMiYIZUbMWdvfEYtQCYuo9v0KCn%2FuABmRFwc&X-Amz-Signature=77ed046924c64ff5f530f368a595561ba2fe070f1271217e2bbcf7d06b56b089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=6d1ef05c814df8adf9018fd51f16353f499e77b272e29d80145097f79976ca03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=58a7b4a0e2f298d26d14b414ff79fd4ffdc945d29d44ebdd6d11e7ce471d09c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=5c96fc012797b1c2a2133eb7a609ab58a92f92f1e433d92cac316bb399b4df7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=07dfa92b17f4e9cce3b9e164784e369f7571346c59360aaadf94bfe04a21bf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=38cba75c2cbe12e19dd56ffd4ded1b0c38310a930e8c4c394f9e98c228c82895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=7b722abd5ee7d4474b9cbecfd1f9f5585451f139d51f0706e7a6a351f3ad8bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=60acec19889a9e83d13e05ba3aae11ec0af0c47e517382ca0f5f3f1f6c99cb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRITJS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrlcMkE9%2B6oNkU71nUKAf1%2F5zzSPSJ60RxNoLqBSuwIQIgO15bnmXHZxkAyvcOYCuXKZFdd3sjtgpC%2BFZPuQSqLQkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJRuX41EozegkyhDyrcA9%2Fq6ExIJAhT%2F6J5qXz3ugfg5Bg6rGQ3zVcJBlft2ZxjVCSUu8p6PHS6aAdcB%2FOzGir1XBeNzC7T%2BwkCLG%2BnDBTR1F2e5qEXQ2XRzFYW9JEWSCMI1ukhmGYkKmELgTcxRuqNLmbG1jx8ZLzJWpCAZRon8TnovJFAL87XdL%2FBQHsL1psshLVgzZlQruy3mZvOMZ7tJ5feV9EwokCLE%2Bpv1U4ymB%2FH5pkw95UvWjvgUSVevXVJ95batcQCmF1rgAUPtCyDEzyk8U2Mx5%2BaKW1gVfNtTofDY2G5N3ieY41OaIDlkM6jFkzfaK0g2YULbQ4DJXCLgMnSpsnHKIkRWhDlZH831Eil0baFZPU8j2P3jg331wJPTusDZPawmxze53AvjC%2BKPCCawjaKYwCBX2fo9wfhGNzh8Biq%2FRiB7p2yDoHnR2qaxvSv4BeTc0dgQd82lQGTwBKswMkJvuSwslu127whY6ghbm4EdSVe%2F2nDOQjGD4kZciAVQYdbnI1jUvjqrBeJHPWIgEKy97QrL%2BsuxAWHPUecVjCqvpNoFQ9pJ0KiqcvbQuyvjT5NdVXAQjabnT%2F6E8Tj1xSln04PCwJ31NBGmuUwGu8BaHhpqkY4%2BIHONDXEmpZGyuOraBkkMOnFrcQGOqUBtJoqnVJi4ZxWLalxDgcw%2BXr1PcVnTMbyYShXE0hQ3E3QucRQDzWChK%2Be2HDAK0y%2BLT%2BYo%2Fo%2Fo95y0ES1Fs4CATIYG9KMS4SgeVY2RVhGti5zmhslSUPZw3ir1izCIVR7XdooZstsmd6iDdNh%2B%2Byuvsjo5f4FB5%2FJmKbZEmJW6zXLyEC%2B%2FJiw6qza9cGf%2B0WAMJbsd%2BKItJKsTxBM%2FXgY72IOK36q&X-Amz-Signature=d0b0424aa2939d8cdd2e0825ee5a20153b4a17f6669d9c198f9ee31de0b71c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
