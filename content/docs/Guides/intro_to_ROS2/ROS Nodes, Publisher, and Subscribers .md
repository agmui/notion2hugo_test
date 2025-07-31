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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=181a0536ceaf4acb6a01bd473959ea0af2cf526f80e489d4a9b52bea9ea145e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=363ada8e0d041ece29a15e4b97489911b6ec7200898293515be7fed288882b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=ed65c5c24a4720103f356566c4cf26d43456de6f3511588d9294e91dfa108617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=8433b5940d52dcf1c66377c3d543e92def8997a07312b98b24a6bd187ddc6f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=8aabbc55d8e43a361b010ff908f60bf08fe3a4eaf2fba90d10c4b382079a8dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=0d236355088a22a52f7d36f65b183204b15fdaeb2b603c92956e7618385b1eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=015efd675c4e12f460b7727a581a540628e3ea7e867ac17105c44cf9cc9b4ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJH4PJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp7tCL7N%2FidIeGwFo9uPMVEs5Ni77DTWohtRI5M%2BYJlAiBsaSlpVtuPxXAiCjqAsu5PcmMfmHKWZK%2FWgna9bd2AdiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXTeQwl4WvMTpJYTKtwD0p4gox90ijh5oK90F4a511Ou6T%2BMadZp98uWBveb4tZEmYH%2FSSiThElv2Ek4dh2GT8DuCd5drjAdKdqSv44rpy%2FHPG7MzSehCH0iw3cBLYf5Gi3ttDuDABQeW8UQOuFoV4S1rctPMBSWj0GRLWUDIoI%2BvH1PEIYQJbYEqwi6BSUm3MSXYYrFpBkQ1Czk9pqcPnulEluynyepKqqVxS0Yv6bTd%2FwDOrcqbVCd9Y8vCFla2rDARqg%2B%2FCnvsTk%2BbgJFirUfuNjqzTUNtxD2AgTfJO4qs5mr5vO4y9BNiXoDNogTRg%2FQQo3wE2BCYmv7QgY4IoIphf7UJznq51xOB0KU0%2BOkTqhuoDRbfBQCQoHmNNm921gJHEisDxvQyXflIH3YqARRPwHK%2B6%2BYAC84wK3zOP0ZgX79oSWr7uLq0eBuwXF%2BeFs9wB0zPAqfBltjIWRwSJSPmhHMeJ3vtujWRYeMT0EN5dogVq5FFOPMp%2B6aISnq%2FtvnTXBQefqeIerKro%2BWSiGoqFvl9MH4GNrPcXztCClufUBlYEqge1zLjkl9qdn89lzhp1py2agRYJsTeOEWzr9HQgFpZeE2g0MW7s%2BoEB6iQhYm6ySHFRkJUmqVclXPsL3cfSTB2Clng7cwxsyvxAY6pgFlKrThGsopy%2F6CSl8%2Ffi%2Fn1ZlwE%2F8b4fgxcbywCWmSThA1f2e%2BWjakTexMzhMVELtBDp%2FsaxVD7bW041WEEkwM6PPt0wjuZL2ZI2zqasjdT57y3Ky60HQjAzuvMqU86CnKHe7SeelnRiBNS%2BS5aOJO%2BfDuZsJccWyhpefKtJvdIrrPWLzPPVIjXP3JZX6mnNqRouORscnAGJkYzIxcVuYXtJ7yGCBW&X-Amz-Signature=a28360bfd0643e73471fd12451b3525469dff1ce8ca8744697079620c9f4cada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
