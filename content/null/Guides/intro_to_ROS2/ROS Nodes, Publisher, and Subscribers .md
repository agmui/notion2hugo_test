---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=d5f673657af10eed653cc239df4d62b085813640b5f0439828dcd2da3c443653&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=b7781d046156920cfb6025af0e458880180307f664e14d031df458cae7c48be5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=99c0ff28103e61b7304e9aebe488f59a3be4ea913fcc3b1981a9b95140533394&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=f52f0b07fc64394c140f0fd6d793cb61a3a08095f31869563b8867a9b2848481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=5d4b0ba2cd131ea77b06c094e8ddb2896d890cda78048a3c6f3516e6b54e12cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=8fe28f475a82dac3f37578f303b3869b012c943a477fb1327a12f6a5f2f97d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=80d85c9ec92acb2a65566a80627fde34174bd1d72054c96c76fb6249fe1522cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYQDSWF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsGTXdwyDADc43uiUkv9Ls91MFtY4S%2FDVBjcRK9eiYyAiEApPWnLqh8BzpL5IQFW6l%2BMlv8OrnKqqWXM9brFdMgVoUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXaPDoA%2B7Bxwr6WbyrcA4hdmeDAxNWFzBDKqUwNeRAtJUhogx1uv0RcXuqWp7nh5iD7itPLeRLpq0tbuuURtLYatPJ6wVAjrw8CMrtqIjtmqNBdRRC0EfuiD%2F0VVvJfZzIBRmtuvSGEPw3lPQwcGI%2FWPKI37w2f%2FTQOHb0qT%2BJEHorvE4XkMlmq9TQNud2wo1YI%2FRzyP9rPVPYBom0GE9qAs2u%2BVeX2QuchK55tGCg2rPRY5EfbGTcKcbMYSm3vtO78ysKgS60%2FN3H7hcCUpfdRY0mlj3THDlQ%2B%2FyGhuTB0K5Ha9hFqyJ%2Fx94HhJAwH9VXTD4jgN0KLqPA5ug%2BaFERuZMfHs2bQTUHoXR2noDzJ68TFvEpRwxSOxTyc6G9YGvUEdIJLP9Zle2Gn2DuP7snR2H7jpVxuJbGvRY7zcrH22mYrEc9j5Jo9WLOBsBseOk%2FMTX%2BXxKmznvR1ZjXa6%2BVIM9lOX%2BNh4ZUPo%2BQoEjKoGKHu5NtW4Xih%2FLQ0CJH2OWWGxPmfzBfXJOJilfyRc%2FIfz6oIi2OlqojRJKxyOdt1i%2BtNZuVe7NKjG7IXsdX5C2Z7nhaMl0uT0cep%2Bq8UldGslUopPuMZBafNq1mQgb9vbiEuJcOk5dm%2B8M%2B0Prx6TjgfhBs6GASkEqjoMMP%2Bib0GOqUBCM2Sd%2BNTl5fSPSzXaPTmbqZ5KxFn0UVqQM4KlCwgSDY23aICegvNd7GhXaoq3vXgiwVyhGrzpl6m3suUHInY84Vs0XPapHnkxqWQWMaNgbWqzhKecuIhRBkveuIwII2FuVbA8TZgccCmkPmUgLPgGTRTZguTRnwUp%2FQ8Vz5Pq4ZNfyK93rQWNdeLXxOGSh2JKuKCv8f6rXW6dE%2FGmiLZI6%2BwKaY4&X-Amz-Signature=517d24a8eb0683419283450d1cbb47bbd3dc6876a092657db67ff5184dbedf8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
