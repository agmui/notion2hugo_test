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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=8979ac222eb20d8ea3033c72479c450dcaa32b615d9a87f1d8bf23ce154ca712&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=9bf84f77d0c05448dd99a845011c2f1e7ec1110c70b8c66822c7440c58bb733d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=8416f1527e73e941e2f839c8e940e3d63c65aa8d2439f2a21dc5cbf7c1d6e7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=66122d3f2a4499e1e0427f0c22a3cbf6525da253793405080d2d90cf977c4105&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=d370204872c7f3a12a798ab2b6036b564d7331a227993bfc6a47154693d41079&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=6e700ce7ad79f70a072243cd87846baf94d1ff31f5beffa289c449a607d405ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=71b7402b96bf7d768dbbb6eb431d6fa2cdab7791091283ca6ba68d6f14bf9f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Z45ZSK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDUonEYaCvj0dXCGddKgWmL54KT96CuDmQCCaUtUjaZTwIhALghY2UDIVe1LwTKptfqleQ%2BIZYtNK46%2BqCsI6DfelfEKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK0%2B5%2BtxsbGAeQLBEq3ANguDh87cnCamL%2B5pycFWMIc%2BNCpmqV0PtWm3cG243W1vf4HCvxQc75v6OO7hHFpfnMSx5jQy6Z8IT3fJXU4sx3G26ddyxZaVYAEp7UHPHC2au0H1nJvN%2F35fbRAbRGHsVRI7ErGRtlnO7X774byGLUULvAv441jA0oim0AbigyTEwsEOTg7GtDC6mapwGIBRbXsoSiFiRHBLnywxL6NKRlorzLRZr98nxb21pP8yWQP0TKlTow0DErOGgSSgLIIswFagjyLReEDMIwfuhIfT7CE71vz2zSEHtI0i8t4%2FY86JpTbdipMPRl9XK9%2FzElBAZn6t7c2fvwvoRwS0JR4HjPGL5OsAV%2B27EzWIa%2FNnApk65dSHcDexJ062b8yG7hJWsK41KqRMi2wq6v0R1HKGfM9o1TRDEv2z5CbHOEN97UI7MJdJ1fsVtTy8EJfEBQsmz48GcUD6RdFiyhnUWkHaOfUW1g%2BwB3R9GcuIEw6aRkiU9oVlLnPWK%2FMja7%2FqU%2F9ioH%2BsVGMUL69pL4QVQhEW3QrdOQhL0yxflA6unOFlQKjpdkz7EK3Q64dPkfFJNrAtTCzaFodMPbTcizxWV8Ee1VgTTbg732meZ5nHaBv9woyETwzJnkvGoYdBoT5jCXxqXABjqkAenEFHGkdtrmXkPMoLFOlR2jZLQr%2BAx4O5SJeljoMEvq%2BQ4%2BAul4pB3lB3FQRAPsuj6ButfAbcs8EdG25OTYS4ENGrAjm1jrR9Pi%2Bw9HEC3E81FoGmr%2FBkvF9tBrP0%2FvnMng6ysLWWnBeO%2FaGBmhxxK9kacb13Fau26bMESZvqW8JfJZoKaMtjR9jrLwjNI1iVWrym3F7GidvMHsML%2FHu3f0cE%2F%2B&X-Amz-Signature=9ebd7c2303a4942b839ebdedb3d7c3c1c001c978279dbe19bdcdfc688df67ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
