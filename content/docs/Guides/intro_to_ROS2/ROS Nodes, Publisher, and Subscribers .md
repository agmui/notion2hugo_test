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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=f17bb716f3e9d38fdf0c8c84723fdf899556cb1f78bfcb72ea749874e2453060&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=eaa34f027fafd136e3b11bd4c5f6019ee77fec6bae8a8490aaecb6b8828e88cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=7a7a651fa413837a09716c66aa1174769d30e87793df4d2060472fa985af57f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=aad154a087f1d0d0ed633f8a081ace7075ea92f566c8c05b26184ee1eec133b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=6e06c5fd0e74ffc82184b697a229f65f92169e2a1b03688ca91729691eb36b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=1cbf292cb2cf7109ef874191e4cb1b3fb2bbc09726712c00d67d210c8af9d6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=e0d49d476a5f464d3bba4c3eeea5261717e657f32cca14d847e6d814acf28373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG6GO6L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3tV7DmFTETA46%2BkW4BnRVmwARBind0ZzGKRclCA2qkgIhAJ6ERqKHtI9NaWzazvJMsqSCz%2BTMsJ5FH7PHsapzhfqcKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx2081jN3r5otVtZcq3AMSPOXg3IDM%2Fk8cFuVLKxdBl45%2F5LlkIe09pjczfJt4eTGbFtgZ27Q82Pw7HYL19QTMdeV6XvhraZ%2FVMm24gLRfVkIpX722X0zsnPLDLV2NKDJNtfdZQtPhpmV2zNU6%2BXMYyvFutE%2FuQh6bGZQS5MPGbNsG89dDEG8fmFbQQF%2F7tVml12KBk6fdNMy3TBSi34N5aWrXasLlo57rUQ2p7ZsJQ2p8Nh%2FfvOwZWhAjTHggKIa9UGtUNnH6AGahXf84J3B2yqYIGhzkm4JWsrltUkYiTS%2FO0sR%2B%2Fi9mEygJl5%2BogCq0i6LsFA3PXcvObOw6YgcMMY1z92bCctBQaGZwhzN65YWX0UdPDu11R4djjS82uoxkrvwSYwVt35NqbCqEaMrSlUoJy1I%2FyAV8ff44uDSDHQHFcJCVitf%2BGwTJFAaZpf%2B7Ic7V7Otbk5Mjt00bDeLWz0abK%2FTgPou9icQWzLVOiOMktQasAjr%2FnGyZN0Tvsubqa5zrkDMvkg3wSXajO2snsgcQq7O5jdyR7I0PheZblXjdiWh932BsWucqW350FbLrzO%2BUEaOw7ocj0LYrHHCtojRcLv%2FmRZt%2BcsEIDixURgEOKnHDVteBYELilFkBQH23%2FngUfHyMdIZfGTDAju2%2FBjqkAfls5orde4eG98%2BNATCmsQCW4F2z9zSgv%2FPtpn7%2BXXkzbt8BIlS1iraTc0giaVa%2BJN3RJFrYBgaFuNeVQ4jkhJRWKtjJT%2FJva5neJ8z5dcYbnq%2FOtkIWyCbpv2DdDd%2B3nCx00O%2BV0nxG%2F7bE5nT0ppG%2FiYeEYshQxVhHbfDQZXSFNvMXgwFJdBLRxPyj%2BPjIWO6E8vFiTvMz0jYaXBL5qX1URcnh&X-Amz-Signature=742f5b8b895e780036c7da9e1f7103111af9e4668e049aa73a0ad9ae92ee3bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
