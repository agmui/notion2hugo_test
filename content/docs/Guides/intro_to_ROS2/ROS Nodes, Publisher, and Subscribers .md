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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=b5e6f749f3f2f2edf91a7c93c15ab4c6de1a6b88e0b67cf82f09b05da142ef2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=68b7cb7ad6870e171a9c84788e96ec7417250ebdaee99a74efa7af3e6b45d882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=6b15b8baaffdc7bc87e64c3fe63711a5c0cb7428744b3fc208be3a50455829b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=e3d302e23f45fc06f4a64226ec7b280b63d2b775041adeb576934dd8151831b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=ad8ca9adb98391f39db06b33d300dc696eefd738c5802c6fb806752ae6f32d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=89847712bce6fe3f22b4e7ef01877f49a0cf2d80288732cda8a3c7bf4f167946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=c0ba9792c8d6bf9d1fa0b6e280ffd21336656d574c8e88ee89e5a2b3eab30bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMEUB54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGyrYyiQA9hzhsqzjcNU7HmUIwDPmCeOByJ2v6mViXBQAiEAlTu5opFlsni4V07rEA%2FJ9KE8WH9hGjqLK83dmJsLSM0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjmrf69XxYhy3eZdSrcA7vDsO5Eo2BLLy4dIL9KKl0YF7A9TFbLEqC9wPKhOlcNpkU7cItvxleoUlstyEsetlgR3CZQBT692mtPOuO%2FnbTv0YhoK11Lxm1o5uw3Qd%2FhB3WH2iN7voc5cRDkC3ubocyLC8Ss4l6GP3ZXwI45%2Ffi9%2FZ2Zt7%2BDIR29GR782xSj%2F41ZNLsiQWS0aTRxK3j%2BIuv9U37NvW5o0sgZctWYblLg5LfYuC3auS873jKXmZ7ICO06bU8jKB1I1%2F6JJSE8eTBNtBQPmOz31X5KkPRuLyJ%2FEo2gKtr1YlhKxyz1hbbL8o7OuGK%2BFW7H1v5P2o%2FARtk4WbnQ8Lv9MdJqEb8%2BRV838jA%2FFSOHHadznVFHhSIuy9kt7m9ijKu7LgJEp%2Bed0%2BoOJObF2m%2BrWo5d7AqFdsl7rg8AxY0EdcwmvAdtNwaE1wJzW4OzA5enor7Iw5ieMQuX2XqtL5NERKzIbcOTSe%2BRlbKLDBc8PJDxJ80I3UwRvNCESO%2FgzzfaXGeZTOXv%2BzZ49iYLLl5ygyvu%2Foe06i2MHYo%2BwKdu4VuP7Wno17K%2BwqBtyVvDMPiFSta8%2Ff5U1Z4%2FtVSZIsgV91s0bFga2GxTakK3yuWBL2HaGV68sWNNqKy2LsG1Pw3eAox6MM6cgsUGOqUB2%2FCaFec0VOXDJwNhacqPCXDTzKn%2Fq8Q7t5isTjagqLESgGk%2F9m5XP50MLNNgP3WkjNxCyc7pmyQ9xy5lxAkkyuq3NunE7WdiTCZFG1PL3b%2FOoKlOWU4Z3nZDhaaIXENpPk5DbVs%2BISevnQ6hDK5nw6C9sCa0FYy%2B%2Bbc0GQaxHGvPyqZzVegxJ4B7ccpINchazxlhqJ5gYfAsR4xHXVMi3qviHBbn&X-Amz-Signature=bf8be6fbee6482a04e10744e5760f73b63ef31c1b75c21cc042f82046a95231e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
