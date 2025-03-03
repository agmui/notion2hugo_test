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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=fac483faa67717eb1fc2108dd19b7fc5dc6d9655052aa4c3564c5fad38959e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=87fe231339eb3153da7997921e32c94df4fc1f03d87887abd232823715400e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=d79c0b26d099087883448f00b98cc34176f120b3a026037627e81b79aa4010b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=783d938576ae93527987f08ab061decaffc4e32e18f9bfc25d148d8a5a0b8ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=b00340c2cab61b4b61ee9374cefef36b2459fbccf2bfec16fc681a0a8dfc8efb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=1ae65a35839e22204ab96b3f20dc45ffcf25fd8b42e01544e457038146497fea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OQHFR5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcxiYyF5QQNLaU9IBtYtBqroQoMFsjRUoVUpqf3CRWqAiEA6%2B7LJng7rEZqJLxnWcZSs%2FpyXxt%2BhTmOC6a36P0ANr0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbhm9YYOfHFIoPgJircAzFrkAeK0exStlpdo37A10r%2FIagng1XSn%2FUFpffeisBDcaOAtHwfB%2B4iLTVJn%2FApx0D3%2FCoX0zQwPWOtQ2sNe5mXMyYSg5YVR0XiSVko1kamdFg3yT%2BOc6i2Oa3yGUfyHjd7jETaZpzfMgdML5Ncy%2F1edt0DdjzYgJCv55EcsHzsGubo4OsS1nBMq%2BsI6nXQ5MQpSfG%2B%2FzXC38ntps%2Bofs3Y59EuaN7kFA2GtkzbQq9dCZcdBacNH0vi0Op%2FW7E26L0K5fLEQ2L%2BuIsU7M9oeupUV%2FC0TFis7kFXrg6eaPFJn8F7wsr3emcyOamUde6TfQa4Xf1ePVHm7Q2dcnNz9aVTFfqTP8kRX9vn99Yl8iNGJ1ucoCnq9FZBnXVPUtNQ%2F6y3Wyrwoj6SiUASaMjPQSEGKVAcZYfwVXsEdGc0sxIo5UURAH8vbJ2lxO9ynInbxCnTqkV%2BZzWlxwPqVpjkRTPA%2BllPucUDIAqfLSSvJMS5L%2BuIUa8zAKgMU4QSlTLNN0oFZbZVFAlPbuO%2B%2B%2BS5%2FLIJYlx1OOJyUUGYmf%2B1wgIn0zWOobbXIwVZhCSN%2B9Lebjl3Dbx4q%2FtTjjlUt1LaL2X8QaYmikRDyjR10YV%2FzpvmR%2B0oeFDiPy6yf5tTMJzbl74GOqUBdMwnb2b733OTIrfXlkuQwhAMXuVAjAmamJUYzr81ZgUaVYZjJme6CuHm7hQgMUXqW5pU1tqIWwJb3S458cT5i%2F5qcPV0JFUbbw%2B8gTnkKvIiskGV7ZknG29fS0VSGlnuyp2to0c2CknKfA%2FURKVF8sxrs2miVUOGVBq1Ne%2FzFAxLbubLDnv4HhF%2BFRAl5bslvjKV9dl4sB8af4NcqSPLd23m1GXP&X-Amz-Signature=0550f2d9a962929d9b71e6ffb3636f43ae2d5b43a284db2db1b0e7d0bcb8f28d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
