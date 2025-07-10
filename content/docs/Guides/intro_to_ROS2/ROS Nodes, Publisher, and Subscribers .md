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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=aa170adab901157b23c5c378b4248c1c206fc3647f9a38405f4a6e51f768d2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=da636019eedbc94ba14066348621682e24bd53f6feb2b5b04fb3384e970d68c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=bcb312c42ba0ff9c92284629458a4119a785a56a593f0d4e0a1192aac9933936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=a7c191cec80374da7be04952f685ee6efda5fa51fc987352af8cf4c069de437c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=1fd1d57eba371c440fd6a3b16396043d565dc3fb76467c2f6235cae8b52cdf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=3645d475009f04957b0e39814f38e13e591aa9d392283742310d5434d2e3b407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=e142a4733e72285a50da9d30d85a06172773c0e56e1193056adfda72a7e7e277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4MSJIZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsD8Ic19OqHafHu4BVcvY4htjUYLXxz7mY7PrwLkLWfwIgIdim29b8ZrL80zOZB4YlpQ0XNhhO%2BXmuviBVfzFpIiMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BcEgKEQ0pritV8CrcA3mhXRH6ZqPPso7M8xNNaUgu2ouY%2FtpIFKwIRQFddHyZNL1yhiqtBk3AufBXL567URi%2BSWxRfVQixvE3ld9G%2FUVeB5nlEfcO8KjiaGJQQo3x121r1WlJj%2FcTTEuW4I6j6qjjm99cd93QPuMnRpbDxcKi5pu6lVzNlRh%2F5%2FUUEYEGe5%2FW5IHCG92deIDoILZA0oKLn26GaH5e1W3QLLCpcyjWGlZsCRXkshSHX4qK5fTWx65qFbHtx4ECRrkMndKH5zBpHKausFwfAWjzsFglXfOYy%2B9MsslL%2B0ddagSUwTI%2FRLbRI6UufAorsT4a6nHgTFDOg6JE3F5DVO0p6i3fiCLRv0kEaCdDVINpI4zURckXGoaSnolPAXIn4JD2yY7uqIdFZBPSDxVNV2UemLFA3eZAIa8xdNT%2F7iXdloGWNjA%2Fpz5DYIwxOD8Wq9y%2B5aaOaRS%2FJybbY733OxbsrA8j9Prc2zgZ2EGQUFIZxIZWRoY5mhdX2flTzQx%2FA19SjTyt9OE0paXPBRkxm4NwrNwOqRh7q9cy4z6ijKHM7dpvp4vkXMWETHhJgR%2FPoQatn7%2BgYt%2FFn19pIephaGCjLcueLyfHIU15eUkatmvv%2BsndPgk7U3bRUS8%2BsueawGLuMOKivMMGOqUBAHob6mAuexzlVgO79n7quX2X6IFXTiTO%2FJThlZs6hi7DbtR1sPLw2KQXQGjRzsHBzUX42uFv1vL9sVsOnBtrpkqjg%2BwzZR9oaAXNdEQzXDXhjRDkVGLf5pXOkoiHflPbck9WqTE3%2FsBojpapeuCKvjFipbpGaIlDN6qzsGATM3syXeYEkS%2B23oUAx7KHQkJo0q%2FnhDk2c0K13X%2FpfL8sbx0o%2BPGb&X-Amz-Signature=9d1114de3a0c33536f5f8465b39aa49389295e8f116986fe4d4150f1ce1ef4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
