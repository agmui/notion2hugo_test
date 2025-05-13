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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=208e3de4780a026860ba0d2108c7ca26a0bd2cffd31f073ab415e9f377baad85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=71a67fc5349efc8a108e02fbb7bd4369c850f0bf2ba9393a8f25fe60e9e0ce75&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=09a1fe66ed040b7646797d60ad5ad859459721afe34d6db84e1c425d5dcc6388&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=22c2be1c524cc210285faa826bcdc27b3ebc9bec952301cfab40b84afc6445c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=6a09a2cc03a4bde9d7ab33be02b2c064b46cacfb92079c62b25279bb8f916b07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=1f09b466b5966d661ea7e2a73c4645d665dfbed77fe425fc4022d2e62d09e4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=9309da47d11c8baf2594e6e5d00bb82c933384625f6ce090750c15b103ab6bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZL47LZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCf%2BvgLSR2GITIb%2B6AHDvM3RTYwFUm33Kiv51Q2m6mUDgIgUB9WIOHEvymxdBeDmmxlcgoHkJNqfVV6EJ%2FJhsKoLHQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVf5fiFrHct%2FgQOsyrcAzlRrkVQLGSTN2PpDFgpuwpT3u1tqRkwyB2F0pPWl8Ue1O%2FTyPhUsmLcMRl1qtYipqmeNX4j%2FfOcXX7FlbMlkpvMh0cuFWvKlAzTAaEK5UwjKN0yDWxZ03hLgHCjBgKJUOgN%2BYVRNulKyAUcxVhlwOLkp9%2FokmyUAI0WftVPT%2FEloM0pvtzyNQuwxXZw5vBTC%2BB9S5m8O9nP5Zt54w8o6g2zkZ0SeSDE2NngjNfpbp9RqDbdvvkp5FVL2RS6CwZpungdgmKCbB3K8J4sZ5EkHkA9p%2FWPIGMt8kdR23M1Iz9tQxlZacYZKhADvFMmA7ku6mB%2FwE3Cuzwk9wm91PATH8Aup5LcbkLTMMNzqttCs6oPuH50qBFtpqJu1iJ9uPOvOp%2FKK5GvgG9NrCzn%2F95Ni%2Bg0SOUJFHd8CAZzF6jXS3yr0k9DFXexlAbC1CA2VNeHGBYAmf%2BaJJHcDSlObZvlL2RMnXuriwEXr%2FgHK2%2Ba9DZtMumBLx6F19whpYvuAolwZ0oafuuuXMzhOL08XvUU5S7EFr7s4bJEW3Tuj%2Bssb82EIAiPKAySBr2DhtJxdBcZZ2GujlTH16KhEoqHpODWIYWsRHnFMXe9l3bh03Tm3Bp6UFrv%2BT8cV0zpXQH5MK2Pi8EGOqUBtJu5UJB23YMH2TjsH%2BI9mMsC4ot%2FoOmmQ8NKatr%2BRjw4DTK6xJNzdnpnbOxh3lO%2BAk1PHccoTolQWGimBmrYIHDfdVzmL4T9J0Sl%2BeP2qXbMMzzDXZI6HNJk1%2BFdC5aP7RaIZ70oyHQo0B1DhCkorlkRIzN3oMUb%2BPv6GHQH8p%2FoQaZT5Ao4B57RIMOHMmyfXKg46%2FdleVFWqu880L%2FACeN9ZsTW&X-Amz-Signature=5d4bc730db7b44eecbf7e0f7b6c3fdef699e0f9f467eaaa5fef096df48c7d79d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
