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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7AGJ3X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvSMveWgUYM0cDNUprZgsxvgJJpW%2BmHnZsja3xEz1lzAiEA%2B1AdqT8t4ItB1HbT4J1t8zop7A0Np4LsTdeqk05CCgAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9%2FTFggDawCILriSircA5l4iyP6azAhW6gUl1dBBsUqUCA5pZaw8UfpYURn7CZDDBBd09Z2bXmGztRd1OuDnZXNlGjOkHzxs%2BoctpJRMKR6O%2FnOoRrBBwIEgepNsJQcPEZyRGrS10ULZkczlexCyyPEP2Q88GygDUDFYGWcDIK3KzrTvFlFZm6%2Buuc6uxv8h28%2BMbpQKDqmWDx8%2B72BzZOhi8Y62X0tOtM5S2GXqBNvrwOqbTVKdkaozeiy4aRxChfcnS1GcfGB4SBGwrpObn5dzMhLm6RLHxSVD9pkHjweiU9x%2BbMdQJ0fn1%2BMT5%2BxDlcPuBOrxR%2F4il5ksm8ENRC%2Flcfg3U8jyrApshs2yTKOGrT0xsh3HlOWPATpfItvjN%2BW9yd35IunTYGiE3UIwHv7wWwPWhFO66AXcof%2FFTjVMhjau%2B%2BQ9%2BTZyK1z7STt%2BctkIg8V8pWP1s2KEz0G4mvlgLECVlwhwa6o87oRRGOUgWeB8sukNJ%2FMDu4egcrG7cbIcOizmMLJJc92EJqgpmxPTRQaaq0OJKlD8kInhBUhUzow5Pk9L1UROmMZRVweP7BsAVotd4CqNTg0SNQ1bvV1nw1fYJbBHooyiMXlyGpsmoqGJ%2F5vY1zBjJe9yCfJDL0UNdn84DrQT%2BM4MLv4mL4GOqUBXvcszICAxDLHkmy4pLMR13Ol9%2BhDpEoMRQnI2%2FBLczwSA9mzx0dE%2BAZq%2BqbIZm5h6l1hUIAFYIhZsMkiz819No1wEl04KkQ3KgfPoULPNYmi27OGBATQJyd2nAdm4C2q3nzUv2x1F03tSWviApb1FwwK%2FWPi97rIgPJp9I2C3fFpf4m78sowl7tLP5IByXB3fj9HwzcQy3npfPXO5N8IeK6pZNi%2B&X-Amz-Signature=3465788213fb1f98be3efe9e3252fb8f654f51adec4b3e5260ba05423594d1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7AGJ3X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvSMveWgUYM0cDNUprZgsxvgJJpW%2BmHnZsja3xEz1lzAiEA%2B1AdqT8t4ItB1HbT4J1t8zop7A0Np4LsTdeqk05CCgAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9%2FTFggDawCILriSircA5l4iyP6azAhW6gUl1dBBsUqUCA5pZaw8UfpYURn7CZDDBBd09Z2bXmGztRd1OuDnZXNlGjOkHzxs%2BoctpJRMKR6O%2FnOoRrBBwIEgepNsJQcPEZyRGrS10ULZkczlexCyyPEP2Q88GygDUDFYGWcDIK3KzrTvFlFZm6%2Buuc6uxv8h28%2BMbpQKDqmWDx8%2B72BzZOhi8Y62X0tOtM5S2GXqBNvrwOqbTVKdkaozeiy4aRxChfcnS1GcfGB4SBGwrpObn5dzMhLm6RLHxSVD9pkHjweiU9x%2BbMdQJ0fn1%2BMT5%2BxDlcPuBOrxR%2F4il5ksm8ENRC%2Flcfg3U8jyrApshs2yTKOGrT0xsh3HlOWPATpfItvjN%2BW9yd35IunTYGiE3UIwHv7wWwPWhFO66AXcof%2FFTjVMhjau%2B%2BQ9%2BTZyK1z7STt%2BctkIg8V8pWP1s2KEz0G4mvlgLECVlwhwa6o87oRRGOUgWeB8sukNJ%2FMDu4egcrG7cbIcOizmMLJJc92EJqgpmxPTRQaaq0OJKlD8kInhBUhUzow5Pk9L1UROmMZRVweP7BsAVotd4CqNTg0SNQ1bvV1nw1fYJbBHooyiMXlyGpsmoqGJ%2F5vY1zBjJe9yCfJDL0UNdn84DrQT%2BM4MLv4mL4GOqUBXvcszICAxDLHkmy4pLMR13Ol9%2BhDpEoMRQnI2%2FBLczwSA9mzx0dE%2BAZq%2BqbIZm5h6l1hUIAFYIhZsMkiz819No1wEl04KkQ3KgfPoULPNYmi27OGBATQJyd2nAdm4C2q3nzUv2x1F03tSWviApb1FwwK%2FWPi97rIgPJp9I2C3fFpf4m78sowl7tLP5IByXB3fj9HwzcQy3npfPXO5N8IeK6pZNi%2B&X-Amz-Signature=97ba201bc7e0246f35021ddc45d8e5bd37903d85a47dab7a4e2597b2cd4a3234&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWQDY6B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKnOay3o83mBzaZVjqK%2FVF9evYxo8KIkQps%2BBrf%2Fs4lwIgdJ%2BGNT6kmLz21%2FashnCv60%2Bhnx2uoSFLO%2B23FoujtNgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIIvHELaJnlzNguOyrcA%2BnafomqxgkCWxDZH5SWa0QsZEH2iOmXEQ1YwR5wU8QEs%2FBQjsBVyQ9HBCyBHn9TDwCUh3JoKw9hCTgyJ4phNWhkBlYvKz9Owg3LxrKqOwO8gT8oOnn1N0iizAumFguejCZFwc3Kic%2FIlsiN7XJHwRKby1yDR0QXnXzLXW%2BSh10v%2BlfbnJM2OaNjY5ivQHvj%2BCNgNvB3D9PIMji6u38NXXiK4aAYX8D0zsyxpi3pQvvU9pwQEFzR2mVlWgcVCdEIIB0jg77UKiZXEmkDodx46f8GS35m3PR%2B44aPFfVWVo7gak5YW3LRtPmBduMdZxm0lElNyTR2goyO%2F9u6JOwGlkGUWe8DZzpSv8%2FCOugVtvKkSP3%2Bbk3lzDpxPUYHqIqKyr7crnt9CqPbFJHVWJHZGzae1EqMxJt2jg3I2a7Sy96VdGvC%2Ff3L3eAOz%2FntBQuKXVuLWicaFld6Pb4hODSLMzjNJ9tZjs4giQgKOXU%2F4O4q6PjhnCKgmTsiXN8aqBC%2FcLpQXHaC1K9AUK9RdS%2ByqxNBbs%2FW6ct0793rfTK85vXMzBxwhxS6IrQEMEPa4vwC3%2FxOJLOG2KC5Fy%2FpKjJXpdmOb26oypIZjh2ajF6UI%2BEvg2tFIs48E9w3XQlWMLb4mL4GOqUBowX%2BlbXCUFjdyOAPOfWEbeL6ENS42QO3TSijtd7zVqjZ2T3IiJWBn1oYPBxKekqymdaRsMFt9chQWpmNGOHRpBtoMpvnW6qxEhk27vullj5EphhspQEXzr4c04Y8x8BVudIf6AmT2TXPRZzoBBlYD%2FQkO7WjNM6lZz3ONQ6k53ZGR4mntCxUmnBjvnA9qSj9%2FpIU9iLDWYPqrLZ1Nc%2BvDHWBWTs1&X-Amz-Signature=703628fdf6a98fdbc70dc1e8be4fecddd9ec910aa7be9c160402bbeb0e87bb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4AXACH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8R32AB7Co%2FtIw3bAOTH5D%2FDaFWUl6LAVLzvJNMccJPgIhAPthMtf9cD6vcVBadbVoW7Fxj4ZDqNqcDoe%2Bu2QdZ%2BkDKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyACR4ro2M5P2EcjG4q3ANEQ2f4DeO0CIGH%2BZMFrsRNuH6vCGdik9frVaefI84lgA5xlEnqI7iHXemy0s6BH96kIonGG7G4Nk55v9XFNTdbIeI1qg0Nwu7UJMX%2BuJqbxzjhuSiC1Gcepv8oWZfesv2vdXVJg%2FDiG%2FtMKMVgSk%2Betb1H%2BT98qewiRNnNqEtkH7huomGOnTttjvOwaMN8gsjw5a2KCAQrzYPTJWpq%2BSTJ%2Bt3ca8obcjmuJbXRgqWpK5fDJRTisi7LC9DL8Lp%2BASfUoq32qzxDGF7uKGcueRwlO6c6EkQ4OYNjn7%2BNHi2ATFtll%2B7SdGbAGv9uIL0fedA3ZwodOA7sDUOGwQnieIaKfPYkNN7zmcGz7%2ByoiifLrT%2FyxzMfJ8viwjh92Pm7jsLu78HQqheo%2F6ZuFKalUcxL3xCZ6lQmm4JNMTeCIB9xa0KiluWCV%2FEOUBR76nwOwIT52pTTnkAJIQ1yBJvQuHYFKrb8gh%2FIbVdAnLBBDVHmN0HgzE1hnaG9pzIPByBkpv7GB3JWjDNKYAY8Dx6DG%2FsKz7SGBzy4xDcracw7lqAEutBh8InjoeJoASK1VSt9nKW706L55EFMEdKJ0pLwQ8MLPh4tRGDisUEHvub27zxRa%2FQJSC2W4xbwMum4bTCh%2BJi%2BBjqkAfShLbLTjxAqLvxYBnzdlijZ4x%2FqGyCuvOwrEasW3X2K211rxfvVbVVYjC5pfXY915BUArBC4WuPwm2ROS1KLjky9Ni9r1x0T4is%2BiahZKKBV6Ury5I9Cd6mHsqWHzYbAKnBau34MPlNkCovoZKk8bRMZgBFNtlKsgrpm8VdQ1Rp6FbceYEUnNHmb%2BY%2FSgVOtRWLBYIw9OhTNYFt42uwvxOb%2ByhB&X-Amz-Signature=63f7d2ed15b84471215481d909cbe65ada57ecb3cfdad23302305fada07e55eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7AGJ3X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvSMveWgUYM0cDNUprZgsxvgJJpW%2BmHnZsja3xEz1lzAiEA%2B1AdqT8t4ItB1HbT4J1t8zop7A0Np4LsTdeqk05CCgAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9%2FTFggDawCILriSircA5l4iyP6azAhW6gUl1dBBsUqUCA5pZaw8UfpYURn7CZDDBBd09Z2bXmGztRd1OuDnZXNlGjOkHzxs%2BoctpJRMKR6O%2FnOoRrBBwIEgepNsJQcPEZyRGrS10ULZkczlexCyyPEP2Q88GygDUDFYGWcDIK3KzrTvFlFZm6%2Buuc6uxv8h28%2BMbpQKDqmWDx8%2B72BzZOhi8Y62X0tOtM5S2GXqBNvrwOqbTVKdkaozeiy4aRxChfcnS1GcfGB4SBGwrpObn5dzMhLm6RLHxSVD9pkHjweiU9x%2BbMdQJ0fn1%2BMT5%2BxDlcPuBOrxR%2F4il5ksm8ENRC%2Flcfg3U8jyrApshs2yTKOGrT0xsh3HlOWPATpfItvjN%2BW9yd35IunTYGiE3UIwHv7wWwPWhFO66AXcof%2FFTjVMhjau%2B%2BQ9%2BTZyK1z7STt%2BctkIg8V8pWP1s2KEz0G4mvlgLECVlwhwa6o87oRRGOUgWeB8sukNJ%2FMDu4egcrG7cbIcOizmMLJJc92EJqgpmxPTRQaaq0OJKlD8kInhBUhUzow5Pk9L1UROmMZRVweP7BsAVotd4CqNTg0SNQ1bvV1nw1fYJbBHooyiMXlyGpsmoqGJ%2F5vY1zBjJe9yCfJDL0UNdn84DrQT%2BM4MLv4mL4GOqUBXvcszICAxDLHkmy4pLMR13Ol9%2BhDpEoMRQnI2%2FBLczwSA9mzx0dE%2BAZq%2BqbIZm5h6l1hUIAFYIhZsMkiz819No1wEl04KkQ3KgfPoULPNYmi27OGBATQJyd2nAdm4C2q3nzUv2x1F03tSWviApb1FwwK%2FWPi97rIgPJp9I2C3fFpf4m78sowl7tLP5IByXB3fj9HwzcQy3npfPXO5N8IeK6pZNi%2B&X-Amz-Signature=a27e36cc815d0641ba94a2357c120d4af79248befd1920eeb4848f9a9d1de6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
