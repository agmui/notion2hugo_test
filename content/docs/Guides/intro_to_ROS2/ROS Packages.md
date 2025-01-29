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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=e2f52f6e1a337305f8b66e82be536a0157be6384759d6c9ca84a2b908eb3c242&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=9fa301bb9051950b15adeeb8f24dff799f394bdb31d891e86e0bbcb984b46544&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=dc535411b29482b0d8d71d43a61035cc0e7e036df80d0c1df957ad8ae82ff154&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=4a9d10b9c0a53c5ae40a8711215dd031e3dbafdf7b5d94a9bd7b05ffe272d86f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=8af5ee9cc1ceb87d722bc4fde2467c26bac614839fb0d9cfdf79558ac1d4d948&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=17b2f84419f347f149f1957d60f5664f831dc37ae4a5f2767da61a56797a98c8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AVHLH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOSv%2FuBcxJtfrHTn9ae5G5eTCZqmaob346Cd91WTi44AIhAIR4i%2FdQcsSHi%2Fh2zUE9rpp32DVcp07rid3aVTbuSLO2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCl8w2OB9IFNoRg%2Bsq3APCUxBNuKD3MeHKEBbCqZLha6IfYHKGifrSK61g%2BOwKMLYfFx1TNPbgIeF%2FNlCiliiH9T%2FZ%2BVuikb4pU%2FexbW%2F9QbVYWLsCCcGiGqHHAbEpkdWm4OBQhT5WFPS0UMU0mrxphNaGmjpEtfVS0NjJsctOkRLcUhvIT5Eib3ldGttF2ihnRX3BpV2cHtlkr0T1acygEm%2FFAPZOeFb0cDirDZRH1LKyu2eWFuaF52f579CP1UNu47jiP8IwdlW8Zc%2BFdI%2FZX2ChFC0PNu7h7BGxXWeRXO8f90ulvnO2kXnt4%2FY4X6%2BNI%2FOSESHTaiB3TwMK0YDBINbYesgDiORM1RHOUX565mZZy2RCaUdAKqZSjbmZ2zhNAA3jTuEN5pEGDrdLyDmWnytSGmc%2BIaNFGhMmgQqF%2BsG4uYKgM29tf6CE%2FmW6d0rhtcTx7%2Bn2AZ6OL%2Be9R9m4V%2FYaRQJ2%2BXmnLe67d8F5A2p3McPu3ly0NELlVgoUCejjuP%2BCVV%2FUOFYa%2B%2FPyf99Av2wV%2BEWjalA6oCyNa5Or03AhuxIiorq7rbSWKecjJ2CAoG1hVm%2BVjJqiRvAsrEvqPz29tRb8CGVK8p9td%2Bn2YpalsW7OhtDR4aO8V7H1ACoeqg%2B1%2FsiVj4%2FTTDCOhum8BjqkAcDMQt%2FXAODETcKolrDtW6URnGlPcZkXuQc8GUVO2bkhL2W54qojuAbD5foMZ2auu7haoTn7nrwMAJ%2BId1D06DTmmhcSYi1%2FYF3lZNL9ubOivhFtjZ2TUkO0BvhJvR9ijl9bDTamQ1ggbqGbR2NkVubOCPB8p1WxjGx2R6a9uCqcw7Y%2Fb4fQQiZ19TrskEHrw82qkmNrKOWke0GwKI8X05BlSlmq&X-Amz-Signature=3995db4078c09a8b16807ed6beca17eaea01c22466b7c7edddae5296ceb8167d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
