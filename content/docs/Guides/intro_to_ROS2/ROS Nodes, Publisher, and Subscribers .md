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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=35e6d280baf56bcb7e417fac45c13fa3df5ed0db48d0ee47ea2e588628e88302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=f97bc001969987231c6f7fe874774ade8bd863350237cefd965a1fc48161266b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=1e6f8e66fb327adfbe7b0268b16c6fbb4665452be646d992d8c600e383def687&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=c0afdf5db1d137c07c82d46893c49c3d391c4070927d0e5659ebac8ed2c799fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=b8ea89bd1ef4b5e682396f14b0c7cd29e1057a5c690c4252ba42060901bc2350&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=3ceb9fd7a0745aa77459ee1433a485f72d338cdabf612577e15736e57614b7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=a7120bbb1e3ecf5c53ced1ce5329644a60aa99d27a5db4a97c4445c2db983e06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVAW32M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBEJokYGHOZkR6yjAC%2Fnj2xO814Qu7qAHto84KzCM%2B5wIgIP8xMNBuzkIzrLz01yn8VEJln6H9EgFsobj%2F78BI7LQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4Ac4UFTbS5zrDUoircA7gEyR5F5q%2Bx3USCKOcj%2FQsNXfFoodjb415EeYEb4e1v1FycDMRhw02P17imR41UdBeD95S8P554SgX6DtWnNAYrDAVKS0893deUIqknrlpg0AHR7zN2F%2FNWj3KCgYiEXMAvmaePbdamK8F9cWlU6DiE3WFLJolLkeFe6OxFESsk2Yof0SFz29zxFi6JujP3eA63RUS6naHvaydLJfSACk8d8eNC50G5xFoqbOJfqvqyBOgpZZ1PIDL7Ic1z9p3d283c7h9UkorOFNRcgVvsx5jTXTH4%2FmWcXIw1MV9gVb3%2BXnMmZn7dwCdR1On1txsjkyCrCc1DnAF59DOx4DCzjhFbbRGtAnPMo5bAk1TcVm9tGd3grPQ9OLdcSm7G1SzF55OLM%2Btnayo7K%2FdflTKE9GhYZviqTyPDkIrhEVV7WymYDyKpXZPMdyebkq6V7Dkb4NPHRiNyObEUM0vFN1HxaLKFdtKtosRPrEV6A0HiQK3pag9xaYykm%2BdAcndk0OZcqQ79H6XGA7F0WWfBnb7vQyuV1TcgcEQxDMhsuxAShxqVclN63uEsT9nmmKqX2XQL8wDLt%2B5pqXWRjLnagroVOOKdQkJoHzwN5I0HuA5uGkOOM0SSkjlZ0gU5XQorMN%2F6874GOqUBT7Yau65gHQn5rm6R3ZAyizPTG%2B0pgYhboM3ZpIkg8UX4eUym3dt0xgzum2MU0CL8qG5vrJ18yZkgwfU7cmDiy7wgjI6Zp%2FxNhhE%2Bg6Jl7e6Ys6EmCdULPz32o7qDhdnyMT1%2FOlqg70WKKuCzpGj%2FTTUQYmOrek4eSBtydG5t1MoGakapCrdYsdxHC52CKA8fWnY2Ad%2FP8KdcYL32x0ZCv4YVtF%2B5&X-Amz-Signature=526427445518eab07e75a0c8db7a02d46c6dc02158b8e3663d54aafc669a063e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
