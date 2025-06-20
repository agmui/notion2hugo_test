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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=8595cb5ff95e467b829c8f61ef36cd28e58e0a51ea960271d754f15633e417b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=d1381b67005a471b9000e9f547ef20996a7b55015fef69a5d849d5b6746b00a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=096fb17b337dcd1a7e497242012023a766d91a95f232dd823f5439bc45c8e4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=d8491c1002fd7a3d4b82d74db430a5b32f47e182e1936dcc3a40858ba9da4b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=13c16a324f7a6fad5aa0a901dd3d6d0d307eb99cc08a04e61f261fe11c04e3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=8c54338bc010ad5daa41cf7f959c4373464c29329b3b5409e20fb7c8de0983d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=ea92aef02aa149bbc7ff4588575f4ec2b8796fb435485d0936e66ee02a908ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2MGZP7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd%2Fv%2BmJr%2FNfwXYoB0Su6ujss5PzKN0FJud70pYgraKAwIhAKmHEbXDDhU0cNCr1EnNY7txVw8GkB%2FXuIcmx2bS4mopKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygRaNLzMSilR6Gi2gq3AOeaXZ7u9chBnuyb2rA5xp%2BtVcojQyjHu6ntq9pRLlNVbJELF9YYWjkCSzoKFkUKujbVsrIfHKOj93m8zlGKN%2BG5Ut4psO447dx8cWWhBkC4IYzvzsn4sK7Z7qXFn1os6uhCf4EYqXPF2Qf%2FCrJkHObWhLCJSrAuLJnt7CGKUL2666q8yzVfGop4wu6zf9niEOIvFmL8z9BIXFIqoAE8HPHjdlH12TZbTLsUeOJTZQCgJElUhZHz4h6vHA0XuhyO73VW%2BYNQOvgoGubqZX43P0Oiby5RdqyDbn4dlJ0G%2FLV6TNrxezYsBvVkV0heOHOJMbj%2FYrCyQ5qEfXoc%2FEQQgbka03xVgc4XtowfWXS5EnzUihvusAQF3HMRoDiRRNwl7O4FmkqOXiGQrmw0F7GMEFRrnwAtvIWZkwelhoIQFA7QopWWMTZGCxybTqktq4p9m5NaPlNfYiSQeEjFEf%2FdRQvKst5CH1fXnrgvtGMgk0qpw%2F2mNAZjw0WqYtIYeYUUWgH2UQeI64CDQBj4mz%2Fb1Il9YrwwHhU%2Bha19ocNGRccaSLCWjhnXUu8t9tqivERIuYBMkUFXjrJPjKQMjuigRhiE5KHW0oaVCMEsFn%2FFoKS2vPraVVE76e8QBiH7zC7stbCBjqkAUkSn6E2%2FH2pBZTuUfMBahSzeFAAWxIZ7t1E%2FlPUBbB8LznBAKReOeUEBBlJ3G1CRrZcARK3EuJCRp8TnPPRYtxuLGTHUX0hXLGniOzgnmKL2jT3e5oGUieMvInahIu7WBonOjnip74cfvxLVIQDsbzzVfKlTNufY%2Fs%2BBwBDOJqo5KlI1stVN7dV%2Fr8BY5Yl0YpkWolxvTIb1Qy5SkhJtTVmgnD5&X-Amz-Signature=b10407a30f709a3a6615a67ca0e33deb296ff8fdb108803d78ee32d833d086ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
