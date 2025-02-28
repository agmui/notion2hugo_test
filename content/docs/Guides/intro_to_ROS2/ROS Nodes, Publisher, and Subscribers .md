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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=bc6ebee23edda348a5844bfbe2fa5f1cb86ed4fb8f0b0c397e50268f13de6171&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=4a8e858d4f204163279b9982ed1edda93dc3c101da23821c7799ebedd512a3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=0a9fee9b0c7afdcf2747253e908c07d065c6a46b0f747cd8781568a89a052432&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=4602ac8f96f702c41f10b7f7cbb229f4ab88721e41ee84e9e655cdc7294ced55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=adaf5db85f875924162e9b21fe8e0045827171321b8383f17812a27d6ac9b8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=537e8fec92cf757503f5ffdcebff7d4a5ce959ce1d288b4140a16b3e814fef39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=3709a0e793d91915f0765e2fdb3eb0062932b179f69ea0a830b3b4590d05f46a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMHKTWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEa7dGIMmeZk2UdGmP0ikMe332cw%2FdAaQWCCnd1an8iiAiBtOT5Es%2B8%2FRW9Nm%2Brc78cNDXUYKJ%2BXYFNecqYv%2BmD73SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7bWbHK3soFm0t1tKtwDsdsYTxSH0UdMpU95gy4tn8Zk54uBIz1eFmJ3bFrK1caV5qOLAPRnRJrSHmaa6e21RUoWvbbuObJj0B5Zxaej7YWMfEBx1jmi9tQwtxjjXEkKqH9BJ%2BL%2FhVhArIHd0HhK%2Fe3tAolcFaufM15bcrTngaA11OpZelAL4B92GztsYnfwgbXSyu58LomG4s7RBcHs7X0SMSxOJmNMPVFN441NjbQgCX4XVSoTNnbY5GAhPvDje0oUE1%2BFiiZGHXy3dKAHGIGNWfOxoD3LLS8%2B1c%2FSOFa3ekX8pU2bvi6Je6zdNEbSQxGvj1GMDHwSTjPfR8AHKH90ZgoMZZxuDA5WCQNQE%2Fo5TJjkr648raEjDYcnX6xPNWPnNs6a7ctoyM9ELhN00wvAPyi8Qf%2FfU%2BwVVzz0%2FyqUb4dyWXbE1dZwA3idHXq2%2FkrXZ8WDHAxkUSaZ0U5e6DkH0tejg1E9f%2FKjDuN2KGLvNXq0Jk7%2FD78Wfdm917cUl%2FjDtvVuTcYgWaxI%2BbfjSzLjtWlSOYp3oBIaP2QjJDdI5i8DmeX%2F%2Fk%2Fx5ZiiwIgioJOXiBptXdG0djxcHaHdvYMvvoVNpf%2BUXzCttWIlkhjXaWjZWuwh%2F9C0Wovnxw6xAdCmOpvsVC3DogIwz4%2BFvgY6pgEd24VCySscLLhi4%2FkciSsbwCtfh6Kko2cxT2XHCKHE1RpPwnbrLMe6qXfMzXEk48I3BoqQRJbEvHyq3V56OUQmXY%2FDV3KEv9WtpqUCjytyXymSazM3mZgO%2FE%2BCvVPELVw%2BYp8QFbfAboAp0aCI6Rrm81yQ%2F%2FaaVhaMQwIKeKMmj4PR6%2FUg0sGU9DK30JHz0HZXad2aBL%2FdhIQB1ce9oB0cpj1sd4wO&X-Amz-Signature=7af44bc5e411e3d67643ca2d6de136dbac0d88987838b62e880f2a4b5481da01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
