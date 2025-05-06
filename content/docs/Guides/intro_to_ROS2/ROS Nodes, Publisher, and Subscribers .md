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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=d7884c0570c69eceebf330bb558d0f2aedbd290d143b18f0b80b725e5e8e9f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=6da759dff7e1101b6e9c94f993488180c245eac7568ef122a531af7b8082f7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=89d896a1f1127d72baf49cabf49126f14e36dfdddf4b75a7e436811ae9349dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=ad54074948ab894cfb840a058c739819c04df6ac7a033bc896bd39939e77932a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=4a75565b9efc0ab15d390dda26e39e06cca1a85fd2de90b573ece5eac6ffe37a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=2c8d8d472eea2b70edaa976034e293129d5500594f7ced8adb1194569e6132df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=11c6f643b078548ad507768b2b8ad15e0b40ab0b0c4bb40a7724f3e14a85b015&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL7CCSI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4vvTkMW3VVOymb5B8hy16EL5yyJlj%2FdyO2tJhn%2B%2BAyAiEAjMCOic%2F5dpIZxemocFlM2hNTh6phJGm7W1T5FI2ScOQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMKwFJXwbDDhI8%2B%2B8yrcA%2FSdPqFOrld885FB4gS3mKgGJeraDe2GYiilFyH2T1HQHeHkWirBMQLfio8FmEFlIUf12TM7SV%2BIOwXcq9h1%2FQbRrzEUIOZmPRc%2BS2OhtCtKitpri88caVXMG%2B97gpDN4q0RqNMxkEEhhdJyAjqcb0nYaM2WjNmQas5T7Zr%2FdcCcoObKDu7nytzZUaHIo3AMpDO7cLOBbA6JWj0L4U0cbKf%2FOjfhHVKrf3TlbFzBfGGqje6CxYA%2BjAMaWEYsvpu61aMLSeMOgKZzZLeUilH4DM2rmhsdQbaxpHRHh%2FYifrJy1LxAE8SsEJCVu5m%2BdUqXpFyrMrD7ufDNaJi6YmcAb9a%2FjrjlW9zFjPW9MPMAXv2Ya1d48OHvVEPTkifdqD8c0%2FnuohT40Kdl4S69ITfE1ilf5ymK1V9kEbOSCzeOLPNaZ4FCV8pGDnapjdNgX1sNNjB1mTjlJ8E9UlKuyLBIvspC%2FzeFppq5gneiiiXnDNIaRaAFGi7Ki3lQ09ptDv5OyGIwv0NPcdgPMofuJ8THEtfT5oNqvWI3fBPcs3e1ASky0QjmznojBjx6p27EJ5drNKWw9FRAQ30Koh1X31bIjmahmMw5MSSMewNE9cRykwxKFcaQMu9gMTwD5MWYMJe06cAGOqUBtqhJptEN5oLj%2BNoAehFV5hbr7aKlx4qowiDUkWI%2FaXcJ7AEEhEx1s%2FMWoSeVZXUZQc8cMYDDuRoges8gF7TMwAqnbCd9%2FG8wS6%2FvkdTzlWWSasqdUK4D1wPipNM%2FhT3N0YkgnzbJs1ssbVW2NeMRwiT%2FzewMGpgWL7uXPkTWSMqZclBSSlOQ3YtQ6N2E5EJmJOehfpbJsemlYMUOCKtxbOMwQkT3&X-Amz-Signature=6755bca48f9b8769e170c34b18a2483a5570a8823acdb60274b38bbbc93ab4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
