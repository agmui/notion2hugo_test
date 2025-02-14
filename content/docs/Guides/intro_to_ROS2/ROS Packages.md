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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=6957926919723040369432fa74ffa9d950530061ef59b9385ee547931d1c8919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=c6120c3f37d91103cbc017ec94e58b67aed8a5d13c542e941b03651222bda6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=90714e9d251e01e45e7e0714c1497badcb91925f4b4bdf4cf265d823f578b431&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=32b7ba310c192c0405f634ff492558bf15583b4a718a5056bcc5b24799ae04a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=b7e3fcbe646dd3e36b1b3923557a251eef2d1e684a74adb14b29f755246246db&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=db7dfef7859bdcde5548f9934aadd2344e0ffd4039a295ad30233f1e2ff5b154&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM32ODQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAGQR2VipA1lkI1BmfCzZfbeNwOCKBNO%2FSNbeQpaMxzaAiEAwLjMS74Gbt0EUZ6b71p0zOR69lvJB0AEJlV0VNlKTs8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzdXTwUX0U9JCq%2FPircAzSw%2BuwwTDc4oN73eelAoFEDUX7itD9BWCmcRN7i9GXo9b2qrXHIYXHXvs3w6FNMYHH%2BMniqmXHJIOSSdDActgibCTvPId2wtixE%2FryzHYNTptL5OqauQB0G5FD%2BTcN3YdTOr0n0TCyoSwLEU9%2Bvd4o%2FYJjGEhBR%2B2HvQ07qCCW2DfE18L7DI5xvISa25UN93FMa4vp4Q4XqmJAJjjjQTBtD%2FkNvOpEJ%2BcQtpsrh8gecOxplo1RPBZEJbJo2p%2BwUvOk%2B6NJ0byOg7RN632OqyGa7A5vAR6MNMSL%2F7dVXbP0SzLSCvNDVaKDpJe7Q57OzrHgfXxjl%2BJrwborWLSV0UBZNWHyr8UEsMmLC57LoxQo1isFJ6eZT95yaeM1tWDskBQLcwqsF6FqDtkWKzS3J4v4SzoOS1iuo5sRUF8wAri533tfqazYaeIXMWeB5WPuxVfq5%2FQhsr%2BIQYXNLvM5j8h0SXz%2BPHwg77%2B118hXEIQVHlMzUdaS2eNqpCkUmdKkeY%2B1Pr4pM3JDb5DQqoOJW%2BkdMmCqrFNOMseb9tkNeNqAHIeJ0OwYYPX1t4lKTYKDTfg8jw7mxpv0kXKoKgl3EVafXZAf9PeoT5Sebu%2BJSQ%2BeUsST782%2FIiYpULVrNMNySvL0GOqUBwiLdpIDUFihSIgJrxBgo%2FsU46ANMQeYHbklu5SO4%2FBs0cE4bHN%2BTlZpSoCWJBnJ0K58TbRhDqhOCsx6wT7INUp0ecnY9CAk%2F2D%2BWdLkJ1M4lZZo0fsqNz1vzcr0ctBtZufiIKqiG4Ip3Mdf2fQdOB0aMLTBNDJIaGaMrF%2BkAFUC%2BAZ68Pz%2BfxKuIexKjblnSEtACwQM4MCj0iyrneIfzXqb0eduV&X-Amz-Signature=62e2e285c5d9874f9817d0dc1c0a911af15e020f799074ea08f1c7674b7c0c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
