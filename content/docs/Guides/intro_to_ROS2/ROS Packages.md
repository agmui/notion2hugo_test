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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=9384ea201a2808c53e222f26422e54d5e46181c1349bf2f908202a06c7441001&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=712266406b9f72905120a85c8be587d7491f2520bfdc6400d25ea440d4a6bd97&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=a95b5fe5a17be39c65c08afa9563e8b6f36b9c942800ab2628602961174a3e02&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=abaee5c19c498adfb0c6ee048af3ba6ae7e0dcc11520d4de5961692aeaa02b67&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=a503e0ecd9e1a0e436ab24696792fe194e7cae3a095eb938a90f7eea1a5851d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=59ffca4a3ca58fcfb4473e85bce825164c43d01f24fd6ea3326daddb26113f67&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRYFPB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXs5EZt0zvylrPSVoGadsUmj8vgI31nFHlxdEBuNDigIhAILfdWGlDsu%2BdCHrhYMPis%2FAqcWnoGxUYxhvTbpRN71yKv8DCD4QABoMNjM3NDIzMTgzODA1IgxajuoIPWqGk24fL4oq3AMODV0xrBIoaywn18QMOyyxF3GUrJK4%2BkWK2XmomuAqFsWPxgWcj4kR%2FyzXW955qvesxugfGZ1qru2a%2FxL6cxdKM4jSZYvh2x4e5OMSnW8ZycQsf1vVygFewetqpTvldNoHA3IUqJc6oUPLH9YQ%2BYY%2FFSGACykqmsh0EO9i05H2%2FQt%2BAznQBag5j%2B%2FQzBMR%2FQkZqNdxigUsFmhqPESduLjD225CWzm2VTR1hAl48BcO5VNtVYzXWKH3Zw9BW8k4T1Tqa7P5epPNVhpzoAdLmrRh8H2Rd3Er9EWAPWE%2BG%2FbHFhw1sBgs6HsFm6BcnF%2FTIaigWyTmL45Uy8zDl6od0pMqt2yIAwAjsF%2BL0D78sa8FUqtF%2FiSGaFIzsUVZEwVNY8NPO0qlLUJ%2FJ0E335q4NqSBA3BLvnQ9Mdw2zTI1Uqit9RWJZy7sKXKMf63ZGxAero8nw2YfvjZNFpm5OpnSV0WH3lIQ9f5JzryOie9eDndriC8NKWfC2CxDsgu19ZWKVZjhqO%2Fe8s9uzSZmdWMQjm7n5Tzr3X6oiLCyhYVvfpM9VvrHH53dhweeOvTXaopTYdNM1Ol6mdIkUzEcocC%2FQWrefnZR5MdeZI3aaDCdRrzYgrhzKP1E1%2BuBiCWPGzDHpZO%2FBjqkARncAqojQoqHPJRbiRIcreYgLN1HQAaLLu3XpcG0pxqy4OyeCxYKB5hy5X2MDpXXpfb%2F2CpW1sO1zjzBiCrp8gD%2FglN3q9TXtB4SnYq5P7djhE%2FsiVv7GD8mpLRmjRi5llTs8eLxb%2FmmnWjgi8MSn50wVjOhGT%2FS%2FdgYnt0M7plXCIWoTlsJKfaMjNK6AnmGE1iX2Twf8WwAwmy2RtUIl9txLKaP&X-Amz-Signature=9dd53bbba3282875991c03a95d08886bcd421a9618bb8341dacd4886b880d473&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
