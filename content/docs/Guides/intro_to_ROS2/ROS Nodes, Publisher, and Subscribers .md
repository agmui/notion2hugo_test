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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=c2a0b1020726d13eda1c3e805790c97287380f3bc978c74e84c8a65bbba55eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=182f68ad0d56c5f1b9f01686f06fac0c102a7d0b940de4f2a4705ffef5666dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=d6b5b8ac1ebb1ad5e1cbaba2e7cea2c3470d529f0e1689a3149a6d7a299d5d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=722819c1808a5c81ac24c1994359ef5fed0b74b9c0dca4e4894202305aa44721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=43f250a5e01c45caeae58c3e775c3b13219b33bc6fe40162dcc40c5d9a78870b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=32d25bd07ad8d36321a8935cf69995c0255991ca62319ee6dd0058a08e234a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=4a22ba7c4631947133c7428b5d0ab6e976d9905af0813a57ca0080e9f3a96b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV57TE2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeDxxgKs%2F6nPMlKD9Q2lBryumyUBTFHpkSYYA%2FJzhjmAiEA9fldvObyw%2B9yG4yJTUU%2B5YVeYdZcRxnYUr6ysmTCYtcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOiSQeLQIwFyGQRsyrcA1xbkfoypoUCN3gbbboKyysQyWynH3qeSszR0ue6IfhVCUprLvvozN32ySh7KOHfx78hKqW6xylthPrmn0Gigz5LMm0dTmgrdldYr4f%2FfcgxGt4grcUU2sIGgbcwITXMNehNblRxT3tzdLNgTaFUDF3ZfAXNyQ%2B4drJKAQNUuxBq03fGYRkPQ9FbSO932TpVl5vanNVkpggKxNN637cUTu7Zcq%2B%2Fn3mokk9M6Ayec%2BTk0mMLajJOpGZHCsKPsdMO7%2BV%2BHbOV9T7tcPnK5asNMDdv5YgMB7TK46e%2BekphaX2fpvmn5VWgV4Apbans8LYFvDQHNcKdpC6gWKZjpgZhR8uNpNReOJalUlo59S5sBHZuQ9BIYTlFRYZ79%2Fjp8fRAxvDc4FuPzFvCePwFtP9MKbt%2F7wZt1H5bk%2Fd58cl%2F5J9nRveni2S9i1GB0b19ynqLhimntXtPBSDNXp1kes37b%2BYrD9hrKagIud6%2F8XSUH4ggZnhM448Tjp9sw6BABkQFl%2Bf0zUXdpM89xM3GXbh0y06P7hAC1SJ9ZwngxHjUE1AF1gLxGlG785Yish0nO04vb3m4wKF6vCmgi08Swmn4DtqvHQlHm%2BIQBXT%2Fie6%2FnXmVCoynqZ6lvlG%2FqABKMNj45sQGOqUBnO9V3fAtHqFrB4vkIrOEmkCCPs4POTgMfjuyHN7O1L%2FSbjKrdhu23l4udqfF%2B47wZQt0leoTbUyaU8x22FRugjYS51GQldm%2BFdAFG9LyNsasKXMEYO%2B6I1QwRxBG0SCT5nicxu6ZdA6M%2BykEQaqjJ89xUAyVz3HHFpwWX7Me%2BzYNr%2BhWJmrTMzehQEKtGTDW1MM91ygIkjzsGgcvMLKqLabJEHYt&X-Amz-Signature=53d6de70960d22ba93acee84ce56e2c4536cd55efabe08fc7a6ac28034a382cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
