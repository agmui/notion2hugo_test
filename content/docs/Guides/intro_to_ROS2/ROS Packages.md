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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=5060da213064b22033a0ad5880e972fdfc9092533223cd4a8424b82383ec741d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=1f1d6f41f9392654aa9fde3a9b8a686231e0a63bf69299b374c12f70b26368f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=e0aa087ebb9537c971c122ba42bbb9ca0de2ea7b62025a45261aa2270112dc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=36f16eb178816afbf1c57db5e0ae8912103f679dd7afd66c01352a463b04a4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=58b192fc9445a8d1f6ab6ea3b6fd2d0971b8f51a9d953ecfa5338f10738986fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=0c2f8b38b58cfa0ba7d78582b56b1dd68c9895b7686e36c239292267103a707c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XX6VWPQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDKj7iUr5VNTW01LebqWPlhkHWWMQvGUHLwvmoQs9rCngIhAKrxIO6O1c2ZpAMojrMaVXlFuinIdQyUT0MTNRjFOiOtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BZzwNzRPsOFTX%2BIq3AOQab49oTEGxvaY6afLxkJDRSHtsB4vGdZQyFXRmjdeTC63GmpM8J%2FkgChO%2B7WhrEEhdngS%2BGxg3UW2dAe6yF1oTCxv8N%2Biyeys4bcO5NXa39WvFC749laOdL9fWDPHKU9k%2BNyc3qBrzF2FxYegDD%2Bq8SPVHo1lisZBOcCOBwyMq0jSRuUWvmHbhOvaMMDI8XsJGftBeLkqiuT8jZwExkGpA%2Br1Oa15nAb0Rubv8KS9opQvewbEEXXSwsDPy13xn53hV2HNuBaLZSRsTPeRvEv4GbwPDzNpPDFYvn4jgkuXC3kfiy1lVtXgZw4eU8DabvCoFV%2Fv0QScNJwr6bBDFDO3mB5QBbhHX41stv5VojLyedQZ3A4on%2Bo2bgm%2FAkx78qBErLg9LWKCbod2UacDNUVl%2FCnE48VqogNAXd1JFCkWGM3UjzvQq6Oo9vp2R62A8uJVG4FTxKtNh4uYR%2FtdRybCC10P%2BnUkuMCVCLoEcZB7188UopOgxdfpwUzojwljwUK9qs9eC5CkkmdfbJImKRqRvsAxMCK8Mf9gTHckCyAYrRDWaxqGogZeaBfDAbf%2BHspqFNvDHTzwqp2Mhfj%2FWPoCbFxOni7O%2BgcTR%2BUtYzMRFoOkFM8hdt6FQ6T12DDrr4W%2BBjqkAXBh8P%2FVMVKZjcC4Hw%2BbXtf06yeAazfb0oMIdF412PtNOdjk7MhC7l0fQ6xDiwuMPMkAs%2BKWLu0ACeRejLqREJm8vGBCnr4cCeSB3wLcfeQkAERqVIFRalqQhKO9XcYTFXZPjQg9ymQk93p%2FYwrwGrxDireRkPpplBqEJd6FGvpclfXNbyAgGck1QWvpXyjGIOBZe5DjyvqcwoaWfPbFBMC02iL%2F&X-Amz-Signature=b9f91220be66fc2b55429e58121ef2b45730bda2a3bbcba3fbfc62b37b7aa640&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
