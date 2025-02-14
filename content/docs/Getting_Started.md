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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGOU3QW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC2q8fP5GVnc7USbdLlQfp%2BBq0toYO17VLBuxERJuLA4gIhAJoLOXa%2B7QXgVtZPNVYqfdlAGEkQz8V1sKFSzkG4Bi99Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz8viUB9GDTYAgcmq8q3AMDlPVjgAoEbNbpHbWoxRa0nYL2X79ahe6QO4RByutJIbBisUYat8LOKrq49G9OBjHWKjgD2aHB7vdqspN0%2FO%2BRA6hG2kcMmxHy4b5A1lBGYrj4Zolovpjx1flzsQcmrlyeSJijOS3vtPi4JPtfQEmSbKO5q78dX84FU0XMndlh7Gvp8LCuTKaCmkfMxtyBr8soxWLPAvkbqCktmialsZ2RbONNDx%2BsigKWFt7y%2F75IzkXwWrdsm6dY5GFvbnuCc3n%2BCKuPJPsxWRqmMnSsktDMee%2B5iMT6uRMVk7PHjP8xd5cLYuWypCtanj%2FPzZ4InhgR4F96cbS%2Fn7b%2Flzs3wxSFMe2CQZuLUc3Srdx2BoXndF3qmmjP3RaP9xrS%2F2T%2F06WgJozjE%2BYlD%2B04VjSO0LJ5dkJ5XmAdU8GnxTH6n60eWg%2BBbfQdDZT3Rk6YORy3e5FC088SzEd5bDSAGlphNqrDPkLfRO%2B0IhzmVBba7agv1pMLF0v5GGQnvMev%2Bv9Fn8Pew1pYzfHh2aT4PNausshHOKMmOH8g%2BxUL5jMqNE%2BlXALneOx4HlOzZKNLPw2QVmM4jAIjxuoU3uI4k8Kj4Z%2FBY6CZedk41kshm7AkafUYpVy2vYNzWU43z9RkljCW0r69BjqkAUuNl96NvUY%2FkX%2BECSiw5WoTxM9lwEHISHLOL2ChF6gyeu63gDx8vGfmrwvQfzrYQDlmqzoTGO%2FyaoVzxno3aDTJNUjWr1ZNLsUIrsma8M36qrm8pdjxgFZuoYFvvClJ1cthSEllRr3bVV3ZWJQcZQRQj7bmu8qn4JYao%2B7sM5PRCFwlIvjP1In%2FfBdZLduKSQmvXo1fPCYQHZ%2BK%2FxdaCD%2BWf7z8&X-Amz-Signature=d9ad50281862edb3c5f261e9a293415b73e0ba348b67bb399482e8372f965b24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGOU3QW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC2q8fP5GVnc7USbdLlQfp%2BBq0toYO17VLBuxERJuLA4gIhAJoLOXa%2B7QXgVtZPNVYqfdlAGEkQz8V1sKFSzkG4Bi99Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz8viUB9GDTYAgcmq8q3AMDlPVjgAoEbNbpHbWoxRa0nYL2X79ahe6QO4RByutJIbBisUYat8LOKrq49G9OBjHWKjgD2aHB7vdqspN0%2FO%2BRA6hG2kcMmxHy4b5A1lBGYrj4Zolovpjx1flzsQcmrlyeSJijOS3vtPi4JPtfQEmSbKO5q78dX84FU0XMndlh7Gvp8LCuTKaCmkfMxtyBr8soxWLPAvkbqCktmialsZ2RbONNDx%2BsigKWFt7y%2F75IzkXwWrdsm6dY5GFvbnuCc3n%2BCKuPJPsxWRqmMnSsktDMee%2B5iMT6uRMVk7PHjP8xd5cLYuWypCtanj%2FPzZ4InhgR4F96cbS%2Fn7b%2Flzs3wxSFMe2CQZuLUc3Srdx2BoXndF3qmmjP3RaP9xrS%2F2T%2F06WgJozjE%2BYlD%2B04VjSO0LJ5dkJ5XmAdU8GnxTH6n60eWg%2BBbfQdDZT3Rk6YORy3e5FC088SzEd5bDSAGlphNqrDPkLfRO%2B0IhzmVBba7agv1pMLF0v5GGQnvMev%2Bv9Fn8Pew1pYzfHh2aT4PNausshHOKMmOH8g%2BxUL5jMqNE%2BlXALneOx4HlOzZKNLPw2QVmM4jAIjxuoU3uI4k8Kj4Z%2FBY6CZedk41kshm7AkafUYpVy2vYNzWU43z9RkljCW0r69BjqkAUuNl96NvUY%2FkX%2BECSiw5WoTxM9lwEHISHLOL2ChF6gyeu63gDx8vGfmrwvQfzrYQDlmqzoTGO%2FyaoVzxno3aDTJNUjWr1ZNLsUIrsma8M36qrm8pdjxgFZuoYFvvClJ1cthSEllRr3bVV3ZWJQcZQRQj7bmu8qn4JYao%2B7sM5PRCFwlIvjP1In%2FfBdZLduKSQmvXo1fPCYQHZ%2BK%2FxdaCD%2BWf7z8&X-Amz-Signature=19fc3f4d56b3bf5d75d3a427c0b2ef5a9e0cf320f80e97187a50c4cdadeeaecd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7JW45W3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHQ3vKESGW1Xwai%2B6Cq7pT2azZlYjsRf8vyUYjQXePegAiEAgsLQr94ugvwWME2VadBOmahtkvO48uED%2BuarAsEoC2Aq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCDIpffBF4e27rdNSircA4ipBF9RON3m0km33papoDfJFtkvxIor2CJNgOmRAaEvFdmCmU8716YX7XLJHpTm505QaIVH6MEYIt9j9OTchWmm6zX6PNoOF0%2F01NRSe0Ou3HqGte74cMXUxGZb293nhmjaB1bh2vc9HLfsKM46xRipxCT%2FSlpeggUPnPlx0fuvbHZkjpIikQz%2BrzvC6NLY0bfXGaQumTk3ikLFRZo186R744ML0v%2BWdi8qKuZiZJWNPLl8nI0owKpGqKemJV4GFMyWsDXbIoVp48sII2f8%2Fk%2FxRKR0nUNRtXVVDEUtlMl5Et4wcfxukYz86q1FS3AybEZ1V3IsMuaR6ecLF4h4g%2Be2h28dBQErOTJWRSRdbsftt2Axrvf1sEa0wVWwtsVWVzmDcFJ0omhGLfMKwkbQwT%2FPh1K9dHklDQ%2BOY2zKc17IUzGauslZRHnfAgT0yKFSZDoZg1B1%2Bj6ohibCPnHbitTb7lo9zj4HBjonBVgvL6duBpxWCI2Qd5jGWHZdItK1NbuzL9%2FV%2B7WktkZFXIo32I6WTCqVrKLwU1pAfzOlAs0V8DbMaY4%2F%2BXF2GO1OZTzyUED54sUwTTTqy4rDHJxRbFkgFPOVujIPvDhIWp%2B33L0qpxbdA2GM%2FBZtEQZ9MOXRvr0GOqUBGAigpMiEX6gD8%2BVr%2FcCtJvucaiPW7YE4KdrRrrNcvTAvfzXXvNISaeHWB5S83PyL%2B35Sv4AuQZJcJifPoUq9NwHSed9cBB9MtTpretg3FLnf0Phc%2BZm52v7SLV%2BWRwDdWQ7DMCyJb%2BWB3C0Wwl4rwSQJOENz%2FaOrIBM6Rh02BcZNQdN%2BwUnHW0VTs9YtoX9hh2ZWxfiKUrfYoq7PgmS3zjAv29eR&X-Amz-Signature=ce8c4672cf257dbed9baa6ed7a41d8294e4e9bb281f2ae57f297f4db59b6cb48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AFBT37%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDXcjB8lKAs3KMDcObT%2Bs8yX6MCN9KJjDXDv%2B0DxyeJJgIhAMZnwRST9jTXwtW3lJTRLEH9R2y54f%2FTE6L%2Frj9aQmpkKv8DCDYQABoMNjM3NDIzMTgzODA1IgzloT0pU%2FnDSfLRQy8q3AO1lgXqHvUg2pSVlQDTUKgOWOjTMyiGvuro9HEifviv1I769XZcBeGgokBtlndwlPs4wsuvJbVRDDZg12mRGbzMu4CpZ0tZ5JsSfTbCf0XOv9cKBhO1HbaENnYNusvCiHrLlyAnsX%2FGRDmlqsdI3g2r0F%2F9dWFOu5fznqnkm0KG1ocGbgFpRpDBhrNBVC14qj81f2%2BZAVr00yeO5d21DMJ1RSRA8uIrFjgFwUpwhkdM23TQTTbpGtfy0jF%2F3k7umvT%2BtK77rotyN1ZuMEtej2Rc0vqAR%2FYJgI7n4Zl0w%2BesMfmamSM4hPdYrj6QhXxxUyV1iUb0ExtSCFeYoS61bYtIi%2FQpp%2FmAjYixt4UlOmLlsaHZCF2TRZsJpXsLZMU1wMXVj5t0FXRVVFWg2OyMsfdd%2BnjvJygSLCC78NJFbmTQ0BZlKxTS8TIZ53dDYpfFjJt0NQ9KezrPHcx2Ec3B2PDRq2D7LU%2BxIb%2B7HZWiR5wvv1MAt4CBDBz3qZcNu8mYhxInMBtqXTjpquSFnFDlzI862tABdzqT1ZrR4xHjTyvhTmnUscrrF6qwI2QNiBGQt2%2FUIbBSY3%2B6bS2DyTuvWz%2FqNg10YC6uM0Kc04GOZBntlLmJoQfa5KDMTbIViTDy0b69BjqkAc93H43wDowwkf%2FVAvbhYG5Lg97uqzUTejzHBmJ3EEsf0XfedJyAw4HCRTOqbXb7JcaN8vD9Wwl7wpTIMUqQdWpsEPqMtG6Ck14NNgiU8wJXdpLTmaVMIm4YyWt2r09m09z2Vm%2B%2FTax%2Fs%2FfM6xpeM7f405a0NRU8dADsT1h8%2BQJuIKYC5sKzZDLgFpvxzceWBAsVesRtIxzrNf5lYUH0m4RTc3K4&X-Amz-Signature=a62b2184402db376f4f73a19d11c187560a1edc35c8e83d7b461bc176fe63319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGOU3QW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC2q8fP5GVnc7USbdLlQfp%2BBq0toYO17VLBuxERJuLA4gIhAJoLOXa%2B7QXgVtZPNVYqfdlAGEkQz8V1sKFSzkG4Bi99Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz8viUB9GDTYAgcmq8q3AMDlPVjgAoEbNbpHbWoxRa0nYL2X79ahe6QO4RByutJIbBisUYat8LOKrq49G9OBjHWKjgD2aHB7vdqspN0%2FO%2BRA6hG2kcMmxHy4b5A1lBGYrj4Zolovpjx1flzsQcmrlyeSJijOS3vtPi4JPtfQEmSbKO5q78dX84FU0XMndlh7Gvp8LCuTKaCmkfMxtyBr8soxWLPAvkbqCktmialsZ2RbONNDx%2BsigKWFt7y%2F75IzkXwWrdsm6dY5GFvbnuCc3n%2BCKuPJPsxWRqmMnSsktDMee%2B5iMT6uRMVk7PHjP8xd5cLYuWypCtanj%2FPzZ4InhgR4F96cbS%2Fn7b%2Flzs3wxSFMe2CQZuLUc3Srdx2BoXndF3qmmjP3RaP9xrS%2F2T%2F06WgJozjE%2BYlD%2B04VjSO0LJ5dkJ5XmAdU8GnxTH6n60eWg%2BBbfQdDZT3Rk6YORy3e5FC088SzEd5bDSAGlphNqrDPkLfRO%2B0IhzmVBba7agv1pMLF0v5GGQnvMev%2Bv9Fn8Pew1pYzfHh2aT4PNausshHOKMmOH8g%2BxUL5jMqNE%2BlXALneOx4HlOzZKNLPw2QVmM4jAIjxuoU3uI4k8Kj4Z%2FBY6CZedk41kshm7AkafUYpVy2vYNzWU43z9RkljCW0r69BjqkAUuNl96NvUY%2FkX%2BECSiw5WoTxM9lwEHISHLOL2ChF6gyeu63gDx8vGfmrwvQfzrYQDlmqzoTGO%2FyaoVzxno3aDTJNUjWr1ZNLsUIrsma8M36qrm8pdjxgFZuoYFvvClJ1cthSEllRr3bVV3ZWJQcZQRQj7bmu8qn4JYao%2B7sM5PRCFwlIvjP1In%2FfBdZLduKSQmvXo1fPCYQHZ%2BK%2FxdaCD%2BWf7z8&X-Amz-Signature=f978bc24c182a3ee6ffafd121911590614b598bb0b5af151cc73977217fec3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
