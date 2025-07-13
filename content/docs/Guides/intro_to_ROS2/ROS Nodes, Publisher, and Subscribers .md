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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=14aba71a7651a6120ca8ca9d0b998ce472b0072f651f50fcc43336b6d83c2be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=c6cfb7c54ade88314ed3193d6c608b8b24a8cc4b6fe9f714a84e3b6324e5c28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=af7fd358d7c1f8c58056a95e19449bd5e9ef92dfbe60ebbac9a7cec831bd42f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=e56a53d1f35cf03be5af14d7e58852f3480a7db7c26321715f413dc4dcbabfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=68d53509a98dcb922d232f5302db2092111edaa95ba0fb7e7b9f3400ba4d1440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=2a53a74ae07503e6483a3203e57c4870a173a889113c9d102d2c54f8de229c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=744727a4acea02401d15e3f986cc33c2ddf9a69a9fedfc73cdf11f53cda5dc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=9cb42b63f4cb956a9518251fc0ea20481ddb3e23d0347220b51480385642ed1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
