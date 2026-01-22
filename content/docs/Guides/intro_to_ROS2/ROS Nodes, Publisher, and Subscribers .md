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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=b59c26e587d9ca9f516d3f36044f4144c2243ee71bcbb0d046793df8a45cf7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=141218186584ed55eab5bdc03c25205613e8ec5db03aca80bf8b617ca9b1c134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=557a5f5cf430a6af67c818cd3cfe01648087f513a949912b659adbf855821b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=7a1755d4ea1ade2d521d27f8c508465777f6ad051af11f264969878de7bfcf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=8fd40ef3a4936a326a70e58941fbfeca6ce803e7d3e5a855a259c5da713815ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=eb6ea2fcd64257bbd054ba1663658b4b67b38cefdde82733ecfea595f27d130e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=0a0c6ce081045ca86c85cd509350a48b6913fe698545e6a2e3ee974ff7288dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDWERQN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCPK6%2B118Q3x3DoV48dO7cO7uGbIXwom0eqmVaC9StkvwIgRjYejTI0FjPrd1XUtIpqE3B2mgVzeoVA6xP6D2esTgcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzKqo%2BRjsCZnzK9kCrcAwCH9K3hcKNHdsjrX1dg6HJNo8QoBXe76uxZp1B8RPDRGc1bwmX7UxK2WpHOZ1OZq3RAQGM2VdhYuK8OJrwH5IVfJBu%2B8yPo1BEt5IU8i7PHHUWju4HqNOyHPubEORO2HUUNHGaN0%2FaJbc5tIPmlCMOk05lsKc0BY5p8RinLMttTNPAZI0S62Y1FKK%2BMKV6AphloCEbwJVZao7%2F%2BMv0oYE0QCUqLQObndwat%2BNnvHk%2B3wwUwrtEUnhnyO%2FqVOEYblNQ06BnCZMxkah4mei4GjESuUWBE4zuRzKmzV721u%2Fp6qukh7m92GdcLmBD2Y3D6sqV0Mk%2By3NAAkSsn7Ln1g8kEw9ezTchwDVqoPozxMfH3S7Q8tUNfhMCoLSLTpdpdO84DsGeueqnrMr%2FfX64AOP8TujLdZDwxpWqArYu3M21uFlz9WhCuLr9m3jh2d5p8XvL4GA%2Fv1L2IPnqGA5y6UjZ0Vcr6BDzYQzq5Qm7vfKtZMrtTNJ0puCdBt%2B92lETVOjH6WRf5HTXCY9GmxRKuOekxcKplAXefBDm2yCLEo4uFpSMzGPP7cGRzY76gPoIbpxTbSIDNoMK6zATh%2F9qN6Mn1pv%2F42RWUfP4r7M%2FQuYEre8esxpb2OGvsJcqMMKvYxcsGOqUBcf2FoeZOSCX5BNPIfPD1TXHOHgA563TxCncHe3cJAijfOY6k0nKfmv3mm5WbVglCw5xQI6bMXOhWEUxPofD4RAk3HiO6jH8x3beFBASLRKs6XcefvLLWEFWJAnk0XAfnL9hk9vMxTKA5ME%2BjRT2KnNREs6cpr6AWGccMhRDaDuR%2Bxh2wh3sYNS%2BQPDIbr9EBXzzIF6YTcrUkrMQFOCOan2I5693L&X-Amz-Signature=6f34f6c6624eea03165ebd91155a9b4e196704771394de3b6cdc0c4b7a75c30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
