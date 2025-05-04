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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=f476d7aaf181714371ea12d9952de65baedc3d29344c70fcbf8443e527980acc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=0b78d70613fdfb01ae8952eacdc8e6391b3caed1cc7b9915f1297a84c2fb25d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=fa30039e6e303443d274385e74319125b669c5008126e10ee1d418ffe577cc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=7c0acefae7a9987604ea35f450f74fe375e985a2be831cd56eaca5c4c8d85a92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=72c8466b0c83c098a21dd5fc2f50a8726115bc4782c7f885bf2725bd9d7aaab9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=ac9d38e7a34646e0f63dfb97cda740eea973f6e93af4dc8395b90508ca38a4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=376a8372b4f90547e94d4496abc4cedcd70679d03f8159695e0d50eafe275b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VPMK4S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCr3KZfqcp7UNo3M%2FUc8FasxmP0PRMlLX0T%2FyXp5n4WnQIgUeKHglrgYMG6M2hVhCsjMWQPDATkediNlWwlaEonmcYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGWLKa9kBKfQb5aDSrcA8%2F8hobcsAmaTMU79MnEmxR%2FEF%2BYZ7qDq6BZZOmgx%2FJ%2ByvZEZvFa1dV9o01Z2XKLcD5%2FB7%2FS7gbQ57a3XGobqpvHRKUfo6eh%2BErvgGyleFuLnpwXgV4KFHQiEHdZqiw0GdsZk%2BdQEbm%2FsiQBr%2BxdWgMddeD3a0%2F3vV2nFaQ87U4HKIMBglSk7uU%2BL%2FtwCGVbm5sut9PUXw%2BvzsGb1WC8oPGyQsm96fbR%2FSsx0xNRFPBLmaXS9jjA9MiM6Xi2L4R40E773HYrfDKJe4xSNtdAJfkfJRBosPzogCftgNoBElD%2FLoYi3gMC0Zu75k0aK9PUNt6he7czs72deSdVC%2Fq9oSmJN9pltppAjHHCZizD%2FWny2%2Fex53MyQoi9j%2B9QebLHTYRV%2B%2FQOuwZhjAcjR38ghFL2xbZQNUyX1%2Ba6t0yc8%2BtV4V%2FUsHsJJ%2FFNhiIY4L0D3IACr3sIrcRh8y3ZssADkkriW5PwRqnhd6A9CV6FbPwruMBQThtoqbtrFGpPnN%2Bv6XOOoL4TB61Y3ZBswVnWlMYmsU6GjoMAgLszG2QaC1GlBIHsEizP69S63%2BJkTJvKZoq2K3CTq3WWagJne6oKTkxH4NQR9LSNqCv%2BsGwfYa7fZy56Cr%2B%2BQSgkr931MIXr28AGOqUBniWhHiTL5Xkb4d8KpP4N5da2%2FwA%2BhDOqBH9%2BrsKcsS286zgx8jY3A9vm9%2BspjXXLe5LoY7NZ5IVVVFnaxiFGBOxvMdBvaVkGID8Vakpf%2BuoFMiMJnN%2FVFoxZua52%2Fg3V4rU3dl%2Bg0mEuJ3FVahi18dEDo7ewwXyf44iaKuITb%2BSJR5kOOF25GBBos1%2Bdj5hAc7a5X3E%2FRzN5MlArgE94Y%2FMNVFnY&X-Amz-Signature=41cdf1f56118cdf43733b59732dfc026cb17d9d57bcfb496d195b1af0ec3cbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
