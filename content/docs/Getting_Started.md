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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT5Z4LE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13KwI5%2FqPIkEf%2Blbknb5pOUIHGeyva8Yil%2FMvUcylvwIhAPZ7o0V792duxLeOW05uZfembk9cUyvCq0lHRCYTpCS5KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSqislfbrTn2RNMUq3APsMqyryRTMSP%2FvGdnvLayBhgOFmak%2BFtxk90DzxqUuei7D%2Fqaabzop4F24CRqF0bI8kFb5D%2BMXaOqbJBFhShP8ZOZxmLp7m9t9wWDAg5nZbbuURUOfoDfEfRi1SL62DxmsbFOjDWvR40EKmuQktjOjgeJgSkL90ICwmLqrliJ%2FpWG7D51jK5sbBSBJiFZa8ctVNzgHqk45X%2Fgxo%2Fk6V6FEH6qjD3eZHcFRmkZVTSkPDbOlJayGRqa5evb1Nx%2F1yE0W5ydN3bDzVbPhHYn%2BwaMTj8HHa2vYrLaBePhKhII3WW03VOVVh1Fuvoxy2%2BKVb1TCoERIZ2z2q%2FMVwwOdiabDhTayp3Q0PdaoIoIcCudKSDWNBqZpSG4dKpi6P%2BWjMac9OL93sHne9EjmSHUuSNLJyno0MEZql947uSAUduNRjNsZGMvfDSFgierV%2BHD7q9smtR29JCLkEvOwv9nPBXbr2TBGOc2tnotW0J2vDObKKZpvU2xVXp7rZaDI%2FvpMRYejXS%2BiT2qdDKticTEuAQNb97ii%2FVYWPWJE8g%2FapyQLitjpA9N1D%2BujGGHgFhzPH6Dh9V%2Fngm2i62hvsbnOnWkdfUbr7t0ghXJ%2FbY%2FijAcmBS9yIf7E2W9PLg0HPDCJ2czDBjqkAdjy3DtZW9L1Zr6JNHpfwaG%2B8PLWNdT3b86WP3PZuBkZ%2BtpXAh8NDdKSvwbJ8HpEleiwFCtU9G%2BHkScx6LioYBLbn2vwAjEzb%2Fy9aS4CcbY6sVG0KnolsrTWKpKaR6ndH0kOBrqssE0gUbAmQb1uZlBo2KtR6AwnzUxrajd1PvMBoXc0566kWGL0zFbLRr9NoEPfvqGRlRPWlmQJPZynbBeGCFs7&X-Amz-Signature=54eea024176ac7eba97ee57e6d55392933de1aa298d1e10455fb2d1de5c2d31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT5Z4LE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13KwI5%2FqPIkEf%2Blbknb5pOUIHGeyva8Yil%2FMvUcylvwIhAPZ7o0V792duxLeOW05uZfembk9cUyvCq0lHRCYTpCS5KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSqislfbrTn2RNMUq3APsMqyryRTMSP%2FvGdnvLayBhgOFmak%2BFtxk90DzxqUuei7D%2Fqaabzop4F24CRqF0bI8kFb5D%2BMXaOqbJBFhShP8ZOZxmLp7m9t9wWDAg5nZbbuURUOfoDfEfRi1SL62DxmsbFOjDWvR40EKmuQktjOjgeJgSkL90ICwmLqrliJ%2FpWG7D51jK5sbBSBJiFZa8ctVNzgHqk45X%2Fgxo%2Fk6V6FEH6qjD3eZHcFRmkZVTSkPDbOlJayGRqa5evb1Nx%2F1yE0W5ydN3bDzVbPhHYn%2BwaMTj8HHa2vYrLaBePhKhII3WW03VOVVh1Fuvoxy2%2BKVb1TCoERIZ2z2q%2FMVwwOdiabDhTayp3Q0PdaoIoIcCudKSDWNBqZpSG4dKpi6P%2BWjMac9OL93sHne9EjmSHUuSNLJyno0MEZql947uSAUduNRjNsZGMvfDSFgierV%2BHD7q9smtR29JCLkEvOwv9nPBXbr2TBGOc2tnotW0J2vDObKKZpvU2xVXp7rZaDI%2FvpMRYejXS%2BiT2qdDKticTEuAQNb97ii%2FVYWPWJE8g%2FapyQLitjpA9N1D%2BujGGHgFhzPH6Dh9V%2Fngm2i62hvsbnOnWkdfUbr7t0ghXJ%2FbY%2FijAcmBS9yIf7E2W9PLg0HPDCJ2czDBjqkAdjy3DtZW9L1Zr6JNHpfwaG%2B8PLWNdT3b86WP3PZuBkZ%2BtpXAh8NDdKSvwbJ8HpEleiwFCtU9G%2BHkScx6LioYBLbn2vwAjEzb%2Fy9aS4CcbY6sVG0KnolsrTWKpKaR6ndH0kOBrqssE0gUbAmQb1uZlBo2KtR6AwnzUxrajd1PvMBoXc0566kWGL0zFbLRr9NoEPfvqGRlRPWlmQJPZynbBeGCFs7&X-Amz-Signature=8a13aed8a2c17cdca4bce8bfb286b502eec5edc41b34b0a504eb402c14ff5054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT5Z4LE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13KwI5%2FqPIkEf%2Blbknb5pOUIHGeyva8Yil%2FMvUcylvwIhAPZ7o0V792duxLeOW05uZfembk9cUyvCq0lHRCYTpCS5KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSqislfbrTn2RNMUq3APsMqyryRTMSP%2FvGdnvLayBhgOFmak%2BFtxk90DzxqUuei7D%2Fqaabzop4F24CRqF0bI8kFb5D%2BMXaOqbJBFhShP8ZOZxmLp7m9t9wWDAg5nZbbuURUOfoDfEfRi1SL62DxmsbFOjDWvR40EKmuQktjOjgeJgSkL90ICwmLqrliJ%2FpWG7D51jK5sbBSBJiFZa8ctVNzgHqk45X%2Fgxo%2Fk6V6FEH6qjD3eZHcFRmkZVTSkPDbOlJayGRqa5evb1Nx%2F1yE0W5ydN3bDzVbPhHYn%2BwaMTj8HHa2vYrLaBePhKhII3WW03VOVVh1Fuvoxy2%2BKVb1TCoERIZ2z2q%2FMVwwOdiabDhTayp3Q0PdaoIoIcCudKSDWNBqZpSG4dKpi6P%2BWjMac9OL93sHne9EjmSHUuSNLJyno0MEZql947uSAUduNRjNsZGMvfDSFgierV%2BHD7q9smtR29JCLkEvOwv9nPBXbr2TBGOc2tnotW0J2vDObKKZpvU2xVXp7rZaDI%2FvpMRYejXS%2BiT2qdDKticTEuAQNb97ii%2FVYWPWJE8g%2FapyQLitjpA9N1D%2BujGGHgFhzPH6Dh9V%2Fngm2i62hvsbnOnWkdfUbr7t0ghXJ%2FbY%2FijAcmBS9yIf7E2W9PLg0HPDCJ2czDBjqkAdjy3DtZW9L1Zr6JNHpfwaG%2B8PLWNdT3b86WP3PZuBkZ%2BtpXAh8NDdKSvwbJ8HpEleiwFCtU9G%2BHkScx6LioYBLbn2vwAjEzb%2Fy9aS4CcbY6sVG0KnolsrTWKpKaR6ndH0kOBrqssE0gUbAmQb1uZlBo2KtR6AwnzUxrajd1PvMBoXc0566kWGL0zFbLRr9NoEPfvqGRlRPWlmQJPZynbBeGCFs7&X-Amz-Signature=c31c214bcd0c8c2d8c533842feef003382347067e08fe6a056fa23687ef9d709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MILCJZE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9VhvddSmIKEBSShSxa8XCkKCiLxD2P%2F5pOqdrikqKKAiEAiz5KXMMvhPMAQfZc6f1C7yBl9Df8KY1wcY%2FCt%2F5fcGAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsJO5zNJTp%2F2GobiCrcAwcLQh9YcLQPcrAQnDqOWVYb8Q67mRjEFhkh3oefwey4qUH802rAG2q%2Fz7ZtAenHcO2zh%2FelyE%2BOlNh6KD8t7Rh4RP6OrBR7HTmKS9g0mpHkkVoUTuvfPc9DLVqXSGV0jrxqYieqjyLtxA4El5MxMI74L%2Byaoldk%2BRYiyNkt9eh81mwGCN5kAHsQ1KwT0Ov%2BKXPxNeVKnnJ1D6L1gopKjKK7kk0roN80%2FDr8rL3Xf4ewDdWa8B%2FaiH8RYtptaSt9zZ2UydTiOIQsIElMTUnOJ7nPRE731V7GugJ6oNSYusa7DcSbz3G6KkFE9PUYqGL5FQGS7pTEJVIJNGTvsjI55Ka3MrfLpvTW0RHePAkFeXw5O2UIcStDHdug%2Baa8wvjMT0FEba5f5gVBSpjcU0LvRv0VFFTO6DFkCUSuqJTbJ%2BpRODTCL1aJMJtDjvKs0CAZ0IHNKQJEndGwnMBX%2FuFDi%2Bz5cjGF4QCDMGEN9pua%2F0fXYyqpPR1C6hPtndLQbaE39ZIa6cbqlglgl%2BhqTaElKH2u%2FFrS5IcIYw%2Fakyn6jZIdGyAByjhObgZ0%2F2MCCGOE3hZBV6itP2cSghbhWck%2BqjraF3qq55NcjpE1FnSsccAfa46pf7eElQenh9UBMO%2FYzMMGOqUBXsUq0hZtNbEjijyf5%2Fkk36lHTHr8ijdElbhXGM67zV6Av%2BvHY4R2gMABw9tQrdITkf8%2BCiRUlfnxLuZz1Wlmk4Yn1IZjco%2BnlFw4ks1MdqbMGrkM7h19dEV%2FPQF%2FU3hv9HZzv%2BYbjq9fozztMENQIanTSojJKf3Ewt1PiAA9IlJ6r89l%2FeibMS2%2Fq1AkxpTHDF9GSayxwb5tnGFcZV%2F3YdRyHL9E&X-Amz-Signature=136ab5e77193ae6fbe190967d9a27990a88a025cb6c4ecc270cf176a1d4803f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNAGIMK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHvpuNuOEctkVewDS8rbzIgVZyS6o3NLUB9y3I%2FweAyAiApmtOHDVSGjp75eae9ujLirYbstVyNyp6ZvF9IRmIwqyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7avwX%2B%2BuKnsHGdCNKtwDuD%2F9aAODI9Nez7rYn7T9fCnZh3ghTESjRnpQyGdLtRmwQYNE19wMkG17r1OQrnYUiUFxQ18DlGyTqc8MJE5TWN57bL05oyvVQHNlS3jWwHM1QokUKwdi15b53%2FDXFVD0JygNo1tfsbX5vvL6FS7phLVD%2Bto7g7hb1vrMQOgBCXUwdGaFJqha%2BZekHqgEze34sdMfTM232VyWw7JOi%2F7Xnf%2FJlm1unNOyofJYasvwyNj%2FxB%2B1ZQlPU5zfoAUUl0HuF6gjP7PohwVR5xScNWuZ5JOZsIh99WshCfNtgea6JmV2ost7Z0l2argQ6zGpnBKfwOKlde%2F85gD5%2Bz4fkFHZnYrH%2BhBrYhD3c%2FGBcv8ZXv1ygtZ1uU0DXM94mFxPe4DQ206QsqZi76x81SzZeOrJjV8e6cEsiq%2FBDwG%2BwIMjfVzu6wP6iMQHO4sn1Gndj1UM%2BvTD4ug46GjgJtEHiFkKZZNjfhsgb25gJBXp5faqsER04NN1mb9EIIACgrJgLZBd98OGpM7sJf1E0aWeXmzqz3FcPNDw%2B0ykGoT0ralzD02Uw59bKpmWO%2BpM2pLpc2ReZ4siKJT%2FhX7jLj37q0zAtDzJcguT1XjCav3VoI6jrhbJThWBdtzBaQbVZkYwqNjMwwY6pgFaQgTfNQv5mwzT5X%2FPRSsElCfkhX5X5lVLwSWOKaez13vlsdY%2FxBiLhpKs0ZRTm8tq7q8cG7oo2kCu3vyNc%2BfXLF53NJ%2Berhl4WKuKP7n3yTCXwgn2Cx%2BZX6EcoOFLH1i34Kt2Wm5YhXBag9tSETAgmZ32zS27sCoQnWJN%2BDdB7F30tdHVVaJFUyRp2lsfP3YsL5iZteNoamBQxbwaYJfVHp%2BYtYn1&X-Amz-Signature=300d1bbb6c85804e2ae702cfa0d3689d6df44108292e3895adad376fc81d76a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT5Z4LE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13KwI5%2FqPIkEf%2Blbknb5pOUIHGeyva8Yil%2FMvUcylvwIhAPZ7o0V792duxLeOW05uZfembk9cUyvCq0lHRCYTpCS5KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSqislfbrTn2RNMUq3APsMqyryRTMSP%2FvGdnvLayBhgOFmak%2BFtxk90DzxqUuei7D%2Fqaabzop4F24CRqF0bI8kFb5D%2BMXaOqbJBFhShP8ZOZxmLp7m9t9wWDAg5nZbbuURUOfoDfEfRi1SL62DxmsbFOjDWvR40EKmuQktjOjgeJgSkL90ICwmLqrliJ%2FpWG7D51jK5sbBSBJiFZa8ctVNzgHqk45X%2Fgxo%2Fk6V6FEH6qjD3eZHcFRmkZVTSkPDbOlJayGRqa5evb1Nx%2F1yE0W5ydN3bDzVbPhHYn%2BwaMTj8HHa2vYrLaBePhKhII3WW03VOVVh1Fuvoxy2%2BKVb1TCoERIZ2z2q%2FMVwwOdiabDhTayp3Q0PdaoIoIcCudKSDWNBqZpSG4dKpi6P%2BWjMac9OL93sHne9EjmSHUuSNLJyno0MEZql947uSAUduNRjNsZGMvfDSFgierV%2BHD7q9smtR29JCLkEvOwv9nPBXbr2TBGOc2tnotW0J2vDObKKZpvU2xVXp7rZaDI%2FvpMRYejXS%2BiT2qdDKticTEuAQNb97ii%2FVYWPWJE8g%2FapyQLitjpA9N1D%2BujGGHgFhzPH6Dh9V%2Fngm2i62hvsbnOnWkdfUbr7t0ghXJ%2FbY%2FijAcmBS9yIf7E2W9PLg0HPDCJ2czDBjqkAdjy3DtZW9L1Zr6JNHpfwaG%2B8PLWNdT3b86WP3PZuBkZ%2BtpXAh8NDdKSvwbJ8HpEleiwFCtU9G%2BHkScx6LioYBLbn2vwAjEzb%2Fy9aS4CcbY6sVG0KnolsrTWKpKaR6ndH0kOBrqssE0gUbAmQb1uZlBo2KtR6AwnzUxrajd1PvMBoXc0566kWGL0zFbLRr9NoEPfvqGRlRPWlmQJPZynbBeGCFs7&X-Amz-Signature=866d0077ca9ea25d599a3f670f62394a58fa34a3ec88156aaff307c58136e3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
