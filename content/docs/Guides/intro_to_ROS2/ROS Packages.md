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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=166250170907d62ac3305cfb0ff58a0a9a6373042bac487e664ddd00bffb1ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=ec9141e111ea9f0369f05ca9c4465b9e502b6f6ceafb9688fd9da640e20bf173&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=76587d0a648a1986b3ac2deb99fc90333a0df619a4a0db0bd900bcb32a17925a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=e5fdc846a698f9117e65f6238bf4145a81c734dfc40186787ab9292ed772431b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=a1fe637029e33d7ba31eb0ea9035a841875c1760ce1039d827933007433efb65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=a073e30d430be03b90ba89b62bd192d43f29f711c3eb8a88defc95c3eb2ecda2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFW3VGM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDujBKZmhmLlZU2k2xe%2Bk0FGLxyHQBrLywi%2FyPzfiUrwIgcWGZZ3O4SvT18elAu2SokSmt%2FMtOMhAnPYlR7m%2FB7GsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAottnXpTUmazEPQzSrcAxN6ogoEJfPvYKqo%2BiaCQQw%2BwGDUWhvgrMasDGC8aeA%2Bn4Ey%2BY8zOb3%2BLGiTbpdoD8mp3xLh4gRZbknEnPDgGMKKkFOdwOoHB%2B3%2B7woapar%2FeJZEltUVA7oQet7sTY67Tbh1MHnwyUvBhNklcrm9hCRQjEfwfAIHvTAuj%2BV1ObyElXTl9rH%2BosgPmgzZAnouIi6rvM%2BY4AAgQgKgvKMbjNeoCS12LuN55ciW8yTZKgdhCERl3gFBQYjaL1u%2BXpBdq%2FiAWOOuAAA8EFpQi2gkr1FIQQcm%2FhE07W0rCj2jkted6uMEhwbbaVLoTKcWRHIxovu%2BV0KC00CMm8mOafKKVRS11koTO4zZfMKEySDsLqQfDogHn9nPE2fZTNmies6r9b9%2F61NRpGnayHT3GMvrGAprd21GCLLYYGJozyirBiaPdHdv7pahjqm2E%2FP6PPneLn6eaSpkrrC%2F7nqlX9j8MBhTV1%2BtxPymfAp7N3o6aUFbJ43uUzKGIl8Vm9%2FpUOcU7KLBC9Aofh8EGaR%2FL7ZyF5zML8mAZzHMpeGvUajqe2S4BiPNyfKG53R3WbeA%2FTZT4GmF5rXv4q8YZYJNns5pxy9iBtcT19qwz2rwXdicG1ynGPB7W73fdJdXOM2KMMHz178GOqUBdthufAWirzILnBu%2FZNBivAVZoX7Vbi8qTmMQ0jt8ZlnLikRT9tOO6y4zer7IT9lw%2Byw844aK4q%2BjA0fd3hilDvfgrPMex2R39YtP7g1OhLb6GZB40xcrOzRm7iKA13RUqy%2BCQ6ANWmQ9LY%2BktGmyI6WLfaUfbJbxTKJKYUaa3%2FzrQdtwl717Qan8fsGYq%2BN9E2AvK5gY8a2GMjM2fFQ3PoYUfRIb&X-Amz-Signature=2931f09d5e80d96b561707a29c963e81af25f130185c5636d0b12a9173f5b83b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
