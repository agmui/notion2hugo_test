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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=e887cb0defb25333900d7682c747648742cacc683be22a6c111de79bd669c406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=61d6b37eac91faaba829aa86aa5fea75db98137bc2953e7378e6fb181016c857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=aea0e3dc2ddaa62a6af9bc1361ddcc032584c9c4c132f6c125ae48cebf6bfb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=15781ee9e1e0ff823e2e9255abdc2d1268dc567b2a03b8bb204e3cdc3da03875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=59afe4bee0185c542a8ec0385a79660b0ac750e18c9610d35fb7f94f690567e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=8a2f37b4cc3531668f23fd902932df2a007c38ec6312ac89614e86ff1e029662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=6b5d0f39c009cd3278cd3e6246676f97cd0119fbf5cd8dd861750a99f870c302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTA2DOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD1S68a0OfzFK5NP0ZdOEk9Zz85%2FM0%2FDRFL%2F02zeTzycgIhAOzFE5K5hXb0dl%2BUIVWg2Cz7Q6baO8JIWvncBcpwoljYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx%2BxQKxqofRgxprP6sq3ANnxDxfdDQiJfd%2BxqMfXKHpvv4Vh49lHok52OoiwRHqYOkKf9770GFfoM7TKsQSuwwLH%2Flvm2jus2Veg4WFQIHDAbv1NawIsc6VxnVlV3zpKdmDvaOhTo6HRaQcJV7RajO7Jj1%2FFh0vsltqAC7FNskP5j8KnaB7tJffuhW3ct3ngIT9oOTaxjOyT5WfuFfTqHABcBJLt423nRUKwiana7KMulfZWoM3RMSmKDjwuTohkH4lBCB3aEMAIxOoPuJXyfjl0T9geZr6869JqAmpYo%2FYoKCPH94WsVaKdSqbhuxkiO7LEx9xmkYy1BiUVfuK7UImtnBA6I2YVSI5nmypwpXJxTvzJm3VG%2B69WAciu5Y6R4PJjS1DfxzxydjomSUwWCVba10XBSCIjlIPlP3HymyH6qYhp3G%2Fhhcx8cYnHKXKjrgfFtMlWl3ioVSQl23DWUZf1fitLcUO2n9HqItQz0K8YYswo9Q0lRatCgSgB0zo3CVQ4M46FJY%2BEi1fEtAPQ%2BeWzN98ZGjtVbQFVHssS6lFjgsUNFzRa05gzBd1wIH7QfJEHOnMTVgVXDo1SErD6%2FpgQ83xKAOZTdseMNQFXSte6XR%2BCi%2FjOwzCG2a1MriV3CnF53ooqkKKqKYyPTDV8JDEBjqkARCCSExOVmQkhyC%2F8C5hIrayp5H1c1DcPpBBTFU%2Bsh48OmQGZIvMN%2F5aX%2Fq2qDGHQDimdnKgeJd%2BQ4eP%2B4UieqNvJZUTAMTX%2FYLl3vFGnPoVYVVqIhFNHjPqcSrFFbEkvRChywDtDUdTp3dQpOR%2BQX0QzF4Nygw0JN8GAkBComgrnSyVf3pbNQoHuKfTmN%2FOotoC%2BqOe%2BX2fqMyd4NxIz21kVWeT&X-Amz-Signature=2467fc6019ab1a00e43a498782f4ce87f214dc386b4849528b4e2350f4679a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
