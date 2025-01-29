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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=4d1f4e2a459210e95c87532eb89209cd5db5410374b91cabd7d2e8690af970ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=2df5e60bb673c5a0bb0a714682800519afe6376a94edf3c5b31c560f1913120d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=c6eadbf0b8361e1149d526aedaea8dc7f027775e2fad6b87e697000193c059b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=dd5eb69a32f05b365da0452bccfed691060c1d1dfb842a34fcf5b8b8df41db8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=ed0ab670e35097aeec92758c75874dcbeb7c9440ac336dfc98f0062df26b7507&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=461b7de0596a69df3ecfbb1f9c89d80d75d060cedf908c4d1cde11a7933ec6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=7418857d805ebc95b7d7b3a601299cd2e4f411341d6dab13bc74a112534be3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILDEX62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGVXfuEv6rlLhT2brKTBY83zSsmNisV4JFhlcjahWtDAiAycW4TYLq0nzTSleP5SA0rSJTHEalLv%2BjxZ5xBa%2BRDuCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUwfXBxp%2FKfSbrFizKtwDV7LIbIHzSQOZt7moGdSNnpyXCmcvFiGdt8Fe32B0LGVIOK8eDnLNJHrE1RXzULcgA3klv2Ql%2FGRCvX4ZrxLN6K6TLvDO1n1lyOk3wnFhTRYSp%2BNCKwwuIgt%2FEMKa1Kk8ciGpwfZKleMmd62jJCpCMmGnVDyTRiQK8f6LbwE%2BXByoGySSenavOCi5ixUFdSUmNY1522dGV7Xtagb%2F8lsiJaNUnTzzrumdfLtjOOCjqhLVJVNH4QZXzGNwDgAa3HhsRFRAwRzSBSubFQbst8Mf7hQoSHEJ40xjhE1d6aMBHTOh8xvRxHswgSrZT1B9SMBxMr%2FpiAW70qZm1iLLyiiw%2BBnsj2Kuf7CDhETTjx44u6%2BzlHKXBxjgDpf%2BRiZmm77kn0qab2UNQXKOBPaCBPk7uXhfEnTLr6MhUDwyIcWbso16bZs%2F7iqT9YmZmfLT6M1tLc52X8Qk5ioofWqVUujyWUQkjpH5rI2Zempc9SRXgqXZPSLxXLvQ8RCROodveOoOD%2F0Dsi%2F5i9ZzbEBAoUTpZMkEs%2B0eA%2FqrhLX0PeTrS4TbR%2BaxTfipV%2BxKTjgIyUUgY2JqpJbiIH14TYqTIWEMmGrpjwhJIXsSe7VKniy2xXsniuyw2BInzUBRBnMwvcXqvAY6pgGDGEY14K6Nsa7OaNyXOtMNbYQOzuP2NsSt6a1tti0q6lP9MwKLYMZRpYF%2FiPGOJ%2B06uxxwN7SOREr2UEU94tqvI7OKUEXUgb4QL0G36kHpXEHnhRErcLbYktuAPJZ%2FDwnhRxSydNLHnt0fHGTeb1PgIs4ovK6mAdW68dox5SYdqrhv8Wn8toA4T08ySb0fDfZIxayRkMbQJSDSrgcjo4tGmCFB2BRV&X-Amz-Signature=ef433e5e16b6200e8c60ac8a6b6e79aaa05df1c1fd8ba1dac55440306eb9325a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
