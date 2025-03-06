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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=2b15364f56206deeac010458bd66389d19342a343564b7fa9f006806b0bbbae0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=a37cce61f438a22ccb732baf6678d658c23ddc7cfd05b03232551e79f2b091a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=afba3b7bc5bc7db4f7433c162bde81bd83b1b2aaea12880daf2e7796e5eeb937&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=5a6ebcf5be749e89d3956dadbfb4d0c2ab5edea96ad0fcfcec09f9126bfad7be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=3b96643e1c12de912069c9f272cdf71138219ac149d12f0f57c8919054b09d43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=3a0205bce808ff27ecaa535de220036e6a44f757421e5eb9f8171753dcda5380&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=10454891a7173ef472a6a57e6f83d32a1902556afe1689e2b9545ac9a334142f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGV7R7Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9%2BjUd1FwohzrqIPxyiO8ViXntFFXNjxuRkNN%2FtlV6QIhAN9BAiAdwYZ8iSUoxd3Z65xXOnlxxLxN8ie5RjkudJMoKv8DCDMQABoMNjM3NDIzMTgzODA1Igwc0CyekchTAMkacpAq3APcl2fd11D%2B%2B9DUw9DQ8oz7FSddOPCbp9Rg2Y65C8BoTYiYiyoUvtE1NbA4c7w0XDD5gdflJBCg3pOswDFnGmlMPapLUjRu53lsJZCrE16332aoJqNxMLxOgRYstlFKexHiuoablVt5UEfN4Kq9Oa7WG2fr%2Fj%2F%2BZFN60dRgpgOxBZlmxIUMUsQlcZVYDNdOP6ubQHvStEiO0AmECRBprt3TqBITaqmMcZMHOPCEdFC0BIWAQdf%2FCTBBgXzr23XcW23GxAlxG18bpcvgXbtT%2BjeOaHWwkg6b9lOqLBKJjWzF7%2F%2BPoLV%2FKZ8QqKW18XbdpaaYfdkuo0RRXNsNQsltQqU3Xc8tz7PEZ8bM%2FJLdsfe0fmEJ%2BP%2BBZBuBSud9OLjyg42%2ByxLXj2GPBS2TdQtdHe2p0mICp9IiuGHPsE6TpE6%2F1if%2Bd3O81AXqUgdkzVdIUWi0A9fMqTGefmUmaZRzWIHjHLQT9%2FGis8ZqG0uCWAgDdNZSIw8JYqP0pJgAgCxzPSoVmHRuECJKq4Bb3bUwiPrkcNYTwE1GDtvB8JP4s9U1kxnBeq6riWgIO6kmzVomYg0l%2FdMSj5fbSYLnDPnZy%2BxdflXpzPDAu7CO6Oi168SRnEuFiwLnaeAfIgpZYzCHzqe%2BBjqkAXYs3%2BzIaSQsVQMX%2FKZLE1PBHrPcY%2BwXSSjrxXRs2U482Ytqvn%2FirCbPSEvl4hvs9Imv%2FEK7FXh%2BM016icSQ1nspyo3tIWJuiecS2x%2B1xfPijnM4qZLTUF4pIkAT3rd01jZGHUauM7UI9RE2%2BlZIvG0vTdRyq085xzHs8MT5JGXV%2Bd%2FmpA2NG24DtQ07PnTBaLmAuunSexICzwka7IxslfQxVGsW&X-Amz-Signature=8d6b91fd88e5c933958b420235429ad3b13bc5852d8ac5c89cfa5a0de84deb23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
