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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=cebf9c9ab6e34848d85920091691c23038f3e9c6d1c377f1175828c70496899e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=ee96f3c85b1b08f07d60c4cfe297cc229e3a70f433c6f0f045ec4dbc50e638e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=0aa820d87b61ccd4778758873f82aa4f5f5eab1c47ae525c9804477faf0bc79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=f888388371ccb678c3937c0b66bf6bb46ce4420db4e6d9179747fa983a36443d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=ff95aa550007ab1d227c86aff84cb6ae34ece4c27d4308fffcea4de1ab35c9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=75c356349759b3864975ec1e007a9d72d2e303061db6bde1d7bb0552c674e5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=d5d7e82435abcb1b9b910199954911dfc75d56d128737b0f2225c27d74b5587c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5DMOF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNK2%2F7U9wHgOJvnf%2Bn%2B5Cr2%2FOcMkNMcNBsYpXr11e1bAIhAJBUtoqhKH%2BcZpI8FOVjj9av2RwwL2H%2FVqq651gtVCMDKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHIRuSraZ7A8SeaOMq3AMkWulmzHFGf%2FEKpsDXU9x2hfNodrk5F%2B4CJHxknmN9aXu61QcE%2BI%2BeituBrEkECCbzajkH0Jpkjl%2BRtSyeKpkydeMbOw8I44oPVUeucCsaBX7wPGUDwOYntMcetVp5zf8dixeqTKVYz5uDp0%2FFqmvMRFI6%2BxQ6ndvE29aWLs5Vj1Ddo4XKtYHx52vdpIEddWZZ4lOBstrPf0EomyOHPsuacMca7BzcmyelZcxs6qY1NXuT4lCiN4idnYajv6DDt2hVlroa2pv%2F4Cn58%2FKp4MECYadlpu8tzVNYw3UFJjHXFRawhNSGiofHLPCmW8xkQd96QPb1LmjRTKdaBNMS7z23VGmCJs9j5I2jXUF0NHdmGR2t7Ahln%2BtOlD0QZ9Oc22xuTwSifoU8aUJyhxYiuj7W3L0PDKj0PhzIDjL0d53nCCSRvRnwwcZLT1C4LootSczWTIS9xjpGa61kbw5ML%2BaQzlgaVImJzEwegxN7s5ADkdkgMvvpQcAi3llq532o16E8FUIR%2FyqaIqzsY362EcDkwnpMcMiZWnOwPXKJaZ3znBY6%2BOZo%2FjkX%2BGM2QoO6xF6pxfLLRACm0b4dcI%2BwZ0KB%2F6WhwSlgEYoaysbvNcNL3HRwJdjFJCxh9T1TxjDQ5uTDBjqkAeYuz6WaBt5lr66jIXK5ztWs8aNVY8z9hmVEbGidF3wg3Fv9dMLrENkJcY8Cag%2B3uOF04iRSFLzynNNZeGM1KREpFNjL7YyZcMZsL3X%2BFJpXLYybHqV%2BPvo%2FRTmP19QsXZW%2F%2B01%2FLH8x35U9zXHpIPPEtDSBUd%2Bn7iSseZXa6bygR31TalizIKQZ5jjPXw%2BRrbBSvGlfRe4s%2B2sybLHgLXVZk8%2BX&X-Amz-Signature=f68c97120da9730d3e0ce26606c4d08a2305a39a323fc38f37be4d1f095920bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
