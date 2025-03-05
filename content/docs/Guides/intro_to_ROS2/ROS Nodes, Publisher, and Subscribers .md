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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=6029e1e08b72b3d02dc3326fdbf9195d1be44f29941531a86595c4edb204cac1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=dcc1e77a7436b67e148026eabf8bf5d695322fc3ba84e1d03d806b34f7851b83&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=ded71600643d2ec51333f3195902f462ace7ed91cff063e83bb8eb6ce4a6cac1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=b27724f52f8894643f3ccc8e4383affe2a211ed99d2afca43b43ac9265b574e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=d192142374146ff42c70a00ce2b90d954bef17d5ddafd6db79ad9d2ca6d04995&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=b277e89ed1c331bbc5bdc216294cfd893c42c4f462312abfa72858b01da3693f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=9cce9ae32886ae7f875d0b8bcf355bb0e31ec05eda864af7699e6c3ee6f7e462&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF37T3A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2BFdDJtCpOjOIoStpGlJ9grv5phnQWKQ5MJEB0G%2F3wAIgGg8E8wo3Z8P9lXdkz3veaIMCp1EBSynwAAdFMRIGoPkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJxHpT8vRiGUBvjMTSrcA3VSQtu2Rny%2B5Z0ScpZ5KXckqelIC0HQ2Vl%2FeM2PNO5a3av7Zdd6D9VAS3pqaU%2Bb%2BDkBVj70OZ4%2Fu1UBCLOrLdUewXPGS1vhfHbo5UqPDEt1gZX1RJzvS7yTjNzLEF%2FZGAYtaQLcLMSsGwuG7HRmTppCD58LdYPP0bh5oRAA60i5QSYJ%2FjY6k%2F2cMVm4YcxDacWW9zSYcSjHPiGDcnlWx00rMXWc3YARhbA7sBai0S1yBkICAG1latWuBu9g31uoUDLFK6ERr1eMGFXDjXK5TjM01WxJHuFbryRLZrS2f66xJjeZLTj09zsL1rza3hQ61gdvQ3ETD7F0YVhRKAnHIL%2BC%2BqzGqVlw2lmB8%2FuYy3voe%2FzTKXNqsPMi0%2BCRXcI32mWJM7SjN00aysD5TLjMHEyaINySW8Tn4sB%2BDOYpBiuUa9tpdY4GiaTnTaSfn2mPhbEJ1O3DaibT8nivER2kxTKo5HKLaGNbZahiLpYVElfKPKj9zc%2FP6%2BnXpe2%2FvqLvwFa53GALeC893WsVPbkXd%2BWAFiPFZcnNeDISUVx51z9DRNjUFAbnyKS9n2eNn%2BaxWqXupM%2Bfrq4CAvMKe0YqMOu15fnYeq53GY4C05jzB1uNYbbiaKy2wN0svxCIMJHrn74GOqUBQLcpHl1WQ7Qbbror0EWVqA5lttM9aa%2FWuTlbJVhKLtVtVKo9VyrKf%2Bvsl493%2BcfBxBMhVuGYnJngm0Aw1jJp0yDDTHnDhiqeDANUGUfu2jwHQEg0ZxOO1CLYVU%2FbSc26fScMYgGASBBLQyVucf3zJP9pD7tGASdtQvCnHfMxUf4a2boMUutMFVdOeRJ0nGnH91XJkR97mmEakZf54FDbOggF2MZd&X-Amz-Signature=b94ce42147df0883bd42b84a14a86df98577f531ba7ef6b10efd343140b5ee08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
