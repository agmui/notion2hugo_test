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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=eb200e91396fbcce52ba205371cecb2e3340f732a530e20850865db4261558cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=1c4a088e291dc98aaeb3f32f3269775e3ca21d86692d953c714a3cc2fb1c9236&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=e12e4b64af03525b508ae05ef0096b79cf13359054d6d1ff16f527330e686a31&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=33727304369c779e5579ca5a70f1b7a5858d7476a632071481b3ffefbb17ec57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=0d0de231991177604393834243c45c50b822185c99ba855fd355c2f98e81116b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=6a880b5a5b49f61defde916bbffca04596f0b4e001fd4a17f027d8fcbff2f79d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=0e130b6d06f97aed1f906d17fcd787676abec3816fa151dd7ee6346d4d46dd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623S4AUDR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCkD%2F2ifqtoSSMudiBKc3GHhQVSdyz5dFMiWZuSpsOc0wIhALPcuMV7QJdA9q0HXotTu2LDDIlROEc%2BLFcuj%2FE%2FSkKvKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpwESdhbZ7E%2BLTK00q3ANrlbrbJvYEl1xy16yPnReXHqlFcOdnvVVj08YRjsrzLdCcQ2ipFkbtTLyDozf0Tf0Xykeb2KvM0fwC6wZ91JkT%2B6R85z5%2B04M3e4hmKmMeOixVUqpZVS9VuBLZiVsBJ1s3gUAaaYatFprwXP9tyoyT26W5JmJvVm7MJCD8rPdC%2BgkEQaF0K1pTWbpe6s1khfE4egOkv6zZXtq%2BRU%2B%2Fpl63BvO5yHE0RPGw%2Bw6rvGuklgJHN9%2BuYZSiVjeabKaMkOAQjF8AZw%2BfV%2FnwbCWNZTDTuU69HoC%2BvXDzCbfRQT2CJgicDDPzTV2kzs1hv07td63qR6tp0kqUuYLQl6Oz1JRkzPvLzDzhrjr8SQODT%2B4pDbrxD9Yimrpnzn1u8u3dwxqWqLC78eU0XvskgKMTYmCNJ4xrsLaMQvQJAO67SZETiYOUsLukkA1zh%2BI1XkEvBFLoeHmFnO1kF3kPiDFw3gGEFm75OX%2F0uyWosivzJ1lIxL4cjS8AArODbEKGSORb9otVXzkDj%2FsJLqBdOaDVhkaZUQPC3p3DXN6on1%2FMCmA18QVCSf92qfA%2FjBy8C2WmJZItXiucCqkgAl0AhoYsmDwMqvZU8wbfDDkg7OOg3EqkkheBekl7F5AwWJ5NrzD2wb%2FBBjqkAXCE%2Be71%2FBayj5uyLUqJAqWsuygC3wZoRXztjP7gnWxgz875Kr4MY4WotLNlClhNoPltGKH29I2xWptDH0THpIPgJO6Wq6CIRcUgyuclbIIVuHgJy9f390BgFe7jrYjGwQIRy22zH94KbqAJNFU9o9NrWovRy0xBRj4iDQC%2BAI5zux7p%2Bk9G7bTqRNPdpuLaH1SUHffeinf0xBI0vAf6T2mKzzIL&X-Amz-Signature=5cd941b917057b12fb16e069b60d73fe00674d5a6169c826318f0a3703b15002&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
