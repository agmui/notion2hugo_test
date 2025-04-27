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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=b1cab8001cece85ba25206c2862b416039d42752f61f7a62efee61de7fa66914&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=d6b663a54b7c610f72bf67664d03fcbb4e708ae7a08a3adf198f20fe74fe43dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=41aef593bcb169856d0d519a0436636a611404635a484a5062bcc5dd3d21e4be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=232e7588c75cb9dd67667d778916964417373c029fd17107aef954adb27068fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=c0bf922aa1f199ab9bb61052d156deb36e75a618da6460e2430bd0825d9f2813&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=6a93fd640f95be432fea2652c7641ebf35fa7bf73bbabce0f46788c3e9822590&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2XXHWF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3tunPaKBEgkFEpLgGn1YwvN8q24Y7uyLvECVITXEMNQIgbWuFa39hBk6xxXwxg%2Bmqr0cus0cAFdlgLHG5TyIDtJwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLr1dvt01Eg%2FIAvObCrcAwirvg6ThtzbfhTZFLrzdZ%2FZsqDGXMbQre19vDEfDbehx1c85JxkXIqnzzKIy0coKLnN4vttbDvztf%2F1KZqXs%2FF5dN%2Bw11xwu2W8QQXJRzEqbUT6X0ZBVsw0A6%2FoEEpHNmRXC3z4Asj5kE6vIpCnYXcF%2Bqeq916ep4Dtoc6Cbdr3LWkgO3%2FwgfO5LOs7VNMMge079BkoAbASVprTToTd3QDPX4KYc8Xdrf61GDCpmcfVNOstdBwSRnVfO6UXR%2FvxMhfidl55hGUFkGDz2daapUBrt4WdXrlIEU5foga6NH%2Bb9KoZqXNdJy3uGzmYr8sDPW4F5%2BHp3CFS3%2Bf007Q7hbmWLYKuLUauezvYo8qalWroN93Bg89kvTi4AHpCp3RdDksLNWDwSjbNyg9bA5KrVQ1OhJx7jGCaGTiSZ1WxAfFuLT2oqcwsgKY9tlSsPTvjtVu0ldu1tDlc8iywUeC3Y8PqcLBSPJ05QvAQUecctwWLOVx0HHL%2FOB%2BkO%2FjIJtBSN4CNSDx0hsF%2F1uPqC3lzbjl1gLZExECJHXgaxtnOWK6Elzzs2eIZPyeawLTGtafQ5%2BxEi5WA%2BawpPuzRPK6TOa2ZY2cqOuAJdXT65BCk6gy58xTOUWXR0DvmqdVjMO%2FKt8AGOqUBjYmaLFNmQK0gpeBY8hKKvN%2FZ5x%2FNneF1OC5JEuHRcp6uM2ayblQRufsNcLaQrK8kJucI81uPrGZmZezoS30Sl40I9jiaTwrczbCGqT9DfMY9L%2FzHCdwFuvVE0O2t6dDFQ7WK50iJTXG2ttw5RydtcA0SqpywvuTrYAR%2BFQABXydOCR7sZThRtAj8T1WEgeWuzeAuleIehA5JklR0ZY5JuAMyScaa&X-Amz-Signature=4541e086f3064e9bbc588a6622ed32192730bf75ae4d997553cc905af885e7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
