---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYVZ6BU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBUUyVRx0vxXFuGi6SVW607Hm%2Fqov9jDIvxJ%2B%2BVlFE%2FdAiA%2F3poeF%2F705S%2Br8lgaFEoF6UZhyomO4v9OfGrE1HzFUiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLbbF%2FJEdwNFgOVSRKtwDKWbwpgbH7Vx8wFW4o4V7lNPhjzfUPRC059TebGxwonzFV%2BSdN1od60whPUoKLtWVPyrBez2xQTuOpHayy6tZZAwNLU64WW%2B04nekqn8Bgl166wJYsLlQ7sZ9ZdX4nNy2%2BLFi9gh4WNsKmadwyZ2QntHepkV7qakkRa%2Fg4skCn9eEf%2BSXcFvxJYl2N8xnKmMDLVphZ9pOm5pVOCF1iIQGZDxXm5a0ylHTrbdCGjIF0rUStE1nL5Dny%2FLA8VMZNmTXaVvWLhIIi08f4nLjYxMDQXzktmkfqGuJ4F%2FLzcPU0rmDX7ugJwieNCyq5H2VGqn%2Fhrn20mykCo9rTJvbe18uNgA4HYJYMASLjQBjLTP6LuYfA%2BybtVbBKtrh1LjItw6oQeNUp%2FReI4Xpq97YwR9A1qULSmpA48HMo%2FGbXO9QoOUxiRf1AQUP18MoHFmskt30PDCxJJWQKDUMzo2VthoIgl7kUrTPquysZvjI2hK%2Bqwh2R3CtDk7VKo%2BuNiZHkJHrB18NNNw89%2BQau7WN3Ts4qtLGx9PpSL4P6TVIdBmB%2Fs1KfQyjSqmr2r2wvgceJL4TF%2BCxpFQ0OqJHKrgpMFNPrpl6RlrVFr2VX59BaA%2BZcNcwtl4e9cFcDcyYd1Awg7rTvQY6pgHWoA4YVmbOxgDyyls7w2lEpp8b2LTXYrp4FmNZWnFpoRqJkrmQ1RlNywyEttJ8Y4nM4E0w%2BEipdyQ9sabVo%2BFND5iIjAfx%2FV7%2FExddgsDmQFQzgQaX4fON5eZIkdlFDBsy1vnRjvIMyaFFnpwbSc5qXQw6sLqzb0ENFxZfHxJ4G4Q55xYXmnw%2B7I5IOd8BGxd0XhF9uvJyycLG4ahSheY4OekM1OTc&X-Amz-Signature=0834339cf615abe671aedf3ead5746fff93feff3a80b1a9c58a073377a7445ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYVZ6BU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBUUyVRx0vxXFuGi6SVW607Hm%2Fqov9jDIvxJ%2B%2BVlFE%2FdAiA%2F3poeF%2F705S%2Br8lgaFEoF6UZhyomO4v9OfGrE1HzFUiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLbbF%2FJEdwNFgOVSRKtwDKWbwpgbH7Vx8wFW4o4V7lNPhjzfUPRC059TebGxwonzFV%2BSdN1od60whPUoKLtWVPyrBez2xQTuOpHayy6tZZAwNLU64WW%2B04nekqn8Bgl166wJYsLlQ7sZ9ZdX4nNy2%2BLFi9gh4WNsKmadwyZ2QntHepkV7qakkRa%2Fg4skCn9eEf%2BSXcFvxJYl2N8xnKmMDLVphZ9pOm5pVOCF1iIQGZDxXm5a0ylHTrbdCGjIF0rUStE1nL5Dny%2FLA8VMZNmTXaVvWLhIIi08f4nLjYxMDQXzktmkfqGuJ4F%2FLzcPU0rmDX7ugJwieNCyq5H2VGqn%2Fhrn20mykCo9rTJvbe18uNgA4HYJYMASLjQBjLTP6LuYfA%2BybtVbBKtrh1LjItw6oQeNUp%2FReI4Xpq97YwR9A1qULSmpA48HMo%2FGbXO9QoOUxiRf1AQUP18MoHFmskt30PDCxJJWQKDUMzo2VthoIgl7kUrTPquysZvjI2hK%2Bqwh2R3CtDk7VKo%2BuNiZHkJHrB18NNNw89%2BQau7WN3Ts4qtLGx9PpSL4P6TVIdBmB%2Fs1KfQyjSqmr2r2wvgceJL4TF%2BCxpFQ0OqJHKrgpMFNPrpl6RlrVFr2VX59BaA%2BZcNcwtl4e9cFcDcyYd1Awg7rTvQY6pgHWoA4YVmbOxgDyyls7w2lEpp8b2LTXYrp4FmNZWnFpoRqJkrmQ1RlNywyEttJ8Y4nM4E0w%2BEipdyQ9sabVo%2BFND5iIjAfx%2FV7%2FExddgsDmQFQzgQaX4fON5eZIkdlFDBsy1vnRjvIMyaFFnpwbSc5qXQw6sLqzb0ENFxZfHxJ4G4Q55xYXmnw%2B7I5IOd8BGxd0XhF9uvJyycLG4ahSheY4OekM1OTc&X-Amz-Signature=b728b713a8f21d9b9ec839c6cb2ebc16e2f0c4a5edbb437be03a975650a54a19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDGA6YUD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIEprDznE6gXsumQhA2D1RlSLrQEbpUzcSIxEN430jmr%2BAiEAhHZ2YYsqSYUxcowB99oqgzRWR1N%2FIoaGBYuuIde4ZqQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4L044nL8yio%2B0pgCrcA63CeYbRSt4ZnMAt5hY03hAPdCOw9fAWKaXJtmKTJkljVJR3AJpKi%2BA2GDN7nJsB5LtHMcf1ui9ZzG6zhU1Rj34m%2FeitM7VM1%2FMWQdXxNEtT7W57tomEmVFpg5WXn8FjGG6WAH%2Fh%2FqZi6tyowjFOEsUxp6PIx6mzUvBiu2RQxlR4arcX%2F7pAbCXrrpE%2FIsbYXCFFMaJMaAoKIDx7hl0rbuIXx4aS%2FmXVvtZkfe9PqGwztUgHhCEtQF1QqrET8b5Criha2uPW1YDdItlBeIqH1YEbhU9JvG5KF%2FBjhMWx64LQaq4qdXtjRHCrVZXP7JajRKK70gxDgzi1ym8Kd61A2WhU6rm006m0dqcnzBce9KHmZrMmo2azSPgf684roiJAs5jd%2FGOllybP3hNO5973SUgg4gm%2BJOTowZsgCJqx9S1prpckFW9FkbKMlaYqXLJ3vHVf0lXVdd9v7rWEs5VRJflkEo0wbYcGgQm%2BFjqC0dWE7eE96MsbByDRXBoIu%2BW6h3Fzls0fHoVPkbqIVfB1zfcqn7%2B2Ccwntf9t4LHVfcp9IrM7EXxYQUQOzu0ao56UMBgslirgAMFjoIsR4e0Gkdx4KsUaBmRBy41gCCqt%2B3csrfIGYFiTnT3mSHdDMIW6070GOqUB0wEWUMjak9w0SLl8JajLV8CkUJTqSxBEEAtHWIeJjQ2BM1LvyjiBcCHJjuF7R%2BHN6ut9fTITJWuYmaHmNUUYGKiZmPY9qs7VC%2BW2YrZ295bxB3YnASXyhA9Bl93e1TxnceWPh7wWz6ksSBk8lq51tcm2Pj0zPfjD050iy08qtNbH2F1AgI%2FZ3rpOXiTF13ja7GV2jM9JXfPxXgETwca6jHw1O%2Fbh&X-Amz-Signature=43a4b3e2c431f4bf6177dcf71fcda57952eda92557a62326ddf73128c2abe222&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOXDNBCJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBsjyQ81wFrHGhc8nSJZ9hDVZprlrhvYsRR8Tn9VFbjdAiEA%2F2wupP30EYe7JXhaaNq%2FcbPe9Wz4Jf1nFqDa46GvEyoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7VSpu1%2FHZZ2OYwkyrcA6spgkVHhy8qFvPbY156UUay9hKTjvjYIWpmScTnbGsoMJmXQ0th3XquA3a1l%2FbA68MqusDAhe8y28AZT7HM0%2Fqf8fRhv4vTTjl%2FHBY%2FGYXR0wN7l5rvCIN%2F%2FqpHHGp6Q%2Bc6VB904gswkHuE8KqJL188TKGvhXKrYk8WE5a5XTleVH3c%2FHtVzL9ek2CA4RbVRVFh%2BAzKneVU%2FXtIvKePyYRrWtWMTnZATRKjavmqz%2FZoZx0Y8mxVlgDMPUsd0K9POB9ldQrf6PVwWOEWOgiicejReitZC0RdqS%2BfeXELn8SVGNEAiCOYMkNNcUno9WJ%2FNAiVbAJ4GjWTc%2BDkkCOrOX5cJHPNkPu2y3mCeMkpCYDNgYQj3OwayMyVQ9dek8Wf8DblhOqZgEDoI%2BBa5pOgn9xlx%2FsQay%2BriwMvDEAD9AjAo0qlQ4bQ5%2BiBJ97MSqQf0AYcwWB3sLenCRXEi%2B2KneeXFgZNs45UkNeg7iUyDq1gwCBwYsCgD2EOmtI2btAkrepEDQ8GNTwbzF9G5jkb0UsOXVV%2BR0MfKam9XUUN%2BtHrVmbnvQkcnPAu4Afcra1CKDhViFaeNoNsEbeRmhnP0PspqKwYUiDhK9B0h3TAWYbhtm1vL412pMWWkdEDMOu5070GOqUBl7LflQhRQBgU57uhuI3MCVfbg5Xxx3wYKXHl4XphItROYSDgcRFVayxfFOk2i7HFgzCSOC%2FcBp7Y0qg5YXQ4PGUtxonBBpbbYYw9kuaQbyb1sRHX3rx8L%2FUCuY9i6V6Fc2ySDK7kNCNTkG5RPzkn2s%2BFZ7WgSnDz0eAy8EKN5zGgH7d4GwT3xr4ovphlTiMvtO4mhYFO%2FyallbAD5%2FFBUTO5o5Ht&X-Amz-Signature=be8ffd7f5921ce2d8db9fd15949d198805ba108732c98ace816be1b3878b3815&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYVZ6BU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBUUyVRx0vxXFuGi6SVW607Hm%2Fqov9jDIvxJ%2B%2BVlFE%2FdAiA%2F3poeF%2F705S%2Br8lgaFEoF6UZhyomO4v9OfGrE1HzFUiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLbbF%2FJEdwNFgOVSRKtwDKWbwpgbH7Vx8wFW4o4V7lNPhjzfUPRC059TebGxwonzFV%2BSdN1od60whPUoKLtWVPyrBez2xQTuOpHayy6tZZAwNLU64WW%2B04nekqn8Bgl166wJYsLlQ7sZ9ZdX4nNy2%2BLFi9gh4WNsKmadwyZ2QntHepkV7qakkRa%2Fg4skCn9eEf%2BSXcFvxJYl2N8xnKmMDLVphZ9pOm5pVOCF1iIQGZDxXm5a0ylHTrbdCGjIF0rUStE1nL5Dny%2FLA8VMZNmTXaVvWLhIIi08f4nLjYxMDQXzktmkfqGuJ4F%2FLzcPU0rmDX7ugJwieNCyq5H2VGqn%2Fhrn20mykCo9rTJvbe18uNgA4HYJYMASLjQBjLTP6LuYfA%2BybtVbBKtrh1LjItw6oQeNUp%2FReI4Xpq97YwR9A1qULSmpA48HMo%2FGbXO9QoOUxiRf1AQUP18MoHFmskt30PDCxJJWQKDUMzo2VthoIgl7kUrTPquysZvjI2hK%2Bqwh2R3CtDk7VKo%2BuNiZHkJHrB18NNNw89%2BQau7WN3Ts4qtLGx9PpSL4P6TVIdBmB%2Fs1KfQyjSqmr2r2wvgceJL4TF%2BCxpFQ0OqJHKrgpMFNPrpl6RlrVFr2VX59BaA%2BZcNcwtl4e9cFcDcyYd1Awg7rTvQY6pgHWoA4YVmbOxgDyyls7w2lEpp8b2LTXYrp4FmNZWnFpoRqJkrmQ1RlNywyEttJ8Y4nM4E0w%2BEipdyQ9sabVo%2BFND5iIjAfx%2FV7%2FExddgsDmQFQzgQaX4fON5eZIkdlFDBsy1vnRjvIMyaFFnpwbSc5qXQw6sLqzb0ENFxZfHxJ4G4Q55xYXmnw%2B7I5IOd8BGxd0XhF9uvJyycLG4ahSheY4OekM1OTc&X-Amz-Signature=ab621cc7e5770cd21e58c989a05f7b39d2d2be40bd79e64eb99ebc45c1e42edc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
