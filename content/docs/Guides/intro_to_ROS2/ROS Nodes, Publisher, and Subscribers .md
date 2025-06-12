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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=a06c0494ad49b85c521dff6507c095b7850fc46b185f389f1d40173937d06560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=3f09a6a70bb8785f626bb8a611dd179ff85352f4dd17fdfb8502473da50d8882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=62425c77b3bc37eb7ed7b4708fd7f33f946f3728c2eb125b95b3d5db3e1525d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=810c1491c042df413f63ce818687ccd1cc360f45bebe47f142ff87c158417845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=aae1814e2a8cd9e91dc05e3be2eefc51fed11ce750084e6f0724d85c4c27504a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=1748f515f0f652415b569f94fde52d5e45994d9806ea2b078302a7189582f40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=e14178397bf4d1debb09f9b6873d22eb8c2da0f52a84c9dd2ce3cb4f70dfcc0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRRDLAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHX5IhUJjOHawUvKZVeKKzoZP92c5OwopNSlqdqQehX7AiBS4cSdhhDECRf97u8rZiFCHXR%2F8kltSKBN4ouXXNITdyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivwbr7Epcll3I7UKtwDIZzpap22WRe1i2nm733GRX0169tkNVp0qkBl7gZU4IcPXLBSlJ62l%2BLPhG%2Fi7VwGYnY0WOIfFWQF5Ni30jaawS28nMyJIkxdyrcga47AdnIutMxO4PXhAxkYeAm5T9yagDaKpP8Ai9GTNabBwJwiqSpm%2FkeFOrStB6KWvvBLerAXVVns6hp8Po2sm7MFMl%2F7dumZJlav8l3e49yrh%2BjaKzQ6HgjZCjurnOUJ43kbsBg19AyZ7lDOsD%2FIO7jv39xF5VBZW7Diwa%2FGuD%2Bkqko2FHPLVV5WQep%2B9s9CHk9eRCF4fh8AxoLBDqp3DqiS9PJ%2Fd7D8UqaEkZxTA%2Bqay3N1dw20d3C47ZWQ8StqANgtbX6D6omRbxaO2k3kWQc8pXNgOaqORbKeUvCxdsZR9%2Bw87GAU0s8k2ln2MqTSgHatNRGeKmWqfAO2tsKN7N9SpQeiZGajsda68GooS60qNB7IlYp5%2FvA3RZ4WvRxK9cPGg78J3v6Bb93mLzoEd%2BwPvfj2%2Fn1Ms1Aa4d3WNKkIZqI%2FDsafjNcUniY8A%2FCkiXi7YYNJga7zaaA1qVGld6dCi3TEaVZaMp9aLJK5Ul%2BdKLaCPFcf%2BhkuPC3AfjFRSuGvUGTUhnxh29VFw0W9LyQw0aeswgY6pgGOb3pIvzSFZBQCgwFa2IR%2BHRae2a%2BmNvs%2BDASZHZzH6oYWWg3ikouEFdWw0WQQoEscoYFF6LJZGY61CFOzutNltRM%2B%2B89QpGekwS5TFhdASHtPlyGYSeRMGytv0XGKJbWhVg2i8kHgDrniY2yfkrrh8m47hJg0UDsZaAJIiMqUimTRKdR09mro%2F3a3eUTJeG%2Bstjx2I3KENL4Sbif7K4hVjgwj0BFF&X-Amz-Signature=2f87975f8835d295159cf5623905111382b19520f056e41faecaac011af1e3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
