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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=ebd4836bf42064ec85afed6bf515649a1fd8b42208da94cf9878904765b967a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=34c1a3f704996a640f5ef811c1f65ce3a693abc5e8d7ed0d6d6edab401eb41a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=ef5ad9c3621f63576ef47486502b890d3ad3d06d4d755e0f24596b0b7b3cc4e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=acd936f6d6b8f0b7f7b95b37bbfd62920dd2192b96141f4d0b72539dd6929fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=c41426ba22d04f4bea64919972817c76e6c7a2f5cbaf7483b066142a0efc4293&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=c72364ded25f811a5aae3698a529d393a186e406cbd70df1c9510158e46fa18c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=4ec5b4b3e588d29c38792ba6abfd5962ce1629d0523a2a07413913898fa01429&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDA52OB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDttz7n0IySOEL8KvByr3zUCQOPLPXBqi957dx45HSV1gIgOK%2BziJtEzhCQEdhyYAf1jcA90BIktt90aefiV2AfbDAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGRFBUiO3lspmSCHJyrcA%2FaS6c6z5O3Io3yfHMzIYReGpoiLfekDhuivCpSY4TEu313QSPoVuY%2Fz8SDl5i8uQp%2F7zd5LuNKjcic9Comzxg3Pz924tE9Xt4ebh3iU45O4%2F%2FKQ7xh7J5vsoYyLpSWMh%2BNOrQOUQFiqzFlLEYZ9kQGacjiKXvgR8s7FSLbwYtlC6GsVcnuKao42fdBPesRg7QhoPhmim3yWdWzsjVFjuoIZ1krUnw49ju4w8J0rkHqwpl5I1r67iBGsIf0BNWTJ5sLE6vLt%2BQV9Zt6ksdRI8jgZCr2xuY%2BajDfWpvpMAkWFzG1yKHSLu%2BLZQdp0iDsFg2Fd2cO6G5ZnwixZImoIYrBQ9iOPvKSq%2FO3%2FcR30HxzpJ%2FJY9zbyOYJaeXgqFl%2Bmpp4s0mYGaVX978zURKhlybEqEHJ17lbpuSuundgpYE6T5maoz0ATMo9GyKNqoyK4lfkGuPYJa85wb3eLPswYl8XiFHECMKsAlwFcDw8%2FaC3KImIJS0Gbflkg53z8oAQDRHIXMO2w0IwBxwU8cqaz87AHyHR6%2F7dfEVjopSXNpSw6dUtenxJe6rW1ybatK9bjnuYrIwfvqCjMfibMWdkrKJLRi%2FYRr8YdT%2BFEcSFoSmW85XDG30MMMzjemavGMK7B28EGOqUBmRLW41yGFeCu6csThMbrK2rYmIvRd7SMB1m148sWbCB9qKZ3RVUPm54qFjO%2BxDWd7zQNBtfxWmAIJX4G3IGTRzbEj3C1Zyu6jJvMWilUhFY3dscj9yc2rNiWKsWbdmAg9ageXnFGG4Gdcs3fNcV9OcCwqC9Qys%2BvJjYYZfLrUIskEufarEWrbGvm%2B9oand64oHkgw%2FxBoiFqJaPr5FMXaioIf7Kv&X-Amz-Signature=186a7f7802502d10b9e87115360a2b712d8da467d66fb4a62fd067ff3b7e618e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
