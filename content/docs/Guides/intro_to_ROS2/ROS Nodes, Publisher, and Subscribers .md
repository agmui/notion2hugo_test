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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=8aa70b85555448cfee0f54b823c58d4a6443911491ac14abdf50821f90e96c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=3a56bde8382ba80c387de83f536e3456cccbb11cb1959a9b92350afa5bda366f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=b7e34a7b2b294d8042a4ed6d9800fca73bb004819920c09093b87687216ce6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=b299db943974ac3db648e94dbae5b399d663ff80182f6b66c36fcee3f6a84b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=65c9401b306176dd441334bf160a310ecacd2f02232f1965fe78a2f06b97bdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=8eb22b2c059bdd41a3820699f9c55923b402fcfd2cff8f394f50d37c1d59fbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=a7d58c8283adac2c68f5ef724ef4608668b7cb9b946f0da7fc4288448e4725c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETIVDYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAibej%2Bqy%2B0yH0cZq4bpWxtJWfPMFrIwomIXmJ7lD1qwIgIUDYK6cPKDdsdt5UrGFwO6WJCcw9oxzudKuDj%2FRGbzAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDid5ajAwgzrJZn9kCrcA%2BEhk86sQzaiOQwxWHmSpCj9kAmj95prd4POCSsuN8WCqMdz40NruLgDPaWVIFE5wndaCJTyNuLoNoQQyB8EyffdCesvo4oEo%2B%2BQnPpf6bdV7WghjsK3C9rhRpoBUNQcgAJRS%2FAFHlYVhxgngONK9qL1tkuVzYySDkpdX5Zay3ZjrpZ9eT0i8nAttmnSQXbF8XEQSFX4mfaAJ4DdzZoU0J61z6L9vWFa4rngG1wRMfrlHd8N9wxY4pJbNT8i693K4H9ZQX%2BBn0s40LZUmsZRVBJ%2FBJ0Ir%2BjEZ3Izjze9U1nzANe9%2F8LaDywkyi667F%2F9x%2FIpawhhaOgA8vXvaTkuIHK7PSIdok4u0BIvMToBKtjWIwvKYZc6sOvFmv4Hb0%2F5OiEZlUF50V0ccT9vQ08SLmexgRR6azt1FOfAi9w3vGvYbf07uTEaVzVXld8XspyhxhyzPrjztbwPGkCEQsYjx7hvmiAiRGCAgS9bRLUTOnNCXdkwfLJut%2FpGpa4SOQ0BHT4TzHr4%2FNtY921fGF%2FerCKzxOqXRdbfjJebtqPCvElzRgn7CF9iKEBoQpzKMOnRCup0Xp9WER40OKhRKe0jsS5nJ1xHDPF%2BnZciDITf3kcHHxxMqs93Bmy9C8duMJKI3cIGOqUBI0sqPSqTXDS3pH%2FrOVHePvSLyUZ1NZfgW%2BbVsJtrAVKfo%2BdFJa74WYdBn98WGt863kEWf%2BxH2kvaPlItUx67MMHbgTqTeY2hWIxbmnxxlLJmTSI4I49tcDeQtU4bkCbZoEZL8i4bIsFsdkeH2Wamr5jWPo5m%2FmDNbWPxHA%2BL0UMc6Y1z0IVy5zbumey2WIoKsEuEP4QA51RkuljonZgc7vZLmyVY&X-Amz-Signature=8f4ba3fceea9ab75b3f9f05da6e3ff6e31d48f8045208e39944535955cb771ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
