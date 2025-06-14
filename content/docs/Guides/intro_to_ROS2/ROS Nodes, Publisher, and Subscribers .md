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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=e9f17ac7bfd3f585e1116b13d055585de02ab3fee5cdeb1c1d55fd9c659fa63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=0c8e093b7da173a6e2bb3946aacfb6229891c5562f95853cc8ff08cc9077385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=234e8e295703318b1e74aa1ab5076fa41c1cbe89b7cc08b228cd3811ea7ea7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=7ce7f12d0ae47c452ea56e20e1222601dce70c7e8c8aebbfd31e0e8425f046f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=f4ede79cf732154082416434eecd82a8ea33f067084f2e1846ea4fa399e13b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=77b58aaf8bfdbe0840da97691e78d534a49ddaf65b3a2df79bc3d065ed9921b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=d05cbcc8e8a33140a8c8cebdb8272bbd0fdd7a9df203d9e66f836c0af499abc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLB7U56%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH6uXqr3iSBPwL3tDXDpNkX92YXbFpbhUDgzNmdT%2FcZOAiEAjk1awW1f0KrDmhgD%2FB%2FMckdN6jvTCjrFbcg7vcpnKlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKALPaTkKnDgfzd7NSrcA1cbyzbGtxjnSOh5a7WhycyBrYVsty6hEe2Mr0%2BTEMMN4gfsrNnLUICfygcjGtevTzWKVNLPuuC8dwwWfLlRgchGN5V3hcs6rq30CImdKsfB9NZNIi31yNShXr30rFlX%2BoI8qwKMgIxG3WTnv8X%2B8sIkashpw07onUOUtj%2B5q4Lf8JP8YIFewyl%2BvDDt0AsL4NRibTzITihPaDFpEeHaSiQguSBDQGtuQwq9WMtUWqhw0r8BoJceHRRlQz4PJSdkiKbxSGcsgiklue9UkeZlgxO9wJ6w39hxQeo4Ybf7dno5k15PXXjanoxLBYgoEvJQDz%2BjTgxPRtStZfCUd1nQkJb6EWZ43Po8K8JfX1ZvEq1NKEUlsDx20nMMODEo1KzaKJzEp11fOlmFO6d%2BNDJcY17Apa%2FmK2qpnJHwiEhnNITowUi5XanGBV8MNxnOMA3uvM9g9%2BiLMqAwpR5bFLoqf3EUjFoToCZtaJv64Dy6kW6UsmunvLzVE%2FnQqZNESVv5m4bK0c8cVxrL6YiYuuztjFKx3kTcBdxbBjP5yi0SI8HCgD9QfULvaA%2F7gFoe3G2u8pKGIFboUjEL%2FQ6mwddVEOdx3n9bp%2F1g1SFXYGFeO0N753fF1Lhxe2x4J4RuMPK9s8IGOqUBrEXcou%2B%2FuApGPAXysjuoJ2u2YPTdaiafyP5n7WfxLYDj%2F6A3U6GkzjAvuPwKQihWTfMA7RsM9muU%2F1iq6OdxnqpbrZgRvepQBBDt2YnCwFXfl9rbar23oB7HUncJQ%2FgDDBDtMk2ZDb0Yps3B%2B2dulGxb2ILEX0WniGILJUGkCFJW5olWsGCBvPY3U%2BHl8sdNNP0AdPntAkhGGMQhUKHEchkFQ4Fd&X-Amz-Signature=121abf9b9466aae5f4be33a2a33776041958fbac8527b52db383fa622cfab5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
