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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=433c9eaa722188ebebbcd28623893ac80204ad630628cd2c7f79a6932bc256c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=5c069bae2ba48c6d6131e06dc498469b471a2d5ae4be0971b1b2a74427a66680&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=e4201b47d4c7706738ea6008d7d9446b53568e8dec4166ef23e99b75c33806c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=e9b83d848a0fa98336c0e8a599c6ea3cedc23be2745eafdce362a6b42ad7507e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=d7113d1222bef0027c3de82f4d61464b771d4792a32e22439dc5c7cb925566e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=543a9b001523db3db526ea710b027fd60bd9056cfc90256750f0ef0a9bfee151&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=35351ec0800df11cf51fad2d827dc4b30f685ddbdeccf1d5a36f8d1722c674e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHYD3AN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsDogxCF6CR38sI5QP4Q9t143LEh81BryxJQVPmDWhQIhAPd1bCAt6x0%2BNXWVBHcMQK8ue5Wo7PMZCasA7BjyBaPhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEU5O6Fpp%2B5ESl070q3AMY%2FyfX2lhJg3T5U6zXBNzYNeH5VQPq2xRWzpdH8zfV2exHmGcIgI0CG9Wfb3p1zJ6X6%2F4cNypFY4KCI7NrRSZKr8by977aeVmtgZXGmMB1vK1ITsaj84h0w3wFZFo8lWQMuC5e6XaVeGSDhGbbZUywx9emXHfsd4D4vD2eHjUtfAjg4T6FhiRv%2BVLcBkqv%2Fwab5aIcuB1mQwAlSwffsVdmGvAJcf5JiCGbRQ1QAz6hmWqoi5QDZRqNtSAN9BIjj%2FUKOwXJ9ipz1N7QgQq8xdBiqlmaQfZe5ZgsvUvux0B3QwZl2mxtw4V8xrxfLHzrpDnnLAWwAd%2FqBMV3rYNux3JjRT5vlsLf%2B%2BUQAYo2B1wavrpvMM4Mh4rjUwKmJik4LzQqmSLkMW%2F%2BN%2BlNPLqkNEvjFemco6ewQj7tO7c4ZdebXpy8sj%2B53Ikf6tU3aSDPLxJJhhaoyl1Ai0K6iDR%2BxMcHbj%2F6yQW5xoTobnNu80yXCUbjeyV3JIF8ATPGsmOohWQHvDS5IvxuttmUkPIpQa406pfZaOUJCLVxFIzkSTuoi0qCIQcuiPWeE2Mi5d1hywD0tn2Zpd7u6D2udrJnOYOzg%2Bzd%2FYwLDqQzDLXgmCR53k5S420fbLjvD1hSGDDC7sHABjqkAQIznhx7paUgrupX2Y4CoxnQymq5yhp%2BFn6YN4sC%2FMLNMJV6FEaeoXGXrvET7kQK3mdWJX%2FcNIyG%2BV7yAVzTqrMjR%2FQl3YLTfxrYXxK%2By9gTSR%2BewDQ91tqTawoJzmimFYyxsNHA4%2BWVKBQx%2FbV%2F%2FaZ%2FOPy0pmMI4ZIuEyQB3Zy46mSI3KpVBobA18CmrCvXIAOxFWwo5Timpa6H5pqnPrAFwWZU&X-Amz-Signature=3cad16b9e4f860cf9fd2a561b750f312720dfb649e7405ecb8b1d0d191089a21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
