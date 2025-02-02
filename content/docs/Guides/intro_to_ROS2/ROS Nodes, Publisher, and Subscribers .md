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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=907fa8c1f18df82bfcbb88dac3989dd908f9419812ce4eb5643da6816c30b057&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=bb74e0b3cb860c84d6dcf9707dac268a732e19763de05ccdca09ffcbd184ceac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=f820fc3e8993cabc5ae164c5d0f5163584750a48cf056b7bc2cb96ec5fc6e886&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=ffcd11cb86567d646b15047ba19fb979f9e4d5203ce93e18fd4207a76290975c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=f3a2b9dba6ecff2942dfe91a73826c321dff8e01e4aebf8ccefa69894f867f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=de44fa43a19fe6259a6e594f11323cb458055e47ffc367d26de411f12c68736f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=e0c9aecd7b5a0ffe78c1e1d578f2384da390a7eff7d33acdbbabd3283fab20e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7MH74T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC68QquJbPITr654SKOViaQYNlqSXBZsJNraWL50ihcvQIhALRP4vN6TNUcZiLHnbuwzX%2FWy3Fm9gtePAJ85ypoeun1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5MJIMatdhe348q0q3AMTsDb2%2Fuo79S3KCkVcSzcufPAmJPZCM8V9s035wWE%2BYfY6vOSA8an29zEC%2FVPccErMYSt8H0eaFnxsfCN5R7XJzYjrqo4Rd8%2FaG%2Bve6ejumI9cHvZ0yYOpqfE6zWhdI0dwV5roPJndzetWOA0ldVIHvAcFxESOwNeO0lPQShj0vNtE5nXVoslD2T3sIkPaM%2BMmCVO8%2Bqzf0LhGFaauvcQia1SHAvnKjTZV2qNGKQLxcPocSUfhmVYwbaacWPoBWfpOQpge93%2BDaRV9oB4jJjfGxN3mig4PevDyhrDOepu%2BDw2%2FnNRbPdet2FhDgPHuh%2BAhWTE5mFUhZukH%2FZEOSrE3gLkGH9PKPe487mbAaW0egMNapDCaQKMX8jqpLY3YpBxhjT%2FPvBiEuwoCmZ86QTjYFfTTiZM%2BOUzrvkmZppHhkxS95LgfSPjiyJLpL4sHe2kfTTVolGWcDbUUfVD5UXlm2J7CipACFMyB6zDMQsaMaRosdfAAYWD3Lr0lYksuSAAevJj%2FUkCiXNeFWDQEqDMMqD2GjHwVprG8kouOccSNglVlZBG0AwraLFLEXXeYCkrDMP1h2CqEG0qgrxerZs7tqX4JWLfgEN%2FgUTTZF%2FLT%2F8llQhzjKN%2FZpqfR9zDkvv28BjqkAYwjTuQ%2FZAy7Pk9uCDavFb3BDTnIC%2BKK5FPG0TIGPac0oIU6KyRROK1RX97xR0qpmgaVIDoNmPMownB1rtTFCCu7d7jZtycTpu6NkZuNJpygnrCHKbvPTeddl7%2FyFWr8sehtKrz6UiaLQRLVatsNPO2ZkolmqUk%2BDyfcAd7NjTWjyiNCCy5Uu8NPyT6qB5kAdZef0U4stmEF2dT6MuYq8qLazUMd&X-Amz-Signature=ba3088382aa0f2ed7f66a79e0eff3c788044e9ab49aa6e5956321d9d16372aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
