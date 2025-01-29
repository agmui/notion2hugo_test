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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=ff25929002caa709943bbe9e8b50a2295727a37a5187f104f69825168b36f714&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=85ed22466c1b4725db61c6a415dc5a2a4a33cae0620957599a8e39611dcff20b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=ad072a6393619f0444487d5bb08c37249c82efa5818f22bbfdac695872560bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=86dfc70fbd4fc851c77a83b1b35b683b3c2c6ad5d6f624c9b5442a110456bc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=f0513fee7f698f4b9f644371da78b922eeb7918735ab6a5cf49adc6626acabff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=c2b70c6969ee2b516c2ad9a8d238e1705d34405325a4dc62cbf08dd699866e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=a49ba4a09cfaf4020541712fee35abe7f5ea0a23d47278c600b14adc583f7ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOA5MSVO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FM2BgQ%2Bf66%2F%2FhUpwbAr%2FuKhMhnMYxdSBFxwjrAXomuAiEAyaX61qXJ5UwWr63PKWMtrJsBA%2FQl0JT66wYkPdwJTHwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHRZ9kUXKM96eX0TSrcA0zfDqngpG8IoZhEdmazUCENOX68eKogwJnDu22KU5WOO4D4spWPd5U17%2FtyjfudG1A9MW%2FPxJVyrbo9mlACRYbMfhhv%2BpfZuVevPkWJ222owtGqmg7qqvVAgLFIDz1btDR3DCTD0zc9A70a7kPayU39NjhVTsyIAHhtot4IZ%2BUQ4abyGfMiuq6%2FsATVsY9X%2BKn30eeMHJIHvO3s0z2KIkAanw09p0p06VV1Vta21XMPY2Wl0mDwD7sSsb6zvbtt26R1YJzN9FAjnYih35MBkDl1B6aUU0THceM5xDOQNBa1teFH9YIHVw5ViVZ8xDPNWalEN3GGkiJc5G2Ja68OiVMS1f1iQl%2BWCj%2F6YfwNKhKIINXssRg90fUl2T4Ip1IqztMGWgWLQT5ad1xTJeHzOTJTQQ%2Ft5m1szCoKCSi2pV8UIr0wffDagSg1mMCpA9TRwMmP3CpE7Gr8xWc72HBj9H7MB6p%2FuBUAQQh6iSttDsi9tpSczCSN7biOQTJuHMgNkauv9hdezXLTN%2F2%2FhBrYBDKDWD23TXFU33gtyIvrmC2Ih7xfuT5N5UxCWLXC5Pi8QXH6O511hk%2BMMAgeN3PN5wIfyC2%2FbCqB3Qao%2B3BSx3ZqLY%2BRkBB%2BB6TUVAOQMI2G6bwGOqUBE%2Fac2TCKlIV6oUYjVHsYkayW9Xxvm4O17fwYTUI166H4tNeIoS38kf9RJ%2BaUoMmNjB6ZcANk3LfWDmR7xw0bTLt3fV5xUlSWkuN27icF6QrsWBBBENDusO9W5nwpdXG7QZrPZ%2B8YRo8TvGxOaFqgTI3%2BxXlX89WpwpmwCZpClhyMXQpFdcvIvG5IcmFRZM427oecF4LffjDzyQdFB%2FV7Pph7RJPD&X-Amz-Signature=ba9cd60bf915d366591a850e65090c09475f679dd7c5b21f670c03874ca880d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
