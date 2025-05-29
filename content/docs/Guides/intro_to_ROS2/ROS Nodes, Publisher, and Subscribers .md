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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=87408702837e7d1452a69b821559c9f9715fef72fddd915de90fdcaacf523561&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=6e1ea59831425e0b28ea687f181ad7d903dc269e25f45f63ad0cde176534a2de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=543cd3459caf1cd6ec632c81a01d4844353bee61a00b7bab12b75858b0155ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=48d9410c8e031509c2ce4b1af036fc1ce664d44eb0901e40a60951176da81180&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=884f270014f786f28a1791c73ee51905fae10f78401cde72cc8964f831fb1f04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=64125848002e99056ee3f4e4da91e076483c50d9e6d643b1268159da272e2f38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=9a035de4f215dd37ceb6c613f8449df32108326e2f6e8a9b1e29087d7b03e2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LHHBY2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8RqehLSRRni5PjIaMq3haqqBPGXZ9lMwTt7R%2BbMd0UAiEAvM7OgY3Wsb%2BSGcEyL%2Bd14VXs5sbJsOCStG8YCGsp2pcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIaquaSfiZNVDIdCrcA%2BqMMNJyheKGCIs12viyq8%2FDUr5LmN%2B2z%2B66cFqyOQ68Wt9Cvb7jHmUq8Gm8pkP7EZjxWYTCqHJneNvXoWSWReyg9HJJ7gITuoM7tVTTIiBrXTJuO7j%2Fa9YPe7%2Fbxx8aLDc9UjsN3IHgsjtBbrfQRA0C%2BY%2BOouyxASPxMN%2BJb18RkXotuKLSJgjlg4Ke5IMBPwHaoBxeC9gVBr0sw9ivvOSwom7I6nd21CjhUhpsvVnsFFOthq9l%2Ff%2BRdQv27XzK1oMsLFupdXld%2FvrNMGdqBqJe2vUTp6tBfpSnxKOIK%2B50t7LQ24f5CzYNNgCWku6XnHp7UFs1TqIL39KXyVZE5fnVHU53rpiUiDQ%2FW8cMzdzoGUPuX5JqQEQsiz0dfZviMKCIkH1NCele2SuPRoJ4tvPgErNlVi3emBWrVnHEVmdkEB2E6HU1B8u6%2BTY1cDQIuDLfW6hW4G6tZIEAzcJdFSNxxDlP6yVLuzdXD9E%2FkfP6%2BVz7yasTHADGWhZy5UWAt9MbwOMaiJFP%2BMwTJdZ6be53%2BCMjCkiXmZhfiUz4zMVUwLefVRx30bDLqUSvZXeH%2FF0I1Ji0yeoCiQMgru0FhyYGEOu8gj8kVDOUwTi9VfUqtVkSI4%2B7atVQ3IBiMIWz4sEGOqUB6sIRJ0M0z7ykNK74wUjmaI91Qz3b9SNcT2Ub8Whyjebbs3lkBfGJvSkygS%2BjkhwHsTU2Aug9A0KBgMxFm5uAUvNJPRvlFDjYzijvCUxcABueiv7NvhdgSkNM2G8oYky%2BlAx9R8v%2Bl3uMZMjbDexB9yLTgIv02%2FbAzYO4fYHQZ0BTqgoHNxUcVpHjT4GRdtsv0B21%2FMqYFNsw36uj5GGUcqmopXbI&X-Amz-Signature=445659f55cbdf3510b54695f686fef5a3ab7e8341ada2e8d1c83c01763331476&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
