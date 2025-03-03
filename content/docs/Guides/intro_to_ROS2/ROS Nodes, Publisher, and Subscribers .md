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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=76ea14d21a900abeeb0add8ffe1f5724fef00b1fa6e01b0010277233fa7d72f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=c93c6a4054e37c77fb44b78b99d1982e264bc92d7fd671cf363677aea4a7d196&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=8bd160d7e9f03f5b6d0a8057df49066c4a82bbea32ef012412b88a5f3994a228&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=d52ae948a9229009933af3f9d53fccb2f2bf8d55dd9e7592004078a671e26a55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=e9e511aab6efbfc631f950aed391c99d5aedde0ff5cd11ad28cc8a682af4e814&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=7c1d56c365488913f689aa109fce578a982add69c1994f42837e69c6452f58db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=cce88185f2233fcd48dc18a3a0eee15c526c3e864d9bbb7d85d508916c01bd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZFYGNL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs%2FLvcQAVZJMY8hRp5kND7zqxDf75izV7S5ULZIiQU2AiAgGb%2BfWygcxNaigJmcyQpyhHvNA1GOnP4YtrdfK1k6piqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJWamRGItWR%2FBHg53KtwDprvuNkX2jhIFIjCh960OKB28EC489oszejdLnHy7J6bTP0zAy%2BDjZ6%2BHvSWGm74TdUzK10ld1jlpzINxFloUCVfHWvJ5WoPRcR7COWy0Zh8kZf1ROkalllDWiipKgyZqX5xLruQkYw2H2V%2FjZy6WNuSxpgyUtgmujbPHeQG8piC%2Fk18aUc6aQ5JKJ02lf6gmjyuYqzntI6%2FJb9lyMOuEStcPbQPr3n0iklwfRNSive3M%2B4za%2Be9DT2Sf9TLKNFFnWYEMDKbeRbJn8JBCfs3SyZVVMc5mub7%2FTxmo2g6vhds4op0fUZSleAMECTfHcxxDd785LxCiYJCJPXW5jVyI2R39tGKUMop5AhEXQ82%2BEP%2Fv9Tu2rrBPdXfT7Wo6zgqd2KOZY3Eg4nISECmf111JaxhZWhNJYoC9Yof6welOq0K%2FPADnZMmGIQsvpyOEi1yr%2BwwW6f0UzhkqOvS%2BZt%2BxvgP0fxnq8bkQAk6HXK69hI9zTTApMXUUrsDnXogiwcbf4Fj2zfREfkz3tasLPVVro99zOW9Qx%2Bgqpu0Y7UGmQiR5T3AY0diFWDrBmVCm6JY%2Bp3YgIcTP1kXlN8H6aWR3ovQPRfpb8QGYPm54hSZpsWPMjuaMDPDqxaQ%2BUaUwttuXvgY6pgF9Oun4pH9g6ElAZ2KsG34bTu6jPpFO8vGBVahwqJ2Czma3x0ZYBr%2FsFz0ywgKOtG%2F0r2%2B4f73mcMPIa3ypWuKMlVX8k48NTymrpg5yirdZfoDVpEAmFKo9EId9M0Q0B4fNlhDU68rmJmpKiZ3hvQyX3T%2BGEFZPXSr6bPgele6DviwCfNTICsGq4%2Fi5OAc5TlNjqtGjL3NaUelivnkuHdCOtTR%2F0RGm&X-Amz-Signature=91ed9efdf6c75bfa3fbe9d3e007a63edb78dcee65cb84ee113f1d890b52e468d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
