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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=ba12ed5f6c5c11d24c02a78fc6c95173bce5abc6956b7a391270b1ae5701976c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=ff111593679321fbbbcd64182e16de87f36e66e0ee507f0e561f0d923b751b79&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=107e29adf088db58015a40dc305009751b1dd081bc868fc4cfd0efe8a0d93c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=bab2057d8d14838bcaf24646d54ce77704f9cee20dd57b17888eab564a8dd797&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=6c5d56e9fd3945cb43479e287e7cc1f1fc30e5a870874ec366a1af86477bab0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=504a13b242eb4959c3cbf23ac2ca1319cc94b41eb1933376e9e7f487a444f04f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=417b0f3d4eba996865965c2628ef0e7b9cac10a93aace01f9de964745764c175&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B34DSE4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCfiZOoyCoFceZ%2FDs9ZLb5F9M7M7exVMQRv%2BGXpSfTnUQIgYzIA%2BK0fTQ35dLy80kpphfLJ6a%2BKKKaCZr7C6kMxGL0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFQL5Ld%2BfKd1KF0byrcA9uzDMJhVs8vAS%2F7atuZFd8BbuSO8XkwdszEOZI9FAQ9Sc3Hwi67v1KLz2nee1LWBIER1UkEYS72Sb23u%2BGgc1VAarabFwxksMzEftGBmvkW%2FbtLh3Y3YJDznb1jE%2BvYOqUsKIQAknC3Mr4wxG2eHtQMNE8D%2FNLoXuFKw4KfPX8%2Fj83M53xMUotRbMzj4qe1gKOUzHzXNwXP0B6rdBtKCqbBbR6iVA296iqLlW%2FmggG2HA7n3q%2FBw8sIZ8Y73g20AFrNsLTT7Ok0yIwVJeGHBuwUQoh1WWFu51PDBA%2BAV55Tp6kIhGJlGOVJ8Iq991sF%2Fy%2Flot4TuzFdfxiokVONCGosZV%2F%2BmgNBOXUAJeDMh40IpI2bJMsSnl081z%2FBLWntLsHNidOYsaxIZIqYR1HB6I2oda%2FfgI0S%2FIJ8BePkIZ%2F9rpWnn7tRccVFj3qT%2FvHf3Yjgrdr09cHBwurlie%2BYQNS5uo8Cr7Jg1Nj5F%2FlqImF17Q2aHCUpZ7gc36euhKHvA57gMgXojs%2B0rTKiSMbeXqxrDTeIA8MJbM8J6N7vzB1byV9AuF%2FW1MgZCJqbuRn277DAtjBhW5US4xKnUCyef6%2FOhnVhSgNAzjEN2npX6svvRo2qBsnrSWgKYjTSMJzlqL8GOqUB578%2FvEaIaQA9DuUb5SLsc88%2BZHQhZQbGu1ywUSDGpTYKtm05X%2FBj%2FCK7I53GSRutOZu0%2FYXJ8sMUWxXVCq84wsVucYC%2Flhfwt6ncY4GribQZY1s4WOkm%2FS8joDH4q4nVaBhl7h5IOBcvJOWrRkFGGzmhw8F8rU0ZQF69wfSl1TtEHFF3MdiSn3ilDxVRW8yP1qYpvEKBraZmUT9zb0j5Yh60E9ry&X-Amz-Signature=aff78497095c7009888d476810055c8d8e2d2ae9e09d758ae8e085f66e8a7d62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
