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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=8f4e8d96ea2d3edb05816243e11f2b9a0789a53a5bee761eb98c49f74f51581b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=75802f2b348886672201b7348597a945c91ce36594f92b0358b986fda3a7d475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=6454ebae47d89be202425cc1491f9d54897c9fae43d50f35a0beddee42681a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=26cb65d072daf76258f380683fb52a887469f23e60ad68652a3ca20e894517ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=3a9fa7b4810c59c4cd18e88bc858d833edbd7dc5da6c44e0b33366175d26fe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=eb46381fe1ab58ae526c7b5a0a0ee4423c6fd91adf6d7233936f2a1211a5e7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=fe23547d18fb9c2ce042960cca4ec35e9cfccfa4dd0b0221955d69070abe27bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFBXNW4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbtB81DNNl6e7qBN25nP%2Fm2W1a44YytT847w6u1r6WsQIgO87Z3X7SHnWw6zkYS5jQQTuy6Sytnp67WY9NrrdmjYkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep%2Fy9zF6rfZaRIQCrcAyuuK47LPWzq0Pp4QnabU9KDita7%2Fo4UT27IjoRk4FvfKa7V60SQi9CHBjVQ4nMTDoK7vkmiNH%2BOhwi9clCgyQllV9joKpKJZ3X4QBHWH%2FyFPR%2BW5SpzsqB2LaF5Q%2BrkDloZr9%2FOFO36kb%2FmKXqJgwlHzvKcoB7btnF71sDlZicAtWn6Jg1dU%2B9Q%2FIhdf14h85izcrjs9lv5kfMiXe6cMDcEoxtWkSW7Y0fqtOz3TQhD0H8duFljLfieqeiobgj0TVqLEbTKpOv%2FEdiTv9wdk2PHzHorz%2BpAu1hHDD1GbdoaE1qXc77CC9lgoFr6flM53HXDHTsXelw4nQTsK%2FOUyMOxa5a0aOsCEd5ryiwd74GTgozRUnqakNRC9yHAQ9f7N1DsG%2BSB6Z%2BCBDDiPmnyKOo9nwdE2cfS6FyckgfvPSLld%2FIxar%2BC8B0jyhnwTboaS8ckWh5G1RTfa4ZZSgBxoHVwH4NK9k2sMS9aae%2Bz1p%2BlOmgZj67rYH4CW8dTsce7cEo6qhqCvdoAOehCSAUMlhT4A1fCeBuyFFili%2BOHAERqhMD%2Fg8s8RSz7EE4LtfJrqSIFK65q3y%2F8l2ES3%2Fw61%2B4cpfFvGS7qXYl0YHupDBL7Z7q8mmpGUBBdVEvSMIPZysMGOqUB%2Bpb0O6QUh3579tNC3VXAI%2Bp2hbso0PktovV8rrre4dFPpQEABGja8hPkG9K3%2FF5gbx4IepdyKvZ6pC2M%2FB5ViIrSqRh7XTZirtPURQAtRflnJD8v%2Bn0faHVXPEsPzvuFGF6LX3wgjh40ae2rL%2BCCmfMSC7Pw5IrkPqQB2wPXQlkER8lEXWwLQV2FXuIlzXY9KT6e0rDoeAumYtMYezOOsiK%2F33Vb&X-Amz-Signature=9924ad18ca619463834bca6292c13a8c324a1de9a0aeca5b63e47965ec35174f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
