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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=e9d9c9b805e3a19382da2bd188a3e0594f8d6f49cc332fd7e8eb609c7d972ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=ee5f10f762817cb5746493d5504078ad6f7b88e46c1e3dc5134fb6ba7d01d754&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=701bf59535e7ff8d1e39ecb4e34366ec74f305e5dafb6062ecf73aa07d0250d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=f85cf7893b6c696460a79c1dfd1b806fccdb56894f0e75889c13ad58896890ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=f8b4ab7ebf737aac389c4628a6252ca400550982fb9b04e50b95562245100300&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=4399b07bfc2b45ecb7d1dcf369fefb00bbbe539b7a43e7aeb136be65d0623466&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=393bbf83df86daaf052dca0ae3dd5ac3f6262e8d2402e179e3b3484769b9fe29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHLZ3E6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBONlf%2Fnb00Qf%2BrEXdhkmKPruP2ynQlvjMKnr%2Bb7yCLnAiBNrReSoJKARH3VGpfqGykfB%2FeA1mYNr0T%2FXtaHcZEytCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKwOyf71R%2FdfbPQd6KtwDtJvZ3oDfnxHEnnCNXrRLmZxN0PWG%2FHzNvKXIqqft31%2Bp5maYhMZQ15bPMiFvift7%2B7OAruczXDQyjTLr3CynZka8CNE9IU0n9AM0vGFpS1xe4LOVltbzGrRZRQQiN0lNaF%2FGbw2Xm0VrO1uFjDFTgPuvUEOGa6GJmkl5cLnTd62iVyb%2BeoaV2SUwTLfjL1%2FUu7Chzq%2F%2F4kKB51Odgpiwg2onJK71GTvQ%2BA0JS%2B2QV1850Ir5aTCIZBGT6ZRYRYr4l%2B%2B%2Bf15NZZqB5na5%2B7e1gEeMexE6uz7eQvYc98jUse81RUu2CgJAzpvRg%2F0VipF53GCcz9H1AansjMoHD8Yxjd2G2BpgP6ftGi6JtRAnXIU%2F%2Fg%2Fa2yoj5yPnMRrep2DOLCdimdfTFMegJrYrNSr61E%2F0Zfz2%2FWkt%2FCIm3RvGWH2gI4XKLDXldPWtI2Ymw1FxVex7Lg4Hl6blJX6PDzE0bFCciREyczekp4kS12rPNnONuMx7n7z8DdvE38qpQ7FgN7zo7vtWvSOuSg5YDMlhmXIM%2F2BvhBGV7hwsXOEfoDzghEN0AbMi8Oq9zmXezi6jQN984%2Bt6gAl40JZlfALmX0dY%2BkEUx6xjUYfmo%2Bf92DeQuZtf5SZHmJnGQmkw3eyBvgY6pgGoaDftJvDl1iYTg0g57DUeXqwXJBSF9tAEvYJlWewWhWcX9CXC4mP2Iu7p%2BGxZaX2PmTwVKGBnK35AqOplAMtWcnxQrKQLQaAWFh%2Blmm3E2yGntvoXsOSU0NLDkP1YOBJ6eYi0lmNkeiWwaUnKPiQ6LFbc2p5HDXVuXkNLm5dVTLFSHIXKSVBOFQql%2FiP92H98vrin3MRWKdyx0vd8Gqim88Rc1EjN&X-Amz-Signature=60de02e9273954e4a78454e84939bb797c7ae4cf81df7000649f1986285e4880&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
