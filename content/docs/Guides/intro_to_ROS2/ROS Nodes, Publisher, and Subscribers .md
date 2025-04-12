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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=c9522b2dc202752daf66d2238fdb32b059d13679d256a1ca4748f7e2165d237b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=7388325e45b89869f0727aa1dded107057b29788f4029582d20d76e11ad1feb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=4935dc92d0112e5f6f7cae0d8a4d6afa35d5308554594db25e54633a79760f83&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=0db8fe166bc922b127b17c9037c2e5799966ed6deba638043b3cf79a41bcfc66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=4d58ff209bce2942e77f0b413741d1f62dc4c22aec277b5eec0ef321609a7ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=ff511cd7081d48a00173a94ce1b415fb067bb31ee28cf7fb4768854e9a5e1c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=18aa3312fc2f25b511f83a629b1656b43112792e4e72d7d879338fd63d131cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BCNDA2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEdT5RSR6X8Op2E0PcM6OLXzX0Pf36Yt6I%2BtOQ2RYS4lAiAGY9VzKbDyMUQORu4710b7JvfbDHItPSAqPXOhO0TViSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2MlwoQ7Dff23L3xKtwDExURnaV8%2BwazCd3P5k1sfMff5GLuYAvXH%2BapUnEa542tqnp7eXdlq7dgOyccct9RAqfbxoAvX%2BS6mecxwrl3zF%2Bv8zrg6EwxBEzCRGCGRqmKawcTT6zWArF%2FVW1f%2Fab8Ts0DIPgdhE0GWOs9le6AGzPrui1zyJdGIRqAvYv48R8NKb1e8MDAcVaYflMOMBeZTkFqwtKkSq4%2B7yCPXPWFA1ubuoqLAZuylxlxrL5WIMRhLCfNW8Mk%2BhIoLt%2BB1AZ625noWXZUz8KpNgRVzulf%2FtAnLyYD7boQd93CD1%2Fx6UrxKzhNvq8g%2FHjmFtLvsldLsv7LvAwJaMIsuLmNaV%2FCKGXJ24FkES42k37pG7B%2FDUa35P9rgAEs3tiBLTq1KlGxsvTP%2FSZ968AND6LRKdpbs2fezQAOk4W0x4jwbwuWcG9wPz1Wt7wFEjaI3F%2FQCx6rTAocXNyHsRcWhIwlmF1eVwkvStxF9qJfPbNmAvGkXL8%2BD1rc6trEb8484UIOLoE5O98YojuhMqF0aFgGee6%2BYClWHJiIkVQvv9tqr6MRgNpXe6gabzblxl6GO1EKATSkjC6mLXjVNTIu7CozEsnUytGzsVxlEBUaHGNTojPjtEVc%2FJYTmvRxMfRLM7YwovvpvwY6pgHToY8PFEa7BjKi3vxE9qS8R1eB5EvJz1%2FbpQQZN%2Fdn0MLjqUzXOEUnR8c2z8jTRZ9m98O4ae1YGIGfn9JLxFbH8V6SBuD7N5eiJKdwbg0sV4bo8Cmh2Dpyu51yktrCGPO7eIeuP2lV87XjOIqSyvVI%2F3G63wO6NVusVP2ruR2uuCobuKfvXPke%2FaAjWpxsE6i25eMhOQ7LV%2B%2B0Z0%2BMq0wWG9Tdp%2F0i&X-Amz-Signature=e9e4c2332d6d98b959948a841e84934ef5797875196f28f5a4cb82d41de08f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
