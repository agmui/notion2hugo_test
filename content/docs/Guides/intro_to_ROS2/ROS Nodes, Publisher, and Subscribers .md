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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=054bbcc8aedb8a871c87a1e846393c027bb770b61df3d5395d50fed95c6143cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=d541c55ff870e259937d8ad696d6602369a18f3861fdaf3232929c989bcb8151&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=b08ec2237ddae0b89c4169b582406a0c01186c924fbbb6e9592f4e4f7b51f7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=361a2811a1d59c95b2bf1e0bc8491706b0e25d1c4f8f3c6baf4eed2414191fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=a6ee0a99122a48fe679068adc9588c30dcd9e6c627e618575a98a401b35fda36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=14e306c4b89220cd524ca646be7a15f7e74c8c29eb072b685cd651b0d52307c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=03efb69d6360ca60cd997e4ab0d58a0d5df141a1ef8dc0059582faf183289d71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJXHVFG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2B5guT6O%2BiETOmo5w0d%2FIMfHZ7EsrcePSHmvbOZ2%2BnaAiAMwiG2DfK5wwfQEfWaFqoOmst1FlYVfo%2FL5bAQ3g2G3ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMF2n4GrAEJ8PWXVjjKtwDUYRPgprXP%2FGS8jAFpGGiLMkn4SEoKFStcY3jp7xCwQHfLdMROpl1ih92f%2BESxjv8yA8gzmMBRHemLHPVuMuGr9%2BTVRevDvo8g21loflhLb6q3H4uD9QmIM16nD%2FCrmOt4aJSFvpSX3KbF%2B0GXYc7%2BYf73H8sbYEPopYL0A1qQloGx%2BFJitHKP%2FpLrMOkJMfJi66SWOnXkFEFj8aD0ufIK%2FcJX2JrJa1%2FQl035Om5Tx%2F2DwjTEtDINAVTXT0H6sC4n8TNSHWQVXyO3nPvcWchdu9EYajboA13%2BhNJW1XaXZn5zn62HQRF71%2Fq2mThCcz%2FZPyBzXnIjt8VqP%2FZDGWn9TBqo3g1zWV5P5dDZeq1onz5TXlZ2vPRFvw72NyJ9EsSe8b5tQlOzDUHepyT9Sg7KdGVP5MCHELIhwlGgERwxknHL29Hb8WGW86Csbaul%2B8WoIZamyQz9QMysV8BAeXqff5sXYaXB9EmNPx7o6NVBohs5y1AQnTM%2BPKEri94TCf4N%2FZ75XtqFhyrGbN%2FPM2wxy4PrsrwzDhnz3d3I91g98SDtDMomvU9uNoX9WjHFRqXZjT5UGR3o9%2FFdhOea76ZxEJJ1NUNHcCAbBHOmGe9IYBYLsLX9444YXkn%2B7kwppbIwQY6pgHbiiPXYaCiRJf6DC55a7W4xhso9vAe04jBAViU0mw6oddp7VySaaCzY09Y0t0bQQ6Rb4tbuWqqmP7Pf%2FpflkIdiiBcZDje54%2ByOsSow8c6%2BekcwWwWQIrh1jGgvLgdImybA%2F2AZqZ5HKJ91jOvkPZN74cgjFErON5yFwcJfvQOYnCXNQmZRvjevnUtu0pRiSuq7BHwQhIwT%2BM97JC9jvUcTBBMNcJn&X-Amz-Signature=18e07b16586f56db28e844b686df3007ad4a0a4f97fb5bd1b98836b2f49f9996&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
