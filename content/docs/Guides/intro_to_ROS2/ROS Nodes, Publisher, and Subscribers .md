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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=91bfb49fe28b370318a7dcf34088cab3251ab596e9f82eaa4935986fbd91a3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=af514918682d9288fa728874c59a5747f9c243bedc51ef1392707ecd8863b482&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=2c37d46214af52e84129d28cd0529e1a2b42da4f34d1058e8e5e167dab2cfb60&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=6c783c6a893432003f5650b1def4b6419efa85ea3b1d7ab4e53da06db9228fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=53c6542046c75781bdbde7580a0e70a8ad946b5028fabc8bdbcbe5d1f73c163f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=c28feebd3dd723f0ce597bffe7dff2b0360b1043cd22f227e8add1e0235c11d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=5a4fd3be1b16dafa2e0562ec7c2fba0e96e27aaff30a83b781ddc8b658af7541&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27DGNYG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWwzHynapZlJuo3E0wqSwj0hx377j020FHCfXYLdcr%2FQIhANNO1zPYlmEPGV%2F3uok5bKVoMZV%2FB5iox56h3nedgVNkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtKtUmx3gJQ0YfN%2FEq3APMhFeph2L0ufrKmaJcO%2FEiWpdPXatbQRJjwAF7AfOxxsM%2BRwjZjRw4EwYsBdC1sYDt4fll2QEsOqG9Bdy45Qh9tqjN0wnIWnPhMLd5VXQfMn24BAMJRgplWlaCflyFb2GlKILJKlDTUOw8m4E6XaVoEfeQQgq220aj%2FY7kvkpMTf3VbKlB8BSQJSZMc%2Fl2c%2BhB7WfHDEqhD0fjNoXTh9vXhue9VcW6HySn6fMJdTrKF5mMF1BqAdhmns4TDlU2nQ0GEslrZBYmJbQOY%2BiVbXD3EXuMJiLO0bAjMnZ61oLnyvnuwjqbXWbQ%2F765uRtZlGEz5OkB0k5T8LBB%2BXupUBwj0v8Ph2alRR421wbaomAad2TpHW8npdi50K7YbwKciV19sn5bjvAHTNFQAt0iC3wZRnFnvy%2FpVv%2Bt4MGIAVtHnIMfMJE%2B6w8kDAXApNTB3msOA3XeQspafoMpYQfBrtL%2FUqbAWHgjnPDcje2J7sPnLvP6v635bBTXeCsQYNo9LF0Y%2BsGTA7aunH9G3rJriuFBfD2n%2FJJCRGonJiA6g7cyvJKGXruAKoUnsk94UKp1KS%2F0zkub0Uy1EW8TkUQbZd49lwiGkCGW2x1QVTBnZ05RAV9b3VC13cMJMKhQ3TCBwMPABjqkAcJfY7pqNamA0H0%2FJv9ebkQWTLrDknEVpe1Y4bXuXp2nElDEtNZApWiNwzFvso%2F5Itc%2FMZ1fuGfQcELS9l5xKPqiLeiUTLTXl%2F%2BEL%2FVpkRVUet9TehzOx0Uoe4an60S9yNjiIjdTA4Y%2Fb3YujH9Nv%2FmH9CwHc9MUP9Xuxlh%2FtpGk68tr8ffD9AV2ODwyjsVgKAwPdItg8g6zle6FdswyXQRp3%2Bts&X-Amz-Signature=ec4cc6636316b01ca5dbab1e34c3850b9cd158fb6b1e5e4321b217c1c2464df0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
