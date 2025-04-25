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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=f3f972bb5d7a4cf453715b464a03b331069ee76ab2b93f1445b07bce14c9f108&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=e615d55b1f0b4ad0baae5d36eb78df0d262ef89ef9e3aca0998ef8932179514d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=9a9b18c21de9e62a04dda3b315d189d4fc3ea1a20cbdb17603d29c12b214af3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=113066a098a3486daa0be60519f03fd8d695c571819bd42595d1c94e7e053f72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=d10ba6e66f3d692ad700e5df270820cdd23709b533adfc3c627947def5cdcdb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=4b8bbf76c2810a83b7ff112f37b4a29c83109099a07500e2bca8268277cb3601&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=73e2ed65063f1631e8d7ceab85aec76c74fb8857843412abb19f54fc4f0483fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIFLJUX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvA%2Ba0PTuJUpQ%2B4YDWC00gXi%2FrrVRdyl%2BVgUm%2FT8o1AIgKWjUAxJkZAq3S5m%2FuWE3tpdIhQXkDhCpYDPCe4bqYpAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBSlKRgAbw20Xt3JKSrcA%2BkltSmM6sRx3k2qbwd4LAaCxYTTYLnA6WL3z3iRxtB0HVRMkjaYJ3HdDx%2B8erM%2B1DgRq4ntf9hH%2FL8QwOX0PU4FnuRTfrOk2sSlDtzEV250UQRRMnawGiZOevdQxjvywilLvL9FQkB0UZ9yZJGqX0XizVhlSVaYA8n%2F5wl9HdyOtWHxeGuMfB26EJUSpK2T8ITccicvSbApGQO33uUx%2FDH13lpnQsj04SFjJAKbUbZw%2BcIbOaXcmzQWjJc0UwlymuuWIN7fw%2B%2B6kF818J%2F6Qg9gTVDZBWKPc7qYrjMPKI33%2B5%2FfOHNDtobipid%2FoTCc4IZYf6j1VVbh%2BImpedKHCa0ooQNyWYJNRBB%2BKQK5b9hRUWtjswW1QWK4ZrMYa%2FCKU0Rejl9D8matPkhC5Ww9%2FeJI98CzzgGrGHgcn4SpS3ljLzr3BIqsJjUqhA4krXCcltnb9xVeF3Ov8MHbFQI60A6Swb%2BF0QunFxTezH3ddzXyk4AsZs%2BXBqwsUIXx6ECOKbTP9Y%2F5Jo9Cx7FGqH3dn1%2BgsODA1NgHyp9fcFf400qdGGKVyBHwyKL70ZqVbTMVxvtc5mnwaZ%2BamII1UTq2avKABnlSv1uw2jlCcSmdk8y%2Fxjf%2FhtdrAs9hMzHYMKLkrcAGOqUBGJYvyIBksM9f6sht4cjnjTxtUzvGkC4RtTHbMhC1BuF3DAzoBlifANkWDv0TZFWJ5V9OlRnBdEhPRO6ECYSWHxc8%2BAOebQG8qMXQs6mIf45RZkJ4rlKGun0GdQ7xEzE%2BSFpcg6n49hzIQETg8lkn%2FrUDf0DaX7c4jA%2BUwBiFX3mTl0Shv4tzTPyIKHzj%2BBk4sR%2BaJ0i4E04NTu31vyyhG4gsA4Lx&X-Amz-Signature=03643c0287f516995a61073c72d180d858cc9d2eb916c90741b3a3e6cbabbc11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
