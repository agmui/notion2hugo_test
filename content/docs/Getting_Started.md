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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4HCQST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKMii7W2w%2BYbAq5voe7ET7o4q%2B%2BKN7a%2F1fLgiWJTMkJwIhALLQO19z0mUFruAFi%2B8pDvyZ45ClLAY2EyCt0kCElDbgKv8DCCIQABoMNjM3NDIzMTgzODA1IgxDsh6bf83DMdurXioq3AM0UWp6V%2BmSAGhVG8QCIVKlQRXFxOeNIxREzmrlgVDcd1ZRo%2Bi4sEIdSCd4eQ6nKM3LBZK1WDiG1jXZK5qoSZ5TU7BdCcXjAijmgjivD7lktFzEyUWGBU5p4cqrv6GonQteE0vVow9%2BteqY5N7OgVwDLzQIlkgekReEU86tmVCwOmQmiKUkZ88uRBeUNP0rYxr7jIMkwloZbRhuQFTqMiGTdJZIKjYnV%2FHv4W7YTJ78Hd%2BuTKYsumryEpLjDLZoVafOy3OllBA55Ib11Aet7imqOuu%2F7Qen%2F4OvfZqCHuWtBoZN5iyrEmIBeueaXU%2FZxCTa0tJoE8S4RF6uKzYnJ5lZTYJTqKZfuKh4NBztAm2MNhfn%2FGW2EJyKd0nYhiAbfBXLRvsFQ4soksFJ3kVBfl1eXxS6l5IV%2Bbn01ECiNS5n9VoqeIguXAzqjWyXAMupNMc4pNhmh%2FIi%2BC0vv9d9g4ttJ5gSBOiTFhmbwRaDsEsZtweEIfGIEI2bcM9iIULzmaNUE%2Fz5Oe0YD8b6f3Efxuk36WQCAHAbwuqpr2MsPIuXPQyGYsjafic8maqvDX%2BxY2oqobx7ht7kKzThUMe2WgRPuI%2BylP4V8WUqy%2FqVkd5RCW91bfRRygr59MQt%2FjCrqLq9BjqkAU4FdJ4045vqLp5LqkOcjoKCyU%2BhJ%2FxPBOA%2BOAQX43T8C76nAjbFZu6dki2OZDeQkHdFsJ3EA7QY7a9Cf7eR4XzrrPRH9rllo0rAYlCvC5kn1PCl5GpOZiuARmdRch%2FyONq8hJZvORGmGuiG%2Ba5DoKjAHONanUhs8%2BSQSYOsIqeyTlkqJcJIso7HTL6P4kX%2FcIKSLxO1m7j0C5RPrbQ5QrXI%2FA%2Bw&X-Amz-Signature=e4de547c111f165260f5559d9dfee9150b6e7aae4bc7a2c7c3b9c33e4c658d81&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4HCQST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKMii7W2w%2BYbAq5voe7ET7o4q%2B%2BKN7a%2F1fLgiWJTMkJwIhALLQO19z0mUFruAFi%2B8pDvyZ45ClLAY2EyCt0kCElDbgKv8DCCIQABoMNjM3NDIzMTgzODA1IgxDsh6bf83DMdurXioq3AM0UWp6V%2BmSAGhVG8QCIVKlQRXFxOeNIxREzmrlgVDcd1ZRo%2Bi4sEIdSCd4eQ6nKM3LBZK1WDiG1jXZK5qoSZ5TU7BdCcXjAijmgjivD7lktFzEyUWGBU5p4cqrv6GonQteE0vVow9%2BteqY5N7OgVwDLzQIlkgekReEU86tmVCwOmQmiKUkZ88uRBeUNP0rYxr7jIMkwloZbRhuQFTqMiGTdJZIKjYnV%2FHv4W7YTJ78Hd%2BuTKYsumryEpLjDLZoVafOy3OllBA55Ib11Aet7imqOuu%2F7Qen%2F4OvfZqCHuWtBoZN5iyrEmIBeueaXU%2FZxCTa0tJoE8S4RF6uKzYnJ5lZTYJTqKZfuKh4NBztAm2MNhfn%2FGW2EJyKd0nYhiAbfBXLRvsFQ4soksFJ3kVBfl1eXxS6l5IV%2Bbn01ECiNS5n9VoqeIguXAzqjWyXAMupNMc4pNhmh%2FIi%2BC0vv9d9g4ttJ5gSBOiTFhmbwRaDsEsZtweEIfGIEI2bcM9iIULzmaNUE%2Fz5Oe0YD8b6f3Efxuk36WQCAHAbwuqpr2MsPIuXPQyGYsjafic8maqvDX%2BxY2oqobx7ht7kKzThUMe2WgRPuI%2BylP4V8WUqy%2FqVkd5RCW91bfRRygr59MQt%2FjCrqLq9BjqkAU4FdJ4045vqLp5LqkOcjoKCyU%2BhJ%2FxPBOA%2BOAQX43T8C76nAjbFZu6dki2OZDeQkHdFsJ3EA7QY7a9Cf7eR4XzrrPRH9rllo0rAYlCvC5kn1PCl5GpOZiuARmdRch%2FyONq8hJZvORGmGuiG%2Ba5DoKjAHONanUhs8%2BSQSYOsIqeyTlkqJcJIso7HTL6P4kX%2FcIKSLxO1m7j0C5RPrbQ5QrXI%2FA%2Bw&X-Amz-Signature=1ea03ae7265bb5234d0d85ee35318f25a402da970d1172f51f4cbaee035cd856&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2DA4YN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFUz7UW7mNIfN9oRGDDwNiBoQIQmDlEZuJu3kb3VC3mAiBuc52fTY9IsSXN%2Bpd6g3Ft%2FFS7bxP%2FoPfPEGzKICFcaSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnq%2FzPIN%2FQJH%2BHYbVKtwDbz83h5zLnz5U83IABg6UfVwlZL%2BABFdt6fb8S%2BaiQZivQsP3pzks3bXl5cwE4JLpujQ5F1Y73PEI5KBKLNOO3oWf8m%2Fus2i1d2skOWOP7BD3yTPawj%2BcFU0irG0wx0pC%2FGlyDOOSDDxJTQ%2Fzt748qQQfmuUCe3eYqkBT33fs44tAG3n9kKedpWBA3Ywc5CmoVs8ta3olc5uEJN3kpPv5jb%2BOUMjLkw201MN7K7hrwmTgBw2fmGHly%2BR%2BHl84kJTk%2BLJLl7dT4Tz%2FYpEVuXHU55O5k6Pq3xCT7hHzejYf%2BKbqWOwQXxfGuYduTmRlFuMkL92%2FX5zDufZ3Xv1Z4h4w0qwoGnsT7Cq8bM5k4HtlgHTo0VOCaZDgmeoJDe6u2NOR53xl2PYAxZ6w%2FXbzkVIEqJX6VEgDsczVmL0ZvIT%2Fq4aqygrd73V6yL1cso34Fy6yMRNdIhBVd62EPCDIHU1t3rrhvhvTPaJIdVFEhUN%2FbqanHVXje%2BhUth11PG%2BBWDf4lgednswbhCp86pgNCxOlkL9D253QHSgca7qs14M7m0y%2BNevBzoCQQDACTUU%2BL9%2BopKQ1rdYkjiAbCtBWiW%2FRUepPFkxAD%2BEGRXvaAzRcHxbxZZHaxGr68TdwfNswkqi6vQY6pgHpIhg%2BOnrYmv%2BWuPX4ZOLT4HOcF4KSklwE%2FP%2BO%2BgD2iFDt%2BztrAAlaMjp%2BuKF0cdI9fylXkF5l2wAkvfCLf9bqVdcvJez98JFFaSS%2FCt6%2B6%2FN0LLae8RbRnpu7FzPpOOouQbucb5QqhIDzkCqfLE4QI3%2F4tFlI24AyO5xV6wNoN6Hj%2BbYRiyM8%2Bn7k9DnaeWenNCdy2OhUk0zeaMB8v7GIWqmQwPSV&X-Amz-Signature=92e13a364d54a363e603e42b2f702e9a552507b75125be43922a6642178af5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43X44SC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGox61pQVqMuWHWqTPGoyGK%2BhChZ5t1uOY7EiPsO3PsAiEAj8133Ly114k9nMyfuJkkSaJJlMfttRv2l6%2BKFuXTbKEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNKOHzOC6xuG%2FIvoiCrcAyxMRNhCkYmPrTRZ9jlEb%2BUfg0WrEfUaPxfdZu8xCxSaSUnFvIR%2F1W692D5%2BzKnkJ%2Bz30tGooezsm4sL98dH500RqiKqToYGH8DyMMRZ4wO7Oo38M%2FAERofcI6RIHe9pEqCEoL9bNcRIFESkPwXxYqh5xLoZdHFRc4r6gD4%2FDNzMCEwufTdNFVW0e4Jog3qoE3FgEvuOcNfdEey4%2Ferr%2FaGKk9rIU5is3s5gjT%2BLqxncl7ypwqNVaCp7Hc%2Fh1b%2BHd25dWkMKQhMmieo%2FyOWMS%2Bn1eydTuFAhK%2FXWKyQrJ7r%2FzS%2B%2FKsO2Gyd1UyCNz6NXTOuh11imsBi%2FdL0NMsGa4WEPvGKDU3ziLhXYsR9CEXYnyJ1D1ffJfgONqbsyzZHDb7KaDE6bTI12msXFG1pqBltGXL6ld9U9%2BaDxTs0Ss461RyjlACnsV5mmEU%2BmP8wv8Z7Qmk2Eu8BSbAHr0h1ICnZvRHIZagv%2FjGFMBilW7X%2B3%2Fi3Q4bgX%2FJGdKU8XuKT0DY%2BEzFIfQs8xS0PGnBWx17cAkUudUl%2FyhSWK%2F7Asb7yjl%2Fsn%2F3rG3Tx7FfQzpR682lkDjn3kzcatKbCM9ihubw%2BD1fea9RQG%2BYxfXFjCO69XKhOK5oSm9eWaYZMIMIKour0GOqUBBR8pr8H2IZEAgqEEOyHVRezx%2FJtqdSEalA5yGJ%2Bd%2BVj%2Facg3ZpjH2fNl1rgWGJRJdU8QJJ5dLwNWlTm89YhM4nTCM%2BO5O8Pu0Z2%2F50NiASlHDhrdj2klZSgJnmdAwctfwGFyU8cgN3zeEECmQNIPfbHn0AvaxXEmNo2ZwwiG2bHNBPnAFngwpGLrk71NQFdNJqgH0%2Bj0Jo49WHoCMMXRInseSFUH&X-Amz-Signature=f543c8e958875f0d050036099c663cea589696d940e01c7817b316d805d15605&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4HCQST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKMii7W2w%2BYbAq5voe7ET7o4q%2B%2BKN7a%2F1fLgiWJTMkJwIhALLQO19z0mUFruAFi%2B8pDvyZ45ClLAY2EyCt0kCElDbgKv8DCCIQABoMNjM3NDIzMTgzODA1IgxDsh6bf83DMdurXioq3AM0UWp6V%2BmSAGhVG8QCIVKlQRXFxOeNIxREzmrlgVDcd1ZRo%2Bi4sEIdSCd4eQ6nKM3LBZK1WDiG1jXZK5qoSZ5TU7BdCcXjAijmgjivD7lktFzEyUWGBU5p4cqrv6GonQteE0vVow9%2BteqY5N7OgVwDLzQIlkgekReEU86tmVCwOmQmiKUkZ88uRBeUNP0rYxr7jIMkwloZbRhuQFTqMiGTdJZIKjYnV%2FHv4W7YTJ78Hd%2BuTKYsumryEpLjDLZoVafOy3OllBA55Ib11Aet7imqOuu%2F7Qen%2F4OvfZqCHuWtBoZN5iyrEmIBeueaXU%2FZxCTa0tJoE8S4RF6uKzYnJ5lZTYJTqKZfuKh4NBztAm2MNhfn%2FGW2EJyKd0nYhiAbfBXLRvsFQ4soksFJ3kVBfl1eXxS6l5IV%2Bbn01ECiNS5n9VoqeIguXAzqjWyXAMupNMc4pNhmh%2FIi%2BC0vv9d9g4ttJ5gSBOiTFhmbwRaDsEsZtweEIfGIEI2bcM9iIULzmaNUE%2Fz5Oe0YD8b6f3Efxuk36WQCAHAbwuqpr2MsPIuXPQyGYsjafic8maqvDX%2BxY2oqobx7ht7kKzThUMe2WgRPuI%2BylP4V8WUqy%2FqVkd5RCW91bfRRygr59MQt%2FjCrqLq9BjqkAU4FdJ4045vqLp5LqkOcjoKCyU%2BhJ%2FxPBOA%2BOAQX43T8C76nAjbFZu6dki2OZDeQkHdFsJ3EA7QY7a9Cf7eR4XzrrPRH9rllo0rAYlCvC5kn1PCl5GpOZiuARmdRch%2FyONq8hJZvORGmGuiG%2Ba5DoKjAHONanUhs8%2BSQSYOsIqeyTlkqJcJIso7HTL6P4kX%2FcIKSLxO1m7j0C5RPrbQ5QrXI%2FA%2Bw&X-Amz-Signature=3d3340d1ec0894fe6773d808256ffdf3f784f03b3808fac2e6ec30ff8be4966c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
