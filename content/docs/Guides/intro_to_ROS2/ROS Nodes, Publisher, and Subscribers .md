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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=7e74d6e64e010f7289b55bfe5746aa77017d1cf1936f1d2f1ae005dc1c39ba55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=eea23262dc254b9c0cf85c96adca117ee7d132f10a8fdf4497500c112dffbe32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=6436bbd47e3a71cd8dc432d3d0809e295a2b162acd4370017f6d4e2a8e892ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=b350c5fe38a93aa642e50a9f904b5d3e4b105e804c418c13b8da4cbdc14dee2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=d7305bfaa7932cb8a61c9f7d004e11f4417e67839b64b5638f467415b8b756c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=e72f046a5b4f5e6323e45b2a7696e4c63d1725182a27c376abf022a9ce7b6009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=162bda6925dce776af66e7e0affc0fde5d54318ea04acc389d2291597c2b9dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UXALCT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9K%2B5ndXJF%2Fu%2Fy6FwbYQB6jwSCaiaZK609lxRjx0TwCQIhAIKAriBwbg%2FwQpQcHKlYufA80TvgAIHFj%2FFPIdMgbYOHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQxR3oSMlnoXiMggq3AMAX%2FgyYJ3ilO8E2qmNTQ%2FtBt3WRB3jeWWDbY%2BD5B5rXDPdt7ARvhaKZOnE%2BY6y9%2BKnfJJLuxhs729qOAYZgjNE1SNIfTZOrLGdiZvvg2%2BcECL169vcuc6pPxMatPHrzen6%2FR4mHwQ%2BfJEhO1Ff0EwyHgaFzfAkkLZD%2BjwqyPNHQaUOo9axpydcFGTjAy3VDnjJysCABGVbpIo6F3Vh1EckrXezBTANYxiWGSIUY8jS%2FyofsKhx8DAFPQr31Tde0zFA0dsI1vIutuaZRM1BacCkm0R0TuQO0uZZphHVv5RSBlB%2BW8WXshhSRFBEJvxGVffAQJriNxiX3JnBUAe2k%2BAXwfy6hP%2BQGkp7z3Ty3kkdc%2F88XGmK5YcXWuMzjwDvyAK97sB6OPjiI%2BD%2BQeZfedAvbmtI7%2BNSRI0mzFOC0WPdlG7xFFtc03%2FG9Nt9ST897CueFFlXhcQzY5vNQMucW29PfNa4YScSYRscWrz15KoS2EbXrs6SAhOd6PfnHWoUQhxbMwj6auVw7sGqikTJTJ6ePnHNfHD6J3AEb%2FNCVDmlVp2M42g4xvCcUJbHAUBhfhWHKQDdklrkxI4vXyVJwgRW3%2BTBgpY5iRB42jAzyUJPp%2BHRNF8%2BRNl5Q6QGPjCfk%2FfDBjqkAacfmkppdJuaDnDcgH22SblsMFUMPbgXefDVYGChOhQXIFP0AZVh3ThkNV7dl8mUadCIEmlLsinssk%2FwdkkTQ5FOn%2FG%2FJFOslG2LDTNDtaLiJIdosg%2FBgI0HuJmRaTsGWi914uCbpBZzgVH9%2BGdWBlLxXJRBrgA3mcs8Qw1pEfT%2F6Ah83X9jtB8jGfHXCn6%2B9Yuwx8M9wNk7VegmrUVEVeWVjxML&X-Amz-Signature=476287a6852a3091eb5ffcaa6e9d866da1eabae86c6ae259b5c634b4c649a21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
