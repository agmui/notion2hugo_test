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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=87f54c41cdd30e5772e0e91f052d08f6b22767f092e08caeff6d6fb5dac0697f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=e1ee0ae9dd96286d962b7c9a78cf10a670cb5d848a67b310a5d51eae8b1f5888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=33e0fef8dda2c604ecd516a2212afd76634ed33c30e438d810f875942bceed91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=671baed149e07b7dbfea4ed2bded1e4c63fc6a571f5410eb4eaa632bdbea29b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=409d5048c1d8d9404f9d6bd26b6c0c7fc3cf8a9221a6219ee48abfc8f9242593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=52966766181e28b9fbdbd5d8d01c64272769d1ee65438a061869ba63bae825e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKWIP2T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC0RstSAsl8yrpZ7ChPAv4sjxOQl%2Fe6Y0t7KwsRRz4JNQIhAK52lSR%2B9Bq3dMNWeTwbVd0k88OxN1IdzWhuhYbU1S9rKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZx%2BKFKQC9NYZUGX4q3AMhKYUT6c%2FEDuJQunAV%2B7yUcqHSEM%2BJz2KjFrNFPCceDINVrpKB0fjdIP0pdNY9b6OhTvU67zBlxUkwWBhIvk6cZMA72SsdAVhjYIAb1d9EPTcYyNlfpetvI8YKiCchv4MyFHL%2B%2FYh5Hasiuw3YkFm1hhTmvmaj53u681rwJbeBpXWT5zYuhoXVYZHg99dRHUYZnbMkX8UgAbg%2F1NJ86TdlZtVqF7rvPGgPUtWNZOFV1x%2FHE0C%2BDGyMul2SZgVcLOJK4mmNyeVV1R1hSjgLeaPEcr4sSHwsCp%2BZTVz2Z3xtGxRqu4OR7tDnfUj7KI18jx%2BsKY8u%2BEDRtDNdwWcYCdDmGN7m2g21LGffKfgynGRbsJM9wlPiIV9cqs38Iqspd9XN2swIfw0TnUbON%2FbciHNAh4qB74eABkNqgUZRIqoe4EKHrjWOFbmDqQcIcg7Ipz51S7SqS0lPx1xT5%2BCbCRvWoWmqrxeWYCDJBN3Duy%2FLgKP4PXdoI8vI24bNknv3DuXDkzUEtgwZUuaP%2FFNQUTmYJKeRE4cZzQ1ZWR5n0bTKwwJYvkrt%2Bj7JV6Dznm6UEh6ol%2Bbt0dP4pjIidAB5Tnl3DW5Y05GOZU2kQp%2Fv4%2B9gchpHuOjgOmCSD5XMCjCB2pfEBjqkAR7dpp%2BJXdMBXMxH7HY9qhCNUpg5JbKzTqp1brkQI%2BNSLWZmfytb5%2BuEZvqDo3Ln6gtghR5SA%2Bx9%2FWH6XSLDqjT9tjqAIM6I7icCUgKInBx312f9BCjl7GDvo8PBwY4W5ADRavObAjapcqCsZZDMesyYwZ5sOs5fiyzfuZkzpnDf%2FVPxHkNPFePWiYSjuTtT6B%2FkjcWtarg09upiirD7UQnoXJr1&X-Amz-Signature=0960b23fea3b9efb06cdba469a13a5f13031167cde99acd0eddcee4dee9eb183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
