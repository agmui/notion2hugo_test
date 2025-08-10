---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=9bd365aec46f59cb26e789f37c3e585cdb5df8f880879d72d2f4fbbc61bf5aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=55b8f0d183919d3e7b7356260eb99a72a8264765c5792117af5e18b5e92b8ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=9d56b0c91c8deab030db17f5e41613b42a6aa01a2fa9735f13c0ae764ee94530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=bf7c656f3de3db3addc4bd856936e447e839de461101ea37bcef3f070cd8d0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=6d204a4c718d937191b250a93f7a8910acc4e2cbcae1c494c3eaa396460d0aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=698996c6c288a6da90e30b8437fbf3f2942bafb669b4de3eedfea4421ca1c392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=cf3331381ed4687e9b7764bddc3a9b741b51ad250809ac4ce8ef2ae23f6330cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=3eac38e5428952c8a07144239825f311f4dec94b1617ed9a14f62c0c77a0925a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=db533f48a66cf8b8bb49a75d360abd131a06c0965abd4b275bead3641fa30b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2RGVXE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwucD%2BbWfKxgq7YVkOLpoXnVqErSvtqQjS0Byj0jaK0AIgLTqd4ZucGXffxyJHIR3SMoDR%2Bk%2Fddj6w7aT2umxrCboqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAuwN5KovyVfef5NyrcA3cDlG7cvgCGrl4QAtJRpYpEu5odkKTyLX2KKbtvIMgQVDdDSKSu3H9Ix1xy%2BKnUAP1ew8E1xLl28kz38%2BUlcxZGuxtys2xr7T9rDEnPPsiiLlc3751MkVKwoufxONj%2FEn8tneStqkxqiOyOfxLsuELDJaeJDrkIqosE5JLWIbpyPw%2F%2B8ZLU1efuw7Jfj1DsEMsi7Iq79iRGDaLCkD6Ac6Uz29Zah378luTFpmtQ8v%2Fk1JUj0B8zPG95KtYnuFx5%2FXZ4TG6Ml2pOCkzx3Co1YBf0wzuto0YwxBtWngE3wG84jdiYber7LKy6pAB3hujX0gEBdOB5R1Iqf1lAq5uYozt41pGmAkqEf%2F6LL%2FsIYmAfK2UHkd3bDZpd6DTr%2BC%2FJk5OiWEJyBcEVxQsc0Xfu7BiyLFCVPXV5QaW%2F2NC5JTDUafmH2PmfT%2BMgy%2FZX%2BABVtdNeLOC3Io8cD8G4%2Bg2kbH2CpqhebJ%2B2l2sfyyAs7AzOwUvEtSMZ4k1huDaltC6FvlAtIbkc8xg0uhQVczwrCsm3ENch7Ncz0XNFV4olDivyvf6dTpTaSSqjk6NcM0HO%2BE00sl8kNwmHgcbdL%2B%2FtmSsH0jjElusl8ePI%2FesmiyBOWs8ArlRtip53JmGJMMe648QGOqUBX3LKZCKJPnHrRP9yjhFWQ2seQhcRYJuNhwjRQ5QJ8EO0T0aQiVtQR4wEgkLPPjeoq%2BZ6jhNzS9ZVnRIianKVqUxBlnxE6dg7yTTVTl%2FFJRlFJj1ILIIaBxnm864GZhRqjrqAYJF%2FcdgYdTCrp4RHfC7T%2F2Vbv6MYmh%2BXgfzA554GyBWHZcxRbRgxGkh5gUF7doIadH5PAs%2Bb7mk%2FIbeGZv7E%2BklX&X-Amz-Signature=ad634591cf4a27ba37aeffd634bdfb9b9419c2665ed5c2f72bcebb91627898ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYM5QYE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8WZJ2S2F6%2B93qqdGm1gK3AHtItsPA4j2JCPDXCNcnTwIgPv8vMMplFa6nRNXGb7pAxdpPPyfhKxvsOex1teyySycqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi7xMqprfyfocwY3ircA20RH%2F0hdBj79ocf2GTl40CFQv9isZG86%2B%2FF34Ml0uG96ICbLxIJwp6Shutb4c64zRMhBGnyL1sTjoaRJjXXhkwXUz1Psy6%2BhAFkrKIxs5MIRroyhb%2Fc%2BKj%2FoJzE2wcr1cTfhLv3hSVBBiZTp4%2BMpLLxg4jVac%2Brb4Px441rr9LiK8R3NyCVOjWGrNUwviaMbNgq9kmPx%2FBENnaTLHomrfV1hrX5qzWO5TQ2zSFsPuMQunkvHgOjg4udHSoConrRh1RMRd9il1GC%2F6YD6B6Lvo6PvEEhmiBujy%2Bp9QVHTjUt3PPCfsXp1q3TO46bM5N4t9tXNoRdSF7Uj8TnIn21rTywlhT3z91TUv4rRafcLbpUQchZAjpr9YtWgWUljnStOoZXmcVOmXopWvKe5QrT%2BQ%2FUKDOG1mcqj235Pe4QJxq5OTEQxWphjnTBXRSGY2Iw7GGXEaAe4cIbtr7BsiMZWL2l%2B4jScmhHQrwvMmkO4E%2FbZ3JEjYbVJE7%2FqaBqch0jXyalNlrtf3IwKWo5%2BQx%2FWDgexI8YpaTtMuAaUwdjS7n%2BSHI6Jc1qbm9URkGEM5MHiegtwbTk%2BxPXyWLVdHPTunb6AWWEc0xD6vIHfDl%2F7qiBO%2B6Oz2LJBOZLA4PfMMa648QGOqUBZ5OkDHOM%2FGHT4XH6PFQsNHRi0U8Y6rp5T13Gs%2FaQtWmQLrtpE%2B6%2BqywG682hse%2BQj9N4uxhX5Hvx7me3Asi2wEHnSclD%2BvKuRCw7rrX5On8uc%2FYmBFOjiDIhyKO7hDZJUpja%2BTCnevgn2yai%2BNWsvledzcTv5txgafhaJeqrnBL3I2splH6Z2xN%2Fk5xzCKbeceYJd0rw7ZgKaclUVqkYYk76aHqp&X-Amz-Signature=3695f4304c73420fa01003a486b0279d4c8b5cafa84bf8541ff0d4acf4f55d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=4002841318bc67044433b2c3166021dbce0a732bcdb0c748fe486042bd8dcc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=1720d13aee067a23122dfa4208da9f4ffde849eb08e8e51b3e5d87334bfff728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=1ee7ff6777e2a0508f52158e7ee0eeb17fb4599e6835cbae41ddc6ee99ca0c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=e524816047ab11ab0a92726c4ca46d24d6d23e43d3a5410be45bc04cea877dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=f773209630a191d339fb7f3d4ee29eef91c1e750cedff4ea23fa355225f49a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=90a9c3640108761f5ef993c2a429e502a297ef360c8f64d503b68470a23520ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=eb5335757b8033e28b52069e2117ba15c30b9148759eab1b218356003fb1b376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=5575d0d54a426393e30c008ef6748222ad1069a6b0457aea3ded91df70a3ac1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXVGXP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasHlWmn3vA3L%2FWvzwKdniQgDv4E4Q0dAe5AlO1gHIMAIhALP0k%2Bngr97kU8vk3aBqkVZib3CL2EBgsF6gDiHDxkLwKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOwiT9tYm1ZxmXMIq3AM%2F31TNUuBKU3cpR4XYes9LN1c2nnn08ZJUDxpg76B4%2Bkj9zCsqzI%2BdSZDXR1hYQV5wWkRq1fXxJWitLv%2F4Fz6Vvg%2B1KvYP5LXyGs6W4cxLo9hHUKW5dGJr4SZa8rRxhIuF75gf2aMPHP3DidgLChyvnXpFQLkYyLsaLaLTdoyvh91pdFHYsi2aYTOp7WAP76WLIA7mv1i6AFVj6OGhP253FnYnzvbBfzbRQxmaamAyaIOv1iM9jPdeHTKjdzt6J%2Fs%2FXEQSq0uTE4GG1XYfFxHVQ5riMGR2Bof3YsxmwjO%2Fwk3mKpF3C70LPnKDySfboriPAqVihJumKx%2BA7WX2ACjy9Tv6iZ8NNjWxPFjgecdBpUgwcBjWYpMmOP5XRbCJQKv%2FnVpqw2k1Lpr7dGDPsKC6obpZN%2BAtKsymoEXGR57vj%2BwtNB5DnJipWzGUp8VDRl9gdCE0fAaVT%2Frso0bXhOncx7R3z9O91cyE%2FGmV4p7kx66V8cgZ3WE6ZG1KQgYg2Iu4Q7V5ax8P659XtinabSPhYoaUCWKv5NHHbtuUZRQYzZcCXDpd0q7qfPtGs2zl1VFJyZMFKHoI6DrShmo1jz9LcGLbzNG%2F%2BzsLpKX4BQ8U86En3OMorDJ4UxyQBzCNu%2BPEBjqkAfNS4DAuuqHxYytRfxu7hKM8qlu6qJ7Fma%2FyzZCePl9vHAj%2F9fJs66F6X6TmtjLkccqQoDQ7PX12hCHrMY4T%2B3pihJBb4j%2Fe1UcYWOQyZbY5zvVc5VIXmH9g4rLdhtdfpFzBXhYZtlmspkzOmg5v4Wis2nXuncGbNRz7t1RiaqXjqF%2BOpGAP3kzQAuIkcegKV%2BLMdmZQdoSS1%2BTo3RFJ6eD5LN%2BL&X-Amz-Signature=874f579c8ad163fee4733047383fa98404bcc43d75b9964b0a91842259909550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
