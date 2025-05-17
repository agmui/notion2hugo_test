---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRW3IBV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fu5Ox9%2BCGfiitAp9w%2BA4bIgQ9hjWLKUixeOHjQxp6AiBTqher8pF5x1SO8FafCq68L8uaOwoiKQw4Tq7qLpJVByr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM4FhpoAvdqc9CoAzcKtwDcBI4E2Sg0EbsowiOp103O1skl2gNbVfx5eG%2FCIPSliswLPgzlnUczWVcWYadK81pfz4R%2Ff%2FWfcson7PQs3ykg%2B%2FdIhbHrVP07iOSnN8i2vHkNmL6sbB7kMWzlnO6M8HgDzYADnSlyMZBYAWMqe%2FQKT9i3gXhGtUietkXainlrsv12AQDyCDswqCZEyVLId1YtovJ3%2B%2FEnsq%2BNAG38RevBEq1gUdilN6EIcN1YWbiXLlfRkpDV04bkqi40l7mTRoNTvOx752pfUNqoyba%2BJTtF7w1Wot%2BCDCtGKJMUjCnmVAFcvso0%2BUXwCBcCh1DkMnHdb0D6tzdJEaxgeIqJ%2FBqAgsxh0c1SYTHqMXJiGS3hkhvuSn%2FXQjFC1X7n4DeoybDVRVbTO3gGMjMkJatTWr7Kgbt9HbokQzi1Y2OhvL03g4XnFM4kWk0N8NT2oyq9AQuhXAiR3pz1Q6E3GKCbrRUKPr%2FD0xFz58ZKzOVSjkw4%2BCreIB%2BbuTfryi%2Fi6sIXudwXy1NH91p2ZWppfwNJUbzBx3mq4NCpBsHQoNWGIs9afeOA3C5uLkGqRcCGq%2Bimrq%2BQ0dVGsq06wMCuzpi34egtwqml0IX6lNaX1RJPjbzujoFeMHiaP2GpI4urWwwuLyhwQY6pgGBZuhztwhTJ6xgZ%2BbIOPWkp7Z12AAaCSANlSoi2cLFxpUAeIxbfOtQ3MeH2WpxAk6LvXSqYrT8wcc%2FRoRJ%2FLhk6KMYEpPZEtZOTsa5JHzz4uhsS0IR67S061wXSrtZmjXn5a23iCrETQPVHBQa%2BRWTz9Jz0vBfCysphU3iNGWntn28Wh7wvTvosZIub9IhBz18pe30f6yf52WreSRxje%2F3cLTy0BeH&X-Amz-Signature=7c68288146f13fcf8a8f130177da7c297195f37615aedc7300754ff611f42e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRW3IBV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHm%2Fu5Ox9%2BCGfiitAp9w%2BA4bIgQ9hjWLKUixeOHjQxp6AiBTqher8pF5x1SO8FafCq68L8uaOwoiKQw4Tq7qLpJVByr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM4FhpoAvdqc9CoAzcKtwDcBI4E2Sg0EbsowiOp103O1skl2gNbVfx5eG%2FCIPSliswLPgzlnUczWVcWYadK81pfz4R%2Ff%2FWfcson7PQs3ykg%2B%2FdIhbHrVP07iOSnN8i2vHkNmL6sbB7kMWzlnO6M8HgDzYADnSlyMZBYAWMqe%2FQKT9i3gXhGtUietkXainlrsv12AQDyCDswqCZEyVLId1YtovJ3%2B%2FEnsq%2BNAG38RevBEq1gUdilN6EIcN1YWbiXLlfRkpDV04bkqi40l7mTRoNTvOx752pfUNqoyba%2BJTtF7w1Wot%2BCDCtGKJMUjCnmVAFcvso0%2BUXwCBcCh1DkMnHdb0D6tzdJEaxgeIqJ%2FBqAgsxh0c1SYTHqMXJiGS3hkhvuSn%2FXQjFC1X7n4DeoybDVRVbTO3gGMjMkJatTWr7Kgbt9HbokQzi1Y2OhvL03g4XnFM4kWk0N8NT2oyq9AQuhXAiR3pz1Q6E3GKCbrRUKPr%2FD0xFz58ZKzOVSjkw4%2BCreIB%2BbuTfryi%2Fi6sIXudwXy1NH91p2ZWppfwNJUbzBx3mq4NCpBsHQoNWGIs9afeOA3C5uLkGqRcCGq%2Bimrq%2BQ0dVGsq06wMCuzpi34egtwqml0IX6lNaX1RJPjbzujoFeMHiaP2GpI4urWwwuLyhwQY6pgGBZuhztwhTJ6xgZ%2BbIOPWkp7Z12AAaCSANlSoi2cLFxpUAeIxbfOtQ3MeH2WpxAk6LvXSqYrT8wcc%2FRoRJ%2FLhk6KMYEpPZEtZOTsa5JHzz4uhsS0IR67S061wXSrtZmjXn5a23iCrETQPVHBQa%2BRWTz9Jz0vBfCysphU3iNGWntn28Wh7wvTvosZIub9IhBz18pe30f6yf52WreSRxje%2F3cLTy0BeH&X-Amz-Signature=69a2bdfc98c7492ccb82fc159e2a595e5724aaf96adb9e11185b14591d34ce95&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
