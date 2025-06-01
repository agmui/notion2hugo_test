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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=51dd81629d8b3f035bc35b95b068c6c4e03769c4a18a64311ef2706fd5b0e4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=f914e17160946a815d97488a240280d07fb3cf4a0288af853c142e998ddff8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=a29542910600a4f4600a457ae2c9e168c7bc51b4dc30dd07c02ba3c4ab6f684b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=53e0ad7d60b77c76dbfe216b1d57730a715acd7eb370d9ddab94dce4ed2205b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=0c4baf0d67ee569c33961c0c58517388420b34d9692ec21ee768b63f45297a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=cbfd890766548db543064d8ec2e7af816b77dc80d8674b770ffeb9dab4c419b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=df86c73deeb51a032af00a025da4f9842c2031db3dce60383c351a7996a974f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3EL6NC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG6CsxtUtpXHE2vejiuMONjo3FUMm4%2BFAzeTej3FFv%2FaAiA8Uk2xean8a6wMZylRnrAVd78rur53aUSHWJb8STYXDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDd1qktNNwkSkRU2KtwD6rCfutjMHgjlcgnwpSB6NxsTc2H3lxBpEN0Kexr8JEPGM3QyOlvFJclA2DDlfPtDmQqwxoKVgZ1nXplZl1fdUj9iS5j6Bg%2BMurdlvMB%2BGe0WlJiUdGAmCM5Zv13j88hQH3wcVTMt9RjsOkqq4%2BuEgfUP%2Bd8PNx3TM%2BTd5gHRt5jcyks8wkSOzEIgpvHn1s%2BYS4ICWaWdMmm5EHQdLye9KfWgalfeLH0OklHqJ5Lmr%2F8jif4rbrzZH1FYlF%2BD1EB5Lh0YcKBe%2Be%2FZrmWQnOOKNt3ARd%2B1M1KzLhfSt9dgts7D95KXrQXWWOJhrgDCYv%2BSAv2wQ91Xedwkc0WuuXlcACoAgsf8vAFJQrlVn2THLJFGpRcSePJw%2Fk4D6MYSTrdAvJZ%2BTkRHeEskfZAqOfkbwFRri6qqSBsDtaNLVnQdQP1Rp0EM2wflZobJlJ8d%2FIO0E8S%2FNQPp58%2B%2FPXJHIUedAIL%2BhQNZlDkrQzTVcKbStFd1iHy4YLukUzogCymSA8P1kbd3Lt5AqAoLNpDEdTZtHRcjBXjYLy29M2nel75GgSDc0O8L3v2e4irsW1tqvsHk%2FXy5d9z%2BToV86%2FkgkvQo5PqMea0b9KbebGj93IjVvbQWzx8aQuB6UJp5rwUwheXuwQY6pgHmU0wuZxF68bTpz7WzLGtE7AIRMPD9ZNOv3cEcpw%2FZRt%2BDutC6FKR5GprS0PaZqXnndjjyYAoUdwBL0%2BsbLUfvb9hSuD08tupgFF%2F5s1qf8w3FCUFclisQPoBTVUhjpHPa3vMY%2F9Emjp3%2FzJhqiL0mieqWQ9ifMeINnDfWTOnzNsmL5KkeYURfgok8spoLHtST77iane4Y7EKTjB2jsu7Yw6pEBQqV&X-Amz-Signature=dc32bda3a9439c12d6c369069b357d77b8a4b9226a3f99c080c7fb5c178348e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
