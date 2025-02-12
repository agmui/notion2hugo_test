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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=7962a9982d963850c53d32cb5fff961994158c6f5c57545e35f8058688bd8aea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=a34197e685ea5ea2da5c987a655fa05fbf54301cc0cb0148eef32f815af08038&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=7608652b61ae2016acb7b7bf81da57a9349c201955112e022dc36c9b0fbf15ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=a554992f00bd085df201cb1c12977fbe2c2bb32c3a06f6b8c1171c2d2722f99e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=1d22663c47e616217ffd16c1bb402dd1e04418662e76d806a362344d532024ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=576b89911f59bd332f0323a9e7b4a689fa2aaac3fe744773354b65f449361528&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=55d414ee28440061aac3be48e1d01733c594866466426531bca91aec28718937&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6725BR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxT6e2DZ3gridjmdzhH351E2zauZFgs1jq20RUoUv95QIhALjmX8MN99R9QcCZrRQMSXFcusTqkCjvfv6rexdqrKWdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZv1A%2BCaUE44CnxMq3AOM6ZWtrQaw94bgFZUbYOdgO4vFKHaLi6c6QeCM02KBk6%2BJf8OTP8RlXJRnGdTKX%2BYqbwI4BSGSD5q0yyiSLa76tOlGH2TMxzF2nYMY06CpaYDqmAJue%2BVIxugZnZwr1Co%2BbV83BJmzG6G%2BMvwfMaC1VPMeUL5FvZIgYiwPw7F65CU15SdRqYFd%2Btekjaq%2BxLOQ9zIEZSO1gGCVaoI6ZZ2dq%2F5rD7M%2Fdo7MEhRZ4fDduayr03fUyomDe%2FTH3GYM75faU14lb62MBT5EjneaFnbppJDRHQcb7nujAJ0CG5j6dWxLYdjgFeyl%2BfxbhF5%2BkCmuKqyJ%2FM8%2BqR46tkT5Hvvp1WGn7PDOoceukoCuB0Onz%2FNMABP9nbuigB2hN0645SaE3YA%2B0hUJ6PJG19YmHzblg4cxYhp9L4bnEa%2BkKO2lxD6TISWJOM3bfTQ9ju%2BebM7dF1Oqef8vJHtTtLvbCZFneUggmThRtWLK%2FTo4YHj4Syh6sjRgO01SAyiHVpml8WW6rmTM%2FSfwbJxjyb0G0J96eQ9YxAbOM44POGa%2BCPLA3IXYSStedkEhL%2BfHNWrTIjMdnlbvaays0pfLnKnP7tW%2BrD1A9Duk006LlORhPsbN0NvFU3SgZji8rQW7WDCijbS9BjqkAd%2FNJ0a5RBzCI%2F2gjrY6W%2FE4yNtFEK%2BfkZ%2FPFlYkan%2Bx%2BmDFXws980geu1C%2BUOK03aQHBuzM%2FgOkXVoZH7ZyhvE8W0wgcO8tg1F7utRWV%2BCFj3N1Q6fft5zYd7RzgBuiRp6YtbUGn%2B2FtGYNsPnrwuYwzi33t%2FMu8vjSz%2Fl5cRI3HwoYZhbztOx6PwJdVk7TrZiI8TIv98tXzdNLiS17dTINTicF&X-Amz-Signature=4ebc44704535c45a664aad778c57b189dbfbf3917650716c573bca551efd7acd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
