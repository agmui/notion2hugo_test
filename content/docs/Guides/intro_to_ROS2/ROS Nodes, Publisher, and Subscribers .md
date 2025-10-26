---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=d6b94dcad702cccf79c20d06f4cd4b21c350f6cf6ca154225219508171131b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=04ccc92661a070a5794109ff5239cfad4879999e71f34c67133ee19152335df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=0bf6d0ac181ce7144a13287e6367deb17d56cc180d940ec116401b5450a9400f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=dce8e00dcd63da6aab9e927a7733ad5f0f13b49b866f8f2927362bc6a6640adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=2ec52d9ad96dcc031a43263585e8defe3eb448f2f4af5828436a6e32c7bd6568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=6e511fb901d078b10acec7cfeb841dcb50dcbbbc8b5df13ff6e0e5fd279c6c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=d3776ad8b027bba6f924929efd8fb8a0aa514f927d0d904a1707b40641432d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGWH6S6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN18LqrPbOKGI6lArId3lSecNLF5JQffHazRLhoVyiHgIgYobrwlBhbGBmCnUThGyiZ3CQjQeD5xTB2FWMNf1Av%2FMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVo4jUxI8tye45mgircAz0AkRqN0n409W%2FE9ttFYzC6PNwKySfGhfjDKkwMYHfgfs8Hp5X8p1OWQO49Db21dLK5drbYBpuFSiuXy1MGaJi0Njg91DLDhNHAcNNpgD%2FoyhThrPV%2Bb0wJRgKp4e%2FQh1R1wUOkekRN5o9eoS9yqhCoEXso9YR9fzBl2gY%2F6Ur0IviukNdNG7n1QEhwQVi2BiTqPeM1rQ8anmW0SgCcwmG65MjP0UnVZBAbDGeCPF204C%2FGYiwN%2BZIGa026Qzbg03%2B9dwbykNi5ibJx6ySjHCB66lH%2Fk7nHH%2BdD9qZWv1A%2BbwQ16cYKCjo0qVQtk%2B09Sibkui1pO63G249lHEAC0DpQKjEdhEEHIf1XxCrdPzhkbnA3SOc5AqQt1p0PSmP7XRsvavngaf8MzNx5YgBl0hiV6304%2BBOKyvzQinof1nVEw8J5xPXuC96ESXYbiAxZm7JOj9guG2QINLDd2vFJLJBaQpXI4aTN5zsPzHdeILWmis4YwRxD%2BnZn2W65XdWUN4%2B2lEU3PBWSYMEwjOEr%2BFSlvHLgSxxoDZU3tOtUTzswymWK7Zd5sfl1d7WP1wmTZvWrjkQ9B4Bn%2B9EbWiS%2B3MkkZBNrU81TeWHk7wM0o5GC2GVjuCqmkdEEV3cfMO%2Bt9ccGOqUBayzwEVAtJZJFURzneRBrKbKSZtL6Q%2BM5dgOgo7y0a%2BWOy43Cj3ju%2F8VfWS60jxLfdIqqysmD9%2Fmhw%2BVLT4ya133rTz3QAo1h40PxV1sKiy6Mw4YCeMybCMfV%2F1P%2BrvloPE3hwEQimW84Sj1wY6%2BxpPD9gRvfUNBHRgGBM%2FgMEsT2Nf6S5ddBoytlWd3KjTF%2Fr9Avjkp6WWJHU1Izfaio8tWfkHy6&X-Amz-Signature=c241f0e3ddf25e27c3158c00f7a6b5fa85208ed58f25dc1ac2ba15b1deb43854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
