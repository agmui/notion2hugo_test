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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=324cd71ab1597178fc65d4d6db69efb02a89b09b23e5cbf11f77c32e936f0394&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=c2d838d561c0799bc0743b636e5fe8c72a1b51b4dbb49c4cefb29b17a702767c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=ba090269fa35dcdcd88e3a882ac2b421739406b9d7e3db95410345e65ab580ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=c493a32bbd2fb8fd4d66ad061148b6dcd2d11e359d04c0c7caaca4b2463b5e61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=bb9564ccbe9d3b142d20e88af787f9332a9e116613cec623a1c716e008f06fab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=2100def6531d37e70ba1e2f747edec2c8634cc48fface28cabd6157971e908b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=aba097bc8fe3e8cb8ebc4410a44204f392bd0c9f71de570107616594c781fc27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2ZLBZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNn1s4CcEvSeWbau4ZxXjvB933Vu0QxB1a%2Bs%2FECUN1NAiAw6tGgttNcUB6E7u%2BC7Vcwd5zUWoKM3Inu6lqoaS3MdCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6316XAf2qkNDjNmKtwDkAdz89Xs79rgegXGELZANZKGQRRn6wrBxFzysPP%2FEm5yZiE9X3UI0M6FqFQiwEx1%2B6b4%2FJhGO9Cvn6dJBfbRoSxeHzw2S7rMAOC0J5p5L3w5ZvlFJX8eab6EhUWsZoHBAFTX9241S5vSYN1YQuAJ56Q%2BAB7s42vJuBhYwHlj8NMPSUoKBpop3wWKC3Zk3qCKVpsLzyFYFkSXyfw%2B2T1ztf5%2BbSflmlz%2FbGVmasPl80eqlhQyuc4v3Mmig6IiV1LlzFwSY3d1SWsRk3pmYjfTh44L8batdGxc3Rvn%2BCMMMgvYYGImKiQNsQ8dskE8TJX6lRfTCheBruJRd%2BVhqXWyLt6AB4rKhXq5EvYGHZI5sFNziT3VdPwmMSFGIWOXAtBElvBJsxaii4Zpah6YopJph%2FBCuFjYa4l2Ndj0OU59YWkwgA039F2uUxUA0tLiNVB6jGxMdDJvsvVfE3AUOkoUcQ0kMd0EaFechS4%2BJU%2FWp7HWe5hfP5MGy852NYe5GtUalhtsk8esWAwVo%2FTtlKuMqrHS%2FpsFGa%2BnCVpzp80b9U20lZY5IOub1XnjSBjTMwPXYBtms1haSyGYOpmCDQ%2BxueDF%2Byij2mwVPvCQJaN9KublWHd6Tti0ijA0hQcwionfwQY6pgFX1yYEyJO6gMGhzPMdqwp54SaUkuBENMx%2BzCPRa18Jx3MmxvoNnPL%2BKqYjHDdIe1e7oFSPx3RSfd3ma4MycByMy7FKZazjCk6pU2dvFREI7BXWy95vOL8w%2FIkIkSDMceYSTjBXNaewj13rUHVFrJMqZcc6z1XTaFMhHPTXs6yTH9qDjRBTFpuxC46oGGniTqIDH951XHRhBKedLErgUaDcGihh5H5N&X-Amz-Signature=b4a58c02fadb4ee223ff8ea9cbbeac196a2ff23b052d46792c77d9cc30c4517c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
