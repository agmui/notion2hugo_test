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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=3f06fa8f56c7074e83289bcf9aac7263c6b5cf16c4298f1cf1271b4a48ab9e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=fee3c6c86576b87f5f97f1797450052b425222604ae1cae2a5669930923970e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=f75b48d0343dba04c9e582876715b0dd7b0df97edf12e30f993ba59d925506a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=d0eba047429be52d7047b48a323a27a8fcf0534ee7e3aefbf9f9539f8077256c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=dbaa1c00d376b588675bfd8bece53711f8fe752feafab1a31ae661189760133c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=f30d79f31be41595df4052910ee7c49a599faea7a6d2f59a513d3d8703326e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=be1face34351335f872defc767f03ad470c1846166dd0c95dec612edea52dc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQPUBKU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIC6wDuMDEY3tslNt35Unu4XcN2DMcz95%2BjZX91rJV6AiEAzOvqePGmpOphIksx7YhAf6vFzAgQ%2BB07TSQ%2F7VZzAVsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7hxIdbtA9JtjGoKCrcA01SsowyvisqQmwgzuSc66VUcgci0QVxnnJBNjifOwoqYR9fH73uQFdskmOUzVUMPtXuXOdJ%2BGkTl4OBgexN8Po7RNOozMcaFy7rp9fJj12%2BLRTnLYGwKKAcBcdgffrbQvxWgkwZpQ72SrvF63cTYS3tl%2BVuCLVy3bQTlLBI25YjgL3XQqVfRAQot0VDCTpMf5HUDzI6g33RHzGg%2F9Qh%2FOpQnjJA%2BSA9GtJeUuHCnrV2Y70zS14i02VLkTqqZSnz6n74em2qhq7vaARC4RZ6pC%2BnQtCofKxkN8YsEJTxgt7yvP1LHwog6x47%2F4P%2FHUO0G60JVk9rl72N6XPXksGoPjDTGmBIgbD8wDgVdDlBxMKadiMWqGtch4kUBYg1IxipagggWibO9qMX%2BOiL3gdRf0etjLOvETAQigcKG1psfmZzUz0qQSPGlA0G4edzkdZ3dYF0kFmi2%2BbbbPNQFTAqoEg5yrtR%2FHpefobGm2IcBlMge33sKx5ZfjGd%2FObToaIWJYJCkAoJIqT8Vpg%2BalollTRCGmRUz2s2Kf%2FEFpun12EJcQMJIURO9x7p0Z%2Bm1QpST79HQtC%2BpJdW%2BHo7Q6uu5Z1n9cxeG391M53q%2FNhT1uxBQppk1mITupazj9%2FTMPC%2FscQGOqUB9iWP4WUlFM%2FZeRv7PTyS79XNDHRpvikAaEyGC3ifGNTlK9oF3l9zUMl7HSoYygJjlBwtl%2FgfHC0tw2qINyQBfoNvApzW%2FqtqVphSGdAGf2%2BRx7bWJYQZn%2B2uO3zBfgGYG7yO17%2Fo65msdcdYauk%2Fgz1WaLDfbtQ6Jtbv8pDePb9IIYDuE3ZJpiarHoC46nXBaSeWnpvA48S1AiDUxwGjuZj5jE4r&X-Amz-Signature=d32ba1a8c1d1ca3b46e7efaa6dbdc6d97284b520b6f69546e0c10e7b32082c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
