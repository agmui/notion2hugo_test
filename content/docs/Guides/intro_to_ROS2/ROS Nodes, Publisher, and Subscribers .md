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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=f3a2d65fe2877cf441431851f4302fbdaddf272d6639943eef3b59a002cb0bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=80c39a9785b49665163146af000fded2a71edecdfcac065b5bd552e420cd63e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=378d200d930ef5400685ff09dcac23173d77c419aa51f6e957f128dfeb56a86f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=189e3874f60cfa34dc5cf9631d647b8afa85cf62192aaeb56bcb17af1ca4a67e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=897367f6d95dcc60847952e3f594dee1dd40301d50946366aa48d4bd5f361b69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=c86870ab820226b392c401dd50d840b4ad62f7e685f82cc665dd1c0148a3ccfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=122a9f6f02952070782eff2e58343e2ec8320d582b322cb46b9c405f6ce99db9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTNFY4B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCgrMoRCwH86P%2B2cl4h6%2FrSnlavKr6FxnnYosqKJt2juwIgcga%2BdtWMxbsVF9HEdtBO1PeeDJSKPVigSMnUdAZx8q8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGELcZnjLGJ9aC6m8ircA6SrCdSAvI%2BOlXxybETx5fG3CLWVdG8JzIDb5xaU6goNo70cHMPJcU%2BRbcV3dn%2BtpC8N2S8uF1uqOM2Bwc5OlKFbpgXqtr21PBzhOJKMRZY2EMcyNmseWWYqohi3mQCJzaxRWLXAuy1a9IHTeI3G1rcHl9%2FYJd6Idl8OWZBzA5JfRZce1D3P4mkRueWspZfk6GKvV1nnMCdIu50flGiOcYezTCsoReltUhq2ypJwT8zUocCyU9QzkHnbBuuzH3mvYV7MhemeOZiom2X9A%2FjyfDIxkCdpSOVk6PhUq3Olrq%2F3i8DoBpA2zOnEsl%2FYDtn7c2hgWLodDaNoBqBlLsi2qAE5Aens0PpcrNe4iFvRnMhoBK%2Fkkq%2BxMOkIgTDsRv4fM0XMjaJsclxEv%2FjcWK3DkuemKOlDKdUiOQ0Z%2BZhP6u40MrtE8D9VWSMmKP1zmWamULgCcEiA82fnmL3xVyyXYBJ%2F8M4l%2FIX%2Ba59XZtmVAiKKsn3rKAgCCadI5wnvB4wy0dAs93oUWqhHGa%2F2me993N74bQ6wFFbyA2Q4tVpdWNuAwu65cjcmH1elHybuVLNZozY4FFgbLrRMURH6KePI2Upavv18p2HbEcWXIkgIi4NOG540RLxfDOynTc3YMLSQir4GOqUB%2FfZhvFzKszvDwBfWo7epTuq8Dn7tDTtSCwUrJT3FlMX6H5jDd8YBJEqxnqb28tHLuqyJP57L8UHZp24ZkOtE5OzaptlWzLoG6uGE5YdrVm1el%2BbloFUu4Q%2FSM%2B0N%2Bdc%2FtFansyCONzFVMNQnDz4lk33His248OS6O76ceudiSZfYEcIPw5e5ImQykkfledYQDzeB38SXSKDPqSFOtIJrunOQsxd6&X-Amz-Signature=10fb80d1d2e4a9f39a364ec73af237b7463c74db33ed2dedccbb7851af9a3c18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
