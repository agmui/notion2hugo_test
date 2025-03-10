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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=494eea5696945f4237a84e873aaa20bacc3a49f3f98e0bed36910d4c12ee4404&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=a196d8fc5911e03d334ed52b14483f3d6367cb308e616fce8729038332f68600&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=53791a89453c40c12d26d400e262d53d3a00fb4b49611204ba82c1c3705733b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=ac145c0b5fb868c593004c6133165dccb68c79871b2bab0bc9a013978160b8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=f677e8074289a8568a7e8822db35ec4046e90600e9e74ceb76c1e70e7b82d949&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=ffe7da435568109a54bbf7bd1d0862924e4081d29e24330b50a4982e53b30875&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=b1fd852d728c25f876a682017c599113b10ab17a1cd2b918cce913df5c2f32d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=f3e63f3b9e05716b573ffdd202bdd62487645fca88661d52730a3cf8a0de46c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
