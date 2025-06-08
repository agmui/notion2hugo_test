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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=9cc990294e10d5c588ab093878d411a97c650b729d385774ad66eb49d6bf4dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=e55f0b3a6dfd2d9204e0148c5b12628b4a714a580b6dca7c72e263a7565a8b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=3614e512d1203efa64ae38c68dd8f37b48110d9d175b1ac405894903736e8fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=1453de2cec24667c3d33fe7cd24795c9dccacabb7178377ec0aaec409b999a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=31aacace9a56d19d9d60b78538f8e0b5bc9ef63545bcaba89e2813d049380c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=f8aad91bb78c96815bbe12357d656e4a3e3cf03fc531d20edfde837bd681e57d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=63fc03b6f74229a9eebf4e8bb5dec752e7a3db45d23d31c805c985152e8953b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AISIFEB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWEr2mCsO8aWYlt7IokCwMz7jmfoNg50ZIhXjG%2FYLy%2BAiEA6BEnqFsivyye6gXB3RbVlHxW0n3c5D%2BozcKcfGK1Q8UqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlnNBS0J8LKeXDY1yrcA0%2BBYDy6qhCXx9UE%2FW7ZjMX5s8XwjCOwcI10HaHVcmTcL4vCCkPvI8HTp2kqoqAFWP8gDBTRAGjKBYKYe52j3twdjjyEdlb%2Fz58Qbdb1azLYx0y2aWyPIaKoTzkg%2BPVXJmvdN2giISQTEpqqQSMfK9Ht8URRG2a3NqqzoPhRPT6QzAQ0hybdahPTxu%2B7FfXo78NP35IK%2BvcAO7wVS277cIaCSsAwqjlCvbsXOC6saPD5vg1wWm7QHfnSFu8pKM7zGLIfEO919QIUILpsJPGTAF8QoiP7dVTBP9SSWsu5MQQPZVCfMhlMx78SgKkg436Yqe7T3drO656qRBi9AJqG3M%2B9iY%2BMrPrnPPW4XuJarrrTfAAnAcjyLQc4gdSxVDKCXecoSmnCxVNh1C0UwDDpPbEu8H70%2Bwv1SYeesr6q3CqrEZ%2FEnreVClIOtvVUbnVxQgKWNPmgGJ0hcxTzIHw9fmSwmLBZ5CdzM66b0pB1mTckBIOcBeZP9uDL7EfWT3xhNDD%2BQ8rvLP6SsLeXe4f4RunX0qldP1RK7r03dfduAGDcfIJc7DTHCkiE0OsH5XcNg5U1bZsVSJuXrE6EdEj%2BvABaTc935uU1UyM%2FFD%2FX1a17qjjDrGE68rIYIKnnMIzzlMIGOqUBcNMlwJRKTmpQ7xEtkzTKD%2BhWDYtNHyqd1q%2FikW%2Fy8f64z6ojoQqUyUs4yh5e%2FomnDLWb7Q%2FK49EgoUgk0TdunwKRUFIVhZ3xokEqm%2FSDDL0JxsTQGqhICWfajKOqvMMoXXJROohCN8NpklQ5EeGDn%2B%2BYMdu2sPkyW4YefHnY%2BWotZsvMu3YDwIv9ii86o16Uk53vlf%2BMZPy4hl%2FevQBaLwCwi3n2&X-Amz-Signature=06ed9b27c0ca9ae8acc23946df556644987fa886ca56d8ac061fa0cba324e453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
