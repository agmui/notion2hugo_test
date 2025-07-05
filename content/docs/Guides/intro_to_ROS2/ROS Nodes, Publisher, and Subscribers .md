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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=bc260f0d20fe16ea445dd6ce8461c6066ef8e4595e46fe2f5ed6568b0317946f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=a4ff75af11ca7dc978a04de71f9d5ab0ca324454cfa5841aeb5d035ac917d62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=1620c09c85a9b8fe3ab6c451616a64a27f0b385a03c12993f74b323f6e58d67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=142d77840063124fbcaabcd432758b8fd8e023d8b5d342ff0bd78ee7f440c9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=4ce2718194e1c918f10c1748da980e8c0436e8da0473c2eda915d287478db87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=12691c76b0e3657e15a1dd0cffa7ccfcba6ad81263a645c232582c4ba39d2114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=6087bb5458ccc52a2a11814fd67394cb3f5613c4d5f7d55503b71064b38e221f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEQZE7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkH%2BveV2WTev%2BASRB%2B5%2FdSJUGWi7DboiPBgtmhw2s0yQIgFcv0GG4TPSX%2Fb7Gq9nd6IJId7oQvYrAHWDrx36PUH8Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmlBhlNkhsSDRo8%2FircA27%2Bv0Mh5LajYfI%2BsptdMUUtVYH8FcGKxdOzBsOWW7Z0QXtXNxuiR5cszG6nb6rd1CRBnf3Vgoded0gZ6ss5y8iIDRZy5Rp0TmWtvTX51HUM1S14rk%2F%2FcMDOIse4lSlwKexGexAVITtJhjYOx4sCFjxLHyOmFCqoui6ZUlzPW2%2BVb2VTLaJVFd1cH%2BQBfkL5rNASrn9nnIy4CQzuaW389dV8PUArvHiNBw9ZOzDdhrvKSNbuZooPzectFricDH3BrxvTuO3vaTu4bkw9rvjXbijedT0xkn5yIUrbtk7Ji2T60S7fo2CsBOAJvMZPjKtxzOH%2BTB4NC2LKj0F5FsW4qeLprWnk0gklySDJj9p64vkhrlEF1%2FnNeOoU4pnN7oWVbUmoM7XZ9wLPFAom8NWUAdh6Y9hjJS%2FMqGh%2FaDRzYxxVWEjVhgwthcmN70nCly88U18zqWS9CdTKv9KMFzm1krJPmgwwOOW%2FhuQfbJjx9L%2BG2e6bdOImAJPBXZzZMWeBLg0XI93vgil1RDncszMwwO7rBA%2F%2F2aeFPeuvIHMssLk%2FPIzqdMAkdCSeHi1B85xgtkhuDMKjIq%2FwNb%2FM8QvjZwVcIUjvSg5UPZLT4B4uxEtQQmVrVQIfxJ%2Bk74mRMISxo8MGOqUBXALxQ%2FYePP28d2AZZ2csd6QFPsblZEBBmnfae91Jqgw7YfjsPHWPf2RQJypjLX5K%2FaiZMPTbIqtQ%2FXmF6sFiju1slhyNjANKTIpva5BYolmsrUK1wLEeiUhS189Ul8FbQq4KU1i5MF%2B4dCOKYLetsrFEy3dZwdwshhfDK2xJVuSV7O0QXbNVaEFPVmACsGLK%2FYenRF0mvtoNzBLLgxhV57qvOOEy&X-Amz-Signature=2cfc8be4ee9c94532715f7a484ccf71198b077b14b16b4d86e4a1538927919b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
