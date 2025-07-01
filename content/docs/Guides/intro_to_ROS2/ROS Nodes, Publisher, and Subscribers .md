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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=679dbf8578397d4adc0d561c27e7ad0b4732619ff1a6a459413e329ed9de30f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=56ee80c082f81afbcd71884ec1f6c6713e6fce805c4472d613599badc118b6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=94545bf28bd93aa0e5c787a7ddf3062614b0ca8bc742d0d5fb4dcd9aaaca437e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=173d3ec3594189869409ca70b617edd58d8ead255562f73bdc1a9a37b75a33eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=eff851616a39e50dc1b2b0b350b8cbb1f610b07f58c4653c5672c52a6d0d882a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=f883155872f507d65661267d871cd1bda17886933f5d303bbf649bb344760079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=8a67988c0984d46a7eda2459c02a9c9d6622bbf6a1890562a37c09f9400d312f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYWK2VT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7KLEtK1RqMMXN4uLHsRhbUVpFWlU9gFpDeFAs57Er2AiAbAR2ZDDjfiA5a1fLnMXYRRURKFaWb51cPlxqmaUYSqSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM773Ye6JejSp6dXcPKtwDskoO1iHj59FCWb%2Bf3%2B%2FLOwVwWslmPufRxvoAWIzMpqTOeyhWVhc7aRRgO9E25mHFdBV04mpWmDTZtkBHl3u2e0XSvKkVEecbu1BaBm717EYa2VSaMCwviZUxemV1%2FgNcKDANN74mo2SYCDnRShIA2unSbZ7hLweB9ZcFlebulb821Vgl1GpG%2BjTUMPRRqF6sESR6%2BKxbgTxTf6COyrZTGh%2BYWMg3r%2BexjG90ztXkyhQYg8nXlMPcSvcgBkSJCStyrRYUPcjHf3eucFGvgT1hPeJe4VAT1TTblH%2BTd2QtnzcUbSgZ0T43LZGX9HzItD3FVB6R5nd21k3fwGFkoNzT7urCnNXdSuchL7yZ9ACBXA8s7reezPgAQYYz9ZdmIZoYFsE1ltThGHspO39sXFhO91bSn0sXpeEj2FoNrvrMpld8JXuuPp5p6GiQiR3jkDfOEJAYz2dMQiL8ZtGp16D%2FAQyFvhSbbUrb1Td47b4pC4gkZEw2Sy5IIQEO%2FTInZgLqpY0DEOSSoRXNc8OpDcS9qxf1HPARJANpz0hDIIn%2BqYBYdevQDLJ5piDMeikwKvTS%2B7pYhynyL2AlanImSwi47yb6MVQjawXCQSz%2B0%2B%2FD38h4hw0PASm3uJGo0vAwjM6OwwY6pgExAy5L2BvZD0hBUjZq%2Ff74qReO%2FpOYOa60z2RvjGe5VBP3cNxO3EH%2BegwD%2Fcm4ptrRZgB%2F8TEOLylSSyErsz13rHqD5xCYiWF2xuiBI5aOpNkppMHaPFMqjqsZ5MeGUPxm829pydKzHpCB8o1vFN54vN%2BGw8D7QphFFGafqngl8qAGecnlqLHHPgZ9sPs5CluE0SgKWh%2B7X%2BpqLL%2FphRwqCvOYwzbT&X-Amz-Signature=8856fa112e4c0c0427eb77e7684c73c3912ec04c8c41db825b48a172bb72847a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
