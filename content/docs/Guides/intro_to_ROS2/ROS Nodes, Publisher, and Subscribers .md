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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=25f9b31fa697e02aeb2aba0fa462656557b3903840300de7fae66a11c5ae38ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=dcfc56cd3cb7466425e3959280e7ceb6598c7ee9885a2b16ece622ec26a56029&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=67e33addf82e1f949e762dbb34a924b53480c51fef0755f396196d683d1753db&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=8890854ffbe1d4693ee6337f09e8c8504394fe50927a143edb1eb707aef20f46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=f0cc843ba1d07b7cdbe861c376e89e6b0ab026d52fe329bb01f070de227c839b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=c342a20f72809a4be43acb3c3d2f83368322a1108c9fad7cd29398ed645331b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=345f122e0056415c02d5086b229661d1b596ec64abf7e3206708fc9265d9eda6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNYZBT6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDF%2BTcLuqEY4aGCYpzbaX3h2U66e6B3hJKO%2BJjRLQ8HXQIgXt1w1n6TXzf0gQqsrYIpNcpytYDkbddMsGqGTFRkZtwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYpCxivzIb0THy2ZyrcA3ut1Wb1W%2FbluxsP3smZk5z9bFdTqBvuRijOZ6%2FUi7MfqhwDwyVYtJy8VhUdX2%2FvxqmJHSHClHyqbbgFtO14c0dM6atb1Re5GQfqFwHto3MPsqL%2BLfyJ7BcKmlkjDxw7LJsP%2B9fX2er0dBkRSKAGxE7DIpFHm4EUk0IitfO%2BfcqEScNGSveeU9RRQ0NkHIUpcq7YFv7wzrIkN%2BUVjkbFJI%2BSkVZg8lTwNN%2Bc5Sn3ypgRZaS28z8CQK%2B6VDIBZbRo8SzUV3Fiqkx1sGgJDs65Zmoyr0kBpmvSJbmHw2%2Fe5ylxTLr%2BvPwrrYVcPZkQryl%2FCGX2g52UCXl24jat15o%2FHdVB5hmpRDsa2G6qURGpAtYmzhLyVxkEYmuteSwDa48evBrInZeHeByrwaWZ56XMI4Ycc0mp7ReUk3zQPbr1GnlSMzluYu9oKEvKNE24%2Fxmjwn5TItalM%2FoJjKYxXvAC%2B7dkjxq3WUozAaNDyP%2FFkor23xfml66BARe1l8squykb%2FtzMmZxGWikQ00U8k2mSiUUlRW6jHqbggQ9Y3qOhgQLu4wH3m0q8P5gbOxNaM7NvHHyLPvzs6TOJ2Id05IoXb%2F%2FV2Zp8F1XqLR%2BDsM34ffgjMei7l9lJxy%2BspGMpMIXD4b8GOqUB0dFuWpPuaNCtxA2iEa%2BUWB5bDdq2lF04lLJJzM9CG9WDNJAxGUDuaJxXQDakn2tplxcXSKB1vSYytkwLt6ZNVWOy34%2Bjsl9vD3t8jQunfsdxv9VwaO7EVz9qywFaK%2BPYxKT4AChLnOX39KWJui3Tt6AgPghwRLorfApygoVaSNEI5luG%2BHvPzrcZJkcgJuyWkLc%2BPzOGVsvvoYDj9p4pRQbJDAoG&X-Amz-Signature=9c0306aa9bc7e3d19df83c844ceba776744d6b30a30bcce18616e4c2b3a20f88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
