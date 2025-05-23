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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=ed636b23d1f0b58e43c51bb5de575a4a2375705dd4c97f9e5f5083a24149eb52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=40a7000f8d996fcccaa859f81c203b786445b585722715d7023ff36dbd421695&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=3db5d13f80f59ea8ab716685052f26dae7447fb74530d3834d4acf035092e17f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=e86ec8a45ca0443b03898bd767ec2737a76fb0b145d2eb9de9440b6903640d20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=31983864407f7eca2f3f599b726d94c43665938711a6d966960dfc8793c2a71b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=5f7e1735e7804e948568745f00b1a39c9119548a3cd4eb8019e3d1045d86d8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=217d533b0edc3eafbe2c2d2a8d3000b6d3f548a36e2974d8bf12536dccc1b429&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBTQ5N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEc7gssKsnp8d0CXzKv7zyFP68v6xZ%2B5IQvZkwsZQq4mAiAijvMV5iAyqY3u9eXf%2FJhHoSEeugAuX%2BmwQraqnBIkDyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzXcRdpVuDWqTq%2BLKtwDQjq3vSG49O%2BI7nkFjs53tfebCvMBymGYSa8hDGwf9lDMMeG%2BBj280381bFSHTaVuj4RfK3kEhnpC%2BKS2tSs%2FAnnYfiAVdVLys3QBjMYg%2FLXjG3WAI8MJxteyt9n5zSNa928SEIE7rdJHPjLy%2BddCf9K%2B71g4yDgbGuTCMVMXiLrYEtZptwZLEy4tcMT0vA4oeLpYHP1rp5YnAn8tj16b1B0InmlCZvsrQLZV2Dq6%2FXDId3h3uqLZhOKqj8nod5PLD9VC0wLHEbrxsm8wNafmEQYAmYko4iAkbQaT8Mcovk3faf9sNFfU3xyi%2FC%2BNXde%2BNWGUolj5v1oGoDN0rHL6lX%2FJiOF75VZo8vikKU4rrFrAnlnoXoxaCoXgKNJyHwbpfAefJql6MIAxJEUZNqF1bU7cTcmULVyjL%2F%2BtqZPoZIvJRF4VQr8RWfCdiU2r04ubS3UdFYGPp9T%2FH3GTzD%2FVxjIhCGJ8szEZiGnMsQPC%2B5YS%2Fz3OdtxfXhHlKLXwLCA%2Bhc5x2JRp17ai1Ot4eM7NalTve1igPkKGh8gApqIDYKSudlSlgSPLPDqWdLje7xccNvri4HY95RCTrSvVZeZ7v7krbSFXdIlEokYJ5IkZxr8IiFpRosza3W6I7lQwvKHDwQY6pgEL079mUn3LPz4vcR8I108sl25XfJrMgpgYXfGWsOBBlqwo3YgLuubEjFJacHgMecOE9%2BGw4TddNroCYKfKgsD24g0sZwKXmvYnbCxintwUpt9V7PLQUagNUN92NAvvQIjoJ0L%2FJFhZ2J%2BuAwb%2BUvNZEMEC%2B6T3%2BWewFDSKmAECIQdKLDZJKmtWuAxe9WyYaohyhraQ2z%2F9H6oVDnDpjv8MItiKaaFH&X-Amz-Signature=61e49fb7ae839d1d23301f182f25a7881459f0137800bd531c0c58f39fb7c8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
