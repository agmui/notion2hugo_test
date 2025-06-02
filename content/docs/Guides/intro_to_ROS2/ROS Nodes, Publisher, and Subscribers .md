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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=da2dd53dc3ad89812f651ce878a12104b0eeaa8cf4030037096c964101040e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=135303254f9207da09f92b8e7a2b9f731735af6e7da8a7944d37b26e20ad22b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=765d4ca153c39a6ad4e01f98f21725ae95cdc4ed2c86cd4d198a252ba38ab65e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=43febed8e876f25fb0d5557e14a058fb89bf166883ee0722673aa7e6858b360b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=ff057307c33a6c5df2bedece095042f95cb13f42da7f92bc574567b93173bd13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=df295a205f030743c598ab1a497b0f23b06315a72c097bd8a4fc3782ba1a395e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=cb03b32e2223c572648f487c48f954c5bf54d7e23c5591b5d9d1cd312a4fd883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475TTGK3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUwEYscr6WACHXj6%2FFgg3iOj2j7fCg3qBq0y7pWsCOkAiBTV0sOnPztY5jyxijdBtXQoEMcTLDGNHktTg6ghFSS2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOynbMD2UvIstOOwKtwDBQib8kl7Id6yIjsaIhTeOg3835y4mY2dS%2FG22sODYdXBCQphEhXRwRQu2zDVW55qGTzziSBGU%2Fk1fw%2B8z%2FtotETnGeAnfYTU9dfp5ymGvv3KDfLQmLt6r3zN50l2kvdvWpZ5TMpq0XZ1%2BnMFUwoq8xT0L2BYWnVpRI5Mp%2F%2Foz8o%2Bqox7JxBSfJHI0c2HSpRsGr5eYRg2%2B0bIZuoB8lSeSQLj%2BI9ddqZqIuIUTVMnwqCyp37%2BN5v29F0WBWvVv8Uh2Ydf9v9icJELHarPw7it6t%2Bligi1b7bRSQwUlo30UQ7p3ymZyuf2Rw9NIGPjV0wAi7CBxZK6x%2BuH2pnEmsappuffCZGQ%2FZShwS5DvO9nSIzbrcskjMMhf1QcB94Aj5cEopOSe2f3uqp%2B%2BeyGe1XpDcmRvlEmLe6GOiUOJ9qc5gDsIgj%2Fh7ljfT%2FkGpGuqiZDIwRkipLrIVqynff%2B0ySXykR%2BnFiYyV94xfHYLBguiKrJTlezL6aDFh%2F4x6MllUCIkMyhhYcyhsvJXVQdt%2BbHmbgqrrblQE1RF7h%2F3nlrO2TOYLCEmkKL%2By66HawQsnXDPHlpM3wLGdf5KrNVznPCDFufTN6G%2FrcLPHP%2Fxw%2F1edEELA29suKycKjedq0wvs%2FzwQY6pgGA05ZJBr7LexCtYJ2uCC3zinxztj7Zz780QBgHEvv1m%2BLSvyDt9wZ6MU7SpC7kw7N7sggjfCEj14%2BwMyRlvwFw6bmDtMMFMwTpSKnjlH6yU51xz7x3JtOkK3F3uxwcoRLOfApeFUus%2FSAEmryUm1LzK9v5ectIrwZunF8H%2Fekv9l9fIw4JiViWxY3HGs889EcdY%2FfcPhxu7ZNiIlbWywCWvBL34iWL&X-Amz-Signature=6ed8a4c844a556debce14c956d9197545e7b5bfff001a846d1e354eaab71fec6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
