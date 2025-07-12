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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=02972378403ff94e2827f8134821794502f651ba3d563dcca8a3c611981fcd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=f74586020486c2153c613c5b162d49c20403d1251247ce79cb057fea3f11837a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=8160791ea1f0aaf0ec1ab42990d97907d91655ddada1800c3bade4c1ad4b6610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=577ece2a12cbac78946c814e6c587bf097c994992a19369ce932de56d9f4f99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=b94237a27c72c0b41d144296c4694dfae312eed5beddfc2a35223b34b1b7e095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=4e34cfa7e8cf3a969757d28a8df1c80cce5e5c9645f966754fc7e99837b3ba12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=092f54a1738721adc1d41b1b9c4cdfedd3a26ef06ae0017e5102eca617e5ec50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZQQMPZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6kD5W2DcJ4gOfitY2TwqkbAkMZybEhWwIMUjJ5lsEgIgUxnehyAZu9DXaQJCuwfm95OYYx7Q9DVyiQISdxzQ34YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZGXsAXtF3qP4H%2BvSrcAwsZG7sDxnqe78ZX736HsUOmS7EVsEyCYpd0tST7fsT0fK2xAElYsNZKH5C12JAOdKi5LDlUPcVW2P%2BvSSBXZoITDCNvzexhTlAYCHdQoPn7fcwV4P%2FpoCOFNIQg6ARFbptvq5%2FdjYOL3CBUcltjDbV2Q9KYqQrSTqmlCqABl6ehPd7y6pKydXzxW5561fCPfR9mRBPEKhP9rXsxuXdORiN5YbyK8NM4EuBFjypIW0%2BaS55lSjN5JL97DgK%2BEQMlHgJbcyExQA%2FGUxIVsjmgxAn2TNluqxcoGt185MZLTcwq9RTywS0mfQWl7xpFsP2afIhasuGRAJv3Iws%2FObqN4tWjVqiHEChT7R0z2fUPRLQFI36uoWA%2BVcxVSUI9eb69rC5gm%2F31aS7YBqAZpnXpRDZ2zOlwd%2FFDnNlZlCuGgbsBBeT4ZwujQZOeNFWH9kj1zLoK8zT%2F5pzai2aFnCVDDLNVHq1%2FdruVUkZS1DdE%2Fo5XCOmaND5ADiO65Z4gkELHQq0btRZ567VGYi9%2BxC7hwozcHqAiqz85c0XWPlj4oFmcJnMK03gmT2vqHHxflILIp%2F6SzvGdBc0%2BAweKQD9lE4FLZ4duqM4%2BaZJxUluzWyf1m6D3ASTe%2BMIDdkwIMMf8yMMGOqUBBVxiP7dnqubU19mOBv6ELSn4Al4Ox%2FM5c2BuwrX1FLtjjp8M3HhaRCZzpNq0C2c5AVD5arQU2B7HzTiKtmG9ZGd5JbrNOY7CdClF5KKth5PLP8VlNVgUSaZj9pDbSn%2B2ZC5435TS9uYpMM30nJunwfCxyNU9%2FmKaOQyfjIXDNeo0OAf3dSXdedvu%2FeV6Vw6u4PG2g4xKce6o9tbWUp20e5jHsCJS&X-Amz-Signature=df99cbe83b6a9c5bfb9d7861e4d41d576fb506eb142619797d156f9e07aeefca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
