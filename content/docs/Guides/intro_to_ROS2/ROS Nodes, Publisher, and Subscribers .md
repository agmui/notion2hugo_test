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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=1f42ca56b26c80577e76f999f5889e1378f8e72861055f13eb183a8ee73397b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=97ba6261e7c6f1d752a291b7071f156282e36f0923e26576baf85df0b3ec7d33&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=f7ed3c66f816efdd09c250498e9f185f4ec3283feae3acdde3d063410b2392bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=a3402a4982e4e97c27e414f82dc06e5e31bc19f209e30741e8e738dca9c6565e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=1492e5a793501de6ffdacf9020428466e26ffef92882b0ff716ac2c7361b0143&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=ec3f466340dc2012ec9d91593cef2e0348537e2588d94446ecc4d3d011ee77f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=e157b421457996b7e003f975c5211d85ee74fb2487eb657d711de560313e3f65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2PBLDR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnibi%2B9Z5tXaIFCC9aoSBR0HZEhTX7gChtwaSbwqqivgIgQuLhazmtaV5%2BUxVYItR5ykVpZRLfD6hkKtbm6gZ8yIAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHM%2Bt7HUSjxiDevrSrcA%2FqOXw6WxclVVjiNB5aGgFcZDIQtZVT6NQoG%2FqIyPhDDxi0Y9zYyGwZGYoVKWJWuhSRhyCGHA804f20A3qWUoaJrSs%2F8J8LfmVsOFdcc1QYjG7sShHNzOJhwCiwOTIjPx%2FlzthQM78YmNRQy0FuP3mDVYpxAY3AGzwDTNZDy8a6HVo3FqEezfBwN8oPcOjEkcfKv4RIpkpbIkaEe7bd6EZM6%2F%2BYVa%2FKP4QOPnACJe0M0gqQETdmZjz%2FjaAvIk9aU7RgWUaMOnfn5VCPUJ%2FnLAnCtXIbPVK4pwRhw%2FiohOBT4E1D1CNinOW0SWn%2FezQz7BtEKAmDFpuedQRQqJX29ffRdZsXmQSAgMp4eB6CbtQ1mXL3BHlhYwPCGKLyq4XwJAVoWFVTQb6yQgdsM%2Fd4hgNS3DXl9WV6M8TSwBgFWVADp8aAITPEHyZTtUMtB0ifprKtCY58sZXRqAMl%2BcQNHV8yCLSjzBS%2BaVvKNk8SrxtgXO4%2Fnv%2B%2FFl%2FaKL3bqC6kPZwCs6j1BYsiQcF%2B56mFwnQ8EpKcRLnsxqJq1NEpFvra98NfslrFpL3oV5y3zMiEFqf2T37o6H2mIHRGfLUH9JnIsfs7GmYUbDN5wa3CrtoIX9zIq%2Bg9OoCLGsKEzMILGz74GOqUBSK0pzRS9TL1qIFF27dqC3o8tapTvH5e5corzHg5XrfdpOyCY%2BgED8bUal7dgRxjvtXKnb1iGhCWJl6k9f%2By442cSsbE13UO1INJapEKuMXWtdnTdy3uFX6HpD8YSyrKvOqmzjGHCKdDpXLMTb1uw14X2%2FEmUxeIlpCoicSNnyKFkVhymwgUQ69wPt9SSyd4QiEZflqyvHOtKHHYagUB2VLFGq0dH&X-Amz-Signature=65ba8ca8ec8bdf53a8e1ca81dfea58fcd9fcf132e8ce5d431a87356561aa104e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
