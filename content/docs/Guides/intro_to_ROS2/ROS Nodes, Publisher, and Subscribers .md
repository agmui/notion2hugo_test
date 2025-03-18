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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=7e9fae48d00e7ec274b5160adaf79599ca0e09110b77594db3982ed0122c70d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=cc15cd483e75a3c6268b2497fd0b27ab9b59de1870eec80f77c3114706aaa2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=4844a00dc50b2c7f77517fbaddae84f4850938953054f5f915c30db51be827d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=05ce9c5ae4ae6f8e109d6204895130ee2ec1231cab17ace88f6bb89fe78d7007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=b8cce932660ab0cdccbb55d7c773340aba2cdc787a59b0f9e7d1090382e919e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=3ad69fc8a8b34724c0ea7bc23e5107fa673888fa67adb1f1095ba931738c9eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=fc097d38974eed6267f2eb9815eabe4ef30bfcf2d24dda33441778340c2abbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUG3CIL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCICm8z%2BE93Q57g1bvxDZM1cxnNRe6OYl9tl5CmYYyIqGLAiEA306%2FvjgDdG1tG6b%2BHM6UId3LbaXYV%2BJ70mYH2GHafdcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMDsHoGarKsRp0Sd7ircA8YPh0KdQ0cmwcgNrLn%2BpHDCk4XJJD1xmQwTLz2vyfFrCtYvql603pPetBYM6jyrAezwYHRcCrzYPWtFz%2FO13znktErQ2kU7yZHB2UZz9p3MQFYxuQ3x9ywQsG9%2B1KpM9xCEcx4NiTRDAMDkdLHTdBJl1CmhhQexaidUIO5RXhHb0FCjlkbv3h5bYCWYwElcWxIhIyaGJ9PnMoGnmfKXIM5MxGxCy3nd5j85Sjj8T9TZM8ZMi5ap5jaMtLLr%2B8aNnVEdUPu5Uzp9MBcglsUjZgPXoNwx9BP40q7WH2slYIovVFhtMHo365VpG%2FSStKtXCA7GYvf70cKuk9q5y57je7uecTi%2BWFarq8FxUvHPVQEts21k9wXPIkIAFK%2FRzoznOUk1petqlz3oQEM9CsVqHPZlhqZPdK25iGXuJE2zarxMzqWpL%2Blo%2B3KLCBIwn6F%2BA9Qu%2Bz565rx8DojNcCWj84D92YV8ConRfdsKRFcRVnLSl7xeib7iOAINKo%2FbKDNFd8W%2FPJvGESVfKGKkx8DdmoMeUHP3psFFbOJa6LpQBZEXgOs5WPyUmz8HOOQ5ikXTmo21z7z9CdHP9xjruNoqjTG%2BDUdyABcHcaLbYBGBW5Cz1btxdAN%2BbFNm6hYXMPHz5r4GOqUBMAuhsMX0gaYY%2BhslDGH0KO8IU%2FVCyCMUe5dxP0F2D05R8FP%2B%2BkRFViI0TWXvntN6t4uoMOmYBfLDSGsq%2Fw2uCz%2BcLY9u4rbP3Hs95k2K%2F%2FMX0LNMmitkWxdQlS1d9iYVIfCeS4Gdj271HI9ej1ZCNrvjMw6kawr4Mnkrn97Hti2YQF5c%2FdBxYEoKUFWX5NPxc7xh1zVRTUQ8ajlGUKit0gQAea14&X-Amz-Signature=0063f41665b107fedbc168bc643b25f11b53bcbddaef47993405998218f62e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
