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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=56b6d31e0ecc135aee8c01e5af32670dd07c3bf83f91eefa607f9b0a5093ca22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=f4462eb9c98108c31c1ad59cef0816090b703b66a97793f5230a3732fe7f39b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=895dd7aacbcbf2edaa30b7b46679ecef37e3e2e5047e2885cc51a04d79815a15&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=92cac8a5240e882a3c235ed179cdb03002e19f2643d1c5d22da32688b1a00033&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=30b945a1fd94843ca36a1f92433429c0448371eb78fb558d97ae938e1bc72fed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=9183f5c90c957b63dab30077258ad830594e07dadf7266b79a4c197f56fef1be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=6a41cca459a74104552e561ac3c7323dc1ee44f06a2530c028b22ccd86650b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7FZVXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH9HEEtvPct3bP2QoXztaGsIxgkIK0oHTDhWIdowL87JAiAs8iuhdTH99wDtcbm4v9hrzhcHh5G%2FTIZMryuhjz4ArSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5rpTM3iSVk33GmRKtwDXbGV%2B%2BBCTCgAVaxMloWL4P1snJWRdr7LdUR7XVSypg1t1et3Yl8xukUix5h15okHnMRSnRDnowkfK7qvN9Gh7llxGbPkvMSfmtkF0rKtYpW9vor%2BdEh0ESsDZY9pwuPkNQXntEyg9zq7q6otNCwA1fdqeDjZ90BUSOmwxcFP5aKeLxNjXyI3iEWGZdC5LSDxZvvKaoPb2KuEJLR7XPKbdFWj%2B3VyKs6e%2FZIsI1X7VI5WcI%2Bar5Lg6FHEbFQCfMepo3foNXx2i5XC8V5uzP62RditLwrp%2BaqCIeyStKve6Ca52zrSsR8FFWWv5ojC3VXNkPfXSbKrGLvRUVWuF%2F6gEDUcjuesYe5NcU%2Bt6i7vVtYxiyAat%2Fp6bIuGhOG%2Bx11cvIfErKUyagy8wyJErrsLeqz7BZo57m3ENJuMXB%2F8ue%2Ft%2Bun2ue%2BEqzhKwiJ5iPEzV4dI5z1EvDz3njZfiFevY986fFk5gAAhGr0Ff3vqCLjnpFOcpejvYE0lGgfY492IhDaHgmKfJxw%2FMkHW%2B8KkFPiKLJxxSYO%2BmyEMJ0N77Dkyl8oSilRrGrxwXGf6FD6IFLl%2B%2FIGDxWarjdTqSytFab3OTp7TXeddP4V4Xe1VKaCUwBc2YlEingQsUhcw1Of4wQY6pgHgCxMYN8wI40QFOd%2Blp8dK0QU5wn%2Bp7Vs%2Bs9JorNdQkgBx2x%2F7t2MKfHhakvSnQ05lKgcHlrKPFGlyaCYD%2Ff9rek2L0S62l1hce2rV63sL%2B%2BaxQRJrfFZTxzhBx1NxvlT0ShVLKu8FonDrDQjhn7aamtkGRpC3QQSS4yyWZB6kpREvhdnkkhg7RFD4UoiExbTWZWmqiCINxrLaEKbdNgxKyUS00XE4&X-Amz-Signature=c73f5ab7656fc5ad6c2662b24c4e2171b56b7c181fba62c7df40c5903b03eace&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
