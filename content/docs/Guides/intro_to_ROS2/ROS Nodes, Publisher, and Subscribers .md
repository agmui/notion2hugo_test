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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=18e4844f99fd8187af57b0a2911d49c4081e1e3a628dcff02154fb1525078e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=db00c0ded6b24dd0ab183be6ed7809f89f9b4b7cd774cb01f8451ae4a0360067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=39371e101f28bc462e9b54da6a026e93a96066427f9baaf6f24c0c2949b4e737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=270a95be3ba5e801c63b7cd3048fe07c48f0ef90ef7c7f999fb7306e9255f994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=9d054a87f50891c62c00f722b35215dbc8cba1837515d9ab9a3a8f7ef7879d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=50bcc7200b7bf9e6e95fe31f1f5325757ec6168f82efa7357a151a0fb70e9c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=f6fdd749dab8d6ea06bec606374de6550e75c0d89539d1ae83e775a236f685a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X357Q6XE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5SD6QjDfE%2F6umMs%2FB24szUWh2JjqB%2BOvMzX7PlpcT6AiAMnSRAdZM489%2F%2FVpfl0DhH3xWhY9Wop9vlVCKJA8HzMSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM1rr72%2BN2nZXmpKoRKtwDoT0vDE67K78Ko%2FzTMUKHHK3M6idCz5ewdMh9yKu1PuDXs2%2FCIMrtj2W3DGAALqoXKGnAgnN5tuO572gUasS8IV9hXiC1UatZyuHeY0KvV6Fz9mBD%2FEvwgIzuWP8vSPqxv8iM21rpEDyYnSqR49kiDV4o%2FZ4GlT%2B9BPbYTejKAqL2u4eySm52lvNmr8yF2oy6W3fpkN9NxZ%2BcotpK0HMfEgXMtcsjsib97TVPwx2sq3Ymd6lQ%2BJP5ZaDzqOTzzG1hrX%2BTVOfjP2OCGDjazTZ9dUa1s7EhX%2FBedV44LzFtjIGCGZVjKp0at89xQX9JYTu7UWVgpWDJ6I2cJHao%2FgUWCFVwI8GoE8SwyTUrW%2FuG%2BwCO4Mz8TBCzLaGsN%2FPPa7JnCQQjFwk9bCAzcASYk7RdhKxAJu0Kci%2BnCzWHqjqPByv%2FhUmEC0QqKXFylPvfAIGa8SSJwW0ypBrSKEjq7HA4lJLLOc55seUTt0GfWIq%2BjRKsF1Nhm2RjldhEhSHAbf%2FC7flHMJiJWrihtA854OFnNF1PCN3jpT2cx9qutbf0hqvZ%2FKAtfkG9rcZ%2Br%2FYgvj9NGKVk%2B5SAZVIDsCAm6at%2BOgtEUtKB%2FuzAd4HDqsrckD2P5lKsJwJlZIAxXyIw2JbPwwY6pgGBHDYg9BaHlkz2ezM21Xo8Iq8jAZZJ31nqfKU%2BZ8pmEYXKkhf3H8v93i3n4zutoG%2FOIuRgTYxhdELGmTTC0Vl9jzPrzUFHbhIDi88CjMxsd3FRa18E9SQsaRx%2FAS%2BFa%2Flbgpgfal1DMKmBrwbBoLB%2Bc2p07nEcDGIuE98B8tUaRbi8BJ4U63b%2BrcHJfZ9pz6FpTIWPGN25KNdf4ck30ORlKtbQI%2Bru&X-Amz-Signature=e8fd8b9bb1b1a8dbde4102eb28f8283b514674d78de1ccf91f3da0395d81b0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
