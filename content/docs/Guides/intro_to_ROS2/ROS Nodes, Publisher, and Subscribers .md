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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=f31365292e88f0f27e94fd17781e3e5e342da3d0aa48bd9157c120d5bfa6908d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=a1d19edb59b60824e05fad0ff1c9173dc352b107571bc8b104c02c20c7b32349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=568316329664b4ab6c18920204d9d5f41af12479c6b399eb301497da3745ab90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=bd6a0342c971326f27a9fb50299365b79dcd1940f24a3ec8935abd22ae823adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=774c8ed1e9f0991478ffd30e4027d6adeaaa488ee80dc96aeca5c12578453b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=8f941f6bd048c985ccc7af53e6548ac7bb48a229813f75dc41d1abc6b888b8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=df1ea5ed2cc43cd6ad1dd0b3fd87d81487361f88513113173c38697813eb58fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SS443%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICGW2vyHfnB5y6EzYprTwb7%2BCjofICqoGPAAkewqFHpDAiEAucC0Jv2i4mg%2FWUnWySOK8br2qYZK%2Bki4H0G6WazOZqQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSZ6kA7aR1LO0Uc2yrcA0vix8Eox%2FITO98mvkKtLAE12ko%2F4SPxxc%2FLYPKIjgoD9v8RfiNXeU48eh8J1nRa7cRYsuP8HZbRrDo%2BMUFdcj8rRxkaK%2BFVfDWIl%2FNyrBFmigH%2B9nfq3X%2BBSTIdcOPhETnRP9bynlMaMmgbaXHL8spRLf8OX68yyWE%2BZZaxC8Qyo8%2BKbBgKm2YXEkwikEyy4o2MR44u0a7C5%2BW2Yv7BLDT7wi6J1uHhOy8ubz3Mj6b%2FlyMGujJwN9tv9InKuOp%2BDVpkVIFnjeTlSwIb9ZsM0WhE6Nj1Ada7WRWIUEERDXg19KF3lhwdu5IaUZDTxq3e5DhI2ZzPQVtrK05yIz7%2BApMr4S6JT8fNl65U76vk7zuR81rfPHdIoK1euMIV0C3a1sVkZj9HztFtUFOjkvQWL%2Fs8hv0kYEHhL1ftcbVmcwqk0T59ocuO3%2FC79ILqUF%2Ft1FRKbKpQl4ALhR6MXpJUKzuRWGLmpT8ur7degAfJuVa%2FEPMyV2bw6MfMmsCl%2BiynMh%2B7F1mi2ZYGPh9u3SDC%2FUJjLTiBmhtRk8VJTKMfS1fX2%2Bo6aLtQwPAhRpBrtdsYThvatOUGooSN9doGx3KN9ZwuHJJ9ilLEf7%2BQPJplmFg8b4jGQeMqoj86%2BmhKMOCap8IGOqUBfZIubDq%2FjGEmlAVk9P8VQ8HAvLNQU%2Bj%2B45TOASygmeP8VAIytOndJAYXas9m%2FZasZ23GUmhzVlvjyep9Rqu4fNvcBLd1RhEobIwzmP7IcZRpTHEOnX5yK6hG8i1xEGBrop0x9nW4ia2QWTOzpmuso9FJwXNItDEnabqP9lbqzuO7i8XPT9fX39%2Bwq9ZkboohY2uJX1qB1CETaYQdXWCcFEGqIbzX&X-Amz-Signature=a5f01f68acd235b38ead5920cccb61ac56f3725c02460be7173893f114d12977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
