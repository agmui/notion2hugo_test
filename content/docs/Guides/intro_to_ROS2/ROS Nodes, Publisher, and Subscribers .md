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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=12523d47f8b5edf1be9454450051f65e3c3abb305cead7902590d0a7a1814da9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=3bfe9551edfdbaba9a67e62da53c12bcb9ffe6501f6e9bd6e480e9dc187a5937&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=1af3a48ee858d401d269a59d6d8c996cecca32eeb1eb828cb585ef0c2e2682e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=95398c021895d59cb16b5dbec36f9646c30689fe44085b19fc01579bf0c357ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=5a17d1c52b5fbbf252f1544435717ff3264e841f6f4703da6986b5d35a7dba6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=7243d09ef1da8fd321ae097f0a3894a0cb59dc98c67b17ee37e03dea5d6dd995&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=828ff1db498598082c8bfb84883a9206496e1cadab7cda74e71826d9042e7367&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3F7LKX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG7nkICIYww9mqPZy3Em4XnPvIwJ501DgVqn4nI9WzuAiEA3EZXUB%2Fsig0LpA%2FE%2BTeH%2BUl8C9JZw54%2BINKVBwIuDnIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDylAE4x490PXg06ZyrcAwEQfYHtjBiK17qLQaZ5BygSivahia8pVj6jB%2BDSsSbpUnf0T19UDrbLqdZLDykOr0wdySC6NzkS0WdWp6rmi5ffWISWJfJ4mYnDqdbvjqUuTWwHd%2B3yPHzLhvaVUJas11FvulHgF5JdShAmDyEaGa%2FpOvC0SHRh7Yr0Xgvs4P1QQI2jKSCMMnB%2F7fWzDi0sbwX4HPD4ialvmq1LFzjCiBe3ZcYb8OWluID4xRgn6zvO4cNhI2ieh3u6cJfZMTFCDUvb%2BlAFkvOg%2BuxYBYoMGck%2FGtgJ7mXFPNcPIGH44hxkM3ypAWePNc83tvzaNtFpMcKbZGkAP84UuldYE1nIZ3TkA3mlX%2FyKzoi6Vm37qK2CBX58GlbICQkVzbwOZ9bNXjEfnPBMPGWQjlk1T3dk0Sc5oFOY3jFBvlItLkR9eIEGuMs3Bo%2BXEyjAppBpfpX59exEVwTtkX%2B61pPdccEJx3%2F8SI9FWjegRqkf%2Bs%2BKGE0BZvGKj2DkXk1%2B1vTQ3QKjJ%2B9Roy0zROsuLG4m%2FeKKaub7mNzIp1DkD8B9LSE%2BNXyjVNkI2211rBd%2FNReFVhf%2BwPBuJgqg3%2B2kRqK8%2BCEDHAsI%2BWMeiUPE%2FArWiBv%2FshSZaBGi9xj8CxF%2BlcJQMMuMuMAGOqUBSwVpfLEIQNLDTxYUie515B1PGh9BOgBDSWpTHkpDBv0tiDiS9ROzunWkbIZtpZrcERiK2gCRsI25%2BNhEFlCLafmQMb3zChxJCYUIXg0cKOXRzTaK6XrBD14SSNBZRTSGQhbh1f6KiaFZaZ1i4fvtZcHBlXQvu71TvjIJv%2FVIW%2BfVBwK0iu5GNy8LecwB3TM6TCl2MybvvbghNmFYrtrIcW6Wf5NR&X-Amz-Signature=a077a1d8aa7e1d6a181c22705c489962528260f0f93ffcb1393abcaec3e19a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
