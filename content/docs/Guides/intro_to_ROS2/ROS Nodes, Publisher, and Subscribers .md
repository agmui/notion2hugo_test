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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=cb37cfcb569c987a2161d943c067cea9af315d89f225f6ff45e6256abccfa960&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=40ac15c825c3476d33e39e73838fdf2bcec7a110770f6b2af189a1a861a60f57&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=db39846c68c8ab41e815607b1f57a9049b3f12d611a16ed8404082e4b0d5f799&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=a451835336d1c116590249a57ed7d72e3aed0484a19578dfd8b96f77c7d27b43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=054eda93beddc1427cc910a8c5f6c1a8a9fdcb29f9feeb0dd380b1e59581b3f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=69ee51d8994ef24da9464100528b01f9ae9360645f78259cc26abbc0edefb868&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=6de1bc05bd052c55124829d153ef0696d8f15f9df26c543fdf1e5c2472c1b0df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRZ7DQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAG8%2Fz2KTGh8BV4cu1xsxX5U34wPEh9F0ToYGXh3CknRAiEA9uLyFoaVZtc7rTjUKk%2BGY8mMLUgz5Rip7yxtaEx10%2BYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPF89htv%2BWQr%2Bz2LdCrcA%2BYNVqIPRsFK6Wf%2BzpS8Fj%2F7Nbn%2BoHHuzYVhPe446aDb0km89%2FAHRugfiE57kKgU2UEXQKCntHxhtqayhMNdf1BlIisurCCqCYdPLe7OTsJeuNjIW6FGO1%2FhdyqXdLVqE%2BoxbofkjfI3ejz1a6mSnK0BfK70SZA90MCE43KN%2BPChFp54%2BDWw1K52LjKiz%2BjjCoSo0VwS9QkhU%2FneOXJD51GUvtTjMRXYejmJlRK36izI7fMT8A0%2BkwggVm9xo9Vsw0hol0RwbF1DwxnLXV1188x7EleoCZszW0aINTyPV2UR0HqEhmEBzjhjrI9aHO1kKcpvMaRWC0ncrWeu1Sou7B6sMAfeAxwSl1POY75yXjq1dev8K8N%2FsSq2MskZ4zhU8kSeUzxX%2FABXw8N1i%2FpVrOEwD7seeqEOsFVkDIMEhVeAqOcRbeaFUdCke67BnJ0GG9Z1p1fMMOtcIT3avTe63n8oJgsAREtBNRV%2B6o8ko2ibHHGx%2FpqffnugcipNdBbZZsWqhPy5ISK1ka0HTt%2BQPeEc3Y34sTyYg4qL208O9imSZCoaS5vE3UqJGiJnQF%2FV1act5kO6pyuoJjbfjJafFbuZXz%2Fc6k%2BK53ex%2BnJ60X%2By0QHXcx8lfmzRgdWqMLfMgb4GOqUBHrSWlr82t%2BXT49I5GyRVIHSRC6WdwcC5GkyibGBbcx1%2BSjS1tGOtwDG%2BCfwXmTIwDBGq9cSm4PNCapimlLXEzOvkvIdFyrGUGN5FyLy3v66DsfG%2FhiV8QAw5Bt4ZO8Q9ViOwz9kb5Yog%2BApCWA%2F02XVFCs6lym8Zse071deQHtkZANiix6xt%2BGNrQ71cWQOcQ%2Br5HqbENOk2%2F9IyAi5mU8Raf5px&X-Amz-Signature=26a7270e9be5fb77d1d267c0240f5a71d103c059a0923e341f1b2d9a1120a13f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
