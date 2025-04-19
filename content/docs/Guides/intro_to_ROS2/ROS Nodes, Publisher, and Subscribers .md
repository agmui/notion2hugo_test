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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=46d3b1f62fa0d1565cb539123893e1573b9dccc83c9ec138c6ee892257c2503a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=47a3c0b0c52fe855e5b897b84864155f2f7ef0785d5883b680a29fae9be88620&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=77bc437d440a5d5f689aad6ab6047058e1afda55d34bc51e3adf4b8bcef59276&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=a98b308faf5c427802e1234d1a2d3a7b06e32c979d4d5899355b4b65999d9e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=416b17f1b7a28e5460ec1ab544328f5dc65e6005c531ccd8449c15c033e16f04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=90f2fff9beda34fe5d83411fc89a5c1b747f8b60233d8cfab768f224ba2dceed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=64ddd00c7f6ce21729a0de7a10d29a9edf30eb5d5faa07bcf07c176570e2a312&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377V62AT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78X0QKxh1J0cSyz2PKJPIAWlZU1DPn38TxKa683NoWgIhAO1%2FM07%2F%2FLobty6AAFJJRuJqLYq8RrY6atr8Kyvo8j3GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfzMCqxpj%2BQAbQ2v0q3APh6iKq6QNL0Q2QK5UXL5aYuxu0G4F7Z%2FjGxiKWeK1ehHEXJ4my4YT0tk7gSX4a4dac1ICgCtPA%2BUYlmNSvmG9bun8%2BRLRyR%2F33zBO1ZYTAJ6WhDMpcIZN219%2Fdplnm%2B%2FVm9Gp2Lnr6oy9fLvHQM04t3o6KReWxVnlxcSDUbeNrWHlJ5T1TBUFnR507ilYJitqCYn4bDKE2SDNyBzfC%2FeP%2FOkhboKUvDV1U7GFKKWQieafchdNH7Vqv%2BcI%2FhPxL3JlioYw9TdvZWYKsvwCHE3RVvHVoZYF0A2tjprseMRxZ5hhYfoQzubkxiwpzej1uqJ9RuzaJr8TZqjLk4b0MDc6ZqIcuyhQzOgPvP8k74OFfFoiGQW%2FlovNIkM1X6Uo7gyh8T%2FMiM8fWXSPx75fULAulJBas1RNST3502%2BX6jFCyCe8BcGPnr%2FPCTJlI9BISiOxYmgqFh7LcGOHweMKGoRLtakC%2B%2B8%2BdqiYaWowi2SmMZUEMhx0DCboMTipx1IYvDAtCy3Kamy8sr325j%2FnJsV236Y%2FZRy4izDbYyY4PjAbVtf8WsYP%2FIIDtlAIhYEbzWuz9nUouL6FXPLQoebvy4EfYdv4FvB%2Flm024Jyfrs5ezOjUjpCPfBo4t0ifltDCA2IzABjqkAUyvzNDOFjXL7m%2F6RusDxtk5S5xl6xfimGWDIPHpnmtx75OUFoBKtX%2FTq6L04fcl5JBWV0tv9e8sBcG0QqWVG9aT71JQX%2FmdDU2HWz3m2TcEGMK9rjFhJvlJKW9kMVSRaPx3HL7oR9RNKCv4CDToXSqpHHBtRYJqgIjvL9oyTTBfKFESxf6tatIZB3B6cbaaTjFNQ0pw4%2F4DBehKu690bC8mqmv%2F&X-Amz-Signature=ab1fd5c25e408da232a83c4c6a7a2788feac0ad894cfe2d26cfce13ba6ca1dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
