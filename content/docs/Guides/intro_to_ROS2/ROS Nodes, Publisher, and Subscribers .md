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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=a31d898a668578afe28df3af7cbf316c5a2f6d8af51c0e6a2d2395785316358e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=a9eb2a7bbb02b339f3dea027857d8785095af12e31d4f7e5610ec9ba7171eb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=4786e39d53516f31e17bf58a58ff5c15564801dced637e94a3ad022836b3f8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=e373786529d6777f449a25168494236c72a52d060d194ed3f9aa4a51f12b3eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=f9ad0450ef98fb5d44bad7366ed13d9f3a3e8e80a5b59c7e48c183f0461a767c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=0017ad9a6cc3c24064decb61e91d81cf90509f05bc38d167eca717ed7de1eff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=ae1439aa8cfeac91fc1ca2f30a23502d690111ee6cd545063cf329a2126c8e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=5239a9b2f37099632ed7149c3f1aba00636b01953af3a67cb7e7813e82a58630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
