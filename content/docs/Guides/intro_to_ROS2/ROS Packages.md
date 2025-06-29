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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=d711de93fa07563d552a00d9e9235dc6f11e00de83820fe6dea24dbf162437f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=4b01432f6ea93eaeee5347ce02f37abc89d5fc5a413eb5f58679c23d3bb34375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=f7aa5af9fb73ca8dbad699c005da7e7305ae6b3cad8cfd8afb1aeb073e8194de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=4f365dbf81f09a0bce3f5c131304e089fb9f567c18c72c18b72816e8a2bc236c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=e4b3557490ec563548478a0e769541c866e5b451d54a029dfce8e19c4d24361a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=d7952208a7c2dbd9469c6ae732328f379fb3d2df1fe95001f9bcb597378b1512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2EV2NS%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XNQFKd%2Fe2AQ552flYTddLVoj%2FdJiTrFbFqT7W1UQ7AIgdgllmMEVUa3BngJSu3GWXUT5nVsH%2BJro%2BfxT4pc8%2FR0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKjwO29UvIdQaAHCrcAyCXcZLOFIMIXneBd3ttPbUxS0K7P7rlh%2FrpjH5tNJseJXJMAztWVZqG1LpGLD2jD%2Bi%2BKUw7MERZOakRGV7w8RAV4IMnaF4o86f9p97Vbksve3unmSrRcGWl2%2BrhqmUYBRaAdgApBKc%2FicvxIw1diTGNwvwNtge8KYFm2uF%2FQ2GnJl8SYm%2BKDZ0lgn4U5OzhULuwCkRnjQcO%2B2HZo2v6jYSoG1DVw1cx1U45H5sX06Cttr6O6W%2Bq1H1%2FBgk454ibkvihbYLvnbciTInSaQEVQC7U6YqOzeh76c6x%2FZkvEynJLVO7MSAxDNEMwveQ2TjPmR%2FVkmjOwb%2F1jiL2Mb6xZsju%2Bt3Mf1ryNfP5wBTvnYUBV1jcWT%2BH7qdpwKNFdrGlT20E%2FCxOHlpfqLpJMHV9K8qqBkjJ5T3tmiuQk1zSeNwdSKoHwVhbBRAQOw40jupQq%2Bs2Q%2B%2FZs4NxV5Tb6yTRxxmwdz2ZDMAs1Y3EU7JoonNlRBdZIt9iqymklsH13yb2iZqkAVTu9cJL%2FXwAW8ANY%2Fl57EhqcM1CtjVPdicW2PgiljH8oLE9uvMAxwoveBjrlwNa1Njr3yDSry%2BgD6ModjY2YyZw0alIC6iEXt70hjjbxhOfMR4LB8pkqYs1MPOZgsMGOqUBApdxCvcZv%2FdYrdiuasSTUnK6B6W5L4OeNpM0CeWhZOkisgMI2DCB%2BdPJ30ww3ZFJWbhhg10pmIne9kr5PApeAyc2ZIJay9xdlU6HhEyDm1Yf67wFZIoaOdnSWLx3inyVkkWT87Q8T0nvaVUgzS5Vggk6dgrSLZBIAF9B3fEqyR66VNWkH2kovfdYmsnIa9%2FLhYn1yLIQnf041nLsIIRJY0ijm4Ru&X-Amz-Signature=e5d0be8ef9b685ba14f7800554115435184a4aa35029c3641df767da305fa421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
