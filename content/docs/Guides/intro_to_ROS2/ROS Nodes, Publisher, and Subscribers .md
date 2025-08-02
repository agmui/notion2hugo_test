---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=4f2a3108c74169afa8ceecda5a78fc9b11b579c6bd1a7482c12b2828917d11ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=14b2bf7cd3560b6fa4d3d164cc034a40f2c9b906f0c04eabb7f5c3bfbc391119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=a9a849862ccf03d9f76de6ed85220796b23e7aa8619f96494e1860f181776ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=00177180a60f741c25fa34b93859796ed2cb43134f8a979a21d6bd37ac95e630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=0f09ff9bd3f95591de2500cb5e97dbab2905f87c6265f2af250d9666986ea797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=6aef949eb2dc32d317bbd339aa25c34d91c6e23f4788821e7c82329c63cd2c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=e784e8e6a02af79ad0f630cd75d21664cdeaa5e49f09fcc2499585f30e9f69bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4LLPW5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCr0nCR%2BmuGcTreQb%2F%2FPKGJhm6alckGZgw8A06zWZAAiBpTIv2sLZBAWG1ft9vmGyu08V47%2BZYxyMRtoNoaoqjYir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4I77rz4%2BjGv%2BeWSgKtwDugND1xIQuThgBUipDLHRmDStVyitxZZhURaY1vOOpfrPBlaOOzZwoav%2FOehWVI2qCjqrjHPs996TEPLIKAQ1AmnWAH4hRAD0P%2FHdETbVa0rs%2BAwIQJ9RMA7XNbspyQbuTgKz0WT%2Bj0JNzonEmKHduuWO3AWebzl8GA1TOW9ZOD5mw8qgrwkBUm24RFQpiijilFw9a9UaJor8y8sztuUDEK%2Fe%2FvXH0FjrEaLdsDcGgIUCRB1kxXEPQYg2eGkZfhfR5hHf%2BZp9dZAngS8yJGqVBZF40WFcH%2BOgADPugq3K3HLOfYEhYd8Xo7jUxASvnr26piv8IQNc9ylmJlX8VERH%2FmEWrWoYYvteh7fgK1TnTr8RhA3cAvxLA4Vssg4csN1KM1PLNlMXMWOOu%2FIVVHyruN2HoFVv1V95yMynVV9JmsrUUxfode9HYYnpJZ5ipZncwsD%2Ftrsp9lcIuwq9w4urw9fBtr66qQvoE6XVeuzdvoCzT1i04NmJ74H7CD9i58EPTbZ9Eh%2B9R9pqJSFxyg8PvpbtzB5stl8lQC%2FMhS5YSAm6KuSjNpHQ8tvVZz1m0ED5sVYengLfp0vkiCqt2LPxHZFXZ3BwKzUTWTUwsoNOyZD9Dpve3sAolcegv0Mw8ZS4xAY6pgHua6hm26bXq6u5ZG7Y%2BwwLrmcvRMuiOCys4BVxuKt4PyNRqVxOmVmSNynFbdE%2BBnjs%2BEg1jmlK4IfnO3sCTfmurfawMvtQ3eQsoVQAK8uOz7wx4zZp%2FXXAAKPifbOngqAnwNGwga8X1v296QeQ%2FswAoBcO%2FMVLdtS5bPplG%2FGT%2FWg6UyLLZvuUOmtcrWjOtmIfQ56gLerUHSGGynL7%2B9WaXp0seI%2BY&X-Amz-Signature=c7014f89c09c43b2d90a2992db8297aefdd02063bb739fb0aefbeea45ad96d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
