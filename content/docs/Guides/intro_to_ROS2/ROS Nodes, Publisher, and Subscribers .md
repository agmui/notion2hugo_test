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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=269ce693a23040565ced4ec098923cef6e49cfc94a30d5db0a0cda1059fcf8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=58c8c68c5c9d7dff67ed700caa0ba459ac3a2d33ddcee6d359a4fb1a06cb4cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=474e2dedc8990a3c67e2d54973066b5df0337350c23fe1e24f4eadc596446403&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=0b7a4cbed3e30f564d389c76b1daa5bc0182bb1bf25cec4c5f0ac7a37258138e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=e476b338b1423f0fe83cff7305011ecd0732caef8e26a2b627cb8b52787cd0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=8c7aac9952f0b2fb659bf9ef3a181ae22b7ae24967a7b1b79a241db6dd201749&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=3d702b6e2826c5a4de391d36d3066a3b51399da32c44cdb9d2c8d1f5a811c9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSKEINF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUuJ1bftWTMPTcXVPlJof8jAOlYF1IMFBhW6%2FglfN1AIgF5%2FPrbQjymbhi5NI71Z59pW4WgDDxB0eOZ%2BuZy4z1bUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeeXNd1Xc2nzeIAYCrcAyIIVPlYzKOu5t1sf0jaOKU%2F3u0sWNJuuLtE0GWffll%2Bh1kd6hyO1rwDPVmNba4dpijTluqEcg3CQRj49fiPHut24%2BaY5%2BQlERTfKL5b4jXbBdU6PqItFZVrCh%2Bc2T7b00JtaTw74DnlmOmBBnvduXEwkSa5iq%2Bff4kl202N9l8WJu9XS4qYS3tT4Ljpnx4Wa2cN6HKz69f3lFaq3zX3IrxH%2FeklLc5OHJQb4UaznNmApssCA0kBvUxG49avrWQ5Euwrpb4U2hQ9mPLmLjh7u8A8zKwrEpzFobJ4jKt4zo6wscoSnfpadHzSs96cT%2F1L8Wa4H7DROGc1nipHrQ5WF2MN3V6MHpYXX9wOlls%2BT6LtjPoRIWn8W7yH7tSU6F41oiwxATHO1HiR02msJo3YKBosCoTQIcQ1Juwm1pXpnp7F5yvfchfH4JsHJl28TvUrZR0eKTaWef6UVVxDj4qwXplGoal9uBV%2F%2F7VLHDPrzSe5kBN7vZF71dB22%2F%2FfjAYJhvrEzkgI7ttnVpiHtVmXen4JIhdi7ih6z9q85Gk4wyUbKKcCxw8CVylmnBZDPA9LEIG1EG8yUI8ktSV8MdK8YcazBrDhug9srIv4yabBM%2BoisCQVgg1YSQmoW0BCMJH59sAGOqUBojvmoxWq%2FvdmHkXAgjqZ0aqJX3e%2FsWWp38WlMcH%2BpufUVU9T9vV8yWtdOLTI2A9iznuTEh7aTPpy7y%2FYcYBmAcot0910iFKrDvaVuKN72oNPw6Koj8972wEL%2BYu7ctqYDJqbsCcIpei6K3DA%2BIE0rarUX3bJriQjV9yehsVmDglfIYbkT1jNmQ6Lkc3PqqigqBaVwN0c06itglZzl3%2FRZpaZvSkK&X-Amz-Signature=aa08f25486153da50a62a01d14d50295407ecffb66eff5085eeb372e0f0ae940&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
