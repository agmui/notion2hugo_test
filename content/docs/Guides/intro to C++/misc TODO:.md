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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN74BJS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbHy76g4PxrAa7TktMB7y%2BcR9DHUeeRg40gm5jFqa1NgIhANJbNjqyxho9%2FV5HNwDZv6lzaUD9oRA6A%2BczbwH3OiRGKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fgq96ij%2FUpqOKAwkq3AP9RdCQSTdzWRiAFH2DU%2FKnMDg1y5OZRVBXfnbJF%2B31Q4I%2FMNnb6%2BpHHOVxECs3ODnLe%2BI9jLh7rPhCARvKpgQi8rHsVfpPvLOkMoiWD%2BmUBilmr5dHCkhaF9kXaWpMPX%2Fbse8dRKXHZiWkmyKTSTYjrPFSIpxB9WzrrF8TjN9setrRgVFdH%2FDMCuV%2BfA25g8cVzoaQU%2BM6%2BQULYQAGZThACQjJ8DAkP4oG1gfgKsu9YQQU8wV24HtDFiJbWb4Lk0hhCGBiLrm%2Bp6iGv7jEuKy0FlQySVBfw%2FLJvpdVJud0K8%2FFKFxlCmoI878X1SoQdSkmphYzMOVhbSwIGfPfR2VYXkdDg90sbqfXVmMv7Iianf6ftUqgDaeDCSZd6Df5WPj8%2B2ZHh3ERilHrX3abNpO7YPk8j6Jm30Xo%2BRqFs4qDOMgmExG2K4fZ3Nj%2BVTAyTiR2gtr9JFUYXfAzBfQO%2FR7H0%2FGMCdwTLmWDLW%2BFF%2B8%2BVHEwUepM4y7GB6LYULRhK5LfpmVvSB6h5e0CcZAawGHrOE7EFsER7ljAADXHVEVO%2Bc6%2B6JVUIfOx8S%2BKOJhFhZdI5iZwdo6tpqFSinoDvhW16GRwlW%2BJ4mzGk6%2F%2FYLwu1YZIpCN0B39Hn3U%2BdjDQg7bDBjqkAY9Huq3%2ByDD4m%2BslxVQE2tCtHrpXhbREoovbXDHKu9RoaArhTyXamrCVx7m6w29QYjrWqPEOwa7PrtNpWs1rG0CAYfLk3WMSUYqbwTSjlsNHw0%2FHwnuNPrJOvbU8KmplLH7jFINKkyVMWdDu1UT7mRaqfE9gzcVU2%2B%2Fqc0eeInWdxUPzh8dAbpvjqwXOxmSb0z55%2FbaDVAuDNdKZXzeQ430N9wsf&X-Amz-Signature=10bde16063e92e231aaa5d19191a7ea66a6e7f4e56c60c8eec183a9be5c1b7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN74BJS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbHy76g4PxrAa7TktMB7y%2BcR9DHUeeRg40gm5jFqa1NgIhANJbNjqyxho9%2FV5HNwDZv6lzaUD9oRA6A%2BczbwH3OiRGKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fgq96ij%2FUpqOKAwkq3AP9RdCQSTdzWRiAFH2DU%2FKnMDg1y5OZRVBXfnbJF%2B31Q4I%2FMNnb6%2BpHHOVxECs3ODnLe%2BI9jLh7rPhCARvKpgQi8rHsVfpPvLOkMoiWD%2BmUBilmr5dHCkhaF9kXaWpMPX%2Fbse8dRKXHZiWkmyKTSTYjrPFSIpxB9WzrrF8TjN9setrRgVFdH%2FDMCuV%2BfA25g8cVzoaQU%2BM6%2BQULYQAGZThACQjJ8DAkP4oG1gfgKsu9YQQU8wV24HtDFiJbWb4Lk0hhCGBiLrm%2Bp6iGv7jEuKy0FlQySVBfw%2FLJvpdVJud0K8%2FFKFxlCmoI878X1SoQdSkmphYzMOVhbSwIGfPfR2VYXkdDg90sbqfXVmMv7Iianf6ftUqgDaeDCSZd6Df5WPj8%2B2ZHh3ERilHrX3abNpO7YPk8j6Jm30Xo%2BRqFs4qDOMgmExG2K4fZ3Nj%2BVTAyTiR2gtr9JFUYXfAzBfQO%2FR7H0%2FGMCdwTLmWDLW%2BFF%2B8%2BVHEwUepM4y7GB6LYULRhK5LfpmVvSB6h5e0CcZAawGHrOE7EFsER7ljAADXHVEVO%2Bc6%2B6JVUIfOx8S%2BKOJhFhZdI5iZwdo6tpqFSinoDvhW16GRwlW%2BJ4mzGk6%2F%2FYLwu1YZIpCN0B39Hn3U%2BdjDQg7bDBjqkAY9Huq3%2ByDD4m%2BslxVQE2tCtHrpXhbREoovbXDHKu9RoaArhTyXamrCVx7m6w29QYjrWqPEOwa7PrtNpWs1rG0CAYfLk3WMSUYqbwTSjlsNHw0%2FHwnuNPrJOvbU8KmplLH7jFINKkyVMWdDu1UT7mRaqfE9gzcVU2%2B%2Fqc0eeInWdxUPzh8dAbpvjqwXOxmSb0z55%2FbaDVAuDNdKZXzeQ430N9wsf&X-Amz-Signature=b96a229eb2cec6bda1dfb443707978500bb60308ba76cdcdd3c1206793db09b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
