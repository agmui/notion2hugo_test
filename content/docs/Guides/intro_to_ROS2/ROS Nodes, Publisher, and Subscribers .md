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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=36f209dbb6314a933f5ba9620217ca0d2de0dfe4c588f3e2f1734e61b6ce026e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=a0fcb667731e68f36f85e4b8d0c90af81d0bfdb7e13a30aec4c5efa034398003&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=9734257162a1696e17d11185d8786c7ed0f1f5ea8c6d0c0df956f0ab824da42f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=dd766fc7bd8c94a8347ad31c013210d04d5ddac6ed11f1459a2d71c0276b1bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=bb5a405f57e31152bf39de367e6a589a7203d0e506685dc559ea5e5bd203a54e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=30a78c87336c8a09c4f3b156952f13d6a7dffcdc7a7c1ca52ccc96ee6184715b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=662d4bb737901167f761abaccfe4277d8c9e9a01cf3ed9d93440d12cf54d4b72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3UC4UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbLr%2FJVNHO7M94B%2Fou0N4%2FeHIfbjf%2FXx%2BDzyhG4GSE0AiAp6NKlKohIvPgC%2F0uNUpTVAujEuizoHfkX1JOHdtP%2BcyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIFNWdFyt8qD0fCIwKtwDu8HE17qn0ANdopWgmM9s0iDh927W%2Fz6V8L8meVuBGxfsEQ%2BeqkLeh3hTinSvQ1JSpF9iYzf5RLT4dln7miNb%2BwMjJxhe0c0iea%2FHxsT2gzxK3dRc6UksRrFHkSUfh%2FHtSs5J%2FEIBy4XQX57oLSbRtrdvYMNwoitCJRFU%2FS716ChCnRmXTle8j6rHqbiRHg6ouDx3eNrwxAsZKwKO2%2F68aQzsHouAoXoUNC8cJVcmjDzWiPzGV%2FQc6phLK1nvcr5DK6Q21KGtfCFoaa0duwvCgH7dtOmkLQ1FjgRF8keSBbeBVMQxyg9eavlyPka8hR9ZDKSfOV1adeSqzDfTVW%2FRxLRdWCMhSxZY1XyyX0C6zo49VAdeXoBgjQkhRHc1IKA%2BIqfCLxob017G%2BY62tM0fEqVCl12BDIPvhta42WXuTsBcgcVff1ShkpXC4eQWmz9u3u332hgCh0tfgln0fGyX%2FeNMPRfwzVCOxkJj6QqoLojrARBE6Eef4fheKyTfrvbPrdbrP2aBrE53EWXB80YCoFEIU0KOBV6ZUw%2FGuKvG6idvIB8o%2FVGllme9PI57tJeB1yn0BnOewrxgZSSIFmbsyRxQZXNDs0z%2Bo0v8VzXwT5HTBVqt0lU8muoWoTgwtsiuvQY6pgHB7J5okEFB7vhqxW1QJBezFCki3vB0NyPZIKgRo1lMUllMmFGZLSinBg9ucm%2B%2FaNKMdF8y%2Bz%2FUxT%2BVxrD9%2FXGsv6s32A63EbJiy2ynn09ZLLK9epev7MnXmw%2F2ClXNqDNTTnMwD824Ms3uZSL4nc%2BWLiZXN040xXvatcAKhydSwrIc0uLDZNNf%2BpoBf5y%2FjlGsZRd%2FhRVxDy0hqlIxIBhr6%2FSj08xg&X-Amz-Signature=27deca6c4f849521c508a19587215b8f0b16bd01542f55ba5b4ed214c30045d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
