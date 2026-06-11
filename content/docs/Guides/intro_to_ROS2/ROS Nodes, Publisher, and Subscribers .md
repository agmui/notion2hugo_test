---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=bfd74a36aad626c7aa773d52d6e535bddd0960e8b16c514ab11673025ce1f35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=6572afc6fc6f2b146bd8bcd35c1f7644dcdf62215333300b2ae00eccd08d5f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=e3129c046f9c7fc3746d278b5d6c29694f6a37c68dfb168b0d6c7e85f74e8e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=d0f39f1713f84fb96e04b4665db1b41d3e59cbe30b12c5f65c1c4b8191463a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=59c1b78e2b1a73740df715135d900d635750415d851d3a683156646e398c32a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=b0ab6292461ebc61e2896d84d37f7f932e4292891540086f91e93e2a605dcf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=f736cc06495ec05446d5ad425c69e472645a91836a6ebf8d2b548f654b1ed798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VAESJX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFO0UP%2Fjes7IyxPBxNk5u6CA9xyfOoVfAJFUr%2ForyGoNAiEAprul6xn%2Fu7%2FiLMrLDFL%2BwgVsZd1ave7YWR7dZP6A8skqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgkOD%2FJaA0yNh0USrcAwhgWlGp3XifEiAcHAzxSVIlF78XnH96WAEJWUpjCOXw3IvCZugv7DVAuUWW7gEhb5jiV8Q4QEfSuTvorUaLhaNuUoc%2B0P%2BS%2FuRGr5IZ0Nyk0Gsu7lOOgmHuWdUkprwx5ZtSUn8eexMiq53ffRnXRlSFrkd6KEnOkYMXQXR7%2B1Z4nFsRzg1DKIenVNKTl2iBGZ37y%2Flns2znpIFp5E2Mj41USMr2yF0tluJ9VqJBqXboazve5E07s4H2%2BZC3f6tdN%2B61KC%2B6wTLRWlDL8jpXClnnIbnChe%2BHphKhFw1hVEYXEdHUV0k%2BjcgP2o5op0tlFl6gvRAhb2PJ%2FaP1T%2FsKZOpmBtaqvoF5gATTSrMqYuhpLCJwLo3fMjEPVQWgmSUsG3fGzUnfaUCd7LCM6Qwg30nfiKpBQWE%2F2gxAVoV6JnYZsRjWGPkGB9oDOwJ2GIpVrtWv5aFi7gYT4hMZjObBcuj8icf7LwqTuV1fR%2F70z1MU0p8wecw1MMSKqaMQaX75ayj2eKpImr6bVH21uF2igISWQg3LcJNjIM1yx0NEpBxE%2FFIq8zvvnzKVfAHz9tJtRFrdfQi%2FCpT187D71coAUVkz2PwtLZtndIPCc9MnDi44exeGCqBhZu7K9fbhMIqmqNEGOqUBMLvXdL1yIhtbuKjk5ba4MYqxyb1lxb43x8zPlJjeiFk59qgxkJGjBsMhzoYBhr8VhQ4dVsFi%2FOtVmGDq4P7nqiuNRyJ7PhJeAQYKOwRpbd7PUoXJhPbbOLUOODF9VSvaTug578Sc5p8v4jcWocwR05rjG1esrx05iVVqWwF82p9SikbFl7DbyeaeZ%2Fp8MeXiIf1S%2B7nsDsxx8mzl4XAtM4HA%2BxTo&X-Amz-Signature=bf6a3f9ab11fdad27760a6cc5e07dd297b4a63fec51746e1fff5bdd202f435d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
