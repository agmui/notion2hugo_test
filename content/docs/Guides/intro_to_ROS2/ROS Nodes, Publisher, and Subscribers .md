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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=e4d0fa8893f76c178902af84c9b66fedf16a9394b359337a1c874c51a5901e58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=67e43cb99221efe371e286d6b6231a89e4a441a3eb773d5ba3ba278caba498ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=7c9b9085d07603c8c83eb6380eccfd26bae65c49832b558d60e28d1367116503&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=021323f35ccd954a137baf8658916d0a28571502c5509fcd8dc4c8c449c22527&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=726e07cec8a3d2444d53febc7788af45d4befb3308ac46d4254f3cfa994cd59f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=b66891d4c99732dc26002222f72b014a0459aeae45b92f2537ed17bc6a6c7ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=c4158592ae8f232c00ccfe31b596ee1ee8af9aea728f2168978e5a7e6bca8a27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVHAMZL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaJHAhsZ6FwrGjiODGN2d5AjBBL4oJpTX198jvmpfCKAiA8Omv%2Feu%2Fg6yc9QTqpKBGLGqtYD7dBRoCDTSyalcZuTir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMvLlAncjzaR%2BLGaYLKtwDdkq2vYXYug5RYM7l8n8ZmEMRFPoItSb71rskq%2BKW9%2FQBW0T2pgZ4NyHhvNcA45QSFMNa2akROqMdAT0p3gXhbaoxvS7Sk8ibcKPFq8DmpCw6z4SnsNrp7kpXDbY2%2FA8%2FRStjOOrfBHxwbtbI8JXfbec%2BKcW3f9T%2BNffq1QvDp27IK4vIghi30hHt%2F6%2FQG%2F8vzasLZgTc%2BtKo0p%2FyNrkfhBSKIxmyT9zI5VRIR0t%2FIiMQ8IM8S4xoQTQbplaMRry9kveKA0m1%2BDmpyrtHvSxKjghVVnjlth3jSo%2FQGo5LxqD%2F5MKc%2BJXNpmT5lwI%2FPjCr%2FBDkveXjn48UWcB0K9H67bUHirlMYDn%2Bzh4vS3tdUNEWby%2BtxuGrhFl5JXx2gShGGarjJQPM474zBoqtxtmAws3V2YgLTNhTkaOXi3zyv5dmTzuEbet49qmFn9uaNPCMj1r6AD98ZhAlkC13BBSrCIudHBMTNOQ62gpOgzqmF4obtsbxL9JFKKporMJPFPZBfH5DTDQAnHtOhHEAA4OztfVWMyidRFyt7tpvtIUlp7mr6O8j6gOZYLQTgVbz0cse6UoQVmdbTZDMaE7aWUN5Lv3nx8%2FMT0rmr%2B0yZkDuAH42CdHV6NCMdV4F08gw9ZelwQY6pgEapzILyCRNu3ucfxBAdjTB55WqtWkNKGXV7NFMSDw3w2JmIC8BZyE9a26130yXDkJqunsVNKoJuXTH09Q2Xk9ikuZbOf0sF3OZqFrMvk0U7H%2FSFe18Pt98aAF%2BbrtewwYzeFhEMN9e6khfALO8OCIxQNUuxpzffgLAKTVB1ab65qj9Ury5gWLPAhfFVOnw300znasEGjAbAufX350scXA6pfGkccrP&X-Amz-Signature=7312b1fe9359480da15d17d5c1885edb4a42451cafd82b361d7480d8c3260e72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
