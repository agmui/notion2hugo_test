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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=fa37e944e1998fb0c6086622ec45a784570199c9ca2d7ba9ee8025b20139a2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=e56cd1396fe9414da2a6ee0378963e018878839d2bd43552d4507ff95c5bdff8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=307d848cfc231398e2e5577dd45c0ffac10945f5fed310650c9a8b1f53d2e607&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=5b2f8adb13c41ff691a068df234682affa4b438463f99362aec6dafc66bb0b48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=2270b7a9e05d2835f4830a5fe70ab1c4b5979a8e2952412614e859160c4df453&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=077f5cca81e3761dd702467bd7088685ea149f113d726ae7117cdfccd7a1f7df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=9a8bfa866280b490279bad6d9ff192c3e5c7faa3f0f920a3942c06dbe9df4ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7P5QGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElZEBWsNqyaieKlY24gW4oN2wxvf%2FA8KvbIUyJ87K%2FfAiEAzJlo%2FlDDdUBT1teuPAhIHYezkalyeoTnxBBABygD3nkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbujAII4EgjlqAtMSrcAzqJn7Sz8SeA4Fa6OOo4iqF0s76TKhkcGxfAXlc4IgcziOmCS5kInZtHuLTwWQ%2BQb5nU5sPUryPDXN9FdVLJkO0KHCJe9%2Fwj5%2FP3CwqReM8faq8nURhCoOwQb2wDrNnIkSr20jbQ%2FrfOZ87PZX3uj6667ar50h%2BTmYqlhEJ7bSGhE9WRwwAsVtt2xIGsO1nZNmPFV54yK0hed9pieg5VM4qMyVnDIvJ83JzTJjfTAMbsBjmTF4uJSKRXByAn2ATZG9Rchhu%2FkXxZT3EgM%2FztOU9t3vZfJ3ZzH6PBsetGas%2FNqi6SiUxiqDWC6r5uOt5WhiejG07HTYZjmcEnDQ0CXk%2BcqijayR1wr02EJr4NWOqoySIIG6kAtKHYEYF8Jue9CanSXYNu0a%2BieMSqAhnhTp%2B9caulBum2KJsfVnkDOrGKpDwING5Ky3wY%2FyopRLJZC8ISCYQj16ebZbT7jtitxx8eMCqhIBcB6d6xZTnXT8eqpDoGo%2FH089ZXlf4MoERS%2B1TvWje2RKLCQ%2FxoUjFNxAJ2uV8o%2FOV7c0KYoU%2Fb3F%2B%2BIUZ5aISpZJTLIbBqVqsg8XgCSCDz5OwIB8JvJbj55%2FbXc8KUKwvGBbG6x2Fh76L4%2BwBR6OuolxqfuFfYMMH3nL4GOqUB6olGEqzx4vUyrXkHZ00l5syKkpAV%2BhpLxnbdkrm%2BBce9DHxgNpwnl68su%2BxqsFY%2FzaLSqkc8fFgQJDQZdouHxC1TWe%2Blry7PbSFffcXR9FCyOlU0I%2FIphBU%2B0a4pu7DWZXHSYm8btzZGdjQTfaikykuQiYE0Z9OlPEFFFvsmwGVZhNVg%2FeSR%2FPVDuf5i6SR4vE8yRCC%2BCiCgFniP4EFYxHKe1vZL&X-Amz-Signature=129918808d3d758c6b459360861eaca3bdbb8a48ddc7b4246e18bff09c9975a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
