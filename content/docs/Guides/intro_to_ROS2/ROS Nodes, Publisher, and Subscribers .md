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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=4189a2b0d907c051c05f575a7d8631839100dc8922ab735481ed16005e04efc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=7e5201882e01eb23527329689cf9b908a40bff9d5cd35fa181aeaffaa7abaeb1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=6f69fc10339e7bfacae78c7da7b18fe3b6154af80ee1435d2b8ca28d3a980870&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=d059acd9871b27868b5c214fc7630713b527071104a57e68809b9e1ac0beeb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=f560600efb3a226907c34070dd140a9a8608668ca65ea4ae07c01a76502d91d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=3991757a3d6d237f3cd30cd65a93bab5f5e95afc5e4c4e4842c023fce2489374&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=c9fe94c61025a62324828eb596cb2bdaf7ac4d6845be7238be37339f568582c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFCGWZ7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfyFk99CEhoZzI2cb4juMUgH%2Br3nAwLZb8dMXT1XQKyAIhAPQO4umuGkqG74%2FiJ0o0ZD8OqIWCy0T%2BQ%2BSQSbRPZM95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igxm9%2BwpVd91%2FG%2F4CAsq3APBEHbaDl76gzWNE0FrPhdn6Ssz71BcEJBK%2Ba5xNxtWxzst61JSRC%2FTCHrB5dpg%2F%2FEz8E03Quhd5FE4%2FcOb%2BJCKhw9FSZHmttlFq7oEbVZaPo2ovdPOUmgGNg44EapWYV4f6%2BFPtOq5dxGSpFUkibdklzv2%2BQBMFXINuGlAtSsaKp7P3wz2RXP6fV5Bd76jZ8zo4MXD8SnRBJ%2FLCk9KesjDvs%2FMaQTRiB3E%2BTGQXD%2FHLZh3Wt2FlBvDf1oam1gOh%2Flpz4OuANCgJSoWBYbRhaClqp49w9GCN%2B3JUGe7vGKeOvBN1ORBn6nEJJGZ%2F6D5hrkXT9QNqb0zizQpKMHlms4vEfkmTaHbQBXv7Rr47jgOavcS%2Ff7adfuLgvN02%2FSuBIAbpeQPf27rbX0ISU7%2FF2ghWK4aP9Q0kVyzV7OXyRXKTR8kLtKjnJWTBjqRKlHOIBV7thLfmfneg4XJwUljW3u8ZU3pm543NPCyzsZMPo2WRvwTHogDYbkqskwzgm6kIdHFXRNvprMovOyfrB9CGoZH2hTARSz6yBNPqrn30dlwA%2Be%2BluV9qE%2BMKsWdypgRVcCyzet4dhUaT7IyBR5QCex1KhocKq%2Blra6CNc8XCePjcP0y%2BoTMMDum0ttyfzCjnsu%2FBjqkARlE1HadL0xB0NtkWYgOcJieB%2Fq4DNOCzjMPa0Zpa1uJ%2BpOie9y7xqbrnP7dUKvgBzzBU%2FM5aBipUeHQrtUafCuJt%2FgDZMS5BwWsU%2FiIIhXZeLf2fZOE5%2FMkRbRHjen20QzIZyqO34yHQLBS9sEfbtFDgHNxtp46jbq1wkdfxNBtw2OBanhNsoKQ%2FJU6egWCJWsXOSSJpC4WtIU5CDRN5%2BUFYyeC&X-Amz-Signature=47c20fe508a53806bacfa0b58013ff502f556e7d7e0b7c3029f5a47a11dfc550&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
