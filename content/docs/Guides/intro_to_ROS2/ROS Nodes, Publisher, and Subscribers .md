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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=a0a9ba873eeca62ee2062072c0b4e8b615d09b90b5efad0e7b70b3e0244f6256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=d17937d86e54a3007f99b77f99f19248360f82a12f407d68e02ac37668e4be2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=6ad0775528c52e8d56438f480cd1b9d32658ba9da0d8a7cde405455e58947285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=51d5496a76fca3e23a5b545cfdf28d8cc18be4a1f0b3f8818b0b0e44b89c2630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=8375e4212721db7a7d8c7c2fc4b874d63b893effbc32ce189bda0e7b07b8d98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=2e386edaf508f6c0b84f64facc7fbe180bf1ff07d9accde97c3667cd76173c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=670ce05c27f91f2d2a5cbaf449b530add93a7e0c26d0e26f9d33d8ac460918a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D72VZFI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEgGrxxsISN6BYKTuRoLcFSZoQd1dbqIuYPQ9aiwh3r9AiBSjJFUkY04M5INMLrDgB0QM3POlD1fmH6gLPEsnfKTyyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXiQKcPMD5cIYsXkeKtwDK3qov28uwCZKhRYiBRKNWeriLTjlZuOxARwAIpX2sbTM%2F1OlcePdcQBfZommbIkMR%2BQHB1d4r7v%2FA2qqmEsHdDvlTg6aEL6MltUNpczaW%2FBP6KaXvjhGaO26Fl680YMWPAlDEu3Kk%2FU7dnkKGeLgR%2BulFwFATWy%2B%2F5v0Ek6NwVmxZGML%2FtpojD234r6%2BpQx4%2FLTHOXlEQ1buwfvKYujEvd7r1D7ehMzuKbe9UQVM89zZlZoePEfTsba6UMCvjK3CvFh6vc9AvV1MnC%2B%2FHrL0kMKsUVVsDr9D3vka%2FMS7i14dNpLkXjWWXuLm9AfaeanbGI2ZrlXwcYcQFJpab%2BwPqO09C35gimH%2FDjZCO9Ya%2Bvx1vHaMNlrJVgVg5VR9PwH1gx1YOU9kOOjzP6BG1ikSmhgif2KsTSh2SOUOV9rfNvboFM838lxdK5K0inOwhk4b%2FGNqYkimsPM9d6nG%2BXnjzbJ%2BbF6uLcuNK4BDIf4XAjDeRre%2FFrMdGpkuMnZ6gMJg1O73gC%2BYm0zo7aLv6tpdcgiKRDVVW0sSByjRrxqF%2FTa5JeTYuo8Epgzu9MDukUdnui0BmKEJrybSkk%2BPXXID3lxxNmLuSCEJmM%2F10B9lBbPEuujR7mQnWd1IDDcwiorrwwY6pgF%2BNMmRpWT3Wrvi8pIGqkRqfsaZgWu9IIFhr5Ztk5jYp8X9D%2BdsCpQ6RBY%2BrhtU8JE%2FKF4%2FilCOvw5lWp2pJ9swF915wnc6ERbYhE2N7daoXg21Oe4gIj5LqCf%2F4E5eIgw3T3EKjFkJSbxnNYFglHH3D%2BndA2kTfd7Sm8YNUCfpY%2BKCLgkHZQco8KDg6rSWeGdRNnNiBvPzx05g8NbMCxTNHxrqi5hv&X-Amz-Signature=9f9610aa79aac610410909a1dd56785b7ad0d1227f844b4d4cd8ca2c142660d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
