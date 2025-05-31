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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=fb1eb8cec42ffcb873f78504c95cbbaf70e629ede9f58c14283a9b6825e2e9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=804ae7d95ecb8676128e1b8130b188024a1410b3a73c584f01a59adcde923d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=0b6e007bdba9c5ec7425f5ee6785fa1d22cc903040cbd31f105ca6be389f2333&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=3984c52ff82dca0252940bf23f4780bb227cfeda1eacfd6043161047bb182874&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=dcc3faa1e917e21bffad46e084d90d81257e2438e1b6b93a28aa138dd2412577&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=d25f5dfc3db8e9f4013f34f842ee9a3c845a07671257bb757cebdf243001b370&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=afd4e3c945dcd54a3ca929a3d04306cfe4976d6a9508c1c41707bcfe70a9ce0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPMNJ2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWjzmVpankZ%2Fxkx5p91cHf7rYaFbRvp%2Bjbv36UD2sotAiEA84T0t2M0BhASG%2BJb8swSs4EtZXXZA4xfP2ZcmXWxKosqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERZhKPPoGpFBpd1KSrcA03ZcpB7r7PgEE9eh7GGVgC%2B8okea5KnALYSjiLSpJSeD7WcKf66g1GGsfty604DDYVsg0BFdFbk4DqXXsgqxRWeWTbjeRe2WqwtgI7oInQkqBlM9soace2zSurmZaNyjnirHisUPzsgT8nesth4nhrlZIWiE8GvrrDxK%2Fb5%2FJSanTbvGPrzeyZURN6fPZH9ZFot8nUC8i9jJ99bMrrIfsHWRewKUDLILc8nq0GxFsepJr5jE0cbyijO6QMBuzJTslaHLVNcXXMygvRr0JM5ndKQ11UB%2FLPCxIo1s%2FdubWzrPxzlGRcQcfofMZcVBGZLlZrBGohPDDR00TSBgE793vJBhAdjgeYeKsgXh%2BJX2jct5NjHTAZU0vYqwt9rR%2FE2deD94l6V3ni%2Ffe0tMBDqwCoaiGuND5bVJObOZrEg2bJ0gPiykh5d68Ywkvgdl%2F8KU31tPdDgRCk%2FMehZTG%2F%2BDLCGY4v2m3PErpyLod8eo9GS8rWJNbnO06DRok5cB2UkTaWM%2FnKTh2JA75lPji60%2Fm2wz%2BZsJ%2FO%2Fq0ZM7BbElbGYbhnOw%2FV4ESxZ%2BG2vgxZWTVfvn3uTZrimo%2Ba%2Bt%2F9QVCBA3d5uKHLMrfNWHTk46TWjlNsbVY78oTNdPtw0MKLb7cEGOqUBw3g3P7nKdFJMVVLTtqgZ%2B9Bio7dFF8qxzRrNkY7lNnDzOv5doi3XZZ233K8tbTzQxTUhzuPos6SXIn5xiqe%2F4ZcvJDRpbrKkMmtKO8QJbht5dB1eMSk3VfxMn5TH4ipI%2Bznubv%2B%2BoWKP9BGVIHTxlAyy5QYEdziTy5L9iGfOEzDHxmTORNkyg%2Fi1GWkFQf1Xj8TI4RHBCPhoiK8ZEBC1dehhgxBL&X-Amz-Signature=aedfcea4ffca088dfaddfcac11213fa0d47bcdfa7b352e9bb54e7754007cb634&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
