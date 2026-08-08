---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=4a5f7b57ed7ac3ea99f17e95d948fda784c4bc81b57d805be17630452dc5abfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=0a97e17205afa7cb2aaa16c079160c0bed9276d3c37bd0e815d82ffdbd37d736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=378160addf343d91c3e1f0c49b62c1024ee2ef1f6a4ea27d065e63c3998f6ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=6880d8d525d4715eff26e9bcfd7152f3d7389354491e27e442e5716299db891f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=87da9b9b3ed16e4224df459779600e9ec66108f2202113c0bf5a394e20322f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=9cc77629134b88d87a42df05387348bf3d9f17d61a4d3d742c4f61b948149ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBUKGHH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrfR6wenYQVSb0XLvCLYHLre2QeIGp7vyvxq8lXuPMAiAQtJSBvSUEp4NYxRZxTvU2E1xzSkQ4%2B%2FGCVwVBMDtqoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMLAx9e24WpI1eMNllKtwDs3R80EBuyQSkKq8oZEffZTeGtJc8CSkGADEYFRILgIGT8qWE4p%2FJOkaJ6MKXDOB3WZg9j7Y3pjGf0V67wXLPPCK0OjAUliEWPrDcgiEcsMIeXCjdDe05pfdVoJ%2BgX6hs42xn2D6ikEivHd1EjC3%2FCrCivLReuBSp4%2BETWhmy7F%2FN12NcambftAVPDKR4K46Ws2u7JKiZRcRYl60XJdbrwqVRs%2BitP6Wsgs11OgvObxaSPGM7Iu7hxnz9Sfs2aq40%2BZZuXkdGxuzr8TxK%2FfhQxCtgokR58814q%2FB%2FEcUP0aq%2FuPBwWSn5h8OrBNGddcnVx8IzKkOh6v2eqIadcj9%2BuSAgVv2BXl32c%2F%2FUF2XpiUMIMHWzU%2BDEf7lPfmPCfUmtCXuI%2FWqB2iFxWxGir%2F8JFrNO28CaAtoYt5HaIht8ekd90gxYQM6pq8t1xErO%2F%2B99vyZENE9Dz6FmCZCipfsi0JEikL5C95VOgr1BUHPwOzF5u3jRzQ%2B2OYBUgXVDhEGeuk4wegDQNP6TN6NvBQsuqn2eYIpy0tlNJMK2ZxmqIi6ViIIN%2F2isM3KEgm0361bYhV5ysj732P7K8uAm%2FfvGec7em8KcFPHg5NZ5i8WudmFwB%2BTv6udNKjci5Z4wn%2B3Z0wY6pgGd63%2B0S8RNido24OYVnc4vjPJa30YViIgTCULRF807b142HTZEjkRfp9B1yN3GcMzD3Lkyb%2BbyTzHtmrBOk9xt8ypJ7waWLjlcJzFLKVnF0YAiDjOD3U3ZE9uWEyJg%2Fi9uHgW8mW9LpBySFY8IaGeFBcY%2F6HBeGiQoDVBK5M%2Fg%2BPit9bqqCcnvZhat8vIwJP7SfTT2OxJ6TY%2B4M77RPlyXg9MEVji5&X-Amz-Signature=2437f2c945f1f7b6d0dc651591f542a08c448091a213d364bdb31264f224564e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
