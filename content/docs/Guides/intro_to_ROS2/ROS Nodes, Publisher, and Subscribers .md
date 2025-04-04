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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=bcd3f4ae81bc3a924c333c8c1a5b0181a4aacfc487ece9f61bdd6132f37d9f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=cd82878480b01fb3afb2cf989e6899c0a8a45880e6d57d58c596d0892bfe1ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=ae211c81f18942a09659643c305ecd5d1ee0b3bff7a878f3a21b64732127bdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=7e658584a6a4d71bc821eee3fc66f580d9cefe9ea48fa0614db3c8c0f1abac1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=90bcf2a844a490e86ff0af7856ee3d5ef70676e082557b419856c14ff147cb10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=64d2e32b596136b2f5332926f57006ba8b59b3fe3ebf38699d8f3334ce1b0b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=fa495ea6237ca13f7daa7dfac227e50cc8bc891ea38c38f15866bd7f89c4a445&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVAE4QJ4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoGEL6LYd49DjYRIWramCsKDkqIZrJdirMD%2FoYRb0CbAIgNYmrt%2F7Mnyj08WC7ClGe9AuYgKPl6em2x%2BRvBZk1dwEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF3WNyYJyz5a8%2F5uHyrcA2nDY4v%2FXw2Css2BZalmA4qHLi1lmY9XIZzlNKmn4Vco7FKBR5p6RQ7qTwBK9XkyoKjGsdnpOP3l%2BaKkGn4JVvWwg8OsbhgRv3h8bSgOYUuUpuLE1Fl8r2rQ7OJEtFZ5MTCgyPWdnyJSCx963VBA1VxvLkCA3aF0jHjP0jGCIREOR31iips%2Bk9G0UuY0xg%2FIwQAbhZPJwhE%2BHShpBCDL9%2F3AqF7lGtFF%2FQ%2FgNkUxtOw4suY%2F5KWA%2Fhv2CXWOmBp1lJ8Qfg1f7M4vFyYCb72kbifI5WQJmmIEd%2FCa9XIRqHWsO1W2oYMxnSgB1qsw3pKINMFbZv%2B%2FUZIwgZqwuYVCoVtIqbBGA%2FIdfDNGibKF9usuXmiFYKtN%2FCB9QqDdtkvnOGi6lBwWQG1HwqY9%2Fzr4fMFa9qvBRfdJIFPkSAWtGk%2F6SRoq8wu25jQ1L00b7zlY0cyLSehpZibh1mpnQCeCvVEsM864SIYVCzfpJYpvPeiIsiDBFs9%2F5IoQaTRetZyQgnq%2BSkMvTMb%2BMwFmL1GsKd1Y0YVP9CeRG1cdKqnCWWeIn6k4OCe6qbzC5kZXAYK53l3C%2BD%2BXo%2BDc03dIJxX2Lo%2BnphhoriBYE5NfyIAvVbgAqQrpq919UlqAshHkMN%2B8wb8GOqUBL2krMOmhB9sISse630lsvhMS%2BUq23ZlGMh4hdpLpOAUua1ebnH5mrWtUZu8J3aeJPizSLS72vIYgZPINR5wKAYQo3os8tZrPGNZ1C8CcgGqeft4W29%2BC1pe%2BZYn24Kd1xFAKMD1LDTh1ziuPiA6B6KhUBqVmbU3vqTiz79neWzWIVrHd192Xo3e3%2FG%2Fc%2FEU9Y0RJdam94nFI2qqbaiRKcysCrTtX&X-Amz-Signature=f7dc98cbc38ec83c82c425d28eacbae05f5787849c913fd8303b59d2ce37f93f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
