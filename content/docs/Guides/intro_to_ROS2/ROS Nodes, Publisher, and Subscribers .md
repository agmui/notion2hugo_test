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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=7b6742eccda29852048ef3035582543a5f7a1bd63ea2dfc11ac2b54530daac13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=a3a01bab6c6de4b575d6ae4b5b7ac5bfcc91769ea7e8ebf4486d3a0f19cc60b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=971164352237298bd3a3b9f46bf855f05d4de80449a576d3a69afe6cc5e9b33e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=0edd0ff0af86182220a1e79d738e40fab0b7c1ac2d8df92cf64217e3fc46b2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=207a5663739f63ce95a5e675c5c538617dbcf53bcb00b9d19f20cfd4e567aa80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=165e9fee776933ced9858932acdca4ff6a5c20c99fb1aaec8baca73819f493c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=a57892aa863d53ff9d290f622e0f03098de8aceb7e392ff42b11e8b86acbd4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN62SJL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQtl6tgiV1pZM8x3GC4dlpLPd4FAi9PWffPjqjY9h%2BWAiBJDFOpy6ooxcz%2BM6cJjVODEuRfjDBVNePkVCW1ivRNmCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3xlNVBwpMjI2l9bnKtwDcLkWWOF5olwUajXHLFHTwpywfJodQAT8O%2FGDavaX0Hl071crump6gcbAcY5z1BNURQxp%2F3fGPZbgUddVe2i4Suk8X2JAzBVu0GeLj7%2F%2FGoxBK0p78G75vjEG8GcTTtrVNGkT0auymuHVgM33R9y%2Bw7FdfCXCmSPz0AdJeL8JsrJmWLnXNLsVcejkEwgt7AKOKSa%2BpxbmflqnlW1ugLJyIdYEf%2Brzqhqdv4EX5phmKCAygLSTWWaFMdIAtkukqaI0AFagf8nrBggpN0SV5o0iY%2F2rfTDB8mjtF2jB9fFF4obBFYF%2FUcf49VB9IMa%2FnrAIX8X8l8KfaHNuEZdu1bPeku35tkm%2FtOfa2JAz5jxqENNHcirjH66qrz5VmkwhWTiPU4Fb0PzEFvbkp05e7sR%2BnLsVIZavOtM29KRbf%2BfhwxIP99LmsmTwZ9ONzLVoA26viN2FPYKiRh98W3wQD7%2F3jCne0C1qWCd3dRPYii3zqR3ZlTe4z9nP8yWJ9TY8phDcChHPokAKh%2ForCOeUn5x0WpPwPVaME9VUtfQKxsowhAQQUs88l0WEecDWh4h9%2FUpT10BFxsiP41s8sqbf16LLitN4YOmOGWvcA2P295UnXt7QSqn9zdFdF9qSSWUwn4GRwgY6pgGx8AZMq3qmpyU5thv3xgGvjq7Uov9N74vJczZ8eWuxT0cMrCLTEzRirWC4hixi7OerllCXWKQE0D4%2BGQawQ26bkSiVAqevwHu5Xt1eD5FpEqCBlrAZ%2Fg%2BJ5KKdQv26tzpWP1O3J5XuqLjQTzp5RjG7qnjzhKhE1iQGOMQE6kOOfSN3fSW9lnkcIg4heekYyQJ7Fw9sSkDQ1JJTWSjoBrjzSXbUXqJz&X-Amz-Signature=f7ab5a66746feacc7c44d77496ad3c812e9f6149b95f7b6ce1d94f0db58a60c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
