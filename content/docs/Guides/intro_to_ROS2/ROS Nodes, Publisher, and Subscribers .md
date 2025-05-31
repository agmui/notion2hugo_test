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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=5b5bf5234ef3da7e514c141dbd8078d9b7e3811c5cfdadf51ad1cc1efb0bbc8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=244ffa65074f796af6fbe7137472f2fd907757830ec14242cf13ad66c4330962&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=cdae653559ae9287bc91e6ea797abe95f9f12b391d3d3889660a33713451320c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=48f00b3233b946270dabbd0dd2c0834f27e5ff3342f6734295500955f1effa07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=c1cc053bd0735aca5ebc6f66f62ae4bf486eab7643e9428ff10b2c0fecc8962d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=c2916235d716bb288808bac48808ef1659a4dba4fb0f894254b5b179b7385339&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=53ffaee9fb7de816fedea1302ff590bc0027dce3c981890d657f8478d0f17a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBQQYZO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADgf694zxpnNvb0ec9VQqf2ba3gETWHxOVmZpaGXmeIAiBnYgb5SQe70v9tGv9PaeTMJfvQ41uLQOYQZz7iWDawySqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3HsYv7zKzXNIqCLKtwDD%2B5waUxkCA0Dx4JLBYWczKGEaldw8axO4qjGB%2FJ0BrWCaQsD8VbRxpDzCFkoatPo%2FT58QjuuASzSVteYCTcGgnUJbEqobSbtMFleceC04tab0bptoLRLV%2FsZJm3mglWZ2nxe125uGWAryhFMQhIhbqr9Pm%2B8%2B8cK9GA%2BLczxgTAUg5LIM1IF4QT9Zd%2BuMIP8cliP08FtLStq7S9C6aEg051pqJQ%2FkOBmoYmaKavTfjLKcu2pFa%2Bd8yIKCIZo5QTtBkdxNRDNovWdEnUUL1oZggT0m03rO7oZv6H4I06dNgXokZnql6rSbZ%2BKHAkkuVmRXA%2FFKvrwNpCHDB6WPUuUaR53xryFSR%2F7uQOVkTCek%2F7DXDstaF4YFg1JxwvwusnQLJHvSYXwGAIQfQk9P1o41uNLgPMDpEJgIOs1wVNPAE%2B0jHfSb5wC%2BU%2FDnu5p86SxN18vpHxryIkT5IZwojKQlFU787g9Msm33RsUXq9nFY%2B0Vq4kRic9rxKtnqDE%2FFqsYyKOM66rFU1JMPmeVQONveMBmjwhyemOYGGSKMvIkLZDul40cbE6azCYB9%2BOCJjNbvU5GJlY5IhXjpF17nKjDKmAbqE9EIqFLWWap2tEMpk70BWvN75OAJbZzeIwzpbtwQY6pgG7Tp%2F%2FhpklW%2BHKI77fpxR%2FYuOt1CziIrs%2FJt1jORBbuZK6UE%2B%2Bp8ohyurDPRpR4Lc5aGJclRVJ4pzs6KKpKsVnCyMVgjn6bHUM57Mx8DmP73MuRb6hAfnXuP%2Bb2r%2BhEAWI%2FuCqzkskS%2Bp86tsJI7%2BWc28Er%2Fykk2oXDaO5sJMgjAGXR4STiuPM8puHji7KRj%2Fmrm%2FMUiZ6hJNhPDnQ7a9DKKii9w4S&X-Amz-Signature=efee30e6823bfb2a61f967e5724b6b7a40570bfa1654cbc387711390161a3918&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
