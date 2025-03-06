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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=a80a175c2b36843e2530d938f76f02ffc5bfed162f34ecc78193ea3565823737&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=ac9e654ec5b16f2f2f36d57326c9c791935b1279dff05242adcd5d232b6dfd30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=32bf24d8bb3a142befa22d8fd4cf4377bcd23f7e172dbf28f54b87f22e4f5b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=025a225499f891ade0bf19a0884b9f899c48efcd03b91a340add5ad9651654f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=8256c3dfb5755fb036b6630608abb19ed9b12d2595968cdfd3aed2e4c6994703&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=078300608a4be8fff89112531c600418a741c90c0d2c0651194e96d90c57824a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=689374186d0cf0a2c7bc718b53d4979430ab94f611326c4e1df68d122b313fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCSIDUK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB8EwK5J1DHn4tTyhDemLYsZ9SKlGigq5Au1YZUmFRKAiB2XG4rITQCE4OumWmbVuquI8ifRp1WghuJSX2WhbrbKyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSpRffs%2Fxlj9qNWYpKtwDWZLwhv3k3kt8vlMygsIC38vF5KxTC5wbTqh3Ey5%2FxLirZ7DECgfbZm90a%2BdBvFBI32H2L9QB8qH4yIyDy8giPqEkYBEItJeqnG%2FdLtlhBXLtmaZoeTS97sKQ%2FoCbMxBjir9SNnWU%2FKBALnJCEsvAo%2FPO0GQmVJU2a5x%2B0Azki4rjcqEW1R8eYEv12nEdBwoXxCjy9dnyJez67PrS2S8IoYov00ojP2De2VqIdFyaChd4C0sGj%2B1pZvAj3FjQhuSTz31YK4c%2BYDvvrgnB5ZXyFjXsARFNRWTU9gezQONXInJrHFjQuUP8Bbnu3gsHmIfg9OmIaG9vVkyejQmPT%2BGJ9%2F4nMYQnU%2FzT4APG2meqXSGwngrFPhpgULwmtNIIaI%2Bah%2F0yQuwspXDfpjhxYbF65sP360CwnTXel9UH%2B5tlLHAzoj7yGQpbuF3Nf%2BAMRVjhk2jpPUZY2JxlaeEPPwqD6Y0BHR3HWe1OMQM%2BqiE3%2BjnE7HZYq62wijEcbDqhwRvtWITrHVW6VIH7f5bT8sFlqsnt4kMskE73YK3fwKURIKHnXY3WlZnJpXgBUEdVk34PaGYEJuPaeDFwi4u2qylWrpZLwaBsU3zfqjnkc%2FmaoanJsqulcIYN6yp2%2Bc8wkc6nvgY6pgGXs9gJ%2Fc4QgwW7WjheTD5xBEFp4R4Z9u3o43Lc1OrCRGCn2kqKMZx%2BdqWemNzXLlf3eCeFiBA4wgr07rhvHpiRs2Y%2F%2FDtg%2FAiLjPs8K6snBVmPIWPdw%2FVwDRpyuKF%2FA4JognUW1q0kSgRSWGwOdVAhxoBXOFhSt6dlgvL9S6ns1EQe8mw8ghPQ9IL3Q%2BFCfLCQuXXstmuDe7v%2FhKDkcaOmIA1RvNnC&X-Amz-Signature=bfbd6b94c7a727240d5078c76bd9bf6050e426ede14a5e35c0deaba95b8eeb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
