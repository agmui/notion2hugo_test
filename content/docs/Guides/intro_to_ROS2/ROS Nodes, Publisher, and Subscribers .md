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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=251fb2afef1943cbe6da67e8ae86122284a5c34d43a2de84c09774a00004bc78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=2268eb00800a7926d8679685945df7ccbecd80c1cd65dce165378369566b4f31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=9083c52cb9c17d83db7afa868623b3eda9a567faa10a7e7918bd568bcaea2965&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=d95112019ec8ad14bfa4eb1c6562b8636f8b059ae669608bc77a27dc32fd9645&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=a20e52b430bf7a9780a0a0aa111b48f75625c55cca0e67fb22bce627f285ba63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=05e35c609b6770ae5ecb42e454cefeb59778ca4499a1ff26d923493ac07b76d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=693377b4a548c72ebeed58bd1b4ac9b1e5ded2fe3abcc50339b531f3192412ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CC24AI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsxhQQOMPQTLFNrrVyCxbcH%2FwtD9xNo3g8esBUHj3ewIhAKliP6HrChloH%2Bq7%2BYlj3hw7c20F4kbX2CVQLXFeu%2BjYKv8DCGUQABoMNjM3NDIzMTgzODA1Igwdy0os%2FXTDNwCR7Sgq3AOE3X7ZnE77LTFPDVTlj7lHPa5CPk2%2FqD4pLI0%2FanLgjDtnbnHDgoy6Q9xQFAc8%2FCWr%2B7PUX6ge5x1Ws2%2Fc4dED8vTel5TjT%2FyD0ydt9JkYkLg9mlSojmqcBMB427WY0GDQQmgsen7VRTnvhk7lU6pXagyUhH1NCZVDsxwZYRqIpI4d%2FIcmltT5SeitQX8zWKLF4tslrOOhWaOMmgWy3ZVdWBRRdb%2FCDxBcBQeGz2P7rMFuiWDd1bZ4dWHs5kqYn2XgavQN1CYBNfZpRy5Z86PWuuhwr3Qm4%2BBG1JRodySVXZtLDJOY9zQQmpY67RWHHO7qr%2Bar3gJNDbnQoSP8VW8zrtME71jJ%2FB333T4AkC%2FaabezBekqwg9FZ7ofyzJOHL3ogATaB0jUAW0Ais7JZ%2BTaN3p01eUGppcsLU0hYbi44%2BduEnk2P2gYeAqDhteiPkxdfAEz7p7z5nl4Zr97ZUsXSVJVTuv9xp9p8XA0nTsx3tNT9I4JY7nV3e7dQhg7rY6%2BqHL9KLTVS7Li2Npa1%2F0o%2BH4dYgq011pLyaULLR%2FGrbi3KRRdatxYzgv%2B4eStLRP1ZTJszlKFF9ro9kXsegc6iMCRd84swQzVGEvmxSIGAKTDWhkam7AaPf9w9DCzkY3CBjqkARhOIbca37bGCUksQ0W5nKyrSr4QXE2vbu5XdJE2Rsw0VuiIuZ1dJgcRRO1aFLe50%2B4QUsbaZcEylq15WbOLJFYk0yFqmRNh9G8VGieLLb7ihu2ZGCPBu%2FMLdZCvH1j5zy9rRxRoqPHCE5xMGwFJOumwUmBqSy53aNqQ1ch%2Fp6uqgymS3WEV04sCJ2PWHYFRZcWR0LL%2BNYw7sudgJfB25%2BJaTxO9&X-Amz-Signature=446e59b7ec61c43ba27e93f18502d0fd6b0f5125689cf320128dcded073836b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
