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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=ad70b4ac7df3f66d08a69c2563cb9af4e655a5232f483b01a566e51e4136122f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=23935ef01ca8e1b7be61e926dad0aa28aeca47f95114c87de0e073c00074a429&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=b49d530ebeef1021815dd6a30b4412a9a3e019c514422168cd8549999cf279ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=5117988969708ea73fc0915059c23a39b174aed5c1e7cde43be3bac84ed0156b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=25ef0826bbf78c89ec356568c2a263852a65d8f9986ef0eba0cf8cc6986fa5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=e23e47cbc6841c59b4f54ba1495cdfb9b2d4cdc1b4cf97e17ae68ae931a5a1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=4843d0953fc5e8a65d257b3e97bcf52b303340858bc919aaaa3b4112c788c7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466362ZKCCM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD%2FpAT%2BJhPzXIHgsLlefIPL0XjH%2B%2FA2QNoIH5ojDj6ZGAIgf7gAjenWFtJcJeg4%2F56chRL6JlxmgxU9qVIanfpfsaIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAg4KQ%2Fa%2BmU6d0zQSrcAyPPwynZSKRJAESQQpc5psan23W4%2FbCFByNMxATBdmIBae01HwboLEiIH4pOJ4RRKVrwL5B1XRaJgBd9SmZNP3JSmNHs3liKXgqp%2Bb9u%2Fxk7EWM9bCzrtwry6FNe873k0pQ%2BhWeqE3ClOOLrILkGIZQYfvB0jfxVjl8%2BuAfziK%2Bt4CUiZOWcpcw0UBas22keY5sfpWNfDfKl8xO7vdGyouP5EJdLnllqEHXOmR7Lhwk2mEYOPJ4t09jzAPIOywN0OVYH8BfPlBQ6Is%2BwCcG8oT4cUHT0G7eOvwfhe1cVVG7meF4OVkm3QsP5lT4UREzpbssbsdijtBqdX6UazX1uWqBEj91HwH8YoosT2El5%2Fe%2BVxxy2rNoK%2Fss9%2FZq8Kmm01b02%2FMsBPTvcTmghcaVKM48iQupd%2BV%2FHjd%2FK2OCn3VJMfrzfpjdKrRAc3iCQUaHiZl3jT3wBVSUxyOoh83B0jUulUIyAwtX%2FfslxD1wMZd9%2B7VumVZC0a7g%2Bg1oRIPmU1xS5bk2A%2FGPwqk4IAJdHDr6FFXqNtHaTTUovi4T71Uc5E5AcyuDSEhACiRxNd9kQNJSECyPPnnq9tH9NARbXUPbIBtubh7QUYsU%2BT%2BIU04UUgKlf8LfNvvRFn3eHMPS9y8AGOqUBdyPTHzDnVcFkI4voB0rMhWTqo7BJHeRJq3rFSmyrvOcbaqQJcjidCBEPUR%2BNWzcm5dW1Macna%2BKzl5gqoIt0vZ2YoAcYee3847swLJIycXLp1zQvzkzi3p%2F9Q3TBKbIEAjuMNFS%2BAFkQINRH9Y2a2W%2BU0k%2FcZQ6nSeCASsBaSOJ%2B0L8qUGGXPrPDORuOyVRpagD1gE7iyTs1ICSBE7IrROdqKNZq&X-Amz-Signature=25731ddf001f4f7c0e734ac224a51352ff98da75a2e592b262ff78b2c15e9459&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
