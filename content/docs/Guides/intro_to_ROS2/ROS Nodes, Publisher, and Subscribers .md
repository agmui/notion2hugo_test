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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=d64fc2a7af0a3bcab1f51f7d82c98eef0d3977c1e336cff804f5220e98aa8d03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=8b4632bc8c6331802d4069b0b596814a9529432aed3e7c993ad5d928001523d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=f33aad114edb5e87b263e67e0db10a4efb72aaddea6b464528a8cb9b2df29cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=96bd5afcac8a2f6a41f3d17061300604159e4fd4170b20a641c312512c890951&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=52a32afb7eb06fc96bc31562cf396c0e02813e0576958012a319e2dd208d631b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=c176ec5b5a22ff73664af38685ce8808155b0c9b7eec2a1e8e096e5851f8aa15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=28a933a3a3146c1f2c0d9bd5894c5814793fc0702b525b0d3494aeb1d461d78c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COVYZTF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCROd5%2BjVOYfgxx%2FCAkkK47%2BstjopyaKOQNQNc57YoyXwIgeGpiP5%2B3qzMip0lxNNKd1%2BSnfdBhdzdVFqeddz3%2F2zUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcwSNvh4qwsfSmgTyrcA%2FSTXpa5HhxHVLcvvqki4SC3byy73gnebhjyHZTJVl3lFqKc4zu%2B9bfia6H7S3OOdW71Q8gMfBpMSMnsPfTAh1deTSro%2FVDEYV4uLhWskq1W5YHoJ7qWUdCH6Cbjj%2FqnF6YP2jFwfhZW4v%2FIem1s0%2BJ0dSYgaqWSagmoKZOxPS5bdja67kmVigKIiotgePQ8pYCCPeFD2BmY951Lm6O5f7yhdbVpPULMJUcIOFHS%2BeGbHoAGoNlSsN%2FfEiyphA9atDgUCErNHnf3gJ9rdmg%2BEX0mC3ti7SGpB7FersYppEiA9EKdE5NthXkuLXxQmfvAdpwDmV7ZbsyBCwid8yVmQvTLgxqwm%2FCyuD%2FViIdLwBFKHyfHoZEBpXmWxOwjVVDcH8BxO4KCWNUGqsE5Dmk1DQtntZADH%2BJI62sVXphLs6TYn0494O2%2BjpxSnzd5OviZlTuoHPiq8pyvZfVLOQduTBkYHtfTg0FJMWGnTf0CnGh366iKTMCr3%2ByX9MtVn51GoXvqjr1Eq1wrHCk4uwEpFPWWPBGTh76qhVS%2BXgGFFxT5jHB%2F%2FS5BEphYabcrirkf0yMYtuetv0bL97hZ5WaLBYtTW1tr8mcn4Jy3JAn3Vtou0ZWWgrSrV0Wt1xWqMKvBnr0GOqUBHBpBrgFDRgmDX9tcKRnD0uxlKlk3cPqPjJC9BrYDmCXKCifL5VvJp6n10e%2B0ovk2fQoAR9JYoACZVZxCbXq7lEPkTUIzD1gTS%2FZ11Jgu%2FMhqxaKQLYn%2Bzvon7HsU9iesayt9ASPvCJypSv%2BtrXZWT%2B787HAzmMlWaPELQ6HKSfz3fQLBv%2BMGtJxKMVKSuDiTFlHp2vchO0KOuUZrFbIth4Dtx3rX&X-Amz-Signature=6a7a61bbd806bff5b556149c8450b67068148d8dc9d7b8bb6ea7c7e95c8c66a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
