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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTPJ5DU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD431UPMvFFk%2BuTdKwBTxqkVh92JY9FXdgUaYzKFOh4VAIgUOuuMptv76oQ4eFhSfNuPBbXCt9LVcKs%2F80jtxYzMtoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3JI8bTitokVWIFCrcAyoCmjcvMI%2FSaI2kUJ5R%2BVKIV6Z2HR9m9Xisx3D6NBgONyKkFZAsPA58JBPMoL6dGiyBOQCvUOB051NwmyQsBDwvZYe9uBtNBma09jSyrKZ1S9%2Bama7u30eLi39LuCjxF2IuCro1bF7%2FbmJ%2F9gUUaeoV%2F6SZlgVIdnnScdboslGAw8FNY5GgFyrhW6COy2cXQGd2BbPFDk70%2FUiYloIWvysJiFJ3TVL1%2BXjyigDEhU9cWbTBLL48HTiwaeXiyhI6D8s8jfl%2Fm93mRxxcYrIo5XPIFoESHUU8%2BhS0Wiv0IU5vFpzzUckQjZIPEcEiGoXHETTEtfjopIEnx6cxIIUGd%2FdyF4H9omlhb6wdMx5sO362EHFrVhVZuRSwlipg0vozTt0cPjd5bLXedrS%2FjmFXtZQnPyK3qHu1qmJYv1os8B8dbax9WOPeE81AdcuFBCq6wuOmCKgff0o%2FPWp2sH8ZAtLHqFLyMvWVi%2Bamm6O2FBq2khcYT7fSGilLHIoBJGsae9GF5%2BEbzMWVTPBGpLcq6igX%2F4txvjBaN3YNVeKoLYH08VONdQtxYF4iL8RcrDTBlBLOtNUj2RwTCsE%2B%2Blsd%2BzkIDeY5XsTiF0CIN1CNX11H2AzKM%2F7AnzLdJtG1MJmJ9LwGOqUB56L7Ify0Y56FWhKKWbZ1Dw4qvYMb6kx7ftJKlEgB%2BAyUGn5qD2ok%2FdDKpWJJzxTqf0BAs8Ps5sS3nQViaOXv8ayrFRYxUx0m7cfFFDliULDJ32YwKqXDtsCeYcx3vk%2BzHEOCV62oAgqis%2BMIWIdUTp%2Bmcuv%2FvQYM2mKfiBoGOtY4vOrXc1TeWSpnhRx71p193H9UZq6ZTlr4LDiIL%2BS%2B2l4uwkks&X-Amz-Signature=f301f90bd0e65f85fa1928aac4eb11c3b3ff37173fc3ad6db7d5d939a237ee39&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTPJ5DU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD431UPMvFFk%2BuTdKwBTxqkVh92JY9FXdgUaYzKFOh4VAIgUOuuMptv76oQ4eFhSfNuPBbXCt9LVcKs%2F80jtxYzMtoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH3JI8bTitokVWIFCrcAyoCmjcvMI%2FSaI2kUJ5R%2BVKIV6Z2HR9m9Xisx3D6NBgONyKkFZAsPA58JBPMoL6dGiyBOQCvUOB051NwmyQsBDwvZYe9uBtNBma09jSyrKZ1S9%2Bama7u30eLi39LuCjxF2IuCro1bF7%2FbmJ%2F9gUUaeoV%2F6SZlgVIdnnScdboslGAw8FNY5GgFyrhW6COy2cXQGd2BbPFDk70%2FUiYloIWvysJiFJ3TVL1%2BXjyigDEhU9cWbTBLL48HTiwaeXiyhI6D8s8jfl%2Fm93mRxxcYrIo5XPIFoESHUU8%2BhS0Wiv0IU5vFpzzUckQjZIPEcEiGoXHETTEtfjopIEnx6cxIIUGd%2FdyF4H9omlhb6wdMx5sO362EHFrVhVZuRSwlipg0vozTt0cPjd5bLXedrS%2FjmFXtZQnPyK3qHu1qmJYv1os8B8dbax9WOPeE81AdcuFBCq6wuOmCKgff0o%2FPWp2sH8ZAtLHqFLyMvWVi%2Bamm6O2FBq2khcYT7fSGilLHIoBJGsae9GF5%2BEbzMWVTPBGpLcq6igX%2F4txvjBaN3YNVeKoLYH08VONdQtxYF4iL8RcrDTBlBLOtNUj2RwTCsE%2B%2Blsd%2BzkIDeY5XsTiF0CIN1CNX11H2AzKM%2F7AnzLdJtG1MJmJ9LwGOqUB56L7Ify0Y56FWhKKWbZ1Dw4qvYMb6kx7ftJKlEgB%2BAyUGn5qD2ok%2FdDKpWJJzxTqf0BAs8Ps5sS3nQViaOXv8ayrFRYxUx0m7cfFFDliULDJ32YwKqXDtsCeYcx3vk%2BzHEOCV62oAgqis%2BMIWIdUTp%2Bmcuv%2FvQYM2mKfiBoGOtY4vOrXc1TeWSpnhRx71p193H9UZq6ZTlr4LDiIL%2BS%2B2l4uwkks&X-Amz-Signature=0b29329943ae1ae296b7ffd8708a3c8317c65826ed18911c32f6e0324340f586&X-Amz-SignedHeaders=host&x-id=GetObject)

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
