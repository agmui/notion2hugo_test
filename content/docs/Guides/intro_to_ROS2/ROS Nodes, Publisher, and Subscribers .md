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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=366d9209fe26a80b593098115c88a70038a06f3552af313da498de610c88979d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=6f3a6a8d9d9f02f4176da04f607f1dac75d0bb19c74102d833e164257dc8ba1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=0e8e8f2bac9aee824ae111fe3af585a3de18c9ba6584f2a19bc1452228b3205f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=29fde589e394d4a9831ce7ce11bd91b54f217a6264695c7be9107e1830e69385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=c4a793d05fef4eadca527fbff72db23d18de0291cbe937b43a82d298f85af5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=233fee77d78bcf487c4bb9a0bbd33c5f6785cf864cb3ae3d100f1570b3e2b1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=294b9a92763b9e681242f902f1a4777c25adff274450c56e913de6124f7973f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTMY24E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8cnBjIIHacJQPLXShfVxkQPIZp88qiDxUCmauj9OSlgIgCXn%2BThQyGK33shnUWMaA%2BL2Bz%2FPm%2BsbIwKtQKs2I1lUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ1IEQd8ot8ApsuvCrcA%2F2etJpoRUDi3YLBg%2B2tX0ZqalMDXoRdsJjTpqotyPeE0fBTtSbAK8EvBvY%2FUTAFLijnH4%2BZHlYn%2BXpOv6Tw%2Fr2R225VKhTRRVaYqcNutPvXKj3fFuQn2Cp%2F6T1%2BmKxrzHvTNm9NZp8MT3LpSXbsX%2B%2FIpQnucs8DEALtBQLkcTxyARxnKtAavGcjAU7iVqO4K7YFPnPl7iIViTFuUYlJdG8xKzwjKpJ4JMYzkV27aEb6elxk99K1DJa49hKHUSfI8CuX%2Fj0YC%2BWBmjWSwpeb8zUBwPPvcSEbP7YRfMuoqDKy4LWR62qOGXya5sOLuDHNVLzRWKU2QbDKYCvTKPQAcP9a6xg9O2RZSoRXpk5H15t53EeGQogdbUApIsnuXE%2BsqAd8sYIN4FlSXMAzsN2p1POhVY5QS5%2B5L5K4dHkZ%2BQomqFnx6RF17AqH2larpvWcFyLGYBG7KcMsV%2BKAFP9%2BsD1EGZMBjVTQwsiaFWdZXnzYqB2Tq%2B4xDaFQjnxpGlsBBrZYAd7IeeGURNlo4ey7fLY1tqxFH%2FI1JNuERcgt%2Bsr2Ppfwyfc3tdVsKQlN9yq7%2BJVZl8kYmUUhZscngvkWVbyotBT%2Ble%2Fxa4TLjPR8k6xVxRtvopMkUhYLi8DLMPCTqcIGOqUBMlO0Y2xFrdIRamXK6HigIo0POjNWxzrZ1yJVP0GJnrY9tSzkzs3srDfBfmDVBF6QARoPPZBrBhAHBuhpsv7EaFt6LeI8Z6OEjmmsY%2FBlLWdhczWjpskoZLxDIVOLHxbBIOR9JrXlEC%2BPTOaCk1deA8%2BbtR0Nbs7u9sk%2FMMoBoPJ18lTmaiRGPWMbTuRC3SUtXgynIWNVfrGF%2Bh%2BuVl%2BjzjMKWwvz&X-Amz-Signature=7c4c6670df228956d5dd99c481e8fa6e2832ccb27a2036d1cf1194206940164d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
