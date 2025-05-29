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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=0fd0d17f8dd054e1c25618ef3711909fec0d11c74ec00b1de26ec40b66ae3a88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=426f3b92c739e390420d9e8c1ebd071c409bb075764628bdebb08c3607b1b30f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=a2b92d634122763793fa14a75457e1d74f6416d670122c62d3c489f1b217ed59&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=bcab60a18eba0665f0b29f77f2e6354b2a6788c1cbeabdd5c848b2c1feaa9648&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=cf07f3f9d74fa629b5f0f259db18aec935c56dd4619f5b9825a955e78d9dfff8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=0825dff5b032a89f16b8557f0b89a23d8af422bff9608b07bb0062028c362625&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=e58915742f6043cec3cae092bb1f86d7bed30748d929f9ac123eb1b1fc502eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77JPKVO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2BGTCOit6MSv%2BNr3UzAYEcm4JLBKDjx9eOTR5bLW%2FCQIgZLYUlw8xd9G9OclLdhUry%2BS6IQ%2FXoY5rRt2NoeFWEU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBX7HIiWr7co9JhgircA%2FSKKgRA3jEyaTZpcwJLnJJ1S%2Fv5Or4j7LBfAhovZpWuyoffz9nNJdVn8O2OH8PJ27d%2BMsgohW8cxmgUrFF200vJ%2BLvzFdeczBBIcPu8xUVJ%2FmSLEqWFa3au7IT7Wyj3IAd9mWFxP7AzehhRVsPWWzJBN8QVPj0EJ3Fj3md7Ht6barXZe6RWyzpzNUcecA8lO2NDXrm5M%2FTdsPTLsrsfcjNkMkPGRuNVrzyh9KG%2Bbqg0ys2RtXq%2FqreiWdydQLrQLTmDxLNdlmbXyOl8LfXTVnYDsX5AT0wzOu0q9Hx92jP3SjY3gkankBbm8W1%2BS0QM3ScYHgR98WCu2g1CB8gGqCMr4Xh36iQhqlmgH6r6xr3hJYXvHHMSwUwla7MrxE1rQB26dX1FyKB1dSJPTI9ossaCeiZZ8mcdgXEGXwsmum8XOE0jjcgrTiIbfvg3ycaU6q4V8G8gS9Rm4JCACGcSOb1bK2wC7QyL8NF3z0XNCYf%2BM1MUvUDBl3KJWpVc738fV7bo5NWySPE9%2BqKoT2VPzAcQpAopylvW%2BzrX5x2j0ed9R52MGRmaczFosy99egDgiUPE2Cjf9mRlvov0cMnoj1oVPXQqM%2BY%2F%2B8HFrl5x7FqaSoBJ8RfLvXYO1sGOMK7938EGOqUB%2BR8UIcQoLSPHKmGxuHm0Zjbe1UetP%2BaNE7sLzthN0KAC6Z5SsoHjJzeIpoTece1aqYnFhnC9ZQbFtQRWuKS%2BSF3%2BU54YC9QTzZmQzZCl%2Bh%2FyjquPPi1o3%2F4jtLYXFzr8rP8jq0B6gXBpwDzDlrz%2BcIWPfPgG3GoQZjkKxrYymK42GJzsX9izW11uTAsvK9BxvDyNKT4J5VCAj8wFHotT36KytDL7&X-Amz-Signature=3ddefe514bae6805ff6184ea1f79ceb21fd13c4df541d444350d3c58e1ff51f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
