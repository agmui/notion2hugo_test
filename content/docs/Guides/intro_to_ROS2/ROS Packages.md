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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=e4e613c77c06cf718c855ff08c3b71a9e0c38f5fdd8ef7b0822c5539fb0f6035&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=8d6b1016a202793a93f2506fb51b61802eba92ae6d0bec708733d191ef76b148&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=18752577acf3bfc933e507865c624ce0e3cc83f70c203f178af13d1ed4a8b2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=6e33947a26f87cce4745207976570fa6407033c80fc43c1e7d83458f0c72ad08&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=bab2fab85247c4487ab1718699a20fc01f476ebbf793c6937241fa9a8294fdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=9837b32ebe100df14afcd4d8d60542b0c3d6639eb2e6050ff35ce974f760e489&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAEYSWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT4vj1Cgdm66jquMYhenr2ycC1X3%2BJfLVDnQKnRQSirAiAzISPejbXr7V%2Bju9MhhmffthW7Ft8prs5f6p%2FG%2Fi3hFiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqABd5tFwCo01DAGYKtwDhd6kkhHjIunkv%2FS9SX27poL4oeY%2BDs%2Fj%2FL3u3IwI3joMN6xCeXhy2ZFijymt8aBtsSAYF9RKyoOF%2F0VIJMETDgYtj1gVAD1mydBYeHqzi43IqR3zRlts4Dye4OJKygfqJyQfmOpiAXBtlyYHKQ6aYG707q8WWKfIPo5DZj6slDyhHbqrM%2FnNV11z1%2BJgNPwgdy%2B2zQCX3urC6VLuADUqOZDCKO42%2FrXd8dLEGmeIppZ3EHdWcIyJFosDcJj4Iasf%2BI0NjuqHavFmZE4Q9HsC%2F0tBrNAy1QLnBQ0IyqSII2pnpwSzWYUUqvecsUObCcc0igB89k2dkvfolGge2dQ5ngQap%2FYUPwb3Dvc%2F86FLxiNAEmHhhY2%2FMdSz%2BKNGy%2FZy0vykX%2B22V9pMTUFPn17uh%2BQJX0Ts5ZbYtDXrruuBXHWBq0L0MbTqxbVrlahNxmVK6lKa6juVLcXaKfmDddJcBDaxdsbTKbjsHN%2FMxwIinPpgmV2VteY6XTgK5WGW5tzkdijzfMCNAJpV3bBqqiqWFLRcQFDgTu%2B1cR5EKasyMVuUZ7La6aO2GbyPiXoOj%2FsjgA4mOdjQ1SIJWPDvxYUbTCH3grpi1pf8HeVSEU%2BgNpR24AL%2B2oS9RFg8kRAw2%2BjmvQY6pgGRIqAL3d0pbuZ8uuitu0sm%2BAHZMe5YddhxEnIH%2FIBNk14YTXL35jTMvWFGOxq9SotVWg4eD%2FKv9AMUbCjBIMHwB5M4OBnHtOxnzRNTCekSfBlAuSK8QBSnxbY2zLWjixk1nf23Ceix79zNaGdyM52INvg3AqflAsQr8TfUEfVd9IYEr2clI8vT0qe%2FR1oo6dt3ridVdlNp0Vc9m%2B78yjDR5joCVE7D&X-Amz-Signature=b4044576dac4bba425c5ac2003245870beeea5f1d4e15a4f26f187fed57dcf24&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
