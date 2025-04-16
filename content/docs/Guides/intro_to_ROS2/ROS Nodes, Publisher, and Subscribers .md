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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=823732fb9ae90d1599edd714ae15b8aaf81eccbebb5cb594089d8e8d20339f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=7c26d161c5c9c6b15e1e6ae310b12179bab0fa13be47849d29210aaa2983a02a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=285bc4e680e30f288ebdabe1142a19e87890b9ab4a869d72fb598d32b0059f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=104d9712350c5d94f21b6569aa4b34fe611ad9373e16b7573fca651c1b19d21f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=c6b5ccce453391d8cf801d18ea9a7eb513c524beccefd2df56f3933bb6a84787&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=88558e66f43acf306e23eef65941942dafab12dce28c50236148c9c7334ba136&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=c5350334490f335539c3b42ccf2cf4ddbf3ece27dc619e904497d70f1db26889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5FSIH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8a9UgYaWyYa4fa7svDb1DIIJciCCyzXmmN7h0lZi6%2BAiBbHcBeZQwWM9cVYXZokyXnUqmjJktXANxr0d0B6g73dSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdSzGQEB5GGEthU9MKtwDv%2BSJdcrKcumWulou29VcomTfTSaJ4jiZ5X%2BCsE3o1mZs9fe3evjFvq0OW9WeVALvs5Udbipdmj677l%2F9vvCxbQiekLKryPcFk4aW%2FNZG1z0RXSzxfrRYaNTtKRXjVUXzPokXuIt%2BMCKMzL8rnNIWD27E2Q6M1TXcfzj%2FWtn0Iply%2FC8RPiM0Y9jlW09bgTOFKeGQuE6oAsU4hX0fBYiIPGWyctDL6Sp2NyTSYuJo08CJkRkVW4l7GTL9Rh06wZRGCcrpHBIzEFc9HF%2Bb7zijmKzncN4V2SR7nHx%2BUR1%2ByK6U%2FsnPRFPMV5z5KaPUaw8MWOHX1cWfKlGImDRHVRjG2pQK0D%2BjsZnig%2FWCyf87NDPRqs7dd%2BhXOrt%2FdfD1ScoP4Mc%2BwZiiOi0Iu0HRv926ydG2nJlti4Ss%2FqRBJBXzitYjIO92JkDi3x87QymgkjrOaYGBEjVkRU31SWuwGfn%2Fiduae%2FHANdhRe9HTn9xEzya%2FQVPBc4lu9vu%2BpGJSDvWyRfJ04g%2BzlkXmU%2FBS%2Fdda2qvIQUjPuJT%2BzuEzJaHEMq2MIEytYQ7Ff3cybZMy6avGE8pMLQC6c6GF03V3GdALM%2F9hzpgYcp%2BDAE9Q5XUrTDKz8nABp86YfKhuZ9owxfj%2BvwY6pgEgPPBDpsXnzo9GgEHnGWHqKP5o0i%2FeMDEiVnrpNf2c27VQIIJj7cKvvO6sEDbtS0A2go%2F2aVvh1zXGZ2UM%2BNyyn6GK9yC%2BlNwNQAn1cc6G1aIvM4IXK1dgoqDe9UVauLTDFrNvpWWq1B4zOLbI0nlbVKEHuQ8M8XSbWmQhcZraIY4Phu%2BVyi%2BQY5wvl5tRncmJfmvKesvAvTeY83qzcnOiC2frWSpd&X-Amz-Signature=0574c3423085e149cc6dabb4f9f0e01000a38e231774156bf69de479daae3e26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
