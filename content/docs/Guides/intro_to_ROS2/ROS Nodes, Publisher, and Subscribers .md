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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=3984bd9a9dc0108d3721fa9521e0ed25e6a3b606478f7f131a13f22d8043981a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=9520d9b614772d1cc024a48e994ab56520563dc0b2f1d6a2ce71f2ff5b31e967&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=b296b939c61ce2b0c9e12ea07eb7abe40134c3cd13ec9b06f384a1be66307ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=67978566fbc6dd9deffe3d309d156356ef1af15a48e093813b5adf3bed8e8473&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=576c70cd5f99d1bda8ac6dbb4c855b74d8516a77a6b772a52633049a45c65e74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=98287a4dfb2b62659f256abe791f6b6ef7583480cf913f252b166b84005e3b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=75ae17d6237b46605ef94df68a4f3c5ac4dd3fb5d37e7988e19188f7c37cfdb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYOJRV2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDTBCd%2FaLDHXMGYu0YM79wALBloUt8v%2BQRsB2%2F4DZ4zQAiAwquGliiSKSBKr2rNsg8Xm0EMlNtivjaUJEfzLVU4TMCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTK4g2nLnhiS0LQYKtwDswB2QhHZfY0uu%2B4IwkwBC10bMb6abN%2FEer7NEymJxfht9dksxHW4zPxAdYAvTCXQVdNMWPAsPsMu0jdhnGAQTjKcW%2BpY00rSj7SGCGz4SAvbgIZEKZ%2BAy7bOC926MBge4l4lkihaNRvHNJxWNIgGoTy7JXK%2FYa7Giy9Pzi9GJJEn44EDPw1dKIwR0%2FVDTflD7nEmwEgovxdkIFgUk4cGp9E6RnKa1znV5Wk2A6XmxjtpJC2u65oc%2FRdCHVJJO%2BxzFSfNkVs%2Bj3zW8gz8KxO%2FmPCK0tVfa9x%2Bf5OzNYNM4LQ1V2vR%2BY%2FSy%2BR6u9F8mi0yBW7z4%2FeI8upsXivDozsUKofWRR8rUc7JLl%2BkfEZUA6aKt%2FmHWoUw9KhIJcgS1iMVyP829hF%2BaMZA65YXuaWdVhIGUyIC1GfGvnDyVJwNmXFMu%2BbEKjG1TrQDclqLy8Aec5pK%2FEPyFiTJu9oJeuI5sHROdcAbxlkYlgwC88OBI1iYxuBoRiZEuKLkpADnXPlvr6n9%2FhFdBPsIRYt4rXqaJE9IF%2F0aJ0HyF0QAHlPEEgAelwD2juN1cFQGzlrf6sbHFGIN2ht5XX9yqvAl%2Fmv%2B8UcGYy6xiqgyh99VH5%2F6pTH78fItfZnZKS0Q46cw4ZP3vgY6pgEJGH5rh77UWUmhdUmp9lgzdGqOGTkv8nzMtnKRqinyZmEedjCBcJ1UAebsFXFdNnqCvoP8W47eTuzHNJgyN8F1qs5a3WwPPY9zrTsMZpvZPGVk%2FWIhnNTKISNnIdhj8xiYBF%2FJEQ219gS8JDw81Vq3mCa0xA4P3so2eDazJ9wWSg%2FPUsJ%2FVIo7gXZkaoLAXpBoIEWfFqSHFEUJ2LoTOjrwa9Vfpylk&X-Amz-Signature=ae5e3d116643ec841938215c3cb4ba4514d7677a66e0a1881656217f314b184e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
