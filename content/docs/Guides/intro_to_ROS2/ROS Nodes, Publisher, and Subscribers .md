---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=7610008d62ef963e9121509eb0423b799774534194877255f2b6a4af7432f857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=0b7fc1f9a4e8408e919be28c8cbde60776993754613392b2c0fa4ab750b2e281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=5941c4228b924bfe66b66390aea45161881edfe8f90b53ce3c7a9a9c5f6f18fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=8381fd3a1debba90f9f2776d51816b0d47eabfb5a2b911a2e7397712099b765c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=5783b8ca8d58d450b6e66ff9b61053f8a8193460b8bdcb20ac1a50f0b0f18320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=d6d131e48c6965c8aa9588008dd39bef9c05a13ff987d90c3c12ff9f7babd062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=e3e62724e9d7aac0302288f900fd5dfa682079a6ecaaf5ed9b15055486fcfca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42UCQQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpNMgjXiL7YnZu8E3D6%2FcXgjUTO7ZvU8qVF6Ky6TDBAiEAgcqbRa7tt8agrvfeqcCgUJf6F8DZ4FRMLg5RGQ%2BFmmYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWVDdxiEGSFZ9Cd1SrcA40bEVtmsH2vcfw5Bfnxv4PilVGf6W3DJO66BI65tjPGSlBAkXDdSylxqCM%2BdFKxRjYwsyxB8ohKJQMRwR%2BZyOQjiXqKU0ucNoOBRwLbTwksBTe1nx2i4W6Y0%2FZbU77YtvjbbG7DTkY2t2mYNVsvK5kjQNZEh28zHvxgXCjnjB5nzDjqv9gVMxNE2NVQa7mmEVEssR5acmwem1CN7WWSciL9ZmTEiI6sQ7hUmb5xxOhrZutbpIArRZeKCBmzzMkUQaMbhSAHjP0NXXuCT8W6%2FaT1g93mVQJMBqX4Q5eFSGWggg5ZdKHZGaGOP%2F2GnTqBLeFTS1149gYmRbdtDwUq4R3EdTEqQHGR3i6c2WxCSK0Eai%2FxhXjlSIuk%2BnBfLZxqdxSYc5TID93lb0tErXqqDPA3Wu3qB9qRkTSEYxHBTSR3kNkAsdzEbp9ScA50BU7E7Y9n7ZHtNR648OwsOFdnd0gheJ8qKrt5JJppT%2FdOs2NzHdkPdxbeFMlSvnWuv%2BFg08rfvcYCqOqm1kAAHutTjNmmKWCYEeyecxoNERIn1rjC8pggv%2B3MaIwoa6H7CMLS8RmIOzt6bjvKodZV1Ckf0gW9eV0XFI0s66ZK5OnsWm7N3v1zr6cBYL6%2Bd%2BnBMI%2F%2B0skGOqUBMRFw%2F5c%2F%2B%2BjGrOSC%2FK%2Fc2Sz3RFl1H53%2BGLYQX7Q6Quyqe8rL3%2BAZNzL5PTuYnbqMhMcC7KkdoSMIwgT9ytDVOdEMeoomGlPrcW8O60xg85k3npURB9OYUnfAIJGHRheuLYWNrrlPqLaYCSp%2FvPu8ebcKp1rzvX7ipgI40BN1rAgdIQVPnm7EHqE9gSYO4rDNeDLcL7cScWmrAXXpz2fl8JF1xwIs&X-Amz-Signature=a322e9c5a079b9215449fdaa8777baca34cd06c6a8426058ed482054067cc396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
