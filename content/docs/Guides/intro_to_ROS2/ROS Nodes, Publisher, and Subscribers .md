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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=0aea129b5696b49204c443e4ca065f46b14058d63d152ce054a74250a158aa75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=3716222e5a8e8d094400f60ed306f646db91fd6aa71a44b17b154dad4cbd4ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=aeab653056f1b03d0dcf97d98713d4403346d84842701ac86e1f5af94f6b73e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=32571131dd9de0780de811da1474bc47cc4a3d263fe7b5a7d5db0e52ae603754&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=81a379a84949e75495a7af369838c6b72c50b24660a92378b326cdf03fe84875&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=f696fe8e294a3fe05a281d613f9e39d931a28e5ba6c0eac712915457bdae948e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=1b9d398c0371025a376793273645afab5367d4765f81024632925ac7b6dbb5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSKJQQ3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwuK3%2Bw%2FPZxskLaKKFvGb%2BY4kgWJgrl2kv%2B5K1J6zDAiAD%2BU4RZ73ZfDF%2FqRXg5yM8%2BgZ%2BM3P%2B8eimfnN2jwFnzyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM2mF10bQe9Q%2F0uEtkKtwDvbrCFpg%2F%2FYEFj1AUPGw9d4DFygTF%2F3NSNotoo3YEDzBoBjEu22oYIUMqosPBw%2BHqJwdHymn%2FXWYqXjP4djJ8yFyRwbuJgCNrikbxUV%2B5S9Qt0VEQveaRqYd9i1WWSdU8d9Ku5VQWbl0fIVpDVK0usDtKMJgNW%2FRwVZBZCH7MoraqGrudVpyGpTI9VdcejJSTo3nfBlLiJ530CbtFq9jkefKUeZbOB5S5z5lu1FTJY6iIpDyQ5NvIRfORnyMnymLX667rilvB4p40iy3JktDzt1qfBfAw1B19QJYTowV7EpztBWfyAb1fn9V6j0nOJRnbROFUDitdBKPftV09%2BX5ezG225JFuUA82yrhBMmMWj29rXHFB82mHQJ2e52DNf2dQyeSbWvS%2FOXSayEwFGPKvviE4Bv0Bk%2BW0xHbpazFqr0Eih%2FKEada6KfBua9ODdbsXdxzEf2AQDsZoF6M9macK4Vqd92f4k4AfRyV9gN7kIFgAjV1cENvjmPZZaM5JaTwvUQmyHL%2FBkE2ahy8onTf7Q%2BLqN%2B%2BJHndU8BjjjiRv8Zhs%2FzMwU2tkn0O7MiQFzxszw0AEo5pRxI3relnGSFdPLXsRy1aBPHhzdZGDZDkW60A4pRATk9R5p3to6MUwgY6NvwY6pgFY1%2FqLUC1lUWE14pG%2FqiffjDNMmkh9o4RInPiWt57IvThJNSSaCUvvQQRwwqQMU9vVWX98Aejq5iTenV0sscgP58yWmdNOyJnX5VR7mlidluDcozMzyZIK4qe8ztO%2F%2F50LhfXq74BK0frNnt1jLYHF42P6CbMkX3NQDBig3loRCZ1GIApVhrfZ4QfBKGL8g9U%2B%2FkkHIFhaJnHLmy72q651MQxkg8H2&X-Amz-Signature=fe502ea2cd18e6e8ae3b2cbb3944648587e660b46e227f02f575d5050c06830b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
