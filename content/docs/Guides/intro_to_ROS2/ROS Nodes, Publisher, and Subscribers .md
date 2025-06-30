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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=40cd5d050c4c8152170cccee781b9c09d30c74d0272ccb31d62d405161798771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=8f01435778ca765a8eeda147229ebd89a1d78cc035e98059f745113c95518de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=4e4d7c0afc3b5be0562d76e5bee6ce19d65df4d39c806431ddbe97f2207ac819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=884872c88dcb84f695295bfdc44d7d83d2f58dc05ea5f6dae66f017fb05f9aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=694365891a8ebf217b7d7a69f7ee72cd72ea4da61f2a4f6a6f17a41737cad1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=c2df153392d3f399cfa118c837362a464606d296b82f8d2e29581ebc7f37f709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=751850df6ee70698e23b1b41b1e399e7605521383a0b4234440170ea69fa71d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH2RTGM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEvj9OAlfxRw73OQkFtEGCe6FUM5X%2BlTnYjCh8ZrvgHAiAEqSNrKXST6tG28mMDGq5HdYfws6nF5wvgY4YNefTapCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYjVJZcVVBJQoHQnKtwDDHY98SlwqgwxetJeqpfTlnrtygylSPKq%2FWJhRfz2nmbQoSo5ycFcYJNuL%2BUuyaq%2B%2BrRnQyGTGQxwAMBGkdDRCSaiB1YLrIG%2B%2ByQDHY67R5SQESJK6jKXPGz%2BzO8Q7V3kV4i6yrNdDb8zM%2B%2BN%2Bhfn8CPbrrcm9szb06N8Cx8%2BqAyWRpiX7FSi3RWdYo%2BpGZhgSEfjiTCG5%2BdYK17md9UfHCN7EC2eLfaTnH3oK6ip07tY0Z6mzgNbpLbc5EW168OguZj5AjQenXc4o3zBodYQn5v51vxptvx%2BkkAZ2VrHF9WyJhd7s1Js7wn0yTXn68LK0XWNyAhf1lSPE3tmSgPGmvgGecISIiQ3UNslhEYYbM75inyaBDnw5w7oyIrpgFobOOfAlYp%2BYfB5aH8zqpzbSQh7oLOxPCUXV%2FfrqnZPmUBfk7r9XTLSVhOmRZmzBmJB%2Fu4ohnOzjnuFltOENSMuSt2h%2FlEvend1zg7MXP3uY04vpv3YwhTQn9DXR8E7kZevPmRHk6U0Nz8yarTFDpaMvd%2B39lnqZUZG51U5MUBHavzYE8vfftAF%2BOnQcHQwNexyxvu8eKwZnXtK%2BNIrcEuyFy8zibw7vDjY8oDgAXQKBTwHSHhqaJmWq6Rjm38wyfGHwwY6pgHbJ2CvbyAHjXohB%2BWaCgFDCIsjfHtkotBQZ%2BJwt8IikEkpBtBA%2Bscw%2BThTK18sarld7Znfc6nFCADMKMFHr1%2BL9nblDiTeswqSqFy8g8V00U53y6s0NrrkUuSa39psiO9uLxJtIYe%2BEFtFpSUf0Fr%2FmyompdFF0fgtwDBTHiLPUA4fwAMWiS8Ar8yy1lv6QVx9sdoJ%2FVUSXl30dRwF2600Ptk9q7nk&X-Amz-Signature=96b182db83cf294dc005dc891be419d8efcea7e6b206d5135f9e531f00aacf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
