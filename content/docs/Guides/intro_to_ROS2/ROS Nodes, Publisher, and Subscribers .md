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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=58a7ca0e8e3d725d4757a8018bd7ec04281dda8f8e2ae0360c68778145e9f4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=08ecf421fc8c5da34c26f57a98ef674799f781fac30b4ac51810a7ed724067e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=1a8e877b09dcb9f5352b25f6f3da4fb1d285cb40ad50f1d969de8e17e9bda4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=4ee5bc6f6b79813f6391ec7491a02fa0f9e900cce62d628340e6a27a78db5bca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=2fae471ade799090e3a081b8151026982c1c9c78337339c22cfc513fc3912695&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=06a6fa8be5655aaee7b75064641cd6400c15b499957040ab139270d26cc878e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=304247c710545cfa673c39479489941a3eb52691c33d7e9d883f01e2a151825b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJB5AVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzuGsiIC0YG%2FISt5cBPQD9M1HtrWnv%2Fe6k69%2FbnLPwQIgQ%2Fhimqk3GLzlJpIh2QTp13%2BikEpCJDFU00LMow1zQKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCJZo89IwCBDYlJ1HSrcAyekVHVSdP%2FnvlQnn%2B%2FbDg6Gubd3t1h9QP8BqHoY2W0UU96hacEdhHlfYM7YBGJPqfucw0lyQmFZ8TQZ4sFF%2BgwgB%2Blmlf6vjA%2FQKQ6GKQVx9iblDiKkf4x5Mj5CzvMVxB%2B2w2L8pmQ3ZT2lWSG5ATcWFRWvlEa7nq%2FaoGVdX4MvF6BFlE359tFfBCYrgKf%2FAEuIG5kRoxRy90f1VA%2FEMzk3kBRMp71y34QW2%2B95maUkn6xFK6hnB4ir4qBuLYrXMascFB1%2BOv9vl1HJwtXO04ZvspTISzamp%2BxGcfE1TpLEGeScHb5D6SK3dMYJVSk4MWID2pgDLB5uvM7ofhrs6q%2BHk0gF0IZmQ3NkgKX9DyM%2B8aOROxIQ67sYgmuuq3%2Fte7EDxFE1yMQwhfQu2ZOEU5CijBqEc7bCD%2FGctWOKAenPlTyxNI1ZRFjhDREyO0a02vDf8yXb6bgDlYzOZJpWqcEa%2FrcT%2BRMI93D%2BAMMxtae4cAcR%2FTeXpXPoLPj2fu2cAMtliVTDDFtnVCZu%2FdBobi3eW6iagC%2FnXEXzdgorKGpKlui2o5iTPKkeeuCpA4aDw2CFFXhtL%2B6o1j5ojJrS9H79VXiFs7JxTc7vvCLT1wyw0B9%2BY0HtvIFOJnOhMOb12sEGOqUBoa2jWd5GyxrTPXOA7Xg6237%2BnU7spl8w%2FB%2BLvXXg7Lk0xnKbp7FnxQCAHl4HYpCzzfnBOz7uVg2hkElz21z2%2B2EqGzDsgzL3A6aoBj%2FweD0jdhUVpfZ1l0%2Fu1cidWkUMbRh5IOFJ%2FRt4k9FV55xazZMCmKx645xUXSGd9yX1BZMfagPBxa80H6QuB8o3ClOZeqYKis4I4eY7GEM0Lz0vwa2RtYEu&X-Amz-Signature=c7b00adbac7103dce7987d33191c5894f6aaab7a29e622262feeda320fda706e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
