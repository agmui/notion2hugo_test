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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=f0f990ea3c365913354196c06f4ee2ce68ee3ee53c9c550375f64961f05ff78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=5cf6f401677d28d0b4e457af3c9b182aed532fd8651707b6183d86b330e166e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=bcfec3b41df6a3be38d6bfe91453b0c53e5ebfd5b505b7f6ef654b39791bcae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=72ae66027d53f64e3eeeb0055314fae4cc4ea1cc70c659c41ad29217eb4ace5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=24cfd77b60e0824258f35adf0bb921a20631e7c7504572a359f8e9cfb6e427fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=7f50741eae2997b34c288fcf68b9f3b8f8d70376b67976e5a40a1484e88daa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZPGWDO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGouB%2Fwm8YNA0Y1xm8ZW025hFk4QSfantnaTCDPXRjwIgc2M3NS1FI29lQt4HiAqiHtpndh9kxB8nkBhYjUeyP4QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22tKfZqgpYjp7HZircA1LWMa8UPLsF71GY4x2t8FoLimUptkld2cP7OGY1hqYK4oWayTP7CFdRQ6QwMiIcQoqQIi9ZttsY90ognR1K50k7qDYwLC2nj4FVE5k6EQxfB%2BQr86APNYEvJf%2B6J1S8UycXMA8VUHSfSLLeOSjhtTzDwjzmNiMXQy8fwMY9gcjviIynWXHD7r2vge8uoZ%2BJG1dkFiTUPsD%2BUjFj67oIARJ2OGWC%2BlSPhUW5Ee%2ByZvZGPDHAc%2BSAZxozaZJAryB2i%2F8pGyQ1eYorqMrN6GW7K2M7qTFKTw5nzulxOTj9Rv4ytUWVRf5I51iJOmt1%2Byi3nFcyJwqhTW5IDVEKdorXSdfOv6XEpj3MWNOI%2FQXAR9%2FFiTB6eQ78%2Bht8AOw56kBbIE9HIb87cKnN1gw6OrYvhtyv5tXdNB2%2BbtsVGufyRsDTP30VeJB8dgYU%2FRzsmgS0yaACu8X0I058ezpjg%2B74mi0bTRZTEEH%2FDGA5ganlFxEXlDmPXtqczpkghv%2FHhEEZ%2BRqaSZ5vSO0Ybe4kIH4x0aq8mUT4cf7LXynI7jJbBfN5OT5pJjuYRxx9koOMhDM%2Byco5O6TTOU1v9vmOtpzP9EkozV6yk37fAWqOME2sQOv%2FM%2Fwyi9bzwih7pN9%2BMO6gysMGOqUB%2BHi1UYx8rDw3VVzoFwGWyKTTZMQuWzDbNa0zcsnAGFpzClF0vLmT%2F5Sh4%2F0Xzf2OSyqlOoBEet3uyvBCy8lBj7ClxleCry5mgZXVnJl4%2F%2FkJU675siTrfxl9JshjKgL%2BdX9Pbdyr8qmdIlMO3EdddhvjGp2e8wc20Ywa0dqJ3DKIjgBEGPiKYXkfkKCMqPBE7s97z4kIxKhiRMH3W%2BEPMB1gT2%2Fk&X-Amz-Signature=2031e43ed7b221e9531641555a2ae05988dd5351c71b66154b1a68bdd168fe50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
