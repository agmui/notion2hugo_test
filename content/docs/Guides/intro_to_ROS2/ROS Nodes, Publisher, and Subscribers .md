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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=1eb18bb8ea6163543f69bed9769f5a93b829a1308ba75e8152965cad115f1ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=d22ee8e0ac45fa7a3ffc7b0504cada61f336aae9b4841839fdfef955b19a4279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=68e4a14ac27e2b524f0766b762e777ca319fd8f75fc19b46790719acfd1ab682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=23bb86a380180bbcad6c6b0399d5b18561cb9113513256a6feb4fec038d3e666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=8967652b8c9a6799e168f4d4cf25aec990b20ccd6074a4c7179eb2b75826f7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=52f8d03eb0c4fdf8bd7542bdd7651ae63db9eecdf2730a9684febc7ccf86f440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=41ac7f7c894511b88c32b9b979ca9cd4ed833748f9be861cb9b8cf630f10dfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJR2GCW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDDxMnNauUGaYEBUlzCvatgeJN1W%2FawJTA3D99MWr6NJAiEA4ikfbFhOuuvEL1NC2Zrz%2FqH5F3skCHRf85g7nBt34dsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLLCzjiVBtqe7AAEeircAzij3LFi2xqT5DFgma6cLgxHG4uAjtO2yH1mFDEnWc2HBqCvjpozuJ9U5SSFRPl2RY1q%2BLWz7SVCQRvPCAWIT7XmuMktMKtJtsG1fK8QKJwwcyNcy07grXnGdVpGzlya9oHNyUseYvhfvXsJmDMDhwwi%2Five5%2B2DGtxV7r%2F%2B3HBV9omHwAz%2BMQzOqb7Q%2F0gVo7ZkQJwpciPH%2FFDocHAzqNzmefpt71J5Xam7nKK05PqfQxCADRTVgDR6gdYHb4JhSqL0AuvY58R62B2tWdQL5lba1ywDSV%2BT9BMXaGpSNwdmfdq%2FdnLJbRAOwKeLBbH8dytGudA8EeyqZOkOBFDLC1KzT%2Bv82DYqcYzUxi1t9Kea99vLab4PcbSAxoGt4yLmw6cAyAPVTNJlvFcCDFHcvH3HzOIQIpQqc3ULn91bxI07Jd3BodbpeetWjos2XNgXTcEss6kxIJNYxwSWX4IusqK2I2IE%2BSKrjNgq6G5sIVbgUyFCFpJMugCqJRWEYGvViSHHafW0VYRGYTUTHYGcfi85UzVO6sxUadQeb4naJ4c1DIc7%2FIQzd06PUIQ3SsaQZ5STvlbHeDAuDLzoSRKukXR6JkyXCrblMGtHSHJUUJFqIvXNRL5ri69tEUTYMLSOosMGOqUBquiLGG3hRE8kctT9IG6jIAhaR1bgjAY3U81eTfMcjTXoVqKL9AkVexp5Kcy1NORVjhDamKTAN3fpRaaVTBX7zveNOQNS%2FQDRSzNFE46KfbhCSTlppwmZTp1xfEKEzdVnYYCdz2ER%2FlOztzJDJe27UXpUx4aEZt4oFP%2BJ1zEIS9Awe2SCUvHMH7PSb6zHKRJJUF8ZWxhdHMWWmuo3NK8fEd7T7enH&X-Amz-Signature=25771f8be6ac8ee076cd37d3729eab64974d3f4da80180932cfaf85ae71d1e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
