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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=767503a0b32be4bcc0ae0645e08c987a89129e3f041f5d34f3898a8da254a6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=1315783c30a5c2caf324a643673604ccb72a40a9ada7275177a8308fc732dc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=62e06449fed3d102586838a5fbb45476850158d6e3c9ae26f07fad6b8e2a1c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=bec370820c1df88e693c6f8a7257b171a4c35a31fcb37abcf2c7dc7d11070a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=df5d3f6ffa95ad42c57eeb438a3c0e600e37a9646a0abc4e0a3735ef913cb984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=e28334ccd623801920355cd043c1380a9de10a67e9fcc52212894664b686844e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=46710467e7e43ebd122a81c5d7fa09b76d254e95b0b34e08bf3e36dde69e4892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBKVNM6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNL5IFCz0LXO9OX15b9gAhh0p6ibGggiqHYvvnfg2%2BRAiANsyjPcQ8XvSquHBaU7XtgE0vrv8fmWabBuGxbUHYfqyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgF%2BPszAnF4jWyDyEKtwDKKQOd9oPPh%2FOyYzUOxPGyp3oh3CiUQsDMp1DXPC%2Bg5WiOzcRtzHRXj6HyIZ5QTtwgx8jj0xnL4NfOaDQ6%2BYrqkL7oQgKU42cj%2FcQ6AZJXWxmN%2F5%2BI0j%2F8yEuk%2Flka3SV6nvGjoHQirF11eA1fUP2gJY9cHM0l4A1R3c57z7AOdWYM5VUgWskieORLleGVBCby%2FgZ6rrYMULXpRrcowlqw8CiwBCAeKiYwwfNd8AjLIgPPSgoGpgxOnxUZOaFgyOBE%2FL0Jb%2FuQSXjYyn0BoM0yGxQKkeDOZBge8dnmckM7ZlSh5b4ODidTU%2FUiYSVNbn%2BFf3UL5L2Y2%2BcFMi5dB6HrM6yPZo%2F65Vklh3i3Fca0OEDi7gwJKLO37%2FfjtPLODTegIevzSLf38COxEVb3eP0WweTphzZpSmj0fvMyTMdYuzu5XFUIiGTm5yeG1A62wmSEb%2FgfQ2T9bmFsolonmKq4k7FKb3%2BH3WHyOS0uHbmmcP0zgca78GOIks%2FdpmKopaWOj8Z14egweQtuiJItUIiCIdfmamv%2BHAyzr4cnjvBjlJ%2FlR3P1NYSrskEYZ9VURKpWjTi1JZv0r81rI6DETt5%2FqBYA1lu4dJAZqADibM%2BQJUGaMOP%2B%2Fxrc7J3lqowwLLfxAY6pgFtrqexJGfifJ2HasUpGgso1iqj0JLwE%2Fp%2F1P2Gl80e1CrJLOByWZ6XJ6XNKSHd%2BaOV6z47VxuKctu%2Fjm4uoApIKxvILXk7u4FPunZKOvONJf5eFyBaqmriI%2F8HizM%2BdzwoVRAYaqMtNQQEq6rTicsrW7u%2FrK0UgptN4WlYqOmSP51%2BaAL1cMHq7VrQ4tc5S7Uj9rN2GXaR2g%2B1R11u2aQlqM8DGX%2Fu&X-Amz-Signature=e222d0f42f89ea63994bf91a4a3960f39d5ced052e4f0cf23cfab6b39079d663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
