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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=1cf962e26e1c52c02ba838597eaae2e243a276a080811167388e7ed6c545ec89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=336e089d8314018b2d3c5812a8e1497ce54e02e674bdd7857edfc035b124b149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=3cffa8c4917adaa640a18bd3720d33bf44d65db9e415af501a922222f64ddae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=ba3d0c9c456e9a863ac4fb42971a776a5f6b93cd669cdb29022b69ba68e92924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=d29fd2a4b7ba47e68793dbba9490000f4af1e23a93338f5afbc9e85b431b8af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=0864344646c8c0fa6a3dbebac16f9f125f13d09238d679609ab602e801bee3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUKIPZ2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHFXEqN%2Bi%2FESOWoL9Tei5gLYrzO6Z4NXOuozZp5tTmuAiEAncWhWzOF0NNY0Oea8Qy%2ByKU8je1QXVQwdkZskSv8OwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDItsgsgtO%2FSReUQ9uyrcA9Rief8AkravzszEEPzeUIKFDUWbraWNEfUD4R1SKjLE6FPHozXzdmv7oUPhpOSzaxv%2BjxHCYzl1kTZVwHArF0%2BUugUuOeLhnlupwcbwS5ufH83WCGaBt1cPgRUG3P7CwCh%2BZDqIONeUXX0%2BR23rMA7EBeR%2FGXZSbI%2Fm6ugZCFFNtOAxD0c3gKlAHvpxCT5seC2%2FCEci0TqRLRbz6moD8ffsgD8GIRdcv1huFxj2qMeFkM25JHI0uIwkK5S4yKsqvux0yLrmhfve4n9AqpRKwO9XXSPTpGV107DPRQ3MXFW6ZgvXVLQ1TkKYrutA3G7L5heYDGT8Gyky%2BYC51MvRz2R0CzqM59RCkgHuidK7Cmg8i6iYaBmg51vwYupv4K6G8kQWPoNJc%2BrykD425rH2vS4n3Y9VD5dfsZzmuMb9hdKEntfoWBxJ1qvZ4E5H3fqYhIKQMvdJNxr2keh3wzCaH5SKL1DvrT8l2lk3nde%2F22xpYXbg4j%2BSukHB1gyHaNRyIYUuXvMxbqpnoIY2QvRZ4PieeuJ0haMwWxE6FNjNIWH3vn8YdyWTFfxLb%2FrkDzoljbvgmJ5oKN7m54ft1ISiTPWqaVoYhBYk%2BQmatnyzcIKKHFR2wEwY0p5WUnY%2FMIyHjsQGOqUBBxSXQC7dxJjVKOc3NsUJw2%2FkazwC8lUO0pwJVgaL6HYlqkeJ%2FTxw%2BqUrRuVwm%2FyyB7W0Ne%2FtjplNGq8BE1MX2ume8RiXkpDXcKO1VA85tYxmsqM4r8xfg5w5SXBwoxJfm2uZYKJ37DgUaPHkfvvaTxDcR9XpgTGyv6VPugkIXU7Vu7LoyNWeb1qgOp6OM0KfL11bcklMrJXRBpSlIFylthIhFwsW&X-Amz-Signature=4dbf5f6cc5872c09ed9b4a1d6458bfc954e2068ad321cdbbe6bc07fac26c977d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
