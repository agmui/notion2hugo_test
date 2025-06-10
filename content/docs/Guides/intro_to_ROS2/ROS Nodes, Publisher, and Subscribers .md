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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=705302230628ee334fa5b9b939411d93591eba374697ce0311ee301f802b5702&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=6dbe641b0ee7f4b42448829734b1d1d9b99c141562d6493cb34e4ebdbdd75f84&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=d5736315f18c9f1ac092b1fa076a5ee77fc64e91105e9db2df7ebecf6ff355d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=4789c53f343e79470e501c01d3d91dd24f7d44dc08e5a9094bee4a8d7b51483f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=d456669dcffccf4a3c063037d132610e2f4bd7b770d204a06fb1568b960e4db7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=0f72d2266756a9f8e2066e99e41fc1edd3e84af2b9728022aceb91bc1a6235c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=1b366d000b16c66e20479aecb1a9376024c3f2bdac94ef6b8d8496019e32bb64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3ST2ZC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwhggpcxHAtwk3Tc8sl0myp8W%2FaCV%2Fq7gPGhTTalVBQIgdin%2B8Lzyk%2B8bcgwy86KEO406C3UcmeNEnHfsdzQL4VYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbwX%2B6LbaftHGMfyrcA4hDx1%2F92VYFFsuByd9VY01A7IkA%2Brpf1JbrP6zE%2BRwJioEpbVmlzfYfoEUcdjRjHMmF4E%2F1wIrbVo%2FYRXGhakgU0GWFeXfQHhsb7pErJEHPbbzdnDc3ao%2FDEnxKax1K3pdAXjajb7rqV3%2FMdPMR2AFHTcV5MIODGzjzmVOlpptjicYqvNvmWw%2F8cIrOS9oI0Kj6OtJTxmiOXY1O3MHxX7JkPqe%2BCmRmd9g4Id1J%2F0cxl2RI4O1vW%2B4sRfIWCgLdHEIoAIwW7jTnlQYygm%2BVn5rfsNHxK2JMKYk4Ec90vKOD%2FJDNZWTlQJi0Kvwr73Wn5JJn2jWExVptHzp9%2F7FPEnGWFka05gJPFRSEYlumZ6pXmTYjFF5UcLwnVHm%2Bq3tuF3uvhQeym%2FsLtXPaxer7G7v%2BR1SoPUkRiOvwd1sMB7lOzv%2B3WQMOgqzHbcyNFiCdIn1ZJRD2WG%2BZAnhD4oeKH%2BM2bddQ01yJo5IFf2BVFkaXc78R51qd4Y5T8bM6EVSHYc8tbHo8yy2%2BToKeiloJGvEhq%2FT74rFNaFcWoS104cP9jeMTM2sRaAiyqZIaAT9eCdtUtszykRo3AbK%2B4hRfEAOtaARE4rPXK%2FZUNqZoIt0aHKDm0o9CUdN%2FTpAbMMSJn8IGOqUBJudD6bR2WmFqlxejF34jVTzN6%2BpzeonPejb%2BVj6Kton33dcvL%2B6hycbSgxJGdBDPtKgp9Vd3zC6BGHbVjccBK4weh1NFORUT2u84htT3A3qxTqTlkX280iepAgAW1R5K9omV1zl39pvEZ%2Bnd7lvI38ucw51ZaiWgrbS9AOHNdexhwbIOCR6NAYngWEMLTATrgvcsduOPqgGEWkwFxVo4NGV%2Bndkp&X-Amz-Signature=b33eb77861a60adc9ba46b554d9861885774521c4a484411e8e2921cf85cfe4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
