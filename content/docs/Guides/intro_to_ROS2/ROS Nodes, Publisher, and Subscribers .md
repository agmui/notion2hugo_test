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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=527a2a22b9b4d3ec20056344b86e09fd3f8eb7cda4df4038765cc0ec6859acb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=c83b0a48c825ca315828632ea4c93cb6f6d9623c599cabe43d7318ad606a97e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=42620b792f6e0478de3a73e8e2f30a095877f00dd703e3fb9e1ee952f06ceed2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=9d830127300658270de240a21016eb2b802292ef60c67da2e86b9a9a6ad124c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=dad06ed53094a0bbad7a966892938b1d26b00d9310a0d6a150f3773a38dcae6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=024003d8be57c261159f0b9461e92fda05de01edd485bfd1edc24fd46636e7af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=92f3ae99e1a8c1ea4f5ae1cb934782c2b0d7add0d7ae9864e8689276ea06f29f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOX5R27%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfaYrK9a706mB9JUubH7ZE6M%2Bobv%2BWZOGNTvArGhDYIAiAIjF%2BY1AO1AQqEOYdlApGazIwkM41BfggucV47YBRUpSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwx2VOAQBVJrAP2wIKtwDkghhhuQG1HlhLFS3SlgeQ7miYsLh4tzmrQxh86qZu1WRuATrkgIDxwCJEJs9vcNKFe6dXRh%2Bnm4vvRtuXNfmeVbR5HXVQop9g5vqRt%2BK4QTnkR8UvyJJqItOHJeaWh1DjbpEoZ6lyufcu7c88nNuSCSuhTCvIa1X63EWMQy9uBBlS6Te9mb9WgSL8A1fGfv9dtga1cbPbahamiULYuOmGZeZdnRyK7mkaAPFWch6tYKXNa%2FAPR%2BeKllymjUVt2sEvDwDL4whOILJUN6vwguNxcbNckEfxBiGxfJHvN%2FojOlT87%2FYmvB%2BeSXRC0xkv5mJ74WyBSSNH7iJG2o0DXWq7uXICRZNYSFhBRAKDlRk%2Bf5xAqkpEbqGnh5flQbP1U769i7P0T0Tc3p%2BlAyRKikTpyC79Biiuqj%2BG0w9VUKKjRDBxkf2q9a9rXckuMJYIu4g4P7sBnrsYnsxZWC65xZydWa7WDC9pMf9FgLrL0KBISJH9vvBKZrvRQ30ciH0j0U0Mk3jO96bVMRu1CBQ3xYSGgNgqzu24kszZ4F0GW9IrL816kY0QBqB2CJUtgby%2FtFGP56nSY07bkXRQ00iyV%2F%2Bg93YzNMCuDCp1F5Wfu6G9gdbcNr4Hd%2Bv2BMKLpcw1ZX6vAY6pgGj%2FMCIiDeceGfIwhN2fjqoS7XhQvlA1Pt7Mtu8S8GdBH5QM6fdX2wnepsZmq2jciMJQCR%2FIpa%2BHcj1EWIvf6f1CSWk%2BOXVvn8r9cHDAX3R6cdXhimjJMaiIUQGKchi5Y50NAtCzRTFqUwxy1NgVm3kJD1tp3l%2BvO%2BUFB7Bncfeifwa8f1v7Lz7Eq9dnRPb5lv71h2qdNO8%2FvIiE6Y0QurFr2R3B1rk&X-Amz-Signature=5a0614e88aadffce6a67092067e2b546d8ee2045c8e2b709b9c9d3c7251f1e18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
