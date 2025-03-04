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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=bb762da928dec9987f9003dc9e4bdc5418bea7d88bdc9beeac7e4ec95a31f0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=dcbc5b47d6cea9483c9bbedb76b6634d7474976caeb84861e33ec580fec321cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=0c097fb4ece1ae93e0385f4103f9aa75e991f522966110736b0ca21282ef5811&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=c40035361c096bd62788e96f68d9c662ab782b38dc4a3e355d91cd4bde06247a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=faa621d6d71e44407ad54130a44e4635652d30fa7ca14ee09c4333b889ffcbe6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=f614a5b0b6a24c648a546e61978b8d0cbcc4660043409a9a631bde64c550272c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IZW7SI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM59PQ84aI80dWw%2FjLziOPZm9t7pYA%2BtvlQXJwCQUOAiEA%2FQMhqUlJuAWKsQlcWIMkOwnd9H8NLTg2MVQoBSx%2Fq28qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUOCVj9Pni%2BhLV3QSrcAwP1bKE9GyOt4r9z4NrQ58Vf3bd0UDRD8QNooOGiwDIiY3zQporENIqjzyLgpGROWqo9gVi1U4uX6LXR5jxpBOov3F9fm2cUW%2BZqM8JRj0xM7okU0gYKZ60SqrcOeQ4fmBCD5WTh6miKaZsVba3RtiPFvNJCD5g1mp%2BnO9zatHu4TXTnhhX4Cg%2FiY1GnLyfl6dby%2BEQVyyHv9N11ouSIUHU9dz2DIlOnsGUdRKwKfXhbTm95B1AK1YmvWDkiYMJKe7%2Fr7uvvlCCdVBe%2FUymR12ZQwwTraoznvZYh7Y%2FrL9CxWhXr5vWd7Zik72tFLMukmnZWTkNEh42OojE23SKTw%2BO2d8SIQ%2BZj%2FNooY1eAHIEivNCQ9rhtTA8%2FLAwJL13SUPR8OChz7hj9JhYWdKpVkRUMKikulpPg%2FLx%2Bw2MgIdghEuV9cDSr%2BE4qUS%2B1PwTKlKTgyMA%2FeXrPKlq3GoG%2BAoM9mV3ewveE6Sym6NjM3rvTR%2FD3X7INLKcXlnXM1ejuPzFRYPfCF6w%2FOMYHMssFxsk56GsyoAQQwJE8%2Fnxt1xa7LA9N9K8HUfHeHFq98scimbh7qgwHQjCAPINHfaZOfkffz8ImasNBON08YLuGC%2BTz6ulOs%2FZ0WXZpJcMjMMWLnL4GOqUBYaCJKQS7kS1wZj6JBDhnMPrxTwvPIsOpc8Fdp6plg9NlNDBYwVRL%2FAhtrvdgW1i1NsKgsZMGAibqo%2BiYDDFHHl8WheRTz%2BkpRD1Ar2Nk%2BFqaTx62X%2BtWuuF6ws%2FObZtcwgGvsbNluLtfPvARKmtb%2FPo%2F8%2Fj6t1prJvh%2B4KxiD8YC5hdH6IN2Pnc%2B2suOsUF4DdcBmKpdjpmJKCH2uVSiZVzFolAk&X-Amz-Signature=15be03cac094525d94e0fc22fa3929a95e628bb94eecd2eb482added3a2e5ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
