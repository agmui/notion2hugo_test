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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=78b3e21c21df7774128badde967a3e92025564604561db110c37dabd35cecf2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=72ae4962a9d61147dcf2108d17514569aae1cf6f940fa0ae79aeaed92f296261&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=5a267b8e717f3a141aacd50b632d944dc80531856c531c17ebe063f63fd2d41c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=d8b045fbe3159a79954f6625eaa9dfdfd580a3122e3aa251ccbd577fe9bfcba3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=7830b5cb9235a69ecab6b14dcb519ecacca56b760fb0cfa9b16450482e2f239a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=8355c7c3bf373bc661a81d4e99a9f3db4d4c5cce2c1a4f804361f0cb4a4ed76f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWDJPR7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDEpPX%2BKgubl7WAmW7mLpnpThT6IcMzfJadRBKYqc%2F1cwIhAJZciUvT8NEq60USDL1eDN%2FLnYRDJcHen1wcq53h11exKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznsoTSrOmO6UN34gwq3AM6XRXCrI8zftrXsah4XZqXg%2BJlu2YjvYxf638onAapjccd%2F9PA5yKuJh1SZSbK72IgOjsdu4mRJEp8MvTZYNfSmahmRywBNvf5%2BugysIoeXsKXJTYZ9q8rI2rZ%2FjQHm2v3KHUnX3iyxsFHk%2BCv9y6oHK7QDgmJk1YMVQoiuaKHjiozTXgNJ%2Fk20F7p%2B2zkkC2pgpq3w5OFkFL45j5afqB0l7f6RPTDiLO5lqggwVlL9iXLUWlYeWHqAQe7%2Fi%2BShAAO0HSPRT1RKHm%2FIUmZqSZGgpu60bPbLY2EUCACwjiD%2Fq%2FAWMSP%2B8kUppuu9SwPY7w3irg5YasuK%2BxH6e80kOhwDllqpdx%2Bpjc1NwSceUOx4FoHA5rSUiVkYBCMb3MmIyhvaHx3kTcA51jBVh0Jmp3cwsXIYj%2BgG9cXkjj8TedPeoiTvSkcq1gd%2BZMgy%2B%2FB%2B%2BNaMwFP%2FkSl0pq7BeJ%2BjrZbxns9yhli2pVGwNT58yt9nKzBjPtbmM0u0dUWMMceyYozBN7deR5R0jf9JCQhqji1blaBVgUjIKLO92AoNWJaQnHdvOFTLBCLAHfe8FGzev9dEeIcPshP0Jcbox8kG0qqTigjMwq%2F2Ozy7KIDKU%2Bc0T2F1gfQZRGSG0lUGDD6htbABjqkAeG%2FcVss%2B3YzVTNQszBkYfAvsTTNWzGi2O7AbZo%2F%2BnSDfur9wrjjWcoYM%2BVcH1%2F9bgEHHSDS9xc5yZKj%2F0nM5wrcZ1Q9jsXnkIwdtWR7UhL%2Bw1HUFWg1XVqpK5hq7Vhtw%2FviMFB9PEMtQdrVIkpYyiDMEJLc9yEiBQn3XVjqjKhIO96wyEnKtrzducb0AVv%2FitnINmmFcMUVFVAd9RpAFd%2BH8u%2Fw&X-Amz-Signature=2397097cd0b42f6ec343a042380ccc097699cd6711156b6240b6498ad8ffabdf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
