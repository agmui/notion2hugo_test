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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7K2ULH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDseAwysPMBTQt3YDJUOChC57Zfzl5pJmnDhVXc3EkeaQIhALeQaR%2FxEvBYE7J1QgkPrIAvyD3ykhgWgzxU7KC5b4vFKv8DCCgQABoMNjM3NDIzMTgzODA1IgyJQd%2FON3dnFixxzb4q3APbKEBX3G9BeFM2iLgIGRJ96EngWu0TLpau1AecG105z%2BB6NYFwsQPAdNjoLs0wjypmc1j1uR%2FHyxKqLvWkmUTFPQbFtV2ct2XnpCxHgjd5LhqzpKd%2BC6yQtU06yoL%2BEID5q0QND5efY0jpb6CmkzD%2BX2KYzp1bbYyloGCjYzlTHHj41tiMldaX8ePJh0xedL%2BWYIequ3Hgml%2FzCu%2BIDgxLODgK1wNrkYquuN9QqGcbHZ%2B8Bm7rzfEoFCL31OFxAffX05Dz9Ep4hQDnps0qardLtAzR1kEsA%2FXofopIZn%2B8XG82t1a4hr4Ml5pCpdMncCMd8OL0iRFktiw%2B2LMai1Y%2Bp398%2BF0WCGv0UnL49DOnBNep8gPw3XKsu%2FtXJ%2BkQcVaaxbncMNhPXXS2OzeEZLCdZzNpjngDzc38BmIHsf4u2Zb3bse8jU0CbxPArmUQ34aUdghQuT4RSeMTYRNS2ddP0Hsrkf4mmUO2at7Uodv8oGvpaYkp1GPabu%2BVJGWAvDuZN1RkHlAhQaXaljpHP80rWY1FgGniTAhNhtUnh%2FawbHNXyA24lJTzFAu6QM6wh4sGr57Vi07Sz6duErPqJxzeJG%2Bvp2XBRoq7gqNXMBCKfczp4qtdMx%2FGTHD7LDCy6tm%2BBjqkARMV61rks0fqKWho9E99G%2BOzf5%2FF40jSEFzk99irWhYKNTxXYpNXiv4VEbuRj6xP%2FyVhbCRNId1Mq%2FdqZtCObui7l16B51Kcg7fL4H7i1x7xR9WRyMJ01u487tjBUNL5rvPgCZEfzIa5LGYs2sU4RdIQXS9A%2BxHC844SbVlyk8Lu6ff056fjkT6Ju2ARFDUESOlr5ns5jUTiiJa1KJ0UJsmMnG00&X-Amz-Signature=e7d5e8afde893e25fb70666a8fc75a9b0e11f94ce6df9d0f72653ad4f0d8a37c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7K2ULH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDseAwysPMBTQt3YDJUOChC57Zfzl5pJmnDhVXc3EkeaQIhALeQaR%2FxEvBYE7J1QgkPrIAvyD3ykhgWgzxU7KC5b4vFKv8DCCgQABoMNjM3NDIzMTgzODA1IgyJQd%2FON3dnFixxzb4q3APbKEBX3G9BeFM2iLgIGRJ96EngWu0TLpau1AecG105z%2BB6NYFwsQPAdNjoLs0wjypmc1j1uR%2FHyxKqLvWkmUTFPQbFtV2ct2XnpCxHgjd5LhqzpKd%2BC6yQtU06yoL%2BEID5q0QND5efY0jpb6CmkzD%2BX2KYzp1bbYyloGCjYzlTHHj41tiMldaX8ePJh0xedL%2BWYIequ3Hgml%2FzCu%2BIDgxLODgK1wNrkYquuN9QqGcbHZ%2B8Bm7rzfEoFCL31OFxAffX05Dz9Ep4hQDnps0qardLtAzR1kEsA%2FXofopIZn%2B8XG82t1a4hr4Ml5pCpdMncCMd8OL0iRFktiw%2B2LMai1Y%2Bp398%2BF0WCGv0UnL49DOnBNep8gPw3XKsu%2FtXJ%2BkQcVaaxbncMNhPXXS2OzeEZLCdZzNpjngDzc38BmIHsf4u2Zb3bse8jU0CbxPArmUQ34aUdghQuT4RSeMTYRNS2ddP0Hsrkf4mmUO2at7Uodv8oGvpaYkp1GPabu%2BVJGWAvDuZN1RkHlAhQaXaljpHP80rWY1FgGniTAhNhtUnh%2FawbHNXyA24lJTzFAu6QM6wh4sGr57Vi07Sz6duErPqJxzeJG%2Bvp2XBRoq7gqNXMBCKfczp4qtdMx%2FGTHD7LDCy6tm%2BBjqkARMV61rks0fqKWho9E99G%2BOzf5%2FF40jSEFzk99irWhYKNTxXYpNXiv4VEbuRj6xP%2FyVhbCRNId1Mq%2FdqZtCObui7l16B51Kcg7fL4H7i1x7xR9WRyMJ01u487tjBUNL5rvPgCZEfzIa5LGYs2sU4RdIQXS9A%2BxHC844SbVlyk8Lu6ff056fjkT6Ju2ARFDUESOlr5ns5jUTiiJa1KJ0UJsmMnG00&X-Amz-Signature=9746c7a33a133e373e2200d6e0141124b0d041e237c8af13134173020b084c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQS5FRR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjSohpMaMvyyWWXSZIXKVtfKF%2FwXfFv8kSS%2Bi%2BZ8cEUAiBSJ%2BOxC5FympefRXJRTw%2BZiYPz1FvBMzXPdgHfPb7qair%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMDobBLrAbELadikG0KtwDe%2BpeZOGUHnf2EIfd2BqXf9yvtyN602BSTB3Tas4aBnvjdluLdNeVtbcI9IUSE78Kd%2BtSXNxe9RWsgwO9jt0A1uftT03kMy08ODslrmXOBekV8lPCcciGhWK3A%2Fu3VJwE7aoh6uSkwXW9cHCnClwdNJ0oC9qZFD65uhjEV2xKXM9MhvayWXq%2BIrTw%2FZ5gUt%2FVw%2FVpZJeAbTvqpmE8%2BgG7zrlPUjxnR9yNButi6c%2F10meFojuN%2BDHMp2GbqmTkY5GPeFyvemsabf8KSgyO20xzzdcVKmbrJ%2Fu1JNsUC7fR58%2FimqFWz5kVOcHcoBTqw3F1aZmYRz5UdPhCuH1xA2nqcgRXnmmqwNtCSfmRws9eCpSwY9jROHpvbtTj8rbWamPRx1%2FeaVo3XHnI4u5h9s2QZ71QLe4XIRjzjFpnxnAdDrvACBmNx7ZI9O7JThBrpggaHOHy8M3bCcblYgQwp7HU4BVn83NAF06jTHy%2FY0HrlcnOAEsUP1RL3swJi7dgP95acbpKn2X0eppxCZ0ZK%2FmQYtmMIVBtioFANLDw9D5v1VMLrRujkz6YBJXNml1nW8mB5oQ3dr1xC6aGQKapYbfLP7gtd1F7zQoMTD5zMhgX53tU45rpmUqM3v7V5M8w1erZvgY6pgFEgN9Ix7RbAgXFhj69F2WXa3tZSORpYXbIK9pNMpUlHsl%2F94jIFokarvkFQlmfYXqodBEPBlb2tvxB%2F34W6U8QvRm%2BY79900aDUdjTRyRnFBsjgQVg7kk9vGClaYbqnugejRSCgis%2B3eNmMQgILL31rMDbSRI9CrQO%2F1ABRiAlsNXJkQ4dxd7jA3XfPPpIfl%2F6b6KPcQ65oI6k0RLrXIzP2RUX1ZAW&X-Amz-Signature=f24446e7c7a7a83c33f17d530f9c7f104b50ec4015c467052523d225984a7503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZ5KVAY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv23aTsSum1qUEOJR5%2FM%2B8T%2F%2Ft2TZ97NsKBasva7T1FAiBQZp97EC3hag0%2BlK6kKDmfRX0OQAno3p8%2Fn02Z2hlJwCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM0vV%2FDoWWmwmSWlIuKtwDjfKk5HzCF7jndCiA7yZwQJHFGSy3d%2BakGdZE%2Fsv%2B6%2FZ%2Fk6SC7N50lKAJBhGXPOBRg0hQmNGyUO0Ueyi7LKnNfhyxi6LMZ3X%2F8jcEoqYwOhpsh17ruU1dnJvkooc1USScRHoKIVx9XDOJ9Yk5GG%2BRGoJyIcSA0dnMkDiBjjgth2%2BMhFNmKNl2EPaCOmFMCrNOjc8tMqR5PEt8x%2BVqyqjUu5iiCSrL75wKlypuIStTlpHDbolZLssYzTcRkQjLQbzR8d9WnjjX5MjxGPoxb%2FO9f8PkDqb82DSiSZyYp2hHDQOISFqAmjWvUu%2B7Wr%2FAAtwxxDSFWdx1RlwwhL8i1wR%2FO91zbF8tcYmhs4iolKX2w%2BcZYlQfb9zBS8Q6Qvl2jkZSe1plY6u9QUGC%2B1ltsiqDk5NuMHJjGjHHMV5JWEDKTyeaqpSazEtKe2g9ZrjLl6xDQ1cbdnRXOH7NBHsuuXRIcc6U6i%2F3vHl2RPyPqKEt3KScuG72SllXvusQsx%2BuRpS18dYERelxrA7aScIN6vAcP77Zx8tel6s3iTrHHnvrJSude0qqZfdN8fRv%2BnhfYrcixtPPECy44rJbsjnA4D2Z8UetPv2RNFKIvY8MKAj0vLydsH2GydBrsEjfkU0w5%2BrZvgY6pgFDa3dogrtjqvK5%2Fg2PkCVQwkkMSCs2qCyr7rSaL1NEOnQFY%2BA97TdjnoU9hmKnC6CWHli6JtU4aHbsFUEALNYqVpif1nXGp75W%2FB3uBeSGytZV1XrUEpd1WlcPCMvnIy%2BojPw4Nt4Lz8a7XxYfhcIYc12lJdmIg%2FQVX0%2F2yqtFAfoghxmcBXQM32lOZxprUX8nXCPL14r9cKLfL3mtB31WZ9LGp3r3&X-Amz-Signature=0de88229c90fb908ec282270faf01be5252d5ca4cb487ff69daf347ef26a1c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7K2ULH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDseAwysPMBTQt3YDJUOChC57Zfzl5pJmnDhVXc3EkeaQIhALeQaR%2FxEvBYE7J1QgkPrIAvyD3ykhgWgzxU7KC5b4vFKv8DCCgQABoMNjM3NDIzMTgzODA1IgyJQd%2FON3dnFixxzb4q3APbKEBX3G9BeFM2iLgIGRJ96EngWu0TLpau1AecG105z%2BB6NYFwsQPAdNjoLs0wjypmc1j1uR%2FHyxKqLvWkmUTFPQbFtV2ct2XnpCxHgjd5LhqzpKd%2BC6yQtU06yoL%2BEID5q0QND5efY0jpb6CmkzD%2BX2KYzp1bbYyloGCjYzlTHHj41tiMldaX8ePJh0xedL%2BWYIequ3Hgml%2FzCu%2BIDgxLODgK1wNrkYquuN9QqGcbHZ%2B8Bm7rzfEoFCL31OFxAffX05Dz9Ep4hQDnps0qardLtAzR1kEsA%2FXofopIZn%2B8XG82t1a4hr4Ml5pCpdMncCMd8OL0iRFktiw%2B2LMai1Y%2Bp398%2BF0WCGv0UnL49DOnBNep8gPw3XKsu%2FtXJ%2BkQcVaaxbncMNhPXXS2OzeEZLCdZzNpjngDzc38BmIHsf4u2Zb3bse8jU0CbxPArmUQ34aUdghQuT4RSeMTYRNS2ddP0Hsrkf4mmUO2at7Uodv8oGvpaYkp1GPabu%2BVJGWAvDuZN1RkHlAhQaXaljpHP80rWY1FgGniTAhNhtUnh%2FawbHNXyA24lJTzFAu6QM6wh4sGr57Vi07Sz6duErPqJxzeJG%2Bvp2XBRoq7gqNXMBCKfczp4qtdMx%2FGTHD7LDCy6tm%2BBjqkARMV61rks0fqKWho9E99G%2BOzf5%2FF40jSEFzk99irWhYKNTxXYpNXiv4VEbuRj6xP%2FyVhbCRNId1Mq%2FdqZtCObui7l16B51Kcg7fL4H7i1x7xR9WRyMJ01u487tjBUNL5rvPgCZEfzIa5LGYs2sU4RdIQXS9A%2BxHC844SbVlyk8Lu6ff056fjkT6Ju2ARFDUESOlr5ns5jUTiiJa1KJ0UJsmMnG00&X-Amz-Signature=d60ac9b1d1a913409ebd165bbdec1ee2001e4edee5f5a7cba53d164c5178180c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
