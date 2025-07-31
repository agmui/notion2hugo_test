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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=7dcd0c0192c0dfa8120c7c2b629481d5ce2e0384a122a7d9677d9bbebd43216c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=923fe3de1185c557cb771034ba77d5bc6ed7f3981718276153357de53b763588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=729c550280f37e12d0fca559e2865d2ddd2a289a7a93b2ba0f05724a55bbd0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=7bef5d8cafa75a89e7b80536d07e9ea5b368e2b249d4922af4c3b9a9c98d7902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=a272ccd6836cef65550177ba7af31e706e686ea9b1ee3b5f44633370c0cad1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=0ffc766f9ac3cbffd24ec20418fdbac293d86b62a802cbef210847a5a67751f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=194c2d2560e46bc2638c7d7438a922dd9efa1daddc9252119b05de42b6c5b82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WC6RKZY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8kdf6ZOavjN81UO6rt42%2F8zbk1u5BDOUEGgbVrz7GRAiEAi6ta0%2BaKz%2FuCLc0m%2B%2BviWl%2Fr7dy4eJu7p95egBYruXQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWb3ni5dXEGbySXJyrcAyFu6TjO0q79Ek0Vl2TJlicfuJwAwS9TwvtsP6oO%2FXfvA8oDCfmffD10DT3E4F6vPZo%2FgAo59fTk87asMjs7yIPeqrBqoEXK3BJShiTm2FhsHaLrwgpASo3I%2B%2BfKbvwE2wkHqyg%2BBsbGlhs8DIT75Id%2BxplQRqhGCgj8wbL7EJJ5GvUSm9hbwhTOggGOPvzKQ8ofvfcdgy4AtFuS1ozENneZs3uuOEAqTHuj7FwmrYSYblsBi6%2Boa%2BHrKdmdEhvcJ5LWL1yTjSF0KA4OTa%2BUMKPJVmhvvdr1pTCKMv4rlILv51Gx0%2BYPDKrtELHo%2BAwRWR3zPu%2BTREO3ga65csUYdFuraKKWSO2uJ1uvmqkaiI3jS7Px5hUdIz8pTfZoK4ibCqckqAZtzoEl8jspMkKciWhoHYF2RDaHK6bhbatiBlaPoQKGJTzo8%2BXrCaZ0jYHX5u7xcyxRSv%2B7NIVDbubvNWPFOk9fptkZBS6VJCDExQz6rMItAwuyci6L%2BkB9i1M24WgOzExq%2FVWAQ3RcWFH39DJ7KelrcLOsoky%2BrnuMYE%2FxFXlxGIyKnjgWcds7YeWE22RXA3jjxIGW%2B1673hoRDJ8ogHORMSW6ye1QgJKxPaM4mbCs9Zf5Qc0V4Hz9MNXOrMQGOqUB7Q20Q42WoZOtrUs%2BE9kjYQcJ39iJGos4yd7mM%2F2QfkZqHy89MZY1BG2oLDl8aIPo%2FCV9U95LMY3PozepaTfzgDCbizOqtxgQjTNTDZ6%2FhmZV3nKYalkyQbz5DAr9TL87dnv4PLeXdVg%2ByE1YMKOvgW77pKIAmaPiGwHc1zI3XB1jVp5dZ1gs8DqIr00E3Jd0XsHdF64HV8A%2FyGJx5lOvZLAShQqt&X-Amz-Signature=5b6036d0ee19df06811a6ba69b0a73afe041219da9e2e73419efd1c31dca60bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
