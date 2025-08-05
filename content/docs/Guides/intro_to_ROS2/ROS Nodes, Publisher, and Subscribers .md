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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=9539f7b48ad884ad0c64aebbe571ac618631175f564c7ac5c7ce7ba0c7a4c25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=d695f0fb71da49fe5d763c41411d36e8e77e8f4c32bad560c4594fa62fabab36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=51375b971cfd24339c273f4430fead13613d3fe8f4f314c664aa95a81fa72504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=71e313c8a5e6960b3f79c66ed3c03dcebee38e998fc60ee36ea51714e361d2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=9e7677f65fd89d3e6d71fcc79034a827edf99b0a80a51a47ef8332202f8043d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=37e1499bbfa04f99c9d1aaedf8ad0bc3681fa5501ef358b71599fc371922bdcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=4c4c47b270289a9af8dbe1f41662480edc29078c2423dade1df84fc21e422653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNGCQEX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC7AB8D1GUJV0gwXCVg9niGLeSbaeloIXoBHWfcAObHMQIgCfU3a0TejBMs7uvA5OyZYIwpdSI88weVkeafLk3qQI0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLYDxFS7xHv9PHhKQSrcA%2FNskDofKuSZya9L6Bc9q65aFTQczCFZV9DpJgZRc2sxN6Pvvjr5UCbQeP9Xa%2BxZbu7VQd2w43GxON6lOugDFN6CXSq7Q40fPLG1NGp8iEzVX%2B%2FZRgfgrGly%2FQuwoTsOU1Cl4RheTNukSJ6toJRgUA5VNo0VoHGC1CiCqIha3iWAZbdJJeBzqecZS0WrbP7XG%2BtA4qDYA2jwwuY0fQ1GSCorVeBMQO1vqNMpF8hJxZ0AppXTUr29LNZPQFdwmfp9fM71eKat8hoka9gU2k3ltSk3Cp%2FzDd5udsGwEeZCgnz3AVy7PJr9YOWlFnasWhRVaoOBXOFRakfuuPO080zSFvF954fEqw26Mhcios4SeEscyQKldPkKoQ0lNdz%2Fxjthsd%2BaPEVUnA92zZEGNAO5fe7t8Mm0jnHJMLyn%2Ba1ONNM9ADrFDD%2FLARjWMk%2FfFsHQii9uYkQDjz04aRkgkNU3AR6mRQUFRwsEnqGTAFhBX8DWr1r6wTOvywt9Tim4fS%2BOrXm8eVtzocY%2Fc0bvOyNPFxbNgNYOfAPUP1e2P7VB5qRO6YWl3u57fYcfZlGTbbE%2BWOvOp8jqIigP5o1nThmocX7%2FIh7aPFjv2el8o59%2FmFCV8Ytv%2FoeV0Ho%2FvR3GMIDMyMQGOqUBGli%2FsaqMi8n%2FrJziZ7hZ2AMKafReWJfq%2Foy77jxqlPVzRno%2By2dNwGRdPbuuNQgIEOVj98IGTu7MSq%2BNi6iYVgHtoWWb164B5581jtSITrpM4MAOSaNbwIRu7BjVOd2Ctb6wmwWCJmy1h2ytgzhuB0ETWoCsZRclIRYqy6EfwZyC9TuqOtsNn8DpgMWIKBd7PCaqbVheUx1JNhFCnA8is%2FEcHLu9&X-Amz-Signature=8af9320121e422bccc9ff89865f720e4b50be778acc698b494b12f8d097d95a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
