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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=14a4c75d4e45fbbeea1a2c4c89e1c0ef4b3b2f4b0bc9578fad4eb8ae544d531f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=f14e6ac3cf102ed188d2f052ffead9a287221fee869efccb71d7c2e93481cd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=b97e79bda9e74b9c04e4e1cd268fcf5347b9402d7655c73fbf5807e5c446eeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=b3d057a9d3255380f3fd82cd9fc392ab817f0b328bf5e19f2d5501625e83727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=20d91a1edef152734763f5b6488d2af1c074c17dff31ca4003acb26ea1ca6b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=7a4e6d1fc4c9ed7e449bf9361eea9f61c142b8bacaa2767654a8331c18cb46a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=5bd1a32bb8b8dd26aa448a3b9634df8ab25fbbe03d522a1d6ac8f6265231f38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLX5UOC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGtY3WbnNp%2F0Rp%2FOulb1JRYe%2FEvv9zixmZzXJkmsgUOrAiBHPbbIB8HqU05ZtqJqpHkpLWW2IYKRGUZOVEm4dNCjaSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM6znlb1Lj3EVq3e1aKtwDvM8271TGb5u6hJMH9JIcN6e3Ntd0QyxI6q7qk90ccop8UjNuzq2uRTll0IFywn0LVVZrt84Oq3N9lv6rAoKWRi2cCAIdPZ1bP47bUyvFT1YQJTmshWpUpERLAXrZNmwxz2ogXIOta85b1RIE7c59Q%2FW9vMAk0IuZWKKMyuBcCm%2BcyD%2F1u74vFYnuKy8jQZKGxQ7YdOs230d0YKd2kQLOiSFdkkaT3JbR0xXWdYJ%2Fo43%2BQIVXuumvsZgXyRNCpZh7iT6OMfSoyNegSlUVChH7VY021LWypE63Q7WWcPJfdnrnuYocosmZz5rxKkTnLWNfY05xBaWc%2BX6lDTCy53yWY%2BWSGNEy%2FDdefsPYKfzInoHv9JYCfqgZjk%2BBYFNYWdUsin2KnFHsU%2B32uTDitImW0QfAIPp0DY5HYqZ6hbIcnu93cvuC5R4eGFW6WbvoL6joFCUcalmg5KljlSFxrIQ%2BJPnV%2FEWW8BIC6Kh4KpJQmKFWU1v0JakmPi194ci6nWXWkxNRRKk9AGnOUnnrVJuraAZv%2BJeOPPGx7B8YnKInA0eonRYlsQwVr5ehbneji1sS%2Fi8l0pyiwYCPIm2VtUQnxWnsM7e%2BQASaKN%2FzTJ11br4AsaigKZ%2FpMbJGTXUwztiiwwY6pgFloNfq%2Bu9GgBMq3G5MgMyLjFNhMCS32w5KUacuT4ardzrIhWsS%2BHNwFFaIpfUqQWgx32W9oqJ7dReCGqdkypwFKctnvH6Qd8OBewOiUxq15ZHhq8bgcMqlRo0V32ZXTqaHCy89XnDJBAatVFL1G7lFhJK1Vhh%2FW6EvI%2BG32rGq0DUFtCQHDijwGBv5qdZLEduk1w8pBG8xRiXuW9z3pbskBEbJ8ySd&X-Amz-Signature=a22ebed0b0b873f30278eeddc8cf83bc6a7aca4e37e39b1c1beb7e25bfec6d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
