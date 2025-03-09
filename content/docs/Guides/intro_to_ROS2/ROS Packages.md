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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=ee66ac3b2a2c36e4fab5ad735be611221c7e9805a041e92bb2b775e8e3935d35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=5790211235dd3d763591cd54386397b10a20ef9f419d87b69ebcf1b2f1e63999&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=22fa3cd42379ca017add54c4ae2688b76e2e8ec9b2a1ec8f89af04fc8f288e19&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=551d1f6339c4210070f2b5eb04175d3e72a882145f5f6c165c3d0324dee36016&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=95d5951d43b656cf89301d7d7eff8db74702fe02463cc0766c0e4e9101d996d3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=ff4746261cd38b6feab8ca37d1d60c596f852cc199ca90ff2a7985a9f1fe7317&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMQTZO3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIH0nfzELwDsN3FBeEn9%2ByyncjHUknWJV%2BLkLwRIYd5JGAiEApM10fTZBzZFF8nqgg5ROHG8JAIgnGelS2pheKBial9Uq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCLfYeui7vU0%2Bn5TsCrcA9bG73dhvJn02NHgmuTPd8cCyUTwFM6jTdVMAeFgpNF0Scoy7d4qrT%2FskJiCqlFNjpgDdtJjXqtZE9bxUT%2F10PC6nA6Fm9nvioGDs473nUqkwWMgzLoO5ihTupIiVqBz101rDD1Isgd0T5fLxgrOUKXRt4K85mG9cwBG3ptpcp6ePqy%2BaM5H5qc9Ugx5MgcFGWOYvNTwfhhqnP2EK3ZOQXTGNJXmPW2DjbVEz8IA8hcWbwcMCkmlaszdEm3%2B9XLYkWWpc3O7dmUeMYT%2FfVZxKYXE15lX91Rwcse1S2zrUknNu6Y1z60%2ByUvzjOM%2FFhg8qy3sx0Y0PEBdzHiNhHW7rKSSCe%2B7nmMmexjTiz%2FbT1yAOdYSfV6aVNQqJp38txAp%2F%2Fs5uRhNbCDr8jNTzpClxBBc4NuG84%2BRomZZSXxstc7FuZVUdy6sJb8UuVM7bEenz1NCGUwSF5u5rkyLYXJtcdDq7OHQ3NYGR2qNB6JppSvZlrgbn%2FKl61Ot6AyzRwawVg2Yn7TdCt8dlLvTrZQebdp1Fbuh%2FR%2ForaQV%2BPXSNy%2BJ9hzl8m5ItdmYBDwvsxuAjkzcmST4pZ6BGnjAPLPNglueX6yPUE4FykGXvejLP4AiU9fl2YHmFC6DB5HpML7rtL4GOqUB3HsfeemRL8msSNFzU%2FMk22SnhlFzLH0qDD0H8DnsLZWuFCW97yn5%2F4keBaMy2taUwSzM9NzqHRouhtdjbaTZ2hurzCFtgMmFbrtNnntL3gqVgiycrR2oszCkOt8K%2B6P54MsI%2FffoD5csA5x%2BZcEZ5vbOUMj7EZFwVnVYQwdJAz6D%2BMfsEvUGVtae1eWmZEDMG%2BaGMnVMYUkQ0hAhlIVIFJHWtit5&X-Amz-Signature=3b2f7bb90f88992e7bdbf32e9a49154491a5a0835619ec7a3fd3b465c4592c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
