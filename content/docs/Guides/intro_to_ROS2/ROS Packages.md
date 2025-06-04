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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=1d6dec50b788bcf73fc52a2021c2b4d2b82956625098f60eaf436c970b7dba0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=ce086510c0629bf43b7f689a7cfecdf3d22ffbb8b79c21a9efcbc41788b9c1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=e7349deb6de9b2165c543cc5533006cc373a9b4258b24bdb4b1642a45ba3de32&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=dd1fcb73fc4fe153fd27c7e0173792d8f1f03f9065981e969d949cdec619ea71&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=aa5e71c2ba05a8a66f706824acd05b799100efdd1006d8090695e6d400d01fec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=c8186b8268dc62443268571ad1bf0f769088e10fa35b61ce8f9e00c8e89e8aad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KVXHZJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHnR6pChpEwGAgIMUsB%2FvdZR%2Ba%2FzyjtJh3Yd4wh8qpRIAiB3b1UgjPFbfJ4yY4LM9XifPSa1k4GpvFlBOGiaPeSIBSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMITaVFLEcKQVKbTzGKtwDxd28IdJ2SqFa4%2BGOacv7F%2FlJUKQSZTkICxVBzg%2FG%2FPgoRRnXj8snvqR2n36v75Vj1c%2FfMLW5bEchTA7qaXBauIA%2FXG2ROWDyeEBf2NxRd8su2ghSA8Ux67NUzDWlZT9hyUNm6K13KUfPOZ9u3Sh%2BP6NFvP3yKoeaie7HTsZF%2BLNp6e90GKhSknNRLf6FuOViI7e2BMXvLmPU5T%2FDHMDh%2FDviDQAiOqndjWZ2nm0zZJZuDxn0JJymvWPa7fNsZ4e%2FJiHfOncpYwP82Omrja%2FhqLYM%2FNgiojMsE9%2FwsSNDBddI3L%2BXVmJahr%2BZSjT9qep%2BuopTxcfXmWGTmlsYQFoj6kaKKIZqevVUtf9kQF02if6rdKPl9lAy1qb5mdOwYmpMwcghfA03f2QEOpi7bkkvqesDYNkW8NA7%2BauAsASn1na3P2OPZqb9jd7rvy6TvFQU2PlI0OAcBlyEyDQyEf3meEI%2BEZm%2F70OqbyVnryYoBz0BGAk1vC9KNkd30NQwXcuxW3jGjGfGVcFXI2hY78LpXFRxNhYq1EQLI5y%2FhghwhacV7b9AcwQ2GI9LnKD5Yu9vzoYoyjn4iUM%2FRgFNFvhGzunLpVc2R8X0W%2BmMivtkuGF%2Fvu5%2B%2Fty5CSlbOYcwqdWCwgY6pgHDEiMNu8Mre%2Fun6CrMjog%2F%2FLPRW2bCaNZfhP32xGAFksj%2BJDNSyiioN2ay9Ih3NZOklox1MKgxRzvvKvMrMBiaBV%2F4GnVDfTPO6OE8DrM%2BsuAyzNwuJkK%2FgN0ViWQ7KXfr83tBWC%2FxUxJQ7xooj2Jwu4vzIbzf05z4b5BERkJmDI3vvmwM9SzZsaU6yfI%2Fs2jUOBNowBWKzvVXCj2C0c5k0Nka1CK7&X-Amz-Signature=b1986e4614d626611c4e5f6a6e20c65739031435611e05db682ca199643bf43d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
