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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=9bc855b8ecb9672dd24cacaacf838328d0843907287bd04c271963827e7539b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=0f278e77b0db73f582b934b772cbcea633250ece2db9b6fa9ab91f3c28654a51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=75b2c00e35e0f2b13f78beeba6d912e45695b8d30fef830d07651932db773637&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=e3a1a71610ceb2932fe5a87c494a2a003e5a5e16fc51d049fc2f7b528bc907ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=d73968ea8381282702425e3c81e2c57b62132b33633c10ceccf3df49b6a9209c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=5ee930dcbd70d020960042c9d45f67838e5864d747f8e6884886b21e1277bfed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY3DJVV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzrlTBalZC90wcb44ZZWQ49OvdhYyDpw3DdrV4P9VlygIhAOaeWQxfF9W%2FMJUGzI6i0nGNE4almeuGf76J3sJSCfM6Kv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJr32nJHUqZWXgLEq3ANyOjD3GtmJ0%2BTH9YciidawyYID0nuq%2FUgXvbn3CdSE4i79YFjwu3hRyirjr%2FyWUmw27PpFsPRDVy%2BMv0uBMEdZIFS4dfJJaDBYEcVjHZ8leSaWZs9GO7daRNUdYQLq8zwWzfXVyo3W3CvdpT3kXwyeTvok3JkiXeLcKPHD19EkCuAJKPheKCD95fp03S4Pz5P4ZRKgGUl7BPlCw8vDK5WCiHjm8cUz2n0129MMk0u%2B0GWlkolhSt9uLDYC5fxbH%2Fe5ryusavYrAxTX7zsOhE9v5SMB91VZmWeB72ONEj%2FXOsxoLD4bOTHtmps8HNPD7dxeqelQca%2Fc0a0MadOxSuYHm5DssXM2SveqslZ5ZNouPz8bEBS2ybWqaL%2BeLYx9dMkAsNiAY6NyvlEIBV5DBEK9pwJ206dKhhO4mtSJEb5whGu4sSnNaQBm3RH0HkAoStPIjpIfHxP0bjo%2BVoKBwSPqBm9cJzpDmoobI3mcmdMHZo48%2BnqSdw65GWsXK15WzidxHVU0cl65AvpKqRzfrnDmEDFEqi94PpxjMjtANdbv57%2BSEp8y03WJ6u%2BUBC%2FRMEpBpQa2cOjgnMYZsXU02nZLak%2Fegml9wFCR8M2ewykyVEXkJCyhhDZFqUcJGzCrmuHABjqkAbdvOwkB5m%2BND%2BLPLwv4K9TxM1oqS5JcpoRaIpw7MmhQP%2FbX0dtJToobXWzrUEmD3MeuEvh%2FM1c8EpFIG1J4Z%2BJtPx8zEDKHjEigexhABIKgwUA5%2BApg4e9VbH0sOLkX90LPL%2F1nh3pYypytZGHqCdN2vTcT2dzq%2Bk2k%2BDu8ZYRfTdl1Ds4%2FlLuEAhQj6t4994Qt3pVcCUnKXZVkgJdhjz80gyEn&X-Amz-Signature=13a8bf259adc7934b703e73bd387863e2646473db3cfbfaba0c15c0ab890c7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
