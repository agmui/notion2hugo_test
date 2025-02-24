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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICXZTZZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhT4fLihb2MmuZimHxFGP0LC1aPGfmV0z4GYy53bq%2FmAiANDiJX2SCZYs2xGWLfkCLi7P7alrWYvZqL2hEnkNDacir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMqenATd4MwY2Ez4lmKtwDjewokwxvcxMKTMunO6TcdlwulkOsDZ2H6R2ZBdBKUeFADdy0yxR%2BBTlT4XlkwDo0d6PWOXsIfDCZvFjY63%2BCaMa4nU5AgH7Ge4fu2Lzk0%2F3HWCwPkHLlDAE1u5X4mBtWH8Mgf37GjHZbxKJyle4n71ts0OK4JsIA990HmUN%2BhIiWyougC1YKZ9NIGzTV%2Bwp43ubPjSIGpz0twhTUaa0Boxf51n8V2DMYqFG8ou3laQxRr2MLdFJYrGtbgNrwJCBG43iYfNxzunIiR1ZoVMlproOUTmTIN0f%2FG5BtX4UWtgK584TMoHYsvZtKbYQuVTyS6X4ioMtg0djuyYHbvX4okyCagWKYviz7MsnIg7m2LMrMrrwBJEODIB0o3LE08%2FMVYz9G1UTakUssXtlQjsDHnHWWawK%2BhTwhyGulOm28ZMuBU538acI3yKdY0r1dnEHdmwizlfFj%2BAEhsNsto0Ps80x0unb7MTSTcvbUKz4w4UOR054z%2BgpUsJWZ9Vdzf5gfF4yr7oE3tKgpLKo4uHVr078uzAJLfjsX5RROlyrJGGWPPUunbJmalT9Kpd39MRUJvKH%2Fo8NFQI5kVSgkkxWDC10wqQ5ASACW6%2BJQEEkc0%2FMBaCKDky%2F9%2Fgqqcg0wp8zzvQY6pgHSK5vPES3zstvdPHVs8AcHWecLfXZSC%2Bp52LfsLSfuQmvEcWnw%2BVP7KZDqa7LUMlGLubQIYDMwl08Cw8GZm5hfVPeZ99FrEtu0ReP1yF0Lrd%2FlDLTvbRHK%2FjzlLDXSvsOmXXl5sNFuPGFH7I3gtH%2BEFBxK89IIdfd3fDOr%2BFeP6fTAb8%2F2HsMxSK6HpZ9np9thyHftdNnDuepJHJrWeSNu8l1r9R4y&X-Amz-Signature=fb46ea7ae577a5723c9aa9d721322aac1d4d70cd5418c501164cb9eee1692de4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICXZTZZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhT4fLihb2MmuZimHxFGP0LC1aPGfmV0z4GYy53bq%2FmAiANDiJX2SCZYs2xGWLfkCLi7P7alrWYvZqL2hEnkNDacir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMqenATd4MwY2Ez4lmKtwDjewokwxvcxMKTMunO6TcdlwulkOsDZ2H6R2ZBdBKUeFADdy0yxR%2BBTlT4XlkwDo0d6PWOXsIfDCZvFjY63%2BCaMa4nU5AgH7Ge4fu2Lzk0%2F3HWCwPkHLlDAE1u5X4mBtWH8Mgf37GjHZbxKJyle4n71ts0OK4JsIA990HmUN%2BhIiWyougC1YKZ9NIGzTV%2Bwp43ubPjSIGpz0twhTUaa0Boxf51n8V2DMYqFG8ou3laQxRr2MLdFJYrGtbgNrwJCBG43iYfNxzunIiR1ZoVMlproOUTmTIN0f%2FG5BtX4UWtgK584TMoHYsvZtKbYQuVTyS6X4ioMtg0djuyYHbvX4okyCagWKYviz7MsnIg7m2LMrMrrwBJEODIB0o3LE08%2FMVYz9G1UTakUssXtlQjsDHnHWWawK%2BhTwhyGulOm28ZMuBU538acI3yKdY0r1dnEHdmwizlfFj%2BAEhsNsto0Ps80x0unb7MTSTcvbUKz4w4UOR054z%2BgpUsJWZ9Vdzf5gfF4yr7oE3tKgpLKo4uHVr078uzAJLfjsX5RROlyrJGGWPPUunbJmalT9Kpd39MRUJvKH%2Fo8NFQI5kVSgkkxWDC10wqQ5ASACW6%2BJQEEkc0%2FMBaCKDky%2F9%2Fgqqcg0wp8zzvQY6pgHSK5vPES3zstvdPHVs8AcHWecLfXZSC%2Bp52LfsLSfuQmvEcWnw%2BVP7KZDqa7LUMlGLubQIYDMwl08Cw8GZm5hfVPeZ99FrEtu0ReP1yF0Lrd%2FlDLTvbRHK%2FjzlLDXSvsOmXXl5sNFuPGFH7I3gtH%2BEFBxK89IIdfd3fDOr%2BFeP6fTAb8%2F2HsMxSK6HpZ9np9thyHftdNnDuepJHJrWeSNu8l1r9R4y&X-Amz-Signature=ad9f6e9979b853a7788ce9c24632cb2e74923a6d102aace7281c580cc4c53e31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQF2NJJW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBR%2BpTDJ6AGqPH%2F3LZgeZmH6RX%2BEag%2FGN0fXlTlo1zkAiBSUIw9YXJJYO1SzsPZvzUzGdzkXk1n7iW0e0q6vlAZMCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2FGLkyZqvcSfm9mKxKtwDVGjlPaIIXqSEGdxkZeFMbKkp78FHxLRR5%2Bd%2BEo4x0CdjF6dn6rIUhGuc8SwRq6BX9VaZxazQlMwup5hJUTkqtbW%2BcxA4MIT3e5tot9nKME91gJW4Er%2Fd3OIsTvksJG4N4axeM1P3i0E9bMKP6KJtoX9CvMJ%2BzGlg1QcECXsvVx36YQh3oExAvPP%2FANdvcDxVw6y0AVrt8BZ28OCLhQKbjqR%2BB1q9H3VQ%2FrY4GAqjtgTfYVh1ywWN8euFmGDl3uFDjLWhTxaWDBRuSTW7kO%2FKXJs3Nm5Up9XA1uWlOwoEZmQ6MVMJ1oQbmEFUFJz%2B5i4sCmflxNyT%2Ft%2Fr%2B3V709Q0aBlfsXIagh60Osdr4iSF5JW0VbGNqiHmQlFIPm25M%2FHJInWjdeQZlpYkzfCxkPGbfVne57XZmkJElJP51pQ5%2BpQqsdtFhXOF2qzmmcITj5hD1Ba4nSXiVdhp%2Fu%2BNbN81adJsjIgHjvfc1b35N6c%2BFGsDc0j064eiEjwm70ug1Pnp4yEhPSY57fVN%2B4yzBMSf1EU16Fvd4hYfRjDm%2FOVqPH%2BJH0mMLBcixFF%2F083ckjiZke72s%2FkGY%2FySE2kctAAlYkmExiK3LBM%2FTTm590uAKaw3FiNxU8cM5zFAlikwxNXzvQY6pgEJZYAahJXFoa2DyUIp7bk%2FeYW4JPRdulYOdS25HKj5vNRX2SX4p0pHbXCNe2A45yDBPR6vKu9NW11PZwCb0%2BCUI0Riq16XInzR9eOJUyXH1Bwc443KKNfMVFKRQ%2BjEK0hHFrs%2BjiYykfiqifflA%2FirMZb%2FuPqraXwelpz2vang4KaPHOVpypdCEF2hQZoTYcat3d61q3pHjJXyDDm0T89DOwPdS832&X-Amz-Signature=f8d2f31599c6ce099b22fb3597a6f527d17c5a52f5f2f0976486d4883b8326a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDT3ZELU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnK%2BosM3luclTTsv8dSk7MLe0KjP%2F8VbNfPL1xTRZqlwIgHpx149mRjw5gng68UKUDpWOjCo6Q8eionBLnaTah2Egq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAJGcjkXtiWodYQs5ircA5ZMibt2ECcsYKYCVT9%2FTleGU3coRUPlrK1%2Bd%2F2nDutblc783g8fXPMzucbsf03nJ8uYa8KhOmpfNR%2BAwUrWXg13icbFBPw5kowgjG6iI7%2FwHuvnDys94BouOgX8Q%2BVVTTpQXTrYTaSfnpvIphztYfom4bOaMOLJ08J0%2FEEH%2BZtPCzDpB46CxPc7FpK0O%2FIodn%2B0F7heOGtwvPnIVJO5uzHm91NC5XZe4uUTesgP49pe9WTx70sS5GCUr92eqz03Iafa6qHM3p1g8r60rHApIRHes0e6HMH%2B7jUMol%2B%2BCvzVacAc8c%2F5w9YDvF2S5DAjNYW60k5cnLnJIznpO%2F2unKfJTpu5B80jwOAKBy06Dmu4iU%2FP1pCkrLO%2FU9JKkuOmGU5rJDc0Aj0I%2BU694DhLkwX9I3izYyvdTLHZ6Mhpkxphlh91%2FimlFzolVYLNDLgf23JYOPimF0hgYLOZkOG%2BbnGeT3RYFu87If15h%2BuKK8dDXm5uJSSM%2F9xPqLKVyF88lMHLr%2BugwEhtq20WUpjkqDJpmVb5bUFF%2BBcGLaI%2F3k6gp5hjgboejW9etQ59UtSnpJhM8M0TA6RRr%2Ff2gcO9rGURJAfvd4318VxnXUmkYD5ZGTSY8BkCaN60TwKsMI%2FW870GOqUBnmvpA%2BRXz74u97b8YUCRsH4CF9hyyXJjygc6KZYQFb7FgboI0KCg64%2FCrYuVbnVn%2Bb2kIh3aczGizqAPfYShZQK3j%2BbtC3OV3jhtMZaMTOW4LDSFKWw81G8ezWVDnXE5QB70dngEtdRYQE0nTWgAYvYOapCXMPXL15s2nwwfI5YBZXQxh4mk2Z10bLln6UOWymdxxhe3DerKLUz5OxphBlUpYFVV&X-Amz-Signature=37dd087bcda666ff3eebf2fcd34e30f02f226ebc3bebc7a7992a5205a8ec59a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICXZTZZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhT4fLihb2MmuZimHxFGP0LC1aPGfmV0z4GYy53bq%2FmAiANDiJX2SCZYs2xGWLfkCLi7P7alrWYvZqL2hEnkNDacir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMqenATd4MwY2Ez4lmKtwDjewokwxvcxMKTMunO6TcdlwulkOsDZ2H6R2ZBdBKUeFADdy0yxR%2BBTlT4XlkwDo0d6PWOXsIfDCZvFjY63%2BCaMa4nU5AgH7Ge4fu2Lzk0%2F3HWCwPkHLlDAE1u5X4mBtWH8Mgf37GjHZbxKJyle4n71ts0OK4JsIA990HmUN%2BhIiWyougC1YKZ9NIGzTV%2Bwp43ubPjSIGpz0twhTUaa0Boxf51n8V2DMYqFG8ou3laQxRr2MLdFJYrGtbgNrwJCBG43iYfNxzunIiR1ZoVMlproOUTmTIN0f%2FG5BtX4UWtgK584TMoHYsvZtKbYQuVTyS6X4ioMtg0djuyYHbvX4okyCagWKYviz7MsnIg7m2LMrMrrwBJEODIB0o3LE08%2FMVYz9G1UTakUssXtlQjsDHnHWWawK%2BhTwhyGulOm28ZMuBU538acI3yKdY0r1dnEHdmwizlfFj%2BAEhsNsto0Ps80x0unb7MTSTcvbUKz4w4UOR054z%2BgpUsJWZ9Vdzf5gfF4yr7oE3tKgpLKo4uHVr078uzAJLfjsX5RROlyrJGGWPPUunbJmalT9Kpd39MRUJvKH%2Fo8NFQI5kVSgkkxWDC10wqQ5ASACW6%2BJQEEkc0%2FMBaCKDky%2F9%2Fgqqcg0wp8zzvQY6pgHSK5vPES3zstvdPHVs8AcHWecLfXZSC%2Bp52LfsLSfuQmvEcWnw%2BVP7KZDqa7LUMlGLubQIYDMwl08Cw8GZm5hfVPeZ99FrEtu0ReP1yF0Lrd%2FlDLTvbRHK%2FjzlLDXSvsOmXXl5sNFuPGFH7I3gtH%2BEFBxK89IIdfd3fDOr%2BFeP6fTAb8%2F2HsMxSK6HpZ9np9thyHftdNnDuepJHJrWeSNu8l1r9R4y&X-Amz-Signature=a8ea7ff9c4e601c3d48145546e75d648f6d157da6409cf121d8df0ea07c36efe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
