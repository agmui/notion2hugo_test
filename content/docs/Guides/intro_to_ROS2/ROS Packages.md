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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=b03a832df628995a120c4d9cfec76eeb9cc4010eb34ef397f04912f95aeda433&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=fb2e994372e39d9260ce84c083bd6353d0b20aee5d6bece5657dcee8d4a1fa6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=10765bf75511a3f5c18ea4657227b71b241dfd794993872cf18ed0cba8d8f271&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=832973db1b9a746cd48cd9041fb387e4cb1dd628bdbaaad80b85a507fb0c0de5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=75ad3b69f52c3f482ac2432a8419ee9f92206ba42ad2f92eaa328fecf57125a5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=5360912c144b2222bf194d22fc51d457f1632b33cbd0f34fb5bdfb2efedd2a97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBY3ZI5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFbsMauogXSzay1kPfHCXR0HRZ3ZfoQTODdgyBZQM2G%2BAiBDGiydeZ3LvzsVGkYZqRUREDWNdEVuDiAawUC%2BERfQ5Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoa6UL20ftPmuU0txKtwDlRcBFoGuWHWKEhiMpChywwZTwu2Ju9lYKJpuv0T5RkzkWm727qM%2Bp%2BWvimZ7vdNy056nT14aWNWvhQdZdDDmMhPae5ph1QRFEjn1TUudPEbAVdaiCrh8Ykxg0BPFalrlKxYIipdJmFf%2FhWcekagKD6GyXjq61UdjgBf5CgBeSipG55pWOhiINDcPg%2B7pFQ7X4ZjP58blYi%2FofOa6hcqTGLQnJuWxMCpBNNr3xpMicHYHT77hyls0%2F4BxUrxV1g6m5vLYRP%2BSgYBtq2jNJbkrM6vwSW2e9KcGrbiH5L0Jz5OHYoWKumoibh%2BNVF0H6FUrBDnT%2FkcFZuJGZ%2BF3krlsq2sPosh3LbXNEsVJabYQ2oPlHkLZPBbGbs7p4%2BBdJ7kjdAj4saBIw62oH2Q3ATnMn7RjICuvu34iFyVV4UPJQ%2Bq20TZk4wnnHuJsdlPtQgYwu9rIjxheCgjxwDRSSJ0Lr2%2FvRa77VlZFakFHLNPIzAuu3bWQ95TqS0LruWnrfg%2FWv3vp8T0Xcy1cUEFglm509%2BTROaJAP8T46HLYTLI6sitEbri1S3pzvA%2Bz3issq%2F9DS9ysNtwkdiMZNBVS%2FovPQVyPEVqq4rAQ4m%2BVkubmt3ObY%2BnnYxWBu6eRX1Mwqq%2FLvQY6pgHmKUMSQPg02KTfDXM8xAmLg2wSVKRDEmP%2BKowTGSgfjGyLX1s9AZ4kJqMesKIRSDzacyfn7gGBvFYVBnGLKBg9c7eYbjdfBeu0GkxcGi%2BpDdT55zaBAedmkYLMDkVK52UvK1tjuM8ym61eBjjZ%2FhDNnnmsZh94VLrserELRujdia0kXPoenlFMIG%2FDpHedjEhrgeiCbhEJAr5GNWoewFG0XCb46RMM&X-Amz-Signature=bfbd60d0d11591a07ac9b7b893f0c3ad399b3f07ed7567bfbeeea34f310ccd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
