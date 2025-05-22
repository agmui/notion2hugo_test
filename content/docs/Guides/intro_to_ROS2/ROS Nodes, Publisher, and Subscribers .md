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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=760a300e71238aa9396a2680756ca2fb50fdee68147a80065a878c107848c340&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=9eee655d1901161115879962b6fd69f7fc1467219b781c81724995271d83aa64&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=b9209d5dd41fbca0aa87940c5ec79350b4a79ec55888f2bf9987d17e919f7aea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=46d4a6a1b33ad442f6c24a2784a501deb5b87cd6f452026a3f7c3a9f416bb2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=c4e68d4980121bdd1dd6812d67595517b5b969143e45885012ff939b38acc1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=13ced433dc41a7a26c95f113387c60a6b9e16ab8b2ead6375638e3999ffc46f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=9b0096b8da406f70a916776616bf00d452e588e61f5bc1569d0aac98251679f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UTVI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCUc7D5mwhmNh%2FelsYvdLaqV2QbMHqHMfSfwBgvxvpeSwIgFc%2BgsvRaIOI7BJvPWpUDlUWNbptuwv69UFZ%2Bf0TPa6oqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFbdeVkjGfop50LSrcA4bUN0Y3KC6Bgaa0DVb6v98QAZPWKkOIiuGPdMxazDXgVEr3TdXD8YyDAdbvsTGaIxz5upw5thEmbQKyXPQ4V7NUELcfH1Y6DwvcUUGaOdyz694bPTzPQTaKQXLvrCgvWxV7FPeyOZ8nzgsDg%2FW0nCrSCrrlnPGZ1d1lA9eMg4GQLcWTK8vPc3%2B%2FlEve6ifSTsHACaCnvXDDdJpEy7JGYE8s60Tt5oEIVrsXTfCctlVWGGGzQxojlcZQJ1oaZMFTeitvwEw%2B0nJQfiIGB9cAXe3kmyBW2aaS5XkZ0%2FcvTRNFmCa6fXUdD4ZQzCnSnvVHds0hmf7Ll1WDIr08%2BKUKo6C%2BcDALdEGeihxYtEBonVkuQbjXA7kfsnDTYp481VYD%2BZj3eZB4RzU1Xu31lZMsCaxPYIMEwZC2HPZW5D8iKr3p76fn8vP8re5wHXDNyr0OqEB25PRbdPvwkNl74H4zdYRjzy35y%2Fy6jFp4hX4oLFakpIvApfIW6x%2FTkWYkmw8yzl70YJUVWZp3mqOVAl2TuFJ41WGnGy37SqFgRW09F4zrwhhAVQ8AEJbgxHyszbJ4mJ691i18PsC0t5XjXmN2jZKo148YBo9Ssdn7UwmBXp7K46H5KJMr29vOOrowMKmSvMEGOqUB9mtpXlx5Ee%2Fx0GHwpv9ne2chWQzmPVr3mYo6XnMym7oO6IS5pWunJnhS3nt3D%2B3whv%2Fi5r%2B5ouyDA5T9FvaMaWoIr8KZLtbyszYmPKITncgst89F9kKq03yGSjkTvEPUTZ9wlvOB8fcIsmqIzb2%2FZDdvh3LJ7TITG9vBDGROdNx55JxONgRXhcd5mSV7nTeE%2B4j6%2BN8%2Fa2mznJauGLhaX7cKNT6S&X-Amz-Signature=bc3fb75a4f8dabe381d3782a22fe7f1ef311fb431b72454660849ef29472f7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
