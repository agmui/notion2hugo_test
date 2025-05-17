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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYVMM2Q%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXEF2dlrBLiCVVDHhS6ZngsFS4FIHD1kPvNrax9pu8kQIgXOqOzEA%2F%2FvPP5F3bPnXkHFslD9F457tRqiJhkN3SQssq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHYahQoWG7IU6GdD6CrcAwZdV1uIHQEowlSuJ7%2Fba%2FhambNVJcUy%2BGxkxw%2FVuV4PXdg98o6%2BRY3aHq6HmHbZRDpuJZIxvnluuJlGMcgcZBp3LqMOBJ%2BUD2OS7CdC8kBYIMw7mJ3URqzsysBG26Y8zoyHaI3IT57n35psMXQLqk6X%2BODGv4efquoz6xumPnDd5jLt9CUPHD7sGb%2F4hkAL0ZRGRI%2F3OPm5pNxvRzJeWQAeUzR7S8u%2Faz6WNyEFyzlGZOisTkwc2GqWkzxUt60bxvc3KqJcB2HP1UssJOwVjxsubWEbHdElxvkqiLiZkQqiKcnO7Fknp4DwB2AdU5qwjfBzzBGUSWTEUXDyjJXNw1VjM0yDhqqerahErhYW5cAGzCS5qBxnnslYItpw3b9MW4CsVP6Lsq8e4jksmxwF1uWW6PG7RCIZpl%2BgoQG3SIcNoca3w7h4dkgLYm6QJMKpBnDVubkgQfnqVJCljWFePXVqHFWhrsrWjiOB2BSQd6eNexyA1bpXcawPM9LZJtg3lpO1DsHrHVmYctrfCLVsZFyvc%2BTLar76oZnC5Uxzbv2g4STCNHQXVEH6gnI2QgsqMP91D1XwSsbIo9xw1FlnEhVrn2y94aOWQb37ByG3nW4OC9PzhSfJOi94B9R8MNHqoMEGOqUBbwxKgJ7esuUXAfP5jTsQ6R5XdMLOVhkxJUaccPg%2FswKVhQMp%2BhmQ%2FhaU3heHGmf5Ksh9vHM1LQK3qTkHbtkQbba3lqDjghzZS2vj2kxiHTFrzrhoSbARP1kuHHkhiEAE4Oog5DJAOx9G7fvZOWdFYNcESmzN%2FMSJC0k6qCZAMJwZt4pvem0O3YqvUaDTuVZSplf1t95b2nXdqaiZrQAzHIJ10gFH&X-Amz-Signature=d3149c73aa518a2ae8b07a035636ff720e98f0ca918e9854530cc72782e38b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYVMM2Q%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXEF2dlrBLiCVVDHhS6ZngsFS4FIHD1kPvNrax9pu8kQIgXOqOzEA%2F%2FvPP5F3bPnXkHFslD9F457tRqiJhkN3SQssq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHYahQoWG7IU6GdD6CrcAwZdV1uIHQEowlSuJ7%2Fba%2FhambNVJcUy%2BGxkxw%2FVuV4PXdg98o6%2BRY3aHq6HmHbZRDpuJZIxvnluuJlGMcgcZBp3LqMOBJ%2BUD2OS7CdC8kBYIMw7mJ3URqzsysBG26Y8zoyHaI3IT57n35psMXQLqk6X%2BODGv4efquoz6xumPnDd5jLt9CUPHD7sGb%2F4hkAL0ZRGRI%2F3OPm5pNxvRzJeWQAeUzR7S8u%2Faz6WNyEFyzlGZOisTkwc2GqWkzxUt60bxvc3KqJcB2HP1UssJOwVjxsubWEbHdElxvkqiLiZkQqiKcnO7Fknp4DwB2AdU5qwjfBzzBGUSWTEUXDyjJXNw1VjM0yDhqqerahErhYW5cAGzCS5qBxnnslYItpw3b9MW4CsVP6Lsq8e4jksmxwF1uWW6PG7RCIZpl%2BgoQG3SIcNoca3w7h4dkgLYm6QJMKpBnDVubkgQfnqVJCljWFePXVqHFWhrsrWjiOB2BSQd6eNexyA1bpXcawPM9LZJtg3lpO1DsHrHVmYctrfCLVsZFyvc%2BTLar76oZnC5Uxzbv2g4STCNHQXVEH6gnI2QgsqMP91D1XwSsbIo9xw1FlnEhVrn2y94aOWQb37ByG3nW4OC9PzhSfJOi94B9R8MNHqoMEGOqUBbwxKgJ7esuUXAfP5jTsQ6R5XdMLOVhkxJUaccPg%2FswKVhQMp%2BhmQ%2FhaU3heHGmf5Ksh9vHM1LQK3qTkHbtkQbba3lqDjghzZS2vj2kxiHTFrzrhoSbARP1kuHHkhiEAE4Oog5DJAOx9G7fvZOWdFYNcESmzN%2FMSJC0k6qCZAMJwZt4pvem0O3YqvUaDTuVZSplf1t95b2nXdqaiZrQAzHIJ10gFH&X-Amz-Signature=f199d0f0a3f1c2d7abe9fb8dd07681be8b163fdf845b93c06ce4c895d0d44dab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYVMM2Q%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXEF2dlrBLiCVVDHhS6ZngsFS4FIHD1kPvNrax9pu8kQIgXOqOzEA%2F%2FvPP5F3bPnXkHFslD9F457tRqiJhkN3SQssq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHYahQoWG7IU6GdD6CrcAwZdV1uIHQEowlSuJ7%2Fba%2FhambNVJcUy%2BGxkxw%2FVuV4PXdg98o6%2BRY3aHq6HmHbZRDpuJZIxvnluuJlGMcgcZBp3LqMOBJ%2BUD2OS7CdC8kBYIMw7mJ3URqzsysBG26Y8zoyHaI3IT57n35psMXQLqk6X%2BODGv4efquoz6xumPnDd5jLt9CUPHD7sGb%2F4hkAL0ZRGRI%2F3OPm5pNxvRzJeWQAeUzR7S8u%2Faz6WNyEFyzlGZOisTkwc2GqWkzxUt60bxvc3KqJcB2HP1UssJOwVjxsubWEbHdElxvkqiLiZkQqiKcnO7Fknp4DwB2AdU5qwjfBzzBGUSWTEUXDyjJXNw1VjM0yDhqqerahErhYW5cAGzCS5qBxnnslYItpw3b9MW4CsVP6Lsq8e4jksmxwF1uWW6PG7RCIZpl%2BgoQG3SIcNoca3w7h4dkgLYm6QJMKpBnDVubkgQfnqVJCljWFePXVqHFWhrsrWjiOB2BSQd6eNexyA1bpXcawPM9LZJtg3lpO1DsHrHVmYctrfCLVsZFyvc%2BTLar76oZnC5Uxzbv2g4STCNHQXVEH6gnI2QgsqMP91D1XwSsbIo9xw1FlnEhVrn2y94aOWQb37ByG3nW4OC9PzhSfJOi94B9R8MNHqoMEGOqUBbwxKgJ7esuUXAfP5jTsQ6R5XdMLOVhkxJUaccPg%2FswKVhQMp%2BhmQ%2FhaU3heHGmf5Ksh9vHM1LQK3qTkHbtkQbba3lqDjghzZS2vj2kxiHTFrzrhoSbARP1kuHHkhiEAE4Oog5DJAOx9G7fvZOWdFYNcESmzN%2FMSJC0k6qCZAMJwZt4pvem0O3YqvUaDTuVZSplf1t95b2nXdqaiZrQAzHIJ10gFH&X-Amz-Signature=fd4fdcc2d364fc3520b379ab832b09d26852e4c0d1316fc2018d7606f50608a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUWUUAQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFMg%2FoqzdnJCxxSI9GXTHfKKlHRCoqXcZN50Nh%2BdaFQQIgWqzuhk7BZjOQkwhT3OROvN8MTPXsfnH06w0cCMr%2FpsEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPq8bIatbZnnLnPqjircA31yEO5GYzCEQfJFjQNLh0%2FXZqGJdN6cQqvHE8CcKC0nBnLrHmahr5aWPT7%2BJKCdA8FC%2Fnzy5dAyE1L503I%2FJjhQ5hGC0Y0Y4VmOWzDR3KGM2FEpwRnyuzEf4FtTJUxso3IMgNkoKfHiXQbqCXp4VhmpmdsmALj%2FR4svzUHsF16Vs44ZTMPA4SuNzazg8m1kQHvZmogFMbrwzcv1hisX0i06%2BFMeTQmH3XRIX0xAe%2FxD%2F1vMF47y0DgMXqyDZvssNgt4%2FMi2L%2FNpbZztNNgvV9UHTJNynVzn%2FS59lpSDmcA8JojUk7Lw0VbUrW6Sb92kq9qT1RkLUqp2jeFKgZSsLdhKMbtUpZ9wog2zq64jYzksEyVV%2F1VfmZgHf23ZIyU2kMYwDY49%2FRHLHg4XrlDsAKaoUQNMJ1mflcAzxDcwCDm30UOVJjPyW4%2B2mRRN7aV2VFLfs2MswFza%2F7WTGZ%2B9RqwvGHdJeFDczfFjP4Ec4SOTk5J20KD3UZu4mxuFaYBhU3WvdgGpDeoIaf7WfAz4f6ofxEnDPPKKWLtmgNeY4H%2FXlkklakW21YkozJ7pv2VscQa3YHiQvx0dAfbXGnKOYoptHaGm2TNmYW5fu77kMvyI64IXqMCA1t%2FCAXEzMMzgoMEGOqUB3owijsNCJGwTbM%2BrdePVaRz8IXLO29W1LniF2po6%2BVpKc6uv0%2BIQurzf%2FlLNJ5THnB4%2FZfZ7FsWhCxSRMSEdCvaM%2B5PgM%2BBqLWtGfTIDNclck9zbqUTJtYv%2FcY0A%2FPfLvOuyzBH00VoMiFwQOBKAsGY3fQmv2aSAbMRZ4uCKy1MIdvxQEmehSXzdS%2FdRQq7T44tjQ7j2kDh65LtAGMl0UMuZuOf2&X-Amz-Signature=e0b1d68f22dc71808790ed1b0dbedac8b73680075caec5e62622c53009419929&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAHMUNN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtIjrQFz2euSqxyU0HeFQNZvjJ9EPlfRHqPzhfU1DfjAiEAhUP6H6q8x1ZAEl02Qf9bd%2BZNGnqsolp%2BfyUb7U25yqYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJK%2BqSlFAS0hC7a%2BGircAz%2FQuRpyaYVudwNHtNekUKl7sG%2BlvRtznMVYXkNO%2B93XYcOA9wxQgnF%2BBUlcfQF0jLI7t5CfI6pUw3ZSp5JmPsuwV8865neb4h1%2Bl1ZvHmvJ0JYjGKEO290HzrEFfjqBXheyXlwEbVrN57vJRk%2FAsCOpDmexh6cewJOhbzIKhhJeYrz3UClOlMQBEiGmtTiyhPdd8d80VK%2BzeFczyi2bpuQO9a7FsA%2BrDJUd5uDhSYQdAKjQePkx3bvAkNm7TDODzsQMLAozaiNF7KCxtaJJlfWka8QArP0C7dpuM1Bas%2BGa5lZV1HJn38nKdBpj52g9bgWjme8amUYk0ZQUJrGYwEHORXvpBimTDVr%2B0%2FwO6166wpM4hGMfWK4h%2BH%2FiQqGxDOR4uc2yTRWbc8%2BkEdFX5tlbyS%2BhksjS7ru5aUatsMYQP7%2F8G197VOAZAZ%2BEtfeeDOWBSUI4n9q5QyGXXWKe4fKArff7oCDPFD87tLR69FtIt0IGSFxQq02MoGAK0BRVA08rc%2FaEB8%2F9IXKtttYcr42WW%2FZUmPSxFVKW3EeI977676Qqs1M7n%2BRDJYvKjWtoZTF%2FITVVNDrkNDibpUgav9N03eGbTzLFXnqxsEZOURjM1RTy6vpzIor2qQSaMI7hoMEGOqUBbClPyzebJpVTR1pEziFDQtLtM%2BHLZ1KWma20D8cUg8Z%2BOrQxHnK2PYt0lHUWbgLTyXjpsWEXDZqAo3pmsKCMEPIy8e1XOXazhPUhKUPBNtAFCzVYEnDrEMKCMrnvx4uI7F3re9%2B5kvjUiShw2egfdh5R%2FL1jZ7JiuHleFGGh3FdF822l9Zk49QEvl2TZQGbkvH0KwS8Ih3El3j0RgdkSgmkUiJ%2FM&X-Amz-Signature=f49b054516a9459e08288e9a6226f4ab357a4aabbbe68b09d0286bffa6031f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYVMM2Q%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXEF2dlrBLiCVVDHhS6ZngsFS4FIHD1kPvNrax9pu8kQIgXOqOzEA%2F%2FvPP5F3bPnXkHFslD9F457tRqiJhkN3SQssq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHYahQoWG7IU6GdD6CrcAwZdV1uIHQEowlSuJ7%2Fba%2FhambNVJcUy%2BGxkxw%2FVuV4PXdg98o6%2BRY3aHq6HmHbZRDpuJZIxvnluuJlGMcgcZBp3LqMOBJ%2BUD2OS7CdC8kBYIMw7mJ3URqzsysBG26Y8zoyHaI3IT57n35psMXQLqk6X%2BODGv4efquoz6xumPnDd5jLt9CUPHD7sGb%2F4hkAL0ZRGRI%2F3OPm5pNxvRzJeWQAeUzR7S8u%2Faz6WNyEFyzlGZOisTkwc2GqWkzxUt60bxvc3KqJcB2HP1UssJOwVjxsubWEbHdElxvkqiLiZkQqiKcnO7Fknp4DwB2AdU5qwjfBzzBGUSWTEUXDyjJXNw1VjM0yDhqqerahErhYW5cAGzCS5qBxnnslYItpw3b9MW4CsVP6Lsq8e4jksmxwF1uWW6PG7RCIZpl%2BgoQG3SIcNoca3w7h4dkgLYm6QJMKpBnDVubkgQfnqVJCljWFePXVqHFWhrsrWjiOB2BSQd6eNexyA1bpXcawPM9LZJtg3lpO1DsHrHVmYctrfCLVsZFyvc%2BTLar76oZnC5Uxzbv2g4STCNHQXVEH6gnI2QgsqMP91D1XwSsbIo9xw1FlnEhVrn2y94aOWQb37ByG3nW4OC9PzhSfJOi94B9R8MNHqoMEGOqUBbwxKgJ7esuUXAfP5jTsQ6R5XdMLOVhkxJUaccPg%2FswKVhQMp%2BhmQ%2FhaU3heHGmf5Ksh9vHM1LQK3qTkHbtkQbba3lqDjghzZS2vj2kxiHTFrzrhoSbARP1kuHHkhiEAE4Oog5DJAOx9G7fvZOWdFYNcESmzN%2FMSJC0k6qCZAMJwZt4pvem0O3YqvUaDTuVZSplf1t95b2nXdqaiZrQAzHIJ10gFH&X-Amz-Signature=f87c90332de5760280b24358cdd233093d06b4bf101920dc77b457fe8969ea37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
