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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=d0e6e0a1e8446ca61f95479fc9e7325e4561c73d40dd5531813a2ba78c929be9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=bbeeb99b75ba0cce0e7bbb45dac5cf1c555b5516b7a61ac04ee72918dff52c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=1f2f6a0d865f5f6d691e25d6f7ef18800acaf29625e6ed0f8a3478de6c559ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=c76f496ca4f3e8e61eef6cf8d16fa997d873bfdad31b8102329520d0259d150a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=24d4807fbdede4b893ebc3578746a65e235e044ccfbc948e812ee7e0764b0b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=9c9476ac907eef3a4d5bfefd2d095af47004ad63c0aaa98170a9ed61f863c9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=ac29535869030e230b3571d7969597d96d15d2ca284aa463dda7f30700b8200f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHH5DT2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd82b%2FSpxiV59GPlPek5Q4FqBo0oHRtT1a0yqyrY6I6wIhAOWGd0FgvHUnBDB3cLLRbGMxqxiHy4G7jp79dyawJLP6Kv8DCBQQABoMNjM3NDIzMTgzODA1IgznHx%2BmsbZE91Okzygq3AOP76eePPECVpWxuQyt%2B081%2B%2FMr9BoDBi518%2Bh5xmszjDsg50MElrIF9Kz7nedKN0R1I8PfmCTX38Tu4q6gWb7148rjwX5SvPGcO%2FwkOOt6qanQP4%2BFtj%2FxMpiT9WQRkqN1oMT7tGG96lv9%2BYPFazxU%2FcmTzv5zmXzOXb%2FN9PlnP%2BYY2Xgg82xWvYTv6IJwnBszyu4LnO4i38QQW9Oq3YDmnxePNVS1SiVKm98Dwg2LVMcQCPm7Ah13WI3C4MHmVezNrAhh9J8hrQoJvccZL79UporWpLg7V69kAKMeCIjW%2Bdn2KabymGpTeUJDc%2F8wu0tR3ypGHzj%2BOd0a8Vk9oofKR7gWsaHqKCDUmrg592ZH0%2B%2FZN8xkz6HcvqsKov%2BRA01G9Pe9abJ3F2o76MFue5NM4xVCmMh6DnJ3RLO8bEaSZ7NO0jsIKMjRg%2BeUv%2BIci2EHchuVvWzflXys0Ge5xJfp73KUCAdLdcSNoxLjqrgda2q15SQzidDvfUmvBSK86eL3mL8ErxbDZ3gNILeWedSowNn5JF81gsxkiYHhWxot7kBFoOOGRqcbx7WxYPmP%2BBGu0EZcSIm6X3mqXPHOuTq8Dq%2FRBH%2B9Z%2FcOj2Piy7SS%2FNLGICwZ1BMm3HKpvjCsi4q%2FBjqkAdPJF1%2Bi9x3Lw%2B0f%2BsJPRP3QtXbJE1DXIj7wI2JyeEyim1qDFWeBsS77WVYWCjIaiMnaJ1xdDCoHWqsaNoLty5fcd70ovF9ZbGiYnCUBESmBnBc1nwR7MVs9qF9em8LdSVXzMFE9SP%2FtdpoQD%2B%2FIS65CcUFu8LHLccjgQBHkC8X%2FXWz99TummjJK29P4Q7DCb%2B5yNVVdy%2BBweXHXlRSBM3e1HlBe&X-Amz-Signature=257d632d44cb4c0a5477ba48c5768dbc476c0fbdb5589a7f16c1381f09b20d97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
