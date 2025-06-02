---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=0f5196a666358f30283aa67bbb9e3b6c187d8e58d99af315ef82a94b01d04881&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=0db2192e4675ae35b0e3564ddec7b558064ab2b67e72677382da913148d59fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=3b650698be95fd64c480c98ddb511507ff7326eef07a6518d8de9982387e10ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=a47dd80821dc957f00e19001e31a8950010bd97acd289e53b512f127f7ce7bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=11e192688fe120727d2eb3980a8572cc2cf6d7b9aa37ce717c957a0a86d92676&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=64514f33bba507cb101e7196a24846a9070e4db95e290d2bb9f7e48cecd4223a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=48315c99af06c9b105908087f2669326c6d33b3d5d3e2fb27116a5ed17a2ec00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRX3YAEN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsbjeCAJbGmupw8%2BXoO5nwjONo%2B0ouNuvipo%2FU3%2FBZcwIhAJAZdSjECb3GIC%2F3amXrxkHYgWbmJo%2F1Dp%2F30L7ggfmuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8uFUm4B0x7evXLAq3AMxjW6itelIB2LeMC3T0OJTR%2BvvoC2Mtlxhgfin9CLjzM8sAN40s0EHbgqGk%2Bog7D1GVgghApEYqO0dfQx0URVF%2FA00DyzAYlJjoHP5xW38oh4KmKG3Nkd909vYg%2FP6F7CC%2F2%2FVx72a4X6OYau3V%2F85OahF5l%2FNfvUB0czdn%2BoBxK1w5GKbPA%2FQ3T0ipPe6WLo55AenaVc%2FTQBNPN2%2BRHEgKuwAzIawaATSTIQB0tvWhH9O2NXiIJPKTJib%2BpMZkvfDPqzSzdrooNpmJDvhrrfpdm69Z4DMBQVuIEk6O%2BUfcz20%2Bl8hPBzLAOVEis2qMFv0ThbtQUN04TLSZXoBi4Yg%2Bttji9t4Wf1m5vV0evnw%2FfWZ6bVi5UD6QBGkndKiZOIlVGASv9ksjT2cLefDKLCX%2F11xWm4YX%2FLiQpzGAsMMETwNjcJ9aQ1vWyebKz1te3a8ocOmDK9Wiur1u%2BuLXf2aKAC5A27KPh8ofoO39uL2mB3OY4YI45LR3g4xphN2jpqoVbadCJO3SbLJ8GvjSBAO3hBOqdh5hkpOETrClx%2BPEBNTEsxEtQD0Xuw%2F%2Ft0yjfPm8MWKo65eqmNojHyTVXsPGyx1zi9I1MIWrgVu2hEj%2FURWl9NbX04dgS%2FgnDD9svfBBjqkAdpGT8rON%2BZyMIyBFeMAtZFESjfPin3BDyoIjHCvaiILuGr0vDfNZ90Ttl%2FNlxtyYAIPwTkW1%2B74QKcgBnFh%2FjTZ4OmAuzBnwLL2%2Fjm%2B3laTvsUET3szKiop%2BuJkldLO67alOrZgTtkIKV0q0Re571EsPAHotT9VZryVwfGrwbv0eVyz39WtrunFsfRkGPloiHG7mx%2BUap%2BZFhOJZoVsWBKMGHUL&X-Amz-Signature=e7b80661bff32c1ca094da51f5a795b702133d2fed7a9525029547188df20bed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
