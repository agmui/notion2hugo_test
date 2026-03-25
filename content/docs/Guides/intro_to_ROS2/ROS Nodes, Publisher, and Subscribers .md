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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=5b1f05f5deb8c9f8408a3c2e55f2e30ae4665e75660c47b0f0f81f487626be4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=c6953c9e878ca3c5d6c63785947f9ca747035849cbeeed0e6d11d82cbc15904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=841da1dfa98d63c926f0a2d41fd5fecaad078a037fe9e8257541885b1604a2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=abfab38d49751cbac248a68cc9e1a579d01c270ab73dc7b5af4304b3b5a4b063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=f9faf83cc5f5586e3c1cb6b33829c541dd41232af82ddaa03f93d47862c8f070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=7363a328d9911aec387223eb4f897eaf72bdce9146dcc83310057814aca39d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=d8e3731083dfe84d91abb8365215decc12f602fd0b142f57feafc6b8ee17611f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2ZOW2Z%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0BsO6GIPojvGPEPqBQ4q0k1aWyGxIawkVcR4vR%2BFksAiBz5Xm%2FvB4w6%2B7V5Aq6lDrA%2Fi7YTiO56DEx2o%2BXYih29CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqBKjar7GiGhenLVKtwD4ZtpWR25JJHh%2Bkr9L2OSDCM%2BfpjZv6pUvqePTeCOa9qEl4n%2FMkbsfmypiCRTOzlkAijEn1phUWbZ7ri7eicOS%2F%2FZmLaem03u1ixP606K9nlw9Nlz2KP%2F33evFgBa6D%2FN7xbVfLFGUoWwXkrvy4VdaJlKMKZPZYNMfDzfg%2B%2BVaT9ippu%2BTi67MMIENyyGw4tg%2Bh2Pvj9RND8SmMR0ncuYaZ8PZ7vpx0zmofFUz%2FiXdchghWCAP3Ibx3%2B8Kb4CRsyjbU8vc4Gc2IR3WCqiSBUawu1Vg%2BY3a%2FlJGxviEZdw3On6MK7T5SOs8Np3VGG6M5BSM3h2EOsBFFLpIQuwijNC245Xgrj4vdYAfSM1vXpN1X83LMpLQLcr0%2FA%2By5aERgELuKnPAUs6Atgbn4RyljxHP7PIdLa%2BCs0dORpFrtb5ojVGvTiflASk4zchUG%2F5f9P8kBtazj09wowEGvhCndyhdcBjimpSEsbFmFjHfFym%2FoNIshg76Ag6wPGwY6sql9iY0b4pE8arle1WIP3cpZhlLTjeen8ETZltVJACs02%2BYRwvFNYHGFLGbEH2kEo1WABf57ajummCrXPDdkzzFO4y9vl8nWle4IyiXNXdkrEEXeMI5byXX%2BULNIJ8hhMwzvSMzgY6pgFZJC5G1DCcDft9GI%2BP5mptFauMIQ6RENkcu0J%2Bony45RI97DumKMFvJ%2BDUvvK2hQhbUT6YDN3Ob4dr%2BdLtlqbILlAdvpqZZOCat9lvEQgJtgcuz2q6s3VOCOTFLfLEXfn0G2U%2FE0hYeDTxHDWE23NqkoNo7WAMr2V%2FdoGbahlaCIuY5nSXr2qRJA2HXS3u%2FnPBzUki%2BZ4zRC99TP1tkD1tU%2BYbEw75&X-Amz-Signature=9d706bf0716bef3d543ff7b879b4b6cb43443683eba36542221e3532ea0178eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
