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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=85752a60b3b285d01fcbb0479cd0bc8b43c4fa6ebddf42e5a485d723f690d1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=a4d62160f973a7399e7f34de14c1ca0cdc5bb3f648b6209818330d86d8944ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=7e77a32ce3e624861dcf4eaa4850890022d0d6fc19992e13972b8e17c5f5e5bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=abb007d35dbf0ca306cfc24e77b233ea6e8b545ed3d74619fd9d10e6e1c702aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=c64f7eb1a86cf386b19eba3a39a1e6c1eb37e3d2a8599230314a044e3da3c154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=7d5fbf68c69b29651800b19d32f562750c28f21cfd6372870d5b3ecad85c6703&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=59d6297c15400097a10e6b1d1830fc718482542b7933ca422069192b04b0dea1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRJZAUJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcH7DGagR6fAtZtFmeCwEOaHELIOPmFHAeEeL2CWFAGAiBa%2FnqGAgAD7qTeq61Z%2FBHduYCKb7AQ27F%2BlvWKbmsmvSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2EZk%2FYiWh%2FVEzBEKtwDw96NanRisjmnzab9zLczshufmDZ%2BuIHtjFcP6V%2Fbct9By%2Fx8kTXg0gOwR1dT2fJA5PI%2BR2O1wqsyKSpVHRorVF0ZDAZqG4OcJspdJNjhz0kA1mSBdryH2uoOaoI72artydPIwD7zUv3oN6aBB8jN2D64mWde1HdJCUurGQqg0qDgUZJ1ea2R%2Bapyj0pyPY7WX0XqFtmaihRs%2Bk5ZSs7FGqBeYV18KbIkzRGlHfhVF2gjlpyWkiVin1QjNcoq6OC52Ec8CyyEoqhse7O8xGQnJ6CWpED5TRZXL3ZxYEHdQbhrLqf0bUqNTDqEqhA0AHj6VRCVggl8uISu1lu%2F%2BSyu5cLhH4MO9px1j9jZsHSm%2BLrCJzZbR561C0wfD8e8sQs4WscokazPFgXCskkCk%2BrKpxT5gyCAjzIP00iyUpqTkcvqHuzzRv0Kk7PzgxpjyIh3W29w%2BCuWjYGSnTpntwmQvAS4mr%2F1wG4Hjv52fJX1BKO6HLq7BKi%2BO6tNv3yr6mWcNELOI7aWtdKIshqbyfS9HcUKgDg2QBb5Z2ab5IW2Uh0UNSk4gJcu0afgzB%2BsLccBE0mgv%2FUGN%2FsTXunxHz5E%2FdD6MLJT%2FXBZIknxDRkVr7AAtYbhfJ6JWGnSZRsw2Zy7vwY6pgHzQBgTe3aUe7VDCjBYAY7q7yCHzBMuRZvGzOAZa0UImKCE2cYLxDH%2BVMsWk66riL%2Bc62JOVAuG1PzN0P41GGB%2FD1oWTV24B5oOyZpoEpl2eQSzoqh4gwEV6IccYwb9XkP4twocUBvBWIoMPIQ7grIRm%2F8Hdb0zFQ9a8udl3HrSyFtIpkQENuOUPSRsnyMUwMn%2BwbzkM4YhsshyDWUvB%2BMcFxR%2FzXKU&X-Amz-Signature=b421503e184ab38b4669c195baac82fabe1d1dff4ae65fc4f2515ea0c94b4fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
