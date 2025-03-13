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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=e2bb127107fb82595bad18c8eaa64810b9e08944db281039854c086899ceb9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=47a0f673fc18de2b5b7b18468bd3af97bdd6e1a9ab245770d4559625dd120527&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=ec7dc2af4778a1d76ebc767e992d33c46f65d7d8a33087ecc48ea6c3b28347d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=e63cf3f3805b691e3e6204c25a2fe0321db5cc0034c4489c8b12f0e078355336&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=71eb1b9fb7741cfa28cf28ca2c3fc3007a2d82f7fa828b31b4365916caca1b18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=29fe914d70569b12ea0513d9799d352260c3576b8596be1d7298ce16c629a64a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=17546642a093da9da9b06d7a21abfff7f23098ea4bbbc269f0c9a1de04dcca97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIK5HUE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQ3B3bdtfNDrzinrQeLQAbO%2Bf1%2ByyYnFvtkEuDPBJSQIhALgwet1NIYJo%2BfMWBKWeDJ5KOpIjW7FvWNWZOkn%2BNQSKKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkJt16IuSMLQ0skqEq3APtq%2Br5b8alGsKJSwuf4T1J%2BZWtQOgVoBjEsvyB585rHhM35H2X%2FFYf7VDw4IKB5T3wPuv1QahGkn%2BLyITJFJDYV16X61w08rpIeK%2Bvp7EF%2BFMpeCjp6OTtKF0iuot1dX4q%2BFIEQCNMQ4A4U85%2BxFjFjjr2yVUgEc44d4D3cGweZIDw52HAtfUmlQ0svrz66G9KgkO9mHxAs%2BGOUHsrZax12yxb41YlszvrIz2yhiosvB7XXbnZ74no5krw%2FNcjc%2FO1YEsvLZXKao2QBeuxkRcU0MXHYyCPu4lr2Q65OuOX32ilPckxq8AVp6P0EsKWFgxbeDDfKmqXL5UirIAIpOXGkR6QcMGK0s7nBmojTW0fOBAdqAgQqkqUk092issJfwvmuVbV31yhaUubz6qnUFJ4tarFNeUhu9jCqjzbUuEogPNNGJA1eoyBdZAgVMvgsfqAQiuPOdUUFyuQHyPOhixJ8GY2kGIpnMI2ejZR%2Fu68Or4XwsO4ucLPiYHRbiv%2FDRHdsQTn1qhuyofDlPV%2Fu%2FjqVhL4VCjpbCDxUNLRicfjAvGFSt0%2F28yxBFf0wGumDDWnQ55bWmt3rIKnJhU5vcYdsMYbD9CRgUk2i%2BuqU3Ehi%2BToGiAlNHLhZBSpUTDFo8q%2BBjqkAeUg1P4Ly3%2FViM7GrMBuM3QKTsjbsVTJVRqRbkoOe1P8EeILQbAQ5oHhgUwNjHYvIrWfEG6bg4mwnVROf7wxHn8Z1xnAn%2B0f%2FpuK78VxM9eFly0CL0U%2BU7UQY4t1molM7Ua1YTQaD3IMCq8urXBtsVB%2Bspb6oBSl%2BKAP%2FgOtbH612nLPSRUFO5zB3xfca0DGvRXzCNevxOinzgDjJ%2Fp389grVN5Z&X-Amz-Signature=c04545a66904d2893180d22e3b5be52c641e6684ea723dad10b100a9dd8a09d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
