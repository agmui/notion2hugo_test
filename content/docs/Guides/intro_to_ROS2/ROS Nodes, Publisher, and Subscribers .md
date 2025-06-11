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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=81df126766dead96e7ccfd30af41024f6904f7d6c4b20e3df48096b66172c0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=fccc03faef720d70aaf5aa08621c95be0846ef42077175baabc4a110539d0511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=aa9225c4f2a1e83704931554898d60108a073a63338db8952158f61aab59a741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=e8bd8db1ffb4db6b0f3f4a5f4a28fd2ab398f4e7bb4299d1816341988db62617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=fc068f297c3d3e90dd98bdde336ff8f0a31d63564536509bf8caf823db1e272b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=3eafd0f435886a2810c859ad2df5aa5cc6c07f48f05d2f01798a8dec55f8579d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=56b76e710a312ff66656fda80bb07aebccfab119bee2e576aff0f91b97d755bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ABAAVU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnS3Qe7Yb3ggFjTu3zpyGbkwB%2F8BAQgXui22pTWowVXAIhAIxQY0R4Spgn7JO5P8MRs28%2FnjjXpQhVOiDxOCiYV0ACKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3I4HMLWUEUjrG%2Bx8q3AO9vtXBlUmz8sVSPTNrWmzDHOSAme%2BcYsSY8b8N6BcIZ%2B9KWxiLTl8j5pCHswnNPiV1biHIrAN65XCzmyOxdyw%2B8IHgwCXbW0aKWmkPgVYoDmxZRvxnfxphtMa6uvHwyUNkYgFBH4IANuSa0%2F9VGQj7SUiT%2Fj3WCG9f%2BCO1J36V6bgEX0RU6ZvX331VKkpteIq8tCKeMqUpjWvm1Ok1elzgcJoOxIP91MoRgZ2ixXEhCFw%2BI%2Fssgp%2BTHFWNYf%2FkVTadJ69ikDuSGToZchgePFEhQZeo%2BLbDksb7PPFedgt9Kx97mhVVvesHdpZhssvgSryPOFJXubG2y4D%2BFIWjqbmQEgCk3rl4idY1uEOUcM0q4qw2kSUsDVBPH%2FBhFd1UZVCmI5760NDDKxM2lgIC1KqLtJxWzbXaktGEJmovVl6%2FrPeeugEUELtHdg7FilpHZV7JnshZ%2FROgx37LKxCjgi7wdNl6p9kipx0%2B3UlSHv0auvjR7tp3znayMAuvh3NjmXpMfsbI%2BpuBpqkYRjylYNbslcqgUa%2FYOhAKdIM8aeM0MrXrAyKuQt67RCVQdBkNeBONDxdMs1dVGZvZ39C2KRTN%2FpVs%2FY9usSazHHOexRIcXd3PFG5Wfoya1miyaDCd5aXCBjqkAX%2BU9LOKGHbVh%2B4f536Ba%2FsWGI9BQvRAQkz2bjSl3WQv8zQTIN7kdLzsBvt%2BK8%2BnqsoHmPNHBPns7yWFsOzIiQXHIH0U270oleJH%2BliYZFEwcx1E%2FN4YvedQXBVvSiVg9JUpvamG7gSJIIwfc4Dj5iTtLk4e5ACFE5tleDfV1FDiQl7Y%2FIAJyaSTr2YNJXGStorqZ1Up%2BtSlJGzjrX2hwD9Gpvzh&X-Amz-Signature=2585ca8ec698c886c36911e1272965ca7842d12f92eab8bd433cd30bfcaf07ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
