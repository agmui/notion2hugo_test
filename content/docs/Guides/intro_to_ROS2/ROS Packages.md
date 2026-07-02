---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>



First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=801ca8abca9585e3a2228a8607c03907fa3df6a782a9004cb796398441d40571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>



# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=869993909e75058b8a93deaa5b1d43983e567adf8cd364e93006042bd71e1104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=3dc6ecbe1a68fc574f434e890759b45db70155c1763825ded49bc2ac2a2be2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=a98da859d60b8ba3a4a989a9a52c5a9baeda09ae670924d2273fe9922fa6deda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=dbdf197532a41c08c5bc3dcfc147987f6761695df9a38195b9d9510b1dce40e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=5841a954ad004fedb38829d1e579e6c54722dfb2134c6601cda0a4ad62522394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DUHFYF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA1USLJLWSKgJ7usQJCOrl22PqpdWf%2BgdV9kHLiG4OhEAiEA28Xeg2z8dMwxUiI2duJfB%2FHaCNqH2TCUYLpbgr9hb%2BYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzurg26C0uX%2FS2lSrcA%2Bn36qXRi%2F%2Bby1GuyRx0b8MtROwQbQCIxj1Gg22kAAitAdx%2Bh0USu3uH7D1sJsHNj4vM4TS9AHG5X%2FVZRNaXyFGQQCFdlYKc9XKkjYa1miA9QhrACyovqnyTcn%2F82BsjD%2B0JmKtbmGIr71THqBrlJfd9wDSRZj3AUAU1yquVa%2BLb4XhfQjBqwcWaFGWBJBpZlv0Go3RUwG419rVaJnubTND24VpAeo1JUO%2FCEgTE4Y2Xr2TGNaEm2TJmOjzb3c9Kcso4u%2BrvfiFZWrbiXQspM7Bnh%2FR3AJFHgOA80fdMpfoU7kBcOjHArSltdgXlMvn70KVIi%2Fahd5vYT1EzmcxRCv84%2B0jRdsK2hIJrZM%2BRoeGRHucsSiaxOsm29aIJo6L4N%2B6Hai9JOaHV5%2BaLSV2tMOh9taP6gT390SOBBW9sy8Z5dkVotrnd%2F7ccBNXefyQqtLBVA4svrKnc3DqntwVxuG1Nh%2B7f%2BAjoWMiNeVv%2FGZq2bXiyFYWrmm2%2BtvSHS%2FNxA8mSPslmr750sVauSDoTPXFeyuH3oYiptnEjFoLfuNReJLphQ74%2Bh6dekP0IPXS1ty1mD3XgHXflgVKhteQijyKCSDE5uLLMj4bQFemaGhiAX1u4c%2BaHK%2FR%2BoONaMJ2hl9IGOqUBVerdlgZY2D2y9kq9boA9PmisSqpNzwrkuVR6eYiqnwqoOQxpSYmYZO2l2pSt7DAQ5hRnxoVaV%2B34yU908S8kbIroaSxjG%2BEhgohulN7Oh0nz3ssNS%2BAfjicUuiRZCGF%2FRNFVBxgvHE8A1ktM3oHBpl3hlK6OCddsNkKke3c128joo1hpuF8F%2B%2FvBjVmhcM0MWkFrKi373BEkoWQNROYmZGpwICNX&X-Amz-Signature=23a9521d21a1e4a7975659f8f7c89ca3d0d75af3620fa2dd26318825c38e88d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
