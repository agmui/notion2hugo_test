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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=734ac43f72aed20f1d823e0f3e0d08233d06e1d6d6f4cf4b470b60119094a10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=4a4329d705770cd4a7eb82017e44729efa647e1c6dc87278fe96501fa4e10b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=d4d8d0440067380391f050ff9c5fd48412cabba8c921736a777d8bc4597cc899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=23f88bc01c85b1050609f2dcb58005da4ae77e8c202cb851e15f778d7033128d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=9cc06a91381641eec2bc67eeded1768e90b0c7dad68839ef56d4f772c49af905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=03d9dcba00833b2161f8bd799e72f155f27bf0f533edb7c099310fdcf2eab282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XROMHEA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDI49WG6XPcPjyukilDsxnrDB%2FzoaY%2FnomaRDsVS9HcEgIhAKUh3HgJozVcGK7Q3G%2FXVJOW6HasitAwA6g7pJdeA1AiKv8DCEIQABoMNjM3NDIzMTgzODA1IgwtlaG6V4dmB1kgBOYq3AOVyfDqHP4GaMWnMQSpHbj4vd4P8b3anKWU6Fi7P1s0BZi3MhylHTyKJO%2Fdb6BVZ7KLl8yVIlqyYzoyalpp9B%2FykUbknhjr3BYycY%2FooovW%2BHKlL5Ojaq36ArEq4H%2FbeMsnu%2FSDTyLK2FFMTiPF8Hn%2BuZcpy2S73HmmieEEkhROCKOpiox1pkSvDU2HYhutIJz8vN%2BAMJEZFXOvxRVsmb5coIl3W%2BKmy2act8CWptn8BLSDpNdHuMuDFDXBlOwOvYi1sqJUXA3cJfMorAhVLq9Ez2KVFAdUSIdV9hFRkDZqKwE9CORDtEhqHyXj%2FgjR3er9qWx70eaSlJTDx%2FV4W7zELywpiWbjtuQH257%2FQYmStkfrInhQGjWhlpbNJgHM0arDsKn7Hmu2%2Bbp5h%2BIAXJYLbz36SxMqNkjKFDOFHvar1J7EEqs1jXAKlAwQ5eyEdLlxYhgvbAXIOgV6UIWF%2Bp%2FqWxkjQCYqlF8RMeoyJ8RqR57GOuK0FuroQbxsdp1jEdwXX1eMdlqPIplEWKPH7OIv4FNFj2pSV2a9w4etLd%2FbZIiUoPoP7TcedqrTgIDKIp%2BfG0bCCfPF33qGr5%2B517AwcB8s%2FGsTRGxnd6iwuH7%2FKkFqqesaTH15GmiFYzDKjY3EBjqkAXu%2BlBDgzSDVo%2BX2EqTa6Li28YR6w0pEcNQ3fykh6EhIvm50BySKwSMKdj%2Bc7xKycD3lS%2BDOGKP7VLrSFuvtLULULi%2F7WMnjUwInVtN9%2B2bezCpdtYlX7lnI9vubMC4BYrhL2oCk%2FmeUs9Tp2Vlj2SQm%2F6iuv3N6bRWGzfA%2B9X735bmj0qTWb6Trq4ZCkz7RQ1eaIJGgM%2FdFCszTwOPRK3OrM38b&X-Amz-Signature=26e692b0126a927375d223be899fee0621c17706faefd992b412b6b012518d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
