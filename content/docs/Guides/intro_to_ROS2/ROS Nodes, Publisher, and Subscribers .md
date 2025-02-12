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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=b8428150623b1ceaa53ce5f5f662f2f15a39ff99984fc122f6aa2ee431097306&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=f235afdedac0d93328ff018b41dd46af590102b75b62fe13bedfd185e2501d85&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=4e2ba2b54ea097a31a1459db7af9f949c0d4e4aa4538eb1918634658826454e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=ce53a47fd27be357702d0b3909c771416daa9f8012c4713f33084068da002456&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=3d21920fc357badf53269f772566d6949af2e17a20d92d13197895670f40811d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=8413b24deafd8cf582c2892646545391991df0dc054214c0ae3a9490cd636b14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=5b896e8e60a277b0195057c480b7ef8719a1551f2b68c02bcb5f8fcc07a0ea1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC34J6Q%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwUvjxJxFYQO6scb5os3oCsyRVMXgtPUhcVmgyJZbnkAiByfqeLACa1a3Li8UM4J3VSV0KaVIrPm%2BS0FNCcI922kiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rMljH%2BNnahdKnjXKtwD92xLZdx4pHdqwNM4aSIEgG9S0dn7IdHM6iCBd6leyFR15gIrf1gVaaeE2PrYT8NHt%2BCA3Hy5utQqo8jZkofnpzeE5UtIXlM8lTlxFTY6kFys8VaW3DOQe5qkAMLnWIPlSIJjfZB5i7qa3PrbsTiSypSxumZUA9CiTjUYEJvf8flqgtNNJc9HBUARon6fxjPn2fiis4EHtssrJ3W2d8exd1%2FK18DqbvhmtC6uqcwS0FoPAIaUCJzIP0Vwn1DKBfhrTTiACxVgsrKXz7%2F%2FhHtRgsiC45ff7OCWAnBPegL3asoqstwUOZl00i1CjgxWi18iGDSjjXLxNh0hY7MQJL3jZQ5g0rg5zFPHAJYTvEgEpvUvLu2eHILL6Zc18jZhwyduLI6WAwfqhHe7x%2F8FDPGmiPKDsy4ar0ULHS6ciK0pre0mCQ2YnRLS7fmonFDKCpfaejmW1i5MRHzvc73Ik4o5i0wuw8hZglqrFFj5aScdypH5YkgGbNGpu6nODKQbudJKjB%2B%2BGdz8O0s7EPv6T9APJEwgSmnRgD2AjiBjtDgL5u9jbYDWc8ftpXSuFZ2UjDoqeR0zNfVsTFTJ5JMjyeo0r4sw2iRmjoRlHGZvbkaC%2FEt5S1AsL3Rt7pLltCUw48yzvQY6pgGVLOuFNrCUF9jzt0rJS4GNyYFASJs%2Bu4k%2BCIBW03XbIV2%2Fpeo0xSK40KoEpL%2Fqo1bAiPFLNjSOqnlMEg0LxEVvuXUzszTOTv%2FzTl%2BCTsc2s%2BAMY3YFxK6EFnawUOUleLdaNrOwJ0%2B9fgEc5DFI3p8AWNOyb9cAYo89966Z3ZBvJ33ss76bbxrjGwo%2FeQgUBBFnZqYMy%2BsGY1ySnBGwUh%2BM3qnubQxF&X-Amz-Signature=4794e5199471664aabd524412148031cc24c35f5dc60ef715e0b05f4cfc4a571&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
