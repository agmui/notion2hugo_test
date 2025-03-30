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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=a2c796a8684818502bd2cc0fb359b3f24ac04089e24b08b7b8bce291897e79ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=2951c86ded808e512b727f09c3c9d1333dc7457f8d48355cd8ac9b7509bc657e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=196887c5c028be7e9545b4623b23f899d7ecb19e98abbcfb200a705277498523&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=93456a926c642f25ab5481ad6149ed25b091c8094a5f9792be8d02716081bc68&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=67698f9c868f12042610ea9e454577e0c104431adf8d48a59e611443927c1cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=66df235d0bb1a399a6c3d45c21346c97e83da1a5ef69c3ebb7ab7d78a2298169&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HFP4O2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCI1mWKilbDWBxoJZqRPGsrMmcg%2B7MWVFCZAiy436EDyAIgBGJAFW6Lduo%2Ffepto3Nxrafmanaro%2BNz6H9QiKVpM3QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFaxc4i5v%2BzYo9qiSrcA3IJ8c6dGhXyHLhK%2BVEaGGp9our%2F2p959%2Bo0ASOLF3y%2FYsO8qcwKmbTN%2F4VPOoOpPiC9JJER5TZkjwFcogYUG2wy90cH0A7nuXSwjgHh9rKj0VfGAd6T78SkTo4fnuCIpnIVZqPmQeLezLhNprxU3vm9XmLTyGtDV2wZzcRqB%2F8ArwyF1vXHtTO9IsJLpqmxKrbGwHulpgxNVu7oGHoAcbuTFe376M30JWRZnmavyJtUONKQCAcKl9G4JfUFWCcoz4wriepdm43S7Kb%2B2QDDNRY0PKTk1WXc1W8IyWYg59bERjHb3Lg57%2F702V6JIjtH4HrewgiYNBCuChUB4%2Fs%2BWoIlCTiPhfMaJDrVi9qG83lKfMTTMeyctlvjZnfxeHvDS4U7F86D%2FWPFyJ8LgobOEaZ659RJWSNqo6NDkGAmqF3%2F8YrsYjd9jaLkGrRs0%2BweMZ0rW1RmEzzcSjUjXvxJUqoOhdgSHrjueCEUOObuPTPqI6pRnWenHt6XvVtsmwV%2B2akPyQR9H5QJZsQv%2BtXYrKCr6AjxJhVCVdfJfWL81aBtF4RtzIMh9GMNQpgebL9d41zGxlYwHAkM3nOWDJ1Et%2FgnUIe9DMDvJg3RMbH8K5ec1DrYCwxIbzoISvh0MKjYpr8GOqUBDAJuPWbgDsmf3SyzMYWXVV%2BDo3ZpLXBWH94n9yg5dwKkiincCzJiTT4wvxZ0UlWy6iF%2BFOgloiLmeht1vFm5dsvD%2BSxOTZwrYpI2Sjm4zDW43Mo%2BuKnal39QePvM3M0pSDgRBAryVZhc8TV9vSf%2BZTBjRXm%2BGQca5CXKjmEZrx63giMwhCRq3dxW8v831mFYrpcsQaD%2F2snCl6EsBajVVDPxclsl&X-Amz-Signature=099d8d382dca167414dbb0e182dc9ea5627d065e0ba1905a010800f502a8e0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
