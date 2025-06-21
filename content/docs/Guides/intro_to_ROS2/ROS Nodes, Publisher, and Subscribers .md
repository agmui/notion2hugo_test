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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=1fb3e0bcf58a679214e3d88c5b1437692f06f20d404e8391abca4f2cd792971d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=ce531654b2820e58a9e1fac28197dce6d3fcad676fc33b0243a530597aa92480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=47a8aab4cda9b853cbbd8759712861534757a8feaa86a8891df7884fd4ae1e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=90503bd13b6e263ec66a4301422c06c5567d4e25fdb70295560cf4f18f0f51f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=c069ecc718097e9d0df98acd27574f7dace906012e6ab416b4c436cb458b4f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=d6fd675fbdab41d2e61fcb15dc214962c56c275adb0c37e2948894d6308c07bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=df7da4e0610ab3f2b26f3e13ccb16d380db910074191160de37d589c631e7810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEZRB4Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWWZSjbti4xgXAu7mNN2xljxxDjgxvrSomJFkxSgBvQIhAIQQwTgmlFYMmPhdC8lZgiR%2FEPDK9Ob0zoSeOn%2BJgnO4KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkgM1levd6Tl0SeRkq3AMmMrIIky2Eek%2B1tMSVoWB6RY%2BxSDyXfHx7cEBuKb7y5wO4ahwMfTyxyu4uEwBlTx9MLcTAFtnbtgZX5DZglpTWvSIhDvWpwNKx1fMzaesGybCTME1nbyrYv28CgSMCygPUIdbanVzVzawtUrbkuRg%2BD4TLuObAlVTdnBfvacpGAK%2FvWhki2jhHY83so6RdeLblUnb5YZRuaGb8h2C%2FJLF1OZ94Sj4X2ySAutY1e21Sx4ui9glL4ZFfrutKIpYIdLCjmbHm716Vmmz1gFd%2BjKLRHPcaHwwlFJqlMOKBoRRhXawSj14SR%2BpRbcTd1KldmtqzxdWKcgbLSNARQ6LKLoOh%2B9ziMT05%2FWc2MySnPNJirJDVFlyGDGi4vkH%2Bx0y7Ri0GsrpWA8i3C5WrLqkPUUF1mrkRjkhfd5hYgoScRItmpyNLhC%2F2fzxxC6xWdno%2FF%2BD3gpyBn6PpOO%2FVDvjmr6JWECM9vYDjS8Dg6dVD8SrcEg4AYtYC8CWqDmphsFOPa0kn3b6U7d5C8t%2FDXxAx6WNMGNI%2BAAJkMgPuYxH3tfJt%2B%2B%2BsbDgy%2FMcCQcAQzGfBZsxGBWpz6c4%2B8QYEAv2G275E5n35prJ5ZgPgKkvDyMwQAUAgmgeJAVb1Mw6XLjDdj9vCBjqkAfuLe9YOdl8xez%2BIcyOjjvZVtq5kdhiUnfWDdT%2FIsDj7pJzYl4JXcWJgUoFYzlGuStfUA%2BnLQ%2B73Lidx4pkhOF64LEFwaiXmW84Oh7vlFQKT4Ip8yuxszC%2BtZ1j1ghD2Adng2RZYY6LUUIPztjC8ADDgUXljP9YNVEM%2BJ%2FNjJLZFJv7HQ%2B5%2B6YNpm1MoU4%2FSPWbPAtPnFJxzhjwxxPATz3Whd7Rk&X-Amz-Signature=d1d0bffd1f7a779d5f20b9a1077dd04f2951ff2f1bab9f11e96ed6d33393677b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
