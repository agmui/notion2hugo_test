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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=c856efb1e124cb0bb8b72176dba35398fc4fa3effe3ed3b1abc2d88b5cd6f28f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=c4b5849252193d3dc16db27de4f11542d973e17e2bbbd27c61027b3d11ea7136&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=f5f60f2dcacfc6ed85d14a530c6e75c7c9637a2c79439df5f06a21af27d2d3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=527575025d3d7268045e10e97121876d620679d624d05d1ad6b33031e7d33eff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=4999c829a40f91a51582bfaacd623b2762bd5ba1b8a24cc949dd518dd1aca409&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=51cb73aa0e9daab58adf418fd4942125295551b32d8ee71e43e8277d0dce29b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=a7ab405d4a79c2cec806006d9acca433e8e57096821fb2110d8293619d80c44d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVYRNH5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ%2BcwOD0%2Fift0pB9LLtZX0ckpy38tKUtJM9ZySYr3Q%2BAIgWUj0JeMS57TdENgUNfGEhqxZe5Kd08%2FEk5D0uSVo2%2FMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2BZWNvZYtJo8VGASrcA5Xm36lSfAseVTcFYYeJyBf%2FboiGupQqna8Pg%2Fo0xNOM0GUwdGL%2FUFWLKZf2sYvW45ofJ%2BTddwefwL0VR6%2Fesh8t7XeeVM0eLHsH%2Bf9%2Fh7pCj6wnjS5iQRQlSGbSgWrQol29tcy8c%2FQ9sx351ul%2BFSVbIAmXGbHHJHBf6sxN97wJWiDq%2FvpVeSMcs2%2BZeFJqGFiY05gnNpRqFFst8HUOXpufIp0WmkwhuEBr3zAuuw97mH6qIlXuC5bXKl%2FE3CzDIWtUzRfzy%2Blyapnzf72y2P%2FPVD2bpuJ36R3EWYhVfH%2Fb7Q0Gvm5%2BM3wzptahemAFI2xQ4AyS2fEV8liq%2Fb4hS304mbiDF6h%2FlqTZWI%2BHXgk%2FPq3QBg7liuYGBh8Ou%2BuA3NQXsx6s5IjAUzPIqbEY%2F8MMmW4BODiBRh8T5ErlYvRJXsQDqYURjP1cVOtT3o%2BCDLKDn2Xnws0hUi80iJcXntoQkP6UTuCxTL6uMQPjFgmDfKTTHBQhouRN5MZ%2FyBOrul967Kwz%2FX4336xBrX1I171%2FsqV1P69euZ4D2m6fnsYK2ynKeMNuowanjmMPrdJoY%2FPL4JoTcXgWHcx3mYy%2BITYO%2BhmCe1fyH8lIElQxe3kH6GvSJYgiK0UT8SlsMOD%2B2r0GOqUBFTDEbd5GGppseOsLj2zmnEbSv%2B8ljUeiIx3OFv3GyNCGjzlr8FS4E2zslcAdkoFCmdBnUb%2BrvyXF0ssNcAPCRmNezrDq3BjOUyRRTlg1XUAy4Od0YqtzFZ3c9MvvPEYdDfcbQg4OljsnJFmSXb3tSv%2BmgkiL328xm0I4G3EJmpmE1VgVpJ9yOdgh%2FGRlMT7WZ2fxTVeROG3TsjBuTfqW%2BCTBYpRd&X-Amz-Signature=468853f2c5375bfc7ffda24487fd4ffb36a5a8d4d6871abaa4bc2fb31340af1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
