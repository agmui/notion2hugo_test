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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=d473c98073610898d343960a311d9969ea290e24027d51b9e64996fd3c1734ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=25fd41b130259b5e344c7ae931edfbfda253e62b2fb7d1ab5b161cc3e55042a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=f5fb3e75ab38930f031a491f84e282a42e370e9e22b3bd74e0798dde23d0a8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=19fb4d3a0e54664dcfea5eae573dc1306f175a2e21f96affc18fd3223e6645d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=2cd468fe9c6c69c7b5fe3e70722fdf53f6a7191db526fd94fd4f258cffface13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=14740cbba0c2b689d047f1611f9e5a27b999312a09923b3cc0b7e77ab157763d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=416b5a1b0932c66a16f9d3d5dc7f51ddff54236bda837aeaad057fa5210275ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCGIIWC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICU%2FA0JVPEdB4OlIIWSQFPvkEOUq7OS0wod7XajUxeKbAiEAsn7bC8xUb6ZKdYhrLcX0nJdxSSEnW3PPLThM%2FuHlWSkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzQ5YQk5VQQ0d%2BD1SrcA83pdnLaiKwZ226Jnacjbw3GEs3WTg3HG6%2FLG%2FtPSRy7Kzap7La0vC9OYhxiManu17YicltiOJtRx%2BehOe0H5J%2FvUnt9%2BWXwFLOQjDnAlho4xFudmJBqS0cfeUfUiBgeZop%2BSg6eAfxztscm9xsByBYCUVkwaxOQaxet%2BaiPLtVbAWnkimbasVwe7Sb52SXzQWOTy6FyHjAgmTF2lY42aWmBhOcJjBjEB%2Bzety%2F%2BY2Wn7ajftvHl%2FV%2FYD%2FuCFbnptZ7zISMamqAZDcKOnCZpb%2BJSWR8l2hLmj7BWEV0OsNRenQAtPwb5Mgj1iR9KBiEhytN3izyrqQu55sFArru%2BIdvML5LKNf09DZ49Va6FCmwPx5HZO9aiW5qbxosCmIZM3pphF62wb0GyzS3I50VraiXxAukKccWZNOtrqaXwR2pzUZ0qY54uBYI9NpYayZYjjGGJmnUe%2FkJzOGmKCl375ZkXpfX9bDyVe0%2BXVtYvgqu%2FxLxzOC6ypEBWAkKbm0hSxRZIN%2FdwHrb6pI%2F2vC7rJ%2Buqryuxewabbn%2FVRxtFYfp1nDFjSiTnVxqVQcbSXSYXgQ0m8jTLxtXqPXXWCoeEws3%2BFBfTZA7cyRQits%2FHqln3ORy58SMgzEP%2Fjvj9MKzE8L4GOqUBCZdo41TusdaQqjun61s1u%2B6aEmk9xN6QbOwx3snasiahdDcAbrfgkRVsQ6iOd0lCL4xjC3BKT4drHrDbbOppmQFiIR%2FCXHV3LP7QG%2Be3XedUiYLcQbodMSEC9u7HvdmdHCC7JQe1hQKKUx27OyPcQH0q2edgghodjPPudYWhCdzvQvzv1xE23Ts24gwhB5Rtfl2iWqz7pEc6qYfu9MdMeNBvBABp&X-Amz-Signature=3c4af635e55b7b9fc4c4e641e978b0c2d798f5ab2d540e6419fb4ce3a10074b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
