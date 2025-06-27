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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=c1e2049de200584c3c4da796e1e7a164456ea869231b67245b77a5c4430147dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=4f2c0bb46b3be2ee524471c7a58b75600ed945e10a67efdc2dadd5a5406c669d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=581d909dcbbedd27081877ed619ba1bc3243b5358d90c005150ec122aa2d31b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=a843ea495404348b7522aad90dc4cd1ce4aa66d6309d09e303f6d31b2e791bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=d34dd8ae4dcd58bdebbcf32221303d2310f2cbfae03581f32a1f398ade66a42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=074a999ccc8f5ca586b5c065b33fb15023ab623ec90fd0ef616dc30eb01d2b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7UF3KI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDacdzxJJ%2F2EHoyvu8vm%2FNQG4owMw7FbsKWsEnA9o7HGwIgGXn2WBsa8JScktffzFryerpPm17INBBRfOcna75ErWUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNAq99vWwVxmYFBHeyrcAxLeI44CfYW2%2F1TzoIPjgzr1M5wA42%2Bi%2BBo%2BPKj4qkb1xwg6mGpZMqBWwQC81BcvresOy4Dz5SYipeo%2BhYEjZQuk3yNKRGR8rDgAlN2lDLcCCnTvEgkm4sjjyAWNFGTTlWvS6Q4nsQxoHaojH%2FSeSkgNfTU4VdJtkq8MSX%2FvQQKIxDzjciAuQkq9XpiCj6xxKJHuNzBTSKQJ%2FDu22i%2BDK4gbQbIe32Rbjidody67YHn%2Fr%2BwyT7KNGEI5XTuQdF8BFJjEz%2BlDZiqMPQ96IUq0rv0BT1xeGwJxhLYMyThjs1d%2FjJ42MPwQK%2F9ssPeCjajU0XPJ456wiX35EbNCJCfI%2BBMrK5zBZpFWLxvxsGAa79NEE%2BKlzQZv5%2BeSCCfYoNdTRv2g37JNfsJVWSoepCzm4AIantuBJ0lrcQcUfTzci%2FxbmbnJKhDcGkqsnXjkANRrBsWKwxcbCHGQnLu0sq7moQ7G%2F%2FnRt4fPyzyLUe25uYCIqsIONa%2Bb%2ByIZ3z8Y3zddpnQVto2io14q2zV%2BKc6%2Bq05OXZNYm8KyvE0nH2RGSV6acJzknCtpcKVw6E2aQ3q8S2IS7FlWs08wy%2FeUzp4Yz8EVUtgX%2FSFs6NoyZSybMwrlPmuIqvLs%2F24LtONQMO7L98IGOqUBdF2wdyPm9RhvTG6GNNrqbKoBfnPAdE1sSn4KdzRMSAjXdEd2OB8y%2BLbbasJXT%2B0uFj1XN2l1Y3C8i%2FWI6umZWZ9byrIvWM4OTtozrxVNgmZn2mR%2BaF7cCIHSKQwYtjTKoilJUz8ZgmskflC05wj2G4tvXsxXvOfd2HHeJi4sdYa1EMZ6yyNoW%2BAN%2Fq%2FT5vYnedtZHzpw6zYkx1M5pXMHmAkoaKdk&X-Amz-Signature=13dbca4f18573407d614da75b823fc045a40a45ff3a5c02ec1a94ca6c4d14b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
