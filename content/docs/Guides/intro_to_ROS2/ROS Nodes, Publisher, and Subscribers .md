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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=16edcac1ed0ad0c801ae510e1451468ecb6979024be237441d531ed5429dc0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=f70e9aac42bc7c5bfea2b8553fc9cb4e223aade181d5098b0ed5421f28a8b39b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=ebe9333d078d6c50139a53b78ce304fe61efa2585be486fb21cc158ba5fe6633&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=cc7bb58b3829d958acefbb255d9fae653da7d23a882e19ff0a018003815fd129&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=7c2966c16915e44bad28acff934e1a43238ed21d6397febc0281adc4f8efb828&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=e3e3cc1fd0d7eb5bdeeb4ce508cdd55fc202bbe1f1bab85a347a5fc39acaba21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=fbb3058e7aa381a160d8c9de63fddc40db25df8b2a4a288fd0eee60238126de6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI5U2Z%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRmUA5Kzh5HsWZkSeSOyT7D1dad49HW6fmwdrpxJBS7AiEA0j0srqgMY%2BP6JqQP2z0NG%2BaF5h1do%2FeO5gdgVo%2BetuIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7tFglxNEGI1S4M9SrcAyulpU5p5Uci4yXs9l0%2BOnTdrJFVjetO0sLGr1GMpKX4uog7HhQTFzwqV6UGdrmDMuffLIqyhczonDVErIQX7731DlelteXe%2BIqZt89i8u1bdCa2h2prckS6k69kXLwh%2F8fgfMkFm6ceQBynF2zgiqsnLDmH8PPENX2PvO%2FLEh2DMZoaeYHdhdbJ1Awne89MQJ8WH4LqvnJ6lM9gWcA6JJAUs7d2IMWaAn0zV47qO%2Fd%2FKNsXnV2s2dkodWkccEhYz4%2F0%2Bacw1Q8BiDUvSoXU80Z6ELhJLl2bsjgR%2Fjwyuu7fLqFeYUK%2Fl1ktQoqUA5DhPzMuAMJpAmbzWGWzgx9TgqLS9AeBZTleBrPtV%2FigLiWqQbxdOf85pkVLHbqyHd%2F5TnjoHAzXWxFCc4HtMzb0ZEWcb%2FSwaB7535n2p5%2Flf1ohtE%2F79ydLZMd6FSeX8sL9bRE4v5RrfWYFaeNztYy3BxvnW8hRwp1Yzv1z97MeVU%2BNliuJNwKXuz7BH8rGge4LTxW6mKEojxhuOtKVZmG1u4PqRSnyV1%2BQffnk9KGg0oBFMCWg6YoAPBmlXydfZtme4LuOItbSb1Z%2Ft0otg%2BxUOrZsA3Qpa5AHHrqXlwXyDz5GbHrB3UGM1ZtYHH2oMI2z6sEGOqUBE6Hb%2BtzBk3MAkI1ERr9094UXyh9py6tBgofS34zTSQo48KNVStU4SoI5U2zdTYUWTyviDeKjxVQyFBV33fu2c88OFMcqiKguTwmhgcEhd5IYo8%2BFZnxo8o%2BBxK3tJxiW7F3c2DT7%2FZXIaddmzKsKNVXqF3roF6oJhA0m7uz3vfdTePv94wK8L9mpo7ebRcPT2oK5SDoGVfv2FYZfhznBloruOVOG&X-Amz-Signature=352cedb996c8ab8c948a95996809d3840c668fead0861d43f0fb7b7e746915ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
