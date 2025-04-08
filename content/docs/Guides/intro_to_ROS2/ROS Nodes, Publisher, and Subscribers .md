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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=066abb1116a9ed82907a6d4e2ba4a8de46bebdaf7b279381104ae5fbb26d93f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=017442e10e764c83f728a5e2ac2c69caf3c3848f18730435bf519479ad40d37b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=b1254b542d0adc742c7e54cc1acbab60b73524205956051a8448f1bdbf061351&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=a9c81aabc5e0bd35097bef499f96de98a570c2546775a8ccece2151caf3e9c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=9df08a2f3445ed087d1eb4a02e17c133fd102286e33325725db25db1da07f542&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=4b82c23c36870ebbeefdbee378430fae4242c0d74f773f0e939a46c117b7a85d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=6cd8fbb6fa59a4464564ead607c8a3398f3b9f425511d9162de6f4714b93d879&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWPNKIL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTjfkTh3sqzzzdiJDHH3G75BJRffo2Yza0qwglAwz%2B6AiAd4hgc9OytFlr1dDYUSXJ8aJQkLENlAcxx1f7bWntN0ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0gg5%2FOtzWSdsB%2FAKtwDf49KOX4vtnsuQGuHDwke6US29UCxrNNWaqR%2BjzgYDzy%2FNCOoIG5CLFGihhu3ZGbEaKOq2prLx69P%2FMta5UVnurG0lJUjCK8YaPYZ%2BtfAANDt0JO68Q3SSwfoZZwQPaIGds59fm%2BLXBL82tJiGuiTReZk15DgF3g8CXGKIFQRykkRrs5iBuDYnpa%2FG3OYD2%2Fe9XLLVvSHHIumdGn1xJdIgplNzz6IiticDT2dnsU1jcay3c5KTxqPCEiT7wJaSryG4TOK%2BzBIJAo1pRWXD1HNTGqfshYSVCQsmPqL6nK0O1oktBlrEzlMo8nyWdUq8EAKIaiMrfzg3fbLXBAwHjRpmBr1BBNE7iuLUR1zfoxtqpOe7XgQ3mGny83Su%2BrMelrN7NLFU5NsPSkAatbStmFMt3WtSllPOWjKMdcGSS2QTFiPFcJgq5Lyo1w9P9sqggjNscHLaBKhUfvdwnhA31qdy7JIXbgz2qHEMfYefey3HyIa%2BuZ5TQcdBxwVubTkYZKn1g7tQzYp0p7oPR8qxCT7ugBqf6Z23tEF3%2BUO8k9%2B%2Fvf1j08n0M%2FlmHXhFmLa5EJY0%2F3VvnWDPcMCJGpwQAOzkLwsWfJ2qgWh9rQJbxSP%2FfrYBTUdqTFQj6hjO5Qw7r7UvwY6pgHw3yOZGVD7dZGwH%2F%2BnkqOEVOJxAplzx9nUOsRPjjqd8OawbAPPvHhGED3uYtOGi429b4mjS1NnS4f1umkVxBSLkU4cnr4e2vQBtG8761MqeKZlf5KIMQ5gOnYfz2LV%2FapBtMSyiNNGnRjbUYOTq9%2BIb7oRWKZW%2FgzyRLd2zzXED2KklWyqERk1p1Kv42Lkw6Qqykh0TAbuFkMfb%2FerfsAEtBSNQ2mB&X-Amz-Signature=5a925aaf61bc7abb9474f778f1ba4a13a463442018ad0a899f973324ea1b0a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
