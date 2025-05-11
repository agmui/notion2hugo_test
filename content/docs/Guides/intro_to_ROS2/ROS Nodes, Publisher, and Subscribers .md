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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=3a3ac9aad428cf52958025ee6ee9151be0f3e626869e86ae70baf7a9ad178ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=5d6ab14c1b1c09fbdbfa1063c58f36a9bb6ea78ebaf3b6ce9e60db8b2c0314da&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=64c6143c976b2745ef7f8f6bc216c3430a61d30b3c4ace8fa31fe32f0f61152f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=10c81c8953ea5bad25e550d4daefc6842dcbb609cb559df17f9d248611135da7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=6d16c1c2d8a63129256f386c9f48f8380f3f746099cfe6550efada3b935f0314&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=5d1712e0a9b14cc51651b634935cc7950e1f2ada627dd3a806d60296a8ed4d08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=86a1a273c7d965c9ac67347a8b206000ec40f95bb01bd54d2956f56339663a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KPFR2J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH%2BCFuW%2F%2BSkwnBSCOjo15u3AWTlrn6eISlApsQRoq38lAiAG6PYve8x65tFrGQzjIevvg%2BTn0wBi5onDOyfeZS0auSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2CunF3nQPT1XkDsHKtwDknZW1rSNS%2BR5xB%2Bg4Y0o4Ijj3Z0WiunYV%2FGOH3BsaOCceXm7D89cOs0ln6n5lBLMajfmQeZ%2FZ1YJi9PvAbOiqbflInu0lGxrgBMUKq6ZKmShHI2G7vnkjwaICmdp9a4jKB%2B%2FfBTXL%2BJ0mqKo3RDkoH4hNJcQcFEqbcZ39cH7Y2W%2FICh%2BegLqy%2FBu8%2BOPsV0Bup4XsuvTWddbYWkc5VNyinq8spGUK7I9PZc3BZN09osdpbIo6N9qFhZa6euBWZV6WCypRAavVbD78RTtOKaPVAHWH5%2FTKltftoyWkcVDtb91vurUNoL84YVy4ohk140zM5zU75c8%2F8ufJZaCqq%2FQLM8OQqujL7S%2BLsruhcMa9PbzLzY1tgglMIxtt11bMxwvJI8PCZ8OS3DAbAHURxn8pksBq5FN%2FP4HOAMnfsBwqwn1DMudxa2zFRS6uL%2BxtJmku5xBhDfCOhck%2FW1hTChfMm%2B074f%2BsH9K4dBxsUdbRkbrKezIBhw%2FwgwHBG7LwE8AHHr7H1x6nnp1pKC9gMZsk75QAf2bOLQw7UJ6NWXuOtAqJ0l2Z7xj5a0eaMyFXDKK4V8dZP%2FFaU67m%2Bf%2FBEuUVqMeX75oqB%2BudAf06h4pPQtssV%2BpUS6zbrUy05kwxNOEwQY6pgE3qgTZTvCrF0rHZ05oxfFdbJukPLt2d05lqQBjyYIjIh%2B2Yf%2BHbWFedX2%2BfKKg83de6lQ1tEmWwMq5wUIRxl4J2SgXLseH1ZNVNi%2BLGpMsL1hc34FU3Ur7sCj74KWZxYxTVyGROyL6HFdxsQJ9IJdPgG88YDWrQUQBc%2FVYUKwZivz2GCpFbUsR8%2BsfloKTpYpCAaHxwXVNDOptOVYpqyPUig33c5wi&X-Amz-Signature=1b53a52382834e95418a2ee455b0fd3ba91a56f1572c078a6b84e926dbfdb94d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
