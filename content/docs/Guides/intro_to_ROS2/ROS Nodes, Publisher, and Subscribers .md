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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=6a8ee648af185e395463eb76102fd92346ce99d4f4f82958b0d9edf714e28bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=6e36ebc21328d10f215f66f3572e0420fe12842ca36dea064d712b8bac8dbc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=8ea9a58871d4ab1a6d1cc5e0f41fd4a7a607d353302773a8fa4f17f67df42543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=3de2c4538c735d57d1db7b615d48ab12bbe01c5c208ae0294aa72d898ea866ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=809ca152e7bd6724a8871518ca72ee2c42a7872824e0617daf588c90b46e3a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=f8d35e3ae5e638e20130a1f6c6412ac66480533a6f577618f7459bff8abf8a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=c8edc9501242806e49202b2e244ff447acfc22cff4f2f7c104ad0f0b3f765ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXBXVIJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkpU6EZ62jxe5ahwZ8Qg97BUXFiWeF1owdf47KCNpnPgIgGz88%2F9rPk55qa740H0Eq56ozkcOhk96Msp9Z9uDSH1sqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPByQD6xuAAszweAuSrcA2MC0akb9W2im5l917t1wG4qI13LRJjPQdG8bV2SCDWC5C32AeRTFxwxD82JZIBYGmlMC6k4XWsMJ6cBgcdBNojc%2BVQSbeIk9%2BcmJUC4H0pstJX91sA0%2FtkluilIPRBpSMMyQ469O1d0xGw4t4TIfeQ%2FhTWXjVcMPEZ9R2%2BBU3kQaMf7L17oNZkbwBGXxBOTr%2FKYf3H22j%2BKAfSDF9Ni3nLZMDlRqcEhrBMtPze6o52KRENwNC0%2FBBOBNdb%2ByiNsGQTbQjHOlIadiv2Bpa%2FHxZEDOSL9Yvw5IDcFwTr%2BuBWVULMX3v20rMF0Dy0oSf3GTHWzOTfhDc3kv3kOOUxyE9G7S%2FJ6OEPNaDrvnDsLCOA7B%2FqVG8ERiHMb1azSjg9n4Z7TZkwlxNJpWJUvxvgae0eZyAOQbxtjFJmi%2BQKov42RHgkt%2FCSk3g8jiujss0D0K6QyhVoRbuizq5QOzl%2FdG%2Fo8kErvLVCLOJhSy4vwJxNTrPd62CKZqOec0yD7DKK6YTwzCQ556YUPmejx6Z0dM3L2DDsTFH2D0qTYg7C3jaOJas9NuCxVjR6Qi%2FVK3PuqpoeHRzx19RNUqihwblwxkqMxcVekMySzBIXtjB5IHe%2BD7viLSaNjg035FfhyMO7Jq8QGOqUBdnATln%2BJVyzcbbHNTpygqC9ZgGQrdt9swd297hfDs1pZLuP64%2FH38SOOx7UJZKszRxDpWdpv%2B%2F732ApdzHdXCY4cpmpfysmZ0UcqXyT7cC4XtfJfBNpA0gS%2FRVp3Nxe9vdpZWfcBy4F%2BAluqecan88dIbycuw6rRKMlw5sLg3Z2m83XXyp%2BD48mmkqjZzGpPZRiJhVqHd6MnZ13NLd%2Fl%2FErd8HvI&X-Amz-Signature=cb3276507cb9bd9fc835677ba71f56fc72b010b8f675dad1212e9228d9814e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
