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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U4N7NRT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCp307pZiN6bBHneO7TVJqKtnwApQSJRPunuM8lj5QDCwIgDXwq0NoS4Xhk1NlNpRTHI1HgyCsMKOwyVo592CYHH8Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG06Tkpd1NUaI2zmvCrcA91%2FFBmGAPIxiMkVjMkYjLvUpkAhwRl966ruGTYwF%2FnsvE1TVIn7okcaQRb2sHqNEjtMRlAX1%2BL5Ghlacb99jLXw8075ijShr5TUS6b%2Beemn%2FWRRt6o7oFub6G7NqceVbov%2Fxa%2Fdt1%2BwJ7DeEbe61utexhmNcWAh8I1jLrzB3doEF22rJRZ4PKxPsJ2hCxtjcoc6wfrMeI%2Bax6ogbageMS%2BGZ6bmt%2BAVfuq3sbKGpOTYswhaP7upQ0mb%2FrPmtxunoNvi%2BRyHV81pd82DbYHfZEmUOSZUYmTM5bI%2FJrpmlwBiNjLe0idbRMRib%2FfZHQJjbdisHH6tAwZUIgezDovy7d%2B5a2UKDDF8rregUhiw%2FKsy3xYI3shF9I672xuDx%2FbRNc90ATXEpqY3GJwHZXt4HC%2Bu9gJ5KAwpwh3Qi91KQu6pa9ojDAWGjs0NvK9Jz7tYw50cvbZc5neLeFQF6yy5zNZ%2FeulIsDfV01%2BBMwiaazZJo5NA68Pt%2FGb8cYCvpSkdixb%2BmBrntuKWgEJ9j0nJctG7HFjK705fEhy9rNHtsD5UZoCnjnH5QV5zOOnhBGSym26k6LAjx9jTKENDMMstQZRgHRXOmEyZ6%2FthKR1rE6JVbjf02Sy0ZsWAQYOKMNaF1MMGOqUBJ7MM8zQFtnvVD7QhuyMciz%2BCYa2UhI8MnMComuGv0LIp296vVwLNxWUvJR0TAnKf%2Bho90teTP9DC8hfc4Y5G8yUEPkApPjLxpTyuKumgOVlIBvcNmsW3yARidJOUNgmUvJ6QtdI9H0vPrQA0TWyVLPnnaaLl1tq9DLxK9LZEtazrb%2BnkoLvaLceXVOXVQHJnWEYxGEJwMAJHkHogxK0m98fhi%2Fqe&X-Amz-Signature=8e31d134e48e88b9001b8e58714ef485fbffdabc72e9c3fce6ac089bc1346087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U4N7NRT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCp307pZiN6bBHneO7TVJqKtnwApQSJRPunuM8lj5QDCwIgDXwq0NoS4Xhk1NlNpRTHI1HgyCsMKOwyVo592CYHH8Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG06Tkpd1NUaI2zmvCrcA91%2FFBmGAPIxiMkVjMkYjLvUpkAhwRl966ruGTYwF%2FnsvE1TVIn7okcaQRb2sHqNEjtMRlAX1%2BL5Ghlacb99jLXw8075ijShr5TUS6b%2Beemn%2FWRRt6o7oFub6G7NqceVbov%2Fxa%2Fdt1%2BwJ7DeEbe61utexhmNcWAh8I1jLrzB3doEF22rJRZ4PKxPsJ2hCxtjcoc6wfrMeI%2Bax6ogbageMS%2BGZ6bmt%2BAVfuq3sbKGpOTYswhaP7upQ0mb%2FrPmtxunoNvi%2BRyHV81pd82DbYHfZEmUOSZUYmTM5bI%2FJrpmlwBiNjLe0idbRMRib%2FfZHQJjbdisHH6tAwZUIgezDovy7d%2B5a2UKDDF8rregUhiw%2FKsy3xYI3shF9I672xuDx%2FbRNc90ATXEpqY3GJwHZXt4HC%2Bu9gJ5KAwpwh3Qi91KQu6pa9ojDAWGjs0NvK9Jz7tYw50cvbZc5neLeFQF6yy5zNZ%2FeulIsDfV01%2BBMwiaazZJo5NA68Pt%2FGb8cYCvpSkdixb%2BmBrntuKWgEJ9j0nJctG7HFjK705fEhy9rNHtsD5UZoCnjnH5QV5zOOnhBGSym26k6LAjx9jTKENDMMstQZRgHRXOmEyZ6%2FthKR1rE6JVbjf02Sy0ZsWAQYOKMNaF1MMGOqUBJ7MM8zQFtnvVD7QhuyMciz%2BCYa2UhI8MnMComuGv0LIp296vVwLNxWUvJR0TAnKf%2Bho90teTP9DC8hfc4Y5G8yUEPkApPjLxpTyuKumgOVlIBvcNmsW3yARidJOUNgmUvJ6QtdI9H0vPrQA0TWyVLPnnaaLl1tq9DLxK9LZEtazrb%2BnkoLvaLceXVOXVQHJnWEYxGEJwMAJHkHogxK0m98fhi%2Fqe&X-Amz-Signature=02e2488c416aa40a81c4c37d83e64410174e79a2da0fcd1caf9d52eee583b57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
