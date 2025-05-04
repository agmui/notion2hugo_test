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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=e2cba7e85f0527860efd7401227c8eba356b16876cf75142d50c674564422824&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=13dda5ecd744af1a337c5e960ba4d269a9f42ee60df74e23e74d996b78178be4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=4b792964f9c2b43808fbde80f670a4f5d9f9ffa5deda49239e121d0be8478bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=0fdd9531e34a2606ebc262bb6afa1a2107aa4cca19e78ec3f5fae7cea241feea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=b7604684aa651fcc61ccc36563209cac431a9737a00251ac0b5e4405dc7d4628&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=90408182a6bf90866caf9671d6d74578fe7cd99bf43fe43e0d8da9c6d315180f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=d36bdcf620b69f6e50adc203fe719763d973262213cfc29a09be6f7684c057d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSUVTV4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDlIV4UQ9eqEc9w9aLLx%2FpB4tKwwyBVki4ay1NZIzpATAIhAJAa7sh11%2FMmbeMJrx5EtzdoJ7XKlkwf5D5E07mlpFJ6Kv8DCB4QABoMNjM3NDIzMTgzODA1IgyVlHakQysl5PgpDfoq3ANCKLGrlTItXaiXTRTRWGzRZgeAmXIRYB8usHvTR%2FjW56Im3yWST8BVPuKJCV8XpG40HXb2Ny8LDZo6NtxYpTNKykeyNENHJTIVPujAN75JFNenLRFaFwAG2%2BkgLuZ9a%2BcwoqDFDIvhAQMhbJuYx2xK71MfMU8OFPshnJlCE%2FEHYLdnazp2by0zVs8TWbjUoenOSPpt0wa%2Fj1gTJOb0r9mvDk9bGgyOANqSabagLvYfug%2FXOM8UBAYJoVpJIl%2BZF6rZd6dm4c50P5Lsa46NjxWvsx2C6JQf5aAaaCxbonDP%2BRrfHQsmm%2F2NWJZB9nmqcnAzWQ0%2FHEVVeVhzgHC6a1hVdjri2m7udV38J8BlVYafg2h1fpIqsC35M4%2BrMtVUBspmTwaAfcxN8xm8cBxJTyO8LClM1kHv1SV30zS%2FNMl%2FNg5PHxYjFQZAsP9ZGoiXb0fdXuT%2FmW9LSSdQhooxjNGw3r4d2x5i7ZjkowFVLv3ELjxXV%2BRjdaL7U6oVl9FBQ%2BFATkJHRNKm%2BneXlV28gPheLMa0GBo2Q%2BWybbGkmPrwAlJzKYQhnzeRc8DSE5qsTjSIoFjIL2btmTzuCNTe24QqaNRwBFxWownRcLkFflsr5eEa94JV0DS8hjvA5zDbrN%2FABjqkAYVZNg4VY4d3eSapr2x%2BmH4g%2BABd2wStEb5S9HBkhQL0I1QbznMOTxF66jefIboWYVyODyFjCbWejM8%2FWr1wBTu%2FdXRHTkqDfLhpB8ajwH%2BOdkzxcy0Jq3qrwWj%2F6VqUA9QNW3bRiaoiNAPQZvVcHHUAc8ov8P7u7aBumqTtat922ulmfQZZFi2CZ3MWUO0lUayeQ%2FNkPzmy5DGkTPPlZhHt5Eok&X-Amz-Signature=60b74e417a036857385fc2483a37d3f801089c08c5853568069e88c2ce71dbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
