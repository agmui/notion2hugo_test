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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=5d9966595cd5e3b726ade302d2481d6a61eaaa5522a58ae2c216bd05d5336970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=88cffdaf681f81155350caf6c79359475ac33ed86df2e23e186df2a742463057&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=0ac63e6f9dc7fc0673767ea61405effbb18252baa93c13eb0b4b52e39882d06c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=3d0c6ec01a74546ea08602dc4940f8a2f94fc2f707e471cf74ee7fa11f89e37f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=5f18da86f100bf92d64f380651336ddf43a777f0aab69cc9157b70ad9bd19b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=93ea7ee522ba3093a5b36331d81cb32b97400fb7c470c88dbfb90df566944620&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=488284e368f5e297d0c4fd1ed9444dde9d4ad2fe5c29def952333355be7114a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCJD7GU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXqdTzdaEOvQ9hr0SxJazdRe4YGzOwkPSx3qIzvTJ8QIhAMvGJZNFZG5mYwq5pd9E2amWtFNZBm6rEjzuXZtjGzsDKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdxOEtbsfEpC1Qlsq3APuOZkfA1rARh%2BKkzd85M0YxhWweJ1kRsre2BHyeji%2BgbTfchhn9hX5drpOA%2BYmx%2BLt1S9d3vnod7f7XP4v6CjU8aprxdgev3fs%2BE%2Fhw0FySjnfLgOklwbh6DECmx6O3rm77hGq34jfV4euA8jQBRQQb9ZPvWHUZrDTftUEQeaqxn%2Fb0QkphpiK%2FH7ud8JxFrkVZXa%2B%2BvKO5%2Fbi9aexzulPEemjBRPiIYLkMwb09lmvrxoRT5%2BiXidV%2B5OWbycANTZkUnngibbUGoVSoVYHyVrYYwWMh%2F3yo0TWEPELarLYLpA5pSaHgi7hh0dawOEZrX7MhWztQCtRUPvJnvAo1dx7uQema2yzLRtm4OPNzY62qesafFpcRMcTUuKAdTBFDGJv8wKZL5j%2Bg%2Brn58WaoY8h5EWRnpTMYudDrsjT5KAgwiYv5hKil3jzl74jpD79ziy%2FFvxSjSZaZdbWoqTtL9xkQivicKg%2F%2BcgHESNyAb%2FrO%2BbUawcJCEiyZAmaBBnWm5EKj7rcQQ6Kj1LiqKebvQXo%2BeEujM5gUlvA3XtRAnfVoXHaplGsiGRFd7XPSpdDsRwny117m2pECpdzaVZVNpTqAEege3DRbPAH7GL3AKVqh3vMglvd47O%2BydJ%2BgTCYrqe9BjqkAQLQRkhO3QMZEHd9efJY0mpR90vdoQiY0D0JnLZb2pOO0jTqECJ82Mi2IlQ4dSo436Tynv%2F2lhtcxSMOfrvnVE%2FPh0RoNc8Tlf4%2BIct1BzVrM99G2sZAIDXNRIlU0QrjFUsA35PBFSOiLOMGcxiQeIQmKcIohQUh53SQqDhxx1yipFZsCqJQx33MoTNFrxOPUuC2FeS5Llm%2FW05gijJHRAioTcBl&X-Amz-Signature=9618f169565fa44419a75db2842af72770fb322d1e1e74b6e948430777a9f7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
