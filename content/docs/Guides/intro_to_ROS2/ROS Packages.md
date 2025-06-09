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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=4b8ec407810d2b71f924631d7bd1dcf536373349119aefad1e37f00b85b9a9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=77c70c56ece50bf94dfed5f89f3ccdbe6227144287d59d05e9d357a51b09c51d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=71462323a488a20a285ddea0ae041f3e2fb75306f096e30350052f49b08ba1df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=f7c686f43560ec9dab1ece300d187c249d809cdac40aa79661236c0ccf639824&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=9fce16306fc6c29bd987ab5f49c6a147c227dbc088edde266040fb4b884e3277&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=daa87bdd8a523361b9678b646f6132320029bf48c98f0cac5c6dc8d234087aff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DP6B5GE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuBsQMB%2BI5wqOI8I9XXz%2BYidVO6mzhqgpeedEorr9%2FvwIgXjKReDB1FdsdLTpMc8bWNN2ttcdG5zMJzb4g0yXZQSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ75OeikUvCsUfRBHCrcA3Vu79VSDYJL2Gh8wISeHKT50mmBFhrF3mCnnauorPmF6JYBegxAXU48oZnCjF7cQO550PfBZhmZLzRrPxD6F9v33yOGVK4%2BC%2F3%2BVHTooruq6vz1paSsSkQTLxPS42FDb0rVbee1Ra8Eglnn2Ifxj74apGFdbTrs%2FlUKrzomlzwIcCMD9FPvLGfB99GBE1A4GLqI9dYUoYoKIUPL0FJKNfVN1UYOithB6H87U6sbt96AV1E1zoKdkvldozbGEV68oj3tLED6KLYtj1M780QE%2FK6QLwv1hsMyEUrV5hM9yUs4uLunKE9ElqaJCwVbS5IZeomUNge9TPFmfl8e6dqIgdbiG3qBvMEKw6A9Nl%2FIFQ4j4OFipT42%2BdjM5C9ZHRPPe4i1iCLCpaRWRNwMGuXEEiXxMykdufrTfiZpCPizHVvGWmk6xAy92EzmRm0Ge2WUterkAFpsjS5RmW%2BaiXnpidk2Hoyh9iCTOfr64V3jaYZE87ySjxevCcTEbYvCmeUsDZRz2gX5%2BWGHxAjkaQRXhlbZT1%2F7z4n2%2BzlgdHRIoosEHFPR6uuJLCvD641sQX%2F13hRkP0DifqRfxNJKj84oSqNFUFT169AwCRlzQQjPADl3sbHTOuJ1IA3EmD2pMPTumMIGOqUBBFPVYoFuwJMpxmbcbJX67ieL7P%2Bx46vVxoGTdx9evXcwVJ%2BEdiAnrGQ4FfEw3NdL7le0tftjk5tq78lYjEggIYnnxnU0hdRuW9bdb1ZCAf2ciYpIq%2FpjtpqOkaDIMOMZ8%2BxpNZ2Wcu%2BsIjHsWHmQTTxki8a24wo8xk9VZu%2Bo5CX3JDBb2Lq89WMRlWIFXrxPcCNAfNh1I6wQqMfLLQ26kSklRSun&X-Amz-Signature=a4d73ff56a136362276d862fbdb14e3ac4b119d1a34a5486b1fa5db067e40797&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
