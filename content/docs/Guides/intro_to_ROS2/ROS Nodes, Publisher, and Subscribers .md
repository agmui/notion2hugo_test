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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=0349daa40f4174439c4fd465e1e82eb053f251fa455e7176929635683039317d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=d56fdd247e1e4be437a04444cabc56e92996649db9eb00e331b4a737285e33f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=ffb23dab0c610d19394540d1bab13a9edaf440c4d516a1ab951a80450d1fae86&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=f77164c7078198c87aea54c6ca951388f75a30f7662f31a2c516bd4c09acaf26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=778d12cd749c40c38d7fb95e160d5c9c4eab03bca2ee029e5f901b875ca62afb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=900b1ccad9ca99f98fd037794e6c9f6ed6dcc1698ea7a213cc33110de4ed376b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=f01c1a54d47282130b0651e55d56e732bdc36234d4ae430beccac3dfa542e820&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6BZNJJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjEkLZYbbkcQcaMEk81%2B9S%2FhNXG2svD53SmDBXb5flAwIhAPAGAdZ4Qo%2BamB%2BMrsGJR2faCetzIWa%2BmNA1BGA8TBnQKv8DCC4QABoMNjM3NDIzMTgzODA1Igxjbnm3LHtZIM%2FS1Dwq3AMGHo6uTcLPl7u%2FIEAaVdUvhL%2BOH2IR3P6QIvViju9f9NoYHe2iqE8F9ewa50JJ0Dn3imPkLRYs%2BUmeXlwZHb2TS4EkJqZW9A%2BqOjEKujlRZtkoOfE%2B631Lkb6jDvWlqwyw%2FN8b4kk3DlgEC4DhAWyDAUY0x8DgKfWoOZYi8wY7aTPns1nDJohNaC9uqKMMDg8KnI0W8jpdNgqpcM2M5hkYqVnb51qySlJCJqaEP8wPDP97Rs75eYalH5O2papvmQAmxR8grxAB85gVlUcPw2ORzWTlRqKLkYlOzhOEZCtl5CriSlREZH2lU3S%2BYrGBtKRkXvd6ESmhzvfBZMdJBZxVmTGURuHcz8kQY6gLKkEWzoEIgjv7lWdDNpiO4CaG6CdyOM5yxNbYdMTunAIBxbuWQN3YxlPkI%2FzD%2BaC%2BE3Z4tpmG%2BREJHj020OB70ycOyjHkCZr6ts2PTzJPK5vZm3o8bBi%2FLkHf3DuZ3A3ko51%2FNnUve85mM0btRoXnB5rQRnUXR9zNP1aP4qNrnK2nMcEnpOjqrCdHBj95kF9QUQz3HuzHO1nAxfoiODLbjzxos2HfqHEsP8A3DjFyoyWWHrG4YcCtAglE9Y600bWa%2BhCX2eBV%2BBQalBQ3Ivo01jC45OLABjqkAcuVcOijc44RH9Lj18UzVKvOrUzvy3%2BVDvvKx32ymYwIcO7oS6T%2FXJJ6u3HIVRKXXQ%2Fj0egh1dXuWeqoqoM3nk4U9ZYvVtjyJnt%2B8TyLFcR%2FCtbQjKtkklSlPmes3aInnj8PceV9I56q43yCowT9z6YbVbkkA%2BCZrTFFaR9Ii6BjHKzOBNleFx0ZEyUsFwL0JL8a%2FxmZq6b%2BhrlYZptY578zbpC0&X-Amz-Signature=16ea1ef3e2000ec29b8abf8d7f4b180bcb41ad038a0bc2115ada20851a47bf30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
