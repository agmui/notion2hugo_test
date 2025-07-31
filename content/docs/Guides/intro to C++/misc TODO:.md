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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXTOD2K%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrhD2pv0vOtDo8WX7ExvWAch6XQTklCKHPYYSPfUYe7AiAmqWnj2budPEQKjxtKLag5gsZtCpfstiM1c4zzAfLAICqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGBN6QFlDUetXQQPKtwD0RhyxYYb%2FZYRXhDEs1EnXAhC1VNjtUA%2BbTmdAzDrM9o1Nwi669VxCnjXs9%2B6XU7Tl7qj0LB8Rh%2B08I7FYFE9DwgrBJd%2BwYhsvZnIIi8aFfHQJj1V76jd3J%2BnMA48QbVftx0vkIUf1PDSbdZJN12J%2FfePmT7vzALxBMiARA6JE4zJzfVRbR%2FodY7TgDoL9FOduXTmX1MG7IxV09CkXAfysexpPRyk5j6PkRrzVYY4j7vdu2xhFoNZWo4JEZfdpw8Lvnh3oYkC2tAHPCkD1KRDbuOv2x6WZag7jjYDUz3qKnhe46ovDkYJwFobq9c4yPVgEn5L7AOIvNMwnZdWQFweGLy061bKAwUZauysf52D6FFx752aeiQoRRFoPwUDrvZJXhR5PvdZXwfkLH%2BmwquLmXCXyBW%2BHApBe%2Bq%2F0n3oKuoy5l%2BuWymyZ3fuEommiktGInfK%2B3L9z1Qr8f0s9TLCR55uxDBUlr0B1%2BME4jPK2k5%2FhwKLnnNW%2FKj56JCL6LFwJKt%2FOtzwNL8oHP%2FZQ5SGb%2BOw4Q4DiBzpi2Cva9W759v%2FCqL33wYlU45ZZYDSkRYJwh7jp1BdECkgvfU%2BhUUoKMC42CrP9BbfY2%2F%2Fj0G3AS%2F9c2G4gX7uNdwDDtswrPCtxAY6pgGBOY7rS1QAwWtZq1oF9043OCChejhRRhM3rsl1VGyopcqa3vzh0C4EAt8Hr%2BxS0VXAD0WjNsVt42CyhxZdwYfXUabno7HE3Lw331hHM5YCwDANZ6ScqJdk0JpiJ%2FbsQt0Bh5qUCGE2HTzaGvaqF2ZJ1TgHDWtM6Q5rvQEQnMvdRX5CJ%2Fwq8MInDRdhVtQ16C87NLvSVaORJn%2Fivn5n7DPvhHzdZRsc&X-Amz-Signature=2ba14b58eebeb6a477691fc64690619c7a26ddc419249f6743166eb0d84315a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXTOD2K%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrhD2pv0vOtDo8WX7ExvWAch6XQTklCKHPYYSPfUYe7AiAmqWnj2budPEQKjxtKLag5gsZtCpfstiM1c4zzAfLAICqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGBN6QFlDUetXQQPKtwD0RhyxYYb%2FZYRXhDEs1EnXAhC1VNjtUA%2BbTmdAzDrM9o1Nwi669VxCnjXs9%2B6XU7Tl7qj0LB8Rh%2B08I7FYFE9DwgrBJd%2BwYhsvZnIIi8aFfHQJj1V76jd3J%2BnMA48QbVftx0vkIUf1PDSbdZJN12J%2FfePmT7vzALxBMiARA6JE4zJzfVRbR%2FodY7TgDoL9FOduXTmX1MG7IxV09CkXAfysexpPRyk5j6PkRrzVYY4j7vdu2xhFoNZWo4JEZfdpw8Lvnh3oYkC2tAHPCkD1KRDbuOv2x6WZag7jjYDUz3qKnhe46ovDkYJwFobq9c4yPVgEn5L7AOIvNMwnZdWQFweGLy061bKAwUZauysf52D6FFx752aeiQoRRFoPwUDrvZJXhR5PvdZXwfkLH%2BmwquLmXCXyBW%2BHApBe%2Bq%2F0n3oKuoy5l%2BuWymyZ3fuEommiktGInfK%2B3L9z1Qr8f0s9TLCR55uxDBUlr0B1%2BME4jPK2k5%2FhwKLnnNW%2FKj56JCL6LFwJKt%2FOtzwNL8oHP%2FZQ5SGb%2BOw4Q4DiBzpi2Cva9W759v%2FCqL33wYlU45ZZYDSkRYJwh7jp1BdECkgvfU%2BhUUoKMC42CrP9BbfY2%2F%2Fj0G3AS%2F9c2G4gX7uNdwDDtswrPCtxAY6pgGBOY7rS1QAwWtZq1oF9043OCChejhRRhM3rsl1VGyopcqa3vzh0C4EAt8Hr%2BxS0VXAD0WjNsVt42CyhxZdwYfXUabno7HE3Lw331hHM5YCwDANZ6ScqJdk0JpiJ%2FbsQt0Bh5qUCGE2HTzaGvaqF2ZJ1TgHDWtM6Q5rvQEQnMvdRX5CJ%2Fwq8MInDRdhVtQ16C87NLvSVaORJn%2Fivn5n7DPvhHzdZRsc&X-Amz-Signature=e559bb36465b98e459a60789411ddc4672cbdac2ef07e1f8456db46edb57d6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
