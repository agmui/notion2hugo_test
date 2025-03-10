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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=1dfeb2efc1757271a09527e98c4ab96a9eb46993743ffb3d1f5b4b383630dda4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=ca9ab837db2a7c033f1ae7debfa3bf691a89b4b997c908f6e9f1946a8f7f99ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=9ca93610756437376178e3332471d35cc326507471b9e737728281ce81b6be08&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=eed83cac29282a1df48fe7189f8e268a68cc29593dcc7e8cc841a610a0df706d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=ff1cfb0d40a691156257c4884a7b513d973c1cbf79c5c5d848140b27a4e3f291&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=ba2c607bb414f1976f882c37534aa6fb876ac3307bfc069feca66850cab6a045&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=2483016f69baa99d010062cf9561d776fdd7043bbfcf888d3d7bc6d4feccf10b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EF7WIER%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCRGF7H%2FUCA33%2BD4R7aMoPcTVuh7T9jPB7D65%2FfvOtRgAIgHGbPKrDpj%2B9tmGzQkMJpS7GYCLYjplg%2B2aIeR29fyLkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHhejBZ4p7XyJSMqSrcA032Y2DYPz2bowCCMalYsV6FJGeL9HVbBUKXTzSiout9hLjQflDrMh8hcXttcN%2BzXTe5YvpiDXyJifaYOh4%2B5Irm1fg1%2F6Xa%2FgbpFTKgWyZf%2Bc9bRJWRHakbuRUBb7o%2BwWx%2Bcn8Or8hVZIgFvZQoim1TUYV2yYhLKL8RxqvjxWnjjsPbbDA6Cr3XeIrWDSNKbHBdNHgydRF6zZFJ%2BxvAtzHqK8vr2sHKnI9m5qPBg74IHcT6q8G0xiGiGKy2GvjN%2BRX5DpGqq7lAHr%2BEYbXLd39syt%2BrJbnIJkliqMVKtICOmY14mF5opXyUN0r1sPE%2FH9XMXzuStfLsW4y116L3SEqzAV8UGhEcCjMIC%2BYjnGFPiMqO99t1fKY5EgBzRAL%2Bdw4SEXY9KF1gqz%2BJAziY%2F7Q7ruGl6msDaKK6vuiuLtxxUUGGuzvSFIDzSnSZ1QUZILLSKxZvb4bADSTcunBhrToJ%2Fy%2Fo7wK6GnRJiJ8hYD7Eed8gZuQK8Wt6IgR5KfZR1r9t3xo4M%2BNV0nC2F6ctiYDLBbwXDhIgIC2%2BI3pfHltMelzM%2FdWCqfOu2eVqUErPQxksMUDg%2F6mM6TTqdzmKYWKaIF2rpclKpPX6XyJGLPZyrSbfB%2F2eSQ8qR1UYMK7our4GOqUBX5aGEK4scIpdNZKl14NjY7AledrvgpnWrPbIabvruw%2FKIE9q2kBF%2BWQ1rCMa9IXa%2F%2FM2IjVYh8ItDLnir%2FLixPOH2vLfxcXea93yez8vGC1BN%2BKdmJUlQk1RDMLSmb9r36CceRqW6loDMP9gUyHhdULEM9V7KYa2wVE8h4Mpz3EBdk7qhSjJyq4s4AY%2FH9km763LnsQI5l%2BgsoZOR1YbRFE751FW&X-Amz-Signature=e78abcef87d12b512f4fd4ef4f6ed3eb4510b0491a7bc47cf2c5b64369189cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
