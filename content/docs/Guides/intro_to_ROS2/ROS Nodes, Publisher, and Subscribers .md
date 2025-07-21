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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=c3a93701df1da6181e277bf1f254e4da8c41f714c4b4526ecf177df56d10e1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=8463dcfc4ed9b34907ca49f5b7c509836f410593e2607fca3f8c1c46c3ea6c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=4c5436117298653be5ba8fa11580379c5a0b154713df326ad02ff6f333b07396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=4ea217bb6534e1576a38c3345782068a175c86c8f91bc146c8be1b7368a00b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=7159b8327c0ff2dad57d0dd2b1203a8a86f9097478c7bfc91e8f05cfa741dad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=7b508b7dc0fc51c1e55d3f2254e4ec73cd5809c28717200fa968d750206c2582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=fe40736a2d9cb48828a957f6bbb88249703a1a969170de6ba2af2b18213e0220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDVSE6E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH383%2B%2BcLdslQT4SqMJs3bdIJFnWxHSnZJz60akra2BKAiBoJ2GoWGIqxJ1%2Bl3XV6g%2FoEcHxMZptvvWQocFAef8%2B2yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRlWNUXkKLPHOMn9KtwDrFP5t3F7K0K8u8AXtbZv51tmIuG2sDW%2FO%2Bs8u1CsQfJ%2FxlYl2pqgGe1cdEDtlYnYyl2w3zysUtxLDxO2LzeDfSuHN0LnS6QzeQjcIFnoEcgHSPEoUaFoyRgFRx81gVb%2FN1VJJSbxC6ZfdfxS%2FL0luUOH7SCZf8Ub9Jvoz5qOtcu2AFcVZDdciCu%2Bvr2aq6yapjb2fArnpPCtExg6ERgi9MMb7nxHkpUMmV%2F164jxmCZpgkTBVx%2FxmOqFxAQexoqebmNd1ZqwbAGfPpuCS8grkhL8%2FCOMRyyoQs%2BGmbQJJjD6xF0AJIt3ShkWAnNBW3qjnu2gQ9pO0ncphEeXYC8fsB1JCKW3EKVD3FKwbEda9t9S3gU2%2BXE0Nwc7Ev7%2Bsj6lOFm%2FvrG1xOk50J9cWzwTvQPeIoKBfNsSxITAhY%2FIHYk2qlu5cPCWRgeD8Mu4uQYQL4RJC%2BYP4HgjlIWx27mcNbuPKvafTL6KqaA8eQNv3ETDUwLl6l5H8ALkeBA0JA7p14YK632M1X6HQDYUoS89zxJD918I45zUDZ8L7psv1OIb41QmpYV9apSn5GxTzcXV%2FouG7VzQHunxShK13rtXwyb6iBZvfg%2FMCcdr3sH2qEBtDNJEinP2Eq%2B7icow%2Fuf5wwY6pgFgpb8Au6OLIF8yOYq6fOFRf09T5jgq0qpz7Ta6%2FPmUzdFc0gmBPRCx0Is5qhphr0q35tw97m1LOjD9%2B8aYzqv2atOpIzqYNgC7T0JTgO4amEoJ7dF6dP7VDAiMQ8BKTmZs5dZu67ILvYkOfMzCZrOSEyxiQ4Qj9%2BxEcV%2Bnaed4J6QH1mCEQ06hri5oh1pxuwHvOQS%2Fw2kk%2FcDS9gRK6HhAdkdiNZBR&X-Amz-Signature=e96ac661757adfa47b8ba7f49cfca074bdca9d304e613efef527f5bb1559d1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
