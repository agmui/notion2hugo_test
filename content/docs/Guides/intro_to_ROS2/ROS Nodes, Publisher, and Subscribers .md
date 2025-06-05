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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=5d9863f1982068684fe4f577de884ab296f90e386e58cedcd3e1f62b96e3a6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=48be98d038cbcc60b39fcbcf2ec8a3b9c8e748fc3b6483f12bb17d95b3cbd966&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=19cdcb01d893c0d56b34310d73ce6f1119fdab1eca1c16e553a1dd816dbe5adc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=73878f33a5a71bab271a8343b1cdecfcaa1f92fe0a1bdde6851fe6ff33ecc5df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=ff2bc2983932a06f716163f956e2e679f35f32ea1d5f2350753951723673858a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=c6b836a26d2f6341e6e1a2eabebec28916daee371588a76fdaabad77ebfea1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=2a11a3cb4233be42690bcb4d72b192ac01e277f7dff3f2152574abc1274990f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VK42R4R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIaS%2FG%2BlQB%2FuzqV2PJ3bTz15DLSs7%2FZPMCybEVp9NOUAiEAjjqAlOhHZadADItweYZ0NsZP0db%2Bbb%2Fhr0RADyRGwdMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEztABm6R7mHhDMUKSrcA89Ij4xZ%2FdJGdJwI%2Bc67Q3dLn9MqpNukLjxZddesxQKVQa5HeNpPkG0RKVe0Hf9WH1gAfSc7Rb8tSaDlsKEf47%2Fve1EjrLQBWitE7EG61Pu%2FcfFnPbJQ4VUAYZZ5GJ5gifSDUZzi0Q9LI86BW1WH5N4HTgnt0ujRv6LP93vhnf4qpZGUDnZ%2BXH0qKvv1zcA8ObP%2B2xnpAFhZ3sL%2BXi7ZSMy5ve%2FecfxGUHpObUKBHC0MK9jY3WfjskPQtz1J3Ngz%2Fe8jX9uQB8mqW6zzNw%2Bxb1YxypXUmvyNpovJKTnK5ohouAatKeMK7UYjedMJ7WoE5S2IIq0vchJtF0zN6Wz6Vry00sSyeF4JrtPTQKGqAI8uTdFNrJXm7tSTpRipbSiHKtu3B9oebZbWxgqPTpmvNpNu8aD5EubRmBnd%2BElRAhmUjwGKXRA2dpEU6ZvC2Sn1FUibJ925OLRPcSnTll8bU0nRr%2Fs0Ip0Wm8zlnHVvcsKS710c%2F4VunuLbNuJk5anb%2F9%2Fv83ddURmyZG%2BrFgTf8TYyM6%2B3lYNMDyvl64lfIEiNGnnwORu6npfXIfR6swR7xSiexqZnaP0hDg0eMQRq4hkZmGgN0J5d4Hop75Xdy3cAIx%2B%2Ftn%2BLc%2FrsXDB9MInqg8IGOqUBWRfKpt3ZCPAjr7eC51OIUrkHUnmvtw%2B3ld9WvrLx0LZhbWUgsEcqZx019nCi9x0%2BcFjHnKxEaM3Ubi4%2BnGTaWgN%2Fq5ut5rq3a7dTq%2B%2F1Z9eNDu116V8y69U9m6KRQsPpPDRmCUm4lx%2F8tJ6DNSzpT8UpwC1omjOglC2WkTjc44JVwbvBqsXv8P7uSPn0rLh3FdL9mRLBuuu9YZ6a%2F3cmQBM55J4h&X-Amz-Signature=ac16daac667c84c2812739dc1a92193946653bdd379e7ada38825b2717a72faf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
