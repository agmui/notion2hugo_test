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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=0486be2187afb394d58ba38bf31df83b9344f44ff295d17c141b40d5286e06c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=40639ee638541a6491637286789d32fbc980c4798435b790f85baff5982abb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=b26aa395c99086941336322bd068fd0c3b5f7021e652c3fc279c47eb94e5f03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=a7b8c3950b993a5ee9be995073548feda88b959f2cdc47416b7896f010725f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=729594d8d33f8e35910a7a673898e091ee5b39c45c45c593c96bb6ca86dad8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=e1a807098c2ca8a8d1a6c9def8087e795cef08baba8203d1299589ea90ce6dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=a172669468adaa8fda8cbf4c1e9d12739cd57258578af23ef452b1909241098a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5IPW7A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F5eBq3gCSYMJXrssECihe%2FJqYBmvHz3iZxV%2BOQ9bzAIgUj%2BOZgJJLWEJVoL53KQmpCuahn1pFtrw7%2F9ueTqmx%2BYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD66M3DNi%2BwrKW3ASrcA7SQa%2F%2Bt%2BjMIVpRerlfuTysRIe2TjGDB9PrBcgqQG9u5xm5SWLtiZnP5YNGCwFCTPC9dVk9b%2BdaztQi5rWsr72lgJUwQp%2FconVuAmtAGVUnXi%2FnW2Ur0oa6BvtvAUyDvcER1er8LNcrtbDspmBcARHK4aKKgPLyAI9gSeGWtVFMiE94OLnD%2BawB9LENZsQesCzcQ0aAb0lTsuS4bg9sFwtd%2FtzPj%2BbsO%2F1RzlVivF0n9ruOGKTOsf4vfn8ZS0xCvFfO53XASyxQmssyb%2F3NrZ28ymGK8ilyD9jE4PdK79xz6QVXwuBRJm%2BAd8m90Zson%2Fir4BaNm0%2FnikAgpaDRm1JeFV5M6izbhw7Kw%2F4x7hqDb3c%2BPQttjsGzMAJ8Ovgnhq0n4J3cr3HHV%2BmT%2F1rj0EsywU5CNDHd8IIbhStblQlF%2FYn9LZnF8tfcmIe0Cz%2FGdg1XlqEwyz8VvpXRSZYbIB79z%2F7DQLhKI9aXJO0F9HW9yvwEYnVUZaLZ%2Bw5B9DalhHj4JYrA09cd34ZnP4RX%2FG5QfBcPeJ4NIlmmKde4X4%2F%2FAgw0clA9MUHb60a%2BQPGlTpS2SuIuSRIJoQ3hHVUrqpXTahLQ8XVv%2BUWmJBfSjuABXRmtHYJCVG%2FGrIfRCMLCe5cQGOqUBGoTqlJ6V36JSMms9K7C7Ek6A9mvEENK%2Ff%2BtY8oJZOLSFq1zx2KnWSg7M8wX8BkdYKXvr7AOJVG1JYus5hcmoBOQRlI2paMyvGGSM%2F9fhAUQ87o0esxyJleh6u%2B46bjdBJpUkkxnDjcz9EhdmYBwn961vruf%2FPIOM7vLWA3oMtXCUQUtizb26%2BHqcsIDnQWG9ykp5q5Xsda6zo75w2VUuZ9WTQ4Bc&X-Amz-Signature=cab6ef68c2173a579ab9acb1671115b57302741fed97cc2f1fffa335065a2a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
