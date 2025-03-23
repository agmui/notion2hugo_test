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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=435758e24387f7d72a8919f76938cf7244826ac57d04d3aa20551de3db8a99d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=aad91ac4fc00189b7f0b9a6527e06e741fdac09371cd698f4034b496d037dc50&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=f0d07f56ea017b1e0bc707e199e2c36f7ce99c8ec5190809ff760bce59ff1a45&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=00b314b8ed026e5a8381fcbde38dc735fb06d5fb6e439778ad45275091446e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=3b4fbc2e9a1f97caf250ea6596628b85aeff0c37bdc761b61f0fc19aac013825&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=4778fc341fd1adf0a0bffa391e659b45e891eddf2464f5b1aefd7c28256e4494&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECHTNM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwFurz9KWBCkd9v1YotPfAI0NlOHckFAD1Q0G%2FyaXQjAIhAKwBcyk2qrrAqedtapocB8XVXzavFEStkZhnL7DFqYl3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCk6xuLCwH5qStM2oq3AMP5Xem0ZZzbv3HJHd6Ts2pqqR%2F%2BuV0uIcSrq20XggY2SrSLn8%2Fvix3v4ihUqlGUQDJR3lTPG73n0uF057xw8q8gbFncvEAGyZm30e1ghNtyOsbx1%2F%2BKRxN9C7NkzZSpcFDoaFfgwJLNlBVmXgx7oXdV3Rfk2KKio4PlZwnxzGXq5i1ZcNyXus5pKCLsm0wT3qUuoh7dh6KY4EuZHABs%2FwF3G5uK%2FzlV78kBjHLmcwxRzIHx7BIRBLjHN6uZinLM2o%2FocDO9O0QJZ551%2BQmCP2vavBw15GWJL%2Fi24VYLckaxKByWOgIJOxG%2B051oPKzynEEFe9Fee%2BWuLl%2BiTTx2kCiURQQxo6JLjinj7L6b0LcumPplFy%2FN%2FRDQ6QRkWw%2FqUkJR13IqMaFjdS1f1aRUbXEhrFHOw2g73MKwT6T8Bap14tnuApBXNVGRV2DK11i42G1e6Gad6CPvjLk9kDRG7TZZMVEN1f6RKbx654DwwJPXU89gCrVRH%2BpXQlnpcsiSK0%2FaAkpgygYeFNA2tOIoViVlhOhlFOKKCwpVVi%2FHqoNanwyAV99esAf3Uy5DaY5KWdtUCnP8LK2%2FVDbRuGSxbq3tH%2FLpHmkUv23BzYfQCQ2YmaFru2uItCJ96E3bjDw84C%2FBjqkAT5XaYqK6DL5K%2FHKnXCJKoyhzRjUtesIMt4gVBGygkdEuQUPVWjuTeN91E7NkAQdD0BQ8tdBnl15K2dlDoVtSJgnnj4TEf7dBKVr7Hzq7Jd6dsqzgk4J91sQBK6Oq2IvwXCFimdG%2ByVSny9F%2BiNThw4AJHLvA3xvMWFU8hBiX6sSpXwbGvXWjBs1eu2ghX7Ap5SUYNCzRuEzh7vRfcaK%2Bhat7qvz&X-Amz-Signature=a30ed9d6e6b8e77ca97bc7ab111b0ec058d4196acb89b12d81e81eb6c9b23250&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
