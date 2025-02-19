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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=6b6ad0c5f865607db7e73873c203d451489b604bf12524c8df518db44e897143&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=299691d915f94b12fc4431952fa96ffd8e8e8d9d4bd6ad29c01956f4f8adb1af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=97a5ffa27df12f9f47ada75bbed5e11484de477bad180f5592bc1906ce5538c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=dd3e19071f7dd8e7a184ec9150454b8ed514287e701563d709fd8dc63303e4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=c00ef74141a362c665f64abb9d9d83b56419a63708f0b72ecbbfafe2c88f2de2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=058289078c2d9a6c88241798f6829258e3b14271c52f49a26f5b9c07ccfb67e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=400e7376ba0bc7efefc8424a119ea8d5a94829da295f6fc8984ba2bceeb13292&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUE257J6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDai6S1KjEczTGWUFg8jXV4OoYIwa7to%2BpF5IBDK64SHAiEA68SsZyyFejVBHBuLVSLEO%2BD8grtmRQvkWxmA9TKeBK8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh3nXyhGVWPodZGTCrcA%2FKhNeDUYcHZZLHdmaqAX67GpUIh6odBLwGst%2BVQNq%2Ftf5y63YcoqQg2JpgBaIzK7rCYh9CN0L4V2ZYrcVOWDd8oDS1sBub17dbEKT%2B2r4z4CwFKk9BG99oVKVI2WzA0KgtWYqsithqqjfj4R9xgV5MG1QxJ7jtIIW09kU1VuurAKZ3Qyk3BV5wXCwpZ2ZzNojQO3BHRKPT8q2frhuoiGljpXbk%2BpbVPjB%2FErNhN4%2BT%2BXdcq20WJex7YSoUcoOKtFXghyR%2F11FmDFiGs7KW2kjgG8qo8bL9FZ9KwEblzCbVoNt2eB6CJePMRVcy7NO76ZM9I7dlp3VBNLOZWSOVddUj50QYOJd0%2FElqV4NKcNbSRPQSd9bUXaOg3VXt%2BbsHHxfemmeMIRcs3ymP90I8GxPGAcFD6NwmQxTWCZczqd9nZf2%2BLmvn25Pl776yop79nnrezIsEoEScCX41HmbVHoK0bGDah%2FVFDpv%2Fj2%2FeU8QF7mw7SMeZnUqq1v2s03t8ZS1G7yKuJaZfLWpMNx0JoeIeaYpHf3i29uI%2BgXtelrLXq83qGngSwkkS2Le5HFE1caedqlurMykCxuHYBABYY9SyM1mdAovhf6tgKdHdrYSH7ZjXWACJngj3TXKtKMKX%2B1b0GOqUBwjibplShBdCA%2B38sg1LE%2B3XrEZRj4BK7it9utmeB3X773Z9mxl%2FtxxpKA0Oc0Xv8e8%2BCkhW1URz%2Fd0oyLhLWGV4v%2BaQ05UBt%2BXOSWmlPQUuBwOwAbC7UE%2FKKK0Ib2WUYQuKnj9jmXQD3oNmd2gKX6lfu6hCM%2BeZwDK6WoO3ZXtWtjuyQG%2BtBR1LPULK%2FS6sxVvUsdiML3k%2BKH9z2BPodiGzmxEI6&X-Amz-Signature=36d14dbc4365e3dba9c6767a06a0424604004ce736d0f15f57abf902ad3ee842&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
