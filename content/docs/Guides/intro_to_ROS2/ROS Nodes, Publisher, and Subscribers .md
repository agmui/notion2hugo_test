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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=5f3fb9bfd35ed26f86888e0a6d13c7b61f369b47fd2c4613b853a9b41580fac6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=b6bbdcc8fd2b9bd64d9d5879466a20f4ad411ea5f03cec49557bf01de72c7a99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=da6987f9709a55092eec9be37643ebf9fe7990e27551452ffc1ebe7248168215&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=a095b14e9bd2453a120a99d64edb997a506d35246b11a17934708b54a3b54fad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=5377d8d0ac18d012f3735c35bc28548c4258a63835f84a28bb5de52375a95450&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=3fe4787412e008d70a61946300325bcd4e8efe87b9cb276c0eba980603866ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=a36cfe824f7d820a9b641291552d7df63d72225da9d4bdba6d01d200f6ec2e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJEMFJ5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC%2FOJh8aZSqFybGgyNzv646n8rTJcnugZegFI7yfrNjAiEAoVoUAYILUK7G1z%2Fd9%2Fxthuk8Xyx3%2Fc2SXwBdVuI74swqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaPSbO3qv9VEFSe3ircA1kgYWjBmBtVY4dUPkvgXInjYMMmdBW%2FLPrTLBZmQFfuKoQGmfEMSkVD7v2UtbiL12f%2Fceb3PmwLIkslPTDyRvxQ3O5V1jb8TDd3l%2BpiSo%2BQMY2BuoJbuNBPP%2F5VQP8Hwo9YheyuM8XMz43rBADackTG3veb6vn2AbErCdccF7dZeVD8HP6MQ5zkfXLwaq4sNybUgZz5921aiQVG1f8btGD7lGNSXLZRErC%2FRSeb37oZXDZ3OUqOqY88Mv00PClbD6ExkFRnPnzjoBlYZP4AVq%2FC4j4kNX%2FfgwaFeeCIaAGYlBd%2Bc2wliCUKqUMNI91IV1l%2B%2FBYqvdvz31TYkE6z0OFcmVO70L5ThyviYO%2BKJVBmXGvMhGolCzW50QlGwZQTklYAuQ%2F4wJ7kORs%2FOG2qIPJUN4zv0b0osvXGGL6gdj0f1UKdxG2l2%2FwyIsZVSZLMvGz74gotjKCFVZQwsK3F1RJnJCz3L76AiQlB35GExZSMiyMogDLnJ9mErZ3oDPyxw6nFTxF7ouRnt%2Fg0u4JbR9sCPKw%2B9LvDQaKfxiLbtKFtYYTIA0TAS4vdSHwmZhXXT%2FYa265Hc0Cwi8UvwHCjvwXWVxS%2FUrE5kt0jlMivILZAZUj9GzkgqPzOx0DdMOTfn8IGOqUBYJNeU9zDvTINJ3BCkjNmSFMF2SRYVtomfG9Ig827EC%2B2CQZ%2FZsg5GIFMgSrFfkHYGXxxpyKF%2FK0HjRmkr4l7Dd%2BBaTzmgbkYIBJyAwAd5%2Fs6yVcT5eHu2SUqMey1fJlKggS%2B0pfyG6Ryj62iRmVhjOKk5kmeWw1IcNH%2FTXbiTZruDxJDrf%2FNQJv2lmXnBcMFXl914GlHjASrnb%2BBjcFgFbY5G6f%2F&X-Amz-Signature=ad71cac8e61c68e0189301ca7834a6952a3bae3c9b6cd4535ead5c2d36d2671c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
