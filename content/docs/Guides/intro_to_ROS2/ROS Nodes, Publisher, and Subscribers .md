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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=f8a8a6e42feebe9267eaaa759c2ee43bdbc330d4c4bb361a003f8987030d2b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=33780c9af611c650697e6422047dddaac9a775e63f2eec64c141a3850072272f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=25023ba9554e3a8829d67591075c80cfe55f543ed0047b339277c203fdd863f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=a5e12281a24bcbf5e07fdbeec3244a623b6b7d185885f272b7451ac64df083f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=80fedf5a3e85542bc672b89481f7664efafc55508f83a1f6f7b77073f42aa44e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=4dcfc70ef2782e2c61f1990586c24ed860f20bf9705e2b53dbcb47bf62e42566&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=180a7718c5bc99bd430e1ee4eec7f3ccdc8319d43a4603f3d31f10e4540d4268&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYHINDY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDTMaYrYmm34N453N3pi5i7QymcgkffaZlc%2F1x3vv1XZgIhANdQdDAAXMLcjxIgdsnxULA60Yb2neEIrr4uuEH6TiquKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFFkrIdwio9lJN50q3AOJWOCpb1gzO0sGctP4%2BwWXMdkxTVxKgpINVddhYZ0XoXHCo8aQEhaRUwvuyi171qL71MRNBI6YBsXXqvU0rViBK3c9laKgdim1e5CfVsTSyJ071DkGmG0HMpyvylfKmCfdoWR4BCkYYZ7fdn46mC0YLSbCSmEpWC2rG0yQsBHsSXLUp2WYktmeTJEiQP1o7wa7fs3Ry3GHKt6xzTn589PCzKuyF6r5SKgBEXgL7cZxOmi06cIFo6khhOH4RLlTKv5aJVAxpQ%2FHznR%2BFuIA1YH%2FiGuomWHYnGpShOnY9pgvDG00ZLzvkYfCtrqJnCbrRDOWTY3I8FmWoTGTcfwMZyQHzErRqSAATI7AXOlhUurkd7q%2BlPd545flFbFav0%2FbOAcrYNeogtAYzWLV5xCvQEKa0uP7Ir2dTRpYTbL708eFGLIY5JuRSWNGFZEfCqreU7sL64jJPa3f6Ivlhpm%2FqaTqBrvex8zokLP%2Fgsu1cHtX%2BYUHmxfJOeWeFzAxacLdO5av6zdujJVFg33pQC%2FhKUFERkzBxF8%2Fs7c9GH107WeAQ2VL%2FoJKo9G7MWMrg9xjW5KstuSM%2BI7wyXs4Amyzxeeg9n9Pg7%2FjFqQw10iep%2FNw%2FYKyhmv8PbobEicMUDDHy8rABjqkATw5F27BbGXWl09mN4N4dy1owPgBCXNaoV39F4RrviAQhjK1oL1lknswel0TZCEuwDI3MBhvCD0gJaHNTfwgab1mnZjJ6vCkxf3xfNiv29Pye45Yu4eRev7luaXtgoHb%2BM3usQ9I8feptA2aevX6IhgSop%2F7xeOimf4pzqU2Urfgk3IxCA0%2FkvB6udW9bR0vS7raRjkC3MgMBxv%2FFjqjUU4Lx4Qt&X-Amz-Signature=14a44c25ce58ba5ca431ea523fd3d66ab942749679a46079ccefb7f51605caa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
