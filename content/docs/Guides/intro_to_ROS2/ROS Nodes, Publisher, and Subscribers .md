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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=85515f71f408211387b5af30d06666fea678c006d8b3eb08a4462e3010f41b95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=72ed0610e9307a4b22de8243accc3756c743bb734162dc027d6a1f739c0608f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=5aa5c3af531243cf12d99d253a58518e7012728d5b7b61a60a8202fb2360e01a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=bad956f3771b5d941d5e7a4ea7a49affe9bf74c758753bd886f98596bf5d94c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=95f4af287fc32cea65afdb7e3bbb3cd29776aa7daeda74da131d41efc8dbbf7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=4123c6dddc4e0404db107413b2c750c54522fb943987d2bd78af75dbaf855ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=91e0bceb9b76c979dcce8635ae27ef8d460d91dec3f260189046a5315cf328bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF672PB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBtyrt0AXo6ABGhWbB%2Bc4SKRD1Vj1fvTodzmi7EhUzAiAbCRtUtHd27STNDU1tcUz%2BgDubpAGBmLZTvJMPzeAtqyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqCuDt61r7kiXWuQ0KtwDqwrf3h6vQ9zVaai9gehRNEyiRBTPRzfz49qrtv8RiHWmXtxavRo1k39libccQUcYVqvrCp0ZiUIKV0Xq5Sgv6ai4cflqAaUBdiEf8NvGRg2naWmIY80RfKFeGeRJdh0aflMMgpGRXxXv%2FPepONVu8XkvqqmNEj2E7kE34j8PzX8BuoMpddNKZbrbbg8kNKXJ7Yx4HwA1gwuzRWGFjMuYdBPiG7wq35InfHsi6YVhE6ii7PaYeUnvNyu%2BfG5Qc93%2BjCdwFeYQTDETRCneA4QIuLONovsqI91MD6CTNGpABTZEJveTBU2TI4PrR5f8in6rqjuZBQaF4y4cjePOWhJ6oIfemzwOjOHhSTypVgstN6Z7tDvvD4Fyc60aZPcfHvcnH945QjFuX1q666Smt2YOXDack5D9fTKccvcG7ahEAtRrERXeZibTMiLFnPxejpiW1x0mAxYyZqSNfyETtRvT8A%2Fum9bzTwI4vvQ004r3uZRuLVq6qAeZCswq0yYCgDCudoyjlUsG%2BKmJvBvkCr5%2FFKC%2B1%2F0cN0Qi4GEBdUCoCmQo9htS5r%2F8Khdt4K7xI2Hr8%2FMrl%2FylXHj2VIYva3uhJ1SZokbPRZDA2iJj%2BV8uUbySHmQtgcGQOno3vQkw2YDzwAY6pgEnZIpAn%2BUMSCqrjYgVc37w6GXmY31hWcQbrQYr4yjDED02asywxwvlsK3SuTmHA8oK6nztSPbn6wsJxGzmT8HJhhSfNwLaCTh%2BSmKNZnFEGobx5JaGpdkvu8xjo8T4C06aXMxMge8D5X%2B%2BbHR1EAt31naGRVNgU%2Fdymx3eXVj8SSzKndbAX6OCSi%2FMPIcA13gmq6S4gn2FjnvAaniAURUPYn9UmZ21&X-Amz-Signature=740b2529e8f3ea8cb3a154417bda6dcde049c6a3067ea7dd48bb604905844fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
