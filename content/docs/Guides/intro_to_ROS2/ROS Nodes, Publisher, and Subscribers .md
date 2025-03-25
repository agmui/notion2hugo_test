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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=eb2f186f90fc48da0781e828600f65408c8e0f18ed7c80904155d668deaba928&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=fab12dc726f994b7ab30323b6efd02b535cdc6ff551c08501f5893c59400444c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=35bc0294750f14aa39cb529f602f66b08018fbc2776887f35d8938f84d95ed1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=a3a387531e121d860eafd27d12b74f03f92d25cd3ee4721114146ae839795af1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=4e05fd92e670d95e341b39375d62640472e478f87c571ba6e34dabfb06ce5dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=2649d847008b758283745da2fc7392850a568e56c6f3d5e3c2c593cf3dd63385&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=062be0e16f93d4d34ad961d9ff2d92629beca840b94fae90b7ba9ef534f0aee7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH56XYA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyY1prJZ0C2hYHXQGihbJDM4MMS2yrdoFFfzUaG%2FTvQIhALg%2F7HSiznqpBv0QpP7Yl3StNhg81JKPOTAoaGX2a2eGKv8DCB0QABoMNjM3NDIzMTgzODA1IgyRhwHPCB9hJsUdc7sq3AP8hpbAMZc3PlORXEjblPuqHAh11r0dOsSrH%2FH2oBnOztO1qj59PbUFvEzfp7cYmTjvCuCEKIdzhrqQQ%2F70a2reW2wtWjlbA2r5Jf4QEBeV5tXwgTUlnEzMITjtUu%2FJBaGH5UVEAvWS1R7gvkSXhUfgt7RaRqZEEqW0NYAuK78Z1icfB0NIMWkTQoaI97g%2ByFNRW7OxT5GYpZbic9Ob7j9Dx5xyl94KlW%2BmkVkp%2Fn%2FjxbQCW%2BtTelcBdRJ9CVj8sgM79gYHhJEF6TDUfWfQJhqlA28pbSiZVrqvbjMuUf2ZiSa4J4ZLLdsw9DFit7MK7UrPH2HO9P8tdaH0bk39HZAtSXG%2FE6tuQN9kLxUAaqM%2BpduiQYMhbsqjXdUseLBKQoJjEwIZbRCf0qH6eCyBBPEQJxRCi%2Baj99SqnCkvZ%2F3o%2B8GeBXHxWxmJkEYnJfoE8X0WTKQB4fZ7Dy%2FjgXJ72MWyKg3g%2FyglC2B7uMl6cXQq7cxfqmUXdHiuhOb1s8pSzFcn%2BcN4ZKwo9V64UzzmU12mfcAf5BS5LHeSwritK%2BrIEOOPQGREmq1JpIuFBDwGw7VeEoL8VsgN3ZTGHkvcs9c1KXBre5KcHzlqTCse%2FUHK7ZK%2Bif7Pu%2F0RyVrWQzDfl4y%2FBjqkASRZHl6b0ymz1k2I1KalWQVhRol9khz6WqDCWcgQV4cbLZ37mDZdhU4tV8DH5m%2FEtmcfbv8%2ByGQDH3MZ5q5VBSqCh%2B33q8XVdMhxxVASkj5Xclm44OE3c5FSnDj%2FCArLf8HhLMO1m1BFwZPGLQktlVeM%2B72vwFwwtCyDgTPy0swmZxP1%2BoPZpQp9WGunT8JpEL1iW%2FfjJlzFEAjRftsIJFzziEcY&X-Amz-Signature=27748a23b13b99019031e6f6f4b54e6f516aec894b100d912f43b7b08e5b35f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
