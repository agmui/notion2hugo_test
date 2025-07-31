---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=792536d7b3e7a5e1b554e2f6606853240857f890a1bea2251b75619edd840c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=48fa848c08321be3637783683ce74ba5dc455a016a5e914ebac84ad41b389ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=dadad9a37186614792c17496609a82742f45b111657c5dabc3ab2aa01e9f0ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=6048aa639e3289f5d9921adb2f9c6df65921ca215050f8c09aebe44d539cc979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=020879594eb062bad90fd36a5331c598f3335d1f5e48847867bc24bc034a3d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=3d7434fc4fa4dbb855e675aa02ff2b096e82a9dec986c9770d1aa7b61b05348a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=d66aea4d663ca49bdda4c532229ac59e6d74bc0dccc5ed24cca7e91652993391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D6ATJPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Gg%2BRAieBH8nMl%2BcFJeq%2FQ%2B49DtxvNegWX7e%2Bl8WNAQIhAJwnbAFtEcSCOJG6xaozk%2F8yaEQ2x63o1QtbvpRxxcd5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrCN85CBd%2BDCMkfZ0q3ANm9VoDhMNZts5wzlMx8mZPEvbp2avkJBNLUimq8ezfyPMGl61mCJL2yuNLnjG3gwWDKducEzDBYjy5Ey%2BVuD7x1sgeKLwBryLVpoEE5GOBjSU3UkhOg%2BqYIcPvXUja7%2FfAWlQD5Xr1YgwugBWoNCsFW9x6OWl6a%2FGT00PZtly3Agp%2BoC6vI23EH8yZkvkRql3YJAhasr%2BFdWaVQmrqH46MuKXRej3LsXu5C7MBCwk5%2BV%2F1NDuhM4NGpgjNJrzdiStdGwOwmjogZoV%2BAi%2BQDhmd1N9HA%2F1T8tJbNRCYrk%2BhuEb%2BgX87KQBlnApC6ovw4WQ3mwm72xgDBKj%2F7WGnUOIuJOsgQeQ6UbinZc0kcT7vI2awq%2FvdJ8PNprs13Ok4NTwtmlufJZhTk0PioQWgZKiXN2vix6LLfC2%2B7NbMwQRWG4pAdHrB%2FExdY43x7Ahy2UC0YvaEZHLSHN6Cc7bjNZQOwc7%2FTRSRenavxVmKuduN6rhZqlwSRIVVtDM9wY8J%2BdjagTqFQTp%2BVCTD3N85GxRiFseB5sfiC066hKzzW4YdEUB8%2B1KIozu9b5huz%2FlrwheEccCZ123PiArTVf3aWgS0TAqkAGC0kLt7BIjMdp%2FMn7DIPHclhcSsTcB%2FYTDKzK%2FEBjqkAbSlXOQdz%2FpxnFQObjxSAe4BVTtGt61HxnKlmJTwp6cz4GKU6xRnzC4%2B9VmmKsMv7NniHbenKmmAIIJv0YQwwp8j0Tj3mBqcQDN7LzwAOpFoMorSIz0S0nRFiikIzdzMJEacKRVy6TA1YGO3UyAQSubixyvMn6SNNEomUHz%2Frst2i%2Fx%2FXNNUrUGAoU6iPiwk%2FUXIKzRkRdhMRbqXOwR2SHf4AatE&X-Amz-Signature=44b86338a2507858e300032103f109ac596a289e12ffb1031ab36df69792f8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
