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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=b4567fcf703bc36c3275db7318719b757984df69b29a2abfd57707279afcb65f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=0086360eaa8ba594e4b04a482fabc692e1931018aede7a3835d1d9b019bebde3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=58723d128989145b84f314533f905b4c67f356fbb00f24621d95ba8a605c78e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=cbdaf7f275a9a3393569de43fe5d8d699317dafd8aaee082a9fb6e1ee9bedba1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=4240302e977fcd8ff1b76fd0a5180a9af069f97cd04952a0217bfd396c75a11e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=1ce5381ce7d9fa9e8d1dee7c62dacae4118579b2d43129c932c005213172941b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=035c0d63c4035d3da651a102e3fd0e3448db6800c1ba3225c6fb840a935f75e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ64TQ3P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHH8ECablfoxOUgQ%2FG1CNH6PJLosZD7EtMBkovIU09aPAiEA0hoRa9qBS%2B2%2FUniImW56hMp1bprLtcxcP7U9ioHVQX8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEF1v1B%2B1lci5cEsOSrcA909cQ%2FKmUZHSbH972DkLuAx5rMSasoXhMWwhpH5hcRNREONUlWST4ipHRyYFdrQb1BZWsWDxza1vcI6%2BxB%2FdPlrZGJodZGSqaWajXJXAkTBJ2U4CL%2F34DwJ4NBqaG%2Bi9ofugSD4RNDj1Ye0Csum9bxuhMm3mYb6pKb6ES9YnuLsVjqpQLuAF94GwalzXKDaJdK1EwtwmI6%2FUp1Mwjz%2Fu80OuBOdo%2BghUCy2PFs1OZphkG5hXd%2Btmkdx2XmJvrcIpmMlFVSiFqu3sCi%2BTU0ET8yPgq7K%2FfL9CXcA2pbjYwgRbRVJc39zv3TwA1cGlqI8CFfWfzjiDS6UkvUq1r6NNlZSylHkq3e3rq5JLP6sNhFYcdvytnCzLgmTyh6EceSvM9JkjrtLEeYgs6%2FG569o5u06lOivjnk7eyT2ik27okWQ37ohycMmrsKGsm%2BjbVYe096Sma3FSe73PPrcmDvahfLHnTXP3SZ74u%2BWcpc6%2BISpLskyt%2B4LKxlr%2BS1RmhlZV75KZ1x6L0N%2Bx6Qpk0tDZHZoBuSZ1QmpMkQnYpYvu93E3R2TxkbzwkSPky7RoUpVebScqxuDfIqUpJaMGmx0%2BQtmYF8aIuGRyYYhwGGJcfFJXjULrIZiIXHM8zUuMKSjib0GOqUB%2B5Z2085%2FiT8Clw5rl9bruNK%2BqSI7PkUgQKNBOODLG6dtT9u20tDjZg74npwi%2BZO0gJrJPo6uempRGRfXjkFVuBjQw%2FAPb7yk44%2Bb6FL0Crn0fEhzN7asKpGPYV6QGI9vtDkkqzwgUu6V3wMGobEybrxiWjMfxU%2B9iRSPW80TbMnkKfQZjlHOYe5QMRx9fDHrF4B%2FpkCDpN1BPQhhVCoXPb5eHOLQ&X-Amz-Signature=bc6ce4df2c30d78878cbbbbd545e1cd8ebbdb6ff1fb9234029ddaf13fd4dcc76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
