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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=00627bdb6a1099b89d6ce960a7fdd10c558ce49ba7d6c8fecf14b0b6e416eb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=7c48fb858ecb0bc37c473d2722968125f0d7e6cbf2814c7eb2d13542610e25f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=aadd98941f89bdd243312c13778cb5049c8dd369d97a4f81901a17bea48fc8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=f338052c307979ced4713cbd0571f5f2269e088e78c734ff66620a8c4396ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=80fd3928d1b08894a961939beccf01d0ad9754665d631d99d610a182b2ad4bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=19d587c3b736c25b1f2b068040a07ebb92154394cd8599053b731872264d7585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=8e6542fd8df07e614f437f7f0e730417c730dc1060430482d56176ed497ff117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2OVDC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEki19PAYEv8HjEK2%2F%2BH8%2BWfw7CwF56XWKiXl%2FK%2FcY9pAiEA6s5Me4RNDtVyAtUs2c2EsDlyjX6WqDDJw%2BWn%2BJjcC00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPkqSiK8pz6BThFSrcA5hpXEBQYugXkgMupDysKn1XhxsS9vv2Cx8eSJJDTSaXfcnInhWqJLIv%2B8AHo%2FkULufl8IO8c1Taew%2BZI1P7JO4Ha0mZo3lDhNMUVNiYfdYFuD6eP2mn9RYp8Q9%2F57CG6auu9Uqgeiju5TgmDEOHzF1HBtZ%2B7%2BdkVRAzHY5B4fsl%2BjaZFf%2BpIicfxKOWBLFvnEECnRPSN3D9BRiv4ksS1IUv0DGkcX4JzzmxYoxYbgNeEKPxFpAB%2FAPJQSLeTK3Ntl4Y87h7iMEPG3ID1qPQQ3kh7i6qd%2FtExabo%2FiRlP8tVMcU9SlhwDk%2FMAV5rZ%2F2dfvIAJBnNWdnqN43siRkAx4IK7V4cEf8IGzg4QAHUVQ2w3inWyYxcW%2FAxkGXix%2F%2FFRCl2ME%2BDwZHNH5GOfWdxlk5qB24NzPWibc6UtqjOQZQRu49l%2BKW5TE6BawEPY3ytcBKcDUcIFvoVc7uIw9nd5dmGzhQEEYvDOE6YLsv%2BVviGZ2wnf%2FcDQO5u6yEzolejObTI%2BmFg27dLQmB7ulwZIrdn7xtsI%2BlE4yfMkVuffeW3FomwHKVWU9B6aAKJiFtQl%2B6NZpQzrHoCjgoDEeH9KcK2yqItPcp0uFIKx1MfmyS37xMLKZzyxHUHT5SVMPO%2B6sMGOqUBO9PAol97jkvtSD0gEQHoQ4%2B%2BJoXz7zLFsbYBAQ%2B%2BlPxiXtAT22G8fhUQZwIm3FINLgi27DaVwK4ya1wLBefNCFwH7oFzbbaOUA%2FPzxwNUrAR4WakyqkaCdyTOZPAQ1zO%2FjEE2mlbpqjyBZfNkiBLgFs4on%2B3wijczwlahd%2BU0XsW%2FsEizJxMdEQ8q3iO6qlwdDdyHWwhRYap%2FU1RyGPa5uLoVlmc&X-Amz-Signature=7e9b1739325a1c60c2e381831c0b5ca18ce3489e15ee9cf022a94546ce3e1bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
