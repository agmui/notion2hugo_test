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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=320ed7fb065a46585b69b3af6104ca942ec54fe5cfc5f914d67f3bd142dcd874&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=f0225cf58900d51ae0f553a3dc2d9b1ac72701248a3637dfe9970bb83a9f2122&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=0ec915b85128137eff2830ad755ac981ff8cdf90037183d8ee516c7d93b32c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=3b55b7b2f5da77899a8aba334e83f062dafda60c739f4394d1370148c6b29c87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=fa448710c105ea4b4080df679274a09e85d3b52eac4a74ddec18ded928b010c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=eec4a74abbf6afacb869df00dc9dcfd14145016a71e0e49e3c8cd25c362b3d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=a52debdde1642292816fc27affab7a5e70ffcd39aa517b1d1cbafee894bd33df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATNYP6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3u4nqDsDbZqN2i%2BzxYVp5IVrCYSz8j46TP9WUtqnzWAiEA8DBdznal13BsH5cEPAU9nr0D9c2hAZbd7tvBXjinbuEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA5wp2%2BcdkknvyNNgircA8Yjp8SJmB7IYTR8JMVliPtf9UVVZ9kp5K4pl1xAPn9HNdE14FBDoHi8TkADciW5fg4Q5lW%2BUe%2FYlAr0r8PLrdB8MNWlVT3m2E2QrGcrSM4C80ZPxyaEtvpiJZ8vQhPX%2BOcGe0W3nKOU6x42Kk%2FTEjWC6r5YDFB71iKzgFrvFKCiQEbCjBcCSouvTPS5WJIruRdSKBuvni9N7vnSBMYD2Q56AO9JBQ96EtHgP9%2B5G9iKLFsbYuS9dOM2MKgCtCjPOpiiRnmpmIEIxB9uFJhyzhnfOCDwwMnShBpXApQMnCe%2BNfYBjWKpskkvq57fBvRYX5jrgirEuTrCwbIPZJT8djj1e50RYBuo23Li3oCTEtxb5CBOU4dU%2F4qn2gXS5c2NhB8McwtextUrY3SNvlcMOmnSgmJFOmRz0XkV6dCj6%2FVuZmYCcPKRqhLNDpFySsc%2BRbPqLHp9D6Lm8I4sS5Ht5uW%2BnKXO0VGihUJ1VG%2B2wFXdJ8FpQclNU02WtYd%2BDBYeucsWSYVLZy25G7uhMwygtWdFvdJatMUzKOJKmSG07ZsFppwMCKMkqeAXVLRGkp4tRdooQkwnllyD25guboXfmO0BVZ%2Bh9Z1ap39S1PxL01q8vVV6BSrmCgh8IDJ7MLDQ978GOqUBKSrK491YlVDbTpiXkOEkt24BvO20iIlrfW8HKY8aWo2rIydhKImsdK4tkP6ERR1htgT7%2FTnXOZcU4%2FDV4dVxVD2okYSiG79Rqaz6NKc7oxEJlTupWAj08adOSyMYtA4LDXKkW13RZ8z4ZBO8x2YElqVjfH9Z0uoLlbG1Z3W5Ul1yszz%2FjkPjBCZ3aiqEBjmH5OkAJsREbp7cbQFYkdyYX871HcNG&X-Amz-Signature=96d278cb7b792d83396e71123367f04a5a7ce81aa8dc4f52088a26d1340d2a41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
