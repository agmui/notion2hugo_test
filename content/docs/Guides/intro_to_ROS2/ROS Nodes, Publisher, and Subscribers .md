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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=289281d5df8f03232aa9c71231964c2b3fe292e356c33322d372ca02750400c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=d3a476d6eeeebe966d69f430364e254f26ca2d3d331f9668d5c131f1c1280140&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=bcb4ec2e046c3296101ce5747b31c27fdb4367417141a0f2f880c3e7ff5774e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=723715566887f5ac57f9af3a400e5b184c6d0c2bbcc88275c587b21f71836a30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=fec1b0639b71d71950ad5a0a60f5166d38ab0beb931b2753d1a51e5ed1a80d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=38060d62b8df1ae7b3944caa410e4101392dadafc852752757b230b540360fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=e33ec2b210a3e854e926ae5327c307de1459eac77b694fba3dd3208b2362b26b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWQMRBK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDpmoD9CKLo434yWV%2B5DP%2BLBMDchfU4vi85ULrKhHJMKAIgOzXth6a27G2T%2B5yNA8PhbsSrk6MQ%2FWU3c8k2EKQs0WEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Ba%2BfvkQ18Pm2OAUyrcA9XpZmPyifeQvqjz3owo3HCP%2BFiZY21iaXk9vH4yySH%2F%2BJyjH9eJALEsfv3FWvZuLNF8hlHamiUadlGCfg4Mx8CK8qP2zoreqtvx3OQX2UjWy1cwm8shtjDImpcZfJH3lEiSPrm%2B%2BuvtEWotws6ekPMAVop2QQiCIrCZgz2U0YEeGuXLaktfHoDA3DidhWMcWEUrEJC4VOPAhRyIffQGn3tcEJ96POfWfdED3Kk1IUJTANvnt6x6JXS7i%2BxvTdOVqEh0lvcKjwlr7sqEZXHB1rn8cyoQLm0blIQRaEYiB%2BXpiabmAoOpNO%2FKp5zePxMir%2BAwwZbeHwIxnDS9EyOhSRrRTGKONujf8i05kRpBQba4EFY%2BIhI%2BBdQJUbHZBA7%2BqaXL6RWFfQa4atYisMGHvMCIvBfs%2BoEtoyDWV9KEtYU9aJ5tPriXrZdZmGv5FnhALodJCVJHf3qbSVT6oxIdqTGHhVUMd%2FyRmzvjzOIR1p94XHky9%2FGecCgw%2BVMXEb0Vu7iHLuQo1Ui7wN4MUoun0b3nLAlDvPwGo5LCQDCMJg44WnsR7btrEcYPasNzpc%2Bw%2BiIQSouRJqqVHcsJZGG1%2BzXTytqSGim3F6%2Fs%2FcR0TbFbdkBvtZw3tHs8nZfyMOv26L8GOqUBVbUwFRkx5UYYDkDnXGkAjLjEHHj1TOsmoc2KpcZoq%2FODKjqeDSbOf2XrsuL5MkUw0Txce%2BSdwChOn%2F89bOskTIPcGjrlRh5E6p4D9iBQlSwIK8Zjh%2FzWpu7yFQ9LbIoKXuT4hIkTNMIEP%2FZuPrXc5H56g3Vpe7A7l2GJDoG2IoAyzJ4h77HnFvq%2BXGCptYU9ihF6vxg9fcAyibf3PnmWCW6Ya5pa&X-Amz-Signature=8aff2675adfd899da17a6b6c77b390798f53c6af7c3d327b1c23547de35b354f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
