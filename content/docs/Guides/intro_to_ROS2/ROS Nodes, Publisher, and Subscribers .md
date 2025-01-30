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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=581150f70fea4e06616678bb00b6e36f123ef4ef6d8e97c6f230e607afce159a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=b6438ffd88867c974b9def7c1104776529be7db3098c99a5563b3880a938f3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=859d0a3509b600c7183beef70fed9ef688920417814cc9d74e7570f3a14383e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=faeb1b3c95b6ce56a9c860b87c2fca7d9fcc505d7d4ac6adbc14b24ae106bf3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=61a1c7e395c403fb07adbd3aae05cc7a677256e570d9f3018b7515456b6e585f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=566a3223d2505c7e182cd4cd6c5b14a3243c106bf8ffac3aab20531d9e6312f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=6ed4fdaf8fe7b6099c400b9378ab3b00e4524bf8fce7dbe7f9107a31f698ff9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPDOR6W%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BCMN1i9UvpGVNYog4m0lbTVxwhXJJcXXLH9ODKJuk2AiEAt7ciQzwIIUkBdhcXaQ2O%2FszCnO4Mw28wwyoDyNQGxqEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhKhvKTINudJg5AoCrcA0ZC3DpcgKQqilqDhlbLKET5eYE1GKqpfL9BPUGvULeXx71KCMkNTBt6LMlkPsknO5%2BJLHIGN04N0aL1RDp0AJdOFaSlSPyazF4Gb4VlYhwcaXglh3bkIhSIKkfOi5Tjm2CF7J%2BWmMdMLNK8El58smRq3zT0Y2Kdj65IeTXWNT8fq%2BPQaLFgnbi9sxdO11nLba1phjCple8OOhlYmS28tFho0wSY3PXEGspPRpBrHVFqGjdiJ8gIwycvHLGrWfY9ltSA5S5o0DiQKQTD%2F95QUGD3nhwcDAmnf1YnPCJwoVOp%2BuSKzQOXlsuU6HSxX8LSBhbj32BbRLRJJG%2BLItdFL7GR%2B9m7aiLlKf2fTOt0hOPBMRtEGJwSRkATaMdk2yec2Vm5gcX6DXJEOwT8H5eaCVL53jLNl2CboDdgLrAL9q%2Fqz9Opefd%2FRVm%2BJxsHK3BA9Kyv26wPCF4mRxDneKRpNV29M%2FOrrDkgu%2BiTKKk3i8THFlbwrdDyyOKxp7edgZ0LWgvJy1Q9r%2FUevwrPUtY79kE6vu%2FRZf%2Fze5QbaYkY%2BEFdB3Ho5Ux33L9nGDjSwSQhCu5Y2q65hIN37Ldwn7zvLfRTEfMnJWc2TkkRZ8HU7rPHUzE1zaHX0Dg9olPQMOL%2B77wGOqUBIvK5zghb6pu%2BwKPhCrObOBdzNV0iS0fE2%2B55bRSPp7iKUNB2nPctUDsGbVpEI3%2BCPd8PchmfmPCMYF9KmWUzQDArhM2G9pDWPz6Ya1DB2hjSlSRQ0yXisZoanVU4xiu1l%2FoXvzCPqkp2Znza4kB9fJDpKkhAqFTOvlCVPenZpN%2B1WuDKG9sJvLwuTT5iXJyCKdQtaDAyxmM97noFZATGhSFqys%2Fr&X-Amz-Signature=6e2f7a237509430df1f482e8f0fba2be52daae81010e5c21e36848f63eb339c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
