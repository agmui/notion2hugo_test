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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=b252062474840b5379c18baa6408277767f5ac34830c77895451abc081dd3435&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=490e24ff1e083e4032b7b7a70ddbae050d0cfe13934d5f271d4f8d3ac0c43ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=4b435ed7c300b8fc5b20d2958a3507e4cac5319bb1895313a599e15b35dd4fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=dd90803ba4614a443958f5cffef3d1f7f2804a1dbcd602ccb3a002dc501e8035&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=01d542bc28e8ecdb90928efc4e3ee5db83495ac348f0f887d192624ee6aafde5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=58692d0dd082dbfdc663275f5778089949ccbad7702b1f60db18ca8fc8472662&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFCLDC5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGUmaIXFxM7pfclUUK9IeqAJKqESEAzCHLxQFEsF3yBAiEApdEnM%2B06s3XiCbk0PrVKZa10Qar8nzo5iz%2ByeDb6BZgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYEkXm2GClhiMWeJyrcA04CFkaF55dDzNfg4gRrxahXFr31Nz7HDfgV4Gkpo87xdzQmVYanFn94s3aIhAxzYVKtLvTvH5nmxu1D596r5b%2FgWvqDIgbOnbjeqO1vsBGgOa8o4xjU2wLs7kAgWn98BEOaltVkG%2BLVhZom12YZJ81V3c3l%2Fch3H%2FvxI1dlEdHBlOe6%2B9%2BIbnO2mPw2pS0utQRAb%2BUHBte%2FLDbajHj1nTAPimCfTzEyFOFlNAvUFsZLWccIhHH7HsZN%2FueSDt3h%2BhZwR%2FARLkLdUW5gxDb%2Fpzzk5iuRPxz4QR7gYy%2FDUwYUWbxjxbHw2RDNoM2iAMCr04uksU8WTPjTczFO%2BJsrtpX2ZNMCH2X%2FCET6oj9CVCTs29H7Cj1s%2BcnuCoQKSpDnizKkCQtifvfkwFp1N56hDAzuUhFQ8Ydq53N%2Fyd8VtkxJdJor0%2BLTkGv1cymj7O%2FOyNB%2BnNWZc5x3TSSyJs%2BXpqayGAV9i66auf6Zhgpng66bqIMuCncX9FQNHU%2BU5XN5CHQNdN9av3tNOTChF8Ai4IEq%2B6DtdXPJREdDj8gRV8P%2BilmPCShuDUH8KJfk0CvAF3EO9ICK2IsxlcmcKA%2BIGpiJmAIEB04MhU6QAje7rZz784BeG3Cqi59MRVAiMO%2Bl1L4GOqUB84l8LDOrSygyj6TCKBGd17W0A5rUb0k3%2FCpu6x1tilupTr1PvBX%2Bw0FX925381Bb%2FsJ%2FvHs0jw%2Bl1sFk17bZtEmus8APY56tejyZdogQ%2Fw6LRYTFtLSGBQkVmQ9Jzlzvj24e%2B0LLQevhLHB67XRMxbuXblhcjBfPUWjNANyFhz%2FYrfksKcEI463hiHrVaIYK7AIfoNE3D8PAc2QQFlkJWj%2FZoYeU&X-Amz-Signature=3a5006d21938dd8e0b433a4090fe773c7efa43e2e2a87bb406ee069dd3fb760b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
