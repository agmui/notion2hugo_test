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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=aca2c391ce7e26e70c630149b5b53d8e3843b6f1896748817b62c43dee9071da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=d159b2931e04f3fa5ca4d988d55fad4f981da367246b7df7312b545a7365bc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=e5fdb4773fdc9433e2a34dcca92c3290f0a737ea8e189a6c9aea410238250bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=596cb5b89366a0ba529ab789e196519c23e4d0dbfd0a1aa0e9633f95e43d27a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=bfe0f5948c7973bbad237aa3dae24cfb0276a0451f6c1b96bc0e935845eb5b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=6c0d9b67f32312cf9a3a81d3d6f8042476834774e163fed50bcdaabb494e2507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=9442f9268429204cac971f8003c5191d91f7d5df2ffbc89afc0b20e0a602338c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XUTRWW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEHSPuAYeOFEqIbCvY9%2FLFwnRewV4ol3Oj8lOgs37lrdAiEA%2F4Z9iM6McdoVezjix%2FZTs5jB8XnByRM9PYa9shO5p0Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDPEY98L4%2BR%2FtEk5zircA5UgydC8SWTjkOTmYA90PZkqMInOsbk1V4kSko13i8Nm3SZWzsOsqFnDKsQPrAUUOI9RSHIflWTWbGreQzjhN3O0aAASsOBK2QuXtTQhZU6pR0wDSlt7Et83ZHqL8k5OlKXdU5XiwqHSNTLmjJTZpYgDiSDm7GE24CpyIIeki9yuAnNfl4D0F28CJUE%2BFVriCClZJy5kgvmpTifi0shfAodevqUeA9Q0cj03d4JtPkW%2FV1gUeD%2FKXA4XjcVxU69GTvTEMASgLh%2BjgUJMBOqGQT%2FZrTHLxNwrvy4z7b5e%2BbbBTJkGMwsdhD8AWu0XsMI3ApenbJ7dJ159U%2Fd%2BrvNuR8MM2%2FymUTLbNut1qxVwYo8IYkJubRjSohDkkyCTGZ3M%2F0oBdvIvXunJ327BeGEGLGB6PWAG1WH835y55hi0TQvBJ3BlUq0NuQ0E2l5X3zg6LaRJleFKwPlo95JNWZUee9zQbirAw2Yj6I9ySD3EAMNUBdyrRQHuLt8M8AXIIgdWtl60uzuinaV0LwMmQLWzNlap1OIExHjZ98w6fgRRBt1QCF6f0ufaD%2BM6QmYY1vQHEMq%2F0JIaxblb9LJ04ziOYc5QaCX%2BO0IP55E7u6Ypz9C5F3YBA5ldfLy%2FLAWMMO%2FikcQGOqUBbFarSuAFSjRPlrHpoItCRd1KEyT1A4wrimDQt6eAMO6cY0dA0QX32zbpo9Xuj9gQyCrOJZIt0icJhsATrLhkh%2FO4LeqaQtXZvHWjCl6jWEKgL3tl7CpPlPmX6IE2VykXzAZhPbD6QkxpuRLt%2FDXStfG1r8RTkaRzgYklXdeCo232dXn7vWFyeCehEh8XG2xzWDP1KHxg6OsAeLtcYLDOpPKL%2FLDQ&X-Amz-Signature=585106296ef499e37a9030e78d4cd2c513745f63c8ef07dee84ec458b55018ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
