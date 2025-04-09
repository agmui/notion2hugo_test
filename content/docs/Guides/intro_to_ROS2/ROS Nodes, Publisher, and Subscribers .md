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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=8562a4ce88a193e569c69645d2b773399d8d28965f9f713ba3d82dd4ca8ff83b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=1f8b66375288518111d10f876259ce3ac8d717305e2a109e87141b5d884ffb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=c59c9c122588d04c017cf26fa70d3057162b5eb93b39fb56e21d8a1dc56eb260&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=5373f6ae925024fe4d5f681ce75beda7cc980c746761b3b7236ca5b781dadc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=67f5dbb9755291bda85641df8bd30c28f97cb9ebe9b8cd505e58e75874b6fbbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=fed3baadd6462bf16bbd2f9178072e08e8d7bdc1630ae24bfe4116910c36baa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=37a06aedc1878de2b0fe5e32e4d631cd3bb6f8337265bd96377e3bbab528d6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R4U2AL4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIByV3PrkmX0uC2hkHbcNh2MQ725lUiMefpk%2BCSHJuMn4AiEA2DPJCCgWGCeIeUqRR%2BjwaPgiZ8PGiUEiAwGG6Tr98qYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfqrEqbRrbIZFZESrcAylKKQe198qxCf5AAN043wVAd6pPUq%2BsL2TU6hyK%2F3iwMcY0oJLNmc3lFDLQ%2FJX5gp8w7vr1M1DnfAoAPp9gcE%2B7KqD8o%2B1BLY3ydX0hWkcSK5skRzIpKO3izjdAmfvwhXuDPANYFsNmgz9EUwfjWmK1V5afalDAbinzqgVkmtVGEaKuER%2Fe0obfvU8pbFYonl9GMfv6Daytsz5ebcZSO6sR9pjwTWmK2VSPQ%2B%2BdLuMfmMPSfBx2Cr6AALnrazVVdsyeeq8Os0vH3reEg8EJZlfsqp8avjgM2wBvUl10y9%2F%2BoQ0sMhttClJL6N5B8qXu%2FtmZ58hCLmEXF%2FXybd3nxkcN8wcbCdG4HG2%2BOM4U1HNsKOz3iBsnWWEfJn%2F9HyylHQCkEP3nS4Gar8N9joSpJTFoD3lEYNficjMIo49OnRAWpgNncCsxMXGSasH4ETOmB7yL0I3g3MzGnTD%2BVV3Y9d%2Bay8a68sUmvh95OH0yyzXdxQ4Blnl3t6VCleulpcH2QH7uKHwy81exVMr55kJIJ7hIZnHFqfOa4%2FiLxtf9v0xaDQtsDIftP20joV%2BjNj4kUpmdswlVpLhuPS65Ob1NSOTU4BhzNojNghjvYjUSBqOQCQT1F4pYLf8f%2B%2FbIMKrj2L8GOqUBTlEHbGGPRbHZVBOVUosrZCvBLLGr%2BxIsmnHAS7oMRlrgh81osvUCNbydLFgkr7vkv8DOxNNoLftjEduhDiEsnzBogBUKCk6fco%2Bj3fHDGr22hZtLmeyfiH8AAWiGiUv5E1G8TaAD3IroVmA7fb%2BMujFY1FHZL9UtswIqvugO%2Ff6YTauTbhHBcJMvGSLjEut0QZV70gDYAF8PofDrg32RtxlBryFd&X-Amz-Signature=cb9fe780dda610d7775db99dbd2c2833d5ffb79307760cb7225543fd68860776&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
