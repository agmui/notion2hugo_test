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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=1b9ed57aecf3f980e3c69b2916ac3665d19bcd609bb61808fa4d9f3751f3a166&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=497696924eb73cb14d3d5734de8dd8c2f35f89530823b285bc23736b32d3aa81&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=2a2be5a5517526a427c35e064d67448c299795c66141103ba8f59b343e135c70&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=4d70b91798fb20df373e18aab4e44ef0d71500848a1605855d37a2b4ad0d78a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=253cc913d8697defad97cfdccb67b11257dd0cf3eb1c37a355a59df9a6eb68e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=18bf089a8eb9f17105e2c1cbf478986e6b56af3eeb3a2b6c4ea7e46c363a7bce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=faadfc67471398ca5e35c68bb5a9eb2581525a63a32dcde8258df0b278b78c65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOF3742%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDhmoCGNLERb422OZAjKHBh9TUMFEMVidST2IfzFKh87AiEAoNHr%2FQD8RBjdRRdHq3knIkwGfUs8X4bh8QcxjkUS%2BYkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsRClGZKqMSH0kvaCrcA%2FDmVcKEASUDKhJ9aBACXDyESn9nB8hS0bKA9Ic0e7UY18qLejKmitXEFD%2FoC1u80RPlp4z6TWc3SvBjVA6Zq9MHQLBRRenD17z1d%2B%2FCJLoZvwKAVBrfBB%2FlJyMfWdjLBYU7r6w%2BYMkFRsqWEFXiNLWOh2mdiJFlMFp%2FmPu%2FT41JUd4P0pCui5jxlO0zuxAg3%2Fl09SUrE8trP%2FkmlvgVRetip%2F8njMimmkOjLxTQRQ5uct2bDbqIk4tzI0H5K9Ve1gyOeNp9P%2Fu5sgxnYRsKDg5P6ZU0C5%2B8Ubg82ugIMooQdbSdOLicEFa6x4yO4jIjmXYeUvojOW1Kk2Aj%2BPeVOROPo4nGanlw2kkXFfTSVEh%2FX%2FqLXBDVqGauVflofxpw6sZwf7Q7vwjqghY7vnGDBQbDpW1gR8qW6yueGleIUFBmq0cPg7w%2BlysqiG%2Bm7pTXhD22i7q%2B4xhD%2FEPFr1Yr4qjT7NmaDeSFnxVoi9guKIGUkmdLjWJPZP8AfISxaaadLavbkqYLyYsDEZK%2BISQqNu48BK8V2PI4Im7oX87rS7jNmSXDUvCRqBvpTq6kYiQK7Y%2Fh2NSg2PDs5DnZr8Kh%2BJMow%2FGBYy%2Bm2OTWQXVnfNEqcmjQIbANQRw7EpIrMPOQir4GOqUBNaoOer3pdqLxTeIxkOb9uysiQpSrnfiBN75%2F9Ey7S%2FgxeYndP7k6u6zD9Lh4iM49DIkFsCSLJ2fJdK3PDoqETCpiGL8VBbBj7ss3umml%2B1w1qNBFGcxeaHZpd4Npach77ZQN2lPLGadB%2FONGoSoHFy2C3lEZIWWpq9Us5duOXErBZyAZWahaKKFIkZu2tTxywbUbw8vETcYsLl84YP5k%2BPHnDoNr&X-Amz-Signature=0fdd7c04ead0f5616eaf8db474c74590697a0a6863f4f690e321486bae4dae8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
