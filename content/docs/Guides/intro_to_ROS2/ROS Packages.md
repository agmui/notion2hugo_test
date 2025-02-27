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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=09e94a4bafd6bc36c7b48851f5a3766e649e2ab419dcdf793dc1a03f50c82273&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=030bfbf2bf6dcde04f667faef2bd7be60f09f6b2a0276c45dc4cd7a7c54c77ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=b9ae048bfc74a91d4af14a51c3cefeed2ab545dd8073be3796c53574391405a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=b5989467a21d490c2ed00ec818f004960d2f689b32821d71ef04da3df790c94e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=aa00fc4830ef201ae622875c19a116851e0b130abd3c3462b1198a39185767ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=6414b3047c86c2a481ca9b4b28b02878495aea924468f84962499b7dfbf29aab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJVK7GX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC%2FHsJjoGRtu65Orr7nd8e2UFNRTbPFqJpSw%2FVcKzhLeAIgaiS95GdRWySZDAdDTIAoec2xYWn0TX2FzaXDNZ%2BYRdwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDgLwvhoRpZzKPkI%2FSrcAyA1EN42UnOisMCMCzr0eXqhn3TkUZ4UvN2nbUmuO%2FnXsnGKqTxlS3%2FWO8yIKrkLbSPak3DOWRQw2bF71tkTCmdCgNzny4j6ljOvJYnkjbySgvLL71y1bWdVyWXGiazeL30vlz6AGN8hqsW7RFWyzyuaucEQR39kuqWp7A9DWhFNVC%2BEFQuXCsbYSwIYI6Md3jjXr8uCfESSBb3oH8Gxmy3wnO51R5RhbmcWUHlNh3KHaMjXcSUaJ0pjbRg5MxFCE8oH%2FOc7Cv7Azs%2B9dZhMb4%2FKkLSuJ5TRKioOLVwOCujpQA46PaaX64howaZgdEveFP2m5w9Rv%2F%2Bup1uNaA1bA26O4%2FMNsG7K1FKz9eQreKpEVmXi3241XdbGamr%2FuOfq7njW5w23DRcd3037deg4y%2BE8R44ZJkKa7aBGcMDz8mRxDXEvU9mR63e%2Fu08UqFzqMIjZYNWXUEVNvdZX0KHe0gxfqESJ1GZ84uFQJn5231Qa5vYHzWYYY%2Fhx2Y92doclokFu2fmcgwykuBMOlI6qDQjc23JblFJ8tu1FqcW%2By4YjwLRUEN9MD3W%2FaH2nNOhLrh%2B4fejECWuZpVl49%2BD6D0GbWr%2F6C%2FUftsA352Hjh%2FjikZG4umyaEiW9T5bFMNq0gr4GOqUB%2BemiyxhfVwAQx0EcnOwFHrth8MATJ0lNVZzJPol35wridNeLLonhyf1Aa6JLpZkaoiGQyWxNsmHvp8KjEnQO4ptYINy1hn5jpkwnswI078wzdkJBSKgZD39v5ULklDvuX4h%2BZvCrLdUWYYFgPPp3YXAe%2BTcLU1HDi3Zf6SCwIHDuE5vVBJpeyt0QAuTMkvgCv%2BlFFq%2BOxm9178olMfGcaLK6v6Xs&X-Amz-Signature=090c532da6258cacd14dac844dfe7efb93ac5cb276a6f94b93148f0f65634d78&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
