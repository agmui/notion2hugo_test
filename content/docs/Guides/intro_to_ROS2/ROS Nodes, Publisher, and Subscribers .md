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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=122b09b6468fe3d180a0db1d28f74efc165a8d7ac4f10fcf1d01ef0bfb45a534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=450729ea224049f99a6f3704f732d395578ce27432742c3fc7d6671b705a2799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=6c2972288a596f20ff7e1eeb544014d357ccfb50aae1c3ee33e6a3840ed3c299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=b507767d52e1cb3b9e0e96200c9b9eb2e31f68d18f0c75b85ae6bbba870094a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=1849a3256bb39593fdf14dff467dcfc2a97d18c1602655a367058693974f075c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=62a994319fb00ca6260da1878c54f4ac48b4d65bb85733b9e081db474a2aa3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=b2238ea56e1a5e332b0fbe68aad57a2ec1d58d07f492e80dda8368f24fe906ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLWOS6O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtIPNwIVDKc%2BPgzXsDJ97nSYXOqpHRh23%2BKM0GXeVkAiAVK0AbDKH9Wphwvd0RTBZsy%2FGhL5AzhFTPmO30SJAUniqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBgsBTk%2BDPjZdnHdKtwDBDmsHAuQ89tzlkPOArxaMoFQ9Zea4I5WxTOdaB9dRpwTsNOGYI7l6zkWsI5%2F%2B6SHX2BmtZ7t1y62N%2B8F6LmGTHz6fP41a5hi54%2FDzaLZpI%2BfQDmD8eRgfna3MsfMSy7c1ViurVIQvdqusLeyxn4eibHuc137%2FmJNaIEzZdl6%2F1pTGkihsJxr98eD35jzWns2WqKYy3QEa%2FZiSwOMcOQt8xAiS4L0poV0S5CdChso0%2B8sgf%2Fs%2BO4V6mRL5Q%2BdWKLmW0F877xHq8GQMXSIgExJOB6F4h%2B%2FXPC%2B%2Fy7eW5crhC9mIqsjWnR00DCW9aaZG2IszVFxANdMO2QdautlQm3R6l74pACQBo97EQGheEUWLsGZkehkP%2Fzt8qZSkHw%2BIquGdtQ4EF5hwFe%2FhJauMiuDh5Pdb0IUwEOUAizKfjbh2VnHHL1F%2BEgCmWvdLMhbLnxD0IgiAs0xx4%2F9aXR18zps77AMsCKwv6bGKrv7yvbQWZxAO6iFoMtJy8hwBEhAw4aPkEcRWTUqpt1hYBABzpZoHDzLK4rJt3hfEDtcSR2wZ5a9aLTh4zHBKieXmUzXgLnSvChkLHJbJPQ%2BAYl3CAF55gEt4GteFAm9df9gBD6KpgaUSmyxepaRtJYEICUwyNLCwwY6pgFuTkSk3sYmDEm5sOnrThGyx%2FG0c1wbRcmP16U8w%2BsbvE0hX3UTsg4Doy1%2F0%2B0YuiduBghSBTZBcJ2FmZig4jcHZOvq0nbcNKXz%2BtoYbrWCE4mmg8MS4f3yPNFLpDMLsbX58NJpG4wqDRjl%2FyVthcH7igiMA0q3OPPNF%2B%2B%2BFmsn6siO0C4yrs6t7h8kPQEcbhcNT43C20lJoQeQxTZ7LC%2BeLrRv2QcD&X-Amz-Signature=5efedc8a74768f92dff8157b82704c4b71779f63fe73e7ee476bff7690830d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
