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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=176e2dded4455c885475a8db07ecbaeb99ac9495f03d2c5d95cf78bc80f52eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=8117c65a0f068afed62e029cc90dc8620c2914be11bf18ac27e7165cd4bbbef7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=8f6cb3c9943ec403ecec08c26acf46f95d48b0808cadc0c15eb88b7d809cc3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=43640c464dace875919f925002d2281960666f4f6b7f6238a565203ba8363cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=46e1b7d85b400684eaa0944c00cc5d3deb3b5ab94e908fdd8b2d61c5309b14b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=4416a835b34e95c282033c211702ea7677927d69a89cc6a26574ea1e2ad1a22f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FDNGAG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIHAhk6Q5Y5mtSfryo9wWsU1kHVq7CJ3OrlGm2S0SW9L3AiEA9y1BrmoiL%2Bl5zCaczfuIEu1oPzFOxxQ7eAfsAolIQAgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf54NaTSORKm0RlpyrcA%2BxQBfi1qwXHS6PpO6jEYkeStGigy43GtF7S8PWju1h7y1qD%2FYahkAFOIIEYoMlcXzNzFgFp5UdjXFp5DobnbWkRhGxkr1tJsvwaPJDO2wHPx0q%2B4vKufkPlfkYOAo4rOXTACUpsHymc3wmbsVFlWHcKszkW8aclJWoaYoi45XoYVR5hsoRcCb%2FIZ%2BHDyGqz14rGPMDVuA6uUl8R47eX1ATp23MEUZ06kxtl7cukC8nHgSWtmrpdLB0cZ1ArfrUmQPeQDSyqNybBXIn7wgM1YVdA0a0O%2FsGg6dPWlwi70hfsTB8vZkaHTV99ynUTQwGUkxWXQIi9wg93jFA17kTZlDF8EqjHT6%2FRft4C7SVWCRgj%2BpiEd8RxOMKz6RDQ9W5YawXuXRooHzy87Umw8lZ65PiRjFPtvEVbdGVa2M6%2BCTOSP2OM6%2FJEPwXXtFjgjA5JH1e5GF47CbpfZeHhnpEGH5G73KmqmBKuIeCxHJM0Y3aeMsRls8aRVJydb9%2Bvo8sDts7GhoqzC9pYlceDAARbyJ52apX%2BLcCOB6krD9ZEbJ5aPC10laoc1zvFFmdmtWV%2BchHhcuoXnKUYr774%2FcPx2f78CPQPMprlAgqS1p1gV9q5DpNROaFcYbigYnj7MOix4L8GOqUBwZ%2BUlKuiVM1mGzzrwugZ5avPL4fReZg2Gnr2NDwChSOVipiHJH219UKqjnBeFd5qyn8kOJY4hSAamO61AYVR2GiJON6b6Fl7A0dHrrV7IeTb9qa82NAzpD9gI01p8vY3CvpyhUyFgxLtUkC8R%2BNQQErCxbFyJwC7xRxeQsGdkEOctsqrHCv8kdX9caZNfoof6o4I914SkPt4Y4o6ORKn%2FRD1FnYL&X-Amz-Signature=386e708357075332c7b2b376eb43193fbb8f50201d9c10d20f04880937eb4acf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
