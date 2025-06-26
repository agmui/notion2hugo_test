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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=c4f7beae64c0dfb0927165828a2656e3fa5859b51a595289df2ba12c6360027a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=89363813291252ba6ce6b6282b1ee0c0c0a07c311c4c8f7ddf6af1ab6ff44b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=245dc73e478a6b8db589e3c2e084b92010387699356f95cad18b49f57582e5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=27e79791d3e34e9e2337be6aeb46147124fdb02f9b5b4e224701b4c02795e5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=1c4788591a86c5325169b99f0d39a8ce3f6ce7469cbd5741a837e64274ed62f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=f6f09d1a9ee12dbe453f7e138f5e5a89a8de5761eaa25aa1af8027e63d16cba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=40a511d1fa4137eef21755db252cc17ec72103eb16e3702e65af563f236d8d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=451f82fc6e232eec377dc7c91ae5c71986e2052ea5e44e16b5fdfbb8a938a82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
