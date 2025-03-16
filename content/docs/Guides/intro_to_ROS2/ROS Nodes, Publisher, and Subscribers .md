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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=7aa0748b959740b53a11a6647a09504b36b6fe34e9cd5a3d3140411ee11ec1bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=83768d14a07c9b95cf587feb506f4fe75fbe89a2b24f13011cfef574f7316f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=703ba64cc0677511eb3b7b9f8c8b543805abeec54cde43d75ffc45cdce82d735&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=e888bf888849000791991559ad66c9d932e7b26a3b47ea5a7c0c665c6a21b7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=87e51a5e213e3d057696a4d4994b77382d3caa87b6366cbad3f496f2489e41f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=52685e9d11bf6650e7026f9e8327972ccd021c0b0e9daa14bac940736dd0f7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=98cd8b880c3746349809d13b1a7de793c56b6cb719c6c06efdd085801364484b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQOWGH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzD36Q%2FZzCT%2BxoJzjflrT990%2B7lrRWJ0NvYx6LbVoPOAIhANkvgYlNVtd0IjY2rEB9QejLf0G%2BRapeM56HGW%2BwrtJBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwAAdshyzSSPi2FBE8q3AP8cIAgNQydXazobN%2B0AWHFkqvU7QI4N%2FoKHP4ySjTNMLk7OxcoXHxViptZgtg0D%2BqUdK62zg9KGnp49DDDHVWaJwOKbBEPvV9f97vCfS2PsqvhHJNrTUKzsRm9JlxBRRjVd48AQkPVHFCD2W5MCk3UYqWFCWtD2eIgX7wwSKfJf3oBTb%2FUDeL3wHsgflrnI3jJU2oiBS8w66sci5dG%2FMH0IdeFUVVR0eqNIXI%2F9UFCm9p7hxJGp84%2FNCaq%2BJ4yI129hQ6DJXnVkOLexzogBq%2FGkaVPq09yEIHoqLNOtYftCYCWxeUdWnmQZBfLhP8Q8IL9EV6ybv4JYzNFeB%2BBSs90ftk0iKczyvIDvtxk0HkgNp8SLoGzJoBSc449ilX8DRed%2BtboEIu0b8NSAwuZNc0ClSSfDWdnAzUtkAI0anxPb99Q0L984QKtQrJosAS%2F07fyAbipRkmq3v8YXbSxreH9LZUDwsRKFYDXKhbNhJXBGeHdKcZ3EdZOXcs7%2FrpI2UQ0WbRZbc8qo5nH5EHPKtlgBCgjY305pPlZfiz1Xd3jSH1%2BdohDWPTZA0z29qqudwmBXM%2BKaOSHqoS00DUGPlaL24GUoRAyjIi2wZOzdx9QId%2BAiTqAaM6cW24Y5jDpk9q%2BBjqkAfU1YQip3%2B8k1b%2B7BNTeJnDNM2gszLv5pkAVJYJ%2Bxwrup5anJ%2BNH%2FzJoiDKIHdtkCErwQiU4pdj8oMvWoVQNU33nlbuNVVXwvr5QNCZ2VXLejPLZksHcMPQx2D7FOg%2BE1Gohz7uJVJsR6Ufu7ewvGDyGiauZv9z4%2BqcynZIN7cm1Oo25sAvM%2FHdEAyzB95H3EA9w%2BGGshXFh8axNHoB3889JmIvj&X-Amz-Signature=8c0110b279d0f0e1e8dc16d3662e01a2ef419fc9ee75f9c603b18e3686c28b53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
