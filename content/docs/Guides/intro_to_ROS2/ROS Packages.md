---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=5467151a95115bda5ffe206be5944f5f2979d7d7154e4ba24b0d76a6c3d9d36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=80d69fcb76c5ea71e29ea5bb8990a39fda1c703b62c4cfd749d66903ecbdcd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=73ff2f393de93af3e0a8be2e73a76b484b87603c6d3614f8245105755f1503db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=fd0596294b41e9c660fe5907205f0fbb669308f9999596ae9ffc88e0daa65514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=216e832f7cd6f90d4d49564ed78e3bbb96cf6760c82a4f38f4d033cc0e896040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=16979ce7055c1b10998f83867fda23cbd9c077242650a9a6bea4a7c7917220e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOGMUHR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB3EbECRLoasVZ9WWO2NgL7RXSWIPZND6jzn8bcP3BgIgVq4TFOyEDs91XK%2FKBaT0TeW3ByaE2ynBGxYW%2BiaLPQ0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFd9nHnr2asv5s8dNCrcA72cxIGw41UBQ5l4K7DmM4ytY2%2BaJ7v%2B78DUAOpYHMAvVCGe0qY%2FNk2KLO32HHJ6kTUnwms5XHRPd7yiorUIrOSxAxAvOI44yih3WzvDZAHhefn0VIkyg1nU5tyEFKxIfNnA0I7Ces5swElDb8%2Bmvc%2FPiYce%2BT%2BhqobB4LokwnRF6uVndDm2j0XsVtTC%2FKfFB3gE3Iu9ktO9RJbSyXBy471XLjI4ouREzl2h8Sog7xw460cthZOYgaU63IhtlC5xOf6dDAFYniKeQCtaW%2FagfK%2F61EXxo939a8zsa8ZazlMRnsBaD3GK%2BJGGtHSGROKlRYeRtLAdI7lX5lygAfELeEd3YssYehAsMKr4rhIr5MJ1N3IY1liqxb7xIlGaFa6ULUgHDnXWcF2lF0wbphqoQfQ1T4vxlNYHOzDB9VbSIjCkFFZiWQMbw%2FFnBOHUq1TQy%2FnNdOTdVFhiR8fRZsZe4c2AlswOKdmhuxductyKk9n7daaMC%2FDCYToMwXD5lYRzNnR94RVsQmPpWDC3Ti7KXnxruPFHgf6bLttIzyTFRDDEj%2FBN5XnlhEE0%2FKmYHPIpaB4fYJqRr%2FLQExdgpqhdU%2Fi%2FJ8UMcsXlWOhCYl36t50pp%2BOklME0XiBQRkDPMNmAusQGOqUBjxQ%2B7aJBo5f948hwlBURg3RJOeuGLdw8Jxma%2FFKSeszfkvPg2Ws18rZrrWMPHOGaRejtwsfgqwlWjB2PooUyAIWL%2BGjb%2BqHsv6X1vJJpnfvQ2rY8TMHrONfJ67TlV7Sn90vmdJyAPLIOc%2FsK5ygfI4pU8zW9UtWJotM8l1XsotTNJC3cf5Kctae3ajh3ZfLLFVsH%2BDG3rZJLA5jtud4kNv27xjht&X-Amz-Signature=f0ae2d9faf3b105eca0600ae1f59e17d532d3ad79a542117ca0dee8803286d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
