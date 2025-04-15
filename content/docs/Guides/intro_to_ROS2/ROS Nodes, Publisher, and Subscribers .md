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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=2f3ae411720b583ba79fd694b10374814a1d47e12cf2c9ac17b28f2dc59994ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=6969783ef18c36ae443a6731cb7b7bc5dbc7b086444741c1117cf6949aefe48e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=b25627651f5a5b04dfeed128938a31db3dfe388b20f3d14c08678a2a1a1cfc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=3a5852ae9c0fa1c29c50d0b550302acff2cf1a3f4c1f67586c9f853f3f8a9a13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=851abf71aa0840be8b16a4be953da245cddd73bd184a7ac781919e62932ef584&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=ad79d3f41219e9fab398329abc0564476dc5a530809e7855460423fed216bef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=46cca9f261e6c8ccbf8b85730f6559e1a8f0cbf2f7e9daf57db3870f1991d42e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGSE7NT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j4LOJ7KTQVLAXshQwdFLEO8%2Beh%2FwbjdPcKyCkiCrOAIhAKg8Mzx0qSC7I8R9bsOqEQ01jqyjJzPaXdiukux%2F3oI8Kv8DCDAQABoMNjM3NDIzMTgzODA1Igw1iP8U4%2BCx6QHPdEUq3ANnK%2BVi4rSe5JcYW%2FMR9c%2FIylolcaiWMuEqIdKm8dY%2FF%2BKZNz8lggkEiistu4lftLgvgG2ZgTdKoS6D4zlCreLLnvXM7tmLTkLX8pxOUNZotR7uTnAAPBHFVBBg6IPuiVOtY1nbcLWtpBCXiBtBsU2o6YWaCA%2FtJr4GViQiQOJDgFrjEm%2FGaEj%2BRN7ysD%2BfKYODDjMpoD4326xuJboE8JbxxftxQwUByQgDg%2BBD2FTIcusw6eWMsoQNvGTiJ7La%2B9GRv47%2FA0CJifMASvcf%2FPAY8BJJao1sFy7V9YCTF5Jo71NP%2BvuLQk3nZy1FwLYZUpoIO7E%2FTT%2FeyOyIM8tsV99t3SEE1vMnfPW7K6OfTmX%2BIHkthWhcZnwzqWO%2F8xhW%2Btga1mqwgN3N2lD%2BgUqSybEfdhhe%2FrQpEWH4GLpl%2BtZ%2FPofPpQJ9iGgehLmaYQ%2B05nhjXrb14rvmVh0%2BxvZF1VJgEQqS8mHD1MgWvOhAiY4nB%2FJaEh7kwwtZ5Jt4LJoxDHa7Vcr9QZkBNXRI56unlY3hwPSd8XybOPkCSt7ZaxV92KVVsHYqoEA7L01vwyAwkajqaJjm4gEYNtOARJmk%2BK360RDiIp7JxSpXqJEQYVPe%2FF4GUKh6gDi6eIut8TDI3fm%2FBjqkAQ1Wud7WPnpBiiVXPAV8XIWTyrpaCVi3X2sfv%2BIZBRnCLnBXsVj7q1nCd17HDm30aYeoeHZXox7cfwDWKisI0NiGHY2SohG9hWU8pPdFh9g5vRj9yTMfMT4GdE00I5RcYKWcsvBr6W1PnteQ35kv33OgHUtsBWNdvtzKm%2FMdmCxua7iEjPl4eFoTzUcCOSysRui9osX4LpZWEZbRducicxuKVk0x&X-Amz-Signature=9b8b7dd27c05f190ac2d6ed0f937f8a57489ac44a988b68ac9305015b89e5a52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
