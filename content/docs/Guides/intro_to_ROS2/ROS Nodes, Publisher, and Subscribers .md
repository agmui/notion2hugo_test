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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=7afefab1e520f97268efec21b8c6b4d07fd66ea68e98ced893231b4ede082b02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=1bcf18f1d598cb2f6c391e49cdcdb62cb25333093b2499a19cd2e68c5a5b8e73&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=7a3938f9a115169ca89b11f642ba529b4d4803c3710757e7f54cdb1933399e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=2c75cf8aab2a04599e3e15f55824dbdb0f52663b90715bb2dd07f1a95e068473&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=c60985da08509a56e446cb393d08d2bd671eb0692f1807e2352ddb3d43e51d12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=b2be1374e09b66fce2226624c9cdc85dbae2eb0b8a856a5e6bf3f71007a5bdb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=971379cdbdfd254d7509732e1c86b774cf7c0634f81de788e9a49836c5541a98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCV4MY3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8ruURIum9xbJFvX6SDtuNHk2a2mzCq2V%2F39KTh3cGzAiBphGKyVyMUUuAncabbkvMG8lznCxMLp5MbxSbYD2tmiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl2VVk8%2BubXv6yfZKtwDGljOqp6vPxasLIOpLxk4e%2Bp1sTLHaSCa16sf2KpudGtsWiLiAflT0kS6GxZIiMRuUQY19H14XkWGPBCEIL97MQju06prlRr%2FnAk71Kg%2B1lrJMXRmmCM2LsBIMXc7pgwhDbN6tBoW7YiCJ2Y31UOEhD7vLnkEIxnQv4JAiS%2BRoR%2FyzVeABJBd6Qh4Ed0120vGDku7V%2FSxFTbGNYIJknG7ebhbWPkfw0kaFClGbkeV%2FLPfHpKG3bNsbDCd3EmDpn9IKEiBDCKw5O61QUL7LqSetYauhnztXhoAULQz9vfkPOdO2fTylAeUrVgZqiLHwPhPI%2B9PPtCBEk9L0ipZP7H%2Fu2fNJNhEup7xz6tl83FnYda%2FmHEf8HbHGXd0jK0jyqBBZxmHSpL3nBw9T3ysBXqpGePCBER3IGpIvbM6VXdTa%2BueM7tjiCXeL2CU5yAiSVRvbXWvwJSinnaTpz6VCvypv3Po8oJat24%2FSPsdM17IC8PRVPPvlCltxjzOBhZZ6ibTj9h%2BWPEBJE8Dg4LB4ifH8VYB3nf29BVKPkpC%2FBE5p9IovBe6ET9Blwg%2Fm70P7trHj1BYFay%2Bj4xqGPKW6mU6WM3yo0JNpZkptI5fquZGPY%2Bc%2FRJi6UjJs%2B5lKi0w8pnBwAY6pgG9SSrBSHkd8chDHG4%2B91SViy85WkNY8iMagUFLoDKurLkvckKOGmdGCDojzfTCsFc61znmtibDvmkJCowhcC6TDRwAeeodWzTNyqGWMIWly1IelD2yAFFiXA9MsatnzPu%2BPne0ZMPvp8SNCiAEIXn7wiH69BJB%2FRVZmqET6hC4LT2KE4jQv3PF51XtPCHE4dlov8dZhrDTNagyL%2FjA0QkjPcJMNIfF&X-Amz-Signature=831f522a884426668ad718f7a72fc4f564c139175d9cad19ae23255a1bb509e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
