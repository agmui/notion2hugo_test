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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=a1b75d4903735eda73d29e0a56f6ac23043bd0d87a7ec356713e78a6ecc3652d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=2cf0efa277a469b969393bc54cba2419b45c3f11a53d92262e08f30786da198a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=1bee158532c28b44ee23fb8c21661b366fd3fc96505fdb0181abe99638f9ad89&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=db0ad27936c571999c2b6f9b2310d9674697674c04fef70150688f4996d5fcb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=7af1131f546c35233a7c64d87f160af2d3f2422cb71a14952ed553592f597540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=095a2be0b281b2ad9bf00fa9f30b4c7a620fc8251e936203ff48f1df9580f946&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=7d58f7ab2dccc7992c25d519fdcd2e157b26ef84db57a08ed349ef07528c5a47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXKHARQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrMupOAIpdXiW3OuGAO6Bs5Lvn8GIjtvx8aUmXP8IEAiAx1GQJCrrfG7ifpzIoOvXw%2B5iJmXKcKJ%2Bvd5%2FOyzCdeyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxh3ULFZthO0%2FyulKtwDAV%2BvwYG9ltVnD%2FCAPLx7ExhzlCLc6aUeuZbA3rR6y2cD2hyLXNX2Sq8aNYpA9jn1X0oL2DepK7pyIc2RA9O3S0jMIQdCmQNMikYyp6yP%2Byoe9lCcVIa%2BeLaOD5PJdLywxcmi%2Fwy3usMpAHiG93DwE6mfsCbiqM4UCgz36cZNzth8vK9wBaj9YYBK%2B6e8DV37mGwondWjQe6vKMOSg%2Bipv8KmeMj1AKBdJ22c1%2BmhFfhIxiE9fokeESANuA8OYiGSkdgdcZJ3MbFnsb8%2BVZ1EjDe97xlm7RWjg2Ixhv29sYlvKSnBVacsuPfgcXaoN72T2GXeiI4LBXeEpASXxc83biP3IfvTPhoHAYEQcTyQfXWxrlP4VssWnD9LDNPzsqk18YRnei0n33N8WZxBi9ChTivtoLRu%2F5VQc%2B2s%2BTBzJWvz%2FuoF%2Fj89x6CHrHHTs2vyuoy%2BES%2FApLfiTmFG8VOrLn3jawBS4ZnQ%2FeXokDoXT5S3gk%2BZ9dlubgDFR%2F0lW3NA01FKsCtjQFQGhhwJME8v9%2Blyr3EvsARzVV56te5Sddl6WGTggEOkAPYfFRZfhZ5nPLgXQyBybGMSI2X3DZoY96BzvBwLLEKOXcQRlu1PDLzQ5xX%2BohCXJ1my7yEwnrmrwQY6pgEWG44RwsAzc5nTMFP0yaHfR3ERW3fJlYxCUSywRYr0PNMmljC8CjgODccEwiDPLGNa%2BDmey5CtR21ix9h7YpZLLpa3YYbsZmsNF0oSdN3HOIs8dT0K5axJUkUEmrepzaJa8z0OtPhWNBMW4jHY69iFteXSQc25oObSidFnkB0l8%2BhUPwTFgUpmvijRNPdELcrOJVfiOvsYVGHfbRRp%2BEd0wynYKqGG&X-Amz-Signature=d8c6d1036924dbf0554b9389aec77cb6974a8307234b6f063408740b090552a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
