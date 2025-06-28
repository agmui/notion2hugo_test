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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=9ee110b81f845a574dfa831f4c6764224b0c9cb2743f461e0717b4956f52db0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=05dbf85cf2040a70b44c1f1b3d2bd1327243b55ef724645aa50c8b53a76950a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=87aa88be264b943323d207ffd5e87142d7030f280d29d6eaa1e2138c8138f295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=3c1e947c0cb41bf7097b4293923abdf27cfddf5a0259d828a0d7a2e41285c0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=f7d3b5b7aaad7b584685bf02aeccf927d79a278601ed2baf8cf5855d2196e6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=b57245388755c16d8cdc31a127353a039958db186a4c3af093fa01a6e45edc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=5cb6dc983df6753d34d000b30aaa1242c37a913d64b787e788047df475f8f5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ENSPLE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXcgCEpo8auoAq9w4y1JEdyGHuGI0GA8huAoNdoMhvDAiBMnaoCOPs%2BYrRalGuK0mRRyq5Z0X4T5BQy%2BA4GNopqbiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfcJ0wePFJ2%2BhkH8KtwD09Un0uENejsuCbtzEHO%2FdHrHZUSpArqkJeQBK1MzOOEF69OSJ7K%2ByjcBZx%2BX5YqmOiQpc0kW8wcIfv3xM%2BN3kDzdNPUtEOUUFOK7%2BE%2FjJmJJrf4UCH0BNj1b6miqb4niwQDemYF48y%2FkyHx9PSkHZJt2zz3JGOGxsdjNGqfBimta80nC%2F7ieDTL3mK0jbOfOXUGXV4%2Fes62XtCw6jOVK1irawek118vMpdrmPBOjdmFk7aYoF5R6iW8eEGfya2B12a2eDQD0n%2F%2FrbDvCDWfWNxie73j0Kad6fIoJxTPulY9yE6RYdzRUCffKXdWsDeNZT4CNiV674IkT0N1XTS3gwlnels0eX9YlR2KM%2FmXvNfzUwPBJVX8jMbDE%2FNb977kD2F0JElkAcD332WYscYCopPZJGnNMiwfBzdzJjk7%2FVyOqAPFNhJiPZI6vowMnn4NsofRxVModtU5ZYin1kOORClsNa1rP4zn9uZLGLVue2ISipqxxmhB8G4hnfGcvVyJfbbxdALiNwr1lp79nnMSmHJNcnYMIaJ9knGc%2BXhW4R3LMjO7BnYfCUJZbqDuhxqbAUsZ9GH469PUWmQosXq8%2BgOCmqOOD91i188DgU%2BVO1m2yFJOMjJbPM6jsThgwjPWAwwY6pgFw3yBwB1SUC%2FHok4IxLhKbEr4XrYr%2BoeoSYcbr1ZKTQsoQC0Hx9XwmWQIDA9tSoYYWXOkGlhMHEQZaGkmL7wP1q0mUR2oaNZlCgioe0eZuIH3qwYSN6dBn3%2BT33gJhtXymaiq3IRhxjdkoLH2UzyRKhw4NAvBODXs%2FYmOexNv%2B%2Bl9rNm85pjoMyZ72Lrx%2BPAbcSJ7cj9BhiVvvsiAPbWnoL9tTj%2Bk6&X-Amz-Signature=78be526a2163415649e6999378da5e538beb3c0587875d8d311b3466ded25544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
