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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=eee14321c136b8d75d3ff668d85b2fd0747c53ef4c0ced9801434d2c38c64146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=c00ace6c0a894c7ab9449f49839f7dfce8c2899826e82393c2218807887d5c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=6fcb750c2e90e6df86860b3caaac93d07f24fec75f08bc6f1afcf4fa4ce38fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=989e4e5e01a1c7857dbe780bfac651960a6f69719c41dac8507a2f03486e222f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=deb31dccf5326404f82ba551306ea72c9aaa0754ce463e200376b371873beb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=9266b34890bae782fa1664d6a17c689cf52e2e8329acf6da88611d227fa3e5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJQVYP5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEfnn8NyoAub8EdE6aHpG%2B%2FwutyN8dofpVOV5zfhtZbfAiEAzsf8qPI9plR3FTqY7OgP9387iPcsEipNAtwzzhHIS9Eq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNDa%2Bj9QI5%2FzqcpsSircA4AwqvvIxYANPAGegyCnfMYC6w5gEFgYJ9SlHAjEuH%2BgVCIVgAifBx3vZqZTt74541kHVAlwd81EpGtJs4leO02pddRNUTh7rI303Hhag1DYhZGdzgjkgAtX5li7JCfWcNcnMlB8QICz%2F7%2BLNDSGMkFBdhgCotBEQeqaahksiU3qCPEIlWryx0nn5yC55RhoHGFAGOt6IqupCcMhBHJbFCrs6og3SilruEjOIUSwZGtObggkhPTH1MnthZNKme1SH7Bx9l1PH7d1VmRXuVMAIdRg4qJe1v4T09GDDdU4j4zVsyqJFyZ7dnbIFoyephpzJe9MTj%2Fx0lE76GucF8NCi7xqQC%2FwjNK%2F24taR8Bx03exGVxw9HYZt2TnnbYMRmkMxxtYpcpWIAF75KIL4CwgC3SfVyM6tD5zIG4sgCJcipGgDJY77qqn8XQ99PdcULcqqVl0XS4yFAGJgr7Zk17sg05qmvozAf8box927T3JaHksDBuQH%2FtGZ2fAFeG21DVPhHQn3EePq82kbdkd3HwqfZEPm%2BdC6xiqykXtrmd%2F5q0xOiVC6KU185uyF1FQ8Vdk3vkdYUoz6El8%2FWHOmxHJYq0Z8Q8PxtsfSOlZqbJrwnGpvrj21Fg4JZFsMV8VMM6O7MoGOqUB5FoB3N0OpzV1si6f1dc14AOopwbpl7NaZ%2FJvaou3vtPAGGr2jB0e4zMfCUwd39FMTHa%2BQ%2BNJC%2BLYR0iMhyeEgWizVf5KaPyZ%2FQIxNxX5M%2BHP3vq5i%2FNK1P1KlaF7j3cVd3JBbkRJwNUcEgKruH3yk3Gh4dc8gU0pBAy1JMXVKS5rQG%2B%2BCKauEqWCY4OU%2FbgRG1m9eA1GOmB0CD5KbQJ6wCsFuQ5q&X-Amz-Signature=fc5d70e2d04794b90ad0eb54262ab7d6c1634b342c2ddbdd66a4cbb587c320cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
