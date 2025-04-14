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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=78eeadcb24e697f6d451b86d7247ffec455ce8747fbd4013f56fc1f9a85bbc81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=4b3cdb98abd15c44d7ccb332f44e8c5e6027fb941d8b7dce5e86503dc764d386&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=a91e1413333d8ff4b4cb0f908b2ede5ac6cc7451f2a3964030c8e1e0080b1697&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=3a90399316c01acebb58d1c2b7600de9ae18043af25e05968165ca6193a86b38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=38bf5b3e879b29eb7fe764c098f0935fd0f654487e9a999ace48c0867325b494&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=b61597654c80eb3bc2bcb0d35c05eac7a633b75400b42ec8050009fc85914d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=731955c760f2bd74ee173e43587cb83f5698b7d804693c53f430cd08350a0a10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYEEZWS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxbjeR%2FrQX5am5KVwvumMJW%2Fx4Z0JZGXtPJigFp7w1IAiEA6zp1I%2BkJFPromLxpqPut8GgPCVqgXMeqAsbmWA9WkWkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlRCyqmYTIzZiq4HSrcA6gOQJnKwQxTxWilkT%2F3tOdsZ1%2FKHUHj0FUzefUsqDOvJ%2BdBduMtNKeCDCFiza%2Fj3zNjuxSfuG%2BM8I%2BxqmE2Qx8Zl0HwJz5dSBfX%2BPDHSIwYqeVTMhC5OMgmlA7JWstZJarcST1y2rJpzfo18LNn6p4rZgn8zGC2Ui1OlSee%2FNDpVWPMUnth1Y3kR3qUB4L%2BBWgQG3OjCstYKuxvAWj8%2FcnTRcvZTzrEVVgn6zU3cmp3tY2lW8%2FRl8Q55Hv1vdODUwJ5P5fDQm6kEoB7EzU2Mv2TMQw4xGLk5%2BB3rMj2k5MgQ5WOsb%2BovuTi7bQCC2lpmejFB2VuWGXhbjmSo8cVnYDyoEeEdYKZfwEufCZ9mE67dbBAdyBkYn5qyx3O%2BCt967eYzcWoSzJszo8hvrg7JkLIiksdGs3Ar7dBPUfzmKcuswL7maWmF36WQMUemA8nB7Ux0E3xz1OuXOM0rpaK1vikTFYaI4B%2FkAeSnEGA90kKSU7ELfdc8msKhYQo1F9%2Bs1C2mm%2FJV6afPF5Hk6pdMlJt3wz6HOWk0kl9sQHdQWGuHjxYrwqsql%2B50U5QEo3BvxPS3Sk5CZtmGEH22M7IVW0jBjWMEDJyDQhs%2FEt6inpJy%2Fk6yGpYPO4btngCMP658b8GOqUBunhT46AzC4jkyB06drhVCWBbxLeZPakNjT%2F7Y0sjouFuznESVnNFmnPyI8vJmqpeujtXhh2gFVIKjMyYa2IGvgJhI69sB6swhZ6YOzX%2BrDXP8ApA1r0MldI08I%2BaidgmX2DFqLtW3B5miyCiGSshpfZS1Nci7LnB%2FtWU%2B5eLokuEfvelbp0snGQVIIgTj6OEaIKeq5KAa%2BLxU4terwM3H3RP16iS&X-Amz-Signature=fbfd178a77ac83d2b5cfb962bec5b4351cb17c13c04676539cfb6c806bf40794&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
