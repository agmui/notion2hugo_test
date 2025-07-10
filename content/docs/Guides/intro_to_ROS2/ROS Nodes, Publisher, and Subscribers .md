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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=acd4a70e8a69fc55e020a4d766482b328ce68287c35e1a05dc8137860232341a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=b322500297f84ebf53f8cc3ffeff84b6406b65191f4cabb3c1a6ca043dea1c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=1bdd90bd3f22e7ac50acb6cfa7d501585791f8d37d66e509185c29a87f36c601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=1bbe8a01beb03caaa3b7d224ce896291cc1a8505a1bfcdbafadfe855a54aab44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=9d0239769844d3cfe7879ebe378c486c448e0e7a0f8fea3b55ef1e801fbd5fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=ef21e17e47dd279d66a8d3adc4aff2c4c42707cb5610db266ed9be2688c61214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=fb321e2bea1c9f12045cdc2911e2522e5d510467d57f964d122e6c361b5dff6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF6523Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHmqURDseJKb9oLtiPTXBr3Ww5PkffEijwaMCuSMpyAIhAOydyi1%2BeFF6zhG7hDpIjiRxbycnExGpa9RgrjXKWRXUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4RiWFUNQ5FzcZ%2Boq3APt%2Bw4AJVDwtclHDIlklwRB0G4IYJlLFpa6P29T4%2FrA14ClN2IhmpaO6op6FHHAJTf2taWo6rbfTUNiEgiqrfcAnjZ4tevCHFGUOYvuDtoYaL5ZGVXKOnJ8weQ0JlBsZk3Y1bVyjgZds0ZqclFbPh5dAR8QXEEf5jTDFH%2BnbsygtXwfpBJfq53ESiA%2FID37oCmL%2FFY0xk7OVEfdZqWXMceX3ZLsLsKw6pygfKI6zG3c5qy7wnpCieI9QkBqmmQZPndXPfTtNrRhvR2u3pIgjEkcLRXOrKMYSQWjh6EXzyDaW7aXLIekDbkPKK5FfsiBPZ9PRhJ86idTp4RDgSeUaEjtJW6hLAv4JoXXoowp7V97NzRpg9Kdbzgw5IIp2VO5YZyL%2FTiAhRGhcz8T5VryOUDZNNyZ4lk4irh00ZLEhzKCehINUa3QnzCL%2BZDRXMgZ4xK8pOcJ%2BdqMgKsV4uoAn0Y4Ri8%2Bd142vRC57uKK32wjglFQuwP3vnqFnricjLm1MVR6LSJe%2FGRtP4fmENRCBZVC0VEb0tIERn6uMwjN1Ad6Lj%2B1ByiM%2B4vhTxgu6lozaayB8NZqz5S9m5AHNVo33XQ4RvzcPtPyaPW4tCBnk1DR7EbhrcrHBRVaCpTpKjCI0b%2FDBjqkAWIhGS7%2FybTjXP4lKsaiXKAW7YbBqj9kPr5AJ8DluF%2FqKtbYUAMfquCqGOFdT2u2VhRR9jC86Szs%2B3NnYasW3u9G2FxfU1JiZ3hJCFAvNlSEhuSyK%2FS0zaBvrKuH9e0dvdXYrn20jeuUfqwQuJKOqfXVsYQhm97Qw9HRZyHXcqujyhW10j3ps80Mnc%2F7RkkniuFDZmwnVRVDaWu5xeAqAtidAume&X-Amz-Signature=6efb3a5a0c9441c3edb1392f1f31375aa10a40074d473588d79b0235b24b84ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
