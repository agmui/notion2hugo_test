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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=e9be3b103e4361ff3727f39f046b96a503e92823db1d8e151ae95d129a52d49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=1b6ac3a08be8c08f1bbcc4d217096ab4182a6a53b9c0fed7bdf05a856a2600d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=d9f4ffffaca9ecc10c12fbccaecee1d2cf6e1cd26fe7caa88a73f4f8bc82948b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=bf07b12dd908c3d9b28809f54ab8d11832328a1157fd47a73fb2c9e98c97df07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=c37bb807b9a329a109b2df38130fac5d5dafc9378930deb83e47c5a4f703f607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=8a14839680eda4c9670005435d26f94f4c68e04dde034a5d49341ee95122c2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=dc82678a4066edabc5d6e40acaf2292ce6569e492359f1020051d267542b24c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFHPPSI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZW7Cy9thOAFL%2Bh0mlWBHQEo%2B%2BkfZmB2CQq9B4uRbr7AiAXO%2BI7JjRR6pKTVlSuXpstyvvSRS7U%2BIWT2ycKPp0h%2FiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9HPr11xCmPbO3bsKtwDNBS%2FICIhiUwC1NB6TDq4gHqtepsyaCrjjF2vq%2Bv4jtukAPIXL2W7%2FwkkVhkyZyc4JryxPca8dIQ9rBlRFl%2BHhoDgBplc3xA0djCQN1QnnqrQgzY%2BsvT5yeU%2Bv9FSfIuxfzDDEO%2FYmrwuFT4vUFZS6QhNMxCMP%2Biplo5DuTQU3VwJKVT0qMC0lDPt9BX2cT9aUi1Qq5Q2kNoynH9h7BxCe9xyI%2BJlpzhnhEFwvvfF%2Btr1%2BGk29JjMDM63RV6XmheYUVD1VhONxcWBaGxGqazhEUmDuK5%2Bl4kMHnv8C%2BkKXx4eG7Du4tYva47lunhG1%2FjjBZO1KWuyNwwDPm8XMyTemPJ7e3ajzInPYTnSNn3TSsWI8IX5aBW1XuZMOQd6CIcj95ypp7IyBucr2iPwDaBLNdFeX%2BT60x7KrJI3kCdOiaMwrmtLlsRS1XXcdwL0ADzmmJuBYPms8hCfT0Puaa70P9eL79IL1fghMM9Ef5PGUZ9KeC1AH8voJ59BNZ%2FY2JtB5JiZSg7yyFKCKy4RNTLdZ95vh1xq1S1Yq9K2yyNNazWPcBFqc5ULuWRQRB%2BpDq%2BWLT0MIhNgTvjSVfw2rIdQwzswyA0IIORmPGn4z6Q8gCTSTEhLLmkWy7HJy4EwnvqLwwY6pgHsKDUiXs9Gj1Ik0y6FmBTUF23fxxwhWg4XXErAT0e2J6XScJTj3BUdw8%2FvXuJ4kC0FUQo0Hlie9D%2FqgZSebunQGdNPS7Iu4cYNtk4T%2F%2BOaqcW8mbTq2CvdxxANMhiresNYSbb42Si0p4kfwAu2n5GzQ4zjiWN%2FGTpeGo4SBkThNxYqe3QshSbi%2BhIFD2ug7GBGdDwOvSYrlsBUiRIcoLLu4Fv7KMZa&X-Amz-Signature=bfdbdad726169ac8aceffac5aee5404ee56592b07a7f01857ad3dfd6a613f8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
