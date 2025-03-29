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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=077aaba458985ef8b03c412bb634bfd04b33f9327efdb6d1bca0491deee0176b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=d336a2c60c725e66a66a5b6233d4a7a4c16a8d0e4ff7523c728bc76b8b11c830&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=7850baadd53656226b9d4b307dc6c5cad055577c96a40ca87e29a1ef2425ed3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=72c0eb33f3f5f62b4102f235b4271c74579fd5b37be717a49c5ad1388e479ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=5e6379048ee01680e8a90b632a48650441fc03eb579b68d1cf84e9d33fdfe8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=b4d84c2d695269b1ae7c37a93cc758204ef69f0373b572824766b01c65b27d24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=7bb9e02959a36ac05f069a745f5247b397a3cfb4fb0ce50fdd9a337b2e15ab9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532UMCU4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEH2c3pzVgjyh1XwiN5mmhVErkUqvpg%2F0qQDvv%2FcA1ovAiBaPkUiZTZHL9Bp1fYVA3%2B2z0YCkj0KO%2BL5gQJvsDOsIyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2MQicdBSE9HUwmT1KtwDrs06l385wLDyjOaNTP4Woarocf5TKCVT2AeqkyW8FGvac9MoociG%2B%2F%2BppkHeJ77uLjoimCScVb4YiwyyUxYTVhe%2F2IZ0F%2Fp9kydg9kden0DPzszr2Mpi8Gi6NGxCKsHvqnx1LHORGMjTa4yXJkQRHtwgFVwsh6PG%2F%2FKpLyY0gtAT2yKLJBul2pSwlXgzH7Wtv93Nr5o9DFj3kohGri9J%2Fjl91Uu0iJ2NSWnfm1n3uM1xTe2WukCQFrdVZhSbExttuIgjxv13YXzq8JiOTOecEuBf7lQfQ134zh%2FpJfpsu9v4cw8dYgF33loBlm2J83c9DkawlbO8BLbhRbgmPIMW86E3REFis2sY2UVjiSNBUd8N6kQvc2oq60nivdeXzMneV5OkXRmYaKUk6XptP6aYIyYFX2vqdk7wIufsNAlJNZOifVp8dYVBzWnkLI1buD8zfCVWCEVK9o%2BnQFD1sTes1PPyM5f93R%2F61iuwxejML0gqbR43Ibn4EZqUKL6eRxBni1HCurnEvvt1ZUnomJiLQK76vfl6p1QSKFitNVATQKTMv1AbH13680WARp74WamzUWWHJL1P6L%2BMQr5AQxKqBNFaXNHbEUMqi6gbZ5d0Bt%2BO3qojV94meyAIFz8w%2F96cvwY6pgGydCzW6LQwBV1Lcx1DvW2dC8uvfcxFhtVhiN%2BRY5h19TIQLGNxadGaZ0sAcRukTF3k4kSqhhYIy2ST7qAb%2BcyzLPQRDYtjQxPPzvfhMTSQLHLnW8vuTemalK6cYZt2lbeabfKQQbf%2BmnVzfNauTII6zuz%2FuMD%2B1WD5XVaAhSp0YlxdAadkaxEvdBXZHl3EqfFFd5djHTe8xH1tFk8kla7UnpazlPzW&X-Amz-Signature=3f0c23ae3bf9181d8c82fa27a277e27115da59e9bacea226e7c6082da54f3da3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
