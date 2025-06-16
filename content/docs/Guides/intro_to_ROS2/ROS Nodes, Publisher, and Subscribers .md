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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=98ea2bb1da4a5eb518802f234ea57698d1fc59f5ed1789d3eb07693a6cda881a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=70b3a3209d5f057fcdd94c8685db423df1b7dda0421ab94366c49e6128c44ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=52840985c17572d149ac0d37eca26467f357ebe286d8f94988632cdef242159a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=6a9f1ff7cbc2d1d3cafe8a81e096001d1ba168f27b86e453bb05bfffd1c85d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=d4d584d0ddb2834555dd4bd48baa0cc77eac9f7e03d24c5b52dc93b12915983e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=5823637fd3627e1086003b338f111664d155b296d973e4c0fc0241e6de549fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=111105e9843163c5dfbc77fbac6a594381d3c23de2c4953069a26d59fbe23c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AEPNKU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCt9ebZWwPSST%2FX319hfjEZJipgrcIFbHrDNlFGuDk3qQIgVam5vpjJfZUk2a0a%2FnnaQS7xExp7UvbhPayHEbACUhkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIFWAIf8VIhm9ZzG%2BircA4DeoFbzWapWwmD3TPMnL%2FDgvdjcNSA1e7kmSF49nPCy1lFXpWTp%2BqZ2jWEnZRkxZs7EwZoPhU8WPxUoghIhtqPG0eSSopAQIZCbFFnTuqk9YWmYWYmp0BF%2BCcgZefEh5%2B1W61QKc%2B6nV%2BpiaB2rMXMQ8X35fwL0yE%2FUKsaThIQKAl0f3hMNVDsxBsGLWGlIQ0Kp5ZGpJHhpVo8sj%2BF9wX%2BQAlEWG2dp%2BrhetwcmfVXuoLBG%2FkBIUwES0FDTxU2VJuxCd1niLGLzvCKg10kuYObzGvUCwCb0EOKn515pW%2FT718n01J1R76sCHZKIL%2FRlRqP%2BSJuBQHmLyfyQKC4BXFL8dsxiqHq%2BR%2Fr%2F1b7mTA1TUnCV5f73FoFKybsxY3kZiaT15SncqtAkijO7Vfz2egIRcgAV445%2FQFj%2BGtb74cn4cIALJ3hHHfsLfFIfg%2FaRaHm7WbomA26p1E7IF%2FMscJXItAIvE0nQfFXaxjoAYBQPVTKiCVEL83aVmPkNQqxEXV6g%2BwRfh1E2NzoYHIrkUzwfNDjjCxoOb%2FaeIkwqCdptWrMEf7%2BlC8cXeB0sGSTo7dausvgL9rd%2F4GAjfCVHoj%2FmgJTr4RcZaxliAHhqoNfDuKB6olRd%2BhfTcp32MJ%2FIwMIGOqUBQHvW5jyqCxEVpERD7PwHIlKzVpGnU%2Bksu7sVLPBO%2FJjxwQMADK31x%2BHSu%2F%2Fs9itZPjHIC6XJC3TZ%2FdBQYsVBA7xXgaGyf74uA55Wrg%2BMtFtVm9E%2B8SAjY8oDCcMQ%2Bl688za%2Bxw4o%2FJRlJN3HCy7yUULsX7eMrPcto5l3hASLGe6kdjuup5Dh73aoVK9FF6yyOaIi30Mcr9UPUkx%2F1UJ138VuoY67&X-Amz-Signature=79762bf6dd1ab63df8938f3866eb5d7f5b1ed29b9f74b6f733a3d045dadd539b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
