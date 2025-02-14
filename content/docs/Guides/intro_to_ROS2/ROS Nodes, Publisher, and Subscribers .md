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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=961c6067bd098d99ae79ad1fdf4e683933c6b2120304985d7d1648178fb9dfaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=1392ffa2fbd74eed9fd82721dc6c7a53000978f8e2d08b7982faac92c407afa9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=d71ce16094615f321cfdd9808d194a5009a509d44cd940456b6ad0fd15ffe164&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=d3be6d24260547e39aa81152fdc41a0a28eb99577f9e0d02e0629121c3f4abef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=5abee4b947086ece0f4ae0e60627a408a749fa25b6d58f6da47bd4755fa355a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=d1931911022ae36e7c100eff6f7cf526b39edc0a3a9cd24cdffb121b5cf97476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=a7b0ca7c2d6408d5a070600495ecb989b559d542bc00d6635a853cfa44ba1707&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2JXYS5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIE%2B3SJFLXEw90ACFXf6GFUrqlrtHL0SZhUh0dTx9L%2FoZAiBeGLwoIWTob0L2%2BhtdF87Cl1FBP9U3635V%2BAsZ02Codir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3KVpJRCWzYC2vCt4KtwDTgixJQjmjbSPidbh64gHHGXSHvYPZ4%2BF2%2FcXoL3TA2rsHEG7Wc6HVCEHupkRPl%2FH8SuV9BF9AZpKuKmVYah8OPNJpZdfBoviGTI6Wkb70TN4NMTSiLxMUDF%2BSyi6cDWXG3iD0zkBrQ0b39HREF3sTIu%2BuFSACioML96ycoEXZXD7oUwJm%2BoptznUpJyk9KJr9NdCtLywWbtfaJ6JU0uhXIp%2F4VgCUwQqgrhZSTIOAQd4knEGpnhteiYXWtt9D0Hue%2Buq9hxkcukklmPfPqnZk555bvf%2B3OLVRJjuE%2BfRp%2FDLHdmI1V6fCH7af8v%2Fs30ClilgdpYFKTDuAdeBt9Ykb7uekRBK3PhvTj5ojpwPEDoWnj%2Bts65BgW1WXX1Qofsy3ce48W2nRZMhvDHOooiIZfWzy4w0h80diXlhYPBOvYgra4V2CZ3Rf1l0HlIaeyCGlnYtERsZBDjWX4MLoXwchSKkQvWhZb1WSLZfG5aqz1dmC%2FXek6FI8nkQWFxg9e%2FnmsKQ3OwdPEX0AsNJWP%2B1LsI%2F5F0iUwCIrfHiCBNzn2qUA89ns0pgwUIX0XBJjMKy%2B2uzPrKBYQc1ROA0WOPWD8yr1Fve4DqEJUvik4LMkCfvR%2FVG8dzj9eATF0cwtrK8vQY6pgHJiU4rxuS6gN1ZtoDDjcvRGawUZdDL8ZbtO8%2Bl%2Fso8IaTgFe%2BroXSSKCtCdKEZAow%2FonkdwPAnS9yRD9HKAc3SJJjUkjwxwOuGxdaQSNkoQbav2ZytJibvhFEZZU7m2xvwY7kO2elr%2FYPOzYfce4yDt15qe8v5vtBGTnvLYVaDm4lakX9rCjlxmFQh%2BJ0RFREJ75XC2FqkrkquJJo4I6Lg5D4lXgaL&X-Amz-Signature=075bbcbbb2703eb9204330a86bff97c8761458e35708dacfa1dd501cde4d15ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
