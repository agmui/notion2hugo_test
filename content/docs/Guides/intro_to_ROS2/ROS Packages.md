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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=e25f80fa59fd490e94b267c12c77e8d3174a0f156a7d8c4247bfd15fc5199484&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=23e94f80a7c3c06b5783b0af13247b357e7182ccd142a3a90cb58c0ab64485a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=977a334029c771b9a8366be0a52442def5d30ec29c53863773cb8389c24e3e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=026aba6f452f25e9bcda41b43a18682c44a212d78b85beb811e60c04ad4f2c86&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=0c0b3aba3a3b5fffc4b0b8d61acb82fe8dc6a9cf039af6a50f9691d1675d7c47&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=99a7713151667ac6ec1887193f517c6b31a76f8543758e7283c797a155339733&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2OICP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2yZ3jEdelsPX7yMQJxHb9KPIo%2F91%2BWvmbAQ85e2r7dAIgPE54ADuvLeA%2BReWLTPZv%2BCj1fM4NcKHFjqK5IdV%2FTLoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGsg7zZ9Np2llto2QyrcA%2Fw05ieXy6sc0OtjcXDNrU70YE6t6l0q4oxkYIWcHSiTTRYzI0VFFF4SCAt%2BRH%2F4%2Fmkg1S5MpVz9LqamAdIfXH7IRwekmN0VXmVUA1zFsxyquE9QWuINWJg1AtgTr6nCLL8Bh%2BgVtoh0%2B8X%2FUk6mpDYeCOmwKCS26K1dvUH8Bsg9G7WdvPiNWqCuJb2xNE%2FZVFhdaXLVD%2BjikqNIna%2BtNCXB%2FnOOkiEjNr8mBYNwo1ftreOD1IQTe5YxntCPPyXWa6addTbXJZ9vMq7HmTCWzrPlM0d6TKhhbJ8%2FeQr7U5lsjskluMLFQeIXu0kl54wHuwotKuK4oRPUZD%2Fd4DHqrI0ZjkPY8NjC8MMXz3iD8nvZmdqN0zVSaFldv5K0LXfDmDsTWPgqpPSNe1npfhfGSndYypYUKS5jgc6%2Fp7Gve415j5UjsnCESmeZAFt7NISfGZdh2qaFv%2Fr1fDLbBebo6QpbORy%2B%2FIZYNaKLR44tk7qEDrJrIee2ieTSMNEtfpEL%2FGYQbQqp%2FJx6%2BKo%2BbjXWlfN2waNV%2FERKR0835nTw3KBnXIjk1rD71HkA8NSshr53fsY1Ee%2FU5%2FDETvieasDVhB6ONzZtNrCJtQr9BkHY2%2F6JBRNuRf41WAU9JyknMMfji78GOqUBpe4clGLtGG1eRV3JVDikY2f9D%2FeU4DKEjbA7r%2BG6oH0pPgFVAU27n8ZqCxPHcRlxHwL5pn29tNIAZw9h7Ts0WxsdQa99etVtZiSQ%2FFaivEvIRceY1JnLehGu35FuQ8vaC1OogCj2fKom4JDDRGd7KkOMOJLOaHgDqvqTAaQsEhsdQDK0QMHuPx0cWbFhpLFcQRko2GDmQcpvOAj4K70bjX9hQ4nu&X-Amz-Signature=b817f21217648efaf8cb12698d2276b7a46aa0d934430c7ff6f8fcfaabec8ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
