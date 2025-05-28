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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=155291b2147a7782cfcc32665da961ae98a6c37ea60949e39d6a7e7c81f551c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=b064db7e016fea76be21e7c5493bef69d84f3a8d79d0485249af01f967d44adb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=7b3d5f058812a5576a1073961e76cb887143fb1458c41d8064e5b736c796717c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=6095789be909bb587d741b105ad778f22b3009083eb1dfbc68018a881d0311b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=180e12b6fc24da00acff94627267b836708703002ecaf936e22ad95e3d481013&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=84cf110d3b330211b9a0e8773e3544f98b90ec08fd30dc6b76ca4c221b0db3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=f01c43858be5afab26773a38e400852bd5e55498435aa3270cd4f05f8ade826e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WL5GEG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2TotNMUyLE5lil3I04LoTf00nnkrgQTMN6Sx7Y0%2B6AiEAvaQEZdGSGhp9X212ZfEwwCBIayNRF9Nm%2BqZK5SidvZgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIafnwewl5YjRsRRcyrcA%2B0xzTarhihBXX7HXcSfn9un7rVIcJqLoQ6i6xIV27O5mDbrNGEWdzdHuleZ62W7TmBEQVvX4a1BC4aRckmj2Lqj2qoq%2BKWTa8oKmqq1lTcJ43SmTUqM%2BzMgqHoq5Sp7Y5ROsiu6Afq%2F90aRAAyRKTXV4mCTFZ4M2g8XQ6tIbeTzPGC66yVsMJ%2BYNcL9DLyuYnNBZ%2ByFv17kFk9yH58Hne%2FOTwFm3yzCULi9Sd58bETUcPDnOWDwwXFL%2FB7jjhmBMeHMd1Xc4kCu%2B5s8qxhEzPL7u8Rz8eydDBvimIN6E3S3insEpvHouMq%2Fp0QdFZ3tPrGUecJCur2fE1pab75ak8Y6j927Wd42LRp9LY0odhcy0omBN7semS0dzveoQMVHCG1D852PNagKCowqz2xl3bgdIqctHH2ViY2OOcegBA16UlkAd%2BN%2FYAehWM4sCrZ3iFccKXgC%2FA1%2FBoEPEfwB8dLmSa3%2BRJzh%2FAX80op6wTWVOwzmIdQreD9955JnA38diDqBby1bsEUs2wZ1dTwZJRIIjIcujEI6rE9HP2s1sP3hMQB5X77VHnKun9ObLWSjBMjG00msGvn4w%2BatoBTzW3I5XLAbtVdckG2SbH83xhpfcptdjxQY4W%2F%2B8u%2FAMPr33MEGOqUBCUAq%2Ft7dfBsIiJuN3qQc4rVFIjAq5jh0tOKtr6A6W8Hwk3zoYU9ZiUC82H7s8wkGmUdJtuJCVRcaUeOhUE4KO%2FZQtsgGa5xXGXd0Kcm5FWMig4DLAvsXTSIB3S0hQmBR06jQ08e9NvQEHHlssfx4%2Bs3CaH%2FpnA7rjOaq7fxxFq13NghxEldDkhopKL673aqDK5xEhYHBh6ycZq5M9667OmTNsY%2Ft&X-Amz-Signature=90c99126c41a9a34750c444789420706ca962314c8e9dd49643eafba55a1c6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
