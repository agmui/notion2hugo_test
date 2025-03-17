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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=71c37dd648e2a8a0396a95fee11029f40ad4cbecf652e2874d24ad049dee8383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=d6ce62b1eab5e79afc7abaffa33949df0d41a7828d5e8e589a5623592b264f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=655aa63e254b593925b4b63500b8c2d74d3cfb3bdf66240f68b12e2b2b2730c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=76e07b698a9fbfba7b5f65109b0402080cd5433b6331365a23c03c92e0efd93d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=52e9ac026f616f37de86d317fea036c6889dc8f8ca5375f7cfd25f13ff54a9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=9632153181d665170b19edf8487db3d9d6613b064d7ec93b5b7c9d416b30912a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=ce45c286de7f6682ed3d6085d2c8290609c2027b2759134f3082e63c34747cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMBZCN2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hXkziefRhyl8PSV4tELsWtKTOICM7RnwAr0LdRXsQQIhAKTDH5tDa7RROH825p1GNgoVqc%2FKfC9IoPPSCM3kPi4bKv8DCEoQABoMNjM3NDIzMTgzODA1Igy93H77yRM0rT2MAgYq3ANumjFVLGEtETBC3O2fvyRWBpBgKd9jr8dsuGXHTwCbl9Ct%2Fe0SWpONYHpDLEUH7mZ2slJ5OFbSJoCMIPdn50UHaowFAfMSR191Og2u7E6DJlwrsVfhnVM9yHeb0sJPTmHEHvNdvvxkI9x%2FSBUR0fEl%2ByJFUcbrXs1IIWHhNHlm3vW2l7XWRT%2BaO1yFACXujl6lJwnWaqDzHMEsmxIXH3xSteUVqbzgDo8LGefzqj%2FFfi2gVG27tmw%2FUD%2FFTKNgCnmYvib9%2BJ4h4mf9goqyIvXWplLMed9aQ56x%2BeONgP%2F%2FRm8O9%2B3lIIjvBIULgxs%2F7cgc5rZW28WCpeb91lGdjFTWC6D%2BoMCuOWw6%2BgQz0imkpTXr6jyXALGOo63X4C6VSLj6F8BgGsyY5g4UPFoMXJeu2CzOJoeJ8T6gLnjBA3E6EWhZvylcQLQQRN8%2Fl2M2tCC5bnU2YuxtBtxdffa0NJDuXumSOrmg4ZTSmrE%2BAgcfvkbyT%2FM3YsDel%2BVsZab8uVxKp9nEBNkg0EjT0aowNJQWLzYJOA5vm48NUfetW%2F%2BrI47Dzz1Q40qjwHzpBxoD%2FLYKrKisxD4e3piJKQGnOp8bS3XI%2BQoMPnndwF9AuH2yyZ5Bi6fPsIQyDIJhGzCFqOG%2BBjqkAQP7R45k1Jl1Zl3kBYUwMThmcyhYu0rsU6hhvWN5tT2iPxAnps2sQUlTc2TcVZekjvk%2FVn8bszIDLz%2Fbf61o66NsVU6mjHlwCVPGiB55r45gUZFgRBtAswJk4S2Q1O1IY%2Fk%2Fdqrls7MnRdw9K8G743Y%2FOxhmF%2BN3uraJx%2F3hQxenPQRKbSuwN8exuubtiF4B721Gy7LYEd6F7Q6p537KRJby4EwN&X-Amz-Signature=5f412a8ed130701b541a324be3eeb90feec77748f2d1436c1dd7951a814cd269&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
