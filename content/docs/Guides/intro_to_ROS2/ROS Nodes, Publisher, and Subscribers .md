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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=b2f5aaf58e87d245433d80950d493ce9b8596f0a0e38a4444e835823907e2011&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=2f5d324d0ae4c0617d68b57e2d3bb8df07c2c0606844ce6c6d410eac15286d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=74f40fadfec9183a5c759991f850321f86744a28c43d074521acccc942c8d070&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=6f01f459cc7753c9630e8b6ad2baced6b5361f00ed243b9b9a406c8ecbf58c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=09869a894bb3d87fb9260bd878facf69059d18970217db04dc5d38e045bbb08b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=b0c6ca42fa539de26eb1417c6598a669c5720e98ccf83f22d4a8b2147b8570ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=62d847edc897e6f9596068ec3d980844072848ef101a14c8f4bf4716dd36b28e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKIHFBG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRHw06RjB2TqyMQLWz00ZjGQpUvcZ7JfYPw8T0ly4VBAiB5c0MJNRJ9QMnYVnJHYw2mlfKE66fYZu57CuObtk2RGSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMO9Aro9Bb2NsdHem9KtwDVwdZdapMtEoViReKI3CdjWNPrh7bbdCRoju7LvYkLtOCKzdFORELLf44Kbsp%2FQ22FRTBPMFBLu0dp9HWq0j6BQ7LJNnHK%2Fu4Vpuxor%2FHp4aKaEEaZg4ke19OkcsDztTNkKUBJb2KLDZjuz3mDtMfrEA9ZOv47BxkI6a9HqVW7EgeUhMro0%2Bo9RNDy%2F13REp9K0BKsns2uIfrdxRZesgMxaXCb4%2B%2F2RXtNPMVUpiZoJAIidEOfpf%2BIltGFMwn4niQgdF0bR4sL9WbBb6iEGaa06v%2B4YiObqEzkOEfx1iQRz8BYmCe5yNs2z3p7bA5XWDKliOk0D8aFzMSRae8LPVFNNVVH9h7J0fTmaoudZ7Gs%2BPW5Sf0oi86RJIyt9yuSvqNtVqRiLMYtfBrsmN1bfx5J2meUd%2F2IDFIdLDsSnTsHcmr6zy7%2FHKn7%2B3O%2B540zt8nqy94z7K1zUt%2Fl8B0YSQhTkXvK75mAzupzNU5esgGFQGt8j5VMjaRP%2BO3Jf4Ac6vpRfTkYCQXvevwpBXlho2grqARM1SK%2BZ%2F5XM8TmNb2tXQygu%2B8DH2x1%2BVM2%2BnNCkX01QPXW%2Fpsvy0OREvOt69zsSZUFn3wryUjJT7QJaiCK%2FEesUIhEIFNPDunA0Qwk%2BLvvQY6pgE1mm0aqGAZqFl5VIqjlPWwPHnmUztS6H1A0pPZPVCWY9bqUSRChGmRLfAO%2Bz6nG9flnRsGuKG3E834osUFO64gGp93r5ulBPUZvSvlO7bnr9S6Z14g4TckgycuTHGRS%2BO8f5hfJS3Djq85LhNge%2FP1xNLLYwYpMZgvFgdgE1wOnLBxx4o1u%2BxNGef395mfcdhoQCNBH6XdjRW6fOkNyNHtsDiJXrX1&X-Amz-Signature=ebba8d1a43079b890ec1139a069f987e336a7d4d9146966c765be8bbba9433e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
