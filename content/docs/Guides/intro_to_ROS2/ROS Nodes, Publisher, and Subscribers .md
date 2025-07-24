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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=84289960b6252534cfacd5953ac1aa6c327ef003e3cd4af4efdf479c553109bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=5568e076758ed865db50ee7a5312ce6121999dcdeb7c31d9af60600e23217361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=9e7937e00362bef624c10822093a9c386ef55cd4e7f2854a1c4b74e33fa776cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=7a31890d5f89713056bab43e2745976752294ee13e742dae424e4ee8bacf8a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=14d0e22164d2f2820a84ccc27ebd3eda85526d8d67179675fbbc8b68914f962f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=808cea12a54ea0dc32aad7335ae7c7ccfd8a3fbe31e5b59abb9e89559e4a992a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=3a757768965d333008773bcd12dba6d6a2e59236c780b1e424773d5a97c6b641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSILTL5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCEAXuXFc3pMRakhLU9hgj876C3CbX4pCj%2FJManwXmvegIgQLsAza8tTG6BgDZaY2By8MtHTvLUmDk7pwDKEWo32SUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOVM%2BiRzkH3fGkFjcyrcA3oz0ubBDVjdKMRjm2AdFBB92Y50ImaSkfjsQlbeioV2nm2tr%2Btf653fFJZJUDvbXT1%2B8%2BPeaz4MAAF%2FnsW1Hlv7fgPTrs3XfzhTUFtBwxv269b7aXiGHnlnCCXvWrf1MaiXnPeUTkZgpCLe7RMWby58LZkbML9OFYnndFui62g3uSsaTcPXX%2Bv%2B4PkpL53gu6NdX3nZwRNevPNw55QaZkZBprukb90Gmfjfd%2BgiUuwPRHss2KY2b7pDt4Vk5gJqcTtUsW52iYV225WTYR7JwziQP%2BVLXRL0KDVXwuOJWi%2Fq4V2RNS1PIIyZIwLaTKIcDxkxrRYgwsBD1QIvVikx5HDZLiFKDEcUMO9AdTI51FTXcNgvyPnzdJkoCyqgTJZzybVZOTW7%2BlyRJBffFybbQhh8%2FsLHgdoT0LRnYmK3r3wU7CVzAZuwAZ0nxomJ5T%2BUW4VV8x25f8C5PMPXWOsvC1XCvkgpK%2BPpqypqyryQAuBOikOQzaGzIEShsPUnUnW%2F6Q%2BpV5qfnJjhKBwsuRXsDfyhen4KRkpo5QJTXsNOjH09XKHwrz3BMLR4tsyh%2Bu2uUhrSyfiDVZFjdNfT3FCRoN8tQkiclWPykRlavotpSB3E6ivQiKZne1mYVQjmMKSxicQGOqUB5PTXDgISxlMJHjxEi0xQ60kxll7DRPXMoDIuG4C6G%2BQHMW7BshXrU%2Fs1AtHOQfP39L0c%2FfrwBSCoamnVuT%2Bdg6lco%2FANxJpGbOZpCQgIXkJHmbw0%2BNn1lkENG78S9ybARBhRPuxKa%2FyLxfWlQCkfRSc44FLu5GJ%2FwtCG7nD594d9KyqPXJUkkhYKPRaxEtAdr294TXBF84GT2DTw37xxyRrp%2BoeB&X-Amz-Signature=993c53d80c6d60c904be5ce3a841590c299e1263432d3eaadf44a9ef18bf6219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
