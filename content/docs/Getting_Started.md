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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYP4SYII%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6UkRp1F0yvAft0KZzy%2FXTs5L8lB4H6gCxkUMGyEBNwIhAOeZQKwt9V9ZNb7FWbFQvaM1DjDaMBCqaqXrOlREbAVLKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwSRxSGJRQ0NIncYgq3AODQjx0MXfBhW1qk6POwjBcoF8ROdgjVZDk2fJx%2BnylbODXvO4z%2BnmJWiBGAqUBq2y6cgitJTxR1aflKH2OsmwTGVuD0wCIbnMv%2BeI9SOkaIOTrYi%2FAKEWYa87gIC7UghS8LwqiNGyvLjkp%2B9ICg9tQvg%2FBAr0zpKwBDsxtbk0J7FiTFVgbFTxus1xA8HuOvmVzEOdi7hcGQbGBAFnhBD63G2c%2FXqhnqEn3N9ubXb%2BTl65qMU556VNcYagMcPRwlwXxuOVr2yi9Hc8YYl8AiiofRGlUW6qGVGFv9EarS6zDKd3fW%2BMXJ1X0NG2hso38BpePnSBR8CX0TBXnZlL0urzddXGDT%2BwjzEIOc0Gj16DVma9%2FrN3npj%2B99FA22bfJ0E89Lv5XlL3ef9v2NT%2BEt8PpDhAgh%2FfJ3a6xqa5MyL6lLCgl7T%2Favg5PqM8qT0GLoTHqMYiJtDJGTd8%2B3%2BxCAIRqyX00rh1IizfOvq9ftGOwnDI7xtxyyGJS05wHoO35zMGtiwecU9Zn9l%2ByFR1HaiOFbEj4AK8xlI%2BLKBd6ACvaqLvEvMPPEUQjTGs0QTWRStjWXfgDfK7y9kgpQh2wIOw3u6La%2BXSWaGjKgWHC9qJwbFC66Y8RWaC7sneYzjC%2F7vW8BjqkAed2cGjdnGIhPRiWF69jN6ceVJImIYQc4tXBZy4RVemogD0eNokRwBNSCoJKXVaS%2BVwLS1bfiIT2b7%2FqpNp0sLFlHly2w7iBTO1HUp7Fe%2Buqdcf8FAp4IlJgY1lpRQ8WOEox9LtO7c%2FDRikRkuVtHO%2FsGBiqdEIaETTozrFu5xOMLG0IublJtaXdX%2B37fRipMKg6NjQkZS%2FRK3Vf6ICdE1ERjJHs&X-Amz-Signature=8a60f929fb0669aee2fb15e1b9221f2257d2d094844795ea263f96dbe4944a33&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYP4SYII%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6UkRp1F0yvAft0KZzy%2FXTs5L8lB4H6gCxkUMGyEBNwIhAOeZQKwt9V9ZNb7FWbFQvaM1DjDaMBCqaqXrOlREbAVLKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwSRxSGJRQ0NIncYgq3AODQjx0MXfBhW1qk6POwjBcoF8ROdgjVZDk2fJx%2BnylbODXvO4z%2BnmJWiBGAqUBq2y6cgitJTxR1aflKH2OsmwTGVuD0wCIbnMv%2BeI9SOkaIOTrYi%2FAKEWYa87gIC7UghS8LwqiNGyvLjkp%2B9ICg9tQvg%2FBAr0zpKwBDsxtbk0J7FiTFVgbFTxus1xA8HuOvmVzEOdi7hcGQbGBAFnhBD63G2c%2FXqhnqEn3N9ubXb%2BTl65qMU556VNcYagMcPRwlwXxuOVr2yi9Hc8YYl8AiiofRGlUW6qGVGFv9EarS6zDKd3fW%2BMXJ1X0NG2hso38BpePnSBR8CX0TBXnZlL0urzddXGDT%2BwjzEIOc0Gj16DVma9%2FrN3npj%2B99FA22bfJ0E89Lv5XlL3ef9v2NT%2BEt8PpDhAgh%2FfJ3a6xqa5MyL6lLCgl7T%2Favg5PqM8qT0GLoTHqMYiJtDJGTd8%2B3%2BxCAIRqyX00rh1IizfOvq9ftGOwnDI7xtxyyGJS05wHoO35zMGtiwecU9Zn9l%2ByFR1HaiOFbEj4AK8xlI%2BLKBd6ACvaqLvEvMPPEUQjTGs0QTWRStjWXfgDfK7y9kgpQh2wIOw3u6La%2BXSWaGjKgWHC9qJwbFC66Y8RWaC7sneYzjC%2F7vW8BjqkAed2cGjdnGIhPRiWF69jN6ceVJImIYQc4tXBZy4RVemogD0eNokRwBNSCoJKXVaS%2BVwLS1bfiIT2b7%2FqpNp0sLFlHly2w7iBTO1HUp7Fe%2Buqdcf8FAp4IlJgY1lpRQ8WOEox9LtO7c%2FDRikRkuVtHO%2FsGBiqdEIaETTozrFu5xOMLG0IublJtaXdX%2B37fRipMKg6NjQkZS%2FRK3Vf6ICdE1ERjJHs&X-Amz-Signature=6fb653f5cfb7fae660e13549ce7f48fd329b37ec7a137e497ebcb870139c88da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFPE7HDW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvBIPgGvKje7ji1dkZ1fvmJDJWkoe3ZHov9Z%2FLuz8jyQIgBWr1v7cam7vulX%2Bi9Z7yBlejYKz0lvahLpP5e6154PAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqB0fw39IB3Pfb9RircA4ZaZMgQlXnuyKoZ8Wdyo3NNCgypsFSfJEVz%2Ff9ghaGIA1b0EIICWmzSWavgP7%2BYMdvm0z7%2FijniaWLi7aP3idU7xd3mxvFMKMMoHlRkpoAfjabjxqibk1pgevNVu15iDixi17J5UfZoOCb4xwrG2JU%2FJpSeiGDcxAMxCb2PeKlauovvfDPKa5U5LpSjFTQfFEjyOCfVOI5bKGZTh3DxURBW0Cto6IrFzRUne6CUjZAJ7%2FZQ6cX1Id1YsUPHATVKZ2P0AAGRXJlONZPZtT96MqsptW8Z70UxWwPTln%2FLdq7T8YfcpDTqhXqLO42GdZuAziMO%2FFiYp4JNzqTCV5k74kgF4QYU3uFS5XSv3mar4n%2F3hKwy%2FMhauFejQDT6mzCpQPL8RUI%2BMvSJMO%2BtcMup8bQJ9%2BeHzZHKF3vdLMV6I8X84qMDB88ALjWWqICrGbHy2d5ECWEv5KOavJShLmgLkCwMkoGHobLi0jAk5rGqI1sJRO%2BihJybQ%2BXFdd5%2B2nwjuTs%2F5SFRK4nBXQGKAM29%2FzPe4Hw1u7FV9%2F%2FvZjasAEcQGWW5DgBV2PBQXFyUL%2BJR7TQc9fW86yRg7CIxcBPXdJRRWZSx%2Fu3TPxStjhmN17%2FWw19bDQL62E9N6d8mMNXu9bwGOqUB5jx2lZjwGdU6rY6TNcpCfynD%2FrBB0aEiEfVT1ahZt2XXvMvK2wq3lpskbCdUNqveW7mWd6GpyvX0wZcV9dKLFVPtLaWium%2BXlRdoxbjW4zpt4SiReOv02Py2NSU3hElwl6mdwr2ypCgQM32t5fW%2By%2FI0Xeqym40Hu%2BCs20xNMuS%2Ff4YKHor%2FTf95BYGSXwKjEe99k9bVReQ1NjR9zh5R1hLtm14x&X-Amz-Signature=8cdaea221ffa0464eda04534b7bc1b924991240f9397a614715dfc62864e636a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEWD47%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDndTnFKGcu7A%2BuCQvQJzHyN5hflLkLoyTL43zCohWqsAIgeOCWqDij2Mnw9A%2Bq%2FJ5KuF6gj2qu4obPaLxNKSoJK70qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA514DR0lccJqbwW0ircAyCap%2BP8NQxY2Zk%2F1J2PGXQ%2Bik2uq0O5Wslq%2BMMe0Pg6U56MP%2FzCFgmCtJZXMuoGHY3iqRGCmfn6DuQ73KoiF3MBe8deGccio8c%2F83ScC0%2B5Xg%2Bq3jVe0lMH9o3stqDkb4VmGRXcYVGg2PrZarUe8oGc0vvQGt9RFak1u3lzJA6uc3SdJYbiqw7Q4wzyrKm0fah1mP97lOvjtRDgEfW9PxlGOrWfyD%2B9Tku7aZsjn7beZgOFnWf88z9jUNRmkJwBl8XC1RJlRW3QL5xsGqCk4WRA3mnMELxqUtLEiWqxcwzUCZms9FsuLSSZ24pgXHJUn0ja3OQzn2YqP7lwbusuoe%2Fnsi6mIt24iJf5gnYtE%2FwNe9DC76OTG9ToPzAzQVGkjAzADuHAcprj1K5BrjgBLoDKW2BS7DCT9kl2uJyV7Cs4TMWE1IgY2lWYZcsxynE4q%2FnWXLH0cC2bbRjJaMS%2BIFnT1YefnsxBhL4HP6JxNk12ciZgGhbJBNIGlqo22KWUddv2Ugu2Wvh01OE4LaAvpYev1AHDJs4aA1%2BY3CvDLaQ7P6v61ksje3Y5oc2DQGZp2hDmZlwr8NHFr%2B4uX73V%2F0RMejm47yB9TfWsZVTD4YJiCgdJS05w5u83t1dIMODu9bwGOqUBbKRxgO2wvUEHNaHfIGR%2FTZsLYysDtAgCatVfL%2FxJB7JSw5Bl80XwFWWJEiCb%2FQFQ0O3Tuh%2Fc9h3Bk0K4ZLbNOtC57DuvbLRpZWG4jINF2Ss2BoRDe7DJ3C7lmwib5p1BVa1Kto0Rx6aevw5CkqIlVSPaJPTjQozPxEoY9Qelu7h6Ud9gZV7P4RijOBs0hT3eAsNQze9QkWzk2ESO54M%2FeeYfzoev&X-Amz-Signature=c545c11fe09a31a156a50abbfcdac39978895a520b0107c1c798324ac09158a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYP4SYII%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6UkRp1F0yvAft0KZzy%2FXTs5L8lB4H6gCxkUMGyEBNwIhAOeZQKwt9V9ZNb7FWbFQvaM1DjDaMBCqaqXrOlREbAVLKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwSRxSGJRQ0NIncYgq3AODQjx0MXfBhW1qk6POwjBcoF8ROdgjVZDk2fJx%2BnylbODXvO4z%2BnmJWiBGAqUBq2y6cgitJTxR1aflKH2OsmwTGVuD0wCIbnMv%2BeI9SOkaIOTrYi%2FAKEWYa87gIC7UghS8LwqiNGyvLjkp%2B9ICg9tQvg%2FBAr0zpKwBDsxtbk0J7FiTFVgbFTxus1xA8HuOvmVzEOdi7hcGQbGBAFnhBD63G2c%2FXqhnqEn3N9ubXb%2BTl65qMU556VNcYagMcPRwlwXxuOVr2yi9Hc8YYl8AiiofRGlUW6qGVGFv9EarS6zDKd3fW%2BMXJ1X0NG2hso38BpePnSBR8CX0TBXnZlL0urzddXGDT%2BwjzEIOc0Gj16DVma9%2FrN3npj%2B99FA22bfJ0E89Lv5XlL3ef9v2NT%2BEt8PpDhAgh%2FfJ3a6xqa5MyL6lLCgl7T%2Favg5PqM8qT0GLoTHqMYiJtDJGTd8%2B3%2BxCAIRqyX00rh1IizfOvq9ftGOwnDI7xtxyyGJS05wHoO35zMGtiwecU9Zn9l%2ByFR1HaiOFbEj4AK8xlI%2BLKBd6ACvaqLvEvMPPEUQjTGs0QTWRStjWXfgDfK7y9kgpQh2wIOw3u6La%2BXSWaGjKgWHC9qJwbFC66Y8RWaC7sneYzjC%2F7vW8BjqkAed2cGjdnGIhPRiWF69jN6ceVJImIYQc4tXBZy4RVemogD0eNokRwBNSCoJKXVaS%2BVwLS1bfiIT2b7%2FqpNp0sLFlHly2w7iBTO1HUp7Fe%2Buqdcf8FAp4IlJgY1lpRQ8WOEox9LtO7c%2FDRikRkuVtHO%2FsGBiqdEIaETTozrFu5xOMLG0IublJtaXdX%2B37fRipMKg6NjQkZS%2FRK3Vf6ICdE1ERjJHs&X-Amz-Signature=af839504619ffc05abb347cf5a56c1500214ddf62024649be68a30b69cb0e2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
