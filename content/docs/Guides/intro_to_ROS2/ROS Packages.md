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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=ddc05b9818c18dddf8ab67a7e3c9a16861acf4d1c45255c9920df738fda57d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=9e75b3a0d19ac51a91dd05281208ee61d5fadca10fff8215068a33fd7d63e6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=d9b7f0ed62a128290992a7e2033ebb78185e24f1a99c1c9c74327a13e11866ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=384f0a7e22a3723512fa91d6c646e9a4ba3a500652b619e8d7581fc3c82bb485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=6cb3fc8788193d40d98e8491f5d5aff815b9df5ca6261750f6101665f5e49bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=14f6b3c432faafa55ac5b1d3ddb1753861b5287cb5190f36c5aac0c54733156d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5UZLEJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBprDcDYwasvKV5w7vNCKWQrZQ4FrF7FwkodYl5gA4WIAiBgZiycbwEvSZPhmUlSIoE%2BArAnN3m9ADe0aWPyailBqyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tRrHtNiKqs8OajaKtwDlNq22RV6TDetGASXkA6WpBa34Lk5rW3CMvWkXLJ9a1nQNABNC2nFzI35ZYgOiGhber4DoJAJ4%2FMiNJypGNWvsEzcmgwywuE2iKyIM9XXmU%2BOJm4o%2BehSlOLkRFmZu%2BJXBJCFOSjRNWUrDm0NsOCcYeH5SNsK%2Fr7Q5KNp6zaARVe%2F8uW%2FKNE01W%2F2WaruVdTdt1KbXsPa75troDC248xBN2vn41%2BpY%2FQ0%2BXMe3PXNrl1ZkFQ6B4EvByCe3bjSZjXDUyX6OG2D2KyscjPuLEqjGwOjvjBJl9rWetTaQqzfekE31FvzG%2FGmaHe1wxQ1adXXNF0ldS8cfyUeA%2Fn1iWTBkQrJ3cHsF2zGranli8qEDdHvmPYIa%2F2vEJGRsHUtb3uGl3nX6kOTBzbd%2BVrh6jg0aqIomvA9EDtNUA53DyiG3xu9IrFbXGL2E4wvpIkM4%2BQ0qhzY5gAvy83PLBBgDz6niVCDlS0sqyMDnZBj8jUDPkKR1tXKtr5LBcgYivNKMgNucUf9v3XAkZWzYFAJJotQqmamGvdUBkOZqDsOh5oTL6YSKs3P7ERGJNWlq55lxhjHjPjnQ8fpSs1xpHHUPB5yCLCTPUIuV9MnJP7vPUHFwFcVUolqAjR9Ox%2BeoUgw2erYxAY6pgHlJJTfXU%2BfvgiA1%2F8P9wkPouD%2BxKGN68j8qsAOEMtdHOFx114Vv2%2Bbcq1Ww9RQT1WpJkWW9HV5SFRD%2FaJrfS%2BdE2S2RjrPvUPW%2B5RUm46bS9%2BxsVqvpr0S3bWZBYDxhaoKpudlETq1jnJCzAMkV%2FRU6a6%2BkPaH965bdoY5CwIDTnDIpPFepIAVVpnRp0OE2KZBe5aO7w7bTzBKJV5NG32QhqWK7OMm&X-Amz-Signature=54c7921297e1c4f4f7299a273040a5b772d6af8cdb6359986a45f8afbd187a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
