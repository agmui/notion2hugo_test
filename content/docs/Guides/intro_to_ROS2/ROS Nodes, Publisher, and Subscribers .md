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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=52e45b23af6ca08f39fb0366341185e2398a8e814c09cf6a2a8be73ee5d75309&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=8ac2314f6b71fb51ed987fa84fe515a8aa9d5bc25d501c1a4cbf15f45e0fa5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=5cca28a5ea677aefdb1ad923c259a49c123f86b455ebce51cb8342fa6e6794ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=d175afdd44ad61d6898581936f4338f711361f11829631fd0f2c6349c4ca40c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=be7edebdd4aff87776099ad0870737c951daf82d95759c9c9955ddc6805d8214&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=6aeb1f3a9ed6129c82d98a53e5eb712eaa03c5b061d0b6c0ca65d8381868a5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=d2d7e3f6fd9c5da86fe2f0bcef3ae22d4128cf2576189802836736bf33d2b60d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBQXVZW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNjddzH6vq1HHpk3tLteqfH%2BkL97aEMPXMEF5GqDVzxAIhANsamEzvzDQx3fZ%2B8cEfxT5YTrf764xyFFAnj5QzKjZYKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7VvfQIw%2BLRDhwGYq3AMDya1B%2FPPu7h4zkIDlH7sJmVzRo9v98KiZDgCgmV4pWJGGNHgShH2Daqq4WUrxeNMpuC5lw8ZZ3UBcbxU1mYrvP7p8uOhh%2Bx0sgdeqSNwlw8nEwZ90RLLDFnDgQ%2BfRYy%2BjV3xrpCrLCn9JL3VMDHTijo2rXF4L7ItRsg36wUfWDB3p8QNxdVPZO39njlv4zUXaf30%2BzRVQOAHGn4fV9%2FmOv1e9DZ%2B7WUkz4aTeZIVqf3WQv3nQUROUjeZSJypWfOs8zeikzHCcAZZFvTnB0TfP6nWEFPxp2gtslK3m0P%2BAoEa5Srs%2FPn8nsT5mD1SO%2BumB49dKPydrPll6WcMAAOcDl8e3kQtTrNq3DQuKOr28fkU1cPmW0yL1m58ELLCoYWvQkGVC7fuQSn4OWMOGjn3JPsVg1a8iztIvaUT7P49YoRGN10K5q4L8YMSJDUoI1XDfApRbmh9FSIT5Sx%2B5%2BgfcVMGp1FGsMnhkcZrS4MncuaibPSErsQl7ZaQcgONXSuHHD06KCMK3HhH29kpMDmsf6RZ5r84L%2Fioj0onsT2uOw3OE6HfkSL95q3vu84odsSTkR%2Fjmc2olbjtRFifYnve5jU1wP8vo7BSlUPddBwXK9mQS5gSKJ7Ued8pyszDp2OO9BjqkAW4XOlz2eU%2FJJzUTjnUuM%2F9pBjyTSYGpaDs3ZCoV6%2F9ehxaiu8vlvIfxN8F2Hm%2FuIdvR3IyPU8Xxrn4%2BzuT3kin%2FDkivJX6nAWTTX%2F88S2yukVZtEFD1LrQ0kSUGMGcSSPLi4M9hQBWUBEAZPADdTkVzM1tby%2BThz6ig92iS%2F4A66Sx2VNRb1HhULFzJ1MfrMEmg7Hu%2Bllt8zwZyxkruJSZdX434&X-Amz-Signature=9a4850cdda8da9b3f13ccfc0a3ff44c1bf691c1369646ea5b8b5332418386f25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
