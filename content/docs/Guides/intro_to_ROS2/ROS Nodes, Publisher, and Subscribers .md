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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=afa6aa5966799b4d6cad52334654b2a13c294785be44488e4d12c309cd80fc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=502f8875b54c39139832686215928932b75b86d1ddcada57a96845b5373f9973&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=014ca4788ef76109741936845429febbc52dc33dc376e9e02028b9ce4296fd53&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=a22d127c0090e8b1f90e571b171b11e22d1b3584cacae5b7f18487d87c5ba0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=d90ef7bed497a04eff4e81541f26c476366d0b221ca35ec0098cf3594b780353&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=a2f425b2c3eab8c2827d30aa1fe7ef5ce8f40fa26675e8db83bf09d45bf5f946&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=4b815ed2cdba6455791dd08962de2155a290c7b1b1141ca084e6db966f0de7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMQ3HCZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcsieYa7tVTmlbkMkfk3cgavq%2B%2FG%2Fna4qTOD3b81QCuAIgZu70EMEtOYMdNMzT3TohCtKqpSaouxv2UhBbCTOUHhoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zJVxFNZ6g0JJkTircA4yOqqTWyNBZErbLT16JemIuMMIY0qBPZso63rJcE4euW0gZP0vsnzXzboaxO6MsJZA59syjarsBSM%2FQpeLKBIQhyfy49B0Ww2z2fOGQl%2FdpQ%2B8MYvFLXiAG5MupszMzw0d5xi5pJkK740bzn3dt6440kXcxfvxWgrhcxMmP9q1JBsqRaGuXy18WUmMllWPQGrT4zGo2GPTu1CkocaENfwmYgq%2BLgzNNU%2FllOulvUtdf9V90ngnyJMASsvhpRPIMEcO1yoJARVnkkPLkQtFYcGWcMg0HNndcaWe%2F07SD%2BH0KJc%2FiLa5cTolcqNrI6OGl6K3DcIPB7eqsGYCKHX4Ms7NW7iGA4oH7coFKZFGQ0CIFMeqaqORvlDgr0zWwLxOU%2BGHErbXI%2Bo7EqQOoc%2FOcDVTP1Wqw6DmdchemBmtEJ1poECYgnIcHkTBE7aYTjgYqmGXybXd%2Fs7ftB6FIAYmbP0J%2BJLJAPHIgBvkUGfPaW%2BSwwyhFplkNCXp6b4H2i3N5BVH%2FUHtsuoRXm18NLHC0%2BlTCfV52Hl8lhBU%2FydcwzVJ5UUIh%2Fj3jg%2Fa0tWb%2FV9e%2FE%2BH7yd0Pi4lTwlqRYkoeZ3BjiJNhy23RQuiEfrYGItA9WgPxGzQpNibS68PsMNf28rwGOqUB2LmAiuNcTdsz5eif7zzyeB%2Bm8ATHROBKJ%2B0XKjAyFayFmFPjhVqRAszwF83joJwrQSP%2BCf7ppuLu7%2BmDx0ou5%2B8rJz7Zs8TXeLt1%2FD6frMfeRGWpowFkc0wHXIfrTkPrMD1UGany%2BXGI6cTdCgd3LwxQHxYx%2FM4Fc8y4rbjgWB%2FJ3HIjACAtGbxHVXveygxUOiN9SiuCErHkS6ttrKdpu2HvHQzf&X-Amz-Signature=cf585cbcc3d5e5ce9751ed4229339f9224228db7fe1401b599570479552abf9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
