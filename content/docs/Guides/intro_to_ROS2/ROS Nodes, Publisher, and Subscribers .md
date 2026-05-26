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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=4e7fe0e6fe6242673b657479da1e73d2794305a451d50740b3096accdec7d7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=30a207cc80d2fb7496fe82ef4ef03bd4a09f4f2d4c7d03209be10cb32b7611ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=0f9876a04f9ce8c69b405fd161121aefafe2c6e9f3a2c70e78486398912362ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=94f6998298c05c514199586738f942e460ddf82aed412808cc1b1eefa38aae35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=eeeae702b27ee7f1196acc32b922836dfcbfd9da14109084806f250ff5530074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=7e1017d99dcd8551029b4d703fc3a8df40e88cdf6326f741983eec3918ebb94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=4d37fb21b9c577ac33be39f1c848a4896879fcf8e8e2bbca50960117fdc9a469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2E2QUA%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2RDdmaUdJzShyeIyP3vCsYjqIpYHFYOUknhPCE20FtQIhAJKizXeEwuX4HpDL6B%2BTDbC2%2Bo0mC9mLUyrHlgm6nyHyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzruyBnITmYZqmusAMq3AMEbvgOOUUBzTYgXy91Q4Ies4Oepu5EJ5JvHEKB9KKHoGfxrjClqROlaq5sSHXm619nTKmPo6auMjUVl8SzkCN4foiSolMcInZaTf3X8tqq%2FUD1fPRv0cAS3D0NSCVB502KIqk5wfBJgRC5GMyA3tIPexzQAuIXvRZMuvcoEC2%2BOkFj%2Fx1Irxuc5gg%2FcsQe09gjJbpLSNkfcGS3qbuByzs6dFw9klXvDeKYMsnLxhG4rMIJ6OgAFjWArmSLy%2FVm8f%2F365HjqCihLiqipMqhi63w3vRKJIt1602OF2TAlq1yPz0AdQMJq9Wko5UxGBATtCOpqzwg7CUUZPXTSTHrk1EuuP93oOj782NSFbKJb%2FJc0xY2xQ%2BFJsqGI1ijaHZUoxmMjDIu8wMzbKB80aU%2Fmp4FMo%2F7KfKfS1oLK%2B7I9qnw38uHcDQzsWSiMCohTsLs8s9WQex%2BoYzC1MdthCQtoglKeKYl1YsNWCiZG3VEgUYC%2B5FtJPPSUbnhmbGqCXW%2Bh%2F7Zufx6G%2Fnf76%2B5SqWGNxAFVVRivwXemm7o5qkbeo5T5YNjw3vyHMb7IzeFsGCBtC2PYqA4BTo3yfHFk2W42vxFZzrVfgFdklze%2F0D7tiFdBdpA0gPsnyGm6e6VxzCU%2BdPQBjqkAWAV4uxQ6hVWiaDVJ8RYWm8VZPieRY2XK9csdJmuuhXYrpRq5JalTl%2Bql6tthlgy2aIYa0ZzAF%2BeiAivLmO12Ae3quEXuoP4w26SaOz6FXtnq7htwcer3FjWiq0H6GM50PraKb1f6T3JBNdjkFgKlruoNeo2ki36ItcnEOvEgnHcMo7iZIqZMwiVDYIwhIQ%2BBvYWsUXOLbYKvktCDLoKdS7sgegM&X-Amz-Signature=e178272ab9d178de3175e5f31437ea3565cc7abc50aa110ae6494ec299f24658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
