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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=e673aa3ac8efed667c93a110dd0196a252bfcaf3ea34539e2e6b9612214f1fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=1f479d6fad99f2c1f3e106b2d2647a6815f653993a364c303108503d0fbc0d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=12a97c430ec28f63a6b1590b7339767c53d6f6fd7a5ec79ada6df85e1a06bd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=c03873bb7b49f7eb8673ae44a28f901dc6b8fddeab7a34b4fa423d750dda168b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=9e5a8e2119a2d64fc02d3bfde1ec7b2a6823133ee87f923d96a85997c952581e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=3470142b6b7fe46efd3f6b9036d90cc57caa437d6b5cb92165f4c2b44a9968b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=1dddf0eaae723c52fad71205bcb3f3fd676f174ddcfee0263f00c24fd962da9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OEUXWE5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykVUR3LkXzr7fd5YNrkniOBVgST0b5rCZr%2F0DFCObcAiEA05UGNIxDPxxLCAbmTCakaV08DUZjYLmpUcIFp%2BQLD7UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhHfwSJupK6qqYd4CrcA%2BJTu9rB3vRI6urrW2rzZwSTqh6pM5prygO7pRQxHoO7ctySVOyWHFtf5TZq%2FRJGf%2F2ZeTNTxXVmNiroSVytIEkk08HhSPzzWx7Ug0naUbKHiCouts8lfIXxf3ycLX4FYsLeAxWIGGS9SzrbrrUMiEle4vjI%2Ff2uwehX5gR5d3cHMzka7SZ0VlB6imboTVXIce2Ko4No0prj9PleNtZsjZFm86Nj509asUNyxV1KnWOZvZjUiw7mYrNOsQZ8Q%2BfJxaZgPZhnaY8xOUfNI8CCWSZlUvpFXZe8GCa2rt0hd1z7EbAtNSlIE3QHrh0SzMLk2yx11%2FxOnH2szVAwbDfGPFrPGNBPBmej0nXwF2SyOBY7tcCZMSlBECRasMnqvlHjli4Aa0HD3y3aJwkJpuUQXwu9dkW8PQ8y%2FgKXk1Brnxe34J3KNh0yJ%2BvHKyMn19PsRNWzO0yknyhSfTaZKO53Lz2oGsDpw0VY43D3tLPaPGMhPSbIgYCQkPUv2ed378S7oBZQYGaJXkY5lhMYb2ncpXo97XKSvLiJNPADDfvy1NHVWf4IupF3259DbnAttjP%2FBqctpnl%2BPGUrKUusy7yEmjVgh7gealhyOa1wvrKJR9RX6xRTuwQwQ%2BSSZwKcMN7SwsMGOqUByJo2UoBTXInK7HmMucRaVAAWjyJ%2F9PBFS78H3K33Wy1zlUUoD5DdrCaDNGNKlPC9uPtBuoKK1JWtqdIWRGV9u8gqRAS00mRh8I0PIFdOmdZchopg1U0igC4QnWSJ1GEvfKa3xMFdgF%2Bq9%2FKNVuvaWQfGnyTEG%2BEFV%2FFS4fkSFq5LHkDl3dadP6WDP6pxFNxz5rWJaELa33faYrt3Jhfg52jU0Nn9&X-Amz-Signature=158c3fe11d1f7d3b69ff94f9d6cef6e7244f5a71d4842cf80e68e82c4d5d1bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
