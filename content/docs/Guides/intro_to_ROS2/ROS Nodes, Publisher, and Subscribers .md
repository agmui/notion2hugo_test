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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=c4402aca59bfe21d63f4ca2d5640d1352648b41dc32e90ef0c54909c6e945ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=11010ed684ce9ed2d6f47015c983732041df16de34acaebb794907d3f2b12a47&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=2e4ec11bfb54ebda6b6c49208adeb2e86764159ad3fe49cb6b2efb9b0c66ec55&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=78559e8b1e6fe0034202e96a93cd172e406a2572544e73ec1ef8135cf8d3d276&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=c5f561bfe2572b5908b262f0de994c82c2c8544204898ed9cc6ad2df81238d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=6005380f3cbe6146f8cdae9dfbf5e1666b5bbe69314f067c843543668f4512cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=cb0fb034f3660dfa7b363bdef93707c852acb53c9ea68643f661121631a4e2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=4f6f1b42f15caf1e6925fbbed59951ffe4765c2052e19d084455f75b7e435336&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
