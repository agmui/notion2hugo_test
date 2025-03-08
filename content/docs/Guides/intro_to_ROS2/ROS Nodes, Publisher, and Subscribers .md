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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=c16de4bc0bf5f798c1fee72567f37bdde337969c9a0cea97e10056ddfad065d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=5ecfe87f8f79e2d1e5f12ea2f29d92c275b3468024b02d1f49da5c0fba11ddc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=a0480acc8a32bbc37b7d4dfd3f4316865452d7f79f19ff2ff8949f8c0a882b49&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=66ed8d26e8f6b7abb3f9bf42c5a544e69778dacb11790f470f6ff60801f4d240&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=edd46bc049bbc2d7c2c589e815a44c1d219a3bcb2c9235630ed729043d52575c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=1eef041d13480c12431bc33c965562428cf61d92c7d3a9a017470cd68b45291f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=1b168bc617f8a60e442166a746d1aa9caac887c7357422ba365da5be9488df4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQJR5KP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCgr6Z8bLvt7cNtisam0nPmqjGC3PrWI6U%2F9xGE7qai1wIgdTGVNHfdhh3ISBii2yrIR46Su9c9GYdo5KNoRqSBPX8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCuVkDssfLAK9ed1oircA%2FQQT%2FfVvFc%2FCBmnx7HZaknC8Xpk%2BfBGU%2FriDdz6bZC8uaHJXiM49jum6O1CNUlen8c1k8xOkCTftLM5Gjk%2FomAV95fy%2F05QXscVkXgRhNzXZKipwTJ8lnGTL%2FcdPCFELezwTGp0m5GMpY%2BKW5PSrPeI9jGGBfe3ZBupChzufJUy34UD2jzQ2yc2UV4hw8MSFcn2nJCvbUfmNalflyng91%2F8birv9qIosUkQv%2BVs%2FvUrHRSSId8S6NeNXvR6j%2BVzmBOsgPv7rQcoQE6jFhKbyWOxKkbVtHh8DsTIEvlpCTHD3F7Y8%2BunMMFEl8h7vuPIU00ZCIZ3LFAa1TzKVhDXaDETSGmgnCKLELwERxRYSD9xOIaHaPkgx9BihIfnAXj3Bqf3ykBKiW4hJhUk%2B5J8kZ0yPRruD%2BAjNfqnJjg83kwpB5jpp1Lex4%2FoasLVGhwcsWa8xLd7Gs4U1tRczKrSPaxhzA0u5Ub2%2BmJVuntcos%2BKbJTY8qYdXcBR%2B728%2F2TNvq6cdmHf2Zohljd9yRvNqMxqtIRu43SxNFKH9mNcdNfbuf%2BJ4yRD8PFXQ0FhLEvGqFmCxqZ37PJIH03VJwaS6IE2tgF%2FK9BiXpkZFC%2BK4%2B5cAa08JxNQqYaGLu9WMJeDsr4GOqUBri0O2bgZcHs9KFHnv3CMqoqkhch%2BWWfLA3sfUS9pn6IxmQ4mZC5fUJBghVsxRPDq7LGvPS5TXMxYM2z2C3r7OhGozVrgszJmTRF29HyaA2g38O6Y75xmxDQd%2Fh3Sf9zfRSKiwQXU0nGgaBLh6wDeSSaOTnk1%2FX2F3XE1VGShDvA%2BO72WSAXJeOGNE5B7olb1U%2F0fNnyCtp8l8%2Fm8lhZdj3T6rxvS&X-Amz-Signature=538202e0edb178ddc33de6048093864d57eb6194cd42e18d0872e3074b00cbc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
