---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=50686325f1a045c02cd39a02b6022f562526cda9d35bee12a9d5676e1c3844ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=e4aaa3658fe525a2f8078a71fb8b4e8f9f2e4fe5fcffc786f0475418c8069df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=85338a26e569fec2714745a1b35b4fcdea51cea6294a145321ee6156b35730d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=f9e463499ac7d67b7db0028727d1933d61c2e98677196ba864008d1214c104d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=4c3fb07555d47c5b991ffff0d70bb8319a4e16018d5b9d3fbe31b90057b0a6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=acb319da8317aac63f1b2f68ecb68a2f3faa503c331a492f7b46152d35bbdfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=02b6ec6339db8aabbd2d9a280cc75c037476acd6e3b26a0f394cc5ab16017f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=27cd36a7d17d3d4ed83c04a5655163ef844cee5a3ccd7c236f5eca2ed5885363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=638ab9ed693d2a121026bb272b4224996d65022b13dfa96fd869b39002241a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=c19af6cfd1384bc56afd2d95d7db4d3b37a4922ee98a14a4f73c02286f8ab54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGM4OXA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkz40gbknAD%2BYIQ7FqJC2OIm9jSohqlz8n9wVX2yIo%2BAIgMGcOO7Yjziy8l4C1B7BJGqRr2TNjzdcuUEk98mlSoVUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBuL9GftRznX7DEpRyrcA061If5U70VyLV%2BDerpWmqyrWxuYq3ABihHM6G3Nfm%2BN8FarMe276c3kCkdGOnoflzohZJshjnAK2OxYDzpMs2wVxJvGs6SSsGVTLGH62DgCZi99Fo%2FpwyHgULWEF7mTx5MT%2B55F%2BmNFJXTBvgyArSSEV5UupOP0PsegAfBRRreorGxDtFellUuOu7TM%2BEcsv%2BshvQ%2Bt7H1JqcfFT8Kp8TSk94PkuAfHwwQQBV4XmXkLGWrXykdveGwkUOuSNgMpvJQUfBZK10I8J6Ur5H0tjxrMaCNL88QT1A8nLKUqUmuDdFEpt4GfJW%2BOVKphMzhPBxBHVzxhj7N7%2Bh7HwT7nT6PhD0aDtQOCFVghTojMCt2pp6pMDf53pXX%2B74Uoy5ZRXA962y0wN2wEG36%2BaQ2IXU5Hw9EkLJ3h1B9TND%2BBlmm7bRHLWY6Y0LKTSvfsbQT8l5jb6wCvfhNN8fS1OB%2B%2FqOxDL%2FZAckMSiaIosu89HNBrmNCgAfbS0jygyT4Ok7XmTe6QEsYaGMxJ3134tOed%2B98MGCVyI7uufT3wtITAw%2FZgqTmFPVW3j4WkckJDI0%2Fl%2BxkVi%2BWRrCw51He90lgizL3rgKumfxfbdXtNEtbMcVRWL0wa21dcP%2FGHyOr0MMKAusQGOqUB%2BZ0U7%2FH67oq%2Fv%2FNnp846MQjDkRdruSygik2cU1eAfPZx6wVbeW9uEYcP%2BN2F983xdz8sOLOpIb0467WqgJcewGFYIK4TP41fxvNm%2FrLQ45HKOUYIfnqcTRBd5D4JMLtEe8uk2RTJfFIjdf6Ku99cnGvHro3ruyhIgzf6u9heuaEBn3rTajulGWwjl6k5jz4Zr5iSGRATdbCbS3fFVqqq8HN5GCL0&X-Amz-Signature=3d67ff955599d4ddc90061433c0414d390fcfe298dc3f4a731188c88a3e41c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3WWWMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2dtOxJ6SrTipXNPndnCNXZuivMCEfxHGrOuWGNMJrdAiB9KvmoPGtiB19M6muZGwcsDF9V%2BihSuq%2FDrxrtbXtlRCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQqaxrvBiDllKx1wwKtwDdNVUIyhUnNdNr4c8J7TCmXthnPCGPFwvNrQ%2BH2ViWLkUpKvYa10pIBHUsfdlGEvsubLXdynq10n8cTuKrH0S0f%2FfxBmpi5OmJrWXkeedi1bFB1Ww1nLC3in9SsZIXAFU0GbTZsCtbdyCyjYn1N%2FSdR7pJQupEJbMFDg7pa9%2F9Gw%2BGS2DcaD%2BbK%2Fc7dILqQCzCZ%2FZ8c7BQ5PrrkEcTVXMgPTbohbR%2BHRfuAXSBPw5LAGm%2FtkdhpPAbVyTL4BcFewrO1c54J3BZrmxMtbbLciGvoDvxTvhEhkVLxZ0jNoIEnwcj%2BRqRFzjHHD%2Fd04rX%2FqFpPXVr4AD6oT0CDUE6gESCDQymXLLnSWER49cXhurywNYxqDu2TBmP4igmFnJTP56%2F7rcF%2BxEBZlrH%2BabO%2BTLW9eG3XagVlAVZUmzgxoOhFW3ldsyGssw8AoQCxovHIcAUXXbN1nCHYAnGykbhugwkHZvl5u6NRwECsbLxnyc%2BWxcVEM4pDS6lXhNeWJYbITnOj9FE5D6zrIhMxCpz8YgeGL10YcHke6sNQK0eFWIUrbiw%2FxjUgx%2B7I2OIpP1mDoGxZLOyvzPCZu75%2Fz3WOWRJNBWZL8J128bL82MbHLO8Vf5coyYVfUPXNePHwYwioG6xAY6pgEP1C4pY7kT6jGsnZXs3%2F3Nh685qrP7cty5zeLcamZV95gc7VQLLu6x%2F9VpqHx%2F4ocZjcO%2FacW3Q0skM6uzzQ%2FPDmEQFnHN%2BNelraXMwYk5BMGhkmwOCPJBSc6ZoUJ1YQYGGinEoLliCt26c%2FVUGmv1CrBjF5lYKKilOTExbQt%2FEyBYXRFIzPMarw0%2F%2FCeqRalgcIxg2odTpMs%2FQhMsrPhAQtdiqgoY&X-Amz-Signature=2622e2737d4a3cf1d31440aca44a26d2f66290d52ec35a4793c158efefd8f849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=b0c9850e0d56f1bf8a0515a33b19ee9dc3cf94ea78392eb42109160bb8020acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=8110945cf6065a04ff901bdfac1feace352157e6c25720f27667556a7686d1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=2f2c6855f8f8d5dbf6a5771cf3941b867efac3e32e2a606213ee7b68a765431c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=e374b213f09208c4d25cea6ef35087d8de5a00c0bd9c800a9abe21720567cb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=cc424981638476d1abf954edce8460d682a60aa71aff7cc7ce14c8d3919798e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=44368abd2a716678711dada6ba916f1f442deb6893f85fea53cf33729f1a281c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=4bd54d801210790cee18de49daff406a1d19bab325ce79c4eba95f8489ee00f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWDOV63%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBauuY41IBbaZt8N6T7ukrQLmMt4AH5uNuTTA9dlEmp0AiABdLlA9tKiIbvvCvzuTgRcFzk1wAotWIVPN7qqWpPkcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwiSUEAhA3YrKLQWKtwDttddwMJi1sQLw%2BMv5I6K4PdRxyjnFHQKbiPh0LOYbTsSWdPZqWP8fcJJnXTiZo0sKNOjXmdJt1zK5qctRPyVmvTJzjaKyRBJ%2BPmHYkrGxaXSNwsGJexwiSK4zP8lUgHlphv8pErCtVq20g4Hfr0E3XCP7RA7%2FidGpYhEFAVjnI0vg8UdvsAJVl%2BKYrUp%2F1BzvnPubZAo3IsEDSDuSG22buJIb5zMZlZuwxnaAcPJbrH4OUUEmF8FmTRCdsWMtJXaFuT106ihcLeU04EbTLeDx8ZEsZETxBino9FnHIaAeV5LSgDjZzg0BAobzz8R1E4xZM3%2FgX4zIUqVjbOxGbloXl%2Fp79f%2FLd3ADuc8HAF10NedSa5m8fklREARGjR36UxsxWTXH2kZLP53dy5TsEOxwx%2B5fauz5MV6bjvyecvsthGhBobQxmw3GeVr4E0BSCGUkRLQyrd0bKFulw%2BiIAZVZonGFNc01r8hUvUekfWOSdyolzxX8vH0TLt%2FHID%2B2Lx3VJnoX5WDGW2BcmFRosM2sYXVL%2B0f4AIO2%2FSCjxFVUH31OcRWu0Oar%2BLE7Ub6KCFlZJ1IZaAFp%2FkLxh724pMzUWN8PNfl9mz1ApUqKpRO0vlFSJ7%2FtTy6PYjp%2Bn4w4YC6xAY6pgHNR1%2FaB%2FSAJbFBcmoYTpY2S5K1%2FRm5GTzDpFKTq%2B2a7RCcEuhIMEf1ubdEKwYl2YvjBMTX7wjHfylUTSL9re494%2Fy9GiHboAAsT9l8cve%2B4ov7lTstasNDztIFlRRcrbBuV%2BaxQxJWIpjcvIXW%2F1bxw%2FgyvUguQ%2FdilI0kTQ%2Bi0ylMZMpgNusLeff8VD69R13vPE%2BLh4bxh6uHhF7AMpCoYYMN7F4J&X-Amz-Signature=90e2f0c597d0906b9fba59345bfb2ce5610821cbb1566f1223974e12a4d76ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
