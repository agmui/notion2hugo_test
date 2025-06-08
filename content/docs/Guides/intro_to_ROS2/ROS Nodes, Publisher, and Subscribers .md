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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=be1d2cb7b7cee45709ce8e1647984a9ea626cde39bb2f138846860fe2596c955&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=271d2fdc76579e9f2adab8b330365c6c51d4360e18f7ada2f3e798ac0b714b30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=6c9e28ea4bac90a0de2d605edf3c524826708d6d19d4d554796636b961a3e188&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=3c8da18df5fddfeae7847167705ca73b2fc2af9b6d941a2c0b1d20ef304bc926&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=6adfcc2dd9fabc40fc2ec0aad629ed43ad4593df642798307711945eea207324&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=96328a589af5961c5ac2fdddc6d62dc63e3de94cff1c6a658c0d777d1d8a0af3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=74521bd77fa15a8854eea82d0ca65df4a4df41adf5227bc0fded9c0e98232faf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQH3W5R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQifKKHR0wjE%2BjXnnlFTUiFTasdt2BoSCaMrcGt9i%2BXgIhAO0iZqKJJzfM5fesjDAdJWAQ3QEt6ZJQQAo1or2fswMVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUyY%2Bvm1tE2uHqQKEq3AOxWN9E6490Rwup52v88%2BnI9ednZRgYTJM1i2boL4BFKnhtIoPTa5vz1tJBTy1oOQxRhiAi2%2FLop7u2wQa0q7iqdNY4tO7xCaFGSkA2qkbrmXB9qrrINi8EY8g7waatgVDhKUK4Coc%2BmkEV8rkS8rUPaeQF9urZlN24tPlegPXFwQGGXWbUHd2WWxFp16BX%2Fsy2feiEMxt6JpP88mpRPV6aN9CavXRgsUYskJuwIoWoQpYvFAYU9myefYzSUPxba27XBBXeui1g2CAQxVp%2FD5h7DgalndKn5pTdEcbivEKKCt85o%2Bw5HvrVc2OFgNsm51CQn0wbHgUr2dBJeXgVybG9ezSpd1UQIA6I3tQM4E3XyVijIz3ieF%2BWVkiawHaSqkIDNkQihuXzVKlihfeDFzZke%2Fatzkq%2BD3j0AQpk%2BNQm8VhcJw26AWaUG79aG0W91vdOudjMNf5kcNSySOFu%2FBTufPhhaQCRFCg%2F1wy4s8603TsJt3TvKc5f7BtWl7pLwweHidfxNkPJFjrIovdr455%2BuHZHz81DZgoZxGGqu46nsmGPbWDN4KTKo0FOektRHboJUpSBaNjtJqKGUlNJZAm9%2FlNwtuwrPZLvbXiZ82Udf%2F0YcVaYoIt69ZsuDTD5sJXCBjqkAdQFkU%2BzThdOdSTCISSupmfB3QhUZjTeHAoTcblrO3%2FyVgSLbCZReS4jC0XcJIuUcjUXDNFoDw%2F1th1gWIkSS5xmjPKpZgEC0Xx2ByoOydxfN34m3%2FDD5D5hxgmeSby%2BF83mHIAl5n2uj7LXQZ5ZxzPh3xUCZhINpB6RiMwT3EP76kV05L72cAjmJRxipxkNFeBLXi4rI%2FImGbl16ijhDYiGPowC&X-Amz-Signature=24bdbe62a39af554b00d45670495ec34f20c0a500ab0983dbee0ced0e528f95a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
