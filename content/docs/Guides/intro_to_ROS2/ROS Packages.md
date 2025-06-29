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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=d05b95d17d37047047cfb3e9ed09ade7f80bf546db49b781c236bb9f5b8e49cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=14704b9267a7b2c70181db92bbf6e6f8ea4d62261e5594229615cfefdb25640d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=e7179d82cd28d5bdd16aa4e408338f214ab70e4c25c512d7622fc8cd914c0144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=188fa0d22b8a89bf8e04c85a374b170c88460081a93ae98198b6fd1bf149b45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=1ee2bacf4256fb89e77100cf7d289256bb1ba014221ea90b95bd7f9e395d956d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=857b3a8a2978130a1aad54d652fa84a072b33beef3e014e2d514c1cfe870c1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBO2GOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNOcqOt5DWzxmmEB7cLzc1wtWEfI4SmC%2FPuBlhDJzqtAiA0beoBSqEiQXfcHPAlnIX05nORyg3N9Hae8RvvfobD9CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0HNfpI%2F8soXca4d9KtwDJs4jE0uIcdeHtW1afuZoGwwHXv1rPbBmpzweGUmjibI%2F%2FpbDwdLa%2BYz8hsGcxj5eSwennaU5oU8RQ%2FOdM4dEisKSExS9sVo5ikN90N4mf3p6aDPzBKi0I%2BYr8fjE%2FXXe4OTLZif3RKz2VhjbEVhKKpkGIgI8KygG8ndDcUQJoP46CU8te%2FuTbaUbffIoIfkiFwHu6RY9ihTTMHVe46Jrw09saPCih%2FavKJsAdd3CYGW1ZyhDffkbY0UdB2%2FQbUvQvmhpMGieolb88sQ4BbaiM6tAlCin%2Frnl1mENGAnLpdrj0OgmVlIgrjpOqCY3lY7mg6W1UERJlwh9MMhfQjESWBlyi1FpT8zvHgElQ8pZ3XscusEnhdNdEisfHnShSEIJwHQDNM1kvpqse1OLXM08GXhMf6hpCr%2B%2F4VX9wEnHASiyWa1IUU3%2BqpXtf7npKZAv%2BuDyv2%2FAhc%2B2pgp5YZTKPOWrB2NPnNS2VqYqGAD%2FsJEaGTwASpzFgJL9mLVLJ20RoH6%2FpJ3laXiZLSFLUvQ1NFT8AS5P%2Fdm%2BjhVBEG3jiKS4EakCT1h5lYNMGOEYdCZVaJ4aMhEMoBr76BAmfqKYVmCKDKM53NVvVq7RGaN1BtaxkUrW9pI7%2BlqYlJsw85mCwwY6pgHtCkB2UPa16tvamrCEsZnWRWQBJJ8aSt%2B9Huf4qQZ4p8E8oq6oTmPQWgGdxhjjLsAai6DWL9a1lukFWasDUzKcCSNkq88TxYMhXOukSgmYVnSSetujH1feJMqWFTwmGa9%2Ff1fgoztLzLhKd%2BDU8NshwyGg8WD8JipAzMBNXDqFy%2FcIgHxngumcoJHQJWKcPBTjY9HEpunLv5lPSVKREBT8rxjmbo5G&X-Amz-Signature=6e4f9fa727803cff0eeaa95ff3a1cabcd4550ee5cfa1d5cb2319187530779abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
