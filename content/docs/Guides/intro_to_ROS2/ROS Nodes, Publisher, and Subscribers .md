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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=09748705501b8d541a329d79cbfc147f3c195ee5ef52aa7465885997108e0e99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=b3c57c1884c02103dd0ff9beaa57990172adc8c0c7933c6234752e52a0d149df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=0a31df6160edc028bbce0afe3535658fc6276622c98a1a57ca56f87460c1435a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=4f58e8f15684975f31ccb003352984d2d9763241e1e3e307d040250c62a149ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=ed8172780c5fd91875c1dddf47755c18df8d932e0315274dff09f223157254ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=02ed18890c63624d2d1c57472a06097e82404c5144e2721669d05daf59e26259&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=88854fcea8c1f5bfeb5b4b3525aaa6daf51bde09e53095cd6feb77e0c21bb305&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOUCBVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEAS96ob8AocBXX2ARFhVea8gNzHe3a9wzeVi8Nc8SUOAiEAmXH5%2BRKxt%2Bqq3UdW03gomWTakPs1wQFwcfmsZhWpcXsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv65%2BcQcbgMhBh%2F6yrcAx4r8XapBbKY0ue2lZDEuOChG%2BmgFhD9%2BN1fXEXn%2BVZxXbP%2B7Vlz3fy6dCTIDf9wl2tbbpTnIZf1jLa1%2BfMw90QI%2BGzOjCRNFJPn7sUVl1Q1W8J6ikHHFONgl%2BYRyE%2BoWIsJHD5rdSbW2Wpa0W7W8Urg23DXWMOQ5nLsPPGCsBiX7FiDV9ko%2BC7bHjFi68sxGH1X0Rhc4Z0fzazaFp7TmRZvZ1jb%2B0F3li99%2F7aLoB14FlSfyi%2B6rhYshukPmuYmotOrNJ%2BeGpmYyTOUi7sjODTLpHkL97Mdo8fMroGtYAlCB5i3JoHlNg4fDfqf%2FxD1Ub1F30fvfwZu4XF%2BZ0kNXM34CAjmutzZuRIpizRszAz8zKX9iVDOKyDJsLxd%2Bi%2F3Xz2Mu4WxTmTWAoU9FdRqtJyHBDFycTzKzp7RzK1jOlNxIBs3upbyiRPr8imbo%2F3YP4Gg9%2BqXScJpKWGVbH8cy%2BWN7E3CdHW6FexyWTbgCVFDGGPSfa2gaqk6GIo0pEOi0%2BP3g8b7dRQHlvPLTsVVsyDGRl3%2F%2BOnBq7ZVALJO%2BbiRvEHHqukW6OKwLYePdgWSwij%2B2nheIm5MNSqdOwV4mzGDbVuVwiQ5XnYKr3o9Hl6LA0Zthl%2FuWPW1f0pvMN%2BLiL4GOqUBM9MMPrCHyNhHMjftRB%2FmLx5PbR41I89hITNS5QQGy7cEdtAPMYjd0h8kz9BBXwFXVol%2FnP3CEdif95TQTUKJNhxoQg%2BW5SCEM5gpnc3rl5AN1QM0SfNjv0mMPDcJ0Z2Bbi%2B%2BrW83TtYSQlMUHh%2BhyhEp3UaAbBzsbuoZfGJeh4KtU%2BERLS4uZ3Na34Ks%2B7SNtd0cP2VvgVktiwpx8ztp04oISvN2&X-Amz-Signature=6ab043f810d13b61d5dd253ef064a852686ff34b0bd71775e728e0f9f3647c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
