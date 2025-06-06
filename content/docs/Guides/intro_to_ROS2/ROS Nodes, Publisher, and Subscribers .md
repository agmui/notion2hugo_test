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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=6a0b27b880fb7881946b6782f42c59a8c435568f4ba17be8b16a57afca5710a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=7b5d9673b2b316947e0989c337e86ec588346040a9a36871f9eaa6d785096728&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=8e5907ea0a5179472ce8e32b02d92992e5dca2ab044b2332a53e5ee6e964ff89&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=2892c4b670b7e5ce09369c84390960d3b973615cc03d96d10bcb4b0011efa51e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=11cb9a7af36abeced40e05811dc035d647474d1d74f1576f952373f4dc4d2367&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=3af12851f64cc7f402bbae6b6d4e8d0f4ef3abd32c3faff42defadcc6ec39c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=ab9100982eca3b31cb216ca637aa84096955ce4e4a56419520116c4964402b26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBBJDUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcF7HgX%2FQuPalSm1SBxpCgF0y3GncQIa6DFavlLT7oWAIhAJuFJECs5r6tRp2555Rcc2tZKTsSzYz7FK%2FvHnMn3aOXKv8DCFAQABoMNjM3NDIzMTgzODA1IgxIxBvTsYygnW7gTIMq3AP8lsHOVMNdMN6RBvtS7%2Fjrig8QzQNvb%2B3bOIvbR0XN9%2FUS5quQaV9U%2FS%2FBQrvSZqm%2F%2BiDzg3WmzdhNHyx2x4c%2Br73OGH8dF3AjqxNGLV4qS3laGVfwRw9JZBCHXnoXdNFXMtB6j0QLqK2IIhWnZ6NibjXcDGSxY%2FjXxxntA%2BP072rOsCuXLhT2B82J4nG7W9wZpkSQ%2FuvtGIhBdRkKs0542fYSL5jiwENT1NnJq%2FEsCSU%2FfErbLrLmBOtvPb2SAofi9yOsjzjveRXkpVtfJydC44FKQX2Mk3P%2BGSV46vOswU%2BsVEOvkuP%2B%2F0NtwcgA26PD1So6iYO32Pm8mRQH43nlAEEY8ZXHlCVWcjs1uB61ykLMukeF%2F2a6rL6OcFGHL0Si9J%2FhKPxefoPF9ls%2BINtqJnHXG6msNYcPP5zBBNAfY61uuo%2BazLZHFjZ7iNFDsySSYdcL7akPy5IjREBtwYAnGcFMyDbbLzIgAulCs0vqvXA6zMLd5vuVUJcEfOSucZNbaPI5RmJDSiV4E1oFs6cc24e9tvqcIM%2BZUqXo%2FwWawWgzk6ACL3SLu6X%2B2W1aZkQs6cbQOQtGL1TyPrctV0KHDmuN1qpx7IlFhUf8w2rG8lY%2FRNP6t%2BCC27zyjDCAv4jCBjqkAa23JHJVJbviheWU1DsIq0hvXHDd0JBwr963mhA2wZCOOwnVUBMRUMRL3A2MT0T9j4GF4MUWuV9y7cNE7JmEB2lImC0wpoIJFJtlQ8IIBz34wuQyBVrX5WMU47DHYJ%2B6VubSAWSVFEF9BE0frcF6st%2FuIO6iZAPQcKE97Jh94HOL8w7IUmpJRHCtNfLoGJm6WGq4sFKIOIAeIK11CdLQsVrNU37D&X-Amz-Signature=655cf3e4ac6f53e98c4c79ac69f55aa2de745fd5aca0840f7160e4c9989acaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
