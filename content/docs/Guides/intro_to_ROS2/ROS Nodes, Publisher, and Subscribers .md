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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=8a164f1f113bd1f7ba0a6501ea721e6227d12f0145374d0f6d7e7633c8fbb35e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=e9326de18bda78beb096d5f80be1953763119e51623da93c1609e443bb4d70c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=c4b4890675f5eead04b525e6c396a57b627b589dd11512d58d96ff55ce79a9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=db09ea00b6a3fc24dad11322c419f697b94551cf2b73606ea9a2c6bde36ab8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=8490aa47a3bdf6c2d02813146c789263d1f169dc37e181dbd2f30912fd315e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=6a14f6b4ae8d8e6e7c8f296160592efa38ab1899f40fcf013085288fdfe09199&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=fd69614412473b04b640231125df95b546aeed0128a252ef2884952f406881d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6B2YBO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGgiT%2BOmy8oTaFCp39Rh%2Bsr0ocFrjLw03s4YTUJavC8QAiAq8PcDbHullwPiZjlsSNaPqeSCH%2BqrA%2BIgEr3jiEdqzSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMdKetTsoPrKNznHwpKtwD4k6D1QxYzb%2BY3wH5FMCZG%2FIIu7LownAI3OsxulFIDykCcKx02leQpBRq8i%2BJtPqR0xmrjtZPHL8HXXPDGu9PZvbJRNw99OS8TfJKgo5VeJwIL68jy1bq44om3PULGEhfsZcn6%2FS6wOZ7SjKdTPl1cyeQJJSvTyfX4NZrMkWIpZHzARznyZDgoUW8%2BGSNZRGHarodCuJEeClfFO7CkGEDVd83cRlcm42VFqHvdbBKJMIGAOMRyO2ny%2Bn0Wx4trkcQL44zNSd1iyMpwRCU7WjA%2BL%2FgpZjBXdw95fdjy%2BRV1eCR7QBTN883b%2BejXJ2kH01mmaNG8sLzPuqIU%2BVA1irhX%2Be3f00gp%2Fe%2FnuARtAKWzAV2sGzfEeYW%2Fa12tyTw%2FOhD1d%2FbeiSx9xpcH%2BgBzRbEBWLf526rLovSWUOpzMkHpU3hA9rc7u%2F0SGl8274r%2BGE8WL4W5DqjhLjZ9rEscXP3wxTanguqg2gI9LNwAeGz7i1FsHsy6lcpjlwFAWhE%2BSS3xVDLaMHrJCV8N6uEoS1QDljbY3jT6CRLhnb0eptxRi0f9MTey6A3ZCIUXR%2B2Ug%2BA5gAJYuyeknVy5c%2F1jpIKCuEGtCVl%2BxDhsuyXQQvKrCZiG0%2FV5dIZuKZC2Qww9vCgvwY6pgHRaxo1fNOM5BZkAbKMa%2BjbpcjTKQABz6%2FqkjILWebeI8XYBdzevqIEn0zWeDDlidpocbcQmZagJW76Zw2qg2lkJore4ecoTV2H4THSQZC6tIaKzFGYfFtTID3%2BHtYRULPV6tp0HUq%2FYQ%2B%2FNheXm8x78iGvGsHroadZMlrZZZwQK3sjYUa4XsaEEdKIWXtgNlxFbOk77ndo6PGtIWMyRDylWGyMdqoK&X-Amz-Signature=4a2516125b1e38c6f55541c4d7458d5c3984918ec1b7f22169a7df12e049669e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
