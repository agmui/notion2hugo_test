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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=9713c26686ee84335e74640134ca1536838c0cd1fd7d58b9257c73f1ea95a078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=b94e6dbb3e32c495d9f8e05ef9fdec3daebb070f946e9abf13efbd24ee3d4c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=2014f234d5774f92fc8c701eef66d42a0275bd9565d2926118340d08e4e82e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=d8588559e55ef0d0bd07e101701839f282d1a264abeb2dd21ac62842447d69f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=b2a039042c7d8dd80318cdb5589f9f7d4a739dbb2832e68ee0a39da38939ed9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=a463d8c8ef7a37ed330147663ef748c32ac42811c3ce69b0e29964da07e3d4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=95bc70d8c30f56db745668516266d927c4cce3cf5d8f9f7946078328d49eecfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GNQ3YV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTfbt9KKJCPOZPqWoJ0mGlZK03ix0xGB6gsNOVhnWspAiEA2uYCjAxFjyQhRydi%2F9NHPmGcMT%2FRBjsO0jwIeUZUtKMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRB6%2BaRW%2FuQqT3e9ircAwDgw1nmlDjLCRot5qXc20F9MiaZk6cgzCcGIG9HPelKhgdZVN2SWE5jlHEX2%2BT1iu%2BTekCn1tOi3SQaEPOSvNv%2BtOrVFxdvdGba9MbRvaBKHLqEgLYNMqKNP4JM1F4fFtHkUiCG%2B3JGa%2BgYGFvTU72y9b8UOLrhxOqAXscrFm2nMSUBy9q9I%2FE3ohJGV9r2HzdTltmqfkB%2BcQKfPDBdSSEO8Ej%2FSKwWwarG6pYb7ySikIZuRfEaNZM3N840pYC9wi%2BtoF0bQagrzt2Nn%2FHybrSBlf140Vi1W%2FqZ3r%2BMvMJFok1BJOEPjRF33TYo9fWbAvEhrKG66xbCT1e%2FfW0kBnMSdQaeOLTn41%2BqV%2FOiamwVC7tP01zSqOWMNFvFLpvkKtQrZi063OXCmqZJbm2GMp%2BYB3FAlVVa0BjrUb1xowZgE9OEXVFiaA%2FmIGnWYby%2FdISbhDJkofLXTUX9jnHHL3i56u2nFAD21irrUunVh3cYSQki7VD7iXIBmsRxTxPpC948COIDsMnIR4NxntGTH%2F99mGoGmizkrugqV48VfdW1amZyD8AtouTdu4klWjcH2hjGm2p5fXglFsQX6qV6rmLoQUlbUVpapMpg8oGRRhJb1K3Vi3W3P4LwS8e3MND%2Bw8MGOqUBnQJV7bSSfcEREQq%2Fop5%2FfaeKDd5fOWOWAkSGAjk5hPv9JYnXJ3tT3wIUzNXhwXqsFMzrJgK2fQYIB6iBIh0kAbYzs9ko1ZCE9Kzlnj%2FJFOa%2FsT1ifrOq3psCIs%2Fr7R4yYASPHN%2F%2FI1QXXQ1SkNRRPyU1nonMaq%2Buch%2BKyeE4eV7uu20ySTDNOLold3AUWrmLE75Gez7uBkjaBu0V8hIb1PqqhS%2Fd&X-Amz-Signature=7c260a0179d2d4a30eaae6e4ea74422e72b72884fbd291bebb4adf9b869a02be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
