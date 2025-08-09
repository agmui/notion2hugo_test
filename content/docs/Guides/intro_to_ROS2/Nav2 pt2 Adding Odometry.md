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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=0205a520e2579518e4328f5a48df02d963442eb0f2c734f113b2f5200d11daff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=f0421c595fbfc805eb24c69e95f7ceb0bfb203a036759a2424ae51f52bb75e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=079d13f67300831bda22a039abc581fe8c115ee708927e4c19356f036043c7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=cb47ddde9722ba819541b470ed7d9f0b26cadc88dd202882397f6349b440c6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=f2c1feb00fac16a40bf5a68e9c27ac707f6b0faa3ca2d2206747c6bb4dc2cdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=6e6fb8fb005b62ef84a3cf61460fca02750d3ae1c7074cf67847447c2138da35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=4031d42d1ba2fa6daa03061ab2b847f4879078cafd24c2cc48ded847437c848a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=7a46099fc9b6a8c1b2000f5a4380e7e427185df43632080c1b120d6e2754f324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=a791f3863bf9dc2e971b7291b60e2d215ad53e5d14f55cddb1dc6f97f0344c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ723RM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLAlliIhnPvGt4Avk7kwInEuzaAWJKFW9%2FhXVIgVTLAiEApk0habpSkbpkQyqKlTgQXerLJzAfK%2F60%2F9mx1dph5eYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA1GafwvFFoerwzsircA2ixFfnd2SIypZo8zQnT%2B9PG%2FdYtG9he9mCgIOZDDqgmBOh6JxU0UNy4fLrOF0Cda2n9J5DISQaJrwUKmVs3STBvCORFtlyLLmXNCTkMIHnCCU2LiWyXyRMXZXavDhxoH2ktBwKz0co6NLoHKuEjC6PeirKE3RC8ypalnlpmDFBKWNhYSDg2CX0lQQOcxp2a3J7rd%2B36QMrGu58ViN1qpTDHrliF8VpBPGVZpyj1XsJiOuXMPbBYw42%2BpJYPJTg8sE9Y8Wzpz5QxjEl7RNV%2FWm6nrfHPC1N8fw0XLtVs0m5NmbMQrRBoTFNtxIw%2Fzd0p%2B29IL%2FFhwIi88M05vMQTCLxeMdLYbTyMEY%2BI7D%2FS8N%2F2sK9XGA6iDuO%2BgKmXhcA6LeJImJjvoyEXwplNronVDWvmxtkZGDyU2K8KZDicD%2Fk57Tr0pMFPuWWdfjuigB7RFmBLoKNS%2BRV%2FX1N%2F%2B7KUFxOxjzb41tI%2FN3xHJE5l5HfvgVrlYVEeFqwIGErBTR9oCXIB1w5XmWGF5o6EewC%2B96kcsbIek%2F9ohfZgiJMRh2kDDqt7XVmHc%2FAyjPHIRkrWNElt4TtIQefpQJA1ipzZRaw0wr1ITngWQ3FyWdnqCuu3oGiF4jBhPd6FrpdHMLHr3MQGOqUB%2B4tA3pXzZW7lYFoIGGHWx8%2BBaP2kdQKlgqxBTco%2BkgBTyySqP6R2DqaKQmcExRhvWCvwo2Ml%2FvYlJHn2%2F8MQDzUKDQ5stU4Ykf%2BHY4PYTz20FWu4e7m%2FwnybWJU5pjci7DdJVe5dCyMHF1kIgFMZeL2jT%2BaF9%2F10a09wyGeqnceV2ROuo2wwPm2D2%2FnfdIbbi%2B1VK5xORUcjV37LW9YlBP8jLNpE&X-Amz-Signature=d9236e7210c0a99be1145c63bee3456d2a7f9507367b926b7310d5ca9e4edca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQV246HX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfXt4KhY0TMUQkOHyTsmcUz4UKBvK0KWFoCZKz7MUHQIgAnQzS2CBYQErAidDb8UZYAN1bBwyvu6RLGHUeMrvGGMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILFgGRrdlOnE2nxTircA62mJ5r5WqZo1j0tUfDegt%2FMcFMhJDmZIdfpJcuvRWYzQy%2FI7w%2ByAuaTN3G%2FfnAEVt81Q8cjWTakMD02KaY47MUDHRbfbedTeAiSGT6yHlUS4jWklEzpT3XKP8w2fgOwSpqJUgrsHWvChQsLfBy%2BByw1e%2FAwAcHSMcV16QzZ9alQilNnAnsZkUy1aZwuWN5zV7qQA0G498blZ1dV2XURzCTuY624NZN0hkQ9GUxskd0%2BOrWX2lp4KWBiGx1WsE10e%2FoZJdP9KpSAbor6dUaIiDLefW5XOYLIkpntIbMyWDzjvAChAoJ0p2WXDnt07%2F5r3a5xNkj%2BDyaAMWMitxFj8k6kGnjdw%2BXgIRVWxe5DWm%2BPDx3TdlV5JzGremPYzjp4tfswPoss661Gz5K3G49lDPYue%2BJjY9j7IRegVy0EBI3WDC%2BYnpXKna2pRT7Ma7cwVZk8%2BEkDMdvEXXzR0sho5680NnXDn%2BnQ7bsd%2BgB7yRz12rboOl%2FMpCnft%2F69QiujzqQnSxvxruRA%2FsNMgss3dzYMqp5hzsLTftuuNPqb%2BAC1dVJ%2FS8qSPTIl%2B%2F2KZOGw3JObhmgr4Ie4h18ibFHVMCBwXlATp6Jg2qwepe9iSvWcP4daYvnTp%2BOgFdXdMIDr3MQGOqUBccyObjCZOlMo9Xpb6B9gzc7e4HHE8jV%2FsL0WO4BEFUtwdK28y5t%2FIyP2mEtqm0G8zPkvpfaX0%2Bh9MLA%2FGxqPmd5BRx4fDaS%2FUsVz6stRH6jBjqRYKyLOfLtU4cCnaf2AWkkaEN36hZyOSQ4JD%2BRSViOmxBxzCB%2BB82cQFUzSgaPpbJvWffcOIVSadvzsHeYrQyyfPklY9t%2F5cSvDJ%2FcpE%2F05UgPh&X-Amz-Signature=0ddc265e06166307566506df7e44e0b9480f85d73ce4f2ac7ad74d96434d3f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=51cce0dbb959da2734fbcfbe65977afc9ce782dfd78e8df717f9fdbc7d0cf4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=932d88a8b904e33b88d326281d7e09ddabdc7c639ac9ba4f630d95f9319b2ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=77bff66ba3e459cceea8e0c90c98603f96a5cca67c23164cfaced65e703d776a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=a8a01859fbfdef974c792e4fef4dfe8c44c03b4697295da0b120a3e8426536a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=fe79449cd0a0537e5aefb2b371b3e4e298fbacd05960035f97152bc9c603975f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=fb71d94cf17ae6f2fe2927c91e5fdbabccab673255fdbf2af381d809812157ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=0f0c946adf52b5306e9cc945470735b0b97ca22e8f7cdd4e4306cbcb99c77f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=000ab69381ce2786a2bb5219395811c5b00ebe1ae61cd554ff105fb414e33925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4B7LPC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSdlyHEi7MmtvStru8ap1%2FmJ9NNOsSqj%2Fp%2FMmnlQKDwIgGJM64hxZ%2FlmJuRKQ62iz782GNXb44dxCgRjziPyJyVoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAubmiXw%2FnT1SuB7SrcA4MGaX8zOTg9sgm4YijVo8MQnh%2BwXcXGitnrGQFpbk%2B1k5pATKVbNrJR%2BYq6JPQbrw9kLNwgH3h62nMyYmA%2F2lWKHAL7EDH%2F7CTjRGfPPfNNwC9%2FxcbOO4HJyDSNN0uyMD6sX%2F%2FP9Lppib9jeYCEdR9pebcQUa0XWVv5hvQ%2B76Jc%2BCj69MJmsRY6q%2Bce3UqwOCJXrBSGiqPlJxVJVgtRgFfRaA5VWYe98IGnEReYr%2Bs8r1cU%2Ffv6my6C4b7XXV77iozGnwoSsO4KEy6JaUBmqaAii4iQsizvpnKcZP2LhldckCUSaCN3TUNzWelnFDYz9ST3ES1ZGgZHItWYqWmm8XaqWaD5lmTR8T3KEYiHelAVZVwowYiTxQc5wg87T8APiPLjU3%2BR%2FZd6I3215gCjwtPO5iOawZEA7K57nz2vX0UrJaxlC6goKhtgwbhHbMw3w4qVWCaY0uizvvGsa0IqDIn6%2F4M2QCPfRcMQ2FCnWLMJ5inQHfNYZxNJCy%2FiZ84fGGDBfBYDf9wBktDM8gdzEgiLtYZhW9JPkhZ%2F7XuhXvtqMuyACLvXrHXn%2BCJv%2BThuX%2FUtYZ4%2FKDFgBr8qrkxBEQxpwmYipcgiZA%2FuAI3ZeNZ2u9V0cGBPDJ5FTpjIMLXp3MQGOqUBMElosEDbR2kHuIXVnzRL16IECfM3u5vVfxy3gRY%2FTdSJS3Lk0NhNQrvOzivFO1aqJsaWohm0tE6%2F0foctMQf%2Bk8nghr0s8sv3G6QjPYoX6WhO2XipDhsQaiTVL9eKbxAOTTQGnkY%2Bwmkb5WhbfmbCdmjHdK962q0F1yoBlkpk3D3ou3j%2B3G1EkxeV5cJZS1WgQS35MHq3mVB5y%2BUgEC2vbDkQSw5&X-Amz-Signature=4836ea5b8ea7233688334f652d3972a23c2939de207b14ab721e7785941ebbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
