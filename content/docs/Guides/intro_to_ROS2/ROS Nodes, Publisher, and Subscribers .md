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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=9014e76fef589cf3bd2b141866e929f4cacc72bc2cb98b5ad65bf28ec5d432f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=a333982c886d38cb775367930d6dbc5eda72e09f7114af4f9d857e4410bc44bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=3612109b7a7e53d241e22489e7ec406538827b57f7e2c45e33ecc0359fa01dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=7ba8e7d75adc6ecf99c3253eadfb51e14f975da76d5360e784fecdf135ec8fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=bce041ff294c934560429cc9f9c690206efc754b8a5f4ef4ba55d28a8fa3c449&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=01237c8c62e4c9fc79443fc31753ae31eefcb772dd07dfd7f77363454c904f15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=f726314fcbee2cbac9310941562f423357defef643692a5821dafcbab89b20fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT26KWDM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70Bk1Q4kaeIXt6qoQ8nboM5DndHbdyLM1QrhDnuhsKAIgarBTcgu%2F4Z2uG5JsbsFT1ufxLzFNVjsYd4%2F2vSlRoeUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFXKdI8bMtnwwFCbbSrcAw1TvaYbv4tfCc%2F5dDIGL6jydlteiRr56hIkTbogyHLG2ONIhCQlaEN9mJPzwPMA7UoD5gA1eoslt3oBvc0JxIlkWuedp%2BmPKuCethDCq8QFHUTEbEHikksQX6IJQknyQMdJAthAInE4Ziqc4XmTXIuaQQCDI68B7%2BlhKRNmmF9zExgsn0iH7Nliuqa37Jlz%2Fjqe72qUQjGTaloRtK%2FNsXixjM65RDLBOmGv%2Fnrk0Nf5NEIC156WnJbTyitou6B3ydQAnN80TdyhuuyJF6uZi5eDpGkwqVdnKE1yusNRXTj16opo%2F10IkEn15CghlYiJaoQnOYl240a1k950ZbM%2FuLwmCqy4j8wxN7YdEjF%2Fh2kptOMQMSWr4YJB0BZeHCqrxcbCtoP%2BJRR1YYF1asUJoHmlhXW8muFHoTVsB587aipSIYsxlaeN4LWbwqjM6i%2FHKcS5bZNWT1aAq4mrZc41XsYA3k%2FIzrllLzifkgcFpczpT48dwZdbZ3WIRFGek0Qq8rpnAYvcO8C3hHH6DTtkcprei0MpIdAqnkFsjiPlWng5JCWnTZMfBJNKcoSp72g566kP40OLZinXQvlZUTUg2%2FrZHk0miG%2BRFeRlC6Zl7Q1j2o%2FYSvwRL0moBu6RMKXp4L4GOqUBNJErofg4ZdDD4hYOSJls3PQaOd8Rc7GlL1I6ecrS3q0q6Xu0ErJa0L6n73yNl3EBUTgtXcmw7cQ%2BVt1332x120HZGLZc38J3BY4Lpoq8%2FlDt7xZ5ITt5EYXz4LS3CwD%2BoHn7wMtwYRBDIcPLeCsAMc56jcMZn31rS5c8FRI97%2BNbSQGe7Hs1CZiM7Y1KUoTC0YDFnCzGX1v%2BaRpyF8FC8b6JYiw2&X-Amz-Signature=951364eea0f6a92a9570f16ac08d1a185be0d4a1836e52c50520bf9a838f2284&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
