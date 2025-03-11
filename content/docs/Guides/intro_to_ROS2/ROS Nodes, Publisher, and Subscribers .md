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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=f6fa257d477b0ea21b1966a333c8c2122e2e5d2c899a8ddc87a508f4dd8f8812&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=3272b51fa45754472c886e945ef6d77cbe15c29effc4ebf01ab0eb40a2b03888&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=527afcbe8f1f89d423677cfe7161076486fa2e575336d98b5deeeab727f000e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=abfe8b45c47a97670832abfd60bc14b0d82118b5a42ce22904f01e7de96ceb67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=f5a7f1ec316581bff3c193082384f5d16b16bd569e12568f5e8287d9e44a70a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=32ebc2c22062a86286e51b1eee23c0f8a0fa23b8547949d4717e1b3193e74b31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=0d3cf8d2f915f4aa73825df41c672ce2f43597feed0555cb3c25f149caeb7c26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMRAUE5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFADGpxhzKBGYVUjoqoiFlo97auFSg6nQJ7M9B1LwcLzAiEA1cIZqpA06G5C4uC5onLo7N%2B%2BqlE5RVk9%2BN11GAagKzMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI%2BDcUMhtEWSBBOECrcA%2FTiX3RB%2FKHzCzLqMWVwyAcb0BFw831GXDCXDy7ddeRQJYBchgJHnV1c%2B7GnHlwQnf3ZG1Uq5MV9sbObS7oPzQd342z7jU%2BGPPA%2BwrSYD69mIKikbcjeDeDy%2BoYuBontHW4OxJzObjb8hKEDqys4q2O46QKcR11U%2FlvWTMdUp%2FEZjAD0Wg5yPRDb8jAM6Smw6p6EEnUpAYsxGa1kQ0juEdUay9Yr0J4EKZuuw3mRDshbm63T2GRK0ULqp37xvGyXez34%2FF251j84XT%2Fl7mShNbaxc3DvRq1Q1bdxWtI0ZWAEF%2FNDW9M%2FhyRWtF4j6FuTc2TG%2F5tDAFWW3KcUIDw%2FiB5J8dYAp%2F%2BjjHkfoIpJ%2B0hIdpWNSUT8%2BKrws%2FGdih0U5VDEDZd9YDknM9%2BGd0H6lg2M8aRR3r3SOLG%2FwSXfrvPCMfxyzlc7ddR%2BjfqeDwL%2FrM%2FXPlxWZ49SoeBu6BIg4UePZeHCzpSST0%2FQtA417bylx%2Fl3oj%2FJyvn912vLbcGKfZqWUGxlE4jcU8fJHIrSoI7sMVmYfgvmssaNVFfa8EzaYCuojvyDt6GVPL9ftaOeoL7KoFNesARsQ3VSxDQUPbJFRdUE3EhcFn9ZOO6PVwlG7VwCOIsTiLE%2FfK31MIPQvr4GOqUBSst6KOT84djd1Tx2tyNuyPAv0xlILlZ9u7iZ0SAjsmQoNfGIGeEWJCAJp6LATqsMOHWrgEHbpPH%2BMU3%2Ft7Jmvioq557AXztgKxcWKElWonhBIrdkDQc8vPyiKeKemmqjzqOfxwIqNbAIMfCYTt6%2Ba%2Fr%2BBHBUklTeesQtHJRmlAZkFlmbOfJoSFXLJBTbxgKVV7tV5rV1NPoUnEOCra9VrBgAm4%2B5&X-Amz-Signature=a2e126d3934de8f60fc1e04d36495245ad2c8b5afab831790dd1bb389442765e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
