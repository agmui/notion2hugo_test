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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=c27d553f3a8328e1164c060c72d49fcd94419e2a8ffa894e079a985312354faa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=fa40a0447e63dea1310dc399f70abb9a2393b26334efdcc36df7cd26f6c71ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=afd15fb4f406dfe42655728201fbee26d7ca59361ac263a4541a6b902d785124&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=5d0cab627b0e06dcf08f9f30305ffba2bbdbcd0100a3973bb7c1044f38863104&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=4aec26cf64aa2c481c8107edbc45c370a96c693ccf78dbd5a0cddd5f9d43daf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=98c2f32504ff707cfd6ab697109d4e1c00fa745deeaee31aa541e5b9ebf2f43b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=bc8562d1221023f5ee79e41ac14876847b8604cda303d59e9417d5347d8923f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67AZBSY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCO7N4Y918bwGpVvDWjUvdJ2m2n8UX%2FI36OcaP2JiR8hQIgXDR871f%2FHjMevNe0iGkDYIZtQb10ODFfzj9aEY0tIJQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0A7Jmq35X3UE9WSCrcA2d9w92GOPa3f30m%2FxzMX07Jjwh%2B2UMZihkaETOfsNSF%2Fd2Emagd6kiP%2BJZ9X95mlQQc5MKuInuPqBS1YcmcV%2BDJrKSnqLdHmknlL95sXpsNKHXXoXqzxwyi1ceNABF3XC5lvEIea%2BRL3p15%2F0HkyyedlSjynS1a12fprc%2Fg7E%2FOXIr5LcvPTdgjivAd4iCQLo6rFaLCf9HTEN9FSUMBOj6%2FvKixepnVz57ErjAhfyo6s4aob2r%2FBP8lTYcF6sdj5kLgu0hIJWpl5QmMJGF66UScud6EText3MJ7jRSmiaHGsJvLU7WnPx2Ev1oR2CdMNh%2FlyvGLYsdg478D72t0ZjwZFJiCjWaqfV6zmo9VkbEYbBuGxuNQSgunwbyjOpDpKS6POWkZkNoXiSfLN2BxKkeaB4RZn3X2lVNqny2SbQ%2BxZDGhf%2FO1PKR%2BQTEmCPiO4MCoSjS7ap2cCVyln0OyLbOu8As%2F8%2BZwHrcNf0ssng72Lp3LDPX2wFkc6dGoRl%2FtDNh%2FJeGWduXpFI21prmE2f5YTa6TVtPwHQyrEiYHIFvB5dD6S0gt3nxR8zFAeTlOdwd9lfoyjnWW3p6L8V7GbO3rtCT8ftqazlke7e42AS%2B6e%2FgwOml5IL60feklMMu97r8GOqUBCscQFRtF%2BBv1SeQ%2BFykghWr45L2SUbLocanchi9SL%2FTNnutekiwIazCgmTOia6ZcOvWoBdk1nQUjhKkiBfuDPtzMApsBuukaaay%2FFUEwh03Oi0%2FlVDhYnc9ispjC2AAq5IL4Fm9EKfshToruDoBtZiuomyl2%2Brzu2Af%2BbZMdLpxMSFruuE7vcXrJB3NpQxzMZ%2BBc4Aw02ToZ8tiwfg%2F7yGVQ%2FRF5&X-Amz-Signature=7d85915b17ccd55a51bd9984a3e6465cdbdf7809237926fb6fa694ba4f1ca831&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
