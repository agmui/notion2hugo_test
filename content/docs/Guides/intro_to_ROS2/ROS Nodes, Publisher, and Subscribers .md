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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=fe6e952507f0a03ff9f3b64926c58533405c377ad54f9ad03137e808f8a4e4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=63e2748d2016cfd07c4a4713db2ec80b07494efd950ff143ccd269d37010d854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=0e09a18bfa49ab114df2e347f7c5ec702f759270b490809031dd48fd4a9f3a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=eb4c9deae19cf8a38d2fd0427cfbea8fd639f090afb8b2537ef7d72873b37d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=37e5176e7c870ba6e89f3613a58e26a439337df318308240c22871e6824c3924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=a5aaae25aa0e5c56e9e36671d6c89a81846ecd9bc230dac9290b523cf6054573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=a324d3a4251cf491f3ed417d440bd2ab9f807a8ef28912ca6189ef2087ddb9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XREIZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEaum4dhAYQVQKMJ8odzkG70eNFSsECs363W%2FLg2MmrAiEAmFDYVdOJukDdkOdIibqls9y6BYwBI11p7B8BrRHqKLUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMZeT5wobv%2BDhhi%2BKyrcA6xt4JJkNFFZqLgPn44L8mu7tZ9nmcux8wWaKfYoTeMv2aTzIEvy%2FQ7XNf4bwQ3YJNaVL6fZZnjvGpGukYj8DjiLVtBS8PdAL4F%2BLZMUfptt%2Bb2yOLQorxc1JUbPeiNKzcuZ0q6bjd4szNpNcWkl%2BlYkCQixqjrsn4LW6W1ZnSJTKQoxz5auhe%2FhpffnglFJbB7Jyp9vmmLlPJeC6qRhaVQaU5YhdccqX7rNck0vAhMYHL2wrL%2FJ%2BPGPTPZYKWLRi3%2FSfG0xk%2Bwbjm8yW4oGbPyRSjh9uKSC%2FUMt4nBXGYftWmm6JyXZB5yr%2BbIeTgVePLuZDXjPkPniwYWCs7%2B8rEE8PkZfqFJU6SfAo9rdME%2BEb61dKD0H3Pw2mUpjBmAmyRkCx5dM%2BVgCLpQ0nej7fS4EkhyiVsgci5ODykI%2FGik2XEXG%2FQ62k2W5VDjgc2xxpWnf2TCrghRuS323%2FLBaz59fgh2RSHREMRmPAqdYdAAEVzeHYqqPEC9w9FsjwPlbwyHTyaYGvia2ASvKnR7N9SUK8KpChRQNrh5UEUgVYD02OqMixYTCzG9oYbhSMw1dw15E1iEmdjfNTMzxf1zBI3S6uV75w1gvQa6c86AmYr2fbdjCgM0w%2BJDGPW%2FTMLq0qMMGOqUBrJRLj2UCP5O%2F5u1%2FR7pgBsiT2siwkBOwFwjRN7bBwTIWjAGO%2BDkts%2BMvl0h60fTZPVWkHAiMFFIfIysliR7noaXtkyUB6gMvwBb0mg5jC6DDsVnb1z%2FEs2qQcLca6DmBSPM3mlJRDwWPtgZHtaf5kRyI%2BTzHUS00%2FunUZjJRAW2ahp2m16U45C77981VjIaVNWNfaiYS8RBK3LG2S64PqsjViz6b&X-Amz-Signature=fa525d566081627ff9587b69dd289b33894f18319b524909614724c7b3ede638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
