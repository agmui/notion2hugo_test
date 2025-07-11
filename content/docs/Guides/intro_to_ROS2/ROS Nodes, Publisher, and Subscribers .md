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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=5c8f9193bc42783f8e40bb60f59c3fcb6e83585c69a3bce2698fef2ef0ac7257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=078243a4d0d0962ed16f8dc4a8f810b32feb383747a09ac0d4b16f16f8d5cbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=24876e4dec0cf0656d4ac9e58096cb6e42102dff4e7ebeb4638070c455b20fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=a3d917a82794bbb4d137e111fab28fbe1c1a87df37adcdb4f34db2f8ef1c9640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=26b9616c5cced871caa7b0c8008e889404ed628dab7886a8a09ec01ecc581705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=047a92027f13a3776b362d27cd286036f20981b4778fb8aab53fbce096312c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=be048ba458bf1aad96da6d37a156917a5f0657b47bec636a650c18e92c6e2e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6JPV3U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR855FxgeIxUAoBV6NefEjaakSKSxbDNOgXUrJICEm4QIhAOnwcP5q9hEPA8UF%2Bc3jiCoocP8jzLU%2F8K1aj5FRjooTKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7lN2BoCELpNeIQ5Yq3AMgGsLTKdG3n7cz2MWek%2F4%2FlMQQovpBvYV9QzVLxewYZekuPtAvysuunhZIBjtfGPmcVod%2B10KNHpZPDwlFz1XCw35vNFz6Zeq7auou7vnwysasjf1Rko6mfuwJLCyDjyW4JKOKutdLJQ%2FH89Y7WDrPu4QklNecsAIcW3KSMvgGQ95IiBZlZZVG6VDzw8kqJwriAh3JHh482d7jg5KIQAgCur0Ebtq%2BYTKDwXdMZ%2Bc%2B5592JiITYCYcVTZZB7lOS75RfolqVQM9780uPJYZ1o12tj%2FTdxyB7QcJpqaYf0avfITGpyI8oQMnR5wkObfCtEAhdyKu3uGqwFUHHlmqvNSJzGQBJHMN%2Bw0JYbF3Dz4KGkq3VWIy1AoieKjDS4CyFNs0sM7GebZt8Wkv99aHT20AUovwexRXPMTVVcoKbBIypwPrLp03mhqwnebyIpCpg1dAa6mGVW3L2IwbvinNCx4hsHYA3xeTpqPnJjsmzL6YsAOxnCJu7Ailiz2z%2FebOBaePc0TIP4JCb9nZ04ERElWQuWSjL%2BmaM5vC9O5sU2MDU2WGFpjbmUckZfptjARG1lPw24vTjtYlb7AsIsa24Cvp4NewyRYfwNjxgVhQGar7UDV6aBqZ%2BH7MwlTr1DCJ8sHDBjqkAZeXoxjuGeyH3jJYYuEpkVqKw%2FrPKZq306ZZr2X4RijBFVENCDTIr4WVhYVBHN3%2Fva4vEC2bYkz9THagPzeJaTLj5jsIVSyEhMvbOkO78vwUR76E0xPW4ET8slV9aPmMR1UAGk1cXjQOFMdTFptPaFXeym9ayQwkLYS6xVfCMSLn7BNGLXwh4zlinUNTbueUGVNFTGwQ2N2rRwHSl8Ne54q%2BlkOP&X-Amz-Signature=301f1aec0b6c8ac47e9bf8e177ffd667f11279098fea1e9c804cb38243d0f1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
