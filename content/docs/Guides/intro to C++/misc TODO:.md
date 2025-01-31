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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7V27NG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBxFJtMEpCxdkO%2BSM%2BfwtGlPDo8rYac1HDN2MTo6ZSOwIhAI%2BKmDgIQKq61nJ5lr%2BA33y2BeZIxmAHz1kzoeZTyqPxKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx788wMyfOQJ7CyPMQq3AM49EfnUFeDHbxgze9i4w2xZvUajH3XzGW6Fwleb7vI2sW9f0%2BJXIgnndbzF6WXYKgpBSVVpJOo4Lp%2Fm7EXTzPw1hV2dTgEQDYZV1T0Qoi%2BOmd3%2BN%2Bl8zSqHkDsp7RQFtOVhkD%2BovfugEtOQ7a%2Fv1wtVk8M6Ry6WMBZ5LgW4y0EKBDyeHmed3cDixIQ914MRfoUt2TZNt7p5csiEotLpE5Czm83Tc9taOxrJYxwdVQxHh0qLj6PE3jBDEF%2BIbskZeqEg7qxHGoAnpb4WDEZruvzEy9dgPjOkvaGvcNi%2Fdf%2FXueSLMIDzQXwYVYG%2B5FaX3VctKQ77E%2FaT15db2Ye8Ks3oSjonHtHf%2BAAbf5CNxRPHaWHXrroKurEFgs4yHt011iXIMnSVgBHnibZPhGIuiAcav7KbQxilYXOKkxsth577OzbfFVzZpfavXXxovW8pqs%2FvgycowNZyHO4rNrCZdEysA69F0JDk7OEHOJeFyOmpB8vO9AVvl%2BAgKcm1JYrICJw8A8B6YnTgJPOGqoZ2viAzGRoVBMZqLfytGrmgh3Yd9meTx%2FP8BjZ%2FwBeXZBLSrXFGiERzq%2BTuV3NhS%2B4LOBGrvC%2BhVCSCs%2BVJJ41QAgs3jEW%2BkR7fTzzjoE2%2BDC9kfO8BjqkAZUIxfmEtti7x1Cpuhoww0JG4O7hQOCZg44h7g%2BA9BdO%2Fpn3yOaMJ1WvGSTqS8Zo37Jj9OkEvrUMiifmo20so32nG1cH2rkGVHXmWTBTe8vSc002mZB700YLvhcKDd86cCym6aY2gnPV86FyxsPbS7PUroXBxY2ot1gnR6qhrVZL27ygqb7IpCDKSPmwKi6ObCIKBUslxeEzw%2FKSxpcb9dPR%2BT0T&X-Amz-Signature=feab603116dd82ffddf8af845799a2eb032b8764260e848c7b67a1caf1ea4254&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7V27NG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBxFJtMEpCxdkO%2BSM%2BfwtGlPDo8rYac1HDN2MTo6ZSOwIhAI%2BKmDgIQKq61nJ5lr%2BA33y2BeZIxmAHz1kzoeZTyqPxKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx788wMyfOQJ7CyPMQq3AM49EfnUFeDHbxgze9i4w2xZvUajH3XzGW6Fwleb7vI2sW9f0%2BJXIgnndbzF6WXYKgpBSVVpJOo4Lp%2Fm7EXTzPw1hV2dTgEQDYZV1T0Qoi%2BOmd3%2BN%2Bl8zSqHkDsp7RQFtOVhkD%2BovfugEtOQ7a%2Fv1wtVk8M6Ry6WMBZ5LgW4y0EKBDyeHmed3cDixIQ914MRfoUt2TZNt7p5csiEotLpE5Czm83Tc9taOxrJYxwdVQxHh0qLj6PE3jBDEF%2BIbskZeqEg7qxHGoAnpb4WDEZruvzEy9dgPjOkvaGvcNi%2Fdf%2FXueSLMIDzQXwYVYG%2B5FaX3VctKQ77E%2FaT15db2Ye8Ks3oSjonHtHf%2BAAbf5CNxRPHaWHXrroKurEFgs4yHt011iXIMnSVgBHnibZPhGIuiAcav7KbQxilYXOKkxsth577OzbfFVzZpfavXXxovW8pqs%2FvgycowNZyHO4rNrCZdEysA69F0JDk7OEHOJeFyOmpB8vO9AVvl%2BAgKcm1JYrICJw8A8B6YnTgJPOGqoZ2viAzGRoVBMZqLfytGrmgh3Yd9meTx%2FP8BjZ%2FwBeXZBLSrXFGiERzq%2BTuV3NhS%2B4LOBGrvC%2BhVCSCs%2BVJJ41QAgs3jEW%2BkR7fTzzjoE2%2BDC9kfO8BjqkAZUIxfmEtti7x1Cpuhoww0JG4O7hQOCZg44h7g%2BA9BdO%2Fpn3yOaMJ1WvGSTqS8Zo37Jj9OkEvrUMiifmo20so32nG1cH2rkGVHXmWTBTe8vSc002mZB700YLvhcKDd86cCym6aY2gnPV86FyxsPbS7PUroXBxY2ot1gnR6qhrVZL27ygqb7IpCDKSPmwKi6ObCIKBUslxeEzw%2FKSxpcb9dPR%2BT0T&X-Amz-Signature=3c4fd6dc23500f8b5459f96997f87e25591a59b3805427093e17766c668ac466&X-Amz-SignedHeaders=host&x-id=GetObject)

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
