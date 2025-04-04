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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=3e7f691e1dfbd5467d2ce01499159377968194faa2736264073fab3727f6dbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=ea4b6f25e9b79ee814e1fb1f906726b52b52889afe1bbf19d5f951d89dfc6f35&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=210acbf89fd9b442cd613c07b8f6b648625a9192f5e60b06e8e691934084c9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=adeda7f520148f37d6049bedaa96eb086492bf5f2baa3d8392e5f4f1a91df123&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=d0321df3c39c7010e010bae7103afa4456cec63f27320518894a92c04adc6352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=0a2c86b0194ca4ac247f09575c5f9c8b73c82d8b30aa0200586629599dc259ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=53f2b96870eeec23e4f94253d6127f69f6782e7f0796c087f2246e8ffb7fd50b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDP4KLDM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxARvOEG2D0vQWxXkUophxKldLPRs5DSP9H61FkRLsswIgercNeloBrAGNWr6dsSROTGUcLRJv9U5iO9zn3FiAClkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDD7w1NnMdtx3Wl4v7SrcA826eVlhAHacfIohFUZIbUxuQcbRuiZW2ALD%2BeBnFHZj0jojQ7xbFhH%2FYY4Je%2FaAAw%2B2egVQipkBHhIq%2Bse0taTks%2BAm6rkueFruu9gWA4ZZeLoj7vQcwpioD2b3kPAwcE9x7n0PTqyVbmgQy190k%2BSp4yRdE1b9TFe9BmOgf0ZIl4N0lxZ11pDtOv03PfgLSFTyFxNvdYm%2Fm0qHPKwKMh7clsS01PL0N1bcC34jSQO%2B%2BJeYafMrhBRIdpJVek%2BmdZRe9XB2jpSrdMUR49%2B4DJ2POKagQMhNAQQAWT428%2BiVwOthZTRVfiRXvS2QeNLhDEjdY8Bw%2Fm8K7D2iflN5Mrw6NAarfUJeIhAXO2KO6qg3kNluwqWRYcUEwjQJ6m5PwEJk8HPZ%2BbR6uhTI90U90ljV%2BUjmaABGBAQAPPvwaEMAXd0yooke9KdUQ%2FwX65aDbblm%2BD%2BGnBSWX5wa0t0NPiLuW1LOonITPezhbGoR3DBlgttg7qshGyMPLml%2FSwsbC6W2AH5e7d%2FWD1QBKTvNYlpPllsL1psyZWvNSubg8d2vmaL71xpA1F6dznBTn7ucrefsItOw5r6NKBW%2BKg%2BvizWpGtCSMFl6Px1eBVqYDdjtQ6ceJKtgkOB%2BohSEMM3Ivr8GOqUB9hhWaBeTuZXujk2n9H0OBbSJSLqd3bTSGyaw2V1M5K6gytGCFul8jQuJf2nL%2BxlR9uiCN1PEbaukFDTU55Ou9QTIGJIwnhouF9hHlj5V%2FBMMSljR7CjDHwjFySZ5p%2F6STBm4ORILeKHDkSXIEyNXl4xaJxUw5Qa34rkZuWUxJDmJdhCWO%2BfHiiAZ8RJZtHG01DzxkyxJ6VfP5pBnBdhGiDvxfk9o&X-Amz-Signature=2f13c7eb44692e0c75fef34e03d71b23d6c9c19ac9fefaf02d241ef10fc52bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
