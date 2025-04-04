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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=236019e3a8124adff5b9b69818de7e460e1f8a3a3bdd0b12f3e5d7dfd33bc4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=14e80d3364efed9c76a5d152dacdbdf4b7b95fb09b34dc0d44a9695f34e1b2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=2d6538681ac55b42cc6f954626dfe03bf7b09faaa9d22731e7296470c1de29a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=47645a0a5f8ac9c615466241b2317e9597a61d32d3ee537711d83eb55d23368a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=3368924bd66d3a34b0ea6a455c04588096fa86f8afb08a12829d510b3ddd8554&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=8600f13c23adc1fa8baa7a4a4fa4e470775dbc7e6f94b7dea2e449828c93fa51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=3738b7113a66414029d11450b6c6b1e6f2da9b6e966878c685b7bb3c0771757f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODUKKV4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4HUfw%2B79%2F8%2FiiTfBNvyHXB74axKOg%2BDC81mqVvMkfwIhAO%2BpQbWVxdUzn9QqC7VYm8JytU2gcRvHJh6vgbtqC04yKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdEEvl8Wp%2BxGSMuwq3APxV3X4ch72kthMDTYgoq2CRKO6Dg3MFc4nXHkm01DSOM%2FjeN7X96LSwj1aQA63mFA3wJ2WskfZXesXKQp3xQ4zAUvEW7q%2BJvXkqB4KWDhcx4sJ7aw5EUsXW7LCOXKE14LHs1vV0m5qeWp93uPsUFut5w8UH4erMA3covI5dGqCBQEnJ%2B6FVHeTh971UUn58Q2q9%2FSyi%2FiPK6SUDEZeksWlHz3R102H1ZRBbyQURlIO6rfK1Bgl5%2FQ0mtrd4eGrFPvpTrnpwcKvWTIaOiJeTlaJoPBBLWNYHzdc%2B99kZyhQ5DzPYRg5jIDSrbOqho7tQ4hF60IciaTLvLyKeOisa6QyWrZ1lcXg4neMSbMnR%2B0750KUElgQyDqvU0%2FgmNR1n8CwZ%2FkerThBW7a9RFwDBLBVnzBSB6BdILXjhyxXHKDVLKoZmGeNYR2QsnvV%2F%2BpKB0BJNXLoJmqkkyV50k03qiC6f3x%2FOxKum7lpMfSKHDAi31%2FplagCydo%2FvIv%2BKqchV%2F25yPxy0Jw4TBNnfd%2BRoKF7UiT9pKA8PEEFQi2vSeUO%2FEMSUDs4WoPoRhlZ865R%2BuCsQLsWS2rPf6oxT9YmQfQ3X%2FjICXRtCawOI24Lpv9xlgkKw6uATWYI%2FPrX2zDFxb2%2FBjqkAXhO38ffPv8%2FOXHA68tg2VigP%2F2ww%2FU%2BQxhXMkAT5ogK%2FHbqVupj4dJfBO3H4xEgvS8Z636dPP1oWqOFMSNLwyVoH04iwwSLZMv6qgYiHfHGMVcBn8ILkEORbhtWqD1A9sFX9B%2FW8T3t%2Bf2YD8znMsRa3oQ9ch6SVkp0QbK86egZjITFOGUng%2Ff3tFQ%2F1Boh3LoQFg67Qf3sKw%2FLiCGdFzyrnij0&X-Amz-Signature=890b80734c8ee56e3561797309626878b67a2ac1e27f3365d1320ee4b33fb127&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
