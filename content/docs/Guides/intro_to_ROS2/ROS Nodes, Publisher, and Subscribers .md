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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=9a02e1e3f54c5d1b2784209342f92db471ccfd0da00a02425fef25d9509a0d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=0012d37e03b135ccca410a4c70d1ede82201867e857e591619a3b42c94d4313f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=632e11dc34aad6f3e92506e74947366929f779025e68f7a256a403e66053710c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=f1a947612fa7de45c3381944a2da8e047dafe8838639ef060e3ebf5b21e13a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=d38af263c49cec4d270dfb7ffe15cea6e7c58902ba6cc13ca767194dfb0d132a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=ea0fa63e241d0c892f9a2412b0717aacbfaf510ba7dabdb6b7f26740c625a540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=2cba8b235d4b76cac32ea5fce0afbc80ac4481af6ebd1ef3434ab7979dd27c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F723DEE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizVI2RFWDwW10S1j%2B0QUqCs9aJ2tJB%2FIlfQdPnBgbdAIgBaesAm57lmTNpwqxnP0Sku0kMZFpFKfqa%2BX0RPTEzKoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYCmeAhn4FR7SvPSrcAyfY4dA%2F9m0XkE744kabyB%2BhzssUpYRwPy%2B8WOT%2B0OkEi6jPbjsqPuM2RhjFGXNZ%2F7%2FP8Hrx4juas5aRuFS5K3kJjTjuLLBV0fdq3orQmQZGmcNQdNl2PP6UgTXZs3Hd3PnT93JdzGHADdZmxC9AZNYzTpNzw072nV4CvJqRrxz0XYK6CGezoesCoLJVjOLiD5MhMdgdqc5fW5t1xxez6g9MjPsSrqmM5TOG3bRY1CDx%2BUkYERLSFrqGLMkgDxNBTKQzHIC4Be9kjtZaYQjwAzHbdj2h03xnN6kPl9Sj%2FGUyGX6YtPzgY4WHXTG8VWP1krRQzZHKEu%2BkIonPvW7fqlWI0RNKWneYoIMIL9%2Fp8QibyIuV9Wa5G3kbmMCDRXsA2cq9FLHKuAnF42OZltQTMoxYYCrp50nq%2BSW%2FFpLgEIkV2jdlxhzHc0HgPrtjSYxzT3B0R%2FiPj2GHDRyCZvJhZcDsK06WNIrseV34XwkILRx%2FoQ0C2%2FFDR2kN0%2B8g1e%2BSune5%2B0C318lcr91eaxd%2BN5PiCdOk0tCg7u45aEq3h%2BIx6X7mhmgFT%2Ff7YwbjsWxrgMw6DNZs4ZNWbUnkBCxwU4L%2F%2BK2VMyGLoCdUD9riQQiOLndj7qws6jqaoGlLMMCpvcMGOqUBC8fIYCg3Rqq0GUUdfAaz6Knv%2BukLdD%2BvsTq2phvj%2B%2BP%2BWFhxCO9nU%2FC4cL3OfgP%2B6sRfjGXgedZFg1WZ5rBdbNRz%2B9Nv4VU8vNd%2FqWbFgpzuGq88X7emlsBum0iseVT0gMa1H%2FS4yJ%2FvhsTNHZTdtPPLdOtJE9ZVMMtNPuEt3kgk89uyFQ8qoVtIAS4L7mtzjj%2BNcoDAinjjwkuCb85a9rsZfXkT&X-Amz-Signature=11fc40e3f6b0fa8ce767e1a328ee31e3695d36c5638a51b10d0c75a6c2f1772a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
