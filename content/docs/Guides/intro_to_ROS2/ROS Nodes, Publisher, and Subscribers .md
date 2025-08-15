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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=4ddcf22a1a142a8db06e84877fd3ff4f07b43a10e9083e32286a34d0cadc78c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=7ce2602d1be959d09052db30d1039d97f432b26ba8651c05400ec6c79f296db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=c40c405c819248a44cb3f394e3c7b1af841cbccc8e8acd6b3eef1a6c3dd088a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=82b5741d199e3b8ae9db6bb2a8b9ac3d5aa663cbbdd74d5ad51139ce98e7a79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=30b5f404a8c4521f142cb76d0cfa4876390d10df93e1bbb9345581fa7b335508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=fcf32d6a4f8d05eda823e798f89f6297e6a7b13e27ec3365f9c1cfd89e404ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=51f8ac36382edd98f95e0cc9594625170f85b8a22448d0c4db9af499a71ab54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPKSDRY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCSjwiRAHJAMuNjKtXq6i0gKxUfcUogVY9tkwqN%2FZmsMgIgLxe8Cb%2FGZayZ9W5dSuyFs%2BZYk7g85XHA%2Fp%2FYtPfZiywq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFTuZnBSATunpXMzjCrcAz43u9c%2BYemeTAraVoCtAETi2mEMbaE%2BvDoDRXUh8YVU8x6zRJ48Khy6pL5kbfrW0%2BXpYCeEg%2FHNEHHFGnDTqAmX2m%2B2yt%2F9xQHYP7rMllqlwUJy5dAD%2B3IlLNISUuFH3IhZRSzmSJKl6FMNcyhq6C8Is2OSMLX5LfY16m%2B%2Bg0XJtM87OJK3tjcY9gEvHkEMRr%2B32iT9EAaiR1VYeDSzN3e2aeXShfuxHWeRQfbK6NfMVDHfvK994bsDgIfvNv0DAK5p3uNpNI6sniSYMvC5R1YPMnCMTY6ZxHNM8ADXO4kBjiL1tUfxxu4FhwwSu4FTXxLJtVUolqDxjiMVZxQNJvEnXPT%2FJxRqFuQA9159GySNUqUim9sp1SyILYwvjmQYBvkGEPMjdpGIkOzOMbQOYWM7p2YECG9h36duIIJwaFBZ%2FovJJDMkXrIS6gXPqUtoY1rj7Qf6xgaOQh36LNW3OBB0LYX0PVsb5zzfHbrhLWLjVE1IX%2BwEClugNb7MKZUqsorK3YU9Ln6IPYmraNvW3b%2FSgo5XkryOPJXTI9PCOc4eWJlo1GD27JKw%2F7OfO1AAkqU80Jn7Iy3qtGzL6tI8WgOYDHNUd35oLWeMGKOa%2FmzcUv63EDxH3gFyrYS2MIXb%2FcQGOqUB4QEozbZUryY4Tokwh6NGyoRzjut%2BoqVEm%2FgXrKyZFuIZ6d0xn%2FIp2Z9poITTnQfXwgds9heLYzjytvGa5rwUcoX882XEn9dZjv4Xts7P1o4VDlkw4ymlhvj6Q7Qy5VO4T9KFpj9H1%2BLM3W36GvALoACTSmSM3zNLEMOwbSDdy3BP7IOW1bPR%2F7bsnhe1DcL1zWXsX8C%2Faf8bxfk90z6KyiY1JEGz&X-Amz-Signature=a3a06b83910fcb2cb9b363a5c66f81c7bef2b4b5690fa2423bbeeb7119cbe465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
