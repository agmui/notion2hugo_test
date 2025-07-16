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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=6160e2cda41a717b8514d35dadecdba825c7f5c253d200c43ebb7f5214462e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=e17ec265ca39469bda9647b5ad16de0f6160de0cf3ece6aac09eb8e2148f7626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=f28eb4e4b2f4b89b87f92ba19fa1acf9c72d8b586c7d34d1a2cd3c3591501ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=205c43712f3d56d2daf11bd0d6e1e871dff73fed1c70c84962dded3310c9865a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=04e9902f4e5c98db9179d7fe76e176889615264d81df58ba4852687ec6998557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=30d2f0737a302567ba65eaf19226b917ec1b6e02ab3b45e0d728ee5455d2caab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=2e4b3897c9a794ee7ca620dd32fcc7464dee0298b05a0ccdf9f2e57e7b320683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSX6JK4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICj%2FWXsPHBm0lO6C0jZbKTieZrYxY0uJPF26TgxpqiG6AiAVRZK85jGJv7dLhQmNMigPxe1IBV8OnjTxz9wZRSXc%2Fir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMAKpQDd1Rf8%2FBsZvBKtwDruWyM8OhKOk%2Fd1wJBVSI%2BC6A3GY60R21Ctxi2pLiayRk8cKIUaIUQrybb%2B%2FXFjd2RrFk5xUD%2BPaPCz1PkZUnsom2sntEcW9UbrirJZp3NE3BZxy3DMcIyxGOJjDM33cKlRTX1Ldy3VnmZJEyNbD8mJXhBFEbE%2BwGbqrLC4y5lCvso0HbVCxgPj7lFPJmJvfGCknhGt0epL4wYzR0Hl4E95kW4xlb19mJSrbl3wXmdYEFEb2UT6TuQES%2BkFWROyIcSNNMXu%2FbBQz2TKIEccbVCRn3OxQCjp5P%2FyboQHU9%2BYnpXM%2BjwKsEZIgDGWHExHGq8Wp27NG%2Bh0QqT9aLIN7HgbQe%2B%2FNlL9IgCDjvhfN7vq%2F0jvOAr5v1CnGO%2BzRGNDwo2vjB2Vw%2BGt7hsWWgM1dCsHgncygdzKMe0H2cDqpAc5dMj6PSzU9JiX7GXKFYKxJda6iG4Kc6TGAUumuS3F1Te01bBZS0BxeYuJMnzU%2BBmQ5CYkse8Xu2kCXa54iSAYj4TJMy%2BFYmlTb1kp4%2FKXq3YoWpmDrfEctk3lcaZOKjvJt6Llpvly2Aio%2By2GJiczJqPVF9dKrRQ6UYdmMRK05pyE%2BjOoy26XGiB9%2BB5dqvd1UfM3NjDPClkUo8%2Bwsw35fgwwY6pgE6%2FUG4yuuu2zL592x3zRyO%2B9XxCz%2FBMlsfT%2BuhOTKlZHRPycSje4FvisnzkZpaEf%2BSWzlK%2B94H1udrSW0czHSiCjO%2ByU6OJGIE3R9qSNU20la7L6bgPlwVYOe0ocOuhoKT8eQjxKf9k5L8MhI8bSx6plZd2RGVlnXpFVzX7E%2ByPkMJcxI%2Fyzd8yQtKEM8tYd3U8CX7QZlpZ4sQgWKQMqLKzvIem63t&X-Amz-Signature=b96bf98a3fe9eb04a7b8051347ecd21f546fe182c50bc7b207a517a8ee6dbfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
