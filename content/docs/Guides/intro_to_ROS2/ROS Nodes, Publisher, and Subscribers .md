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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=6327e1486eab17bf6807f7d0b351986531fa82f8370fad04bd11633181956bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=76202abc845e1185b067d441411df4f29efa90cd35fd8c2b6672f7326e44941d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=7df6ea0020989e9c0ccb106aab5b5f4bb053fac01323e81a821ac9037b37c40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=51dc10920d975d1010b600e3ad5cfcbd4423ec659c5068251f556b4e8647d47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=80f5de628f974df6076080626dac3c53345eb9b42ba1d6d84f3b129e5f7fd3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=a7befa14a6bb9379356b0072e007cfd5fa20b5c546dec4d92f2a6a9ca3fd7b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=ebaa28a55cdefaa6c487b2098561037ebbe8b33013922e30ad10d47e58eae2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VI2K24%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPtr9mnw7mtW1s%2BYvGHPifJG35sBf563NuQJGd5mUgugIhAMuN2U%2FrFrdFoG9OXvfuugm8tSMry1i%2BNcpYxJZZaaIQKv8DCGkQABoMNjM3NDIzMTgzODA1Igy7vmoTiUystYqztS4q3APMd2pTQBzt2mMDKqJ0SBG%2Bzx1rTIYhOk0KhwELEVSz3z%2BYAPNmZhR07waVPzzciJqBkarPWODoHBm%2FMBMsMZTv%2BgCDSg0RbqEnuIYfdwLw0Rw%2FZJmkz3aVf48NKU8j4Vu55Dz9Wu7WsMy%2BMm2o52EkVZYkgLFOaQsawx0b4pRb9upRxzfMJZYjL3LdNX01mSz4hvgBRdgbf3v2tWbN50BdG%2F5DxYTQKlUlEiQhX2ywYv08MKT348zGHB9wQ8GWxw8e4EAez6eMlxf9j7p8%2F7gvOjScWgxRwtmTefyP49X4cSf6GDFgxqcoEXmbsB56XpAqvSv4fNhXMrRAv7ygtNlNv3CwUlOcvP8GRE8DUSKJ%2BFvoZaImaGF12G2Ih2qo4h0%2BkVAwhwmLOOpIIMwxlhe9PswWkh3PjSVGQoT0sra8%2BLcYegp7H6sFIbPjA7MJZLG3DfeFEf5WmL7XFIO24qesNZ85hPilwm18GgSSqg%2B9HoiWJUkCbPWYJbB%2F7Beh0MxEwdw42qYOg8c8X6b5UJOm4RQRkLSGcXt%2B8Q1%2B9t%2Bibla39Hw8ibD9jWaV3Epq0ryQ%2FwbddCZmiyBo5j4%2F7B6FfkwRTpU3Qkucerv7ddN9bqb2tyPliS6%2FO5SgqzCV38LCBjqkAf8yiQLPddbJGy%2F550e8uMlDHxB0h5OmG6TiNhSijhKWFFagazhsN1tySPA1W71TSofOnFQCmhlW%2BrY0GrddfrcrlmEsyjE9TwwCJHvH5kFB7AODY8otwv4Vb2GWTElGer1DydmvxJYIEdnJ5q1V%2FS4cul5O5ZT9a1jMEsxjMyWX90dIwW5VN%2FKMHISoneBK8v1F94Y8sz0822cOp7Vfi5bhs8%2Fs&X-Amz-Signature=0806b2528c7aa6ee864c5022705fb751bbe4911e1ac39d81ac8751d3cd7d24c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
