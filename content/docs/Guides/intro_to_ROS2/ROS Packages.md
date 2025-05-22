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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=a7aca17c38c7078d0fb577233953b19e143352e16c09094b49f041a589dec059&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=b9a189f261a39282b3f7131066700b9051d64ab014050552c83a57cbb3e08a70&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=41411271d5432a930abdfb37b46dc815e6351483d04fea917f729e186ee1bf6f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=397043f713c013be6009448ace213037d434af915a3bda5dd19c9c44ec66338c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=34e094624275e274fbcaf4d37690ae73a6a5713c0068f2575a02004b1698704e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=b9c0cb1160db603bbf7e61a0d3b6a7c584b6edca068cf0cf0273d1f3d73d1ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGCYRD2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwJTU%2BE1Go4%2BrJ8TKtZOgYtfu%2Bq4H%2BTk3tdUTPQfeOVAiAg%2F47GqxbkSYDhCJGfokiQWT4xjLI72e4f4kLF1hdjkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykZIgyQ%2BDYOYI%2BxdKtwD3XLo3o1RIoQkEZGzgHUOqwh0fkVk7LRbNcBfSR3dIMTrwZWu%2FhxORWZNz%2FQNXuem%2BA1bNf2eHX5hqA19rGu3L1fFAbcr04TkPsXIFXY1Da6rwGCTEpisaj1rrTp5qlJ9L3sVtfYGzmWX3buRSm3qnMrgnbIPruXsAnwCxGVqtJmF8axV37nm6ZLNUYJ9pAhSIyyj7swt3i4OimHuYKNQ7xHN2W%2FtDHa8eJ%2FNopBsmr%2B137WPQ3KVTRxxYw5866kLe2wOF7KfD%2BRxlm3Jhw%2FNTqS2cW6%2FLfU%2BBU3yzBJLZ4W%2BnfdowaVsm7155484mi7N4tdoYjwgnWpP5sDqF4Fu%2FArRChE7plEX2F2MkhG9VdFIFE523QKoWlJcljih6ZGzhoqUC3LjN61zrmJJMn7S3lbOV5ZkhhDX7ux9TqzUTcYueJlMuhLkVGaR4HSX30VFyfWu6C0nNR3rL88ljX8DAezpfPSk7a%2Fkt6SXrFCcJk4%2BnJDNiFtvXbDK5okjccQWkOlP7wXN3RnR1Dr51KaA0mtJAoD%2FEXln7EByzaQzzdmULqGhl3yB9%2Bw9N5OXkLhzjVk%2BGfaKYMhwDCJ6shoZ7ueUeRKyG6ekpf7BHsOBkWwV7JPCG0SeDwPytu4w75O6wQY6pgEr4SIfX37KNgCtONk%2FPe4z2NEjZKyqlSzUMiBIWxvMPeshERiZU4%2Bik8r%2BZQ4f0fp7GG6oy5vP4htp1l70pw2nNpHYN26s%2FWfssD4NLVpRvOMS7P5xdmtZ9s7fRCU116WQAEiPmnveIzKaHPU4DxghO17qzrOn4ce2EYT0BTd0MikZ2LeKhZ8AK4bvwuWkwvK1CVwyB%2Bi8MuEngSmTM8s5UvIErAoH&X-Amz-Signature=57ba6819c07fccd1a926639bfbaa02e9e6bf18da6fb0f1340fe817a52692c768&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
