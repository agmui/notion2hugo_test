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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=2f9f55cd587228c335a1a7c2df6acf20e4d64f4658df62d064bd4b72a135466b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=2df0381f65e10d54a29b693267d67ba3def22446216f82b44d1e2cfd350b0128&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=cf22cc3f03ce08d79f68a862d005572a16908b76d63bb0cb309539ab2ae5210a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=60e04cd17122a5da46c34223bf1e3475901a5697a9506582a887823d2fbd612a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=70bfee4abd621aac1afb3a431fdf0b1ee02193a5fa7ec44bb241c261ffffcc26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=58eea7c3db7bfc7cf8a5bc4d5c1903c811674c2eabb3db6b6cf5dbf73279f3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=bd9288d5077992f067741c581c63c235c29b91e466259003f944560162beb616&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEUNVSH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEkrfAY%2Bfw2pkQYkSnppZn48AdxT%2Fjq%2F7lEJeGHCkNOAiBp54DNadjlYVqutaFg7btK5SaXelL4qVCU2K2O8fuPjir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMg5xvV%2B%2FmAdOPygaOKtwDZLpmD35qpk5lRdF6JyFU6pA3ZxiHLvbVyvAJLNvxy9LlR1AoJwjVO%2Fq1dHCR2JVEQwTnJ7bxDGlC7eH1lGZlVKN90HMFadvjnVhYUyXFkIOPVhFg7HWw1106hFJqNlFy%2Bpc4GCqDQ8vKF2ACst5CWQ297oFA0FRQm2stfB4BdRDT%2BKm44dT1b5wW2li1SHjuuuWsY65iowfIF7YucI2x7MZFICitUBU%2B9qMfkCVoPtpGO%2FGx8dUQcEi1MuVloE8bYRBODvFW1fDIV7nNNxz5K9AMZkAwsB1u0YjNcR0npolAf94PMKyfT5TnZiBxswcEd2s4esbWgcDKGUSLoGDLMpJqAzL3uOLmZpb%2BJF0g7%2BHtwZXysfcpSjY%2FkhcqHB%2FRASBLrx6MI2jYga3auQ9iMdh6F3RNEkUQRZOcRqwWRfGmHs5Os23jIY5CnvSDhJ%2ByjvSYMICl%2F2mN6rRrB6QBsN94OcVgezwacXt9rYWahW8KqCTuh5maUK%2BZmgDbb6kqlp9M%2BwlT53vZcZKy2US9RDJhrF%2FTrrsrusQG6lLAUZzBryTfVSNL58u48E%2BwOGeVF4FsZ4cu61qI7NGlwSMumVkxzdOmqIZblzbjPSbjG6EUFiMtn0vOeyAU7xQwgOezwAY6pgH77lkORl6vStSudiyCSDjcwHht311GDGOfD52eIcxrdHRroWgC4iLH39fI7ebySykrRcANVCWzHbIpyRbicN6pF6H09VUcgBo0rtx2e8T4ESyAK%2FJbTxoKCJzt7%2F%2BsYAaPj7Hulf4vq5OBOMM4vcidNFSCdmBzK61WBXXaRtpNhASS1C5JG%2BGh7zHuIP2YG1G%2FyMnxY32096yEWXFjcT%2F%2FSQqdVZE%2B&X-Amz-Signature=0fbf4e2df446e5ece16a959e769d27214592eace9b3a7555bcf0d6301d8b2e79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
