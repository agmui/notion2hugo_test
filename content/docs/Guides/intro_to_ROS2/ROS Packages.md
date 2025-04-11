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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=de840f42c7abd08ba30843cdc93a96694e241dea46bd0c03b2cb91c3533b02d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=1b8140139416c8e9a7674abe36255a051f5c279c80637566f0a7eeb25099c966&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=c740ead5c7d67bb41c1f5cea729dd75a7b7b7b49e4f8b870763de723e2b6cd68&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=52dff014036009b6670d0bfdb9973878a6bc4a6850d21f05703df42becc3c589&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=4aa8f1a2780b0b068c2dfe69a918b4b6774c2e1b66a4c174de1839bded5a5655&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=d0e0151667117641fe7cd83ead31cceccbe2e062911a478324749132e71852d7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNGHMGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDxXyq92%2BM46oLdjKxS3AWiNwZpnIg26K6aHGvQlWIBiAIgdMjL4o3NvU0ZtgSfR0DmtVZ%2BKu7Yv3z5Kqznpv5261kqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL96ebNgZsxpHDRmtSrcA7M%2FhK7BlaQKnpglknqe7Gd8XTnvGSUIBveHmTDHxmgTOwWLh2PpPdbIYiQ4f9E0ED7g30jRxpudNEdMnqj4WZK3jFhYE%2FiD861ZvTrJylD4cpPnkPFuKCW5NZsb6aof%2FMysIHmLxD5Ij4eMBUoecRw8CUYjohdNtl1yYlw9OuNGvfuucfwbbGB6Nx3No0ro7RukM1e2ROSH22J3uulACHVnWPmH9whV2FNWWVe0%2Bj83x%2FcmeNuoVcF%2BP%2F%2FFxg3znh5ubBWgaNodhLvneaTNHsaxn23NPQn2Gp5N90q%2FGtRp7lHmaL%2Bvg%2BwMExxIVLJZN2XQDT5F%2F8pFpI2KLDD7ob0fghgPmsGi1l7QBO%2BUO3IBewO6gxbx82HZ3zlhWTTFO0UcgEV8%2B85x2xAHS3iu0Lud%2FZfkCPWlV8WmGMzajy9zKfVOs2k2koG7UFKzITc7R4hJ%2FhWKy1RX2JYtK0b0qN3%2BkA4lcl0%2BtOIszIwCRfRyid5PepjqLCZWnXiDkGjAk0gTiDAX%2BhWTxOpQn1%2FNvADg0okfaj7eMATUs8ugL5Z1IRZiEu4dJo2A9R41TZSbPF%2FnnXd9Sl7nYu8oDQwgz8sUvTpnHXwwPOyRf9i%2B0kODyb4kO3xlFsyxXktyMLWb5L8GOqUBQpksXlz5MkXJl%2BgVfbU%2FsXbJ0QYFisqQFDAn5rHAAfWfuu0BnkwlZ5ex49QlGQsuxqkT6fhxINPqtcdBLGWQVPQyyDBQcXXc3Lx70m%2BNKmBEpi0SgxRclchQcty8uN%2FQ3WYNM3fv8u9KnkMWwM%2Fo6fdanAVBjMDi9qaHePx2kMTTprEP%2FftrrHRcDCocfGOitUzJAY9ZWi6CWPconSKzgxJHD9%2FW&X-Amz-Signature=6c70369d5ed5940d6b47a9b48be82cb12d8d3e3181fd33364090114e1edcec3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
