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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=7dac00e0b1e3f2978ff3ff8571fa6bade4607412dc3d36e20bb5c9a828a599ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=0e980f2d85d93bd13caffac818689515cf1f032c83d1bee2ab853d9109a7d5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=65b17166c69f03ba2912838b5e1b1a3e4d0c61846cba7987f710330d1632e60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=89cc3f23ab8a60c673693c209c518c7aa9e89d3094d6238e8abe6355a4bab76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=29feeb6b44030f733aed47bdb342ee8c4c1436372709d5924ce6877847458ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=e6f53ccf1c9d4c28be11c69f8ae527b745271cccc60a3ed50d522f065afc013d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=21d523fd19ff695aac1a8b0a5f826ef5d3fc061787725117868b64d9c86bd6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3SELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC2T8nyR52fR%2FexYXiRNVER1A%2BUPx6cPKqjAZoWhI3HLAiAh68a4dODWcIHNGUxQgq9AXJOzQJF%2B2HOjTW1Xj8zjRSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCl4or%2BI2rRIhg3PwKtwDVqMzqY%2BA%2BgEpMqnp9WBdeH4uPZ8XVGiypWUIX06FdzDw%2BpsXE2Ih6pFlfxB5Ms2S3lvI6gcT1fHj5nBkxDOhBBDQhG%2FNegohymRZENrLM1xFb%2B%2FevSESJMDrSvr7KMDFSU0KXgj2KrCob27Xfobeabzcae8qGIZ%2BZkMTWxaknXd4iE1eaBTRwZDyW4jtqjpiW2B88uPPsS7ShqzsH%2BXOxMmNfW7bVSqaGhvV152TKnVSp37CdceW8fUS2ILCgCtC%2FpNKlrhVJNi%2BuwxsuTw9DCC9P34DYo%2FszYHj%2FAyLdglQsp%2FL5mN41binAxR9EeuFiOt5Wq7ZZahLMd09B5wJuf%2F58cINvhZSK%2BK5MiotP42TT7xN9OYHUrhYoBbbdYaLmpe98cHFvUjY6sXcba9kqeJ2u5z7eFC3exhuwYnT8jQKbmHFIJ9MEBBfVetBAuQvTm5DSPKvVf7PCq5eaBlhG1OW2UO3beSjN%2BlQG8L2j4sLZoUbYk25f7jDgEV7EJRuKvcVkxscB86bTpeT6QLP9uESAwPsIg31bwaSUHAX%2BXaAvocu0olmMRNlaGqnSXo4yFHYwJOEr5Z12Z1HiRdKuF%2FSQ4SPPnpPRAJUtvn85aFo6UYvptp6BISfzqsw%2BNCPxAY6pgH4KKV78rKMEsQo4yaN8q3wTP%2FUdBJapXuOE%2Fg2t0w9Jvo65x8jPd6XMRnYsPwHSOMp9BQaiv2tqOX1tMzdky%2B5sZNrq5rNvz2PC26%2FBEnWNN0K06WxnDXnO8IhqdtQSA1DjS57u2VzSRdm2X30%2BzVjagxMoAb70JxtuM2I1p1lh9bth%2FniaYsfbno8AX1Ems0YvGpytH4%2FW%2BLL8LKmEKHW3PVK8jXP&X-Amz-Signature=dfdd7d3eea85134a4e4f51bb173b48dc71a8545359aaf9a3a10b76faf1761dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
