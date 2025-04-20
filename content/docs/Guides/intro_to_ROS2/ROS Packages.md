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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=e60cf058573c747cd7c64a5f88221d3f12e1f0c88ddb75e5aa3ac43316d3fcf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=c6ced61823104b6f61a21c907d5bee5a477d457f33631b740616ffafe5f1352d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=5c2f8dc15473d3ea1d8dd9daa71761b945619925793cd256e1d57dd6077cef88&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=5b66cd9b95ac3f14d2f22fb4920baa76d48ba840574c388f7d664d85e39a44ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=fb621dee579f3e2f2488c4ec707df9e47084419b521f86fe8d60662773193799&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=737723d5f36bb3f48f1a45c357cd88b64c039f426c23b8097c2ad6badfb469a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4TXPAG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDVwKPDKpbq9MWcaQTv%2FB26yDYs4bWQ8jj8CQ5xzkTnhAiBFQHUFimU2sNShTk3f1LxKvQLPgVMuVgbov7Xv6hSZGyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsN3P5gAIUMoWq%2BKKtwD7qRW%2BxylyKjA8sl%2BfaXb9j%2F8bhV09euAF0mSxK6fNJc6PxDK%2F%2FLxJtsTRcz5msLhh1CwucPJQWCqEkSGTJ8nH%2ByqIVLYZTepxjr0PijTd5E1EnAihI7HB7Z2kpAPnvws3%2BJUoVDUO50b2ioc8VybKeuIKNf169cVAn3oqaRmrKirxXk6WV7xTMipiHC0wpPtrVzOlhbCLgReqLT0JwnVC%2Fye4UaCREeQjwGlLV39ih%2B1YhGrzxEUyUW7kg5GKkpLVLg7m1ORIiszlaDafqjDaGu4PNlYTvnI4D9KHReEC3GVb9xWEwWBlRFMgZDF3IP98O2QwObCHXq8BC9Qy8YYm0mb%2FZ9x3gEFl1SPKwDIY1%2BFkioWhdYoOIrsu0YUWYFKtUkKF%2B6tuqOHX4joKCcdgFofciidNa9t1JZBw%2Fj3O9xGHRZq09wCH5jtR79lLS4Rr%2BRBiA%2BGoNK2unW6US%2BEr88y0zZjTTPHI75nkoDgAIeS3lsL9Cyw2SM2%2FLhw3an3Sx4MWPjA1svnuK7u2vwR5CO2OzWUquTAoH3DLWewLBPtrWgXUp7R5Uit07%2Fzy5lpS%2FEV9amBVWNruHN6owOQcrKdm%2BZoHbdrNArrklDm3InCH8vkATVUUT4FeYswlMqTwAY6pgF2nFDbnO5NigSs7J9lvzvdVxQq5A3J1%2BZygtyt2KQRstcOh7n%2Bu%2FrqrDckOoFj0Vk3ZTZ2%2Bn9NbwlflwGRlar1eCtkj5MUhJMtwLv8XfWycgFsUcNOCd8ln8GVLuTR3jf4NOJeyESTmVNktcxkecnboJDf1oNWw%2B%2B%2FX1EWc3cjQeNbYz8C5PAllY8Ncu09ujQ9RKxv99EcHaYfbhneEhEaX3Y8ZgoL&X-Amz-Signature=0b5bec261906c64172db4cf0fb044ba962694a06d240b65ec20cb411206859d2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
