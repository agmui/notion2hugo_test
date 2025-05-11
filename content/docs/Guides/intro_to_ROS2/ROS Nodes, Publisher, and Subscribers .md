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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=ceb000f5f8536e5be3cf19175ce66b133937c88d6c37dbcfe44ef4a3e5db88a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=f658b58d16f7eab724bc5f646d9d90b74a250ccc256839e5dad57597553be9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=e11926694cdceaaf738857c7f27278d0bf78710d4d9d671177adf6c3fdcd7f16&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=536745356993b3c7f168b68b066594ee9e2177ef3daa09181e163c1d88a0c601&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=9b105c73ae540a5829aee20399a321eaa9211b8cc5b7bfdc70d1d890e8be550f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=39a111f15f3c2dd55b7d211f1251e55206268166c60d6f637e3a921e07940a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=4f1bc5fa52e7bd415fdd1eb63a64d82ee905f569dbc56f7264acf137dd1678d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BY52URO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEw%2B8BD23KStb5%2Fugw6Alwo75u9ZtVUMflOgSOpcw3T7AiB%2BRA%2BXYS9k9U89Wec%2BDt%2FJyRziU01SDx4JLhlOdck7liqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg336VIMZZYw9JhUIKtwDId7LX9g4%2FKxkWkH4pUw1Euw4Pi7K15EVDQnPymMZy%2B3zk5HNlrw3KWmFK8IMpc8W3DP4v20Ljz8mdq2x38Q2q2mOeJjpGNHlw36ItTnkMLeKeghccVuDe4pDdlsUDZQVnCuUvaIK28T61sFUibA70r52PBjqrsE%2FVtyZbHaW8PE9RPEo5g%2BSDsRyfQr0DyrvkXwWOk2OZlO9WToQigpMzqZA3BszXu60fV9ZWTO3HZdDXmY8Pig96zu0BAR2bqDbZBIexhMcXqpRHZcz%2BAyl4K91oSiZUbliasWc%2F4TTitdU0Z%2F8uMvacoAO%2BAql%2BHHtxBmbKuRoGbqaf4tkC%2FDIzObBJSb6BtZum5vYJX5%2BAeFtSuTVN2f0VDFBx%2BDPANSm111hNEH4mLKwMdCk4EInIoyPDSUeuNhG2eKq0wZz4jQnHJzAk5tm4lxp14fUAqJAyIB9JvvVWH5qYn61%2BjUVb5GngUsj8WpDf2BmaPmpM5%2FYIPIfR7%2BgAY9Cy7K%2Bwxnr%2F%2BKmBN08qQxilM28%2FHQcviLawCa%2FMoAphvEKfqUrch%2FD1Auz7uGszpNFKxCr36zDijzDCa0Hn9dejC0G6kYXTuQRxj363R2JQEmt%2Bdbqr0rX4v4zTohE01EFOe0wxJaEwQY6pgG9XkSIJWpqbpnsgNdCUENcAi97arkd8kiRDtnRpZao3EHA3ERT3P%2BthSbOouKNQdEiPqzrwAbCOJtwVYAcTwdC9VQGZt0nCsW5d38jlyZt%2B0zn4kjgaay%2FahaQFPgEnKrbBQDIVFRDCQmEgboOF2ae5DRSauJkITRnNRY3zOJAFgIaKLKK9JuP1FZRZ2evYL2QwKgihxwXTimanFqhEUyA6SkLxLyd&X-Amz-Signature=6b59caea794c4ea745e3e5a697e9b0f016cdbbe9804407f72fdc9c7dc8f6fb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
