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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=624cd4d618d33657dfe41df7d8a2ec9b371bcabdd23708057c685bd775d19363&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=4e5e10811a22ee1214e70f183b6e3538032e9602b6ff73eb2c6c8bdfc82d7813&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=5e52472bfc4ce17a78ad7d454a93b647be6325c36e12857e348201e65d83b9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=f715faee09e4e3d8a4d444142ec4977f9ea2dd48f59752815e7b8c6fc3382f57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=85a02064aa430de38519a7acb4ec81120189a987b43522ea56a839e05532dcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=3b45015d3f9b86e38422540f806993f7d651ae5eb955a776fcfa2a9419b0eceb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=68b6e2735526e8153e951fe0d10fee9db92b701f793afba3c4b97b67d602ca05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZHFVB3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAhiXX2cqe6Zo57Q1OHa%2FZEE5IfClYw6RbwGHAh9mOAIgezZkarRkjUGUONyEzm0whtDRRCgL2zMpw6wysg%2FzIg4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNsY9v%2B5mXl5NN4%2BpyrcAxFWAi7HjT5w1cBW84UYJL81uafksQjtMNkwsMWYpb45uFt2JTZqq6Awf9RqddGJF%2FJrABmogOx1%2FIjzn03i%2BsxmsAg8VMqECU3RO3L9Gb%2FsEWbNZU3Tr4i13kt3bh4sRg8wyh9AP4NO65UubFPe3iRvc%2FzxuFd7gDDQ6jMmBvlR1ILIEOMNk9QifgCmGOS%2F0RUVratgDxxAS%2BV3Xy2T7eqmbhT4IuPJGA17hI2PuXfUcNZ9YydYyYK%2BISKjCtXSvWxTPCIwYALBajb0HJ809wcHCNqYwdwazTaKjf3Hkhsnk0RXgsKp%2FcaY4ewEzcGsAPLAIT1Cp5ReCmPaVBAYRMsn3y%2BbnCRpySTGUV27WrENAkIqafc92tQJK%2B2ef0H5NcZ7OyyMMnoQ%2BNU1nLQDnl5YqEpGVdzYay%2F7%2FEocCIWUH%2BNyko87%2Fd3qccERV4AL4T4k1Kq%2BaJEFep5MO7G66aCw9z4yQ7W1lfnxFRxAIxS55qKtrd%2FVTv0%2B5Q9ijWoivVzffKeN3tjQ5yBoD%2BMivI5NCV7JMLCsKHXCBD0CBzXn%2Bydr9nicIC9uzxOwA2jL1tnFOlF%2FdRQybZ1Kqv6nxVgCTgQ51h2OosDzylfmSQE4al6oShWCV5F3dj9EMKi4wL8GOqUB541UgY3k78CwAVBwRkJkCzzbPJYCSSqVlJKBvPwGmJ%2FEiSLAuwGzWZsxN%2B2VMGjzayr80fY6GrdkYX8QMFMErPeautAPlKSJvbtNZ2AglGkyk3vEz4N0zvIg86eOkhn6s%2F428QQFph5%2FwalmSgePO7S21ePB6ok05yuiUXDmJu2VlPf8fIciuqbmCYnSCb9ynBA6hKnA66HZiNEhPUfHoAcaBi9O&X-Amz-Signature=aad8e75e01c6477e2ea3a5053b2952d95faa352e8064ea6eba35677f055308fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
