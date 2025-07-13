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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=77a0d4908be4ec46b7d5eb5d1a4f7f6c9ef1aa99aafd647b2320ae0a5e1050a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=b13b312848bf1ca07dcb4b56e6eb755b9bfdf64c87197f8d96c37558076f8184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=26420a2042661530948102401107f7923ca8dd089780f47f01a579436f75e654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=d84c0c4811fe106eaad3729cafc014ec14c60434dd49da8f3dfc5b1968a50957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=2f6fda9db9cef9d64e37c7db6fc802e8bec578db7b06b1df454ec4df8e06d394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=56316bed80883d355c3a30b688912b3fb90b50e82778b699ea8ffa1d1038da2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=bacc0e881923ca1321f0fafda90eeb4a22fee89c1ed6f4fde6925fcbfea87099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSBOIVA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDzdT7fJ1LhTpRQ9kK1QOtHwvFPjWgnWXbu5UaDs3WN%2FAIgHMZq%2FnTh6ixsjeKnVWTNKo111WruCOx2U%2B5OHn71%2F1sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGx5BytXmrvA8VFyfCrcA%2FlKYJdLjwzZxf4oEZIKs0NRcm7%2BPfbNZw%2B4yhwDWose3ZFSKPhUjue3mj9EejQmrBXmoeA3tMt4wKUyFE5ghM4Tq6n4%2FrzUk1tX5qzjMnbpxcKmZUJS%2BSk8crdN1VHo%2FhtF8%2Bca%2B8peKz85vrJGrpO6N1Z1tbxrgg5faRAuBj9oRP0KirofF1220djDt%2FyIUBEanwyWSstWGgEr7gYexE41VRaAD3PhnotIymcPSv6j7CW%2BosHCEjDWgdHXgDbMqqmlio5t7mDYSKfN%2BMO9x4rwHlBbB0syzg7a5MdRm0FczGFWsE4Oasaq35azykAZdxEQx5U4%2FhHTLzKD%2FB1q1afJAJ0tm0ID2D1LKliL1LDDwWjtcgoS1gpiypP%2BoUcI2%2BjRV69G%2FB5Tqg2jcnLoFh%2F9WTU60pbHf4wiudpL4kRz%2BjCVs8jG4GZaFJGLJhTk95lJKMZIEgE3shnCpz%2FA2xgtODF8H5IJrHtaE7CT21r66K9niLuyGlRQBVysgaj%2BdAA7FXdjypMFn6vRsbxemNHVdY7jw7qauRMiQmZhAKvbHOEZr9PyMdqEIY9XEniy7qw46yvLA7khE04%2BB%2FzGF4N5eIPwb7KdhUnTXlYeXa1%2BzXTDrWtCstCJjRglMMzmz8MGOqUBcI6y8R5P4302ahhoTp8S4LueMY5sBnM81sdBOtHBgbbATvSvyvtUqAXS3CeqlHYwYKfgotWXFqaGMSyaKtN4uvrUp%2FKLt5EYHgF3i16DdPj60k24FMchW5ag7KoTtmHT8sW6iPcvYQt0p00ekXG13dojKIgq6fc9czhSAxQcM3R%2FveKcXogkY6eHk1YNXXzIrBEwz4P8TUVi4kUfOEpeN5Q%2FxwPl&X-Amz-Signature=431620971acf436ac17acdd3184cf0db1ed711a2f7305e589c5220baceda3d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
