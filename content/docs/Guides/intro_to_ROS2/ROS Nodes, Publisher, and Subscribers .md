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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=6ced6e6926b81d901c07e365f6e441d7cf5373ad659a9949c241cc437a943e37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=88fcafbb08f6036d97bbeddf450b2eb2b512bd2f715169a65985f0cefaaa662b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=2ca1769ad996b3809e6b62a1e1d3e4ba880ad5395611b6215285be36a67b8b34&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=b1c1818bc16e45be54409cf29f4b1c23f0aec23c5cecb10d9df297b414b77681&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=f5438b90ceb9a971a0801af2b779e7371c0bea80664ca94d20211ec876f853dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=fefebe647446263c5d686d5960cca48e2e944641cc1f62f4a46cb1e0a442a2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=0a9ab873ab51e79937792ec62673c5f786c5da4bb7c5ae23b2d2bac0fb6f1789&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAI3JGE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZfbsHLwh9F4%2BzRNoFo2OTHFcPbyon%2Bgcg1VyyyBKiAIgXhM64nX%2Fjca%2BlccB0uWDM84rErV%2F8VbKsWbsKDl2s%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPhiewrmzsnve%2B2WoSrcA%2FMIAY28v661PI5J9QW%2B%2BotIINLg0DnYne9SVxe%2FXk8UlGT%2Fx%2BsxyaWCjKApbMZdqZaNCfOPVqpjriF7dP7c1uWrzeBuyVohgLfrJdviYNmJFNiJTchaW%2BkrLzd2%2BYd1hYfQtn56wlcm%2BdX%2F5z%2BzWdN3MJzXIWCSGyoog5LM4mI6FIjc9%2FEJGUszJrbBH5TdWQc1XOsB14pVpd5b45oEIaVavOP%2FzcJ0NfvnbNM08S4GWOpq1GJGSLtR8%2BN8L%2FEXxkXdU9%2BBLTxNIhy6Ie9IxIkyKM4Zb1v7AnuoF3ZuWSkBjjfyo%2F0NRstCUnLY9nBvvR3pbd%2BSwUWMC2fwGtIcZHoVq%2BSNYVqQqIunQcEt8X4uHrsZKpOf839hAJHOnEY6SvVgSdIswb5nHq9dDFMKnUZz8hzWzsYYEyLkTKrheas8iu4Oqbrgwz045oCYdNc5bKfeKNiCt%2Brps3DSyDzIy8gKG1xImWVqMldZ%2FtzoOdqZVM6H24KPS3qQ8O1LXm%2BQQZEpO4Zv9UbHyLERYmxqtsYsypTdY%2BjcNhMwBCg5b13TvMO9NgP7cDqZ03Fy8VkD4Ym%2Bh4XVjGyc0mY1EEO9vrf3xCYelk11ixexa5CFRe1iawpuJoMQeuqMpSarMOj%2FyL8GOqUBNDzmS%2BOxTERHb8Y1hIafNg8AJcxbu9CZWkV1bpXzR%2BbVcthBm9HjYCqZq69L%2F%2BLt69FMGWfR%2BbBFMOfPl6k4hyO8jNrDLPM%2FdCHFd9BAwBpvnGvvTQUPAWZ4bhALzZPF95OuB%2FTaFfANOf3AKuYmwn7laajnuPGnu1q3X4n2Hzt2y%2B2iWTaw%2BfPofTUuiRjuyNZjCG9rEN03utW0f2ec1HZ2ih6y&X-Amz-Signature=b02c7c1af7197816cb182bac9e1602baea48e0f4560098c046df12ed6089d9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
