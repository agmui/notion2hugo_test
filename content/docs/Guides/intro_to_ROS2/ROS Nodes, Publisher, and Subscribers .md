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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=6185f965544ed11616899840f786b6a2681f02422c89c501319ceb41448788a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=8cea187ca1760d691560c9437335eccbf2f86467ab843239022bf57793956d15&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=47cba573ff7d09fa720ca20cc5c9bf6a959f899adaadec424143413be2fd40c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=f5c2af75e97c1afb730869d4b73b1e40c93898206c8cd8a058112f2e847ecaa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=9566f5291dbb8f47f9ac7425b9c27f9ecf95c6cb4ea86f54dcb48bbcc4fff7df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=fe3c1fc2f338933946874a10893b3cf381e0fa73a2db1406615aafde7ca19e45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=7be0738305bf5135b87b8156c81ff37c656a163478d8712b82f0323605849d77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUW3M75%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDZczfZu5E%2B3iKDA8v9M9kY15KV9nFDj9iDiDll01FBpwIhAKmjYX3ZDJTPXN7nN%2BC4xPPMEnYWP0y0Gf8%2BlmaWy9RRKv8DCBgQABoMNjM3NDIzMTgzODA1IgxvMMhNifBb%2Bg2soxIq3ANgEqRO8HffLle5KPg6%2B0Bk2Rx%2BixjCiCTLKgxr5XrKGas0sSbe8%2F2wL5VWjjHW7bJWWoIeXkGv9dwZ4WjVce%2B%2Fw59ii40EgWxlecU4bKP0SURaLTYtLMtFtGNMQI1mKJbOVI6%2BUsQ39ewCebGgaUJKOtqRZ7pjClhRufMLVDr7Pkwt86aa9%2Fzc9Z8%2F%2BWxgbK98rM24XypHYZS%2FUQz%2FxFPeCmPHPbpYzhtzOh8tAD%2FLW%2BeqTYbX%2FKsaUa4CP5TGeDJRQihRQzl80ti0avEbYJJFJzmYh9VX%2B1E94zXV%2FZ%2BY7OVsmS17nFUFAHKCf3pz%2FsCmDzZtVNe%2BQf0Vy71RCLIsyAJfRko8%2FJt2wq%2BRo4JAaQ%2B0Of%2FszGvBuiHsmbocg%2BNBqjVTdhvRr5I4NLYEpb6Del1SBfJaCGey%2F0bXIyYweurM0exvaf7ZQQ6wkg6RiO4DWS8S3D7nvijNQbL1XGukjcQN04MvEPNLbJLlK%2BCOvUpQD7CokIGuD3S4JTwRZNNNGtBGP7e6PP7IufeWeYaKNtLWkFkDT8UV45N8x6Blk3begPuILsRTetsFysRmN%2FHQ9997EK0o9Ulo5TbxL%2B5PX%2FzlCNwgbuZTsKn9eXszT4BlUK%2BQJkQj1RsPRjDs1pLBBjqkAYSPsUWmh8WbH0nckCwGEbGtH9siznmS7uPlHzM7loxWnPFu6cOsnkYITpcE02kXp2Sfhr1x54myMw2zCpU3owIvh6fva3mhPvae1Po8plKTsPdDWgpupKsJdMq%2FHjjh35Num9UQCoLyco5gYq6KZIjDiErWDXxczDPhJclLk72r3HiRpxuKURud7wQsxG64Kxh3vSMeqR%2Fq9IXN7CyT1%2FuR%2Bmw7&X-Amz-Signature=2e36564f60dac38185d9b37f77f6266d8f044c494c639662aad77dbbb996d435&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
