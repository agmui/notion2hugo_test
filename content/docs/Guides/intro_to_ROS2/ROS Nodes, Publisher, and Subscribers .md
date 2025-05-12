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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=933779cf40d58beaf1ae402cb194392fda64483d5f5a736472907c46071c3092&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=20875c3dea2793d681a87f524abaf10cc82322f64c6ab489605d34d08534d546&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=e363ce0ab3d017f4d0437e2f7a4f0005579920a366811c60f1972974d01a20ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=b5ca59a68012ff3453126fb343e1119cea32a43c3c47a3ab741327afb32e4b19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=e2894c1e2479d80953d7cef0d78e96cfd43ced1e8fdff52271ab9fb29b877fad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=2522b38ff021a726f596a24ea14925140d6237145e7a701d7c8818aa89391ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=f00db948062aeaf6cfd91db24b16e561d98f3d4ff5679a7356f9c85b1c0250cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKN4MPF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDnATzuu3jwTrVVroGSZpFU0m2MMJj73GOfNHlzkBUQ8wIhAPJwe9d6bE14xgtrZP1%2Fnf8RpNoL9%2FCuYC1%2BJNQz9fU6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBVKBbobq9%2F6UshmUq3AO1Xt0W24%2BlMl%2BvQL1FFUDW0zPbNlco0UZrMJwL6U21Dnp0eyaW%2BIdUwgRpxnt5rTo7kQeO%2BhBw6z84SdV2AyvVeLaV6l4gIin8D46ECdsHFCB61Mu1woHpT1GdspZv10zJnkhVjG2kVz6eIvtFybde33N8HVMMX%2FFGiVvGBySjTjHQk4uUlyyNaQrqDZlUcssb3qyo8xqBqTgdMa%2BKOIgvjfcdWRW3LjwFskZ%2FOOny7%2FRwVtg9H%2BdOUr57jNX9FCLh76BXAwrgxNv96QSlFkc7Tuol%2Fk%2FMF7PFfuoAA2KbhB4bo2C5Vx4zn4WZCQgY%2BSBbUUT9U4Fizwa4o2Jn5abQ0tLAs6rSsiHqdfqF3fbrZoTAhGvYhlgJm6PF%2Fr5OiMF808Ief1HjlXxumUNViUlursW3Ay8YxTzEU01%2F39eHW2Rk89RjK5Emj7sUjP55T5Ov2nSbi95Qk5Copip73bEVUQFuvV5ZSUKmNyL%2Btw39j4cHKtsFoVszLTiou%2BrRA7jXtPRKpspvzoMB52CNUqMBXvbL1WpBYSVuBrXoDgee2Ubvz7sHoiP1W9YcYgyxoNBHw8Wn2Q3iuItwvgP9xdGT2u01K5UFaNX78L%2BMRtoCu9bkDD3LsTFVc9KBNjDCnYjBBjqkAYr9%2FyOq5KsfdJrf8HthcgdCBT5Xtf3nOU5NkiNYnypMrkT3zQmU%2FhfBK1GHJ2tx70b1p9YGT%2F8WOtaCP9s6sVE94Hi39owEnIedqPWj1XFvH03ez91OPMjQr%2BvnDmZqVpho6iGeTV9THZ6tFiSsr7iClZGrNiPDQaRzxL3ZvobskWiJxCwq7h3moEyhQNgJ4uM1AeI6FiXLDq74e4xUc9TC6QlM&X-Amz-Signature=af2aeda999c558ec2c5ac3aa6fbaf3948aa990c1bd316fc94901b9bf4543ea8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
