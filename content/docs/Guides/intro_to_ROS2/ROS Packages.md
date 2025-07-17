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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=c50553a65915925b885cc17ac065fcb4b7bdd3912c26a7184941275929a5645d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=37392b8706616957647c30daa7b8eea93d1237113ff72cf90a316802c08af7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=2b48799dd55ce84176627daf1882f465ef8fbdaadd8caa66852eae95822762b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=d068826ea813c48db6ceda4dd0398eb94fa8e07d3a154dce54bbb1dfa9015e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=55a4cfa5ca28b574776fb7957fc07dfd4ba5492c8d8026b245346add0b78bdd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=f3ce031a26aa037bbdcda618a0464991502d065229e134bb3a341f538bfcd698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJB27X3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD578mszzcDNY22TENQV9SLawewKHgGzjBE1HzB7of0MQIhAPksBaItsLYh%2BSSxz9G08tLEm%2FfbhCM5yIrIpe1Yl14eKv8DCHcQABoMNjM3NDIzMTgzODA1IgyzcIfKiBB7vpBubCIq3APRDDc8C1562JswPAixS4f1nXZvvSn1ghw9bA9JmoRmJKZWE27QMOSULldyjMTnWQaFy51EL6le9d8HImEoDlZmPIfMkI8cLItwYusH0FJ8yEvR0uP5wWGRmsx7WteHTLSsYW30GWieX3jk9%2FbJye9NHPl5nOxFMXl9HJq7KX7Sx1cbnWKgfGXaIkPCvzs0MxiLPoUrhjlky47ULiOd6tSbPDEb6mfTldD2CUIciGqgmBMbmyLHOvLuOSGlTo6yqKJ%2BQ0qREkY5nZAYDk7Bv7fxgMR2dGqrS%2BFm1wx2k%2BZcmyBFoeOTKCWi%2BQY5Vc9%2ByA9iVAUshUC4D2P6zb9joCz8Lhn5KcyMKGoiHQbr0uyV93WtVpqZztYUN4PY2cqe0phRRQDl8kbuCGxzTlJbmA%2FRJpD9%2BECfZHfsJQk8IOUeqxQsHmZOrA2lejKMnmtSwziRg41FjLOACFABHh%2B8zRu9h7aMAUkwtk0Icc%2B5uVCxbvNhSK2BSwX2wEYIAGDPWcLNf131PuuQNqEmX0xLl%2FKkmZnjQKxIm2sYPni1VFocsVQrCHEL97f6TG04rZcXGIHpsZCDXl1wLiYNeBjtHbcjhLp1tZFHeG3Ht7fFppSkUnbgDqoALrUlHKaL0DDqi%2BTDBjqkASe6oAiLALO4MDgriZIAV8napYWaHDwXFeWpxjPNlMhgEBWj6WsYVHzohmJTzNCGVwTC6YcIO8VBaEKTJG2k4c7Ym%2B35%2FnambPv30pVvUzZ7oTF6Uko%2FdyZaAafAFhO7KIPaCEmxmcrmWmSSE6KzkLp6LGgsI8Xw8J7NM1dF%2FtZZZzmyK6cKIlwmEY7J5gbZuH9mfILfqBoziztqvDAkjF%2F6ShY7&X-Amz-Signature=8177f93e1746123b77f2aef784d3d987123b956a535f6331d680c09207466678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
