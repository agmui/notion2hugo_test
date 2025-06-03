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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=f5797e55e634b6d0d890417783788457b29014044c786d104fb3b767e70a9e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=3c8b2a2de62f1999ddd872e48bc8fb6016477850bcd0453416f7e2ab73ea24bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=652c39ed8d8130e003a9b4870ece4075b06648c646fd903b466534799761f9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=23d5e5be4f3b857a19cdc5420d1e754e5223dc3269403e2ac02026e3eddb319c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=0a1c5a0d16fcdd7f41455959c0db592be86a09102e4121f1b3027b5bb49f5346&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=5f0bf7248564103d0a5eb756f3000d6a9189b3372c88d51c356e823bec74a4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=3fe018c0a275814cb82a01a855dbf4e3264f07addf9015b5601e3fc2c181448b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHB3BFLI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDH9YJf8MPRUCRuTMvVG96IYwSas3oNuf48feEJgAbt2AIgZRUjaC4P4QV1nzOS4YONXc%2B95KfJhU8r4Uoy8XmXUZ4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9wXaMk3YMMdYP%2FtCrcAzB6IQ%2BYZfQvCc%2BH3lZ7xC1iwnXXm4ImsyOCgzbnGFrRE3k9Lpwtzv9wgUCjScIb%2BV1GV3giBG3pbWt3wO5D95LcrgpwxNXH%2B72zFA9sA6zq2OtQW%2FLLpcYJbVUVaTByfJCXY17xH721fNYRhrjK9nW9lRs2M2dZbQmQPZMW0oBAhsn3j7FmhbXJuXRr5DbCShEMCelzBr5EMISeYPUPLv0yMV%2Bl5NIOLHsvRWbJZj2%2F5E8BwqnAt4z1tjcAWpTry9%2FLxFuD9wKM7F35Y40Vbb6ZXxinv1XB6f3Saz2%2FYITBjt3H1Qb8Yop8Emb6GhyclUPmPQqugbJ3qjFUMIuGGjbbN8Xc1%2FUwsQUxsbaVINoVNUmcw7WkXSft3lzDgCcf8hKscLrRZtpGz06Sn1KyGiAa0bmIKKiWY04F1ww3SzZ4qQxjv0jiUK8SHajXWGS1Pg8jibXppDsnTtE05hWT60RM9gnxClfxKr5Z%2FXvqQWKR9nK5RyvyiBwIKHwh7kKU4zzTZ5L1vQ8MOYGaUjf71dySRxL4vd0meXV49ReGyrSRrxvgq%2B9ANaoQp0slBUI7hKygYc%2FxjQnTpCT3MzwoM2XqDnU1CPotrR1x%2BLd1AvR6V8sNBYAnVl1ZBn9uML3S%2FMEGOqUB%2Bk4k8BvPXBL58CvcXf8d75%2FvJuiR5PQ8dexm1PEoYut9WkZpLToCQ8Ki%2BnljMOSVMrkp8eubt%2FB7DbhwxUsTuSCkmomdxwqNYQvqpyHa3CEHESG%2FAwUqKgs8ilQoGQIcGv7Os6tysmA82S2lO0ulJNim7R2JoL4ZM7pkIVRaS9%2F4jIuYUexA3hj323XkhQrulBoiZHKa%2FLLkPlctdmzNVSQsenvC&X-Amz-Signature=c476fda863f3c36185821624392e6fdaf359359e4ceaaef697feb927bc4f1b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
