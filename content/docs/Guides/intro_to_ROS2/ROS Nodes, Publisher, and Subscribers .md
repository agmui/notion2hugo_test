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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=bc3fb6036f4665b12f963ce8f7ff92ee5ce844badb13cfa32939c41e5070edaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=ec097102d702396c537934f3c66d2d6c103385f1b931a07d3db245e16b78e6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=6040f918ae13b61a79d1d6260e92b4843c4e851edd8bd9a40bca683f82755ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=18ba24708b46dd433ca3fa77db63daffab48332794c18c529b9bcb57963f8186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=7fdaa3646b53cf287fb54ed94b969c50a434de0c373c17c8ce507edb0672c6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=b4b08cf481f68fb5225633e9b6546eaa818ce1792a697b12eda62fc3041dd5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=abc7ba1f456001815dd04afd6269a1569f3a4d1d2f859dcc17819f98729a4a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECBUHL7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCEu0%2BYBrji0LxRX5CFbzYI4ulw%2FsaScOVDJfkz3nDf5AIgbD%2B3WNgeucO2PORiYQO5nRe%2B5GM7yXAPOphsQ2CtAZ4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN8lHikDIX5Kqz51uyrcA%2B5v%2F0lcVa3vUYstxqwnPa8w5BjpfUR4GN04ctw2lpmdAP%2FNUy3f7DHA8%2Fuq8fUhRhaBN1JG7PpNJSQHRbZjwyxdyi7pL760ISjfDB%2F6uvQJ%2B7P7rNuiXJaHhMngLGCQ0PblD50cv0%2BFb9tuzMs6iUXVc2E%2B7OVUQEQJ7E1ebNjvqAFBGuHYLSZaL4E7Lb8LsBpOmEo3UwvUBFj91fynlqY8PAiA2RkqC7Jv74CmcyxRgU2rA%2BkIF8MA%2F1Z3eJOWiTbQu2hnNQsk%2FFFl9eBravHWXcQ99ou4VlgYXntzzWrG4UiLNWnswI5VnVuBv0xiNwC8oisc7n8Ucb7WRum%2BcclAFSRxGivqha39Ih88aZxMvMa%2FCIYFbZRXJDTbHqO%2FDSvBCiRDmFdnX1GKxCBYhW7j5O3%2BysJId5IaeuOYaezlvulHn6WsT5OXMTtBQTfTNeRFV4txB5l4GCozmzjfM5oM%2F%2FWMe2d3K08aU8iXSzA%2FoswJ2KIVDtTj1VmyfIVvcqWT6FcUSEG4v6%2Fftz0kb%2BICdIBJA%2BxmMXtLBs1%2FNqyBjF6iH1n6C%2BzHd8CWdnSuOKpk2sCWK543%2FPUZuj0CvDKxu6%2B0ueT8I0Aq1x%2FnhAqIN6lJzzidUIs4KLRPMKuI08MGOqUBEvy3Miw2Uqm5kveQ1TUog845eCQBc21Ic0qK7yPJzNXLM6HdHaVknm20QZ%2BTlMeLaG4a%2FX1ivvDzRvTtr5O3kvS8%2BpZ6Y8oI12Xks66qQ%2B5fhteY9WDFOeX2dnHkEfo7ALRMwZN3bgajkmpBUnFz3u8SNwumMs4BBWeQ81ShJeTX3DvNfnPWQGWKMCwtcPop8BfDLadO%2Fbhz2VbRSmLn7qBBVU1Y&X-Amz-Signature=ca55561804a3747ebcf6f45494eb99335c0a00655564de5d63a7768ac9c86359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
