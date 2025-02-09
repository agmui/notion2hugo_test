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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=eeaea3285ad0b70117f1c5cfc7e36ec8e82014be4f2b9a54f66e58a87f894942&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=1fa8c2365186ad1c52f71012f02cd330cc49d69a7c532d21750e45cf0b012ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=484b2a6b8154ed0ad55876ae8654a290dff02b6104cae50064ac8792832a4a45&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=3091578df949cc4432119558a3ae329452e83f6ffd562ec8c3f3b2c4acc71895&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=95ecdbb4dc3ef7da277dc602cfc58e4640d95056d55c921aa81c6d4e76a58673&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=c3dafb347e619cfbf071c6719ab086f5f31376ffe60096d7c902da5cb00fc252&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=ff11b06b6634a2ecb640f6780ea7a6b412b97453fd7308e0946194723277b2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRPIBXP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRM7DSjC80zgvOmjZ0pIek9xPAewT88DFwm97KIy00jQIhAK0x6kTLSYIk%2BbkZRow688qhiiW0tPR2cEqW8Pv83W%2B2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FUN%2FzkJVmAlR36foq3APQjmYr2vj3UiUpbWoyhIbvgEhUpAWejFBCib%2B%2BNfWJ17ulGSb0B6u0OUdNIp6F3aBXsnPBCtLV1GBc3qxQEt1KAOneOVm1d7FmL%2BoZWXONu6%2Fa0NCOGuYElQd24AhD%2F%2Bq6fVuXFuFXqqQ5JxLOoHixyux%2Bb8B51NoyodCJylhFmoj33lUmnwlli4%2FQlp5f97U%2Fyb6qhEim%2Fw4NYgi5Apu3IUTPhUuk7yV2pOObqzKfdfBkINIfDacDizcR%2B5G70CDW9Qw14hXB%2Fxo9o1pFBT6sbN8jDPMi%2FT2RwAQCUY9MKi3Jr5%2Fx9wwf%2BNOj8PkX7ocheYGIo8XMwOX9y%2B0NoLSKCRKpFhruZJBD3ncujttIIBAOox7Jr53RV0d84aMbIztCA348ZdxEjJHg%2FRlbuDniaxYEokwzNZmSNRVhPsFZqBDnr5yOoXAb4kCvxpj%2B1MEQDZoqsYvzxUBY3rQ7lnW9PMY%2Fpw%2Fw8wyjP36Xq6YJo1jr%2B%2FdyoV2Z94iLOzbpAYOv1VejU7TXkrJFLVHOXy99hyS2TRMV9sqe6SxTKp0L0A%2Bckzq5LGSi91zrCwVOFucjnsJTHq4aH%2BHCSXzBx2xXSp%2B%2BZqcqv4%2BRSwGlhMf%2Fjnc2njlKd%2Bar6uy6qjCuhqO9BjqkAcR2cVpLJRqhzy%2BwAI5TTgBHWbG1km8tcH7FZ7FeTaRQiJzr0xzyyHvqWHNVSOJ%2FQ13JrJvotjaGgS1uZ9RDfO26hT%2BXEOzkrzXV5W1jQUkT8YeB55rsiJsHF22cI0cJ%2B9RGyg0bg2u1B0bJfAtdaEmtZ8cyskC%2FoJglpQTzlrQxvvxDbulK%2FddQG5OzUWa%2FM0t2x2OOx%2BquUPvz9EPEY4eZk6gR&X-Amz-Signature=1942c2a33a3069d3fdce7de2373001255eeb0dafc9d9b78679cbd5caeb5ce9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
