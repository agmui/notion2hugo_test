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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=8ca65482c91ad77be987749926f783531a43c2985b7ee0fe0cfa6461ac556e99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=2b108b344c13799d3c5f95a8e9860d5e7326989da7a1d8c4211a2d2d47abf909&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=0174a1dbe4878d48de93049b3fa3845f61aa9b4c3cab00209010d3e29fb28683&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=660540d2652b96772b14eb59956ef00f84ba84a0b2be0cec330738e315a716e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=b5e663d26c2108d250714ebcc7725f351907e060fe59da292906ee090d08e717&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=3e6374eb6a704004ee283454d6935b094e2846018c7095340e78a2d95838c119&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=83ea084ca9d7389b9921ef49fd61b673c2d18537235506bf6619a0caf2377fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DOZWF2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGVQGh7MDd5%2BWrt3kuCAzmS00RE5PGpMAoykWInPLyaDAiEAuo948d%2B78e%2BOLBXfAfR25dkrC4khwLQx0hu3vjzkOD4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6d4Vem6hAaGa84SCrcA0sRqXWQqYPCVdmfLbwoQrGpceS7jubs%2BJSFVTxwbwfhZeKT4RdsQRciRt6PPvwn4oTDmvMtZg91NuPk1%2Bgd9Ryp1Ckdr3mY3KN3lM3HahnnHlTh713S8%2FzErMtLOZV0Vjnw%2B1bt8FaO%2BlyWOsujiRWdwtjD7AWhy5mRhbs%2BAzlpy0Ie8AvUlzr2uSE62kyWFQ0pJF%2BnLM%2B7S%2B4vHe7l6uzzwcwagfg4RG9uRUW%2BjbqLxN79iSoIGINIOabNeLTG8TupYIX18wkENYxysvLk3JhL5MqpzpoggleNMmvGTiKd5kz5sOL%2Fh7MyFicyID%2F%2BWYWntUzKrWATazWDAf6qakNbqEVpgPn8rfAC5rbJNlkUodB3k654dK%2BWycKRM6FRI19gzKIX5RDjHiFa1b6N1rBdDKiY7qAffe2RZnaL5ktit0EYNnDsrKSqev9N4uUO3puxcuh0YZBw250%2Bg2ojzpbsVSw1E0ABNx1UHiL99ycaIODRzNKptUlo0be%2Bq8e3a3BCfNnHU%2BHr4GJME1jyCihLBLsMW2wrEdHskhvwUQ55DQvclfOVCyeChzByiKAy1BfiNw9vCMA8LY38JPWBuhvdhFZR935N61EsoJNhyVAUzFMfknWrqHgkC36iMOS59b4GOqUBJ5VDGeCbpDn1XfeTHxhjbkphgWj39YoPLed3Z3oCpvOwFSsKasQ6yF%2FkCMl%2Fn8EYlaDJvzV3%2FBsRXTXksrv6GfOylF75pWjXQIpgc9E7bBDdJ2I5J%2B4wiPR66LfRKfHuXmuS0x7zbwS4sZ%2FCtRv7vuxLsJbo8zsapV%2Bfv7Z6A2loCoBGRc5CCrc0opQX%2FUMjnkxmMasA4ss1TnOnbPLiCemfKypG&X-Amz-Signature=46a4aec7d1872c0ed1b52340d47aad3ecd9f29c0c58e36914b5fb7a392dd1a29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
