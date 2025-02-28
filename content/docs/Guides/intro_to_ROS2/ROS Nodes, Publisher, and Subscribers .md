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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=7a8075199ce57706525aaf3ef545af1b4ef432c6fd319a02f449c3b4f9195008&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=33569a8167f496783802b5d2e0005a4fb768c40b232cdedf85c35d526e718893&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=14e1fc60f08037fe6034bd78c58cf809ebd2dce05bb651d86f6acfbee974029b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=46453b7d9bf6599bc1ca80568b9749c83de0c851dca8104ec8013a59da6e3422&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=e001dd9b732ff35a13b95a986eb6aef86d2823219ac5bee073728b5754d07f64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=b520e16fa0867219f59c77a8376912af24365e81b760a1044db4dd19a113ac3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=7012cbe23e59cf9ef770f0ffb4165d947fef740986210630b8229d934def4afe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEXXA7G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD7z4B8ONWY%2FWAnqCE53Qj8HEczizQoh2cu06Lg%2BbOcuwIgdj0vv0Gx4slW22BmA9eCgLf0R9aJ7WlBc1fmHLSbz8YqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLovwBbIEDwXeMlnRCrcA7BhJgqcTsvRqkMe8iwAvEquk1rFxEMXA7uNq0e%2B69zlOITMVF5o%2FrtO5SxyShpJsLP3LB0%2FxUkdLF2ZxqyCLkcpBVD9%2Bg%2Ft5NjUOvbR005cpGXpFlgjkjgSP8TrQ1Ycjyw5C%2F1Hj8OEwBnxR4CvWur13KBJ6XC9EEmeCvU9FrE8zYLfGxULPyONfnC%2B1curx6S5Ge3aEJRxcskHGiNzP6uGks2kR%2FSDmJ69f2TT1Ij99SH%2BlodxwGkUHb3y2FQRiRdch336MW12QHyqDH6H9v00N%2BQuuVjFdgSVp5dzr7UmAOCQX5tbS%2BgRZt66%2FtKU5eyDbq2%2BQBGXCDyZaLRVYWrdh7aO8QVM94DnDUQPRtBGhU2InA1o0iQi4S2TbXJzAA%2BraBD%2Fr%2FSJtCyknbvYaCt2JVzcz7m5fl60R6itFkANzbuvvqrui%2Bb8IkMtiF3mW6UqTK8KIHEpzNuasY%2BIrmphdyURlmZKpzPSZcIvw57DUX11h9A2BEASST3Xm9Uy3My3SCsIq7zpv2lQgVSuzrux3ZFMTp3ygYc3wFmEXx%2Bkbk65GkvxMNJe6qpe%2FuMpvsjaAev%2BimX8SSf4hItnP4nY2TAAabhycpEK%2FLP2BJ%2B9q5bKXncyv3yTYNW3MPPyhL4GOqUBr8Av4AaqH3RX%2Bcxyk3%2BFzX1vu%2FjmhgtVl72%2FemfFC8HgWpLUdmCkpXdrbzycbzNksfh%2FdHf2tnmsvQXiM9fkF3k%2FjDI5kfNd7J2UckSGGtN%2Bxh1Mo7XCtqTaN9%2B5SPgNzkfGN1uhnMRuSvW3HzGgEgPkiMZ%2BsxionmZZ7%2BcFWbklmrKOfnudQbdbfrSVIHguiL0FyHuqZ2qJ%2BjBVTyXMCVY1sty6&X-Amz-Signature=c51b2c372611055e693d873839e9b5b41e4b64149c60739597c310bbd9def5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
