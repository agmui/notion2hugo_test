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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=3e8caa5716d4eff64117a8751b30863691b253fb54b21996fcc83e1856f2c753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=93fb2c32b11249cf79d58a68c0faa33d34cd73a3e2ec95b9fbd7cac2119de623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=e25944394d6039e1cd32c3017926a0f3a2ad0debe1212cadc6ba521905765eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=a35f09a722f840093c0b36596e906f3566c355a6188715dc542c59ff4431ee4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=43e8f2a963832d1afb7eeec4cadb9dfb16b9b754605432a27ee2f3e0812cb4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=c686a128fdfb030c1c76e9e8daf4df9af791638bb7ebae7a03538c8e8ce08bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=bf549f4aeec8c7ea637d152db3691f9457bdf672fd15cdb3bf7ce4694f8bac79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PTHX7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHSbMRYtq9klzDA6Fgu7X9ise2j99rwtX6%2B8IKGFDIgIgQ9h99k3pTZTBJ82aDBQL4Kedi2yM2Plp6pVUX0sRVY8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwhWLZ3c4UL0mMUDSrcA1vovYdAY4jXo0NaHJyFv6tUn6e97Zqe%2Bx7m9mpNvpO47oijn9MCkdP4akvOF%2Ffq%2BXEWE1yNRGLwX9p6KdQ8Abs254%2BffpsH4obIt9f806F7hjo%2FCBglQyOij%2BC3R5PMeKotPLUnIlM8c8DAefh14ntT656HJ%2B893WbUgD9Vzg49QlF9OrDYZoqXrekbmIzroUjDWqHSCmCCaBceUByIz1%2FrNO2dZDrbtV%2F2hFCJ%2BrIcLheRoxSfZVp3WrOkU3%2BbzhzEtvVbggB%2F6mXiHaxSbdG5LMJPePLDkuUlxadwj21%2BBlFgiYAnyXNuaSiBbrZBTiPyYuF%2BLVfDxfvuV1381%2BPx%2Bx0lhf%2BFi5uIljfp6NfRK3u0lhT2l7EyG%2FSq3l8UzWCgzDL0TyxOCYxDSg65OjHU0gN%2B6zKR7RLDWcKjChCOlkPJ9tDeTNWmmWaqKQ%2FqObOscNXkNl75HZwsOU8LKGYasD14mXK7KjwXr0WP2yYYtNyfJJgJ9Bc5H1a3u2gPtXiUnQpY3CKHSKziRKT8zR1JabNnLQFDcnQLkHvDdgAiSBzY0Y4I9crVdPysklBwcibGbemleMZNpkc5WUEyrUTkfXzZMhEDsqv7HnKM2kduuIchJhS658YtXFmNMNnkosIGOqUB%2FKTTanZGeKgyEmacieNwUwHAU7HenVpnbE91r5xkt1evgbL9fjxAlyqSC64khzLV2jvfrP7hVqkiGWExnqhu5JD%2Fm0YsianPYpPiq%2FG9ciwf04n%2BTllBdMx1IMaKorM36FKxEuHEmBKMLFdoclactysuAkAxfn3xK1KY6hVhtXYPA1bhn1sgd2gCwNtRcc2kgJmVIdoUXJeB5HipGTz%2B1c3Djtth&X-Amz-Signature=f27e04ad015a5f99d86bf1671b5e8e98fcdc631a3d6612249b737b2e93edf909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
