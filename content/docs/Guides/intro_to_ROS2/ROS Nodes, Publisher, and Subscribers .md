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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=e4f745e5fa0fc21e63064b5eab2d0ecfdc0b3cea569d1c2710ce389ee7210bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=94ebc9c950f3b20a4beb22a8742b0027eb09773e432980685bfacb19c7017a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=95ffb786d278bb649813b026ad4d113a3506ef1c59598452c5ef207e74c0a5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=5fbc2827c37e86fee3ecf958f9580c9fa82d1a0b847aa23aa2901def619d97d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=d6f99584d20b4aab8c925ca1a779740d9d773026e161d140ccdc6da3a1f562a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=8aff50b4f20b8a18ab3901fd6d8ddbd7bb0fe195277008ed55ee931513fd8e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=a253f4828dba1ec835149edeead463c86de6e7f85cb55f413ddcfa11cce461e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LGK6EU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl3WAUY5PG2AmbE2jz51Fwj2ztsXf8Vjv5cnAImKFnqAiEAmatlIliSM%2F6qbirREMDz2n3FQWeF1mBD9Oitp%2BNlwRUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKxvawyQTyF5RbpTuyrcA6X5vQ4rkCURtnxdSgiK7oSnWWpfeT4blf0eve5JuDzNWuLef0PTLIhxIcaSuZ223CPqinPepuiuA9glP%2BD5mL8x2nPEvZdfZQ0gBvqaY1us%2FUl8FdKmGksTBKhqsOP209ipX%2FqZDiTg0y%2B37rTsPiqHgfZMr891wFlZbXS3Euhyp5Q4zdPqVYLdE1dwXhib8qu6rS7j9GXm9GuC2VgcDjpNuZFYa7JclonlUE1beABCf77T3pGNpDDPKbyTceMRMSAS4dR549Ocfhmi3Js2aB3ens9xUiQbNf%2BXwaOAkpUBYTsOfQ9urNVuMDArRvmsz8VHya1SgimbJZcMGV3snkp7YjHpToend0j6sB%2F3jcIwYUA%2BjPSiCPGYVCakd9yz2X0ZHryfF2Vs%2BvOymjREoH%2Fj%2FmNqmlYtf2yI7brEyslPhygQVy%2F3Dj3SElMwoL104pwZWatz1CYD56yOjdBvTBDsD8dJoc0hzzDQKXd9%2BYyfO4LJmFbjWjsx5BQu0UAjZ2UK80jifjgJLZo6h4gpRGysVDGX1o2FE46wJ3OYO2EehkHT%2FhhM3hrKQ9AKjl4uybY3XkjvzPkvII1nuW%2F9e0TCiXBHI%2F87TyShK6qQ2qGuYD%2BpgxZUoOiTLrYXMMG93L4GOqUB%2BK4IMsQscDqCAE%2BsbongBSM36tJlZGCm1LPqv6E9W1hrHM%2FVOw3L2lPHRpUl4c%2FtL%2BBx5V3NyQ1Q5H6K7uZPPkO8GUe%2FEopyo5%2B4YItbB1X%2B1oD%2BkQ6UHh1hf7Zqhki44iQJvNj642ts%2Ba5HyHV3gtOT4jXmZig%2F%2FWfzywatuU7efuykV8JiJYzymUMUf%2BQg2tQ2NDIcfz%2FpsvP6dszYExsZq4iv&X-Amz-Signature=13042df6f15c37621403d83ef50169252c1958f31e4bc61d5b78ecca770bf4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
