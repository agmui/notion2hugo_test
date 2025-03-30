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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=7e49a1fbe6dd29f38ce216f4f905d42ca956b844a5cb46ac24dbe67b170ba362&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=e4ba6e51fe5af587910ddaf9bf59af7dd15319c4ecf7a7b95007802101bd3809&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=c71e1bd1aedaa375e0043e85126b07c14df25163230b4de6165a10c259ace7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=18db93ec96982aa3bb4e8b8152e440293e3f7e6fe604c48194ae32d13aead368&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=6d21ebd8977d34ab5295708ce3912a72ecc5b4a936231013984b5fb987d830a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=a2e04b1a4c247078cc0b5706f1fefed5ebbb87013dbce9ed594fa474b6ea6b22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=2ef457c58518d436ed4729935488a175c42232dc2f4f48be0564db307f3db297&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN3WQNP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGMgUM8DPbbdGLFLw%2FOBAD4xIjRqZs5OvOHRoN%2BMsZ93AiEAqrQDZMYmkx6z7uCew75bj2Xi0R0yrJ8uvBT%2F29oNXawqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS3pmjg1lPL1oEXzircAwdLZedz0%2F1rTEHZIVIQoHVtguD4q4k09gtrTg8ISJn3Odzw%2B0V4u1Gw4H99cb36A9Hctu77JUU4Qo7e5Td1TslvCCTNGU73wklFuwXqnTNXr4W%2FuNbFTdMM%2Fl06xQTicQupWLtJGgRJSvybpUtviUDOwcpLnZNAq1Kg3q8cqJjd1Cpu4ltK6O7ZeKi1GVgFThnDOuDCUbZXwWfzkTlUhqo%2BUzHSvv28XXr5Evt6PYeQpIVzeCfVn6i5NKGV8%2F6edlHC2jOKVKYh6mnhTFczw9SyEqHpJ12FMZAk%2BCzLSucW5NPmCiuyRKM7NlEYxej4VaNzOCzyTeROmPk3Cj7KXxfP6uaBIGT0ipA7A6KBvtWkoARbYAbojCMBnRg%2FQdcbc38vaVc25aulF1oH7MOg%2FGqrdPPLAJpwGqfqitdzQe%2BJd5fgd6%2Btf8ILZ2CDLzKsC6J8BY%2BAAJWRfckqfIBqVBhwQt1Gr%2BfWw%2B%2FPOz6TW2XElDj%2BrFZ9fh30nHW4jnuT9QWNh4Kc8aaaScFTeJPCn0e3b01VzA%2BRkc54j%2Bqkspldy7vBttY2mHFbXjE5QnMgtpZ0UYe8gqR8pa7oswKRStJxdCSol9zA6OedL0Ct58tbz%2BgyyYrvazezd%2F4jMO7por8GOqUBYs7sNh3j8GMe8AJ%2BPwLuQJpiljH1rf3BEh7U0zGSRxmjq9mIMIJ8etdNEFYyKcga9gvYWCc%2BJhoCLM0OnS%2FoR99maSz7DyDmPj7PxsrH1Bq4m7a%2Bp0rZNN%2Bpp1OuPifHmGAATe6uJ8Qi%2BL4RZ7b9jXMabd9IEnvgT1z61yX3d%2BJR5C3E8gQOpOo93TNeuX6DVkeFAwh4UnCS2UIq7G%2F%2FvFnuTWJn&X-Amz-Signature=70a2905e826b3736ad003f37bfad3a0f676c04a7e1ddba54d8979b039bb80df4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
