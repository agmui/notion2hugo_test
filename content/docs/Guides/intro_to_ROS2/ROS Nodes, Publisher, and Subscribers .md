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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=c128c6213737066ef95efff3bd8cc90f6b79681e1864b4308fdc676500cea5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=e24fe80a83e4ab62595c540c7086465f1b0ca4e808075811214935dbaf893b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=da953b322dcaa55adc97d7bb565d259384fd3805d9362ccc0de9969d38543655&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=4580cd697b7f5aa24224c65430d07ffde7d833698a4785e33935eaa6ac484cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=c21ce528d5bbec6527438dcba5af7fc8962b9343a8fa02d070e00ce9aa556ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=d12fed517e03402c0d663eb1c348a19231194103a0d2308e9b00c28beca5faa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=84040ded37ff8ce1f9f1a2da12c657203ec931d90d9d8ee3bceb0d9acc80c51a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKQC6WX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEWC6PHBdeSY4oxoBYZ7JOCHphDNq%2F8ygpfcqX59MY2rAiEAiBZzbdsqwtLtjRJasvAczOSPp180hgxl%2Fryl7P0X9GkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCqfPjulmCD5pyeQircA7Iwqvmc3xbgbuEdSExI%2BWl8Tv89JNClzfOxCdhn44j3WRL%2F8EMK4t%2BMUPRBt6RLwzgePLaJhTRLrm%2BJ5IQYaISSNDWd%2B63hwvIDem7X1ndpKy8M1%2B4E9Pp3VoAodBNWRcz5z2QCUkyRXj%2BTahj4QXZHOo0XoonuBx2CuY%2FEUx9vPd07orCCzglzwMKf1FAF1A5TuvMZyOocKiQ00b%2BJNIEI1Do9aEPyTSAAP6W4gvY%2Bw3lvqFvGbnmrqr6uJrUAobuVCxjo22V5VPCwKt3qg4GGhEWWMLV69V7O9Px412eHAfrBTRgmMjLLrWZsQjidQx5U45ymhrClJxE42M6DhbayoOK1iD6GSOmvPBvaME1kxiwzQS52cQjaqMgiNYbstXvL1xuGl5JJcvfNLhYiIXcWlGWjAzY8NkMJtAHanc%2Fcikc0kVpIPIAVeAeNTT8RKZaMNd5AZ35NiXERxLTN0vVesW407bF5biOMhExNXzyIYOBsPnAc31Lz%2BPTTT%2FWLMtWKH9vJJowz33YdEmsztcDgG0xdCqvWwRmZ18uD0feP%2FpDJRZ0UpuEem4K0BVfTLlXiuAjM9h1Aj2QPX5cl8WXQsmJ76sblQ906s1oUC1JtFzOMdh0t3%2B%2B%2BjF8wMOryoMAGOqUBRbdeNtMhzi1NEzCI%2BGht4tGL0eVTfWc5DUURAm%2BqOthTc6HiDHYTUslDUWcuDO72cmTRLVnmpezswH5Sti72QShRzzBsS9V9lEYZgLKspxAm%2B4BQspZfY9iTx7sEqaaejk%2FzbEvi1BJQeK9V9FCpBrRFx0Qh%2FzQ6KYeYFuhcqf6P3bB6YUgchTl5XqTlB2i575veixsLuOPOnAYqsyfIuJABjnLc&X-Amz-Signature=b9c164ed9fe61ae836772083f423143b65312440047a3b3529f259dc14489feb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
