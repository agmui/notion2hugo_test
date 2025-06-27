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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=7bd840e0c65c411ffc2024a35038477978f89b60c7445ec951e3d759fc8f5108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=bc4e001698571eb797984f2bd166dc40d85286fc2815b7feb43ebe1b11e78fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=1c43a8d58d00fe6c9e06cf091368b817971737c4c82990b21d80b942d6cb69e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=f3f4f8f1e7d12c9f81e46ac742f1b23a14ecf6909cbefe5ef7a19ef10ebccda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=619a458a520ad7fc2d7a07df29005eb318cc4c4cf955a8e3e891366738dd9522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=180ac6761ca1e11fcdc7d153a28f5f36e855e66922eb01e801a91e910ac26514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=e3f80ae6a742f003074e7b777723cb9d2e473e16764f1a09602d4ace859ea018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSRRSY6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD3AR%2FDqLNKh%2FCrl39RpYlY%2BIQz7A2biLctj%2Bvyt2cUigIgIj%2F%2FUalNHOtKY4sGEC%2FhaP6QGL9ZddTo36rpxZSBmn0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHdEZbKmTqgy1slE3SrcA9v68tlVo84os3QTYv06M5kyY%2FM%2FH5xz2zlgmFWjPhn4gkrKUKHxK5pfRwZ5ZKLwVq8OKfPY2jxgOYBSpNZjkL6oVkzbxL3qr%2Fuwr84A60HTwGDkB3KA%2B6%2BTLUlnQtBTUQnOCkCkz1c2UgTGzIgc9nulZ2c2zi0egI%2Fw%2BQ%2F%2BDu7gJKQAubj0Aioaxi%2BTvXsGB7yDCwVuFwSOGRPlkE112mK1G2%2FISOSxT2RBcwtAvj%2BQSUrgavITC4v0bx1xssGqr3gCg8wJuz5JosrgSCLyNxEpnCoQ2e7P9vd4E%2BhG8OsZ8%2BgggoZAdO3R%2BmlgiemiWna4YySZji1t2AkfYtJNycZDubU7fgTKf342xpfmspGSPqrC7CUh4KKXnuof2i0nzMD0ggYe0I7xGMWp8nQzl7%2FN5ivm23wjG9WlK2IaqTGYd7LFgzFfz2JfNaq615pEWAUROoIqlZVHrIDhkRfMsjpcEzSo5Js64nPmD3%2B85%2BZWIGRzQq1f9HrCAlvMni%2BtWr%2BRiXu%2FX%2B0Y4paviS5UygIfR9hMsJ3ZVU99%2BG5lWY7BOPejAke1iJ30cJ4USaUxEH1GHXoR2p44s2xFlkCPuRnXwstF7h1Hm3%2FeWsJ%2FbRY3xX25U7X7ipiu1yevMN6f%2BMIGOqUB5GmCLc9T%2FDo%2BJoMzEmQmTkg6Z3%2BiK8gvG%2BtnPvw0TAtZI6wFOUVZh%2BKslN99qcYE6S37JWrBd0IpM2FWbCCKeOJwOXcrZ0z3Rso3mAHxtX9dFyFgQmRmOseizg9bF4Fy%2F1iBzTZvPUoGpKLmu6l82iEbtI5GFXb30MoJbOS8wgHi2cXYrpwh1%2FTEfh4dW%2BswJVOyAiheOxLzEZkQxzbiLL1V3wST&X-Amz-Signature=74532f1d098ddf7bd35fb4685810a9737497931e9feea698cbb2db90f02c520f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
