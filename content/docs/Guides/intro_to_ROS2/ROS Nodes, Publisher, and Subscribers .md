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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=65a2092ff38f6f4b71d0c0b93baf23ddac412e300a90303b62178f8cab4675fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=623820de6a151c8dd45bb9235e974fe6b91bfbfc5ea838aaf5938b7aef23abc9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=38be6cc6a517e68358e8dac714ceb8c0d2e621313a2e85863e7e0c9bb1c6278f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=c75cfed77e9b43413dd12be49a556b66a7e688f88ef8ec5496f9b8b6a7aed326&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=cbb181a619d6f2495b22f312c27839498f1a8b9754ecb791b880e68af6406f28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=6944d577b39987d10763422fbad167ea0d3a3cf1cc6b78ae4903c32953945eee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=f737893de3d25e9ea844973bf586a341ae57518accc0c3444fbb22f15d9f8b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI75O7R5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGS7lDD3oDy%2BdvsIB0oNdkHmIaJdxnOAv2og4xi3b4m%2BAiAzo59QIToZAFJQuhz0rIBVkMwrUT1dJ%2FggDh1pdRrXFir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMAAvUix9IbfzUlEdLKtwDJz7%2FNhiL2R7s3PurqGqD6eAViV5hf58PRuEMj3j8MPu0Xa4cBlBjvV2%2FkVhShdnjitpmT52IbYY3NiRclKOokYr2vxLTwleRCJauHCV0qLl%2B3D4TwAGbxv5tR2%2BVJm%2F42JgIzILlJY3fAnSJFkxLyWOw34xNX8qcmEvlTd1oHqiFO12GqDqxEug12jfRY%2BezJdoC5BT3wSUkJvF7w4ZcA6IhGEzERflkODmJYu%2BGaT5YuI4Gj9JIoBDggHgR3O%2Fzm19bhtyW8fzpCbTW2S5VNNOPSdyPY5V5%2FsB%2BWD0wz%2FEc%2F4nYhC%2Bd07tJWjpmZKJbmDRVNXQxsNZkxTyLLJuY%2BPKt56VrMIzxeTfGx%2BzOqvZzQ0xAf5OttTwEHJ6v6CTYdgQOk3L7woUrmyTeM46VsAjooNVcPEKseCrbYln819hg6zmQZveNsN7yByBi8qmNWFDj1apH%2FadcgBnLftwjpC1NNXJeFCMB0x73tH1nSQYUHZOr3UGglR3X8AEK05G4D4oXVBAXSnVyp3ki2cfsESAgYwk0Xu%2B%2FGf8yhRuz9XWTc%2B9A90%2FyEEyj5A9XpVcEnBYwFnF0x8mEGzCm0tClLb06Mii0buSPg1aKRwH5zKtHUjpXdAu2lxTyFoMwheWEwgY6pgEDPD8%2FFVgr0cZw%2F8IVg43DcbGZk8pOWaGDU1iDmu3daOvpYTjdtWanQ%2BF%2FWM9pTXSF7O6DnST%2B1Ea9PJHZHvXHyKVmG4Vy1gBnYw4TZDd9Q8U09nIsC5vHuYIlwIpa%2BA04sKrN0vrv3ibZWfuFk41qZAiqK5BWZS3%2FUa2jFp6xjdD9znhzfm3NPlY8evRVuh4ek5n9Tm%2FlMd62VRHO7It57CsY%2BGp4&X-Amz-Signature=5c1768195ecfa6f02cb3d37cac8cc63c1439c922ce752caa51411b73aec99466&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
