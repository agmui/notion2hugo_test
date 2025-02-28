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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=996c2c105367dec2fb1b404f5b8394ffcd5109d8bb1bde32ed9d0ee385837ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=ecae074785b45b1b3c9a8c769bb353e42990c709b3a34533b9aed366d3705421&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=7c181986525cd174b46c38ab9faea33daf645a897cbc716b6f11318ec8104d76&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=a6594b0db7133248e15f49e6c25084203c2864609bf1498b4ee435dd36526dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=84d3f93cbecb44e6cf4fe7274845fe6dff4326445b2be853e7c43b920d547f08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=0a3fc2c1e97ee9ce318513ff8bce9dabe8c9fb9dd8cad07048f2bfb3ac3f0c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=b46e23745c8bde039de1f8082c573b63c391a2e36ad0d8059df2e18c0fd9f007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WCSPV2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCeFYvqsYnLhnHxRUTQxucVDdabZOdCik6VQ8RMGmIZdAIgbrhxMDc2a6opVAdDfSKh5lZuhnlmlngz8nu0ciNHVlYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xNADRh%2FMwKmB9tyrcA6Aas%2FqOM%2FmjB2%2FKTgu1aSdV6cQC8ihQ2E3c6uZZPJ8r3SSx%2F4PpVehViI00i20CLjv1aGWI7L8OnpdkxMCOvJZWnVcZ7gCdS57fRu8Gku2l47TzRAr33yjlpInAr%2BFtyoOhUV209HiejrR6YwGfowjtg7zIz5iTe7vSWe%2FIwcaB3JLKbaIkpqLQCPkBmXMYpGNkZYOltjRhX7NoWxAfr6DlXDhLZ2SAnAeWmf7XSnEaPoeDRD0TI2Z5KrsRyvnSnSNMCwxdMvKwcFZDh5gwqL7d%2BvTeOfinZyhAWKsGBL%2FS8b2WUP6U28SrdK%2FB0UbdxaCbnv9I1V4DroR16Vp0fETEcl8EKQybQr1pTvcWXrO08a8iZzUShuhJIl6ou26Dk2SSxH8dgffpzIiHn7b4%2BX40fA2rD6mL5iyP6pSbhjlzdb9O3DTdYAqEMG9js6US4vhk3Klf3rG3By%2FPFZFOWkSO0AUV8COfzZK4OyC11%2F2d6bzELruSMznAb7NcygV4Y9IqROHV%2FgZOngWEoKfNE920b8rrFJOL3OnybpwW53oMcgdf1cdH49XZOsFaHERCkuHxsSXLg7rObWWCHzTt4YfG8cCEef0GtVuPH1VnjTFIMCw4r8LUHBL8gt%2BHMOOLiL4GOqUB6vGOC6Kb9TXErEFVsYEbLGovv8gy1F15L5n4MnXdd35gqD1JCUoc36pKj2UH1HgxXN2aKYEJTfP8XEIfRRVIhuhXIDVV%2Bim%2F%2FQK8wx76KXyBCWa3Ji%2F%2BUy3NWhG3EaBJ0guj9ESDHn1rsKL%2Bx8ho%2FKJ0eYamFUwn8mg0t3zf4KsCP%2BtzaIEjSUsurQW5ovIK0q3fF%2FcLJTx1acD0DAf7J971qkbq&X-Amz-Signature=1543cd61613f2d8303f726e452467951ca3f9e1cc6aba28e1fc5f59b5b69c907&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
