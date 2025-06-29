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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=de96f7028cd6ddac9195b8cfbb438040e52ebc82cb2f9e4d7f0855c7dd0750fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=fd0fb6e1d4bb52be831fbd84835f6398a3e34c2577b6a7409d932aeb4a3c0d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=88f10fb42e07270454e2445ffe25458cf6103c61f48f44e747ea673ddfd771ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=e544f94daa86f974f2d9b3bc889c99462475a101c420cf60bc9c9d26612421fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=4baf22643a9b101f70742302b6ca6b01a9b4b28960da254c7e4a6cd65f6a05d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=1abe0b363ba06c36538b8ca096c04757fe3659a735aaee3a64a7d6d071741acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=75d5c1e8adf3eef15ce0412491a76d46c87d1b65e0bce45e34847f88240d8aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2CLOVP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlHZzoit1N5nDb1%2BclnqcKSr0yHeHXIPHnUM2Bi3l71AiBKIFmBrAnNgfLSv7phLv1cqaoGQ%2Bc26hRwla7ya7xaXSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKi2T%2FKZ6VyUqWjbDKtwDtlkiRwpYKK3dsPI%2B4XnNbo65xo%2FWDR%2Bv5HvjGKHibOZZtvw9ruoliqG0G%2Bs2Y0XUzNzB2hKBZ5KDQ3U0U%2BYxvQ%2BhSDYTDP4cmIyphzoDEN1lK6iQ5EYlAGmSLvrkmPQqlRfj901%2BUMa49Omg9CGciU05T6aZiTWQ4%2BwTYqPTgJV9CtPjhjLdQ2mDdeZWUjeRM5w89ytvY5Uahim0lQpCVPjlOiQJOBeNsyt6yxiwW28lS%2BfUSobNW8MAzfnSZzxJV5nhYc7v%2FP%2BI1z0CYgUdWQBdx1kwlctECQabbTQtBF2DGjIkXSUJGpbqkZXepA0yID4vANn%2BHlnR5BcDqCzSSHfrpBjyXHG%2B8688oOWOkoDdf0qjg%2B3UNXCu%2BJcPAqKRKLAcV2lly6okXR8sF0kkODSgaSCXT6ewlr5cTNIclFtMlJgPMY%2FGfgNHw5fgjYNzwgW3Baq2MTxpVfuObY9N%2FEnLZV24q67bJw%2F6XlqekbSoc9lAx0QcUZlbqmSuTY6X25aHwdDzsQXm56EGiu1ehsan5e36vKuKjpvotWNj76OvYqkMtKZu51mo%2BlcfTSmvIJSixf%2B80fovyfNJLzU54HL21QW9Vxg9y3xJmHH4DSdVwC5vdnNfw5F%2B6UQw5ciCwwY6pgG19%2F5R6g%2BGok9aUwCyW5mu1r%2Bzt3%2Fch19xhe045zzb92yGgtfA0jRFqgvQZkQ7Mmg%2B4FQAeTE3kfz9zUgk1nm%2B2eVGdIqFw1Qy%2BRPmsiO0kihTrn8WPBnaQutptHlSLsZCH%2F%2FJOdkXY8Ux0MG2%2FqlOXEwoY3pAACtX5%2FgYf3ba4xRtdBSAXfz5MvMCPfu49WW%2FkOKWSNJF%2B9E3JMP24UNujWBivdbG&X-Amz-Signature=2276e30e7fe17ee77e35dff2a31a11235a9270afdae4ab4334747973220febe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
