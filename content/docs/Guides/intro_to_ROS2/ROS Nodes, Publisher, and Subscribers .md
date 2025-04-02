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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=fff2165c207f8714800e618b35e78338b240164f7b98ffbd6e67f95a3f70fefa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=1f131d5c9f9ad46c909ab312dfeec0f9ea3074cb802f24d13cad0f273f0079d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=29ea5c4d9d04f2901afce63a587680f160f7c114766a9e09cffc244c0cb557ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=733e1c2f953cc0e47085c28a906fc08f6a18379b646ea233d757ff2d5ec0915f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=2fa685fefbe3e1b19a8a8e9bc3e4d920dc6c6678652dd9507adc1a35173077f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=06d74c1831150dac59e1c4270a45834a339ffbefc2e9065268433383a6453fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=09b0c764f1a4ff2aee4502c62771f3476cb252a49d38a9473c2e5fe89041e290&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXR6NHP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCaOKCzUWr8aJ20%2BUiPSEE%2Fd1%2BY3n2zNOciBAV5U9bw%2BQIhAOaBVJRCCoAIM284PpQs38WEDKF2vVXO0fYmYPcwvelUKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FkYoBwWh%2BLscxf0q3AMaVrNLPZ8Q4YE%2BKWhTxa3Jm6hBRduIL5tey%2B8La6ZTMn1TBH7AuyZpXKRC7jUz3rZS%2F%2FPmDYySq5FNU%2FMpzQohymMQxjgbVd0Vs40WNlYo5goqhAlCorEO907SrA4dSdSF9nxDeXwJ4%2BhgyBkhawgsfllV%2BuE29yRfbezdkR14SI1XVoHFhEgUVqOH5OpRf0z%2BDxZ0EPDHxe18%2F%2FMLuYMxlF9OHD6XQf8pGQcjpszG%2FOZBduPu38OAigiF11kcoekSTXaMvUlJXDbsZgUh4BdPHXRaw86F7LfvSTqhsSPhTCkwjYBJzscYxZrkJzVYfCS2OvgAu6SGPvay3%2BBQZZjqb%2BtzIf%2BZveAGyftwAD%2FKr9O1gxv7Zj%2Bw52NjDRF%2B8VnnTvTTYLMUsBfIr3SJPiJme0HuHKKaLNIlwmTAgkP6ZIhtv4nPLI%2BT8tLgzm%2Fk2zkizZp2eVQQspKLZvG0MdNy8gntbXU%2Bhlo%2BgZKIxKgobrNwhmmDAOQYprbZ5zpuZuMcGx56oSasDNR36okCMpe29s7%2Burf81mL%2BQfTEBndNzf3u8pWB%2F%2Bn2eMGGcJ0Gsw%2Bo0DQQBJu1Fym8swPktr%2BarxGGSH4%2BF%2BXKjKfBQIXgqEKAieIKIdeb7UIQGTCai7O%2FBjqkATIlIbdiJ%2BUFrhyW1GQ%2BFhGxETZaGrBVaGX%2F3VDI1Ia8mNqhRdk992eEdrvv62Oy9ZPtEEEnDHikbrrl%2BDNHH6HKpP7Ol5N5BU2IZVHh%2F9F%2FgirrRjD9dAmqugai%2F9yqMOlIigFDi94HV12Ic5z2GUE6GD%2BqYrGY8GbooyJD9NgWYf26bMbBPdE2pxv7%2BW1SYP3SwcAXA6DZU8TgmmoFe3L4l9h%2F&X-Amz-Signature=4fc48dc04fe41e0c4b83187e5431b0331e7952f5d0338196726f3069934474d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
