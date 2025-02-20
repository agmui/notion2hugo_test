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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=1bea73d6bbd395cbd755a7cda6558dec838d4e2331118180dc37d9a8fb65208d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=10f0526477aaff1ab947ddff233d77e0d56d02f0128054cf24b6850fa69fe751&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=e09af5893eb17cebc077d0cbf452fd39f8f0e9091d0fcc87bca48821bf660442&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=0daa3a803054e8ccc797edd050550fcce8ac8ab9d0a08ac27511faeba490baa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=cb2ef4cad4b8ee2fd8ec4ed85bf4fb7540488eea63b9367f72990f1b6170af94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=f398be913d680c7cdbd1ccd8d19ce65cdebcdd47de5d00e10272aa9735c0b432&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=165a3976cdace0f9fa9e6b84937a2766c80df6200495e30cd8f23a8ebdeedf52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLPLAPJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGG1W4Fy1sniJof3maNzRUNzih0LFoFl2OteriePWz%2FwIgcbIzeja%2FjVLJRubSW2ZnCZOBGf443Dmv243uHggKIQkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpU8lF8o9AWphr8%2FCrcA4ssfmGwj2othOnHfRXq1gimVfbY42FSJ4UM1zLq0VvyOJdqo24LuTkNSX9XdjHKkNRMybIfHZiUn510JXGXHypo%2Fky6qfofdDJTUcpuhpXPFMFI1yZMNG20bEO%2FS8oxATAvfxbEQzj%2Bi1wEUAGlK2DdwXrIcFWBeXiAI9X%2FFaEqXfrYOZd4kk%2BULX6e17Wmkjrx0sg9t1BExJOXN7IjoOQ11EArlyTUKjcjYqTceGRLELVFeI0OwuAkMckmCFBXZqEN7DRLAMmorWQkOHmOpm4pbs9qhP0qVKXMSMei6a8NhDo13KhkTsRdaMeBOlacVMUlsbrrIILdE2kPoiZ02Wcc9u2LoBzM1S1ubzONZrtp4dv5iAWVJXqtcw6PEHwt3uR%2F4bSuoR3yLT2DsdVJPsTuTC4Hy03m3FIVwuXoQemQV13T7e3HroVjnlloEIBSVuG6YW%2FaxAI0KtuU9OML3qjdZ7Ud3HhYnU3ikopN0JzmmVomLMsmM6w0jXmCySINBfaOlbBHCR20BZDfzg8hRiZyUvK9y412kaAHBe3TQ5OJFY2l0of5jvQeSE6Agypc%2FR2X4U7xdy51Vh5AOzzHfao3ak7H9R1K%2Flh%2B1wszv0jVgN0rIg7%2FOi8jMTsgMMa8270GOqUBN2fF2uMfsZjWKPhFiUbvKmlY1NwIT8jeYepkivlbF%2F0gbDIXnpUnIPTGpE82UUqjK45H6H2CcXhULufLjP%2FiB6jtpbuHhOPqfKI3TIyHNt5rF1RtTHwJi3hvcIfXThtL%2BHAU%2FBrojHJnh7C4E8ovzaUieheABAsyuBrXGHslpJEfwmKyM4%2FCYeaXls9FTY7%2BViUac8NLhZ0xcrEFbpozSCjWt6XF&X-Amz-Signature=97312e89c0f0960ea2005766bcaffa8e64fc490c3ce7d4b15766b196b5ba14e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
