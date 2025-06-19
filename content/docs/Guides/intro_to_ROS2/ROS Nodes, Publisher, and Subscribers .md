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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=38dff52b8ab1c3929d82abdd4af7dba1c23587704c96b57b4c33959296eaf2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=a3260253972d71ac45fdf5f852a6c12c1bf23c6cb559cb42bd489e9ebda0a247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=a4af29122f7bd32df778d486efe7a4d13075ad90cadd906b0ef59b04e44b930f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=78d02458d4bd0bbb852f502e8c8074dde6a2f7008dac52fc5684e494117a874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=20dd2be33ad6d21afca54fda5e8d582597c721b6aef4c56e091f2b8f88b92fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=cd541ba3b84f9da24b47311888480995d401fb4ba5abf9b089c581f395fd4ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=04b5247f3844cbc6698aec02d3c7d3998537d9238b6a2252157c22651246dac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCR5A6WN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRxVIqjbchUbLNwPBItorDMw2cYdBT3CWj2mRSywV7WwIgaP4ZYogtVd3YlUNT7cufkoXaYZfRoj59u6I8GLzGimIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6c0GKCv0RKCpXgSrcAx3pxpfb7BiXjeAzcjsMfuvVKcOcBcKFPMvZHxAx5oijGwCEFYADvFGBav0DfEkd6l0gaxUAvlDl5pgGiiJNjIp0lzaCsSvL%2Fbm%2BDzBdPdDSHg2p90sfNV63mDrGbqDXygMZesGuX%2BRXK2i0%2F9wq6xT%2B2vBRQp3VxBAOXpX7P2kD8fIYDPmWYLwi%2BaiHJCgtd3kLzg%2BedoSiaZoPaRyB0NRtFHdFmiH8VCQJNjfS6C8BhWEByWtern1ypjtS1QEiayfuJy4OqBjbUT41bdYKqH2QIEX2rRsASFlV9HUjj6fAeguH%2B2mUy6lPRNXwITBxqw2aZBE61nN47clbGRz8kdo0dtnExTtJWBPRUbNHfUi1VvM16DraKVlP%2FQ3WkJcjkWKbDklRyuSn%2BCSKo5qEzS8Cxj6Ow8rB6u3ePNGVgdUld7WTeOlE8xAgBwTfvvY4sW1qPjxTm8Vgy4ztqmaihyQoB5iBQFGoiO0Xlb62tSv%2FBWdM9RE6Hukr5AraAYM6B58oHyOzNZmLaPQeoS%2Bc6hUjWgbo5gIQ7K7iEWAYRADSUl%2BDCOkk%2BnN9fnauh6epzcD%2Bt7irjUWVLcMG2DfDXMTOjxcq3QWuVQMFysSuJ%2B4hH9p1WKsyjsLEwM0wMNGgzcIGOqUBbwLz8lwnBPFPQGz4z7WFnb%2FCo7gkayN0zEAP8JNzuU0UPVCNeFZ91tfV%2BIUqFS5A2aX1bm63dfOvr%2FL%2BCHcsYb0YZuGLlUArGhYWV3wsNft6kA2XzQD2usbw%2BauIMBFqBVt51LazUvDV4RAMSTs1ZyUNDYhL1WoopOG3VUkW6Wkd9LN2pX2wyLTH%2B7NAXiwy5BN3jV%2FocRnsI%2BQ%2Bryxgf8F3EtyI&X-Amz-Signature=66e6a84e9ed9dce82c641eee9c4bb244a27e7091a7acd5ed7be0e5df99c9c408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
