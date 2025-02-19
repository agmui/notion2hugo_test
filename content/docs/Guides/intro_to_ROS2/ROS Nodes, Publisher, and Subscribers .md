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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=7e3ff975c172d98e83663bced503d5cef6d833a7fb627c64f25f292d9852e56d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=120c910a54e674b8610bddf82706b97e1c5d4a0444e718c3670d14f684ab82ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=6aa865a13ff3cbb3142f125a87699ecc4165920b9652ed43ac06da28ff1165f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=f9c88c40a320517365ae6323e79c4b96e55ece499fac85b6c0a2b6acbaf747ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=e42a9e759e1d9cb6a3c5f03aec36f90ddf9f65ba317232bbfcdc96dc70da7f37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=555569dfbbc2dc9dedd223a0a9ac6eb0fc5c2042b630f096948471f0b0beacb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=4e6161d7b23122f35d6afed66f620e33aa2c0fcdc6be803b2978325e4129c2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG2DRYH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmUIy8rw7qvrMLsXiCSv1yvZ7xlNEzULJdURZM0dGeVQIgTYY7kyNejLwoIRwcPPi6Fk3PEVYNzw1peTzPfW4YCUQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIAm1VwG5aKMgcTRSrcA%2B6LhA2HIa3HXelLz6QpfSu%2FnZe5EzABdYvpObSbhHNlqi7Sma6IoOkARDy%2FdXI9xDUgqgSmMyyzSjj01hlCDfGHQb1MbfjuPt0ovLrxwvcu0XLnvwz09WP4h64TIzPC9SSLQ3dNb7HTiQXUYUAoyonp472QgirgDjfy6XRVCuTA9oOpgW7Qg%2F1W4UsjzRMw4AB9r0jBmPXg3oatUGkU3OWP1TAm1gdZwASIsPyrvLD2J4HLPSiqR5s%2FwtQCQz2fs5sQTkKQiqv51hptsQvon%2FOrKiGFTCj3YXbc6b3Ci2lgpAN9rDXLjzFkNYzQAS16de6zUP4Zz3cyAZLvC0gm%2F8zDnD9yp6daGmrFwQtRG74CaqGFCnGqaf12azuHosAhGZz9pKQjF8h0SHHd5w8adZBSIVTlZfEMj49mSgWzTc69sLrtYzKIV9fIiUSVOsenwzejI6fsvgVRd2iiEU9lRDJTPRrRWhrDuaRWG5LqfrMek8auj5Nool%2FtlbzH8ky2APSwNyqtrR4MH2b9DdJSSzkOfyfXn2B6SGvqKZV4ogq%2BL11D6QhYGBTPjATTymBhrAKKXspY44QWQ9RdXAoVjKelZ1CdYPPRJ7%2BcgXE8NjNUG%2FshWma2%2F%2BhhQwCRMJCG1b0GOqUBSJQ5xCk7PPDM4CJa0g4nXGoHw1i1sd0ZooVX5WPEVgCHfY6OhtEZlNrcis8zzdut9SusuO1pLoB4JICl7oln7r1wygV6ISvvTbkVaWaPNz%2Fy%2FHnEbgZclVM5BAYmI0zYze0Gg9hEDp4VpqK49UhLwhApTBftr2%2FacdoizV7m24VaqgmNRi2833PpmhLAyyYzqdpLv6CT8g6rdTE%2B6zdd0aWWGu6B&X-Amz-Signature=c86004903186b7f24431b6a78f7015315839a315dd2ed0f3a12fb083cf5b07ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
