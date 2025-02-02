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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=f77919afeef30b72bf1b12d3b2b16ac59e445ca7739b3bdcc7bdd04b8864c1b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=a5157683795ea8411772a3ae3b1c49a7f50232a26504dd17e8485f4278a66915&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=f18554c93de6e4242fa225bc8e6700cdd691438ae70cb6f85d19129f44312027&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=2fb684e2d870925adef6c6c9c7bf5f101e5dd811cbcd618f1f475125b2a1eb03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=2ae6dfb0516e597903ab9b63616bc2a0563e6e961da5fd4c0f3d6cda116f9034&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=4b574e3da00f726637b35f3b60e2fa4f496423bef42797e326e71da87cb10f48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=eb791eaa33f74d91e3d05e0d6b54e94ec7555d52cf9976ed339f7b99a97194d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFMLSNS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1e5Jl6b7W9MCLZKrj14wYPNnNCbOK2Dfz01lgp4HvwQIhAJ2XU9Tc5qxA%2F1wSg2Y%2BX49cOTx241AQ%2F22phWGMxI9KKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEgDiEzda0s6mQVlcq3AMmuVu1dn4%2Bd%2FdtQSxm%2FD8l7hkyqGYyie%2F0uNWmyLAKfSDU1hTBDOWESNmloRG0qLXa0w%2Bx54mZNeteRzyV4CLYXq2P5yG5kXJQxpI1J%2BlCw%2FvLXQM10NZH8WtNbXQYRG2%2Bx4f9ZGW%2BGl9hoQJDdKm2wXdNgR9ZREhdfFUExiRZg5h0c5G74P1J%2FoSCRstXjrYgEYzGk%2F%2BCzY%2F8z4bXpDRDJ9xHlhLkXgZ9G%2BfXtGFx4nKMMrUh5NH1oxT2hOKIkrY2zRZ3EIRhMVE1wc8i0db9KJeRZsPxt8EwDPF6qvbgvWC8cLMs4eudJab5jPvmzVzLuubj%2BRUATZtl6yTgobcerC4Twh2yyIVL2SuqY26t3gB0jgKO1poUcwMSa%2Bb0P4l0ezLcFVlKvIDw1hosEEMeQJHGptL60jpGYZvnjLoOHgyAog7zXFSCJ29YeTY%2B9SoFbIReSfPEtrvOkr98qUh8EgZtuskejtGy0yvyGOp%2BVcdb3GZOAoFtI%2FOLlYVFkQMP%2FKZcv2VoTH6dqK95zr92q6kDatFUISTYL3YknezKOlplhlYL85KB%2FsVFTDEGZYEKIVEiGNLAp%2BYc5Zsc8jUnawGFSdmdzM8CpC5Btpvrv0%2BvZxzNdGkIujW%2FRzDy8vq8BjqkAY5zLnKM1vRRj%2FcLWYbPAFrEiYvFnnW0Z53piw7pnzy4T%2B%2BTZehgEuufH8O%2F2K8tU0pYD2HoGFILYc2O6WEqASFI4WguWz%2B%2FqxumR5xy1eefWK5KZj9z5WDdLc01x%2BgkAt59G%2Faf1tT5bYhyrIYmIY4qguPNza0CfTwfbKYbxMqKvu1mZoZo5QOYSEFLsSw%2FTMi4eyEr9aasuOCB4puvELWD2FpE&X-Amz-Signature=5d839c2c417e966b9e693d3da040e593952739eb23a9aa9b71a3566055f00ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
