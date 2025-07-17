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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=73670f5af6202bc466f8ac328ad9f000ad1f779ebd6650e955a4f58736606f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=4d3fe782ee397f804afcba6aee612926de6321c85900c6ee6ede6b64bfa078d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=51032d80e675a3f04de917a2b2472c620ca1d8f13028923b2b241ee24633f669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=b01f9e60bf22c9acdb750c53508e79c2f44b225790e412d34e6f6acfc42ec24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=ef76232cc50fe043796b4795a464751f9bee3276ed60f5e926dde71fb338f947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=df2e7d9260d799cf0badd75cbb8a30b5263185203e841fcf8ede2172e1e96bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDNY2CC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHPX3Bq74wK9i5hRn330%2FJDpJ6awaRPm%2FU5D3XT0XdNoAiEA2LHkXNjakXwbS0YMetoDJ97zLx%2FyGPSBVTdzz9DtPl4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNRbHxjZaacBdLWN1SrcA7k%2BB%2FohMmB7287N6aeisWcpKv%2BOZr39bCZltpUJSKMBxkYkyHGBJviMJIRp6G5bVauqGonXtAU41G%2BH1D%2Fcsu2e2q0tWNkFZE9iDUralQgofsb%2BDsZUfFjRSCSEVIe5hLgD1EeoR%2BHbUEbC9JeKI7V2ZZ8oFWiGOUubB4JNUzC74ZjHetXJThcXUylD2I12ZTdVrAU6%2BbOmLpKUvus9Ap3e843WvBi2N63C0M77XDwQcEUqT628xo7avmF08Z94RNQRXJjxgHRoxL6vr8frZyqZ2NX3F6A6a4XTDIKDVFVVC6IEZRKkaHVBRBNRuwRo8Fl6gn5WDe9prrwnclS8zcUk1caJTIyw3Xp9KpZvXIK3IaIizC7WcbubcmDmkBDRJx4w%2Fqke2O%2FUvt6ODcXZCvH3JFLOeWU4vJjn04T3pgsA2eU7XTUquCgnEurv528GBrCK8stEh%2F1rji6F8q1bjnVY%2Fh%2Br4uWp58cHgU2Jzif%2FR2bQnF3NqMaPxX%2Bg%2F0cZK%2B9ZfGH9esxmL9O1RxPyJX2RPCapPgORh3FQRD8HuyWC9lu0Z04bF0qX3YP6j2wrnc0I4RWAAjcXL%2BnhOm5WMzPQkL3Ga%2FKr90USQeeHVWAGqQwQ1qwR35u36uM1MK6N5cMGOqUBvSrBPpXBAaKyEgiaeOlETHLLEQODcR2Dj4%2BW6y6LbQ8Tuf5oVTAuo%2FyUrKele41I1h2Ju%2FF%2Fqz2Dm6jst%2Fn9c5Q66Law8KIEzbNQ0KuQ79Y2vIlWzP3lYdPUb9zuidQXUewPkXs67Z2zya8FxB9H9%2BvD4%2B1JqPA%2BV5qu%2BxQ0jSg0bLpT4xy6h0TdASLXC%2BCyD2zccf77NXsrLbaxbjzxUzm%2FloW%2F&X-Amz-Signature=d59ced471024e8a7f8795d55c3835f2acd2d629e8dffaad66ec467cda9f00fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
