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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=d2a184f1fcd4292098845911bac13565b32788d3c5c76f4365f32bb5225b5020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=cfd339248174c6bd30871c00b0d1245442d72323b6001cf790bda7152420512e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=8b1738e8305cee70f0179aa70d202a6a31d7757a9985df3e6e4e3e42efbf9d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=c4357180f57b0fd94e01ab4aa53241a59f4c1ac91a2dd7e6678215073f435856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=2c7666981736e88cb42c0cd78c59f8d905e13f44c805897a2e51878d2f2be200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=c82e91344981974d6ad3b2c85d91c31180f4e21902e0fc16658471cd3ae7dab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=814e6d07a2de005aa0b1a1bc8228b71cf6557423eda86090227a8a0cd4b239bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=5b41384682654eac67ddf92772b85ec5f59732d83c92a6b3a93a82c505c8caee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=b81985ea3f2f707c81553f8fc49284d9443640fe26f0da996a55c8ae8c51f0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUHUZVC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNu328h%2BS1dT%2BCd61CS20NfNC3V6vwQ%2BQTxPfKzeTJTAIgD9sh2BEF2MVIQ2EZdCW6SSMwTxZjca2Ny%2FQzXkWnj7oqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOdYgHH2l3sVb0c0yrcA9KHE3uns%2FZcPSZ0HzBrtl5ebc99LiGO%2BVAyhvkXbHuCOJ%2BSagDkxO1ah9wiyY%2BMxLb2opyEtu6OvCQRR7qrvnfq61i1aL%2BR93A%2F6a7LBIdRgotPSSXvIGZXentg0myMX8A4XTzau17kveiNJdevZdLLpYyPPDvRZgpmjs4vb%2BjJD4yfaj8jEj4kpk5Pho730kmzt6hapil3xxEX5v48SAZDQ%2BIVElWdu%2Bzy9hxhhfY%2B04ZHz8Lpk7CMl7F%2BwpqnxbnW%2FZodnt3Jjd9UKM8xnfU%2B0jjjtl%2B95%2FZkYMCJiHZ17v%2F2gGpOrk5oj3jhPJ4dQi3aiVJBaKpnN68Udk%2FkLYbsnlz8L6P7GXXaqZ301nbEN%2Fx46a7Owv2c6wZUH%2FSWk%2BWdRH4jd43YotVSL7aXd9tuocWqyF%2BO%2B49uVRfzXq9hL9LOJVB58AXw%2BrLYVx3t01tu8SSye5iIk2QvD1TWBUOdBstR%2FfdJ%2Fb6KPggh1hST3duCkLRnXSH%2BPhW4CEFDMnDy5UPEIEgMt1OlMO7%2Ftq%2BZ%2BHnUJGDEzT%2BHQ%2Fh%2BbZHgV6wO%2BY1K0i9OJvBJxox30lDs18A%2FXmWvxflTVigHNO%2B48dcb9jdjfDMMO8Cn3bOIlCVrFYLLjys9tQ8bMLqj58QGOqUBOz7ZaauN%2BLnfsSYc72SkW4qySwPcfokhyZE%2BJ74wb%2BVx9VRvCa8AYIMEUAoGfJUenmA22dNj5Hb9VIfALvl7KGlyL4laE9IJXgMNQSjUgRoE325%2FEklxxBiKcDdQ4HjLivvVHwRmfpdnIvqyNvqaZ9w0RRCbWZCk8zcTnJNGkallNmUypC8HcbJuhj0mKqQpy5gbc4lUinWJz6a5FwBhFb7SNsfn&X-Amz-Signature=d8ff336386dfece7a6076714f2803f926da4b9793c93ec90f1784d4bac7b6beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRK6XUQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwqJirspkCJJdEaLPof9YKic47UXgHTBNagfyzlGs2LAiBxsp6WdHVcz5chpgpquHCsNdObPLZEOodzaIP%2BQIDfqiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rUoHgamWga9t32LKtwDyiZoTz4i1KF6FCm2Sgi5hXuKKu0U9197AARj%2BlfdeJdgLNe71lvtKWuflh%2B27AwkJC0w8Y8LowARvBvqNExI4Hpu8unIAKaq%2B975LFftBII8LWwxL%2FOugtsyofOt%2BR8zKRzwMEiega354VjzNCAtlia06l%2BHcs5n6IWMAjX%2By0cBwcwOQKSm%2B0Quneu6EZ5V3MMde9cCnt8f00Oi7PUPMmQtbI%2FcmmGBVjCQ8zZtAgRzMakDWDVBvGTkQ2k2Fir6zc6BJOnVjBppE%2FmJJgkWcGKzIKw5hNQbQbMGWa7s5wGqPMYXsE1OQoxE87zS7dIhwa0fY%2FNxnIMFHrE5Nvqf1XCzNoJ9By0YHmqVx4aoGUr9fmDyoW0gPrqLroI8lKSZcWoT6Ee5d5CTVhkK4MhTmp4%2BZkA7Rdj8FEgUz%2FdAywO3LL2VnlI0OyoL50DV8mPOALJzF71rykorXnXlTUl72HpptjXWrDmxafvursF0yPNDbGw15WFCrqDZYJtwixI3QI%2F%2BqpWo9Zr40bFjAHToVnokFG5wCSmVfZxIrhzUMRCY2E109Hm42j3yp1BgdO%2F24NZsKTct%2B8K6k7ZeLW6Ne72VJah0QnVzOq6mhUQBsV2%2FjLTwUlrrtyC9GPUwyaPnxAY6pgF27yYO2L3E5Dl52kVbmCCB0qeiY2TgNUth0JgFLOYq%2F01kiZUjSErMqpjUZVOT9vhHgHUx5G9OI%2F8nr4NA9Na7gGXIw%2F7BYV97ZgjNVggQHDW9z0Jg5sgfIN1MW6IIgC3Vp5u9Xo6XZGAS6BtVP5f2Ihl2qphEVA0tXEmzb7Kaol0Ssaajy%2FSX2RrVo7s%2FjPd5TKRxJuc%2BC0%2BrNizyK2Nq216igVje&X-Amz-Signature=1099642b239509351b69499c0d2270760aeb6a0f580e07bc2f994740e642db32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=f296101a501d05f281c75ba95584a7bffe5ded246099f7514ed665d197d31bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=c6b0fa120766817ed946267b3b13854b3a471e9476775f7c7323525edf85f8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=8d7f0639fa1aa2d9bff9779813cbf243da4e2f209cecc05f22ad0b71d69ef7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=10819789dd64f7744fc16e3e01a5458b76b602730949924a66ea95407e4d7a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=ed45a2cfa67d4a3704cdf5dd142ad06e82343efb8700492a8871cad611449bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=976be006d7da198280d3046dc200c59376b2da4ccbc94acf844f7f05a0b0fccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=2dcef47b57241bdf2360f80d81f10dd12f7a68bad2812d159024efb6b819537c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=ad1f03c8c62826487509ea91fe1b907db03418cab14f97adbcda58aa9685a606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNTNRE3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYuoitJzF8YTFaJERts4kcbFyTVBzsJqE3zXFYRVflAiA9%2FyJGD4cdKPAoCbQMSLx%2BUx543amNNQ5RvrBzY1hQjyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FggVXTlliTJYVsjmKtwD8%2BROejKr347Q07iRAZMQcB9aS%2BUHmytlAsd6%2BlA2Gw6R%2FVu9Yel6PX4rvNtu%2F9pp%2BDByx1r3i3KwpFJZ18Mbsty8sgeOZ0Mg8c3UaPG1C0EP9V8%2F%2F46sdR35O565FwvuL2wmELftSsVAsHit2d4c1mytHXG3KbRX4i0YUvY%2FOa4pYYd6PqeuW5%2B1fr4pAoin10pEepEuOvzunPgvsRhsNarje%2BjddiHIiUs2Nchq6QAX6Ut3r43KN4etnsHiBgmwLJNY9BxCivliLGsngiHdekCad2GsipN1RKL9CmvLOI6ZPV0a5neuLJfVYcMK96z40bUZ%2FiF9lPllW2wRrH4WVqTHu87G3M5oHFbE4o%2BGDDDk%2BpmpR9UDyIpufVFXK2fftCvh7F%2BkhHnb5f2T5zhzD0LnKVU%2BWE3%2Bgv0g5jCmEzOcYk7MkQKt%2B%2FHa2PizPqFNE706hhD2L63cPJIBGzri%2B3HmWJsuYv5Ynbar4VJw8xnus7DaIlob8eLT3Vu0B12Mn%2FL%2B%2F%2BHXglNkVGPuOHGYLxOrM41Aar0EsnYYOptuUA1SOKg1Wg6lFN3o%2BJvymuHDsMAwYaha4jsg1qiQcIx8LlA1sEE03ZlohjKPpqTBWZN9aESvarDdfsg6UrEwvaLnxAY6pgH%2BSBQusQCytQdsNMwvKG61t7h%2B0t9qkHOC2XVcaI%2FEl3TZ4Ld84OIYfVDqH5Fx5%2BPsCwewkCxqhq0G1dme8KqhangiLcGX2FneHmZdbsNnsAUmDWmGfHjI3ZWxZ%2BDCRb3bcqEzbKHCvK3Z%2BCJvL5S27MIV%2F9BpgdQ0zBeDUrjrTqMiKC%2F%2F98cAZRKhSCq7Y0%2BKm5EHW3hChWkmYO8vUiC0feWxnXCw&X-Amz-Signature=6c59110c92193fbfa99672bb16cae63f39e953ceb9b65956129abd570c4495d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
