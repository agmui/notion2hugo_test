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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=288621f0e66af19253ed7ecb26b0c34e3005db6d509c2f546b1da34cd5a8fa96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=ea0c52f33fb237a95f0451f022b7fecde100fe8af14222beed326928212a0139&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=2c4c7239f8bf8d88aefcbaf0ecc44a270c09508899c25b54b078361fa6823940&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=ba19a6b2a4861d9c7a3efba8fcdba7bed740532691a72bd8bac9be4923427a92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=0d03bfdeced6d2da2c61ff974ff7501ed53520397414a040d4ae167b34b831e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=d3e364e7b375c8b6c06c5bf7691fa6e62e37160e4080e9dad73a1086cf33cbc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=9513481981b2cb71702fc4c6efc3fb12818b6b0b2c90bc91be37617f9fa17f91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YQ2J4F2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvIxY%2FI0RUdx69%2FPP%2FmytZeHUB6LtfGnwMa3rr6BwQggIhAIE0X7aAofqMKGMNqpwWSMQ0JcfsWfW7bPT1KaPz6lQIKv8DCF4QABoMNjM3NDIzMTgzODA1IgxPTOrig3Zx7vCHY0Eq3AMHCwNP7Qiml3K8RaUiO2JPqwoe7TUtY9pwgovVb5bzoeup0Y64yuJY0zeSwVAFPf9jH5pa%2FdXXhDWKhOVUKmrgvPhjh40YjjWtJDdty4lyh%2Fd7KdkkKQ6wQas%2FpMwTNt3NXHeodaILfmtJbcaJjiVnD92j4mHDMPh46q89Q0rUk8yEnHejosSvRa6xMeFYnBUgX0PEKx7ByAmPwr5i20iyrE47zCfTi%2FOFX%2Bj0rkvq9bHLj%2BeJYHIPClgnk7APRL%2Bp0ypseB8V0DCVjBSV7xpIGHmozuRmekPmIxU6i%2BfSI1ArdVPvlwoCoiXOeEVUsdfalxJWjnN%2FxNMwJrN8cU4Mk4GWFT4VdgKi2lfCz%2BNBfopeaRH89R%2BXxxJgJ6H%2BG8bbO00AM24fzGgQiu5X0vdJbEG%2F5VZQh5U4SwhEz0zypE4sU7qy6whRiRWGeYl%2BQoSQL6XmToabofdBgaSFXsnGYRFWAaxPrwjlWZNEL%2BnEsA249iNSxt4XHSRpWBQF%2FmSdJuqpA%2B6QBeLX8eyvy3XZtl2yAqz5KDbOiFADwbrUaA6UejAak0BXeMB2e0JVAGnfNc%2FrnbW%2F5afFBf5BY3fZDx8FcmyKpPx4%2BZrF8joVgsRlO4InwyyJ8p0EBDCTnc%2B%2FBjqkAfd4J%2BY9uon8F%2Bvaa58gmAXTS3V1CXYurPMXjllB%2FmKBCLLLLAOKeA4YBfgwy04HHBUc7etRIdo4mCYLJf4c7D8jfKcKRKqKDSCBwRaJSyFX1Wb9H44X%2BqF1I5bF1fbTWXj64%2Fo4C0HU6CXNh%2BZG%2FohoHHVBCs54f9YO6GZZwtST7VOva3yutlDg3JwzKgOTdfiRJs61F2Rbvmhwvq95leMShz8E&X-Amz-Signature=6d96de7f98a3a0c553921bb7c640a522b04f1ee4740d603ea8f4f8669df41966&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
