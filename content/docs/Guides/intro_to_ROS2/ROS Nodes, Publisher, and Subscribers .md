---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=8ca9641d3380293fda34f4209c91149b6bd232d9985414ef3bf0e4615ec2f826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=77ccfee78354bf12a4bd6e29169801cee87f73a1a2263c1e407dca6bd63a7c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=a3228cb349b7e532a5ae554a966e077b3f0178d4661c1aba1274b8233daff56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=b3932fd71a44844c8de68a3f78b662333a8e7b2cd32ca3c910ff9c3acc5103d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=ee983e3eb2c0c2b533e44954c3d1a11079538ad3547417766621851e4dfd710c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=0ad92e5926beaa7f68be4070e07352e7c2db4dc6d5d5757a3a019624a85a06b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=95ed7b2079e4d6df00d1a23c1e3f188ee1a6321fd967ddaded81e30d03469f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2C5FHW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnD7hnlENUfnKG9wpSaeXwf2AW5FYuIcvYvntd0I7CqQIhAMdW6Why9dJN1rJQEyvNjmuK6QY0R6XtKOdTthCqKCfPKv8DCFQQABoMNjM3NDIzMTgzODA1Igzguoj4xDbQWUspko0q3ANa%2BjJ2DVQVSULD2BEnn6U0QVmGFr12TjYQUh3uJTUmQvZ2gxJXp32Ha7%2FWP1zGgrYxi3SU67oCm6Dce%2FdHnPn1ENSFguv1e%2FdLkF7PUVGX66ztw%2FJCuCk7dX38TfkYfv7B%2BEE5QELZEIWprpphGub474Pi3wcFVJPgoUZpYUgGfqZNHV31P01jyA4tepQBVPN825EDTIm6QMpd84SyTspe9WPxznLNIANDJrqS%2B4uh4jOOfXW1GeMasnsMD98Jn0CeOJQOc5FDEpSrjwGod9ZbQt0GcoQOL5RTzkIoSf1AKtqlfUfpkMTezmrvWfsS0DELfcX97YjvMXuFR7HDtRKQpjWHj5QKU2FxYUd03clGS6qWLSs6gXDgnOdKK%2BDZRUw5vaO4u2KsH1oh%2FZk7IqgsT%2FLP5Wz0DDXBDdeJ5JotskZWvA%2Bfew9Jhx4PussgOHfxZC0guFseIijpOj5FcCLTmxUTihXQaV%2F8T22PFOLrAVmIRdPviKZiIcpH9ikWdnh%2F1vezZ3eUI%2BgwsYMSkDEPbHGZoR9tzhf0Igv0aZpNC0cW5PtHfelu9xwlImFr0JW%2FvZOF4xrte2fNsnVzTdGvQV9ff0zkFTQAFIEwPU0MylmEET0Bo0PgIz1C2DCNpubSBjqkAasrGYnhJ0fM3j9HbeLwWolf4jd3Nfr8Y1R%2B2aS19uvgTR94OeDqNZUWNwRSp4DEk2FeMSchpEkrrjPTG%2BryE3G4k0mrcKMnFJA%2FVxRPIc3K%2F1lx2RI2e452ZL1JGrs%2BkfO29Fq7JBvK8oLlUONUMEyKuVUlQG6XNsyWxmxba6Cx3Lxhfmzq7rfm9UeKIHP2pV%2F%2FXz8knoisyxL%2FgjTRKk8CoQl4&X-Amz-Signature=1ffb6c49c68184e6de665d3a8b62119cd20ce2cadcc6f5919afd13c051266273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
