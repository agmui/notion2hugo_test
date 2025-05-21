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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=8cc4d136c8c71acde6a8e19c0f94648c7e80c7c58df7183978f35b089b90a670&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=0b1e31a4c266fcc8d56b07eecbcd14ab1d9da53e99b4c95cca1b1855e9106034&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=f91d57810bb5b2f0d0c84b752e01a0925165289cc70ae6d4ee59ed124f03a4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=5916b1cdaf410b7091ea1a169169c89388e6049ad42e83e8ebaaffb97295de53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=1a156e6f3855f0f4bb660e8bbd75ff914940442d7e89ffe4ba92ee464d4c4583&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=6df148c0513e2ac784d54eb401cd3417f53ab7163bfe62b2b8349447999ccc41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=5b362d3786164f49eea87d172da7a044e5e8d3d3a2bfafbf728206eb8374eb88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZRA5CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZuosUHVRvyTlcXKAS0R%2B8d%2B%2FPY1MbYrLnuLIOuXmkGwIhAPSogEDywdyWJEVQ%2Fq7zBuxlBnbAQIdX48AQAo4PVXxQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItbNMvOTE6c1W8L0q3APBoWI2Fu3Suo1m0dM9CDqvCu4ZnijaQA7B6X%2F2b5Eoj%2F70H2jM1ZvfVUYcZDqUA6DRyIS6L%2B9D24PEKq2A3uDVvfat6JCHbjtAoGQlUZsQtG%2FkFhWDqhNlDUW5WBXHlAnXywMzTMFuH4KNjvzxhzM9GYskPtQ6KX09%2FZ0C4E3MxqSyYoavL9jQsmIstD2LoeKG1nlM2kLWB41iiaxZQbAj1RHzWSuwsTXkHf9RrODv2poKiwtA0BoGe0axAW1HWsN7wR5iQH8rxnkRQPa0l1orf9FocxREe9fNLLXj6DBjBG4sDGcwjuFzLBg%2FSV2mDHRsapoM05Yzme6dmdVEStDy4hjHQbPLFNB700MRwW8TQ5aUXlGcHin8aNwnxj1xQpcj1L5qR5aS%2FGNrbSeXngfUevNYqHerMt4W4QhojK7hupB3gg7CcQakXocsQPwVvbg7EVGwOrvCKUB5kJ5%2Fsv7m7XxV%2FKoqMrldGjA9Ysb1mHzFKaH0mzCAQ7tOsIlVhaeAbWbwkP1cXPR8qMMtqWORycLKK7IdsqJB9aTLPZnJgJFril1nje7SyseK32bZuDNuTlv4PFqheZaK3cYAknVHs2ueKT2WQnvGBEDVMx7JUJcZMb1wUedx2QzRtzDn8rfBBjqkAc6aExe2l7XyZwiTMA59gSYwdpa2uaqY9oX0OPv3kThZX7c%2FT5RDEWpi7aRN09JDI1Z5DUmy2XrODFYMcQkvj37Mp2IwYuYumn24AvwLxWsCryV%2BBhy%2FtosmGMxYP0M1XFWYE7bBbpbk%2BN7FfMi6ukjW7%2FPUtgOt5vSoZ1wasFmEdQc%2FS%2FayMG%2BVr8rFCT5OyGhVDr1Rt3NVaIHsFf4fQiMeumaH&X-Amz-Signature=469d7541b7cce49295209163fc4118158974b87f6dedaf1bbceddd3bb3d2fe2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
