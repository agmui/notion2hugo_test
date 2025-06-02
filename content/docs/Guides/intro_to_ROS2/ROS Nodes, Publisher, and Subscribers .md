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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=0ef8212587e1f38e626d837b6e91e5558053a7d843a5a16d97fc15c71110227a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=005483624bb1b7f75671370d94a5506186959b182bb6034c3df6f8e0b01da5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=87c1ac949f7f91eefbbbe9d0d7092307dea747b993f200a8739d3088d71e4e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=b2cead72167248710582592bb31d5255eb04bab120f904bc747b83ec2add002d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=f9221c6ae05d7f035a8fafb39c45ee1fcd9e1ef705b69d9d918d621e076be01c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=c76f44313a2a6de06a31ed83655901f6164a4a650ad38b01d1b169ad9818f1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=aae3dde85a489216708cbd904dfcd863102b68e1eb20edc54bb9fd87638e32dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPCRXTD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGck253LN8FiVMDUdneS7ZzgDEJJsyDBCBcqNx%2Bg6kG5AiAHJgsJtjBNC3qXQr49ormdQj3M1sOFcY%2BhPQAZonA2ViqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuszyYdb47icOPRLXKtwDQk9OaYaks0GhvI%2Bdk8dgp6Ov%2FCO4SICKjSfD0%2FI%2BYBzLA3kKMIFUeDiidiH014wkLH1U5K7py1Sv1oOO1PJZMGi%2FWxjYwSeFPcvyTgQNRKuLhVz%2FrL1vzWhHxmzHBtnEjf7exD3jSX%2BTOuaj2m4RS1m8WX5JgVWlxBeaJwYVa%2Fap6JLkbc3AgFPtqUyPVttFfKBAS4Ipl%2B2zz3XNpcOPmlm%2FHNP%2FFIZMDu%2BQCTphnMiltTWE5qkNzo604BUL0A84AGPCdVL6v3i2ySzZO5%2BFrfmoxo718r9GNHwgnO%2BUhQm3s5rocgJSaBufdbx00kUYXPXO8Tksns5CE7EvtuRjt58%2BCksJFYFydcgS0EzxFUQPWkORvvMnU%2BstG4ShY7l5vKeLCQNEhBG08EFP11Na7wyclT26k%2BfwaJy5PNtwZABau4%2Br1TGYqLUfYv%2F%2BTgCp5y7yhvkUpmfjbVFjUdT8Kp%2BJrjtItWO8HS1lN84RDK4%2Bs5rqufgO5iBYVkEi8nR4PsSaX78o6eGGL%2FnzaENUQm0dsGKSLUsU0UydzeZNb9B2ftqzuFJrb4xiMH%2BczKBKI5278AKMx%2FDSKouTeUdPdCSmEYOEyiZhkYDQ4%2FYujnvNoh4MT%2Fp3bu5kELow9OL3wQY6pgE7bnL%2B%2BhMZQL28enhMvpF0%2BISKUi4%2F9VFxvSeaIp3pFaBL61vhOJu19MfGOAhQ6HIqB9ErGe1zR0DoRvka%2BzkJ5LnfQIlwd0%2B0plpP%2F60qya94VR5Z4AMCVUBBwxTNO%2BXGNpgID7O4MNjZ0F7f3tHdIYxCth%2Bw0zxYXwITAfzUpmI3%2FjVgtWzrFDKhuoqrAPpn2umn4PaNbJbBjQQgKauAOio%2FDdO2&X-Amz-Signature=39c8d978fd6ee756c001df48a38439b7c44156f9cf089cb5c02fe5d823df258e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
