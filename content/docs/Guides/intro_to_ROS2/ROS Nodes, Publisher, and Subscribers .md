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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=51721543c04e83e2b7653f147fd3e90c2cbc0374865753aed7a3f724605a9e90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=8401c6948f63ef297c51bca5252553a2332908e2dc36fca053d24ec552e4be8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=fba2771452453fdf79a88e5c480217607b85ecbb9b8316654ce05a8de2cecd1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=1b0c2a77c0e45e4d4fd97dfec5d65c12694077b5316d1d2094d62d46f617cc43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=0077dbe368862d8dd0f19d6b168aa6363fb4fd3817dbc9c6d35f653c9dc92547&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=991c5dd48af9376ea089add54ef9c3585f548d1801b579bab53481aa85fac7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=90091eaf9af831aa14a5ae955ec5ff5b56373a91726cf05ee9c675e74683ad82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UVIW66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8SxD0HJI5i1L0Chf0oS5DnLWCv%2BeCxFU2AIshORUHHAiEAjHOBIS3t3pMYWMkpDldFZvMCS0NbIVAZ3XbTX1byhgwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FVqE9kH3syMZBtLyrcAycQKMcYuMhIedShAC17Y4mu5XQ9UnoyncNmnJ5l2%2BCSH0pXEhE1BThVun0c2fSozVppTV%2FVtrjryFO4s74MHXaTijO%2BGSF0rR8Icbv%2FUXPkt8IBrIN3QNaRr84YjWSkycbE1uQ%2FDoLtJ7x0XR6WzuxW1JO%2FkgZ0rdlXwrbemfY7aF6VCRGA7H5aFY55FFhoae35nj5RbD9HgsrsAzc4%2FBMupWZzizyvJMnVf%2FYyjxhpPzpZ6FSf%2FqJpG2Ch0zdI%2BAmzNpDDaAwB52M1yfYlMSDwUzhptF160oTCBkDGzYzX4c6s0CIg66jzIyhC8noY%2BVfM4vTRTovQGWRJ1YRqbJCm9wm%2BIgGnsiQZm9oMfniZB73GX2zI7jXiTTFz54erNygU%2BtlngxeXLjSB%2FkaJXWgZAJI2PjqiCp42dv9ICdl74ZpiIuBLyiIjGcgyLsu19Dr9bwZzmZLOUt30p3S%2FQJGY3yzrcuvZWx20uNE4fUKdKFlPb1wMgmTFaIU5hBFP8ohecPcxLJgSBLXAAwh7wD1UdJSxAHCk2WY3u4Hoq%2BjhhaYokZF7jxXRGB3UY08z%2BayZBbmrvK9O%2FljJsW3LqFO5crfu2mOl3oKYbiMj4ZXDG%2FzKJfj8ZChO0r2NMML9hb8GOqUBcpl1LkB6AsuAMINgLEqfSaudJ9sw1aN3DWbXp9jVhHpPhs6htMsTyGfN4I%2BQ5g%2BI1dqb3MMrTqRxW6hzWXGRUA2%2BrIEZAsU%2F5tHZ39bgRKyMnMVhNZOdKKYRX%2BdXq%2BceHRWFSRiA%2Fy0aCs1aj%2FlH1vjv9kGA3YmzAybb1X4YzvYnoyvlj3PlW1Avo%2FAKl12JoV9Xv%2FwDazgbEsoDDp6rZvuwuz8A&X-Amz-Signature=0f10c023037523cd3e69f22b0de7a090cb388b0aeb93cab214f93422ac13f0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
