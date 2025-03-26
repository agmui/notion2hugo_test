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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=43c4b2f58c3eebcdfbc40addc0d4c474ebf3a51c14dfc3ce00db26add22f5574&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=9de3f0e73cc09722f71244e19fba388159127bf7f650c8d580120da323e059f8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=3ca5959a0dd69c21045186d4846e7d85d826bbfe78e0ad8e08d6bc1d6e8c41b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=3ff4f57fe951230fa93b07ad0f1c18c770dcdab01371ae8095f50fe6e00cd921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=62a80bd213964f03f4ddbd159fa2b0c64de8730246cbffb0973d5a6fc2d89dee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=b03488771b3f1c4e20b10414f58184ff9846f123e2c84b313910360ac4571a48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=8b9a085791ff6ce26bdceb4f6fe02f9a46f3f1fcd92a8f6b49ddf0ee029ec719&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU36J7J%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk7rRwWCvvqw8tKGmJrFsHJYCTtdk4moXwNVs71o4KUAiAb8YZ%2BTvf%2B%2FTucVPay6NEkzxKYWFX7lj64RhVhCFJ9hCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMQGqMebi9fjstMQJTKtwD2JFGHqLo0KeBpjA5aojn0RSkULdHuKeRPLpN7lF5B9O0DBQvlFKt574h3Yebi%2BTh%2FFEfdHoS53i%2FswjsDaPjCuUe5oBpnQXoqnRp4bqCmMDxmeLcU3jdOa61nMCLdVnivRBwH4lPtli%2FmMMWaFQhn6xZRt8xiVfKivd5U%2Fgvm87PdyPvr9wMs%2BPN0LwjdaVZYiegOmth%2F6mYL%2B6gxaaqoIieTlzk%2Fu%2F%2FwQuFwW7V38MSUqVk5BzWiLSHHxdiRiizIhE%2Bxwe%2BTH3WfKoFP6jO5wNqaUb6BU2%2FSDjdCb5BvS6fFxfultblZ%2FrUPIcnANsscWQoEPAzIzwkN6b93DgSpRQf%2FBWAfmzP2W8869z%2B56iVxzHJ76aGlBke2yfxcwCnmd8E56kW%2Biy2C9TLeGdcKz5AFZApg09ylhIYlApBCR6TEcATrSvaubcFx1nd2kOD053zgDQp7wyc5O5C557%2BteCucS8vHmXCT5xvr24OHQUf4ObXAZvwgGEg2Z3lKRaG4g5YCrmEWfMAYt8V1bKNNmmMX6QU0DoMRygr1w9cS7pzVoos1iZ3zQ4oE3a96I65mF4wScEtLdNfmVYE7IUuWbG2Sd7c%2FBLsGoW8coNygQ5UoZtfgfENAV%2FFiawwxrSRvwY6pgEDuCjBgDKhxvjjRTBjfEmE9SKdumwmBvuwOcvqNnGUua%2BpQjhMFTbBuAR9Bj5yOo%2BIYHA4ygcVYmNS0YMn9mJxdCU5PhifUziz7cqoIBSRG9Lzm%2B%2BJiQwUZUWPYDBshiRpEK%2F2uk6gFXjVG8L9hAy9wM0d1mvZvVmlSgtsrgHmT0xxxK9P9V4EdUoouZgFEVCn82ALczDXjimpuwamln3hG5sP3PQy&X-Amz-Signature=1f2c4a8b54bba467b9713063e8fff1f85e353b5b9db7aa987835101dfbdfb3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
