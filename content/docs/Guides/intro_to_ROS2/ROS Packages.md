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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=742c0d8e0522f5bf3255674e10b9204c20c736388f1a37b62cc3b3e3926af0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=19b4aa1c59c109b8ff618afb4a1ad3b4f3aa5749bdf6dd3386cb259d80c8a3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=5fc596dafcc8b440fcc731f68e091cfa282b97e1379b3b9f78b0526b0d201b71&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=a16ecf6b65ed19ae36b8cf42ad837ef147002d996240726b0a28b2556bd00e44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=31d8da0dd46d8ef2e5ed96cc0d6635e3618328d522d527108a9ecd967cc3cf08&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=34ca283eb5d5a5b9ba57a118948d67b816a1e6cae4e42813fbc92247209e8499&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVTUQLP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1mpSOAC%2FhPRp5NkaSyLNmwshObAvZNY8eRjRVqckvfAiBZIjdkS6rcjDuUNK9vYK0X5ZBdpyQKvlpud%2BuF0CwjdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8pFK%2BuZAe0S7KTzKtwDBI6y8kB%2BlUFWCOox5u5fPuBjE7rDHiGnA7DiSKwxdI65ckdyFIzGabcyEJgaOWn%2FspFXEeqBpmwF1y9XS4yHZPwfgSOUvDhTgcbsXd2nddzny4PXAOxGGMrF%2F2owNL0KRzDhKeaYMkjJWQ0T2pbhNY2sfstikFiJ0JDiodWj09sMlmSitd8Bwghe7caSr37tpCy6upOImKkJpA0r5YiatPEJAgnfwghNW8YstlERNkP6GbrDXu0MSIGNdrOvrQOMoCBiD313vyr13oKAyBoa%2FWpCEHJ9%2FWgAiM1j%2FMQVGJrvFdQCLXCBAbtg834FdpoyMEHhryzbDwUvW7ygyYGb38efx%2BKjBbcCfTF9FW8M%2BSlkzbF1jEbdSnOsvIkNHFPbFVVnamefoTmAKdDOR0U0EJTsl97XYhKEm4VVp8Bgr8%2FvjHOhgPc0yS87bPrfxDZ2bof4Ql939cPpTkCdP0XaSeqbhtovZ7YtvKD96HHuOukrMPH4HFLZD6K3cC5GvJB73R%2Fm5IYttk1kCt9eLPllmoJ3uPWBle5%2BqZIuQW5FmTUpJB7gam359GRwbrIqMiDJ9aNeSkEFqE5KlCxMH5ajCBWNRMp7sVw%2Bu1dPFT1xVTd9ioq%2Fq%2BUvDyQCVuAwrMbvvAY6pgGU%2B%2FGvU6ynRN46LRsW13GVEwrqIvwOVXBbdeVthY0M%2B1E4LNGt4ToSQEyp0kQ6gJKmifhNZBUNNdCxyPfjmHH0ERtGmvaRSaok0a7yAcCS%2FSp1TKCgFxe4NVEa8O2zvI9JAJJEb0S2PS60MIE5mfOd6fUoRjhK1BZkRwoyWnDHn3u4yjYdeltS2Wd5NLnesrGf6lnDhMYKAT%2FA%2FepF93V6RLMkNS1I&X-Amz-Signature=d77630c93929b8e571ca5eca5cc99603d799ee790c33e6311bd26bd6e3438f63&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
