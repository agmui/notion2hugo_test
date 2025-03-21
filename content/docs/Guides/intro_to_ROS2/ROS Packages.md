---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

<summary>What are ROS Packages?</summary>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=bc643a8483a76939e193a26c66093877a23f12f7b22afe6b92894cfce645d886&X-Amz-SignedHeaders=host&x-id=GetObject)

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

<summary>package types</summary>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=306347ff270761593d04151f29262e2fd27cfc828ad8395fdc6c8461bb4b52b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=a28402da3334a7eff7c610158cc21a79e0c334f82a08f4b55bc94150c56f6c66&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=10549c4a2428f36523399e6487b97e76b5d9725d43059b7c7b596622353d34e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=b31b28f63e585c19c2fca30834c0560dd02b58ae0e4d5a813f0a0283255e7a49&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=febc2249e8487a9ea8083ed26964647d322880c6160e1a1787a10e6350ace4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIZUFWJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCE1OT3ZCDkIwliI7R9GRaWI9H5wYkmLQejjQqxfMVEwwIgcavzSIH%2BRKIzWGMR5apMjsRvdSYMj8GIkN0X2kucKcMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhXbfSHmhGYRPoY%2FCrcA4dXXMm2gnTFPGUc3F5qtkLrrdRFVF6hNZeFcPtqtsaKIxUqhWbROqzCQO%2BjIuz3Rr7%2FsM85Mtk2s7m%2BcFGTnpdABG64Q2FKz8KJa9Q4HFD7cLRTvkaxuXqKOTFWHSJqctiGinz9ueL6XaS0%2BARL5PE4zXrhLro%2FvU3iLROdxmx4BFXwntuOf7zsLomAeOAYwF9qGTAWmJu4cTfbC8s%2Fa0EdPQN6sbaAPEGj9a3P9M1Y1eC5v3ddWOPbPcl%2B3rLHJXbQ4rGcbikTRn3YDZ36ZelijiB4SOWS2s52vbtZeixvoblBRDJSRj8E3wqLLBygH%2B65EPEj%2FvB%2B4aQEReAe3mQstDibPsvEXrzjvB6ZUFHYtVaNn%2FyujnqK9jLqymCs3HGhRydTRYRTIG22BirnJFo36WkcHbIvL31GzKKpzHwdRBoJ6Wg9%2BN6NrPg9ThMGqlWd2ptiqxVTKYEuFcoPIFfyDxxKzUXIjnhY5vAy31Nhhxr%2BWsip9NU8TmfeW4wzzBZmbW3FgcBHg97x%2FOqzPKpwdOcVoa%2ByWR%2BktvWSMW4GfOgpRDcRycuXV0tdjSJuCRsHbXs1I6qBShZb%2FoZyteG36SeUPQ3c57UozMYEJ20i30cg09dyeoYzUHucML%2BX9L4GOqUBkiUbvCL3gec5470duL%2FyNmy7j57hjLpABE8GY8FONxzmWFnUyFEE9Emq2y2bKuRMA7iLRS0dDyEXBw9NAJTwWKS7OU4QjLdXWXt%2FyuKmDcMe8c3UqWdDJCN5qNoJGeZOLJKpxVgONrU3eEKP9AO0qzy4qMFVcbFxSOju%2BaLZYFgNlFLstax6NeBbJonC1gCOiDzzspFCpOIG4tHAxi3yHge0YVRu&X-Amz-Signature=8e71c7c8f6c413e6c922e09d5f7696d294e666399958198d1f4cc2bc1989ca96&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
