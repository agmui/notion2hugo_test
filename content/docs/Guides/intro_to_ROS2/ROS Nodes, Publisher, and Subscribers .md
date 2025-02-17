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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=75a39d170860cca8dc87284a23ae3ad33c1d09655251e0575affabd79954af9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=f48390cb3bb0149b421a0fdc507412ab51d65fd109690f8b478c65eb7f7d58a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=2cdbbe9ae4894d809d9b5dd9c0be531395a6b2eb22288b067b414dbc56ba19d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=e9217fefd0a9f535ae6f66e0df4109f2809868f6e9dc2723c5144b41898ba62d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=50324b4b343327a674b297b1ac27023acd408b162d053aa81f76a19346f8e0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=5ff09c4610f2f62fdd1757a9548bf61b136080658a33394521b89b8decb4ea68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=2e2444577e008e019f4a2e0de1f617bfa8b9a8c7c83a6d88cc0b508c906605c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDNLBCZ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ%2Br%2Fnf687tglyAFdTQWMHHao8JwmTv6uIsGdsiC%2BqtgIgTdGgIDNhnIJuMTeNsbNF8uv92%2F0Yxa90zFP472kNFe8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFHK6XRnDHX2Ni87kyrcAxECLslbnoxo5fqSAVWiM0bTM9EsAZmApE9pbAO%2BDbr%2B9%2BfswXFwGnWRyjsytED8TKtPm552A1LT3fo1U97AhQk92tQuH1w6E99ximL9JJc079yWIGeWD%2B6EJlvzUTKV8%2BE0zzomLtZ3vWu2WbxKYHoHts3qTIrkR1YmidC%2FiGVq4OLlmyrj0%2FKBbUP%2FlurNQwe9dO%2BkYJGrk2oE8lUn0cbMXq%2BttRujrFLgLaZuOad%2BCPRfeKTFIgOLOE4RB4g35K5pbdWHQ0jG6WyF1vdG5g7aY6XTK1HNF%2Bt5ojAXFWKml0Og4WhTS9CMOAMxZYVYhqvF6q5SSFR7iHfxfYURxWeKylYQw3Gp7itLf2Jnmhp5nwB22k8vtqcNKnF3J0WngKtf8%2B3hz3hY5OUYo4dxiK0sFVDqEO8EFvMl%2BNoaxFbhcTdd94ryePwckM3yDWTqQ16GG92l6rRJxMz5QEcxEnYCD%2F4nBtcXYyYZFnu5fBUm9H8uHWxqN8CjJZpr%2F7LJ9Bm%2FyDCkWf2RgbfnuzwSYXpeudG%2Feg8ycI9QDjsippft2fWkczQPu25R5186aSMJIRiZ%2FVQrtPBHkIuJuRExuTPqjAlIRd5Y84AlCNkBD1YvofK7lRgcsKEOm%2BydMImWzb0GOqUBzXldUdk9A5%2FfXCrYwQrHwbfWkuwx8pGfFBEmyLuuwhDvFKWng3b39YLN7SR6Xb7u24fe%2BtDsWimKQUoIFcs6yM5Mxnw1%2BXapS056%2FJrB1PiEpjZKDRofkSLpTH2Bx5UIy4TzxaaRXEJV8pAQAsMPWZwS65UaHoLbeKsWERU%2BXJnAIXki1A1kMe0uYDImXkvWijaeWuIXon%2BUdPSuJVDdq9HUkiDG&X-Amz-Signature=8a80e936d74778c38b336a9cf2971ad0e931e3e39b80bfaa1aa90f47aa2a9ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
