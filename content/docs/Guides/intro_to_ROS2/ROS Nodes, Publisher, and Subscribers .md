---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=9374bbb9a5ad2e4a7daa1fe0d080739aa2ae606d7944e00b84649f28fb8b0649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=35386aba39a11b9b7f7bc62ce3aba11074c007a540b90f760ead377bbdd4e727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=f09579babf22e529bc8a9b5e9e2dab2c3a789ccf98e246bf296eb0ee98714862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=e3893832b38d104da7bd8fb5a405e6987d62ee66b2e7d44e86785db2c1e7634c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=9a5be32fbb2375898fef13d4311eed447706ab83284a67e02c63ff6eb2e90e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=6e0542848bad87fc1fba52d5fe333bd7d266d1c9c28b371f4ff470fb5d53817e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=24f8bfbdcd7d5d4c9295640e108a0673f8af4740855ddddcc9fae4003614e2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAC4HPC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDFE6kGqwaL0p0AgOdVWUsqmovdboQooVbS5TOKCXv1EgIhAIcRDjpVFMBOR%2FT0pVkCT1ge59U9Z7DYYoUf9nc%2FNkv8KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBfs9tP0vQOkQlYocq3ANwsnlFtox9MzA%2FzUHHoUE4EeYAW%2ByH50Hjb22hvZpI7PtD6t%2F%2FtMtvAW8zfHDFMxjIhc6Sk3CWakyFp9w58WB7DoYWRMgzkFDziliDHFVaQH5hKqHfV5VZ2tasG9%2FitoXGhSGbS1EXA752hIOAWXhxTRnT51M%2BkTvj2ToeclhIsff7pYlc%2Bi%2FL4M4g7wLq71QCoOHZUzQ%2FpMxsH4MiGdvZ42LHIZ6x1lTBgRP9cCSjRmTjGNa07OS3vcXOGK5nYkviM7KfRisBHODna3STg0iQUmmZATLE2NOOv%2BHZUsagO82J1DwJn%2FlkjoJLHTkKHoskXKtEqS0NlryzXNzFh%2BLv19cS6pQe4x9Q2%2BTIV4qEzLQDbaRG7jbtO7EuXTPVkkTM4DN34ycSFcyfZ3DYa%2F4Cw0a8pWZ%2F0GrQoZyy5a%2FogXiUO4C79qxGxN1PzNDN59Bn4NKEgLGkD6LrEyATPPjHyIaEpPp0L1NrvPhLok6q06gxAZFP%2FXWNOjMj0GGUkfZ2R2TrH3BvjPoJ1bT9rdOMvsxNYebfiaGGofgGeIc%2BsHWSupmKGn5q41sgf7ymsUjHO27mNzY3UiiOumZp2CPHUhbpOb5iuni7VR%2BKQF66PSKtYqOA7%2FxZZxA0PTCZjIPGBjqkAZmHN8QdiqWCRlz0KVl7S74SODxk6AEYpmViD26Tps%2FOeg%2FnT0bY9DMBzN%2FUgJDD9GsgZ%2BbVBTL%2BQc5bU%2BLcOWtjhlSwdS6zZUXPYr6XrCk%2Bmn5d0eS4KbLxF3NLE7wnUxF91EoXx6MdsSq6xgSMm9ZGpaYpxcoqD3RKMPUDFeUC8dbYvfLD%2Fu2%2F549HQ7h2eMfXK07fhM6GRc8%2FZ9DrSlMdglIW&X-Amz-Signature=f0f59bfd1d20c934091922ee5c943410895ae0a4ea67ce972f2016be40c80ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
