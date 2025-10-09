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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=24e74d5571b4c1ab1c813e79c9a0c7756acfd3c4c512207bdcbc40dcde2829f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=86d7127101390a2c2bc8ab68dcd875ace3927cae5911141aeece27b8adec44d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=233129919f4456e51acf9d88cfe916ce0472a28f918c4ba8ca57e012711fb6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=10d87131dfd98b04f87dc111ffaaab4e48882359f328c555d35402e48042ccac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=3cde44f9c7db050c56c4149f96d8db6f3b7c8ced6841cf3b4d75137671ec14ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=79d545eb7bb9ca34e89c26d6b32f58596b52806ec174c82937d1a7063856dbdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BV7KFL4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDmK%2FsjPPMz8M1eH30W09t%2BQW2SN6GH1QnXeZp7sis%2BgQIhAKFLya1sgAOe6Dg4ZXN0I75A0e0OmC4cfcN4SndMWvJhKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhvOC7KuvKbvw1fcq3AOxkxpECq29asdfCj2eMyn8y1S1v6DoXuTuPOxYj6geWbKoBxz30sdxveWbNUIySjFjN8lhiYfQWqwONVOfALyhieM9H8%2Fwm8QhjKobUO7VbnEayNcVqGkbthOg%2BhnFNMynNSpc26UtkWBn58Laj%2BrmHxfDs3eUPqsvQCYqsaIsxl1fF3ArlWNzJ6lK8bqhyRJsxmesC8zRgTkwAZCrtfydmQEaeQx8e%2FYFUpACYk1T8r9V6NvpsFA6JC0OLGT5Z5aXj3QV%2Bx9dTn2x7yZoORrwIBpKZCsYvdBh7JylGtoTnCb4C3o7yPGpyrSh8N0l3XZD0oKrUWhBUa5uNF5%2BlwqX88pM8ykdcpahPs6pmr1H7xEBXluWQhrtU%2BLBjKoQEIXVRg%2B0dQe4rO9ugt5EOoP5m1AV50zgx3dZD7ATv2NhEOmbNynLHJqzEShljagq5Vw%2FEGd2g3hhZHKZElvGbXslLiXvXZ%2FzgivqKD18kCZENcJVPYHjlLX1SmnsdMfHOGcgXzelSAfWmi6dOLvGYs%2B5wZSefizQ1qFTddCWXnXm9zNMF%2FqA%2BHTV3dRIi16Fjybe10XdiI%2BFELNdF6Vhvb%2BLP0wtG1kMadUIb%2FdXpCycxB8MtiijjrpcfXTC4jDb%2BpvHBjqkARVSic%2B90o8yBA3fgHRiau8IlkRFNgEbIQzuB8rBkN5%2FSjwNRLpmGFkYoFe8KE0x4cXE08LelP2JhSJwnPgUUU%2FWNpsWE%2FeqCDKhM%2FzyjulIygJWunlAZRIana90ZbVfLnzcvuQ4KLDp08ImGTGoadh%2Bwiri7EnOm2NgyzvgIZNM4zbhOTq1ImzOA6ElMiJ2augn8PCx0Iphgsr79LltwCRmy6bj&X-Amz-Signature=4ae91e4ea5e4e54ddc751df02cbfbdb15c730983334e6d893c681f2c048a8424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
