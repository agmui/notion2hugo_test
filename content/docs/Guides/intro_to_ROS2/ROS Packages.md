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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=7553cf937b095887f6e0bd7e8a40a24af0c86506b515fcee97f83fb9dd793397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=ac1f95640d1247797dae08f59106b1b77c38471feeff1e97674539928bad5281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=5397fd2b14222cff018442feae464e372ddbdf4148a2cba99f74debdc986601f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=504acc2deb20b72fe1ee4893738f39ca19a5144ad4e09ca9813f0a06b48c4204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=299460ca87f40c04e8fa69a5089520123234c3c87626e6314b7d5554e603e92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=bd3c3bd1ce977cfde8cf8c2ef2795ee0148efaa5d24a30c2bbe2a83749d4e2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF5MQN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1ugaV701hYkZdcC1v9AxfAaRi5TgVft%2BAV3gnf05SQIhAJlF3VVcMpE6jNTHTuRe07UxcGU%2BnhnqR07YUcczsCC6Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxjsctEwyFw0qFok0wq3AMcDIqjoO0mqKhTK1i%2F%2BQiIKmg82X%2B5NKv06hqlpEvrdawzDFI4u3YOcHg71CaehJd66oPRKzjflXQBjBP1%2FeIVwBEWdxWylPJyMy%2FbEkVtpAuhNH7bWlevb%2BAKtiiVZKGjBRG0O2vV0OOqXm5EoA6OBCLJUcKpGOBeC93hMwuC3RZq5tj0PK4TWArjelpnU8abKykSBNhXNg4BR3V1e0CpjlLw5bYMLOd6dslz16DFjii2YOXIawAA1V7hd%2B%2BB%2F3evGT5Ov8kQeXWLwJdrO%2Bdx%2B2swzPl7WxBDAXQ6pwsjGcc86ttGKXjkvvt3cNuzSSPRqX35mGlmYktw7t72iQMlXMBZiYDC65Yt6d5z%2FGEOHbC%2FK6nhvd9jwKhZ%2BKEkY6VCzN2wGvpfKhRs%2FVUvS9zBwFmo1tckinumYFyzzOZ7Wy%2Fs9zokChPd7UOu6nzG7k2ri7F9eV4bIAfXm9DwgdlypQ1GM6XCrR3%2Fo1rgHwGdewGDUJvUNFFwU6f%2BMJ2ZoefXvCefjBBnlj4dd2kfK6St6kZLURdeP%2BkHRuqKc9wtFOXqNBRvdgV4FgFv01KExcQwis8A0hom0sG7lGCOeOgksTzJ%2F2YIB07FEFDevqtEt5hFINYIRd7DDNcpyzCHy4LKBjqkAaBzGs02Boda2ZbZ8b6ujgCHJIB5IWWi65UyWjSNRPMxsUxWRnqVrIII5CXhxNFNr4COmtDWpMUB5XadcOTrFDvgodN%2Fqz7KHMZFZ7%2BuiIBGEvXCQTKiXKErl5roW0ry5Bt9txaUiFFffB5IvbSOnQzz6M%2FmI%2FcCCZLVp7prW37y%2Bh%2FrwbOwHoF2TrzqO%2F0%2B%2FlyU7sBFco04uikp5Di0y9iQol4U&X-Amz-Signature=273c0b017a2aa2402cc3e09a2544bdae905528c519993e344a3521c8e4ee7ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
