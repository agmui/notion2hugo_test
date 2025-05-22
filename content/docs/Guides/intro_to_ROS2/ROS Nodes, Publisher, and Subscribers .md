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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=a77840b16ed16a2e1263617aa38f70886677f7caf55c656cee146129300bf26b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=253224ab031a5b6ebd02c6aa8820366beec9991ccbce62dfbc39e28a4a4f5d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=dacf2958f4bcb0deeb448fbe27d089eb8bc7d6fee97d220d33ebb88c70189007&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=a4cb0c7ef72291a75dbf45293f04806413e80a41eb87ffb9f3a58739325938e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=8aec5a6297ed9f771559ebf71690dfb7bd1a1347bad674587e272c4dff750a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=fec74fc342f78eb05eaf4e2c8c4f1c98d476565ab33134a0a7c3c972cf10f678&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=a047406401156238e4daeaccf58461741455e4c35c6adcdd23470b2fc46a5a31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7TCGZX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFyNy7DVzthbwhtJX8r6hCR5qYEKtW9uFKjj4lJWfVtXAiEA53B7xJrPFz%2BU1rEc75tg2ySXZqYAj9ZvTzb9we7ksKsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1l5eDfKFbqwmCSCrcA8ZwoavRskw%2Bgl5v4QlRUCfpYnsn%2FJHGdE0KhT%2BTPleowl1111IBljUtNMvo3qK9DdSQKnUgxgsmlEIky%2B4Ps%2BvFpZ7%2BxDtEyli7dLcLPna29DpPciqvoM5yuGkxx5%2F78BxEwf6jVscgzaifko83aGuPLCmj0S1rNFhTDGaDyCowtE4E0TaLYANquGXiZIz0qhcca2Hat1VM2vTcasobDlawqv2m1XD8rhCmebMq0HGRhFc1tnJYlaUhaIqDGZCzXh%2BELJqiPAwGDITRR0R99fTUF0QjsD4BKnMdZ%2FeoorSgsX0OKl7TDBeVnuLzfDCsALw3G3suHDbJv%2B8jYjbmzz%2Bz%2FMm2fGhv6suzivHStuip2tCAVqcIYSxhQROrbWZyeUIb%2FyZ9vl4vjQmSA6DQ0VUNGbN2Cc29%2BN4otr%2FDjJJwfbK6fqN%2FwWWzRHZ1oR4B%2Fh4dPkaxNgiI8BvdFc0jUtqGnDpWgGN50Nj7mtSsTgO5mLqrfycrZNuQXJtTKTMgDgaSNVv%2FtaScOEtFeFq95HFEuJSn5OGWUOXZ1Xq%2FmSnr6FpNZ0uNywhmNvlNnQAjLPTEmHU4z9STRo5Z4BO86Oi5EthKL6ORSkjJb%2FN3MKG2SjD4%2BFR29E%2FOOOMKMPKTusEGOqUB1Wzj0eS43ay3wvYBjgyLo35fTwpeX2lKQ7n8wGgVhJL7jbVFtgTUbNhwIIn2gU0zcUs5tGW9pHt5%2FFClpL7cHlBFdauhcGTe%2BuH01CAJ6cAym1XtioM3nxW4x3dJ%2F%2FdtdX4iQ%2FTNOZkiOxlnlbe7nzxBPdtaZp6IrJl3GE4QMN1o2RZ0jjCQ%2BBXUI8m4xdVfY2TBWJw1Elr4VWmjSPviNk4cewP6&X-Amz-Signature=a6ed20f1aace6522d69fea480455bb22012e201df27ca65d21ec17d7d0ded8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
