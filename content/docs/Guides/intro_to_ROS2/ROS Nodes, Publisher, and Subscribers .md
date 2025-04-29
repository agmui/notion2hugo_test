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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=9b56e8e1b59cdd2de90e746b74110ac02edc6e3f55764ac0b3d47dfb0fb0a9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=53f62aea7d072849fd0f7061ee7f31168998c987eed317a2f1e24d632099a97e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=0b54fa7b3b15eae8f990f1504c57a2fdde84010611a4da23aac6a00927f1517e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=7fbc6e43fc65ea10912abe9cd471e7acd1d09c59ba57f9da57d369da47c70e80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=5a84d187c623a04506a1f2feae93478023f20fe99c71c0dd6f4d4548eb90c2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=ac1a7ef364cb8b691a7656c2c30c01c264d8e394ede0f07a752acdcfdbe0a23d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=165bc028baf18dd243ad151890ef6a283a37f412b18d5dc4a2a957b63f3665ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM4A44R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC292S55nY9sdrRth43HXQBd3PUCkRYKl%2B3E%2BgpdwOxygIgTf9uYn%2FlxYXLB8GbiekzcvP3GFN2uSH7Kl69JaQa8mEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmcVY9ELhg8o7xOWircA4jN48KSjUDFEYwn6EpG3VcFwz69yF%2Bm8j6L6AhdSll2vTtkYyTn5BNraAKYhhcafWPrR2MhML5VmmmK15vXxvqm6JNFUye90SuOptbr5DVjaSiSOKBKktz%2F2t7NYM%2BPewzaM9KmAVIhAK2H1Kvgg2qGqwHWhFXFXmRYncTwidhyFwXZCdkioNpxbqka7GLQMpeQm1FqhcFiOya8YNtVfFCr%2Fflu3ishHx4Es5s5%2BBw4q0XHwysdrNHdP6h4QlH2Fyzs9BW%2BCcLb23%2FExx6hKnOJEpwuy56bjDtUBlLw%2BrL2y31spyUlao6buVV4xHbXXayk7M7bbZt05dedzfyl3iLkvH%2F4oM7rE7C3AKXGPog5psHfzycLTwehfkIA00eYSj5kGLEBnl7rrJ5is9EJ0sKA%2Fj7r6dZ5wVBLg7i0lMDbcP7tz02Z9LQhTmlIQT7IRtVL8A5kFADhoRlbWy5sTQsCnzdv%2FZ1pn8PsluwioV9E4HaaAaUbB11X9jWls9r0In1B6GnmM6CQqwOcwRWYfsuYRKNuXyr8bIgBcUEeSAucnMdk1nGzl6KbHaygl%2BIUnTvz2EehCjkVXCiT1LLxQY5xwLvHVWRcncba5F%2FCvz9AiLWwqaefZyklt0goMI6%2FwMAGOqUBOTPL%2FGbbkYqAExTI4jdXv1JF1STm2IFw2tWR7vvlh4FRR86F7ody6LwNNMJka%2BI%2BhLZfMNEbufA1KDtHePh430sk4IDevGB4caq2LXHeo4mMVB1Agc7hqVvcaRBQHeGhE3WtdJQmkQPwa99kn2vCtqcZ6U4qZwyoiemPoAn8990J2UVhwIL2cqK8%2FlmuYwNwk%2FjO8zGC%2BPgZUviHHi%2BLQvOJnoRk&X-Amz-Signature=a24f6acf716777d20df4df96a598f0df90b8d5433b06011e93d85e4c2347ab14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
