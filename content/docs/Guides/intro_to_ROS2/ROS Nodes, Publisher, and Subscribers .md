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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=5d09a9e9725679f9b31232116ac339d57bf4a89cfcf0c417b980d21f63375f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=55e845323b9e06e78da3410ad413621e0098b8dc316b68eb7f2d8c34a4b7e0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=dc280613c5819c2effcf26eb938ffabe1196acd79256cbfaaf61a069aa7b6f42&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=7ce5c55a07390e98e5911a958fc20660103bb7fbb45e80a028bddd2e6c215acd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=84d4c6beb13d8c67b4c1cc3ec3b012b4b612c993de5a841eb93140ca2bfe162a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=27e92fcb2c3f463f1f6405acada226c3b1b95dc0ddaf6fd9bd4227de4ec3ccc3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=65c0a99a6f294474750838da65b1257c226886246ff42e323566643b9d292eba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRDKJ6U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbLfaEWLDAKrKcYw0DunkiXVNL8gLS6h4zvZEbUqkeQIhAK9wi31YVeZqgPCsndCeUtf1abwJrR2RhFCBv4YOz4WRKv8DCHwQABoMNjM3NDIzMTgzODA1IgySw57wNfkHQtEt%2B98q3AMqQIzu8z%2BecYJKShLa5loKAkVPsy3XnZm1y8CwKJtCjyhTm0xA6HMb1zPGq%2FZpRbHDMPmsmL9fOVJbqSBRxAhim%2B0onIyIN1k1zxWr9o3PWEM4FcRTh5Gy5OSb7akcj%2BiEjqysGid00p81Evu7%2Fl0a%2BIQv50WS%2FhRxCIZAFfGeiPWQPjDg4nzcyjLg3y9ohu1xBVsoFzfDQYuGBLRvxb8Z9Q0oy%2FmZMMCmVmm1emKp8hlINZaOb3bjVxVbQVNyErRgFV8g9OWTb0u%2BMNC1ej31B%2FwHMIsGAyi1%2FHG%2Fz48L6mSn00KgWENX6%2BOdhMz74H9cFzRHGBSdazW1AdmgVidsymBvfpIe%2B5PDPl9RSjEDgDtWiS2SMucoYDHcBrROc8dd4m9bxu9%2BVoT96vXVrourJwnPFhw9n%2FlPOlGFk31Q%2F%2FxjzUxq7y2JefYlsQxaB4GnEZE4dDCLu9Q9%2FAOmw6fl2%2FM%2BhE%2B0SuSFZbR4VMfGK3KV59NOhZx4MWQgcxsUYy0U5qt%2FVOp%2Bjmwg%2BjLzfq%2BBp2znwLmF5eVu%2FlSzYwlyAX8M7eh4pL1fvd4f32olm8ivBu7Su8Y1f9%2B0ZXugBzWOwDe4MRfSjQAsWV4LoqWEc4aekpZS9rpAqQK%2BszDllZLCBjqkAa9V58XKxcX6CnKlFrNgcqywffa7ewBloCPHzR1L%2Fdm9ijyVX5KjlVFw72KykaAV7jSucdkPWsVncmGMI%2FHKaKsvTv0%2F9B0E6eWH9nnX5VU8czzPyvFzTU15PgHDL7jjlSY8cOiMZPhhNExftWJyVOK7T0F4S%2Bfcn7EdxE2nUF%2FWcDtJI2UpBpLkJa%2BOu5AZ2cT%2B0g8qMK%2FUN2lKo3%2BbVOo51QOm&X-Amz-Signature=0108375fc6b0d4422d2a29340348b5c982cbc759b4df1cbc144a41203fcae70f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
