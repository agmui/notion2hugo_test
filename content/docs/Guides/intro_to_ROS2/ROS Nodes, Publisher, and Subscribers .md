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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=b70d986b7fef6f95e41fbf303949972a6b1e2b7e8d450325ed067d7ea761910c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=d34da6b147781ceb148bfee061826a9ed88423f4f65ad7a75e9ed1897bd9fc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=f9676e9525ed0b157ef35d5e23eb815480de8ca576ecc4fe6c074a5b68764ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=642c8e967ec637cefbf78b90869a411c12c4998e52947b1cbe03b5eead0044ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=0af61d2bb5e0023c8ea78eb3927a0b014fb0de35c5ecfbcf57dd23616b12994d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=e19c1b1271f72e1c76491780777c126d7a270a79f81f7f557c31c861155b567b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=1acfd39955c66e3db903465a680e2a23ba555b983fe1f3c96337cebcf5710077&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLSUJDB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihn4C7tLXLki7bfyGNB%2BvfkADh07jgy39L0oaNBDwvQIgXGrBWPXHxbxzceohjfovSlGgm%2Bf5DJ%2BLsg%2Fv0GcPJwYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA8exBQSPqaNEpaolyrcA3lpcGQLBQTDMhFzGyo4TjhxeSzclvnxNi0fy%2BW9cRGEEl%2BHY6cNh4aOSsSdDSz5j18MoxqgrasU08P9fBYjHK4kMrnjkW%2B8uttHmtAw9MCkVCTOMeF8QGEKVKBRae%2FO8k2JLXGH%2BDHLNYS56K34RFu7NNs7nuWNzfxdTRu9VZIO3rVu6a4es9jL2%2FvAYYctXRrH1XhmEeFrvKQnBRi5po6P18AjulFDY8NTxEoeKQIKqINlp7XI7l7eodeQ8rWWCuSxrAifdHTic5yYIXeoRNeRndGb0g0oCaF%2FKha%2FZ7%2FxJHHpMWoIfOMMaWCRjwGmlrIzGJNkWZ0eK%2BBG88229BmNvkZaMo9nniGpcXJrVkL%2B2KGMK58DLoQ3%2FVhS2hkVF6gpXpaUfsZlAnjgJIQNaomoj%2FPh%2FTtD9Ixi6KY39%2Fxb8IGJ%2BP%2BMNmGRQHWHd3MpA1cIjBHfTliYjjF2qfFzpaEVx%2Bd6bUmUPEE%2FL%2FP5ifw5iaFDKXVkEe9RDlm1nn7i%2FXah7GoagyIhXPTHzrYtoDueCa%2BIxkhDWSudxstXEdNOwplthyeK%2F9VYOIKAYbwS4ufDs%2Fff1W4k9oUNzMmIZycW%2BNlCOtgdoC7yxTvT1CEVZhkQahy3egjm3833MNeNkr8GOqUB1VSQIsRs9weR40b9MquTKcrTZalN6pNl2zq0oDCYJtfCKulssr9DkByjzWZJH4AxDMnJ2eMRMLl2oK7KF0zh8tnb%2B0UW5i8BlLhljcWXibSRRePgizWdUVlpPaXP%2F2wPEMZTKRC8%2FijtGtwI9krHsBMwnIzaffkaJoJNgF88R%2F64OuS4%2FoelSsfqJwwGIC1mmdkQy2sr77CfPWVs0jn6feBG0jfU&X-Amz-Signature=f337c9a498ae70dbaef0f6e767906c7b9c5fe33ea41087b44d93ed46dd2c2294&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
