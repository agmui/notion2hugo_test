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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=5dbc4c463b32f2efa3f78f459b930f5b5cfce470146b8fbc5ed398b499604220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=206e2d17361ca3a84805b9a6b723b492f14061cedf3f1eef680b83b71b5d305b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=ee8a39457d7802557afb5bb97a86eaf1050de209a627b79964a65373e1140bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=9d6e1112060c0c853653809ee1e68204a3318bd3898e66382492efee9f7e447b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=c07e196f8f8e4ef96741812788a9c6b34a89f07cd5cb4d95e85a5b5980a296f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=ecfdac43e2eb9a8314e2864283667b7d80b0e86b81b6d7e5762100a8ed4bcd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=27c60713f61f77cf904e5187c61ee105c2018d811e79166c736cd395bb200ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC2JTV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFTraUxW8N8h8uqC1PLyDUzcFIq%2BJN5r0H6vGtq%2Bhab7AiEAx5fSR06N090j5InP1e6Ti4JHijKqD50gJGaWuvDBPFoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIIJQ1SPgDiiXWSspCrcA7cPo1MVTZSs8Ndo593gmN01HKA%2FIeJR43VfWUM%2F0ZAeK53whxuWuHXYd0KHdzjrPK%2FB7TECWKeHrLs6yYWnXIjm7r0PCIwLIe8obBWyFti33FozhC%2FpyHE5mJjTbhoGb3B6dq9SM407Tcz427Ek6Zp2%2B2NZmYdT%2BWRHQeq3PSioN8nE6XnsOuiGUK1DBtBW5PSzxY3hKHK7mIMkeFRQxDutvuujSnd2eNaLMMNnKHS8w1neqyP6GmJuV9FuOUlspTyRaHo4N84%2FjPDpy1p6kTm6Wu49FUdDcusIZYTQeK6RdPbAMFatYufNdrU78APXsk4QBWFxM3bahHMbSWldiMVATlv8OG7rwxwfDDGYMPBmf4pUKhAgMu5wr1nGWCoj3R%2BwS7158TlkvYRp2qltedlelts0R9xHJFThTFWQrS1tqZvbMovA1HYWInedpm%2FY0d%2Bhsr5AEDkjmIip03jnBmPSZ0WqPNEq0%2FZ6BOtpi2eA6%2FkRMAMdirJuxCUOIdY3dSIYHO%2B%2FxB6grE64YXADsITutSGpB2SzAM6sNpxrSMAlE%2FCi1Qq5zt7TgxewEIrB0JS9ecksWegNP5ql%2FfSSlvhXC%2B1o02hXcFJ%2B4FnoImZ8Tdo%2BN1IDi7S%2FIkfAMJWDmcQGOqUBlAibGIdYx4Rx0nBfvJwgpJmRAQX%2F4LYuinr80S4itdAx4Xt0LH7pUEj%2BPExP5two7111dAxg88517Dt2JlCDh8%2FAAK10ay6D2QlKYRSzI6NBsZTS6307vNyib976lFJvnftT2hK8oQj%2FltQrLHUzPomI2YKKiGN07TCA9rcxESCz72bdg91w8VWbGcRBjn5VKOU4Lyu1BJRSQmi%2FTrDRCZYmBBzr&X-Amz-Signature=0d8edbe784cd6c3b5f0eb77b37ffc3d8306fde3c837a5f0c187015720855e8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
