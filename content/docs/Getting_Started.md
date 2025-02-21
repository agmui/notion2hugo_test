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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUBSXR5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHW%2Ba7a2ymnxW8iy6%2BVykDsO1P%2BX54BkyNPCh%2Fid841gIgUscLShh2RRIi4eMLFaD%2FZS4k6jeW1Guy5K%2BwaVdgg1QqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkdZJXB1gVLeUOs2ircAyS9OZ8p3rZrNy84zxhHOxVIwzmhXOHcenZzWxVRWMvBYEwJZRUH9Vf0KHnN6cOkua%2BDBDis4E58%2BCm%2BmMTu1E40EwT2%2BN4A2tM1UjNpM0cXmFZIRCUjh7yl%2FsXZgGvmycLWW5epmQgicFFgFEvN%2FBnOnaJo6GNto8phjjQpsgpKAqZLX215jK2BToelXW07FdyGFy21rsxh7IcRRW28rjAea4xHAcfQ7HTMK1djWVaWTVM0%2BpT0y0x9QSWiSQX07dB1T8KLJXxDYHanM9Nc2ZfXB87TxnDsxyLMG61cXpAKaIz0OJG%2F3GSN6Aow6%2F1EKZebnEABbp7Wjoh8U8%2B1G0eoNOmE3cPzlPreYoCgSLD%2BUi0bsppPAz2sLpTuNF4QSI%2BOAHmL5i6DgBUogRex%2BwgKWf9G6htB8Lt0PDrEdUGXzjbSSEK25nHTJXATw91MblQNka%2BdKB5HJkrOrSzpYNVImm49IqSJadjQ8CFhirldXF0OHHa1kPfI9BVPpw%2FtpAOnDO4f5kFMfCA54089FOEFc7bzy80v5QWy4LloMYgAPvwLAlaptgl7jQXBmsG%2FU1UwzRkZCisrIkDjrdJFfBlBY82cJJO8mHh3FW4Uee6uMJcGrD0UlY0ceU8bMPXK370GOqUB3nZ6ZlC%2FjSm7lpTVKDz5fS1c%2BsZON6KX1WZmC9VVXrumjhQW0TIhFdYjs2eCEVUCLIXAkmpvPN5mORe1avjc2yv2oLQl69jl2Ni4QcMeIV0YxiqlBWeyx%2FG20PVKR9%2B%2FXkHsbmUKwlcrHymbdFG4sdI4UpFw3KNlvucL3fJrfPxAJR5ZPdhK2k2u1%2Bh3oYPZptAQ%2FIzHbRaTFrm1Us8f2KeXwwPz&X-Amz-Signature=96864699c00961d12d67e22a010955e65df374981cb2717370b95b95e89fa327&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUBSXR5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHW%2Ba7a2ymnxW8iy6%2BVykDsO1P%2BX54BkyNPCh%2Fid841gIgUscLShh2RRIi4eMLFaD%2FZS4k6jeW1Guy5K%2BwaVdgg1QqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkdZJXB1gVLeUOs2ircAyS9OZ8p3rZrNy84zxhHOxVIwzmhXOHcenZzWxVRWMvBYEwJZRUH9Vf0KHnN6cOkua%2BDBDis4E58%2BCm%2BmMTu1E40EwT2%2BN4A2tM1UjNpM0cXmFZIRCUjh7yl%2FsXZgGvmycLWW5epmQgicFFgFEvN%2FBnOnaJo6GNto8phjjQpsgpKAqZLX215jK2BToelXW07FdyGFy21rsxh7IcRRW28rjAea4xHAcfQ7HTMK1djWVaWTVM0%2BpT0y0x9QSWiSQX07dB1T8KLJXxDYHanM9Nc2ZfXB87TxnDsxyLMG61cXpAKaIz0OJG%2F3GSN6Aow6%2F1EKZebnEABbp7Wjoh8U8%2B1G0eoNOmE3cPzlPreYoCgSLD%2BUi0bsppPAz2sLpTuNF4QSI%2BOAHmL5i6DgBUogRex%2BwgKWf9G6htB8Lt0PDrEdUGXzjbSSEK25nHTJXATw91MblQNka%2BdKB5HJkrOrSzpYNVImm49IqSJadjQ8CFhirldXF0OHHa1kPfI9BVPpw%2FtpAOnDO4f5kFMfCA54089FOEFc7bzy80v5QWy4LloMYgAPvwLAlaptgl7jQXBmsG%2FU1UwzRkZCisrIkDjrdJFfBlBY82cJJO8mHh3FW4Uee6uMJcGrD0UlY0ceU8bMPXK370GOqUB3nZ6ZlC%2FjSm7lpTVKDz5fS1c%2BsZON6KX1WZmC9VVXrumjhQW0TIhFdYjs2eCEVUCLIXAkmpvPN5mORe1avjc2yv2oLQl69jl2Ni4QcMeIV0YxiqlBWeyx%2FG20PVKR9%2B%2FXkHsbmUKwlcrHymbdFG4sdI4UpFw3KNlvucL3fJrfPxAJR5ZPdhK2k2u1%2Bh3oYPZptAQ%2FIzHbRaTFrm1Us8f2KeXwwPz&X-Amz-Signature=6468cd753008b1ee8b53eb4ce36ebf95379e1809b85c465159d0736e94ffdb12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYHI7FZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhMHYef3BpHYOmYxTSKU9Qr8zRznYr%2FUklJHe0QiLrQAIgPpEMT4CqHHm0x54H2L9%2Bqn0IHHxqnaLjLDJ1ky3civsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6BAoV5QuEggSJ5iSrcA3vkO43XXW7z6VWczaMvaZ%2FxpqUUVOicUTwlnD8LS%2BcqZZbfd%2BTZWmUZxubhxZcxOYShDDgrScIGKfahkR2fEariBzeq5O29lILI43xBaiW12gt5b%2BGvzTyTJHfL9vJsjoMkeCtQMH7cOv0yGpMMDcj6k0PiULBz76ttiu2hLu8A%2BSkw5FWb6WDH%2Fbs2p23GfjQvMQB3m28oJbfD5ndNYR5e%2BQjQfuGVT3zNNVNjXFKcz4xbnhpjcd1ijbo4hR9ZNneiKpXe3v9pZOhMHZByAODbttee4Csg079jdolDVOXTIoWYfdUWqFo%2FTf%2Bdsj9Eh0i7dzyNOoQcjychH6nUicp%2BrK%2Frt5if4Qaa8QPtRN9oijPMENOZEUjW069o%2BaoYm%2FMObegF3nPOWHtT2uz9CDwBR%2BJhB81Yzfm6cnTWBJoLncwIeEYBFwbTk5u7J6ar59IbsMvyXvHvIxtLb7YILkR9gRIOojH4fviNkx%2FyXOpq4Uu0DqkvyyI%2FlUbyR5BjzJabRV7hI7afN1xWVpLCbQG8vPLl7VWdCarbdKdSnLU2fuzRuvVWtU7ZAATcQUmLXmJe0w2AKSjoyMNUNuWvjPFiaV39DR8m2DDHjYeCMhNI1W90UJE1LCVBwKETMIfM370GOqUBJVN5eGY3eeArFKvML4QxH4sR%2FWOlHqw%2BWStlDGJIZt6n%2Ft3hnkEx4A91Z12nuPpl%2FJBjo4hk9wCO4GqRSdMQgdElkClI39yZHFMNI%2FZRS%2FhY2%2F6hzWGEusHwG3sFW3Spu3tKSaA7BIlAspIFSpW%2BrKwRnhEdr1KwXFtJa7HyQpBaxYpr9uY1b3Bkqg9VRRmhISB2ck68NmZeITgcvMvctFTnaIdV&X-Amz-Signature=20a881963a299bb5b79bbf9255e55a621f7feb9368c2df36516e29ecd37f08e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHI6OAN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDaspSlPWjrPtYniDZUJvAiiQTUmsOlAC068rE01%2F2ZwIhAKb4u8%2F149%2FHhXKNuTcdtecEfiZvIcyPT8Njz3Pe%2Ft8iKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzS3BEEIwwlJG7tZ%2BYq3ANrvTtcZHPtOGjV2x1FOpTx3e%2BFSBIubN%2F9SfbkUj515COYQMbBRztZ%2BbECgp5YS%2B9NUpC%2FZxTvdCdDk8bvJ%2B3YW44qqUxvPNzUPqW1id%2Bly3oRve6X3mg3JGT68nkYDjxVcW%2B6Wh2g6uyztv%2Bx4pTG6Bx060iD6IQ%2FL0fOXXTyFsyfXNXkSrXqrOcTa%2Bzctg1MEIw1OvAPBAzgqftuyCp4yw1BLEWP9%2FHd6%2FkD9yRYWM%2B0mudlTDLl1kWusmR9tq2hS6IME4kHxq2CvFpEEvx%2FXf%2Bj3wbM55XDlGfMZzDStqOaQXxldpRF7cgYXXSB02UfWWhxAkL74nGZ%2BPXJ8So9SiD6pJKch%2FjmJVyPGNjQIV7qU0CHufSOg8AI5G4mdHX94UNZS6sQI8%2FFwihOkxnBfqJeRbb2OeWeqBfmCNnvZzxuzYTXaT%2FW8Q9UsLhBaEYr2Qlu2jRJvDHOl9lYH1CXi1WL8nSqg1DZWyKQ2QBZsrFLoyf1zeuzKlv3hxpT4kEet4pAOF4WfOCe5%2BruvttL1QJ3BS0QF1ymms8beKDJTdHsqjThvFlngd%2Bz38WzaeIdnaoKqkssye%2FtujkJN%2F2S8NulMnDCZCJSNQZjAXiU67jmbEfM25zDPg8kOTDxy9%2B9BjqkAWIF9kCwWxKBY296HYGB2JUUirYw004qfDuo6GIqHyEdHMnVSNGsIt9hqJhHo%2F9bd4YOqgjEo8sdYkpUykoOieAURXVDXtI44TG8fX0p%2Fs%2Bm3Agn96dSZAmIUXFzUk127Th1DOu53I0Wiupn0p2DC%2BIXzYgXc3G7hUcL8fbeQa6x4XEIhmL%2BMaCdFOaofZIiega9Jdzr20acejEz9f1p2TY4efrQ&X-Amz-Signature=a2e54ddea75e2ab676824d0efb04d88c75c5ddd5029d8c237efa0a23d48c66f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUBSXR5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHW%2Ba7a2ymnxW8iy6%2BVykDsO1P%2BX54BkyNPCh%2Fid841gIgUscLShh2RRIi4eMLFaD%2FZS4k6jeW1Guy5K%2BwaVdgg1QqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkdZJXB1gVLeUOs2ircAyS9OZ8p3rZrNy84zxhHOxVIwzmhXOHcenZzWxVRWMvBYEwJZRUH9Vf0KHnN6cOkua%2BDBDis4E58%2BCm%2BmMTu1E40EwT2%2BN4A2tM1UjNpM0cXmFZIRCUjh7yl%2FsXZgGvmycLWW5epmQgicFFgFEvN%2FBnOnaJo6GNto8phjjQpsgpKAqZLX215jK2BToelXW07FdyGFy21rsxh7IcRRW28rjAea4xHAcfQ7HTMK1djWVaWTVM0%2BpT0y0x9QSWiSQX07dB1T8KLJXxDYHanM9Nc2ZfXB87TxnDsxyLMG61cXpAKaIz0OJG%2F3GSN6Aow6%2F1EKZebnEABbp7Wjoh8U8%2B1G0eoNOmE3cPzlPreYoCgSLD%2BUi0bsppPAz2sLpTuNF4QSI%2BOAHmL5i6DgBUogRex%2BwgKWf9G6htB8Lt0PDrEdUGXzjbSSEK25nHTJXATw91MblQNka%2BdKB5HJkrOrSzpYNVImm49IqSJadjQ8CFhirldXF0OHHa1kPfI9BVPpw%2FtpAOnDO4f5kFMfCA54089FOEFc7bzy80v5QWy4LloMYgAPvwLAlaptgl7jQXBmsG%2FU1UwzRkZCisrIkDjrdJFfBlBY82cJJO8mHh3FW4Uee6uMJcGrD0UlY0ceU8bMPXK370GOqUB3nZ6ZlC%2FjSm7lpTVKDz5fS1c%2BsZON6KX1WZmC9VVXrumjhQW0TIhFdYjs2eCEVUCLIXAkmpvPN5mORe1avjc2yv2oLQl69jl2Ni4QcMeIV0YxiqlBWeyx%2FG20PVKR9%2B%2FXkHsbmUKwlcrHymbdFG4sdI4UpFw3KNlvucL3fJrfPxAJR5ZPdhK2k2u1%2Bh3oYPZptAQ%2FIzHbRaTFrm1Us8f2KeXwwPz&X-Amz-Signature=da02fcaad3778d7c9bacd1b0fc1c6b37c2f5267ee99a8b79f820cad23039e6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
