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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=5af5ad52404fb2c2285de7ea7fcb8e96d0253ea833543e6ce013109955661fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=d21935136808c20bec5b4efb7197024d658c95b4401004d4ebf0407767155b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=39af09d8478486bb302a369d07a91f7d694a34483ff985a0b9a01d2aca3c13c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=1177344cba9912e49419a1c20a6153c0e86a48596da68804e9aa6a5fa81f2a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=466b2ba9725f70e36e756cb4d877703e5ec8a144a16f29d8b66e945ecb914403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=b3db4fc55aca22bca0d103d7bdb9b8988b5a08bc185ccbcb807a3c593cc7983b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=4d7d1413ab966d6fdc27fe7849bb7390b70ce9cb8f745917e9225e17e4a7efd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJZ67XD%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCuVth4asJ%2BF%2Bdv9xo%2F63NCDliZ8LJgdq5oHc6HnpDxLQIgfGg2GrSjWEqcLe9dtExnf7P4QZ0yXC8mO23zElrvy2kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnT5JC8iL10kkf%2F%2BSrcAwYUv5t0VD10%2F%2Ff9dg3zx8BbKUZ9AJgAR5GdcGCci9KozakTs%2FORU9mvVN6QkHWATYpZnhXBDNsLfA%2F%2FkxvwGgZ%2FabmUoP%2Fu7XzHK6LV4OJ5jyAG%2Fx4S%2FBRmqsppk9xtojcLPBswq7OJr1%2Fa37v40r66a8FpgwtAbKQbFray6BXqzIiKQiaDfNbf83sm9CT0MGOlxuCzvXfEFe0aO8Fh1CD5yjlluL6er2ftQgN8JrwxWYWYt4FVrhkdyJtnMOYNyreujMPb%2FWZ1xBSMJF0pLUxvbmz%2Bnu%2FdjoFBEq1%2BFbXnPlI0OnaaPJBYN4J1eSia0CaKd%2FbJWqfspKHYN7%2FSb%2FXhvidn5OwqbKz9PgF9ohAJgx6RB9iNVZbLXkWIcF1FiCOca9kCN6%2FK5PIvugxOe%2FQUFftWk59Ct%2FfFQ5I6D1LnjrTRFMFqzR3xrjAnS6A0zR9JmvjfMwnWoBTtSIwE8HEVRjW1kIQLOuaRqHlwhABFJEJZaUNFbIPYXJy8l1rHqOv4z5Anj9wPOtyDJoOkoK5KQh6Hmq4Hv8zXb%2BR0clq09rCg1IBJYgKG6%2FGaU37wX6rIr8M4xgzfKg2GDHm%2BjDLnbGe595LEKY0odoOLeX9dygIRGB%2BZ1235kupxMOLY4tEGOqUB4IrZg1Q3WT054KriySQIU3b1kd7aPk19oGDy9fNdj3ha7HrJ6WyfTnop8S7XngMS7R3s76ZuWrZk%2FezPnLWgd%2FHmMssbBRWNUdE8a34uwKjEo695GNljTPbtnn7psTGQCOQGTcDca%2BHusbxogt8NAPsM2TRLGnqo48TBOz%2FMwmvZqQWIEP1GvSOSu6bag7KCkh1xHb1oRMyHXdrGiA7F%2F3toFYKZ&X-Amz-Signature=4747d575ed44a9a4a2147877b42aae7789e3ce0b413d27357f1e0ae1d895d4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
