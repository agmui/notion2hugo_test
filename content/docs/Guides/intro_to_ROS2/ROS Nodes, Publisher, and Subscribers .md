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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=5438b99181c16a66827926310c53e422ad7dae953ac35dadcb508074c10c65aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=3661d721337232329212eef3a3ffc51ae04ec3c69915e7a87afb5162c49f92e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=8e82b6ea2894b5972d7d64d809d00fddc5df0053b79323bafeaca293d409e595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=ecb7cbbf7b244020d9cdddb067c61790a8ad359d20232b0a2fbec0d157833777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=8d285ec499da8c1cbfd3f31c478603e634cf472affd8f695821303e36d13e378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=7eb941954262410ccd2667f7fc4ac379055b521b895d2e726cf2697c892ee696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=6bde8980f22da792d98dde9a9d8043473fa64a98a4e1d6ed3d0a7132e9f02d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLIPL3I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDY8tw10eCtBqqZDPs5ycU2F9GNR5ldFBBXT3DukJredgIgKxO3HI61v66Sd7LET7KEdY96eW7gr5tmdUZ7jv1j050q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAgRVtI%2FLF4ECM%2B6XyrcA70wCCnYdjMia%2BeEJOJC3hIk%2FbkWxTE1z1dRSCEW0fWhIaAebLKYF%2FuNsurEPih38DMN7vLfhmp%2FUOF5FCqOZOQ8qv1FnSkBDj62TT4U9zLiFqrosaWQVeq5wVLrqKxYI%2FqbVvU5wMk2h6v9Q962SNb%2FLN3s0E0ZkVZ%2FyYM8Iyqnw8qwDMWJVN9dWu%2BqVXtiIjRy%2BRSsFW2mqSR%2BALywpxSi0MOv9zy%2BUh7va0Y0SFXdwYgw4VM17tA6PopZ6vs0ra9tGtBPkU5xsmfIeMTnazO2OxCVfyRoDOQNp3xCxPBwOb6Z%2Fjtcc6kAVmIwm%2BolJCXXY5qCKAQTc7QsHqin%2FKyt%2FWay%2F4gj%2FNhLwhqEtbAaMJejNtSAJlj9d6Jkn03bjdoiz%2B5H4SYqRL%2FDtd1JOuZpd0RQvin8CCpLC0mZob8TkGJNetDLyYNM5agfoWhIhpRInqzkt7ZIPVSnQNB4q8LaXgYmyTrb9cosPNotTgcpcpLrlGQkZmX3im8sj9RWHxoV7VV95hIyQDcrn1vNeNhRjM0hrN1Am1lT2uAqJtnmXIjxR0Mw26Aaj0J84roiDQcB36mmD1vpTCF0rXohWfES3iA8gvSa6iRohBI0b5XTFIi%2BWuCf4kldOwMbMNi58cIGOqUB12p1mjdYBcHCdygin%2BUK2R%2FaGHncPBmLV4351fU6wt9FSG0rSKF1%2BwcdCYgEOPP3sRwxhQwfo%2F1qi%2FuR96f5KueVT2UJurrJpxlIZ4HOm9vf4g1a%2B%2F1l4Qzp%2BYBaiTinTevr2qaxYcGhaaZN7aZRmfjJktzyIA9wSABObanAEQH9ChD3HI8irY2lPYBjHP4GXe2K1GRETq4qVn3gwQbjk5Fkx373&X-Amz-Signature=23016ec44e7002bf9bc4bc904c936521c22febb4c90c201e7fb654b27c5229fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
