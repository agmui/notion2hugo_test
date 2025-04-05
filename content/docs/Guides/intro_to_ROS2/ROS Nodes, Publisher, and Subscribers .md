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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=919d4fc58debd6034feaa8a10bd8195b37b8bc488dee1e026f5cca7cb01ab1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=02a308542f98cf06e9622b6ab570cb5c4990a3172c32ba3c78892eac32f81e63&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=3b68e1c78243546cd128d7ee2b72a9cc69c97dee5eb666c2bc19dbde6af33f00&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=2ac9e55199213b9e512dcd26962fc33f07ce0cb2eb2841bde347a68339adc4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=92c193ac7e5419bd761c36a7bd414f0153c879a18e7ebb24f25e24bd349829d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=4b3e8eb9f8088fbebdbf8a1ee5f2c2b566f054e3aecf4b65b8810fdc3b8e11f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=0d1fc6a5b0216e44b8ccbad7b398820a90921020af867f7f719dd2d4115f4fed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLZVZUN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGklewl6Ce%2FUx60yKyZI%2BAPEJss4TXGsLKfKmPP%2BqVkdAiEAu02qjdUBajRVCrcVBT4rXKk%2FpedtDHFeCZCXX%2FrJRa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP3c5G8uDvAJMX%2F4oSrcA45FeVrPUAwlmepXmk%2FRX5as63482Hq0vFRERHFqoq9ryabkn5v9ytDTe4W0tL7pk2Rkd1V7WdWtX0mQPk3NMscC22BGUgX8wJoPZwXof%2Bu1fxYANPtWB21dwp%2FmoYIx6M14D01tUIVoMBEb%2F3idSzGxdReJcaoBmwtPFbqLN4jWuRdCWyyGI2pMHNoI6NmdVlNSppu1Bs6LB6jc17Gb0BKYaWHvUstlNPGAtLQZBKKPCA36dD%2BVgXQuvS2JJiGExy8T4vDw%2FccU0TirVoyc9CkwBft3QXBLQEfvMukDAwgrii043rNYTKomsYGUK9xtrARA2IAJIenzG61uAIVZ7jlf90XRm%2B%2BdHl8m1a9DGa%2BzB4BQ9d%2F%2B%2BwtKWf%2B%2Fg%2FhHK%2Bw1rY6eFRUuaHYGqka%2B4Vop%2BjFc57WjxzT%2FRtRbRfMNmFTQJeV3xE3M%2FjmkTHSj%2FVhnxTYOeXFYzvBHB0pXDy3v6nZ6%2Br%2FDyfwFLFOy3kqWMPyIEuosPX6I6GqS2BzYFO3y5tW3P5E8tAKA%2BbkYZs8nl6GNUBkiytCbiTWYTroTl0AygfabYxD%2B3VO%2FWZV1mylJ7X%2FCyOzP7BNTVbbGo5ZJzeN0cL9FI9I5Srbq%2B%2Fknqyg5Njk3yjxlNrihMKyFxb8GOqUBmq9bJDX3Icp7EgR70g5QWQ4E4FTOLFtSy6rHmOmUd8x6NX89EqyqG4JEpejdUJRrBonzISM0ub65nLpyP5g0UuWaLxiapYamJqyWwPt47CUISox0OnLBGSq6sR82%2BowmVluhkDqSQbCPKSWrpEY05Lcn%2B6%2FXjbWCsExlWqy%2BjKEDvS1%2BNAdLFF5sFXyBC7R4pPXKArZYLXLvJ2T8KH3GVkLWnuHN&X-Amz-Signature=727062486ebdbe26d7ec7ada065cab654c234c1d5e650143b2d1a0f8b9b7c87f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
