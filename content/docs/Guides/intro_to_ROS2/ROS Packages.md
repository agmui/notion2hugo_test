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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=12b03fd026dc4078723c353538554ddf7efe6d8f156f938f833c7989fe53f2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=2f9137a631d92f57c244616e956677d770b93ff1c51499a890beb9888eaab393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=19d686b6b3b211fed11cef848b77a76c7b82c98d3f357d811c8a1d36472980d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=377ff45da6524ce6be67884f60d0d1a6dd02d98614dba2a687c5dd208ef12e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=a19d9bcd07375e8540ded6753225952466ab175212682a544f04224726468248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=430d395e1d11fc99e7d6b30a88a6a55a56b5f8ed0d16a7945570f16ac510fba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRSWES7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICH%2BIIGvAqS7PxAUcG6cf6SmF6KdbsALcaO%2FMW49O3DZAiEA6VafUSD6hd%2FBjTWw8zGaOfwkHfDsmyt59bYc2BrYiDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOSwj9%2FzLLgvWmN36ircA8BxohCt4PVxRcDsoUNw%2FRQjinYoiKCwN1DPXnhApQmc3oFntIlFVMHDSYcTWYg6uf4CB2TwxKJfvEqdHPTfkSNKSCikP37uUIrQ2AtTN8KsWSl9KcyKZAcDz%2B%2B3r1AF4WbTOgkoIy8xssfDDKekgbELK5TBYGnIP19AD3uvBsCUTd3icZI3NKqVLbBJGSW8Zr9g8MhcTb80M1NZW3nHxzqBtbFxZpwVFCrb8HCjdcB%2BAHr0MfOPxy96l77BMqXZopQ7D0KDMVVfp%2BRE5gnbJ7SWJLIJILQ1NYeHU7y4usoVSrxr5gPpm0rhEPGcVZ86coebWDcLObcnl%2BOMuxcdrSmbuhQR9cSmDt81LfWUQcvswyIa1rfTlWt8wUHKung0IpvbsvwZG5Hi2mQ77LteTkrBcHjQ6nT2annJBuUnnKeNXOxNZXm9WNY1TVM5w74EqmSxjs%2BbJX23juESL4yqsNBIrFMMzhwEE74ad8fNR6ly6TyNuyfmDJvGo%2BW16wXXhpgr5B3OSyAgnBTF67PQRXZ7t3zRVZpbs%2BGpiGcWycBH3cZ9XSYfUxtXteXjp5o4cX8E9wjUULFh%2F8F%2BXIQxmiu6tiGH93%2FfRcElowlKrVVEOZmP8p%2BVJbhM5ADkMPL6ksQGOqUB6iiebiVyweRJwtSvhwgqajdFkUhLLgcFBKE4A1tqLJn10IhowBt%2FQd6ygSIBhT%2FoM4B6BEJhwlAnANIjGNpC8vJvauEjOfJsPvLUqbbvfG7omkBNMgRfaVVSCZOk143JPDlswxXfIq2FoeWailOEWIqOtERmlFV9FplVLlae6HKJPP1LeDwHHGCBu2YM0aZPEg41h0dgcmACkJwVyeLdbS6vcO9a&X-Amz-Signature=24147df414a2ebe09397efeb0d9e80b66436fe34245a8cd10ed5b968df9c269e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
