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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=ccace6121b7cce4b2ab65878fd6219fe6691d93cac5d34a463dd9046b1ae9f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=6855181176e9baa90de3f49b7b03e6f1747f9390ca433dae2c4e37ec30b0c703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=69a9d2b4bf1c4270ff2c91ce39fb8b424444c5e5c79fcd1b2f93b42a148320f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=06e1d36ac29ab3fc8d5739b77e93b323622b8cf62af5c0b7bd02d4d4e898aa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=b56afcae75c137765c3632396c107a57b7bdcb6429ee976db2c46812b49af292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=d0e4e4246d248206bbb3d7c71da26edd5869596aaf0de6517f3fdf7e44648b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=7785f6accb9cee2cc16c0f8418be50acbeed48108bd1d31dec3afa36466e1220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZOYKLX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCSSBVckSwL5jSbD5%2FLSEo8ZIOJ8ixTMNBjiNSBhb7%2FjAIhAMeNEe%2F2PeltCiPOVqOKq0bFAmFxD7Ojtu%2FgGY2LHecJKv8DCFcQABoMNjM3NDIzMTgzODA1IgzLz9I4gPwst9GhRZIq3APKz%2B2HTrf2Q3sgCnFVBWM%2Fv261bb67ljkdkG4oYxN4TOuagWBDhdLw542J%2F3BwDYyU9WNjV0ulprBtqW2eIHZxpYeU1%2B3Pa%2Fd%2FswynQR5LjU8d8nxXjrfyK%2BqvBW6eLLHgIYMdfaDVb4Twtavd88FIlpW26okDZb%2FmePb2S2bFRbJKb1kJ4Nw6iqoa0maVWX%2FR6LOf%2BSw5nNV4Gl2I8arkhQfQWCVJDI5a6DZ9mz6fnzUvH8%2FoH4e0%2B5IaRUF3HC%2Fe7noE5E%2FMFFjCUP2lw5cAgea%2FN1Vg3eQED1QV%2F8Epev8G2h8c05UTBURs2xuxzz7Sc3ymfecNZVGYEoZKtH33gm1RtRRakX5IE%2BpDv%2FrK%2BlWxV0FHf4fOuV6H2Y%2BaxeCSxdGgGFr1hO8C%2Fd0zqEpkvBwit0LTqQladANwGoszM5l0JzfyeReyaCeUdqolYftY78FPgzzzMP9UeuLEnR2k6KveNYhtow%2FAsN4pkBbqapPJm5vnSqoWBvE1TOGz6zCkYFt1D0bcTiayAXFg0xi8O3yrBk3Lwv1vB8aeF5M6PJVki1v4YPNPQgF664hPfAf%2BtG3h9QbX%2BWujT8XuNF6nPVR7tpwrNR6608egOI9lg63GPqdjPBgwmgmidzDh4L7CBjqkAYH2xdO6GqNRu19nH8EPL8r565VjP8pt8SQ%2BOXFgD1kRQsmIzxCWaip4iQv6pp9ClCCxf66houcVjZ4D%2FTcdSQo3QhpHuh9EsIHo3PpCcuKgY6hPPw5gjInccJON1zLyN2Zj%2FCrGlm5Vy0whqzoaYko0tAWbdv11a9DGcD7PHPwzjgQ7coaO7q22MZGy6Gvm%2BsXJ1Y3tzovu14RAKxAxDsywVUOF&X-Amz-Signature=a5329077316c18012c4984ff6b004a07aac6144d70ec7989d2ed412bb8d8e763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
