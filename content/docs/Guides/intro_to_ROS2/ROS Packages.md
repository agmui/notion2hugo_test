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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=38a8f87ce235457fd5035042e2eeca42fb7209ffc02cb2f18022e8acf097dec7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=2536f7c24cd072d2c18c8877148d36dd7bea251a9afee999f0c70297f8ff95f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=f7f75007f399c2bde73620b12ac5c746e9622b118734f425a225f2a03d907838&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=c4466c3b84bdc31f6f180717cb2925f8f6b3a39aee98f2adb0acbb3817bdda17&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=e772c4532fc7b6d76d5161efc0348bfd295ab697d0236f6426b20a30a344d4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=84dc78e0a010b129448ef071b22b3dbbd7436deedd9d1a252fcf1557a7bd7125&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776TJR5H%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDEfEDE6Tqo3i1Oh70WR6QLNUODPiFXn6jT6%2B0pN61IyAiEA5SmrT50TqNfzrx6hejX3fX%2BaykWemn8bnK9lwo1PM8gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD661D1fBU5hdCqypSrcAy0FC%2FuWcyXWJWx%2BCaVyZ1P3%2BoGNBIq10y1cOvMJHsJLI3uBvHEpqkaQRJcU9qR2w2urEprB5UjLTEnXh7w9SaK42gvQucXS66UJJQDxAsZyBgM2bfulCsdGMVoNUICWEJm3jD0wIxpc8O0khECeXSoEl93BsKTXQP4UjtriGsPlXPS8JcDYP95A3rJODS834NJnOM%2FX9FYxN2xEgbOKj42uB7Fdx4XJR%2BG%2BubFWwPBF%2F7UDSOM3tmC9VNdH9Ca%2BtI0NVBZXAsBkGnRCKOtJLk6yoW2QsCNe%2Fwe8lT8R3e3rLopNJT6vWvDXnQxgctj2Kal33R9V1lDD9AWq1VPE4h3oXBS5vhm3Z0Z9h3BEtlMLkSo97SSB3GdIyUgIvfcMZ5UilnzHq7DgZT3np6HnYqFFGn07zuiMtRErRUqpr0pHyk%2FhV8jvAAdZsDkuHWTBw3jDs3HwrK9AbQZTKdxdhtUjOSUenybOm7iK8fBMHk6dWkO%2FTvrzdHCF907Zgj9t0Tzb1PIgFyjKfanKWLAdA5UbeOUKP1YIqdDaljBZ4z1ZFqW0se6sIpbnDzRF4ORfJO1Hjg%2BwrgxS3ISApN%2BmiEtpTzTF4jEmsREdBIRjmNRJugTHz22UWb5cPARuMNPd4r8GOqUBjDQzZrNXEykdUk8TROywNzJvN8nhanjygs1t9BvWjNltqBLi591AgkmBpE3gZCaIHTlJyQmwjzJHUSEYs8zZUSlhGN%2BNihsnpgCV4%2BoNqJdWXIoEfbf9SYNm1to31E3Tz%2Bxvs%2BBHyvVw6y1jMDn%2FQZiH35xW7AqRHunmWqO37ZOnyUDdfW%2B8k6WnycAZeMHkCiSPDRys8TbI0UMg9HiQnvnTilNd&X-Amz-Signature=f9135791e68492bbfdfddf05c7584d5b15e4fc5f36a9b46e89ea0d5fc33873e5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
