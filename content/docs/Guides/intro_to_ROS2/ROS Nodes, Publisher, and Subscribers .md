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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=daab8ed9e9e1e32b3d2869302ce88808f40d1ba759eaa5d7d8078db7ff16fa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=67a0f01c887ef0753765e44cc7b8f240069ccbd12556b0fd4ace06ee1cc2ade4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=15d9abab0b9b343adc769dd323a4012acc54cfd63939c67fbcd94311d0502b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=35965c4f2c54e5341a54ee1823aae500623235b17f1f429ae408e7050c69d288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=5079b189d7a7edc5fdeab95df5684148ccf6e1b7859fc86eece1384cc88bd2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=7d71fe42e482ab730a1f5af01b000fa8ef77594eb3f8a6d540b0334998c30510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=97a4578cca4970b8098caf7900a61fd55f3fc74687e3249200a12332f15a09c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERTLTD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDw5KkMgVJLTm0CoG3EtCmNtdjzEpttV90Z%2BwQcjJgHVAiEAyOJeI6vtNb1QuNceRRO5SP6WFDECBNL%2FSOEPhxoN8%2B4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXS6%2FDUB7qcJ9NJkyrcA0mtK2OXXfEbnkZ8n8M7%2BSha0ndMi7%2BRsvcxgAR8efeGOhY1Kef53I2bqnbZHQl%2Bt5GKFRaTPoMq%2FHcd8ImnPNlt5QlqYu%2BFmmbxhzvMGDlbxuCoUGTjyZI7PxgHGMUeRkXTCQu%2BSHZC%2FtQ0Wqis6z%2BfUYyf7%2F2H2HU54HQACRmk44zTl0MWpfY45jkQiWp823RdQIKp%2Ff8Ug%2FJxi9NEnkOJtkeUVIMrhAkSHChWI3SoiOYpjn97Oj4GU9JfLLsd7cfArz%2B5UcgRrdai9i0%2BSmapeEV8p554kNXt%2FLFwQ1k%2FaC%2FU8qa%2BJfVV141gRLR7s650FyxZtwWfZmZrUTmjLTuM0N5i9T6ROR8He1YtiUDW5vrqnz6a%2BFcwOxMuu7Ifeu4mdEuiKMFeA9Ra2J2vJlPnlBIBIAO1iKJ6n4%2FDE6SdYq%2BcLeDvVhVFJSKrEHkY%2BeSXmOi339OswF1eS%2F2IkiKAZFP08R6GmgIYniPbnuA1DiA1r4p7gVgdBP%2BGoqMxyBe1NnZukxi8CtU0Rl1SDjpLKX%2Bnbp4fLUkLfBzlXNsm7%2FRwNOmoTWomgvp3QtkgZZhbYaNzc9Rb%2BJTY2trZ6h%2Bnee8VpLhYosBZnabpz1Kh8S9FBJ1rX1l90XUgMIuq88IGOqUBjGELqr4ToPjAnjv0myUQqF9PVOC2uodBqvF%2FCZMsLVcqTbmSka3q2og3%2BC2KXUQUmyGEmHRHfUJDz8EqfQsEVgu551pA7CZpNIeVf7arfecgOif8pV2BUKtPqYLiXpNQ2%2FbTE1I4RLu3dKjGkL1treXj2TkGBzv3etYZYnszY%2FiYKLkGMOC2AMWewkH80C8QZXMDizBhJBnii3ih8A1Fv%2B9QuyoQ&X-Amz-Signature=03eb7c65415c5fd96b54566b6b538015cd9e23d994592791f5e3d327700770bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
