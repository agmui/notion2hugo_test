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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=5397eabca7319b2465799570a052d922ec44a591426f29c7f8576495cbf3e3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=030fe63303f5821c1bfdd3b8f88727c608c86a478f43d2c46a1eecd60b689290&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=ee33786484c9a4df9853b9326045ebf18bbfa7624d5e4065f3094c7a071af6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=f0f6d0bf73426b2aabb67140fc599996f6ce73c7d425eb050f55484f8b3ce85a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=5f5a8ed17f884679ed545d85d7cbb1cbea4aafce9f4dac95485aa2534c5e1635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=1be4bcc57e7cd2f065877d62827c5cdbce7c577e70ea5d1f2afbef892e1ea9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=ade95837bc64615c2cf39a7f63ba7748928a1dc94fb568b806fc043fdbcabc45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICUHKQ7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtndP1E%2BR5FArQ9oP94K9oGKKONWngiceKecZCWXJztAiEAs5fxD48sp6VBEFmz8PjJuC3teAT99SYmfuXgmNBKnbcqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXhnHcQnd8F8ljeUircA4ukEpIudexizy8T3MvWxokuYPLa7zHQo0vfucaJrSkbRVwQdQGt30Mki84LKHsVDVNqZ0L6IySiJyrsseqnq%2BBCuclYHNSqJb84uw4%2Buv1vBE3eq9jfN0O%2BUVV8iUA53LAFiO5atTWCBuwN%2BpUhrC5k45WZ0efvsfT6UwB0TXkMN8bVQoheU7aBOrI%2B%2BQxyENb7Yt6wphtaXNhB4F79yXV7fkZY%2FAXfzchOc%2F10xYGnjczR5R7uIHuegdBmh8mcPG0TF7xuQ1i3y3esy2SWnyhzX8waING9kfRwsSRTkBtsOsEoRX7TUn85zENure%2FGBry%2FstXvBroL7NUUCxPOVtjYBmUZHL9rqDHMHDPi8KGvq6AzORDu%2F9aoIEraCyhEsPaSa9Le3A%2B%2FuGBg6RmfPldBpL5AvazPXOiXgbV35EQyExDBcuQDKW%2BTivxemYXITzRg1TZfh2PmPmdNFa%2F9aVFIjYzJ4MN0ICXKDtEtPZMEjhuCMvkPkRz7%2F8sUCnmn7nYnJsuOm%2BCKfoA0Iq6GbIHAFaLmZGcmlnQTwV6v1nnGre9ny%2Fva6OzRvpWEKsGjqiiRCsumAnvHNT%2BEaCQtf2AvBbQoIoO77gph2Eyf7Vc6q5gARNOVaKWzjNCXMOG94r0GOqUBzLJ2xJFGTjM3RXxLWFJ5iPAEWw%2BxmhDnjmz2zOFZmP6qNMd04ztp1JHNwa%2B2KDDSfjrA8T1Ui9qxOX6%2BmAI4Ravaz08SdYnSgFEJsyHrQFhb4OcKE5eLqt9i1CWIEdQ9lMhDhURbGDC3QovZR7X6SIMWWB5iJ6Dz4ZNr0hrT5SWQG%2BQ4%2BQQRbO6j0%2FSZ1Dt1ZvYBwPjDjHmy1oLFVKLXYv3UnfKC&X-Amz-Signature=acaa209c18d5d2b16782f6018b7c6b1a3e55f4f8c19cf2b149f6d61e0bb81aec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
