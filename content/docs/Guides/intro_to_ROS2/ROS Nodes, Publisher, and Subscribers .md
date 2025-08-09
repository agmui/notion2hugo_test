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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=ad826c4df8a77465ec014c44548e8d808a125e9bfe00f0b2ec1af9ba859576b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=cc09cb8c32a0ebeec87cac752bbce1a3fe3211156197eb51a2ab26e89d434784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=1aee7a2f93ebd4e8f1306a4d36fb0f7f0bfdfa3460c176d9276ece7d65b6210f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=aa3c58a6187551fa661425f59f3165a99bf0a6ba08c82c1a7e22f43bf1e937ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=a40fe7343c8b36cacd2b238186cac3375fe1e61966d10ca5dd99efae3f8d0404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=71f6b2b7d380d5ce8435e674aaea005919dda703203f1509bf5b8b2bfe236260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=5b75c7f2fcee7ad3cc224dc724dddd374f5292c27197b8cdc86891e13737b7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A32PD5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH2OmBtxU0zYyfYsvs24xo5cCrwiuPOCAXcWWZCH1%2Bl%2FAiEAmOP1%2FkN7NmIy80RNFafEjIJlShB2MW5lOGoWNEkvmCEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE95Gr6Zs7DMUk8gOCrcA7h%2BDzouAFiqnAblhoV%2F2kWLkjuf3dM73nrToXQlHb%2BUWyBZFT3sFTw1eAwIxgSPYwjBVYzK%2Fj25B6zZrKt6YPtqswriBmecXOpCbg8MmfBxYDxQHvupNsOEFItvPmYDJQgrHvnveumLIqeqvpFfkfyJHpei5nG19DLH9vNdSHAsae%2FUzdJpvMWEe188PxGq9pgHKVhRnwrBHsixqcGCvnaVD19m9DkLa93plKyNwGL7ZROc4rx4ZZNoY9XqWrfBZsUG2YHjuiQUgV15kWm2O1LHSrVg4fZ5V9kyKu0uY2tSEP%2FFi4JmJJMOMguYzOZCv6m439cMvc2jPE%2BbceY6gUYokgerSiLiV68O758WS6rE0uxd6QhSNYMW33MvFSZEgTLkja%2FNTB7WkUNuwGr3wPm4Vkph7Hn%2Fs2tA3fhnC3vtce03WZUSNTm6kFtILRfBewM0CQQJy9W6pakxk2OTKuDC655RKGXrhcUhnGSp47siQUtECZEpWr91IfYz6c0QgrbfEOdcb%2FR19OPhi%2FlBeFNMAVyejPcqEeRxFs9Bv%2BsRW%2FJg2LLFY3Yyv8DfMOA0mqbZpqu3F0YRu5rteKLKOZ40A%2FCWkSEeacpZRsWAgTaaKQQ08jOCyv%2B7kaFQMMfE28QGOqUBZPGKRITSDZyqTdNJdVmhuo5MRyQzenILDaSi2CDxysDYxBvjih6dgmsmFKRVMIY4X7TbdSRFvCTRSm%2B%2F3fHXblEzYlkh6P%2FIsd2LWtEjdIWgXKs2hgs%2FHzsUysE2DS5B%2F57C%2BJJWwDb6w3LNfJ4G7%2F2EgWyVkp1roU1dtZdwR1plkUUObIzeqZ9j%2FUvYH4sHIQQP39o6Myp1PONHQCkbuN5vsMBH&X-Amz-Signature=544bf45b2a01de50d38a405b6d2bb72fe5f06b179c32b82eca7851fb0537b398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
