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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=f0eaff9af79185c987f52a174ee0d85590f880d6fb985e4cea1c719a2b170020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=b7c94a4c99028b0c82a4a5c445a8af7f61b2ed7de987af73235c5d0936699d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=48cf1434f825a88c0cb56d5b576987973e82884af6f522c31075c737ea1da8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=9d8fed599afa3cdd45e852c967b266afa7f0a8c93f51b35f038e54b63b28cdff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=e184abf47705d0d9f7e59ea71428102b90361f6d0caa00bec602a64ea6d82cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=c3c29ccc3a0a1669567a15d8aa4d7326a691d3ff3f2b9ac9127f469e38c07836&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=9f9a9c7782018e1e6046b13efd12fc99477e97fd453abb6417a89f939cda63a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATZGDOS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDs4ewkLQDXmR6FJ%2BHUMqTeIyCgl%2BoVhq9KAv9A7pZmDwIgSMkP%2FCZX3L7cjCN%2BXtnMxv4apfvtmXzQE8mCXNeMb0sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FCBMW2bGgbAXFzmircA5PQVVnJzcqsMUhZRfy%2FJlchDwJEsM46dxeB4S2u1gi%2BkeR00qoRwhjsKRmOKe63Js%2F5WT1I7%2FBgeiD36jSrbdcwZBUg9nniw%2FlCZ5GvWw4N20cVpbPE3AHsp5QZyTiICuUqCsLDeVCuIfjoiCkhCb3mlJn8%2FTqeSLmNfe%2Be52f%2Fyl8tanzv1XVuREX%2Fm9MUdZf%2FV8Z1gkpJZ5NNfpxPnt6BZ9OvsmJC1s7idwsS2Oh07gL09zdkiJaxcFDYxMqzB%2BOXTcoUFABeHcI52iKIYwkXTNvxJbMmz4xnPoX8fPMBGUFh0PvF96whA587t0cnV94K0G1rUuPnOXKf1ar4DfdszbvanT9bGPs%2BL34HhaYBXgpBJv1lDGjbgcujMdnLPn6K4Z%2FbYtJ7JcWkjGZBUAETUGlW22BE%2BGvf%2FD1Yhnhc2kIqKETkt2e3aJluW65RCqDcrLLmawmsHdIhaFk2y0Y%2Fwp3rkx5ptyMf9MDyAG6ZcNsgIk8zmOBh6TVlccImYmXt8OKyB2sdmlTzGy23qgH%2BtUkwy5Wv48thFwN3%2FvVlUbG7L6W0PrTrrNxP4CVHaqCpRgLzoJiNBq1APTUiZMj5T1PHz2zROCnYMzIiJ%2FO%2Bd6prM3%2B4RGpyExtYML%2Fgxr4GOqUBINVtdP2Sc4Gt0FE0aC%2FuGTpcTEEyKQ7%2Bk8UXYUggwOXX1%2BejCteel9w47sv4S0ai744DOvkvW%2FI4VAUFA97arl5QohTcQXztDXjQyGJCUomZ8TCFDROmum1uPi4OuzXVR8JTpG9dZdh%2BtisvhH1cahObMrMHpzcm8f9LTR%2FB8TEEZEbyE8O05tomPbLJD6OdG8Lcx%2B4KpevZ41n4eVbZiGy4dc0C&X-Amz-Signature=2c9a4e049ddbf632c8640e8264eb9dd501d105e15e5ad2ee62e47327d78ed47d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
