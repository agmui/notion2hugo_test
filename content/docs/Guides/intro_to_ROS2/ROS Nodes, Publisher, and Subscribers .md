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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=51db91b37af81eee17cfc4ddf8b566f52e83290524c23f3cb90f6f8e1f226ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=bb068d95cfd27f3d9799d08e42451e1ca8f077e4a18e8dd2582a90831300acf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=f48321bcda6ed0f5b82d6700ecd5c38d0898412021b71558279da4d9f0fda8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=3a834eec1b634286839ea0fbb63bac958f83e775f5bba5d2e755477791eea3dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=f458ff779e4d6872b3b0f3e573e4dabf1c66d02fcb0d7fd8cf5eaa35810dc81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=94fd72d0602ef649156a4164f66a5f535d045918b91098058e45a084c0572219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=59837241f11c824dd56aea4dbb085cc69bc2f2fc167c211430ff80132abbedce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3JDMLH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BB6%2B6bf49cxQu2jMWeogaVgDQWFM3m7rrFU7klyHO2AiBkHf5AsuM4CNHVZRIOYlQQ227c23BklN0435zowk3rOyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9%2BBU5MFlR2KT8XGKtwDkMDmjjubtfV64z17E0OIreulHsakBQEpb2UCP0kTFL5%2BbJ41OZXtmaJEeL%2Fk6A4J%2FRFmC1QMIqW4K3Zx1UI90a9vQu2DUSeoP79D9LPDbqBv486K7TTVzFvTxgh9mWSG7yaHTWa%2B%2FJTcElSH3mOgC1YsrsEqlQVomhgEYHn4diqNN8CAQhwa6YiVHsshcGsdnxmOAK4uAOURxbnj4sy6gABrCBT%2FsIHK72zjf%2BfyEx%2B%2BrU3GHm47GOJO%2FA%2FWdNierCyojPPHRtNMlss54jY10DEFgFPnKrv15%2BVQH6bjj4GsaX7kyFqaHoooMe%2FnkJFBbDaQlV5%2FnI%2B5S7krWUJdIfHq%2FQigR%2F87iBuL%2FfgF08GEo%2B4Dvc4bT3SQxmbFCkjWzAKi7EfMDngs2PepDVQZTnwAQonhVDJrEAUCUKaX81Zqr%2FhAFqWugmDR%2BhRpS%2B6xHPjTQOxDlRctZbXgVTyUIskkbAwIoB2xZughxRyo7Moeg7SefGyW%2Bv7wdubfPFMHsShLArXx171%2F8X765YO9rhITjrFZ0MYT1xVyc8JKr5Y8p%2FVq4MsEbs%2B2mNJSvmHfLSXbmUoktya%2BLxJO1lrd2N%2Fifsd3SHaEKxdA1CxKH3PaxGmJI1RSX8NL8w0w1sj2wwY6pgFa9oIq2KT0OogrYbsJDcjVA78ruSiPtbvJfAapcY%2FFXoQyeLVBYxNB5xic2cS4qlEKVg0EecChO4oQ%2FV9sO7j%2Fg2H%2BRlYpwXL6nUcmoqXPc8cP3JJ%2BVe1ieWb50VIAB9244mFC27GP1ETKVdqX4uPVvWwfH3b9UO%2F7H7cw8sYxtJ%2FKgxzFlZjcGrJQo%2FA4Xdk4A6ILxf2CNw0IdKyBRVkQKtIgd6bs&X-Amz-Signature=4d61a39f46288b363a97f1c73a41956098f224b6b795f8b2896a5611b5ecbb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
