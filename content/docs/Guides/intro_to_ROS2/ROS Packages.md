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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=27aca8eba74ff02045d00aca9d95e26a03cb6b52655ead36f222fb4a322b73a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=2e8f48fda99b31ed8a38acdc31f612f8185002ce15a2a390dbc2e9c4ca1d8d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=df8cb6f83963d13d321ca29af9e51fd571ae01d10acccaecc2420f552c67beee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=20a4f39b854ef555817f31cdad373d7585e86d8ed641b2f4ca2d75c01eb3892b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=b576069561c8a4e2bc7ba834af292bbf8ab588f136c8bbdfec78d8e95140fce4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=108a3375c74a825c3652dcccf09f4776d231c07ea7e624e775a79c835a93630d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWFJ3CA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU9vXDhVn0lk860%2Bj%2BSlavSVkdO1PTggyg0FiA%2FWYt2AiAxN5eww5w5kpBd35PhhKR41MJv6H7znrqjiBPWLwJ1FSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP7zQsNm66CjFsZYXKtwDK2D6jIRoY9Jpy2uQdpIa52ikXnckNTEzaQH8YjZwURmJhXIC4O0xWuwfY9Yeih%2FlT7sSMaHOQ%2FuKYwyxtoYT4PTlhCWyXa7CZepSf7lzt%2BJkancFPH7VtTXTKs8VZpnPzZNx9Qpxbw%2FFrereIAVC61pvR%2BrNMXPiJyyWnaHfwm5t%2Fy6ZjOKWFsELV55KHq%2F71mltOsYYG6UfrfaBq1qiMvzfHZ8UwaR6UemwC7t2MS%2FmkNm%2BGRVkHC%2BFvGfNRuyR4ZjNUCsQJ56e1zkemUaat5xnMTqdvv54mMLr0sPOHNVzEMdvd%2BYQ149XHPVFzK6UD3jZ966elM%2FdLv3kOglYJfZhqSnbmYZF4EixtDSZNZv9OxEAbVi1lkvtJXRPKyOHetQyIFwNqnpCaG9aMTAp0EPSZwXI10vHMFUZyoac0oecRB8RC7xBxsAODMxVmCNQbg7d053ObIqN69wkA90gkacDIUYvH%2B0LOE%2FNIcFm%2FVsU5y9%2BYv6wi21g20OtrhpmjUIzeY62jZla1IvJRYaoEGVGaAJ4NS65gzyHQh%2F3f%2F9dotkHBPdG0y5YtTigQjABN2asbZnY4O%2BQvYSrXEjg4lW0sbcayqugmf8gkJXq6jvw46YAqqdISGCmRa0wkqj0vwY6pgGh5pTFhLd78BNaBaLPBUD1YM15r5uHth2ZMHOr88x30T4QJPfoKIAsHyt0QYsbu9HqUIHEUUavuPHVtg5rDbAmtuJQCullJkSTVoMVheFKjM%2F%2FXULmcn3yUDRoNqS8WywYq%2BgrEz9i5efGjKF3WSRi2P3K0XoohU5Olu5RRxHoDiM%2BPlkvcvaQue0xqzlU%2Ff5KBtxJUiYegpeElci0OquA3s8gr51z&X-Amz-Signature=fe431633ae56bc6b042e751034adff28115d40248fd689b72b8677ef852d0baf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
