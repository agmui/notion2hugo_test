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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=98eac7a06a7bc72f4e435fdf230fd7a5bacaef6030cf835327af4fe73eec0a56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=c300fc083090222f1c3ec0205eb3177d3486a995bf2f0bcca95d7dfe8c15606b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=1f4c1b8664c3a070878b73e88734ba1648b7ddd9ee3da643a810cfc098a69173&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=a2c459f034340fc48dc0589b236e0c3fdce94a42cdccd2c2df4d8451f8ab3ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=accf3524699bee15e04f2ca1df6ccd60d5e8ab46cf8f0179051bc80aace43a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=91798fcb015b85391be86801364358213616101965025683095d51686126ab0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=b585764771b7441cae7310e1a56090e4bd1a99d773e78595f496ea7e1e6d94aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N2BCOW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjvkd8nCzj6s656lx45XW8KqyNVRKJOJ1gJhLyF2FF0AiEAmM11A5FapSBzNUeW6dhJpUCWJC9qa%2FqKvdD4%2FbFheoQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBicXIsv6OjT%2FqrlcyrcA13EFOAjaMlslP6xpL7mM8xEO%2F0nsrMg0t%2FN%2FiTZD5xDaBTs6OEXdxSTCMg0Nt6GrfJMxA7IN%2F6BXda3R%2Faz5CJSLJKEb0FuXUbfmyD0Dmh4VcLhHZfDKwy53Ulsm%2FZfPNtjmHB2tea2c4Szh49xXEJylEbO3Iru7dCxxP3bdtRS3vmqLEESrnzpcMxZeXx45ElEqeS%2FcmzSgnLUueEZVOlSslWDxxtl4FwV8LYz7EgVIvBtMT3eo7%2FTJmldH6kWFcbHtmkJwiwbzz2%2FtK3yvNxa2qiCtJa8RXzsB1TE8eCQckWWU9b0OVQ5pSTIznl8ssbsr4iGfKUs%2FC8%2BIJDxn6tHSXDA87GcmfvZUK834oAwbisgIdeqZOW2we6VwxkzxJIIoEnPg06mSDA9zKbTqavbuu1xkhdx5vpFtfTp7g6jL3pzJdQ5qWeDv7FyutCjmJIloJTnuIXGdLE%2BpCJtNATi9paTTK4p2FYB2BFE8H0U1LM8LRqmQSwhPfrY7WKq5omvCeq8%2BfY6d6uW0ii8mkqlZifjJQZdzMgbGVmx%2B6R3HhQmwXrm%2BggLY10auuiBCvyyOTfPNgG2I6XTpWlY5dM8q%2FPr7ko01HhBVQ2d9mDnxf%2BS5a%2BuQqLVVYmoMOP4qsEGOqUB3gfWxb7pIOB6XBh0xyggaE5c75qvxsGsuYJM9OFvsfKAkvRiwbZiD%2BhgbT00KK4Lt71s8gKxFBjDz3gs3Nk509PV9aQmvY3QTSC6z218iieKi3ouQuZTC9fg72J1VuW1dnlqYt2zYljn39vT4tl6aPJb02BkN2AM4Rj3kigyZ5gSdwHOBGceQs7L%2BuzwmdXUNEz6lDrrjFavHQ%2BIrXNzyMEdYDbd&X-Amz-Signature=00d1780357ed411092ddbc2f80ab20d3780e9642ac354ff782d0eb563fad75dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
