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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=d93b52defefc0b20c727dea79759fb7a147b690066cc6b8f3dbbe0c08e6745f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=1a72cf299987b8c6191dd0c07dbb66e47dc0a1b507919782bc8f0705854ce6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=d0a1a4d606b4744fc017328f15f382665c90fb0d2987cbae748c7e77c724d2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=662ba5b72e018c53f26258a6cfc9f5429265579d82299e8cb94ba4ef04f55d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=ecabc636d559b3c987db60fd8c05edc3aeccdf34965c7ce42f94b612b659b723&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=17caf8cb1b9aa13eafdc2437128852966f3ea652d5c716eda9a16846f3976131&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=2faba348c1c59fb54154ef6f1281b0c054ddaa6cbf5e7c0041aee15798605e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHL6YF7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBsjDaZrReUhHDWHJLxUnk7uUyKgeSxb8Xi%2BY78cDMMKAiEAzdi7PNvGbVzod2%2BX%2FiLjccsigHIprYxRZeapZdbqI3gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCyjqzjTamdhSovMCrcA9Himb8B9QHhRE%2FtzHeXVI9sWt9v0eTUQHEkR19O0tO%2BMbypJud80OFG3cIjT4%2Flcs%2FQ1ykRjmww8UC9tDAKTO7rRO5HvVd3Sv6qwfFtG3JqPVwXP%2BxtkIu7drSUd0N5CrSAnZ0OVGnN3GUcUGoas8zXHnp6MB78R%2BbLrJMxxdhdIzPvVK%2FsaAteUhQ50QaWPH1ZFv2ILdY64MXjWQbSLe0Opeoam7FU1ORhlYao3QTJ9zMSh2XYrV4Zjla%2B7rSE71fhWXXmRGBM5jQ3%2F46OjWsaaPFZv7Fj8U1yDJWcbZvW%2B97Vp%2FNAdcN8VMaV6hwCAKjVDsEM5Xgu8wtxOulXi6Td0lslOFCqN82%2Bx7emVcJOR4ApqBJNcjEajqO07creUernGSJhrEObYihOqEshDFDweCxNSUcDr3ZVeK8%2FO2n845W%2BHsuvRxZ%2Fp56iNQwWHkko4280D4AHFv6RxmuBqo%2F7pKdfgcHvQzgnIWK7Hs3j4UQHNBQTW2ybjbXTVu%2Fm6IiKIaosHv5mRYJUDyNvIrp9%2FwRAR25fA06TxlpbJBaL%2BNXnPgfPTz5wdglsnX7qcnKvyyeQXloQ1Wwnl7xSOkeVexhtnoDeYtbpB%2FBIykKiGYrFnc7E%2F71pEYVkMIrY9L4GOqUBffc1mhl61a1okVir48pgmUjLPJeG7Wo%2BmaXa9Cn1kG8Bx0xZ64fg78SK3hEBVvoLTlD7d7SN0skMt17NtbTbE3aA%2B5iLmDb1qWoQN2rFnqSnOniidPCnHfkMuAsklLMDi%2F5itcU5o3AuaS7B30RNLWKDDSq5RckrQUcNIh8AqOwApRYpl4C8pzwoLvyhwG50u0sRFgEZqyQaG8CJmQcC%2BbgtGj2h&X-Amz-Signature=ca9da39fcc5da8a0a90fd975fa9e5d22b79a5f6c4133d141120d236b76d7f51a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
