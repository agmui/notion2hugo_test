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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=932f67b90c18df9a7561eefd6bb515895212c273605cda0220a0072c8cb1c9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=09c155e9a85cc5f9bbf4e9100e4229b8600f1e118d1e4eed3bd2f82e9d75b6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=bb398cda52fcd2eebf742e9c101c483a6656d38442e5d7e01591666e2b6d5577&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=ce3926eb678ae8787a424682305296328f7515ccf3f9d38ac3709401c4eb8289&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=3f0b69cd06c16f7f243969bd2be139d249f181d86f52e0bd1884bdad5863d7df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=8dc0a60620305e16fb4d2b27189f8bf6f87632c343013cf1d076462969e88866&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=ca16f5a9e939f67989e0d30aa5c8ea2f500c7f6d43589abd1ed65eab2910df1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNY4CAMQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVLhlJ6gtOIJPcYuHtET11F79Jm4tk4ynzlq9Ao3ex9AiEAnDBz2ok%2BhHWOj0ZrYQn43HJuye239HKgwKZIIeqHE6gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj%2BeBDCbN%2BrlnI%2FnCrcAyBJXzCFNVJ2oQhqnH%2FuKg8QVYtg0AMwNqyBluiuaMfcC1DMWboLzqCa9Y9SHMqVQess1jiPtvToeWrFBLywmBapX06FPm78I4sr%2FiVQBssGS08y0wAIHWUTVFv2eJbdHYJUpqtrhWDl6%2FaGZPsGs4Nm7EQBN61TkfX4I2%2BUNT2D7SzWqQIKXDzoLBPBzZVkSYG%2FycZWS6KSRm98EF2Dk7eLUHe70iV84kAgX%2Bd%2FveSlbSg%2Bn20JPXF1gKTtvuTv8Yl%2BwjiDhL%2Bu5Gr8n%2BgLUaeNSvAFt0Z9K2m60yILG3QxUCHoRh7UWWtMC3bMjiLmLfPRfF%2B63EPalGq2npb7ZnNdb1Z22Wy%2FTL7UNNqS53Xcdg3Uaur5J%2Bc3%2Bik8kjjZ%2Fe4v%2Fdvt6kxRVQT1kgkCSWfMyx2NdwIiN0%2B0wgLVQKzOv%2BzExa8iMxe1ZucDq8gibseYXkCMVAy97U4cGN1Nak2H3%2Fz4Qhrqp7QAVDd2%2BCcYw1FjCAL0C4iLwYagX75ihWMqUE6XWHVjYO7We%2BUzTjMx3NAyRf6S2eFG6kZn2kF7RDE1RI8UxyS1vyXSi%2BemCALnm%2FVs%2B%2B7TVMpeLwUYeKUfH78n%2F1Thz4KZIaUTgox2vCXUR9qS0TPW9YhxMJ7crb0GOqUB3f91l2MQ6PvcSz4CtHZMKJtI3OVeLGI5DfGshmKb40HRZVREiK6b84OcxkoPCbBS9hz8p%2Bq9jZR%2BsVZEkbuhPqeuf%2BlsKX7ici0NvOcdNjswNTONOlG4i3S8mxPoOg67i8Z%2FSMMysxBS0%2FbbOttkXy%2BSgcQnXIxgTU8BwmGuIZVQX3jkEBwXLaTLGBZn631xt%2FWfl8qRwCzpwQXbARTYktDLv1po&X-Amz-Signature=a22085905e16d97accc9857896a3f0a16d26a0f6e2e03c24567edf4aa45b565a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
