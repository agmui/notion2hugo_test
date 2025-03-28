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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=d740ae31b10066487667e29b9e0bc16cccd7d985df75a1a567e506f6deaa9b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=44087d1f9803348c147614de9e2076807a57d03220b55e1796e134e4596e31a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=13c36ed1d5ef4954970d26efdbc18ed955639011cb67f199a9b99338e4d62151&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=8065d69bf41b9fdd6091496b021b2e76234a77a10e7e7440974ce3af840aff3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=65be60b59ddb1f08d03c283ab94ff3052d02e9fefd8cd0ab83032956ed7262d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=d1612a45f3b83581d9a1d5eb05369d72e8652b40e13b7d19783fe4d4e18dde34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=15c1ca2b9aea3f796493d2cae841f6e86a19bb2709ee63d4818a188c9ddd0ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDOKVJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlMDlLg7a74rUp9gFA02fpTOY0pK0UJYCPJLxIxJTmKAiAchlOunAtuyIKbF%2FZ%2BcSjNpTevshh%2FmxiDnAGTACa3YCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKSDWmo0J%2F%2FdPIRM0KtwDgIdDQmm1IS7b8quORrepkl0d5fmFe6gPpHkxohwO9hESY0YYb5lS%2B66rUml%2BVBF1WdMNSBW5xdqQUkgd%2B%2BEfUqVOl01jmC592aelHmwIWSoUgMRbfX4Zw38aNzbY95%2BAP%2F3Vb9e3ZJOSOkC69Rx4mJVNxL8tpg%2B8mD9tliRZVV8vXuLelUPJIf4Bz0ZjKfCUWwZPzr04%2Bwg4H7vIDNndPSI9ICkCg8TapYoIUuM8ywlZR6LBY0pjOSREEgCxj1U%2BsqgY1uTEGz3r1fKn2dwQN5QhTGyngOv8iphsZx8LmI0Y%2FC%2BSxpBVc3wpgKt1v6UG%2B48yGquTcwMlFERLmCM5zSi1d5juN8Fnc1K5%2BZl80uwvsRFr3%2FQd%2BfQ4Aw3%2Fn%2BKXDJa07tNDkM0YBx7y4q83tVQI7WgN75kAk1S3o59wmQfcMjl4tgWzu%2FzpUeG%2FhCgqdZva%2FIdbN6E0VqVnlhPHM9FHHyJqrIczDwdmxtX34S6pPeCovxSANXT7zk8Gx2lov%2BBFcuy8AuIY9i7M%2BkYa6OpoSwTRTqHdKZWtQU4RnMpsSALsLmaofrg850fEichLFxPWjdEdLpsvlDfAYKQRUwl5yOMYOHwecszdwa6vCzs5z98h9uLCEgOuVHkw%2FqGZvwY6pgGpBcDmk9S1yJCH7gz2NIiuX6Y1jH%2Fj1KarFmmx2SeeCAroam6vxpkQRMsyuaO5jVls%2BZ434eRDbcSe0QuRksl90ANzYwdGQlER%2FV0WqVpZgdcKvXpAuhtaS%2F%2FxZaQKdceBPAY9z9Iy3pzcXhz597yDSVCVtKkRI8B2ON4jOnxf4r3KhihxYeRrl%2FRQbCDN9oiecY6nMyAFCuMJFOre02PbT7sKOv91&X-Amz-Signature=36d9a62d0745cd10040937dcde4307d35d19527a02d1c9e02a77957d1be155ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
