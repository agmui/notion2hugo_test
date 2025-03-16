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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=e52c69c92a04d10b3748d142e34f5a13f23e4ca26c24c044bb794041bfc79eff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=c670135d7e67b56c667979589e92278d3930e9c0795ea9e198590781be97d988&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=7504ddbe7d5ef6d0da10508d606111521a72f01e461a41cbbeac4329ea0ad500&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=31f506d4bcca75effbbcefc32a3372a8fb94c06d75976f0aeaefd0a01d77cdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=bcc88df15189817d4751e93f45d24b0c9ce620ff49e12009e340703dba3e352c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=5f39713d9854f7dcabec102c7f8b811681e1b05cfa6556da5b7d3de06bebb0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=d77b988298b72d40eed25987cb46a9609af34736a224f502459e67e323b2fb08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E2I3Q3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn09bmTQna%2BhEOA1F5nRBkn5MEUZjJjSYHAt8une26vQIgb%2BcZS1JcBL8CmdTkH0qVf0Bhp1r4tPl%2FtwNG3EDviBwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMjm%2FQRKQWR1KK68circA4AYtQhDz2HmDmB%2B77FuNwHIxtU7bxzfiII2loYb5KmeYYQSFhcEGkA9OIfc%2Fj2QPSy%2Be6KqW0NExTD3vBfpwju%2B0D3iyR%2B17Pbh2ZkOvpyPo3%2Fh%2Bco00mEvYehFp8yPCP55QJbMiQoHfNKv3A19qJ66nyZ8h%2FIYGmCZ%2B5zIFKUqN1u%2FG0f95GoVjSCWLi81Sm%2BD0WwZw7jUQ6YJltCzQrnjWOq%2BWHRuoFAjXBzW0Wf4XXOKG3MYoV9iS7ORxbpiZKvyJt7cWl40fcKEQGJlHP0lKznFTIIe0lLD4jiD4q0qjH7plPsYcewylKlUdI4DZxDmMYYM%2B3DlOU3OzIAhtYGJic7djd7pb8g%2BStxKpaQzB99KvVBF%2FOdJ6BmeAZnfAeSTRFZaAurwXiFvBmR1v4pZQ7qLEYfarDCiix64K66zQBQlUFqGq8wjGEFLgqivHDk2DewYoZov1mgoP5S%2B5fkBQUFurbGa5ggYAmDEZKPvqkcoJO57A%2BKp%2FrC3WDEbwut7R822R0g0ej0ma0w7p4ugFTvIcNqj9WbWfyK3ZHW1nwLZpPurnMNPwkE0TYIxyAvw4E%2Fx4KVFyDEZEWfHwR7ppeTqV5TXgcrxcC%2BjiKvPNn86EnucswViWogYMJf%2B3L4GOqUBpWNGWqtlkh4DKJ77Lkl3tG83rpiqMrkjC86ahoN%2Fggasl5e0Iw1yk1oX2y3kDA4uHkP9lRQgYc9ArwDfPGnKirI5v28tHOXPJ9OvdSoBjXSBMPSxNEHP01Mnv0S7qOpEtidbDPrdC1Pc9dC6tBqfA%2FOTGiKT4DeMvqmjXOF4pmWEPKiRNOWcnLkKSZt3K3%2FpjmL0ib2TGVnyNeGr4PMitPJAPbdF&X-Amz-Signature=9bfbe73867704b72f86763337809ecbd52df61572fc56c0afbd4bace86bda8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
