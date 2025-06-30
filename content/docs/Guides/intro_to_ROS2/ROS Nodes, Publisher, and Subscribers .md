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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=2e8630dc97bcf8f09ba03c482ac856174d0442594a7ff3b5e3cd2da718bcea27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=7c2d58f7b3481fe4736b477279ea012912b23eb624fd41ca2c840930b5efa52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=6633d850d72360611998bf41a050d2aa9bbd3b8e7d9faa08a4d2d4e1cbdb4acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=a61ba0e70f93725228c2a53be899f38d4ec230643c1a402ac4ab58df09d3ea05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=838bbbf451d92f70240beef6831a5c5a66b0a3d125180a089efe515cc8ce4883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=f10fa5ac09aa395e8cb80c2fe73eab39d31adb8c8d8c7571774afa57a1644492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=f245fd0648c7e2e79f31d916561d7215092a7d1c2b1377e3e72d3d85b1dea13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMRQ2LK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCZzdOC9dpiot%2Fj702XtmXyR9NCpFeRu4OacXggojE1AiEAn3cyg4Aw9zuTDmQvGoNLpDRqW2rPGe0cBUSFr6E2mFEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOtKesGNulgpk9HAyrcA%2FjO1oMB%2BgBz%2FCbjI0Ui%2FoxCzOVGPXzJtWWeSLwfpQBtru4E5EXyIH5v0xBUMbKI8wPnDW6g5csafp79OdntfUx5swK9SPV3rwArCMtVMb4UWt6mrwzO1TZwsU0VXKLi33QB9TNG0o9Rw8ZoUEoObZlDOSgQz9%2BhR3anNKRMzHaDD%2FpCiJdAAWz9LnPgRL1ciF98u8AHhsBOSN4LQ2VXGmEzVxjKpI%2FhkS1bbHtces3t28PRQ5LW8mGQKousfdcYyXbMza1DjUYLekZUWD37aF9NqJGKxm9cQji7y4FCxzvKAtjg6agztHMOwZyNB1vtT7RNCxEkEWCZV8l9Xwy5RMbkNZIJIERs0Gu91ksHJCxaaVTXdTK1JzLgCmvvpHqGiW%2FjTpFP8Z1NeLxb1jYQYnpqbhNk6nUewxj%2B%2BSpQWLuxcTH5QMihFSogs3Cs7TTyJDmKYniYyGzjEfpev0B8P7J%2BaUkJM1867mBvu49GI%2BNQ%2BLlxgond71LNiCTKyZuMX%2FEa46v%2BdOfYScE9eXKI68aW7hR1nFcqyDbIbpgVXh8Vzb9GZ1T9z55O6r7qFrwk1twDWGY7xqe%2B6Od2OnY3IqrGCbo1G2NABwMux7S6eK9C2lNCMHeXyBorXsyvMKnuh8MGOqUB16vRaFTx0FYS77xviDZ6IlFM3DpTQDKsIDTkHJHFPvUlAXHFK6NaEAlFNbjPAyM7Zy31FvURnRWJsK59Muaf32X6s0WRk2sEEII8iqz%2FmpKL6wQ3fx69u%2BS1sy4biuUaPPwjbYpu3JhMSEASZJtRFV9PPW%2B14ogydOqi5ShRL%2FymCKhi4hsmRMkiPYdxt%2FVtkqc5RZ%2BcOoQPvaMULpvXRSeYPkbU&X-Amz-Signature=5d996f32e182805fd4d19722d05b3ad9cead401bd6769cc3d0609aa0bc4e8604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
