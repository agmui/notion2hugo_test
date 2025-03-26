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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=1ec00d2d194c6694c1998f8736890abd18e64eee2c5d3549cde388e7c8ad1bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=a735398a9ad3b66d368a2e8fd8b91740b08ba978e5c38564ccd4d9a7e1737ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=639339d46c21a652770bab9c4d851d0c5d998ed5bcb52ca46f364a4e6ced00f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=8802b348223f72b7783b0c6ee61c2bbdce375baddac2ebd2f53129bca2119c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=18e06a569b5f81c0ae5bf633d7d0079425eaacee431a2a724a03261f344fb938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=afc483d26b4c16b32487d53ffc45d23573cdc005b7fb101bf125c64b70e20199&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=3353b90afb92e0a05da99d0d80625d3812e3c79140a87a8929c9cf83df57be9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEYQRUR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh9F61byRd%2BZ3bbl7nadQZK9Eo%2BqQbGdoWxRuk6AdLMAiBHNwfacIWsxPqY79cmm%2BjlVD67foOWw6Fn4k0xpVTpmCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMsyTIbRcKkCejA0M4KtwDJpOEFPWJ5%2FyFnj5cMgYha9nkhfVaAWxAkiBNgZk%2Fyfcf7ZIqQ5zL3u8myPFPy0qvc%2FnpiX%2FtZ9DCGYm4N%2Bp99gnQQ6btvXOm%2FVY67nDI5Yf6zlGkQBmrQhNMic1HiCQA7TeNhawx7P5sWxCArlr8SuTMS62Rb%2BKYhcIIhRK67uhMvQLQ5EY%2FWPoqDwQ1yNPHgVCPKNl8st3TNr5IaqRyYu1z%2FtUv%2FsRZnHSVF0yf%2F97431ziVC8dxtty9ogfFEonmdb65QuJspWh5g6uBpDzMXVHC6Ad82i7GY8%2BPCGbs9%2FpWyPhmMtmU8TXVo%2B320YIB93J5yHzFVrh%2FwdivrHZ1Rh5gT9ToGD2TQ2w1Bf4XvbusMW5234Uhslw7nmEUGhtvzzD96dXcbxdFi1oVWhV9ExSoxeTPDnD2nTE49GAczVyg7YG5b%2BeEvzPickLCz0JXF%2F%2BmzOghgWXKzBsH%2FJTA972SIGhKNRRGHGm98766RkUG4nTtsltOtJKEM%2FjDylTR4I8qt9E6QLdTJxAbzR3%2FPYHTGxEggHyGoM2aglpR0H5ChG2E6kTCq86YmiNZZDkWOz%2FlIowtW4zRbKdG87BVlgcOIkZiLVfobt%2Flo0n%2FZjLcFGJPb08%2Ba%2B4HA0wtfKRvwY6pgHLQuPBNlLfhkG27waVhkXkCy7mUYGax%2B6nH0S9kQVlNW7SBjpQgg1A8svEzVORtwJN8WlScmNiYRouqdgnCyaYzA3JFnF4%2FLijPl3P%2BnrizAXkvoY21XkUHKd2j0dw9wupzMEBRtrypbeNHQklHJKImVEsZTcRk2avueWmw2t6GWfPe5JrjQLYgWUiAyh1Gd8qVJtPlnbkaZJcUS6Xq9yHa%2FqCyGFK&X-Amz-Signature=00c3cc5d1f3b4674816b4359801412dbaf4d8615d2bd8df6e367bb146b92d47e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
