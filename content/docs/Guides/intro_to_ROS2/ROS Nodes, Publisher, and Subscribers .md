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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=3e4ca7be07b5b9a0852336286d5b254f7ecd6bf9e873755f82a1631a4631386b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=f6b31458185527c8afc0f03975d0810df4bd3b757d8c2f800608c4596c39dcb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=947223956143bc35c68063687be110f8aab9c72c77409d748179b1f6fea8dadd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=af770b65e3e6002d56e47d5a4c4032804836f97e7284966837647852fde00549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=b80aa70f9a8e3e521b2748a1698ad5857b64a7babaaf1bb815a5d32e7eaa596c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=fafbfa3e43a05052da2e150c69e8a1734da7938f80ee05eb193e0be599c2ceee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=877b18db4090a4c556e2a7f6ac92220584b5388dcd0d3b41c75a7b6efce00abf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E2EDNA2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDc86D5r1OzrUAZBfI4v7glWS1kDebf%2FmZNV2GTNvc8jQIgLW64UfgeTXjf6zfvhRIAgn7Ao4qy%2Beb93OgiQZMKEvQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1EyaTEihU8tJ5t5CrcA0JvN9U8TVQubNcM8q5HeRIuNNuVoKDcet1mcXoeYTc2R1fN8lBzw4FVag1%2Fdt%2BtlXO%2F9voQoUt6YeLa1tXpfSfASMXtZleNUHnNdaI%2B0JzhBzw6FCJLN6efko5p486VCx14ViB4exnc9aGHQafs8hz%2FwcXBsbB79o1Ze2BxPGDOEVYrFiG2bksBd3XW2c9ZZffPmeg%2Fs95pQh5%2BZ8dNoYpZ7YJlXBd%2Bmx19TGwixKWxTcEUJOI%2F9tcpV6yjHXP5pQGvNdwzNSQ%2Bxe77dnJmIsBZVZL5bSEbDN52HhuZqVZ6PL9ZOQT5zTtY%2BZ9g8UUwYZTpZQw6GCorA4fs2rXRCszXNqmJiBZn%2BoeOTy8Chmp2Uo0dWksXIM5V7LMuMMP9GJn1afFECetUHdbmvF9hrE4Ubk0Lgb3iWQXeKQ5IOhK50rNjqjuJ9UFVJvqNWRas6p6%2B07u2Zm6nLA%2F%2F3TrztSH3xJ5EWev3x1UCppabjntRjmvMy8GmIGVJV3c3LmF5WdjX3ro8aHZl6Ix8mqoDdUscISu3LbAFlSu4d649KIUzVeerlqc%2FN34XcX046YMqB28jWH%2BvtTFV6bAUSGxo7%2BYmAP6xJJfbR8F7sAna1S8AtiVvyhyTaGsfY%2BI4MJGe1r0GOqUBxD2D%2BNFOEJH961kq%2BBKyf4OxMWFjKyhjv5sVYHhxZHWpZPPgUmDyjIwksba%2BERkPok7Djgs4F4TocEiwM8BD4aXVdUj2f5VXSSEY3fWfQ9JlG%2BQgNSSYSoWgHputih5PcJgKDoo7aIediW%2FsejUiHYP1YGwf9a3wQTrCrDMLFVSp06PhFTmYqEIZggo0N%2Ffn7swI9u381sjJrbI699TBGU7MqOx%2B&X-Amz-Signature=fb72b104ebbb2902bdab34fef7a8f7b668b1a70dcc1a060a380059aff3f7d018&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
