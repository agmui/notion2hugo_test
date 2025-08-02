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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=1f10703a4bbfc65e83754d793b016414a13fd79a7d247b8403392a9b16722709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=b6906f7e8fa2b78fc8407bf5e9b7bce52b8a40feaa05944ad4314e95f9142c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=7c9c18a13cbd081cf4d8959793258f30740cb15bb838490f406c6227e95c2d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=25246d0340b48503d63a75a2af64e5c9c761bbe1752e5660e4d587b27267dc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=0f72a622df324f383dacb4022b64598c1e850dc198102a9bdb3b224ed60d4397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=5c6513123a28306735d1d1c4b0f22a412e73454f34b7b1af23671ad6fb1e688e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6BBUQU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMPVp1PZNEA%2FBCFWFR5CrvVNtyNv7md%2FpUC1qHcBVjcAiANAnkvTyJEjxDlRzGbMKcPksxxzyJuXHxaazYs6JcZeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5NW6QyVmuHzhshfBKtwDKzenD%2FXHCYnGGjUKhxaAamFoq75j4yoKeT%2Bo6WnadvL1cFsUb8T5JbWplFhzeBui3YrHP750MlpCRi7llPFWr%2Fs0b%2F418YL9wJHQlnxLEYmbiAUURRVUIDMZxfYoYBY2QzU9FSTCFLTkgbC82HbONtvdY18FZOyg%2B8dwBPv%2B7J5bxtbHSLF6%2BiX%2BUFkq%2BH0rx427oawDogaLueAIX81SbMG5CD62XOEAro2lKe5UOu1aeFcouIFixYH4uoULCUMhwmenPNqk8uiVwZVZvSUhOejv6j%2BVqCdQ1PpVv507uVkyvXV%2Fr7irjcIlqCsDkBsYrBtJrGfeyutCbUamJ%2FSXV%2BU68K55jG6HsXMB3wp7JLLFeO6NizYQSpe06%2BThbsBWRCjcz0f7ucQjRWXou%2BSVI2%2BuCKuY2FAEfciJ4JY%2BdtE41dDCgClv8CVnQr%2FqYDw8Uwjo%2BLotngiabMh6WKi7emFSPIYl3nZthfgVUaZXZb%2BOIxaemf4AATSh6RzEkBd1DOTNuamHMDkM2pbXh5PxQhdneiRW4%2BXwfLvEKJt1XXeq0x67swd%2BqJhe1XKvyUIuhcPu6y%2Br3CcIJ4FaNHlL7A6qyrjCQs7oyR9f8hMYFxQ%2FBNwsVBX9BqaD7iYw9O%2B2xAY6pgHsSAs1mwtqsyV%2FlTM%2FszI9sufkvMQYC5Xni06q5UerKJIKb1DEuTkBV6SS8%2B2x6USpgUrvOwgpaRukvoAoslQLSHTmYVkoCRWv%2FVBcGgNaXfo63drtbuQSJFVIrxBGNF6QUzx0w82Cr8AzavqGljMI%2FYAAt9zeqj%2FqW8aSMQl4fHHHO2wbIxv9fY8SV9G9O9ETN8Fo3pOmwybwN57qqs76F%2FRJWMNq&X-Amz-Signature=c18dfe0ebcc3c9f2c23f99e32648897ed5e09ca7b5e2d7650f0978d9d62eeef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
