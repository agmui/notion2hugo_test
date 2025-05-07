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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=9256f53a3294cf79bf7bcc03588b17c422f15ab8bcba9b53529f073f9fec3d02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=e03ac164f0e39ccd4556b6221b0b9626383f44ded48cba5348968e8726175c71&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=1b19c0b70622c6aa7e090f4c460d933a5f58ce9584e8c12a7e03fe08a647b74c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=27e5775039a164a752f06cc404771278f99fdb0cf7b41cdcc4a4549493ce65fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=bf75957af593c04689d774f71c6242a112f5bddf84fe5b2dc32742a1243d3320&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=19cc4e5751f7a6424bfb9bc470b4744c8eb40ca9d52a4587eba5bb92361db0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=0a86e32917bf8b4ec0b6b5aa5a200b2d24f520d1eef52f122a4e13d64f66130e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7ILORR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXCupa3tbS7%2BhHL6gJCZlciZ66MqNO35ySy%2BQjkOlN3AiEA5ML2PG9N8%2FR2SkbdYd23xyVfPR%2BxZR749De9ohypvMAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3f1xMhSLzjsx5HdSrcA%2F9euEOr8Xi5xwQWdEqHAJo4Ya8QvXOhi0rHBVwrdhi2r8nIdPSDL%2BI0QBlovYWGZhaSwodMoKTiqb1CRqUO1jnPiezY4%2FDfBEjx6a%2BRu0se8uRVjKUvJQoywC8iu1RJjabyKI88RTXDJRkSyhIV4%2BZqB3N3%2Ba%2BHqjc4mP54bEcbjsiP%2FgSw0vZvxcpnsZSvlgPVQE2gwl%2BXUwtGivPqMhVyn2ScPDiUb%2BCK%2BxXuwKTf2aeFn4gHKJzbAIt%2FoUOt0QKKNmALr9tj1tD3VNWCa8EDdGc2CWFyYlfFPiCv7ADiw5tgaSmXvDX1tjPFlcb0ozD7sB5Oq69tGMwHJkmz485OafbQYf0n9aUA%2F4vwVikO2E90SrUWe3L%2FLWNdmsXK5ZtPwVKdUWaHOPF%2BEK0Rly%2Fm%2FS27hqm0BEyCNprY9yvIqnnXp6D4RjOA7El7Iwng3p7SAJIVkI%2F5ian1Jbr9mizeBHeg3v1zRj9Qv3QlqdvfWGlKoj8PL4L%2BJUm%2F7RzD08h6YBZbJO5d8WXIGUtV1wSKhFQZxgO%2FJip%2Fh7TNSqol08I7aBOCsTeC5ftblG%2Be74J8kfxY8A4t%2BA03ECbBZscYwOGS3BZT4uPOcaUDEc2%2BXQRBa%2FhGN3s16Q%2BPML3w68AGOqUB2PQZL9V0PvQi7TZF%2ForEpsiPpw8XWDCbYM4D8yQU9lFJhvjur4jYUNTo1zRDcEY3PaV1KMyoOQmFTIQqafyeF9s%2BGvVxh2Do0DL5BFdwLcnGfM3FazwvZEUbXVL2DcpJO5D%2BRNmTuVWJiPdgGOAzFpc%2FkJe6qEeHpKtZZoSf7NeVbJAWf7J13Yn81NXHhzxCuXPWy2wlIEOeTaaBVaM9B6DHTzta&X-Amz-Signature=d0e57c9aece0ad25b4bc3bdc248b8f78ad5436099b663eb2ae0542f79230b0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
