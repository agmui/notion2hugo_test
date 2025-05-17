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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=8382e5c8ea424cc84f026a21aa99343976ed35c6499fdd67e603880c945ee68c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=947e7ccc4ef01494b8ce9c4b673d7cb60a08b8fcf4a59c71bd53d753027d2034&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=939f8e67f7b08e18e88e0504bbd36530841b2fd4f88dc5d7908c0307b2b3a6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=1c37b9ba4b918b456e89adf99c4b18619a836c239ea617516ee50669e83918f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=69cbcabaef32412f1a1f094f42607ea94ebf9eda6905842727bd7fac52d0265d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=8e64b41485eb818a6ba043525c570e38e1296aa2749425a7684bc0c0ea0c53e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=252ecedba94165a356065d7dadeb1bede6068eab3dc8702824bd08dfa13ab2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5YVJ2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGFAMaieBYPz9sF%2FGXvgIeaGoomN9IdNyXnJMsp7kzzwIgAqyhM8piRnOwkkdeCQMaS2CAj%2FXGH7xRoLUceZZVhwYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLdaSeFo4DeUq0XZdircAzAgln5rCLv98fJ1aGCwf37yvEvx4ozrYdFpr1pjzxe56ofheKNexFQMttfckHOqOCJofXskiBIeTEnMEFI6gh8VbIEJOxXdQUkgDzWf7%2BFh74q8Y9T%2B8b0mpAcZf7QhgdL4R7QKMEcOM4xKIuRDwEmR73HBnngHXebrdo%2FVIxvW48p1%2BK%2BYDPuDxWI8KlwCdB%2BtCZeB41SNjh9EI6Q5t3zxcLT83Fo%2FGF66pVkEkzPgDX%2BrMax02V7x%2FwmK8fOgu%2FuJnDLwqQmLY1dCy5Oqya3bwyz8oFdEjW6HNl98h0TBgpJmm81Tx5TGK60uJO9ytUfrLlMA88zR92ZSjssWpajWLKHqAQizyeIIaJ8au7TZMg9S0D8MWYOKZc0BwSXZLCv8kZI34xjxqtsOOAKuUJfCfFbgVcbMmIa01sQx4zOPYK8wZLz7iK4ktuq4IpdHkwKXsv4zaVa6iryZaxWKTXAkp3wKZCWPWtxCnbv%2BvvWO71Lb0rcP47hV8Srbs9KKp97XzxyLiH4hKhFf1M5yIllYCUOq%2FxmH1g4Y2y%2Bufotwob4pfZT0WW1RRih54BrTv9W5PIqdBm5Tmz5ixvUSUkkDmNuujA7chAleIk%2Br78ljwAwocrTUi%2B8TTArcMO73o8EGOqUBt4VB17ZOyTYt1Se43EgvdtCibKQF%2Fjaf0kgwcW%2F0iS%2FnUCOuL6n0H%2B%2FNonYPZTLhlaSVSWxik0yluZS5VejXiA1qaWic8Eu0vHAsJChfrus7C1JyNsJIkusmIIFCRWW4pDWWxceYpBqFpnNPzDOyNJVkXhZfqauhPoc7%2FfRJonaJonvdkTzhhu8wE%2B2%2BqSyAZXTzsISdVBq7%2FgxamkUMi7zvKGJw&X-Amz-Signature=b5c0dcf5f5f063decd5fb717cc27210dc50a3ba918f208082f2b01705c9f1886&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
