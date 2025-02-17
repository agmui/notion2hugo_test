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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=ec29b158e5a238db8cee8e0d3146b3f7c37a5a11a51e9b02d741ec6438326a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=45684e28c4b198846f68607287bce055d6bf8b6c262d82ffec4d0fe69ca8d092&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=e79e442e58e2780c67a252c05f363a50f0921346737270ef88ee796f6aa9ee60&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=0960fe88fcdc549c3f3c3d996df5b4fe709538776b4e1ab56d8c03e265a49f48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=9c1d42d3a72481878ae735dadb9af179395d95eb827d46c2fd413f6807b84679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=d6effa27dd2bc9d09157a3a80900d9e15ce47ba4f42afaf202cfd6c757b0326d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=383a6aaf593424ad9fd5bb2af24160b9eb8405b32c6acf87b501bb4bbcfaa62e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFKT6GJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCxzhAWb4KWqTtK5WGAPQ7j0RsUEFQXF3iRqaHbQvx6nwIhAI1QwPrfaVJSA4ON%2BgSlEak4mBH%2FZb2%2BnLPbz4%2F59wHVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxXftH5JZZ%2BXKinG1sq3AOmL%2Bp4szhad8%2BqcKYF4lu7D9hHhnt8sxh6DWSFw1BxDmUiG0hmJqEcfx8JSiS4o9ggEM1o2XPaCoXYNg49qmv1auJ%2FdrgpZ5dbL4N%2B3jG4%2BzraJ9M3YAGwtPa7egDZ532HPLXUynak2FWi1Z2yVDpv1yk5SpBzpqhngjKjGuGK7dJoWr9Z5xwmVb53XDv59d7BOfR0LH%2ByjNapRGAqraBNu4L8P6VXEAOMQnYHRFmSQpis8KM62pXDNzW4BIgZV2UEUzHNAUlTbrW5fAmg5hpTlq5l13HI8LiuGszTnzMXz74TtnGjaUvlLGkn0T0k%2BSHy1pB%2FjtLpqAw4VLY6%2FXkKEr4%2Fk2ZJEYOSEMYksr0QT%2FpNFXp0NRrMfGMh9HDuXZ%2B%2BMByl2ArkCecbaOjauf0MhGC6TDWaqzrgeo%2FC2z9CDJLBI%2FRfKKFzHu6gz3B6bZGLLgyVNCRkU9WYzTyBi%2F9Sm64q7Y0EKQ3BIQvc3NyvF4sqVs%2F6TZTKYr6mqSd%2Be3KDicIweAiHi9IpZFFdZVynYMvAhL9lrPu4Eh9kqfmZQuqVJY5TwqQYEXzIYwchWdPC6u0Og2t9yuMOlyaGrrYNtXX7kwnutlKVdqwFS2ipGRiDKjmat7slGZZk1jCb3My9BjqkAf1dtQ0d9bQQZIaACfEIOM0%2BM06cdm7b7skmY%2FaQy4AhcJ1pG4XqQVpROU9NkX4Vk8W1QZa4XDvT%2BXSm%2FeWlmaVX%2Fwr%2BYofYbQq702L6uKzUJpqNvmwtCeNJVzWk8vTuZrRA%2B5J2E5VW4h3LuaKYHTJP5MueaMy1ErwSUne6QmCRAu0FL43FYwRzvWtrylP9Wb97YnHB4tDmkxP1MUM9ptRo2nOi&X-Amz-Signature=ca61bbc3acc7f5a364d953121249fe6609b9dd4a549378a198ee7645a8431534&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
