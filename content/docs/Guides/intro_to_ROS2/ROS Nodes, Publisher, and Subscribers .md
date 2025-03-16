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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=997c6aea2f6d21bd949b28069361feae8d2bd000742eb17ebe0d43e64ab01567&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=efb653f2c434a941a8facbc0aee183af4244d6ea485fede0729c8b411e4fd9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=3f84f83cbaa1ad30280713b6530a3c6fa18e314dabcf7821df316fc436af0524&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=e4285cd998ba9385113150b1b511f7f013ffa5ff4b817a6aaeada35563c68b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=5de471e05b0cf0b83b094ec3d1ef6fca47a567e23c1118b3b25e5d2892c91f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=201dc0f8e9617ba6dcec9de6bcf1ef0efe73b81a247cbdc8e131285a6c67011b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=0fafc6bc2f393572b3322ceb831018bafbca887d548b526b9c4e5964c5dfec25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIFQLZT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdzYTZNicrT4zmjjRoi9lcgLQe1cnlKFGBp%2FfUmCHzpAiEA4T%2F%2BSF4htLwdxEdkpRWNr9qks1OgSPF47%2FLe0uhJgLAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKHY2PszQw0LSPgJyCrcA2omaUVcaL3OvHiIG6x5Tm%2FYCCCTEqrfCZ%2FlUMibB1rtwH%2Fx9VuM4YeQ6q7yx9ClPaGZh78jJ7CL1n1SVB6fWXgv%2FYsfvB0ig9yMHi1DDMHEmitX8x6l0LF51ciHrRRlDSvk1ocDlViGrz4uupvSHdq69KNyC6%2FEzeRYxKpIg85tSfMscKvhXe17WMIPnrEm07SLSjBwI98TCm1Iebq1daWDt577ALn3h5A5zDeiwHrDVbB88kz6yc51xT2km8iPpFIIh4rErFJsFHPBEd%2BF8W2ZLyTOatF%2FK8OfEk%2BbxxyzKasIYo4RZTPB1nkreQ%2F99%2Fi%2FZIYvCAQUAKmHyVDbAoUChJzDAgyHj0It9Jl7m6JNM3yD0T909ZWblVmWOm%2Ffg92ojhngibaGXxoax3lB%2FmqqR1Ql6Z7ak7b4FZr0hxJDW%2BspRh%2Bi5cKXVoPSwflXQZgD%2FihhsdRf22b5M5Q1lAPc1KQDHl25uPZcMCpnOlOOQ0o1I5f%2Fm%2B9BiSdj5GU9Z2QwiXZVFdkWRKzDco8OWiaikL9u0ldFPOS4ngLoovIBFNAs%2B%2Bh98o80J5MlxT1U8C%2B7RB1tauJo5VT%2FLRCYYor99NZj67b%2FHx6s%2BstMBgOGHObAO43QW8C6sm9uMMXq2b4GOqUBEpPYlf0uJcYdUM19XSpNSPJIanoQWqImSfIL6zvAeLkIASNbw6Q6i8qK5OGQuP%2FKEZn67tdWgVBaMyGin1kkY9gIX1gJttlQvL7HGGsnTdcTYKpfm41KJ0v42JtEOe5lWaU7H2J7%2FxoHTk8zLkxbTq4Bpbs5X%2F%2FLbi2b7ZJmoKremYiLYHz96qM3y33dMF8BNUDu75GwI7%2FWupA64%2BNEkBQVW4%2Br&X-Amz-Signature=5b81ac4d80e5084773ecf32e17dc694d560f9790482852540c4a581ddd24c03e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
