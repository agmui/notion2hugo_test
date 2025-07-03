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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=8257b119710a12339e2d2663ccafc8d2a5241081a21c5785f5a64aeab2284008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=51b5dff6ca2e5004973f07b7afe58673eef123ab660a6dd0f48cf527985a4dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=63237b25e3efd399ed247976899d233a50372b3a95bdf4834ad2e7a18b96e771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=1737975e558a348508e81bb0dc93f3487d36155a94061b321455c27294c4b1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=2dc52d3c5dc6bd8143c4756008a000bb64868dfde88f9fcfab8d714eb1942e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=a3caa0eeecb5d224bd8bf2eb35440230fd1a68d5abb48123d13fe452696c9df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=cabedc84252e71f080b264e20a6a2c92ed0375ba424b875eb162ada77afc9074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZW7UJY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCbUXnUIApL01XFkN%2F9sLHzx6G6hLMq2qZt3Zhfhwa7MQIgVcvZv%2Bm0wCQRVYCon0ci%2F2vAKy3OW%2FFCr7eS1uK%2BuIAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGIEouwJAuctnNB6tCrcAwTbOS3Sw0FokUnQ4aWANN2WBNsbLGMnOu67wdiGWBurDsz7IFxuhQlm6hR9jrbB2ExgN7%2FBhpgLaKGEBH%2FfNVOfxj601%2BXcFHdD7DzqtC3KnzhMfQSgmDoUv%2Fz6%2FN99vimgzi3AQUGx8KiP5JgYs3BJxnSlQNj4slhoXJzOfLa5dP5ksfOhFMW1A%2BD75RGA1eVDz5wQMy62fG%2Bd8Ed%2BHI0xArBqLDl1xqaMjbWl%2BrsjYiGXIZ9jytMBo8MAtlnUQKbSgCQbdRO%2BHFT5TaBvLVtbbOQHNoo5xJJI9roAyvTMY9jzqLA8ey8wX3tyfdqDBoGVJFJDlCRgUNzGUVvIgFOrD4Q9xOLmw6AvYCAmtbd%2FE1exESun%2Ff5Spd3rb99b3OsXKIqvGad9jaSoRrMWM8KcaqTCu1YijWk7xFbkr8sgs7XjMUPYRHHoxKlMKAgYYsthP2MG8RIXjDLBA24NS3r9tGGjLS%2FWSbsK7UCJV5nLbki9unJJQnvOGdkcjk9UD%2FBG75wbKJLTEy65IjiYn4ct8To4OURVa%2BuNwYZtAMhmVPYG%2BEu9I6WUtPnvQWpH5siNdWHDekJV747PHUR%2FnJ64hjZ6IifQNMKdZMjTEpWxqDZAJv6vwz9953yJMIi3mcMGOqUBduRNG7TkBAKyQwS5WWdsNxwBBWDOy4x2EYBCxQX7Ae489nhIVvCJ5l7HKHzsiUStii0A%2FirLQEZt5CTRo95NjNYKIcGt2zSUkI4NgrGnWNrjSD3iSrI9TyABMfH55hN0wywd00u3cak%2B3f8yoXJN1gx9IV9umJpPZjPoteOPwl6mRyKxBEOt5sk2yYmW3kPRwLWj%2F%2BqKCCqVIdV1yf9IcHR16a83&X-Amz-Signature=e0d2823c8c50174f888bd3dc0b96225a8cf4cceaf4bd85c648723a780f1f4d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
