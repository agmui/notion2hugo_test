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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=01775fff08cd24048a24b8e4b6c2bff15cb69b392d0f499524bdaaa01a8d0ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=7e97cc1c30ef7f46ddf0274f6f772ee9c9ce70a5fdfce7dce4de0bebecd8d85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=03ae36bed848df410dfb443f91cded172764d1f9aa6aff3785a25c07106aab50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=235c0bc85960d261afe3207a25fe32f4bd27075a30f06e5df4c3086ffac6e587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=477acc8369fa1779c63bd48c5baada402658ae82ac66b0e713e9e82bb22251f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=e2c15ca3d999ea24060ace18a6bdec2f469bb16a3f860bb4a19725f0941e24b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4KZPSD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi8wkLL5wU1JtDO56IcwheKVGT5s2G03XHaT49ZEb%2B8AiEAkodajlvGImgN0w5iZ1Fa0rwO%2BGghdpWO30ng5nh4CsMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtO3bgHILMljunlyrcA01V8unu2FfUOb9xkD2youzpJBmzLIoqO55u6Zqu2ZcMa0OsywiaS6mGzVcDIHFx4oihhPhjzt5us6dDB8WI4l3kN4pl9ZdOMzmkgy0MuGNym9R6hrq%2B2SYldaqn1i4wd0%2F%2FO%2Fu%2BwBUwMfN0uEiQK6Jwu6tZcShXO0Fuf%2F7Hj48GaDNtIfffhMgwPeF9BHTDnPqlACYS9ps09SmHA9hZIYXLu8Keh0SqJXVeyzjSP72xXVwcZA2gcywoR2GTzX5QCYo01mEjHQ1KNE%2BQ6myFFXOn8BtbloSO5l4GkTyO9JZAskmdrwvcfPMBnFh8r1rsKSNGIM64y7EBWlLDwOcbXVStEhuVDdbIz0r6EPku3KtPvtNWM4oZMzJSpmk%2FrULtktIUKsalup0uHqGUbC5eGgWRHc0PjkA6QJwJQbkoJb0CPE372m2Y5yiU8Q%2FwX4wq4i%2B2nOMTQst2YSMJK8sum9xN6oVyfHPrkhx8YyQJtGfEuszWapozxQvN4%2BlGOVsqFZbUTq3OZlZXAEpId5a7CI9rlpCV9%2FgywWS0TBhVZBDNJsnTOw4yXuYZxEXI8cGCPIbwzZYKYanhNgi5lroPCXNXO49GF%2BHXzsA8UPj3ftnXKHxjwuKQ%2FN563JkJMKrvr8QGOqUBvUzSQo788O4Z12DdrLIDX%2FMCrizh1hMVMps9QiyGEy%2B%2F6INNGLl8C1SMQE53LlP7WxoglTnpKCs8qHT4ow4Gv%2BRaDIxD3c3yqQ%2FL%2BQ0NmRO6iHB%2BrLmehPUC1P9G%2Fw5tUBdbNrb63RVtZ8YbONlFBMc4laS6JrKYDb4HlPMgQuJOC6vwUzWSIHaKFcApNOyUz6BOYHIfoGN1gCp7z0q9cXQ8aOzj&X-Amz-Signature=950a4ac43f210e06489e2e6ffd27d3812e905a211a1260c2fe984168bbabed51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
