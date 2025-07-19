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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=d2f79a76f488173ac7a7c301b77494418d9d7ab6ff44d8fbbe1ed538a0387ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=4e6868dff3fbd8942119ce5e11f33666bc0d9e7cf29e6bbdac108911f4c11517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=0d8434b49309a2b9ef673f9727d5f8993c199f70dc3698f499b7222d14e4398b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=fcf05d96bbe14aa78758855c2d790bf51f857fe5641d8a9ec2a5b86136880fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=0087a71080fb2f9ff28f2fbe2f2d604e0647d49b57c20d4f2ae8f19f586b1cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=44227570346b23d4c4c9f4560bab5824d1934f5f278f7de3602842d3f87b7efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOQW3K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsULchtv%2BuEm3Pvk91ExIAuMG5Y%2BW84dbXOEOcJAgYfAiAco9jSPsPU2Fyz6fzJ7GphY2uBazGFE6i2Dv2oOYN9LyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD3yoAeYBdtr2YhmKtwDTGS7eDUN%2FhicvtAvVOnYVnGUYqjR8cMfk4t1ALJ8%2F0%2BaLDTGYE2SAs9AoqhcXw2B8HfWIUW9CdiQ0EH3VV4F%2F93NdOQxoE10NxwUsF860xmTxMkuJqqN50kc66dmVbp1od4Pmaich%2FH1y64wqjXKLwcNun9jljXdEJilpM%2Fq9OuQ0zrbPrCBKzPhPx0uQfXtF6Hh%2FLztoxVEYExg60jJ1JkRP59DkfKTbkpXsFwOE%2B%2BmvvgAzwboxYSlN9HjOfDlk2TFuqj2OFPCKQj2f2FP%2Brjb00vf8YlQBy1XfTD5eHiXo6V2yXb5E6hNYDYzSPwUxNvWpIQureC5uATYUKuKrhAS9wtzpxeR9c5isG9DkPvFsDXWb1ZNbr3YK4u3dsrefmT5W7UyXCujWI4r8nhVtzq%2FlC%2FOa%2FTFCjyznfVpRksXEh467%2FZ%2ByWVKeYterJ1s38Pkua9zpsDI%2BDunRFgokVUdXcmD2AxUY02PQjNMda0JIP5Jh%2B%2BMbW2Wg8YrDxJGVv%2FQ0cUmvz%2F5g5jNMnfWZRG6JKj3LfMFACxxs01DXPiyiUDFm%2Fbo72Oh8ValU%2BiHYw6gp9ksg96UpnDGBr1pCzCtvMYds3X9KruXviZ5QMF0xRc9bJlaijXM8zMwx7juwwY6pgE1KDVSmE%2FGgyitwBH%2BmEQdi%2BKFHdqHOqVOYnnfTZ8vu3%2BMT9zhREmxW0qDamM6p%2F2LG%2BrqGkORVFxYSSp7gkrZ2hcudRfQE%2BeI0fAHbjojpKxtYUORPI95Zfo%2FB4arTlmH%2BDS8DbUarGeqfi5E4Ezs%2BYw4LINtyB9ZXcuhSkBj99iwxcewVzcSwC5id5OB7BcyW9JgYNau9xBBmgWWGjVsbrLIeUVR&X-Amz-Signature=34548715c22f5ac262749fbc0c08ac17e4f382e31fdc9dfa304525c4e22ca430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
