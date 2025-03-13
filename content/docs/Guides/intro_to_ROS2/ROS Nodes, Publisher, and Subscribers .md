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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=84b4473566736366c90571b12cd83883d8cb240a3a5af857e1dedf2bd4343fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=8e8e19836f3da67b14d46a581772703c533534cd8655dcfc470f5af1d6e2e3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=3ca1d9efe0936cfdc2500f9af875f0dfdcbef3ff1c1bd7b3a0526533b27c1e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=422d7778e4386dfccc19b083689953421779a7f41a62d958686c43693bb21e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=cbf7a273c488c6e7e83b320db68bf9a18146d13606b2e2b056b96fbf6b1ac3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=450c5f9b5fa81c8288999ed875b66355717271625c98e988486fb7f27a16334b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=c9b36b442aef3302785661018a8cccf09e7f6794abd18c93e84734c123c0cafa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWUQLN5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECTk%2FSE1thTyqD4w1xp%2BCN%2BNarDrh6096LHOcu%2F%2BfsZAiBxxRruyrawj2pa9bnTL6%2BEVKLp9OzWaRoneyZRcX0qQCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3IvOUlYs1QbVgYhKtwDTAHodeeJ5YVSxK0TgQxZm2liZjL0JHQWy9y%2B9IIoPxjEufAW5Xq2sw%2F8runIhvj81uyoGRHsrK8M8oC0CL18VDav04fY1%2B4gnVAM%2FuXLw9klC8wV3zssXC8X3BJ9oJ1nw4GXwySA6I6wb0rYlkOAyec3gazZXwQ%2FKvgSvRXOCjoCCDaO0vMKj8f1G4kvafLKJmlHlfh17P4mkDcgBuHomJ2EMGZvU%2F33Z2pns0R%2B94Xu%2BTrq8%2FmlZNXG37e5d0ccnXYc%2FUYRIcXx4E9xcNITgz%2FKOCvf1kSl05WrJ9tBvPVkGcv8NhrvVQHu4yyInUpphoGzZUa0%2BOsUpAhycZhg9xQx3zjl1ObM0FipkdAOjBeTkZHdmWAjG9wqORHGoM9RFCFqXkMjgTZ%2FqYUlRAaYZ5r7MW0dvssQb29mQjUyntYIikb7WcJTwigo8sRYBue87FcjDTW9ixbgXN1vmnSBMw5ieQ%2Br295drcdF%2FJ4yyk%2B58OsonhKY6AT67DB6uFdaIWmdWT19kR3lT80dKKMyQK0oElSQlvYF7VtV3l9gcBD8zCt7XARmFHKo4htec2NZ5GoJ9KeDInp4C7FUshAdi5QfmXiJiwpyPOxUIRYLBG%2FAmUAF8Owg7O3bofEwyeXJvgY6pgEywXJ4qUi%2B9gtVR7OGS5t7vavDzA8Zu4%2BWL4JhDOTz4XryB8yoNwtqalJ4YhbEDl0LTh94mQuEXllXnGYc8XwPuO%2F18L3%2FYR2CuTgqN%2FqI1qqyGNlAbYDWJZBrQve1AxLex4aALdPiq6QjlSwz8sLyF%2F99KmbHcmGkaoffz9pitN9%2BcmnvgsMKXSDbxaMAkTMAEZOcA2D2XTZ4qeNpHKd%2Fl4iOPuGx&X-Amz-Signature=8b3c6128da8ab2121016c4c53a51966d9f0a835dfc995d7d558b91cffd7b085c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
