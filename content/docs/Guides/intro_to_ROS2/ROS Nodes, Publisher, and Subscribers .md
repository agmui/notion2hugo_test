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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=d981a338a68da7b1892268beca960fcb269bec95e2e252e7ef32176e2f19cd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=ea09e5b9144b3bf973e3dfacc9f4eadcf9a276c9c618d4d5c64e20818bce634b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=bb4b216cbab26a49d379a40e1c74452f59cc28eaaa980d639927caeefe42d189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=1eb08335f6dbea299da18cc0f9fdf2d07bc9d5e64a352806686774e76209898b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=fa7419efed299e7b2a2fec5fd8155a68a9148efe0eeec425e90faebba44e7026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=96bba2a428427879f9bf0c1461849648a50d738c19f49d208333e60b5d24e9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=9f34aaed5deccc06edb4aded3e72a5b834b360999df45a02ea71c959b6659d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7ARI3N%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhfraqUqSek0OpjzpQ0o%2BqAku1U9oSdy%2BSwPFv7h5yqAiEAkcsXQ0MbQTbEwnhIoW6zJvb7YCI4k%2BPOQXLTYvVhRHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLbOeEuyRolDmV04eSrcA%2BCVmLlaoEv90SXNL4G9KWESWSHEn8waisLu6XoYflu1cPHlyOr%2BhFCxgCJTIQRo7hGeqUgb36L8Vx3pkjaaZKqbk4HbTkHPiFfYuWh2U%2FxGC%2BPF3zJV9oDgi%2FTbN2nf7cWM82z0lmbM%2BhjExpKpzK5dO%2FcdIXtPC2ZFJUpRD1SoGQmP2Hj8p7xvZkliMneVy6sMJ26%2BMw4YaJ%2FkR2V2AKP7%2FdWXKEPXY6%2FHwlROx3xEj02ok%2FfLAdSmg1K%2BZICNHC%2F8h1MnIfuWafgBcvVs93HDVDbB4wQyBilkwSL3TMPz71TRwCMqKP67mYF%2FKMX%2B04JoNXsFYZe6n2Bx7D2bSZZeGQix1FyMNyxcGHkzxca%2FnpbHp%2B1KnrQaFNoEfZzVsz%2BtKXNrDhNTyJ%2FnMZdOJss0vkalBcwOHMQ3yPPc08TQoD9Kpt%2Fcduc5xsBz%2FD78tdXERl%2BfoivYd%2BJSvVhAZWhgtyDZd5KyoqKuxZuX6pXDwkG3USFmjIL9dvuvpvDEwSfoJN9q9E1RNCwtIBlXaC5y1SqvAavU9UWrKeH0VESjtaeW6508JfEZ4Fz1VZ7kipI4%2FmsOzDWm7BTVWG4AIL%2FyXCeiIzyz0jX97%2F8QM5Aaow76APPVf%2BOy6VOjMOnwvMoGOqUBkz25LTS5IIdaJDFcicmbQACUCgjYLapgOttMtFSPdxlZB4Xa45lfbMFG0tEPBHCOox1EVRhGzSYkAoeDWRrXuGqR2FT8Cv%2BKBlG1zBlaytTXpU6LkarWJv2UR6JhDdKQgKXTCuuhVGFTf0%2F8uHZtExwuFtWrMEExrrgEWNfQqMcog4YnG4hZql7ROPF4%2BLfKKj0CR%2FkwNTXr0Z8Yy9%2B0gVfsn5yl&X-Amz-Signature=defafe35419f226e68dc4759ea9a55f6df32a0b4108e69da8e666f64b600f33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
