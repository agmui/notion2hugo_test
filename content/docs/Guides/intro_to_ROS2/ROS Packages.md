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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=5b7dc9bad36ec011f4b09556f819ccddebb5b2a23c38c434023a2453047f6b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=4078f6ad72d0a86a4048e1bb8a60bcb6c414976076eda6e762bd4e3146204214&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=7a2fd9d6f3b5477df9cdfc2b751bca48d034dc736a4e8e3847930361d8c69d65&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=f3fc601a9178195f30c48d9209c271c18ba38f7f692819d3a3965a3649664aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=86fdc97ca9df595ba8f5aee004120ae1e674d4b90fe3dbd0020ccad40cafa7b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=6ac6973b92d74f55416ad0115bd06d970369f71163f983862cf9d9e7c6e442af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN4LIYD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1ayiQR7Sz0oh5pb5SpDMZIfXpjDlcUjWh6wB%2F9sjzAiEA5UxhKMDGA6a%2B2NWqM%2F7teY3esNW9YJp%2FbRMFkB1jYDoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7DwD7MgiVXDP%2FUkircA9fXr3MnkZ80tbDdzf7Zy6eXCRkZEEZ%2BlvVlneRL06fOaeFec6yCCJfXzCL9hqpsxVIDEtrweMR3aHHxEjWb01lE9QqIVJqYHYDrBgJga0snQcJAsRomeUBVB3NXJLCskDeLI8iJ%2FiigoZSriKh8JKBnb26nR4OBvI3tvWNnE2NSmTT54axVTPDT5M5ktl9dTIvEy32DTJFkLOl%2BnncEVC%2FN2UVpb3UnunjHvX%2B1HeNb8o%2BLIGD%2FO37c3vvOlPS4KbuvrmmLftUvWEnbfQ7Xjs1MCplEcMN8YU%2BSTZOrE%2FrgRruhihEfRgKchqGNISMq14IEPXgHkuAhpsgjBTtJwMF88cUAnHTYFs6bGmB6%2F%2BBm7vP2D10hdCTzUqvkMpV83wO7MpPlqBZh7IzUEp3rz%2BTjTp2eQmV5nmlgEUCR6%2Frpgihhvikk4CzKl7hlTrlTURkdO4fCwswAd0MvRyXw%2BpfSEzlLknSMwZVdoa2eYuab5TIJi862vzBka5MPaqw244IZV2jqO7%2FEV9kO2Wv6inM4vjBXUtcuJ5OMRtD8DoA6qFcH4X%2F5iwBHOnLoqVVyPkf7Mh2AZc1NP3q1noD%2F6ga%2F3oID08bfXVXHeBCoXHCNcZAFQZM1BxE9stKDMIzVgr0GOqUBcoK8veq6sZImCfYEbClsk1YbuMlmZLblFIFq1G%2BIJJ84iGQq37493fTX5MbsWkf2Lj08k3Uj1HXh%2Fcyl39toEiY0n2Qfkv%2FXTQ2wu8TjcA42zFagMKPRVUGb7lh7v%2BVCV4J%2F6XtIi%2BaMjuCDDxzW8VOPNxUk8L0YB%2BKIYxRiqK0wqtLyVcZpKacIUEhMPO3816dzSgHBqscsamwhQ1X1OiPzIcDZ&X-Amz-Signature=a7703990051da6357b2d1fde474e81cbcbb4cdf15bb4b65f8c6324def9dbc578&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
