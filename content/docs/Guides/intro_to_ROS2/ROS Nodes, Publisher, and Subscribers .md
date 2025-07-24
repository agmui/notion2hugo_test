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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=8e7b8cd59aff3fde80c9758fe6511dc1aebb3f3a3e946eb5adae8bfa2f4e0a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=4e67ed35d8f0d5a1ee1846d25516377a805ef17e2f6489c40089821517d253b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=563eaf09f8545a2c26f8bb036e624e89ddcce4a8e0708f0663917b41e49806fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=f5f001021039cb20e5ba29491aa2fe955757c6093716601064223f36297fcf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=12d5e2a4df67c2885682831a72e1c8db79d5815784a8afd8271fdef81dc15c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=9efda91bd5388e4c9ef0d853fcd6a98cd4b351b920dbfebb83a4f5e2d5080873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=b31c53c2c21ba03da70ca76feb2965b04500028939376fe2e10cbfa32232d28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWMMGUY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAIbNl2cwL8Eycyec%2Fsx4Pj%2FyGLvMbteALJ7MLvbUK3JAiEA2sGdbKHhnSBJq261pmzVsJtiINtKT8KgCtoNuq9U7wcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDERiZSNTv9TzDyTE5yrcAyjc%2BGMUju%2Bdkn0GfBu9UhRGevM%2BMi9T7VAPCfb%2Fwn52mzAU76TcJpLAAfLmZL7RSLJBIFAlPjxa%2BS0%2FRMRRQXqTfXYHos%2B43KomHKCLxagFW07B%2BUNrzwyX%2ByZVB11nNoD6PHW7%2FuXrqUK3Tmav%2BRyt9pLCRJ%2B83mGTfAAeZ3SdiWhZPjAKuWYfsF7exNohi57Z%2Bgu%2BS5nFtE7pUJEvnWUwG7cbsf5y1W82n9%2FF05dqeRO62snRUhU9MNpJ3uo7xodXAPlBCL4FnqQ6HHBaWEY3aIKvWZQ9G3H778Bd7O4CHZQGZ2LLRa%2BL7Awkw5CCfG5ROtknYIl2OK4xAdhjz11ki0ZvgVaMgTFcZJc8JpLAmdwbtDdL7CKEUli%2FAsJ6EUGJRBjNMVT%2BzcqsRSpfJW%2FP3gRizfGv04N%2FSPcjBr4r5APOdAci%2BoOdVv5jSigvJ6XGJUfAkbvBy7jPxi%2FjzEmRd1hJUn6YwVhI%2FS54TQPl7G%2B%2FKR9qnQQIAYR9SbbPxLD%2FC63Pz81e8FtrVnA6ZA7Rv2%2BmUOPHkZM5w4CeXtXYs1EOme6YnTTv8BQrLUPqK%2BBJZpyeGUYkDP0N8I6rvmih3ZPxeiZftjneKh8qiejYtHtarztX4SlKQygzMJW2iMQGOqUBOwJBPhYR5%2FikcZrfjMWSts1auegBl2G7z07G4FEuuDsx1SbERxp7ANMyJ8WKtHtuiEfWlomFiCMuA1Zghz4CiU9lxkGRh3TnxwoT7K8UcQCG7WzgOLjFHgO3X4vPykShFioi7SEa2Bp0vn4aRaxEKVNzTMvWkrdwvXnRvWA6IGBbYXqmrUW8A5z8P%2B58fyYfBmC2ytgpQLfxxgLETGzXUcWM%2BWvk&X-Amz-Signature=a04f9afa1d73f2c3f9b3849d5ba52f12ccfae43a5697571e0ac7daa6f81a2710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
