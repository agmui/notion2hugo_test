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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=7477727bd7136a41fd800559f5326a6abc5c55b9c4e38e0b9cee6a282534c797&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=9aeb5bdeffcaaf6a73babd689a8000db6da261a6e6375ee9fe1cf2251788c724&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=aca582e324482d9ffd569e7ed8ce5f1885626f8f550ea08d200547ff67daff50&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=852aff0e25c84718a591f68310674f6c4df05bf6cf9fdc7e5c4cf2e791cc9d65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=f976cbb2d6ae80d55f42ae9b9286d459deaf52c5533cd0fe414970cc6ba85e33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=427cabac404869ebd0374ffe0b3e6a7c35e0b2c72078fc0d3dbe0ae4eb8d2a14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=8d9e15bb31460e13ffe744765dac610e24ceff0bd83f07c066ebebf598d72449&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYASDP7I%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwklso2qsGybRI3HepK0MK0eI2ATXLjggG6K4tvYioKgIhAPmRgCPSfFG%2FsZcu7dXUQ042WeWi%2BErIwFU3yJH%2BfQgaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzxmVSzv9f5k2JKvkMq3AO6vloeK9HwywrlUZXOWZH1MT5oQp1tAQ8RistssenjOPig79eXz3HuVzbr6KgKE5JtI87Zk0l%2FmbnxRpQxS%2BhfXH3d9ZaNKntNFDeNGV7qerGRyFgCipInSXzSdWV0dzxVhWIRE11f1DdrZ%2FApgctW6t0zr675kBGbV8rKmimVo%2FrPhvK8eBtsl%2BgXTWI2JqYxiCWNESKE0KQCGKd147Dk8K1uLcA8jqIeYOkV3xlAvNEt2zfgef5JGALdLAf9TZDrSTaqzaB%2BDEhbav5Ss0tdT7kCITSeNikjUlRv9MBxOsVZBanJtuXGSNf2x4Ow8DbeWOCH0oLlvZ9Krp7JabtqQC8DCYeEGdAwD0YSxAt0gTiuG9VBBDe4zhhmMH9%2BNkmVRpFQhD0H0iCposzCSrx%2FhTdGOt4Kf6RVgohFZMtVc4AzRDWLOvkT2w1ma1HQdW9f4hTINgYH%2F3OW5WjiogNDiG7vpB082X8Ue7Usutq%2BFDagi10CSuofCd2UNfZBusvnz%2FBVE5lXoTkUzCshdRvzP26jV%2F%2BtFtIT8Om6qbBZAvxZVe3sV2QHc9Yvv8VliWmPIyJdbDJoLO861358TvDMW6joC786BEmbampnKtt%2FCd%2FGJDKfQJW2J6LitjD77LbABjqkAStcj5ZYdlnceaBKcqWT3v6tBn9F4M7Dqg%2BZd7pE4qW5ALYF8OkhvEFkHEZl1EYiAYTEUcQ5Ia3hKhHlpac8yhqdgBQ1vY5MrjZ7oUgEDZIvus20QslfIoOL%2BBWNUC6izo1T2%2BL73xlXpKvTY6LOkBEMSGXdBYvPr363W5XDKbOAq2vq4DFuV%2BOVnUv4ram%2BgqmLXxGqpgCVB3jh3v%2FM9k1%2F8J8O&X-Amz-Signature=0cc8252bdb08eaae2235b4b78a3d0c9e9e92d1d77871ad92fec33f7976ae99ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
