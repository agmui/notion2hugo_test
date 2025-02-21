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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=9a9f49700c9bd778c8508d2ed7a24aca4899eb0cb5c9ea7b4c589418c0188614&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=db1acc40999bb7a13e4435f3d4c14b076c27f802f0bde9865a760de322e7f613&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=e58213ea9fefa402a7f4ab4c1c2845329710c507a06ee0617648977d26b99718&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=087ae9ebad9a6b62df33506773fbd4a1380cf4ea4b6516dec955f532e127137e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=47f40d613aceb968e3682a3a95a6aecfc98136c402344682fb9dbc8b1ba8d454&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=9379852090008d8c2cf4bb711305eb5910ed97e08b5c2925f7bc6ecfa70f01b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=7f99e7adb1835f32b083bfbd3a20a6032376ecf61500dce2a605d151a8493a51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNP2ZVA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9LnIpDNcWirWoGUZGbFXaV8OIjrkgVeK7rekF3rcPAiEAn11emXebQvTDy%2FzF6H71%2Fj6FJqjmn4X%2Foz9cHavd0pEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA81Keb4%2FunupkAWPircAygehsIVmkDuGT2atwX%2FvO2vh8msJio3JC2CnQlgOZkXRAutsKx86GGnfcvG4ExIO2XixYFxCX0S%2BVvj0A3kbheRW9hG1QO3CgKS46btanxFl%2FmKsL7hgFvz9%2FzkQVV%2Fo8zfCIx8uGJZc26lvsHSlXNmAEvq%2FNzBMCZTMGVbZlDReDqajeGCOaYmZqUJB0eT3wOtbITanyprIwXarOkiq%2Fvm%2FAARWcrB%2FN3yHfvOMO4WD0fXHAqwjehwGvf4zFNbECAQLS%2BfnGVBTc5vWeRVWYkLANwFRPJPI6QRZSRQNfhfRAZyKGUSKFELSQKiSk98hrCaC4z8VvhtkQLtLyna6JNeavsK8bKto%2BHB0HkTKx5gbpQIZYjmbcuDD57zORTucOfmyhOGqzMMOaNxnz7euB9CXHzIMj65DSQ%2BOXu6ywmUrTbtrzBQ2xQbyUKfdZlt3p19Aj1Y75eP9UTD2Sr2SqpINplrbebSXpDiAeT1Pa3tVShgrRSkh5%2BUoUdjWl6JvaXPCXCzkcOqnSDTSGTxEyccn9f8OG5pkWjqiL%2F3cqu0PBAKstJgK95tA5Di3hTiulDv%2FQbWA%2BwLc27vF3cXwn5LUpAA%2FjpuSs8nhup1M2UbYpmM3fQVq8C6PpyBMJ%2Fe4L0GOqUBC3ldjvQwT0%2FEcMnmCZnpiMa%2FSaL3eJz34F3OscUb%2FyVLSRghcJqlDwyOvqulG%2BafolIZu9IHoh1lFdujqBv2UoGVCxHx15nEVrze3GIacoykrQdgRtRrDGGckmFObxeQD%2Bq3Hcv9eD1q0J4BXv8%2F1qwGW5U70vAswYi94Sb5GFtGylsRMBgKNhkAg9j51cJLxpsXkWdMRCblPNmy8j5saisYoPSX&X-Amz-Signature=619235ec446448e71aa969877c884d54735c4e26f0a3dd4bf6446c32413026e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
