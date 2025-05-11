---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYJUZ5H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBbI6GRGl6LxKIKIJA0r3dK8BGvm0Pgsu2I8B6gPOcHEAiBMEQFNAMp58e%2Bio83HSqRBcqGjRpLLQCzRyebR7zmu2SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZY%2Fnl5Cy2iRDaqbKtwDZaBUabrpYrxQkrJvqCTxMFS1oLnidxn5L9zSNX2VCByph3umg%2FxzJA8nFpMRahgbie6U6liuhlhyv5qqh5INTEpHa7rGIphx8ggNd0e8LRH%2FsPRY%2FXjlE2GpFJtZ98gQ%2FQAHXo5%2Bj9LD%2BGGvoaiJl%2F2aOXi7HWYuG2vZCjOvDbAcYGtTBJytp%2BbeeiduVjblr7z0%2BpMEk7Qa4oK8XCtK8vD%2ByaGelukKuORgaDhgNQC8o7iMppFJvwLcrbDX4Un7feK%2FglmMkmUYpw3w50wLtynKbQ0p79VAIYlI4Z2CcwfUS9hzIYk4RXdApa3JKW0ISnGkQo%2FOd9Eg3Rgh6EEXdD24wBrcg1Lj2J1M0mh6V%2BQCeCVWcLhecsfO%2BsonjtPtMO0hnL4C3zeSmm84xFS5RM95xLZHtyb5DcAEfW1XDpXUZ2Y2kUyMr3k5LkZI1m%2FJeBM5BwhaAeGW71nYfFsLwv6Cf63MdZld2Y12wpdelL5V3NoYYWXIbuMLKUr0RT3KrsO0rn50Perlsc6bgoNox5hfBmS53QIxwYi5KNXqliYrzKRwpSe84iJ7TsHw5HQ0iPUWfEndUmLNkza%2F0LfEPI5W0RFgOrWjtJHlPJdJLAZTYyRerZG0gDx5YYkwhIqCwQY6pgGif2l%2F3N4q%2BkfsTekQ0JYEl%2FSkjaC7Do6vwAK0oNbaJt0RIZ5Hkbc6IRWuDOBbk2v5yYvU6pCqnWTY5G1xtcaJwjLkx%2F7XLZCb28D0fyXpma5LCLWnJjLgkbJZtsKBt4nk6I13cFJ8CHgKRH1UQI1dkOxvQDWqiFr8SmLC9o70GEKW7XBRJEyDmSeEIb4hRC5d4SFSQlbOjCzr4JyOJzzaPLyBD4cS&X-Amz-Signature=60d8a57e04568ec6d5b2edcb76b3f332b715dbdb4ce0a111f2bc36360843aba9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYJUZ5H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBbI6GRGl6LxKIKIJA0r3dK8BGvm0Pgsu2I8B6gPOcHEAiBMEQFNAMp58e%2Bio83HSqRBcqGjRpLLQCzRyebR7zmu2SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZY%2Fnl5Cy2iRDaqbKtwDZaBUabrpYrxQkrJvqCTxMFS1oLnidxn5L9zSNX2VCByph3umg%2FxzJA8nFpMRahgbie6U6liuhlhyv5qqh5INTEpHa7rGIphx8ggNd0e8LRH%2FsPRY%2FXjlE2GpFJtZ98gQ%2FQAHXo5%2Bj9LD%2BGGvoaiJl%2F2aOXi7HWYuG2vZCjOvDbAcYGtTBJytp%2BbeeiduVjblr7z0%2BpMEk7Qa4oK8XCtK8vD%2ByaGelukKuORgaDhgNQC8o7iMppFJvwLcrbDX4Un7feK%2FglmMkmUYpw3w50wLtynKbQ0p79VAIYlI4Z2CcwfUS9hzIYk4RXdApa3JKW0ISnGkQo%2FOd9Eg3Rgh6EEXdD24wBrcg1Lj2J1M0mh6V%2BQCeCVWcLhecsfO%2BsonjtPtMO0hnL4C3zeSmm84xFS5RM95xLZHtyb5DcAEfW1XDpXUZ2Y2kUyMr3k5LkZI1m%2FJeBM5BwhaAeGW71nYfFsLwv6Cf63MdZld2Y12wpdelL5V3NoYYWXIbuMLKUr0RT3KrsO0rn50Perlsc6bgoNox5hfBmS53QIxwYi5KNXqliYrzKRwpSe84iJ7TsHw5HQ0iPUWfEndUmLNkza%2F0LfEPI5W0RFgOrWjtJHlPJdJLAZTYyRerZG0gDx5YYkwhIqCwQY6pgGif2l%2F3N4q%2BkfsTekQ0JYEl%2FSkjaC7Do6vwAK0oNbaJt0RIZ5Hkbc6IRWuDOBbk2v5yYvU6pCqnWTY5G1xtcaJwjLkx%2F7XLZCb28D0fyXpma5LCLWnJjLgkbJZtsKBt4nk6I13cFJ8CHgKRH1UQI1dkOxvQDWqiFr8SmLC9o70GEKW7XBRJEyDmSeEIb4hRC5d4SFSQlbOjCzr4JyOJzzaPLyBD4cS&X-Amz-Signature=e652847f683513963aa1884ce7ccb34f6e60e79f455eaf56a0f2437aa18ec2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYJUZ5H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBbI6GRGl6LxKIKIJA0r3dK8BGvm0Pgsu2I8B6gPOcHEAiBMEQFNAMp58e%2Bio83HSqRBcqGjRpLLQCzRyebR7zmu2SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZY%2Fnl5Cy2iRDaqbKtwDZaBUabrpYrxQkrJvqCTxMFS1oLnidxn5L9zSNX2VCByph3umg%2FxzJA8nFpMRahgbie6U6liuhlhyv5qqh5INTEpHa7rGIphx8ggNd0e8LRH%2FsPRY%2FXjlE2GpFJtZ98gQ%2FQAHXo5%2Bj9LD%2BGGvoaiJl%2F2aOXi7HWYuG2vZCjOvDbAcYGtTBJytp%2BbeeiduVjblr7z0%2BpMEk7Qa4oK8XCtK8vD%2ByaGelukKuORgaDhgNQC8o7iMppFJvwLcrbDX4Un7feK%2FglmMkmUYpw3w50wLtynKbQ0p79VAIYlI4Z2CcwfUS9hzIYk4RXdApa3JKW0ISnGkQo%2FOd9Eg3Rgh6EEXdD24wBrcg1Lj2J1M0mh6V%2BQCeCVWcLhecsfO%2BsonjtPtMO0hnL4C3zeSmm84xFS5RM95xLZHtyb5DcAEfW1XDpXUZ2Y2kUyMr3k5LkZI1m%2FJeBM5BwhaAeGW71nYfFsLwv6Cf63MdZld2Y12wpdelL5V3NoYYWXIbuMLKUr0RT3KrsO0rn50Perlsc6bgoNox5hfBmS53QIxwYi5KNXqliYrzKRwpSe84iJ7TsHw5HQ0iPUWfEndUmLNkza%2F0LfEPI5W0RFgOrWjtJHlPJdJLAZTYyRerZG0gDx5YYkwhIqCwQY6pgGif2l%2F3N4q%2BkfsTekQ0JYEl%2FSkjaC7Do6vwAK0oNbaJt0RIZ5Hkbc6IRWuDOBbk2v5yYvU6pCqnWTY5G1xtcaJwjLkx%2F7XLZCb28D0fyXpma5LCLWnJjLgkbJZtsKBt4nk6I13cFJ8CHgKRH1UQI1dkOxvQDWqiFr8SmLC9o70GEKW7XBRJEyDmSeEIb4hRC5d4SFSQlbOjCzr4JyOJzzaPLyBD4cS&X-Amz-Signature=fc76466e75c81e20231c0a65efbc0f98d49a2a55566296059afff6b337347619&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SMELR4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIE9D%2Ft7lPbiji7MqRhOnAAN3Hl%2FxXfEYZatEmPvX96nOAiAnFG%2B6IheeiGRuDjakOXNr8L0kZIn0xUyAiPLzFJ%2FreyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXyswkPOZeq7XKwDyKtwDM8Q4eaEj%2B%2BQWeHs9ctkLTYfqTKiXY5B9IuYlSS2bKcv2J2M7K%2FfJkvwwfHMV8nAKY4eXzcXcZwDMaBm%2FhIBXatXbV%2FdpsTc%2BuTPUYOtkOLkXzQcrpugdrVxnGWjbR1RlK9JgeszewpDXM2b%2B1tviDI%2F6HaTwLpKLfMUd%2BJuCwJnhd9yyKGG7LV7wuBXqonN9a4N3ajnIoBYwpn%2FoTGuL7F9rpfuPgN98ELvZB%2FX7eXDuKgVFJDSeVZHzEQ3HEQHIfP4XxJuyv2P96aK3EfrAmQ%2Bd9SHTFAtISp1F8p6fs4U%2Fvyx1VnaZPwzgZ6elz5gc5q%2FeR3CS6IgxszqDukEzlW86QZm3kvMWcHPt1Ckg%2Bi%2BPBgNF1qNcETLB0zjcCTIsUpvOsSjy23i37HnjR1hzrGhMj3l58rfzmepeFMeujW6rajXWLRu5zj2ad%2FL4ty8tu2uI9bac8NK9rH57QGaSi0jOjly3rixt33WO2HooTdYd2giNnbatcnJyZmiJ0Zm9%2FncVQNOaxjeJez9Dvf24EXmORZPRngLLS1bPU0lcnO1g9QVzGQh0Np5TN1T8g1E4Q%2Fa2%2FveCb88%2FZRgPci9%2BHq1M%2FVHA13cYAQtyrrJGinaRidWMbMn%2FEOKQj0YwrtuCwQY6pgF5N3%2Fw71%2FnKkYE0%2FbIlcU%2Bm0Kj0A6Rz7bB94xR3T8dHHci%2BiqvyLrRNZdCoJjhBXyJCZqTyBwvHToDiqOh%2FneX7xSYya57qg%2BzjxqGyqjSX7JrwCOL%2FEd8xqagqC3M6rWQD5TwHilm7g4OQnuqjUEj9JsvpW6SKNnuvy4OWMi7jdNeZ9pvwxAGBzomfHWa%2BAea4b02VQm%2BtzmyUqvem%2FM5EhOwFpn8&X-Amz-Signature=3ec43374538146ae0613e05ecf72cb40d111078dbfb8251de5889c0622b586d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46L45QG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDekKMtLOihgRRaI4aREDqhuISkW04m%2FETFlP32kWkLgAIhALoEdvXXFb9K3d%2B6tbQV2PDj5H1g2FEd2Y94EJ9RL6vHKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDEpz6FvwYQdLCaYkq3AMMfaiZxu6wNug%2B0SAek%2F%2FQ9oF%2Br1uzXMEATBcex7YA%2FVpDbjmNN5Tu8RzPvMT2zx4Co0BqJFuEIwyvuLybem70BtE0BjmFCRjbkd44VbdffuCLhHYZyzH8IJMUh%2FQrTsdEkJLV9hQDeiJpYY7p%2Bf3wBqzqo%2FJuvai5zFtaO9wRC38KNEMggpYdfhdH%2BPq2ufcLhruBYqo9aD9RAdwyDspqxWC24BJ1mXK9aNQfYnBYlx1xtQ0Ho6TtMo0c7PHV948ylIOaDztm3yVSzcpbHOlKqc%2F2ZLcIiiIfaHVmSQBM9BRHimry2l699NgARu0F49fXDW0n5RdwWqfnYc1k2%2F86LQ%2FL6KHwrYYMwOC5ekny9sAtY6p6OqL0WkjYkQJWbpxCfwxf%2B3jc5ZUzX5SG26nwNNsUYNJ3JHrkDZFkvCSwxDxizvlpEW4u02Oyl0F%2ByqBE%2FIZ92S0TRqLV9k%2F4Y9%2FV6y9%2F3LRvZ4jXRAc%2FhmpfRgyY3uCKOde7YwoPLfJbv0OeLnQ9%2BJkmYEq88vHYZ4HbBKdF%2F77Uxy0egiStTlq46YqyOcYOG3SdDr0LPqQ2dZCN9FwtsYGYaMqCAVGNzpfEG1djOEluPY8WMQosRt%2BrqjjaWcrj%2FhY6gLDMEjDF2oLBBjqkAYbwAiPpI%2BdB%2BUp4Clk1NQ9g%2F%2Fx3PQ8DW6N907uYRAKC2Aifdaid%2BdKcyJ%2FyvGoTxt4X1Te4GJ%2F6bNywdEL1OdeN%2FPS%2BqfvL%2FFVbzRUa8Ef1bH7CBlu1hCgtZxLxuqELCjhzj%2FT1UiDbPhFepGb293fuMra%2Fq0xkTsXTlnQIWDaJMQjBbUhXfQg1TdKpSHVSWxWandKw6SeqG%2BaN8sH3LHstjh07&X-Amz-Signature=f994b842ab6096f23dc1e16da08e4d010a83e0f87d07877311387c5b8e57ed82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYJUZ5H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBbI6GRGl6LxKIKIJA0r3dK8BGvm0Pgsu2I8B6gPOcHEAiBMEQFNAMp58e%2Bio83HSqRBcqGjRpLLQCzRyebR7zmu2SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZY%2Fnl5Cy2iRDaqbKtwDZaBUabrpYrxQkrJvqCTxMFS1oLnidxn5L9zSNX2VCByph3umg%2FxzJA8nFpMRahgbie6U6liuhlhyv5qqh5INTEpHa7rGIphx8ggNd0e8LRH%2FsPRY%2FXjlE2GpFJtZ98gQ%2FQAHXo5%2Bj9LD%2BGGvoaiJl%2F2aOXi7HWYuG2vZCjOvDbAcYGtTBJytp%2BbeeiduVjblr7z0%2BpMEk7Qa4oK8XCtK8vD%2ByaGelukKuORgaDhgNQC8o7iMppFJvwLcrbDX4Un7feK%2FglmMkmUYpw3w50wLtynKbQ0p79VAIYlI4Z2CcwfUS9hzIYk4RXdApa3JKW0ISnGkQo%2FOd9Eg3Rgh6EEXdD24wBrcg1Lj2J1M0mh6V%2BQCeCVWcLhecsfO%2BsonjtPtMO0hnL4C3zeSmm84xFS5RM95xLZHtyb5DcAEfW1XDpXUZ2Y2kUyMr3k5LkZI1m%2FJeBM5BwhaAeGW71nYfFsLwv6Cf63MdZld2Y12wpdelL5V3NoYYWXIbuMLKUr0RT3KrsO0rn50Perlsc6bgoNox5hfBmS53QIxwYi5KNXqliYrzKRwpSe84iJ7TsHw5HQ0iPUWfEndUmLNkza%2F0LfEPI5W0RFgOrWjtJHlPJdJLAZTYyRerZG0gDx5YYkwhIqCwQY6pgGif2l%2F3N4q%2BkfsTekQ0JYEl%2FSkjaC7Do6vwAK0oNbaJt0RIZ5Hkbc6IRWuDOBbk2v5yYvU6pCqnWTY5G1xtcaJwjLkx%2F7XLZCb28D0fyXpma5LCLWnJjLgkbJZtsKBt4nk6I13cFJ8CHgKRH1UQI1dkOxvQDWqiFr8SmLC9o70GEKW7XBRJEyDmSeEIb4hRC5d4SFSQlbOjCzr4JyOJzzaPLyBD4cS&X-Amz-Signature=487440832079b60cc254b1797e479a0b888afefa423932ae77f4ab1003fe545b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
