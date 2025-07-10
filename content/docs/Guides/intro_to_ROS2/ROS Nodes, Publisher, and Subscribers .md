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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=e10a1e31b835ea042a4ba4de25daddca2dc573a1a7c69d6570980eaebc74d4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=e0a9b022d81e144703a568c236c99653f54fa4a0a13138ce6314a737674083c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=61dd073f076176f55b13dcb58c37157d4886548ff3b578e8a4a708ee15b33cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=9af402bf116fa13285750ee75b56f26b6402ab2fa87e7356d74a7f255d87fc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=039356fb9699a73351f79ee301b176049900901394f3b4202c28ad4104afcd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=40657b79c952e2dcc245cd310bc88a962706a71ce59999fd6d42f54667519a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=292d05fe8f7568b2e14ffa2dff58ccc46f28525e64cb7cc932c8b3ff21184299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVMZ5QU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtbRXYbRWY2AUFxaEzYFfUF%2F4f8B0zKuti05fJlSkPjAiEA37vizsvNJuVgOzsMZ19FVfXTix%2BYjqqubpQDYa7BmzkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlVtaC25zi2eBI6XCrcAyffs4WtNaRssDjyPehiXgHYUNEXX7KA%2BWBxqeJ%2F%2B%2BVNcG%2F%2F2H3UogJEyvHa%2BkJmAeMKjol6Tipoi8Mcx4ChlscLGIL1Qqo0lsEuI4vtDvPVuo2Xr4jpf9J%2FbYzHF%2B%2BokLN9mqjs1m9Mlw3t9u2ttF4lhSjxImmhQ6Fc%2B%2Bl5qaSaeWOgehB47v%2BzVGAbBFpJX8FjozQSKSUlLYxBeyGFOZb%2BN22rINQ1jpyDtluTsE58Pp2Rz9ezZTsejH%2B4OcHHDKP2P%2BzQNLE2m0WZoj%2FH%2FeqQe7ATbW5Esr%2F51sSpYNSI5S0OmjFimPfelO1aMfIA9X%2Bf2y%2FsVfD3zPdK5UL9mxdIx2H1zLwGuKIzkcEEn87CMq2DFPdJQpl%2BqzRwBGhe4nHZe%2B6xNJ%2Fx32i%2Fs4aFzUSle6Q7SCLExlPf4lDIj5avE5lvzzorufhPq7e3yGICVHKx9IF2BSBFT%2F%2FWR75CLcZOZOKIuL%2FLUNL2kIPef3sCuia5L%2FQWLdSKwN32i7VMTaEpH%2BhSmDiEjhisEsmBrcVV%2F4d%2F9vgxOj%2F6%2BJvifvzWf1XZcoUBIEOiYNTxqbkR9z4bmc1zbdgM0ffl42sbM7IEBnuuGe3VV0h2YBT8d6dZHN%2BhAftBazP1K%2Bk1MPPQvMMGOqUBiH8HqjzAkKbEDxgLmiN7Z5TQPMOdm6t4j8FMwRW%2FO2MeQP4ROMul0LuQwNLgxwy5VVjGSE3efmLyaHtC3UW%2B1vgfbfbQptEmxqI6DpcURWmk9orbNfdbpbzz%2FowJtGpKq4JsvqFFCMkV9VUu2Haan22AkFDXGrS4Y0tXshaP%2FwpRmmqz44RvQSA30Qm5Xs9OMJgEAGuEdHsaxhj14YB0RsjOKPuO&X-Amz-Signature=2122811ee0acf49b6a043190faa4f51fa9139d857b99187979be577fb505351e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
