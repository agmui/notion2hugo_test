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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ILO3VRB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCE2gwcCgLmNlWZPDy4UwGGaOMTP3qmu0nsDdqOY%2BOyyAIgXB05BXnNBWhDXUy0HbxGT5VH72dUzo3UOY%2BzVw7BNJIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7yKy1haXYvJu6obyrcA3AtbfiD7Xucitu0XKOv9jQ3pHr1bcaPkBhOcstaE5Fq97rXGqpkjoaD0AWnykYCb5CmDHqRyOLAhhSBBAjx574eIa0cSlQoINu6waULHp0r1nH068q59sc3ofm8kdVuAveq59RM1TaXYW%2B0pd9Sm6IDKDn1Y8WbeZ%2FQkufLnIvVw1WrDG3XNEtMdDuN21Vcbk7s5sqOP%2FSN591asRiUKD04bC4CNDSOZOB6BzBKdNrhtzpyhsy2AYtXoAtEr7N3tHi%2Bh%2Bs%2Fq3ll8cXeBpT9dWnu76YDKkfMxjuxNhYPKnZNB2QXE3kxIBftL4Oa9qlIrb0a6fOjjB%2FhZdOqmmcBAxV%2B1wo7lVHRPGidIpetbYYyive%2B5RzC44nYj3gNS2hObdtS%2BOHOS0UJM022AZUM9YZLmbVmpI3rf6yquuaw%2BnJpMQEvDzlPnf3%2F%2BNq6dWQAL9bKyaHsKXQKhZxb%2BadBlfuJIBdNKdVNWM2SEPJ508bK7dGgth4OD%2BgELy7DlrcXuLl8pXG77E%2BFyhFMKLplveFCrhn86B5Ca2aGrUzh0KMzteGVb5tfTMofSdv9uP%2FbYpqU5BV0TNp8f7ul6YL5dr5eZH5EWpKM%2Bu%2FudJ%2BrFsuB5WIiFHvYH42NvNedMMXe38IGOqUBHcItfNqOS46oKuPWK7ZiboMADq6%2BNCEE9gK9CAiUKa1bX%2B2iVBNIct1gaaiM5INmj%2F40Ax%2FILGmy7Kt5MrPBO6f0u2HHdQLMdJSnXa%2FKDspYbvJoyim5lnBLSExP3nfFwSbxB2dsbcDe9sqcgKZiU54TIoQNvmIyljemgUqjP1O1HbZ6tvoHVc0j%2FN%2FHvznfZz%2FB3O%2BnyIpMElKVR%2Fz0fh%2Bv3dfY&X-Amz-Signature=5931e408eb9ff5b9f11617153ec70c51b445f8c74477fe103c40d48e06867135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ILO3VRB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCE2gwcCgLmNlWZPDy4UwGGaOMTP3qmu0nsDdqOY%2BOyyAIgXB05BXnNBWhDXUy0HbxGT5VH72dUzo3UOY%2BzVw7BNJIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7yKy1haXYvJu6obyrcA3AtbfiD7Xucitu0XKOv9jQ3pHr1bcaPkBhOcstaE5Fq97rXGqpkjoaD0AWnykYCb5CmDHqRyOLAhhSBBAjx574eIa0cSlQoINu6waULHp0r1nH068q59sc3ofm8kdVuAveq59RM1TaXYW%2B0pd9Sm6IDKDn1Y8WbeZ%2FQkufLnIvVw1WrDG3XNEtMdDuN21Vcbk7s5sqOP%2FSN591asRiUKD04bC4CNDSOZOB6BzBKdNrhtzpyhsy2AYtXoAtEr7N3tHi%2Bh%2Bs%2Fq3ll8cXeBpT9dWnu76YDKkfMxjuxNhYPKnZNB2QXE3kxIBftL4Oa9qlIrb0a6fOjjB%2FhZdOqmmcBAxV%2B1wo7lVHRPGidIpetbYYyive%2B5RzC44nYj3gNS2hObdtS%2BOHOS0UJM022AZUM9YZLmbVmpI3rf6yquuaw%2BnJpMQEvDzlPnf3%2F%2BNq6dWQAL9bKyaHsKXQKhZxb%2BadBlfuJIBdNKdVNWM2SEPJ508bK7dGgth4OD%2BgELy7DlrcXuLl8pXG77E%2BFyhFMKLplveFCrhn86B5Ca2aGrUzh0KMzteGVb5tfTMofSdv9uP%2FbYpqU5BV0TNp8f7ul6YL5dr5eZH5EWpKM%2Bu%2FudJ%2BrFsuB5WIiFHvYH42NvNedMMXe38IGOqUBHcItfNqOS46oKuPWK7ZiboMADq6%2BNCEE9gK9CAiUKa1bX%2B2iVBNIct1gaaiM5INmj%2F40Ax%2FILGmy7Kt5MrPBO6f0u2HHdQLMdJSnXa%2FKDspYbvJoyim5lnBLSExP3nfFwSbxB2dsbcDe9sqcgKZiU54TIoQNvmIyljemgUqjP1O1HbZ6tvoHVc0j%2FN%2FHvznfZz%2FB3O%2BnyIpMElKVR%2Fz0fh%2Bv3dfY&X-Amz-Signature=6d50e9515fd9a0b6a09b1649c79c6ece3badc08a51c1570e0292fe6f1202bbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
