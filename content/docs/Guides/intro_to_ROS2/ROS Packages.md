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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=56533dd93c06c06a8097b1bd8661f0e00b442c22ea48ebd541ff3b26abf14775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=ad6cbdebefc6d2e54c1a7f3410cbba7b3eb0fd1cfd1d6e820e335dbc5014d8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=6ffcf6cb1a28f049a5f2d6158d14bc15e8ed1e93499fec2f0908b1beec88731b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=d5f94ddf6b6180b5d305a3be1d98047023dfca077f1dd8df43e282969dab8a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=33a8a37ad1924ae31328e6c0db0ed0024ac5aee6e4c44cf9cfc955ec6af78eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=35408b95b1e7894b22d61768725d197b68e4c0f56f283a40b8ce93d1076c2331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA3LSU3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDwIekXpqXLKUwpfVXLw76eCPDyof%2BXqU6xXJY3CPXAIgSx%2BTdhEjCV73jczyYeHM7Nx8KuW%2FU2fWdYY59jbfGkYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh5uxWR5y9JkYo0wSrcA2QvV8PQ9YQADQYvsmthm%2Ffhyw4cWdZLbxuQ9KGrvT5hgLsXEs3XTUoRg%2FF5kXsWjSefaPYZ5uc9gWaliAggAS5vc6Vzzsbm%2BJt7pbVW8D%2BzU%2BOX7E%2Bem%2FIRr08DvDvjXtdoaXNnDRg1bqR0T6iFKqyjDPpnsETBMPyPeGTpQ12qorgOHpAZSWJOj22WmxufYLQoiCmRGi873P6DGeh2Z0A5sMJzkDIX%2F3vb5AsRvV%2Bh6dX4xQ5Dwxnb3GEPX4cxvqM3jfdmb%2FfvgWUBrSCL2WgRTZlWg4%2BEPhS1LCg%2BQ%2Baq45qfd6Lui31Va%2B7qJZ%2BEYtwdW0c1%2F%2F9rAjYYXR%2BiVM1YK8bU2W2HCYhBwLguWbgo3hDoI3s5w2IneCcSeT3795T246wobBs4rb9nYwmn%2B9VkGhYt5CxzxotLFc1BII4aODF5WOWB%2BZYzVJlmnRX9TuVAUIy%2FhSFyl7zZePf6yKJDj8SU1yG%2FvC4rxbV4%2F1LFufgnoCatMWqCqpF4fnpDI7TTEDtvTDrII7EbulJcg%2Bp%2FPc07BItucgFoHoyRxvm%2B6gYnJyXsss%2FroZAjHsp7nluGMPcgj8ckA7s7H3YBCr3aqkz%2FGPfouXy3NkudkpPEru1fFwe3GEIxOPFYMPe10cIGOqUBguvO4WjBevS%2F68Z1OQUI95OnFVXSC0m1xwF94XG7%2BfbHn3bCYZY7aT2GHtfr%2BXXF1TDsXS2z7A2t3f%2Fgq9AewWbKzABo0qYWLbldqAYKoU52zGp4DoUkB5iLENluRA3z4VUX3DmvaD%2BNF%2FT8GX94D3fdDdzEkvyQYVmeFTTkz%2BZ1zKROZLdZwJNyEMdJe8HkGohLP0EgWZ%2Fd1uD%2FFPhMdxhrvylx&X-Amz-Signature=ac4efd5e6c9981e6cf0c4379c69d088830b6c00d9f93117ccbe18b7bdce9723c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
