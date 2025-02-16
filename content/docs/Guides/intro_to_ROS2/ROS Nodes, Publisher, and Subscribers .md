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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=4cc502fecc3d31a0e0d462077105bd5ed0cd1554b62173bedcb8742ae63b0c82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=5759d342855daa4bcc09c9f1c5c6ecbc083a36ffa58fa7dc550faa5642998841&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=14abc0b0e36869e24b3a88ecdf070c75f0008f24300bf043a464eaa07089cc41&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=c66a2cb7a7ed15d75c183f7a2ffa009d4b025eab56522f2470b97fef6f407c67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=c5b42f1d32f8f64acb2738686dddd00679cb08d4efdb6f31aad794fe2d2723dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=dc11b8c84c7a52667204f313aa43070c2f25936e721a49b9733726b11b78b145&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=8b633dbf31449eca55ec114a04631e2d5d14e96ad36a0438b5229e5a567faabe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LKEU7I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCj7Nb5wz%2ByIRO1%2BP8n7jSFyoXrEYegbdGzSqPJhOf%2FgQIhAPxcC%2FulIyPREXd9z7T10WWSEDomTgV1TBwXAnD3u3eTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx4kK%2BWt4w3noRIXUEq3AOHhDR3nWMgQsLhL%2BNMYNBAkmd48xbJ4P1uB%2Bx6Os%2BPzloW9dWKl1eZ5CoT7Kq3cE7Yp7xnkkkAwu1cvv6Grqyf6lBD7L2dzl2tPAHoMdjctEBVnOXaXWYBDMvHSKee6fweJyHQX7DqhWlR0pSdNPjPHjHu2fIxTfApg1X5US2srI5O9Oa2%2BblZgHFQWZYq2oNa7YuTSz8z%2FbyH45EJsGTQQMrAyohisvBvOJx1Np2dGbczhoOXgiaig5TZaQKXJ3DoqIK2BA8tJPWbQDxQHXQqoW4XMGsT93ZG9z1ClfLSFGPeOKy58%2Bivxqvuspzqj%2FWrTwJ21nNaTnYWnVut8ey9Z49E30jUEu1g0mha1faB7VINNWJvv0zz82wCt0poiDTE59P7z6Un6mSnHvN1CwBjUpN1DqvMEVBwfiJ%2BZQH7TVnyshAkBTXepeGwrUfP5KyzYNAGr3mrwEpCNouGn8dp%2BebpbpgKMkFiJ6w7VsGG5k1n9L%2FgnJBc1zp7fc0Q4TQ75TtEdgc11oy%2BMV4aN01foOcPMuPIGhqxzNu%2BGc2s094Xa0FMfxYQYiArYOrhBUkdnVve6DKR2m%2B1e2kj00T4nb3m2EEDdIKpdFvVOcZ8mGfBz%2BM7opuw7C9GkjC8yMm9BjqkAcXcn0ggdi%2Bx5vMgwHm5ijiDd3OrSiaDeEaythGj4VJc6vKOQTb28MVSTwuiYXKuEslSpqxbrp5zjClQYZX0v%2B7auPTFQHPvt5hw2XH7Xj8lSIodOlNlF6hlLU1Qa4SYLXi9FsrcqPmJReRyuQk1sEjZBz2Yl%2F6xDDU2VVORlK%2BBDadkLWEqBwMxG%2FOTyZln8yRV9%2BxdhHOaUsN0k%2F1CJ1hFo2G%2F&X-Amz-Signature=27ab369c6e8052de0d7b21db38cc40cb8df3997b21f968a47ed1d1bb0039035e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
