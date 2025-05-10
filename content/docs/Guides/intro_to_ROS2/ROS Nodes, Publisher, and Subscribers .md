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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=941da42421cc93345a354e1d1764712b5ce6b2cd7e5115ffc489e9cfdac523cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=717374940ca816d8fcf5a69782fc22b2aa8bd157d5a6e84023b845c921e346a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=8e950b8d72e579cb4af327e747bc39396a477cb3a23ebdad28597c9dc3317b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=43c35cc68b1f8c9bd504606ebb52daf527107c8d70665fb988c903ef09ca6963&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=fbeaac055fff637cd573a3bc8cacfd8c9190237f88454977f05d98f23f4fd765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=34ec1a4a3b9a466c2ce171360eb06bbf600a6bf867deb3cddcbd4ae056e28fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=671d81ac1572fbdfaa380285d31e51f9d1bbad9b83f276849992011567133ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SV7TMD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ7h0oBtxMxkwH013nVIioei48lDYO61fEk%2BxhHWYGTAiBFau%2FGP0bBNUwsa%2FNByfpYapoPxklp77%2FQ91whFAX5NCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQyM7xo%2FUhFnCY5IKtwDDCrwV6cBjX1GYQyVVzuJN1F%2F07ewO%2BB2F8zygaPxEHcGHHM%2FS8BvnA5ElWVjfbL27tEbJAZaWCJMULQ0Uqp8Qstr85j2UFkwPQcEmIf5PGHFX6ffQ0KsEcXHvgnMalmV6lPNDuO0LyzrzoqPpTFXSQcgdbhY8XZZLBRKzrSuhsZE%2FN05O7sticcEypWFpoj0GF%2FUYULd5d27c1tXhkUSqiepY0QBFW9%2FGmnOZd4NQ9wL9vJw9gqWb5Tvh3TpTSf%2B00i7BW%2Bi5hhPRh64POJjrpxwZbwQX%2BTgfLPz%2B11dFQ9I9R97PhnrKkg8IzTQPv%2BsF7uX%2FyUBotS%2Fby54eMaBAd1geFWOEwm4%2Bm0h0ch%2F4ntTstokWpxqFwRdR7%2Fm5QfFKN2xF8TXCfpX3CxckbYXza2Swx0cntI2VKq%2FPDLbBaRTEB7InBM87uKbNE1%2Fz4Xb1eLNS1vXRNUVhDdVrEPiGrE89C9bSkZIOiUh0icBIVZbNS37Z7yRFtt18shVaVU0mBwvJ%2BwfzVSVjt9iX3f9%2BJrlUXz%2Bv6FkzjCRVJGyAsDi3NJzApT4XqIeJW5aViaZNOmtPV%2BoLd45En620ysFciFsM%2Fhary7wq64N65va7n5gxBs0I6sSK7qlrl0wrrP9wAY6pgHtDNR%2F0r%2BSSE5Nf7vLYxErtuEIkY9xNZ8bYmFr%2Ftv%2FZLuS%2B2E5NuEosNxSYkosoYk2Crr0SzZOigrfuCZFdA7blS4GDlQRiCyv0%2BidVXkAFuefpI05NSkOBcNzh4K6FLhFvkd8UNTrVaiDuwSzYVjUi%2Fwac19BtfVCeBRtaYyuAQ%2Bh8mNtWgvgH3Q4KCM3eaczWuSkL03hV4INO3ooF1iLGUb25WEl&X-Amz-Signature=7491833b8a7ac1a87a289055c0baac5426666a1158abc20969f67903dc3bad89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
