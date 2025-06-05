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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=dcb45dde325f54ccf5e81893bd4d3578bd7ec4e961490ce51739c3eadca93b98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=16927c685d9954f9efcb6de81bb32cb43ecb62f647f65db42fb61d783c24b427&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=300b2c5da0775dd896623e4d765df6da9389fbf8dfeec8c7bc05eabde5e6bcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=30ef4d6bb1781545afb3fe89b25009c73b5eccbcfcc17c7457dde57584ea686b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=3045ceffc96717e1f94f191985e7d3e8892ef6b21228adc2f42019de41732a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=1c40e1acaed5981aae9a7888fe8e50890b4911cc5a3e190aa1b6e50c18e2154f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=dc331d925689970c929358cd1520dc3b635c7106193d75bcaee38724c12cc866&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6JIXXZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBF6jwiQkF5BmU%2BppQTlQk2vQxb3lH4tFLbUMWpdZjgGAiEAsO1SkDFvYYsEoAtVeV8vI4qbTgilNN%2F75jXLkocWGG4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDENwiIg9lKijPAYy%2BSrcA%2FzfCKMV8LuMh1TWR3ZfsRzb34kIR%2F%2B3%2BTKPsSVXrJZt1C6w6qWB2HmhDQN8hOMxlzlagP%2FqC9PoxMaSSy6k6gIowoEGvM%2B%2FRFQ7dnrfRqjYldlFhgovUbxP%2BCJ9k7nBT40h6dyzAYM6TDAmlTjgBUjfmFVberALvj30aX%2By%2BPVjnkDEGiTreQ1tZfMljxM1eoZ%2BvaVrL%2BxJuqb3ju3LQ4zNdp5v1Ev77FGIBGpp3b9nZpO7euuwnLPhMd6bXHd6b%2F6SqkloMsO4jz70CLqAarur%2FH2iP3uWFbMlfh66yD9t7EPrI1Q9QLp6ERMKxhPr0MA1G0eiPnhLCmSFxqOn7e08n28DhqeGc3o7%2BfYsBAuij2FRrIRvXOkQMkrxjWhvfdmFuw2GsQM3KBb9zBqYNimDrL4Y%2FSCOlH35X3JyqZ%2B%2Bjdi18QBZiRzj3y3WDyFWfCugjN9HCqdcYrqDfcO4e5ikObnCW9EoIgViQFk4QfWfvjUWnCOvSO7tqzwQCS2hJarzcdEoAH6RAqSJrrBQhWhNV%2FxEBQawxhyfXYxDAx%2FNS7szT7XgBgJc4XjlF1ugf71Os0ZhM%2B4Wckk4hANUWBQCM6HJYONeCSil3FadT5OHn4jW2%2BN%2BAPH%2BT6eDMOTYh8IGOqUBRxReS6GLBiI4VxEv4zZvl9xFVP4FHYyIikjoFfaXdPygPaw2k5Ce84IXxURsVdvfhRcjU%2Ff1rLYZseGPmbf%2Bf%2FDYcOTRiuvWAcLcte7Ok31tnzA0neftFoKausngstdjqH1HtN2jxBgWjlbD8aPLlxBiUK3QvHlNGnGLKsEMcIDGyetuqjd%2FItL%2BIEKyEo43oI9BdDpPQ5ur0IfLCz6XzFSksbI3&X-Amz-Signature=3f1771d03745a7bc7b8852c5b0b52b36521bfcec1ad68fcd7c1e58970b836604&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
