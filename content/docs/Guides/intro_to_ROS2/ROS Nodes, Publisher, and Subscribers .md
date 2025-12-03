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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=0cbd807fdb2989b7d5645bd44f1c9ecaf09d706952af5cd8b629207e52169485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=6ab0c923dac5e61748b6b37e4f6ae16d040866eb367132c01e6b10777414c1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=3cce94c6a7c0ba44bde9d0d43cb9814d7d6b015dc28c5b0e917f083f727f80b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=043b4f90ae72b81f287d19acec0d5a4a83f4fad4deeb449a2eb7b11db1c7c55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=804396f257862398b312e1acdfb3bf297cced5c77d8180fcef207544f3ae993d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=fc963bd4bab38f38f1938df7b3ae31420f9640aa35107292961965137c3cce14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=3e278b73709261f6e2ce3555d75b248343c8f4da51cdb223143b271947b324c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=009c8d765fdc49f566574c89df1dcba1c8b7188260650050d4388e97298b2cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
