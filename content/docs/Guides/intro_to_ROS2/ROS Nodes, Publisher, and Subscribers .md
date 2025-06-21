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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=f27073b90fdb6d563a99a10b2b6804401a44fad4d4375993ecad7850d315ca4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=ac1990abdef14c1dafdcba7a72276825508fb7ae61d6319535d96a60d2dfb784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=43a9dbfb2ed890ab5d5a6f1f80e14bc61302af9816af1eb2be21ac50dee878e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=c9f21433ecdd7238a3f8d828ceaa5bd4805f70215c5eb2426884b8621aabc3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=4542b64b051355ff7d5a27726666999a5d7223962651c44957fbd2d4ab3c4b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=570e882a295462026589d2b1bea01db47697110ce3bddea7a524bada0d3ee549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=322850d53613ef0dac6db83b015ea600b772930a4e1616d3615023039e892bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERMBRSX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHkr0lZDg4%2BwYyvA%2Fj9gqhoAq3ccGOKAW8ZQqHuBlIzAiBkmSSUV%2FyF5YCTrvHl9EM0t2T2nNoqBwRVmyxM%2Byd1iCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj96sqpgzDqGE7D47KtwDs%2BoVuq%2B7o%2FdqZXQYWHtespd%2Bq7kvjU%2BNVy2N%2FjPwIKuVaawvEi3%2FlCZAT0CBKDeEbQ5fX9DSnq2l975MockrEJWwGqzyjF8T7B9pu6374BMoawgfQmmwU%2FUVMzbvn9uhI4HAHy9PH4um%2BpJIxmXzPKXRExDtfYBuSVlXh1QQe7pvq5Z3On0M7LbmbxWclTLIPbqfcmMF2kfhraKcjgkTLH9yqLhtXEUXbcEQwh80jxtActxURIB%2B3XzJpLddyz0pAz6GMXcO5rGuOogKn3mogWgj%2F9DA%2Fr7n0ZC21Eeuq3dYkNF136fi%2FRex%2BNNWnKk7fgbp9S5ZLWqvIccTG5jXJdEWRN%2BGIAZwgdip0OHymrVOI%2FlamEUIH%2Be3HSr1vbUYystAb%2Fqm5rN7XRLRlj39M6P5EIkfbZWuleYqc23gWv55UBBfMyhgsqcpcehplJXkun0UXmdfC0z6wh4kNOUUx6BjbhfApJ1bVutW%2Bo8wCzkQWWT5a8qYmUTeFXD5gvFJ1vm1Dp39JsXaG%2F5pYI%2BHkRbGniJw9Fzri9tPJAy866DvpQr8rtyNq9%2B5CKUv5deCf%2BxdjULwwxhe4Lrw%2FPHRp1zkIgyJ%2BympofA3wxZwsRDl8Ao%2B5Ce9oO5zbR8w86%2FYwgY6pgHNkeObcLLos5cZj5XXOYwYEKCKp0zeI8gEF7jWPywti8NeXH%2FQESOis5f%2FSMmy1Omx2jEHGloO4EveTn%2F0C5rA7wNiKwPgS63eCjaJkVRSRFFMyJZ%2B8xLSDwEMkh%2Fqs%2FvwreRTWPesr%2Fkro47Mplz4b9jOPDwBpjmncVdGb0LI1Lf%2FWOEKMkENGKAFzAttRmMH4kZudbpR2HYIfr4G9MBsRKaPnPLT&X-Amz-Signature=38f21818be307c0d29e8bfcea4c381f8233227c9c3ccb795fd104cf6dafb9e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
