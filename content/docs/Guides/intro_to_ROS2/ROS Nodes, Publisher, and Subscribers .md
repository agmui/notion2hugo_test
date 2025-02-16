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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=8256f1b6b81308f0a747c389ebf07d1999009f5f727796fe7adbaf0f38a7be9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=a7ee722c1b814b84e81653edf9c286e83a9447162d0a310c8abe32def5316b04&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=8081543aad95122e648f3cbae16a9a9bdfcc21899ddb58870a385069246bbea4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=379b6178dd12184cc9d32e32424edbb4687d67f7e0895654515de05cfa642bde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=10cf04376f529a16f5b64bff80f2507fe6ec019f9bb47112d1f345351446d2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=7a0717c52d74be0e21eb15681a05a14a82aa320535327d4d3a1d174aeab4f4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=430ea9fe4ba9891096ac7013e9b5ed37691ca3ad2478779d07af93b94c75627b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPFLYYH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7pYg0h5P%2BejY0kMn5jJtUX3SjllcaPfDJ4YRyeRaMuAiEAmnEGccF6HS79fkVEClVJJlwFqx3jdFxe5LRR275NToUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOsL23Qn2%2FOhzXizASrcA%2BGbXzFQg1D0jE9VG31HyFKjpaX1uHK2zplNBfqc9d7JhfylESwdupOI549%2BOrWmzZvNGA52eLxc3wovKiz9vdq0Z%2BMj4GSzpDK1VMQrk7UYx1B5hIXMRlieQsgvPHAQktCUA508PC9VFSNODbE0KWImGRB8XT2tUu5%2FYR6r6ySRUsvcPsMS3p3EF7r9cYvdk8uaFuLlPEulhO0bbd3giM9nZ1B%2B1OOfhLx7ymRGoDZz5NYA7QVt7VuBhHYZ5rpk5Md49fbDp85I%2B2A8BSSad6G12q6yt2pyQBjJI%2Bs%2Fsc4PFMWHfzEE9qLi%2FAq%2Bz0VMxM8syvKMm1itTLKgjh%2B145remIFgR04x4H5IM%2FUJwxTeHF7ICjObxBYgUvZi5IUjydsUhtlmBKY9H7ntYoE2Q5rP2O3kEjuNv%2BzfN%2FmN%2FbtANj9a%2FDRxGAFT5BYY41kqXsZ9X930q9d2bZrRA9VeISmFfzWWW4UfGIGwQY9yR0iVy7y2Ov9cZ1XQ%2FuPz5R%2BuYpgp4y35Phg9uBp40XqIhuGCzPKMEDgeh8vtgSzh7KJnsrtmp4vw%2BWy7X62FSu9kQCQdcAMAI%2BF4qOeUoFrvPRElJO6lho%2F2fTBfmn0ZKDfmtSOVhu3KAxcVnMnLMP2hx70GOqUBJ1k4tcC%2FJ8LPwJxfz0%2FDW4ydqvZuIzUtfk67MAE%2FND35TiPQ%2BpREDQu%2FnU998MNt7T128bRwS2mplOHIxVzXDUdK%2BwFjLwkR9cYepoITb%2F9ZatLZRbJl9sX1zAZcYMz8NH2JNMD2HOnYwdOOhsjPiW6JBhdzGStjqfU0CX4S43FglUVjbrtrjljcWT8lTSEKYGfo3q9up7bk4xyZsLK37iWtzrxG&X-Amz-Signature=c27a8b33ae153080ed22be7f3e2a40ca67e44c130485deec980d28e40c00008d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
