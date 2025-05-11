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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OVI2P2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDkVaBGRGEaCTaIxCb02a9Mni72Af5sXsgGv7iMAbkoxQIgHrV4wvZp0Vvpxc8YsAo8EiF12rArnAX53pZH7vTgeeEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK8BVxF60uo0LvOlSrcA66AVJhj1jtP2Tf5OwtUZE0OCkp53abYVO8GxsjMy%2BWaVdMB7hxoGo5dRPOGVciBP7wZKmpidQPaumZlz9G7s%2BDpEgmVU44Tdeqbc9wmDmECe68huPxEevn%2BH5J1TtRP2%2BZWX%2F%2FP6pS7mYQiPjYmkAyyHmw8Zim87CaCE2ctrypUdniiYMvrlfn8CQ4oOzJkbuBXhond%2FTczqnyYykuVjFy27hR2ZAKCK2PGvaMouUp8JH1eJY4u9Jkkf7FuuJITCyaIeu6gF8T7%2BLU7fViyxnWdzb6UJ5K6nq%2FTJHqdntPY2SeoKtUWWmbPc9jHD%2FzezLpRwSZTx7D9LLgXJG7eZ116tC1rAS2qBzlkpFh1zk3tR1mLciAVJlSixWTQ10T1C2mXhMIEfvtAfp5ctHpgDdfggpJArHrwjn4qrvGQFvBhAwy%2FdlQnVBTbTVpOEXbJYG1c6D89i1b9wYLdwIZgdWnZ26AkeYVZJ9mCaMp6J9NPwAhH5hyRikHUe3Z0AWvHgkyNMruhMmXHKSLTzM2b3tSr2FIG6AGvKI0i2iO5pS7kvj9BDAyQLDiFi1WFtqbrcmHCKvFbtBQcnaT8o%2FL4ktFRyN2srJwijMheJet64bCMKiyDzszQzkqBM8RbMNTegMEGOqUBpGwksiz8jhoUG1cOkX9oUDxUHbeuVaVI5AFvIuR%2F%2FyK0j7y8ziXsZqW3yRBfPPX5t8iZ6jGBU%2B1kxIOLtOQtv8PVUdllRvB5zidRDCX4MUDROwBp3MW0LpoN%2BeMjL2YN7G9dScXMFYe0LE1kRbXtmEu%2FRmukFy%2B5%2BVwYBSidoe9IEZXSDswMRI7awdn2P6zYa0yymSz8XEFuDicDu7m%2F3BB9%2FfCg&X-Amz-Signature=0d52086778de3bc4ea06916986f086d4c7cf082abe6980f78fd7046b14020bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OVI2P2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDkVaBGRGEaCTaIxCb02a9Mni72Af5sXsgGv7iMAbkoxQIgHrV4wvZp0Vvpxc8YsAo8EiF12rArnAX53pZH7vTgeeEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK8BVxF60uo0LvOlSrcA66AVJhj1jtP2Tf5OwtUZE0OCkp53abYVO8GxsjMy%2BWaVdMB7hxoGo5dRPOGVciBP7wZKmpidQPaumZlz9G7s%2BDpEgmVU44Tdeqbc9wmDmECe68huPxEevn%2BH5J1TtRP2%2BZWX%2F%2FP6pS7mYQiPjYmkAyyHmw8Zim87CaCE2ctrypUdniiYMvrlfn8CQ4oOzJkbuBXhond%2FTczqnyYykuVjFy27hR2ZAKCK2PGvaMouUp8JH1eJY4u9Jkkf7FuuJITCyaIeu6gF8T7%2BLU7fViyxnWdzb6UJ5K6nq%2FTJHqdntPY2SeoKtUWWmbPc9jHD%2FzezLpRwSZTx7D9LLgXJG7eZ116tC1rAS2qBzlkpFh1zk3tR1mLciAVJlSixWTQ10T1C2mXhMIEfvtAfp5ctHpgDdfggpJArHrwjn4qrvGQFvBhAwy%2FdlQnVBTbTVpOEXbJYG1c6D89i1b9wYLdwIZgdWnZ26AkeYVZJ9mCaMp6J9NPwAhH5hyRikHUe3Z0AWvHgkyNMruhMmXHKSLTzM2b3tSr2FIG6AGvKI0i2iO5pS7kvj9BDAyQLDiFi1WFtqbrcmHCKvFbtBQcnaT8o%2FL4ktFRyN2srJwijMheJet64bCMKiyDzszQzkqBM8RbMNTegMEGOqUBpGwksiz8jhoUG1cOkX9oUDxUHbeuVaVI5AFvIuR%2F%2FyK0j7y8ziXsZqW3yRBfPPX5t8iZ6jGBU%2B1kxIOLtOQtv8PVUdllRvB5zidRDCX4MUDROwBp3MW0LpoN%2BeMjL2YN7G9dScXMFYe0LE1kRbXtmEu%2FRmukFy%2B5%2BVwYBSidoe9IEZXSDswMRI7awdn2P6zYa0yymSz8XEFuDicDu7m%2F3BB9%2FfCg&X-Amz-Signature=ee34a68e4734fd30516516fd9adb051e99752d2ac352a171b9af5e5991403364&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OVI2P2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDkVaBGRGEaCTaIxCb02a9Mni72Af5sXsgGv7iMAbkoxQIgHrV4wvZp0Vvpxc8YsAo8EiF12rArnAX53pZH7vTgeeEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK8BVxF60uo0LvOlSrcA66AVJhj1jtP2Tf5OwtUZE0OCkp53abYVO8GxsjMy%2BWaVdMB7hxoGo5dRPOGVciBP7wZKmpidQPaumZlz9G7s%2BDpEgmVU44Tdeqbc9wmDmECe68huPxEevn%2BH5J1TtRP2%2BZWX%2F%2FP6pS7mYQiPjYmkAyyHmw8Zim87CaCE2ctrypUdniiYMvrlfn8CQ4oOzJkbuBXhond%2FTczqnyYykuVjFy27hR2ZAKCK2PGvaMouUp8JH1eJY4u9Jkkf7FuuJITCyaIeu6gF8T7%2BLU7fViyxnWdzb6UJ5K6nq%2FTJHqdntPY2SeoKtUWWmbPc9jHD%2FzezLpRwSZTx7D9LLgXJG7eZ116tC1rAS2qBzlkpFh1zk3tR1mLciAVJlSixWTQ10T1C2mXhMIEfvtAfp5ctHpgDdfggpJArHrwjn4qrvGQFvBhAwy%2FdlQnVBTbTVpOEXbJYG1c6D89i1b9wYLdwIZgdWnZ26AkeYVZJ9mCaMp6J9NPwAhH5hyRikHUe3Z0AWvHgkyNMruhMmXHKSLTzM2b3tSr2FIG6AGvKI0i2iO5pS7kvj9BDAyQLDiFi1WFtqbrcmHCKvFbtBQcnaT8o%2FL4ktFRyN2srJwijMheJet64bCMKiyDzszQzkqBM8RbMNTegMEGOqUBpGwksiz8jhoUG1cOkX9oUDxUHbeuVaVI5AFvIuR%2F%2FyK0j7y8ziXsZqW3yRBfPPX5t8iZ6jGBU%2B1kxIOLtOQtv8PVUdllRvB5zidRDCX4MUDROwBp3MW0LpoN%2BeMjL2YN7G9dScXMFYe0LE1kRbXtmEu%2FRmukFy%2B5%2BVwYBSidoe9IEZXSDswMRI7awdn2P6zYa0yymSz8XEFuDicDu7m%2F3BB9%2FfCg&X-Amz-Signature=26a1fecb65554d7b5add45ccb747c8881a352708b1e0a82c1eacac58fa07a359&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYAJQP5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDDVR5ejbsp4L0Fc58Cc6LWUDzrh74q9R98nSpHmFQl3wIhAOriFNZeh0b6JjkgGa46MHn5fGRMADYYqQeCh0aAJKDHKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYRvvudmrCqyDuF8q3APgV5KcpcmAvp9XAFNUPHpFniB4eK4ryIZo2LQc%2F92%2FI5AWyGRCWTHR5ZKoFNZx5kKR4FHO1EBo7rInNFZ53KsADgVZQ%2BcbVlKzUZMXqPXoEw1SuI56oq8UQYjYl1tPKQ7VdBCOe7VU9aM5T5oUpG7AHta8R7i%2BGcegGlpYbf65riJ%2BH8Qs6sCR0EVkOQ3GPcxA9OztIMQUdpXOwiTIH1T9RnKGSqySefrdwkmCTCigQXiTIldmlJIHL26meCufZtJeYkeXjxB1p3VhnM6AbukkHdfS4XTWK7fh%2B8kNLF2ywrHxVhw3%2Bpt46GRTGZ7oV35uIvRIu7hMXP6vDjsyyVtnS%2FLF99GgeWG9Y9SVXHX4XA7vvEWCOZIACoc29BP6pTRtw09USLGXJF81E0tIBhlCQ7UMFb5KkRhDCIS0AWLDFcLm8Xk5PTjea6wjDbF0LwwC0vQs9cvXSewTlcrrdLOgYgqhiLzGHQcH%2Fz5E6KzzYb8MYlJzaF4GQMPVpHX4NUXvK32lXDMFkqAb2%2BSdx45rZpdpkfPxlCeCPr%2B3gvcPARAhHrTtjHJZF7V7f02TBwPHv1Hx2IzA1%2BZv1BDzDbEA4OZ1TKFOfAtp2carUx7SirWoz6aQGbFUu2RKjzDV3oDBBjqkAflJn89h7c%2BgRJoIbRA8%2BNfE8FRESsTKLiwQuMj4YSUSZv8QBumaV5QaIZTI0f3ZmrPFGGO3b%2FrEu6uhdGQ49uM6oIVF0hWJmXGJlY9xrsRKJkPdyRrsPclkR46f6Pd7vUosOHGB3G1Wr5C3O%2BUEzVS6Wh2YWYF%2Fa9ietF4IbCG7QnlFy1AJj3aZp99g6KfkiIipwJEIOQWrGa5yDsfSzafcvIYn&X-Amz-Signature=a049173305d312a187ac4ae353101e18b4ead289235ad9a3a8bfa5ca75c3447a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTEFC43%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHLgJt4ZyQfK%2FCiu53OZXegWiiptnb%2B9Zpa%2FrrP%2F2AkEAiBGRlTTHexdZIVns%2FS8CSGEbpvYLpTJkvwTAHpsGzapCCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuHD7ZIDYlFzvDv%2BKtwDiJoK5V7skKUy2%2FiK0H30W5yaUSFywj4xmI7kuQE4vUsRpzPOoVoY79DwcaFgAv8N4SPpkJQ9iCHCdOtcgFhZY6t%2F87Qj%2BeAXBRYpqGs4CiRoUSh5%2FYOjkJk1ibWcmaeqlvb6VSZdFTNOEC6avmVyyGYDjQsIpctUShvX1BHCkR801m0MEyeELx0b7IpR5zYxz2sgzK7y%2Bq%2B9XVYJS1BkrUFCXu%2FeJDcKG2doXeg2zM%2Bw72jtW%2Bt4TqDXnP0z1kyNeh0lnh%2FXfkvjwkoy3XRVFieETCIuHnPmAWxcLwbKUyLLxSOJvpq6SJuX3mvvk9%2FkQtpA%2FTaHzpNvHrpWUUtYV0y08xJIfgwtUfjI4TyTpjE1umyVOLT47eZBIX5Wyyask%2FWTehRphrnyzYata9ZEI%2BGKo3M94Wbbxg7Nsz1HxPUFyif6cvH9rA%2Btdasv3bfY5J%2BpJW5GDiOYO9Eig5rGDxIsVFgCUo3FTLjMwDPtt768Slfm5NZ0Dzb5S2twiWNw1ghA5t3INRRLSTW8zdNvacWt8tS6pR%2BJId%2BbFL3g4iKR4OBFD0xkvVNElaQuX2l8YA1RLU2LjPkrhBSp5a7hlfx9I6WfKm%2Bhe96N3XcomTfjfQ4oq6r0WPy%2BTpYwrN6AwQY6pgGSP7zxu%2BflIz%2BxsN0%2BwZzJNTZV5ZFsIuLLQx5Kfv3uMQSvjxwvDJw04uWmMAyHo5KypOCPwnh5zCuE9RIaaYkGHxv2LMFcnqUC04RngZpfQhiw5VaOveDgT0tJEaeYuVXjxopiD4yBWvXmAWjsWZAPoQEBoNO1KkKg1KKBFTuZcKJCcqgKrAsp4%2Fa4wiZ1UziWUH7PTwBtGZXEDtPqkDWi5uDkbkyx&X-Amz-Signature=4f9753b7a1b90b3df163804c22d030c53c40703fe2b7ed651a80ca453156b437&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OVI2P2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDkVaBGRGEaCTaIxCb02a9Mni72Af5sXsgGv7iMAbkoxQIgHrV4wvZp0Vvpxc8YsAo8EiF12rArnAX53pZH7vTgeeEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK8BVxF60uo0LvOlSrcA66AVJhj1jtP2Tf5OwtUZE0OCkp53abYVO8GxsjMy%2BWaVdMB7hxoGo5dRPOGVciBP7wZKmpidQPaumZlz9G7s%2BDpEgmVU44Tdeqbc9wmDmECe68huPxEevn%2BH5J1TtRP2%2BZWX%2F%2FP6pS7mYQiPjYmkAyyHmw8Zim87CaCE2ctrypUdniiYMvrlfn8CQ4oOzJkbuBXhond%2FTczqnyYykuVjFy27hR2ZAKCK2PGvaMouUp8JH1eJY4u9Jkkf7FuuJITCyaIeu6gF8T7%2BLU7fViyxnWdzb6UJ5K6nq%2FTJHqdntPY2SeoKtUWWmbPc9jHD%2FzezLpRwSZTx7D9LLgXJG7eZ116tC1rAS2qBzlkpFh1zk3tR1mLciAVJlSixWTQ10T1C2mXhMIEfvtAfp5ctHpgDdfggpJArHrwjn4qrvGQFvBhAwy%2FdlQnVBTbTVpOEXbJYG1c6D89i1b9wYLdwIZgdWnZ26AkeYVZJ9mCaMp6J9NPwAhH5hyRikHUe3Z0AWvHgkyNMruhMmXHKSLTzM2b3tSr2FIG6AGvKI0i2iO5pS7kvj9BDAyQLDiFi1WFtqbrcmHCKvFbtBQcnaT8o%2FL4ktFRyN2srJwijMheJet64bCMKiyDzszQzkqBM8RbMNTegMEGOqUBpGwksiz8jhoUG1cOkX9oUDxUHbeuVaVI5AFvIuR%2F%2FyK0j7y8ziXsZqW3yRBfPPX5t8iZ6jGBU%2B1kxIOLtOQtv8PVUdllRvB5zidRDCX4MUDROwBp3MW0LpoN%2BeMjL2YN7G9dScXMFYe0LE1kRbXtmEu%2FRmukFy%2B5%2BVwYBSidoe9IEZXSDswMRI7awdn2P6zYa0yymSz8XEFuDicDu7m%2F3BB9%2FfCg&X-Amz-Signature=ad833d9df219b8737f77afb36c1e3ca85ab68bd69875be52134f0080aaa5ebe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
