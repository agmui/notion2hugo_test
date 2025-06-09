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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=b570d48d9a28cd5c314e9b07694a8d08db1980c2d0b5fc22f61fe11adee96668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=4ae3a6515fea659f35675b35faa58df53ca3d4b880f2fd0f16177533f32cff54&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=30c8481037dabc95408b092bafc87bf60fb985654ce6335370de3fa861095f84&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=29fd26e40cacb084a37bbd3f4750b5d5a1cff0ebf6c1b6de42342e170bf8583c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=5e000552e6235a818ade3a4aa5d0e68ac72b469ba407e25a9e4f17195af73566&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=e08fa9c40e7b473679a7fa287d4588e0150c23749a27d62a6a1ea8f95e6f1b12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=1c7d7fb219f23655bb032e40bf81c7c01ebdd50ec36f7cdcb88e9fb4b2ad744f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJETO7I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZiCTB%2B2SEU60bnBIiPiZekIuZKZhdk%2B2%2BfdKD3bQqQIgLk4kbq7WXFqY5wQl3vXnslJigh3jHxcz2oE%2BhRojoeMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeIV8nJfBaKEqL4NircA9EXD3wn9x%2BtLA3eGf7FbG3sct1LrEw9mkS2Q7uHMSnILPJ%2B3NJD6hh2cXJMs0JPpjNTAUJIs2E0nKHJ8eImn4Dm6HVnfnFnzvNveLLDqfpcS2bwQQ4tqjeNWcjUiD0Lb0ze%2FpknE1%2F1Gnb9y58Vb0ItZxOHaZkU1IweQrsALzh7Q8FOKECd82kXawZLkH7Z5b0SfPEZ51XLIpgQizOzjOowbV5WRBNhMEk4c4hjjv4NkKoPqzYQnszv7uGlcKkRHP1nFHQqh0n6aiX5FGVu5weYyxC4ymumVhCOiG9xlk3YXFJ6nELxG8MsBq58RGEsS7sBplYvguA%2BD1Yv0Tu4TKK5i5ZQWHD333dHc1Ry5MbDjqY1fDspcYKcpQJ%2FHb%2FbmIHn0MAnsKYoSLHNVuUO2cH7y1UPtjmmiDstrTbTqPl0ZPCGhe7NmBhV2V5Iza63xa4MfqQJqx9uVOuZvkAmTHhuM1mADMDSFf3agi7KgZYJ5jsxInh5VSufR7HUkvAOBfPh3MB2oYgjK9%2BwVoV0ezJYjry%2F1U68CwEDzm6azLmS20blPxor8zwvvNuKcaFTFHyW06H078kV1%2FwD2o60xVx65Y1McfrJCNX7B6E8U8vGrczxPyrQ4POtYABeMJvemsIGOqUBHYSrbDErqX7KjBaRLK9hn3el%2FO6uv73LK%2BYEEWgFN4CZ%2FSBIdps%2Bz%2FJ0Z9CMXt7vMCMl5dtZBwbDa3e%2F1IjqliTk1w21OgAqWAOIba35%2FOqSylMJKEa7rtz9LcCJcPdhisaPhtJGB56Y7MASSYZy8EqT6f3VNLq0QhqtKnDCEEgV5ZB5GYwtIylg1t%2FEiVt4Ps4fDVE3hy3YFN%2BhtsXJ4W370yN0&X-Amz-Signature=9facf22d37a0466db9996eeb43b6fb3b7133a28525199d4099cc94e196be7ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
